import './app.css'
import { Countries } from "./components/Countries";
import {useState, useRef } from 'react'

function App() {
  const inputElement = useRef();
  const [searchText, setSearchText] = useState("");
  
  const handleSearch = () => {
    setSearchText(inputElement.current.value)
  }

  return (
    <div className="App">
      <div className='search'>
        <input type="text" ref={inputElement} onKeyPress={e => e.key === 'Enter' || e.key === 'Return' ? handleSearch() : null} className='search-input'/>
        <button onClick={handleSearch} className='search-btn'>Search</button>
      </div>
      <Countries search={searchText}/>
    </div>
  );
}

export default App;
