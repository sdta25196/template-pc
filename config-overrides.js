const path = require("path")
const { override, addWebpackAlias, fixBabelImports } = require("customize-cra")
const VERSION = process.env.VERSION || ""
const DATE = new Date()
const version_flag = `${DATE.getFullYear()}${DATE.getMonth() + 1}${DATE.getDate()}`

const customConfig = () => (config, env) => {
  config.output.filename = `static/js/${version_flag}.[hash].[name].js`
  config.output.chunkFilename = `static/js/${version_flag}.[chunkhash].[name].chunk.js`
  config.plugins[5].options.filename = `static/css/${version_flag}.[chunkhash].[name].css`
  config.plugins[5].options.chunkFilename = `static/css/${version_flag}.[chunkhash].[name].chunk.css`
  return config
}

module.exports = override(
  customConfig(),
  addWebpackAlias({
    ["@"]: path.resolve(__dirname, "src")
  }),
  // antd按需加载
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css",
  })
)