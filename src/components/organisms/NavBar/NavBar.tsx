import { FC } from "react";
import styled from "styled-components";
import { PATHS } from "../../../constants";
import NavBarButton from "../../atoms/NavBarButton";

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
  background-color: gray;
`;

const StyledTitle = styled.h1`
  color: black;
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
const NavBar: FC = () => {
  return (
    <NavBarContainer>
      <TitleContainer>
        <StyledTitle>One Step</StyledTitle>
      </TitleContainer>
      <ButtonContainer>
        <NavBarButton title="Home" to={PATHS.HOME}></NavBarButton>
        <NavBarButton title="Calculator" to={PATHS.CALCULATOR}></NavBarButton>
        <NavBarButton title="Forgiveness" to={PATHS.FORGIVENESS}></NavBarButton>
        <NavBarButton title="Learn More" to={PATHS.LEARN_MORE}></NavBarButton>
      </ButtonContainer>
    </NavBarContainer>
  );
};

export default NavBar;
