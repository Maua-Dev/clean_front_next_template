
import { User } from "@/@clean/shared/domain/entities/user";
import { STATE } from "@/@clean/shared/domain/enums/state_enum";
import { randomUUID } from "node:crypto";

test('Test User entity', () => {
    const user = new User({
        id: randomUUID(),
        name: 'Teste',
        email: 'rodrigo.dsiqueira1@gmailcom',
        state: STATE.PENDING
    })
    expect(user).toBeInstanceOf(User);
});
test('Test User entity with invalid length id', () => {
    expect(() => {
        new User({
            id: '123',
            name: 'Teste',
            email: 'rodrigo.dsiqueira1@gmailcom',
            state: STATE.PENDING
        })
    }).toThrowError('Entity error props.id')
});
test('Test User entity name', () => {
    const user = new User({
        id: randomUUID(),
        name: 'Teste',
        email: 'rodrigo.dsiqueira1@gmailcom',
        state: STATE.PENDING
    })
    expect(user.name).toBe('Teste');
});
test('Test User entity email', () => {
    const user = new User({
        id: randomUUID(),
        name: 'Teste',
        email: 'rodrigo.dsiqueira1@gmailcom',
        state: STATE.PENDING
    })
    expect(user.email).toBe('rodrigo.dsiqueira1@gmailcom');
});
test('Test User entity error email', () => {
    expect(() => {
        new User({
            id: randomUUID(),
            name: 'Teste',
            email: 'rodrigo.dsiqueira1gmailcom',
            state: STATE.PENDING
        })
    }).toThrowError('Entity error props.email')
});