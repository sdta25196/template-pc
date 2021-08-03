const path = require("path")
const { override, addWebpackAlias, fixBabelImports } = require("customize-cra")
const VERSION = process.env.VERSION
const DATE = new Date()

const customConfig = () => (config, env) => {
  const path = `${VERSION}_${DATE.getFullYear()}_${DATE.getMonth() + 1}_${DATE.getDate()}`
  config.output.filename = `static/js/${path}.[name].js`
  config.output.chunkFilename = `static/js/${path}.[name].chunk.js`
  config.plugins[5].options.filename = `static/css/${path}.[name].css`
  config.plugins[5].options.chunkFilename = `static/css/${path}.[name].chunk.css`
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