import React, { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm";
import UpdateForm from "../components/UpdateForm";
import mainImg from "../assets/main.jpg";
import DeleteForm from "../components/DeleteForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
   const navigate = useNavigate();

   const [isClickadd, setIsClickadd] = useState(false);
   const [selectedUpdateId, setSelectedUpdateId] = useState(null);
   const [selectedDeleteId, setSelectedDeleteId] = useState(null);

   const [users, setUsers] = useState([]);
   const [userData, setUserData] = useState({
      id: "",
      name: "",
      age: "",
      position: "",
   });

   useEffect(() => {
      getUsers();
   }, []);

   const getUsers = () => {
      axios
         .get("http://localhost:7070/api/user/user")
         .then((response) => {
            setUsers(response.data);
         })
         .catch((error) => {
            console.log("Error", error);
         });
   };

   const addUser = (data) => {
      const payload = {
         id: Number(data.id),
         name: data.name,
         age: Number(data.age),
         position: data.position,
      };
      axios
         .post("http://localhost:7070/api/user/adduser", payload)
         .then(() => {
            getUsers();
            setIsClickadd(false);
            navigate("/");
            setUserData({
               id: "",
               name: "",
               age: "",
               position: "",
            });
         })
         .catch((error) => {
            console.log("Error", error);
         });
   };

   const handelChange = (e) => {
      setUserData({ ...userData, [e.target.name]: e.target.value });
   };

   const deleteUser = (id) => {
      const payload = { id: Number(id) };
      axios
         .post("http://localhost:7070/api/user/deleteuser", payload)
         .then(() => {
            getUsers();
            setSelectedDeleteId(null);
         })
         .catch((error) => {
            console.log("Delete error - ", error);
         });
   };

   const updateUser = (data) => {
      const payload = {
         id: Number(data.id),
         name: data.name,
         age: Number(data.age),
         position: data.position,
      };

      axios
         .post("http://localhost:7070/api/user/updateuser", payload)
         .then(() => {
            getUsers();
            setSelectedUpdateId(null);
            setUserData({
               id: "",
               name: "",
               age: "",
               position: "",
            });
         })
         .catch((error) => {
            console.log("Update Error: ", error);
         });
   };

   return (
      <div className="w-full flex flex-col gap-5 items-center justify-center mt-10">
         <img src={mainImg} alt="" className="w-56" />
         <div className="lg:w-4/5 w-full px-10 flex flex-col gap-5">
            <button
               onClick={() => setIsClickadd(true)}
               className="py-2 px-6 bg-gray-900 text-white rounded-lg cursor-pointer hover:bg-gray-800 w-44"
            >
               Add new user
            </button>
            {isClickadd && (
               <LoginForm
                  setIsClickadd={setIsClickadd}
                  addUser={addUser}
                  userData={userData}
                  handelChange={handelChange}
               />
            )}

            <table className="border-collapse table-auto border border-gray-200">
               <thead className="bg-gray-900 text-white">
                  <tr>
                     <th className="border border-gray-200 font-normal py-2">
                        ID
                     </th>
                     <th className="border border-gray-200 font-normal py-2">
                        Name
                     </th>
                     <th className="border border-gray-200 font-normal py-2">
                        Age
                     </th>
                     <th className="border border-gray-200 font-normal py-2">
                        Position
                     </th>
                     <th className="border border-gray-200 font-normal py-2">
                        Operations
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {users.map((user) => (
                     <tr key={user.id}>
                        <td className="border border-gray-200 py-2 px-4">
                           {user.id}
                        </td>
                        <td className="border border-gray-200 py-2 px-4">
                           {user.name}
                        </td>
                        <td className="border border-gray-200 py-2 px-4">
                           {user.age}
                        </td>
                        <td className="border border-gray-200 py-2 px-4">
                           {user.position}
                        </td>
                        <td className="border border-gray-200 py-2 px-4 flex gap-1">
                           <button
                              onClick={() => {
                                 setSelectedUpdateId(user.id);
                                 setUserData({
                                    id: user.id,
                                    name: user.name,
                                    age: user.age,
                                    position: user.position,
                                 });
                              }}
                              className="py-1 px-4 rounded bg-green-600 text-xs text-white cursor-pointer"
                           >
                              Update
                           </button>
                           <button
                              onClick={() => {
                                 setSelectedDeleteId(user.id);
                              }}
                              className="py-1 px-4 rounded bg-gray-950 text-xs text-white cursor-pointer"
                           >
                              Delete
                           </button>
                           {selectedDeleteId === user.id && (
                              <DeleteForm
                                 setSelectedDeleteId={setSelectedDeleteId}
                                 deleteUser={() => deleteUser(user.id)}
                              />
                           )}
                           {selectedUpdateId === user.id && (
                              <UpdateForm
                                 setSelectedUpdateId={setSelectedUpdateId}
                                 updateUser={() => updateUser(userData)}
                                 userData={userData}
                                 handelChange={handelChange}
                                 setUserData={setUserData}
                              />
                           )}
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default Home;
