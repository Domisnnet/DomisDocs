---
layout: home
hero:
  name: DomisDocs
  text: Plataforma de Documentacao Tecnica
  tagline: Guia completo de Deploy - Angular 20 + Firebase Hosting
  actions:
    - theme: brand
      text: "🚀 Começar a Ler"
      link: /guia/
    - theme: alt
      text: "🛒 Ver Packs Premium"
      link: /packs/
features:
  - icon: 🚀
    title: Deploy Passo a Passo
    details: Do zero ao publicado - completo e testado
  - icon: ⚙
    title: Angular 20 + Firebase
    details: Configuração, build, rotas e regras de SPA
  - icon: 🧠
    title: Troubleshooting e Boas Práticas
    details: Resolução de problemas, checklist e referências
---

<style>
:root {
  --vp-home-hero-name-color: #26FF00;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #26FF00, #00D4FF);
  --vp-c-brand: #26FF00;
  --vp-c-brand-light: #4DFF33;
  --vp-c-brand-lighter: #80FF66;
  --vp-c-brand-dark: #1ECC00;
  --vp-c-brand-darker: #199900;
}

/* Botões Premium com efeito */
.VPButton.brand {
  background: linear-gradient(135deg, #26FF00, #00D4FF) !important;
  color: #000 !important;
  font-weight: 700 !important;
  box-shadow: 0 4px 14px 0 rgba(38, 255, 0, 0.39) !important;
  transition: all 0.3s ease !important;
}

.VPButton.brand:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px 0 rgba(38, 255, 0, 0.5) !important;
}

.VPButton.alt {
  border: 2px solid #26FF00 !important;
  transition: all 0.3s ease !important;
}

.VPButton.alt:hover {
  border-color: #00D4FF !important;
  transform: translateY(-2px);
}
</style>
