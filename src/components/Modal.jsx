import React from "react";
import "../styles/modal.css";

export default function Modal({ show, message, color }) {
  if (show) {
    return (
      <div className="container-modal">
        <div className="inner-container-modal">
          <h1 className="message-modal" style={{ color: color }}>
            {message}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
