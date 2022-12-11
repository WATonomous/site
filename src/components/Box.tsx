import styled, { css } from 'styled-components'

import { CSSProperties } from 'react'
import { arrowify } from '../util'

const unchangedProps = [
  'position',
  'top',
  'left',
  'right',
  'bottom',
  'zIndex',

  'opacity',
  'textAlign',
  'flexDirection',

  'border',
  'borderTop',
  'borderLeft',
  'borderRight',
  'borderBottom',

  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',

  'transition',
  'transform',
  'animation',
  'animationDirection',
  'animationPlayState',

  'userSelect',
  'pointerEvents',
] as const

type UnchangedBoxProps = {
  [key in typeof unchangedProps[number]]?: CSSProperties[key]
}

// Need to add important since every rule comes after box, overriding the specificity
const MOBILE_PREFIX = 'mobile$'
function buildMobileProp([prop, val]: [string, string]) {
  return arrowify(prop.slice(MOBILE_PREFIX.length)) + ':' + val + '!important;'
}

const TABLET_PREFIX = 'tablet$'
function buildTabletProp([prop, val]: [string, string]) {
  return arrowify(prop.slice(TABLET_PREFIX.length)) + ':' + val + '!important;'
}

// TODO add theme typings
// TODO change these to CSSProperties['...']
export interface BoxProps extends UnchangedBoxProps {
  // Margins
  mx?: string
  my?: string
  mt?: string
  ml?: string
  mb?: string
  mr?: string

  // Padding
  px?: string
  py?: string
  pt?: string
  pl?: string
  pb?: string
  pr?: string

  // Sizing
  w?: string
  h?: string
  mw?: string
  mh?: string

  bg?: string
  radius?: CSSProperties['borderRadius']
  fit?: CSSProperties['objectFit']
  textAlign?: CSSProperties['textAlign']

  // All mobile props. See if this can be properly typechecked
  [key: `${typeof MOBILE_PREFIX}${string}`]: any

  // All tablet props. See if this can be properly typechecked
  [key: `${typeof TABLET_PREFIX}${string}`]: any
}

export const boxStyles = css<BoxProps>`
  margin-top: ${props => props.mt || props.my};
  margin-left: ${props => props.ml || props.mx};
  margin-right: ${props => props.mr || props.mx};
  margin-bottom: ${props => props.mb || props.my};

  padding-top: ${props => props.pt || props.py};
  padding-left: ${props => props.pl || props.px};
  padding-right: ${props => props.pr || props.px};
  padding-bottom: ${props => props.pb || props.py};

  width: ${props => props.w};
  height: ${props => props.h};
  max-width: ${props => props.mw};
  max-height: ${props => props.mh};

  background: ${props =>
    props.theme.colors[props.bg] ? `var(--${arrowify(props.bg)})` : props.bg};
  border-radius: ${props => props.radius};
  object-fit: ${props => props.fit};

  /* Unchanged props */
  ${props =>
    unchangedProps
      .filter(prop => typeof props[prop] !== 'undefined')
      .map(prop => arrowify(prop) + ':' + props[prop] + ';')}

  /* Tablet props */
  ${props => props.theme.breakpoints.medium} {
    ${props =>
      Object.entries(props)
        .filter(([prop, _]) => prop.startsWith(TABLET_PREFIX))
        .map(buildTabletProp)}
  }

  /* Mobile props */
  ${props => props.theme.breakpoints.small} {
    ${props =>
      Object.entries(props)
        .filter(([prop, _]) => prop.startsWith(MOBILE_PREFIX))
        .map(buildMobileProp)}
  }
`

// Extend this for all components. Use `as` prop if another element is needed.
// Allows us to quickly set CSS props like margin and padding.
export const Box = styled.div<BoxProps>`
  ${boxStyles}
`
