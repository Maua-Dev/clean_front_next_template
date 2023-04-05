'use client';
import { UserContext } from '@/contexts/user_provider'
import React, { useContext } from 'react'
import styles  from './users.module.css';

export default function UsersPage() {
    const { users } = useContext(UserContext)

    return (
        <div className={ styles.page__container }>
            { users.map((user) => {
                return (
                    <div key={user.id} className={ styles.container__users }>
                        <p className={ styles.name__user } >{`User: ${user.name}`}</p>
                        <p className={ styles.email__user } >{`User: ${user.email}`}</p>
                        <p className={ styles.state__user } >{`User: ${user.state}`}</p>
                    </div>
                )
            }) }
        </div>
    )
}