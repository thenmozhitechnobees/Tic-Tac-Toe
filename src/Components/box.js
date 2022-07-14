import React from "react";
import "../App.css";

function Box({value, markBox}) {
 return(
    <div className="box" onClick={markBox}>{value}</div>
 )
}

export default Box