# Copilot Instructions

## General Guidelines

- Do not provide summaries of what you've done
- Do not provide explanations unless explicitly requested
- Keep responses concise and direct
- Focus on delivering the requested code or solution immediately
- Avoid verbose commentary or step-by-step breakdowns

## Response Format

- Provide code directly without preamble
- Skip explanatory text before or after code blocks
- Only include essential comments within code when necessary for clarity
- Respond with actionable content only
- Use ECMAScript 2023 (ESM) only; no CommonJS
- Do not use TypeScript or any type annotations
- Keep code compatible with standard JavaScript runtimes
- Prefer framework-native files and syntax:
  - Astro: .astro components with JS frontmatter; use Astro components/layouts for pages and routing
  - Svelte: .svelte components (Svelte 5), use standard script/style blocks, no TS; keep interactivity in Svelte
  - Tailwind CSS: use utility classes; avoid inline styles; use @apply sparingly
- Place styles in existing files when possible (e.g., src/styles/global.css) or component-scoped styles
- When adding/altering UI, prefer Tailwind v4 utilities consistent with the project setup
- Provide minimal imports and relative paths compatible with Astro/Svelte
