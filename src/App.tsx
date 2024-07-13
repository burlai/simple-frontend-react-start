import "./App.css";
import Counter from "./components/Counter";
import Form from "./components/Form";

function App() {
  return (
    <>
      <h1 className="page-header">Стан в компонентах React</h1>
      <Counter />
      <Form />
    </>
  );
}

export default App;
