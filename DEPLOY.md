# Deploying your portfolio

Two easy options: Netlify or Vercel. Both are free for personal sites.

---

## Option A: Netlify (recommended)

### First time

1. Push this folder to a GitHub repository.
   (GitHub Desktop is the easiest way if you are not familiar with git.)

2. Go to [netlify.com](https://netlify.com) and sign up with your GitHub account.

3. Click **Add new site > Import an existing project** and choose your repository.

4. Netlify will detect that this is an Astro project automatically.
   The settings should be:
   - Build command: `npm run build`
   - Publish directory: `dist`

5. Click **Deploy site**. Your site will be live at a Netlify URL within a minute.

### Connecting a custom domain

1. In your Netlify site dashboard, go to **Domain management > Add custom domain**.
2. Type your domain (e.g. `yourname.com`) and click **Verify**.
3. Follow the instructions to update your DNS records with your domain registrar
   (wherever you bought the domain, e.g. Namecheap, GoDaddy, Google Domains).
4. The change typically takes 5–30 minutes to propagate.
5. Netlify adds a free SSL certificate automatically once DNS is verified.

---

## Option B: Vercel

1. Push this folder to a GitHub repository.

2. Go to [vercel.com](https://vercel.com) and sign up with your GitHub account.

3. Click **Add New > Project**, import your repository.

4. Vercel detects Astro automatically. No extra config needed.

5. Click **Deploy**. Done.

### Connecting a custom domain on Vercel

1. In your project dashboard, go to **Settings > Domains**.
2. Add your domain and follow the DNS instructions.
3. Vercel provides a free SSL certificate automatically.

---

## Updating the site after launch

Once deployed, any time you push a change to your GitHub repository, Netlify or
Vercel will automatically rebuild and redeploy within about a minute.

If you only need to update text (bio, project details, links), just edit
`src/data/site.js`, save it, and push.

---

## Before you go live — checklist

- Replace placeholder name and text in `src/data/site.js`
- Add your portrait photo to `public/images/portrait.jpg`
- Add project images to `public/images/` and update `imageSrc` in `site.js`
- Paste your real showreel URL into `showreelUrl` in `site.js`
- Update `email`, `linkedin` and other links in `site.js`
- Set up Formspree (free) if you want the contact form to work:
  go to formspree.io, create a form, copy the ID, and paste it into
  `src/components/Contact.astro` where it says `REPLACE_WITH_YOUR_FORM_ID`
- Update the `site` value in `astro.config.mjs` to your production URL
- Replace the `YN` initials in `public/favicon.svg` with your own
