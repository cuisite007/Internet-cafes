import React, { Component } from 'react';
import AllHeader from '../../bill/components/images/index';
import Header from './header';

export default class index extends Component {
  state = {
    details: '网吧收支',
  };
  render() {
    return (
      <div>
        <AllHeader details={this.state.details} />
        <Header />
      </div>
    );
  }
}
