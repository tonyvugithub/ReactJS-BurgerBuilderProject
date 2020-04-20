import React, { Component } from 'react';
import {connect} from 'react-redux';

import axiosInstance from '../../axios-orders';
import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {

  componentDidMount(){
    this.props.onFetchOrders(this.props.token, this.props.userId);
  };

  render() {
    let orders = <Spinner/>
    if (!this.props.loading){
      orders = (
        <div>
          {this.props.orders.map(order=>(
            <Order 
              key={order.id}
              ingredients={order.ingredients}
              price={+order.price}/>
          ))}
        </div>
      );
    }
    return orders;
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.authenticate.token,
    userId: state.authenticate.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token,userId)),
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders, axiosInstance));