// Counter.js
import { useState } from 'react';
import './SearchBar.css';

function SearchBar({onChange}) {
	const [ query, setQuery ] = useState("");

	const changeHandler = (event) => {
    setQuery(event.target.value)
    onChange(event.target.value)
  }

	return (
		<input
			type="text"
			placeholder="Search here"
			onChange={changeHandler}
			value={query} />
	);
}
export default SearchBar;


