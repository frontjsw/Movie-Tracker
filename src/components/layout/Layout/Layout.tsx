import { Outlet } from "react-router";
import "./Layout.scss";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
