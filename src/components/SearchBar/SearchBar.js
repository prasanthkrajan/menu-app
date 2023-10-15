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
			value={value}
			onFocus={ (e) => e.target.placeholder = '' }
			onBlur={ (e) => e.target.placeholder = 'Search Here' }
		/>
	);
}
export default SearchBar;


