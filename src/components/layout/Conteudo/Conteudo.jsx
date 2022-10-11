// Comentário JS ctrl ;
/* Comentário JS shift alt a */
import Artigo from "../../Artigo";
import estilos from "./Conteudo.module.css";

const Conteudo = () => {
  return (
    <main>
      <section>
        {/*Aqui é um comentário dentro do jsx*/}
        <h2 className={estilos.subtitulo}>Conteúdo do site.....</h2>
        <span className={`${estilos.destaque} ${estilos.sombraTexto}`}>
          Lorem
        </span>
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
