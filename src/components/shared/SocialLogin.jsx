import { FaGoogle } from "react-icons/fa";
import "../Login/Login.css";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      const saveUser = {
        name: loggedUser.displayName,
        email: loggedUser.email,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            navigate(from, { replace: true });
          }
        });
    });
  };
  return (
    <div>
      {/* <div className="divider">OR</div> */}
      <button className="btn btn-circle" onClick={handleGoogleSignIn}>
        <FaGoogle></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
