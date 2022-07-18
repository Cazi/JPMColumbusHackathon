import React, { FC } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const ArticleContainer = styled.div`
background-color: blue;
border: 1px solid white;

`;
const Card = styled.div`

`;
const CardMedia= styled.img`
width: 250px
`;

const CardContent = styled.div`

`;

const Typography = styled.p`

`;

interface ArticleProps {
    article: any
}
const Article: FC <ArticleProps> = ({ article, ...props }) => {
    return (
        <ArticleContainer>
            {/* {JSON.stringify(article)} */}
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