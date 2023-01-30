import EventEmitter from "../utils/EventEmitter";
import Entity from "./Entity";

export default class LocalEntity implements Entity {

    private topics = new EventEmitter()


    constructor() {

    }

    subscribe(topic: String, listener: Function) {

    }

    unsubscribe(topic: String, listener?: Function) {

    }

    publish(topic: String, data: any) {

    }
}