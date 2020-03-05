import React from 'react';
import { useForm } from '../hooks';
import { FirebaseContext } from './FirebaseWrapper';

export default function TodoForm({ name, value }) {
  const { form, changeHandler, resetForm } = useForm(name, value);
  const { createDoc } = React.useContext(FirebaseContext);

  const saveTodo = () => {
    createDoc('todos', form[name]);
    resetForm();
  };

  return (
    <>
      <input
        type="text"
        name={name}
        onChange={changeHandler}
        value={form[name]}
      />
      <button className="button button-outline" onClick={saveTodo}>
        Save Todo
      </button>
    </>
  );
}
