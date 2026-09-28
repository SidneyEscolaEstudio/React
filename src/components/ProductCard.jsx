function ProductCard() {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src="produto.jpg" alt="Produto" />
      </div>

      <h3 className="product-name">
        Smartphone Galaxy S24
      </h3>

      <p className="product-description">
        Desempenho de outro nível com câmera incrível.
      </p>

      <div className="product-price">
        R$ 2.499,00
      </div>

      <button className="btn-comprar">
        Comprar
      </button>
    </div>
  );
}

export default ProductCard;