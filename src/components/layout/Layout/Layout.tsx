import { Outlet } from "react-router";
import "./Layout.scss";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div className="main-layout">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
