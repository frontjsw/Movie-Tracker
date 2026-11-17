import { Link } from "react-router";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-inner">
        <h1 className="logo">
          <Link to="/">MOVIE TRACKER</Link>
        </h1>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/watchlist">WatchList</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
