import React, { useEffect, useState } from "react"

import { Col, Row, Card, Button } from 'react-bootstrap';
import ChatModal from "./ChatModal";

import Sidebar from "./Sidebar"

const Room = (props) => {
    const [activeChatId, setActiveChatId] = useState(0)
    const [showChatModal, setShowChatModal] = useState(false)
    const chatUsers = [
        // od negdje ces morati izvuci popis svih aktivnih korisnika na chatu, 
        //u pravilu ovo bi trebao biti API poziv gdje ti server vraca popis trenutno aktivnih korisnika sa njihovim pripadajucim podatcima
        {
            user: "Dodo213",
            id: 1
        },
        {
            user: "Barbara",
            id: 2
        },
        {
            user: "Rea",
            id: 3
        }
    ]

    useEffect(() => {
        if (activeChatId === 0) return setShowChatModal(false)
        setShowChatModal(true)
    }, [activeChatId])



    const ChatContainer = () => {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Casual room</Card.Title>
                    <Card.Text>
                        Placeholder komponenta od tvojeg chata
                    </Card.Text>
                    <Button variant="primary">Send message</Button>
                </Card.Body>
            </Card>
        )
    }

    return (
        <>
            <Row className="m-0">
                <Col className="col-3">
                    <Sidebar chatUsers={chatUsers} setActiveChatId={setActiveChatId} />
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                    <ChatContainer />
                </Col>
            </Row>
            <ChatModal show={showChatModal} setActiveChatId={setActiveChatId} chatUsers={chatUsers} activeChatId={activeChatId} />
        </>
    )
}

export default Room