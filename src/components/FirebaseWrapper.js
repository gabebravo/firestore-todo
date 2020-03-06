import React from 'react';
import { useFsQuery, useFsMethods } from '../hooks';

/// _____ GLOBAL CONTEXT FOR FIREBASE ____________________
export const FirebaseContext = React.createContext(null);

// root Firebase wrapper will provide context for all children to access
function FirebaseWrapper({ children }) {
  const FsQuery = useFsQuery('todos');
  const FsMethods = useFsMethods('todos');
  return (
    // wrapper component
    <FirebaseContext.Provider value={{ ...FsQuery, ...FsMethods }}>
      {children}
    </FirebaseContext.Provider>
  );
}

export default FirebaseWrapper;
