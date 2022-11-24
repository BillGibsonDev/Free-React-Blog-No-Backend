import { useState } from 'react'

// styles
import styled from 'styled-components'

// components
import { Author } from '../components/Author'

// data
import { AuthorList } from '../AuthorList.js'

export const AuthorsPage = () => {

    const [ authors ] = useState(AuthorList);

  return (
    <StyledAuthors>
        {
            authors.map((author, key) => {
                return (
                    <Author
                        author={author}
                        key={key}
                    />
                )
            })
        }
    </StyledAuthors>
  )
}

const StyledAuthors = styled.section`

`;