import "./App.css";
import MemesList from "./components/MemesList";
import PeopleList from "./components/PhonesList";
import PriceList from "./components/PricesList";

function App() {
  return (
    <>
      <h1 className="page-header">Page header</h1>
      <MemesList />
      <PriceList />
      <PeopleList />
    </>
  );
}

export default App;
