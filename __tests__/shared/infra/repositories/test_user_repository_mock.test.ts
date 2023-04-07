import { User } from "@/@clean/shared/domain/entities/user";
import { STATE } from "@/@clean/shared/domain/enums/state_enum";
import { UserRepositoryMock } from "@/@clean/shared/infra/repositories/user_repository_mock";
import { randomUUID } from "crypto";

test('Test create user', () => {
    const repo = new UserRepositoryMock();
    const user = new User({
        id: randomUUID(),
        name: 'Teste',
        email: 'rodrigo.dsiqueira1@gmailcom',
        state: STATE.PENDING
    })
    const legthBefore = repo.getUsers().length;
    const userCreated = repo.createUser(user);
    expect(userCreated).toBe(user);
    expect(repo.getUsers().length).toBe(legthBefore + 1);
    
});
test('Test get users', () => {
    const repo = new UserRepositoryMock();

    // get one user
    const user1 = repo.getUsers()[0];

    expect(repo.getUsers().length).toBe(5);

    // assert user1 to be one User
    expect(user1).toBeInstanceOf(User);
});