import {Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import {Error404} from './pages/Error404'
import {Dashboard} from './pages/Dashboard'
import {Test} from './pages/Test'

/**
 * Manages routes & renders pages
 * @returns {JSX}
 */
function App() {
  return (
    <Routes>
      <Route path="*" element={<Error404 />} />
      <Route path="/" index element={<Home />} />
      <Route path="/test" index element={<Test />} />
      <Route path="/user/:userId" element={<Dashboard />} />
    </Routes>
  );
}

export default App
