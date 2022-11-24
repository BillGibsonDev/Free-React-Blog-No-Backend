import { useState } from "react";

// styles
import styled from "styled-components";
import * as palette from '../Theme.js';

// data
import { AuthorList } from "../AuthorList";

// router
import { Link } from "react-router-dom";

export const PostPageFooter = ({name}) => {

const [ authorData ] = useState(AuthorList.find(author => author.name === name))

  return (
    <StyledPostFooter>
        <img src={authorData.image} alt="" />
        <div className="text-container">
            <Link to={`/authors/${authorData.name}`}>{authorData.name}</Link>
            <h6>{authorData.title}</h6>
        </div>
    </StyledPostFooter>
  )
}

const StyledPostFooter = styled.footer`
    display: flex;
    align-items: center;
    width: 100%;
    border-top: 2px solid ${palette.accentColor2};
    img {
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 50%;
    }
    .text-container {
        margin-left: 10px;
        a {    
            color: black;
            font-size: 1.5em;
        }
        h6 {
            font-size: 1em;
            font-weight: 400;
        }
    }
`;