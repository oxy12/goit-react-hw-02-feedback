import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Notifications.module.css';


export default class Notifications extends Component{
  static defaultProps = {
    message: '',
  };
  static propType = {
    message: PropTypes.any.isRequired,
  };

  render() {
    return <h2>{this.props.message}</h2>;
  }
}
