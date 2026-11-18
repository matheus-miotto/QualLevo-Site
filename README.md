# Site do Qual Levo?

Site institucional (Astro, estático) publicado no GitHub Pages em
https://matheus-miotto.github.io/QualLevo-Site/ — mesmo padrão do site do GymLog.

- `npm install` e `npm run dev` (http://localhost:4321/QualLevo-Site/)
- `npm run build` gera `dist/`
- Publicação: crie o repositório `QualLevo-Site` no GitHub, envie esta pasta para a branch
  `main` e, em Settings → Pages, escolha **GitHub Actions**. O workflow
  `.github/workflows/deploy.yml` publica a cada push.

Antes de publicar: preencher `supportEmail` em `src/utils/site.ts` (e `appStoreUrl` quando
o app sair). Os prints em `public/images/screenshots` vêm de `node tools/screenshots.mjs`
no projeto do app (com `npm run web` rodando).
