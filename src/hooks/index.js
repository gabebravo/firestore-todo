import React from 'react';
import firebase from '../firebase';

export function useForm(name, value) {
  const [form, setForm] = React.useState({ [name]: value });

  const changeHandler = ev => {
    const { name, value } = ev.target;
    setForm(form => ({ ...form, [name]: value }));
  };

  const resetForm = () => {
    setForm({ [name]: '' });
  };

  return { form, changeHandler, resetForm };
}

export const useFsQuery = collection => {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const db = firebase.firestore();
    const fetchData = async () => {
      await db.collection(collection).onSnapshot(snap => {
        const newTodos = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setTodos(newTodos);
      });
    };
    fetchData();
    return () => db.unsubscribe();
  }, []);

  return { todos };
};

export const useFsWrite = () => {
  const db = firebase.firestore();
  const setDoc = async (collection, task) => {
    return await db.collection(collection).add({ task, isComplete: false });
  };
  return { setDoc };
};
