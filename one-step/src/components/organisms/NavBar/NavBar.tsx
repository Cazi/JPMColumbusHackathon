import { FC } from "react";
import styled from "styled-components";
import { PATHS } from "../../../constants";
import NavBarButton from "../../atoms/NavBarButton";
import AccountButton from "../../atoms/AccountButton";

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
  background-color: #324B4E;
`;

const StyledTitle = styled.h2`
  color: #f0ebe3;
`;



const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  width: 100%;
`;

const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const ExtraDiv = styled.div`
  display: flex;
  align-items: row;
  justify-content: space-around;
`

const AdjustDiv = styled.div`
  padding-left: 500px;
`

const LoginLogout = styled.div`
  display: flex;
  align-items: row;
  justify-content: center;

`
const NavBar: FC = () => {
  return (
    <NavBarContainer>
      <TitleContainer>
        <ExtraDiv>
          <AdjustDiv><StyledTitle>One Step</StyledTitle></AdjustDiv>
          <LoginLogout>
            <AccountButton title="Login" to={PATHS.LOGIN}></AccountButton>
            <AccountButton title="Register" to={PATHS.REGISTER}></AccountButton>
          </LoginLogout>
        </ExtraDiv>
        <hr/>
      </TitleContainer>
      <ButtonContainer>
        <NavBarButton title="My Steps" to={PATHS.STEPS}></NavBarButton>
        <NavBarButton title="News" to={PATHS.NEWS}></NavBarButton>
        <NavBarButton title="Calculator" to={PATHS.CALCULATOR}></NavBarButton>
        <NavBarButton title="Forgiveness" to={PATHS.FORGIVENESS}></NavBarButton>
        <NavBarButton title="About Us" to={PATHS.LEARN_MORE}></NavBarButton>
      </ButtonContainer>
    </NavBarContainer>
  );
};

export default NavBar;
