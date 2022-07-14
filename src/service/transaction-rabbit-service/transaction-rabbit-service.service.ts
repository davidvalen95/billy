import { Injectable } from '@nestjs/common';
import {RabbitMqBasic} from "../../RabbitMqBasic";

@Injectable()
export class TransactionRabbitServiceService extends RabbitMqBasic{
    protected getRoutingKey() {

        return "transaction.create";
    }




}
