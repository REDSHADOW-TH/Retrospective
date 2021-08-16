import React, { useState } from 'react'
import '../style.css'
import { Card } from 'react-bootstrap'
import { faUser, faThumbsUp, faComment } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function RetroCard(props) {

    const [like, setLike] = useState(0)

    const likeAction = () => {
        if (!isLike) setLike(like + 1)
        else setLike(like - 1)
        setIsLike(!like)
    }

    const [isLike, setIsLike] = useState(false)

    return <>
        <Card className="card-style" style={{ backgroundColor: props.color ?? 'gray' }}>
            <Card.Body>
                {props.text}<br></br>
                <div className="retro-card-footer">
                    <span className="retro-card-footer-action-icon"><span style={{ fontSize: '60%' }}>NilPhumiphat</span> <FontAwesomeIcon icon={faUser} /> </span>
                    <span className="retro-card-footer-action-icon">0 <FontAwesomeIcon className="cursor-pointer" icon={faComment} /></span>
                    <span className="retro-card-footer-action-icon" onClick={likeAction}>{like} <FontAwesomeIcon className="cursor-pointer" style={{ color: isLike ? 'blue' : 'white' }} icon={faThumbsUp} /></span>
                </div>
            </Card.Body>
        </Card>
    </>
}