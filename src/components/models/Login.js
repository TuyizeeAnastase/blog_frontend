import { useState } from "react";
import axios from "axios";
export const Login = ({ setShowSignUp, setShowLogin }) => {
  const [msg, setMsg] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const login = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:3500/api/v1/users/login", {
          email,
          password,
        })
        .then((response) => {
          setMsg("User logged in");
          localStorage.setItem("user", JSON.stringify(response.data.user));
          localStorage.setItem("token", JSON.stringify(response.data.token));
          setShowLogin(false);
          window.location.reload(true);
        });
    } catch (err) {
      if (err.response) {
        setMsg(err.response.data.message);
      }
    }
  };
  return (
    <>
      <div className="flex justify-center  items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 md:h-screen outline-none focus:outline-none backdrop-brightness-50">
        <div className="container py-12 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="xl:w-10/12">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center">
                        <h3 className="text-3xl font-bold text-gray-600 underline decoration-sky-500 font-mono">
                          Blog
                        </h3>
                        <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">
                          Blog Web Application
                        </h4>
                      </div>
                      <form onSubmit={login}>
                        <p className="mb-4">Please login to your account</p>
                        <p className="text-red-600 italic tracking-wide text-center uppercase">
                          {msg}
                        </p>
                        <div className="mb-4">
                          <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="inputUsername"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="inputUsername"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                          <button
                            className="inline-block px-6 py-2.5 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transiton duration-150 ease-in-out w-full mb-3"
                            type="submit"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            Login
                          </button>
                          <a href="/#" className="text-gray-500">
                            Forgot password?
                          </a>
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">Don't have an account?</p>
                          <button
                            onClick={() => setShowSignUp(true)}
                            type="button"
                            className="inline-block px-6 py-2 border-2 border-gray-500 text-gray-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            Signup
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="lg:w-6/12 flex bg-gray-500 items-center lg-rounded-r-lg rounded-b-lg lg:rounded-bl-none">
                    <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                      <h4 className="text-xl font-semibold mb-6">Blog</h4>
                      <p className="text-sm">Start Blogging ....</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
