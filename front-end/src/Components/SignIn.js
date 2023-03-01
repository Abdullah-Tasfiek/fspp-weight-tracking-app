// import React from "react";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import app from "../Firebase";
// import "./SignIn.css";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function SignIn() {
//   const navigate = useNavigate();
//   const [userProfile, setUserProfile] = useState({
//     email: "",
//     password: "",
//   });
//   const auth = getAuth(app);

//   const handleTextChange = (event) => {
//     setUserProfile({ ...userProfile, [event.target.id]: event.target.value });
//   };

//   const signIn = () => {
//     signInWithEmailAndPassword(auth, userProfile.email, userProfile.password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         if (user) {
//           toast.success(`Welcome back ${userProfile.email}!`, {
//             position: "top-right",
//             autoClose: 2000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light",
//           });
//           navigate("/users");
//         }
//         // ...
//       })
//       .catch((error) => {
//         toast.error(`${userProfile.email} is not registered`, {
//           position: "top-right",
//           autoClose: false,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//       });
//   };

//   return (
//     <div className="bg-beige min-h-screen">
//       <div className="signin py-12">
//         <p className="font-fonts text-7xl font-semibold text-rose-700">
//           Welcome Back
//         </p>
//         <p className="font-fonts text-3xl font-semibold text-rose-700">
//           Continue finding your match!
//         </p>
//         <br></br>
//         <input
//           className="text-sm font-semibold inline-block py-4 px-4 text-pink-600 bg-white last:mr-0 mr-1"
//           type="text"
//           id="email"
//           placeholder="Email"
//           onChange={handleTextChange}
//         />
//         <br></br>
//         <input
//           className="text-sm font-semibold inline-block py-4 px-4 text-pink-600 bg-white last:mr-0 mr-1"
//           placeholder="Password"
//           type="password"
//           id="password"
//           onChange={handleTextChange}
//         />
//         <br></br>
//         <button
//           onClick={signIn}
//           className="signinbutton bg-logored text-white font-bold py-4 px-20 rounded-full"
//         >
//           Sign In
//         </button>
//         <p className="content-center font-fonts text-red">
//           Don't have an account?{" "}
//           <Link className="underline text-logored" to="/register">
//             click here!
//           </Link>
//         </p>
//         <Link to="/">
//           {/* <img alt="Back" src={require("../Assets/previous.png")} /> */}
//           <div>Back</div>
//         </Link>
//       </div>
//     </div>
//   );
// }
