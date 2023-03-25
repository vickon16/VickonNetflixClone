import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {Background, Container, Logo, ButtonLink, Feature, FeatureCallOut, Text, TextLink, Group, Profile, Picture, Dropdown, Search, SearchIcon, SearchInput, PlayButton} from "./headerStyles";

const Header = ({bg = true, children, ...restProps}) => {
  return <>{bg ? <Background {...restProps}>{children}</Background> : children}</>;
}

Header.Feature = ({children, ...restProps}) => <Feature {...restProps}>{children}</Feature>

Header.FeatureCallOut = ({children, ...restProps}) => <FeatureCallOut {...restProps}>{children}</FeatureCallOut>

Header.Text = ({children, ...restProps}) => <Text {...restProps}>{children}</Text>

Header.TextLink = ({children, ...restProps}) => <TextLink {...restProps}>{children}</TextLink>

Header.Group = ({children, ...restProps}) => <Group {...restProps}>{children}</Group>

Header.Search = function HeaderSearch({searchTerm, setSearchTerm, ...restProps}) {
  const [searchActive, setSearhActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setSearhActive(prev =>  !prev)} >
        <img src="/images/icons/search.png" alt="search" />
      </SearchIcon>
      <SearchInput value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search films and series" active={searchActive} />
    </Search>
  )
}

Header.Dropdown = ({children, ...restProps}) => <Dropdown {...restProps}>{children}</Dropdown>

Header.Profile = ({children, src, ...restProps}) => <Profile {...restProps}>{children}</Profile>

Header.Picture = ({src, ...restProps}) => <Picture src={`/images/users/${src}.png`} {...restProps} />

Header.Container = ({children, ...restProps}) => {
  return <Container {...restProps}>{children}</Container>
}

Header.Logo = ({ to, ...restProps }) => {
  return <Link to={to}><Logo {...restProps} /></Link>;
};

Header.ButtonLink = ({ children, ...restProps }) => {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.PlayButton = ({ children, ...restProps }) => {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};

export default Header