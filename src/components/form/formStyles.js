import styled from "styled-components/macro";
import { Link } from "react-router-dom";


export const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  width: min(100%, 450px);
  margin: 120px auto 100px;
  padding: 60px 68px 40px;

  @media screen and (max-width : 600px) {
   padding: 30px;
  }
  `

export const Error = styled.p`
  background-color: var(--buttonColor);
  color: white;
  border-radius: 4px;
  font-size: clamp(.8rem, 1.3vw, 1.1rem);
  color : white;
  margin: 0 0 16px;
  padding: 15px;
`

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

`
export const Title = styled.h1`
  color : #fff;
  font-size: clamp(1.7rem, 2.5vw, 2rem);
  margin-bottom: 28px;

`
export const Text = styled.p`
  color: #737373;
  font-size: clamp(.8rem, 1.2vw, 1rem);
  font-weight: 500;
`
export const TextSmall = styled.p`
  font-size: clamp(0.65rem, 1vw, .85rem);
  line-height: normal;
  margin-top: 10px;
  color: #8c8c8c;
`;

export const FormLink = styled(Link)`
  color: white;
  
  &:hover {
    text-decoration: underline;
  }
  `
export const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: none;
  color: white;
  height: 50px;
  line-height: 50px;
  padding: 10px 20px;
  margin-bottom: 20px;
  outline: none;

  &:last-of-type {
    margin-bottom: 30px;
  }
`
export const Submit = styled.button`
  background: var(--buttonColor);
  border-radius: 4px;
  font-size: clamp(1rem, 1.2vw, 1.2rem);
  font-weight: bold;
  margin: 24px 0 12px;
  height: 55px;
  border: none;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;






