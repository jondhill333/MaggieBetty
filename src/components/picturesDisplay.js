import { Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const ProjectDisplayStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  width: 100%;
  margin: 5vh auto;
  justify-content: center;
  margin: 5% auto;
`;

const SinglePictureStyles = styled.div`
  width: 200px;
  height: 200px;
`;

function SinglePicture({ picture }) {
  return (
    <>
      <SinglePictureStyles>
        <Img
          fluid={picture.image.asset.fluid}
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
