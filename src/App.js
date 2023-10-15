import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Table from "./components/Table/Table";
import './App.css';

function App() {
  const [ query, setQuery ] = useState("");
  const [ errorPresent, setErrorPresent ] = useState(false)

  const handleErrorPresent = (isErrorPresent) => {
    setErrorPresent(isErrorPresent)
  }

  return (
    <div className="App">
      <h1>Costa Rica Pizza Menu</h1>
      {
        errorPresent ? <div>Unable to retrieve data from API. Please ensure the API is running at localhost:3000</div> :  
        <>
          <SearchBar onChange={setQuery} value={query} />
          <Table query={query} onErrorPresent={handleErrorPresent}/>
        </>
      }
    </div>
  );
}

export default App;
