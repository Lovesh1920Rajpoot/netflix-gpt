import { useState } from "react";
import Header from "./Header";


const Login = () => {
    const [isSignInForm, SetIsSignInForm] = useState(true);

const toggleSignInForm = ()=>{
       SetIsSignInForm(!isSignInForm);
}
  return (
    <div>
      <Header/>
      <div className="absolute ">
        <img src ="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_medium.jpg"
        alt = "logo" />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-85">
        <h1 className="font-bold text-3xl py-2">
            {isSignInForm? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (<input type = "text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/> )}
        <input type = "text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
        <input type = "password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700" />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg ">
            {isSignInForm? "Sign In" : "Sign Up"} 
        </button>
        <p className ="cursor-pointer"onClick={toggleSignInForm}> 
            {isSignInForm? "New to Netflix? Sign up now." : "Already a user? Sign In Now."}
        </p>
      </form>
    </div>
  )
}

export default Login;
