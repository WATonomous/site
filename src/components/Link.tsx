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
    :hover {
      color: ${props => props.theme.colors.blue100};
    }
  `,
  highlight: css`
    ::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      background: ${props => props.theme.colors.blue200};
      height: 0.5rem;
      z-index: -1;
      will-change: color;
      transition: ${props => props.theme.transitions.fast};
    }

    z-index: 1;
    :hover {
      ::before {
        height: 100%;
      }
    }
  `,
  button: css`
    padding: 0.75rem 1.5rem;

    border: 2px solid ${props => props.theme.colors.foreground};
    border-radius: 0.75rem;
    background: transparent;

    will-change: color, background;
    :hover {
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
  position: relative;
  font-weight: 700;
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
