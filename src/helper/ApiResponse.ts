export class ApiResponse{


    public message:string = "";
    public isSuccess:boolean = true;
    public data:any = {};



    public static create(){
        return new this();
    }

}