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
    name: string
}

/**
 *
 */
interface IMessages {
    cid: IConversation;
    from: IUser;
}
