/**
 *
 */
type EventData = {[key: string] : String | number }

/**
 *
 */
type TEvents = {[key: string] : Set<(data: EventData) => void>}


/**
 *
 */
class LocalEmitter {

    private events: TEvents

    constructor() {
        this.events = {}
    }

    /**
     *
     * @param type
     * @param listener
     */
    public on(type: string, listener: (data: EventData) => void) {
        this.events[type] = this.events[type] || new Set<() => void>()
        this.events[type].add(listener)
    }

    /**
     *
     * @param type
     * @param listener
     */
    public once(type: string, listener: (data: EventData) => void ) {

        const self = this
        function onceFunc(data: EventData){
            self.removeEventListener(type)
            listener(data)
        }
        this.on(type, onceFunc)
    }

    /**
     *
     * @param type
     * @param data
     */
    public emit(type: string, data: EventData){

        if(this.events[type]){
            this.events[type].forEach( (value) => {
                value.apply(null, [data])
            })
        }
    }

    removeEventListener(type: string) {
        delete this.events[type]
    }
}