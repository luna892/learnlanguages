import React from 'react';
import DisplayLyrics from './DisplayLyrics';

class TranslateText extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    async componentDidMount() {
        // this.setState({translatedText: res?.text || ''})
    }

    render() {
        let translatedText = this.state.translatedText || "Awaiting translated text"

        return(<div>
            {<DisplayLyrics
                lyrics={translatedText}
            />}
        </div>
    )}

}

export default TranslateText;