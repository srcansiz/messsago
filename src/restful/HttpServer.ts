import {
    createServer,
    IncomingMessage,
    ServerResponse,
    Server, OutgoingMessage
} from "http";

// Request callback
type RequestCallback = (req: IncomingMessage, res: ServerResponse) => void;


export class HttpServer {

    public port: number = 8081;
    public host: string = '0.0.0.0';
    private server: null | Server = null;
    private getRoutes: Map<string, RequestCallback> = new Map;
    private postRoutes: Map<string, RequestCallback> = new Map;


    /**
     * Get listener
     * @param route
     */
    public get = (path: string, callback: RequestCallback): void => {
        this.getRoutes.set(path, callback)
    }

    public post = ( path : string , callback: RequestCallback): void => {
        this.postRoutes.set(path, callback)
    }

    public run = (): void => {
        this.server = createServer(  (req : IncomingMessage, res: ServerResponse): void => {
            switch (req.method){
                case 'GET':
                    break;
                case 'POST':
                    break;
                default:
                    console.log('Unknown method')
            }
        })

        this.server.listen(this.port, this.host)
    }

    private register_route = (): void | null => {
        return null
    }

    private remove_route = (): void | null => {
        return null
    }
}
