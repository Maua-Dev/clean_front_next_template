import { IUserRepository } from "@/@clean/modules/user/domain/repositories/user_repository_interface";
import { randomUUID } from "crypto";
import { User } from "../../domain/entities/user";
import { STATE } from "../../domain/enums/state_enum";

export class UserRepositoryMock implements IUserRepository {
    private users: User[] = [
        new User({
            id: randomUUID(),
            name: 'Toledo',
            email: 'rodrigo.devcommunity@gmail.com',
            state: STATE.PENDING
        }),
        new User({
            id: randomUUID(),
            name: 'Zeeba',
            email: 'zeeba.devcommunity@gmail.com',
            state: STATE.PENDING
        }),
        new User({
            id: randomUUID(),
            name: 'Enricao',
            email: 'enrico.devcommunity@gmail.com',
            state: STATE.PENDING
        }),
        new User({
            id: randomUUID(),
            name: 'Ludjas',
            email: 'luigi.devcommunity@gmail.com',
            state: STATE.PENDING
        }),
        new User({
            id: randomUUID(),
            name: 'Coordenas',
            email: 'coordenas.devcommunity@gmail.com',
            state: STATE.PENDING
        }),
    ];

    createUser(user: User): User {
        this.users.push(user);
        return user;
    }

    getUsers(): User[] {
        return this.users;
    }

    updateUser(userId: string, newName: string): User {
        const user = this.users.find(user => user.id === userId);
        if (user) {
            user.setName = newName;
        }
        return user as User;
    }

    deleteUser(userId: string): User {
        const user = this.users.find(user => user.id === userId);
        if (user) {
            this.users = this.users.filter(user => user.id !== userId);
        }
        return user as User;
    }

}