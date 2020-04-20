import React, { Component } from "react";
import {connect} from 'react-redux';
import axiosInstance from "../../axios-orders";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";


export class BurgerBuilder extends Component {
  state = {
    ordering: false,
  };
  componentDidMount() {
    this.props.onInitIngredients();
  }

  updateOrderState = (ingredients) => {
    const numIngredients = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => sum + el, 0);
    return numIngredients > 0;
  };

  orderBtnClickHandler = () => {
    if(this.props.isAuthenticated){
      this.setState({ ordering: true });
    } else {
      this.props.onSetAuthRedirectPath('/checkout');
      this.props.history.push('/authenticate');
    }
  };

  orderCanceledHandler = () => {
    this.setState({ ordering: false });
  };

  //No need for this any more as ingredients now is global we don't need to pass it
  orderProceededHandler = () => {
    this.props.onInitOrder();
    this.props.history.push('/checkout');
  };

  render() {
    const isDisabled = {
      ...this.props.ingredients,
    };
    for (let key in isDisabled) {
      isDisabled[key] = isDisabled[key] <= 0;
    }

    let orderSummary = null;

    let burger = this.props.error ? (
      <p>Ingredients can't be loaded</p>
    ) : (
      <Spinner />
    );

    if (this.props.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            handleIncrease={this.props.onIncreaseIngredient}
            handleDecrease={this.props.onDecreaseIngredient}
            btnDisabled={isDisabled}
            dueTotal={this.props.totalPrice}
            enableOrderBtn={this.updateOrderState(this.props.ingredients)}
            handleOrderBtnClick={this.orderBtnClickHandler}
            isAuthenticated={this.props.isAuthenticated}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ingredients}
          onOrderCanceled={this.orderCanceledHandler}
          onOrderProceeded={this.orderProceededHandler}
          totalDue={this.props.totalPrice}
        />
      );
    }

    return (
      <Aux>
        <Modal
          show={this.state.ordering}
          onBackdropClick={this.orderCanceledHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice.toFixed(2),
    error: state.burgerBuilder.error,
    isAuthenticated : state.authenticate.token !== null
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncreaseIngredient: (ingredientName) =>
      dispatch(actions.increaseIngredient(ingredientName)),
    onDecreaseIngredient: (ingredientName) => 
      dispatch(actions.decreaseIngredient(ingredientName)),
    onInitIngredients: () =>dispatch(actions.initIngredients()),
    onInitOrder: () => dispatch(actions.orderInit()),
    onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axiosInstance));
