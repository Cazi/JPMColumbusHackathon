import {FC} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const AccountButtonContainer = styled.div`
height: 50px
color: white;
margin: 10px;
background-color: #324B4E;
`;

interface AccountButtonProps {
    title: string;
    to: string;
}

const AccountButton : FC<AccountButtonProps> = ({title, to, ...props}) => {
    const navigate = useNavigate();

  return (
    <AccountButtonContainer>
      <button onClick={() => navigate(to)}>{title} </button>
     
    </AccountButtonContainer>
  );
};

export default AccountButton;
