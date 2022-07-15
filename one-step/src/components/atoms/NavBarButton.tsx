import { FC } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//Styled Div Definition
const NavBarButtonContainer = styled.div`
height: 50px
background-color: black;
color: white;
margin: 10px;
`;
interface NavBarButtonProps {
  title: string;
  to: string;
}

const NavBarButton: FC<NavBarButtonProps> = ({ title, to, ...props }) => {
  const navigate = useNavigate();

  return (
    <NavBarButtonContainer>
      <button onClick={() => navigate(to)}>{title}</button>
    </NavBarButtonContainer>
  );
};

export default NavBarButton;
