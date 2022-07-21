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
  margin-bottom: 0px;

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
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
`;
const HeaderStyled2 = styled.div`
  display: flex;
  justify-content: center;
  color: #324b4e;
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0px;
`;
const ColumnsDivs = styled.div`
`

const AboutMe = styled.div`
  display: flex;
  align-items: row;
  padding: 10px;
`

const MyFace = styled.img`
  border: 3px solid #324B4E;
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
  border: 3px solid #324b4e;
  border-radius: 15px;
  background-color: #e4dccf;
  padding: 20px;
  margin: 10px;
  width: 70%;
  color: #324b4e;
`;
const LearnMoreContainer = styled.p`
 color: #324b4e;
`;

const MissionStatementContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 26px;
  margin: 20px;
  width: 70%;
  font-size: 24px;
  border: 3px solid #324b4e;
  border-radius: 15px;
  background-color: #e4dccf;
  color: #324b4e;
`;
const MissionStatement = styled.p`
  font-size: 17px;

`;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  padding: 26px;
  margin: 20px;
  font-size: 17px;
  font-weight: bold;
  width: 70%;
  color: #324b4e;
  border: 3px solid #324b4e;
  border-radius: 15px;
  background-color: #e4dccf;
`;

const LearnMorePage: FC = () => {
  return (
    <LearnMorePageContainer>
        <HeaderStyled2>
          What is One Step?
        </HeaderStyled2>
        <CenterDisplay>
          <MissionStatementContainer>
            <MissionStatement>
              <strong>One Step</strong> was born out of a drive to help curb the overwhelming nature of student loans. Marginalized communities have a particularly difficult time navigating
              and decifering the world of student loans, and so we created One Step to help guide our people towards becoming <strong>debt free</strong> one step at a time!
            </MissionStatement>
          </MissionStatementContainer>
        </CenterDisplay>
      

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
      <br />
      
      <br />
      <br />
      <HeaderStyled>
        What We Do
      </HeaderStyled>
      <CenterDisplay>
        <WhatWeDoContainer>
          <p><b>Problem: </b>For 44 million Americans, stress is created by the burden of a combined
            1.7 trillion dollars in student loan debt. Education has the capacity to improve quality of life, but many feel hopeless when it comes to the expenses of higher education due to lack of resources,
            knowledge, and planning.</p>
          <p><b>Solution: </b>Many don’t know where to start when it comes to tackling student loans.
            That’s where One Step comes in. One Step is a website designed to help manage student loans effectively.
            Our web page includes a loan calculator, news, and forgiveness resources to aid in student loan journeys.  </p>
          <p><b>Future Plans: </b>Our hope is to empower people by creating an effecient process to manage student loans.
            Everyone should have the ability to pursue a higher education without the burden of student debt. We want to raise
            awareness of loan management tools the public may not be aware of. We will help you on your journey, one step at a time.</p>
        </WhatWeDoContainer>
      </CenterDisplay>
      <br />


      <HeaderStyled>
        Acknowledgements and Appreciation
      </HeaderStyled>
      <CenterDisplay>
        <StyledFooter>
          We want to give a huge thank you to the following people for guiding us in our learning process during this hackathon.
          As mentors, you’ve spent invaluable time and energy helping us become better programmers, teammembers, and students.
          We’ve gained so much experience, and it’s all thanks to you all.
          <br />
          <br />
          Ahmed Adbulahi, Alyssa J.C. Alleyne-Atherly, Amie C. Jagne, Eric Chang, Gail Mitchell-Cousar, Harry Colson, Jermontae Ponder
          Kendallene Hill, Malcolm D. Player, Matthew E. Baker, Matthew E. Miller, Sam Florentine, Susanne R. South, Tamia L. Stewart, and
          Todd Tarney, and the wider ABP/AHL staff.
        </StyledFooter>
      </CenterDisplay>
      
      <br />
      <br />
    </LearnMorePageContainer>
  );
};

export default LearnMorePage;
