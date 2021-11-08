import React, { Component } from 'react';
import { Checkbox } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import './index.less';

export default class MultiCheck extends Component {
  state = {
    showSelectListDiv: false, //是否展示下面的div
  };
  onMouseOutDiv = () => {
    //鼠标离开div
    this.setState({ showSelectListDiv: false });
  };
  onMouseOverDiv = () => {
    //鼠标到div
    this.setState({ showSelectListDiv: true });
  };
  onFeeChangeDiv = (e, pre) => {
    const { options, selectedKeys, ChangeSetState, name } = this.props;
    let arr = [...selectedKeys];
    if (e.target.checked) {
      if (pre.id === 1) {
        arr = options.map((obj) => obj.key);
      } else {
        arr = [...arr, pre.key];
      }
      if (arr.length === options.length - 1) {
        arr.push(options[0].key);
      }
    } else {
      if (pre.id === 1) {
        arr = [];
      } else {
        arr = arr.filter((i) => i !== pre.key && i !== 'checkall');
      }
    }
    ChangeSetState(name, arr);
  };

  render() {
    const { showSelectListDiv } = this.state;
    const { options, selectedKeys, name, title } = this.props;
    return (
      <>
        <div
          onMouseOut={this.onMouseOutDiv}
          onMouseOver={this.onMouseOverDiv}
          className="boxWrapperAll"
        >
          <div style={{ marginRight: '20px' }}>
            {title}{' '}
            {showSelectListDiv ? (
              <CaretUpOutlined style={{ color: '#333' }} />
            ) : (
              <CaretDownOutlined style={{ color: '#333' }} />
            )}
          </div>
          <ul
            style={{
              display: `${showSelectListDiv ? 'block' : 'none'}`,
              border: 'solid 1px rgb(233,233,233)',
            }}
          >
            {options.map((item) => {
              // const curRecord = selectedKeys.find(i => i === item.key);
              // console.log('=== curRecord ', curRecord);
              return (
                <li key={item.id}>
                  <Checkbox
                    checked={selectedKeys.includes(item.key)}
                    onChange={(e) => this.onFeeChangeDiv(e, item)}
                  >
                    {item.value}
                  </Checkbox>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}
