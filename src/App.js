import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {Home} from './components/Home'
import {About} from './components/About'
import {Color} from './components/Color'
import {Word} from './components/Word'
import {Number} from './components/Number'

function App() {

  const hStyle = {
    padding: "5px",
    fontWeight: "bold",
    fontSize: "3rem",
    backgroundColor: "gray"
  } 

  return (
    <BrowserRouter>
      <div className="App">
        <h1 style={hStyle}>Routing Example</h1>
        <Routes>  
          <Route path="/about" element={<About/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/color/:color" element={<Color/>}/>
          <Route path="/word/:word" element={<Word/>}/>
          <Route path="/:word/:color/:color2" element={<Word/>}/>
          <Route path="/number/:number" element={<Number/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
