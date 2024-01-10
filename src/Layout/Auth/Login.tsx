import { useNavigate } from "react-router-dom";
import "../Auth/Login.css";
function Login() {
  const navigation = useNavigate();
  return (
    <>
      <div className="login_main">
        <div className="login_left">
          <img src="https://i.imgur.com/zqpwkLQ.png" alt=""></img>
          <input type="email" placeholder="Phone number, username or email" />
          <input type="password" placeholder="Password" />
          <button>Log in</button>
        </div>
        <div className="login_auth_more">
          <span>
            Don't have an account?{" "}
            <button
              onClick={() => {
                navigation("/signup");
              }}
            >
              Sign up
            </button>
          </span>
        </div>
      </div>
    </>
  );
}

export default Login;
