import React from 'react'
import Message from './Message'
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
    avatar: 'https://cf.ltkcdn.net/socialnetworking/images/std/168646-425x425r1-Cat-Avatar-Primary.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00'
}

const alternativeMessageData = {
    avatar: 'https://cf.ltkcdn.net/socialnetworking/images/std/168646-425x425r1-Cat-Avatar-Primary.jpg',
    name: 'Sylvester Stallone',
    message: 'Lorem ipsum dolor sit amet',
    date: '23.08.2022',
    time: '22:00'
}

function HW1() {
    return (
        <div>
            <hr />
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr />
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage
                avatar={alternativeMessageData.avatar}
                name={alternativeMessageData.name}
                message={alternativeMessageData.message}
                date={alternativeMessageData.date}
                time={alternativeMessageData.time}
            />
            <hr />
        </div>
    )
}

export default HW1
