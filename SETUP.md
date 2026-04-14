# Portfolio Project - Setup Guide

## ✅ Project Created Successfully!

Your modern portfolio website is ready at: `d:\github\`

## 📦 Next Steps

### 1. Install Dependencies

```powershell
cd d:\github
npm install
```

This will install:
- ✨ **Framer Motion** - For smooth animations
- 🎨 **Tailwind CSS 4** - For styling  
- **Next.js 14** - The React framework
- **TypeScript** - For type safety

### 2. Run Development Server

```powershell
npm run dev
```

Then open: **http://localhost:3000**

### 3. Build for Production

```powershell
npm run build
```

The static site will be exported to the `out/` folder.

## 📋 What's Included

### Pages & Sections
✅ **Header** - Fixed navigation with scroll effects
✅ **Hero** - Minimalist intro with animations
✅ **About** - Skills, experience, and stats
✅ **Projects** - Glassmorphic project cards
✅ **Contact** - Social links and CTAs

### Features
✅ Dark theme (Premium minimalism)
✅ Smooth animations (Framer Motion)
✅ Responsive design (Mobile to desktop)
✅ SEO optimized (Metadata included)
✅ Static export ready (GitHub Pages compatible)
✅ TypeScript & Clean code
✅ WCAG accessible

## 🎨 Customization

### Update Your Info
1. **Hero Title**: `components/Hero.tsx` (Line ~50)
2. **About Bio**: `components/About.tsx` (Line ~60)
3. **Projects**: `components/Projects.tsx` (Line ~15)
4. **Contact Links**: `components/Contact.tsx` (Line ~20)
5. **Site Metadata**: `app/layout.tsx` (Line ~8-30)

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  accent: "#3b82f6", // Change blue to your brand color
}
```

## 🌐 Deployment

### Option 1: GitHub Pages
```bash
npm run build
# Upload contents of 'out/' folder to GitHub Pages
```

### Option 2: Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Option 3: Netlify
Connect your GitHub repo to Netlify and it will auto-deploy!

## 📊 File Structure

```
d:\github\
├── app/
│   ├── layout.tsx       ← Site metadata & fonts
│   ├── page.tsx         ← Main page
│   └── globals.css      ← Dark theme styles
├── components/
│   ├── Header.tsx       ← Navigation
│   ├── Hero.tsx         ← Intro section
│   ├── About.tsx        ← Skills & experience
│   ├── Projects.tsx     ← Projects grid
│   ├── ProjectCard.tsx  ← Card component
│   └── Contact.tsx      ← Contact section
├── next.config.ts       ← Static export config
├── tailwind.config.ts   ← Theme colors
└── package.json         ← Dependencies
```

## 🚀 Quick Start Checklist

- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Update hero title with your name
- [ ] Add your projects
- [ ] Update contact links
- [ ] Customize colors (optional)
- [ ] Build & deploy!

## 💡 Tips

1. **Local Testing**: `npm run dev` then edit files - they auto-reload
2. **Production Build**: `npm run build` generates optimized static files
3. **Mobile Check**: Test on mobile by using DevTools
4. **Animations**: Adjust Framer Motion durations in components
5. **Images**: Add project images to `public/` folder

## 🆘 Common Issues

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Module not found errors?**
```bash
rm node_modules package-lock.json
npm install
```

**Build fails?**
```bash
npm run lint  # Check for errors
npm run build -- --debug  # See detailed output
```

---

**Ready?** Run `npm install && npm run dev` and start building! 🎉
