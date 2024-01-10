import "../Auth/Authentication.css";
import Login from "../Auth/Login";
import SignUp from "./SignUp";

function Authentication() {
  return (
    <div className="authentication">
      <div className="auth_left">
        <img src="https://assets-global.website-files.com/5fac161927bf86485ba43fd0/63f491d6e8a97e3434aa6045_Screen%20Shot%202023-02-21%20at%2011.41.07.webp"></img>
      </div>
      <Login />
    </div>
  );
}

export default Authentication;
