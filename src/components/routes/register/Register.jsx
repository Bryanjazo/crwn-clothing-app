import React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../utils/firebase/firebase.utils";
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <form action="register" onSubmit={handleRegistration}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="#email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="Password">Email</label>
        <input
          type="Password"
          name="Password"
          id="#Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
