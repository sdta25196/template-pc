/**
 * ESLint 规则
 *
 * @fixable 表示此配置支持 --fix
 * 
 */

module.exports = {
  "extends": [
    "react-app",
    "react-app/jest"
  ],
  "ignorePatterns": ["src/assets/static/"],
  "rules": {
    "no-undef": 2, // 禁止使用未定义变量
    "no-unused-vars": ['warn', { "args": "none", "varsIgnorePattern": "^_" }], // 不建议声明变量不使用,不检查参数，_开头不检查
    "eqeqeq": 1, // 建议使用全等
    "no-mixed-operators": 0, // 允许||与&&的并行使用
    "max-lines": ["error", { "max": 300, "skipComments": true }], // 最大文件行数设置为300,不包含注释
    "no-eval": "error",  // 禁止使用eval
    "no-var": 1,   // 不建议使用var
    "spaced-comment": ["warn", "always", { "exceptions": ["-", "+"] }], // 建议注释后面必须带一个空格
    "no-multi-spaces": ["warn", { "ignoreEOLComments": true }],         // @fixable 建议不写多余空格
    "no-multiple-empty-lines": ["warn", { "max": 2, "maxEOF": 1 }],     // @fixable 建议空行最多两行
    "semi": ["warn", "never"],  // @fixable 不建议使用分号
    "indent": ["warn", 2, {
      "ignoredNodes": ["TemplateLiteral"],
      "SwitchCase": 1,
      "MemberExpression": 1
    }], // @fixable 建议缩进全部使用2空格
  }
}