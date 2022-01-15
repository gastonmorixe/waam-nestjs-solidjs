import { Controller, Get, Render } from '@nestjs/common'
import {
  renderToString,
  // renderToStringAsync,
  // renderToStream
} from 'solid-js/web'

import { AppService } from './app.service'

import { App } from '../views/solid/App'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    const html = renderToString(() => <App />)
    return { message: 'Hello 5!!', appHTML: html }
  }

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }
}
