import logo from './logo.svg';
import './App.css';

import NavBar from "./components/Navbar"
import LoginPage from "./component/pages/LoginPage"
import SignupPage from "./components/pages/SignupPage"
import ExpenseTablePage from "./components/pages/ExpenseTablePage"
import AddExpensePage from "./components/pages/AddExpensePage"
import DashboardPage from "./components/pages/DashboardPage"
import Footer from "./components/Footer" 

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col h-screen">
        <div>
          <NavBar />
        </div>
        <div className="flex-grow justify-center py-10 px-4 mb-auto">
          <div className="w-full space-y-10">
            <Routes>
              
              <Route path="/home" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              
              {/* <Route
                path="/change_password"
                element={
                  <PrivateRoute>
                    <ChangePasswordPage />
                  </PrivateRoute>
                }
              />
              <Route path="/forgot_password" element={<ForgotPasswordPage />} />
              <Route
                path="/password_reset/:pk/:token"
                element={<PasswordResetPage />}
              /> */}
              
              
              <Route
                path="/expense/add_expense"
                element={
                  <PrivateRoute>
                    <AddExpensePage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/expense/view_expense"
                element={
                  <PrivateRoute>
                    <ExpenseTablePage />
                  </PrivateRoute>
                }
              />
              <Route
                  path="/expense/dashboard"
                  element={
                    <PrivateRoute>
                      <DashboardPage />
                    </PrivateRoute>
                  }
                />

            </Routes>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
