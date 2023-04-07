import { User } from "@/@clean/shared/domain/entities/user";
import { IUserRepository } from "../domain/repositories/user_repository_interface";

export class GetUsersUsecase {
    constructor(private userRepo: IUserRepository) {}

    execute(): User[] {
        return this.userRepo.getUsers();
    }
}