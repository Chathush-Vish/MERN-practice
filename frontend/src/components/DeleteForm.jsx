import React from "react";

function DeleteForm(props) {
   const { setSelectedDeleteId, deleteUser } = props;

   const closeForm = (e) => {
      if (e.target.id === "delete-bg") {
         setSelectedDeleteId(null);
      }
   };
   return (
      <div
         onClick={closeForm}
         id="delete-bg"
         className="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-black/80"
      >
         <div className="flex flex-col gap-4 bg-white items-center p-10 shadow-lg rounded-lg">
            <p>Are you sure you want to remove this user</p>
            <div className="flex gap-2">
               <button
                  className="border-gray-300 bg-gray-900 text-white px-6 py-2 w-32 rounded-lg cursor-pointer hover:bg-gray-800"
                  onClick={(e) => {
                     e.preventDefault();
                     deleteUser();
                  }}
               >
                  Yes
               </button>
               <button
                  className="border-gray-300 bg-gray-200 text-black px-6 py-2 w-32 rounded-lg cursor-pointer hover:bg-gray-300"
                  type="submit"
                  value=" No"
                  onClick={() => setSelectedDeleteId(null)}
               >
                  No
               </button>
            </div>
         </div>
      </div>
   );
}

export default DeleteForm;
