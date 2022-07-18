import React, { FC } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const ArticleContainer = styled.div`
background-color: blue;
border: 1px solid white;
flex-direction: row;
`;
const Card = styled.div`
display: inline-block;
vertical-align: top;

background: #446C74;
margin: 5px;
`;
// image ssize
const CardMedia = styled.img`
width: 250px
`;

const CardContent = styled.div`
display: inline-block;
vertical-align: top;
`;
// float: left;    
// margin: 5px 10px 0px 15px;
const Typography = styled.p`

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
                                 {article.headline.main}</a>
                        </Typography>
                        <Typography color="textSecondary" >
                            {article.byline.original}
                        </Typography>
                        <Typography  >
                            {article.snippet}
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