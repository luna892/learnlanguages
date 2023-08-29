import React, { useState, useMemo } from 'react';
import Select from 'react-select';
import './App.css';
import EmbeddedYouTube from './components/EmbeddedYouTube';
import DisplayLyrics from './components/DisplayLyrics';
import spanishSongs from './LyricModels/SpanishSongs';

function App() {
  const [leadingLanguage, setLeadingLanguage] = useState('English');
  const [currentOption, setCurrentOption] = useState({});
  const followingLanguage = leadingLanguage === 'English' ? 'Spanish' : 'English';
  const isOptionChosen = Object.keys(currentOption).length !== 0;

  const options = useMemo(() => {
    return spanishSongs.map((spanishSong) => ({
      value: spanishSong.embedId,
      label: `${spanishSong.artist} - ${spanishSong.name}`,
      embedId: spanishSong.embedId,
      foreignLyrics: spanishSong.foreignLyrics,
      englishLyrics: spanishSong.englishLyrics,
    }));
  }, []);

  const handleOptionChange = (option) => {
    setCurrentOption(option);
  };

  const handleLanguageChange = () => {
    setLeadingLanguage(followingLanguage);
  };

  return (
    <div className="App">
      <Select
        className="select-lyrics"
        options={options}
        onChange={handleOptionChange}
        isSearchable={true}
        placeholder="Select or Search for a song"
      />

      {isOptionChosen && (
        <div className="youtube-lyrics">
          <EmbeddedYouTube embedId={currentOption.embedId} />
          <DisplayLyrics
            foreignLyrics={currentOption.foreignLyrics}
            englishLyrics={currentOption.englishLyrics}
            leadingLanguage={leadingLanguage}
          />
          <button className="button" onClick={handleLanguageChange}>
            {`Show ${followingLanguage} First`}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
