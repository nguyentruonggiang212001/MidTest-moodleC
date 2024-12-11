import React from "react";

const LoginPage = () => {
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="">Login</label>
          <input type="text" />
        </div>
        <div className="mb-3">
          <label htmlFor="">Password</label>
          <input type="password" />
        </div>
      </form>
    </>
  );
};

export default LoginPage;
