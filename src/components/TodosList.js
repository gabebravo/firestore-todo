import React from 'react';
import styled, { css } from 'styled-components';

const StyledTodo = styled.li`
  text-decoration: ${props => props.isComplete && css`line-through`};
`;
const StyledIcon = styled.span`
  margin-left: 2rem;
`;

export default function TodosList({ todos }) {
  const renderTodos = () =>
    todos.map(({ id, task, isComplete }) => (
      <StyledTodo key={id} isComplete={isComplete}>
        {task}
        <StyledIcon className="fas fa-edit" />
        <StyledIcon className="far fa-check-square" />
      </StyledTodo>
    ));

  return <ol>{todos && renderTodos()}</ol>;
}
