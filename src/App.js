import { useEffect, useState } from "react";
import backendAPI from "./api/backendapi";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import './App.css';

function App() {
  const [ query, setQuery ] = useState("");
  
  return (
    <div className="App">
      <h1>Menu</h1>
      <SearchBar onChange={setQuery} value={query} />
      <Table query={query} />
    </div>
  );
}

export default App;
