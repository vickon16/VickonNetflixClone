import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  padding: 200px 45px;
`

export const Title = styled.h1`
  color: white;
  width: min(100%, 800px);
  font-size: clamp(2rem, 3vw, 2.8rem);
  font-weight: 600;
  margin: auto;
`
export const SubTitle = styled.h2`
  color: white;
  width: min(100%, 640px);
  font-size: clamp(1rem, 1.5vw, 1.4rem);
  font-weight: normal;
  margin: 16px auto;
`;