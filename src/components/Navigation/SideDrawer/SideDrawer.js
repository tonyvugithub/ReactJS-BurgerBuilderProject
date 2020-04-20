import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

import classes from "./SideDrawer.module.css";

const sideDrawer = (props) => {
  let sideDrawerClasses = [classes.SideDrawer, classes.Close];
  if(props.open) {
    sideDrawerClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={sideDrawerClasses.join(' ')} onClick={props.closed}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthenticated = {props.isAuthenticated} />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;
