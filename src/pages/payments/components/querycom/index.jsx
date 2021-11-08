import React, { Component } from 'react';
import { Select, Input } from 'antd';

const { Option } = Select;
export default class AdvancedQueryComponent extends Component {
  state = {
    changeFont: false, // 添加到5直接红
    searchList: [
      {
        id: 1,
        field: 'principal', // 渲染字段
        condition: 'equal', // 渲染条件
        value: '', // 渲染值
        valueType: 'input', // 用于标识值的渲染类型 select-下拉列表，input-输入框，date-日期组件 textArea - 文本输入框
      },
      {
        id: 2,
        field: 'operationType',
        condition: 'equal',
        value: 'all',
        valueType: 'select',
      },
    ],
    mapping: {
      // 映射列表
      operationType: 'select',
      carType: 'select',
      carNumber: 'input',
      cashierEndl: 'input',
      principal: 'input',
    },
    firstLists: [
      // 字段列表
      { id: 1, value: 'principal', label: '本金' },
      { id: 2, value: 'carNumber', label: '卡号' },
      { id: 3, value: 'operationType', label: '操作类型' },
      { id: 4, value: 'cashierEndl', label: '收银端' },
      { id: 5, value: 'carType', label: '卡类型' },
    ],
    conditions: {
      // 条件列表
      carType: [
        { id: 1, value: 'equal', label: '等于1' },
        { id: 2, value: 'noequal', label: '不等于' },
        { id: 3, value: 'mroeAnd', label: '大于等于' },
        { id: 4, value: 'smallAnd', label: '小于等于' },
      ],
      carNumber: [
        { id: 1, value: 'equal', label: '等于2' },
        { id: 2, value: 'noequal', label: '不等于' },
      ],
      operationType: [
        { id: 1, value: 'equal', label: '等于3' },
        { id: 2, value: 'noequal', label: '不等于' },
      ],
      cashierEndl: [
        { id: 1, value: 'equal', label: '等于4' },
        { id: 2, value: 'noequal', label: '不等于' },
      ],
      principal: [
        { id: 1, value: 'equal', label: '等于5' },
        { id: 2, value: 'noequal', label: '不等于' },
        { id: 3, value: 'mroe', label: '大于' },
        { id: 4, value: 'small', label: '小于' },
      ],
    },
    values: {
      // 值列表
      carType: [
        { id: 1, value: 'all', label: '不限' },
        { id: 2, value: 'membership', label: '会员卡' },
        { id: 3, value: 'temporary', label: '临时卡' },
      ],
      carNumber: null,
      operationType: [
        { id: 1, value: 'all', label: '不限' },
        { id: 2, value: 'opendCar', label: '开卡加本金' },
        { id: 3, value: 'addPrincipal', label: '加本金' },
        { id: 4, value: 'rewardAdd', label: '加奖励' },
        { id: 5, value: 'AddDeposit', label: '加押金' },
        { id: 6, value: 'zero', label: '找零' },
      ],
      cashierEndl: null,
      principal: null,
    },
  };
  handleChange = (ele, id) => {
    //字段部分的chang
    const { searchList, mapping, conditions, values } = this.state;
    const currItem = searchList.find((i) => i.id === id);
    const type = mapping[ele];
    const a = {
      cat: {
        name: '111',
      },
    };
    console.log('====== test ', a.dog?.name);
    Object.assign(currItem, {
      field: ele,
      valueType: type,
      condition: conditions[ele][0].value, // 渲染条件初始值
      value: values[ele][0].value,
      value: type === 'input' ? '' : values[ele][0].value, // 渲染值的初始值
    });
    this.setState({
      searchList: [...searchList],
    });
  };
  handleConditionsChange = () => {
    // 条件部分的chang
  };
  handleValueChange = () => {
    // 值部分的chang
  };
  addSearch = (ele) => {
    // 添加一个查询的字段
    const { searchList } = this.state;
    let newsearchList = [...searchList];
    let flag = false;
    if (searchList.length === 5) {
      flag = true;
    } else {
      const newObj = {
        id: Math.random(),
        field: 'principal', // 渲染字段
        condition: 'equal', // 渲染条件
        value: '', // 渲染值
        valueType: '', //用于标识值的渲染类型
      };
      newsearchList = [...newsearchList, newObj];
    }
    this.setState({
      searchList: [...newsearchList],
      changeFont: flag,
    });
  };
  onDeleteChange = (id) => {
    // 删除一个查询字段
    const { searchList } = this.state;
    const newsearchList = searchList.filter((i) => i.id !== id);
    this.setState({
      searchList: [...newsearchList],
      changeFont: false,
    });
  };

  noshowAdvancedQueryClick = () => {
    //点击后返回标准查询
    const { noshowAdvancedQuery } = this.props;
    noshowAdvancedQuery(false);
  };

  render() {
    const { searchList, firstLists, conditions, values, changeFont } =
      this.state;

    return (
      <>
        {searchList.map((obj) => {
          return (
            <div key={obj.id}>
              <span>字段： </span>
              <Select
                defaultValue={obj.field}
                style={{ width: 120 }}
                onChange={(value) => this.handleChange(value, obj.id)}
              >
                {firstLists.map((item) => {
                  return (
                    <Option key={item.id} value={item.value}>
                      {item.label}
                    </Option>
                  );
                })}
              </Select>
              <span>条件： </span>
              <Select
                defaultValue={obj.condition}
                style={{ width: 120 }}
                onChange={this.handleConditionsChange}
              >
                {conditions[obj.field].map((item) => (
                  <Option key={item.id} value={item.value}>
                    {item.label}
                  </Option>
                ))}
              </Select>
              <span>值： </span>
              {obj.valueType === 'select' ? (
                <Select
                  defaultValue={obj.value}
                  style={{ width: 200 }}
                  onChange={this.handleValueChange}
                >
                  {values[obj.field].map((item) => (
                    <Option key={item.id} value={item.value}>
                      {' '}
                      {item.label}{' '}
                    </Option>
                  ))}
                </Select>
              ) : (
                <Input style={{ width: '200px' }} placeholder="请输入值" />
              )}
              <a
                style={{
                  display: searchList.length === 1 ? 'none' : '',
                  marginLeft: '20px',
                }}
                onClick={() => this.onDeleteChange(obj.id)}
              >
                删除
              </a>
            </div>
          );
        })}
        <div className="addAndRenturn">
          <a
            style={{ color: changeFont ? 'red' : '' }}
            onClick={this.addSearch}
          >
            {changeFont
              ? '添加一个查询字段（最多添加5个）'
              : '添加一个查询字段'}{' '}
          </a>
          <a onClick={this.noshowAdvancedQueryClick}>返回标准查询</a>
        </div>
      </>
    );
  }
}
