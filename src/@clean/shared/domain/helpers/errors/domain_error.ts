export class EntityError extends Error {
    constructor(message: string) {
        super("Field " + message + " is not valid");
    }
}
