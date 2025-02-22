import React from "react";
import LoginForm from "../components/LoginForm";

function Home() {
   return (
      <div className="w-full flex flex-col gap-5 items-center justify-center mt-10">
         <h3>MERN crud practice</h3>
         <LoginForm />
      </div>
   );
}

export default Home;
