# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint check
```

## Architecture

Next.js 14 App Router website for GVNTMC — a Vietnamese IT solutions company. The site is bilingual (Vietnamese/English).

### Key patterns

**Page structure** — every route uses a server component (`page.tsx`) that imports a `*Client.tsx` file marked `"use client"`. All interactivity and animations live in the client component; the server component handles metadata.

**i18n** — handled entirely client-side via `src/context/LanguageContext.tsx`. The `useLanguage()` hook returns `{ language, setLanguage, t }` where `t` is a flat typed translation object (`Translations`). No routing or URL-based locale switching — language state is in-memory only. All UI strings must come from `t.*`, never hardcoded.

**Data layer** — all content is static TypeScript files in `src/data/`: `services.ts`, `products.ts`, `projects.ts`, `news.ts`, `partners.ts`, `testimonials.ts`. No API or database. To add content, edit these files directly. Each entity has a `slug` field used for dynamic routes (`[slug]/page.tsx`). Projects now include a `gallery: string[]` field for multi-image carousels.

**Styling** — Tailwind CSS only. Brand primary color is `#1B4FBF`. No CSS modules or styled-components.

**Animation & Carousels** — Framer Motion for page transitions and section reveals. Swiper.js (v11.1.4) for carousels and galleries (type stubs in `src/types/swiper.d.ts`). ProjectGallery component (`src/components/projects/ProjectGallery.tsx`) provides a reusable gallery with thumbnails, navigation arrows, auto-play, and keyboard support.

### Route map

| URL | Page |
|-----|------|
| `/` | Home — assembles section components |
| `/gioi-thieu` | About |
| `/dich-vu` | Services list / `/dich-vu/[slug]` detail |
| `/san-pham` | Products list / `/san-pham/[slug]` detail |
| `/du-an` | Projects list / `/du-an/[slug]` detail with gallery |
| `/tin-tuc` | News list / `/tin-tuc/[slug]` detail |
| `/lien-he` | Contact |
| `/bao-gia` | Quote request |
| `/chat` | AI Chat (streaming, Anthropic SDK) |

### Project gallery (`/du-an/[slug]`)

- **Data**: `src/data/projects.ts` — `Project` interface includes `gallery: string[]` with fallback to `image` field if empty
- **Component**: `src/components/projects/ProjectGallery.tsx` — Swiper-based carousel with:
  - Main image display with aspect-video ratio
  - Auto-play (5s interval, pauses on interaction)
  - Navigation arrows (visible on hover)
  - Pagination dots (dynamic bullet style)
  - Thumbnail strip below main image (clickable to jump)
  - Image counter (e.g., "3 / 5")
  - Touch/swipe support
  - Keyboard navigation (arrow keys, Enter)
- **Integration**: `src/app/du-an/[slug]/ProjectDetailClient.tsx` imports and renders `<ProjectGallery images={project.gallery} title={project.title} />`

### AI Chat (`/chat`)

- **API route**: `src/app/api/chat/route.ts` — streams responses using `@anthropic-ai/sdk` with `claude-opus-4-7` and adaptive thinking
- **UI**: `src/app/chat/page.tsx` — client component, reads streamed `text/plain` chunks and appends to the last assistant message
- Requires `ANTHROPIC_API_KEY` in `.env.local`

### Image domains

`placehold.co` is whitelisted in `next.config.mjs`. To use real images from other domains, add them to `images.remotePatterns` there.

## Instructions for Claude

- Luôn giao tiếp, giải thích và trả lời bằng tiếng Việt.
- Tuân thủ nghiêm ngặt workflow: Explore -> Plan -> Execute cho mọi tác vụ.
- Chỉ thực thi (Execute) khi tôi đã đồng ý với kế hoạch (Plan).
- KHÔNG ĐƯỢC TỰ ĐỘNG COMMIT CODE. Khi hoàn thành tác vụ, chỉ đưa ra các file đã chỉnh sửa và hướng dẫn để tôi tự commit bằng Git cá nhân.
