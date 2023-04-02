import { STATE } from "../enums/state_enum";

export type UserProps = {
    id: string;  //uuid
    name: string;
    email: string;
    state: STATE;
}

export class User {
    constructor (public props: UserProps) {
        if (!User.validateId(props.id)) {
            throw Error('Entity error props.id')
        }
        this.props.id = props.id

        if (!User.validateName(props.name)) {
            throw Error('Entity error props.name')
        }
        this.props.name = props.name

        if (!User.validateEmail(props.email)) {
            throw Error('Entity error props.email')
        }
        this.props.email = props.email

        if (!User.validateState(props.state)) {
            throw Error('Entity error props.state')
        }
        this.props.state = props.state

    }

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

    static validateId(id: string): boolean {
        if (id == null) {
            return false
        } else if (typeof(id) != "string") {
            return false
        } else if (id.length < 36) {
            return false
        }
        return true
    }

    static validateName(name: string): boolean {
        if (name == null) {
            return false
        } else if (typeof(name) != "string") {
            return false
        } else if (name.length < 3) {
            return false
        }
        return true
    }

    static validateEmail(email: string): boolean {
        const regexp = "(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)"

        if (email == null) {
            return false
        }
        if (typeof(email) != "string") {
            return false
        }
        if (!email.match(regexp)) {
            return false
        }
        return true
    }

    static validateState(state: STATE): boolean {
        if (state == null) {
            return false
        } else if (Object.values(STATE).includes(state) == false) {
            return false
        }
        return true
    }

    

}