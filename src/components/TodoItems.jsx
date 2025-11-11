{/* -------TodoItems.jsx------- */ }
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import deleteIcon from '../assets/delete.png'

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
    return (
        <div className='flex items-center my-3 gap-2'>
            <div onClick={() => { toggle(id) }} className='flex flex-1 items-center cursor-pointer'>
                <img src={isComplete ? tick : not_tick} alt="" className={`w-6 border-2 rounded-full ${isComplete ? "border-none" : "border-gray-300"} hover:border-orange-500 duration-300 
                `} />
                <p className={`text-slate-700 ml-4 text-lg decoration-slate-700 
                    ${isComplete ? "line-through" : ""}`}>{text}</p>
            </div>
            <div onClick={() => { deleteTodo(id) }} className='w-9 h-9 flex items-center justify-center rounded-full cursor-pointer select-none hover:bg-orange-200 duration-300'>
                <img src={deleteIcon} alt="" className='w-4' />
            </div>
        </div>
    )
}

export default TodoItems
