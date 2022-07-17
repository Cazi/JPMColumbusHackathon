import { FC } from "react";
import styled from "styled-components";
// import axios from "axios";

// API chunk 
import React, { useEffect, useState } from 'react';
import Articles from './Articles.js';
import axios from 'axios';

// added chunk into home page render/return
// const App = () => {
//   const [loading, setLoading] = useState(false);
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const getArticles = async () => {
//       setLoading(true);
//       const res = await axios.get(` https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Arts")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`);
//       setArticles(res.data.response.docs);

//       setLoading(false);
//     };
//     getArticles();

//   }, []);


// }



// const TitleContainer = styled.div`
//   width: 100%;
//   text-align: center;
// `;

// whole page contianer
const HomePageContainer = styled.div`
  height: 100vh;
  background-color: green:
  // flex-direction: row;
`;
/* Create two equal columns that floats next to each other */
// anything below navbar
const BodyContainer = styled.div`
  width: 100%;
  float: left;
  padding: 10px:
  display: table;
  clear: both;

`;
// contianer for sub column headers
const TitleContainer = styled.div`
  width: 100%;
  height: 2.5%;
  text-align: center;
`;

// sub collumn headers
const StyledSubTitle = styled.h1`
  color: black;

`;

// News Column blurb container
const ColumnsContainer = styled.div`
  color: black;
  padding: 10px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: orange;

`;

// each news blurb contianer
const NewsContainer = styled.div`
  display: inline-flex;
  flex-direction: column-reverse;
`;

// news blurbs
const NewsBlurbs = styled.div`
  // how to make it full with?
  width: 100%;
  background: red;
  grid-template-columns: 100px 100px;
  flex-direction: column;
  // grid-gap: 10px;
  // padding: 10px:
`;

const HomePage: FC
  //  = () => {
  = () => {
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
      const getArticles = async () => {
        setLoading(true);
        const res = await axios.get(` https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Arts")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`);
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
              <hr />
            </StyledSubTitle>
          </TitleContainer>
          <NewsContainer>
            {/* for loop for it automatically push 10 news from NYT here */}
            <NewsBlurbs>
              <a href='https://www.jpmorganchase.com/'> <h3>News Title</h3></a>
              <h4>Author: Thomas Edison</h4>
              <body>
                <p>JPMC is Awesome</p>
              </body>
              <hr />
            </NewsBlurbs>

            <NewsBlurbs>
              <a href='https://www.jpmorganchase.com/'> <h3> Title News</h3></a>
              <h4>Author: Bob TOm Edison</h4>
              <body>
                <p>I am is Awesome</p>
              </body>
              <hr />
            </NewsBlurbs>

            <NewsBlurbs>
              <div>
                {/* found and a potential answer but don't know how to intepret it 
                https://stackoverflow.com/questions/42657792/typescript-react-redux-property-xxx-does-not-exist-on-type-intrinsicattrib */}
                {/* <Articles loading ={loading} articles={articles} /> */}
              </div >
            </NewsBlurbs>
          </NewsContainer>
          {/* {% for announcement in updatesData%}
        <div class ="row ">
            <div class ="col-12 ">
        <h1> <b> {{ announcement.update_heading }}</b> by {{ announcement.update_messenger }} </h1> 
            </div>
            <div class ="col-12">
        <p> {{ announcement.update_text }}</p>
            </div>
        </div><hr>
        {% endfor %} */}
          {/* News titile, author, date, import summary/snapshot, 
         */}
        </ColumnsContainer>
        {/* Right Column  */}
        <ColumnsContainer>
          <TitleContainer>
            <StyledSubTitle>
              Random Facts
            </StyledSubTitle>
          </TitleContainer>
          <body>
            <p>Some text..</p>
          </body>
        </ColumnsContainer>
      </BodyContainer>
    </HomePageContainer>;
  };

export default HomePage;
