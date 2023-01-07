import { Box, BoxProps, Image, Link, Row, Spacer, VStack } from '.'
import React, { useEffect, useState } from 'react'

import car from '../static/img/car.webp'
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
`

const BaseMobileNav = styled(Box).attrs(props => ({
  as: 'nav',
  ...props,
}))<BoxProps>`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background: var(--background);
  transition: ${props => props.theme.transitions.slow};
`

interface NavItem {
  title: string
  link: string
}

const leftNavItems: NavItem[] = [
  {
    title: 'ABOUT',
    link: '/#about',
  },
  {
    title: 'PROJECTS',
    link: '/#projects',
  },
  {
    title: 'SPONSORS',
    link: '/sponsors',
  },
  {
    title: 'EVENTS',
    link: '/#events',
  },
]

const rightNavItems: NavItem[] = [
  {
    title: 'GET INVOLVED',
    link: '/get-involved',
  },
  {
    title: 'NEWSROOM',
    link: '/#projects',
  },
  {
    title: 'CONTACT US',
    link: '/sponsors',
  },
]

function MobileNav({ isActive = false, onClick }) {
  return (
    <BaseMobileNav transform={`translateX(${isActive ? '0' : '-100%'})`}>
      <VStack px="3rem" py="4.5rem" gap="1rem">
        {[...leftNavItems, ...rightNavItems].map(item => (
          <>
            <Link font-size="2rem" href={item.link} onClick={onClick}>
              {item.title}
            </Link>
          </>
        ))}
      </VStack>
    </BaseMobileNav>
  )
}

export function Nav() {
  const [navBg, setNavBg] = useState<string>('transparent')
  const [mobileNavActive, setMobileNavActive] = useState<boolean>(false)

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
    <>
      <MobileNav
        onClick={() => setMobileNavActive(false)}
        isActive={mobileNavActive}
      />
      <BaseNav bg={navBg}>
        <Row px="1rem" py="1rem">
          {/* Left */}
          <Row>
            <Box
              display="none"
              transition="var(--transition-slow)"
              transform={`rotateY(${mobileNavActive ? '180deg' : '0'})`}
              mobile$display="inline-block"
              onClick={() => setMobileNavActive(!mobileNavActive)}
            >
              <Image
                mt="0.2rem"
                alt="Car Hamburger"
                src={car}
                priority={true}
                width="40"
              />
            </Box>
            <Row mobile$display="none">
              {leftNavItems.map(item => (
                <React.Fragment key={item.title}>
                  <Link href={item.link}>{item.title}</Link>
                  <Spacer />
                </React.Fragment>
              ))}
            </Row>
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
          <Row mobile$display="none">
            {rightNavItems.map(item => (
              <React.Fragment key={item.title}>
                <Link href={item.link}>{item.title}</Link>
                <Spacer />
              </React.Fragment>
            ))}
          </Row>
        </Row>
      </BaseNav>
    </>
  )
}
