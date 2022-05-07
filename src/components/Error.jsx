import styled from '@emotion/styled'
import React from 'react'

const Texto = styled.div`
    font-family: 'Lato', sans-serif;
    background-color: #B7322C;
    color: #fff;
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: 700;
    text-align: center;
`

const Error = ({ children }) => {
    return (
        <Texto>
            {children}
        </Texto>
    )
}

export default Error