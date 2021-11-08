import React, { Component } from 'react';
import { DatePicker, Space, Divider, Checkbox, Input, Button } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import SelectAll from '../selectall';
import _ from 'lodash';
import MultiCheck from '../../../common/multi-check';
import AdvancedQueryComponent from '../querycom';
import './index.less';

const CheckboxGroup = Checkbox.Group;
const plainOptions = ['会员卡', '临时卡', '超级会员卡1', '超级会员卡2'];
export default class Header extends Component {
  state = {
    sanjiao: false, //控制查询统计结果的三角
    indeterminate: false, //控制全选按钮的样式
    checkAll: true, // 控制是否被全部选择中
    originalList: ['会员卡', '临时卡', '超级会员卡1', '超级会员卡2'],
    checkedList: ['会员卡', '临时卡', '超级会员卡1', '超级会员卡2'],
    showSelectList: false,
    selectedKeys: [], //被选择de
    options: [
      { id: 1, value: '全选', key: 'checkall' },
      { id: 2, value: '加本金', key: 'inprincipal' },
      { id: 3, value: '加押金', key: 'deposit' },
      { id: 4, value: '减本金', key: 'deprincipal' },
      { id: 5, value: '找零', key: 'findzero' },
      { id: 6, value: '开卡本金', key: 'opend' },
    ],
    noMoneyKeys: [],
    noMoney: [
      { id: 1, value: '全选', key: 'checkall' },
      { id: 2, value: '售卖收入', key: 'smsr' },
      { id: 3, value: '简喵充值', key: 'jmcz' },
      { id: 4, value: '增收宝', key: 'zsb' },
      { id: 5, value: '微信', key: 'weixin' },
      { id: 6, value: '支付宝', key: 'zhifubao' },
    ],
    trousuiKeys: [],
    trousui: [
      { id: 1, value: '全选', key: 'checkall' },
      { id: 2, value: '营销大师', key: 'yxds' },
    ],
    spendingKeys: [],
    spending: [
      { id: 1, value: '全选', key: 'checkall' },
      { id: 2, value: '微信手续费', key: 'wxsxf1' },
      { id: 3, value: '支付宝手续费', key: 'zfbsxf1' },
      { id: 4, value: '京东手续费', key: 'jdsxf1' },
      { id: 5, value: '其他支出', key: 'qtzc1' },
    ],
    rewardKeys: [],
    reward: [
      { id: 1, value: '全选', key: 'checkall' },
      { id: 2, value: '加奖励', key: 'inreward' },
      { id: 3, value: '退奖励', key: 'dereward' },
      { id: 4, value: '减奖励', key: 'derewardd' },
      { id: 5, value: '简喵订座', key: 'jmdz' },
      { id: 6, value: '积分兑换', key: 'jfdh' },
      { id: 7, value: '网费赠送', key: 'wfzs' },
      { id: 8, value: '桌面奖励', key: 'zmjl' },
    ],
    AdvancedQuery: false, //控制是否展示高级查询
  };

  onCheckAllChange = (ele) => {
    let { checkAll, originalList } = this.state;
    let newArr = [];
    if (!ele.target.checked) {
      newArr = [];
    } else {
      newArr = [...originalList];
    }
    this.setState({
      indeterminate: false,
      checkAll: ele.target.checked,
      checkedList: [...newArr],
    });
  };
  onChange = (ele) => {
    const { checkedList, originalList } = this.state;
    this.setState({
      indeterminate: ele.length !== originalList.length && ele.length,
      checkAll: ele.length === originalList.length,
      checkedList: ele,
    });
  };
  checkAllwf = () => {};

  onMouseOver = (e) => {
    this.setState({
      showSelectList: true,
    });
  };

  onMouseOut = (e) => {
    this.setState({
      showSelectList: false,
    });
  };
  hangdlChangeAll = (e) => {
    const { checkedAll } = this.state;
    this.setState({
      checkedAll: e.target.checked,
    });
  };

  ChangeSetState = (name, arr) => {
    this.setState({
      [`${name}`]: [...arr],
    });
  };

  showAdvancedQuery = () => {
    //点击后是否展示高级查询
    this.setState({
      AdvancedQuery: true,
    });
  };
  noshowAdvancedQuery = (flag) => {
    //点击后返回标准查询
    this.setState({
      AdvancedQuery: flag,
    });
  };
  hangdSanjiao = () => {
    const { sanjiao } = this.state;

    this.setState({
      sanjiao: !sanjiao,
    });
  };

  render() {
    const {
      indeterminate,
      checkAll,
      checkedList,
      sanjiao,
      options,
      selectedKeys,
      trousuiKeys,
      trousui,
      rewardKeys,
      reward,
      noMoney,
      noMoneyKeys,
      spendingKeys,
      spending,
      AdvancedQuery,
    } = this.state;
    return (
      <>
        <div className="massage">
          <div className="firstName">网吧收支</div>
          <div className="secondName">
            根据《中华人民共和国网络安全法》等法规要求，我们将对应用户个人敏感信息做加密显示
          </div>
          <a>导出查询结果</a>
        </div>
        <hr />
        <div className="theader">
          <span style={{ fontSize: 20, fontWeight: 700 }}>时间：</span>
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
        <div style={{ display: AdvancedQuery ? 'none' : 'block' }}>
          <div>
            <span style={{ fontSize: 20, fontWeight: 700 }}>对象：</span>
            <Checkbox
              className="checkAllboxs"
              indeterminate={indeterminate}
              onChange={this.onCheckAllChange}
              checked={checkAll}
            >
              不限
            </Checkbox>
            <CheckboxGroup
              options={plainOptions}
              value={checkedList}
              onChange={this.onChange}
            />
          </div>
          <div className="checkedFeeAndMore">
            <SelectAll />
            <MultiCheck
              title="网费"
              name="selectedKeys"
              options={options}
              selectedKeys={selectedKeys}
              ChangeSetState={this.ChangeSetState}
            />
            <MultiCheck
              title="非现金收入"
              name="noMoneyKeys"
              options={noMoney}
              selectedKeys={noMoneyKeys}
              ChangeSetState={this.ChangeSetState}
            />
            <MultiCheck
              title="第三方厂商"
              name="trousuiKeys"
              options={trousui}
              selectedKeys={trousuiKeys}
              ChangeSetState={this.ChangeSetState}
            />
            <MultiCheck
              title="支出"
              name="spendingKeys"
              options={spending}
              selectedKeys={spendingKeys}
              ChangeSetState={this.ChangeSetState}
            />
            <MultiCheck
              title="奖励"
              name="rewardKeys"
              options={reward}
              selectedKeys={rewardKeys}
              ChangeSetState={this.ChangeSetState}
            />
          </div>
          <div className="inputNum">
            <div>
              <span style={{ fontSize: 20, fontWeight: 700 }}>卡号：</span>
              <Input
                style={{ width: '220px' }}
                placeholder="请输入卡号后6位或完整卡号"
              />
            </div>
            <a onClick={this.showAdvancedQuery}>高级查询</a>
          </div>
          <Button
            style={{ marginLeft: '60px', marginTop: '10px', width: '190px' }}
            type="primary"
          >
            查询
          </Button>
        </div>
        <div style={{ display: AdvancedQuery ? '' : 'none' }}>
          <h1>哎哟喂，被你看到了，怪不好意思的</h1>
          <AdvancedQueryComponent
            noshowAdvancedQuery={this.noshowAdvancedQuery}
          />
        </div>
        <a
          onClick={this.hangdSanjiao}
          style={{ fontSize: '20px', display: 'block', marginTop: '50px' }}
        >
          查询统计结果
          {sanjiao ? (
            <CaretUpOutlined style={{ color: 'skyblue' }} />
          ) : (
            <CaretDownOutlined style={{ color: 'skyblue' }} />
          )}{' '}
        </a>
        <div
          className="resultSearch"
          style={{ display: sanjiao ? '' : 'none' }}
        >
          这是一些统计的数据
        </div>
        <div className="searchTable">这是统计的表格之类</div>
      </>
    );
  }
}
