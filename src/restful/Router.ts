import {IncomingMessage, ServerResponse} from "http";

type RequestCallback = (req: IncomingMessage, res: ServerResponse) => void;

export default class Router {


    private getRoutes: Map<string, RequestCallback> = new Map;
    private postRoutes: Map<string, RequestCallback> = new Map;

    public get = (path: string, callback:void): void => {
    }

    public post = (path: string, callback:void): void => {
    }




}




