import { UserContext } from '@/contexts/user_provider'
import React, { useContext } from 'react'

export default function UsersPage() {
    const { users, createUser, deleteUser, getUsers, updateUser } = useContext(UserContext)

    return (
        <>
            { users.map((user) => {
                return (
                    <div key={user.id}>
                        <p>{user.name}</p>
                        <button onClick={() => deleteUser(user.id)}>Deletar</button>
                    </div>
                )
            }) }
        </>
    )
}