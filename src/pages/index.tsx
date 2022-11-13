import {
  Box,
  Button,
  Container,
  ForwardBox,
  HStack,
  Section,
} from '../components'

import Image from 'next/future/image'
import React from 'react'
import bg from '../static/img/sae.jpg'
import logo from '../static/img/logos/wato.webp'

export default function Home() {
  return (
    <Section py="15rem">
      <Box
        className="cover"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundPositionY: '25%',
          filter: 'brightness(25%)', // TODO replace filter with an overlay element, since filter has low caniuse

          top: '5%',
          left: '5%',
          right: '5%',
          bottom: '5%',
          borderRadius: '2rem',
        }}
      ></Box>
      <Container>
        <ForwardBox mx="-0.5vw" mw="100%" h="auto">
          <Image alt="WATonomous Logo" src={logo} priority={true} width="960" />
        </ForwardBox>
        <h2>University of Waterloo's Autonomous Vehicle Department</h2>
        <HStack mt="1rem" gap="1rem">
          <Button>Learn More</Button>
          <Button>Become a Sponsor</Button>
        </HStack>
      </Container>
    </Section>
  )
}
