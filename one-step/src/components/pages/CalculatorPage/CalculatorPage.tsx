import { FC } from "react";
import styled from "styled-components";
const CalculatorPageContainer = styled.div`
  height: 100vh;
  background-color: blue;
`;
const CalculatorPage: FC = () => {
  return <CalculatorPageContainer>Calculator Page</CalculatorPageContainer>;
};

export default CalculatorPage;
