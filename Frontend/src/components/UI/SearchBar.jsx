/* eslint-disable react/prop-types */
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import { BiCurrentLocation } from "react-icons/bi";
import { stagger, useAnimate } from "framer-motion";
import useInput from "../../hooks/use-input";

import classes from "./SearchBar.module.css";

function SearchBar(props) {
  const [scope, animate] = useAnimate();
  const {
    value: enteredCity,
    hasError: cityInvalid,
    valueChangeHandler: cityNameChangeHandler,
    valueInputBlurHandler: cityNameBlurHandler,
    resetHandler,
  } = useInput((value) => /[0-9]/.test(value));

  let searchBarClasses = `${classes["search-section"]}`;

  const submitHandler = (event) => {
    event.preventDefault();

    if (/[0-9]/.test(enteredCity)) {
      searchBarClasses = `${classes["search-section"]} ${classes.invalid}`;
      animate(
        "form",
        { x: [-10, 0, 10, 0] },
        { type: "spring", duration: 0.2, delay: stagger(0.07) }
      );
      return;
    } else {
      props.onSearch(enteredCity);
      // console.log(enteredCity);
      resetHandler();
    }
  };

  searchBarClasses = cityInvalid
    ? `${classes["search-section"]} ${classes.invalid}`
    : `${classes["search-section"]}`;

  return (
    <div className={searchBarClasses} ref={scope}>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Search for location"
          onChange={cityNameChangeHandler}
          onBlur={cityNameBlurHandler}
          value={enteredCity}
        />
        <button type="submit">
          <i>
            <PiMagnifyingGlassDuotone />
          </i>
        </button>
      </form>
      <div className={classes["exact-search"]}>
        <button type="button" className={classes["btn-alt"]}>
          <i>
            <BiCurrentLocation />
          </i>
        </button>
        <strong>Use Precise location</strong>
      </div>
    </div>
  );
}

export default SearchBar;
