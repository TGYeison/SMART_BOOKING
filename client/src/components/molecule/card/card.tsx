import Button from "@/components/atomic/button/button"
import { Dispatch, SetStateAction } from "react";

interface CardProps {
    title?: string;
    type_room?: string;
    max_people?: number;
    hotel?: string;
    price?: number;
    callback: () => void | Dispatch<SetStateAction<boolean | string>>;
}

const Card = (props: CardProps) => (
    <div className="card">
        <div className="card__image">

        </div>
        <div className="card__content">
            <div className="card__info">
                <h4 className="card__title">{props.title} Habitacion</h4>
                <p className="card__description">
                    Tipo de habitacion: {props.type_room} <br />
                    Max. de personas: {props.max_people} <br />
                    Hotel: {props.hotel} <br />
                </p>
                <span className="card__price">
                    <strong>{props.price} $100.000</strong>
                </span>
            </div>
            <div className="card__action">
                <Button
                    callback={props.callback}
                    text="Reservar"
                    theme="light"
                />
            </div>
        </div>
    </div>
);


export default Card;