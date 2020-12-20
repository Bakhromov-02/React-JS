import React from 'react'
import Todo from "./Todo";
import '../App.css'

const TodoList = ({todos, setTodos, filteredTodos}) => {
    return (
        <div className="todo-list">
            {
                filteredTodos.map(todo => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                    />
                ))
            }
        </div>
    )
}

export default TodoList