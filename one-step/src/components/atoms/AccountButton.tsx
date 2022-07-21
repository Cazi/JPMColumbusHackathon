import { FC } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const AccountButtonContainer = styled.div`
  padding-top: 22px;
  padding-left: 15px;
  padding-right: 15px;
`;

const AccButton = styled.button`
  background-color: #7d9d9c;
  border: 2.5px solid;
  border-radius: 10px;
  height: 35px;
  width: 100px;
  transition-duration: 0.7s;
  cursor: pointer;
`

interface AccountButtonProps {
  title: string;
  to: string;
}

const AccountButton: FC<AccountButtonProps> = ({ title, to, ...props }) => {
  const navigate = useNavigate();
  const [hover, setHover] = useState<boolean>();
  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <AccountButtonContainer>
      <AccButton onClick={() => navigate(to)}
        onMouseOver={handleMouseIn}
        onMouseOut={handleMouseOut}
        style={{
          backgroundColor: hover ? 'salmon' : '#7d9d9c',
        }}>
        {title}
      </AccButton>

    </AccountButtonContainer>
  );
};

export default AccountButton;
