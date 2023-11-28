/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

import classes from "./CardHeader.module.css";

function CardHeader(props) {
  return (
    <header className={classes["card-header"]}>
      <h1>{props.caption}</h1>
      {props.btnTitle && (
        <motion.button
          type="button"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 900 }}
          onClick={props.onClick}
        >
          {props.btnTitle}
        </motion.button>
      )}
    </header>
  );
}

export default CardHeader;
