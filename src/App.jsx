import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Rodape from "./Rodape";

const App = () => {
  return (
    // Fragmento - tag vazia que serve para agrupar elementos sem ter que fazer uma nova div
    <>
      <Cabecalho />
      <Conteudo />
      <Rodape />
    </>
  );
};

export default App;
