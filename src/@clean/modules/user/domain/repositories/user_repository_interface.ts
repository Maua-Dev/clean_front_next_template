import { User } from "@/@clean/shared/domain/entities/user";

export interface IUserRepository {
    createUser(user: User): User;
    getUsers(): User[];
    updateUser(userId: string, newName: string): User;  //returns updated user
    deleteUser(userId: string): User;
}


