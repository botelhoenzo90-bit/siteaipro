<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the public landing page's structure in `src/routes/index.tsx` and its final visual overrides in `src/landing-patch.css` so legacy global styles cannot silently reorder or recreate removed sections.
- Keep authentication through Lovable Cloud Auth with email/password and managed Google sign-in, without an application profile table, because the product only needs account access.
- Keep authenticated product theming in the shared Prime shell with a persisted light/dark preference, so every internal module stays visually consistent.
- Keep `/project` as a self-contained, locally persisted guided workflow; its steps must render inline instead of navigating to separate tools, so users can finish one project in sequence.
