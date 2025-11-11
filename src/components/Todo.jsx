{/* -------Todo.jsx------- */ }
import { useEffect, useRef, useState } from "react"
import todoIcon from "../assets/todo_icon.png"
import TodoItems from "./TodoItems"
const Todo = () => {
    const [todoList, setTodoList] = useState(
        localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [])
    const inputRef = useRef();
    const addTodo = () => {
        const inputTxt = inputRef.current.value.trim();
        if (inputTxt === "") {

        } else {
            const newTodo = {
                id: Date.now(),
                text: inputTxt,
                isComplete: false
            }
            setTodoList((prev) => [...prev, newTodo])
            inputRef.current.value = "";
        }

    }
    const deleteTodo = (id) => {
        setTodoList((prevTodo) => {
            return prevTodo.filter((todo) => todo.id !== id)
        })
    }
    const toggle = (id) => {
        setTodoList((prevTodo) => {
            return prevTodo.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isComplete: !todo.isComplete }
                }
                return todo
            })
        })
    }
    const pendingCount = todoList.filter(todo => !todo.isComplete).length;
    const completedCount = todoList.filter(todo => todo.isComplete).length;

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoList))
    }, [todoList])
    return (

        <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-4 h-[550px] rounded-2xl shadow-md">
            <div className='flex items-center mt-2.5 gap-2'>
                <img className="h-6 w-6" src={todoIcon} alt="" />
                <h1 className='text-2xl font-semibold'>To-Do List</h1>
            </div>
            {/* -------Input box------- */}
            <div className="flex items-center my-5 bg-gray-300 rounded-2xl">
                <input ref={inputRef} className="bg-transparent border-none outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600" type="text" placeholder="Add your tasks..." />
                <button onClick={addTodo} className="border-none outline-none rounded-2xl rounded-tl-none rounded-bl-none bg-orange-600 w-15 h-14 text-white text-lg font-medium cursor-pointer hover:bg-orange-700 duration-300 ">Add</button>
            </div>
            {/* -------todo list------- */}
            {
                todoList.length === 0 ? (
                    <div className="flex-1 flex items-center justify-center text-slate-600 text-lg">
                        No todos found
                    </div>
                ) : (
                    <>
                        {/* Todo List */}
                        <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide mb-2.5 border-b border-gray-300">
                            {todoList.map((item) => (
                                <TodoItems
                                    key={item.id}
                                    text={item.text}
                                    id={item.id}
                                    isComplete={item.isComplete}
                                    deleteTodo={deleteTodo}
                                    toggle={toggle}
                                />
                            ))}
                        </div>

                        {/* Info Section */}
                        <div className="flex items-center justify-between">
                            <span>Total: <strong>{todoList.length}</strong></span>
                            <span>Pending: <strong>{pendingCount}</strong></span>
                            <span>Completed: <strong>{completedCount}</strong></span>
                        </div>
                    </>
                )
            }

        </div>
    )
}

export default Todo