import React, { useState } from "react";
import LoginForm from "../components/LoginForm";

function Home() {
   const [isClickadd, setIsClickadd] = useState(false);

   return (
      <div className="w-full flex flex-col gap-5 items-center justify-center mt-10">
         <h3>MERN crud practice</h3>
         <button
            onClick={() => setIsClickadd(true)}
            className="py-2 px-6 bg-gray-900 text-white rounded-lg cursor-pointer hover:bg-gray-800"
         >
            Add new user
         </button>
         {isClickadd && <LoginForm />}
      </div>
   );
}

export default Home;
