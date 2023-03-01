// import React from "react";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import app from "../Firebase";
// import "./Register.css";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Register() {
//   const navigate = useNavigate();
//   //   const [user, setUser] = useState({
//   //     name: "",
//   //     image: "",
//   //     email: "",
//   //     age: 0,
//   //     dietary_restrictions: "",
//   //     food_preferences: "",
//   //     sexual_orientation: "",
//   //     gender: "",
//   //     religion: "",
//   //   });

//   const [userProfile, setUserProfile] = useState({
//     email: "",
//     password: "",
//   });
//   //using credentials (app) to make auth object
//   const auth = getAuth(app);

//   const handleTextChange = (event) => {
//     setUserProfile({ ...userProfile, [event.target.id]: event.target.value });
//   };

//   const signUp = () => {
//     createUserWithEmailAndPassword(
//       auth,
//       userProfile.email,
//       userProfile.password
//     )
//       .then((userCredential) => {
//         const user = userCredential.user; //creates user
//         if (user) {
//           toast.success(`${userProfile.email} successfully registered`, {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light",
//           });
//           navigate("/users/new"); //TODO: somehow send here with email prefilled
//         }
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         toast.error(
//           `${userProfile.email} could not register. Please input a valid email or password. ${errorCode} `,
//           {
//             position: "top-right",
//             autoClose: false,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light",
//           }
//         );
//       });
//   };
//   // axios
//   //   .post(`${API}/myfoods`, food)
//   //   .then((res) => {
//   //     navigate(`/myfoods`);
//   //   })
//   //   .catch((err) => {
//   //     console.warn(err);
//   //   });

//   return (
//     <div className="bg-beige min-h-screen">
//       <div className="register py-12">
//         <p className="font-fonts text-7xl font-semibold text-rose-700">
//           Sign Up Here
//         </p>
//         <p className="font-fonts text-3xl font-semibold text-rose-700">
//           Start finding your match!
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
//           onClick={signUp}
//           className="registerbutton bg-logored text-white font-bold py-4 px-20 rounded-full"
//         >
//           Register
//         </button>
//         <p className="content-center font-fonts text-red">
//           Already have an account?{" "}
//           <Link className="underline text-logored" to="/signin">
//             click here!
//           </Link>
//         </p>
//         <Link to="/">
//           {/* <img alt="Back" src={require("../Assets/previous.png")} /> */}
//           <div>back</div>
//         </Link>
//       </div>
//     </div>
//   );
// }