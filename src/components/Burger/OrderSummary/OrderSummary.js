import React, { Component } from "react";

import Button from "../../UI/Button/Button";

class orderSummary extends Component {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <React.Fragment>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total: ${this.props.totalDue.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Cancel" onclick={this.props.onOrderCanceled}>
          CANCEL
        </Button>
        <Button btnType="Proceed" onclick={this.props.onOrderProceeded}>
          CONTINUE
        </Button>
      </React.Fragment>
    );
  }
}

export default orderSummary;
