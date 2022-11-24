// styles
import styled from "styled-components";
import * as palette from '../Theme.js';

export const About = () => {
  return (
    <StyledAbout>
        <h1>About Tech Blog</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi vitae ea facere hic natus animi eligendi expedita aut reiciendis numquam. Incidunt, modi. Cupiditate officia numquam dolorem est, exercitationem nostrum culpa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quibusdam accusamus rem quo atque enim? Culpa quia, incidunt eos minus sequi corporis, soluta repudiandae exercitationem magnam necessitatibus sunt quas odio!</p>
    </StyledAbout>
  )
}

const StyledAbout = styled.section`
  @media (max-width: 750px){
    text-align: center;
  }
  h1 {
    margin-top: 20px;
    font-size: 3em;
    color: ${palette.textColor};
    @media (max-width: 750px){
      font-size: 2em;
    }
  }
`;
