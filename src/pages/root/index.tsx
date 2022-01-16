import {
  // render
  hydrate,
} from 'solid-js/web'

import { Root } from './Root'

// render(() => <App />, document.getElementById('root') as HTMLElement)

hydrate(() => <Root />, document.getElementById('root') as HTMLElement, {
  renderId: 'island-0',
})
