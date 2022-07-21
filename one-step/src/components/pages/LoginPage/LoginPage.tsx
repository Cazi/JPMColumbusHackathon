import { FC } from "react";
import styled from "styled-components";

const LoginPageContainer = styled.div`
    height: 100vh;
    background-color: #F0EBE3;
`

const LoginPage: FC = () => {
    return(
        <LoginPageContainer>
            Login
        </LoginPageContainer>
    )
}

export default LoginPage;