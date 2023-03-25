import React from 'react'
import { Container, Input, Button, Text, InputContainer } from './optFormStyles'

const OptForm = ({children, ...restProps}) => {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}

OptForm.InputContainer = ({children, ...restProps}) => {
  return <InputContainer {...restProps}>{children}</InputContainer>
}

OptForm.Input = ({...restProps}) => {
  return (<Input {...restProps} />)
}

OptForm.Button = ({ children, ...restProps }) => {
  return <Button {...restProps}>
    {children} <img src='images/icons/chevron-right.png' alt='right' />
  </Button>;
};

OptForm.Text = ({ children, ...restProps }) => {
  return (
    <Text {...restProps}>{children} </Text>
  );
};

export default OptForm