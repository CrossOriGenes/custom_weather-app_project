import classes from "./SearchBar.module.css";

import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import {BiCurrentLocation} from 'react-icons/bi';

function SearchBar() {

  return (
    <div className={classes["search-section"]}>
      <form>
        <input type="text" placeholder="Search for location" />
        <button type="submit">
          <i>
            <PiMagnifyingGlassDuotone />
          </i>
        </button>
      </form>
      <div className={classes["exact-search"]}>
        <button type="button" className={classes["btn-alt"]}>
            <i><BiCurrentLocation /></i>
        </button>
        <strong>Use Precise location</strong>
      </div>
    </div>
  );
}

export default SearchBar;
