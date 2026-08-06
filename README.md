# portfolioRK

 
Personal portfolio — Next.js 15 static export deployed to GitHub Pages at [https://protfoliodrk.netlify.app/#home](https://protfoliodrk.netlify.app/#home).

## Stack

- **Next.js 15** (App Router, static export)
- **React 19**, TypeScript, Tailwind CSS
- **Framer Motion**, React Three Fiber (hero scene)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
# CI sets NEXT_PUBLIC_BASE_PATH=/portfolioRK automatically.
# Local GitHub Pages preview:
NEXT_PUBLIC_BASE_PATH=/portfolioRK npm run build   # macOS/Linux
$env:NEXT_PUBLIC_BASE_PATH="/portfolioRK"; npm run build   # PowerShell
```

Preview locally:

```bash
npx serve out
```

Then open `http://localhost:3000/portfolioRK/`.

## Deploy

Pushes to `main` or `style-1` trigger [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds and publishes `out/` to GitHub Pages.

Ensure **Settings → Pages → Build and deployment** is set to **GitHub Actions**.

## Project structure

| Path | Purpose |
|------|---------|
| `src/app/` | App Router pages & layout |
| `src/components/` | UI sections & motion primitives |
| `src/data/` | Projects, research, experience, nav |
| `public/logos/` | Research card brand logos |
| `public/research/` | Research section figures |
| `public/papers/` | Conference PDFs |
| `public/project-images/` | Project thumbnails |

## Paths

- **Dev:** assets at `/logos/…`, `/research/…`, etc.
- **Production:** same paths prefixed with `/portfolioRK` via `next.config.ts` `basePath`
- Plain `<a href>` links to static files use `assetPath()` from `src/lib/site.ts`

## License

MIT — see [LICENSE](LICENSE).
