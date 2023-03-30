function TodoForm({ addTodo }) {
    return (
        <div>
            <form>
            <input type="text" placeholder="Enter new todo"/>
            <button>Submit</button>
            </form>
        </div>
    )
}

export default TodoForm