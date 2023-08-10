module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    // 'prettier', // 使用 Prettier 插件
    // 'airbnb',
    // 'prettier/react',
    // 'plugin:prettier/recommended',
    'plugin:jest/recommended',
    // 'plugin:unicorn/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    parser: 'babel-eslint',
    ecmaVersion: 'latest',
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    // 'prettier',
    'jest',
    // , 'unicorn'
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [ '.js', '.jsx', '.ts', '.tsx' ],
      },
    },
  },
  overrides: [
    {
      files: [ '**/*.ts', '**/*.tsx' ],
      // 'parser': 'typescript-eslint-parser',
      rules: {
        'no-undef': 'error',
      },
    },
  ],
  rules: {
    indent: [ 'off', 2 ], // 强制使用两个空格缩进
    'linebreak-style': [ 'off', 'unix' ], // 强制使用 UNIX 换行符
    quotes: [ 'error', 'single' ], // 强制使用单引号
    semi: [ 'error', 'always' ], // 强制使用分号
    camelcase: 'error',
    eqeqeq: 'error',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        // 'ts-ignore': 'allow-with-description',
        'ts-ignore': false,
        // 'ts-expect-error': 'allow-with-description',
        'ts-expect-error': false,
        'ts-check': false,
        minimumDescriptionLength: 0,
      },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': {
            message: 'Use object instead.',
            fixWith: 'object',
          },
        },
      },
    ],
    '@typescript-eslint/no-empty-function': [
      'error',
      // , { allow: ['arrowFunctions'] }
    ], // 禁止空函数，但允许箭头函数为空
    '@typescript-eslint/explicit-module-boundary-types': 'error', // 强制在导出函数和类的公共 API 中显式声明类型
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ], // 强制在 TypeScript 中检查未使用的变量
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true },
    ], // 强制在 TypeScript 中检查使用前定义
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    'no-alert': 'error',
    'no-case-declarations': 'error',
    'no-console': 'error',
    'no-const-assign': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-empty-function': 'error',
    'no-empty-pattern': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'error',
    'no-extra-semi': 'error',
    'no-fallthrough': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'error',
    'no-implied-eval': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'no-octal': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-self-assign': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-unexpected-multiline': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-unused-vars': 'error', // 禁止定义未使用的变量
    'no-use-before-define': 'error',
    'no-useless-catch': 'error',
    'no-useless-escape': 'error',
    'no-var': 'error',
    'no-with': 'error',
    'object-shorthand': 'error',
    'one-var': [ 'error', 'never' ],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    radix: 'error',
    'require-await': 'error',
    'require-yield': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    'react-hooks/exhaustive-deps': 'error', // 检查 effect 的依赖
    'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
    'react/display-name': 'error', // 禁止在 React 组件定义中丢失 displayName
    'react/jsx-key': 'error', // 在数组或迭代器中验证 JSX 具有 key 属性
    'react/jsx-no-comment-textnodes': 'error', // 防止在注释中使用 JSX
    'react/jsx-no-duplicate-props': 'error', // 防止在 JSX 中重复的 props
    'react/jsx-no-target-blank': 'error', // 防止使用未知的 target='_blank' 属性
    'react/jsx-no-undef': 'error', // 在 JSX 中禁止未声明的变量
    'react/jsx-uses-react': 'error', // 防止 React 被错误地标记为未使用
    'react/jsx-uses-vars': 'error', // 防止在 JSX 中使用的变量被错误地标记为未使用
    'react/no-children-prop': 'error', // 防止将 children 作为 prop 传递
    'react/no-danger-with-children': 'error', // 防止在使用 dangerouslySetInnerHTML 时使用 children
    'react/prop-types': 'error', // 禁用对 PropTypes 的检查，推荐使用 TypeScript 的类型检查代替
    'react/react-in-jsx-scope': 'error', // 使用 JSX 时防止丢失 React
    'react/require-render-return': 'error', // 强制 ES5 或类组件返回值
    'react/self-closing-comp': 'error', // 防止没有 children 的组件的额外结束标签
    'react/style-prop-object': 'error', // 禁止在 style 属性中使用未经转义的实体字符
    'react/jsx-boolean-value': 'error', // 在 JSX 中强制布尔属性符号
    'react/jsx-closing-bracket-location': 'off', // 在自动关闭的 JSX 元素前强制换行
    'react/jsx-closing-tag-location': 'off', // 在 JSX 中强制布尔属性符号
    'react/jsx-curly-spacing': 'error', // 在 JSX 属性和表达式中加强或禁止大括号内的空格。
    'react/jsx-equals-spacing': 'error', // 在 JSX 属性中强制或禁止等号周围的空格
    'react/jsx-first-prop-new-line': 'error', // 在多行 JSX 元素的第一个属性之前强制换行
    'react/jsx-indent': 'off', // 验证 JSX 缩进
    'react/jsx-indent-props': 'off', // 验证 props 缩进
    'react/jsx-max-props-per-line': 'error', // 限制每行中的 props 的最大数量
    'react/jsx-no-bind': 'off', // 防止在 JSX 中使用箭头函数和 bind
    'react/jsx-no-literals': 'off', // 防止使用未包装的 JSX 字符串
    'react/jsx-pascal-case': 'error', // 为用户定义的 JSX 组件强制使用 PascalCase
    'react/jsx-tag-spacing': 'error', // 验证 JSX 中的空格
    'react/jsx-wrap-multilines': 'error', // 防止在 JSX 中多行表达式周围缺少括号
    'react/no-danger': 'error', // 防止使用危险的 JSX 属性
    'react/no-did-mount-set-state': 'error', // 防止在 componentDidMount 中使用 setState
    'react/no-did-update-set-state': 'error', // 防止在 componentDidUpdate 中使用 setState
    'react/no-direct-mutation-state': 'error', // 防止 this.state 的直接变异
    'react/no-multi-comp': 'error', // 防止每个文件有多个组件定义
    'react/no-set-state': 'error', // 防止使用 setState
    'react/no-unknown-property': 'error', // 防止使用未知的 DOM 属性
    'react/prefer-es6-class': 'error', // 为 React 组件强制执行 ES5 或 ES6 类
    minimumDescriptionLength: 0, // 设置最小描述长度为 0
    '@typescript-eslint/explicit-function-return-type': 'error', // 考虑对对象字面量和函数返回类型使用显式注释，即使它们可以被推断出来。
    'react/boolean-prop-naming': 'error',
    'react/button-has-type': 'error',
    'react/default-props-match-prop-types': 'error',
    'react/destructuring-assignment': 'error',
    'react/forbid-component-props': 'error',
    'react/forbid-dom-props': 'error',
    'react/forbid-elements': 'error',
    'react/forbid-foreign-prop-types': 'error',
    'react/forbid-prop-types': 'error',
    'react/function-component-definition': 'error',
    'react/hook-use-state': 'error',
    'react/iframe-missing-sandbox': 'error',
    'react/jsx-child-element-spacing': 'error',
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-curly-newline': 'error',
    'react/jsx-filename-extension': 'off',
    'react/jsx-fragments': 'error',
    'react/jsx-handler-names': 'error',
    'react/jsx-max-depth': 'error',
    'react/jsx-newline': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-leaked-render': 'error',
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-one-expression-per-line': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-props-no-spreading': 'error',
    'react/jsx-sort-default-props': 'error',
    'react/jsx-sort-props': 'error',
    'react/jsx-space-before-closing': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-adjacent-inline-elements': 'error',
    'react/no-array-index-key': 'error',
    'react/no-arrow-function-lifecycle': 'error',
    'react/no-deprecated': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-invalid-html-attribute': 'error',
    'react/no-is-mounted': 'error',
    'react/no-namespace': 'error',
    'react/no-object-type-as-default-prop': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unsafe': 'error',
    'react/no-unstable-nested-components': 'error',
    'react/no-unused-class-component-methods': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-exact-props': 'error',
    'react/prefer-read-only-props': 'error',
    'react/prefer-stateless-function': 'error',
    'react/require-default-props': 'error',
    'react/require-optimization': 'error',
    'react/sort-comp': 'error',
    'react/sort-default-props': 'error',
    'react/sort-prop-types': 'error',
    'react/state-in-constructor': 'error',
    'react/static-property-placement': 'error',
    'react/void-dom-elements-no-children': 'error',
    'for-direction': 'error',
  },
};
    // "quotes": [2, "single"], //单引号
    // "no-console": 0, //不禁用console
    // "no-debugger": 2, //禁用debugger
    // "no-var": 0, //对var警告
    // "semi": 0, //不强制使用分号
    // "no-irregular-whitespace": 0, //不规则的空白不允许
    // "no-trailing-spaces": 1, //一行结束后面有空格就发出警告
    // "eol-last": 0, //文件以单一的换行符结束
    // "no-unused-vars": [2, {"vars": "all", "args": "after-used"}], //不能有声明后未被使用的变量或参数
    // "no-underscore-dangle": 0, //标识符不能以_开头或结尾
    // "no-alert": 2, //禁止使用alert confirm prompt
    // "no-lone-blocks": 0, //禁止不必要的嵌套块
    // "no-class-assign": 2, //禁止给类赋值
    // "no-cond-assign": 2, //禁止在条件表达式中使用赋值语句
    // "no-const-assign": 2, //禁止修改const声明的变量
    // "no-delete-var": 2, //不能对var声明的变量使用delete操作符
    // "no-dupe-keys": 2, //在创建对象字面量时不允许键重复
    // "no-duplicate-case": 2, //switch中的case标签不能重复
    // "no-dupe-args": 2, //函数参数不能重复
    // "no-empty": 2, //块语句中的内容不能为空
    // "no-func-assign": 2, //禁止重复的函数声明
    // "no-invalid-this": 0, //禁止无效的this，只能用在构造器，类，对象字面量
    // "no-redeclare": 2, //禁止重复声明变量
    // "no-spaced-func": 2, //函数调用时 函数名与()之间不能有空格
    // "no-this-before-super": 0, //在调用super()之前不能使用this或super
    // "no-undef": 2, //不能有未定义的变量
    // "no-use-before-define": 2, //未定义前不能使用
    // "camelcase": 0, //强制驼峰法命名
    // "jsx-quotes": [2, "prefer-double"], //强制在JSX属性（jsx-quotes）中一致使用双引号
    // "react/display-name": 0, //防止在React组件定义中丢失displayName
    // "react/forbid-prop-types": [2, {"forbid": ["any"]}], //禁止某些propTypes
    // "react/jsx-boolean-value": 2, //在JSX中强制布尔属性符号
    // "react/jsx-closing-bracket-location": 1, //在JSX中验证右括号位置
    // "react/jsx-curly-spacing": [2, {"when": "never", "children": true}], //在JSX属性和表达式中加强或禁止大括号内的空格。
    // "react/jsx-indent-props": [2, 4], //验证JSX中的props缩进
    // "react/jsx-key": 2, //在数组或迭代器中验证JSX具有key属性
    // "react/jsx-max-props-per-line": [1, {"maximum": 1}], // 限制JSX中单行上的props的最大数量
    // "react/jsx-no-bind": 0, //JSX中不允许使用箭头函数和bind
    // "react/jsx-no-duplicate-props": 2, //防止在JSX中重复的props
    // "react/jsx-no-literals": 0, //防止使用未包装的JSX字符串
    // "react/jsx-no-undef": 1, //在JSX中禁止未声明的变量
    // "react/jsx-pascal-case": 0, //为用户定义的JSX组件强制使用PascalCase
    // "react/jsx-sort-props": 2, //强化props按字母排序
    // "react/jsx-uses-react": 1, //防止反应被错误地标记为未使用
    // "react/jsx-uses-vars": 2, //防止在JSX中使用的变量被错误地标记为未使用
    // "react/no-danger": 0, //防止使用危险的JSX属性
    // "react/no-did-mount-set-state": 0, //防止在componentDidMount中使用setState
    // "react/no-did-update-set-state": 1, //防止在componentDidUpdate中使用setState
    // "react/no-direct-mutation-state": 2, //防止this.state的直接变异
    // "react/no-multi-comp": 2, //防止每个文件有多个组件定义
    // "react/no-set-state": 0, //防止使用setState
    // "react/no-unknown-property": 2, //防止使用未知的DOM属性
    // "react/prefer-es6-class": 2, //为React组件强制执行ES5或ES6类
    // "react/prop-types": 0, //防止在React组件定义中丢失props验证
    // "react/react-in-jsx-scope": 2, //使用JSX时防止丢失React
    // "react/self-closing-comp": 0, //防止没有children的组件的额外结束标签
    // "react/sort-comp": 2, //强制组件方法顺序
    // "no-extra-boolean-cast": 0, //禁止不必要的bool转换
    // "react/no-array-index-key": 0, //防止在数组中遍历中使用数组key做索引
    // "react/no-deprecated": 1, //不使用弃用的方法
    // "react/jsx-equals-spacing": 2, //在JSX属性中强制或禁止等号周围的空格
    // "no-unreachable": 1, //不能有无法执行的代码
    // "comma-dangle": 2, //对象字面量项尾不能有逗号
    // "no-mixed-spaces-and-tabs": 0, //禁止混用tab和空格
    // "prefer-arrow-callback": 0, //比较喜欢箭头回调
    // "arrow-parens": 0, //箭头函数用小括号括起来
    // "arrow-spacing": 0 //=>的前/后括号
