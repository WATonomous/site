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

import React from 'react'
import bg from '../static/img/sae.jpg'
import steps from '../static/img/shapes/steps.svg'
import steps2 from '../static/img/shapes/steps-2.svg'

const detailedBios = [
  {
    name: 'Charles Zhang',
    position: 'Team Captain',
    description: `Personal Description here -----------------------------------------------------------------
    -----------------------------------------------------------------------------------------------
    -----------------------------------------------------------------------------------------------`,
  },
  {
    name: 'Rowan Dempster',
    position: 'Team Captain',
    description: `Personal Description here -----------------------------------------------------------------
    -----------------------------------------------------------------------------------------------
    -----------------------------------------------------------------------------------------------`,
  },
  {
    name: 'Victor Zheng',
    position: 'Team Captain',
    description: `Personal Description here -----------------------------------------------------------------
    -----------------------------------------------------------------------------------------------
    -----------------------------------------------------------------------------------------------`,
  },
  {
    name: 'Derek Rayside',
    position: 'Faculty Advisor',
    description: `Personal Description here -----------------------------------------------------------------
    -----------------------------------------------------------------------------------------------
    -----------------------------------------------------------------------------------------------`,
  },
]

const subtleBios = [
  {
    name: 'Charles Zhang',
    position: 'Team Captain',
  },
  {
    name: 'Rowan Dempster',
    position: 'Team Captain',
  },
  {
    name: 'Victor Zheng',
    position: 'Team Captain',
  },
  {
    name: 'Derek Rayside',
    position: 'Faculty Advisor',
  },
  {
    name: 'Charles Zhang',
    position: 'Team Captain',
  },
  {
    name: 'Rowan Dempster',
    position: 'Team Captain',
  },
  {
    name: 'Victor Zheng',
    position: 'Team Captain',
  },
  {
    name: 'Derek Rayside',
    position: 'Faculty Advisor',
  },
  {
    name: 'Charles Zhang',
    position: 'Team Captain',
  },
  {
    name: 'Rowan Dempster',
    position: 'Team Captain',
  },
  {
    name: 'Victor Zheng',
    position: 'Team Captain',
  },
  {
    name: 'Derek Rayside',
    position: 'Faculty Advisor',
  },
]

function DetailedBio({ name, position, description, ...props }) {
  return (
    <ResponsiveRow {...props}>
      <Image
        src={bg}
        width="240"
        alt={`Headshot for ${name}`}
        fit="cover"
        w="160px"
        h="160px"
        radius="2rem"
        box-shadow="0.2rem 0.2rem 0 0 var(--background)"
        mobile$width="100%"
        mobile$border-radius="1rem"
      />
      <Spacer />
      <VStack px="0.5rem" py="1rem" gap="0.25rem">
        <Box as="h4">{name}</Box>
        <Box as="p" color="var(--semi-foreground)">
          {position}
        </Box>
        <Box as="p">{description}</Box>
      </VStack>
    </ResponsiveRow>
  )
}

function SubtleBio({ name, position, ...props }) {
  return (
    <VStack gap="0.25rem" text-align="center" {...props}>
      <Image
        src={bg}
        width="240"
        alt={`Headshot for ${name}`}
        fit="cover"
        w="160px"
        h="160px"
        radius="2rem"
        mobile$width="100%"
        mobile$border-radius="1rem"
      />
      <Box as="h4">{name}</Box>
      <Box as="strong" color="var(--semi-foreground)">
        {position}
      </Box>
    </VStack>
  )
}

export default function Home() {
  return (
    <>
      <Section id="hero" py="calc(2rem + 8vw)">
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
          <Box as="em" display="block">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            harum, vel sequi ipsum temporibus ab placeat libero animi
            necessitatibus consectetur in odit quos impedit ad voluptates. Modi
            vel minus debitis?"
          </Box>
          <Box as="hr" my="2rem" border-top-width="1rem" />
          <Box as="h1">Our Team</Box>
          <Box as="h3" font-weight="normal" w="50%" mobile$width="90%">
            WATonomous is the University of Waterloo's first student-run
            autonomous car team. Our diverse team comprises of students from
            every faculty.
          </Box>
          <ResponsiveRow mt="1rem" justify="flex-start">
            <Link href="#" variant="button">
              Learn More
            </Link>
            <Spacer mw="0.5rem" />
            <Link href="#" variant="button">
              Resources
            </Link>
            <Spacer mw="0.5rem" />
            <Link href="/join" variant="button">
              Apply Now!
            </Link>
          </ResponsiveRow>
        </Container>
      </Section>

      <Section
        id="directors"
        py="calc(2rem + 2vw)"
        bg="var(--blue200)"
        mt="2rem"
      >
        <Container px="3rem">
          <VStack gap="1.5rem">
            <Box as="h1">Directors</Box>
            {detailedBios.map((details, i) => (
              <DetailedBio {...details} key={`detailed${details.name}${i}`} />
            ))}
          </VStack>
        </Container>
      </Section>

      <Section id="software-division" py="calc(2rem + 2vw)" bg="var(--blue100)">
        <Image src={steps} alt="Steps" fill={true} fit="cover" />
        <Container px="3rem">
          <VStack gap="1.5rem">
            <Box as="h1">Software Division</Box>
            <Box as="p">
              WATonomous' largest team focuses on the software development of
              the Bolt's self-driving capabilities using tools from Tensorflow
              to Unity.
            </Box>

            <Row wrap="wrap">
              {subtleBios.map((details, i) => (
                <React.Fragment>
                  <SubtleBio
                    {...details}
                    key={`subtle${details.name}${i}`}
                    mt="1rem"
                  />
                  <Spacer />
                </React.Fragment>
              ))}
            </Row>
          </VStack>
        </Container>
      </Section>

      <Section
        id="mechanical-division"
        py="calc(2rem + 2vw)"
        bg="var(--blue200)"
      >
        <Image src={steps2} alt="Steps" fill={true} fit="cover" />
        <Container px="3rem">
          <VStack gap="1.5rem">
            <Box as="h1">Mechanical Division</Box>
            <Box as="p">
              Oversees the physical modification of the car to support software
              and electrical integration and processing. Particularly focused on
              adding sensors to the car for critical data collection.
            </Box>

            <Row wrap="wrap">
              {subtleBios.map((details, i) => (
                <React.Fragment>
                  <SubtleBio
                    {...details}
                    key={`subtle${details.name}${i}`}
                    mt="1rem"
                  />
                  <Spacer />
                </React.Fragment>
              ))}
            </Row>
          </VStack>
        </Container>
      </Section>

      <Section
        id="electrical-division"
        py="calc(2rem + 2vw)"
        bg="var(--blue100)"
      >
        <Image src={steps} alt="Steps" fill={true} fit="cover" />
        <Container px="3rem">
          <VStack gap="1.5rem">
            <Box as="h1">Electrical Division</Box>
            <Box as="p">
              Handles the integration of software and hardware into the car
              through implementation of embedded design, and signal processing
              of the central computing unit.
            </Box>

            <Row wrap="wrap">
              {subtleBios.map((details, i) => (
                <React.Fragment>
                  <SubtleBio
                    {...details}
                    key={`subtle${details.name}${i}`}
                    mt="1rem"
                  />
                  <Spacer />
                </React.Fragment>
              ))}
            </Row>
          </VStack>
        </Container>
      </Section>

      <Section id="business-division" py="calc(2rem + 2vw)" bg="var(--blue200)">
        <Image src={steps2} alt="Steps" fill={true} fit="cover" />
        <Container px="3rem">
          <VStack gap="1.5rem">
            <Box as="h1">Business Division</Box>
            <Box as="p">
              Supports the technical teams through team administration with
              activities such as sponsorship, finances, marketing, and design.
            </Box>

            <Row wrap="wrap">
              {subtleBios.map((details, i) => (
                <React.Fragment>
                  <SubtleBio
                    {...details}
                    key={`subtle${details.name}${i}`}
                    mt="1rem"
                  />
                  <Spacer />
                </React.Fragment>
              ))}
            </Row>
          </VStack>
        </Container>
      </Section>
    </>
  )
}
