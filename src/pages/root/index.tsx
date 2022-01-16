import {
  hydrate,
  // render
} from 'solid-js/web'

import { Root } from './Root'

hydrate(() => <Root />, document.getElementById('root') as HTMLElement, {
  renderId: 'island-0',
})
// render(() => <App />, document.getElementById('root') as HTMLElement)
