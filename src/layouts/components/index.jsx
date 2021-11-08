import React from 'react';
import { Layout, Menu, ConfigProvider, message } from 'antd';
import { Link } from 'dva/router';
import 'antd/dist/antd.less';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
// import './assets/styles/global.less';

const { SubMenu } = Menu;
const { Header, Sider } = Layout;
moment.locale('zh-cn');

export default (props) => {
  const {
    children,
    selectedKeys,
    actions: { stateWillUpdate },
    location,
  } = props;
  const handleMenuSelect = (selected) =>
    stateWillUpdate({ selectedKeys: selected.selectedKeys });
  return (
    <ConfigProvider locale={zhCN}>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">网吧管家</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              selectedKeys={selectedKeys}
              openKeys={['sub1', 'sub2']}
              onSelect={handleMenuSelect}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" title={<span>账目明细 </span>}>
                <Menu.Item key="/">
                  <Link to="/">首页</Link>
                </Menu.Item>
                <Menu.Item key="/bill">
                  <Link to="/bill">收入汇总</Link>
                </Menu.Item>
                <Menu.Item key="/details">
                  <Link to="/details">交班明细</Link>
                </Menu.Item>
                <Menu.Item key="/payments">
                  <Link to="/payments">网吧收支</Link>
                </Menu.Item>
                <Menu.Item key="/breakdowns">
                  <Link to="/breakdowns">上机明细</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span>经营分析</span>}>
                {/* <Menu.Item key="/IncomeAnalysi">
                  <Link to="/IncomeAnalysis">收入分析</Link>
                </Menu.Item> */}
              </SubMenu>
            </Menu>
          </Sider>
          <Layout
            style={{
              padding: '0 24px 24px',
              margin: 16,
              background: '#fff',
              minHeight: 600,
            }}
          >
            {children}
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};
