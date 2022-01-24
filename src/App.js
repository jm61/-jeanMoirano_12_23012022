import {Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import {Error404} from './pages/Error404';

/**
 * Manages routes & renders pages
 * @returns {JSX}
 */
function App() {
  return (
    <Routes>
      <Route path="*" element={<Error404 />} />
      <Route path="/" index element={<Home />} />
    </Routes>
  );
}

export default App;
