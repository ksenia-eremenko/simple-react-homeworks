import React from 'react'
import style from './AlternativeMessage.module.scss'

type AlternativeMessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    date: string,
    time: string
}

function AlternativeMessage(props: AlternativeMessagePropsType) {
    return (
        <div className={style.alternative_message}>
            <div className={style.avatar}>
                <img src={props.avatar} alt="" />
            </div>
            <div className={style.right}>
                <div className={style.name}>{props.name}</div>
                <div className={style.message}>{props.message}</div>
                <div className={style.date}>{props.date} {props.time}</div>
            </div>
        </div>
    )
}

export default AlternativeMessage
