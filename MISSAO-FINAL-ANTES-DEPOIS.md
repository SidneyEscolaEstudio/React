# Missão Final - Aulas 03 e 04, Sprints 02 e 03

Base de comparação: main no commit d878e939e84a015c4a80b2234e01a9458652ea3a.
Esta branch é uma preparação isolada. A main e as personalizações anteriores foram preservadas.

## Antes

Home.jsx já tinha três objetos no array e um map com key={produto.id}, passando nome, preco, imagem e descricao. ProductCard.jsx declara ProdutoCard e exporta default. O exercício de favorito estava comentado, com alternarFavorito ainda referenciando setFavorito sem a declaração ativa. O botão Comprar era visual. Contador.jsx e o CSS de apoio já existiam.

## Depois

ProductCard.jsx importa useState, declara quantidade 1 e favorito false em cada instância. aumentar usa q => q + 1. diminuir usa Math.max(1, q - 1). alternarFavorito inverte o booleano. O JSX mostra controles com rótulos acessíveis, disabled no mínimo e aria-pressed no favorito.

Subtotal = preco * quantidade é uma constante derivada, formatada em BRL. Não há estado duplicado para subtotal. Os controles substituem o botão Comprar visual nesta etapa, sem checkout.

Home mantém o array, map, ids e props. Apenas o texto de boas-vindas passa a descrever a missão. App.css mantém todas as regras anteriores e recebe estilos novos ao final.

## Checkpoints

1. Três imagens locais carregam e os três preços estão corretos.
2. Galaxy em quantidade 2: subtotal R$ 4.998,00. Notebook permanece em 1.
3. Favoritar um card não muda os outros.
4. Menos desativado em 1. Recarregar reinicia estados locais.
5. Adicionar um quarto objeto de id único a Home gera outro card pelo mesmo map.

## Desafio individual

Adicione um objeto com id 4, nome próprio, preco numérico, descricao e imagem existente. Não duplique JSX. Com preço 199 e duas unidades, espere R$ 398,00. A versão de referência permanece com três produtos para reservar o quarto como desafio.

## Limite didático

Revisão pré-AV1 de 20 pontos, conforme orientação atual. Total geral é complementar: exige demonstrar estado no componente pai e comunicação entre componentes. Não cobrar esse item sem ensino específico a todas as turmas.

## Execução

Na pasta com package.json: npm ci, npm run dev, npm run build e npm run lint. Consulte o relatório do pacote para as verificações realizadas. O projeto-base separado da Aula 03 permite refazer a evolução sem apagar esta solução.
