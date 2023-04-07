'use client';
import React, { useContext, useState } from 'react';

import styles from '../users/users.module.css';
import styles_update_user from './update_user.module.css';
import { UserContext } from '@/contexts/user_provider';

export default function UpdateUser() {
    const [inputValue, setInputValue] = useState<string>('');

    const { updateUser, users } = useContext(UserContext)

    function handleUpdateUser(id: string, newName: string) {
        updateUser(id, newName);

        console.log('User updated: ', id);
    }
    
    function handleOpenForm() {
        const form = document.querySelector('form') as HTMLElement;
        form.style.display = 'block';
    }


    return (
        <div>
            <h1>Update User</h1>

            <div className={ styles.page__container }>
            { users.map((user) => {
                return (
                    <>
                        <div key={user.id} className={ styles.container__users_update }>
                            <p className={ styles.name__user } >{`User: ${user.name}`}</p>
                            <p className={ styles.email__user } >{`User: ${user.email}`}</p>
                            <p className={ styles.state__user } >{`User: ${user.state}`}</p>
                            <span>falta implementação do update</span>
                        </div>
                    </>
                )
            }) }
            </div>
        </div>
    )
}