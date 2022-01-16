import type { Component } from 'solid-js'
import {
  createSignal,
  // onCleanup
} from 'solid-js'

import { Button } from '../../components/Button'

export const Root: Component = () => {
  const [count, setCount] = createSignal(1)

  return (
    <div>
      {`Hello from Solid JS ${count()} `}
      <Button onClick={() => setCount((prev) => prev + 1)}>+</Button>
    </div>
  )
}
