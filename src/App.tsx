import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./components/layout/layout";
import Dashboard from "./pages/dashboard/dashboard";


const App: React.FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Dashboard /></Layout>} />
        </Routes>
      </Router>
  );
};
export default App;
