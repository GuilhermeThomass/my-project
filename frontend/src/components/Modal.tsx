import { PropsWithChildren } from 'react';
import { X } from "react-feather"

type ModalProps = PropsWithChildren<{
    isOpenModal: boolean;
    onClose: ()=> void;
}>
export default function Modal( {children,isOpenModal , onClose}: ModalProps ) {
    return(
        <div
            onClick={onClose}
            className={`
                fixed inset-0 flex justify-center items-center transition-colors
                ${isOpenModal ? "visible bg-black/20 backdrop-blur-md" : "invisible"}`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`
                rounded-xl border-[1px] border-white p-6 transition-all bg-zinc-900
                ${isOpenModal ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 hover:text-red-600 hover:scale-125 transition ease-in-out"
                >
                    <X />
                </button>
                {children}
            </div>
        </div>
    )
}
