import { useState } from "react";

const Rodape = () => {
  const [estilos, setEstilos] = useState({
    textAlign: "Center",
    textTransform: "uppercase",
    border: "solid 2px red",
  });

  const esconder = () => setEstilos({ display: "none" });
  const exibir = () => setEstilos({ display: "block" });

  return (
    <>
      <p>
        <span onMouseOver={esconder}> Esconder </span> |
        <span onMouseOver={exibir}> Exibir </span>
      </p>
      <footer
        style={estilos}
        onMouseOver={() => setEstilos({ display: "none" })}
      >
        <h2>Rodapé!</h2>
      </footer>
    </>
  );
};
export default Rodape;
