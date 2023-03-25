import styled from "styled-components/macro";

export const Item = styled.div`
  width: 100%;
  border-bottom: 8px solid var(--grayBg);
  overflow: hidden;
`;

export const Container = styled.section`
  width: 100%;
  @media screen and (max-width : 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;

export const Inner = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(100%, 1200px);
  flex-direction: ${({ direction }) => direction};
  margin: auto;
  gap: 0 2rem;
  color: white;
  padding: 50px 5%;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Pane = styled.div`
  width: 50%;

  @media screen and (max-width : 600px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font : normal 600 clamp(1.5rem, 3vw, 2.5rem)/1.1 var(--fontFamily);
  margin-bottom: 8px;
`;

export const SubTitle = styled.h2`
  font: normal 400 clamp(1rem, 2vw, 1.4rem) / normal var(--fontFamily);
  margin: 1.5rem 0;
`;
export const Image = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
`;