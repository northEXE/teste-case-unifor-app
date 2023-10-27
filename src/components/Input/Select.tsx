interface SelectProps{
    opt?: HTMLOptionElement[]
}

export function Select({ opt }: SelectProps){
    return(
        <select>
           {opt?.map(e => <option value={e.value}>{e.text}</option>)}
        </select>
    )
}