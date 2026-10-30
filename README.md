# Pugal Portfolio

A React + TypeScript portfolio built with Vite, Tailwind CSS, and Supabase.

## Run locally

1. Install Node.js (20.19+ or 22.12+) and npm.
2. Install dependencies:

   ```bash
   npm ci
   ```

3. Copy `.env.example` to `.env` and set the values from your Supabase project:

   ```env
   VITE_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
   VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_OR_PUBLISHABLE_KEY
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## Build

```bash
npm run build
```

Vite writes the production site to `dist/`.

## Deploy to Vercel

Import the GitHub repository in Vercel and use these settings:

- Framework Preset: Vite
- Root Directory: `./`
- Install Command: `npm ci`
- Build Command: `npm run build`
- Output Directory: `dist`

Add these Environment Variables in Vercel for Production, Preview, and Development:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Use the values from your Supabase project. Do not commit `.env` files. The `.env.example` file contains placeholders only.

## Supabase contact form

The contact form inserts records into `public.contact_messages`. Apply the SQL migration in `supabase/migrations/` to the Supabase project before testing contact submissions. The migration enables Row Level Security and grants visitors insert-only access.
