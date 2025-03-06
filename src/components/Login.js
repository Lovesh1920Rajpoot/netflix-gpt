import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";


const Login = () => {
    const [isSignInForm, SetIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

const handleButtonClick = () => {

   const message= checkValidData(email.current.value, password.current.value ); 
   setErrorMessage(message);

   if(message) return;

   if(!isSignInForm){
    //SignUp logic
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-"+ errorMessage);
    // ..
  });
  

   }
   else{
    //signin logic
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-"+ errorMessage);
    });

   }
}    

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
      <form onSubmit={(e)=> e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-85">
        <h1 className="font-bold text-3xl py-2">
            {isSignInForm? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (<input 
        ref = {name}
        type = "text"
        placeholder="Full Name" 
        className="p-4 my-4 w-full bg-gray-700"/> )}
        
        <input 
        ref = {email}
        type = "text" 
        placeholder="Email Address" 
        className="p-4 my-4 w-full bg-gray-700"/>
        <input 
        ref = {password}
        type = "password" 
        placeholder="Password" 
        className="p-4 my-4 w-full bg-gray-700" />

        <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg " onClick={handleButtonClick}>
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
