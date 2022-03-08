import { useState } from "react";
import ishop from "./assets/icons/MdiShopping.svg";
import "./assets/css/App.css";
import User from "./components/User";
import Navbar from "./components/Navbar";

function App() {
  const [adminView, setAdminView] = useState(false);
  const [role, setRole] = useState("god");
  const usr = {
    id: 124,
    name: "Jumbo Iosif",
    avatar:
      "https://1.bp.blogspot.com/-QuMu0orD6r4/XuvACSwxuvI/AAAAAAAAC-0/pUbWE8UeOrQWRgwhV5DhwcFMvtPxOgpxACLcBGAsYHQ/s1600/%25D0%25B4%25D0%25B6%25D0%25B0%25D0%25BC%25D0%25B1%25D0%25BE.png",
    age: 16,
    role: role,
    email: "god@jumbo.com",
    theme: "light",
  };

  return (
    <div className="App">
      <header>
        <Navbar
          setRole={setRole}
          role={role}
          setAdminView={setAdminView}
          adminView={adminView}
        />
      </header>
      <div className="wrapper">
        <h1 className="greeting">
          We are e-commerce shop! <img src={ishop} alt="" />
        </h1>
        <h2 className="role_greeting">
          {adminView ? "Hail to God!" : "Hello, mere mortal"}
        </h2>
        <div className="user__display">
          <User user={usr} adminView={adminView} />
        </div>
      </div>
    </div>
  );
}

export default App;
