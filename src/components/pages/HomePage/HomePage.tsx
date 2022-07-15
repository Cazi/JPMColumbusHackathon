import { FC } from "react";
import styled from "styled-components";
const HomePageContainer = styled.div`
  height: 100vh;
  background-color: green;
`;
const HomePage: FC = () => {
  return <HomePageContainer>Home Page</HomePageContainer>;
};

export default HomePage;
