import React from 'react'
import { Container, Error, Title, Text, Input, TextSmall, FormLink, Submit, Base } from './formStyles'

const Form = ({children, ...restProps}) => {
  return (
    <Container {...restProps}>{children}</Container> 
  )
}

Form.Error = ({children, ...restProps}) => <Error {...restProps}>{children}</Error>
Form.Title = ({children, ...restProps}) => <Title {...restProps}>{children}</Title>
Form.Text = ({children, ...restProps}) => <Text {...restProps}>{children}</Text>
Form.Input = ({children, ...restProps}) => <Input {...restProps} />
Form.TextSmall = ({children, ...restProps}) => <TextSmall {...restProps}>{children}</TextSmall>
Form.FormLink = ({children, ...restProps}) => <FormLink {...restProps}>{children}</FormLink>
Form.Submit = ({children, ...restProps}) => <Submit {...restProps}>{children}</Submit>
Form.Base = ({children, ...restProps}) => <Base {...restProps}>{children}</Base>

export default Form