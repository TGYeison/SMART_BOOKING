export const InputField = (props:any) => (
    <input
        {...props}
        className="input_field__cntrl"
    />
);

export const Select = (props:{ items: any[], name?:string}) => (
    <select className="cntrl__select" name={props.name}>
        {props.items.map((item:any, index:number) => (
            <option 
                value={item.value} 
                key={index}
            >
                {item.label}
            </option>
        ))}
    </select>
);

export const Checkbox = (props:any ) => (
    <input
        {...props}
        type="checkbox"
        className="input_chckbx__cntrl"
    />
)

export const Label = ({children}:{children: string}) => (
    <label className="input_field__label">
        {children}
    </label>
)

export const CntrlForm = ({children}:{children: JSX.Element | JSX.Element[]}) => (
    <div className="cntrl__form">
        {children}
    </div>
);

export const CntrlFormMiddle = ({children}:{children: JSX.Element | JSX.Element[]}) => (
    <div className="cntrl__form-middle">
        {children}
    </div>
);

