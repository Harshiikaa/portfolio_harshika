import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Layout from './components/Layout';
import { ScrollProvider } from './context/ScrollContext';

const App = () => {
  return (
    <ScrollProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><LandingPage /></Layout>} />
        </Routes>

      </Router>
    </ScrollProvider>

  );
}

export default App;
