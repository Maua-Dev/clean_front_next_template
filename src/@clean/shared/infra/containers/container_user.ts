import "reflect-metadata";
import { Container } from "inversify";
import { UserRepositoryMock } from "../repositories/user_repository_mock";
import { CreateUserUsecase } from "@/@clean/modules/user/usecases/create_user_usecase";
import { GetUsersUsecase } from "@/@clean/modules/user/usecases/get_users_usecase";
import { UpdateUserUsecase } from "@/@clean/modules/user/usecases/update_user_usecase";
import { DeleteUserUsecase } from "@/@clean/modules/user/usecases/delete_user_usecase";

export const Registry = {
    // Repositories
    UserRepositoryMock: Symbol.for("UserRepositoryMock"),

    // Usecases
    CreateUserUsecase: Symbol.for("CreateUserUsecase"),
    GetUsersUsecase: Symbol.for("GetUsersUsecase"),
    UpdateUserUsecase: Symbol.for("UpdateUserUsecase"),
    DeleteUserUsecase: Symbol.for("DeleteUserUsecase"),
};

export const container = new Container();

// Repositories
container.bind(Registry.UserRepositoryMock).to(UserRepositoryMock);

// Usecases
container.bind(Registry.CreateUserUsecase).toDynamicValue((context) => {
    return new CreateUserUsecase(context.container.get(Registry.UserRepositoryMock));
});

container.bind(Registry.GetUsersUsecase).toDynamicValue((context) => {
    return new GetUsersUsecase(context.container.get(Registry.UserRepositoryMock));
});

container.bind(Registry.UpdateUserUsecase).toDynamicValue((context) => {
    return new UpdateUserUsecase(context.container.get(Registry.UserRepositoryMock));
});

container.bind(Registry.DeleteUserUsecase).toDynamicValue((context) => {
    return new DeleteUserUsecase(context.container.get(Registry.UserRepositoryMock));
});
