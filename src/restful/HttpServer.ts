import * as http from "http";
import Router from './Router';


// Request callback
type RequestCallback = (req: http.IncomingMessage, res: http.ServerResponse) => void;


export class HttpServer {

    public port: number = 8081;
    public host: string = '0.0.0.0';
    private server: null | Server = null;
    private routes: Map<string, Router> = new Map;

    /**
     * Register new router for the router
     * @param path
     * @param router
     */
    public registerRoute = (path: string, router: Router): void => {

    }

    /**
     * Run http server
     */
    public run = (): void => {
        this.server = http.createServer(  (req : http.IncomingMessage, res: http.ServerResponse): void => {
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