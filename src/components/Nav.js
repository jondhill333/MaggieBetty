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
  align-items: flex-end;
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
`;

export default function Nav() {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: allSanityLogoImages {
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

  return (
    <NavStyles>
      <div className="logo">
        <Link to="/">
          {" "}
          <div className="dogContainer">
            <Img
              fixed={logo.nodes[2].image.asset.fixed}
              alt={logo.nodes[2].name}
              className="image"
            />
          </div>
          Maggie Betty
        </Link>
      </div>
      <nav role="navigation" className="pageLinks">
        <Link to="/gallery">Gallery</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <a to="/" class="shopLink">
          Shop
        </a>
      </nav>
      <div className="socialLinks">Space for Social Links</div>
    </NavStyles>
  );
}
