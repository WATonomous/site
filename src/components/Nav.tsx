import { Box, BoxProps, Image, Link, Row, Spacer } from '.'
import React, { useEffect, useState } from 'react'

import logo from '../static/img/logos/wato.webp'
import styled from 'styled-components'

const BaseNav = styled(Box).attrs(props => ({
  as: 'nav',
  ...props,
}))<BoxProps>`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  transition: ${props => props.theme.transitions.slow};
  backdrop-filter: blur(1px);

  box-shadow: 0 0rem 1rem 0 var(--background);

  ${props => props.theme.breakpoints.medium} {
    display: none;
  }
`

export function Nav() {
  const [navBg, setNavBg] = useState<string>('transparent')

  function changeBgOnScroll() {
    if (window.scrollY > 0) setNavBg('rgba(0, 0, 0, 0.75)')
    else setNavBg('transparent')
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBgOnScroll)
    return () => {
      window.removeEventListener('scroll', changeBgOnScroll)
    }
  })

  return (
    <BaseNav bg={navBg}>
      <Row px="1rem" py="1rem">
        {/* Left */}
        <Row>
          <Link href="/#about">ABOUT</Link>
          <Spacer />
          <Link href="/#about">PROJECTS</Link>
          <Spacer />
          <Link href="/about">SPONSORS</Link>
          <Spacer />
          <Link href="/about">EVENTS</Link>
        </Row>
        <Spacer />
        {/* Center */}
        <Row>
          <Link href="/#hero">
            <Image
              alt="WATonomous Logo"
              src={logo}
              priority={true}
              width="240"
            />
          </Link>
        </Row>
        <Spacer />
        {/* Right */}
        <Row>
          <Link href="/about">GET INVOLVED</Link>
          <Spacer />
          <Link href="/about">NEWSROOM</Link>
          <Spacer />
          <Link href="/about">CONTACT US</Link>
        </Row>
      </Row>
    </BaseNav>
  )
}
