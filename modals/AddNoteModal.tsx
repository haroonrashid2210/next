import React, {useEffect, useState} from "react";
import {Input, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import { postRequest } from "../api";
import ENDPOINTS from "../api/endpoints";
import Button from "../globals/components/button/Button";

interface Props {
    itemId: string,
    visible: boolean,
    toggleModal: () => void,
    setData: (data: object) => void
}

const AddNoteModal: React.FC<Props> = ({itemId, visible, toggleModal, setData}) => {

    const [content, setContent] = useState('');

    useEffect(() => {
        setContent('');
    }, [])

    function addNote() {
        async function apiCall() {
            try {
                const URL = ENDPOINTS.calls.createCallNote.replace(':id', itemId);
                const body = {content}
                const data = await postRequest(URL, body)
                if (data) {
                    setData(data)
                    toggleModal()
                }
            } catch (e) {
                console.log(e)
            }
        }
        apiCall()
    }

    return (
        <Modal isOpen={visible} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>
                Add note
            </ModalHeader>
            <ModalBody>
                <Input type="textarea" value={content} onChange={(e) => setContent(e.target.value)}/>
            </ModalBody>
            <ModalFooter>
                <Button
                    size="sm"
                    onClick={addNote}
                    title='Add'
                />
                {' '}
                <Button onClick={toggleModal} size="sm" title="Cancel"/>
            </ModalFooter>
        </Modal>
    )
}

export default AddNoteModal;