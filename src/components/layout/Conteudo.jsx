import Artigo from "../Artigo";
const Conteudo = () => {
  const curso = [
    "Administração",
    "Análise e Desenvolvimento de Sistemas",
    "Psicologia",
  ];

  return (
    <main>
      <section>
        <h2>Conteúdo do site.....</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          voluptatibus, voluptatum illum sequi blanditiis omnis veniam, esse
          eveniet quasi libero, asperiores numquam quo atque fugit in ipsam.
          Modi, nulla nemo.
        </p>

        <Artigo cursos={curso[0]} titulo="Artigo 1" subtitulo="Subtitulo 1">
          Esse é o texto do primeiro artigo....
        </Artigo>

        <Artigo cursos={curso[1]} titulo="Artigo 2" subtitulo="Subtitulo 2">
          Esse é o texto do segundo artigo....
        </Artigo>

        <Artigo cursos={curso[2]} titulo="Artigo 3" subtitulo="Subtitulo 3">
          Esse é o texto do terceiro artigo....
        </Artigo>
      </section>
    </main>
  );
};
export default Conteudo;
