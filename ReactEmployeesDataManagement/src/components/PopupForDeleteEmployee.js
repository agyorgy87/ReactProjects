import './PopupForDeleteEmployee.css';
import React, {useState, useEffect} from 'react';
import { db } from "../firebaseConfig";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { FiAlertTriangle } from 'react-icons/fi';

const PopupForDeleteEmployee = (props) => {

useEffect(() => {
    const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    };
    getUsers();
}, []);

const usersCollectionRef = collection(db, "contacts");

const [users, setUsers ] = useState([]);

const deleteEmployee = () => {
    let deleteID = props.employeeIDforDelete;
    const userDoc = doc(db, "contacts", deleteID);
    deleteDoc(userDoc);
    refreshPage();
}

const refreshPage = () => {
    setTimeout(() => {
    window.location.reload(false);
    },500)
}

return (props.trigger) ? (
    <div className="popupFrameStyle">
        <div className="popupWindowStyle">
            <FiAlertTriangle className="alertIcon"/>
            <h2 className="deleteQuestionText">Are you sure you want to delete this employee?</h2>
                <div className="deleteButtonBox">
                    <button className="deleteButtons" onClick={deleteEmployee}>Yes</button>
                    <button className="deleteButtons" onClick={() => props.setTrigger(false)}>No</button>
                </div>
        </div>
    </div>
  ) : "";
}

export default PopupForDeleteEmployee;