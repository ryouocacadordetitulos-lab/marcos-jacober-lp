# Marcos Jacober — Landing

Landing page do universo The Deed Hunter World, seguindo o brandbook Jacober.

## Stack
- **Vite** (build estático)
- **Tailwind CSS** v3 via PostCSS
- HTML/CSS/JS vanilla

## Dev local
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run preview  # serve dist/
```

## Deploy
Dokploy `build_type=static`, `publish_directory=dist`. Auto-deploy on push para `main`.
