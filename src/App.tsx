import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LandingPage from './Components/Pages/LandingPage/LandingPage';
import FilterDashboard from './Components/Pages/FilterPage/FilterDashboard';
import StatsDashboard from './Components/Pages/StatsPage/StatsDashboard';
import NotesPage from './Components/Pages/FilterPage/NotesPage';
import NotFound from './Components/Pages/NotFound';



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
