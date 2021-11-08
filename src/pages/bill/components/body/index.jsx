import React, { Component } from 'react';
import { DatePicker, Space, Divider, Checkbox, Button, Radio } from 'antd';
import './index.less';

const CheckboxGroup = Checkbox.Group;

export default class Content extends Component {
  state = {
    checkAll: false,
    indeterminate: true,
    options: [
      {
        value: 'bill',
        label: '网费',
      },
      {
        value: 'goods',
        label: '商品销售',
      },
      {
        value: 'zsb',
        label: '增收宝',
      },
      {
        value: 'jmsr',
        label: '简喵收入',
      },
      {
        value: 'dsf',
        label: '第三方厂商',
      },
      {
        value: 'wx',
        label: '微信',
      },
      {
        value: 'zfb',
        label: '支付宝',
      },
      {
        value: 'jd',
        label: '京东',
      },
      {
        value: 'qtsr',
        label: '其他收入',
      },
      {
        value: 'wxsxf',
        label: '微信手续费',
      },
      {
        value: 'zfbsxf',
        label: '支付宝手续费',
      },
      {
        value: 'jdsxf',
        label: '京东手续费',
      },
      {
        value: 'spjh',
        label: '商品进货',
      },
      {
        value: 'qtzc',
        label: '其他支出',
      },
    ],
    checkedList: ['goods'],
  };

  onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  onCheckAllChange = (e) => {
    const { options } = this.state;
    const checked = e.target.checked;
    this.setState({
      indeterminate: false,
      checkAll: checked,
      checkedList: checked ? options.map((i) => i.value) : [],
    });
  };

  onCheckboxChange = (values) => {
    const { options } = this.state;
    console.log(!!values.length && values.length !== options.length);
    this.setState({
      checkedList: values,
      checkAll: values.length === options.length,
      // indeterminate: values.length === 0 ? false :
      // values.length === options.length ? false : true,
      indeterminate: !!values.length && values.length !== options.length,
    });
  };

  render() {
    const { checkAll, checkedList, options, indeterminate } = this.state;

    return (
      <div>
        <div className="theader">
          <span style={{ fontSize: 20, fontWeight: 700 }}>统计时间：</span>
          <Space direction="vertical">
            <DatePicker onChange={this.onChange} />
          </Space>
          <span className="zhi">至</span>
          <Space direction="vertical">
            <DatePicker onChange={this.onChange} />
          </Space>
          {/* 这里先用a标签，后面知道路径后用Link */}
          <a>今日</a>
          <Divider type="vertical" />
          <a>本月</a>
          <Divider type="vertical" />
          <a>近3个月</a>
          <Divider type="vertical" />
          <a>近1年</a>
        </div>
        <div className="tbody">
          <span style={{ fontSize: 20, fontWeight: 700 }}>统计方式：</span>
          <Radio.Group name="radiogroup" defaultValue={1}>
            <Radio value={1}>按时段统计</Radio>
            <Radio value={2}>交班统计</Radio>
          </Radio.Group>
        </div>
        <div className="tfoot">
          <span style={{ fontSize: 20, fontWeight: 700 }}>统计项目：</span>
          <div className="checkboxs">
            <Checkbox
              className="checkboxall"
              indeterminate={indeterminate}
              onChange={this.onCheckAllChange}
              checked={checkAll}
            >
              全选
            </Checkbox>
            <CheckboxGroup
              className="checkgroup"
              options={options}
              value={checkedList}
              onChange={this.onCheckboxChange}
            />
            <Button size="middle" type="primary">
              查询
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
