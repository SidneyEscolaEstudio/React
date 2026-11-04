function ProdutoCard({ nome, preco, imagem, descricao }) {
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
      <button type="button">Comprar</button>
    </div>
  );
}

export default ProdutoCard;
