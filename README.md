
# 🪑 Casa Interiores — Projeto desenvolvido pela HeinSoft

![🟢 Status](https://img.shields.io/badge/🟢_Status-Finalizado-43A047?style=for-the-badge&labelColor=1E1E2F)

![🏷️ Selo HeinSoft](https://img.shields.io/badge/🏷️_HeinSoft_Seal-Quality_2025-1565C0?style=for-the-badge&labelColor=1E1E2F)

![🔒 Licença](https://img.shields.io/badge/🔒_Licença-Privado-9C27B0?style=for-the-badge&labelColor=1E1E2F)

---

## 🔗 Sumário
- [🧱 Cabeçalho e Identificação do Projeto](#🧱-cabeçalho-e-identificação-do-projeto)
- [📖 Visão Geral e Objetivos](#📖-visão-geral-e-objetivos)
- [🛠️ Tecnologias e Ferramentas](#🛠️-tecnologias-e-ferramentas)
- [⚙️ Instalação e Execução](#⚙️-instalação-e-execução)
- [🗂️ Estrutura de Pastas](#🗂️-estrutura-de-pastas)
- [🎨 Identidade Visual](#🎨-identidade-visual)
- [🧾 Documentos Oficiais](#🧾-documentos-oficiais)
- [📦 Entregáveis e Resultado](#📦-entregáveis-e-resultado)
- [📊 Análise de Performance](#📊-análise-de-performance)
- [👤 Créditos e Contatos](#👤-créditos-e-contatos)
- [📅 Roadmap de Desenvolvimento](#📅-roadmap-de-desenvolvimento)
- [📈 Histórico de Versões (Changelog)](#📈-histórico-de-versões-changelog)
- [⚖️ Direitos Autorais](#⚖️-direitos-autorais)
---

## 🧱 Cabeçalho e Identificação do Projeto(#🧱-cabeçalho-e-identificação-do-projeto)

**Cliente:** Casa Interiores  
**Empresa Desenvolvedora:** HeinSoft Company  
**Responsável Técnico:** Pedro Henrique — CEO & Fundador  
**Status do Projeto:** ✅ Finalizado e publicado  
**Repositório Oficial:** [github.com/heinsoft/casa-interiores](https://github.com/HeinSoftCompany/casa_interiores_project_priv)  
**Website Oficial:** [casainteriorespe.com.br](https://casainteriorespe.com.br)

#### 📜 Descrição Executiva
O projeto **Casa Interiores** foi desenvolvido pela **HeinSoft Company** com o objetivo de traduzir a essência do design rústico e contemporâneo da marca em uma presença digital elegante, funcional e de alto desempenho.  
Cada detalhe foi planejado para refletir o estilo natural dos produtos, criar uma experiência fluida para o visitante e posicionar a marca como **referência regional em decoração e móveis personalizados.**

## 📖 Visão Geral e Objetivos

A **Casa Interiores** é uma marca dedicada à criação de ambientes acolhedores, com foco em móveis e decorações que unem **artesanato e design contemporâneo**.  
A HeinSoft desenvolveu um **site institucional e catálogo digital** para representar fielmente o estilo e o valor estético da marca no ambiente online.

🎯 Objetivos Principais
- **Posicionamento Digital Profissional**  
- **Catálogo Interativo e Visual**  
- **SEO e Desempenho**  
- **Experiência do Usuário (UX)**  
- **Credibilidade e Autoridade**

🧭 Propósito Estratégico
O site da **Casa Interiores** não é apenas um catálogo — é um **ambiente digital de experiência**, que conecta estética, funcionalidade e propósito de marca.

---

## 🛠️ Tecnologias e Ferramentas

| Categoria | Tecnologia | Função |
|------------|-------------|--------|
| **Build Tool** | 🧩 Vite | Build rápido e modular |
| **Linguagem Base** | 🧠 JavaScript Vanilla | Código leve e independente |
| **Framework CSS** | 🎨 Bootstrap 5.3 | Layout responsivo |
| **Pré-processador** | 💅 Sass (SCSS) | Modularização e reutilização de estilos |
| **Animações** | ✨ AOS.js | Efeitos suaves ao scroll |
| **Ícones** | 🧭 Line Awesome | Ícones vetoriais otimizados |
| **Ilustrações** | 🎞️ Creattie Animations | Elementos visuais premium |
| **Hospedagem** | ☁️ Hostinger + Vercel | Infraestrutura híbrida e escalável |
| **Testes** | ⚡ Cypress / GTmetrix / SpeedVitals | Garantia de performance e usabilidade |
| **Padronização de Código** | 🧹 ESLint / Prettier | Consistência e formatação automatizada |

---






---

## ⚙️ Instalação e Execução

### 💻 Pré-requisitos
- Node.js v20+  
- NPM v10+  
- Git v2.40+  
- Visual Studio Code  
-  **Sistema Windows ou Linux**

### 🧩 Instalação

```bash
git clone https://github.com/heinsoft/casa_interiores_project_priv.git
cd casa_interiores_project_priv
npm install
npm run dev
```

🔗 Acesse: **http://localhost:5173**

🏗️ Build de Produção:

```bash
npm run build
```
---

## 🗂️ Estrutura de Pastas

| 📁 Pasta / Arquivo | 🧩 Tipo | 🧠 Descrição |
|---------------------|---------|---------------|
| **index.html** | 🪶 Página principal | Estrutura base do site — HTML raiz que carrega os módulos e componentes. |
| **vite.config.js** | ⚙️ Configuração | Arquivo de build e otimização do Vite (aliases, plugins e paths). |
| **package.json** | 📦 Dependências | Lista de bibliotecas, scripts e metadados do projeto. |
|---------------------|---------|---------------|
| 🎨 **/assets** | Diretório | Contém os recursos estáticos e visuais usados no site. |
| ├── `/css` | 🎨 Estilos compilados | Arquivos `.css` gerados a partir do Sass e otimizados para produção. |
| ├── `/js` | ⚡ Scripts distribuídos | Código JavaScript modular após build do Vite. |
| ├── `/img` | 🖼️ Imagens | Recursos visuais otimizados (JPEG, PNG, WebP, SVG). |
| ├── `/fonts` | 🔤 Fontes tipográficas | Famílias de fontes utilizadas no layout (Poppins, Open Sans, etc). |
| └── `/animations` | 🎞️ Ilustrações animadas | Arquivos JSON/SVG de animações do Creattie ou Lottie. |
|---------------------|---------|---------------|
| 💅 **/scss** | Estilos-fonte | Organização Sass modular (Design System e componentes). |
| ├── `_variables.scss` | 🎨 Variáveis globais | Paleta de cores, espaçamentos e tokens de design HeinSoft. |
| ├── `_mixins.scss` | ⚙️ Funções Sass | Mixins e funções reutilizáveis em todo o projeto. |
| ├── `_global.scss` | 🌐 Estilo base | Regras universais, resets e definições globais. |
| ├── `_header.scss` | 🧭 Cabeçalho | Estilos e estrutura do menu de navegação. |
| ├── `_footer.scss` | 📜 Rodapé | Estilos do rodapé e seções de contato. |
| ├── `_home.scss` | 🏡 Página inicial | Layout e componentes visuais da home. |
| ├── `_catalog.scss` | 🪑 Página catálogo | Grade e estilização dos produtos e categorias. |
| └── `main.scss` | 🧩 Entrada global | Importa todos os módulos SCSS para compilação. |
|---------------------|---------|---------------|
| 🧱 **/modules** | JavaScript modular | Scripts divididos por componentes e funcionalidades. |
| ├── `navbar.js` | 🧭 Navegação | Controla o menu responsivo e rolagem suave. |
| ├── `gallery.js` | 🖼️ Galeria | Cria grids, carrosséis e lightboxes. |
| ├── `animations.js` | ✨ Animações | Inicializa e configura AOS.js. |
| ├── `forms.js` | 📝 Formulários | Validação, máscaras e integração de envio. |
| └── `footer.js` | 📜 Rodapé | Scripts de interação e botões sociais. |
|---------------------|---------|---------------|
| 📄 **/docs** | Documentação legal | Arquivos e documentos formais do projeto. |
| ├── `Contrato_Desenvolvimento_v1.3_assinado.pdf` | ⚖️ Contrato | Documento oficial de escopo, prazos e suporte. |
| ├── `Politica_Privacidade.pdf` | 🔒 Política de Privacidade | Documento de conformidade com a LGPD. |
| ├── `Termos_Uso.pdf` | 📘 Termos de Uso | Condições de utilização do site e conteúdo. |
| ├── `Certificado_Qualidade_HeinSoft.pdf` | 🪪 Certificado | Selo de qualidade e autenticidade técnica. |
| └── `Proposta_Comercial.pdf` | 💼 Proposta | Apresentação executiva e valores comerciais. |
|---------------------|---------|---------------|
| 🧪 **/tests** | Testes e QA | Scripts e relatórios automatizados de validação. |
| ├── `/cypress` | 🧭 Testes funcionais | Fluxos simulando ações reais do usuário. |
| └── `/reports` | 📊 Relatórios | Logs e resultados de performance e SEO. |
|---------------------|---------|---------------|
| 💾 **/backups** | Cópias de segurança | Contém versões anteriores do projeto. |
| ├── `/versao_1.0` | 📁 Build inicial | Primeira versão estável entregue ao cliente. |
| └── `/versao_1.1` | 📁 Atualização | Versão revisada com melhorias de SEO e imagens. |

---
## 🎨 Identidade Visual

| Elemento | Padrão | Descrição |
|----------|---------|------------|
| **Cores** | `#f7f7f7`, `#ffffff`, `#1f1f1f`, `#6d6d6d`, `#e9e9e9`, `#e9e2d8`, `#f5f2ef`, `#222`, `#4a2714`, `#111`, `#FFD166`, `#f7b500`, `#7ac673` | Paleta natural, suave e terrosa |
| **Tipografia** | Poppins / Open Sans | Equilíbrio entre modernidade e leveza |
| **Ícones** | Line Awesome | Ícones consistentes e leves |
| **Layout** | Grid Bootstrap 5.3 | Estrutura responsiva e fluida |
| **Animações** | AOS.js | Efeitos de transição sutis e elegantes |
| **Moodboard** | *Acolhedor, sofisticado, natural, moderno* | Reflete o estilo artesanal e contemporâneo da marca |

🖼️ [Guia de Identidade Visual (PDF)](/docs/Guia_Identidade_Visual.pdf)

---

### 🎨 Documentação de Cores (Root SCSS)

| Variável | Cor | Hexadecimal | Função |
|-----------|------|-------------|--------|
| `--bg` | ![#f7f7f7](https://via.placeholder.com/12/f7f7f7?text=+) | `#f7f7f7` | Cor de fundo geral do site |
| `--paper` | ![#ffffff](https://via.placeholder.com/12/ffffff?text=+) | `#ffffff` | Fundo de cartões, seções e áreas claras |
| `--ink` | ![#1f1f1f](https://via.placeholder.com/12/1f1f1f?text=+) | `#1f1f1f` | Texto principal |
| `--muted` | ![#6d6d6d](https://via.placeholder.com/12/6d6d6d?text=+) | `#6d6d6d` | Texto secundário / descrições |
| `--stroke` | ![#e9e9e9](https://via.placeholder.com/12/e9e9e9?text=+) | `#e9e9e9` | Bordas, divisórias e linhas sutis |
| `--beige` | ![#e9e2d8](https://via.placeholder.com/12/e9e2d8?text=+) | `#e9e2d8` | Cor de fundo complementar (tons de madeira clara) |
| `--promo` | ![#f5f2ef](https://via.placeholder.com/12/f5f2ef?text=+) | `#f5f2ef` | Seções de destaque, promoções ou blocos visuais |
| `--brand` | ![#222222](https://via.placeholder.com/12/222222?text=+) | `#222` | Cor primária da identidade (logotipo e títulos) |
| `--dark-brown` | ![#4a2714](https://via.placeholder.com/12/4a2714?text=+) | `#4a2714` | Tom de madeira escura, base de contraste |
| `--accent` | ![#111111](https://via.placeholder.com/12/111111?text=+) | `#111` | Acentos visuais e detalhes fortes |
| `--golden` | ![#FFD166](https://via.placeholder.com/12/FFD166?text=+) | `#FFD166` | Destaques, botões premium e ícones decorativos |
| `--rating` | ![#f7b500](https://via.placeholder.com/12/f7b500?text=+) | `#f7b500` | Indicador de avaliação / estrelas |
| `--whatsapp` | ![#7ac673](https://via.placeholder.com/12/7ac673?text=+) | `#7ac673` | Botão de contato rápido (WhatsApp) |
| `--heart` | ![#111111](https://via.placeholder.com/12/111111?text=+) | `#111` | Ícones e botões de ação (ex: favoritos) |
| `--radius-2xl` | `18px` | — | Raio de borda para botões principais e cartões grandes |
| `--radius-xl` | `14px` | — | Raio de borda para elementos secundários |
| `--shadow` | `0 6px 22px rgba(0,0,0,.06)` | — | Sombra sutil aplicada em cards e containers |

> ✨ **Observação:**  
> A paleta foi cuidadosamente desenvolvida para refletir o **equilíbrio entre elegância e natureza**, inspirando conforto visual e sofisticação artesanal — princípios centrais da **Casa Interiores**.


---
## Documentos Oficiais

| Documento                         | Arquivo                                    | Descrição                          |
| --------------------------------- | ------------------------------------------ | ---------------------------------- |
| Contrato de Desenvolvimento       | Contrato_Desenvolvimento_v1.3_assinado.pdf | Formaliza escopo, prazos e suporte |
| Política de Privacidade           | Politica_Privacidade.pdf                   | Conformidade com LGPD              |
| Termos de Uso                     | Termos_Uso.pdf                             | Regras e condições de uso          |
| Certificado de Qualidade HeinSoft | Certificado_Qualidade_HeinSoft.pdf         | Autenticação técnica e visual      |
| Proposta Comercial                | Proposta_Comercial.pdf                     | Apresentação executiva e valores   |



## 📦 Entregáveis e Resultado
| Item            | Status | Descrição                                |
| --------------- | ------ | ---------------------------------------- |
| Site Responsivo | ✅      | Layout fluido e moderno                  |
| SEO Técnico     | ✅      | Meta tags, sitemap e robots configurados |
| Performance     | ✅      | GTmetrix / SpeedVitals acima de 90%      |
| Documentação    | ✅      | README Enterprise + PDFs                 |
| Certificação    | ✅      | Certificado HeinSoft emitido             |
| Backup          | ✅      | Repositório e Drive sincronizados        |

- 📜 Verificação de Certificado: [ heinsoft.com.br/certificados/casa-interiores]( heinsoft.com.br/certificados/casa-interiores)

---
## 📊 Análise de Performance

| Plataforma             | Pontuação | Métrica Principal | Data       |
| ---------------------- | --------- | ----------------- | ---------- |
| **GTmetrix**           | A (98%)   | LCP: 1.3s         | 02/11/2025 |
| **SpeedVitals**        | 93/100    | CLS: 0.01         | 02/11/2025 |
| **Lighthouse (Local)** | 95/100    | Performance Geral | 02/11/2025 |

---
## 👤 Créditos e Contatos
Desenvolvido por: HeinSoft Company - *Acesse:* [🌐 heinsoft.com.br](https://www.heinsoft.com.br/)

- Email: 📧 contato@heinsoft.com.br

- 📱 [Whatsapp](https://api.whatsapp.com/send/?phone=5581993193905&text=Ol%C3%A1%21+Quero+conversar+sobre+construir+minha+presen%C3%A7a+online+com+um+site+otimizado.&type=phone_number&app_absent=0) - *Fale comigo*

-  📍 Gravatá — *Pernambuco, Brasil*

Responsável Técnico: *Pedro Henrique — CEO & Fundador*


## 📅 Roadmap de Desenvolvimento

| Fase                       | Descrição                                   | Status | Responsável       |
| -------------------------- | ------------------------------------------- | ------ | ----------------- |
| Planejamento & Briefing    | Coleta de informações e definição de escopo | ✅      | Pedro Henrique    |
| Design & Identidade Visual | Criação visual e layout                     | ✅      | Designer HeinSoft |
| Desenvolvimento Técnico    | Implementação e SEO inicial                 | ✅      | Pedro Henrique    |
| Testes & Publicação        | QA, otimização e deploy                     | ✅      | Pedro Henrique    |

## Histórico de Versões (Changelog)

| Versão     | Descrição                                              | Data     |
| ---------- | ------------------------------------------------------ | -------- |
| **v1.0.0** | Lançamento inicial e publicação do site                | Out/2025 |
| **v1.1.0** | Performance Update: otimização de imagens e scripts    | Nov/2025 |
| **v1.2.0** | Atualização de Catálogo: novos produtos e AOS refinado | Dez/2025 |
| **v1.3.0** | Revisão de conteúdo, SEO e auditoria GTmetrix (96%)    | Jan/2026 |

## ⚖️ Direitos Autorais

© 2025 HeinSoft Company. Todos os direitos reservados.
Reprodução, redistribuição ou uso comercial não autorizado é proibido.

