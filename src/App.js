import logo from './logo.svg';
import './App.css';
import SearchBar from './components/searchBar'

function App() {

  let keyword = ""

  return (
    <div className="App">
        <SearchBar 
          placeholder={"Search for a song"}
          onChange={(e) => {keyword = e}}
        />
    </div>
  );
}

export default App;
