#!/bin/bash

# Streetman Flames - Folder Structure Setup Script
# Run this from your project root directory

echo "🔥 Setting up Streetman Flames folder structure..."

# Create main directories
mkdir -p components/layout
mkdir -p components/sections
mkdir -p components/ui
mkdir -p components/menu
mkdir -p lib
mkdir -p data
mkdir -p types
mkdir -p public/images/hero
mkdir -p public/images/menu
mkdir -p public/images/icons
mkdir -p app/api/contact
mkdir -p app/api/order

echo "📁 Creating placeholder files..."

# Components - Layout
touch components/layout/header.tsx
touch components/layout/navigation.tsx
touch components/layout/mobile-menu.tsx
touch components/layout/footer.tsx

# Components - Sections
touch components/sections/hero-section.tsx
touch components/sections/popular-dishes.tsx
touch components/sections/about-us.tsx
touch components/sections/menu-section.tsx
touch components/sections/order-flow.tsx
touch components/sections/testimonials.tsx

# Components - UI
touch components/ui/button.tsx
touch components/ui/card.tsx
touch components/ui/input.tsx
touch components/ui/badge.tsx

# Components - Menu
touch components/menu/menu-card.tsx
touch components/menu/category-tabs.tsx
touch components/menu/price-display.tsx

# Lib
touch lib/utils.ts
touch lib/constants.ts

# Data
touch data/menu-items.ts
touch data/testimonials.ts

# Types
touch types/index.ts

# API Routes
touch app/api/contact/route.ts
touch app/api/order/route.ts

echo "✅ Folder structure created successfully!"
echo ""
echo "📂 Directory structure:"
echo "├── app/"
echo "│   ├── api/"
echo "│   │   ├── contact/"
echo "│   │   └── order/"
echo "├── components/"
echo "│   ├── layout/"
echo "│   ├── sections/"
echo "│   ├── ui/"
echo "│   └── menu/"
echo "├── lib/"
echo "├── data/"
echo "├── types/"
echo "└── public/images/"
echo "    ├── hero/"
echo "    ├── menu/"
echo "    └── icons/"
echo ""
echo "🔥 Ready to build Streetman Flames!"
