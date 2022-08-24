import * as http from "http";

export interface ServerOptions = {
    port: number
    host: string
    server: http.Server
}

abstract class Transport{
    public server?: http.Server
}

export class Server extends Transport {

    protected port: number = 8080
    protected host: string = 'localhost'
    protected server: http.Server

    constructor(options: ServerOptions) {

    }

    public listen = () => {

    }
}