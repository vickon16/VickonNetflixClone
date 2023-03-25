import React from 'react'
import {Header} from "../components"
import * as ROUTES from "../constants/routes";
import Logo from "../logo.svg";

const HeaderContainer = ({children}) => {
  return (
    <Header height="800px">
      <Header.Container position="fixed">
        <Header.Logo to={ROUTES.HOME} alt="NetFlix" src={Logo} />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Container>
      {children}
    </Header>
  )
}

export default HeaderContainer