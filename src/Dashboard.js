import React from "react";
import auth from "./auth";

export const Dashboard = (props) => {
  return (
    <>
      <h1>Dashboard</h1>
      <button
        onClick={() =>
          auth.logout(() => {
            props.history.push("/");
          })
        }
      >
        Logout
      </button>
    </>
  );
};
