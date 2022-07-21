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
  color: #324b4e;
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
const NewsBlurbs = styled.div`
  width: 100%;
  grid-template-columns: 100px 100px;
  flex-direction: column;
  background-color: #e4dcf;
  border: 1.6px solid #324B4E;
  border-radius: 15px;
`;

const Container = styled.div`
width: 100%;
grid-template-columns: 100px 100px;
flex-direction: column;
border: 1.6px solid #324B4E;
`;

const Texts = styled.div`
padding: 25px 10px 0px 10px;
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
        (`https://api.nytimes.com/svc/search/v2/articlesearch.json?q={loan}&fq=student&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`);
        // https://api.nytimes.com/svc/search/v2/articlesearch.json?q={loan}&fq=student&api-key=bG1QD3F95yxUAtJF2L97XdhvHQCo5cXM
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
          {/* <ImageFacts src= "thenounproject.com/search/icons/?iconspage=1&q=community"> </ImageFacts> */}
          <ImageFacts src= "https://static.thenounproject.com/png/4398555-200.png"></ImageFacts>
            <p>43.4 Million borrowers have federal student loan debt, where the federal loan balance is 1.6 Trillion dollars. There is no end in sight when seeing what 2022 has in store as the nation's student loan debt increases by 1.95%. </p>
          </div>
<br/>
          <div>
          <strong> Mountain to Pebbles </strong>
          {/* <ImageFacts src= "thenounproject.com/browse/icons/term/mountain-mining/?iconspage=1"> </ImageFacts> */}
          <ImageFacts src= "https://static.thenounproject.com/png/148945-200.png"></ImageFacts>
            <p>The average federal student loan debt is 36,510 dollars, and the average debt after a bachelor's degree is over 30,000 dollars. </p>
          </div>
<br/>
          <div>
          <strong>Discharges </strong>
          {/* <ImageFacts src= "https://thenounproject.com/search/icons/?iconspage=1&q=free"> </ImageFacts> */}
          <ImageFacts src= "https://static.thenounproject.com/png/1902720-200.png"></ImageFacts>
            <p>  If external circumstances occur, such as disability or possible degree fraud, one can be exempt from paying back their student loans </p>
          </div>
<br/>
          <div>
          <strong>Loan Options </strong>
          {/* <ImageFacts src= "thenounproject.com/search/icons/?iconspage=1&q=options"> </ImageFacts> */}
          <ImageFacts src= "https://static.thenounproject.com/png/1942385-200.png"></ImageFacts>
            <p> Consider looking at all of your federal loan options before choosing a private lending service since federal interest rates a typically much lower</p>
          </div>
<br/>
          <div>
          <strong> Loan Consolidation</strong>
          {/* <ImageFacts src= "https://thenounproject.com/search/icons/?iconspage=1&q=consolidation"> </ImageFacts> */}
          <ImageFacts src= "https://static.thenounproject.com/png/4488742-200.png"></ImageFacts>
            <p> Try combing your loans into one monthly payment if you have multiple federal loans; although, make sure it is the right plan for you</p>
          </div>
<br/>
          <div>
          <strong> When to Pay </strong>
          {/* <ImageFacts src= "thenounproject.com/search/icons/?iconspage=1&q=payment"> </ImageFacts> */}
          <ImageFacts src= "https://static.thenounproject.com/png/105293-200.png"></ImageFacts>         
            <p> Most federal loans such as Subsidized and Unsubsidized loans distributed by the federal government provide a six-month grace period before having to make the first payment</p>
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
