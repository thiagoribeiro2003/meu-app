import styled from "styled-components";
import Menu from "../Menu";

const periodo = "noturno";

/* Tagged Template para uso com styled components */
const StyledCabecalho = styled.header`
  background-color: ${periodo === "noturno" ? "lightblue" : "darkblue"};
  text-align: center;

  h1 {
    color: red;
  }

  p {
    font-size: 2rem;
    font-weight: bold;
    color: blue;

    &:hover {
      color: red;
      cursor: pointer;
    }
  }
`;

const Cabecalho = () => {
  return (
    <StyledCabecalho>
      <h1>Interface React</h1>
      <Menu />
      <p>Teste</p>
    </StyledCabecalho>
  );
};

export default Cabecalho;
