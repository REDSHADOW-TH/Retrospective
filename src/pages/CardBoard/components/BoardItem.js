import React, { useState, useRef } from 'react'
import '../style.css'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RetroCard from './RetroCard'
import { Card, Modal, Button } from 'react-bootstrap'


export default function BoardItem(props) {
    const [showAddModal, setShowAddModal] = useState(false)
    
    const addModalShow = () => setShowAddModal(true)
    const addModalClose = () => setShowAddModal(false)

    const [cards, setCards] = useState(props.children)

    const cardTextAdd = useRef(null)

    const cardColorAdd = useRef(null)

    function addCard() {
        if (cardTextAdd.current.value && cardTextAdd.current.value !== '') {
            console.log(cardTextAdd.current.value)
            setCards([...cards, <RetroCard text={cardTextAdd.current.value} color={cardColorAdd.current.value} />])
        }
        addModalClose()
    }

    return <>
        <Card className="card board-item">
            <Card.Header className="card-header text-center" style={{ ...styles, backgroundColor: props.color ?? styles.backgroundColor }}>
                <b>{props.title}</b><FontAwesomeIcon className="add-icon"  icon={faPlusCircle} onClick={addModalShow} />
            </Card.Header>
            <Card.Body className="card-body">
                {cards}
            </Card.Body>
        </Card>

        <Modal show={showAddModal} on={addModalClose}>
            <Modal.Header>
                <Modal.Title>เพิ่ม Retrospective Card</Modal.Title><span class="add-icon"><input type="color" ref={cardColorAdd} /></span>
            </Modal.Header>
            <Modal.Body>
                <textarea class="form-control" placeholder="ใส่ข้อความที่ต้องการ....." ref={cardTextAdd} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={addModalClose}>ยกเลิก</Button>
                <Button variant="success" onClick={addCard}>เพิ่ม</Button>
            </Modal.Footer>
        </Modal>
    </>
}

let styles = {
    backgroundColor: 'gray',
    color: 'white',
}