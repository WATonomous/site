import {
  Box,
  Container,
  Cover,
  Image,
  Link,
  ResponsiveRow,
  Section,
  Spacer,
  VStack,
} from '../components'

import React from 'react'
import bg from '../static/img/sae.jpg'
import people from '../static/img/press/people.png'
import tiers from '../static/img/sponsorship-tiers.png'

const sponsors = {
  partners: [
    {
      name: 'General Motors',
      imgSrc: 'gm.png',
      description:
        'Short description about this company. Short description about this company.',
    },
  ],
}

function Sponsor({ imgSrc, name, description, ...props }) {
  const src = require(`../static/img/logos/${imgSrc}`)
  return (
    <ResponsiveRow padding="0" pr="1rem" bg="blue200" radius="1rem" {...props}>
      <Image
        src={src}
        alt={`${name} Sponsor Logo`}
        fit="cover"
        height="120"
        border-top-left-radius="1rem"
        border-bottom-left-radius="1rem"
      />
      <Spacer />
      <VStack gap="0.25rem" py="1rem">
        <h3>{name}</h3>
        <Box as="p">{description}</Box>
      </VStack>
    </ResponsiveRow>
  )
}

export default function SponsorsPage() {
  return (
    <>
      <Section id="hero" py="calc(2rem + 8vw)">
        <Cover>
          <Image
            src={bg}
            alt="WATonomous Logo"
            fit="cover"
            opacity={0.25}
            priority={true}
            fill={true}
            radius="1.5rem"
          />
        </Cover>
        <Container px="3rem">
          <Box as="em" display="block">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            harum, vel sequi ipsum temporibus ab placeat libero animi
            necessitatibus consectetur in odit quos impedit ad voluptates. Modi
            vel minus debitis?"
          </Box>
          <Box as="hr" my="2rem" border-top-width="1rem" />
          <Box as="h1">Sponsors</Box>
          <Box as="h4" font-weight="normal" w="60%" mobile$width="90%">
            Autonomous vehicles are the future. WATOnomous is passionate about
            their work in achieving this vision. As WATOnomous grows, it
            requires a significant investment into software and hardware. With
            your support, we can heighten our vehicle’s performance and gain
            access to more competition opportunities.
          </Box>
        </Container>
      </Section>

      <Section id="why-wato" py="calc(2rem + 2vw)" mt="2rem">
        <Container>
          <Box as="h1" text-align="center" className="neon">
            Why WATO?
          </Box>
          <ResponsiveRow padding="2rem">
            <Image
              src={people}
              alt="WATonomous Team"
              fit="cover"
              priority={true}
              radius="1.5rem"
              margin="auto"
              mw="100%"
            />
            <Spacer minSize="2rem" />
            <Box as="p" py="1rem">
              We are a team of bright individuals with outstanding competition
              results to show for it (list results).
              <br />
              We are expanding our horizons, currently in works of publishing
              multiple research reports and Tech Talks.
            </Box>
          </ResponsiveRow>
        </Container>
      </Section>

      <Section id="join" pb="4rem">
        <Container px="3rem">
          <VStack gap="1rem" align="center">
            <Box as="h1" className="neon">
              Join us Today!
            </Box>
            <Link
              href="#"
              variant="button"
              box-shadow="0 0 1rem var(--blue100), 0 0 2rem var(--blue200)"
              $hover="box-shadow: 0 0 0 var(--blue100);"
            >
              Complete Sponsor Form
            </Link>
            <Box as="h4">
              For more details, our sponsorship package can be accessed here.
              For any inquirires, feel free to contact us.
            </Box>
            <Image
              src={tiers}
              alt="Sponsorship Tiers"
              fit="cover"
              priority={true}
              radius="1.5rem"
              margin="auto"
              mw="100%"
            />
          </VStack>
        </Container>
      </Section>

      <Section id="current-sponsors" bg="black200">
        <Container px="3rem">
          <VStack gap="2rem" align="center">
            <Box as="h1" className="neon">
              Our Current Sponsors
            </Box>
            <Box as="h4">
              A huge thank you to everyone who supports our design team and our
              mission!
            </Box>
            <VStack gap="1rem">
              <Box as="h2" className="neon">
                Current Partners
              </Box>
              {sponsors.partners.map(details => (
                <Sponsor {...details} />
              ))}
            </VStack>
          </VStack>
        </Container>
      </Section>
    </>
  )
}
