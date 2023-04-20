import { User } from "../../domain/entities/user";
import { toEnum } from "../../domain/enums/state_enum";

export type JsonProps = {
    user_id?: number;
    name: string;
    email: string;
    state?: string;
}

export default class UserModel extends User {
    static fromJSON(json: JsonProps) {
        return new User({
            id: json.user_id,
            name: json.name,
            email: json.email,
            state: toEnum(json.state as string)
        })
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            state: this.state
        }
    }
}