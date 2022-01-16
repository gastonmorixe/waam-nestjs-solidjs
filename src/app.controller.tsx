import { Controller, Get, Render } from '@nestjs/common'
import {
  renderToString,
  generateHydrationScript,
  // renderToStringAsync,
  // renderToStream
} from 'solid-js/web'

import { AppService } from './app.service'

import { Root } from './pages/root/Root'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('root')
  root() {
    const appHTML = renderToString(() => <Root />, { renderId: 'island-0' }) // REFACTOR
    const hydrationScriptHTML = generateHydrationScript()
    return { message: 'Hello 6!!', appHTML, hydrationScriptHTML }
  }

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }
}
