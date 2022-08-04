import React,{useState,useEffect} from 'react';
import {db} from "./firebase-config"
import {addDoc, collection, getDocs,updateDoc,doc, deleteDoc} from "firebase/firestore"

function Users(props) {
    const [newName,setNewName] = useState("");
    const [newAddress,setnewAddress] = useState("");
    const [updatedAddress,setUpdatedAddress] = useState("");
    const [newAge,setnewAge] = useState("");
    const [users,setUsers] = useState([]);
    const userCollectionRef = collection(db,"users")

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(),id: doc.id})));
        }
        getUsers()
    },[])

    const UpdateUser = async (id,age) => {
        const userDoc = doc(db,"users",id);
        const newFields = {age:age+1}
        await updateDoc(userDoc,newFields)
    }
    const UpdateAddess = async (id) => {
        const userDoc = doc(db,"users",id);
        const newFields = {address: updatedAddress}
        await updateDoc(userDoc,newFields);

    }
    const DeleteUser = async (id) => {
        const userDoc = doc(db,"users",id);
        await deleteDoc(userDoc,id);
    }

    const addUser = async () => {
        await addDoc(userCollectionRef, {name: newName, address: newAddress, age:Number(newAge)})
    }


    return (
        <div>
            <input type = "text" placeholder = "Name..." onChange = {(e) => {setNewName(e.target.value)}}/><br/>
            <input type = "text" placeholder = "Address..." onChange = {(e) => {setnewAddress(e.target.value)}}/><br/>
            <input type = "number" placeholder = "Age..." onChange = {(e) => {setnewAge(e.target.value)}}/><br/>
            <button onClick={addUser}>Add</button>
            {users.map((users) => {return <div><h2 key = {users.name}> Name: {users.name} <br/> Address: {users.address} <br/> Age: {users.age}</h2> <button onClick={() => {UpdateUser(users.id,users.age)}}>Increase the age</button><button onClick={() => {DeleteUser(users.id)}}>Delete user</button> <br/>
            <textarea onChange={e => {setUpdatedAddress(e.target.value)}}></textarea><br/><button onClick = {() => {UpdateAddess(users.id)}}>Update address</button></div>})}
        </div>
    );
}

export default Users;