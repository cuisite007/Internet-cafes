import React, { Component } from 'react';
import './index.less';

export default class Footer extends Component {
  render() {
    return (
      <div className="footContent">
        <div className="result_header">
          <table>
            <tbody>
              <tr>
                <th>总收入</th>
                <th></th>
                <th>收入</th>
                <th></th>
                <th>支出</th>
              </tr>
              <tr>
                <td>1429.00</td>
                <td>=</td>
                <td>1429.00</td>
                <td>-</td>
                <td>0.00</td>
              </tr>
            </tbody>
          </table>
          <div className="right_header">
            <ul>
              <li>
                <a>圆</a>
              </li>
              <li>
                <a>表格</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bodyContent">aaa</div>
      </div>
    );
  }
}
