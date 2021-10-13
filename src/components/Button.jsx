import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { LEFT, RIGHT, CATS } from '../constants'

const StyledButton = styled.button`
background-color:${props => props.color};
border: none;
color: white;
padding: 14px 28px;
text-align: center;
text-decoration: none;
display: block;
font-size: 16px;
margin: 4px 2px;
cursor: pointer;
width: 250px;
`

const buttonContent = (content) => {
  if (content === LEFT) {
    return (
      <FontAwesomeIcon
        icon={faChevronLeft}
        size='6x'
      />
    )
  }
  if (content === RIGHT) {
    return (
      <FontAwesomeIcon
        icon={faChevronRight}
        size='6x'
      />
    )
  }
  if (content === CATS) {
    return (
      <p id={content}><b>{`${content}`}</b></p>
    )
  }

  return <p id={content}><b>{`${content}`}</b></p>
}
const Button = ({ content, color, onClick }) => {
  return (
    <StyledButton color={color} id={content} onClick={onClick}>
      {buttonContent(content)}
    </StyledButton>
  )
}

export default Button
