import { HeartFilled } from "@ant-design/icons";
import React, { FC, useMemo } from "react";
import styled, { keyframes } from "styled-components";

const bubbleEffect = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0);
  }

  50% {
    opacity: 0.8;
    transform: translateY(5vh);
  }

  100% {
    opacity: 0;
    transform: translateY(10vh);
  }
`;

const Wrapper = styled.div<{size: number, left: number, top: number, delay: number}>`
  opacity: 0;
  font-size: ${p => p.size}vw;
  color: #f19e8b;
  position: fixed;
  top: ${p => p.top}vh;
  left: ${p => p.left}vw;
  animation: ${bubbleEffect} 1s linear ${p => p.delay}ms;
`

export const BubbleHeart: FC = () => {

  const delay = useMemo(() => (
    Math.floor(Math.random() * 100) * 20
  ), [])
  const size = useMemo(() => (
    Math.floor(Math.random() * 40) + 10
  ), [])
  const top = useMemo(() => (
    Math.floor(Math.random() * 120) - 20 - size/2
  ), [])
  const left = useMemo(() => (
    Math.floor(Math.random() * 120) - 10 - size/2
  ), [])

  return (
    <Wrapper size={size} left={left} top={top} delay={delay}>
      <HeartFilled/>
    </Wrapper>
  )
}
