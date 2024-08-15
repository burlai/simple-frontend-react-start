import "./App.css";
import StatefulForm from "./components/StatefulForm";

function App() {
  return (
    <>
      <h1 className="page-header">React українською</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React Logo"
        className="react-logo"
      />

      <div className="component-container">
        <StatefulForm />
      </div>
    </>
  );
}

export default App;
