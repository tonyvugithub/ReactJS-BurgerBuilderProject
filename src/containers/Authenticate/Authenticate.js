import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "./Authenticate.module.css";
import * as actions from "../../store/actions/index";
import { updateObject, checkValidity } from '../../shared/utility';

class Authenticate extends Component {
  state = {
    singinForm: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email Address",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        changedAfterMount: false,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password",
        },
        value: "",
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        changedAfterMount: false,
      },
    },
    isInSignupMode: true,
  };

  componentDidMount() {
    if(!this.props.buildingBurger && this.props.authRedirectPath !== '/'){
      this.props.onSetAuthRedirectPath();
    }
  }

  inputChangeHandler = (event, inputIdentifier) => {
    const updatedForm = updateObject(this.state.singinForm,{
      [inputIdentifier]: updateObject(this.state.singinForm[inputIdentifier],{
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          this.state.singinForm[inputIdentifier].validation
        ),
        changedAfterMount: true,
      })
    });

    this.setState({
      singinForm: updatedForm,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuthenticate(
      this.state.singinForm.email.value,
      this.state.singinForm.password.value,
      this.state.isInSignupMode
    );
  };

  switchAuthModeHandler = () => {
    this.setState((prevState) => {
      return { isInSignupMode: !prevState.isInSignupMode };
    });
  };

  render() {
    const formElementArray = [];
    for (let key in this.state.singinForm) {
      formElementArray.push({
        id: key,
        config: this.state.singinForm[key],
      });
    }

    const form = this.props.loading ? (
      <Spinner />
    ) : (
      formElementArray.map((formElement) => (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          errorMessage={formElement.config.errorMessage}
          shouldValidate={formElement.config.validation}
          isChangedAfterMount={formElement.config.changedAfterMount}
          onchange={(event) => this.inputChangeHandler(event, formElement.id)}
        />
      ))
    );

    const errorMessage = this.props.error ? (
      <p>{this.props.error.message}</p>
    ) : null;

    const authRedirect = this.props.isAuthenticated ?  <Redirect to={this.props.authRedirectPath}/> : null;

    return (
      <div className={classes.Authenticate}>
        {authRedirect}
        {errorMessage}
        <form onSubmit={this.submitHandler}>
          {form}
          <Button btnType="Proceed">
            {this.state.isInSignupMode ? "Signup" : "Signin"}
          </Button>
        </form>
        <Button onclick={this.switchAuthModeHandler} btnType="Cancel">
          Swith to {this.state.isInSignupMode ? "Signin" : "Signup"}
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.authenticate.loading,
    error: state.authenticate.error,
    isAuthenticated: state.authenticate.token !== null,
    buildingBurger: state.burgerBuilder.building,
    authRedirectPath: state.authenticate.authRedirectPath
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthenticate: (email, password, isInSignupMode) =>
      dispatch(actions.authenticate(email, password, isInSignupMode)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Authenticate);
