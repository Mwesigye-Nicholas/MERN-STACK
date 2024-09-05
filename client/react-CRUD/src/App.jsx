import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function App() {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="container mx-auto p-2">
          <Link to="/">
            <h2 className="text-white text-2xl font-bold">MERN CRUD App</h2>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto p-2 h-full">
        <Routes>
          {/* *render at app*/}
          <Route index element={<HomePage />}></Route>
          <Route path="/create" element={<CreatePage />}></Route>
          <Route path="/edit/:id" element={<EditPage />}></Route>
        </Routes>
      </div>
      <ToastContainer/>
    </div>
  );
}
