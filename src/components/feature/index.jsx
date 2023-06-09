import React from 'react'
import {Title, SubTitle, Container} from "./featureStyles"

const Feature = ({children, ...restProps}) => {
  return (
    <Container {...restProps}> {children}</Container>
  )
}

Feature.Title = ({children, ...restProps}) => {
  return <Title {...restProps}>{children}</Title>
}

Feature.SubTitle = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

export default Feature