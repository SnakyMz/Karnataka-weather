import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import City from './components/City';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:cityName" element={<City />} />
      </Routes>
    </div>
  );
}

export default App;
