import { FC } from "react";
import styled from "styled-components";

const MyStepsPageContainer = styled.div`
    height: 100vh;
    background-color: #F0EBE3;
`

const MyStepsPage: FC = () => {
    return(
        <MyStepsPageContainer>
            My Steps
        </MyStepsPageContainer>
    )
}

export default MyStepsPage;