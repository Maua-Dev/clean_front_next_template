import { GetUserUsecase } from "@/@clean/modules/user/usecases/get_user_usecase";
import { User } from "@/@clean/shared/domain/entities/user";
import { UserHttpRepository } from "@/@clean/shared/infra/repositories/user_repository_http";
import { AxiosInstance } from "axios";

test('Assert user is being getted', async () => {
    const repo = new UserHttpRepository();
    const usecase = new GetUserUsecase(repo);

    const user = await usecase.execute(3);

    expect(user).toBeInstanceOf(Promise<User>);
});