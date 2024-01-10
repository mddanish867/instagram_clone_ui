import "../Auth/SignUp.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigation = useNavigate();
  return (
    <div className="main_signup">
      <div className="signup">
        <img src="https://i.imgur.com/zqpwkLQ.png" alt=""></img>
        <input type="email" placeholder="Mobile number or Email" />
        <input type="text" placeholder="Full Name" />

        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Sign up</button>
      </div>
      <div className="auth_more">
        <span>
          Already have an account?{" "}
          <button
            onClick={() => {
              navigation("/authentication");
            }}
          >
            Sign in
          </button>
        </span>
      </div>
    </div>
  );
}

export default SignUp;
