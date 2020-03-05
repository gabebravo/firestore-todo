import React from 'react';
import styled, { css } from 'styled-components';
import { FirebaseContext } from './FirebaseWrapper';

const StyledTodo = styled.li`
  text-decoration: ${props => props.isComplete && css`line-through`};
`;
const StyledIcon = styled.span`
  margin-left: 2rem;
`;

export default function TodosList({ todos }) {
  const { updateDoc, deleteDoc } = React.useContext(FirebaseContext);

  const updateTodo = (id, task, isComplete) => {
    updateDoc(id, { task, isComplete: !isComplete });
  };

  const deleteTodo = id => {
    deleteDoc(id);
  };

  const renderTodos = () =>
    todos.map(({ id, task, isComplete }) => (
      <StyledTodo key={id} isComplete={isComplete}>
        {task}
        <StyledIcon
          onClick={() => updateTodo(id, task, isComplete)}
          className="far fa-check-square"
        />
        <StyledIcon
          onClick={() => deleteTodo(id)}
          className="far fa-trash-alt"
        />
      </StyledTodo>
    ));

  return <ol>{todos && renderTodos()}</ol>;
}
