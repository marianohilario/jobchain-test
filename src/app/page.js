"use client";

import { useState } from "react";

export default function Home() {
    const [focus, setFocus] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState(false);

    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const handleOnChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        if (newValue.length === 0) {
            setError(false);
        } else {
            if (regexEmail.test(newValue)) {
                setError(false);
            } else {
                setError(true);
            }
        }
    };

    const handleOnBlur = (e) => {
        setFocus(false);
    };

    const handleOnFocus = (e) => {
        setFocus(true);
    };

    return (
        <>
            <div className="wrapper">
                <input
                    value={inputValue}
                    type="email"
                    className={`input ${error ? "error" : ""}`}
                    placeholder="Escribe tu correo electrónico"
                    onChange={handleOnChange}
                    onBlur={handleOnBlur}
                    onFocus={handleOnFocus}
                />
                <label className="label">
                    {error
                        ? "Correo electrónico incorrecto"
                        : "Correo electrónico"}
                </label>
                {focus ? (
                    <img src="/Cerrar (v2).png" className="closeBtn" />
                ) : (
                    ""
                )}
            </div>
        </>
    );
}
