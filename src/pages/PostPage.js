import { useState } from 'react';
import { marked } from 'marked';

// components
import { PostPageFooter } from '../components/PostPageFooter.js';

// styles
import styled from 'styled-components';
import * as palette from '../Theme.js';

// router
import { useParams } from 'react-router';

// data
import { PostsList } from "../PostsList.js";

export const PostPage = () => {

  const { id } = useParams();

  const [ post ] = useState(PostsList.find(post => post.id === Number(id)))

  return (
    <StyledPost>
      <div className="content-container"
        id={`${post.type}`}
        dangerouslySetInnerHTML={{
          __html: marked(post.content),
        }}
      >
      </div>
      <PostPageFooter
        name={post.author}
      />
  </StyledPost>
  )
}

const StyledPost = styled.section`
  h1 {
    font-size: 3em;
    @media (max-width: 750px){
      font-size: 2em;
    }
  }
  h5 {
    color: ${palette.accentColor};
    font-size: 2em;
  }
  p {
    font-size: 1.2em;
    margin-bottom: 20px;
  }
  code {
    display: flex;
    background: #ffffffa0;
    padding: 16px;
    font-size: 1rem;
    margin: 20px 0;
    white-space: pre-wrap;    
  }
  ul, ol {
    list-style-position: inside;
    margin-bottom: 20px;
  }
  img {
    width: 80%;
    margin: 16px 0;
  }
  a {
    color: white;
    &:hover {
      text-decoration: underline;
    }
  }
`;