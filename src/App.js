import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Table from "./components/Table/Table";
import './App.css';

function App() {
  const [ query, setQuery ] = useState("");

  return (
    <div className="App">
      <h1>Costa Rica Pizza Menu</h1>
      <SearchBar onChange={setQuery} value={query} />
      <Table query={query} />
    </div>
  );
}

export default App;
