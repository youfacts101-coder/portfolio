# Maxim Petrov - Portfolio

A modern, minimalist portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🎨 Features

- **Modern Design**: Premium minimalism with dark theme and high-quality typography (Inter/Geist)
- **Smooth Animations**: Framer Motion for elegant transitions and interactions
- **Responsive Design**: Mobile-first approach with tailored experiences for all screen sizes
- **SEO Optimized**: Built-in metadata, Open Graph tags, and structured data
- **Static Export**: Ready for deployment to GitHub Pages
- **Accessibility**: WCAG compliant components and semantic HTML
- **Performance**: Optimized for fast loading and smooth interactions

## 🛠️ Tech Stack

### Framework & Language
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **React 19** - Latest React features

### Styling & Effects
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Glassmorphism** - Premium UI effects with backdrop blur

### Deployment
- **Static Export** - Optimized for GitHub Pages
- **Output Export** - `next.config.ts` configured for static builds

## 📁 Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with metadata and fonts
│   ├── page.tsx            # Home page with all sections
│   ├── globals.css         # Global styles and typography
│   └── favicon.ico         # Site favicon
├── components/
│   ├── Header.tsx          # Navigation header with scroll effects
│   ├── Hero.tsx            # Hero section with animated background
│   ├── About.tsx           # About section with skills grid
│   ├── Projects.tsx        # Projects showcase section
│   ├── ProjectCard.tsx     # Glassmorphic project card component
│   └── Contact.tsx         # Contact section with social links
├── lib/                    # Utility functions (optional)
├── public/                 # Static assets
├── next.config.ts          # Next.js configuration with static export
├── tailwind.config.ts      # Tailwind CSS configuration
├── postcss.config.mjs      # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/maksimpet557-dev/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build & Export

Build for static export (GitHub Pages):
```bash
npm run build
```

The static site will be generated in the `out/` directory.

## 📋 Sections & Content

### Hero Section
- Minimalist introduction: "Maxim Petrov — Fullstack Developer & AI Creator"
- Call-to-action buttons for projects and contact
- Animated gradient background elements
- Scroll indicator

### About Section
- Professional bio and experience summary
- Statistics card with key metrics
- Skills grid organized by category:
  - Frontend: Next.js, React, TypeScript, Tailwind CSS
  - Backend: Node.js, Express, PostgreSQL, MongoDB
  - Tools & AI: AI Tools, Crypto API, Web3, Framer Motion
  - Other: Git, Docker, AWS, GitHub Actions

### Projects Section
- Glassmorphic project cards with hover effects
- Featured projects:
  1. **YouTube Automation Tool** - AI-powered YouTube management
  2. **Crypto Dashboard** - Real-time crypto market tracking
  3. **AI Content Generator** - Multi-platform content generation
- Links to GitHub repositories and live demos

### Contact Section
- Three contact methods:
  - GitHub: https://github.com/maksimpet557-dev
  - Telegram: https://t.me/maksimshtrih
  - Email: hello@maximpetrov.dev
- Social footers with quick links

## 🎨 Customization

### Theme Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  background: "#0a0a0a",
  foreground: "#ffffff",
  accent: "#3b82f6", // Change this to your brand color
  muted: "#4b5563",
}
```

### Personal Information
Update information in the following files:
- **Header**: Navigation links in `components/Header.tsx`
- **Hero**: Title and description in `components/Hero.tsx`
- **About**: Bio and skills in `components/About.tsx`
- **Projects**: Add/edit projects in `components/Projects.tsx`
- **Contact**: Social links in `components/Contact.tsx`
- **Layout**: Metadata in `app/layout.tsx`

### Fonts
The project uses Inter and Geist fonts from Google Fonts. Configure in:
- `app/layout.tsx` - Font imports and configuration

## 🌐 Deployment

### GitHub Pages
1. Build the project:
```bash
npm run build
```

2. Deploy the `out/` directory to GitHub Pages:
```bash
# Using gh-pages package (optional)
npm install --save-dev gh-pages
```

3. Configure your repository settings to deploy from the `out/` folder

### Vercel (Alternative)
```bash
vercel
```

### Other Static Hosts
The `out/` directory can be deployed to:
- Netlify
- Firebase Hosting
- AWS S3
- Any static hosting service

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for icon buttons
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Focus indicators for interactive elements

## 📈 Performance Optimizations

- Next.js static export for fast loading
- Optimized images and assets
- CSS minification and tree-shaking
- JavaScript code splitting
- Lazy loading for components

## 🔧 Development Commands

```bash
# Run development server
npm run dev

# Build for production (static export)
npm run build

# Start production server (if not using static export)
npm start

# Run ESLint
npm run lint
```

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and use it as a template for your own portfolio!

## 📧 Support

For questions or issues, please reach out:
- GitHub: https://github.com/maksimpet557-dev
- Telegram: https://t.me/maksimshtrih

---

**Built with ❤️ by Maxim Petrov**
