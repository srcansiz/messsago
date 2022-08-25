import {WebSocketClient} from "./Server";

export class WSClient {

    public id: string
    public client: WebSocketClient
    protected auth_hook: void | null

    constructor( id: string, client: WebSocketClient,  auth_hook : void | null = null) {

        this.id = id
        this.client = client
        this.auth_hook = auth_hook
    }

    static auth = () => {

    }



}