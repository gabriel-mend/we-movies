# WeMovies

Aplicação de catálogo e carrinho de compras construída com **Next.js (App Router)** e **TypeScript**. Foco em fidelidade ao layout, UX responsiva e código limpo.

> **Resumo rápido**
>
> - Listagem de filmes com imagem, preço e ação de compra.
> - Carrinho com incremento/decremento/remoção e totais.
> - Tratamento de erro de carregamento e UI responsiva.
> - Testes unitários com **Vitest + React Testing Library**.

---

## Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS** (+ utilitários tv/clsx/tw-merge se aplicável)
- **shadcn/ui** (primitivos de UI acessíveis)
- **Vitest** + **@testing-library/react** + **jsdom**

---

## Funcionalidades

- ✔️ Catálogo de filmes a partir de uma API/JSON remoto.
- ✔️ Adicionar ao carrinho, alterar quantidade e remover.
- ✔️ Cálculo de subtotal/total com formatação monetária.
- ✔️ Responsividade mobile/desktop via breakpoints.
- ✔️ Fallback de erro quando a API está indisponível.

---

## Link produção
https://we-movies-gilt.vercel.app

---

## Pré‑requisitos

- **Node.js** ≥ 18.18 (recomendado 20 LTS)
- **pnpm** (ou npm/yarn; o projeto usa pnpm por padrão)

---

## Como rodar

1. **Instale dependências**

   ```bash
   pnpm install
   ```

2. **Configure variáveis de ambiente** Crie um arquivo **.env.local** na raiz baseado no exemplo abaixo:

   ```env
   # Exemplo — ajuste para sua API/base/JSON
   API_URL=
   ```

3. **Dev server**

   ```bash
   pnpm dev
   ```

4. **Build + preview**

   ```bash
   pnpm build
   pnpm start
   ```

---

## Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint .",
  "typecheck": "tsc --noEmit",
  "test": "vitest run",
  "test:watch": "vitest",
  "coverage": "vitest run --coverage"
}
```

---

## Estrutura do projeto (resumo)

```
src/
  app/                # rotas (App Router)
  business/           # entidades e casos de uso
  infrastructure/     # gateways/http/mappers
  presentation/       # componentes e telas
  presentation/shared/contexts   # StoreCartProvider / hooks
  presentation/screens/home/...   # Home, MovieCard etc.
```

---

## Padrões & Qualidade

- **Lint**: ESLint Flat Config com plugins `unused-imports`, `react-hooks`, `jsx-a11y`.
- **Format**: Prettier.
- **Erros HTTP**: verificação de `response.ok` e **timeout** via `AbortController`.
- **Acessibilidade**: `aria-label` em botões icônicos, `aria-live` para totais, foco visível.

---

## Decisões de arquitetura (resumo)

- **App Router** pela melhor integração com streaming/SSR e segmentação.
- **Separação** em camadas (UI ↔ casos de uso ↔ gateways) para testabilidade.
- **Tailwind** para velocidade e consistência de layout; shadcn para acessibilidade.

---

## Transparência

- Ferramentas de IA utilizadas:

- GitHub Copilot: apoio durante o desenvolvimento com autocomplete e sugestões pontuais de código.

- ChatGPT: utilizado para a criação deste README e revisão textual.

- O código-fonte da aplicação foi desenvolvido manualmente; nenhuma IA foi usada para gerar trechos críticos de regra de negócio.

---

## Agradecimentos pelo Desafio

`Agradeço à Wefit por propor e compartilhar este desafio técnico. O escopo e o layout disponibilizados direcionaram as principais decisões de arquitetura e a priorização de UX e acessibilidade ao longo do desenvolvimento. Foi uma ótima oportunidade para demonstrar práticas de código limpo, organização por camadas e testes, além de alinhar a aplicação às expectativas do case. Obrigado pelo tempo dedicado à avaliação.`
