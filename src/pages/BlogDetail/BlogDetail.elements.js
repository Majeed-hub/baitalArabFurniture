import styled from "styled-components";
export const Container = styled.div`
  width: 50%;
  background-color: #faf8f1;
  padding: 40px;
  margin: 30px auto;

  @media screen and (max-width: 980px) {
    width: 70%;
  }
  @media screen and (max-width: 540px) {
    width: 95%;
  }

  /* const AppBar = styled(MuiAppBar)((props) => ({
  backgroundColor: red;

  [props.theme.breakpoints.up("sm")]: {
    backgroundColor: orange,
  },
  [props.theme.breakpoints.up("md")]: {
    backgroundColor: yellow,
    color: black,
  },
  [props.theme.breakpoints.up("lg")]: {
    backgroundColor: green,
    color: white,
  },
})); */
`;
export const Heading = styled.h2`
  text-align: left;
  font-family: "Belleza", sans-serif;
`;

export const ArticleContent = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 22px;
`;
