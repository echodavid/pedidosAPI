import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { AppConfig } from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ AppConfig ],
      
    }),
    MongooseModule.forRoot(
      process.env.MONGO_URI || 'mongodb://localhost:27017/inventario',
      {
        dbName: 'pedidos'
      }
    ),
  ],
})
export class AppModule {}
