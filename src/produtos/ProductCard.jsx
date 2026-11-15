import { useState } from "react";

function ProdutoCard({ nome, preco, imagem, descricao }) {
  // AULA 04: cada instância criada pelo map tem sua própria memória.
  const [quantidade, setQuantidade] = useState(1);
  const [favorito, setFavorito] = useState(false);
  function aumentar() {
    setQuantidade((q) => q + 1); // Usa a quantidade anterior.
  }
  function diminuir() {
    setQuantidade((q) => Math.max(1, q - 1)); // Mínimo de uma unidade.
  }
  function alternarFavorito() {
    setFavorito((f) => !f); // Inverte o booleano anterior.
  }
  // Valor derivado: não precisa de outro useState.
  const subtotal = preco * quantidade;
  const moeda = (valor) => valor.toLocaleString("pt-BR", {
    style: "currency", currency: "BRL",
  });
  return (
    <div className="produto-card">
      {imagem ? (
        <img src={imagem} alt={nome} className="produto-imagem" />
      ) : (
        <div className="produto-imagem" role="img"
          aria-label={`Imagem de ${nome} em breve`}>Imagem em breve</div>
      )}
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <strong>{moeda(preco)}</strong>
      <div className="produto-acoes">
        <button type="button" className="botao-favorito"
          aria-label={`Favorito de ${nome}`} aria-pressed={favorito}
          onClick={alternarFavorito}>
          {favorito ? "♥ Favoritado" : "♡ Favoritar"}
        </button>
      </div>
      <div className="quantidade" aria-label={`Quantidade de ${nome}`}>
        <button type="button" onClick={diminuir} disabled={quantidade === 1}
          aria-label={`Diminuir ${nome}`}>-</button>
        <span aria-live="polite">{quantidade}</span>
        <button type="button" onClick={aumentar}
          aria-label={`Aumentar ${nome}`}>+</button>
      </div>
      <p className="subtotal" aria-live="polite">Subtotal: {moeda(subtotal)}</p>
      {/* Os controles substituem Comprar, antes apenas visual.
          Carrinho e total geral serão estudados com estado compartilhado. */}
    </div>
  );
}
export default ProdutoCard;
