import { CreateUserUsecase } from "@/@clean/modules/user/usecases/create_user_usecase";
import { User } from "@/@clean/shared/domain/entities/user";
import { STATE } from "@/@clean/shared/domain/enums/state_enum";
import { UserHttpRepository } from "@/@clean/shared/infra/repositories/user_repository_http";
import { UserRepositoryMock } from "@/@clean/shared/infra/repositories/user_repository_mock";
import axios, { AxiosInstance } from "axios";

test('Test create user usecase', () => {
    const http = {} as AxiosInstance;
    const repo = new UserHttpRepository(http);
    const usecase = new CreateUserUsecase(repo);

    const user = new User({
        id: 4,
        name: 'Teste',
        email: 'rodrigo.dsiqueira1@gmailcom',
        state: STATE.PENDING
    });

    const userCreated = usecase.execute(user);

    expect(userCreated).toBeInstanceOf(Promise<User>);
})