import {Server as HttpServer} from "http";
import {Server, WebSocket } from "ws";
import {WSClient} from "./WSClient";

export type WebSocketClient = WebSocket

export interface ServerOptions  {
    port?: number
    host?: string
    server: HttpServer
}

export class MessagoServer {

    protected port: number
    protected host: string
    protected server: HttpServer
    protected clients: WSClient[] = []
    protected websocket: Server

    constructor(options: ServerOptions) {
        this.server = options.server
        this.port = options.port ? options.port : 8080
        this.host = options.host ? options.host : 'localhost'
        this.websocket = new Server({ noServer: true })
    }



    /**
     * Run MessagoServer
     */
    public run = () => {

        // Registers WSClient hooks
        this.register_hooks()

        // Start server
        this.start_server()
    }

    /**
     *
     */
    private register_hooks = () => {

        // WebSocket connection event
        this.websocket.on('connection', (socket: any) => {
            let client = new WSClient(socket)
            this.clients.push(client)
        })

        this.websocket.on('error', (error => {
            console.log(error)
        }))
    }

    /**
     * Starts server
     */
    private start_server = () => {

        const headers = [
            'HTTP/1.1 101 Web Socket Protocol Handshake',
            'Upgrade: WebSocket',
            'Connection: Upgrade',
            ''
        ].map(line => line.concat('\r\n')).join('')

        // HTTP server upgrade
        this.server.on('upgrade' , ( req: any, socket: any,  head:any ) => {
            this.websocket.handleUpgrade( req , socket, head, (socket: WebSocket)  => {
                this.websocket.emit('connection', socket, req)
            })
        })

        // Listen server
        this.server.listen(this.port, () : void => {
            console.log(`Server haas started on port ${this.port}`)
        })
    }
}