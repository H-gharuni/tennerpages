# Tenner Pages Website

A professional marketing website for Tenner Pages - offering professional websites for just £10 per page per month.

## Features

- 🚀 Built with Next.js 16 and TypeScript
- 💅 Styled with Tailwind CSS
- 📧 Functional contact form with email notifications
- 📱 Fully responsive design
- 🎨 Modern, professional UI with dark blue color scheme
- ⚡ Optimized for performance and SEO
- 🔒 SSL-ready

## Pages

- **Home** (`/`) - Hero section, features, and main value proposition
- **The Offer** (`/offer`) - Detailed pricing and FAQ
- **Our Process** (`/process`) - 4-step process explanation
- **Showcase** (`/showcase`) - Portfolio of completed websites
- **Contact** (`/contact`) - Contact form with email functionality
- **£10 Trial Offer** (`/trial-offer`) - Special trial offer page

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Resend API key (for email functionality)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd tennerpages-site
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```

4. Add your Resend API key to `.env.local`:
```
RESEND_API_KEY=your_resend_api_key_here
```

### Getting a Resend API Key

1. Sign up for a free account at [https://resend.com](https://resend.com)
2. Go to API Keys section
3. Create a new API key
4. Copy the key to your `.env.local` file

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment on Vercel

### Quick Deploy

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [Vercel](https://vercel.com) and sign up/login

3. Click "New Project" and import your GitHub repository

4. Configure environment variables:
   - Add `RESEND_API_KEY` with your Resend API key

5. Click "Deploy"

Your website will be live in minutes!

### Custom Domain Setup

1. In your Vercel project dashboard, go to "Settings" → "Domains"
2. Add your custom domain (tennerpages.com)
3. Follow Vercel's instructions to update your DNS settings
4. Wait for DNS propagation (usually 24-48 hours)

### Environment Variables on Vercel

Add the following environment variable in Vercel:

- **RESEND_API_KEY**: Your Resend API key

To add environment variables:
1. Go to your project in Vercel
2. Navigate to Settings → Environment Variables
3. Add the variable name and value
4. Select the environment (Production, Preview, Development)
5. Click "Save"

## Email Configuration

### Setting Up Email Delivery

The contact form uses Resend to send emails. By default, Resend requires domain verification to send emails from your domain.

**For Testing (Development):**
- Resend provides a test email address: `onboarding@resend.dev`
- This works out of the box for testing

**For Production:**
1. Verify your domain in Resend dashboard
2. Add DNS records as instructed by Resend
3. Update the `from` field in `app/api/contact/route.ts`:
   ```typescript
   from: 'Tenner Pages <noreply@tennerpages.com>',
   ```

## Project Structure

```
tennerpages-site/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── contact/
│   │   ├── page.tsx              # Contact page
│   │   └── layout.tsx            # Contact metadata
│   ├── offer/
│   │   ├── page.tsx              # Offer page
│   │   └── layout.tsx            # Offer metadata
│   ├── process/
│   │   ├── page.tsx              # Process page
│   │   └── layout.tsx            # Process metadata
│   ├── showcase/
│   │   ├── page.tsx              # Showcase page
│   │   └── layout.tsx            # Showcase metadata
│   ├── trial-offer/
│   │   ├── page.tsx              # Trial offer page
│   │   └── layout.tsx            # Trial offer metadata
│   ├── layout.tsx                # Root layout with Navbar & Footer
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Global styles
├── components/
│   ├── Navbar.tsx                # Navigation component
│   └── Footer.tsx                # Footer component
├── public/                       # Static assets
├── .env.example                  # Environment variables template
├── .gitignore                    # Git ignore file
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies
├── tailwind.config.ts            # Tailwind configuration
└── tsconfig.json                 # TypeScript configuration
```

## Customization

### Colors

The website uses a dark blue color scheme. To customize colors, edit `tailwind.config.ts` or update the Tailwind classes in components.

Main color: `blue-900` (#1e3a8a)

### Content

Update page content by editing the respective page files in the `app/` directory.

### Contact Email

To change where contact form submissions are sent, update the `to` field in `app/api/contact/route.ts`:

```typescript
to: ['your-email@example.com'],
```

## Performance Optimization

The website is already optimized for performance with:
- Next.js 16 App Router for optimal loading
- Tailwind CSS for minimal CSS bundle size
- Optimized images (add `next/image` for image optimization)
- SEO metadata on all pages

## SEO

Each page includes custom metadata for better SEO:
- Unique titles and descriptions
- Relevant keywords
- Open Graph tags (can be extended)

To enhance SEO further:
1. Add a sitemap.xml
2. Add robots.txt
3. Implement structured data (JSON-LD)
4. Add Open Graph images

## Support

For issues or questions:
- Email: info@tennerpages.com
- GitHub Issues: Create an issue in the repository

## License

Private - All rights reserved by Tenner Pages (Unique Tech Solution)

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Email:** Resend
- **Deployment:** Vercel
- **Font:** Inter (Google Fonts)

---

Built with ❤️ by Tenner Pages
