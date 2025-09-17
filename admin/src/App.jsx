import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import AddItem from "./pages/Add/Add";
import Navbar from "./components/Navbar/Navbar";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import List from "./pages/List/List";
function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar />
    <div className="app-content">
      <Sidebar />
      <Routes>
        <Route path="/add" element={<AddItem />} />
        <Route path="/list" element={<List />} />
        <Route path="/orders" element={<div>Orders page</div>} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
