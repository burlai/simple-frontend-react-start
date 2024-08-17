import React, { useReducer } from "react";

type State = {
  username: string;
  email: string;
  error: boolean;
  loading: boolean;
};

type Action =
  | { type: "SET_USERNAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_ERROR"; payload: boolean }
  | { type: "SET_LOADING"; payload: boolean };

const initialState: State = {
  username: "",
  email: "",
  error: false,
  loading: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

const StatefulForm: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_USERNAME", payload: event.target.value });
    dispatch({ type: "SET_ERROR", payload: false });
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_EMAIL", payload: event.target.value });
    dispatch({ type: "SET_ERROR", payload: false });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (state.username.length === 0 || state.email.length === 0) {
      dispatch({ type: "SET_ERROR", payload: true });
      return;
    }

    dispatch({ type: "SET_LOADING", payload: true });

    // Simulating an asynchronous operation
    setTimeout(() => {
      dispatch({ type: "SET_LOADING", payload: false });
    }, 3000);
  };

  console.log(state);

  return (
    <form onSubmit={handleSubmit}>
      <div className="margin-top-10">
        <label htmlFor="username" className="margin-right-10">
          Username:
        </label>
        <input
          type="text"
          id="username"
          value={state.username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="margin-top-10">
        <label htmlFor="email" className="margin-right-10">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={state.email}
          onChange={handleEmailChange}
        />
      </div>
      {state.error && (
        <p style={{ color: "red" }}>Please fill in all the fields.</p>
      )}
      {state.loading ? (
        <p>Loading...</p>
      ) : (
        <div className="margin-top-10">
          <button className="button" type="submit">
            Submit
          </button>
        </div>
      )}
    </form>
  );
};

export default StatefulForm;
