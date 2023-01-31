const messageDataTag: unique symbol = Symbol("MessageDataTag");
const messageTag: unique symbol = Symbol("MessageTag");

/**
 * Type for data in the message
 */
type MessageData = {
    m: string
    t: string
    e: any
}

/**
 * Type for message
 */
type Message = {
    t: string
    d: MessageData
}

type ValidatorResult = {
    status: boolean
    data: Message
}


class Validator {


    public validate = (data: Buffer) : ValidatorResult => {

        let d
        try {
            d = this.validate_json(data)
            d = this.validate_schema(d)
        }catch (e: any){
            return {status: false, data: e}
        }

        return {status: true, data: d}
    }


    /**
     * Validate whether given buffer type is JSON serializable
     * @param data {Buffer}
     */
    private validate_json = (data: Buffer) : Message => {

        let d

        try {
            d = JSON.parse(data.toString())
        }
        catch (e) {
            throw 'Received data is not JSON serializable'
        }
        return d
    }

    /**
     * Validate whether data had valid format
     * @param data {Message}
     */
    private validate_schema = (data: Message) => {

        if('t' in data && typeof data.t === "string" &&
            'd' in data && typeof data.d === "object"
        ){
            return data
        }else{
            throw 'Message data is not well formatted'
        }
    }
}

export default Validator