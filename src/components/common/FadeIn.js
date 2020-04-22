import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"

const FadeWrapper = styled.div`
  opacity: 0;
  transform: ${({ right, left }) =>
    right
      ? "translateX(50px)"
      : left
      ? "translateX(-50px)"
      : "translateY(20vh)"};
  visibility: hidden;
  transition: opacity 1200ms ease-out, transform 600ms ease-out,
    visibility 1200ms ease-out;
  will-change: opacity, transform, visibility;

  &.is-visible {
    opacity: 1;
    transform: none;
    visibility: visible;
  }
`

export default props => {
  const [isVisible, setVisible] = useState(true)
  const domRef = useRef()
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting))
    })
    observer.observe(domRef.current)
    return () => observer.unobserve(domRef.current)
  }, [])
  return (
    <FadeWrapper
      right={props.right}
      left={props.left}
      className={`${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </FadeWrapper>
  )
}
