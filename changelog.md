# Changelog

> [!important]
> Ultima atualização: `06-10-2026`

Todos as alterações importantes do projeto são registradas neste arquivo, de forma cronologica e reversa. Esse arquivo segue os seguintes padrões:

- **Formato:** [Keep a Changelog v1.1.0](https://keepachangelog.com/en/1.1.0/)
- **Versionamento:** [SemVer 2.0.0](https://semver.org/)

## [1.2.1] - 2026/10/05

## adicionado

- adiciona arquivo de verificação do Google Search Console a raíz do projeto

## [1.2.0] - 2026/10/05

### adicionado

- adiciona `robots.txt`, `sitemap.xml` e página `404.html` para indexação
- adiciona canonical, meta robots, Open Graph e Twitter Card nas 4 páginas
- adiciona JSON-LD `BarberShop + Course + Organization + WebSite` no `index.html` e `FAQPage` no `faq.html`
- adiciona `favicon.ico`, `images/apple-touch-icon.png` e `images/og-cover.jpg` (1200x630)

### alterado

- reescreve titles e descriptions com foco em "Código Navalha", "Seu Xico" e "Cachoeiras de Macacu RJ"
- reescreve `alt` das imagens com contexto do curso e adiciona dimensões corretas do slider
- marca endereço com `<address>`, link "Ver no mapa" (Google Maps), `tel:` e `mailto:`

### corrigido

- otimiza imagens em `images/` (prêmios, logo, retrato): 5273KB para 1700KB, economia de 68%

## [1.1.2] - 2026/10/03

### corrigido
- ajusta o tamanho do slideshow de prêmios para garantir dimensão mínima no mobile e limite no desktop (corrige a proporção que não era aplicada em imagens com lazy loading)
- limita a largura do slideshow de prêmios ao container pai no mobile (o `aspect-ratio` inflava a largura a partir da altura, fazendo a imagem exceder o pai)

## [1.1.1] - 2026/10/02

### alterado

- substitui a prova visual estática por um slideshow de prêmios na seção "Prêmios & Reconhecimentos" do `index.html`, com as 6 imagens `images/seu-xico-premio-1.jpeg` a `seu-xico-premio-6.jpeg`, avanço automático por intervalo, setas de navegação e indicadores 

## [v1.1.0] - 2026/10/02

### adicionado
- adiciona favicons a `index.html`, `terms.html`, `privacy.html` e `faq.html`
- adiciona página de Termos de Uso (`termos.html`)
- adiciona página de Política de Privacidade adequada à LGPD (`privacidade.html`)
- adiciona página de Dúvidas Frequentes / FAQ com acordeão (`faq.html`)
- adiciona estilo de tipografia para páginas institucionais e acordeão de FAQ no `css/style.css`
- adiciona guarda no `js/script.js` para uso do script em páginas sem navbar
- adiciona prova visual e conquistas de prêmios na seção do Seu Mentor
- adiciona foto real do Seu Xico
- adiciona os dados de contato oficial do Seu Xico

### alterado
- atualiza o título do Hero para incluir o nome do curso "CÓDIGO NAVALHA"
- aponta os links do rodapé de Termos de Uso, Política de Privacidade e FAQ para as novas páginas
- corrige a nomenclatura no `index.html` e no `readme.md` (marca "Seu Xico"; curso "Código Navalha")
- corrige o `<title>` e a meta description da página inicial

## [1.0.0] - 2026/10/02

### adicionado
- cria o template inicial da landing page