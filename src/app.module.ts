import { Module } from '@nestjs/common'

import { AppController } from './app.controller'

// Modules
import { GraphQLModule } from '@nestjs/graphql'
import { OrmModule } from './modules/orm/orm.module'
import { UserModule } from './entities/user/user.module'

// Services
import { AppService } from './app.service'
// import { UserService } from './entities/user/user.service'

@Module({
  imports: [
    OrmModule,
    UserModule,
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      // typePaths: ['./**/*.graphql'],
      // autoSchemaFile: 'schema.gql',
      // autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      autoSchemaFile: true,
      // installSubscriptionHandlers: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
