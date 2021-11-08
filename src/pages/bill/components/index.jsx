import React, { Component } from 'react';
import Header from './header';
import Content from './body';
import Footer from './foot';

export default class Index extends Component {
  render() {
    const { num } = this.props;
    return (
      <div style={{ padding: '16px' }}>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}
