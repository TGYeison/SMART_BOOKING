import { Dispatch, SetStateAction } from "react";
import { Childrens } from "@/models/childre";

interface ModalProps extends Childrens {
    title: string;
    close: Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({ children, title, close }: ModalProps) => (
    <div className="modal__bg">
        <div className="modal">
            <div className="modal__head">
                <h2 className="modal__title">
                    {title}
                </h2>
                <button
                    className="modal__close"
                    onClick={() => close(false)}
                >X</button>
            </div>
            <div className="modal__content">
                {children}
            </div>
        </div>
    </div>
);