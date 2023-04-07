'use client';
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { User } from "@/@clean/shared/domain/entities/user";
import { container, Registry } from "@/@clean/shared/infra/containers/container_user";
import { GetUserUsecase } from "@/@clean/modules/user/usecases/get_user_usecase";
import { CreateUserUsecase } from "@/@clean/modules/user/usecases/create_user_usecase";
import { UpdateUserUsecase } from "@/@clean/modules/user/usecases/update_user_usecase";
import { DeleteUserUsecase } from "@/@clean/modules/user/usecases/delete_user_usecase";

export type UserContextType = {
    users: User[];
    createUser: (user: User) => void;
    getUser: (userId: number) => void;
    updateUser: (userId: number, newName: string) => void;
    deleteUser: (userId: number) => void;
}

const defaultContext: UserContextType = {
    users: [],
    createUser: (user: User) => {},
    getUser: (userId: number) => {},
    updateUser: (userId: number, newName: string) => {},
    deleteUser: (userId: number) => {}
}

export const UserContext = createContext(defaultContext);

const getUserUsecase = container.get<GetUserUsecase>(Registry.GetUserUsecase)
const createUserUseCase = container.get<CreateUserUsecase>(Registry.CreateUserUsecase)
const updateUserUseCase = container.get<UpdateUserUsecase>(Registry.UpdateUserUsecase)
const deleteUserUseCase = container.get<DeleteUserUsecase>(Registry.DeleteUserUsecase)

export function UserProvider({ children }: PropsWithChildren) {
    const [users, setUsers] = useState<User[]>([]);

    async function createUser(user: User) {
        const userCreated = await createUserUseCase.execute(user);
        setUsers([...users, userCreated]);
    };

    async function getUser(userId: number) {
        const user = await getUserUsecase.execute(userId);
        setUsers([...users, user]);
    };

    async function updateUser(userId: number, newName: string) {        
        await updateUserUseCase.execute(userId, newName);
        const userUpdated = await getUserUsecase.execute(userId);
        const userFiltered = users.filter(user => user.id !== userId);
        setUsers([...userFiltered, userUpdated]);

    };

    async function deleteUser(userId: number) {
        await deleteUserUseCase.execute(userId)
        setUsers(users.filter(user => user.id !== userId));

    };

    return (
        <UserContext.Provider value={{ users, createUser, getUser, updateUser, deleteUser }}>
            { children }
        </UserContext.Provider>
    )
}

