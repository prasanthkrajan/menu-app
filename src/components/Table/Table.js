// Table.js
import { useEffect, useState } from "react";
import backendAPI from "../../api/backendapi";
import './Table.css';

function Table({ query, onErrorPresent }) {
	const [ data, setData ] = useState([]);

	useEffect(() => {
    backendAPI.get(`/menus?q=${query}`)
    .then((response) => {
      console.log('GET status', response.status);
			console.log('GET data', response.data);
      setData(response.data)
      onErrorPresent(false)
    })
    .catch((error) => {
      console.log(error.message);
      onErrorPresent(true)
    });
  }, [query, onErrorPresent]);

  const handlePriceSortDesc = () => {
    backendAPI.get(`/menus?q=${query}&sort_by=price&order_by=desc`)
    .then((response) => {
      console.log('GET status', response.status);
      console.log('GET status', response.data);
      setData(response.data)
      onErrorPresent(false)
    })
    .catch((error) => {
      console.log(error.message);
      onErrorPresent(true)
    });
  }

  const handlePriceSortAsc = () => {
    backendAPI.get(`/menus?q=${query}&sort_by=price&order_by=asc`)
    .then((response) => {
      console.log('GET status', response.status);
      console.log('GET status', response.data);
      setData(response.data)
      onErrorPresent(false)
    })
    .catch((error) => {
      console.log(error.message);
      onErrorPresent(true)
    });
  }

  const handleNameSortDesc = () => {
    backendAPI.get(`/menus?q=${query}&sort_by=name&order_by=desc`)
    .then((response) => {
      console.log('GET status', response.status);
      console.log('GET status', response.data);
      setData(response.data)
      onErrorPresent(false)
    })
    .catch((error) => {
      console.log(error.message);
      onErrorPresent(true)
    });
  }

  const handleNameSortAsc = () => {
    backendAPI.get(`/menus?q=${query}&sort_by=name&order_by=asc`)
    .then((response) => {
      console.log('GET status', response.status);
      console.log('GET status', response.data);
      setData(response.data)
      onErrorPresent(false)
    })
    .catch((error) => {
      console.log(error.message);
      onErrorPresent(true)
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
					data.map((item,key) =>
					<tr key={key}>
							<td className='table-data'>{item.name }</td>
							<td className='table-data'>{item.price }</td>
					</tr>)
				}
			</tbody>
		</table>
	)
}

export default Table;
