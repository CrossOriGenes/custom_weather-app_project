/* eslint-disable react/prop-types */
import Card from "./Card";
import CardHeader from "./CardHeader";

import classes from "./WrapperBlock.module.css";

function WrapperBlock(props) {
  return (
    <Card className={classes["wrapper-block"]}>
      <CardHeader caption={props.caption} btnTitle={props.btnTitle} />
      {props.children}
    </Card>
  );
}

export default WrapperBlock;
