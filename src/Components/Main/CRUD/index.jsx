// import React, { useEffect, useState } from "react";
// import { db } from "../../../Firebase/firebase-config";
// import {
//   collection,
//   getDocs,
//   addDoc,
//   doc,
//   updateDoc,
//   deleteDoc,
// } from "firebase/firestore";
// import { Container, Item } from "./styled";

// const CRUD = () => {
//   const [users, setUsers] = useState([]);
//   const [newName, setnewName] = useState("");
//   const [newAge, setnewAge] = useState(0);
//   const createUser = async () => {
//     await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
//   };

//   const updateUser = async (id, age) => {
//     const selectedUser = doc(db, "users", id);
//     const updatedAge = { age: age + 1 };
//     await updateDoc(selectedUser, updatedAge);
//   };

//   const deleteUser = async (id) => {
//     const selectedUser = doc(db, "users", id);
//     await deleteDoc(selectedUser);
//   };
//   const usersCollectionRef = collection(db, "users");

//   useEffect(() => {
//     const getUsers = async () => {
//       const data = await getDocs(usersCollectionRef);
//       setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };
//     getUsers();
//   }, [usersCollectionRef]);

//   return (
//     <div>
//       <Container>
//         <input
//           type="text"
//           placeholder="name"
//           onChange={(e) => {
//             setnewName(e.target.value);
//           }}
//         />
//         <input
//           type="number"
//           placeholder="age"
//           onChange={(e) => {
//             setnewAge(e.target.value);
//           }}
//         />
//         <button onClick={createUser}>Create User</button>
//         {users.map((user) => {
//           return (
//             <Item key={user.id}>
//               <div>
//                 <div>name :{user.name}</div>
//                 <div>age :{user.age}</div>
//                 <button onClick={() => updateUser(user.id, user.age)}>
//                   Increase Age
//                 </button>
//               </div>
//               <button className="delete" onClick={() => deleteUser(user.id)}>
//                 Delete
//               </button>
//             </Item>
//           );
//         })}
//       </Container>
//     </div>
//   );
// };

// export default CRUD;
