import React from "react";

function UpdateForm(props) {
   const {
      setSelectedUpdateId,
      updateUser,
      userData,
      handelChange,
      setUserData,
   } = props;

   const closeForm = (e) => {
      if (e.target.id === "update-bg") {
         setSelectedUpdateId(null);
         setUserData({
            id: "",
            name: "",
            age: "",
            position: "",
         });
      }
   };
   return (
      <div
         onClick={closeForm}
         id="update-bg"
         className="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-black/80"
      >
         <form
            action=""
            className="flex flex-col gap-4 bg-white items-center p-10 shadow-lg rounded-lg"
            onSubmit={(e) => {
               e.preventDefault();
               updateUser();
            }}
         >
            <p>Update users details</p>
            <input
               className="border-1 border-gray-300 px-6 py-2 w-72 rounded-lg"
               type="text"
               required
               placeholder="Full name"
               name="name"
               value={userData.name}
               onChange={handelChange}
            />
            <input
               className="border-1 border-gray-300 px-6 py-2 w-72 rounded-lg"
               type="text"
               required
               placeholder="Age"
               name="age"
               value={userData.age}
               onChange={handelChange}
            />
            <input
               className="border-1 border-gray-300 px-6 py-2 w-72 rounded-lg"
               type="text"
               required
               placeholder="Position"
               name="position"
               value={userData.position}
               onChange={handelChange}
            />
            <input
               className="border-gray-300 bg-gray-900 text-white px-6 py-2 w-72 rounded-lg cursor-pointer hover:bg-gray-800"
               type="submit"
               value="Update User"
            />
         </form>
      </div>
   );
}

export default UpdateForm;
