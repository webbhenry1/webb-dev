#!/bin/bash

# Exit on error
set -e

echo "🚀 Building and deploying your site to GitHub Pages..."

# Go to the React project directory
cd portfolio-site

# Install dependencies if needed
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🏗️ Building the React app..."
npm run build

# Copy CNAME file to build dir if it doesn't exist
if [ ! -f build/CNAME ] && [ -f ../CNAME ]; then
  echo "📄 Copying CNAME file to build directory..."
  cp ../CNAME build/
fi

# Go back to root
cd ..

# Copy build files to root
echo "📂 Copying build files to root directory..."
cp -r portfolio-site/build/* .

echo "✅ Done! Files are ready to be committed and pushed."
echo "Run: git add . && git commit -m \"Deploy website\" && git push" 