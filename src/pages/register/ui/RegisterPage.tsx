import { FormEvent, useState } from "react";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { axiosInstance } from "../../../shared/api";

import styles from "./Register.module.css";

const RegisterPage = () => {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userRepeatPassword, setUserRepeatPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const registerMutation = useMutation({
    mutationFn: (credentials: {
      email: string;
      password: string;
      first_name: string;
      last_name: string;
    }) => axiosInstance.post("/auth/register", credentials),
    onSuccess: (response) => {
      toast.success(`${response.data.message}, please Login`);
      navigate("/login");
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        setErrorMessage(
          error.response?.data?.message || "Something Went Wrong",
        );
      } else {
        setErrorMessage("Something Went Wrong");
      }
      setUserPassword("");
      setUserRepeatPassword("");
      setUserFirstName("");
      setUserLastName("");
      setUserEmail("");
    },
  });

  const register = (e: FormEvent) => {
    e.preventDefault();

    setErrorMessage("");
    if (userPassword === userRepeatPassword) {
      registerMutation.mutate({
        email: userEmail,
        password: userPassword,
        first_name: userFirstName,
        last_name: userLastName,
      });
    } else {
      setErrorMessage("The Passwords Don't Match");
      setUserPassword("");
      setUserRepeatPassword("");
      setUserFirstName("");
      setUserLastName("");
      setUserEmail("");
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.main}>
        <h1>Registration</h1>

        <form action="" onSubmit={register}>
          <div className={styles.inputs}>
            <div>
              {errorMessage && (
                <p className={styles.errorMessage}>{errorMessage}</p>
              )}
              <div
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                <label htmlFor="firstname">
                  <div>
                    First name
                    <small style={{ fontSize: "12px" }}>
                      (Latin or Cyrillic)
                    </small>
                  </div>
                  <input
                    id="firstname"
                    type="text"
                    required
                    value={userFirstName}
                    onChange={(e) => setUserFirstName(e.target.value)}
                    pattern="[\p{Script=Latin}\p{Script=Cyrillic}]+"
                  />
                </label>
              </div>
            </div>
            <div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                <label htmlFor="lastname">
                  <div>
                    Last name
                    <small style={{ fontSize: "12px" }}>
                      (Latin or Cyrillic)
                    </small>
                  </div>
                  <input
                    id="lastname"
                    type="text"
                    required
                    value={userLastName}
                    onChange={(e) => setUserLastName(e.target.value)}
                    pattern="[\p{Script=Latin}\p{Script=Cyrillic}]+"
                  />
                </label>
              </div>
            </div>
            <div>
              <label htmlFor="email">
                Email
                <input
                  id="email"
                  type="email"
                  required
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
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
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="repeatpassword">
                Repeat password
                <input
                  id="repeatpassword"
                  type="password"
                  minLength={6}
                  required
                  value={userRepeatPassword}
                  onChange={(e) => setUserRepeatPassword(e.target.value)}
                />
              </label>
            </div>
          </div>
          <div className={styles.actionsWrapper}>
            <NavLink to={"/login"}>Back</NavLink>
            <button>Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
