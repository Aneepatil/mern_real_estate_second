import "./layout.scss";
import { Navbar } from "../../components/Navbar/Navbar";
import {Outlet} from 'react-router-dom'
import HomePage from "../homePage/HomePage";

const Layout = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      
      <div className="content">
        <Outlet/>
      </div>
    </div>
  );
};

export default Layout;
