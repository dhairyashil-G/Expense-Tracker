// import React from "react";
// import NavBar from "../components/Navbar";

// export default function Signup(){
//     return(
        
//         <div className="flex justify-center items-center h-screen bg-slate-200">
//             <div id="form" className="block bg-slate-50 p-6 round-xl shadow-md shadow-slate-300 w-90">
//                 <form action="">
//                     <h2 className="text-blue-700 text-3xl font-semibold my-4">SignUp</h2>

//                     <label for="username" className="text-sm">Username</label> <br />
//                     <input type="text" name="" id="username" className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required/>

//                     <label for="email" className="text-sm">Email</label> <br />
//                     <input type="text" name="" id="email" className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required/>

//                     <label for="limit" className="text-sm">Limit</label> <br />
//                     <input type="Numeric" name="" id="limit" className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required/> <br />

//                     <label for="password1" className="text-sm">Password</label> <br />
//                     <input type="password" name="" id="password1" className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required/>

//                     <label for="password2" className="text-sm">Confirm Password</label> <br />
//                     <input type="password" name="" id="password2" className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required/> <br />

//                     <input type="submit" name="" id="signUp" className="bg-blue-700 w-full h-10 cursor-pointer text-white rounded-md hover:bg-blue-600 hover:outline-2 outline-blue-600 outline-offset-2 text-sm"/> <br />
//                     <p className="text-xs my-2">Already have an account? <a href="#" className="text-blue-600">Login</a></p>
//                 </form>
//             </div>
//         </div>
//     )
// }



import Signup from "../components/Signup";

function SignupPage() {
  return <Signup />;
}

export default SignupPage;