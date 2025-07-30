import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './components/pages/main-dash/LandingPage'
import FilterDashboard from './components/pages/filter/FilterDashboard'
import StatsDashboard from './components/pages/stats/StatsDashboard'
import Notes from './components/pages/filter/Notes'
import NotFound from './components/pages/NotFound'



function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/filter" element={<FilterDashboard />} />
        <Route path="/stats" element={<StatsDashboard />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
