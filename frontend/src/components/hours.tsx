import React, { useState, useCallback , useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import login from "./login.png";
import "./Signup.css";


const Hours =() => {


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loged, setloged] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);
  const getinfo = async () => {

    try {
      const response = await axios.get("http://127.0.0.1:8000/users/");

      // Assuming the Django API returns a token on successful login
      const token = response.data.token;

      // Store the token in local storage (you might want to use more secure storage)
      localStorage.setItem("token", token);

      // Redirect or perform other actions on successful login
      console.log("Login successful!");
    } catch (error: any) {
      console.error("Signup failed:", error.response.data);
    }
  };



  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/login/", {
        username: username,
        password: password,
      });

      // Assuming the Django API returns a token on successful login
      const token = response.data.token;

      // Store the token in local storage (you might want to use more secure storage)
      localStorage.setItem("token", token);

      // Redirect or perform other actions on successful login
      console.log("Login successful!");
      history("/");
    } catch (error: any) {
      console.error("Signup failed:", error.response.data);
    }
  };

  return (
    <>
    { isLoggedIn ? 
    <div className="flex justify-center content-center w-screen h-screen bg-slate-100">
      <div className="w-auto h-auto rounded-lg mx-5 my-12 grid grid-cols-2 text-black">
        <div className="text-center">
          <form className="mb-10 w-full mt-7" onSubmit={handleLogin}>
            <div>
              <div className="justify-center content-center text-center">
                <h1 className="font-extrabold text-3xl logo mb-10">YMP</h1>
              </div>
              <h1 className="text-5xl mb-10 font-black">Login</h1>
              <p className="text-gray-400 font-medium mb-10">
                Login into YMP with your information
              </p>
              <p className="w-1/2 ml-6 mb-1 text-gray-700 font-semibold">
                Email
              </p>
              <input
                className="mb-3 rounded-md py-2 w-1/2 pl-3 boo"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <p className="w-1/2 ml-10 mb-1 text-gray-700 font-semibold">
                Password
              </p>
              <input
                className="mb-3 rounded-md py-2 w-1/2 pl-3 boo"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="">
              {" "}
              Don't have an account?{" "}
              <a className="text-blue-500" href="/signup/">
                Signup!
              </a>
            </p>
            <button
              type="submit"
              className="bg-blue-400 px-20 py-1 mt-3 rounded-md shadow-2xl text-black"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>: null}
    </>
  );
};

export default Hours;