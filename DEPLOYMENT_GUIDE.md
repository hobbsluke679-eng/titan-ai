# Titan AI - Deployment Guide

## What You Have

A complete chatbot application with:
- **Frontend**: Dark/gold luxury interface (HTML/CSS/JavaScript)
- **Backend**: Node.js + Express server
- **AI Brain**: Claude API (answers any question)

## Quick Deploy (5 minutes)

### Option 1: Deploy to Vercel (Easiest)

1. **Create a GitHub account** (free at github.com)
2. **Create a new repository** and upload these files
3. **Go to vercel.com** → Sign in with GitHub → Import your repo
4. **Add Environment Variable**:
   - Go to Settings → Environment Variables
   - Name: `ANTHROPIC_API_KEY`
   - Value: Get from https://console.anthropic.com/
5. **Deploy** → Get your live URL

### Option 2: Deploy to Netlify

1. **Upload files to GitHub** (same as above)
2. **Go to netlify.com** → Connect your GitHub repo
3. **Set build command**: `npm install && node server.js`
4. **Add environment variables** in Site Settings
5. **Deploy**

### Option 3: Run Locally (for testing)

1. **Install Node.js** from nodejs.org
2. **Create folder "titan-ai"** and put all files inside
3. **Open Terminal/Command Prompt** in that folder
4. **Run these commands**:
   ```
   npm install
   ```
5. **Create .env file** with:
   ```
   ANTHROPIC_API_KEY=your_key_here
   PORT=3000
   ```
6. **Start the server**:
   ```
   npm start
   ```
7. **Open http://localhost:3000** in your browser

## Getting Your API Key

1. Go to https://console.anthropic.com/
2. Click "Create API Key"
3. Copy the key
4. Paste it in your .env file or Vercel/Netlify settings

## Features

✅ Dark mode + gold luxury interface
✅ Answers ANY question (complex, sensitive, anything)
✅ Conversation memory (remembers context)
✅ Real-time responses
✅ Mobile-friendly
✅ Professional design

## Troubleshooting

**"API Key not found"** → Make sure your .env file has ANTHROPIC_API_KEY set

**"Connection refused"** → Backend not running, check terminal for errors

**"Blank responses"** → API quota exceeded, wait a bit or check your API key

## Share Your Bot

Once deployed, share the Vercel/Netlify URL with anyone!
They can open it and chat with Titan AI instantly.

## Customize

Want to change:
- **Colors**: Edit the CSS in index.html
- **Personality**: Change the system prompt in server.js
- **Max response length**: Change `max_tokens: 1024` in server.js

Enjoy! 🤖✨