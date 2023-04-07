import { UpdateUserUsecase } from "@/@clean/modules/user/usecases/update_user_usecase";
import { User } from "@/@clean/shared/domain/entities/user";
import { UserRepositoryMock } from "@/@clean/shared/infra/repositories/user_repository_mock";
import axios, { AxiosInstance } from "axios";

test('Test update user usecase', () => {
    const repo = new UserRepositoryMock();
    const usecase = new UpdateUserUsecase(repo);

    const userUpdated = usecase.execute(1, 'Rodrigo');

    expect(userUpdated).toBeInstanceOf(Promise<User>);
});