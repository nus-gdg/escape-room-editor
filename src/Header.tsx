import React, {useContext} from 'react';
import { RootStore} from "./context";
import { Action } from "./Actions";

export const Header = () => {
  const {
    state: { username },
    dispatch,
  } = useContext(RootStore);

  const toggleLoginLogoutHandler = () => {
    return username
      ? dispatch({ type: Action.LOGOUT })
      : dispatch({ type: Action.LOGIN, payload: { username: "potatoes" } });
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
