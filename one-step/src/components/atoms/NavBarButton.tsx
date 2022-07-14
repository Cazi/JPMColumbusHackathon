import { FC } from "react";
import styled  from "styled-components";
//Styled Div Definition
const NavBarButtonContainer = styled.div`
color: white;
margin: 10px;
`;
interface NavBarButtonProps {
    buttonName: string
}

const NavBarButton: FC<NavBarButtonProps> = ({...props}) => {
    return (
        <NavBarButtonContainer>
            <button>{props.buttonName}</button>
        </NavBarButtonContainer>);
}

export default NavBarButton;