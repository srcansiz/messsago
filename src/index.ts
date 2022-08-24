import {HttpServer} from "./restful/HttpServer";
const WebSocket = require('ws');


const defaultConfiguration = {
    port    : 8585,
    host    : 8080,
    server :  null
}

export default class Messago {


}

const server = new HttpServer()
const s = server.run()

s.on('upgrade', (req, socket, head) => {

})

