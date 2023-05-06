import Button from "@/components/atomic/button/button"

interface PropsCntrl {
    name: string;
    location: string;
    callback?: () => void; 
}

const Control = (props: PropsCntrl) => (
    <div className="cntrl">
        <ul className="cntrl__info">
            <li className="cntrl__item">
                {props.name}
            </li>
            <li className="cntrl__item">
                {props.location}
            </li>
        </ul>
        <div className="cntrl__actions">
            <Button text="Editar" callback={props.callback} theme="dark"/>
            <Button text="Eliminar" callback={props.callback} theme="light"/>
        </div>
    </div>
)

export default Control;