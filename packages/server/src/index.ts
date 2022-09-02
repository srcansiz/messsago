import * as http from "http";
import {MessagoServer} from "./Server";


const server = http.createServer()

const messago = new MessagoServer({server: server})

messago.run()