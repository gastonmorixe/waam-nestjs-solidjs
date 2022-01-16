import type { Component, JSX } from 'solid-js'
// import { styled } from 'solid-styled-components'
// import {} from 'solid-js'

// const ButtonStyled = styled('button')`
//   border: 2px solid red;
// `

export const Button: Component<JSX.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props,
) => {
  const { children, ...rest } = props
  return (
    <button {...rest} style="border: 1px solid red;">
      {children}
    </button>
    // <ButtonStyled {...rest}>{children}</ButtonStyled>
  )
}
