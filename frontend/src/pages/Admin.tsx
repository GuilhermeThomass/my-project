import Modal from "../components/Modal";
import Form  from '../components//Form';
import { Button } from "../components/Button";
import StoragePanel from "../components/StoragePanel";
import { useState } from "react";
import PlaceHolder from "../components/PlaceHolder";

export default function Admin() {
    const [showModal,setShowModal] = useState(false);
    return(
        <div className="px-4 py-2 flex flex-row h-screen w-screen gap-3">
            <div className="flex w-[600px] flex-col gap-2">
                <div className="flex h-full bg-zinc-900 rounded-xl justify-center items-center">
                    <PlaceHolder/>
                </div>
                <div className="flex bg-zinc-900 rounded-xl p-6 justify-between items-center">
                    <h1>Menu</h1>
                    <div className="flex gap-2">
                        <Button
                            size="sm"
                            variant="secondary"
                        >Generate PDF</Button>
                        <Button onClick={()=>setShowModal(true)} size="sm" variant="tertiary">Open Modal </Button>
                        <Modal isOpenModal={showModal} onClose={()=>setShowModal(false)}>
                            <Form/>
                        </Modal>
                    </div>
                </div>
                <div className="">
                    <StoragePanel/>
                </div>
            </div>
            <div className="flex bg-zinc-900 rounded-xl w-[75%] justify-center items-center">
                <PlaceHolder/>
            </div>
        </div>

    )
}
