'use client';
import { UserContext } from '@/contexts/user_provider';
import React, { useContext, useEffect } from 'react';
import styles from '../users/users.module.css';
import styles_delete_user from './delete_user.module.css';

export default function DeleteUser() {
    const { users, deleteUser } = useContext(UserContext)

    function handleDeleteUser(id: number) {
        deleteUser(id);

        console.log('User deleted: ', id);
    }

    return (
        <div>
            <h1>Delete User</h1>

            <div className={ styles.page__container }>
            { users.map((user) => {
                return (
                    <div key={user.id} className={ styles.container__users }>
                        <p className={ styles.name__user } >{`User: ${user.name}`}</p>
                        <p className={ styles.email__user } >{`User: ${user.email}`}</p>
                        <p className={ styles.state__user } >{`User: ${user.state}`}</p>
                        <button onClick={() => handleDeleteUser(user.id)}  className={ styles_delete_user.button__submit } >Delete user</button>
                    </div>
                )
            }) }
            </div>
        </div>
    )
}
