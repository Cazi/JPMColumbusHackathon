import { FC, FormEvent, MouseEvent } from "react";
import styled from "styled-components";

const CalculatorPageContainer = styled.div`
  background-color: #F0EBE3;
  display: flex;
  flex-direction: row;
`;
 
const CalculatorLocation = styled.div`
  padding-top: 95px;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-around;
  height: 100vh;
`;
const ColumnOne = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

`;

const ColumnTwo = styled.div`
  display: flex;
  flex-direction: column; 
  width: 50%;
`;

const CalculatorFrame = styled.div`
  background-color: #e4dccf!important;
  border: 1.6px solid #324b4e;
  border-radius: 15px;
  font-size: 17px;
  height: 75%;
  width: 85%;
  padding-left: 35px;
  padding-top: 35px;
  margin-bottom: 35px;
`;
 
const CalculatorInput = styled.input`
  padding-top: 20px;
  background-color: white;
  border: .0625rem solid #324b4e;
  border-radius: 14px;
  color: #black;
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
  background-color: #576f72;
  border: #324b4e;
  border-radius: 10px;
  font-family: 'PT Sans', sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #FFF;
  cursor: pointer;
  line-height: normal;
  padding: .75rem .75rem;
  padding-left: 50px;
  padding-right: 50px;
  margin-bottom: 10px;
`;

const CalculatorForm = styled.form`
 color:  #324b4e;
`;

const CalculatedDisplay = styled.div`
  background-color: #e4dccf!important;
  color:  #324b4e;
  border: 1.6px solid #324b4e;
  border-radius: 15px;
  font-size: 16px;
  height: 50%;
  width: 75%;
  padding-left: 35px;
  margin-bottom: 90px;
`;

const CalcSwitch = styled.input`

`

const SwitchDiv = styled.div`
  display: flex;
  flex-direction: row;
`
const TitleSpace = styled.div`
  width: 100%;
  height: 2.5%;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  color: #324b4e
`;

const StyledSubTitle = styled.h1`
  color: #324b4e;
`;

const sendForm = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault()

  const {loanAmount, loanTerm, interestRate} = event.target as typeof event.target & {
    loanAmount: {value: number}
    loanTerm: {value: number}
    interestRate: {value: number}
  }

  const J = interestRate.value / 100.0 / 12

  let lty:HTMLDivElement = document.getElementById("lty") as HTMLDivElement;
  let N = 0;
  if (lty.innerHTML === 'Loan Term in Months') {
    N = loanTerm.value
  } else {
    N = 12 * loanTerm.value
  }
   
  let monthlyPayments = (loanAmount.value * (J / (1 - Math.pow(1 + J, -1 * N)))).toFixed(2)
  let interestPaid = (Number(monthlyPayments) * N - loanAmount.value).toFixed(2);

  let Q = N / 2;
  let high = (loanAmount.value * (J / (1 - Math.pow(1 + J, -1 * Q)))).toFixed(2)

  let calculate:HTMLHeadingElement = document.getElementById("calculate") as HTMLHeadingElement;
  let highEnd:HTMLHeadingElement = document.getElementById("high-end") as HTMLHeadingElement;
  let totalInterest:HTMLHeadingElement = document.getElementById("total-interest") as HTMLHeadingElement;

  calculate.innerText = 'Cost: $' + `${monthlyPayments}` + " in monthly payments";
  highEnd.innerText = 'High-End Cost: $' + `${high}` + " in monthly payments";
  totalInterest.innerHTML = 'Total Interest Paid: $' + `${interestPaid}`; 
}

const buttonHandler = async (event: MouseEvent<HTMLInputElement>) => {
  
  let c2m:HTMLDivElement = document.getElementById("c2m") as HTMLDivElement;
  let lty:HTMLDivElement = document.getElementById("lty") as HTMLDivElement;

  if (c2m.innerHTML === "Change to months: ") {
    c2m.innerHTML = 'Change to years: ';
    lty.innerHTML = 'Loan Term in Months';
  } else {
    c2m.innerHTML = 'Change to months: ';
    lty.innerHTML = 'Loan Term in Years';
  }
};

 
const CalculatorPage: FC = () => { 
  return <CalculatorPageContainer>

    <ColumnOne> <CalculatorLocation>
      <CalculatorFrame>
        <CalculatorForm onSubmit={sendForm}>
          <b>Loan Amount</b>
          <CalculatorInput type="number" id="loanAmount" placeholder="Enter Your Loan Amount"/>
          <PadDiv />
          <b><div id="lty">Loan Term in Years</div></b>
          <SwitchDiv>
            <div id="c2m">Change to months: </div>
            <div><CalcSwitch type="checkbox" onClick={buttonHandler} name="button1"></CalcSwitch></div>
          </SwitchDiv>
          <CalculatorInput type="number" id="loanTerm" placeholder="Enter Your Loan Term"/>
          <PadDiv />
          <b>Interest Rate Per Year</b>
          <CalculatorInput type="number" id="interestRate" placeholder="Enter Your Interest Rate"/>
          <PadDiv>
            <CalculatorButton>Calculate</CalculatorButton>
          </PadDiv>
          
        </CalculatorForm>
      </CalculatorFrame>
      <CalculatedDisplay>
        <h2><div id="calculate">Moderate Monthly Payment: </div></h2>
        <h2><div id="high-end">High-End Monthly Payment: </div></h2>
        <h2><div id="total-interest">Total Interest Paid: </div> </h2>
      </CalculatedDisplay>
    </CalculatorLocation>
    </ColumnOne>
    <ColumnTwo> 
      <TitleSpace>
        <StyledSubTitle>
          <p>Things to know</p>
        </StyledSubTitle>
      </TitleSpace>
<br/>
<br/>
<br/>
    <div>
    <b>Loan Amount</b>
    <p>The total amount of student loans you currently have or the amount you expected upon graduating</p>
<br/>
    <b>Loan Term</b>
    <p>How long do you or the provider expect to be paying back this loan?</p>
<br/>
    <b>Interest Rate</b>
    <p>The proportion of a loan that is charged as interest to the borrower</p>
<br/>
    <b>Moderate Monthly Payment</b>
    <p>The amount needed to pay to pay the loan in the full loan term</p>
<br/>
    <b>High End Monthly Payment</b>
    <p>The amount needed to pay the loan in half the time</p>
<br/>
    </div>
    </ColumnTwo>
    </CalculatorPageContainer>;
};
 
export default CalculatorPage;
 

