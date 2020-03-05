import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 1.1rem;
  height: 2.8rem;
  line-height: 2.8rem;
  padding: 0 1.5rem;
`;

export default function FilterBar() {
  return (
    <div className="row">
      <StyledButton className="button button-clear">Completed</StyledButton>
      <StyledButton className="button button-clear">Active</StyledButton>
      <StyledButton className="button button-clear">All</StyledButton>
    </div>
  );
}
