import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" />
          <span>Home</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" />
          <span>Search</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" />
          <span>Watchlist</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" />
          <span>Originals</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" />
          <span>Movies</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" />
          <span>Series</span>
        </a>
      </NavMenu>
      <UserImg src="/images/Katlego_J_Profile.jpg" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;

  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 1.42px;
      position: relative;

      &::after {
        content: "";
        height: 2px;
        background: white;
        transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        position: absolute;
        bottom: -6px;
        left: 0;
        right: 0;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
      }
    }

    &:hover {
      span::after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;

  cursor: pointer;
`;
