import 'reflect-metadata';
import { IUserRepository } from "@/@clean/modules/user/domain/repositories/user_repository_interface";
import { User } from "../../domain/entities/user";
import axios, { AxiosInstance } from "axios";
import { decorate, injectable } from "inversify";

export class UserHttpRepository implements IUserRepository {

    async createUser(user: User): Promise<User> {
        return axios.post<User>(`/mss-template/create-user`, user).then((res) => {
            return new User({
                id: res.data.id,
                name: res.data.name,
                email: res.data.email,
                state: res.data.state
            });
        });
    }

    async getUser(userId: number): Promise<User> {
        return axios.get<User>(`https://3q0ikd6zx3.execute-api.us-east-2.amazonaws.com/prod/mss-template/get-user?user_id=${userId}`).then((res) => {
            return new User({
                id: res.data.id,
                name: res.data.name,
                email: res.data.email,
                state: res.data.state
            });
        });
    }

    async updateUser(userId: number, newName: string): Promise<User> {
        const response = await axios.post(`https://3q0ikd6zx3.execute-api.us-east-2.amazonaws.com/prod/mss-template/update-user?user_id=${userId}&new_name=${newName}`);
        return new User({
            id: response.data.id,
            name: response.data.name,
            email: response.data.email,
            state: response.data.state
        });
    }

    async deleteUser(userId: number): Promise<User> {
        const response = await axios.post(`https://3q0ikd6zx3.execute-api.us-east-2.amazonaws.com/prod/mss-template/delete-user?user_id=${userId}`);
        return new User({
            id: response.data.id,
            name: response.data.name,
            email: response.data.email,
            state: response.data.state
        });
    }
}

// inversão de dependência com inversify
decorate(injectable(), UserHttpRepository);