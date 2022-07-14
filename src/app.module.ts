import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AuthModule} from "./auth/auth.module";
import { UserModule } from './module/user/user.module';
import { BookmarkModule } from './module/bookmark/bookmark.module';
import { PrismaModule } from './module/prisma/prisma.module';
import { TransactionRabbitServiceService } from './service/transaction-rabbit-service/transaction-rabbit-service.service';
import {TransactionRabitModule} from "./service/transaction-rabbit-service/transactionRabitModule";

@Module({
  imports: [
      AuthModule,
      UserModule,
      BookmarkModule,
      PrismaModule,
      TransactionRabitModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
