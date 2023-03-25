import React, { useState } from "react";
import FooterContainer from "../../containers/FooterContainer";
import HeaderContainer from "../../containers/HeaderContainer";
import { Form } from "../../components";
import * as ROUTES from "../../constants/routes";
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth, collectionUserRef } from "../../lib/firebase-config";
import { useNavigate } from "react-router-dom";
import {Loader} from "../../components";
import { doc, setDoc } from "firebase/firestore";

const Signup = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  const isInvalid = !displayName || !password || !email

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    if (isInvalid) return;

    try {
      const resp = await createUserWithEmailAndPassword(auth, email, password);
      //update user details
      await updateProfile(resp?.user, {
        displayName, photoURL : Math.floor(Math.random() * 5) + 1
      });
      // set user details in firestore database
      await setDoc(
        doc(collectionUserRef, resp.user.uid), {
          uid: resp?.user.uid, displayName, email, photoURL : resp?.user?.photoURL
        }, { merge: true }
      );

      navigate(ROUTES.HOME);
    } catch (error) {
      setError(error.message);
      setTimeout(() => setError(""), 4000);
    }
    
    setIsLoading(false);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSubmit}>
            <Form.Input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Your Username..."
              required
            />
            <Form.Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email..."
              required
            />
            <Form.Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              required
            />
            <Form.Submit disabled={isInvalid}>
              {isLoading ? <Loader width="50" height="50" /> : "Sign up"}
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a user?
            <Form.FormLink to={ROUTES.SIGN_IN}> Sign in now.</Form.FormLink>
          </Form.Text>
          <Form.TextSmall>
            This page is proctected by Google reCAPTCHA to ensure you're not a
            bot.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>

      <FooterContainer />
    </>
  );
};

export default Signup;
