# 3D Portfolio Website

A stunning, enterprise-grade portfolio website featuring interactive 3D elements, built with Next.js 15, React Three Fiber, and Tailwind CSS.

## Features

- **Interactive 3D Backgrounds**: Explore rotating geometric shapes with React Three Fiber
- **Modern Design**: Minimalist, clean aesthetic with dark mode and blue accents
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Mission-Driven**: Showcasing a commitment to making technology accessible globally
- **Complete Sections**:
  - Landing page with 3D hero
  - Mission statement and vision
  - Career journey timeline with resume download
  - Projects showcase
  - Skills & technologies visualization
  - Blog/Thoughts section
  - Contact form with validation

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-3d
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                  # Next.js app router pages
│   ├── page.tsx         # Landing page
│   ├── mission/         # Mission page
│   ├── career/          # Career journey
│   ├── projects/        # Projects showcase
│   ├── skills/          # Skills visualization
│   ├── blog/            # Blog section
│   └── contact/         # Contact form
├── components/
│   ├── 3d/              # 3D components
│   ├── ui/              # UI components
│   └── sections/        # Page sections
├── lib/                 # Utility functions
└── types/               # TypeScript types
```

## Customization

### Update Personal Information

1. **Navigation GitHub Link**: Edit `src/components/ui/Navigation.tsx`
2. **Hero Content**: Edit `src/app/page.tsx`
3. **Mission Statement**: Edit `src/app/mission/page.tsx`
4. **Career Timeline**: Edit `src/app/career/page.tsx`
5. **Projects**: Edit `src/app/projects/page.tsx`
6. **Skills**: Edit `src/app/skills/page.tsx`
7. **Contact Info**: Edit `src/app/contact/page.tsx`

### Add Your Resume

Place your resume PDF in `public/assets/resume.pdf`

### Colors

Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  background: '#0a0a0a',
  foreground: '#ffffff',
  primary: {
    DEFAULT: '#3b82f6',
    light: '#60a5fa',
    dark: '#2563eb',
  },
}
```

## Build for Production

```bash
npm run build
npm start

```

## Deployment

This project is configured for GitHub Pages deployment:

```bash
npm run build
```

The site will automatically deploy via GitHub Actions on push to main.

### Other Deployment Options:
- **Vercel** (Recommended): `vercel deploy`
- **Netlify**: Connect your repository
- **AWS / GCP / Azure**: Build and deploy the `.next` folder

## License

MIT License - feel free to use this for your own portfolio!

## Contact

For questions or collaboration, reach out through the contact form on the website.

---

Built with passion to democratize technology and empower developers worldwide.
