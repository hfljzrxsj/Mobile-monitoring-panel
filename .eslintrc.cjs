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
    'prettier', // 使用 Prettier 插件
    // 'airbnb',
    // 'prettier/react',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'plugin:unicorn/recommended'
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
  plugins: ['react', 'react-hooks', '@typescript-eslint',"prettier", "jest", "unicorn"],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  "overrides": [
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "parser": "typescript-eslint-parser",
      "rules": {
        "no-undef": "error"
      }
    }
  ],
  rules: {
    indent: ['off', 2], // 强制使用两个空格缩进
    'linebreak-style': ['off', 'unix'], // 强制使用 UNIX 换行符
    quotes: ['error', 'single'], // 强制使用单引号
    semi: ['error', 'always'], // 强制使用分号
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
    '@typescript-eslint/no-empty-function': ['error'
      // , { allow: ['arrowFunctions'] }
    ], // 禁止空函数，但允许箭头函数为空
    '@typescript-eslint/explicit-module-boundary-types': 'error', // 强制在导出函数和类的公共 API 中显式声明类型
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ], // 强制在 TypeScript 中检查未使用的变量
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: true }], // 强制在 TypeScript 中检查使用前定义
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
    'one-var': ['error', 'never'],
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
    // 'react/jsx-indent': 'error', // 验证 JSX 缩进
    // 'react/jsx-indent-props': 'error', // 验证 props 缩进
    'react/jsx-max-props-per-line': 'error', // 限制每行中的 props 的最大数量
    'react/jsx-no-bind': 'off', // 防止在 JSX 中使用箭头函数和 bind
    'react/jsx-no-literals': 'error', // 防止使用未包装的 JSX 字符串
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
  },
};
