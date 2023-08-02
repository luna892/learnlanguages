import './App.css';
import SearchBar from './components/SearchBar';
import EmbeddedYouTube from './components/EmbeddedYouTube';
import TranslateText from './components/TranslateText';
import DisplayLyrics from './components/DisplayLyrics';

function App() {

  const sampleLyrics = "Yeah-yeah-yeah-yeah-yeah-yeah, ey\n"+
  "En la guagua se quedó el olor\n"+
  "De tu perfume\n"+
  "Tú ere' una bellaca, yo soy un bellaco\n"+
  "Eso e' lo que no' une\n"+
  "Ella sabe que está buenota\n"

  return (
    <div className="App">

        {<SearchBar 
          placeholder={"Search for a song"}/>}

        {<EmbeddedYouTube
          embedId={"saGYMhApaH8"}/>}

        {<DisplayLyrics
          lyrics={sampleLyrics}/>}

        {<TranslateText
          lyrics={sampleLyrics}/>}

    </div>
  );
}

export default App;
