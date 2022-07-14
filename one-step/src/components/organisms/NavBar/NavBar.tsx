import { FC } from "react";
import styled  from "styled-components";
import NavBarButton from "../../atoms/NavBarButton";

const NavBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    height: 100px;
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
    height: 60px;
    width: 100%;
`;
const NavBar: FC = () => {
    return (
    <NavBarContainer>
        <TitleContainer>
            <StyledTitle>One Step</StyledTitle>
        </TitleContainer>
        <ButtonContainer>
         <NavBarButton buttonName="Home"></NavBarButton>
         <NavBarButton buttonName="Discharge"></NavBarButton>
         <NavBarButton buttonName="Calculator"></NavBarButton>
         <NavBarButton buttonName="Forgiveness"></NavBarButton>
         <NavBarButton buttonName="Learn More"></NavBarButton>
        </ButtonContainer>
    </NavBarContainer>)
}

export default NavBar;