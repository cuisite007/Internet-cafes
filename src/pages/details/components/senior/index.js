import React, { Component } from 'react';
import moment from 'moment';
import { Select, Input, DatePicker, Button } from 'antd';
import './index.less';

const { Option } = Select;

export default class Senior extends Component {
  state = {
    // isMoreThan: false,
    searchList: [
      // 查询条件列表
      {
        id: 1,
        field: 'jbr', // 渲染字段
        condition: 'equal', // 渲染条件
        value: 'a', // 渲染值
        valueType: 'select', // 用于标识值的渲染类型 select-下拉列表，input-输入框，date-日期组件 textArea - 文本输入框
      },
      {
        id: 2,
        field: 'time',
        condition: 'moreThan',
        value: moment(),
        valueType: 'date',
      },
    ],
    typeMapping: {
      jbr: 'select',
      time: 'date',
      money: 'input',
      note: 'textArea',
    }, // 字段和valueType的映射关系
    conditionMapping: {
      //条件列表
      jbr: [
        {
          id: 1,
          value: 'equal',
          label: '等于',
        },
        {
          id: 2,
          value: 'notEqual',
          label: '不等于',
        },
      ],
      time: [
        {
          id: 1,
          value: 'moreThan',
          label: '大于',
        },
        {
          id: 2,
          value: 'lessThan',
          label: '小于',
        },
      ],
      money: [
        {
          id: 1,
          value: 'moredThan',
          label: '大d于',
        },
        {
          id: 2,
          value: 'lessdThan',
          label: '小d于',
        },
      ],
      note: [
        {
          id: 1,
          value: 'moreddThan',
          label: '包含',
        },
        {
          id: 2,
          value: 'notddThan',
          label: '不包含',
        },
      ],
    },
    valueMapping: {
      //值列表
      jbr: [
        {
          id: 1,
          value: 'a',
          label: 'A班',
        },
        {
          id: 2,
          value: 'b',
          label: 'B班',
        },
      ],
      time: null,
      money: null,
      note: null,
    },
    fieldList: [
      // 字段列表
      {
        id: 1,
        value: 'jbr',
        label: '交班人',
      },
      {
        id: 2,
        value: 'time',
        label: '交班时间',
      },
      {
        id: 3,
        value: 'money',
        label: '押金',
      },
      {
        id: 4,
        value: 'note',
        label: '备注',
      },
    ],
  };
  onFieldChange = (id) => (value) => {
    const { searchList, typeMapping, conditionMapping } = this.state;
    const currentItem = searchList.find((i) => i.id === id);
    console.log('!!!!!!', id, value);
    Object.assign(currentItem, {
      field: value,
      condition: conditionMapping[value][0].value,
      value: '',
      valueType: typeMapping[value],
    });
    this.setState({
      searchList: [...searchList],
    });
  };
  handlDelete = (ele) => {
    //相应删除按钮的回调
    const { searchList } = this.state;
    const newSearchList = searchList.filter((obj) => obj.id !== ele);
    this.setState({
      searchList: newSearchList,
    });
    this.aConnect.innerText = '添加一个查询字段';
    this.aConnect.style.color = '';
  };
  addToSearch = (event) => {
    // 相应添加一个查询字段的回调
    const { searchList } = this.state;
    if (searchList.length < 5) {
      const newSearch = {
        id: Math.random(),
        field: 'jbr', // 渲染字段
        condition: 'equal', // 渲染条件
        value: 'a', // 渲染值
        valueType: 'select',
      };
      this.setState({
        searchList: [...searchList, newSearch],
      });
    } else {
      event.target.innerText = '添加一个查询字段（最多添加5个字段）';
      event.target.style.color = 'red';
    }
  };
  returnSearch = () => {
    // 相应返回标准查询的回调
    const { onNotShowSearch } = this.props;
    onNotShowSearch();
  };
  onConditionChange = (id, value) => {
    //响应change事件的回调
    console.log('@@@@@', value, id);
    const { searchList, conditionMapping } = this.state;
    const currItem = searchList.find((o) => o.id === id);
    Object.assign(currItem, {
      condition: value,
    });
    this.setState({
      searchList: [...searchList],
    });
  };
  render() {
    const { searchList, fieldList, conditionMapping, valueMapping } =
      this.state;

    return (
      <>
        {searchList.map((item) => (
          <div key={item.id}>
            <span className="subTile">字段：</span>
            <Select
              value={item.field}
              onChange={this.onFieldChange(item.id)}
              style={{ width: 200 }}
            >
              {fieldList.map((ele) => {
                return (
                  <Option key={ele.id} value={ele.value}>
                    {ele.label}
                  </Option>
                );
              })}
            </Select>
            <span>条件：</span>
            <Select
              ref={(c) => (this.handlselect = c)}
              onChange={(value) => this.onConditionChange(item.id, value)}
              value={item.condition}
              style={{ width: 200 }}
            >
              {conditionMapping[item.field].map((ele) => (
                <Option key={ele.id} value={ele.value}>
                  {ele.label}
                </Option>
              ))}
            </Select>
            <span>值：</span>
            {item.valueType === 'select' ? (
              <Select value={item.value} style={{ width: 200 }}>
                {valueMapping[item.field].map((ele) => {
                  return (
                    <Option key={ele.id} value={ele.value}>
                      {ele.label}
                    </Option>
                  );
                })}
              </Select>
            ) : item.valueType === 'input' ? (
              <Input placeholder="请输入数字" style={{ width: 200 }} />
            ) : item.valueType === 'date' ? (
              <DatePicker
                value={item.value}
                style={{ width: 200 }}
                placeholder="选择日期"
              />
            ) : (
              <Input
                value={item.value}
                style={{ width: 200 }}
                placeholder="这是一个文本输入框"
              />
            )}
            <a
              style={{ display: searchList.length === 1 ? 'none' : '' }}
              onClick={() => this.handlDelete(item.id)}
            >
              删除
            </a>
          </div>
        ))}
        <a
          style={{ margin: '0px 10px' }}
          ref={(c) => (this.aConnect = c)}
          onClick={this.addToSearch}
        >
          添加一个查询字段
        </a>
        <Button style={{ margin: '0px 10px' }} type="primary">
          查询
        </Button>
        <a style={{ margin: '0px 10px' }} onClick={this.returnSearch}>
          返回标准查询
        </a>
      </>
    );
  }
}
