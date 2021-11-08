import React, { Component } from 'react';
import { Breadcrumb, Button } from 'antd';
import headerImg from './../images/a.jpg';
import './index.less';

// style={{ backgroundImage: `url(${headerImg})` }}
export default class Header extends Component {
  handClick = (e) => {
    this.thisDiv.style.display = 'none';
  };
  render() {
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>当前位置</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">万象网管ol</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">账目明细</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>收入汇总</Breadcrumb.Item>
        </Breadcrumb>
        <div
          ref={(c) => (this.thisDiv = c)}
          id="headerImg"
          style={{ backgroundImage: `url(${headerImg})` }}
        >
          {/* <Carousel autoplay='true' >
            <div className='fistimg'>
              <h3><img src="/Users/stupid/崔斯特/myumiapp/src/pages/bill/components/images/a.jpg" alt="" /></h3>
            </div>
            <div className='secondimg'>
              <h3></h3>
            </div>
            <div className='threeimg'>
              <h3>3</h3>
            </div>
            <div className='fourtimg'>
              <h3>4</h3>
            </div>
          </Carousel>, */}
          <Button className="close" onClick={this.handClick}>
            关闭
          </Button>
        </div>
        <h3>收入汇总</h3>
        <hr />
      </div>
    );
  }
}
