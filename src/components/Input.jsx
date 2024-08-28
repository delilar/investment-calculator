import { useState } from "react"

export default function Input({ label, name, dataForCalculating, startData }) {

    const [inputValue, setInputValue] = useState(startData)

    function handleChange(event) {
        const value = event.target.value
        setInputValue(value === '' ? null : Number(value))

        dataForCalculating(name, Number(value))
    }

    return (
        <p>
            <label>{ label }</label>
            <input type="number" value={inputValue === null ? '' : inputValue} onChange={ (event) => handleChange(event)}/>
        </p>
    )
}