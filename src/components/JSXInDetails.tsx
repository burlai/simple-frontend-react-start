import React from "react";

const JSXInDetails = (): React.ReactElement => {
  const name = "John";
  const isLoggedIn = true;

  const styles = {
    backgroundColor: "violet",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    marginTop: "10px",
  };

  return (
    <>
      {/* Fragment element */}
      <div className="container">
        {/* Embedding JavaScript expressions and className attribute - use camelCase for attributes */}
        <h2 className="margin-top-10">Hello, {name}!</h2>

        {/* Conditional rendering */}
        {isLoggedIn ? <p>Welcome back!</p> : <p>Please sign in</p>}

        {/* Properly closed self-closing tags */}
        <img
          src="https://picsum.photos/400"
          alt="picture"
          className="margin-top-10"
        />
        <br className="margin-top-10" />

        {/* Different attribute naming: htmlFor instead of for and camelCase */}
        <label htmlFor="nameInput" className="margin-top-10">
          Name:
        </label>
        <input
          id="nameInput"
          type="text"
          placeholder="Enter your name"
          className="margin-top-10"
        />

        {/* Using a style object */}
        <div style={styles}>This is a styled div.</div>

        {/* Template literals inside markup: */}
        <div className="margin-top-10">
          {isLoggedIn
            ? `And the sum is: ${2 + 2 + 1} dollars`
            : "Nothing to show"}
        </div>

        {/* JSX Comments */}
        {/* This is a comment in JSX */}

        {/* List rendering with keys */}
        <ul>
          {["Item 1", "Item 2", "Item 3"].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default JSXInDetails;
