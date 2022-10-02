import React from 'react'
import { styled } from '../theme'
import { Row, Text, Box } from '.'
import Link from 'next/link'
import Image from 'next/future/image'
import { color } from '../util'
import logo from '../static/img/logos/wato.png'

const NavContainer = styled('header', {
  position: 'fixed',
  top: 0,
  left: '50%',

  width: '90vw',
  px: '$9',
  pb: '$1',
  height: 'var(--navbar-height)',
  borderBottomLeftRadius: '$2',
  borderBottomRightRadius: '$2',
  transform: 'translateX(-50%)',

  zIndex: 999,

  color: color('background'),
  background: color('foreground', 0.75),
  backdropFilter: 'blur(0.5rem)',

  // Maybe make a Link component instead
  a: {
    transition: '$normal',
    '&:hover': {
      color: color('blue100'),
    },
  },
})

export function Nav() {
  return (
    <NavContainer>
      <Row
        justify="center"
        align="center"
        wrap="noWrap"
        gap={4}
        css={{ height: '100%' }}
      >
        {/* Left */}
        <Row as="nav" wrap="noWrap" gap={3}>
          <Link passHref href="https://google.com/">
            <Text as="a">Whatever</Text>
          </Link>
          <Link passHref href="https://google.com/">
            <Text as="a">Whatever</Text>
          </Link>
        </Row>

        {/* Center */}
        <Box css={{ alignSelf: 'stretch' }}>
          <Link passHref href="/">
            <Box
              as="a"
              css={{
                position: 'relative',
                display: 'block',
                height: '100%',
                py: '$3',
              }}
            >
              <Image
                alt="WATonomous Logo"
                src={logo}
                style={{
                  height: '100%',
                  width: 'auto',
                }}
              />
              <Box
                css={{
                  position: 'absolute',
                  top: '34.5%',
                  left: '50.8%',
                  borderRadius: '$3',
                  width: '1.15rem',
                  height: '1.15rem',
                  background: color('blue100'),
                }}
              />
            </Box>
          </Link>
        </Box>

        {/* Right */}
        <Row as="nav" wrap="noWrap" gap={3}>
          <Link passHref href="https://google.com/">
            <Text as="a">Whatever</Text>
          </Link>
          <Link passHref href="https://google.com/">
            <Text as="a">Whatever</Text>
          </Link>
        </Row>
      </Row>
    </NavContainer>
  )
}
