import React from 'react';
import styled from 'styled-components';
import { FirebaseContext } from './FirebaseWrapper';

const StyledButton = styled.button`
  font-size: 1.1rem;
  height: 2.8rem;
  line-height: 2.8rem;
  padding: 0 1.5rem;
`;

export default function FilterBar() {
  const { whereQuerying, getAllDocs } = React.useContext(FirebaseContext);

  const completedQuery = async () => {
    await whereQuerying('isComplete', '==', true);
  };
  const activeQuery = async () => {
    await whereQuerying('isComplete', '==', false);
  };
  const allDocsQuery = async () => {
    await getAllDocs();
  };

  return (
    <div className="row">
      <StyledButton onClick={completedQuery} className="button button-clear">
        Completed
      </StyledButton>
      <StyledButton onClick={activeQuery} className="button button-clear">
        Active
      </StyledButton>
      <StyledButton onClick={allDocsQuery} className="button button-clear">
        All
      </StyledButton>
    </div>
  );
}
