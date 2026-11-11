// import { useState } from "react";

function ProdutoCard({ nome, preco, imagem, descricao }) {
  // Cada card guarda seu próprio favorito. As props continuam vindo de Home.
  // const [favorito, setFavorito] = useState(false);

  function alternarFavorito() {
    setFavorito((valorAnterior) => !valorAnterior);
  }

  return (
    <div className="produto-card">
      {imagem ? (
        <img src={imagem} alt={nome} className="produto-imagem" />
      ) : (
        <div className="produto-imagem" role="img" aria-label={`Imagem de ${nome} em breve`}>
          Imagem em breve
        </div>
      )}

      <h3>{nome}</h3>
      <p>{descricao}</p>
      <strong>
        {preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </strong>
      <div className="produto-acoes">
        {/* <button
          type="button"
          className="botao-favorito"
          aria-label={`Favorito de ${nome}`}
          aria-pressed={favorito}
          onClick={alternarFavorito}
        >
          {favorito ? "♥ Favoritado" : "♡ Favoritar"}
        </button> */}
        <button type="button">Comprar</button>
      </div>
    </div>
  );
}

export default ProdutoCard;
