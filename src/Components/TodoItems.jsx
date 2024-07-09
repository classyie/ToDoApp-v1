import TodoItem from "./TodoItem";

function TodoItems({items}) {
    return (<>
        {items.map((item ) => (
            <TodoItem name={item.name} dDate = {item.dueDate} key={item.name}/>
        ))}
    </>);
}
export default TodoItems;