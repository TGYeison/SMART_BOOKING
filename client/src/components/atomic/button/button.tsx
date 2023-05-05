interface BtnProps {
    text: string;
    theme: string;
    callback?: () => void;
}

const Button = (props: BtnProps) => {
    const themes: { [key: string]: string } = {
        light: 'btn__light',
        dark: 'btn__dark'
    }

    return (
        <button
            onClick={props.callback}
            className={`btn ${themes[props.theme]}`}
        >
            {props.text}
        </button>
    );
}

export default Button;