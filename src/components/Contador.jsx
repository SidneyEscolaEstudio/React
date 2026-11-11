import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <section className="contador-aula" aria-labelledby="titulo-contador">
      <h2 id="titulo-contador">Contador da Aula 04</h2>
      <p aria-live="polite">Contador: {contador}</p>

      {/* Cada clique calcula o próximo valor a partir do anterior. */}
      <button type="button" aria-label="Diminuir contador" onClick={() => setContador((valor) => valor - 1)}>
        −
      </button>
      <button type="button" aria-label="Aumentar contador" onClick={() => setContador((valor) => valor + 1)}>
        +
      </button>
    </section>
  );
}

export default Contador;
