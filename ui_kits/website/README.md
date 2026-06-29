# Website UI Kit — Lauri Reis Fotografia

A single-page marketing site recreation that composes the design-system primitives
(`Button`, `Badge`, `ServiceCard`, `Field`).

## Files
- `index.html` — entry point. Loads `_ds_bundle.js` (generated), React UMD, then mounts `Site`.
- `Site.jsx` — the full site: sticky header + nav, photographic hero, services grid
  (6 `ServiceCard`s), portfolio gallery with click-to-zoom lightbox, an About split,
  and a contact form built from `Field` + `Button`.

## Sections
Início (hero) · Serviços · Portfólio · Sobre · Contato — nav scrolls between them.

## Notes
- `Site` receives the design-system namespace as the `ui` prop and pulls its primitives
  from there, so it always renders with the live tokens.
- Imagery is real portfolio work under `assets/imagery/`.
- The contact form is cosmetic (no backend) — submitting shows a confirmation state.
