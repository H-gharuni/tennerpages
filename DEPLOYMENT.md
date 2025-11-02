# Deployment Guide for Tenner Pages Website

This guide will walk you through deploying your Tenner Pages website to Vercel with GitHub.

## Prerequisites

Before you begin, make sure you have:
- [x] A GitHub account
- [x] A Vercel account (sign up at https://vercel.com)
- [x] A Resend account with API key (sign up at https://resend.com)
- [x] Git installed on your computer

## Step 1: Set Up Resend Email Service

1. Go to [https://resend.com](https://resend.com) and create a free account
2. Once logged in, navigate to **API Keys** in the dashboard
3. Click **Create API Key**
4. Give it a name like "Tenner Pages Production"
5. Copy the API key - you'll need this later (keep it secure!)

## Step 2: Push Code to GitHub

Open your terminal/command prompt and navigate to the project directory:

```bash
cd c:\xampp\htdocs\tennerpages\tennerpages-site
```

Initialize Git (if not already done) and push to GitHub:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Tenner Pages website"

# Create main branch
git branch -M main

# Add your GitHub repository as remote
# Replace YOUR-USERNAME and YOUR-REPO with your actual GitHub username and repository name
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git

# Push to GitHub
git push -u origin main
```

**Note:** If you don't have a GitHub repository yet:
1. Go to [https://github.com/new](https://github.com/new)
2. Create a new repository called "tennerpages-website" (or any name you prefer)
3. Keep it private if you want
4. Don't initialize with README, .gitignore, or license (we already have these)
5. Copy the repository URL and use it in the commands above

## Step 3: Deploy to Vercel

### Connect Your GitHub Repository

1. Go to [https://vercel.com](https://vercel.com) and sign in
2. Click on **Add New...** → **Project**
3. Click **Continue with GitHub** (if not already connected)
4. Find and select your "tennerpages-website" repository
5. Click **Import**

### Configure Your Project

On the project configuration screen:

1. **Framework Preset:** Next.js (should be auto-detected)
2. **Root Directory:** Leave as `./`
3. **Build Command:** Leave as default (`next build`)
4. **Output Directory:** Leave as default (`.next`)

### Add Environment Variables

This is crucial for the contact form to work!

1. Expand the **Environment Variables** section
2. Add the following variable:
   - **Name:** `RESEND_API_KEY`
   - **Value:** Your Resend API key from Step 1
3. Make sure it's available for all environments (Production, Preview, Development)

### Deploy

1. Click **Deploy** button
2. Wait 2-3 minutes for the build to complete
3. Once done, you'll see a success screen with your deployment URL!

## Step 4: Test Your Website

1. Click on the deployment URL (e.g., `https://your-project.vercel.app`)
2. Test all pages:
   - Home page
   - The Offer
   - Our Process
   - Showcase
   - Contact (submit a test form to verify email works)
   - £10 Trial Offer

3. Test the contact form by filling it out and submitting
4. Check your email (the one you set in `app/api/contact/route.ts`) for the form submission

## Step 5: Connect Your Custom Domain

### Add Domain to Vercel

1. In your Vercel project dashboard, go to **Settings** → **Domains**
2. Enter your domain: `tennerpages.com`
3. Click **Add**

### Configure DNS Settings

Vercel will provide you with DNS records. You need to add these to your domain provider (where you bought tennerpages.com):

**Option A: Using Nameservers (Recommended)**
1. Copy the Vercel nameservers provided
2. Go to your domain registrar
3. Update the nameservers to point to Vercel's nameservers

**Option B: Using A and CNAME Records**
1. Add an A record pointing to Vercel's IP
2. Add a CNAME record for www subdomain

### Add www Subdomain

1. Also add `www.tennerpages.com` in the same Domains section
2. Vercel will automatically redirect www to non-www (or vice versa, your choice)

### Wait for DNS Propagation

- DNS changes can take 24-48 hours to propagate worldwide
- You can check status at [https://www.whatsmydns.net](https://www.whatsmydns.net)
- Vercel will show a green checkmark when the domain is properly connected

## Step 6: Set Up Production Email

Currently, emails are sent from `onboarding@resend.dev`. To send from your own domain:

### Verify Your Domain in Resend

1. Go to your Resend dashboard
2. Navigate to **Domains**
3. Click **Add Domain**
4. Enter `tennerpages.com`
5. Resend will provide DNS records (SPF, DKIM, etc.)

### Add DNS Records

Go to your domain registrar and add the DNS records provided by Resend:
- TXT record for SPF
- CNAME records for DKIM
- Any other records Resend specifies

### Update Email Sender

Once your domain is verified in Resend:

1. Open `app/api/contact/route.ts` in your code
2. Update the `from` field:
   ```typescript
   from: 'Tenner Pages <noreply@tennerpages.com>',
   ```
3. Commit and push the changes:
   ```bash
   git add .
   git commit -m "Update email sender to custom domain"
   git push
   ```
4. Vercel will automatically redeploy with the changes

## Step 7: Ongoing Maintenance

### Making Updates

Whenever you want to update the website:

```bash
# Make your changes to the code
# Then commit and push

git add .
git commit -m "Description of your changes"
git push
```

Vercel will automatically detect the changes and redeploy your site!

### Monitoring

- Check Vercel dashboard for deployment logs
- Monitor Resend dashboard for email delivery stats
- Set up analytics (optional) - Vercel Analytics is free for personal projects

### Backups

- Your code is backed up on GitHub
- Vercel keeps deployment history
- Consider backing up environment variables separately in a secure location

## Troubleshooting

### Contact Form Not Working

1. Check that `RESEND_API_KEY` is set in Vercel Environment Variables
2. Verify the API key is valid in your Resend dashboard
3. Check Resend dashboard for any error logs
4. Look at Vercel function logs for any errors

### Domain Not Working

1. Verify DNS records are correctly configured
2. Wait up to 48 hours for DNS propagation
3. Use [https://www.whatsmydns.net](https://www.whatsmydns.net) to check DNS status
4. Contact your domain registrar if issues persist

### Build Failures

1. Check Vercel deployment logs for specific error messages
2. Verify all dependencies are in package.json
3. Make sure there are no TypeScript errors locally
4. Try running `npm run build` locally to catch issues early

## Support Resources

- **Vercel Documentation:** https://vercel.com/docs
- **Next.js Documentation:** https://nextjs.org/docs
- **Resend Documentation:** https://resend.com/docs

## Checklist Before Going Live

- [ ] All pages load correctly
- [ ] Contact form works and sends emails
- [ ] Mobile responsive design looks good
- [ ] All links work properly
- [ ] Custom domain is connected
- [ ] Production email domain is verified
- [ ] SSL certificate is active (Vercel handles this automatically)
- [ ] Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices
- [ ] Update any placeholder content if needed

---

Congratulations! Your Tenner Pages website is now live! 🎉
