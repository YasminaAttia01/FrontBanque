import { useEffect, useState } from "react";
import { personsImgs } from "../../../../utils/images";
import { navigationLinks } from "../../data/data";
import "../Sidebar/Sidebar.css";
import { useContext } from "react";
import { SidebarContext } from "../../agentDash/context/SidebarContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthContext"; // Update the path accordingly

const Sidebar = () => {
  const [activeLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);
  //ija nkhamou mabathna fin andna variable feha esm l client w données mte3ou lkol? fel user wala token yaati juste role nzidou esmou fel backend

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass("sidebar-change");
    } else {
      setSidebarClass("");
    }
  }, [isSidebarOpen]);

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={personsImgs.person_two} alt="profile image" />
        </div>
        <span className="info-name">dear {user.name}</span>
      </div>

      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((navigationLink) => (
            <li className="nav-item" key={navigationLink.id}>
              <a
                href={navigationLink.path}
                className={`nav-link ${
                  navigationLink.id === activeLinkIdx ? "active" : null
                }`}
              >
                <img
                  src={navigationLink.image}
                  className="nav-link-icon"
                  alt={navigationLink.title}
                />
                <span className="nav-link-text">{navigationLink.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
