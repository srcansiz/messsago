import http from "http";
import {MessagoServer} from "@messago/server";

const server = http.createServer()

const messago = new MessagoServer({server: server})

console.log('HEYYYYY')
messago.run()