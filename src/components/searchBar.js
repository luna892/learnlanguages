import React from 'react'

const SearchBar = ({keyword, placeholder, onChange}) => {

    return (
        <input
            key="search-bar"
            value={keyword}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default SearchBar;






