// https://vitepress.dev/reference/site-config
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "DomisDocs",
  description: "Plataforma Oficial de documentação Técnica Profissional.",
  themeConfig: {
    logo: {
      src: '/images/DomisDev.png',
      alt: 'DomisDev'
    },
    nav: [
      {
        text: '💻 O Projeto',
        items: [
          { text: '1. Sobre', link: '/guia/sobre' },
          { text: '2. Tecnologias', link: '/guia/techs' },
          { text: '3. Como Usar', link: '/guia/acessar' },
          { text: '4. Objetivos', link: '/guia/funcionalidades' }
        ]
      },
      {
        text: '🛠️ Técnico',
        items: [
          { text: '5. Destaques', link: '/guia/destaques' },
          { text: '6. Fluxo de Deploy Completo', link: '/guia/deploy' },
          { text: '7. Contribuir', link: '/guia/contribuir' },
          { text: '8. FAQ', link: '/guia/faq' }
        ]
      },
      {
        text: '🤝 Comunidade',
        items: [
          { text: '9. Código Fonte', link: '/guia/codigo' },
          { text: '10. Créditos', link: '/guia/creditos' },
          { text: '11. Licença', link: '/guia/licenca' },
          { text: '12. Perfil GitHub', link: '/guia/perfil' }
        ]
      }
    ],
    sidebar: {
      '/guia/': [
        {
          text: '💻 O Projeto',
          items: [
            { text: '1. Sobre', link: '/guia/sobre' },
            { text: '2. Tecnologias', link: '/guia/techs' },
            { text: '3. Como Usar', link: '/guia/acessar' },
            { text: '4. Objetivos', link: '/guia/funcionalidades' }
          ]
        },
        {
          text: '🛠️ Técnico',
          items: [
            { text: '5. Destaques Técnicos', link: '/guia/destaques' },
            { text: '6. Fluxo de Deploy Completo', link: '/guia/deploy' },
            { text: '7. Como Contribuir', link: '/guia/contribuir' },
            { text: '8. FAQ', link: '/guia/faq' }
          ]
        },
        {
          text: '🤝 Comunidade',
          items: [
            { text: '9. Código Fonte', link: '/guia/codigo' },
            { text: '10. Créditos', link: '/guia/creditos' },
            { text: '11. Licença', link: '/guia/licenca' },
            { text: '12. Perfil GitHub', link: '/guia/perfil' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Domisnnet/Document-Firebase-Hosting' }
    ],
    footer: {
      message: "Documentação Técnica feita com 💻 por: DomisDev",
      copyright: "© 2026 DomisDev"
    }
  }
})