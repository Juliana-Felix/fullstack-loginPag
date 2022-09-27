import styled, { keyframes } from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  font-size: 2rem;
`
export const Animationkitty = keyframes`
  0% { transform: translate(0,  0px); }
  50%  { transform: translate(0, 15px); }
  100%   { transform: translate(0, -0px); }
`

export const KittyImage = styled.img`
  height: 7rem;
  margin-right: 10px;
  animation: ${Animationkitty} 6s ease-in-out infinite;
`