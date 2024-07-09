import styles from './TodoAdd.module.css'
import 'bootstrap/dist/css/bootstrap.css'; 

function TodoAdd() {
    return (
        <div className={`${styles.TodoAddItem} row todoContent`}>
            <input type="text" className='col-4'/>
            <input type="date" className='col-4'/>
            <button type="button" className="btn btn-success col-2">Add</button>
        </div>)
}
export default TodoAdd;