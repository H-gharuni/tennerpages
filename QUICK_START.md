# Quick Start Guide - Tenner Pages Website

Get your website running locally in 5 minutes!

## Prerequisites Check

Make sure you have these installed:
- [ ] Node.js (version 18 or higher) - [Download here](https://nodejs.org/)
- [ ] Git - [Download here](https://git-scm.com/)
- [ ] A code editor (VS Code recommended) - [Download here](https://code.visualstudio.com/)

Check versions:
```bash
node --version    # Should be 18.0.0 or higher
npm --version     # Should be 9.0.0 or higher
git --version     # Any recent version is fine
```

## Step 1: Navigate to Project

Open your terminal/command prompt and navigate to the project:

```bash
cd c:\xampp\htdocs\tennerpages\tennerpages-site
```

## Step 2: Install Dependencies

Install all required packages (this takes 1-2 minutes):

```bash
npm install
```

You should see a success message when done.

## Step 3: Set Up Environment Variables

Create a local environment file:

```bash
# On Windows (Command Prompt):
copy .env.example .env.local

# On Windows (PowerShell):
copy .env.example .env.local

# On Mac/Linux:
cp .env.example .env.local
```

For now, you can use a dummy API key to test the site:

Open `.env.local` in your code editor and add:
```
RESEND_API_KEY=re_dummy_key_for_testing
```

**Note:** The contact form won't actually send emails with this dummy key, but everything else will work. See [DEPLOYMENT.md](DEPLOYMENT.md) for getting a real API key.

## Step 4: Run the Development Server

Start the local development server:

```bash
npm run dev
```

You should see:
```
  ▲ Next.js 16.x.x
  - Local:        http://localhost:3000
  - ready in Xs
```

## Step 5: View Your Website

Open your web browser and go to:
```
http://localhost:3000
```

You should see the Tenner Pages homepage!

## Testing All Pages

Click through these pages to make sure everything works:

- [Homepage](http://localhost:3000/)
- [The Offer](http://localhost:3000/offer)
- [Our Process](http://localhost:3000/process)
- [Showcase](http://localhost:3000/showcase)
- [Contact](http://localhost:3000/contact)
- [£10 Trial Offer](http://localhost:3000/trial-offer)

## Making Changes

The website will automatically reload when you make changes!

Try this:
1. Open `app/page.tsx` in your code editor
2. Find the hero headline
3. Change any text
4. Save the file
5. Watch your browser automatically update!

## Common Issues & Solutions

### Issue: "npm not found" or "node not found"
**Solution:** Install Node.js from https://nodejs.org/

### Issue: Port 3000 is already in use
**Solution:** Either:
- Stop the other application using port 3000, or
- Run on a different port: `npm run dev -- -p 3001`

### Issue: "Cannot find module" errors
**Solution:** Delete node_modules and reinstall:
```bash
rm -rf node_modules
npm install
```

### Issue: Changes not showing in browser
**Solution:**
- Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
- Or restart the dev server: Stop it (Ctrl+C) and run `npm run dev` again

## Project Structure Quick Reference

```
├── app/                    # All pages and routes
│   ├── page.tsx           # Homepage
│   ├── offer/             # The Offer page
│   ├── process/           # Our Process page
│   ├── showcase/          # Showcase page
│   ├── contact/           # Contact page
│   ├── trial-offer/       # £10 Trial page
│   └── api/contact/       # Contact form API
├── components/            # Reusable components
│   ├── Navbar.tsx        # Navigation
│   └── Footer.tsx        # Footer
└── public/               # Static files (images, etc.)
```

## Next Steps

### For Local Development
- Edit pages in `app/` folder
- Add images to `public/` folder
- Customize colors in Tailwind classes

### For Deployment
See [DEPLOYMENT.md](DEPLOYMENT.md) for complete deployment guide to Vercel.

### For Email Setup
1. Sign up at [Resend.com](https://resend.com)
2. Get API key
3. Update `.env.local` with real key
4. Test contact form

## Need Help?

- **Full Documentation:** See [README.md](README.md)
- **Deployment Guide:** See [DEPLOYMENT.md](DEPLOYMENT.md)
- **Project Overview:** See [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)

## Stop the Development Server

When you're done working:
1. Go to your terminal
2. Press `Ctrl + C`
3. Type `Y` if asked to confirm

## Restart Later

To work on the project again:
```bash
cd c:\xampp\htdocs\tennerpages\tennerpages-site
npm run dev
```

That's it! Your website should be running smoothly now. 🚀

---

Happy coding! If you have questions, check the documentation files or email info@tennerpages.com
