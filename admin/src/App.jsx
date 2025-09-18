import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import AddItem from "./pages/Add/Add";
import Navbar from "./components/Navbar/Navbar";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import List from "./pages/List/List";
import './App.css'; // Thêm file CSS cho App component

function App() {
  return (
    <div className="app-container">
      <ToastContainer />
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="page-content">
          <Routes>
            <Route path="/add" element={<AddItem />} />
            <Route path="/list" element={<List />} />
            <Route path="/orders" element={<div className="page-container">Orders page</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;