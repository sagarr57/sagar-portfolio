# Sagar Mamindla Portfolio

A modern portfolio website built with Next.js and Three.js, featuring a space-themed background and smooth animations.

## Features

- Space-themed background with moving stars and molecules
- Modern, responsive design
- Smooth animations using Framer Motion
- Interactive skill tabs with icons
- Experience cards with company logos
- Clean and organized code structure

## Tech Stack

- Next.js 13+ (App Router)
- React Three Fiber
- Three.js
- Framer Motion
- Styled Components
- TypeScript

## Project Structure

```
app/
  ├── components/
  │   ├── header.tsx
  │   ├── background.tsx
  │   ├── experience.tsx
  │   └── skills.tsx
  ├── styles/
  ├── assets/
  │   └── logos/
  ├── globals.css
  ├── layout.tsx
  └── page.tsx
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Adding Company Logos

1. Create a `public/logos` directory if it doesn't exist
2. Add your company logos in PNG format with names matching the experience data:
   - newrelic.png
   - xrg.png
   - manac.png

## Customization

- Modify the theme colors in `app/layout.tsx`
- Update personal information in `app/page.tsx`
- Add or modify experience in `app/components/experience.tsx`
- Update skills in `app/components/skills.tsx`

## License

MIT
