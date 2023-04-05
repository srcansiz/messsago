/**
 *
 */
interface IConversation {
    clients: Array<string>;
}

/**
 *
 */
interface IUser {
    id: string
    name: string
    last_token: string,
    email: string
}

/**
 *
 */
interface IMessages {
    cid: IConversation;
    from: IUser;
}
