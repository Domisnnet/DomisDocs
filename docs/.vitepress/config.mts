// https://vitepress.dev/reference/site-config
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "DomisDocs",
  description: "Plataforma de Documentação Técnica — DomisDev | Guia: Angular 20 + Firebase Hosting",
  lang: 'pt-BR',
  base: '/',
  themeConfig: {
    logo: '/images/DomisDev.png',
    nav: [
      { text: 'Início', link: '/' },
      { text: '📖 Guia Completo', link: '/guia/' },
      {
        text: '🔗 DomisDocs',
        items: [
          { text: 'Repositório', link: 'https://github.com/Domisnnet/DomisDocs' },
          { text: 'Projeto Exemplo', link: 'https://github.com/Domisnnet/Shadow-Flip-Angular' }
        ]
      }
    ],
    sidebar: {
      '/guia/': [
        {
          text: '🚀 Início do Guia',
          items: [
            { text: '1. Deploy — Apresentação', link: '/guia/01-deploy-angular-firebase-hosting' },
            { text: '2. Objetivo', link: '/guia/02-objetivo' },
            { text: '3. Como Funciona', link: '/guia/03-como-funciona' },
            { text: '4. Tecnologias', link: '/guia/04-tecnologias-utilizadas' },
            { text: '5. Exemplo Prático', link: '/guia/05-exemplo-utilizado' }
          ]
        },
        {
          text: '🛠️ Passo a Passo',
          items: [
            { text: '6. Instalar Firebase CLI', link: '/guia/06-instalar-firebase-cli' },
            { text: '7. Login e Projeto', link: '/guia/07-login-e-associacao' },
            { text: '8. Build e index.html', link: '/guia/08-build-e-localizacao' },
            { text: '9. Configurar Hosting', link: '/guia/09-configurar-hosting' },
            { text: '10. Testar Localmente', link: '/guia/10-validar-e-testar' },
            { text: '11. Fazer o Deploy', link: '/guia/11-fazer-o-deploy' },
            { text: '12. Próximos Deploys', link: '/guia/12-proximos-deploys' },
            { text: '13. Estrutura do Projeto', link: '/guia/13-estrutura-do-projeto' }
          ]
        },
        {
          text: '🧠 Referência',
          items: [
            { text: '14. Troubleshooting', link: '/guia/14-troubleshooting' },
            { text: '15. Boas Práticas', link: '/guia/15-boas-praticas' },
            { text: '16. Contribuindo', link: '/guia/16-contribuindo' },
            { text: '17. FAQ', link: '/guia/17-faq' },
            { text: '18. Checklist Final', link: '/guia/18-checklist-final' },
            { text: '19. Referências Oficiais', link: '/guia/19-referencias-oficiais' },
            { text: '20. Regra Mais Importante', link: '/guia/20-regra-mais-importante' },
            { text: '21. Créditos e Perfil', link: '/guia/21-creditos-licenca-perfil' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Domisnnet/DomisDocs' }
    ],
    footer: {
      message: 'DomisDocs — Plataforma de Documentação Técnica por DomisDev',
      copyright: '© 2026 DomisDocs | Projeto de referência: Shadow-Flip-Angular'
    },
    search: {
      provider: 'local',
      options: {
        locales: {}
      }
    }
  }
})