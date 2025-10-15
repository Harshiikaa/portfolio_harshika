import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Layout from "./components/Layout";
import { ScrollProvider } from "./context/ScrollContext";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <ScrollProvider>
      <Router>
        <ToastContainer />
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <LandingPage />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </ScrollProvider>
  );
};

export default App;
