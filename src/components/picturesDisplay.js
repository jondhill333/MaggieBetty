import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const ProjectDisplayStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 280px);
  grid-template-rows: repeat(4, 280px);
  gap: 1rem;
  width: 100%;
  margin: 5vh auto;
  justify-content: center;
  justify-items: center;
  margin: 5% auto;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 280px);
    gap: 2rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 280px);
  }
  @media (max-width: 560px) {
    grid-template-columns: 280px;
    gap: 0;
  }
`;

const SinglePictureStyles = styled.div`
  .image {
  }
`;

function SinglePicture({ picture }) {
  return (
    <>
      <SinglePictureStyles>
        <Img
          fixed={picture.image.asset.fixed}
          alt={picture.name}
          className="image"
        />
      </SinglePictureStyles>
    </>
  );
}

export default function PictureDisplay({ pictures }) {
  return (
    <>
      <ProjectDisplayStyles>
        {pictures.map((picture) => (
          <SinglePicture key={picture.id} picture={picture} />
        ))}
      </ProjectDisplayStyles>
    </>
  );
}
