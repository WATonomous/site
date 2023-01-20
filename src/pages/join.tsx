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

const divisions = [
  {
    name: 'Software Division',
    children: (
      <>
        <p>
          **short description of software division. The points of contact for
          each group with open positions are listed below.
        </p>
        <ul>
          <li>Perception - Anita Hu: cq2hu@watonomous.ca</li>
          <li>Path Planning - Rowan Dempster: r2dempst@watonomous.ca</li>
          <li>
            Infrastructure & Simulation​ + OpenBolty - Stephen Wang:
            xiren.wang@watonomous.ca
          </li>
        </ul>
      </>
    ),
  },
  {
    name: 'Mechanical Division',
    children: (
      <>
        <p>**short description of mechanical division.</p>
        <ul>
          <li>Sensor Mounting</li>
          <li>Infrastructure & Compute Rack</li>
        </ul>
      </>
    ),
  },
  {
    name: 'Electrical Division',
    children: (
      <>
        <p>**short description of Electrical division.</p>
        <ul>
          <li>Power Systems Advisor​</li>
          <li>Sensor Interfacing - Chris Santos: c7santos@uwaterloo.ca</li>
          <li>
            RADAR Clustering & Tracking - Cyrus Gandevia: cgandevi@uwaterloo.ca
          </li>
        </ul>
      </>
    ),
  },
  {
    name: 'Business Division',
    children: (
      <>
        <p>**short description of Business division.</p>
        <ul>
          <li>Sponsorship & Outreach - Victor Zheng: v2zheng@watonomous.ca</li>
          <li>Marketing - Victor Zheng: v2zheng@watonomous.ca</li>
          <li>Graphic Design - Roni Wu: yy8wu@watonomous.ca</li>
        </ul>
      </>
    ),
  },
]

const affiliated = [
  {
    name: 'WATORACE',
    children: (
      <>
        <p>External Application: https://watorace.ca/apply</p>
      </>
    ),
  },
]

function Division({ name, children, ...props }) {
  return (
    <VStack gap="-1.25rem" {...props}>
      <Box position="absolute" bg="blue200" top="0" left="0" h="0" w="100%" />
      <Box ml="-2.5rem">
        <Box
          as="h2"
          display="inline-block"
          font-weight="700"
          bg="blue100"
          padding="1rem"
          radius="1rem"
          z-index="2"
          position="relative"
        >
          {name}
        </Box>
      </Box>
      <Box padding="2rem" radius="1rem" bg="blue200" position="relative">
        {children}
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
          <Box as="h1">Join our Team!</Box>
          <Box as="h4" font-weight="normal" w="50%" mobile$width="90%">
            Winter 2023 applications are now open. You will need to complete and
            submit your resume at the form below. If we think you'll be a good
            fit for the role, we'll reach out to schedule a quick chat to get to
            know you better.
          </Box>
          <ResponsiveRow mt="1rem" justify="flex-start">
            <Link href="#" variant="button">
              Learn More
            </Link>
          </ResponsiveRow>
        </Container>
      </Section>

      <Section py="calc(2rem + 2vw)">
        <Container>
          <Box
            as="p"
            bg="blue200"
            border-top-left-radius="1rem"
            border-top-right-radius="1rem"
            padding="3rem"
          >
            <strong>
              Applications close December 7th, 2021, 11:59PM EST. You can expect
              to hear back from us by December 23rd, 2021, 11:59PM EST.
            </strong>{' '}
            If you have any specific inquiries, the direct contacts for each
            role is listed below.
          </Box>

          <Box bg="blue100" padding="3rem">
            <Box as="h2" mb="0.75rem">
              Important
            </Box>
            <Box as="p">
              By joining WATonomous, you are agreeing to become a member of the
              team for the entire Fall Term. All applicants must check out{' '}
              <Link
                variant="highlight"
                href="https://bit.ly/wato-roles-divisions-info"
              >
                this link
              </Link>{' '}
              for detailed descriptions of the Fall 2021 roles before applying.
              For a list of helpful resources and technical material we are
              looking for in candidates, see our{' '}
              <Link variant="highlight" href="/resources">
                Resources
              </Link>
              .
            </Box>
          </Box>

          <Box
            bg="blue200"
            padding="3rem"
            border-bottom-left-radius="1rem"
            border-bottom-right-radius="1rem"
          >
            <Link variant="button" href="/resources">
              Submit your application!
            </Link>
          </Box>
        </Container>
      </Section>

      <Section id="divisions" py="calc(2rem + 2vw)">
        <Container px="3rem">
          <VStack gap="3rem">
            <Box as="h1">Divisions Open for Recruitment</Box>
            {divisions.map(details => (
              <Division key={details.name} {...details} />
            ))}
          </VStack>
        </Container>
      </Section>

      <Section py="calc(2rem + 2vw)">
        <Container px="3rem">
          <VStack gap="3rem">
            <Box as="h1">Applications for Affiliated Clubs</Box>
            {affiliated.map(details => (
              <Division key={details.name} {...details} />
            ))}
          </VStack>
        </Container>
      </Section>
    </>
  )
}
