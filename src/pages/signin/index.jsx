import React, {useState} from 'react'
import FooterContainer from '../../containers/FooterContainer';
import HeaderContainer from '../../containers/HeaderContainer';
import {Form} from "../../components";
import * as ROUTES from "../../constants/routes"
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../../lib/firebase-config";
import { useNavigate } from 'react-router-dom';
import {Loader} from '../../components';

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const isInvalid = !password || !email;

  const handleSubmit = async (e) => {
    setIsLoading(true);
    

    e.preventDefault();

    try { 
       await signInWithEmailAndPassword(auth, email, password)
      navigate(ROUTES.HOME);
    } catch (error) {
      setError(error.message)

      setTimeout(() => setError(""), 4000)
    }

    setIsLoading(false);
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSubmit}>
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
              {isLoading ? <Loader width="60" height="60" /> : "Sign in"}
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix?
            <Form.FormLink to={ROUTES.SIGN_UP}> Sign up now.</Form.FormLink>
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
}

export default Signin