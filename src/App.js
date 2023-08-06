import React from 'react'
import './App.css';
import EmbeddedYouTube from './components/EmbeddedYouTube';
import DisplayLyrics from './components/DisplayLyrics';
import Selector from './components/Selector';
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

    return (
      <div className="App">

        {<Selector
          options={options}
          setCurrentOption={(option) => this.setState({currentOption: option})}/>}

        <div className={"youtube-lyrics" + currentOption ? "" : " hidden"}>
          {<EmbeddedYouTube
            embedId={currentOption ? currentOption.embedId : ''}/>}

          {<DisplayLyrics
            foreignLyrics={currentOption ? currentOption.foreignLyrics : ''}
            englishLyrics={currentOption ? currentOption.englishLyrics : ''}
            leadingLanguage={leadingLanguage}/>}

          <button className={"button" + currentOption ? "" : " hidden"} onClick={() => {this.setState({leadingLanguage: switchLanguages})}}>
            {"Show " + switchLanguages + " First"}
            </button>
        </div>

      </div>
    )
  }
}

export default App;
