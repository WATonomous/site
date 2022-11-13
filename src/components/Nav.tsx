import { Row, Spacer } from '.'

import Image from 'next/future/image'
import Link from 'next/link'
import React from 'react'
import logo from '../static/img/logos/wato.webp'
import styled from 'styled-components'

const BaseNav = styled.nav`
  color: ${props => props.theme.colors.foreground};
  background: transparent;
`

export function Nav() {
  return (
    <>
      <Row px="1rem" py="1rem">
        {/* Left */}
        <Row>
          <Link href="/about">ABOUT</Link>
          <Spacer />
          <Link href="/about">PROJECTS</Link>
          <Spacer />
          <Link href="/about">SPONSORS</Link>
          <Spacer />
          <Link href="/about">EVENTS</Link>
        </Row>
        <Spacer />
        {/* Center */}
        <Row>
          <Image alt="WATonomous Logo" src={logo} priority={true} width="240" />
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
    </>
  )
}
