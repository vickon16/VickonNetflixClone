import styled from "styled-components/macro";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  margin: 40px 0;
  flex-wrap: wrap;

  @media screen and (max-width: 1000px) {
    height: auto;
    row-gap: 1rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;

  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
    justify-content: center;
    height: auto;
    row-gap: 1rem;
  }
`;

export const Input = styled.input`
  width: min(100%, 450px);
  border: none;
  padding: 20px;
  font-size: clamp(1.2rem, 1.5vw, 1.4rem);
  outline: none;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: var(--buttonColor);
  border: none;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: clamp(.9rem, 1.5vw, 1.1rem);
  cursor: pointer;
  width: fit-content;
  white-space: nowrap;

  img {
    margin-left: 12px;
    filter: brightness(0) invert(1);
    width: 20px;

    @media screen and (max-width: 1000px) {
      width: 16px;
    }
  }

  @media screen and (max-width : 1000px) {
   height: 50px
  }
`;

export const Text = styled.p`
  font-size: clamp(1rem, 1.4vw, 1.2rem);
  color: white;
  text-align: center;

`;