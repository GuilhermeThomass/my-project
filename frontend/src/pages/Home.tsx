import Modal from "../components/Modal";
import { Button } from "../components/Button";
import { useState } from "react";

export default function Home() {
    const [showModal,setShowModal] = useState(false);
    return(
        <div>
            <Button onClick={()=>setShowModal(true)} size="md" variant="tertiary">Open Modal </Button>
            <Modal isOpenModal={showModal} onClose={()=>setShowModal(false)}/>
        </div>
    )
}
