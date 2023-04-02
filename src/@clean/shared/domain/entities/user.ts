import { STATE } from "../enums/state_enum";

export type UserProps = {
    id: number;
    name: string;
    email: string;
    state: STATE;
}

export class User {
    constructor (public props: UserProps) {}

    get id() {
        return this.props.id;
    }

    get name() {
        return this.props.name;
    }

    get email() {
        return this.props.email;
    }

    get state() {
        return this.props.state;
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            state: this.state
        }
    }

    // validações abaixo...
}