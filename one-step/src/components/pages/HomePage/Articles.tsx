import React, { FC } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// background-color: yellow;
const ArticleContainer = styled.div`
border: 1.75px solid #e4dccf;
flex-direction: row;
border-radius: 24px;
`;
const Card = styled.div`
display: inline-block;
vertical-align: top;
margin: 2.5px;
color: #324b4e;
`;
// image ssize
const CardMedia = styled.img`
float: left;
padding: 2.5px 10px 0px 10px;
max-width:200px;
max-height:250px;
width: auto;
height: auto;
`;

const CardContent = styled.div`

`;
// float: left;    
// margin: 5px 10px 0px 15px;
const Typography = styled.div`

`;

interface ArticleProps {
    article: any
}
const Article: FC<ArticleProps> = ({ article, ...props }) => {
    return (
        <ArticleContainer>
            {article && (
                <Card id={article._id}>
                    <CardMedia
                        src={article.multimedia?.[0]?.url ?
                            `https://nytimes.com/${article.multimedia[0].url}` :
                            'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                        } alt="news-img" />
                    <CardContent>
                        <Typography color="primary" >
                            <a href={article.web_url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}> 
                            <h2>
                                {article.headline.main}
                            </h2>
                            </a>
                        </Typography>
                        <Typography color="textSecondary" >
                            <h3>
                                {article.byline.original}
                            </h3>
                        </Typography>
                        <Typography  >
                            <p>
                                {article.snippet}
                            </p>
                        </Typography>
                        <p>
                            {article.lead_paragraph}
                        </p>
                    </CardContent>
                </Card >
            )}
        </ArticleContainer>
    );
};
Article.propTypes = {
    article: PropTypes.object.isRequired,
};
export default Article;