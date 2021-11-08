import React, { Component } from 'react';
import { DatePicker, Space, Divider, Checkbox } from 'antd';
import './index.less';

export default class SelectAll extends Component {
  state = {
    indeterminate: false, //控制全选按钮的样式
    checkAll: true, // 控制是否被全部选择中
  };
  onCheckAllChange = () => {};
  handlChange = () => {};
  render() {
    const { indeterminate, checkAll } = this.state;

    return (
      <div className="internetfeeAllboxs">
        <span style={{ fontSize: 20, fontWeight: 700 }}>分类：</span>
        <Checkbox
          className="checkAllboxs"
          indeterminate={indeterminate}
          onChange={this.onCheckAllChange}
          checked={checkAll}
        >
          不限
        </Checkbox>
      </div>
    );
  }
}
