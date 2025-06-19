import { useState } from "react";

function  AddTaskForm ({onAdd}){
    const [text,setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!text.trim()) return;
        onAdd(text)
        setText('')
    }

 return(
    <form onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder="Agrega una nueva tarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        >
        </input>
        <button type="submit">Enviar</button>
    </form>
 )
}

export default AddTaskForm;
