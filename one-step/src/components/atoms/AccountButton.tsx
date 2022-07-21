import {FC} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const AccountButtonContainer = styled.div`
  padding-top: 22px;
  padding-left: 15px;
  padding-right: 15px;
`;

const AccButton = styled.button`
  background-color: #7d9d9c;
  border: 2px solid #7d9d9c;
  border-radius: 3px;
  height: 35px;
  width: 100px;
  transition-duration: 0.4s;
  cursor: pointer;
`

interface AccountButtonProps {
    title: string;
    to: string;
}

const AccountButton : FC<AccountButtonProps> = ({title, to, ...props}) => {
    const navigate = useNavigate();

  return (
    <AccountButtonContainer>
      <AccButton onClick={() => navigate(to)}>{title} </AccButton>
     
    </AccountButtonContainer>
  );
};

export default AccountButton;
