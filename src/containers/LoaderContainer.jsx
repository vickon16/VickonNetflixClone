import React from 'react'
import styled from 'styled-components'
import { Loader } from '../components'

const LoaderContainer = ({...restProps}) => {
  return (
    <Container>
      <Loader {...restProps} />
    </Container>
  )
}

const Container = styled.section`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0; right: 0; left: 0; bottom: 0;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
`

export default LoaderContainer