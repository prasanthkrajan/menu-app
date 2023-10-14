import { useEffect, useState } from "react";
import backendAPI from "./api/backendapi";
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

  return (
    <div className="App">
      <h1>Menu</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
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
