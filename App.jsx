import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobDetailsPage from "./pages/JobDetailsPage";
import CompanyDashboard from "./pages/CompanyDashboard";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/job/:id" element={<JobDetailsPage />} />
          <Route path="/dashboard" element={<CompanyDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
