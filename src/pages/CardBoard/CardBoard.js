import React, { useState } from 'react'
import BoardItem from './components/BoardItem'
import './style.css'
import { firestore } from '../../firebase'

export default function Home(props, { children }) {
    return <>
        <BoardItem id="1" title="ความประทับใจ" />
        <BoardItem id="2" title="สิ่งที่ได้ทำเเละภูมิใจ" />
        <BoardItem id="3" title="สิ่งที่ควรเเก้เเละปรับปรุง" />
        <BoardItem id="4" title="สิ่งที่ควรเเก้เเละปรับปรุง" />
        <BoardItem id="5" title="สิ่งที่ควรเเก้เเละปรับปรุง" />
    </>
}