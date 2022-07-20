import { FC } from "react";
import styled from "styled-components";
import { myData } from "../../organisms/LoanPaydownChart/Data";
import LoanPaydownChart from "../../organisms/LoanPaydownChart/StepsChart";

const MyStepsPageContainer = styled.div`
    height: 100vh;
    background-color: #F0EBE3;
`

const ChartContainer = styled.div`
    padding-top: 20px;
    padding-left: 20px;
    height: 63%;
`

const TitleContainer = styled.div`
    padding: 20px;
`

const BoxedContainer = styled.div`
    background-color: #F0EBE3;
    padding-top: 200px;
    display: flex;
    align-items: row;
    justify-content: space-around;
    padding-bottom: 100px;
`

const CalculatorBox = styled.div`
    height: 500px;
    width: 600px;
    background-color: gray;
`

const NewsBox = styled.div`
    height: 500px;
    width: 600px;
    background-color: gray;
`

const MyStepsPage: FC = () => {
    return(
        <MyStepsPageContainer>
            <TitleContainer><h1>Welcome to One Step</h1></TitleContainer>
            <ChartContainer>
                <h2>My Steps: </h2>
               <LoanPaydownChart data={myData} /> 
            </ChartContainer>
            <BoxedContainer>
                <CalculatorBox>s</CalculatorBox>
                <NewsBox>f</NewsBox>
            </BoxedContainer>
        </MyStepsPageContainer>
    )
}

export default MyStepsPage;