import { useState } from "react"

export const AddCategory = (props) => {

    const [inputValue, setInputValue] = useState("");

    const onInputChanged = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if (newInputValue.length <= 1) return;
        props.onNewCategory(newInputValue);
        setInputValue("");
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChanged}
            />
        </form>
    )
}
