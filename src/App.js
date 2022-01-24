import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home';

/**
 * Manages routes & renders pages
 * @returns {JSX}
 */
function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
    </Routes>
  );
}

export default App;
