import { useState } from "react";
import styles from "./CreateTodo.module.css"
import TodoForm from "../TodoForm/TodoForm";

const CreateTodo = ({ createTodo, setCreating }) => {
  const [todo] = useState({ text: '', date: undefined });

  return (
    <div className={styles.todo}>
      <button onClick={() => setCreating(false)} className={styles.closeCreate}>X</button>
      <TodoForm
        submitFunction={createTodo}
        todo={todo}
      />
    </div>
  )
}

export default CreateTodo;