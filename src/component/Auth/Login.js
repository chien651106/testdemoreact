import { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { postlogin } from "../../service/apiservice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";
import {ImSpinner10} from "react-icons/im"

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading,setIsLoading] = useState(false);
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleLogin = async () => {
    //validate

    //submit api
    const isvalidateEmail = validateEmail(email);
    if (!isvalidateEmail) {
      toast.error("invalidate email");
      return;
    }
    if (!password) {
      toast.error("invalidate password");
      return;
    }
    setIsLoading(true);
    let data = await postlogin(email, password);

    if (data && data.EC === 0) {
      // =0
      dispatch(doLogin(data))
      toast.success(data.EM);
      setIsLoading(false)
      navigate('/')
      // props.setCurrentPage(1)
    }
    if (data && +data.EC !== 0) {
      // #0
      toast.error(data.EM);
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="header">
          <span> Don't have an account yet?</span>
          <button onClick={()=> navigate('/register')}>Sign up</button>
        </div>
        <div className="title">ABC</div>
        <div className="welcome">Hello, Who is this?</div>
        <div className="content-form col-4 mx-auto">
          <div className="form-group ">
            <label>Email</label>
            <input
              type={"email"}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="form-control"
            ></input>
          </div>
          <div className="form-group ">
            <label>Password</label>
            <input
              type={"password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="form-control"
            ></input>
          </div>
          <span className="forgot-password">Forgot Password</span>
          <div>
            <button onClick={() => handleLogin()} className="btn-submit" disabled={isLoading}>
             {isLoading === true &&  <ImSpinner10 className="loaderIcon"/>}
              <span>Login</span>
            </button>
          </div>
          <div className=" text-center">
            <span
              className="Back"
              onClick={() => {
                navigate("/");
              }}
            >
              {" "}
              &#60;&#60; Go to Home
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
