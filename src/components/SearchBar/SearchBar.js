// SearchBar.js
import './SearchBar.css';

function SearchBar({value, onChange}) {
	const changeHandler = (event) => {
    onChange(event.target.value)
  }

	return (
		<input
			type="text"
			placeholder="Search here"
			onChange={changeHandler}
			value={value} />
	);
}
export default SearchBar;


