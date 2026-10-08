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

## Site architecture
- Keep shared navigation, the in-memory preview cart, session-only loader and runner in SiteShell around the route Outlet so navigation preserves the cart and game.
- Store product content and imported original assets in the shared browser-safe flavor catalog; render products through one parameterized route to keep all flavors consistent.
- Keep all presentation roles and candy palette values in styles.css; use the shared Button sticker/nav/circle variants for interactions.
- The store locator uses decorative non-geographic artwork until real store data is supplied; do not treat it as a live geographic map.
- Commerce and contact are preview-only until approved business data and services are provided; never fabricate prices, offers, nutrition, certifications or successful sends.
