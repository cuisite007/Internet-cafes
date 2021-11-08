import React, { Component } from 'react';
import { Button, DatePicker, Space, Select } from 'antd';
import AllHeader from '../../../bill/components/images';
import Senior from '../senior';
import FootTable from '../table';
import './index.less';

const { RangePicker } = DatePicker;
const { Option } = Select;
export default class index extends Component {
  state = {
    showMoreSearch: false, // 是否展示高级查询区域
  };

  onChange = (value) => {
    console.log(`selected ${value}`);
  };

  onBlur = () => {
    console.log('blur');
  };

  onFocus = () => {
    console.log('focus');
  };

  onSearch = (val) => {
    console.log('search:', val);
  };
  handClick = () => {
    this.thisDiv.style.display = 'none';
  };

  onShowSearch = () => {
    // 判断是否进入高级查询
    this.setState({ showMoreSearch: true });
  };
  onNotShowSearch = () => {
    this.setState({ showMoreSearch: false });
  };

  render() {
    const { showMoreSearch } = this.state;

    return (
      <div>
        <AllHeader />
        <div className="headerImg" ref={(c) => (this.thisDiv = c)}>
          <Button className="close" onClick={this.handClick}>
            关闭
          </Button>
        </div>
        <div className="headerfoot">
          <span className="subTile">时段: </span>
          <Space direction="vertical" size={6}>
            <RangePicker />
          </Space>
          <div
            className="search"
            style={{ display: showMoreSearch ? 'none' : '' }}
          >
            <span className="subTile">交班人: </span>
            <Select
              showSearch
              style={{ width: 200, margin: '0px 10px' }}
              placeholder="A班"
              optionFilterProp="children"
              onChange={this.onChange}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onSearch={this.onSearch}
            >
              <Option value="jack">A班</Option>
              <Option value="lucy">B班</Option>
              <Option value="tom">Boss</Option>
            </Select>
            <Button style={{ margin: '0px 10px' }} type="primary">
              查询
            </Button>
            <Button type="text" onClick={this.onShowSearch}>
              进入高级查询
            </Button>
          </div>
        </div>
        <div style={{ display: showMoreSearch ? 'block' : 'none' }}>
          <Senior onNotShowSearch={this.onNotShowSearch} />
        </div>
        <hr style={{ marginTop: 20 }} />
        <div className="hrfoot">
          <span>实交合计：1237元，留给下班：0元，总收入</span>
          <Button style={{ float: 'right' }} type="primary">
            导出查询结果
          </Button>
        </div>
        <div className="foottable">
          <FootTable />
        </div>
      </div>
    );
  }
}
