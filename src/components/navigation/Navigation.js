import { Login } from "../models/Login";
import { SignUp } from "../models/SignUp";
import { AddBlog } from "../models/AddBlog";
import { useState } from "react";
export const Navigation = ({ user, token }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location = "/";
  };

  return (
    <>
      <div className="flex flex-wrap place-items-center">
        <section className="relative mx-auto">
          <nav className="bg-gray-900 text-white w-screen">
            <div className=" flex mx-auto  px-5 xl:px-12 py-6 flex w-full items-center">
              <a class="text-3xl font-bold font-heading" href="/#">
                Blog
              </a>
              <ul className="px-4 mx-auto font-semibold font-heading">
                <li>
                  {token ? (
                    <>
                      <button
                        onClick={() => logout()}
                        className="hover:text-gray-200"
                      >
                        Logout:<span className="p-2">{user.names}</span>
                      </button>
                      <button
                        onClick={() => setShowAdd(true)}
                        className="bg-white  p-2 text-black hover:bg-gray-400"
                      >
                        Add Blog
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setShowLogin(true)}
                      className="hover:text-gray-200"
                    >
                      Login
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </nav>
        </section>
      </div>
      {showLogin && (
        <>
          <Login setShowSignUp={setShowSignUp} setShowLogin={setShowLogin} />
        </>
      )}
      {showSignUp && (
        <>
          <SignUp setShowLogin={setShowLogin} />
        </>
      )}
      {showAdd && (
        <>
          <AddBlog setShowAdd={setShowAdd} />
        </>
      )}
    </>
  );
};
