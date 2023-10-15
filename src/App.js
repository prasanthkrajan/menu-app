import { useEffect, useState } from "react";
import backendAPI from "./api/backendapi";
import SearchBar from "./components/SearchBar";
import './App.css';

function App() {
  const [ menus, setMenus ] = useState([]);
  
  useEffect(() => {
    backendAPI.get('/menus')
    .then((response) => {
      console.log('GET status', response.status);
      setMenus(response.data)
    })
    .catch((error) => {
      console.log(error.message);
    });
  }, []);

  const handleChange = (query) => {
    backendAPI.get(`/menus?q=${query}`)
    .then((response) => {
      console.log('GET status', response.status);
      console.log('GET status', response.data);
      setMenus(response.data)
    })
    .catch((error) => {
      console.log(error.message);
    });
  }

  const handlePriceSortDesc = () => {
    backendAPI.get(`/menus?q=${query}&sort_by=price&order_by=desc`)
    .then((response) => {
      console.log('GET status', response.status);
      console.log('GET status', response.data);
      setMenus(response.data)
    })
    .catch((error) => {
      console.log(error.message);
    });
  }

  const handlePriceSortAsc = () => {
    backendAPI.get(`/menus?q=${query}&sort_by=price&order_by=asc`)
    .then((response) => {
      console.log('GET status', response.status);
      console.log('GET status', response.data);
      setMenus(response.data)
    })
    .catch((error) => {
      console.log(error.message);
    });
  }

  const handleNameSortDesc = () => {
    backendAPI.get(`/menus?q=${query}&sort_by=name&order_by=desc`)
    .then((response) => {
      console.log('GET status', response.status);
      console.log('GET status', response.data);
      setMenus(response.data)
    })
    .catch((error) => {
      console.log(error.message);
    });
  }

  const handleNameSortAsc = () => {
    backendAPI.get(`/menus?q=${query}&sort_by=name&order_by=asc`)
    .then((response) => {
      console.log('GET status', response.status);
      console.log('GET status', response.data);
      setMenus(response.data)
    })
    .catch((error) => {
      console.log(error.message);
    });
  }

  return (
    <div className="App">
      <h1>Menu</h1>
      <SearchBar onChange={handleChange}/>
      <table>
        <thead>
          <tr>
            <th>
              Name
              <div className='table-header-icons'>
                <button onClick={handleNameSortAsc}>▲</button>
                <button onClick={handleNameSortDesc}>▼</button>
              </div>
            </th>
            <th>
              Price
              <div className='table-header-icons'>
                <button onClick={handlePriceSortAsc}>▲</button>
                <button onClick={handlePriceSortDesc}>▼</button>
              </div>
            </th>
          </tr>   
        </thead>   
        <tbody>
          {
            menus.map((menu,key) =>
            <tr key={key}>
                <td className='table-data'>{menu.name }</td>
                <td className='table-data'>{menu.price }</td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
