import {Module} from "@nestjs/common";
import {TransactionRabbitServiceService} from "./transaction-rabbit-service.service";


@Module({
    imports: [],
    controllers: [ ],
    providers: [TransactionRabbitServiceService],
    exports:[TransactionRabbitServiceService]
})
export class TransactionRabitModule {



}