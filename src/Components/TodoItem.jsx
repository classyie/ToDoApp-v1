import styles from './TodoItem.module.css'
import 'bootstrap/dist/css/bootstrap.css'; 

function TodoItem({name, dDate}) {
    return (
        <div className={`${styles.TodoAddItem} row`}>
            <p className='col-4'>{name}</p>
            <p className='col-4'>{dDate}</p>
            <button type="button" className="btn btn-danger col-2 ">Delete</button>
        </div>)
}

// function TodoItem(name) {
//     return (
//         <div className={`${styles.TodoAddItem} row`}>
//             <p className='col-4'>{name.name}</p>
//             <p className='col-4'>{name.dDate}</p>
//             <button type="button" className="btn btn-danger col-2">Delete</button>
//         </div>)
// }
export default TodoItem;