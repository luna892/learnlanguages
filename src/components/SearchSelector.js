import React from 'react';
import Select from 'react-select';

class SearchSelector extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        const {options, setCurrentOption} = this.props

        return(
            <Select className="select-lyrics"
                options={options}
                onChange={setCurrentOption}
                isSearchable={true}
                placeholder={"Select or Search for a song"}
            />
        )
    }
}

export default SearchSelector;