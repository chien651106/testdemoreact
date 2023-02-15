import {Routes, Route } from "react-router-dom";
import Admin from "./component/Admin/Admin";
import { ToastContainer, toast } from "react-toastify";
import User from "./component/User/User";
import App from "./App";
import HomePage from "./component/Home/HomePage";
import ManagerUsers from "./component/Admin/content/Manager";
import DashBoard from "./component/Admin/content/Dashbroad";
import Login from "./component/Auth/Login";
import Register from "./component/Auth/Register";
import "react-toastify/dist/ReactToastify.css";

const Layout = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/users" element={<User />} />
          <Route path="/admins" element={<Admin />}>
            <Route index element={<DashBoard />} />
            <Route path="manager-users" element={<ManagerUsers />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false} 
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
export default Layout;
