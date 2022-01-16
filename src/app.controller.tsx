import { Controller, Get, Render, Dependencies } from '@nestjs/common'
import {
  renderToString,
  generateHydrationScript,
  // renderToStringAsync,
  // renderToStream
} from 'solid-js/web'

import { AppService } from './app.service'

import { Root } from './pages/root/Root'

@Controller()
@Dependencies(AppService)
export class AppController {
  constructor(private readonly appService: AppService) {
    this.appService = appService
  }

  @Get()
  @Render('root')
  root() {
    const appHTML = renderToString(() => <Root />, { renderId: 'island-0' }) // REFACTOR
    const hydrationScriptHTML = generateHydrationScript()
    return { appHTML, hydrationScriptHTML }
  }

  @Get('/hello')
  hello(): string {
    // return 'hellooooo'
    // return this.appService
    return this.appService.getHello()
  }
}
