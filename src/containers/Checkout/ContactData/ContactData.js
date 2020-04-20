import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import axiosInstance from "../../../axios-orders";
import classes from "./ContactData.module.css";
import Input from "../../../components/UI/Input/Input";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import * as orders from "../../../store/actions/index";
import { updateObject, checkValidity } from '../../../shared/utility';

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 10,
        },
        valid: false,
        changedAfterMount: false,
        errorMessage: null,
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        changedAfterMount: false,
        errorMessage: null,
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "ZIP Code",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        changedAfterMount: false,
        errorMessage: null,
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        changedAfterMount: false,
        errorMessage: null,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your E-Mail",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        changedAfterMount: false,
        errorMessage: null,
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" },
          ],
        },
        value: "",
        validation: {},
      },
    },
    formIsValid: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let formEntry in this.state.orderForm) {
      formData[formEntry] = this.state.orderForm[formEntry].value;
    }

    const order = {
      ingredients: this.props.ingredients,
      //In real life you should calculate the price on the server
      price: this.props.totalPrice,
      orderData: formData,
      userId: this.props.userId
    };

    this.props.onOrderBurger(order, this.props.token);
  };

  inputChangeHandler = (event, inputIdentifier) => {
    //Because each of the property of the order form is an object. This will not deep clone those property
    
    //Thats why we need to deep copy the updated form element and update to the updated order form above
    const updatedFormElement = updateObject(this.state.orderForm[inputIdentifier],{
      value: event.target.value,
      valid: checkValidity(
        event.target.value,
        this.state.orderForm[inputIdentifier].validation
      ),
      changedAfterMount: true
    });
    if (!updatedFormElement.valid) {
      updatedFormElement.errorMessage = `Please enter a valid ${inputIdentifier}!`;
    }
    const updatedOrderForm = updateObject(this.state.orderForm,{
      [inputIdentifier]: updatedFormElement
    })

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      if (updatedOrderForm[inputIdentifier].elementType !== "select") {
        formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
      }
    }
    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
  };

  render() {
    const formElementArray = [];
    for (let key in this.state.orderForm) {
      formElementArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }

    const form = this.props.loading ? (
      <Spinner />
    ) : (
      <form onSubmit={this.orderHandler}>
        {formElementArray.map((formElement) => {
          return (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              invalid={!formElement.config.valid}
              errorMessage={formElement.config.errorMessage}
              shouldValidate={formElement.config.validation}
              isChangedAfterMount={formElement.config.changedAfterMount}
              onchange={(event) =>
                this.inputChangeHandler(event, formElement.id)
              }
            />
          );
        })}
        <Button btnType="Proceed" disabled={!this.state.formIsValid}>
          ORDER
        </Button>
      </form>
    );
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onOrderBurger: (orderData, token) => dispatch(orders.orderBurger(orderData,token)),
  };
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    totalPrice: state.burgerBuilder.totalPrice,
    loading: state.order.loading,
    token: state.authenticate.token,
    userId: state.authenticate.userId
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(ContactData, axiosInstance));
