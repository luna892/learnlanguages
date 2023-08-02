import React from 'react';

class DisplayLyrics extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {lyrics} = this.props

        return(
            <div className="display-lyrics">
                {lyrics}
            </div>
        )
    }
}

export default DisplayLyrics;
