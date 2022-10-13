import Artigo from "../Artigo";
import { useState } from "react";

const Conteudo = () => {
  const [corFundo, setCorFundo] = useState();
  const [contador, setContador] = useState(0);

  const fundoAmarelo = () => setCorFundo("#FFEE71");
  const fundoAzul = () => setCorFundo("lightblue");
  const fundoVermelho = () => setCorFundo("lightpink");

  const atualizarContagem = () => setContador(contador + 1);

  return (
    <main style={{ backgroundColor: corFundo }}>
      <button onMouseOver={fundoAmarelo}>Amarelo</button>
      <button onMouseOver={fundoAzul}>Azul</button>
      <button onMouseOver={fundoVermelho}>Vermelho</button>

      <section>
        <h2 onClick={atualizarContagem}>Contador: {contador}</h2>
        <h2>Conteúdo do site.....</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          voluptatibus, voluptatum illum sequi blanditiis omnis veniam, esse
          eveniet quasi libero, asperiores numquam quo atque fugit in ipsam.
          Modi, nulla nemo.
        </p>

        <Artigo />
        <Artigo />
        <Artigo />
      </section>
    </main>
  );
};
export default Conteudo;
