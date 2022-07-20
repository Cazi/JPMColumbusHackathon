//
import { FC } from "react";
import styled from "styled-components";
const ForgivenessPageContainer = styled.div`
  height: 100vh;
  background-color: #F0EBE3;
  border: 1px solid #e4dccf;
`;

const BodyContainer = styled.div`
  background-color: #F0EBE3;
  border: 2px solid #e4dccf;
  width: 100%;
`;
const VeteranSectionContainer = styled.div`
  background-color: #F0EBE3;
  border: 1.75px solid #e4dccf;
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
  border: 1.75px solid #e4dccf;
  padding: 20px;
  margin: 10px;
`;
const TeacherSectionContainer = styled.div`
  display: flex;
  border: 1.75px solid #e4dccf;
  flex-direction: column;
  justify-content: flex-start;
  border-style: solid;
  border-radius: 50px;
  padding: 20px;
  margin: 10px;
`;
//Title
const StyledTitle = styled.h1`
  margin-block-start: none;
  margin-top: none;
  color: #324b4e;;
  text-align: center;
`;
const StyledSubtitle = styled.h3`
  color: #324b4e;
  font-size: 18px;
  text-align: center;
`;

const TitleContainer = styled.div`  
  width: 100%;
  text-align: center;
`;

//Images
const BlurbImageContainer = styled.img`
float: left;
padding: 2.5px 10px 0px 10px;
max-width:250px;
max-height:250px;
width: auto;
height: auto;

`;
//Text
const ParagraphStyled = styled.p`
  justify-content: flex-start;
  font-family: sans-serif;
  text-align: left-center;
  color: #324b4e;
  margin: 20px;
`;

const UnorderedListStyled = styled.ul`
  //padding-left: 20px;
  margin: 0;
  vertical-align: left;
  background-color: #F0EBE3;
  color: #324b4e;
`;

const ForgivenessPage: FC = () => {
  return (
    <ForgivenessPageContainer>
      <TitleContainer>
        {/* <StyledTitle>
          Forgiveness
        </StyledTitle> */}
        <StyledSubtitle>
          Loan Forgiveness Opportunities for Specified Groups
        </StyledSubtitle>
      </TitleContainer>
      {/* <hr /> */}
      <BodyContainer>
        {/* Veteran Loan Benefits Section */}
        <TitleContainer>
          <StyledSubtitle>
            Veterans
          </StyledSubtitle>
        </TitleContainer>
        <VeteranSectionContainer>
          <div>
            <BlurbImageContainer src="https://via.placeholder.com/150">
            </BlurbImageContainer>
            <ParagraphStyled>
              The Public Service Loan Forgiveness Program, or PSLF, is a federal student loan program that forgives your
              remaining student loans if you make 120 qualifying on-time payments while working in the government or nonprofit
              sectors. Service in the U.S. military counts under this program.
              <br />
              <br />
              Veterans may also qualify for the <strong>total and permanent disability (TPD) discharge </strong> loan forgiveness program. More information about that is listed below in the
              disabled persons section.
              <br />
              <br />
              The National Defense Student Loan Discharge program cancels student loan debt for veterans who served in areas under hostile fire or in imminent danger. You may be able to have up to 100% of your Federal Perkins Loans or National Direct Student Loans canceled if you served for enough time in these conditions.
              <br />
              <br />
              To qualify for Public Service Loan Forgiveness, one must:
              <UnorderedListStyled>
                <li>Work full-time for the federal government, a state or local government, or a qualifying nonprofit.</li>
                <li>Hold federal Direct Loans (you can consolidate other federal loans into a Direct Consolidation Loan to qualify).</li>
                <li>Repay your loans with an income-driven repayment plan.</li>
                <li>Make 120 qualifying monthly payments.</li>
              </UnorderedListStyled>
              <br />
              <a href="https://www.foxbusiness.com/personal-finance/student-loan-forgiveness-for-veterans" target="_blank"> Click here</a> to learn more!
            </ParagraphStyled>
            <br />
          </div>
        </VeteranSectionContainer>
        <br />
        {/* Disability Loan Benefits Section */}
        <StyledSubtitle>
          Disabled Persons
        </StyledSubtitle>
        <DisabledSectionContainer>
          <div>
            <BlurbImageContainer src="https://via.placeholder.com/150" >
            </BlurbImageContainer>
            <ParagraphStyled>
              A <strong>total and permanent disability (TPD) discharge </strong>relieves you from having to repay a William D.
              Ford Federal Direct Loan (Direct Loan) Program loan, a Federal Family Education Loan (FFEL) Program loan,
              and/or a Federal Perkins Loan or to complete a TEACH Grant service obligation.
              <br />
              <br />
              To qualify for a TPD discharge, you must complete and submit a <strong> TPD discharge application</strong>,  along with documentation
              showing that you meet our requirements for being considered <em>totally and</em> <em>permanently disabled</em>, to Nelnet, the servicer
              that assists ED with the TPD discharge process.
              <br />
              <br />
              You can show that you qualify for a TPD discharge by providing documentation from one of three sources:
              <ul>
                <li>the U.S. Department of Veterans Affairs (VA)</li>
                <li>the Social Security Administration (SSA)</li>
                <li>a physician</li>
              </ul>
              One may obtain documentation from a physician by having them certify on the TPD discharge application that
              you are unable to engage in any substantial gainful activity due to a physical or mental impairment that can:
              <ul>
                <li>be expected to result in death</li>
                <li>has lasted for a continuous period of at least 60 months, or</li>
                <li>can be expected to last for a continuous period of at least 60 months.</li>
              </ul>
              <br />
              <a href="https://studentaid.gov/manage-loans/forgiveness-cancellation/disability-discharge" target="_blank"> Click here</a> to learn more!
            </ParagraphStyled>
          </div>
        </DisabledSectionContainer>
        <br />
        {/* Teachers Loan Benefits Section */}
        <StyledSubtitle>
          Teachers
        </StyledSubtitle>
        <TeacherSectionContainer>
          <div>
            <BlurbImageContainer src="https://via.placeholder.com/150" >
            </BlurbImageContainer>
            <ParagraphStyled>
              The federal government considers a teacher to be "a person who provides direct classroom teaching, or classroom-type teaching in a nonclassroom setting. Special education teachers are considered teachers."
              <br />
              <br />
              Under the Teacher Loan Forgiveness Program,
              if you teach full time for five complete and consecutive academic years in a low-income school
              or educational service agency, and meet other qualifications, you may be eligible for forgiveness of up to $17,500 on your Direct Subsidized and Unsubsidized Loans and your Subsidized and Unsubsidized Federal Stafford Loans.
              <br />
              <br />
              If you have a Direct Consolidation Loan or a Federal Consolidation Loan, you may be eligible for forgiveness of the outstanding portion of the consolidation loan that repaid an eligible Direct Subsidized Loan, Direct Unsubsidized
              Loan, Subsidized Federal Stafford Loan, or Unsubsidized Federal Stafford Loan.
              <br />
              These are the requirements to qualify for this program:
              <ul>
                <li>You must not have had an outstanding balance on Direct Loans or Federal Family Education Loan (FFEL) Program loans as of Oct. 1, 1998, or on the date that you obtained a Direct Loan or FFEL Program loan after Oct. 1, 1998. </li>
                <li>You must have been employed as a full-time, highly qualified teacher for five complete and consecutive academic years, and at least one of those years must have been after the 1997–98 academic year.</li>
                <li>You must have been employed at an elementary school, secondary school, or educational service agency that serves low-income students (a "low-income school or educational service agency").</li>
                <li>The loan(s) for which you are seeking forgiveness must have been made before the end of your five academic years of qualifying teaching service.</li>
              </ul>
              <br />
              <a href="https://studentaid.gov/manage-loans/forgiveness-cancellation/teacher" target="_blank"> Click here</a> to learn more!


            </ParagraphStyled>
          </div>
        </TeacherSectionContainer>
      </BodyContainer >
    </ForgivenessPageContainer >);
};

export default ForgivenessPage;
