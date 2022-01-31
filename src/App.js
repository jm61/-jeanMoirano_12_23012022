import {Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import {Error404} from './pages/Error404'
import {Dashboard} from './pages/Dashboard'

/**
 * Routes and Pages rendering
 * @returns {JSX}
 */
function App() {
  return (
    <Routes>
      <Route path="*" element={<Error404 />} />
      <Route path="/" index element={<Home />} />
      <Route path="/user/:userId" element={<Dashboard />} />
    </Routes>
  )
}

export default App