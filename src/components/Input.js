import { useEffect, useRef } from "react"
import Label from "components/Label"

const Input = ({ type = "text", name, value="", className = "", autoComplete = "", required, isFocused, handleChange, label = "" }) => {
    const input = useRef()

    useEffect(() => {
        if (isFocused) {
            input.current.focus()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <Label htmlFor={name}>{label}</Label>
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                className={`w-full form-input mt-1 ` + className}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
            />
        </div>
    )
}

export default Input
