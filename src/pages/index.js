import * as React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const HomePageStyles = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .image {
    width: 600px;
  }
  p {
    color: black;
  }
`;

export default function HomePage({ data }) {
  return (
    <>
      {/* <SEO title="Home" /> */}
      <HomePageStyles>
        <Img
          fluid={data.logo.nodes[0].image.asset.fluid}
          alt={data.logo.nodes.name}
          className="image"
        />
      </HomePageStyles>
    </>
  );
}
export const query = graphql`
  query logoQuery {
    logo: allSanityLogoImages {
      nodes {
        image {
          asset {
            fluid(maxHeight: 700) {
              ...GatsbySanityImageFluid
            }
            fixed(width: 325, height: 220) {
              ...GatsbySanityImageFixed
            }
          }
        }
        name
      }
    }
  }
`;
