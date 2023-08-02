import React from 'react'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: ""}
    }

    render() {
        return (
            <input
                key="search-bar"
                value={this.state.value}
                placeholder={this.props.placeholder || ""}
                onChange={(e) => this.setState({value: e.target.value})}
            />
        )
    }
}

export default SearchBar;