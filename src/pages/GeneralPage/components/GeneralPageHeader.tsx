import React from 'react';
import {UserAction} from "../../../state/user/userActions";
import {useRoot} from "../../../hooks/useRoot";

export const GeneralPageHeader = () => {
  const ctx = useRoot();
  const username = ctx.state.username;

  const toggleLoginLogoutHandler = () => {
    return username
      ? ctx.dispatch({ type: UserAction.LOGOUT })
      : ctx.dispatch({ type: UserAction.LOGIN, payload: { username: "potatoes" } });
  };

  return (
      <div
          style={{
            backgroundColor: "#dee5ec",
            padding: 10,
            display: "flex",
            justifyContent: "space-between",
          }}
      >
        <div>
          <p>Header</p>
          {username && <p>Logged in as {username}</p>}
        </div>
        <button onClick={toggleLoginLogoutHandler}>
          {username ? "Logout" : "Login"}
        </button>
      </div>
  );
}
