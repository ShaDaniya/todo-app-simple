import { useState } from 'react';

function TodoForm({ addTodo }) {
    const [text, setText] = useState('')
    const onSubmitHandler = (event) => {
        event.preventDefault()
        addTodo(text)
        setText('')
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
            <input type="text" placeholder="Enter new todo" value={text} onChange={(e) => setText(e.target.value)}/>
            <button>Submit</button>
            </form>
        </div>
    )
}

export default TodoForm