import {Module} from "@nestjs/common";
import {AuthController} from "./auth.controller";
import {AuthService} from "./auth.service";
import {TransactionRabbitServiceService} from "../service/transaction-rabbit-service/transaction-rabbit-service.service";
import {TransactionRabitModule} from "../service/transaction-rabbit-service/transactionRabitModule";


@Module({
    imports: [TransactionRabitModule],
    controllers: [ AuthController],
    providers: [AuthService],
})
export class AuthModule {

}