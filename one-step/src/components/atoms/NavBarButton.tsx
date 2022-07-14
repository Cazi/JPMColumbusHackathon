import { FC } from "react";
import styled  from "styled-components";
import { Link, useHistory } from "react-router-dom";

//Styled Div Definition
const NavBarButtonContainer = styled.div`
height: 50px
background-color: black;
color: white;
margin: 10px;
`;
interface NavBarButtonProps {
    buttonName: string
}

const NavBarButton: FC<NavBarButtonProps> = ({...props}) => {
    const history = useHistory();
    return (
        <NavBarButtonContainer>
            <button onClick={() => {console.log("Try push"); history.push({pathname: "/calculator"})}}>{props.buttonName}</button>
        </NavBarButtonContainer>);
}

export default NavBarButton;