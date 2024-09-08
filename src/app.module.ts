import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {MongooseModule} from "@nestjs/mongoose"
import {ConfigModule, ConfigService} from "@nestjs/config"
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal:true
    }),
    // MongooseModule.forRoot("mongodb://localhost/nest"),
    MongooseModule.forRootAsync({
      imports:[ConfigModule],
      useFactory:async (configService:ConfigService) => {
        return {uri:configService.get<string>("DB_URL")}
      },
      inject:[ConfigService]
    }),
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
