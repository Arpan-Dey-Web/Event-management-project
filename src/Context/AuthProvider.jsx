import React from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const data = {
    name: "arpan",
  };

  return (
    <div>
      <AuthContext value={data}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
