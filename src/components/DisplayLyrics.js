import React from 'react';

class DisplayLyrics extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    combineLyrics(englishLyrics, foreignLyrics) {
        if (!englishLyrics || !foreignLyrics) {
            return ""
        }

        let englishLyricsArray = englishLyrics.split("\n")
        let foriegnLyricsArray = foreignLyrics.split("\n")

        let lyricString = ""

        for (let i = 0; i < englishLyricsArray.length; i++) {

            if (i !== 0) {
                lyricString += "\n"
            }

            lyricString += englishLyricsArray[i]
            lyricString += "\n"
            lyricString += foriegnLyricsArray[i]
            lyricString += "\n"
        }

        return lyricString
    }

    render() {
        const {englishLyrics, foreignLyrics} = this.props

        return(
            <div className="display-lyrics">
                {this.combineLyrics(englishLyrics, foreignLyrics)}
            </div>
        )
    }
}

export default DisplayLyrics;
