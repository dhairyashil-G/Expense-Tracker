import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";
import NavBar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ShowExpensesPage from "./pages/ShowExpensesPage";
import AddExpensePage from "./pages/AddExpensePage";
import UpdateExpensesPage from "./pages/UpdateExpensePage";
import DashboardPage from "./pages/DashboardPage";
import Footer from "./components/Footer";
import Breadcrumb from "./components/Breadcrumb";

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col h-screen">
        <div><NavBar /></div>
        <div className="flex-grow bg-slate-50 justify-center py-10 px-4 mb-auto">
          <div className="w-full space-y-10">
            <Breadcrumb/>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route
                path="/expenses/add_expenses"
                element={
                  <PrivateRoute>
                    <AddExpensePage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/expenses/show_expenses"
                element={
                  <PrivateRoute>
                    <ShowExpensesPage />
                  </PrivateRoute>
                }
              /> 
              <Route
                path="/expenses/update_expenses/:id"
                element={
                  <PrivateRoute>
                    <UpdateExpensesPage />
                  </PrivateRoute>
                }
              /> 
              <Route
                path="/expenses/dashboard"
                element={
                  <PrivateRoute>
                    <DashboardPage />
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>
        </div>
        <div><Footer /></div>
      </div>
    </AuthProvider>


  );
}

export default App;
