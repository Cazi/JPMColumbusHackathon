import { FC } from "react";
import styled from "styled-components";
// import axios from "axios";

// API chunk 
import React, { useEffect, useState } from 'react';
import Articles from './Articles';
import axios from 'axios';

// whole page contianer
const HomePageContainer = styled.div`
  height: 100vh;
  background-color: green:
`;
/* Create two equal columns that floats next to each other */
// anything below navbar
const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
// contianer for sub column headers
const TitleContainer = styled.div`
  width: 100%;
  height: 2.5%;
  text-align: center;
`;

// sub collumn headers
const StyledSubTitle = styled.h1`
  color: #324b4e;
`;

// News Column blurb container
const ColumnsContainer = styled.div`
  color: black;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #f0ebe3;
  padding: 2.5px 2.5px 2.5px 2.5px;
`;

// each news blurb contianer
const NewsContainer = styled.div`
  display: inline-flex;
  flex-direction: column-reverse;
`;

// news blurbs
// background: red;
const NewsBlurbs = styled.div`
  width: 100%;

  grid-template-columns: 100px 100px;
  flex-direction: column;
`;

const Container = styled.div`
width: 100%;
background: red;
grid-template-columns: 100px 100px;
flex-direction: column;

`;

const Texts = styled.div`

`;

const Image = styled.div`
float: left;
`;

const ImageFacts = styled.img`
float: right;
padding: 2.5px 10px 0px 10px;
max-width: 100px;
max-height: 100px;
width: auto;
height: auto;
`;

const HomePage: FC = () => {
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
      const getArticles = async () => {
        setLoading(true);
        const res = await axios.get
        (`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=studentloan&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`);
        
        // not letting fetching news about loans.
        //  (`https://api.nytimes.com/svc/topstories/v2/Business.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`);
        setArticles(res.data.response.docs);
        setLoading(false);
      };
      getArticles();
    }, []);
    return <HomePageContainer>
      <BodyContainer >
        {/* API NEWS GOES HERE */}
        <ColumnsContainer>
          <TitleContainer>
            <StyledSubTitle>
              News
            </StyledSubTitle>
          </TitleContainer>
          <NewsContainer>
            <NewsBlurbs>
                {/* using functional programming*/}
                {articles.map((article)=> {return   <Articles article={article} />})}
            </NewsBlurbs>
          </NewsContainer>
        </ColumnsContainer>
       
        {/* Right Column  */}
        <ColumnsContainer>
          <TitleContainer>
            <StyledSubTitle>
              Did you know
            </StyledSubTitle>
             {/* <img src= "https://www.pngfind.com/pngs/m/12-121032_do-you-know-did-you-know-sign-hd.png" /> */}
          </TitleContainer>
          <div>
          <strong>You're not alone!</strong>
          {/* <ImageFacts src= "www.linkedin.com/in/aaronam02"> </ImageFacts> */}
          <ImageFacts src= "data:image/jpeg;base64,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"></ImageFacts>
            <p>43.4 Million borrowers have federal student loan debt, where the federal loan balance is 1.6 Trillion dollars. There is no end in sight when seeing what 2022 has in store as the nation's student loan debt increases by 1.95%. </p>
          </div>

          <div>
          <strong> Mountain to Pebbles </strong>
            <p> The average federal student loan debt is 36,510 dollars, and the average debt after a bachelor's degree is over 30,000 dollars. </p>
          </div>
          <div>
          <strong> When to Pay </strong>
            <p> Most federal loans such as Subsidized and Unsubsidized loans distributed by the federal government provide a six-month grace period before having to make the first payment</p>
          </div>
          <div>
          <strong>Loan Options </strong>
            <p> Consider looking at all of your federal loan options before choosing a private lending service since federal interest rates a typically much lower</p>
          </div>

          <div>
          <strong> Loan Consolidation</strong>
            <p> Try combing your loans into one monthly payment if you have multiple federal loans; although, make sure it is the right plan for you</p>
          </div>

          <div>
          <strong>Subsidized loan </strong>
            <p>  One of the more common loan options provided by the federal government that is based on financial need and for undergraduate students</p>
          </div>

          {/* <div>
          <strong> </strong>
            <p> </p>
          </div> */}
        </ColumnsContainer>
      </BodyContainer>
    </HomePageContainer>;
  };

export default HomePage;
