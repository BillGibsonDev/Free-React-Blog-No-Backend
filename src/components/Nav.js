// styles
import styled from "styled-components"
import * as palette from '../Theme.js';

// router
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <StyledNav>
        <Link to="/">Tech Blog</Link>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/authorlist">Authors</Link>
        </div>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 7vh;
    border-bottom: 2px solid ${palette.accentColor2};
    margin-bottom: 20px;
    @media (max-width: 550px){
     flex-direction: column;
     border: none;
    }
    a {
        font-weight: 700;
        font-size: 2em;
        color: ${palette.textColor};
    }
    .nav-links {
        width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 300px;
        @media (max-width: 750px){
            margin-top: 6px;
            width: 100%;
        }
        a {
            font-size: 1.2em;
            font-weight: 700;
            color: ${palette.textColor};
            transition: 0.2s;
            &:hover {
                color: ${palette.accentColor};
                text-decoration: underline;
            }
        }
    }
`;
