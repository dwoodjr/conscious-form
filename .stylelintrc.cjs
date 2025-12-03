module.exports = {
  extends: ['stylelint-config-recommended'],
  customSyntax: 'postcss',
  rules: {
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'tailwind',
        'apply',
        'variants',
        'responsive',
        'layer',
        'screen',
        'plugin'
      ]
    }]
  }
};
