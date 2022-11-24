import { useState } from 'react';
// data
import { PostsList } from "../PostsList.js";

// components
import { Post } from '../components/Post.js';

// styles
import styled from 'styled-components';

export const Home = () => {

  const [ posts ] = useState(PostsList);
  
  return (
    <StyledHome>
      {
        posts.map((post, key) => {
          return (
            <Post
              post={post}
              key={key}            
            />
          )
        })
      }
    </StyledHome>
  );
}

const StyledHome = styled.section``;