# SPELP - South Platte Early Learning Programs

A static website built with Nuxt.js showcasing preschool and childcare services.

## Features

- **Static Generation**: Fast loading static website
- **Contact Form**: Serverless contact form with email notifications
- **Responsive Design**: Mobile-friendly layout with Tailwind CSS
- **Public Pages**:
  - Home page with program overview
  - Teachers page with staff biographies
  - Centers page with service details
  - Events page with Google Calendar integration

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

## Contact Form Setup

To enable the contact form email functionality, set these environment variables:

```bash
# SMTP Configuration (recommended)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=no-reply@spelp.org

# Email Recipients
CONTACT_EMAIL_1=admin1@spelp.org
CONTACT_EMAIL_2=admin2@spelp.org
```

## Deployment

This site is optimized for deployment on Vercel:

1. Connect your repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## Project Structure

```
├── pages/           # Nuxt.js pages (auto-routing)
├── components/      # Vue components
├── server/api/      # Serverless API routes
├── assets/css/      # Global styles
├── public/          # Static assets
└── nuxt.config.ts   # Nuxt configuration
```

## Technology Stack

- **Framework**: Nuxt 3
- **Styling**: Tailwind CSS
- **Email**: Nodemailer
- **Deployment**: Vercel
- **Language**: TypeScript/Vue 3
