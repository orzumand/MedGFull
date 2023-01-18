import React, { useEffect, useState } from "react";
import { db } from "../../../Firebase/firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { Container } from "./styled";

const CRUD = () => {
  const [users, setUsers] = useState([]);
  const [newName, setnewName] = useState("");
  const [newAge, setnewAge] = useState(0);
  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
  };

  const updateUser = async (id, age) => {
    const selectedUser = doc(db, "users", id);
    const updatedAge = { age: age + 1 };
    await updateDoc(selectedUser, updatedAge);
  };

  const deleteUser = async (id) => {
    const selectedUser = doc(db, "users", id);
    await deleteDoc(selectedUser);
  };
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => {
          setnewName(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="age"
        onChange={(e) => {
          setnewAge(e.target.value);
        }}
      />
      <button onClick={createUser}>Create User</button>
      {users.map((user) => {
        return (
          <div>
            <h1>name :{user.name}</h1>
            <h1>age :{user.age}</h1>
            <button onClick={() => updateUser(user.id, user.age)}>
              Increase Age
            </button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </div>
        );
      })}
    </Container>
  );
};

export default CRUD;
