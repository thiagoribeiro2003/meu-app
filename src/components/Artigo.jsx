const Artigo = (props) => {
  return (
    <article>
      <h3> {props.titulo} </h3>
      <h4> {props.subtitulo} </h4>
      <h5>{props.cursos}</h5>
      <p>{props.children} </p>
    </article>
  );
};
export default Artigo;
