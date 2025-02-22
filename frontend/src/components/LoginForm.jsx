import React from "react";

function LoginForm() {
   return (
      <div className="fixed top-0 flex items-center justify-center w-full h-screen bg-gray-900/70">
         <form
            action=""
            className="flex flex-col gap-4 bg-white items-center p-10 shadow-lg rounded-lg"
         >
            <p>Add new users</p>
            <input
               className="border-1 border-gray-300 px-6 py-2 w-72 rounded-lg"
               type="text"
               placeholder="Enter the full name"
            />
            <input
               className="border-1 border-gray-300 px-6 py-2 w-72 rounded-lg"
               type="text"
               placeholder="Enter the age"
            />
            <input
               className="border-1 border-gray-300 px-6 py-2 w-72 rounded-lg"
               type="text"
               placeholder="Enter position"
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
