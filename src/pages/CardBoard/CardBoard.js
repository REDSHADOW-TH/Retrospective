import React from 'react'
import BoardItem from './components/BoardItem'
import Card from './components/Card'
import './style.css'

function mockCards() {
    const cards = []
    for (let i = 1; i <= 10; i++) {
        cards.push(<Card name={i} />)
    }
    return cards
}

export default function Home(props, { children }) {

    return <>
        <BoardItem title="ความประทับใจ" color="springgreen" children={mockCards()} />
        <BoardItem title="สิ่งที่ได้ทำเเละภูมิใจ" color="tomato" children={mockCards()} />
        <BoardItem title="สิ่งที่ควรเเก้เเละปรับปรุง" color="blueviolet" children={mockCards()} />
        <BoardItem title="ความประทับใจ" color="midnightblue" children={mockCards()} />
        <BoardItem title="สิ่งที่ได้ทำเเละภูมิใจ" color="tomato" children={mockCards()} />
        <BoardItem title="สิ่งที่ควรเเก้เเละปรับปรุง" color="blueviolet" children={mockCards()} />
        <BoardItem title="ความประทับใจ" color="springgreen" children={mockCards()} />
        <BoardItem title="สิ่งที่ได้ทำเเละภูมิใจ" color="tomato" children={mockCards()} />
        <BoardItem title="สิ่งที่ควรเเก้เเละปรับปรุง" color="blueviolet" children={mockCards()} />
        <BoardItem title="สิ่งที่ควรเเก้เเละปรับปรุง" color="blueviolet" children={mockCards()} />
    </>
}