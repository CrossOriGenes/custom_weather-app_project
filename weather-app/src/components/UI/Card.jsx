/* eslint-disable react/prop-types */
import classes from "./Card.module.css";

function Card(props) {
  const cardClasses = props.className
    ? `${classes.card} ${props.className}`
    : `${classes.card}`;

  return <article className={cardClasses}>{props.children}</article>;
}

export default Card;
