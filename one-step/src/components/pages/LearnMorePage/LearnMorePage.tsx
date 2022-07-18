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

const WhoWeAreContainer = styled.p`

`;

const WhatWeDoContainer = styled.p`
  
`;
const LearnMoreContainer = styled.p`
  
`;


const LearnMorePage: FC = () => {
  return (
    <LearnMorePageContainer>
      <TitleStyled>
        About Us
      </TitleStyled>
      <br />
      <TitleStyled>
          Who We Are
        </TitleStyled>
      <br/>
      <WhoWeAreContainer>
        <ul>
          <li>List Item</li>
        </ul>
        <TitleStyled>
          What We Do
        </TitleStyled>
      </WhoWeAreContainer>
      <br />
      <WhatWeDoContainer>
        <ul>
          <li>List Item</li>
        </ul>
      </WhatWeDoContainer>
      <br />
      <TitleStyled>
        Learn More
      </TitleStyled>
      <LearnMoreContainer>

      </LearnMoreContainer>

      {/* 
        <TitleStyled>
        Who We Are
        </TitleStyled>
        Container
          <ul>
            <li>List Item</li>
          List Item
          </ul>
        Container
        <br/>
        <TitleStyled>
          What We Do
        </TitleStyled>
        Container
          <p style="" color="black"> lorem</p>
        Container
        <br/>
        <TitleStyled>
          Learn More
        </TitleStyled>
        Container
          <p style="" color="black"> lorem</p>
        Container
        */}

    </LearnMorePageContainer>
  );
};

export default LearnMorePage;
