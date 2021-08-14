import React, { useState } from 'react'
import CardBoard from './CardBoard/CardBoard'

export default function Layout() {

    const [showText, setShowText] = useState(false)

    return <div className="d-flex flex-wrap justify-content-center align-items-center h-100 pl-5 pr-5t" style={{overflowY: 'scroll'}}>
        <CardBoard />
    </div>
}

const styles = {
    bg: {
        backgroundColor: 'springgreen',
        width: '100%',
        height: '100%',
    },
    showText: {
        color: 'black',
        backgroundColor: '',
        borderRadius: '10px',
        opacity: '.8',
    },
    blurText: {
        color: 'gray',
        backgroundColor: 'gray',
        borderRadius: '10px',
        opacity: '.8',
    }
}