// Table.js
import { useEffect, useState } from "react";
import backendAPI from "../../api/backendapi";
import './Table.css';

function Table({ query, onErrorPresent }) {
	const [ data, setData ] = useState([]);

	useEffect(() => {
    backendAPI.get(`/menus?q=${query}`)
    .then((response) => {
      handleApiCallSuccess(response)
    })
    .catch((error) => {
      handleApiCallFailure(error)
    });
  }, [query]);

  const handleApiCallSuccess = (response) => {
    console.log('GET status', response.status);
    setData(response.data)
    onErrorPresent(false)
  }

  const handleApiCallFailure = (error) => {
    console.log(error.message);
    onErrorPresent(true)
  }

  const handlePriceSort = (order) => {
    backendAPI.get(`/menus?q=${query}&sort_by=price&order_by=${order}`)
    .then((response) => {
      handleApiCallSuccess(response)
    })
    .catch((error) => {
      handleApiCallFailure(error)
    });
  }

  const handleNameSort = (order) => {
    backendAPI.get(`/menus?q=${query}&sort_by=name&order_by=${order}`)
    .then((response) => {
      handleApiCallSuccess(response)
    })
    .catch((error) => {
      handleApiCallFailure(error)
    });
  }

	return (
		<table>
			<thead>
				<tr>
					<th>
						Name
						<div className='table-header-icons'>
							<button onClick={() => handleNameSort('asc')}>▲</button>
							<button onClick={() => handleNameSort('desc')}>▼</button>
						</div>
					</th>
					<th>
						Price
						<div className='table-header-icons'>
							<button onClick={() => handlePriceSort('asc')}>▲</button>
							<button onClick={() => handlePriceSort('desc')}>▼</button>
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
