'use client';
import { CreateUserUsecase } from '@/@clean/modules/user/usecases/create_user_usecase';
import { User } from '@/@clean/shared/domain/entities/user';
import { STATE } from '@/@clean/shared/domain/enums/state_enum';
import { UserRepositoryMock } from '@/@clean/shared/infra/repositories/user_repository_mock';
import React, { useContext } from 'react';
import { uuid } from 'uuidv4';
import styles from './create_user.module.css';
import { UserContext } from '@/contexts/user_provider';

export default function CreateUserPage() {
    const { createUser } = useContext(UserContext)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get('name');
        const email = formData.get('email');
        const state = formData.get('state');

        const userCreated = new User({
            id: uuid(),
            name: name as string,
            email: email as string,
            state: state as STATE,
        });

        createUser(userCreated);
        console.log('User created: ', userCreated);

        const span_message: HTMLSpanElement = document.querySelector('span') as HTMLSpanElement;
        span_message.style.display = 'block';

        setTimeout(() => {
            span_message.style.display = 'none';
        }, 3000) 
        
    }

    return (
        <div>
            <h1>Create User</h1>
            <form onSubmit={handleSubmit} className={ styles.form }>
                <label htmlFor="name" className={ styles.name__label } >Name</label>
                <input type="text" name="name" id="name" className={ styles.name__input } />
                <label htmlFor="email" className={ styles.email__label } >Email</label>
                <input type="email" name="email" id="email" className={ styles.email__input } />
                <label htmlFor="state" className={ styles.state__label } >State</label>
                <select name="state" id="state" className={ styles.state__select}>
                    <option value="APPROVED">APPROVED</option>
                    <option value="PENDING">PENDING</option>
                    <option value="REJECTED">REJECTED</option>
                </select>
                <button type="submit" className={ styles.button__submit } >Create</button>
            </form>
            <span style={{ display: 'none', color: 'green' }}>User created!!</span>
        </div>
    )
}