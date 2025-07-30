import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './components/pages/main-dash/LandingPage'
import FilterDashboard from './components/pages/filter/FilterDashboard'
import StatsDashboard from './components/pages/stats/StatsDashboard'
import NotFound from './components/pages/NotFound'



function App() {

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-grow">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<LandingPage />} />
        <Route path="/filter" element={<FilterDashboard />} />
        <Route path="/stats" element={<StatsDashboard />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </main>
      <Footer/>
      </div>
    </Router>
  )
}

export default App
