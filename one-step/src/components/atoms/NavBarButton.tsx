import { FC } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

//Styled Div Definition
const NavBarButtonContainer = styled.div`
  padding-left: 25px;
  padding-right: 25px;
`;

const NavButton = styled.button`
  background-color: #576F72;
  border: 2px solid #909C9E;
  border: 2.5px solid;
  border-radius: 10px;
  height: 30px;
  width: 120px;
  transition-duration: 0.7s;
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
  const [hover, setHover] = useState<boolean>();
  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };
  return (
    <NavBarButtonContainer>
      {/* <NavBarButtonText> */}
      <NavButton
        onClick={() => navigate(to)}
        onMouseOver={handleMouseIn}
        onMouseOut={handleMouseOut}
        style={{
          backgroundColor: hover ? 'salmon' : '#576F72',
        }}>
        {title}
      </NavButton>
      {/* </NavBarButtonText> */}

    </NavBarButtonContainer>
  );
};

export default NavBarButton;
