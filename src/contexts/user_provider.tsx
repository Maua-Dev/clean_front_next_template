'use client';
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { User } from "@/@clean/shared/domain/entities/user";
import { container, Registry } from "@/@clean/shared/infra/containers/container_user";
import { GetUsersUsecase } from "@/@clean/modules/user/usecases/get_users_usecase";
import { CreateUserUsecase } from "@/@clean/modules/user/usecases/create_user_usecase";
import { UpdateUserUsecase } from "@/@clean/modules/user/usecases/update_user_usecase";
import { DeleteUserUsecase } from "@/@clean/modules/user/usecases/delete_user_usecase";

export type UserContextType = {
    users: User[];
    createUser: (user: User) => void;
    getUsers: () => void;
    updateUser: (id: string, newName: string) => void;
    deleteUser: (id: string) => void;
}


const defaultContext: UserContextType = {
    users: [],
    createUser: (user: User) => {},
    getUsers: () => {},
    updateUser: (id: string, newName: string) => {},
    deleteUser: (id: string) => {}
}

export const UserContext = createContext(defaultContext);

const getUserUsecase = container.get<GetUsersUsecase>(Registry.GetUsersUsecase)
const createUserUseCase = container.get<CreateUserUsecase>(Registry.CreateUserUsecase)
const updateUserUseCase = container.get<UpdateUserUsecase>(Registry.UpdateUserUsecase)
const deleteUserUseCase = container.get<DeleteUserUsecase>(Registry.DeleteUserUsecase)

export function UserProvider({ children }: PropsWithChildren) {
    const [users, setUsers] = useState<User[]>([]);

    function createUser(user: User) {
        const userCreated = createUserUseCase.execute(user)
        setUsers([...users, userCreated])
    }

    function getUsers() {
        const allUsers = getUserUsecase.execute();
        setUsers([...allUsers])
    }

    function updateUser(userId: string, newName: string) {        
        updateUserUseCase.execute(userId, newName)
        getUsers()
    }

    function deleteUser(userId: string) {
        deleteUserUseCase.execute(userId)
        getUsers()
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <UserContext.Provider value={{ users, createUser, getUsers, updateUser, deleteUser }}>
            { children }
        </UserContext.Provider>
    )
}

