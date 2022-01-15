import { createSignal, onCleanup } from 'solid-js'

// import { render } from 'https://cdn.skypack.dev/solid-js/web'

export const App = () => {
  const [count, setCount] = createSignal(0),
    timer = setInterval(() => setCount(count() + 1), 1000)
  onCleanup(() => clearInterval(timer))
  // return html`<div>${count}</div>`
  return <div>Hello from Solid {count}</div>
}

// render(App, document.body);
