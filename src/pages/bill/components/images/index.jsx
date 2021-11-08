import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
export default class AllHeader extends Component {
  state = {
    bill: '收入汇总',
    details: '交班明细',
    payments: '网吧收支',
  };
  render() {
    return (
      <div style={{ backgroundColor: 'rgb(239,239,239)' }}>
        <Breadcrumb>
          <Breadcrumb.Item>当前位置</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">万象网管ol</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">账目明细</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{this.props.details}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}
