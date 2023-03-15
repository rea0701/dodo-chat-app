import React, { useState, useEffect } from "react"

import { Modal, Button } from "react-bootstrap"

const ChatModal = ({ show, handleClose, setActiveChatId, chatUsers, activeChatId }) => {
    // tu bi sada bilo dobro unutar useEffecta koji ima prop show kao dependancy da se zove server i pitaju svi podatci o korisniku
    // sa tim i tim ID-em, u ovom slucaju bi to bio activeChatId jer nam je to ID od korisnika sa kojim pricamo.
    // tu bi ti server vratio sve podatke o tom korisniku ukljucujuci i chat history koji bi ti mogao prikazati
    // umjesto tog API poziva, ja cu ovdje kao simulaciju napraviti iteraciju po arrayu objekata i pronaci tog usera pod tim ID-em
    const [chatInfo, setChatInfo] = useState({})
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        if (!show) return;
        setLoading(true)
        fetchDataFromServer()
    }, [show])

    const handleResponse = (data) => {
        if (!data) {
            // bilo bi dobro prikazati nekakav alert message
            setLoading(false)
            return;
        }
        // tebi ce ovdje biti setChatInfo(data)
        setChatInfo(chatUsers.find(user => user.id === activeChatId))
        setLoading(false)
    }

    const fetchDataFromServer = () => {
        // tu pitas Firebase da ti vrati podatke od korisnika sa ID-em activeChatId
        // ovo ispod je samo simulacija, ti ces pisati cijeli API call

        // if response success
        // ovu ispod response varijablu ti vraca server, ja cu staviti da je neka dummy vrijednost
        let responseData = true
        handleResponse(responseData)

    }

    return (
        <Modal show={show} onHide={() => setActiveChatId(0)} centered>
            {loading ? <p>Loading... Please wait</p> : <>
                <Modal.Header closeButton>
                    <Modal.Title>You are now chatting with {chatInfo.user}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Ovdje ide chat history sa osobom {chatInfo.user}</Modal.Body>
            </>}
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Send message
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ChatModal;