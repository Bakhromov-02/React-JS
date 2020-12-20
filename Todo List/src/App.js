import React, {useState, useEffect} from 'react';
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";


function App() {
    const [id, setId] = useState(0)
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])
    const [filter, setFilter] = useState('all')
    const [filteredTodos, setFilteredTodos] = useState([])


    const submitTodoHandler = (e) => {
        e.preventDefault();
        setId(prevState => prevState + 1);
        (todo !== '') ?
            setTodos([...todos, {todo, completed: false, id}]) :
            alert("You should write something for todo!")
        setTodo('')
    }

    const filterHandler = () => {
        switch (filter) {
            case 'completed':
                setFilteredTodos(todos.filter(e => e.completed === true))
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(e => e.completed === false))
                break;
            default:
                setFilteredTodos(todos)
        }
    }

    useEffect(() => {
        getLocalTodo()
    }, [])

    useEffect(() => {
        filterHandler();
        saveLocalTodo();
    }, [todos, filter])

    const getLocalTodo = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]))
            // localStorage.setItem('id', JSON.stringify([]))
        } else {
            let todoLocal = JSON.parse(localStorage.getItem('todos'))
            setTodos(todoLocal)
            let idLocal = JSON.parse(localStorage.getItem('id'))
            setId(idLocal)
        }
    }

    const saveLocalTodo = () => {
        localStorage.setItem('todos', JSON.stringify(todos))
        localStorage.setItem('id', JSON.stringify(id))
    }

    return (
        <div className="App">
            <h1 style={{textAlign: 'center'}}>Todo List</h1>
            <Form
                todo={todo}
                setTodo={setTodo}
                submitTodoHandler={submitTodoHandler}
                setFilter={setFilter}
            />
            <TodoList
                todos={todos}
                setTodos={setTodos}
                filteredTodos={filteredTodos}
            />
        </div>
    );
}

export default App;
