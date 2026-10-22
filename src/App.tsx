import { Route, Routes } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";

import MainLayout from "./app/layouts/MainLayout";
import { CustomersPage } from "./pages/customers";
import { Dashboard } from "./pages/dashboard";
import { DealsPage } from "./pages/deals";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";
import { TasksPage } from "./pages/tasks";
import PrivateRoute from "./routes/private/PrivateRoute";
import PublicRoute from "./routes/public/PublicRoute";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Routes>
        <Route
          element={
            <PrivateRoute>
              {" "}
              <MainLayout />
            </PrivateRoute>
          }
        >
          <Route path="/" element={<Dashboard />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/deals" element={<DealsPage />} />
          <Route path="/tasks" element={<TasksPage />} />
        </Route>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
