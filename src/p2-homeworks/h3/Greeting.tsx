import React, { ChangeEvent, KeyboardEvent } from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    userName: string
    addUserOnClickEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    { name, setNameCallback, addUser, error, totalUsers, userName, addUserOnClickEnter } // деструктуризация пропсов
) => {
    const inputClass = (error && !name) ? s.error : '' // need to fix with (?:)

    return (
        <div className={s.greeting}>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyDown={addUserOnClickEnter} placeholder="Введите имя" />
            {(inputClass) ? <span className={s.textError}>{error}</span> : ''}
            <button onClick={addUser}>add</button>
            {(userName) && <div className={s.userName}>Привет, <span>{userName.trim()}!</span></div>}
            <span>Количество юзеров: {totalUsers}</span>
        </div>
    )
}

export default Greeting
