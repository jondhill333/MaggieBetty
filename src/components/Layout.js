import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import "normalize.css";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";

const ContentStyles = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <ContentStyles>
        <Nav />
        {children}
      </ContentStyles>
    </>
  );
}
