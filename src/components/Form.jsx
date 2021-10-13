
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { LEFT, RIGHT, CENTER, SHARKS, CATS, ACTIVE, PASSIVE, CHEVRON_COLOR } from '../constants'
import { getIndex } from '../utils'
import Button from './Button'
import Image from './Image'

const Frame = styled.div`
    display: grid;
    grid-template-areas:
    'HeaderButton HeaderButton HeaderButton '
    'LeftButton ImageFrame  RightButton';
    grid-gap: 5px;
    justify-content: center;
    align-content: center;
    & > div {
      align-items: center;
 
    };
`
const HeaderButton = styled(Frame)`
grid-area: HeaderButton; 
`
const ImageFrame = styled(Frame)`
grid-area: ImageFrame;
`
const LeftButton = styled(Frame)`
grid-area: LeftButton; 
`
const RightButton = styled(Frame)`
grid-area: RightButton; 
`

const Form = ({ img, refreshContent }) => {
  const [imgIndex, setimgIndex] = useState(1)
  const [sharkToggle, setSharkToggle] = useState(true)
  const [catToggle, setCatToggle] = useState(true)

  useEffect(() => {
    const index = getIndex(img.length)
    setimgIndex(index)
    console.log('fff')
    console.log(catToggle)
    console.log(sharkToggle)
  }, [sharkToggle, catToggle])

  function handleContentType (event) {
    if (event.target.id === CATS) {
      setSharkToggle(false)
      setCatToggle(true)
    }
    if (event.target.id === SHARKS) {
      setCatToggle(false)
      setSharkToggle(true)
    }
    console.log(catToggle)
    console.log(sharkToggle)
   // refreshContent(event.target.id)
  }

  return (
    <Frame>
      <HeaderButton position={CENTER}>
        <Button content={SHARKS} name={SHARKS} color={sharkToggle ? ACTIVE : PASSIVE} id={SHARKS} onClick={(e) => handleContentType(e)} />
        <Button content={CATS} name={CATS} color={catToggle ? ACTIVE : PASSIVE} id={CATS} onClick={(e) => handleContentType(e)} />
      </HeaderButton>
      <LeftButton position={LEFT}>
        <Button content={LEFT} color={CHEVRON_COLOR} onClick={(() => setimgIndex(getIndex(img.length)))} />
      </LeftButton>
      <ImageFrame position={CENTER}>
        <Image source={img[imgIndex]} placement={CENTER} />
      </ImageFrame>
      <RightButton position={RIGHT}>
        <Button content={RIGHT} color={CHEVRON_COLOR} onClick={(() => setimgIndex(getIndex(img.length)))} />
      </RightButton>
    </Frame>

  )
}

export default Form
