import React, { createContext, useContext, useState } from 'react'
import { Container, Title, SubTitle, Text, Feature, FeatureTitle, FeatureText, FeatureClose, Maturity, Content, Group, Item, Image, Meta, Entities } from './cardStyles'

const FeatureContext = createContext("");

const Card = ({children, ...restProps}) => {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider value={{showFeature, setShowFeature, itemFeature, setItemFeature}}>
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  )
}

Card.Group = ({children, ...restProps}) => <Group flexDirection="column" margin="0 0 60px 0" {...restProps} >{children}</Group>
Card.Title = ({children, ...restProps}) => <Title {...restProps} >{children}</Title>
Card.SubTitle = ({children, ...restProps}) => <SubTitle {...restProps} >{children}</SubTitle>
Card.Text = ({children, ...restProps}) => <Text {...restProps} >{children}</Text>

Card.Item = function CardItem ({item, children, ...restProps}) {
  const {setShowFeature, setItemFeature} = useContext(FeatureContext);

  return <Item {...restProps} onClick={() => {
    setItemFeature(item)
    setShowFeature(true);
  }} >{children}</Item>
}

Card.Image = ({...restProps}) => <Image {...restProps} />

Card.Meta = ({children, ...restProps}) => <Meta {...restProps}>{children}</Meta>

Card.Feature = function CardFeature({children, category, ...restProps}) {
  const {showFeature, itemFeature, setShowFeature} = useContext(FeatureContext)

  return showFeature && (
    <Feature src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`} {...restProps}>
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)} >
          <img src='/images/icons/close.png' alt="close" />
        </FeatureClose>
      </Content>
      
      <Group margin="30px 0" flexDirection="row" alignItems="center">
        <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? "PG" : itemFeature.maturity}</Maturity>
        <FeatureText fontWeight="bold">
          {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
        </FeatureText>
      </Group>

      {children}
    </Feature>
  )
} 

Card.FeatureTitle = ({children, ...restProps}) => <FeatureTitle {...restProps}>{children}</FeatureTitle>
Card.FeatureText = ({children, ...restProps}) => <FeatureText {...restProps}>{children}</FeatureText>
Card.FeatureClose = ({children, ...restProps}) => <FeatureClose {...restProps}>{children}</FeatureClose>
Card.Maturity = ({children, ...restProps}) => <Maturity {...restProps}>{children}</Maturity>
Card.Content = ({children, ...restProps}) => <Content {...restProps}>{children}</Content>
Card.Entities = ({children, ...restProps}) => <Entities {...restProps}>{children}</Entities>




export default Card