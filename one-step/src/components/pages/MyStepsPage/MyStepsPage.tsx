import { FC } from "react";
import styled from "styled-components";
import news from "../../images/newspaper.png";
import calc from "../../images/calculator.png";
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
    display: flex;
    justify-content: center;
    padding-top: 20px;
    color: #324b4e;
    font-size: 18px;
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
    display: flex;
    height: 500px;
    width: 600px;
    border: 3px solid #324b4e;
    border-radius: 15px;
    background-color: #e4dccf;
    padding-top: 25px;
    padding-left: 25px;
    flex-direction: column;
    color: #324b4e;
`

const ImageLocation = styled.div`
    display: flex;
    justify-content: center;
`

const NewsBox = styled.div`
    display: flex;
    height: 500px;
    width: 600px;
    border: 3px solid #324b4e;
    border-radius: 15px;
    background-color: #e4dccf;
    padding-top: 25px;
    padding-left: 25px;
    flex-direction: column;
    color: #324b4e;
`
const ImageHold = styled.img`
    height: 200px;
    width: 200px;
`

const TextBoxDiv = styled.div`
`

const ParagraphConstraint = styled.div`
    padding: 10px;
`
const HeaderConstraint = styled.div`
    display: flex;
    justify-content: center;
`

const ParagraphChange = styled.p`
    text-align: center;
    color: red;
    font-weight: bold;
`

const BoldChange = styled.b`
    color: #324b4e;
    font-size: 25px;
`


const MyStepsPage: FC = () => {
    return (
        <MyStepsPageContainer>
            <TitleContainer><h1>Welcome to One Step!</h1></TitleContainer>
            <ChartContainer>
                <ParagraphChange>
                    <BoldChange>My Steps</BoldChange>
                    <br />
                    <br />
                    It appears that you are not logged in! Register today to get your graph up to date!
                    <h4> Below is a graph of your loan amount since inception. \n Looks like your on track to fully pay everything off!</h4>
                </ParagraphChange>
                <LoanPaydownChart data={myData} />
            </ChartContainer>
            <BoxedContainer>
                <CalculatorBox>
                    <ImageLocation>
                        <a href="/calculator"><ImageHold src={calc}></ImageHold></a>
                    </ImageLocation>
                    <TextBoxDiv>
                        <ParagraphConstraint>
                            <HeaderConstraint>
                                <h1>My Calculator</h1>
                            </HeaderConstraint>
                            <p>The One Step Calculator syncs with your graph to ensure that you are
                                one step closer to getting rid of your student loans. It utilizes the current
                                amount of your loan, the current interest rate of your loan, and the number of years you
                                plan to pay it to give you your monthly estimate of pay on that loan.
                            </p>

                            <p><a href="/calculator">Access My Calculator</a></p>
                        </ParagraphConstraint>
                    </TextBoxDiv>
                </CalculatorBox>
                <NewsBox>
                    <ImageLocation>
                        <a href="/news"><ImageHold src={news}></ImageHold></a>
                    </ImageLocation>
                    <TextBoxDiv>
                        <ParagraphConstraint>
                            <HeaderConstraint>
                                <h1>My News</h1>
                            </HeaderConstraint>
                            <p>One Step caters news for you in correspondence to what is happening with
                                student loans in your community. With your news being readily available to you,
                                you never need to worry about what may be happening with student loans. Keep up
                                to date on your student loan news so you can be one step closer to getting rid of
                                your student loans.
                            </p>

                            <p><a href="/news">Access My News</a></p>
                        </ParagraphConstraint>
                    </TextBoxDiv>
                </NewsBox>
            </BoxedContainer>
        </MyStepsPageContainer>
    )
}

export default MyStepsPage;