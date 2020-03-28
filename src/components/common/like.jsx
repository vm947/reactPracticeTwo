import React, { Component } from "react";




const Like = props => {
    let classes = "fa fa-heart";
    if (!props.liked) classes += "-o";
    
    return (
      //-o makes empty, no -o means solid
      //dont' need THIS.props, because props is passed as an argument
      <i
        onClick={props.onClick}
        style={{ cursor: "pointer" }}
        className={classes}
        aria-hidden="true"
      ></i>
    )
}




export default Like;
