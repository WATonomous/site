import type { CSSProperties, PropsWithChildren } from 'react'
import React from 'react'
import logo from '../static/img/logos/wato.webp'
import autodrive from '../static/img/sae.jpg'
import Image from 'next/future/image'
import {
  Row,
  Section,
  Col,
  Container,
  Button,
  Text,
  Box,
  Cell,
  Card,
} from '../components'
import Link from 'next/link'
import { color, cover } from '../util'

// TODO Replace gear image with a square one. Current one has some horizontal padding.
import gear from '../static/img/gear.png'

function Event({
  title,
  time,
  children,
}: PropsWithChildren<{
  title: string
  time: string
}>) {
  return (
    <Card>
      <Col>
        <Text as="h2">{title}</Text>
        <Text as="h2">{time}</Text>
        {children}
      </Col>
    </Card>
  )
}

function Gear({
  top,
  left,
  bottom,
  right,
  size,
}: {
  top?: number
  left?: number
  bottom?: number
  right?: number
  size?: number
}) {
  const style = {
    position: 'absolute' as CSSProperties['position'],
    top,
    left,
    bottom,
    right,
    zIndex: -1,
  }
  return <Image alt="Gear" src={gear} height={size} style={style} />
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section size={5}>
        <Box css={{ height: '$space$9' }}></Box>
        {/* TODO Clean this up because this implementation is sketchy asf */}
        <Container size={4} css={{ maxWidth: '55%', px: '$8' }}>
          <Box
            css={{
              ...cover,
              right: '$8',
              zIndex: -1,
              overflow: 'hidden',
              borderBottomRightRadius: '$3',
            }}
          >
            <Box
              css={{
                ...cover,
                zIndex: 2,
                background: color('black100', 0.5),
              }}
            />
            <Box
              css={{
                ...cover,
                zIndex: 1,
                background: `url(${autodrive.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center 25%',
              }}
            />
          </Box>
          <Col gap={3}>
            <Box css={{ ml: -10 }}>
              <Image
                alt="WATonomous Logo"
                src={logo}
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
            <Text as="h2" color="reverse">
              University of Waterloo's Autonomous Vehicle Department
            </Text>
            <Row>
              <Link passHref href="#">
                <Button as="a" color="reverse">
                  Learn more
                </Button>
              </Link>
              <Link passHref href="#">
                <Button as="a" color="accent">
                  Become a sponsor
                </Button>
              </Link>
            </Row>
          </Col>
        </Container>
      </Section>

      {/* Our Mission */}
      <Section size={5}>
        <Container align="center" size={3}>
          <Box
            css={{
              ...cover,
              left: '$9',
              top: '$5',
              zIndex: -1,
              borderTopLeftRadius: '$3',
              background: color('blue100', 0.15),

              '&::before, &::after': {
                content: '',
                position: 'absolute',
                left: '-$radii$3',
                bottom: 0,
                width: '$radii$3',
                height: '$radii$3',
              },

              '&::before': {
                background: color('blue100', 0.15),
              },

              '&::after': {
                background: 'white',
                borderBottomRightRadius: '$3',
              },
            }}
          />
          <Col gap={5}>
            <Row gap={6}>
              <Cell>
                <Col align="start">
                  <Text as="h1" color="accent">
                    Our Mission
                  </Text>
                  <Text as="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </Text>
                  <Button>Learn More</Button>
                </Col>
              </Cell>
              <Cell rounded>
                {/* Insert Carousel here */}
                <Image
                  alt="Placeholder"
                  src={autodrive}
                  width={480}
                  style={{ maxWidth: '100%' }}
                />
              </Cell>
            </Row>
            <Row gap={6}>
              <Cell rounded>
                {/* Insert Carousel here */}
                <Image
                  alt="Placeholder"
                  src={autodrive}
                  width={480}
                  style={{ maxWidth: '100%' }}
                />
              </Cell>
              <Cell>
                <Col align="end">
                  <Text as="h1" color="accent">
                    Partnerships
                  </Text>
                  <Text as="p" align="right">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </Text>
                  <Button>Learn More</Button>
                </Col>
              </Cell>
            </Row>
          </Col>
        </Container>
      </Section>

      {/* Upcoming Events */}
      <Section size={4} color="accent">
        <Container align="center" size={3}>
          <Gear top={-60} right={-90} size={420} />
          <Gear top={400} right={20} size={125} />
          <Gear top={360} left={-230} size={350} />
          <Gear bottom={-50} left={100} size={205} />

          <Col gap={4}>
            <Text as="h1" color="accent">
              Upcoming Events
            </Text>
            <Event title="5th Tech Talk" time="Wed Jan 5, 2022 @ 7:00 PM">
              <Text as="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
              <Text>
                <Text as="strong">Check it out! 🔥</Text>
                https://www.youtube.com/watch?v=o-YBDTqX_ZU
              </Text>
              <Text as="p">
                Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </Text>
            </Event>
            <Event
              title="Board Presentation"
              time="Thurs Jan 6, 2022 @ 8:00 PM"
            >
              <Text as="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
              <Text>
                <Text as="strong">Check it out! 🔥</Text>
                https://www.youtube.com/watch?v=o-YBDTqX_ZU
              </Text>
              <Text as="p">
                Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </Text>
            </Event>
          </Col>
        </Container>
      </Section>
    </>
  )
}
