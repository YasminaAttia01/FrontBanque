import { Link } from "react-router-dom";
import { useAuthContext } from "../src/hooks/useAuthContext";

const Navbar = () => {
  const { user } = useAuthContext();

  const handleClick = () => {
    //logout();
  };
  return (
    <header>
      <div className="container">
        <Link to="/">Bank home page</Link>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}

          {!user && (
            <div>
              <Link to="/login">login</Link>
              <Link to="/signup">signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
