# SPELP - South Platte Early Learning Programs

A website for South Platte Early Learning Programs, serving preschool and childcare services to children in Deuel County, Keith County, and the surrounding area.

## Features

- **Responsive Design**: Mobile-friendly layout with Tailwind CSS
- **Home Page** with sections for:
  - Program overview and mission
  - Staff biographies (Jennifer Blochowitz & Kelsey Marquez)
  - Services (Preschool and Childcare programs)
  - Contact information (email and Facebook)
- **Events Page**: Embedded Google Calendar with upcoming events and activities

## Development

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Visit http://localhost:3000

### Build for Production

```bash
npm run build
```

### Generate Static Site

```bash
npm run generate
```

## Deployment

This site is optimized for deployment on Vercel:

1. Connect your repository to Vercel
2. Deploy automatically on push to main branch

## Project Structure

```
├── pages/           # Nuxt.js pages (auto-routing)
│   ├── index.vue    # Home page (about, teachers, services, contact)
│   └── events.vue   # Events calendar page
├── components/      # Vue components
│   └── AboutTile.vue
├── assets/
│   ├── css/         # Global styles
│   ├── logo/        # Site logo and hero images
│   ├── teachers/    # Staff photos
│   └── centers/     # Program photos
├── public/          # Static assets
└── nuxt.config.ts   # Nuxt configuration
```

## Technology Stack

- **Framework**: Nuxt 4
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Language**: TypeScript/Vue 3
