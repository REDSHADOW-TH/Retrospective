import React, { useState, useRef, useEffect } from 'react'
import '../style.css'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RetroCard from './RetroCard'
import { Card, Modal, Button } from 'react-bootstrap'
import { firestore } from '../../../firebase'


export default function BoardItem(props) {

    const [cards, setCards] = useState([])
    const [showAddModal, setShowAddModal] = useState(false)

    const addModalShow = () => setShowAddModal(true)
    const addModalClose = () => setShowAddModal(false)

    const cardTextAdd = useRef(null)
    const cardColorAdd = useRef(null)

    useEffect(() => {
        fetchCards()
    }, [])


    function fetchCards() {
        firestore.collection('boardItems')
            .where('boardItemId', '==', props.id)
            .orderBy('id', 'asc')
            .onSnapshot((item) => {
                const newCards = []
                item.forEach((item) => {
                    const i = item.data()
                    newCards.push(<RetroCard text={i.text} color={i.color} />)
                })
                setCards(newCards)

            })
    }

    function addCard() {
        if (cardTextAdd.current.value && cardTextAdd.current.value !== '') {
            firestore.collection('boardItems').add({
                boardItemId: props.id,
                id: parseInt((cards.length ?? 0) + 1),
                text: cardTextAdd.current.value,
                color: cardColorAdd.current.value
            })
        }
        addModalClose()
    }

    return <>
        <Card className="board-item">
            <Card.Header className="text-center" style={{ ...styles, backgroundColor: props.color ?? styles.backgroundColor }}>
                <b>{props.title}</b><FontAwesomeIcon className="add-icon" icon={faPlusCircle} onClick={addModalShow} />
            </Card.Header>
            <Card.Body>
                {cards}
            </Card.Body>
        </Card>

        <Modal show={showAddModal} on={addModalClose}>
            <Modal.Header>
                <Modal.Title>เพิ่ม Retrospective Card</Modal.Title><span className="add-icon"><input type="color" ref={cardColorAdd} /></span>
            </Modal.Header>
            <Modal.Body>
                <textarea className="form-control" placeholder="ใส่ข้อความที่ต้องการ....." ref={cardTextAdd} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={addModalClose}>ยกเลิก</Button>
                <Button variant="success" onClick={addCard}>เพิ่ม</Button>
            </Modal.Footer>
        </Modal>
    </>
}

let styles = {
    backgroundColor: '#2c3e50',
    color: 'white',
}