#!/bin/bash

# Pull the latest code
git pull origin master

# Install dependencies
npm install

# Build the client
npm run build

# Restart the server (assuming you're using PM2 or similar)
pm2 restart all
