// .stylelintrc.js
module.exports = {
  extends: [
     // 通用规范
    'stylelint-config-standard',
    // css 书写顺序规范
    'stylelint-config-rational-order',
    // 覆盖与prettier的冲突
    'stylelint-config-prettier',
  ],
  // 因为一个属性值的设置 导致另一个属性值的设置无效
  plugins: ['stylelint-declaration-block-no-ignored-properties'],
  rules: {},
};
