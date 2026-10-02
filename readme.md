# Código Navalha — Curso de Barbeiro (Seu Xico)

Landing page estática do curso **Código Navalha**, da **Seu Xico**, criada para captar
alunos para o curso de barbeiro profissional (do zero ao avançado). A página
apresenta o método, a grade curricular, o instrutor e depoimentos, e direciona
o visitante para o atendimento via **WhatsApp**.

> **Nomenclatura:** a marca/empresa é **Seu Xico** e o curso é **Código Navalha**.

## 📋 Sobre o projeto

- Página única (single page) com navegação por âncoras.
- Páginas institucionais adicionais: **Termos de Uso**, **Política de Privacidade**
  (conforme LGPD) e **Dúvidas Frequentes (FAQ)** — usadas também para atender
  requisitos de plataformas de anúncios (Google Ads/Meta).
- Foco em conversão: todos os CTAs levam ao WhatsApp com mensagens pré-preenchidas.
- Layout responsivo (desktop e mobile) com navbar fixa.
- Sem build/tooling: é um site estático de HTML, CSS e JavaScript puro.

## 📁 Páginas

| Arquivo | Descrição |
|---------|-----------|
| `index.html` | Landing page principal (hero, método, grade, instrutor, depoimentos, CTA) |
| `termos.html` | Termos de Uso do site |
| `privacidade.html` | Política de Privacidade (LGPD) |
| `faq.html` | Dúvidas Frequentes (FAQ) em acordeão |

## 🛠️ Tecnologias

| Tecnologia           | Uso                                           | Origem | 
|----------------------|-----------------------------------------------|--------|
| HTML5                | Estrutura da página                           | `index.html` |
| Tailwind CSS         | Estilização por utilitários                   | CDN (`cdn.tailwindcss.com`) |
| CSS custom           | Animações (texto dourado e pulse do WhatsApp) | `css/style.css` |
| JavaScript (vanilla) | Config do tema Tailwind + efeito de scroll    | `js/script.js`|
| FontAwesome 6.4.0    | Ícones | CDN (cdnjs)                          |
| Google Fonts         | Montserrat (corpo) e Oswald (títulos)         | CDN (Google Fonts) |

---

<p align="center">Desenvolvido com ☕ por Fernando Lima.</p>