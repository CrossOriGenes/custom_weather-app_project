/* eslint-disable react/prop-types */
import { PiQuestionDuotone } from "react-icons/pi";
import Modal from "./Modal";

import classes from "./ConfirmModal.module.css";

export function ConfirmationPopup(props) {
  return (
    <Modal className={classes["prompt-classes"]}>
      <div className={classes["prompt-text"]}>
        <h2>
          <i>
            <PiQuestionDuotone />
          </i>
          <b>{props.title}</b>
        </h2>
        <p>{props.description}</p>
      </div>
      <div className={classes["prompt-actions"]}>
        <button
          type="button"
          className={classes["btn-alt"]}
          onClick={props.onReject}
        >
          No
        </button>
        <button type="button" onClick={props.onAllow}>
          Yes
        </button>
      </div>
    </Modal>
  );
}
