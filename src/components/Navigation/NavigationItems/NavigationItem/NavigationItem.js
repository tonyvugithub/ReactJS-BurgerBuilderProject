import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavigationItem.module.css';


const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    {/*NavLink give you active class but css module will create a custom 
    active class which is not active at run time, to solve this you need to 
    use property activeClassname={classes.active}*/}
    <NavLink 
      to={props.link}
      activeClassName={classes.active}
      exact
    >{props.children}</NavLink>
  </li>
);

export default navigationItem
