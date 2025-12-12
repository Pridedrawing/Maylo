# AI Coding Agent Instructions for Maylo Website

## Project Overview
This is a Next.js 16 music artist website for Mylon Grey featuring a memorial album "Just One More Day" with dynamic theming, audio player, and track discovery. Built with React 19, TypeScript, Tailwind CSS 4, and dynamic color extraction from album artwork.

## Architecture

### Data-Driven Content Model
- **Single source of truth**: `data/siteData.ts` contains all albums, tracks, site metadata, and links
- **Album structure**: Each album has `id` (internal), `slug` (URL), and `tracks[]` array of track slugs for ordered rendering
- **Track structure**: Tracks reference parent album via `albumId` and include metadata (audio URL, cover image, description)
- **Key pattern**: Always filter/find tracks by `albumId` when showing album-specific content

### Theme System (Dynamic Palette from Artwork)
The theme is **not** CSS variables—it's React context-driven:
1. `ThemeContext.tsx` stores `ThemeColors` object: `{primary, primarySoft, background, textOnPrimary}`
2. `useArtworkPalette.ts` extracts dominant color from track cover using `colorthief` library
3. Derives darker background by subtracting 40 from each RGB component
4. **Usage**: On track pages, theme automatically updates to match album art dynamically
- Default theme (fallback): `#e5b3ff` (lavender) primary
- Components access theme via `useTheme()` hook, not inline styles

### Component Organization
- **Layout**: `Header.tsx`, `Footer.tsx` in `components/layout/`
- **Common**: `SocialLinks.tsx`, `StreamingLinks.tsx` render external platform links
- **Music**: `AudioPlayer.tsx` (local per-page), `TrackCard.tsx`, `AlbumCard.tsx` for listing
- **Theme**: `DynamicThemeWrapper.tsx`, `ThemeContext.tsx`, `useArtworkPalette.ts`
- **Content**: `AboutMeSection.tsx` renders from `siteData.ts`

### Routing & Dynamic Pages
- **App Router** (Next.js 13+ convention): `app/` directory with file-based routing
- **Dynamic segment**: `app/tracks/[trackSlug]/page.tsx` handles `/tracks/{slug}` URLs
- **Slug resolution**: Parse `useParams()` to extract slug, find matching track in `tracks[]` array
- **Error handling**: Page shows "Track not found" debug view listing all available slugs if no match
- **Link pattern**: Use `Link` from `next/link` with relative URLs (e.g., `/tracks/just-one-more-day`)

## Key Development Workflows

### Development Server
```powershell
npm run dev
```
Runs on `http://localhost:3000` with hot reload on file changes.

### Build & Deploy
```powershell
npm run build      # Creates optimized production bundle
npm run start      # Serves production build locally
npm run lint       # Runs ESLint on codebase
```

## Project-Specific Patterns & Conventions

### Adding New Tracks or Albums
1. Update `data/siteData.ts`: Add album to `albums[]`, add tracks to `tracks[]`
2. Add audio file to `public/audio/` and cover artwork to `public/covers/`
3. Set `audioSrc` and `coverImage` to match public paths
4. Use kebab-case for slugs (e.g., `just-one-more-day`)
5. Ensure `tracks[]` array in album object lists track slugs in order
6. Optionally add `lyrics` field (string with `\n` for line breaks) to display on track page

### Lyrics Display
- Add optional `lyrics` property to track object in `siteData.ts` (plain string with `\n` separators for line breaks)
- Track page automatically renders lyrics section if present, formatted with `whitespace-pre-wrap` for line breaks
- Example: `lyrics: "One more day\nOne more sunrise\nOne more moment to hold you near"`
- Lyrics appear between track info and player controls on the track page

### Theme Integration
- **Client-side only**: Use `"use client"` directive on pages accessing `useTheme()` or `useArtworkPalette()`
- **Pass image URL**: `useArtworkPalette(imageUrl)` automatically updates global theme
- **Apply theme**: Access via `const { theme } = useTheme()` and use `theme.primary`, `theme.primarySoft` in style props
- **Fallback**: ColorThief errors silently; default theme applies if extraction fails

### Styling with Tailwind CSS 4
- Use Tailwind utility classes exclusively (e.g., `text-neutral-50`, `bg-neutral-950`)
- Custom theme colors are applied dynamically via `ThemeProvider` inline styles, not Tailwind config
- Responsive classes: `md:text-4xl`, `flex-col md:flex-row` (mobile-first)

### Images & Next.js Optimization
- Import `Image` from `next/image` for all artwork (auto-optimization, responsive loading)
- Set `fill` prop for backgrounds; use `object-cover` with Tailwind
- Always provide `alt` text for accessibility
- Example: `<Image src={cover} alt={title} fill className="object-cover" />`

### Audio Player Pattern
- Store `audioRef` using `useRef<HTMLAudioElement>(null)` for direct DOM access
- Reset audio state when route/slug changes using useEffect hook
- Example: `<audio ref={audioRef} src={track.audioSrc} />`

### "Client-side only" Pages
- Track pages and any component using theme/player state must have `"use client"` directive
- Server components (default) cannot access hooks; use client components sparingly for interactivity only

## Integration Points & External Dependencies

- **colorthief** (v2.6.0): Extracts dominant color from album artwork via canvas; runs on client only
- **Tailwind CSS 4**: Utility-first styling via `@tailwindcss/postcss` plugin
- **Next.js Image**: Automatic optimization, responsive artwork, blur placeholders
- **ESLint 9**: Enforces code quality; uses `eslint-config-next` for Next.js best practices

## Debugging Tips

- **Track not found?** Check slug in URL matches exactly (case-sensitive) vs. `siteData.ts`
- **Theme not updating?** Ensure component is client-side (`"use client"`), image is CORS-accessible, and `useTheme()` is called inside `ThemeProvider`
- **Audio not playing?** Verify audio file exists in `public/audio/`, file path in `audioSrc` is correct, and no CORS headers block playback
- **Build errors?** Run `npm run lint` to catch TypeScript/ESLint issues before deployment
