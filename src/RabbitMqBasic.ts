import {Channel} from "amqplib";

export abstract class RabbitMqBasic {


    protected exchange        = "generalTopicExchange";
    private channel: Channel;
    private onListenCallbacks = [];


    constructor() {

        this.init();
    }

    private getQueue(){
        return `v2.${this.getRoutingKey()}`
    }
    protected abstract getRoutingKey():string;
    private async init() {
        await this.initChannel()
        await this.declare();
        this.listen()
    }

    public async initChannel() {
        const amqplib = require('amqplib');

        var amqp_url = process.env.CLOUDAMQP_URL || 'amqp://admin:JiwaGroup2022$@10.0.8.2:5672';

        var conn     = await amqplib.connect(amqp_url, "heartbeat=60");
        this.channel = await conn.createChannel()

    }

       public  addOnListenCallback(callback){

       this.onListenCallbacks.push(callback);
   }


    private async declare() {
        await this.channel.assertQueue(this.getQueue(), {
            durable: false,
        })
        await this.channel.assertExchange(this.exchange, 'topic',{
            durable: false,
            autoDelete: true,
        });
        await this.channel.bindQueue(this.getQueue(), this.exchange, this.getRoutingKey());
    }

    public async listen() {
        console.log('listening')
        await this.channel.consume(this.getQueue(),  (msg) =>{
            console.log(msg.content.toString());
            this.onListenCallbacks.forEach(current=>{
                current(msg.content.toString())
            })
            this.channel.ack(msg);
        } );
    }
    public async sendMessage(message:string){
        this.channel.publish(this.exchange, this.getRoutingKey(), Buffer.from(message));
    }
}