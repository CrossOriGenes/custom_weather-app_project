/* eslint-disable react/prop-types */
import classes from "./Wrapper.module.css";

function Wrapper(props) {
  return (
    <div style={props.style} className={classes.wrapper}>
      {props.children}
    </div>
  );
}

export default Wrapper;
