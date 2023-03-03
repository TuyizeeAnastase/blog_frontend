import "./index.css";
import { Navigation } from "./components/navigation/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Blog } from "./components/Blog";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    const loggedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (loggedUser) {
      const foundUser = JSON.parse(loggedUser);
      setUser(foundUser);
      setToken(token);
    }
  }, []);
  return (
    <Router>
      <Navigation user={user} token={token} />
      <Routes>
        <Route exact path="/" element={<Home user={user} />} />
        <Route
          exact
          path="/post"
          element={<Blog user={user} token={token} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
