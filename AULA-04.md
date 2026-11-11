# Mobile Shop 2026 — Aula 04 · Sprint 03

## ANTES (Aula 03)

Trechos da versão `beef20f`.

```jsx
{produtos.map((produto) => (
  <ProductCard
    key={produto.id}
    nome={produto.nome}
    preco={produto.preco}
    imagem={produto.imagem}
    descricao={produto.descricao}
  />
))}
```

- `produtos.map(...)` percorre o array e cria um card por item.
- `<ProductCard` chama o componente reutilizável.
- `key={produto.id}` identifica cada card para o React.
- `nome={produto.nome}` envia o texto do título.
- `preco={produto.preco}` envia o número que o card formata em reais.
- `imagem={produto.imagem}` envia o caminho da imagem.
- `descricao={produto.descricao}` envia a descrição.
- `/>` fecha o componente. `))}` encerra o JSX retornado, o `map()` e a expressão.

Em `ProductCard.jsx`, `function ProdutoCard({ nome, preco, imagem, descricao })` recebe as props. A linha `<button type="button">Comprar</button>` exibe o botão visual, que na Aula 03 não tinha evento de clique.

## DEPOIS (Aula 04)

### 1. Criar o primeiro estado

Em `src/components/Contador.jsx`, comece por estas linhas.

```jsx
import { useState } from "react";
const [contador, setContador] = useState(0);
<p aria-live="polite">Contador: {contador}</p>
```

- O `import` disponibiliza o Hook.
- Dentro de `Contador()`, `useState(0)` inicia o valor em zero. `contador` contém o valor da renderização atual e `setContador` solicita a próxima atualização.
- Dentro do `return`, `{contador}` coloca o número na tela. `aria-live="polite"` permite anunciar a mudança com leitor de tela.

### 2. Ligar os cliques ao estado

```jsx
onClick={() => setContador((valor) => valor - 1)}
onClick={() => setContador((valor) => valor + 1)}
```

- No botão **−**, a função passada a `onClick` roda quando há um clique. O React entrega o valor anterior à função de atualização, que subtrai 1.
- No botão **+**, o fluxo é o mesmo e a função soma 1. A nova renderização mostra o resultado. O exemplo aceita valores negativos para praticar as duas operações.
- Em `Home.jsx`, o novo `import Contador` traz o componente e `<Contador />` o exibe antes do catálogo. Para repetir a missão dos slides, experimente trocar `useState(0)` por `useState(5)` e recarregar a página.

### 3. Aplicar a mesma ideia ao favorito

Em `src/produtos/ProductCard.jsx`, importe `useState` e adicione estas linhas no início de `ProdutoCard()`.

```jsx
const [favorito, setFavorito] = useState(false);

function alternarFavorito() {
  setFavorito((valorAnterior) => !valorAnterior);
}
```

- `useState(false)` começa com o produto desfavoritado.
- `function alternarFavorito()` declara a função que será chamada pelo botão.
- `setFavorito(...)` recebe uma função que inverte o valor anterior com `!`.
- `}` encerra a função. Como o Hook fica dentro do card, cada item do `map()` tem seu próprio estado.

No botão de favorito, leia as linhas na ordem em que aparecem.

- `type="button"` define um botão de ação.
- `className="botao-favorito"` associa o visual ao CSS.
- `aria-label` identifica o produto para leitores de tela.
- `aria-pressed={favorito}` comunica se o botão está ativado e permite ao CSS mudar a cor.
- `onClick={alternarFavorito}` entrega a função ao React para chamar no clique.
- `{favorito ? "♥ Favoritado" : "♡ Favoritar"}` escolhe o texto e o ícone com base no valor atual.
- `</button>` fecha o controle. O botão Comprar continua ao lado, reservado para o carrinho da Aula 05.

## Demonstração

1. Rode `npm run dev` na pasta do projeto e abra o endereço exibido.
2. No contador, clique em **+**, **+**, **−**. A sequência deve ser 0 → 1 → 2 → 1.
3. Favorite o Galaxy. Os outros cards devem continuar em **Favoritar**.
4. Favorite o notebook e desfavorite o Galaxy. Só o notebook deve continuar em **Favoritado**.
5. Recarregue a página para ver o contador voltar a 0 e os favoritos voltarem a falso. São estados locais da sessão da página.
