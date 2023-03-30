import Todo from "./Todo"

function TodoList({ todos }) {
    return <div>
        {todos.map((todo, index) => <Todo todo={todo} key={index}/>)}
    </div>
}

export default TodoList