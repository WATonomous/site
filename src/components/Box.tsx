import type { PropsWithChildren, ReactElement } from 'react'
import React, { useCallback, useState } from 'react'

import styled from 'styled-components'

// TODO add theme typings
export interface BoxProps {
  // Temp fixes until I open a PR to @typed/styled-components
  // as?: ElementType

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
}

// Extend this for all components. Use `as` prop if another element is needed.
// Allows us to quickly set CSS props like margin and padding.
export const Box = styled.div<BoxProps>`
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
`

// Jank way of forwarding props to a child
export function ForwardBox({
  children,
  ...props
}: PropsWithChildren<BoxProps>) {
  try {
    const child = React.Children.only(children)

    const [className, setClassName] = useState<string>()
    const ref = useCallback((node: Element) => {
      setClassName(node?.classList.toString())
    }, [])
    return (
      <>
        <Box ref={ref} style={{ display: 'none' }} {...props}></Box>
        {React.cloneElement(child as ReactElement, { className })}
      </>
    )
  } catch (err) {
    console.warn(err)
    console.warn(`ForwardBox expected only 1 child. Rendering children as-is.`)
    return <>{children}</>
  }
}
