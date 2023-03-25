import styled from "styled-components/macro";

export const Container = styled.footer`
  display: flex;
  padding: 70px 56px;
  margin: auto;
  width: min(100%, 1100px);
  flex-direction: column;

  @media screen and (max-width : 1000px) {
   padding: 70px 30px;
  }
`

export const Row = styled.aside`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 35px 15px;
  place-items: center;

  @media screen and (max-width : 1000px) {
   grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  @media screen and (max-width : 600px) {
   place-items: start;
  }
`;

export const Column = styled.aside`
  display: flex;
  flex-direction: column;

`;
export const Link = styled.a`
  color: var(--linkColor);
  margin-bottom: 20px;
  text-decoration: underline;
  font-size: clamp(.8rem, 1.5vw, 1rem);

  &:hover {
    color : white;
  }
`;
export const Title = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: white;
  margin-bottom: 40px;
`;
export const Text = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: var(--linkColor);
  margin: 40px 0;
`;