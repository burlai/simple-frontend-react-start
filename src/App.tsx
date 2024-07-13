import "./App.css";
import Greetings from "./components/Greetings";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <>
      <h1 className="page-header">State VS Props в компонентах React</h1>
      <Greetings name="John" surname="Lennon" />
      <Greetings name="Paul" />
      <Greetings name="George" />
      <Greetings name="Ringo" surname="Starr" />
      <ThemeToggle />
    </>
  );
}

export default App;
