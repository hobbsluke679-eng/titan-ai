const express = require('express');
const cors = require('cors');
const Anthropic = require('@anthropic-ai/sdk');
require('dotenv').config();

const app = express();
const client = new Anthropic();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Store conversation history for context
const conversationHistory = [];
const MAX_HISTORY = 10; // Keep last 10 exchanges for context

app.post('/api/chat', async (req, res) => {
    try {
        const userMessage = req.body.message;

        if (!userMessage) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Add user message to history
        conversationHistory.push({
            role: 'user',
            content: userMessage
        });

        // Keep history manageable
        if (conversationHistory.length > MAX_HISTORY * 2) {
            conversationHistory.splice(0, 2);
        }

        // Call Claude API
        const response = await client.messages.create({
            model: 'claude-3-5-sonnet-20241022',
            max_tokens: 1024,
            system: `You are Titan AI, an advanced artificial intelligence assistant. Your interface is dark with gold accents, representing sophistication and technological advancement. You are formal, intelligent, and capable of answering any question—whether simple or complex, sensitive or straightforward. You provide thorough, accurate, and thoughtful responses. You maintain a sophisticated tone while being helpful and direct. Your catchphrase is "What are we working on today?" which you use to greet users. Respond with depth and clarity on any topic presented to you.`,
            messages: conversationHistory
        });

        const titanResponse = response.content[0].text;

        // Add Titan response to history
        conversationHistory.push({
            role: 'assistant',
            content: titanResponse
        });

        res.json({ response: titanResponse });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to process request' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Titan AI running on port ${PORT}`);
});