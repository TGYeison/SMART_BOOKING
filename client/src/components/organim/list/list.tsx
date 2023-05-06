import Button from "@/components/atomic/button/button";
import Card from "@/components/molecule/card/card";
import Control from "@/components/molecule/control/control";
import { Dispatch, SetStateAction } from "react";

const List = (props: { 
    items: any[], 
    type: number, 
    title?: string, 
    labelBtn?:string, 
    callback?: () => void | Dispatch<SetStateAction<boolean>>;
}) => {

    return (
        <div className="list">
            <div className="list__head">
                <h6 className="list__title">
                    { props.title }
                </h6>
                {props.labelBtn
                    ?<div className="list__action">
                        <Button callback={props.callback} text={props.labelBtn} theme="dark"/>
                    </div>
                    : ''
                }
            </div>
            <ul className="list__content">
                {props.type === 1
                    ? props.items.map((item, index) => (
                        <li className="list_item" key={index}>
                            <Card {...item} callback={props.callback}></Card>
                        </li>
                    ))
                    : props.items.map((item, index) => (
                        <li className="list_item" key={index}>
                            <Control {...item} callback={props.callback}></Control>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default List;