import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
      <p>Current Price: ${props.dueTotal}</p>
      {controls.map(ctrl => (
        <BuildControl 
          key={ctrl.label} 
          label={ctrl.label}
          onIncrease={()=>props.handleIncrease(ctrl.type)}
          onDecrease={()=>props.handleDecrease(ctrl.type)}
          disabled={props.btnDisabled[ctrl.type]}/>
      ))}
      <button 
        className={classes.OrderButton} 
        disabled={!props.enableOrderBtn}
        onClick={props.handleOrderBtnClick}
      >{props.isAuthenticated ? 'ORDER NOW' : 'SIGN UP TO ORDER'}</button>
    </div>
);

export default buildControls
