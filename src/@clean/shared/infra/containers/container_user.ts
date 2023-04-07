import "reflect-metadata";
import { Container, injectable } from "inversify";
import { UserRepositoryMock } from "../repositories/user_repository_mock";
import { CreateUserUsecase } from "@/@clean/modules/user/usecases/create_user_usecase";
import { GetUserUsecase } from "@/@clean/modules/user/usecases/get_user_usecase";
import { UpdateUserUsecase } from "@/@clean/modules/user/usecases/update_user_usecase";
import { DeleteUserUsecase } from "@/@clean/modules/user/usecases/delete_user_usecase";
import { http } from "../../domain/helpers/external/http";
import { UserHttpRepository } from "../repositories/user_repository_http";

export const Registry = {
    //Axios Adapter
    AxiosAdapter: Symbol.for("AxiosAdapter"),


    // Repositories
    UserRepositoryMock: Symbol.for("UserRepositoryMock"),
    UserHttpRepository: Symbol.for("UserHttpRepository"),

    // Usecases
    CreateUserUsecase: Symbol.for("CreateUserUsecase"),
    GetUserUsecase: Symbol.for("GetUserUsecase"),
    UpdateUserUsecase: Symbol.for("UpdateUserUsecase"),
    DeleteUserUsecase: Symbol.for("DeleteUserUsecase"),
};

export const container = new Container();

//Axios Adapter
container.bind(Registry.AxiosAdapter).toConstantValue(http);

// Repositories
container.bind(Registry.UserRepositoryMock).to(UserRepositoryMock);
container.bind(Registry.UserHttpRepository).toDynamicValue((context) => {
    return new UserHttpRepository(context.container.get(Registry.AxiosAdapter));
});

// Usecases
container.bind(Registry.CreateUserUsecase).toDynamicValue((context) => {
    return new CreateUserUsecase(context.container.get(Registry.UserHttpRepository));
});

container.bind(Registry.GetUserUsecase).toDynamicValue((context) => {
    return new GetUserUsecase(context.container.get(Registry.UserHttpRepository));
});

container.bind(Registry.UpdateUserUsecase).toDynamicValue((context) => {
    return new UpdateUserUsecase(context.container.get(Registry.UserHttpRepository));
});

container.bind(Registry.DeleteUserUsecase).toDynamicValue((context) => {
    return new DeleteUserUsecase(context.container.get(Registry.UserHttpRepository));
});
