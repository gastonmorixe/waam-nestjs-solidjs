import type { Component } from 'solid-js'
import {
  createSignal,
  // onCleanup
} from 'solid-js'

// import { render } from 'https://cdn.skypack.dev/solid-js/web'

export const App: Component = () => {
  const [count, setCount] = createSignal(0)

  // const timer = setInterval(() => setCount(count() + 1), 1000)
  // onCleanup(() => clearInterval(timer))

  return (
    <div>
      {`Hello from Solid JS ${count()} `}
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  )
}

// render(App, document.body);
