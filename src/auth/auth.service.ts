import {Injectable} from "@nestjs/common";
import {ApiResponse} from "../helper/ApiResponse";


@Injectable({})

export class AuthService{



    public login(){

        var response  =  ApiResponse.create();

        response.message = "yopo terus"
        return response;
    }

    public signUp(){

        return 'i have sign up';
    }
}