import { FC } from "react";
import styled from "styled-components";
import { myData } from "../../organisms/LoanPaydownChart/Data";
import LoanPaydownChart from "../../organisms/LoanPaydownChart/StepsChart";

const MyStepsPageContainer = styled.div`
    height: 100vh;
    background-color: #F0EBE3;
`

const MyStepsPage: FC = () => {
    return(
        <MyStepsPageContainer>
            <LoanPaydownChart data={myData} />
        </MyStepsPageContainer>
    )
}

export default MyStepsPage;