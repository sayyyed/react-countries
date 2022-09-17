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
      <div className='header'>
        <h3 className='logo'>Countries</h3>
        <div className='search'>
          <div className='search-input-div'>
            <input type="text" placeholder='Search country...' ref={inputElement} onKeyPress={e => e.key === 'Enter' || e.key === 'Return' ? handleSearch() : null} className='search-input'/>
            <img src='search-red-icon.png' alt='search icon' className='search-icon'/>
          </div>
          <button onClick={handleSearch} className='search-btn'>Search</button>
        </div>
      </div>
      <Countries search={searchText}/>
    </div>
  );
}

export default App;
