/* Acesso às props usando destructuring de objeto */
const Artigo = ({ titulo, subtitulo, cursos, children }) => {
  return (
    <article>
      <h3> {titulo} </h3>
      <h4> {subtitulo} </h4>
      <h5>Curso {cursos}</h5>
      <p>{children} </p>
    </article>
  );
};
export default Artigo;
