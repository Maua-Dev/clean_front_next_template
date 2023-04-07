'use client';
import { UserContext } from '@/contexts/user_provider'
import React, { useContext, useEffect, useState } from 'react'
import styles  from './users.module.css';

export default function UsersPage() {
    const [idSearch, setIdSearch] = useState<number>(0)
    const { users, getUser } = useContext(UserContext)

    function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        setIdSearch(Number(e.target.value));
    }

    function handleOnClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        const userGot = getUser(idSearch);
        console.log(typeof idSearch);
        
        // console.log(userGot);
    }
    useEffect(() => {
        console.log(typeof(idSearch));
    }, [idSearch])

    return (
        <div className={ styles.page__container }>
            <form className={ styles.form__container }>
                <input value={idSearch} type="text" onChange={handleOnChange} placeholder="Search user" />
                <button type="submit" onClick={handleOnClick}>Search</button>
            </form>
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