import React from 'react';
import TodoForm from '../../components/TodoForm';
import TodosList from '../../components/TodosList';
import { FirebaseContext } from '../../components/FirebaseWrapper';

export default function Home() {
  const { todos } = React.useContext(FirebaseContext);

  return (
    <div className="container">
      <h3 style={{ marginTop: '5rem' }}>Home Page</h3>
      <div style={{ marginTop: '5rem' }} className="row">
        <div className="column column-30">
          <label>Todo Task Description</label>
          <TodoForm name="task" value="" />
        </div>
        <div className="column column-20"></div>
        <div className="column column-50">
          <TodosList todos={todos} />
        </div>
      </div>
    </div>
  );
}
