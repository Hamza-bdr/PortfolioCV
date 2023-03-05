import '../App.css';
import CV from './CV';
import Home from './Home';
import Contact from './Contact';
import NoPage from './NoPage';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router basename='/portfolio'>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<CV />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
