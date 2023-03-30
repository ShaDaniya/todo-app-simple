import Todo from "./Todo"

function TodoList({ todos }) {
    return <div>
    {todos ? <div>
        {todos.map((todo, index) => <Todo todo={todo} key={index}/>)}
    </div> : <h2>Todo list is empty</h2>}
    </div>
}

export default TodoList