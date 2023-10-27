import "./style.css"

interface InputProps {
    label: string,
    value: string | number,
    required?: boolean,
    updateValue(value: any): void
}

export function Input({ label, value, required, updateValue }: InputProps){
    return(
        <>
            <label>{label}</label>
            <input value={value} onChange={e => updateValue(e.target.value)} required={required}></input>
        </>
    )
}