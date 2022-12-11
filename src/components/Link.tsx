import styled, { css } from 'styled-components'

import { Box } from '.'
import type { BoxProps } from '.'
import NextLink from 'next/link'
import type { LinkProps as NextLinkProps } from 'next/link'
import type { PropsWithChildren } from 'react'
import React from 'react'

const variants = {
  subtle: css`
    will-change: color;
    &:hover {
      color: ${props => props.theme.colors.blue100};
    }
  `,
  button: css`
    padding: 0.75rem 1.5rem;

    border: 1px solid currentColor;
    border-radius: 1rem;

    will-change: color, background;
    &:hover {
      color: ${props => props.theme.colors.background};
      background: ${props => props.theme.colors.foreground};
    }
  `,
} as const

interface BaseLinkProps extends BoxProps {
  variant?: keyof typeof variants
}

type LinkProps = PropsWithChildren<BaseLinkProps & Omit<NextLinkProps, 'as'>>

const BaseLink = styled(Box).attrs(props => ({
  as: 'a',
  variant: 'subtle',
  ...props,
}))<BaseLinkProps>`
  /* color: ${props => props.theme.colors.foreground}; */
  color: currentColor;
  background: none;
  cursor: pointer;
  transition: ${props => props.theme.transitions.fast};

  ${props => variants[props.variant]}
`

export function Link(props: LinkProps) {
  return (
    <NextLink href={props.href} passHref legacyBehavior>
      <BaseLink {...props} />
    </NextLink>
  )
}
