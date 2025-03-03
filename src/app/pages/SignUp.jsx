import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../services/authService";
import InputField from "../components/InputField";

const SignUp = () => {
  const navigate = useNavigate();
  const inputRefs = useRef([]);
  const [loginDetails, setLoginDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = loginDetails;

  const handleKeyPress = (e, index) => {
    if (e.key === "Enter") {
      if (index < inputRefs.current.length - 1) {
        e.preventDefault();
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const isFormValid = () => {
    // Check if there are any errors
    return Object.values(err).every((error) => error === "");
  };

  const validateField = (name, value) => {
    let errorMessage = "";
    switch (name) {
      case "name":
        errorMessage = value.trim() ? "" : "this field is required";
        break;
      case "email":
        const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        errorMessage =
          value.trim() == ""
            ? "this field is required"
            : emailRegEx.test(value)
            ? ""
            : "please Enter valid Email address";
        break;
      case "password":
        const passwordRegEx =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        errorMessage =
          value.trim() == ""
            ? "this field is required"
            : passwordRegEx.test(value.trim())
            ? ""
            : "please Enter valid password";
        break;
      default:
        break;
    }
    setErr((prev) => {
      return {
        ...prev,
        [name]: errorMessage,
      };
    });
  };
  const validateAllFields = () => {
    for (const [name, value] of Object.entries(loginDetails)) {
      validateField(name, value);
    }
  };
  const handleInputChange = ({ target: { name, value } }) => {
    setLoginDetails({ ...loginDetails, [name]: value });
    validateField(name, value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    validateAllFields();
    try {
      if (
        (name !== "" || email !== "" || password !== "") &&
        isFormValid()
      ) {
        await signUp(email, password);
        navigate("/dashboard");
      }else{
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <form className="login-signup-box" onSubmit={handleSignUp}>
        <h2>Sign Up</h2>
        <InputField
          ref={(el) => (inputRefs.current[0] = el)}
          label="Name"
          error={err.name}
          type="text"
          placeholder="Enter your name"
          name="name"
          value={name}
          onChange={handleInputChange}
          onKeyDown={(e) => handleKeyPress(e, 0)}
        />
        <InputField
          ref={(el) => (inputRefs.current[1] = el)}
          label="Email"
          error={err.email}
          type="email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={handleInputChange}
          onKeyDown={(e) => handleKeyPress(e, 1)}
        />
        <InputField
          ref={(el) => (inputRefs.current[2] = el)}
          label="Password"
          error={err.password}
          type="password"
          placeholder="Enter password"
          name="password"
          value={password}
          onChange={handleInputChange}
          onKeyDown={(e) => handleKeyPress(e, 2)}
        />
       
        <button>Sign Up</button>
        <p className="auth-link">
          Already have an account? <Link to={"/login"}>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
