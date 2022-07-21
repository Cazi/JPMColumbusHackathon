import { FC } from "react";
import styled from "styled-components";

const RegisterPageContainer = styled.div`
    height: 100%;
    background-color: #F0EBE3;
`

const RegisterLocation = styled.div`
  padding-top: 95px;
  padding-left: 40px;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const RegisterFrame = styled.div`
  background-color: #e4dccf!important;
  border: 1.6px solid #324b4e;
  border-radius: 15px;
  font-size: 17px;
  height: 65%;
  width: 50%;
  padding-left: 35px;
  padding-top: 35px;
  margin-bottom: 35px;
`;

const RegisterInput = styled.input`
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

const HeaderLocation = styled.div`
    display: flex;
    justify-content: center;
`

const RegisterForm = styled.form`
 color:  #324b4e;
`;

const PadDiv = styled.div`
  display: flex;
  padding-top: 35px;
  justify-content: center;
`;

const RegisterButton = styled.button`
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

const RegisterPage: FC = () => {
    return(
        <RegisterPageContainer>
            <RegisterLocation>
                <RegisterFrame>
                    <RegisterForm>
                        <HeaderLocation>
                           <h1>Please Register</h1> 
                        </HeaderLocation>
                        <RegisterInput placeholder="First Name"/>
                        <PadDiv />
                        <RegisterInput placeholder="Last Name"/>
                        <PadDiv />
                        <RegisterInput placeholder="Email Address"/>
                        <PadDiv />
                        <RegisterInput placeholder="Password" type="password"/>
                        <PadDiv>
                            <RegisterButton>Register</RegisterButton>
                        </PadDiv>
                    </RegisterForm>
                </RegisterFrame>
            </RegisterLocation>
        </RegisterPageContainer>
    )
}

export default RegisterPage;