/**
 * Constantes globais do site, usadas pelo Layout e pelo Footer para
 * preencher metadados de SEO, Open Graph e informações institucionais.
 */
export const SITE = {
  name: "Qual Levo?",
  // Deve ser mantida igual ao `site` de astro.config.mjs.
  url: "https://matheus-miotto.github.io",
  // E-mail oficial de suporte — único ponto de atualização do projeto.
  supportEmail: "miottodeveloper@gmail.com",
  // Versão atual do aplicativo (projeto em ../www). Atualizar a cada release.
  appVersion: "1.0.0",
  // Link da App Store — preencher quando o app for publicado.
  appStoreUrl: "",
  // Link do Google Play — preencher quando o app for publicado.
  googlePlayUrl: "",
  // O Footer só exibe o link quando este valor não estiver vazio.
  githubUrl: "",
} as const;
