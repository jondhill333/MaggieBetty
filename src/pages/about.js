import * as React from "react";
import styled from "styled-components";

const AboutPageStyles = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: row;
  .profilePictureContainer {
    width: 50%;
  }

  .about {
    font-family: "GlacialIndifference";
    width: 50%;
    font-size: 2rem;
    text-align: justify;
    padding: 8% 4% 0 0;
  }
`;

export default function AboutPage() {
  return (
    <>
      {/* <SEO title="Home" /> */}
      <AboutPageStyles>
        <section className="profilePictureContainer"></section>
        <section className="about">
          <p>
            I’m Maggie and I’m the creator behind the colourful makings at
            Maggie Betty. I live in the Sussex countryside with my husband,
            where I enjoy walking, baking and most of all creating eye-catching
            handmade gifts at home. I have a passion for material and fabrics,
            as well as bright colours and striking patterns.
          </p>
          <p>
            I started sewing as a hobby, making face masks for my friends and
            family. Their encouragement has lead me to take on many more
            projects, and now share my work online with you all - so thank you
            for dropping by to my website. I hope to encourage others discover a
            love for sewing, or find a special gift from one of my many items
            for sale.
          </p>
          <p>
            I lovingly hand craft each piece and take pride in the quality of my
            work. On my Instagram and Etsy pages you’ll find my unique cosmetic
            bags, cushions, headbands, glasses cases and more. If you have a
            special request for a particular colour or pattern, feel free to
            contact me and I’ll do my best to help.
          </p>
        </section>
      </AboutPageStyles>
    </>
  );
}
