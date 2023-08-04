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
    const {options, currentOption} = this.state

    return (
      <div className="App">

        {<Selector
          options={options}
          setCurrentOption={(option) => this.setState({currentOption: option})}/>}

        <div className="youtube-lyrics">
          {<EmbeddedYouTube
            embedId={currentOption ? currentOption.embedId : ''}/>}

          {<DisplayLyrics
            foreignLyrics={currentOption ? currentOption.foreignLyrics : ''}
            englishLyrics={currentOption ? currentOption.englishLyrics : ''}/>}
        </div>

      </div>
    )
  }
}

export default App;
