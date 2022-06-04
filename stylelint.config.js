{
  "extends": [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-recommended-vue'
  ],
  rules: {
    'selector-id-pattern': '[a-z_]+',
    'selector-class-pattern': '[a-z\\:-]+',
    'value-keyword-case': [
      'lower',
      {
        camelCaseSvgKeywords: true
      }
    ],
    'property-no-vendor-prefix': [
      true,
      {
        ignoreProperties: ['appearance']
      }
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'responsive', 'screen', 'layer']
      }
    ],
    'declaration-block-trailing-semicolon': null,
    'selector-pseudo-class-no-unknown': null,
    'no-descending-specificity': null
  },
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html'
    }
  ]
}
