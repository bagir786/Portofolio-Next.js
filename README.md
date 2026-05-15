# Muhamad Hafiudin Bagir - Software Engineer Portfolio

A premium, high-performance portfolio built with **Next.js 15 (App Router)**, **Tailwind CSS 4**, and **Framer Motion**. Designed with a "GitHub-inspired" aesthetic, featuring smooth animations, a dynamic starfield background, and a clean, borderless UI.

## 🚀 Technologies

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & Custom SVG Monograms
- **Font**: Geist Sans & Mono

## ✨ Key Features

- **Performance First**: Optimized with Next.js Image component and minimal bundle size.
- **Dynamic Content**: All project and skill data is centralized in `src/data/portfolio.ts` for easy maintenance.
- **Modern UI**: Dark mode by default with subtle glows and a custom starfield background.
- **SEO Ready**: Configured metadata for better search engine visibility.
- **Responsive**: Fully optimized for mobile, tablet, and desktop viewports.

## 📁 Project Structure

```text
src/
├── app/            # Next.js App Router (Layouts & Pages)
├── components/     # Reusable UI components
│   ├── sections/   # Hero, Skills, Projects, Contact
│   └── shared/     # Header, Footer, Icons, Starfield
├── data/           # Centralized portfolio data
└── lib/            # Utility functions
```

## 🛠️ Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 📝 Important Note for Images

To ensure projects display correctly, place your project screenshots in the `public/images/` directory. The filenames should match those defined in `src/data/portfolio.ts`.

---

Developed with excellence by **Muhamad Hafiudin Bagir**.
