import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav'
import Footer from './components/Footer'
import Dashboard from './components/pages/main-dash/Dashboard'
import FilterDashboard from './components/pages/filter/FilterDashboard'
import StatsDashboard from './components/pages/stats/StatsDashboard'


function App() {

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
      <Nav/>
      <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/filter" element={<FilterDashboard />} />
        <Route path="/stats" element={<StatsDashboard />} />
      </Routes>
      </main>
      <Footer/>
      </div>
    </Router>
  )
}

export default App
