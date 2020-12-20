import React, {useEffect, useRef} from 'react'
import './Form.scss'


const Form = ({todo, setTodo, submitTodoHandler, setFilter}) => {
    const InputRef = useRef()

    const filterHandler = e => {
        console.log(e.target.value)
        setFilter(e.target.value)
    }

    useEffect(() => {
        InputRef.current.focus();
    }, [])

    return (
        <form onSubmit={submitTodoHandler} className="form">
            <input
                ref={InputRef}
                onChange={e => setTodo(e.target.value)}
                value={todo}
                type="text"
                placeholder="I want to do..."
            />
            <button><i className="fas fa-plus"/></button>
            <select name="" id="" onChange={filterHandler}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </form>

    )
}

export default Form