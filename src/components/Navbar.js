import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">Bank home page</Link>
        <nav>
          <Link to="/login">login</Link>
          <Link to="/signup">signup</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
