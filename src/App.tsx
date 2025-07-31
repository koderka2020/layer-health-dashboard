import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LandingPage from './Components/pages/main-dash/LandingPage';
import FilterDashboard from './Components/pages/filter/FilterDashboard';
import StatsDashboard from './Components/pages/stats/StatsDashboard';
import NotesPage from './Components/pages/filter/NotesPage';
import NotFound from './Components/pages/NotFound';



function App() {
return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/filter" element={<FilterDashboard />} />
        <Route path="/stats" element={<StatsDashboard />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </Router>
)
};

export default App;
