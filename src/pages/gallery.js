import * as React from "react";
import styled from "styled-components";
import PictureDisplay from "../components/picturesDisplay";

const GalleryPageStyles = styled.div``;

export default function GalleryPage({ data }) {
  // const { productPictures } = data.pictures.nodes;
  // console.log(data.pictures.nodes);
  return (
    <>
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
