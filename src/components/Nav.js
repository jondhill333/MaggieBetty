import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const NavStyles = styled.div`
  font-family: "GlacialIndifference";
  height: 50px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  border-bottom: 2px solid var(--maisieBrown);
  align-items: center;
  .logo {
    font-size: 2.5rem;
    padding: 0 0 0 10px;
    color: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    > a {
      display: flex;
      align-items: center;
    }
  }
  .image {
    width: 60px;
    height: 60px;
  }

  .pageLinks {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-size: 1.8rem;
  }

  a {
    text-decoration: none;
    color: black;
    /* &[aria-current] {
      color: white;
      background-color: pink;
      padding: 2px 3px;
      border-radius: 10px;
    } */
  }

  .shopLink {
    pointer-events: none;
  }
  .socialLinksContainer {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 0 10px 0 0;
  }
  .instagram {
    width: 35px;
    height: 35px;
    transform: translateY(4px);
  }
  .email {
    width: 40px;
    height: 40px;
    transform: translateY(1px);
  }
`;

export default function Nav() {
  const { logos } = useStaticQuery(graphql`
    query {
      logos: allSanityLogoImages {
        nodes {
          image {
            asset {
              fluid(maxHeight: 700) {
                ...GatsbySanityImageFluid
              }
              fixed(width: 30, height: 30) {
                ...GatsbySanityImageFixed
              }
            }
          }
          name
        }
      }
    }
  `);

  const instagramLogo = logos.nodes.filter((logo) => logo.name === "instagram");
  const instagramFluid = instagramLogo[0].image.asset.fluid;

  const emailLogo = logos.nodes.filter((logo) => logo.name === "email");
  const emailFluid = emailLogo[0].image.asset.fluid;

  return (
    <NavStyles>
      <div className="logo">
        <Link to="/">
          {/* {" "}
          <div className="dogContainer">
            <Img
              fixed={logo.nodes[2].image.asset.fixed}
              alt={logo.nodes[2].name}
              className="image"
            />
          </div> */}
          Maggie Betty
        </Link>
      </div>
      <nav role="navigation" className="pageLinks">
        <Link to="/gallery">Gallery</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <a to="/" className="shopLink">
          Shop
        </a>
      </nav>
      <div className="socialLinksContainer">
        <div className="socialLink instagram">
          <a
            href="https://www.instagram.com/maggiebettyhomestudio/"
            target="_blank"
            rel="noreferrer"
          >
            <Img
              fluid={instagramFluid}
              alt={logos.nodes[2].name}
              // className="instagram"
            />
          </a>
        </div>
        <div className="socialLink email">
          <a href="mailto:maggie@maggiebetty.co.uk">
            <Img
              fluid={emailFluid}
              alt={emailLogo.name}
              // className="email"
            />
          </a>
        </div>
      </div>
    </NavStyles>
  );
}
