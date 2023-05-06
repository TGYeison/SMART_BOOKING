import { Dispatch, SetStateAction } from "react";

interface BtnProps {
    text: string;
    theme: string;
    type?: "button" | "submit" | "reset";
    callback?: () => void;
}

const Button = (props: BtnProps) => {
    const themes: { [key: string]: string } = {
        light: 'btn__light',
        dark: 'btn__dark'
    }

    return (
        <button
            type={props.type}
            onClick={props.callback}
            className={`btn ${themes[props.theme]}`}
        >
            {props.text}
        </button>
    );
}

export default Button;