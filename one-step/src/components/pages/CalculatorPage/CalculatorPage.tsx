import { FC, FormEvent } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const CalculatorPageContainer = styled.div`
  height: 100vh;
  background-color: #7E9D9C;  
`;

const CalculatorForm = styled.form`
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

const sendForm = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault()

  const {loanAmount, loanTerm, interestRate} = event.target as typeof event.target & {
    loanAmount: {value: number}
    loanTerm: {value: number}
    interestRate: {value: number}
  }

  const J = interestRate.value / 100.0 / 12
  let N = 12 * loanTerm.value
  let monthlyPayments = (loanAmount.value * (J / (1 - Math.pow(1 + J, -1 * N)))).toFixed(2)

  let calculate:HTMLHeadingElement = document.getElementById("calculate") as HTMLHeadingElement;

  calculate.innerText = '$' + `${monthlyPayments}` + " in monthly payments";
}
 
const CalculatorPage: FC = () => { 
  return <CalculatorPageContainer>
    <CalculatorLocation>
      <CalculatorFrame>
        <CalculatorForm onSubmit={sendForm}>
          <b>Loan Amount</b>
          <CalculatorInput type="number" id="loanAmount"/>
          <PadDiv />
          <b>Loan Term in Years</b>
          <CalculatorInput type="number" id="loanTerm"/>
          <PadDiv />
          <b>Interest Rate Per Year</b>
          <CalculatorInput type="number" id="interestRate"/>
          <PadDiv>
            <CalculatorButton>Calculate</CalculatorButton>
          </PadDiv>
          <div id="calculate"></div>
        </CalculatorForm>
      </CalculatorFrame>
    </CalculatorLocation>
    </CalculatorPageContainer>;
};
 
export default CalculatorPage;
 

