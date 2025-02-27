import React from "react";

function LoginForm(props) {
   const { setIsClickadd, addUser, userData, handelChange } = props;

   const closeForm = (e) => {
      if (e.target.id === "form-bg") {
         setIsClickadd(false);
      }
   };

   return (
      <div
         onClick={closeForm}
         id="form-bg"
         className="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-black/80"
      >
         <form
            action=""
            onSubmit={(e) => {
               e.preventDefault();
               addUser(userData);
            }}
            className="flex flex-col gap-4 bg-white items-center p-10 shadow-lg rounded-lg"
         >
            <p>Add new users</p>
            <input
               className="border-1 border-gray-300 px-6 py-2 w-72 rounded-lg"
               type="number"
               required
               name="id"
               placeholder="Enter ID for user"
               value={userData.id}
               onChange={handelChange}
            />
            <input
               className="border-1 border-gray-300 px-6 py-2 w-72 rounded-lg"
               type="text"
               required
               name="name"
               placeholder="Enter the full name"
               value={userData.name}
               onChange={handelChange}
            />
            <input
               className="border-1 border-gray-300 px-6 py-2 w-72 rounded-lg"
               type="text"
               required
               name="age"
               placeholder="Enter the age"
               value={userData.age}
               onChange={handelChange}
            />
            <input
               className="border-1 border-gray-300 px-6 py-2 w-72 rounded-lg"
               type="text"
               required
               name="position"
               placeholder="Enter position"
               value={userData.position}
               onChange={handelChange}
            />
            <input
               className="border-gray-300 bg-gray-900 text-white px-6 py-2 w-72 rounded-lg cursor-pointer hover:bg-gray-800"
               type="submit"
               value="Add User"
            />
         </form>
      </div>
   );
}

export default LoginForm;
