import { FC } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//Styled Div Definition
const NavBarButtonContainer = styled.div`
height: 50px
color: white;
margin: 10px;
background-color: #324B4E;

`;

const NavBarButtonText = styled.div`
background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;   
`;


interface NavBarButtonProps {
  title: string;
  to: string;
}

const NavBarButton: FC<NavBarButtonProps> = ({ title, to, ...props }) => {
  const navigate = useNavigate();

  return (
    <NavBarButtonContainer>
      {/* <NavBarButtonText> */}
      <button onClick={() => navigate(to)}>{title} </button>
      {/* </NavBarButtonText> */}
     
    </NavBarButtonContainer>
  );
};

export default NavBarButton;
