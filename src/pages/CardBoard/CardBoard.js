import React, { useState } from 'react'
import BoardItem from './components/BoardItem'
import './style.css'

export default function Home(props, { children }) {
    return <>
        <BoardItem id="1" title="ความประทับใจ" />
        <BoardItem id="2" title="สิ่งที่ได้ทำเเละภูมิใจ" />
        <BoardItem id="3" title="สิ่งที่ควรเเก้เเละปรับปรุง" />
        <BoardItem id="4" title="สิ่งที่ควรเเก้เเละปรับปรุง" />
        <BoardItem id="5" title="สิ่งที่ควรเเก้เเละปรับปรุง" />
        <BoardItem id="6" title="สิ่งที่ควรเเก้เเละปรับปรุง" />
        <BoardItem id="7" title="สิ่งที่ควรเเก้เเละปรับปรุง" />
        <BoardItem id="8" title="สิ่งที่ควรเเก้เเละปรับปรุง" />
        <BoardItem id="9" title="สิ่งที่ควรเเก้เเละปรับปรุง" />
        <BoardItem id="10" title="สิ่งที่ควรเเก้เเละปรับปรุง" />
    </>
}