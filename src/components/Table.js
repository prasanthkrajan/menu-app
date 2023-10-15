// Table.js
import { useEffect, useState } from "react";
import backendAPI from "../api/backendapi";
import './Table.css';

function Table({query}) {
	const [ menus, setMenus ] = useState([]);

	useEffect(() => {
    backendAPI.get(`/menus?q=${query}`)
    .then((response) => {
      console.log('GET status', response.status);
			console.log('GET data', response.data);
      setMenus(response.data)
    })
    .catch((error) => {
      console.log(error.message);
    });
  }, [query]);

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
	)
}

export default Table;
