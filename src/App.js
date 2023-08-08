import React from 'react'
import Select from 'react-select';
import './App.css';
import EmbeddedYouTube from './components/EmbeddedYouTube';
import DisplayLyrics from './components/DisplayLyrics';
import spanishSongs from './LyricModels/SpanishSongs';

class App extends React.Component {
  constructor(props) {
    super(props)

    let options = this.getOptions()

    this.state = {
      options: options,
      leadingLanguage: 'English',
      currentOption: {}
    }
  }

  getOptions() {
    let options = []

    for (let i = 0; i < spanishSongs.length; i++) {
      const spanishSong = spanishSongs[i];
      let option = {
        value: spanishSong.embedId,
        label: spanishSong.artist + " - " + spanishSong.name,
        embedId: spanishSong.embedId,
        foreignLyrics: spanishSong.foreignLyrics,
        englishLyrics: spanishSong.englishLyrics
      }

      options.push(option)
    }

    return options
  }

  render() {
    const {options, currentOption, leadingLanguage} = this.state
    const switchLanguages = leadingLanguage === "English" ? "Spanish" : "English"
    const isOptionChosen = Object.keys(currentOption || {}).length !== 0

    return (
      <div className="App">

        <Select className="select-lyrics"
              options={options}
              onChange={(option) => this.setState({currentOption: option})}
              isSearchable={true}
              placeholder={"Select or Search for a song"}
        />

        {isOptionChosen && <div className="youtube-lyrics">
          {<EmbeddedYouTube
            embedId={currentOption.embedId}/>}

          {<DisplayLyrics
            foreignLyrics={currentOption.foreignLyrics}
            englishLyrics={currentOption.englishLyrics}
            leadingLanguage={leadingLanguage}/>}

          <button className="button" onClick={() => {this.setState({leadingLanguage: switchLanguages})}}>
            {"Show " + switchLanguages + " First"}
            </button>
        </div>}

      </div>
    )
  }
}

export default App;
