import * as React from "react";
import styled from "styled-components";
import PictureDisplay from "../components/picturesDisplay";
import SEO from "../components/SEO";

const GalleryPageStyles = styled.div`
  display: flex;
  justify-content: center;
`;

export default function GalleryPage({ data }) {
  return (
    <>
      <SEO title="Gallery" />
      <GalleryPageStyles>
        <PictureDisplay pictures={data.pictures.nodes} />
      </GalleryPageStyles>
    </>
  );
}

export const query = graphql`
  query PictureQuery {
    pictures: allSanityProductImages {
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
        description
        slug {
          current
        }
      }
    }
  }
`;
