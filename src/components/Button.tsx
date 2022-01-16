import type { Component, JSX } from 'solid-js'
// import {} from 'solid-js'

export const Button: Component<JSX.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props,
) => {
  const { children, ...rest } = props
  return (
    <button {...rest} style="border: 1px solid green;">
      {children}
    </button>
  )
}
