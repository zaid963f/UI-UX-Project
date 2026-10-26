import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import './App.css'

// Only the home page exists for now; every other route renders the 404 page.
function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'

  return path === '/' ? <Home /> : <NotFound />
}

export default App
