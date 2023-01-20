import styled from 'styled-components'

export const Cover = styled.div`
  position: absolute;
  top: 1rem;
  left: 2rem;
  right: 2rem;
  bottom: 1rem;

  z-index: -1;

  /* TODO change to a translucent image because filter's caniuse% is pretty bad */
  /* filter: brightness(25%); */
`
