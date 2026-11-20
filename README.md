# Nushara Kampanthodi — Portfolio

A Next.js portfolio with project case studies, an interactive workflow preview, and a portfolio chatbot.

## Local development

Run `npm ci` and `npm run dev`. The development site runs at http://localhost:3000.

## GitHub Pages

In Settings → Pages, set the build and deployment source to GitHub Actions. The workflow builds the static site on pushes to `main` and uses the base path provided by GitHub Pages. The generated `out` directory is published as the Pages artifact.