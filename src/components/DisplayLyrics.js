import React from 'react';

class DisplayLyrics extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    getLyricBunches(englishLyrics, foreignLyrics, leadingLanguage) {
        if(!englishLyrics || !foreignLyrics) {
            return
        }

        const englishLyricsArray = englishLyrics.split("\n")
        const foriegnLyricsArray = foreignLyrics.split("\n")

        //Default is the english first
        const leadingLyricArr = leadingLanguage === "Spanish" ? foriegnLyricsArray : englishLyricsArray
        const followingLyricArr = leadingLanguage === "Spanish" ? englishLyricsArray : foriegnLyricsArray
        
        return leadingLyricArr.map((leadingLyric, i) => {
            // Only add lyric if there is a leading lyric and there is a lyric in the following lyric array
            if (leadingLyric && i < followingLyricArr.length) {
                return(
                    <div className="lyric-bunch">
                        <span className="lyric leading">{leadingLyric}</span>
                        <span className="lyric following">{followingLyricArr[i]}</span>
                    </div>
                )
            }})
    }

    render() {
        const {englishLyrics, foreignLyrics, leadingLanguage} = this.props
        
        return(
            <div className="display-lyrics">
                {this.getLyricBunches(englishLyrics, foreignLyrics, leadingLanguage)}
            </div>
        )
    }
}

export default DisplayLyrics;
