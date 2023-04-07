import { GetUserUsecase } from "@/@clean/modules/user/usecases/get_user_usecase";
import { User } from "@/@clean/shared/domain/entities/user";
import { UserRepositoryMock } from "@/@clean/shared/infra/repositories/user_repository_mock"
import axios, { AxiosInstance } from "axios";

test('Test get user usecase', () => {
    const repo = new UserRepositoryMock()
    const usecase = new GetUserUsecase(repo);

    const user = usecase.execute(1);

    expect(user).toBeInstanceOf(Promise<User>);
})