import React from 'react'
import styles from './Message.module.scss'

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}
console.log(styles);


function Message(props: MessagePropsType) {

    return (
        <div className={styles.message}>
            <div className={styles.avatar}>
                <img src={props.avatar} alt="" />
            </div>
            <div className={styles.info}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.info_bottom}>
                    <div className={styles.messege_text}>{props.message}</div>
                    <div className={styles.time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
