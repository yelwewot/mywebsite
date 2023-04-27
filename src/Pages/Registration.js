import React from "react";

function Registration() {
  return (
    <div>
    <fieldset>
           <legend>Registration</legend>
           <ul>
             <li>
               <label for="username">Username:</label>
               <input type="text" id="username" required/>
             </li>
             <li>
               <label for="password">Email:</label>
               <input type="email" id="email" required/>
             </li>
             <li>
               <label for="password">Password:</label>
               <input type="password" id="password" required/>
             </li>
           </ul>
         </fieldset>
         <button>Sign Up</button>
 </div>
  );
}

export default Registration;