import React from 'react'
import styled from 'styled-components'

const StyledImage = styled.img`
align-content: ${props => props.position};
width: 100%;
height: 100%;
object-fit: cover;
border:2px solid white;
box-shadow: 5px 10px 8px 3px  white;
`

const Image = ({ source, placement }) => {
  return (
    <StyledImage src={source} position={placement} />
  )
}

export default Image
