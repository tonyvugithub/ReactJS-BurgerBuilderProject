import React from 'react';

import classes from './Order.module.css';

const order = (props) => {
  let ingredients = [];
  for (let ingredientName in props.ingredients){
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientDescription = ingredients.map(i => {
    return <span 
      style={{
        textTransform: 'capitalize',
        display: 'inline-block',
        margin: '0 8px',
        padding: '5px'
      }}
      key={i.name}>{i.name} ({i.amount})</span>
  })
  return (<div className={classes.Order}>
    <p>Ingredients: {ingredientDescription}</p>
    <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
  </div>)
};

export default order;
