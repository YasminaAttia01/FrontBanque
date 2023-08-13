import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">Bank home page</Link>
        <nav>
          <link to="/login">Login</link>
          <link to="/signup">Sign Up</link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
