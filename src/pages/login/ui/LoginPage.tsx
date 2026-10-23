import { FormEvent, useState } from "react";

import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

import { axiosInstance } from "../../../shared/api";

import styles from "./Login.module.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const login = async (e: FormEvent) => {
    e.preventDefault();

    setErrorMessage(""); // reset the old error
    try {
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("access_token", response.data.access_token);
      navigate("/"); // redirects to dashboard
      setEmail("");
      setPassword("");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(
          error.response?.data?.message || "Something Went Wrong",
        );
      } else {
        setErrorMessage("Something Went Wrong");
      }
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className={styles.background}>
      <div className={styles.main}>
        <h1>Login</h1>

        <form action="" onSubmit={login}>
          <div className={styles.inputs}>
            <div>
              <label htmlFor="email">
                Email
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                />
              </label>
            </div>
            <div>
              <label htmlFor="password">
                Password
                <input
                  id="password"
                  type="password"
                  minLength={6}
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </label>
            </div>
            <div>
              {errorMessage && (
                <p className={styles.errorMessage}>{errorMessage}</p>
              )}
            </div>
          </div>
          <div className={styles.actionsWrapper}>
            <NavLink to={"/register"}>Sign up</NavLink>
            <button>Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
