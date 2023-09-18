import React from "react";
import { Link } from "react-router-dom";

function Home({email}) {
  return (
    <div>
      <div>
        <h1>
          <Link to="/login">Login</Link>
        </h1>
        <br />
        <h1>
          <Link to="/signup">Signup</Link>
        </h1>
      </div>

      <br />
      <br />
      <br />

      <h2>{email ? `Welcome - ${email}` : "Login please"}</h2>
    </div>
  );
}

export default Home;
