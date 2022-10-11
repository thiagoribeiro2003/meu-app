import Menu from "../Menu/Menu";

/* Objeto de estilos CSS */
const estilos = {
  color: "white",
  backgroundColor: "black",
};

const Cabecalho = () => {
  return (
    /* CSS IN JS: estilos CSS embutidos no meio DO JavaScript*/

    /* CSS inline (usa propriedade style e sintaxe de objeto)*/
    <header style={{ backgroundColor: "lightblue", textAlign: "center" }}>
      <h1 style={estilos}>Interface React</h1>
      <Menu />
    </header>
  );
};

export default Cabecalho;
