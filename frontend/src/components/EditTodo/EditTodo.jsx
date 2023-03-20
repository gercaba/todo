import { useEffect, useState } from "react";

import { editTodo, getTodo } from "../../utils/api";
import TodoForm from "../TodoForm/TodoForm";
import styles from "./EditTodo.module.css";

const EditTodo = ({ id, setEdit, updateTodo }) => {
  const [todo, setTodo] = useState({ text: "", date: new Date() });

  async function fetchData() {
    console.log(id);
    const response = await getTodo({ id });
    setTodo({ ...todo, ...response, date: response.fecha });
  }

  useEffect(() => {
    fetchData();
  }, ['']);

  return (
    <div className={styles.todo}>
      <button onClick={() => setEdit(false)} className={styles.closeEdit}>X</button>
      <TodoForm
      trigger={setEdit}
      submitFunction={editTodo}
      todo={todo}
      updateState={updateTodo}
      editing={true}
      />
    </div>
  )
}

export default EditTodo;