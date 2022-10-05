import {ChangeEvent, useState} from "react";

export interface InputProps {
    heading: string;
    placeholder?: string;
}

export const Input = (
    {
        heading = "",
        placeholder = "",
    }: InputProps) => {
    const [value, setValue] = useState("");

    const editValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }

    return (
        <div>
            <div>{heading}</div>
            <input value={value} placeholder={placeholder} onChange={editValue}/>
        </div>
    )
}
