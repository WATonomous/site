import { Box, Container, HStack, Image, Section } from '../components'

import React from 'react'
import bg from '../static/img/sae.jpg'
import logo from '../static/img/logos/wato.webp'

export default function Home() {
  return (
    <Section py="15rem">
      <Box
        as="nav"
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
        <Image alt="WATonomous Logo" src={logo} priority={true} width="960" />
        <h2>University of Waterloo's Autonomous Vehicle Department</h2>
        <HStack mt="1rem" gap="1rem"></HStack>
      </Container>
    </Section>
  )
}
