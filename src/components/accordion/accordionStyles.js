import styled from "styled-components/macro";


export const Container = styled.section`
  display: flex;
  border-bottom: 8px solid var(--grayBg);
`

export const Inner = styled.div`
  display: flex;
  padding: 70px 35px;
  flex-direction: column;
  margin: auto;
  width: min(100%, 815px);
`;

export const Title = styled.h1`
  font-size: clamp(2.2rem, 3vw, 3.1rem);
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 3.2rem;
  color: white;
  text-align: center;

`;
export const Item = styled.article`
  color: white;
  margin-bottom: 10px;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  background-color: var(--accordionGray);
  padding: 1em 1.2em;

  img {
    width: 15px;
    filter: brightness(0) invert(1);

    @media screen and (max-width : 600px) {
      width: 10px;
    }
  }
`;
export const Body = styled.div`
  max-height: 1200px;
  transition: max-height 0.25 cubic-bezier(0.5, 0, 0.1, 1);
  font : normal normal clamp(1rem, 1.5vw, 1.3rem)/ normal var(--fontFamily);
  background-color: var(--accordionGray);
  padding: 0.8em 2.2em;
  white-space: pre-wrap;
  user-select: none;
  color: #ccc;
`;

