import React from "react";


const Notification = ({ message, type }) => {
  return (
    <div className={type === "success" ? "success" : "error"}>
      {type === "success" ? message : "Error : " + message}
    </div>
  );
};

export default Notification;