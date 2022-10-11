import Cabecalho from "./components/layout/Cabecalho/Cabecalho";
import Conteudo from "./components/layout/Conteudo/Conteudo";
import Rodape from "./components/layout/Rodape/Rodape";

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
