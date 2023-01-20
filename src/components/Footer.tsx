import {
  Box,
  BoxProps,
  Image,
  Link,
  ResponsiveRow,
  Row,
  Spacer,
  VStack,
} from '.'
import React, { useEffect, useState } from 'react'

import logo from '../static/img/logos/wato.webp'
import styled from 'styled-components'

const BaseFooter = styled(Box).attrs(props => ({
  as: 'footer',
  ...props,
}))<BoxProps>`
  position: relative;
`

export function Footer() {
  return (
    <BaseFooter mt="4rem">
      <ResponsiveRow px="min(10%, 16rem)" pb="4rem">
        <VStack
          gap="1rem"
          pr="max(5%, 2rem)"
          borderRight="1px solid var(--foreground)"
          mobile$borderRight="none"
          mobile$paddingRight="0"
          mobile$borderBottom="1px solid var(--foreground)"
          mobile$paddingBottom="1rem"
        >
          <Box as="h2">Contact Us</Box>
          <Link href="mailto:info@watonomous.ca">info@watonomous.ca</Link>
          <Box as="p">200 University, University of Waterloo, ON</Box>
        </VStack>
        <Spacer />
        <VStack gap="0.75rem">
          <Link href="/sponsors">
            <Box as="h2">Sponsors</Box>
          </Link>
          <VStack gap="0.25rem">
            <Box as="h2">About Us</Box>
            <Link href="/accomplishments">Major Accomplishments</Link>
            <Link href="/accomplishments">Timeline</Link>
          </VStack>
        </VStack>
        <Spacer />
        <VStack gap="0.25rem">
          <Box as="h2">Team</Box>
          <Link href="/team">Team Structure</Link>
          <Link href="/team">Role Details</Link>
          <Link href="/team">Resources</Link>
          <Link href="/join">Apply</Link>
        </VStack>
        <Spacer />
        <VStack gap="0.25rem">
          <Box as="h2">Media</Box>
          <Link href="/media">Photo Gallery</Link>
          <Link href="/media">News Coverage</Link>
          <Link href="/media">Tech Talks</Link>
        </VStack>
      </ResponsiveRow>
    </BaseFooter>
  )
}
