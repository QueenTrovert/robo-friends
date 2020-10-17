import React from 'react';

const SearchBar = ({searchField, searchChange}) => {
    return(
        <div className="pa3">
            <input 
                type="search" 
                placeholder="Search robot" 
                className="pa2 ba b--green bg-lightest-blue"
                onChange = {searchChange}/>
        </div>
    );
}
export default SearchBar;