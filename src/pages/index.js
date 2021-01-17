import * as React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import SEO from "../components/SEO";

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
  const logo = data.logos.nodes.filter(
    (logo) => logo.name === "original size logo"
  );
  const fluid = logo[0].image.asset.fluid;

  return (
    <>
      <SEO title="Home" />
      <HomePageStyles>
        {}
        <Img fluid={fluid} alt={logo.name} className="image" />
      </HomePageStyles>
    </>
  );
}
export const query = graphql`
  query logoQuery {
    logos: allSanityLogoImages {
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
