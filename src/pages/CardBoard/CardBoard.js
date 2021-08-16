import React, { useState } from 'react'
import BoardItem from './components/BoardItem'
import './style.css'

function mockCards() {
    const cards = []
    // for (let i = 1; i <= 3; i++) {
    //     cards.push(<RetroCard text={i} />)
    // }
    return cards
}

export default function Home(props, { children }) {
    const [cards, setCards] = useState([])

    function addCard() {

    }

    return <>
        <BoardItem title="ความประทับใจ" children={mockCards()} />
        <BoardItem title="สิ่งที่ได้ทำเเละภูมิใจ" children={mockCards()} />
        <BoardItem title="สิ่งที่ควรเเก้เเละปรับปรุง" children={mockCards()} />
        <BoardItem title="สิ่งที่ควรเเก้เเละปรับปรุง" children={mockCards()} />
        <BoardItem title="สิ่งที่ควรเเก้เเละปรับปรุง" children={mockCards()} />
    </>
}