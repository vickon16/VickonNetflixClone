import styled from "styled-components/macro";

export const Container = styled.section``

export const Button = styled.button`
  background-color: var(--buttonColor);
  border-color: #ff0a10;
  width: 114px;
  height: 45px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items:  center;
  justify-content: center;
  padding-left : 0;

  &:hover {
    transform: scale(1.05);
    background: #ff0816;
  }
`

export const Overlay = styled.div`
  display : flex;
  flex-direction: columm;
  justify-content: center;
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0 , 0, 0, 0.5);
  margin: 0 20px;

`
export const Inner = styled.div`
  position: relative;
  width: min(100%, 900px);
  margin: auto;

  video{
    height: 100%;
    width: 100%;
  }
`