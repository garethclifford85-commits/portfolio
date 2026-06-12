# Portfolio Website

A bold, fast, single-page portfolio built with [Astro](https://astro.build).

---

## How to run it locally

### 1. Install Node.js (if you haven't already)

Download the LTS version from [nodejs.org](https://nodejs.org) and install it.
After installing, restart your terminal.

### 2. Install dependencies

Open a terminal in this folder and run:

```
npm install
```

This takes about 30 seconds the first time.

### 3. Start the development server

```
npm run dev
```

Open your browser and go to **http://localhost:4321** — you will see the site.
The server live-reloads whenever you save a file.

### 4. Build for production

```
npm run build
```

The finished static site is output to the `dist/` folder.

---

## How to edit the content

**All text, links, and project data live in one file:**

```
src/data/site.js
```

Open that file and follow the comments. You can change your name, bio,
projects, credentials and contact details there without touching any layout code.

**Images:** drop your files into `public/images/`, then update the `imageSrc`
field for each project in `site.js`. For example:

```js
imageSrc: '/images/project1.jpg',
```

**Portrait photo:** same idea — add your photo to `public/images/portrait.jpg`
and set `portraitSrc: '/images/portrait.jpg'` in the `about` section of `site.js`.

**Favicon:** replace `public/favicon.svg` with your own icon.

---

## Folder structure (quick reference)

```
src/
  data/site.js        ← all your content lives here
  components/         ← section components (Hero, Work, etc.)
  layouts/Layout.astro
  pages/index.astro
  styles/global.css
public/
  images/             ← drop your project images here
  favicon.svg
```
