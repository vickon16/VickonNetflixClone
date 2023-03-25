import styled from "styled-components/macro";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: min(100%, 80%);

`
export const Title = styled.h1`
  width: 100%;
  color: white;
  font-size : clamp(2.5rem, 3.2vw, 2.8rem);
  text-align: center;
  font-weight: 500;
`
export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
`
export const Picture = styled.img`
  width : min(100%, 150px);
  height: auto;
  border: 3px solid black;
  cursor: pointer;
`

export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: clamp(0.8rem, 1vw, 1rem);
`;

export const Item = styled.li`
  max-height: 200px;
  width: min(100%, 200px);
  list-style-type: none;
  text-align: center;
  margin-right: 30px;

  &:hover > ${Picture} {
    border: 3px solid white;
  }

  &:hover > ${Name} {
    font-weight: bold;
    color: white;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

