import {HttpServer} from "./restful/HttpServer";



const defaultConfiguration = {
    port    : 8585,
    host    : 8080,
    server :  null
}

export default class Messago {


}

const server = new HttpServer()

server.get('xx' , (req, res) => {
    console.log(req)
})


