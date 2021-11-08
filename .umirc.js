const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

export default {
  publicPath: './',
  hash: true,
  history: {
    type: 'hash',
  },
  // chainWebpack(config, { webpack }) {
  //   config.module
  //   .rule('lint')
  //   .test(/\.(js|jsx|mjs)$/)
  //   .pre()
  //   .include
  //     .add(resolveApp('src'))
  //     .end()

  //     config.merge({
  //       module: {
  //         rule: {
  //           myloader: {
  //             test: /\.(xls|xlsx)$/,
  //             use: [{
  //               loader: 'url-loader',
  //               options: {
  //                 limit: 10,
  //                 name: 'static/media/[name].[ext]',
  //               }
  //             }]
  //           },
  //         }
  //       }
  //     })
  // },
};
