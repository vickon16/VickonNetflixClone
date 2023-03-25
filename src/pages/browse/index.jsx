import { getDocs, query, where } from 'firebase/firestore'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Feature, OptForm } from '../../components'
import AccordionContainer from '../../containers/AccordionContainer'
import FooterContainer from '../../containers/FooterContainer'
import HeaderContainer from '../../containers/HeaderContainer'
import JumbotronContainer from '../../containers/JumbotronContainer'
import { collectionUserRef } from '../../lib/firebase-config'
import * as ROUTES from "../../constants/routes";

const Browse = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const q = query(collectionUserRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length > 0) {
      navigate(ROUTES.HOME)
    } else {
      navigate(ROUTES.SIGN_IN);
    }
  }

  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, Tv programs and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
          <OptForm onSubmit={handleSubmit}>
            <OptForm.InputContainer>
            <OptForm.Input 
              type="text" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}  
              placeholder="Email address..."  required 
            />
            <OptForm.Button>Try it now</OptForm.Button>
            </OptForm.InputContainer>
            <OptForm.Text>Ready to watch? Enter your email  to create or restart your membership</OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  )
}

export default Browse