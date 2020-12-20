import React, {useState, useEffect, useRef} from 'react'
import './Todo.scss'

const Todo = ({todo, todos, setTodos}) => {
    const [edit, setEdit] = useState(true)

    const InputElementRef = useRef();

    const deleteHandler = () => {
        setTodos(todos.filter(e => todo.id !== e.id))
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {

            if (item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        }))
    }

    useEffect(() => {
        if (!edit) InputElementRef.current.focus();
    }, [edit])

    const editButtonHandler = () => {
        setEdit(!edit);
    }

    const editHandler = (e) => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    todo: e.target.value
                }
            }
            return item;
        }))
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        (todo.todo !== '') ? editButtonHandler() : alert("You should write something for todo!")
    }


    return (
        <div
            className={(edit) ? `todo` : `edit-todo`}
        >
            {
                (edit) ?
                    <div className={(todo.completed) && `opacity`}>
                        <div
                            className="check" onClick={completeHandler}
                        >
                            <i className={(todo.completed) && `fas fa-check`}/>
                        </div>
                        <div className="todo-text">{todo.todo}</div>
                        <div
                            className="edit" onClick={editButtonHandler}
                        >
                            <i className="fa fa-edit "/>
                        </div>
                        <div className="delete">
                            <i className="fas fa-trash-alt" onClick={deleteHandler}/>
                        </div>
                    </div>
                    :
                    <form onSubmit={onSubmitHandler}>
                        <input
                            ref={InputElementRef}
                            className="todo-text-input"
                            type="text" value={todo.todo}
                            onChange={editHandler}
                        />
                        <div
                            className="check"
                            onClick={editButtonHandler}
                        >
                            <i className="fas fa-check"/>
                        </div>
                        <div
                            className="delete"
                            onClick={deleteHandler}
                        >
                            <i className="fas fa-trash-alt"/>
                        </div>
                    </form>
            }
        </div>
    );
};

export default Todo