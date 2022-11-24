// styles
import styled from "styled-components";
import * as palette from '../Theme.js';

// router
import { Link } from "react-router-dom";

// icons
import Twitter from '../assets/icons/twitterBlack.png';
import Portfolio from '../assets/icons/globe.png';
import Github from '../assets/icons/githubBlack.png';
import Linkedin from '../assets/icons/linkedinBlack.png';
import Youtube from '../assets/icons/youtubeBlack.png';

export const Author = ({author}) => {

  return (
    <StyledAuthor>
        <Link to={`/authors/${author.name}`}><img src={author.image} alt={author.name} /></Link>
        <div className="text-wrapper">
            <Link to={`/authors/${author.name}`}>{author.name}</Link>
            <h6>{author.title}</h6>
            <div className="languages-container">
                {
                    author.languages.map((language, key) => {
                        return (
                            <h6 key={key}>{language}</h6>
                        )
                    })
                }
            </div>
            <p>{author.about}</p>
            <div className="socials-container">
                {
                    !author.socials.twitter
                    ? <></>
                    : <a href={`${author.socials.twitter}`}><img src={Twitter} alt="twitter link" /></a>
                }
                {
                    !author.socials.linkedin
                    ? <></>
                    : <a href={`${author.socials.linkedin}`}><img src={Linkedin} alt="linkedin link" /></a>
                }
                {
                    !author.socials.youtube
                    ? <></>
                    : <a href={`${author.socials.youtube}`}><img src={Youtube} alt="youtube link" /></a>
                }
                {
                    !author.socials.github
                    ? <></>
                    : <a href={`${author.socials.github}`}><img src={Github} alt="github link" /></a>
                }
                {
                    !author.socials.portfolio
                    ? <></>
                    : <a href={`${author.socials.portfolio}`}><img src={Portfolio} alt="portfolio link" /></a>
                }
            </div>
        </div>
    </StyledAuthor>
  )
}

const StyledAuthor = styled.article`
    display: flex;
    margin-bottom: 20px;
    padding: 16px;
    background: ${palette.accentColor2};
    @media (max-width: 750px){
        flex-direction: column;
        justif-content: center;
        align-items: center;
        text-align: center;
    }
    a {
        display: block;
        width: 30%;
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
            text-align: center;
            align-items: center;
        }
        a {
            font-size: 2em;
            color: ${palette.textColor};
            &:hover {
                text-decoration: underline;
            }
        }
        h6 {
            font-size: 1.2em;
            font-weight: 400;
            color: #000000;
        }
        .languages-container {
            display: flex;
            @media (max-width: 750px){
                margin: 6px 0;
            }
            h6 {
                margin-right: 6px;
                font-size: 1em;
            }
        }
        p {

        }
        .socials-container {
            display: flex;
            margin-top: 10px;
            a {
                width: 35px;
                margin-right: 10px;
                img{
                    width: 100%;
                }
            }
        }
    }
`;