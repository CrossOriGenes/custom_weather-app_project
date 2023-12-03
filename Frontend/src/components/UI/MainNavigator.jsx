import { NavLink } from "react-router-dom";
import { initialTabs as tabs } from "../../helpers/main-nav-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./MainNavigator.module.css";

function MainNavigator() {
  return (
    <aside>
      <nav>
        <ul className={classes.menuBtns}>
          {tabs.map((item) => (
            <li key={item.text}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                <span>
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                <strong>{item.text}</strong>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default MainNavigator;
