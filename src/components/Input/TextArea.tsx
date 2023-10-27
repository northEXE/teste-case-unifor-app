import "./style.css"

interface TextAreaProps {
    label: string,
    value: string | number,
    required?: boolean,
    updateValue(value: any): void
}

export function TextArea({ label, value, required, updateValue }: TextAreaProps){
    return(
        <>
            <label>{label}</label>
            <textarea value={value} onChange={e => updateValue(e.target.value)} required={required}></textarea>
        </>
    )
}