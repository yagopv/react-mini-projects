import React, { useState, useRef } from "react";

export function ControlledLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={() => alert(email, password)}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <button type="submit">Login</button>
      <div>
        <span>{`${email} - ${password}`}</span>
      </div>
    </form>
  );
}

export function UncontrolledLogin() {
  const email = useRef(null);
  const password = useRef(null);

  return (
    <form onSubmit={() => alert(email.current.value, password.current.value)}>
      <input ref={email} type="email" placeholder="Enter your email" />
      <input ref={password} type="password" placeholder="Enter your password" />
      <button type="submit">Login</button>
      {email.current && (
        <div>
          <span>{`${email.current.value} - ${password.current.value}`}</span>
        </div>
      )}
    </form>
  );
}
