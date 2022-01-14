import {HttpServer} from "./restful/HttpServer";

const server = new HttpServer()

server.get('xx' , (req, res) => {
    console.log(req)
})


