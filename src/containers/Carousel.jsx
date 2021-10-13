import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { fetchImages } from '../services/carousel'
import Form from '../components/Form'

const Container = styled.div`
    height:100vh;
    margin:0;
`
const rotateSpinner = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Loader = styled.div`
  animation: ${rotateSpinner} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`

const Carousel = (props) => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = React.useState(false)
  const [subject, setSubject] = React.useState('ALL')

  const refreshContent = (topic) => {
    setSubject(topic)
    console.log(event.target.id)
  }
  useEffect(() => {
    async function imgList () {
      setLoading(true)
      const imgList = await fetchImages(subject)
      setImages(imgList)
      setLoading(false)
      console.log(imgList)
    }
    imgList()
  }, [subject])

  return (
    <Container>
      {loading
        ? <Loader />
        : <Form img={images} refreshContent={topic => refreshContent(topic)} />}
    </Container>
  )
}

export default Carousel
