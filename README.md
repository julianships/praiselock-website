# praiselock-website

Source for [praiselock.com](https://www.praiselock.com), the public website for Praise Lock.

This repo is the public site layer for the product: landing page, support, and privacy. It does not contain the private app code or the product systems behind the mobile experience.

## Stack

- Next.js
- React
- JavaScript
- CSS modules

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Project structure

```text
app/
  page.js              Main homepage
  privacy/             Privacy policy page
  support/             Support page
  layout.js            Root layout
  *.css                Page and shared styling

public/
  static assets and imagery
```

## What this repo contains

- public product marketing pages
- support and privacy URLs
- static branding and promotional assets

## What it does not contain

- the Praise Lock app source
- internal subscriptions, analytics, or product logic
- private mobile implementation details

## Notes

- This repo is intended to be safe to share publicly as the website layer for the product.
- The more technical parts of the product are better represented later through a narrow public case-study repo than by publishing the full private app.
