import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { createServer as createViteServer } from 'vite'
import { join } from 'path'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  app.useStaticAssets(join(__dirname, '..', 'public'))
  app.setBaseViewsDir(join(__dirname, 'views'))
  app.setViewEngine('hbs')

  const vite = await createViteServer({
    server: { middlewareMode: 'ssr' },
  })
  // use vite's connect instance as middleware
  app.use(vite.middlewares)

  await app.listen(3000)
}
bootstrap()
