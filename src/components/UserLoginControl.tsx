import React, { useState } from "react";

import Greeting from "./Greeting";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

const UserLoginControl: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // start with this form of syntax
  if (isLoggedIn) {
    return (
      <>
        <Greeting isLoggedIn={false} />
        <LogoutButton
          onClick={() => {
            setIsLoggedIn(false);
          }}
        />
      </>
    );
  } else {
    return (
      <>
        <Greeting isLoggedIn={true} />
        <LoginButton
          onClick={() => {
            setIsLoggedIn(true);
          }}
        />
      </>
    );
  }

  // Then refactor it to this one:
  return (
    <div>
      <h2>Ternary operator syntax</h2>
      <Greeting isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <LogoutButton
          onClick={() => {
            setIsLoggedIn(false);
          }}
        />
      ) : (
        <LoginButton
          onClick={() => {
            setIsLoggedIn(true);
          }}
        />
      )}
    </div>
  );
};

export default UserLoginControl;
