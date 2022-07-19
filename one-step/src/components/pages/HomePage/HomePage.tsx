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

const HomePage: FC = () => {
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
      const getArticles = async () => {
        setLoading(true);
        const res = await axios.get
        (`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("your money")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`);
        
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
              {/* <div> */}
                {/* found and a potential answer but don't know how to intepret it 
                https://stackoverflow.com/questions/42657792/typescript-react-redux-property-xxx-does-not-exist-on-type-intrinsicattrib */}
                {/* using functional programming*/}
                {articles.map((article)=> {return   <Articles article={article} />})}
              {/* </div > */}
            </NewsBlurbs>
          </NewsContainer>
        </ColumnsContainer>
       
        {/* Right Column  */}
        <ColumnsContainer>
          <TitleContainer>
            <StyledSubTitle>
              Random Facts
            </StyledSubTitle>
          </TitleContainer>
          <div>
            <p>Some text..</p>
          </div>
        </ColumnsContainer>
      </BodyContainer>
    </HomePageContainer>;
  };

export default HomePage;
