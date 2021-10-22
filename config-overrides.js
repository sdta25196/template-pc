const path = require("path");
const { override, addWebpackAlias, fixBabelImports, addWebpackPlugin, addBabelPlugin } = require("customize-cra");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const UselessFile = require('useless-files-webpack-plugin')
const DATE = new Date()
const version_flag = `${DATE.getFullYear()}${DATE.getMonth() + 1}${DATE.getDate()}`

const customConfig = () => (config, env) => {
  // 修改打包文件配置
  config.output.filename = `static/js/${version_flag}.[hash].[name].js`;
  config.output.chunkFilename = `static/js/${version_flag}.[chunkhash].[name].chunk.js`;
  config.plugins[5].options.filename = `static/css/${version_flag}.[chunkhash].[name].css`;
  config.plugins[5].options.chunkFilename = `static/css/${version_flag}.[chunkhash].[name].chunk.css`;
  return config;
}

module.exports = override(
  customConfig(),
  addWebpackAlias({
    ["@"]: path.resolve(__dirname, "src")
  }),
  process.env.NODE_ENV === 'production' && addWebpackPlugin(new UglifyJsPlugin({
    uglifyOptions: {
      compress: {
        drop_debugger: true,
        drop_console: true
      }
    }
  })),// 生产环境删除日志
  addWebpackPlugin(new UselessFile({
    root: './src', // 扫描目录
    out: './useless-file-list.json',
  })), // 扫描无用文件
  addBabelPlugin(["@babel/plugin-proposal-private-methods", { "loose": true }]), // 开启私有变量
  // antd按需加载
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    libraryDirectory: "es",
    style: "css",
  })
);