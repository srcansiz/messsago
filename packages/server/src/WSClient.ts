import {WebSocketClient} from "./Server";
import {randomUUID} from "crypto";

export class WSClient {

    public id: string
    public client: WebSocketClient

    constructor(client: WebSocketClient) {
        this.id = randomUUID()
        this.client = client

        // Register message handler for client
        this.client.on('message', this.onMessageHandler)
    }


    /**
     * Handler for client each time receives a data from remote client
     * @param message {string}
     */
    private onMessageHandler = (message: string) => {
        console.log(message.toString())
    }

    /**
     * Handler for client disconnect
     */
    private onDisconnectHandler = () => {

    }


}