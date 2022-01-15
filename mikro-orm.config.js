/* eslint-disable @typescript-eslint/no-var-requires */
const { Logger } = require('@nestjs/common')
const { SqlHighlighter } = require('@mikro-orm/sql-highlighter')
const { TsMorphMetadataProvider } = require('@mikro-orm/reflection')

// import { Options } from '@mikro-orm/core'

// const { User } = require('./src/entities/user/user.entity')

const logger = new Logger('MikroORM')
const config = {
  metadataProvider: TsMorphMetadataProvider,
  // entities: [User],
  entitiesTs: ['./src/entities/**/*.entity.ts'],
  entities: ['./dist/src/entities/**/*.entity.js'],
  // baseDir: process.cwd(),
  autoLoadEntities: true,
  dbName: 'waam',
  user: 'gastonmorixe',
  // password: '',
  type: 'postgresql',
  port: 5432,
  highlighter: new SqlHighlighter(),
  debug: true,
  logger: logger.log.bind(logger),
} // as Options

// export default config
module.exports = config

// entities: ['./dist/entities'],
// entitiesTs: ['./src/entities'],
