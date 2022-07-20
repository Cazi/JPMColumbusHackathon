import { FC } from "react";
import styled from "styled-components";
import aaron from "../../images/aaronFace.jpg";
import ayo from "../../images/ayoFace.jpg";
import caziah from "../../images/cazFace.jpg";
import myra from "../../images/myraFace.jpg";
import ruben from "../../images/rubenFace.jpg";

const LearnMorePageContainer = styled.div`
  height: 100%;
  background-color: #F0EBE3;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 150px;
  background-color: #F0EBE3;
  margin-top: 0px;

`;
const ContentStyled = styled.div`
  display: flex;
  justify-content: space-around;
  color: #324b4e;
  padding: 26px;
  font-size: 17px;
`;

const HeaderStyled = styled.div`
  display: flex;
  justify-content: center;
  color: #324b4e;
  padding: 26px;
  font-size: 24px;
  font-weight: bold;
`;

const ColumnsDivs = styled.div`
`

const AboutMe = styled.div`
  display: flex;
  align-items: row;
  padding: 10px;
`

const MyFace = styled.img`
  height: 200px;
  width: 200px;
`

const CenterDisplay = styled.div`
  display: flex;
  justify-content: center;
`

const WhatWeDoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-style: solid;
  border-radius: 50px;
  padding: 20px;
  margin: 10px;
  color: #324b4e;
  width: 60%;
`;
const LearnMoreContainer = styled.p`
 color: #324b4e;
`;


const LearnMorePage: FC = () => {
  return (
    <LearnMorePageContainer>
      <HeaderStyled>
        Who We Are
      </HeaderStyled>
      <ContentStyled>
          <ColumnsDivs>
            <AboutMe>
              <MyFace src={aaron}></MyFace>
              <ul>
                <li>Aaron Amankwaah</li>
                <li>Rutgers University</li>
                <li>Advancing Black Pathways Fellow</li>
                <li>Software Engineering Track</li>
              </ul>
            </AboutMe>
            <AboutMe>
              <MyFace src={myra}></MyFace>
              <ul>
                <li>Myra Anigbo</li>
                <li>Bucknell University</li>
                <li>Advancing Black Pathways Fellow</li>
                <li>Software Engineering Track</li>
              </ul>
            </AboutMe>
            <AboutMe>
              <MyFace src={ruben}></MyFace>
              <ul>
                <li>Ruben Carbajal</li>
                <li>Boston University</li>
                <li>Advancing Hispanics Latinos Fellow</li>
                <li>Software Engineering Track</li>
              </ul>
            </AboutMe>
          </ColumnsDivs>
          <ColumnsDivs>
          <AboutMe>
              <MyFace src={ayo}></MyFace>
              <ul>
                <li>Ayo Obisesan</li>
                <li>Miami University</li>
                <li>Advancing Black Pathways Fellow</li>
                <li>Software Engineering Track</li>
              </ul>
            </AboutMe>
            <AboutMe>
              <MyFace src={caziah}></MyFace>
              <ul>
                <li>Caziah Mayers</li>
                <li>Brown University</li>
                <li>Advancing Black Pathways Fellow</li>
                <li>Software Engineering Track</li>
              </ul>
            </AboutMe>
          </ColumnsDivs>
      </ContentStyled>
      <br/>
      
      <HeaderStyled>
        What We Do
      </HeaderStyled>
      <CenterDisplay>
        <WhatWeDoContainer>
          <p><b>Problem: </b>For 44 million Americans, stress is created by the burden of a combined 
            1.7 trillion dollars in student loan debt. Education is suppose to improve quality of life, but many feel hopeless when it comes to the expenses of higher education. Many lack the resources, 
            knowledge, and planning needed to alleviate student debt.</p>
          <p><b>Solution: </b>Many don’t know where to start when it comes to tackling their student loans. 
          That’s where One Step comes in. One Step is a website to help navigate those who need help with handling their loans. 
          Our web page includes a loan calculator, news, and forgiveness resources to aid in student loan journeys. </p>
          <p><b>Future Plans: </b>Our hope is to empower people to have the confidence to pay off their loans. 
          Everyone should pursue a higher education without having to be burdened by student debt. We want to increase 
          awareness about tools that the public may not know about. We will help you in your journey, one step at a time.</p>
        </WhatWeDoContainer>
      </CenterDisplay>
      <br />
      <HeaderStyled>
        Learn More
      </HeaderStyled>

    </LearnMorePageContainer>
  );
};

export default LearnMorePage;
