import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background : url(${({src}) => src ? `images/misc/${src}.jpg` : `images/misc/home-bg.jpg`}) top left/ cover no-repeat;
  height: ${({height}) => height};
`

export const Container = styled.div`
  display: flex;
  height: 64px;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  position: ${({ position }) => position};
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 999;

  a {
    display: flex;
  }

  @media screen and (min-width: 1000px) {
    padding: 20px 40px;
  }
`;

export const ButtonLink = styled(Link)`
  display: flex;
  background-color: var(--buttonColor);
  width: 90px;
  height: fit-content;
  color: white;
  border: none;
  font-size: clamp(0.8rem, 1.5vw, 1.1rem);
  border-radius: 3px;
  padding: 10px 17px;

  :hover {
    background-color: var(--buttonColorHover);
  }
`;

export const Logo = styled.img`
  height: 32px;
  width: 100px;
  margin-right: 40px;

  @media screen and (min-width : 1449px) {
   height : 45px;
   width: 167px;
  }

  @media screen and (max-width : 600px) {
    margin-right : 20px;
   
  }
`

export const Feature = styled(Container)`
  flex-direction: column;
  align-items: normal;
  width: min(100%, 1000px);
  margin-top: 8rem;
`

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: clamp(2.7rem, 3.5vw, 3.2rem);
  font-weight: bold;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin-bottom: 25px;
`;

export const Text = styled.p`
  color : white;
  font-size: clamp(1rem, 1.5vw, 1.3rem);
  line-height: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`

export const TextLink = styled.a`
  color: white;
  margin-right: 20px;
  font-size: clamp(1rem, 1.3vw, 1.3rem);
  font-weight: ${({ active }) => (active === "true" ? "700" : "normal")};
  transform: scale(${({ active }) => (active === "true" ? "1.2" : "1")});
  cursor: pointer;

  &:hover {
    color: var(--buttonColor);
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
`;

export const Picture = styled.img`
  background: url(${({src}) => src});
  background-size: contain;
  border: none;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  display: none;
  background-color: black;
  position: absolute;
  padding: 20px;
  width: 150px;
  top: 32px;
  right: 10px;

  ${Group}:last-of-type ${TextLink} {
    cursor: pointer;
  }

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }
    ${TextLink}, ${Picture} {
      cursor: default;
      font-size: 1.1rem;
    }

  }

  img {
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;


export const Search = styled.div`
  display: flex;
  align-items: center;
  gap: .3rem;

  svg {
    cursor: pointer;
    color: white;
  }

  @media screen and (max-width : 700px) {
   display: none;
  }
`;
export const SearchIcon = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;

  img {
    filter: brightness(0) invert(1);
    width: 18px;
    
  }
`;
export const SearchInput = styled.input`
  background-color: #44444459;
  color: white;
  border: 1px solid white;
  height: 30px;
  font-size: 14px;
  transition: width 0.5s;
  margin-left: ${({active}) => active ? "10px" : "0"};
  padding: ${({active}) => active ? "20px" : "0"};
  opacity: ${({active}) => active  ? "1" : "0"};
  width: ${({active}) => active  ? "200px" : "0px"};
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0,0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  width: min(100%, 130px);
  font-size: 20px;
  margin-top: 30px;
  cursor: pointer;
  transition: background-color 0.5s ease;
  font-weight: bold;

  &:hover {
    background-color: #ff1e1e;
    color: white;
  }
`;