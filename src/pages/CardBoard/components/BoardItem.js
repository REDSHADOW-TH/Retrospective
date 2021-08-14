import React from 'react'
import '../style.css'
import addIcon from '../assets/add.png'

export default function BoardItem(props) {
    return <>
        <div className="card board-item">
            <div className="card-header text-center" style={{ ...styles, backgroundColor: props.color ?? styles.backgroundColor }}>
                <b>{props.title}</b><img src={addIcon} alt="add card" className="add-icon" />
            </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    </>
}

let styles = {
    backgroundColor: 'gray',
    color: 'white',
}