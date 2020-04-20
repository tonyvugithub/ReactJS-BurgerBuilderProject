import React from 'react'
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
  //Object.keys() return an array of keys of the passed object
  let transformedIngredient = Object.keys(props.ingredients)
    //Map through the key array to create an array of ingredient components
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_,index) => { 
        return  <BurgerIngredient key={igKey+index} type={igKey}/>
      });
    })
    //transformedIngredient will look something like [[..],[..],[..,..],[..,..]] (an array of arrays of ingredient components)
    //reduce() to make transformedIngredient into 1 array
    .reduce((arr,el) => {
      return arr.concat(el);
    },[]);
  
  if(transformedIngredient.length === 0) {
    transformedIngredient = <p>There is no ingredients, please add some!</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top'/>
      {transformedIngredient}
      <BurgerIngredient type='bread-bottom'/>
    </div>
  )
}

export default burger;
