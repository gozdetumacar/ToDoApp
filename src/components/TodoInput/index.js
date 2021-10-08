import React, { useState } from 'react';
import Modal from 'react-modal';

function TodoInput() {

    var date = new Date();

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div>
            <h4>Merhaba, bugün {date.toLocaleDateString()}</h4>
            <button onClick={() => setModalIsOpen(true)}>ekle</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
            >
                <h2>Bu bir modal</h2>
                <button onClick={() => setModalIsOpen(false)}>Kapat</button>
            </Modal>
        </div>
    )
}

export default TodoInput;
