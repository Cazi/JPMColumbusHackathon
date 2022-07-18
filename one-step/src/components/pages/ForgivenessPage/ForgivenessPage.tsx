import { FC } from "react";
import styled from "styled-components";
const ForgivenessPageContainer = styled.div`
  height: 100vh;
  background-color: white;
`;

const BodyContainer = styled.div`
`;
const VeteranSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-style: solid;
  border-radius: 50px;
  padding: 20px;
  margin: 10px;
`;
const DisabledSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-style: solid;
  border-radius: 50px;
  padding: 20px;
  margin: 10px;
`;
const TeacherSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-style: solid;
  border-radius: 50px;
  padding: 20px;
  margin: 10px;
`;
//Title
const StyledTitle = styled.h1`
  color: black;
  text-align: center;
`;
const StyledSubtitle = styled.h3`
  color: black;
  text-align: center;
`;
const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
`;

//Images
const BlurbImageContainer = styled.div`
  float: left;
`;
const ParagraphContainer = styled.div`
 
`;
const ParagraphStyled = styled.p`
  text-align: center;
  margin: 20px;
`;

const ImageContainer = styled.img`
background-color:
`;

const ForgivenessPage: FC = () => {
  return (
    <ForgivenessPageContainer>
      <TitleContainer>x
        <StyledTitle>
          Forgiveness
        </StyledTitle>
        <StyledSubtitle>
          Opportunities for Loan Forgiveness for Specified Groups
        </StyledSubtitle>
      </TitleContainer>
      <hr />
      <BodyContainer>
        {/* Veteran Loan Benefits Section */}
        <VeteranSectionContainer>
          <ParagraphContainer>
            <BlurbImageContainer>
              <img src="https://via.placeholder.com/150" />
            </BlurbImageContainer>
            <ParagraphStyled>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Nobis architecto eum assumenda, dolores recusandae explicabo fuga accusamus excepturi minima animi, dolor eveniet modi iusto repellat eaque non reiciendis harum iure!
            </ParagraphStyled>
          </ParagraphContainer>
        </VeteranSectionContainer>
        <br />
        {/* Disability Loan Benefits Section */}
        <DisabledSectionContainer>
          <ParagraphContainer>
            <BlurbImageContainer>
              <img src="https://via.placeholder.com/150" />
            </BlurbImageContainer>
            <ParagraphStyled>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt.
            </ParagraphStyled>
          </ParagraphContainer>
        </DisabledSectionContainer>
        <br />
        {/* Teachers Loan Benefits Section */}
        <TeacherSectionContainer>
          <ParagraphContainer>
            <BlurbImageContainer>
              <img src="https://via.placeholder.com/150"/>
            </BlurbImageContainer>
            <ParagraphStyled>
              Lorem ipsum dolor sit amet consectetur.
            </ParagraphStyled>
          </ParagraphContainer>
        </TeacherSectionContainer>
      </BodyContainer>
    </ForgivenessPageContainer>);
};

export default ForgivenessPage;
