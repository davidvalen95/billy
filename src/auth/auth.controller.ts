import {Body, Controller, Post, Req} from "@nestjs/common";
import {AuthService} from "./auth.service";
import {Request} from "express";
import {IsEmail, isNotEmpty, IsNotEmpty, IsString, isString} from "class-validator";
import {SignUpDto} from "./dto";
import {TransactionRabbitServiceService} from "../service/transaction-rabbit-service/transaction-rabbit-service.service";


@Controller({
    path:'auth'
})

export class AuthController{

    constructor(private authService:AuthService, private transactiionRabbit:TransactionRabbitServiceService) {



    }


    @Post('signup')
    signUp(){

        this.transactiionRabbit.sendMessage("hello any1");



        return this.authService.signUp();
    }

    @Post('login')
    login(){
        return this.authService.login();

    }

}

