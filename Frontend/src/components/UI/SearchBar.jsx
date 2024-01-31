/* eslint-disable react/prop-types */
import { useState } from "react";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import { BiCurrentLocation } from "react-icons/bi";
import { AnimatePresence, stagger, useAnimate } from "framer-motion";
import { Alert, Snackbar } from "@mui/material";
import useInput from "../../hooks/use-input";
import { ConfirmationPopup } from "./ConfirmModal";

import classes from "./SearchBar.module.css";

function SearchBar(props) {
  // const [coordinates, setCoordinates] = useState();
  const [isLocationToggled, setIsLocationToggled] = useState();
  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const {
    value: enteredCity,
    hasError: cityInvalid,
    valueChangeHandler: cityNameChangeHandler,
    valueInputBlurHandler: cityNameBlurHandler,
    resetHandler,
  } = useInput((value) => /[0-9]/.test(value));

  const searchPreciseHandler = () => {
    navigator.geolocation.getCurrentPosition((data) => {
      setIsLocationToggled(false);
      const { latitude, longitude } = data.coords;
      props.onPreciseSearch(latitude, longitude);
      // console.log(latitude, longitude);
    });
  };

  const rejectPermissionHandler = () => {
    setIsLocationToggled(false);
    setOpen(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (/[0-9]/.test(enteredCity) || enteredCity.trim().length <= 1) {
      searchBarClasses = `${classes["search-section"]} ${classes.invalid}`;
      animate(
        "form",
        { x: [-10, 0, 10, 0] },
        { type: "spring", duration: 0.2, delay: stagger(0.07) }
      );
      return;
    } else {
      props.onSearch(enteredCity);
      resetHandler();
    }
  };

  let searchBarClasses = `${classes["search-section"]}`;

  searchBarClasses = cityInvalid
    ? `${classes["search-section"]} ${classes.invalid}`
    : `${classes["search-section"]}`;

  return (
    <>
      <div className={searchBarClasses} ref={scope}>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            id="searchBox"
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
          <button
            type="button"
            className={classes["btn-alt"]}
            onClick={() => setIsLocationToggled(true)}
          >
            <i>
              <BiCurrentLocation />
            </i>
          </button>
          <strong>Use Precise location</strong>
        </div>
      </div>

      <AnimatePresence>
        {isLocationToggled && (
          <ConfirmationPopup
            title="Allow?"
            description="Do you want to allow the browser to access your current location?"
            onAllow={searchPreciseHandler}
            onReject={rejectPermissionHandler}
          />
        )}
      </AnimatePresence>

      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          You declined permission!
        </Alert>
      </Snackbar>
    </>
  );
}

export default SearchBar;
