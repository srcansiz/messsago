import {WebSocketClient} from "./Server";
import {randomUUID} from "crypto";
import Validator from "./utils/validator";


type WSClientErrorMessage = {
    t: string,
    m: string
}

export class WSClient {

    public id: string
    public client: WebSocketClient

    private validator: Validator
    private message_types: string[] = ["message", "file", "sound"]

    constructor(client: WebSocketClient) {
        this.id = randomUUID()
        this.client = client
        this.validator = new Validator()

        // Register message handler for client
        this.client.on('message', this.onMessageHandler)
        this.client.on('close', this.onDisconnectHandler)
    }

    /**
     * Handler for client each time receives a data from remote client
     * @param message {string}
     */
    private onMessageHandler = (message: Buffer) => {
        let {status, data} = this.validator.validate(message)
        if(!status){
            if(typeof data === "string") this.send_error(data)
            return
        }

        if(!(data.t in this.message_types)){
            this.send_error('Unrecognized message type')
        }

    }

    /**
     * Handler for client disconnect
     */
    private onDisconnectHandler = (event: number, reason: Buffer) => {
        console.log('Client disconnected')
        console.log(event, reason.toString())
    }

    private m = (event: string, ) => {

    }

    private send = (message: Object | WSClientErrorMessage) => {
        let m = JSON.stringify(message)
        this.client.send(m)
    }

    private send_error = (message: string) => {
        this.send({t: "error" , m: message})
    }

}