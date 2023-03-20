import { useForm } from "react-hook-form";
import styles from "../EditTodo/EditTodo.module.css";

const TodoForm = ({submitFunction, todo, trigger, updateState, editing = false}) => {
    const { register, handleSubmit } = useForm();
    
    const submit = async (data) => {
        const formTodo = await submitFunction({ id: todo._id, data });
        if(editing) {
            updateState({ ...formTodo, date: formTodo.fecha });
            trigger(false);
        }
      }

    return (
        <form onSubmit={handleSubmit(submit)}>
        <input
          {...register('text', { required: true })}
          defaultValue={todo.text}
          type="text"
          placeholder="Action to do"
          className={styles.input}
        />
        <input
          {...register('date', { required: true })}
          defaultValue={todo.fecha}
          type="date"
          placeholder="Due date"
          className={styles.input}
        />
        <button className={styles.button} type="submit">Submit</button>
      </form>
    )
}

export default TodoForm;