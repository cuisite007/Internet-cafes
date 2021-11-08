import React, { Component } from 'react';
import { Breadcrumb, Input, Button, DatePicker, Space, Select } from 'antd';
import './index.less';

const { RangePicker } = DatePicker;
const { Option } = Select;
export default class Header extends Component {
  handleCarChange = () => {};
  render() {
    return (
      <div>
        <div className="firstHeader">
          <Breadcrumb>
            <Breadcrumb.Item>当前位置</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">万象网管ol</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">账目明细</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>上机明细</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <hr />
        <div>
          <span>时段: </span>
          <Space direction="vertical" size={12}>
            <RangePicker />
          </Space>
          <span>卡类型: </span>
          <Select
            defaultValue="不限"
            style={{ width: 120 }}
            onChange={this.handleCarChange}
          >
            <Option value="all">不限</Option>
            <Option value="hycar">会员卡</Option>
            <Option value="lscar">临时卡</Option>
          </Select>
          <span>卡号: </span>
          <Input
            style={{ width: '200px' }}
            placeholder="请输入卡号后6位或完整卡号"
          />
          <span>电脑: </span>
          <Input style={{ width: '200px' }} placeholder="" />
          <span>上机类型: </span>
          <Select
            defaultValue="不限"
            style={{ width: 120 }}
            onChange={this.handleCarChange}
          >
            <Option value="all">解锁上机</Option>
          </Select>
          <Button type="primary">查询</Button>
          <a>进入高级查询</a>
        </div>
      </div>
    );
  }
}
