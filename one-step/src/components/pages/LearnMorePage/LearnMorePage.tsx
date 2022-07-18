import { FC } from "react";
import styled from "styled-components";
const LearnMorePageContainer = styled.div`
  height: 100vh;
  background-color: white;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 150px;
  background-color: white;
  margin-top: 0px;

`;
const TitleStyled = styled.p`
  color: black;
  padding: 10px;

`;



const LearnMorePage: FC = () => {
  return (
    <LearnMorePageContainer>
      <TitleContainer>
        <TitleStyled>
          About Us
        </TitleStyled>
      </TitleContainer>
    </LearnMorePageContainer>
  );
};

export default LearnMorePage;
