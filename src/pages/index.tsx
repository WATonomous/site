import {
  Box,
  Container,
  Cover,
  Image,
  Link,
  ResponsiveRow,
  Row,
  Section,
  Spacer,
  VStack,
} from '../components'
import React, { useEffect, useRef } from 'react'

import bg from '../static/img/sae.jpg'
import gear from '../static/img/gear.png'
import logo from '../static/img/logos/wato.webp'
import styled from 'styled-components'
import waves from '../static/img/shapes/waves.svg'

function Gear({ isInteractive = false, isReversed = false, ...props }) {
  const animation =
    'rotate 10s infinite linear' + (isReversed ? ' reverse' : '')
  return (
    <Image
      alt="Spinning gear"
      src={gear}
      position="absolute"
      animation={isInteractive ? 'none' : animation}
      user-select="none"
      pointer-events="none"
      {...props}
    />
  )
}

function EventCard({ title, date, children }) {
  return (
    <Box
      padding="2rem"
      bg="semiBackground"
      radius="1rem"
      word-break="break-all"
      mw="100%"
    >
      <Box as="h2">{title}</Box>
      <Box as="em">{date}</Box>
      <Box as="p" pt="0.5rem">
        {children}
      </Box>
    </Box>
  )
}

function Project({ title, desc, link }) {
  return (
    <Link href={link}>
      <Box>
        <Image
          alt={title}
          src={bg}
          width="480"
          fit="cover"
          radius="1rem"
          w="100%"
          mh="calc(12rem + 3vw)"
        />
        <VStack gap="1rem">
          <Box as="h3">{title}</Box>
          <Box as="p">{desc}</Box>
        </VStack>
      </Box>
    </Link>
  )
}

// Maybe split each section into a component
export default function Home() {
  const gear1 = useRef<HTMLElement | null>()
  const gear2 = useRef<HTMLElement | null>()

  function handleScroll() {
    if (gear1.current) {
      gear1.current.style.transform = `rotate(${window.scrollY / 3}deg)`
    }
    if (gear2.current) {
      gear2.current.style.transform = `rotate(${window.scrollY / -6}deg)`
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <>
      <Section id="hero" py="calc(4rem + 10vw)">
        <Cover>
          <Image
            radius="1.5rem"
            alt="WATonomous Logo"
            fit="cover"
            opacity={0.25}
            src={bg}
            priority={true}
            fill={true}
          />
        </Cover>
        <Container px="3rem">
          <Image
            mx="-0.5vw"
            mw="90%"
            h="auto"
            alt="WATonomous Logo"
            src={logo}
            priority={true}
            width="960"
          />
          <Box as="h2" mt="1rem">
            University of Waterloo's Autonomous Vehicle Department
          </Box>
          <ResponsiveRow mt="1rem" justify="flex-start">
            <Link href="#" variant="button">
              Learn More
            </Link>
            <Spacer mw="0.5rem" />
            <Link href="#" variant="button">
              Become a Sponsor
            </Link>
          </ResponsiveRow>
        </Container>
      </Section>

      <Box as="hr" my="4rem" />

      <Section
        id="about"
        px="20%"
        tablet$padding-left="10%"
        tablet$padding-right="10%"
        mt="3rem"
      >
        {/* Background visuals */}
        <>
          <Box
            bg="blue200"
            position="absolute"
            top="35%"
            left="40%"
            mobile$left="5%"
            right="0"
            bottom="0"
            border-top-left-radius="2rem"
          ></Box>
          <Box
            bg="blue100"
            position="absolute"
            top="40%"
            left="30%"
            mobile$left="5%"
            right="0"
            bottom="0"
            border-top-left-radius="2rem"
          ></Box>
          {/* For that tiny curve on the left */}
          <Box
            bg="blue100"
            position="absolute"
            top="0"
            left="0"
            right="70%"
            mobile$right="95%"
            bottom="0"
          ></Box>
          <Box
            bg="background"
            position="absolute"
            top="0"
            left="0"
            right="70%"
            mobile$right="95%"
            bottom="0"
            border-bottom-right-radius="2rem"
          ></Box>
        </>
        <VStack gap="4rem">
          <ResponsiveRow>
            <VStack mw="45%" mobile$max-width="100%" gap="1rem" align="start">
              <Box as="h1">Our Mission</Box>
              <Box as="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Box>
              <Link href="#" variant="button">
                Learn More
              </Link>
            </VStack>
            <Spacer minSize="1.5rem" />
            <Image
              radius="1rem"
              fit="cover"
              mw="50%"
              mobile$max-width="100%"
              mobile$margin-top="1.5rem"
              alt="Image of WATO car"
              src={bg}
              width="480"
            />
          </ResponsiveRow>
          <ResponsiveRow>
            <Image
              radius="1rem"
              fit="cover"
              mw="50%"
              mobile$max-width="100%"
              mobile$margin-bottom="1.5rem"
              alt="Image of WATO car"
              src={bg}
              width="480"
            />
            <Spacer minSize="1.5rem" />
            <VStack mw="50%" mobile$max-width="100%" gap="1rem" align="end">
              <Box as="h1">Partnerships</Box>
              <Box as="p" text-align="right">
                Talk about merge between WATonomous and Watorace here (why we
                are participating in the Indy Autonomous Challenge) and Mitt
                Pitt rw? (mention briefly). Images could be clickable to
                organisation page.
              </Box>
            </VStack>
          </ResponsiveRow>
        </VStack>
      </Section>

      <Section id="events" py="7rem" bg="blue100">
        {/* Background visuals */}
        <>
          <Gear top="1rem" left="2rem" mobile$display="none" />
          <Gear top="60%" left="-100px" width="200" />
          <Gear top="0" right="-100px" width="300" />
          <Gear top="190px" right="25px" width="300" isReversed />
          <Gear top="50%" right="50%" width="120" isReversed />
        </>

        {/* Interactive background visuals?? sus implementation */}
        <>
          <Gear
            top="0"
            right="40%"
            width="150"
            isInteractive
            onLoadingComplete={imgEl => (gear1.current = imgEl)}
          />
          <Gear
            bottom="-180px"
            right="-200px"
            width="400"
            isInteractive
            onLoadingComplete={imgEl => (gear2.current = imgEl)}
          />
        </>

        <VStack px="15%" gap="2rem">
          <Box as="h1">Upcoming Events</Box>
          <EventCard title="5th Tech Talk" date="Wed Jan 5, 2022 @ 7:00 PM">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br />
            <br />
            <Box as="strong">Check it out! 🔥</Box>
            https://www.youtube.com/watch?v=o-YBDTqX_ZU
            <br />
            <br />
            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </EventCard>
          <EventCard
            title="Board Presentation"
            date="Thurs Jan 6, 2022 @ 8:00 PM"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat...
          </EventCard>
        </VStack>
      </Section>

      <Section id="projects">
        {/* Background visuals */}
        <>
          <Image
            alt="Waves"
            src={waves}
            position="absolute"
            top="0"
            left="0"
            w="100%"
            z-index="-1"
          />
        </>

        <Box py="8rem" px="10%">
          <VStack gap="1rem">
            <Box as="h1">Research Projects</Box>
            <Box as="h4" mw="60%" mobile$max-width="100%">
              We are currently in the process of developing multiple research
              projects. They are all ongoing and will be ready by early fall.
              Check out the topics here!
            </Box>
            <ResponsiveRow pt="1.5rem">
              <Project link="/" title="Environment Modeling" desc="..." />
              <Spacer />
              <Project link="/" title="MPC Research" desc="..." />
              <Spacer />
              <Project link="/" title="ROAD Dataset" desc="..." />
              <Spacer />
              <Project
                link="/"
                title="Lane Detection and Classification"
                desc="..."
              />
            </ResponsiveRow>
          </VStack>
        </Box>
      </Section>
    </>
  )
}
