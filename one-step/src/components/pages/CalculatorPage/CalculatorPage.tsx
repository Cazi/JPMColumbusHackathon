import { FC } from "react";
import styled from "styled-components";
const CalculatorPageContainer = styled.div`
  height: 100vh;
  background-color: #7E9D9C;  
`;
 
const CalculatorLocation = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: center;
  height: 100vh;
`;
 
const CalculatorFrame = styled.div`
  background-color: #f3f4f8!important;
  border: 1.6px solid black;
  border-radius: 10px;
  height: 50%;
  width: 45%;
  padding-left: 35px;
  padding-top: 35px;
`;
 
const CalculatorInput = styled.input`
  padding-top: 20px;
  background-color: #fff;
  border: .0625rem solid #515260;
  border-radius: 4px;
  color: #151515;
  display: block;
  font-family: CircularStd-Book,Arial,sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  height: 2rem;
  padding: .5rem 1rem;
  width: 90%;
`;
 
const PadDiv = styled.div`
  display: flex;
  padding-top: 35px;
  justify-content: center;
`;
 
const CalculatorButton = styled.button`
  display: inline-block;
  padding: 0.4em 0.8em;
  background-color: blue;
  border: none;
  border-radius: 4px;
  font-family: 'PT Sans', sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  cursor: pointer;
  line-height: normal;
  padding: .75rem .75rem;
  padding-left: 50px;
  padding-right: 50px;
  `;
 
const CalculatorPage: FC = () => {
  return <CalculatorPageContainer>
    <CalculatorLocation>
      <CalculatorFrame>
        <b>Loan Amount</b>
        <CalculatorInput />
        <PadDiv />
        <b>Loan Term in Years</b>
        <CalculatorInput />
        <PadDiv />
        <b>Interest Rate Per Year</b>
        <CalculatorInput />
        <PadDiv>
          <CalculatorButton>Calculate</CalculatorButton>
        </PadDiv>
      </CalculatorFrame>
    </CalculatorLocation>
    </CalculatorPageContainer>;
};
 
export default CalculatorPage;
 

