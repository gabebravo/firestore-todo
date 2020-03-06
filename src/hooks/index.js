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
  const db = firebase.firestore();

  React.useEffect(() => {
    const fetchData = async () => {
      await db.collection(collection).onSnapshot(snap => {
        const newTodos = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setTodos(newTodos);
      });
    };
    fetchData();
    return () => db.unsubscribe();
  }, [collection]);

  const whereQuerying = async (field, comporator, value) => {
    const query = await db
      .collection(collection)
      .where(field, comporator, value)
      .get()
      .then(async snap => {
        if (snap.empty) {
          console.log('No matching documents.');
          return;
        }

        const newTodos = await snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTodos(newTodos);
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
    return query;
  };

  const getAllDocs = async () => {
    const query = await db
      .collection(collection)
      .get()
      .then(async snap => {
        const newTodos = await snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTodos(newTodos);
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
    return query;
  };

  return { todos, whereQuerying, getAllDocs };
};

export const useFsMethods = collection => {
  const db = firebase.firestore();
  const auth = firebase.auth();

  // CRUD METHODS _____________________________________
  // CREATE A NEW DOCUMENT TO THE FIRESTORE DB
  const createDoc = async doc => {
    return await db.collection(collection).add(doc);
  };

  // UPDATE A DOCUMENT IN THE FIRESTORE DB
  const updateDoc = async (id, updatedDoc) => {
    return await db
      .collection(collection)
      .doc(id)
      .update(updatedDoc);
  };

  // DELETE A DOCUMENT FROM THE FIRESTORE DB
  const deleteDoc = async id => {
    return await db
      .collection(collection)
      .doc(id)
      .delete();
  };

  // AUTH METHODS _____________________________________
  // register method used to add new users
  const register = async (name, email, password) => {
    const newUser = await auth.createUserWithEmailAndPassword(email, password);

    // method will return the promise from the API
    return await newUser.user.updateProfile({
      displayName: name
    });
  };

  // login method will return the promise from the API
  const login = async (email, password) => {
    return await auth.signInWithEmailAndPassword(email, password);
  };

  // logout method will return the promise from the API
  const logout = async () => {
    return await auth.signOut();
  };

  // reset method will return the promise from the API
  const resetPassword = async email => {
    return await auth.sendPasswordResetEmail(email);
  };

  return { createDoc, updateDoc, deleteDoc };
};
