import React from 'react'
import { AffairType } from './HW2'
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (id: number) => {
        props.deleteAffairCallback(id);
        console.log(id);
    }// need to fix

    return (
        <div className={s.item}>
            <span>show some text</span>
            <button className={s.item_btn} onClick={() => deleteCallback(props.affair._id)}>X</button>
        </div>
    )
}

export default Affair
