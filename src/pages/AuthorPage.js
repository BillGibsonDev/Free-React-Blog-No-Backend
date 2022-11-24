import { useState } from "react";

// styles
import * as palette from '../Theme';
import styled from "styled-components";

// router
import { useParams } from "react-router-dom";

// data
import { AuthorList } from "../AuthorList";
import { PostsList } from "../PostsList";

//components
import { Post } from "../components/Post";
import { Author } from "../components/Author";

export const AuthorPage = () => {

const { name } = useParams();

  const [ authorData ] = useState(AuthorList.find(author => author.name === name))

  return (
    <StyledAuthorPage>
      <Author
        author={authorData}
      />
      <h2>Posts From {authorData.name}</h2>
      {
        PostsList.filter((post => post.author === name)).map((post, key) => {
          return (
            <Post
              key={key}
              post={post}
            />
          )
        })
      }
    </StyledAuthorPage>
  )
}

const StyledAuthorPage = styled.section`
  h2 {
    border-bottom: 1px solid black;
    width: 60%;
  }
`;