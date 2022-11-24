// router
import { Link } from "react-router-dom"

// styles
import styled from "styled-components";
import * as palette from '../Theme.js';

export const Post = ({post}) => {
  return (
    <StyledPost>
      <Link id="image-link" to={`/posts/${post.id}`}>
        <img src={post.image} alt={`link to ${post.title}`} />
      </Link>
      <div className="text-wrapper">
        <Link id="title" to={`/posts/${post.id}`}>{post.title}</Link>
        <Link id="author" to={`/authors/${post.author}`}>{post.author}</Link>
        <h6>{post.date}</h6>
      </div>
    </StyledPost>
  )
}

const StyledPost = styled.article`
  display: flex;
  margin: 20px 0;
  padding: 16px;
  background: ${palette.accentColor2};
  @media (max-width: 750px){
    flex-direction: column;
  }
  #image-link {
    width: 30%;
    @media (max-width: 750px){
      width: 100%;
    }
    img {
      width: 100%;
    }
  }
  .text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
    @media (max-width: 750px){
      margin: 0;
    }
    #title {
      font-size: 2em;
      margin-bottom: 20px;
      color: ${palette.textColor};
      @media (max-width: 750px){
        font-size: 1.5em;
      }
      &:hover {
        text-decoration: underline;
      }
    }
    #author {
      font-size: 1.2em; 
      color: black;
      font-weight: 400;
      &:hover {
        text-decoration: underline;
      }
    }
    h6 {
      font-weight: 400;
      font-size: 1em;
    }
  }
`;
