import { FC } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//Styled Div Definition
const NavBarButtonContainer = styled.div`
  padding-left: 25px;
  padding-right: 25px;
`;

const NavButton = styled.button`
  background-color: #e4dccf;
  border: 2px solid #e4dccf;
  border-radius: 3px;
  height: 30px;
  width: 120px;
  transition-duration: 0.4s;
  cursor: pointer;
`

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
      <NavButton onClick={() => navigate(to)}>{title} </NavButton>
      {/* </NavBarButtonText> */}
     
    </NavBarButtonContainer>
  );
};

export default NavBarButton;
