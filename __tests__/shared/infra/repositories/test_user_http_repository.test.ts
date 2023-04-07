import { User } from "@/@clean/shared/domain/entities/user";
import { STATE } from "@/@clean/shared/domain/enums/state_enum";
import { UserHttpRepository } from "@/@clean/shared/infra/repositories/user_repository_http";
import { UserRepositoryMock } from "@/@clean/shared/infra/repositories/user_repository_mock";
import axios, { AxiosInstance } from "axios"

test('Test create user', () => {
    const repo = new UserHttpRepository();
    const user = new User({
        id: 2,
        name: 'Teste',
        email: 'rodrigo.dsiqueira1@gmailcom',
        state: STATE.PENDING
    })
    const userCreated = repo.createUser(user);
    expect(userCreated).toBeInstanceOf(Promise<User>);
    
});
test('Test get user', () => {
    const repo = new UserHttpRepository();

    // get one user
    const user1 = repo.getUser(3);
    // assert user1 to be one User
    expect(user1).toBeInstanceOf(Promise<User>);
});
test('Test update user', () => {
    const repo = new UserHttpRepository();

    const userUpdated = repo.updateUser(1, 'Rodrigo');
    expect(userUpdated).toBeInstanceOf(Promise<User>);

});
test('Test delete user', () => {
    const repo = new UserHttpRepository();

    const userDeleted = repo.deleteUser(2);
    expect(userDeleted).toBeInstanceOf(Promise<User>);
});