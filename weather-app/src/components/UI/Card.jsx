/* eslint-disable react/prop-types */
import classes from "./Card.module.css";
import { motion } from "framer-motion";

function Card(props) {
  const cardClasses = props.className
    ? `${classes.card} ${props.className}`
    : `${classes.card}`;

  return (
    <motion.article
      layout={props.layout}
      layoutId={props.layoutId}
      className={cardClasses}
    >
      {props.children}
    </motion.article>
  );
}

export default Card;
