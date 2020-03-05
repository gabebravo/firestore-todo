import React from 'react';
import { useFsQuery, useFsWrite } from '../hooks';

/// _____ GLOBAL CONTEXT FOR FIREBASE ____________________
export const FirebaseContext = React.createContext(null);

// root Firebase wrapper will provide context for all children to access
function FirebaseWrapper({ children }) {
  const { todos } = useFsQuery('todos');
  const { setDoc } = useFsWrite('todos');
  return (
    // wrapper component
    <FirebaseContext.Provider value={{ todos, setDoc }}>
      {children}
    </FirebaseContext.Provider>
  );
}

export default FirebaseWrapper;
