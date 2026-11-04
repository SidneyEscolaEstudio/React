import ProductCard from "../produtos/ProductCard";

// Cada objeto reúne os dados de um produto do catálogo.
const produtos = [
  {
    id: 1,
    nome: "Smartphone Galaxy S24",
    preco: 2499,
    imagem: "/imagens/galaxy-s24.png",
    descricao: "Desempenho de outro nível com câmera incrível",
    categoria: "Smartphones",
  },
  {
    id: 2,
    nome: "Notebook Ultra Book",
    preco: 3199,
    imagem: "/imagens/ultrabook.png",
    descricao: "Leve, rápido e poderoso para o dia a dia.",
    categoria: "Notebooks",
  },
  {
    id: 3,
    nome: "Fone Bluetooth Sound+",
    preco: 299,
    imagem: "/imagens/fone-bluetooth.png",
    descricao: "Som de alta qualidade e bateria duradoura.",
    categoria: "Acessórios",
  },
];

function Home() {
  return (
    <main className="home-container">
      <div className="welcome">
        <h2>Bem-vindo à Mobile Shop | 2026</h2>
        <p>
          Nossa loja será construída durante todo o semestre.
          Hoje construimos nossa Home Page, com o cabeçalho e rodapé, além de um card de produto.
        </p>
      </div>

      <section className="products" aria-label="Catálogo de produtos">
        {produtos.map((produto) => (
          <ProductCard
            key={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            imagem={produto.imagem}
            descricao={produto.descricao}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
