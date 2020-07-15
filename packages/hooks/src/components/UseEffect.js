import React from "react";
import useHttpGet from "../hooks/useHttpGet";

function UseEffect() {
  const { data, loading } = useHttpGet(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) {
    return <span>loading...</span>;
  }

  return (
    <ul>
      {data.map(({ title, body }) => (
        <li>
          <h3>{title}</h3>
          <p>{body}</p>
        </li>
      ))}
    </ul>
  );
}

export default UseEffect;
