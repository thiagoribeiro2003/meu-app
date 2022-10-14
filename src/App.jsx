import { BrowserRouter, Route, Switch } from "react-router-dom";

import Cabecalho from "./components/layout/Cabecalho";
import Rodape from "./components/layout/Rodape";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Servicos from "./pages/Servicos";

const App = () => {
  return (
    <>
      {/* Fragmento - tag vazia que serve para agrupar elementos sem ter que fazer uma nova div */}
      <BrowserRouter>
        <Cabecalho />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/produtos">
            <Produtos />
          </Route>
          <Route path="/servicos">
            <Servicos />
          </Route>
        </Switch>
        <Rodape />
      </BrowserRouter>
    </>
  );
};

export default App;
