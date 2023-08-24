/* eslint-disable no-inline-comments */
/* eslint-disable line-comment-position */
/* eslint-disable sort-keys */
module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'es6': true,
    'jest': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',

    // 'prettier',
    // // 使用 Prettier 插件
    // 'airbnb',
    // 'prettier/react',
    // 'plugin:prettier/recommended',
    'plugin:jest/recommended'
    // 'plugin:unicorn/recommended'
  ],
  'overrides': [
    {
      'files': [
        '**/*.ts',
        '**/*.tsx'
      ],
      // 'parser': 'typescript-eslint-parser',
      'rules': {
        'no-undef': 'warn'
      }
    }
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'parser': 'babel-eslint',
    'sourceType': 'module',
    'project': ['./tsconfig.json']
  },
  'plugins': [
    'react',
    'react-hooks',
    '@typescript-eslint',
    // 'prettier',
    'jest'
    // , 'unicorn'
  ],
  'rules': {
    'indent': 'off',
    // 强制使用两个空格缩进 // 强制使用一致的缩进
    'linebreak-style': [
      'off',
      'unix'
    ],
    // 强制使用 UNIX 换行符
    'quotes': [
      'warn',
      'single'
    ],
    // 强制使用单引号
    // '@typescript-eslint/ban-ts-comment': [
    //   'warn',
    //   {
    //     // 'ts-ignore': 'allow-with-description',
    //     'ts-ignore': false,
    //     // 'ts-expect-error': 'allow-with-description',
    //     'ts-expect-error': false,
    //     'ts-check': false,
    //     'minimumDescriptionLength': 0
    //   }
    // ],
    // '@typescript-eslint/ban-types': [
    //   'warn',
    //   {
    //     'types': {
    //       '{}': {
    //         'message': 'Use object instead.',
    //         'fixWith': 'object'
    //       }
    //     }
    //   }
    // ],
    // '@typescript-eslint/no-empty-function': [
    //   'warn'
    //   // , { allow: ['arrowFunctions'] }
    // ],
    // 禁止空函数，但允许箭头函数为空
    // '@typescript-eslint/explicit-module-boundary-types': 'warn',
    // 强制在导出函数和类的公共 API 中显式声明类型
    // '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        'vars': 'all',
        'args': 'after-used',
        'ignoreRestSiblings': false
      }
    ],
    // 强制在 TypeScript 中检查未使用的变量
    // '@typescript-eslint/no-use-before-define': [
    //   'warn',
    //   {
    //     'functions': false,
    //     'classes': true
    //   }
    // ],
    // 强制在 TypeScript 中检查使用前定义
    'for-direction': 'warn',
    // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动
    'getter-return': 'warn',
    // 强制 getter 函数中出现 return 语句
    'no-async-promise-executor': 'warn',
    // 禁止使用异步函数作为 Promise executor
    'no-await-in-loop': 'warn',
    // 禁止在循环中出现 await
    'no-compare-neg-zero': 'warn',
    // 禁止与 -0 进行比较
    'no-cond-assign': 'warn',
    // 禁止条件表达式中出现赋值操作符
    'no-console': 'warn',
    // 禁用 console
    'no-constant-condition': 'warn',
    // 禁止在条件中使用常量表达式
    'no-control-regex': 'warn',
    // 禁止在正则表达式中使用控制字符
    'no-debugger': 'warn',
    // 禁用 debugger
    'no-dupe-args': 'warn',
    // 禁止 function 定义中出现重名参数
    'no-dupe-keys': 'warn',
    // 禁止对象字面量中出现重复的 key
    'no-duplicate-case': 'warn',
    // 禁止出现重复的 case 标签
    'no-empty': 'warn',
    // 禁止出现空语句块
    'no-empty-character-class': 'warn',
    // 禁止在正则表达式中使用空字符集
    'no-ex-assign': 'warn',
    // 禁止对 catch 子句的参数重新赋值
    'no-extra-boolean-cast': 'warn',
    // 禁止不必要的布尔转换
    'no-extra-parens': 'warn',
    // 禁止不必要的括号
    'no-extra-semi': 'warn',
    // 禁止不必要的分号
    'no-func-assign': 'warn',
    // 禁止对 function 声明重新赋值
    'no-inner-declarations': 'warn',
    // 禁止在嵌套的块中出现变量声明或 function 声明
    'no-invalid-regexp': 'warn',
    // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    'no-irregular-whitespace': 'warn',
    // 禁止不规则的空白
    'no-misleading-character-class': 'warn',
    // 不允许在字符类语法中出现由多个代码点组成的字符
    'no-obj-calls': 'warn',
    // 禁止把全局对象作为函数调用
    'no-prototype-builtins': 'warn',
    // 禁止直接调用 Object.prototypes 的内置属性
    'no-regex-spaces': 'warn',
    // 禁止正则表达式字面量中出现多个空格
    'no-sparse-arrays': 'warn',
    // 禁用稀疏数组
    'no-template-curly-in-string': 'warn',
    // 禁止在常规字符串中出现模板字面量占位符语法
    'no-unexpected-multiline': 'warn',
    // 禁止出现令人困惑的多行表达式
    'no-unreachable': 'warn',
    // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'no-unsafe-finally': 'warn',
    // 禁止在 finally 语句块中出现控制流语句
    'no-unsafe-negation': 'warn',
    // 禁止对关系运算符的左操作数使用否定操作符
    'require-atomic-updates': 'warn',
    // 禁止由于 await 或 yield的使用而可能导致出现竞态条件的赋值
    'use-isnan': 'warn',
    // 要求使用 isNaN() 检查 NaN
    'valid-typeof': 'warn',
    // 强制 typeof 表达式与有效的字符串进行比较
    'accessor-pairs': 'warn',
    // 强制 getter 和 setter 在对象中成对出现
    'array-callback-return': 'warn',
    // 强制数组方法的回调函数中有 return 语句
    'block-scoped-var': 'warn',
    // 强制把变量的使用限制在其定义的作用域范围内
    'class-methods-use-this': 'warn',
    // 强制类方法使用 this
    'complexity': 'warn',
    // 指定程序中允许的最大环路复杂度
    'consistent-return': 'warn',
    // 要求 return 语句要么总是指定返回的值，要么不指定
    'curly': 'warn',
    // 强制所有控制语句使用一致的括号风格
    'default-case': 'warn',
    // 要求 switch 语句中有 default 分支
    'dot-location': 'warn',
    // 强制在点号之前和之后一致的换行
    'dot-notation': 'off',
    // 强制尽可能地使用点号
    'eqeqeq': 'warn',
    // 要求使用 === 和 !==
    'guard-for-in': 'warn',
    // 要求 for-in 循环中有一个 if 语句
    'max-classes-per-file': 'warn',
    // 强制每个文件中包含的的类的最大数量
    'no-alert': 'warn',
    // 禁用 alert、confirm 和 prompt
    'no-caller': 'warn',
    // 禁用 arguments.caller 或 arguments.callee
    'no-case-declarations': 'warn',
    // 不允许在 case 子句中使用词法声明
    'no-div-regex': 'warn',
    // 禁止除法操作符显式的出现在正则表达式开始的位置
    'no-else-return': 'warn',
    // 禁止 if 语句中 return 语句之后有 else 块
    'no-empty-function': 'warn',
    // 禁止出现空函数
    'no-empty-pattern': 'warn',
    // 禁止使用空解构模式
    'no-eq-null': 'warn',
    // 禁止在没有类型检查操作符的情况下与 null 进行比较
    'no-eval': 'warn',
    // 禁用 eval()
    'no-extend-native': 'warn',
    // 禁止扩展原生类型
    'no-extra-bind': 'warn',
    // 禁止不必要的 .bind() 调用
    'no-extra-label': 'warn',
    // 禁用不必要的标签
    'no-fallthrough': 'warn',
    // 禁止 case 语句落空
    'no-floating-decimal': 'warn',
    // 禁止数字字面量中使用前导和末尾小数点
    'no-global-assign': 'warn',
    // 禁止对原生对象或只读的全局对象进行赋值
    'no-implicit-coercion': 'warn',
    // 禁止使用短符号进行类型转换
    'no-implicit-globals': 'warn',
    // 禁止在全局范围内使用变量声明和 function 声明
    'no-implied-eval': 'warn',
    // 禁止使用类似 eval() 的方法
    'no-invalid-this': 'warn',
    // 禁止 this 关键字出现在类和类对象之外
    'no-iterator': 'warn',
    // 禁用 __iterator__ 属性
    'no-labels': 'warn',
    // 禁用标签语句
    'no-lone-blocks': 'warn',
    // 禁用不必要的嵌套块
    'no-loop-func': 'warn',
    // 禁止在循环语句中出现包含不安全引用的函数声明
    'no-magic-numbers': 'warn',
    // 禁用魔术数字
    'no-multi-spaces': 'warn',
    // 禁止使用多个空格
    'no-multi-str': 'warn',
    // 禁止使用多行字符串
    'no-new': 'warn',
    // 禁止使用 new 以避免产生副作用
    'no-new-func': 'warn',
    // 禁止对 Function 对象使用 new 操作符
    'no-new-wrappers': 'warn',
    // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-octal': 'warn',
    // 禁用八进制字面量
    'no-octal-escape': 'warn',
    // 禁止在字符串中使用八进制转义序列
    'no-param-reassign': 'warn',
    // 禁止对 function 的参数进行重新赋值
    'no-proto': 'warn',
    // 禁用 __proto__ 属性
    'no-redeclare': 'warn',
    // 禁止多次声明同一变量
    'no-restricted-properties': 'warn',
    // 禁止使用对象的某些属性
    'no-return-assign': 'warn',
    // 禁止在 return 语句中使用赋值语句
    'no-return-await': 'warn',
    // 禁用不必要的 return await
    'no-script-url': 'warn',
    // 禁止使用 javascript: url
    'no-self-assign': 'warn',
    // 禁止自我赋值
    'no-self-compare': 'warn',
    // 禁止自身比较
    'no-sequences': 'warn',
    // 禁用逗号操作符
    'no-throw-literal': 'warn',
    // 禁止抛出异常字面量
    'no-unmodified-loop-condition': 'warn',
    // 禁用一成不变的循环条件
    'no-unused-expressions': 'warn',
    // 禁止出现未使用过的表达式
    'no-unused-labels': 'warn',
    // 禁用出现未使用过的标
    'no-useless-call': 'warn',
    // 禁止不必要的 .call() 和 .apply()
    'no-useless-catch': 'warn',
    // 禁止不必要的 catch 子句
    'no-useless-concat': 'warn',
    // 禁止不必要的字符串字面量或模板字面量的连接
    'no-useless-escape': 'warn',
    // 禁用不必要的转义字符
    'no-useless-return': 'warn',
    // 禁止多余的 return 语句
    'no-void': 'warn',
    // 禁用 void 操作符
    'no-warning-comments': 'warn',
    // 禁止在注释中使用特定的警告术语
    'no-with': 'warn',
    // 禁用 with 语句
    'prefer-named-capture-group': 'warn',
    // 建议在正则表达式中使用命名捕获组
    'prefer-promise-reject-errors': 'warn',
    // 要求使用 Error 对象作为 Promise 拒绝的原因
    'radix': 'warn',
    // 强制在 parseInt() 使用基数参数
    'require-await': 'warn',
    // 禁止使用不带 await 表达式的 async 函数
    'require-unicode-regexp': 'warn',
    // 强制在 RegExp 上使用 u 标志
    'vars-on-top': 'warn',
    // 要求所有的 var 声明出现在它们所在的作用域顶部
    'wrap-iife': 'warn',
    // 要求 IIFE 使用括号括起来
    'yoda': 'warn',
    // 要求或禁止 “Yoda” 条件
    'strict': 'warn',
    // 要求或禁止使用严格模式指令
    'init-declarations': 'warn',
    // 要求或禁止 var 声明中的初始化
    'no-delete-var': 'warn',
    // 禁止删除变量
    'no-label-var': 'warn',
    // 不允许标签与变量同名
    'no-restricted-globals': 'warn',
    // 禁用特定的全局变量
    'no-shadow': 'warn',
    // 禁止变量声明与外层作用域的变量同名
    'no-shadow-restricted-names': 'warn',
    // 禁止将标识符定义为受限的名字
    'no-undef': 'warn',
    // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-undef-init': 'warn',
    // 禁止将变量初始化为 undefined
    'no-undefined': 'warn',
    // 禁止将 undefined 作为标识符
    'no-unused-vars': 'warn', // TODO
    // 禁止出现未使用过的变量
    'no-use-before-define': 'warn',
    // 禁止在变量定义之前使用它们
    'callback-return': 'warn',
    // 强制数组方法的回调函数中有 return 语句
    'global-require': 'warn',
    // 要求 require() 出现在顶层模块作用域中
    'handle-callback-err': 'warn',
    // 要求回调函数中有容错处理
    'no-buffer-constructor': 'warn',
    // 禁用 Buffer() 构造函数
    'no-mixed-requires': 'warn',
    // 禁止混合常规变量声明和 require 调用
    'no-new-require': 'warn',
    // 禁止调用 require 时使用 new 操作符
    'no-path-concat': 'warn',
    // 禁止对 __dirname 和 __filename 进行字符串连接
    'no-process-env': 'warn',
    // 禁用 process.env
    'no-process-exit': 'warn',
    // 禁用 process.exit()
    'no-restricted-modules': 'warn',
    // 禁用通过 require 加载的指定模块
    'no-sync': 'warn',
    // 禁用同步方法
    'array-bracket-newline': 'warn',
    // 在数组开括号后和闭括号前强制换行
    'array-bracket-spacing': 'warn',
    // 强制数组方括号中使用一致的空格
    'array-element-newline': 'warn',
    // 强制数组元素间出现换行
    'block-spacing': 'warn',
    // 禁止或强制在代码块中开括号前和闭括号后有空格
    'brace-style': 'warn',
    // 强制在代码块中使用一致的大括号风格
    'camelcase': 'warn',
    // 强制使用骆驼拼写法命名约定
    'capitalized-comments': 'off',
    // 强制或禁止对注释的第一个字母大写
    'comma-dangle': 'warn',
    // 要求或禁止末尾逗号
    'comma-spacing': 'warn',
    // 强制在逗号前后使用一致的空格
    'comma-style': 'warn',
    // 强制使用一致的逗号风格
    'computed-property-spacing': 'warn',
    // 强制在计算的属性的方括号中使用一致的空格
    'consistent-this': 'warn',
    // 当获取当前执行环境的上下文时，强制使用一致的命名
    'eol-last': 'warn',
    // 要求或禁止文件末尾存在空行
    'func-call-spacing': 'warn',
    // 要求或禁止在函数标识符和其调用之间有空格
    'func-name-matching': 'warn',
    // 要求函数名与赋值给它们的变量名或属性名相匹配
    'func-names': 'warn',
    // 要求或禁止使用命名的 function 表达式
    'func-style': 'warn',
    // 强制一致地使用 function 声明或表达式
    'function-paren-newline': 'off',
    // 强制在函数括号内使用一致的换行
    'id-blacklist': 'warn',
    // 禁用指定的标识符
    'id-length': 'warn',
    // 强制标识符的最小和最大长度
    'id-match': 'warn',
    // 要求标识符匹配一个指定的正则表达式
    'implicit-arrow-linebreak': 'off',
    // 强制隐式返回的箭头函数体的位置
    'jsx-quotes': 'warn',
    // 强制在 JSX 属性中一致地使用双引号或单引号
    'key-spacing': 'warn',
    // 强制在对象字面量的属性中键和值之间使用一致的间距
    'keyword-spacing': 'warn',
    // 强制在关键字前后使用一致的空格
    'line-comment-position': 'warn',
    // 强制行注释的位置
    // 'linebreak-style': 'off',
    // 强制使用一致的换行风格
    'lines-around-comment': 'warn',
    // 要求在注释周围有空行
    'lines-between-class-members': 'warn',
    // 要求或禁止类成员之间出现空行
    'max-depth': 'warn',
    // 强制可嵌套的块的最大深度
    'max-len': 'off', // TODO
    // 强制一行的最大长度
    'max-lines': 'off',
    // 强制最大行数
    'max-lines-per-function': 'off', // TODO
    // 强制函数最大代码行数
    'max-nested-callbacks': 'warn',
    // 强制回调函数最大嵌套深度
    'max-params': 'warn',
    // 强制函数定义中最多允许的参数数量
    'max-statements': 'warn',
    // 强制函数块最多允许的的语句数量
    'max-statements-per-line': 'warn',
    // 强制每一行中所允许的最大语句数量
    'multiline-comment-style': 'off',
    // 强制对多行注释使用特定风格
    'multiline-ternary': 'warn',
    // 要求或禁止在三元操作数中间换行
    'new-cap': 'warn',
    // 要求构造函数首字母大写
    'new-parens': 'warn',
    // 强制或禁止调用无参构造函数时有圆括号
    'newline-per-chained-call': 'off',
    // 要求方法链中每个调用都有一个换行符
    'no-array-constructor': 'warn',
    // 禁用 Array 构造函数
    'no-bitwise': 'off', // TODO
    // 禁用按位运算符
    'no-continue': 'warn',
    // 禁用 continue 语句
    'no-inline-comments': 'warn',
    // 禁止在代码后使用内联注释
    'no-lonely-if': 'warn',
    // 禁止 if 作为唯一的语句出现在 else 语句中
    'no-mixed-operators': 'warn',
    // 禁止混合使用不同的操作符
    'no-mixed-spaces-and-tabs': 'warn',
    // 禁止空格和 tab 的混合缩进
    'no-multi-assign': 'warn',
    // 禁止连续赋值
    'no-multiple-empty-lines': 'warn',
    // 禁止出现多行空行
    'no-negated-condition': 'warn',
    // 禁用否定的表达式
    'no-nested-ternary': 'warn',
    // 禁用嵌套的三元表达式
    'no-new-object': 'warn',
    // 禁用 Object 的构造函数
    'no-plusplus': 'warn',
    // 禁用一元操作符 ++ 和 --
    'no-restricted-syntax': 'warn',
    // 禁用特定的语法
    'no-tabs': 'warn',
    // 禁用 tab
    'no-ternary': 'off', // TODO
    // 禁用三元操作符
    'no-trailing-spaces': 'warn',
    // 禁用行尾空格
    'no-underscore-dangle': 'warn',
    // 禁止标识符中有悬空下划线
    'no-unneeded-ternary': 'warn',
    // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-whitespace-before-property': 'warn',
    // 禁止属性前有空白
    'nonblock-statement-body-position': 'warn',
    // 强制单个语句的位置
    'object-curly-newline': 'warn',
    // 强制大括号内换行符的一致性
    'object-curly-spacing': 'off',
    // 强制在大括号中使用一致的空格
    'object-property-newline': 'warn',
    // 强制将对象的属性放在不同的行上
    'one-var': 'warn',
    // 强制函数中的变量要么一起声明要么分开声明
    'one-var-declaration-per-line': 'warn',
    // 要求或禁止在变量声明周围换行
    'operator-assignment': 'warn',
    // 要求或禁止在可能的情况下使用简化的赋值操作符
    'operator-linebreak': 'warn',
    // 强制操作符使用一致的换行符
    'padded-blocks': 'warn',
    // 要求或禁止块内填充
    'padding-line-between-statements': 'warn',
    // 要求或禁止在语句间填充空行
    'prefer-object-spread': 'warn',
    // 禁止使用以对象字面量作为第一个参数的 Object.assign，优先使用对象扩展。
    'quote-props': 'warn',
    // 要求对象字面量属性名称用引号括起来
    // "quotes": "error",
    // 强制使用一致的反勾号、双引号或单引号
    'semi': [
      'warn',
      'always'
    ],
    // 要求或禁止使用分号代替 ASI
    'semi-spacing': 'warn',
    // 强制分号之前和之后使用一致的空格
    'semi-style': 'warn',
    // 强制分号的位置
    'sort-keys': 'warn',
    // 要求对象属性按序排列
    'sort-vars': 'warn',
    // 要求同一个声明块中的变量按顺序排列
    'space-before-blocks': 'warn',
    // 强制在块之前使用一致的空格
    'space-before-function-paren': 'warn',
    // 强制在 function的左括号之前使用一致的空格
    'space-in-parens': 'warn',
    // 强制在圆括号内使用一致的空格
    'space-infix-ops': 'warn',
    // 要求操作符周围有空格
    'space-unary-ops': 'warn',
    // 强制在一元操作符前后使用一致的空格
    'spaced-comment': 'warn',

    /*
    * 强制在注释中
    * 或 /* 使用一致的空格
    */
    'switch-colon-spacing': 'warn',
    // 强制在 switch 的冒号左右有空格
    'template-tag-spacing': 'warn',
    // 要求或禁止在模板标记和它们的字面量之间有空格
    'unicode-bom': 'warn',
    // 要求或禁止 Unicode 字节顺序标记 (BOM)
    'wrap-regex': 'warn',
    // 要求正则表达式被括号括起来
    'arrow-body-style': 'warn',
    // 要求箭头函数体使用大括号
    'arrow-parens': 'warn',
    // 要求箭头函数的参数使用圆括号
    'arrow-spacing': 'warn',
    // 强制箭头函数的箭头前后使用一致的空格
    'constructor-super': 'warn',
    // 要求在构造函数中有 super() 的调用
    'generator-star-spacing': 'warn',
    // 强制 generator 函数中 * 号周围使用一致的空格
    'no-class-assign': 'warn',
    // 禁止修改类声明的变量
    'no-confusing-arrow': 'warn',
    // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    'no-const-assign': 'warn',
    // 禁止修改 const 声明的变量
    'no-dupe-class-members': 'warn',
    // 禁止类成员中出现重复的名称
    'no-duplicate-imports': 'warn',
    // 禁止重复模块导入
    'no-new-symbol': 'warn',
    // 禁止 Symbolnew 操作符和 new 一起使用
    'no-restricted-imports': 'warn',
    // 禁止使用指定的 import 加载的模块
    'no-this-before-super': 'warn',
    // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    'no-useless-computed-key': 'warn',
    // 禁止在对象中使用不必要的计算属性
    'no-useless-constructor': 'warn',
    // 禁用不必要的构造函数
    'no-useless-rename': 'warn',
    // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    'no-var': 'warn',
    // 要求使用 let 或 const 而不是 var
    'object-shorthand': 'warn',
    // 要求或禁止对象字面量中方法和属性使用简写语法
    'prefer-arrow-callback': 'warn',
    // 要求回调函数使用箭头函数
    'prefer-const': 'warn',
    // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-destructuring': 'warn',
    // 优先使用数组和对象解构
    'prefer-numeric-literals': 'warn',
    // 禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量
    'prefer-rest-params': 'warn',
    // 要求使用剩余参数而不是 arguments
    'prefer-spread': 'warn',
    // 要求使用扩展运算符而非 .apply()
    'prefer-template': 'warn',
    // 要求使用模板字面量而非字符串连接
    'require-yield': 'warn',
    // 要求 generator 函数内有 yield
    'rest-spread-spacing': 'warn',
    // 强制剩余和扩展运算符及其表达式之间有空格
    'sort-imports': 'warn',
    // 强制模块内的 import 排序
    'symbol-description': 'warn',
    // 要求 symbol 描述
    'template-curly-spacing': 'warn',
    // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    'yield-star-spacing': 'warn',
    // 强制在 yield* 表达式中 * 周围使用空格"
    // 'vue/comment-directive': 'warn',
    // //支持<template>中的评论-指令
    // 'vue/jsx-uses-vars': 'warn',
    // //防止JSX中使用的变量被标记为未使用
    // 'vue/multi-word-component-names': 'warn',
    // //要求组件名称始终为多字
    // 'vue/no-arrow-functions-in-watch': 'warn',
    // //不允许使用箭头函数来定义观察者
    // 'vue/no-async-in-computed-properties': 'warn',
    // //不允许在计算的属性中进行异步操作
    // 'vue/no-child-content': 'warn',
    // //不允许元素的子内容被v-html或v-text等指令所覆盖
    // 'vue/no-computed-properties-in-data': 'warn',
    // //不允许访问数据中的计算属性,
    // 'vue/no-custom-modifiers-on-v-model': 'warn',
    // //不允许在组件上使用的v-model的自定义修改器
    // 'vue/no-deprecated-data-object-declaration': 'warn',
    // //不允许在数据上使用废弃的对象声明（在Vue.js 3.0.0+）
    // 'vue/no-deprecated-destroyed-lifecycle': 'warn',
    // //不允许使用已废弃的destroy和beforeDestroy生命周期钩子（在Vue.js 3.0.0+）
    // 'vue/no-deprecated-dollar-listeners-api': 'warn',
    // //不允许使用废弃的$listeners（在Vue.js 3.0.0+）
    // 'vue/no-deprecated-dollar-scopedslots-api': 'warn',
    // //不允许使用废弃的$scopedSlots（在Vue.js 3.0.0+）
    // 'vue/no-deprecated-events-api': 'warn',
    // //不允许使用已废弃的事件api（在Vue.js 3.0.0+）
    // 'vue/no-deprecated-filter': 'warn',
    // //不允许使用过时的过滤器语法（在Vue.js 3.0.0+）
    // 'vue/no-deprecated-functional-template': 'warn',
    // //不允许使用废弃的功能模板（在Vue.js 3.0.0+）
    // 'vue/no-deprecated-html-element-is': 'warn',
    // //不允许在HTML元素上使用废弃的is属性（在Vue.js 3.0.0+）
    // 'vue/no-deprecated-inline-template': 'warn',
    // //不允许使用废弃的inline-template属性（在Vue.js 3.0.0+）
    // 'vue/no-deprecated-props-default-this': 'warn',
    // //在道具默认函数中不允许被废弃的这种访问（在Vue.js 3.0.0+）
    // 'vue/no-deprecated-router-link-tag-prop': 'warn',
    // //不允许在RouterLink上使用废弃的标签属性（在Vue.js 3.0.0+）
    // 'vue/no-deprecated-scope-attribute': 'warn',
    // //不允许废弃的范围属性（在Vue.js 2.5.0+）
    // 'vue/no-deprecated-slot-attribute': 'warn',
    // //不允许废弃的插槽属性（在Vue.js 2.6.0+）
    // 'vue/no-deprecated-slot-scope-attribute': 'warn',
    // //不允许废弃的插槽范围属性（在Vue.js 2.6.0+）
    // 'vue/no-deprecated-v-bind-sync': 'warn',
    // //不允许在v-bind指令上使用废弃的.sync修饰符（在Vue.js 3.0.0+）
    // 'vue/no-deprecated-v-is': 'warn',
    // //不允许废弃的v-is指令（在Vue.js 3.1.0+）
    // 'vue/no-deprecated-v-on-native-modifier': 'warn',
    // //不允许使用废弃的.native修改器（在Vue.js 3.0.0+）
    // 'vue/no-deprecated-v-on-number-modifiers': 'warn',
    // //不允许使用废弃的数字（键码）修饰符（在Vue.js 3.0.0+）
    // 'vue/no-deprecated-vue-config-keycodes': 'warn',
    // //不允许使用废弃的Vue.config.keyCodes（在Vue.js 3.0.0+）
    // 'vue/no-dupe-keys': 'warn',
    // //不允许字段名的重复
    // 'vue/no-dupe-v-else-if': 'warn',
    // //不允许在v-if/v-else-if链中出现重复条件
    // 'vue/no-duplicate-attributes': 'warn',
    // //不允许属性的重复
    // 'vue/no-export-in-script-setup': 'warn',
    // //在<script setup>中不允许导出
    // 'vue/no-expose-after-await': 'warn',
    // //不允许异步注册暴露
    // 'vue/no-lifecycle-after-await': 'warn',
    // //不允许异步注册的生命周期钩子
    // 'vue/no-multiple-template-root': 'warn',
    // //不允许向模板添加多个根节点
    // 'vue/no-mutating-props': 'warn',
    // //不允许组件道具的变异
    // 'vue/no-parsing-error': 'warn',
    // //不允许在<template>中出现解析错误
    // 'vue/no-ref-as-operand': 'warn',
    // //不允许使用由ref()(Composition API)包装的值作为操作数
    // 'vue/no-reserved-component-names': 'warn',
    // //不允许在组件定义中使用保留名称
    // 'vue/no-reserved-keys': 'warn',
    // //不允许覆盖保留键
    // 'vue/no-reserved-props': 'warn',
    // //不允许道具中的保留名称
    // 'vue/no-setup-props-destructure': 'warn',
    // //不允许对传递给setup的props进行解构
    // 'vue/no-shared-component-data': 'warn',
    // //强制组件的数据属性成为一个函数
    // 'vue/no-side-effects-in-computed-properties': 'warn',
    // //不允许在计算属性中出现副作用
    // 'vue/no-template-key': 'warn',
    // //不允许<template>上的关键属性
    // 'vue/no-textarea-mustache': 'warn',
    // //在<textarea>中不允许有胡子
    // 'vue/no-unused-components': 'warn',
    // //不允许注册那些不在模板内使用的组件
    // 'vue/no-unused-vars': 'warn',
    // //不允许v-for指令或范围属性的未使用变量定义
    // 'vue/no-use-computed-property-like-method': 'warn',
    // //不允许使用类似方法的计算属性
    // 'vue/no-use-v-if-with-v-for': 'warn',
    // //不允许在与v-for相同的元素上使用v-if
    // 'vue/no-useless-template-attributes': 'warn',
    // //禁用<template>上的无用属性
    // 'vue/no-v-for-template-key-on-child': 'warn',
    // //不允许将<template v-for>的键放在子元素上
    // 'vue/no-v-for-template-key': 'warn',
    // //不允许在<template v-for>上使用键属性
    // 'vue/no-v-model-argument': 'warn',
    // //不允许向自定义组件中使用的v-model添加参数
    // 'vue/no-v-text-v-html-on-component': 'warn',
    // //禁止在组件上使用v-text / v-html
    // 'vue/no-watch-after-await': 'warn',
    // //不允许异步注册的手表
    // 'vue/prefer-import-from-vue': 'warn',
    // //强制从'vue'导入，而不是从'@vue/*'导入
    // 'vue/require-component-is': 'warn',
    // //要求v-bind:is的<component>元素
    // 'vue/require-prop-type-constructor': 'warn',
    // //要求道具类型是一个构造函数
    // 'vue/require-render-return': 'warn',
    // //强制执行渲染函数，使其总是返回值
    // 'vue/require-slots-as-functions': 'warn',
    // //强制执行$slots的属性，作为一个函数使用
    // 'vue/require-toggle-inside-transition': 'warn',
    // //要求控制<transition>内内容的显示
    // 'vue/require-v-for-key': 'warn',
    // //要求v-bind:key与v-for指令
    // 'vue/require-valid-default-prop': 'warn',
    // //强制执行道具默认值为有效
    // 'vue/return-in-computed-property': 'warn',
    // //强制执行计算属性中存在的返回语句
    // 'vue/return-in-emits-validator': 'warn',
    // //强制执行emits验证器中存在的返回语句
    // 'vue/use-v-on-exact': 'warn',
    // //在v-on上强制使用精确修饰语
    // 'vue/valid-attribute-name': 'warn',
    // //要求有效的属性名称
    // 'vue/valid-define-emits': 'warn',
    // //执行有效的defineEmits编译器宏
    // 'vue/valid-define-props': 'warn',
    // //执行有效的defineProps编译器宏
    // 'vue/valid-model-definition': 'warn',
    // //要求模型选项中的有效键
    // 'vue/valid-next-tick': 'warn',
    // //强制执行有效的nextTick函数调用
    // 'vue/valid-template-root': 'warn',
    // //执行有效的模板根
    // 'vue/valid-v-bind-sync': 'warn',
    // //在v-bind指令上执行有效的.sync修改器
    // 'vue/valid-v-bind': 'warn',
    // //执行有效的v-bind指令
    // 'vue/valid-v-cloak': 'warn',
    // //执行有效的v-cloak指令
    // 'vue/valid-v-else-if': 'warn',
    // //执行有效的v-else-if指令
    // 'vue/valid-v-else': 'warn',
    // //执行有效的v-else指令
    // 'vue/valid-v-for': 'warn',
    // //执行有效的v-for指令
    // 'vue/valid-v-html': 'warn',
    // //执行有效的v-html指令
    // 'vue/valid-v-if': 'warn',
    // //执行有效的v-if指令
    // 'vue/valid-v-is': 'warn',
    // //执行有效的v-is指令
    // 'vue/valid-v-memo': 'warn',
    // //执行有效的v-memo指令
    // 'vue/valid-v-model': 'warn',
    // //执行有效的v-model指令
    // 'vue/valid-v-on': 'warn',
    // //执行有效的v-on指令
    // 'vue/valid-v-once': 'warn',
    // //执行有效的v-once指令
    // 'vue/valid-v-pre': 'warn',
    // //执行有效的v-pre指令
    // 'vue/valid-v-show': 'warn',
    // //执行有效的v-show指令
    // 'vue/valid-v-slot': 'warn',
    // //执行有效的v-slot指令
    // 'vue/valid-v-text': 'warn',
    // //执行有效的v-text指令
    // 'vue/attribute-hyphenation': 'warn',
    // //对模板中的自定义组件执行属性命名方式
    // 'vue/component-definition-name-casing': 'warn',
    // //为组件定义名称执行特定的套管
    // 'vue/first-attribute-linebreak': 'warn',
    // //执行第一个属性的位置
    // 'vue/html-closing-bracket-newline': 'warn',
    // //要求或不允许在标签的闭合括号前有换行符
    // 'vue/html-closing-bracket-spacing': 'warn',
    // //要求或不允许在标签的结尾括号前有空格
    // 'vue/html-end-tags': 'warn',
    // //执行结束标签样式
    // 'vue/html-indent': 'warn',
    // //在<template>中执行一致的缩进
    // 'vue/html-quotes': 'warn',
    // //执行HTML属性的引号样式
    // 'vue/html-self-closing': 'warn',
    // //执行自我封闭式
    // 'vue/max-attributes-per-line': 'warn',
    // //执行每行的最大属性数
    // 'vue/multiline-html-element-content-newline': 'warn',
    // //要求在多行元素的内容之前和之后有一个换行符
    // 'vue/mustache-interpolation-spacing': 'warn',
    // //在胡子的插值中执行统一的间距
    // 'vue/no-multi-spaces': 'warn',
    // //不允许有多个空格
    // 'vue/no-spaces-around-equal-signs-in-attribute': 'warn',
    // //属性中不允许等号周围有空格
    // 'vue/no-template-shadow': 'warn',
    // //不允许变量声明影射外部作用域中声明的变量
    // 'vue/one-component-per-file': 'warn',
    // //强制执行每个组件都应该在自己的文件中
    // 'vue/prop-name-casing': 'warn',
    // //为Vue组件中的Prop名称执行特定的套管
    // 'vue/require-default-prop': 'warn',
    // //要求道具的默认值
    // 'vue/require-explicit-emits': 'warn',
    // //要求以$emit()触发emit选项
    // 'vue/require-prop-types': 'warn',
    // //要求道具中的类型定义
    // 'vue/singleline-html-element-content-newline': 'warn',
    // //要求在单行元素的内容之前和之后有一个换行符
    // 'vue/v-bind-style': 'warn',
    // //强制执行v-bind指令样式
    // 'vue/v-on-event-hyphenation': 'warn',
    // //对模板中的自定义组件强制执行v-on事件命名方式
    // 'vue/v-on-style': 'warn',
    // //执行v-on指令式
    // 'vue/v-slot-style': 'warn',
    // //执行V型槽指令样式
    // 'vue/attributes-order': 'warn',
    // //执行属性的顺序
    // 'vue/component-tags-order': 'warn',
    // //强制执行组件顶层元素的顺序
    // 'vue/no-lone-template': 'warn',
    // //不允许不必要的<template>
    // 'vue/no-multiple-slot-args': 'warn',
    // //不允许向范围内的槽传递多个参数
    // 'vue/no-v-html': 'warn',
    // //不允许使用v-html以防止XSS攻击
    // 'vue/order-in-components': 'warn',
    // //强制执行组件中的属性顺序
    // 'vue/this-in-template': 'warn',
    // //不允许在模板中使用这个
    // 'vue/block-lang': 'warn',
    // //不允许使用其他可用的朗
    // 'vue/block-tag-newline': 'warn',
    // //在块级标签的开头和结尾之前强制实行换行
    // 'vue/component-api-style': 'warn',
    // //执行组件的API风格
    // 'vue/component-name-in-template-casing': 'warn',
    // //为模板中的组件命名风格执行特定的套管
    // 'vue/component-options-name-casing': 'warn',
    // //强制执行组件选项中的组件名称大小写
    // 'vue/custom-event-name-casing': 'warn',
    // //为自定义事件名称执行特定的套管
    // 'vue/define-macros-order': 'warn',
    // //执行defineEmits和defineProps编译器宏的顺序
    // 'vue/html-button-has-type': 'warn',
    // //不允许使用没有明确类型属性的按钮
    // 'vue/html-comment-content-newline': 'warn',
    // //在HTML注释中执行统一的行制动
    // 'vue/html-comment-content-spacing': 'warn',
    // //在HTML注释中执行统一的间距
    // 'vue/html-comment-indent': 'warn',
    // //在HTML注释中执行一致的缩进
    // 'vue/match-component-file-name': 'warn',
    // //要求组件名称属性与它的文件名相匹配
    // 'vue/match-component-import-name': 'warn',
    // //要求注册的组件名称与导入的组件名称一致
    // 'vue/new-line-between-multi-line-property': 'warn',
    // //在Vue组件的多行属性之间执行新的行数
    // 'vue/next-tick-style': 'warn',
    // //在nextTick中执行Promise或回调风格
    // 'vue/no-bare-strings-in-template': 'warn',
    // //不允许在<template>中使用裸字符串
    // 'vue/no-boolean-default': 'warn',
    // //不允许布尔值的默认值
    // 'vue/no-duplicate-attr-inheritance': 'warn',
    // //当使用v-bind='$attrs'时，强制将inheritAttrs设置为false
    // 'vue/no-empty-component-block': 'warn',
    // //不允许<template> <script> <style>块为空
    // 'vue/no-multiple-objects-in-class': 'warn',
    // //不允许将多个对象传入数组中给类
    // 'vue/no-potential-component-option-typo': 'warn',
    // //不允许在你的组件属性中出现潜在的拼写错误
    // 'vue/no-restricted-block': 'warn',
    // //不允许特定块
    // 'vue/no-restricted-call-after-await': 'warn',
    // //不允许异步调用受限方法
    // 'vue/no-restricted-class': 'warn',
    // //不允许Vue组件中的特定类
    // 'vue/no-restricted-component-options': 'warn',
    // //不允许特定组件选项
    // 'vue/no-restricted-custom-event': 'warn',
    // //不允许特定的自定义事件
    // 'vue/no-restricted-html-elements': 'warn',
    // //不允许特定的HTML元素
    // 'vue/no-restricted-props': 'warn',
    // //不允许特定道具
    // 'vue/no-restricted-static-attribute': 'warn',
    // //不允许特定属性
    // 'vue/no-restricted-v-bind': 'warn',
    // //在v-bind中不允许特定参数
    // 'vue/no-static-inline-styles': 'warn',
    // //不允许静态内联样式属性
    // 'vue/no-template-target-blank': 'warn',
    // //不允许target='_blank'属性没有rel='noopener noreferrer'
    // 'vue/no-this-in-before-route-enter': 'warn',
    // //在beforeRouteEnter方法中不允许这种用法
    // 'vue/no-undef-components': 'warn',
    // //不允许在<template>中使用未定义的组件
    // 'vue/no-undef-properties': 'warn',
    // //不允许未定义的属性
    // 'vue/no-unsupported-features': 'warn',
    // //不允许在指定版本上使用不支持的Vue.js语法
    // 'vue/no-unused-properties': 'warn',
    // //不允许未使用的属性
    // 'vue/no-unused-refs': 'warn',
    // //不允许未使用的裁判
    // 'vue/no-useless-mustaches': 'warn',
    // //不允许不必要的胡子插队
    // 'vue/no-useless-v-bind': 'warn',
    // //不允许不必要的v-bind指令
    // 'vue/no-v-text': 'warn',
    // //不允许使用v-text
    // 'vue/padding-line-between-blocks': 'warn',
    // //要求或不允许块之间有填充线
    // 'vue/prefer-prop-type-boolean-first': 'warn',
    // //在组件道具类型中，强制执行布尔值是第一位的
    // 'vue/prefer-separate-static-class': 'warn',
    // //要求模板中的静态类名在一个单独的类属性中
    // 'vue/prefer-true-attribute-shorthand': 'warn',
    // //当v-bind值为真时，需要速记表单属性
    // 'vue/require-direct-export': 'warn',
    // //要求该组件直接导出
    // 'vue/require-emit-validator': 'warn',
    // //要求emits中的类型定义
    // 'vue/require-expose': 'warn',
    // //要求使用expose声明公共属性
    // 'vue/require-name-property': 'warn',
    // //在Vue组件中需要一个名称属性
    // 'vue/script-indent': 'warn',
    // //在<script>中执行一致的缩进
    // 'vue/sort-keys': 'warn',
    // //以一种与组件中的顺序兼容的方式强制执行排序键
    // 'vue/static-class-names-order': 'warn',
    // //执行静态类名顺序
    // 'vue/v-for-delimiter-style': 'warn',
    // //执行v-for指令的分隔符样式
    // 'vue/v-on-function-call': 'warn',
    // //在v-on指令中，强制或禁止在没有参数的方法调用后加括号
    // 'vue/array-bracket-newline': 'warn',
    // //在<template>中的数组括号开头和结尾之前强制执行行距
    // 'vue/array-bracket-spacing': 'warn',
    // //在<template>中执行一致的数组括号内的间距
    // 'vue/arrow-spacing': 'warn',
    // //在<template>中的箭头功能中，执行一致的箭头前后间距
    // 'vue/block-spacing': 'warn',
    // //在<template>中，不允许或强制执行块内的空格，在打开块后和关闭块前
    // 'vue/brace-style': 'warn',
    // //为<template>中的块执行一致的括号样式
    // 'vue/camelcase': 'warn',
    // //在<template>中执行camelcase命名规则
    // 'vue/comma-dangle': 'warn',
    // //在<template>中要求或不允许使用尾部逗号
    // 'vue/comma-spacing': 'warn',
    // //在<template>中执行一致的逗号前后间距
    // 'vue/comma-style': 'warn',
    // //在<template>中执行一致的逗号风格
    // 'vue/dot-location': 'warn',
    // //在<template>中的点之前和之后执行一致的换行线
    // 'vue/dot-notation': 'warn',
    // //在<template>中尽可能地执行点符号
    // 'vue/eqeqeq': 'warn',
    // //要求在<template>中使用===和！==
    // 'vue/func-call-spacing': 'warn',
    // //要求或不允许在<template>中的函数标识和它们的调用之间有间距
    // 'vue/key-spacing': 'warn',
    // //在<template>中的对象字面属性中执行一致的键和值的间距
    // 'vue/keyword-spacing': 'warn',
    // //在<template>中强制执行关键词前后一致的间距
    // 'vue/max-len': 'warn',
    // //在.vue文件中强制执行最大行长
    // 'vue/no-constant-condition': 'warn',
    // //不允许在<template>的条件中使用常量表达
    // 'vue/no-empty-pattern': 'warn',
    // //不允许在<template>中使用空的结构化模式
    // 'vue/no-extra-parens': 'warn',
    // //不允许在<template>中使用不必要的括号
    // 'vue/no-irregular-whitespace': 'warn',
    // //不允许.vue文件中出现不规则的空白
    // 'vue/no-loss-of-precision': 'warn',
    // //不允许在<template>中失去精度的字面数字
    // 'vue/no-restricted-syntax': 'warn',
    // //不允许在<template>中使用指定的语法
    // 'vue/no-sparse-arrays': 'warn',
    // //不允许<template>中的稀疏数组
    // 'vue/no-useless-concat': 'warn',
    // //不允许在<template>中不必要地串联字词或模板字词
    // 'vue/object-curly-newline': 'warn',
    // //在<template>中的开括号和闭括号之前执行一致的换行符
    // 'vue/object-curly-spacing': 'warn',
    // //在<template>中执行一致的大括号内的间距
    // 'vue/object-property-newline': 'warn',
    // //强制将对象属性放在<template>中的独立行上
    // 'vue/object-shorthand': 'warn',
    // //要求或不允许<template>中对象字面的方法和属性速记语法
    // 'vue/operator-linebreak': 'warn',
    // //为<template>中的操作符执行一致的换行风格
    // 'vue/prefer-template': 'warn',
    // //要求在<template>中使用模板字面而不是字符串连接
    // 'vue/quote-props': 'warn',
    // //要求在<template>中的对象字面属性名称周围加引号
    // 'vue/space-in-parens': 'warn',
    // //在<template>中执行一致的括号内间距
    // 'vue/space-infix-ops': 'warn',
    // //要求在<template>中的中缀运算符周围有间距
    // 'vue/space-unary-ops': 'warn',
    // //在<template>中的单数运算符之前或之后执行一致的间距
    // 'vue/template-curly-spacing': 'warn',
    // 要求或不允许在<template>中的模板字符串的嵌入式表达周围有间距'
    'react/boolean-prop-naming': 'warn',
    // 为布尔型道具执行一致的命名'
    'react/button-has-type': 'warn',
    // 禁止没有明确'type'属性的 'button'元素'
    'react/default-props-match-prop-types': 'warn',
    // 执行所有defaultProps的定义，并且在propTypes中没有required'
    'react/destructuring-assignment': 'warn',
    // 强制执行道具、状态和上下文的解构分配的一致用法'
    'react/display-name': 'warn',
    // 防止React组件定义中丢失displayName'
    'react/forbid-component-props': 'warn',
    // 禁止组件上的某些道具'
    'react/forbid-dom-props': 'warn',
    // 禁止DOM节点上的某些道具'
    'react/forbid-elements': 'warn',
    // 禁止某些元素'
    'react/forbid-foreign-prop-types': 'warn',
    // 禁止使用其他组件的propTypes'
    'react/forbid-prop-types': 'warn',
    // 禁止某些propTypes'
    'react/function-component-definition': 'warn',
    // 使功能组件的定义方式标准化'
    'react/hook-use-state': 'warn',
    // 确保useState钩值和setter变量的对称命名'
    'react/iframe-missing-sandbox': 'warn',
    // 在iframe元素上强制执行沙盒属性'
    'react/no-access-state-in-setstate': 'warn',
    // 在setState内访问this.state时报告'
    'react/no-adjacent-inline-elements': 'warn',
    // 防止相邻的内联元素没有用空格隔开,'
    'react/no-array-index-key': 'warn',
    // 防止在键中使用阵列索引'
    'react/no-arrow-function-lifecycle': 'warn',
    // 生命周期方法应该是原型上的方法，而不是类字段'
    'react/no-children-prop': 'warn',
    // 防止将儿童作为道具传递,'
    'react/no-danger': 'warn',
    // 防止使用危险的JSX道具'
    'react/no-danger-with-children': 'warn',
    // 当一个DOM元素同时使用children和dangerouslySetInnerHTML时报告'
    'react/no-deprecated': 'warn',
    // 防止使用废弃的方法'
    'react/no-did-mount-set-state': 'warn',
    // 防止在componentDidMount中使用setState'
    'react/no-did-update-set-state': 'warn',
    // 防止在componentDidUpdate中使用setState'
    'react/no-direct-mutation-state': 'warn',
    // 防止这个.状态的直接突变'
    'react/no-find-dom-node': 'warn',
    // 防止使用findDOMNode'
    'react/no-invalid-html-attribute': 'warn',
    // 禁止具有无效值的属性`'
    'react/no-is-mounted': 'warn',
    // 防止使用isMounted'
    'react/no-multi-comp': 'warn',
    // 防止每个文件有多个组件定义'
    'react/no-namespace': 'warn',
    // 执行命名空间不在React元素中使用'
    'react/no-redundant-should-component-update': 'warn',
    // 在扩展PureComponent时标记shouldComponentUpdate'
    'react/no-render-return-value': 'warn',
    // 防止使用React.render的返回值'
    'react/no-set-state': 'warn',
    // 防止使用setState'
    'react/no-string-refs': 'warn',
    // 防止引用的字符串定义，防止引用this.refs'
    'react/no-this-in-sfc': 'warn',
    // 报告'this'被用于无状态组件中'
    'react/no-typos': 'warn',
    // 防止常见的错别字'
    'react/no-unescaped-entities': 'warn',
    // 检测未转义的HTML实体，这可能代表畸形的标签'
    'react/no-unknown-property': 'warn',
    // 防止使用未知的DOM属性'
    'react/no-unsafe': 'warn',
    // 防止使用不安全的生命周期方法'
    'react/no-unstable-nested-components': 'warn',
    // 防止在组件内创建不稳定的组件'
    'react/no-unused-class-component-methods': 'warn',
    // 防止声明组件类的未使用方法'
    'react/no-unused-prop-types': 'warn',
    // 防止对未使用的道具类型进行定义'
    'react/no-unused-state': 'warn',
    // 防止定义未使用的状态字段'
    'react/no-will-update-set-state': 'warn',
    // 防止在componentWillUpdate中使用setState'
    'react/prefer-es6-class': 'warn',
    // 为React组件强制执行ES5或ES6类'
    'react/prefer-exact-props': 'warn',
    // 倾向于准确的道具类型定义'
    'react/prefer-read-only-props': 'warn',
    // 要求只读的道具,'
    'react/prefer-stateless-function': 'warn',
    // 强制无状态组件被写成纯函数'
    'react/prop-types': 'warn',
    // 防止在React组件定义中丢失道具验证'
    'react/react-in-jsx-scope': 'warn',
    // 防止在使用JSX时丢失React'
    'react/require-default-props': 'warn',
    // 为每一个不是必需道具的道具强制执行defaultProps定义,'
    'react/require-optimization': 'warn',
    // 强制要求React组件有一个shouldComponentUpdate方法'
    'react/require-render-return': 'warn',
    // 在渲染函数中执行ES5或ES6类的返回值'
    'react/self-closing-comp': 'warn',
    // 防止没有子代的组件出现额外的关闭标签'
    'react/sort-comp': 'warn',
    // 执行组件方法顺序'
    'react/sort-prop-types': 'warn',
    // 强制执行propTypes声明的字母排序'
    'react/state-in-constructor': 'warn',
    // ES6类组件中的状态初始化应该在构造函数中进行'
    'react/static-property-placement': 'warn',
    // 定义React组件静态属性的位置,'
    'react/style-prop-object': 'warn',
    // 强制执行样式道具值是一个对象'
    'react/void-dom-elements-no-children': 'warn',
    // 防止将子女传递给无效的DOM元素（例如：<br />）,'
    'react/jsx-boolean-value': 'warn',
    // 在JSX中强制执行布尔属性符号'
    'react/jsx-child-element-spacing': 'warn',
    // 确保内联标签之间没有空格就不会被渲染'
    'react/jsx-closing-bracket-location': 'off',
    // 验证JSX中收尾括号的位置'
    'react/jsx-closing-tag-location': 'off',
    // 验证多行JSX的关闭标签位置'
    'react/jsx-curly-brace-presence': 'warn',
    // 当仅有字面意义就足够时，不允许不必要的JSX表达，或在JSX子项或属性中的字面意义上禁止JSX表达'
    'react/jsx-curly-newline': 'warn',
    // 在jsx大写字母内执行一致的换行'
    'react/jsx-curly-spacing': 'warn',
    // 强制或禁止JSX属性中的大括号内的空格'
    'react/jsx-equals-spacing': 'warn',
    // 不允许或强制执行JSX属性中等号周围的空格'
    'react/jsx-filename-extension': 'off',
    // 限制可能包含JSX的文件扩展'
    'react/jsx-first-prop-new-line': 'warn',
    // 确保JSX中第一个属性的正确位置'
    'react/jsx-fragments': 'warn',
    // 执行React片段的速记或标准形式'
    'react/jsx-handler-names': 'warn',
    // 在JSX中强制执行事件处理程序的命名规则'
    'react/jsx-indent': 'off',
    // 验证JSX缩进'
    'react/jsx-indent-props': 'off',
    // 验证JSX中的道具缩进'
    'react/jsx-key': 'warn',
    // 报告迭代器/集合字句中缺失的关键道具'
    'react/jsx-max-depth': 'warn',
    // 验证JSX最大深度'
    'react/jsx-max-props-per-line': 'warn',
    // 限制JSX中单行的最大道具'
    'react/jsx-newline': 'warn',
    // 要求或防止在jsx元素和表达式之后出现新的一行,'
    'react/jsx-no-bind': 'off',
    // 防止在React组件道具中使用Function.prototype.bind和箭头函数'
    'react/jsx-no-comment-textnodes': 'warn',
    // 标签的儿童部分内的评论应放在大括号内'
    'react/jsx-no-constructed-context-values': 'warn',
    // 防止JSX上下文提供者的值会导致不必要的重新提交'
    'react/jsx-no-duplicate-props': 'warn',
    // 执行没有重复的道具'
    'react/jsx-no-leaked-render': 'warn',
    // 防止有问题的泄漏值被呈现出来'
    'react/jsx-no-literals': 'off',
    // 防止在React组件定义中使用字符串字面'
    'react/jsx-no-script-url': 'warn',
    // 禁止javascript,URLs'
    'react/jsx-no-target-blank': 'warn',
    // 禁止没有rel='noreferrer'的target='_blank'属性'
    'react/jsx-no-undef': 'warn',
    // 不允许JSX中的未声明变量'
    'react/jsx-no-useless-fragment': 'warn',
    // 不允许不必要的片段'
    'react/jsx-one-expression-per-line': 'warn',
    // 在JSX中每行限制一个表达式'
    'react/jsx-pascal-case': 'warn',
    // 为用户定义的JSX组件强制执行PascalCase'
    'react/jsx-props-no-multi-spaces': 'warn',
    // 不允许内联JSX道具之间有多个空格'
    'react/jsx-props-no-spreading': 'warn',
    // 防止JSX道具的传播'
    'react/sort-default-props': 'warn',
    // 'react/jsx-sort-default-props': 'warn',
    // 执行默认道具的字母排序'
    'react/jsx-sort-props': 'warn',
    // 强制执行道具的字母排序'
    // 'react/jsx-space-before-closing': 'warn',
    // 在JSX中验证闭合括号前的间距'//和下面这条重复
    'react/jsx-tag-spacing': 'warn',
    // 验证JSX开头和结尾括号内和周围的空白'
    'react/jsx-uses-react': 'warn',
    // 防止React被标记为未使用'
    'react/jsx-uses-vars': 'warn',
    // 防止JSX中使用的变量被标记为未使用'
    'react/jsx-wrap-multilines': 'off',
    // 防止多行JSX周围的小括号丢失'
    '@typescript-eslint/adjacent-overload-signatures': 'warn',
    // 要求成员重载是连续的
    '@typescript-eslint/array-type': 'warn',
    // 要求对数组使用T[]或Array<T>
    '@typescript-eslint/await-thenable': 'warn',
    // 不允许等待一个不是Thenable的值
    '@typescript-eslint/ban-ts-comment': 'warn',
    // 不允许@ts-<指令>评论或要求指令后的描述
    '@typescript-eslint/ban-tslint-comment': 'warn',
    // 不允许,
    // tslint:<规则-标志>评论
    '@typescript-eslint/ban-types': 'warn',
    // 不允许某些类型
    '@typescript-eslint/class-literal-property-style': 'warn',
    // 强制要求类上的字词以一致的风格暴露
    '@typescript-eslint/consistent-generic-constructors': 'warn',
    // 强制在类型注释或构造函数调用的构造函数名称上指定通用类型参数
    '@typescript-eslint/consistent-indexed-object-style': 'warn',
    // 要求或不允许记录类型
    '@typescript-eslint/consistent-type-assertions': 'warn',
    // 强制执行类型断言的一致使用
    '@typescript-eslint/consistent-type-definitions': 'warn',
    // 强制类型定义一致地使用接口或类型
    '@typescript-eslint/consistent-type-exports': 'warn',
    // 强制执行类型导出的一致用法
    '@typescript-eslint/consistent-type-imports': 'warn',
    // 强制执行类型导入的一致用法
    '@typescript-eslint/explicit-function-return-type': 'warn',
    // 要求在函数和类方法上明确返回类型
    '@typescript-eslint/explicit-member-accessibility': 'warn',
    // 要求在类的属性和方法上有明确的可访问性修改器
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    // 要求在导出的函数和类的公共类方法上明确返回和参数类型
    '@typescript-eslint/member-delimiter-style': 'off',
    // 要求为接口和类型字提供特定的成员定界符样式
    '@typescript-eslint/member-ordering': 'warn',
    // 要求成员申报顺序一致
    '@typescript-eslint/method-signature-style': 'warn',
    // 强制使用一个特定的方法签名语法
    '@typescript-eslint/naming-convention': 'off',
    // 为整个代码库中的所有东西执行命名惯例
    '@typescript-eslint/no-base-to-string': 'warn',
    // 要求.toString()只对那些在字符串化时提供有用信息的对象进行调用
    '@typescript-eslint/no-confusing-non-null-assertion': 'warn',
    // 不允许在可能产生混淆的地方出现非空的断言
    '@typescript-eslint/no-confusing-void-expression': 'warn',
    // 要求void类型的表达式出现在语句位置
    '@typescript-eslint/no-duplicate-enum-values': 'warn',
    // 不允许重复的枚举成员值
    '@typescript-eslint/no-dynamic-delete': 'warn',
    // 不允许在计算的关键表达式上使用删除操作符
    '@typescript-eslint/no-empty-interface': 'warn',
    // 不允许声明空接口
    '@typescript-eslint/no-explicit-any': 'warn',
    // 不允许any类型
    '@typescript-eslint/no-extra-non-null-assertion': 'warn',
    // 不允许额外的非空值断言
    '@typescript-eslint/no-extraneous-class': 'warn',
    // 不允许作为命名空间的类
    '@typescript-eslint/no-floating-promises': 'warn',
    // 要求对类似承诺的语句进行适当处理
    '@typescript-eslint/no-for-in-array': 'warn',
    // 不允许用for-in循环对数组进行迭代
    '@typescript-eslint/no-implicit-any-catch': 'warn',
    // 不允许在catch子句中使用隐含的any类型
    '@typescript-eslint/no-inferrable-types': 'warn',
    // 不允许对初始化为数字、字符串或布尔值的变量或参数进行明确的类型声明
    '@typescript-eslint/no-invalid-void-type': 'warn',
    // 不允许在通用类型或返回类型之外的无效类型
    '@typescript-eslint/no-meaningless-void-operator': 'warn',
    // 不允许使用void操作符，除非是用于丢弃一个值
    '@typescript-eslint/no-misused-new': 'warn',
    // 强制执行new和constructor的有效定义
    '@typescript-eslint/no-misused-promises': 'warn',
    // 不允许在不是为处理承诺而设计的地方使用承诺
    '@typescript-eslint/no-namespace': 'warn',
    // 不允许自定义TypeScript模块和命名空间
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'warn',
    // 不允许在空值凝聚运算符的左操作数中出现非空值断言
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
    // 不允许在一个可选的链式表达后出现非空的断言
    '@typescript-eslint/no-non-null-assertion': 'warn',
    // 不允许使用！后缀操作符的非空断言
    '@typescript-eslint/no-parameter-properties': 'warn',
    // 不允许在类构造函数中使用参数属性
    '@typescript-eslint/no-redundant-type-constituents': 'warn',
    // 不允许联盟和交叉点的成员不做任何事情或覆盖类型信息
    '@typescript-eslint/no-require-imports': 'warn',
    // 不允许调用require()
    '@typescript-eslint/no-this-alias': 'warn',
    // 不允许对这个进行别名
    '@typescript-eslint/no-type-alias': 'off',
    // 不允许类型别名
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
    // 不允许对布尔字词进行不必要的平等比较
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    // 不允许类型总是真实的或总是虚假的条件式
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    // 不允许不必要的命名空间限定符
    '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
    // 不允许与默认值相同的类型参数
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
    // 不允许不改变表达式类型的类型断言
    '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
    // 不允许对通用类型的不必要的约束
    '@typescript-eslint/no-unsafe-argument': 'warn',
    // 不允许用any类型的值调用一个函数
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    // 不允许给变量和属性分配any类型的值
    '@typescript-eslint/no-unsafe-call': 'warn',
    // 不允许调用any类型的值
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    // 不允许对类型为any的值进行成员访问
    '@typescript-eslint/no-unsafe-return': 'warn',
    // 不允许从一个函数中返回一个类型为any的值
    '@typescript-eslint/no-useless-empty-export': 'warn',
    // 不允许在模块文件中不改变any东西的空导出
    '@typescript-eslint/no-var-requires': 'warn',
    // 除了在导入语句中，不允许require语句
    '@typescript-eslint/non-nullable-type-assertion-style': 'warn',
    // 在明确的类型转换中强制执行非空的断言
    '@typescript-eslint/parameter-properties': 'warn',
    // 要求或不允许类构造函数中的参数属性
    '@typescript-eslint/prefer-as-const': 'warn',
    // 强制使用常数而不是字面类型
    '@typescript-eslint/prefer-enum-initializers': 'warn',
    // 要求每个枚举成员的值都明确地被初始化
    '@typescript-eslint/prefer-for-of': 'warn',
    // 在可能的情况下，强制使用for-of循环而不是标准for循环
    '@typescript-eslint/prefer-function-type': 'warn',
    // 强制使用函数类型而不是带有调用签名的接口
    '@typescript-eslint/prefer-includes': 'warn',
    // 在indexOf方法之上强制执行包括方法
    '@typescript-eslint/prefer-literal-enum-member': 'warn',
    // 要求所有枚举成员都是字面价值
    '@typescript-eslint/prefer-namespace-keyword': 'warn',
    // 要求使用命名空间关键字而不是模块关键字来声明自定义TypeScript模块
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    // 强制使用nullish凝聚运算符而不是逻辑链
    '@typescript-eslint/prefer-optional-chain': 'warn',
    // 强制使用简洁的可选链式表达，而不是链式逻辑和
    '@typescript-eslint/prefer-readonly': 'warn',
    // 如果私有成员在构造函数之外从未被修改，则要求将其标记为只读
    '@typescript-eslint/prefer-readonly-parameter-types': 'warn', // TODO
    // 要求函数参数被打成只读，以防止输入的意外变异
    '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
    // 在调用Array#reduce时强制使用类型参数，而不是铸造
    '@typescript-eslint/prefer-regexp-exec': 'warn',
    // 如果没有提供全局标志，强制执行RegExp#exec而不是String#match
    '@typescript-eslint/prefer-return-this-type': 'warn',
    // 当只返回这种类型时，强制使用这个
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
    // 强制使用String#startsWith和String#endsWith而不是其他检查子字符串的同等方法
    '@typescript-eslint/prefer-ts-expect-error': 'warn',
    // 强制使用@ts-expect-error而不是@ts-ignore
    '@typescript-eslint/promise-function-async': 'warn',
    // 要求任何返回Promise的函数或方法都被标记为异步
    '@typescript-eslint/require-array-sort-compare': 'warn',
    // 要求Array#sort调用总是提供一个compareFunction
    '@typescript-eslint/restrict-plus-operands': 'warn',
    // 要求加法的两个操作数都具有数字或字符串类型
    '@typescript-eslint/restrict-template-expressions': 'warn',
    // 强制执行模板字面表达式为字符串类型
    '@typescript-eslint/sort-type-union-intersection-members': 'warn',
    // 强制要求类型联盟/交叉的成员按字母顺序排序
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    // 在布尔表达式中不允许某些类型
    '@typescript-eslint/switch-exhaustiveness-check': 'warn',
    // 要求switch-case语句用union类型穷举
    '@typescript-eslint/triple-slash-reference': 'warn',
    // 不允许某些三斜线指令，而采用ES6风格的导入声明
    '@typescript-eslint/type-annotation-spacing': 'warn',
    // 要求字体注释周围的间距一致
    '@typescript-eslint/typedef': 'warn',
    // 要求在某些地方进行类型注释
    '@typescript-eslint/unbound-method': 'warn',
    // 强制非绑定方法以其预期范围被调用
    '@typescript-eslint/unified-signatures': 'warn',
    // 不允许两个可以用联合或可选/休息参数统一为一个的重载
    '@typescript-eslint/brace-style': 'warn',
    // 为块执行一致的括号样式
    '@typescript-eslint/comma-dangle': 'warn',
    // 要求或不允许使用尾部逗号
    '@typescript-eslint/comma-spacing': 'warn',
    // 执行统一的逗号前后的间距
    '@typescript-eslint/default-param-last': 'warn',
    // 强制执行默认参数为最后一个
    '@typescript-eslint/dot-notation': 'warn',
    // 尽可能地执行点符号
    '@typescript-eslint/func-call-spacing': 'warn',
    // 要求或不允许在函数标识符和其调用之间有间隔
    '@typescript-eslint/indent': 'off',
    // 强制执行一致的缩进
    '@typescript-eslint/init-declarations': 'warn',
    // 要求或不允许在变量声明中进行初始化
    '@typescript-eslint/keyword-spacing': 'warn',
    // 强制执行关键词前后一致的间距
    '@typescript-eslint/lines-between-class-members': 'warn',
    // 要求或不允许在类成员之间出现空行
    '@typescript-eslint/no-array-constructor': 'warn',
    // 不允许通用阵列构造器
    '@typescript-eslint/no-dupe-class-members': 'warn',
    // 不允许重复的类成员
    '@typescript-eslint/no-duplicate-imports': 'warn',
    // 不允许重复进口
    '@typescript-eslint/no-empty-function': 'warn',
    // 不允许空函数
    '@typescript-eslint/no-extra-parens': 'warn',
    // 不允许有不必要的括号
    '@typescript-eslint/no-extra-semi': 'warn',
    // 不允许不必要的分号
    '@typescript-eslint/no-implied-eval': 'warn',
    // 不允许使用类似eval()的方法
    '@typescript-eslint/no-invalid-this': 'warn',
    // 禁止在类或类似类的对象之外使用这个关键词
    '@typescript-eslint/no-loop-func': 'warn',
    // 不允许在循环语句中包含不安全引用的函数声明
    '@typescript-eslint/no-loss-of-precision': 'warn',
    // 不允许失去精度的字面数字
    '@typescript-eslint/no-magic-numbers': 'warn',
    // 不允许神奇的数字
    '@typescript-eslint/no-redeclare': 'warn',
    // 不允许变量重新声明
    '@typescript-eslint/no-restricted-imports': 'warn',
    // 通过导入加载时不允许指定的模块
    '@typescript-eslint/no-shadow': 'warn',
    // 不允许变量声明影射在外层作用域中声明的变量
    '@typescript-eslint/no-throw-literal': 'warn',
    // 不允许将字词作为异常抛出
    '@typescript-eslint/no-unused-expressions': 'warn',
    // 不允许未使用的表达式
    // '@typescript-eslint/no-unused-vars': [
    //   'warn',
    //   {
    //     'vars': 'all',
    //     'args': 'after-used',
    //     'ignoreRestSiblings': false
    //   }
    // ],
    // 不允许未使用的变量
    '@typescript-eslint/no-use-before-define': 'warn',
    // 在变量被定义之前，不允许使用这些变量
    '@typescript-eslint/no-useless-constructor': 'warn',
    // 不允许不必要的构造函数
    '@typescript-eslint/object-curly-spacing': 'off',
    // 执行大括号内的一致间距
    '@typescript-eslint/padding-line-between-statements': 'warn',
    // 要求或不允许在语句之间有填充线
    // '@typescript-eslint/quotes': 'warn',
    // 强制执行反斜线、双引号或单引号的一致使用
    '@typescript-eslint/require-await': 'warn',
    // 不允许没有等待表达式的异步函数
    '@typescript-eslint/return-await': 'warn',
    // 强制执行等待值的一致返回
    '@typescript-eslint/semi': 'warn',
    // 要求或不允许用分号代替ASI
    '@typescript-eslint/space-before-blocks': 'warn',
    // 在区块前执行一致的间隔
    '@typescript-eslint/space-before-function-paren': 'warn',
    // 在函数括号前执行一致的间距
    '@typescript-eslint/space-infix-ops': 'warn'
    // 要求在infix运算符周围有间距'
  },
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': [
          '.js',
          '.jsx',
          '.ts',
          '.tsx'
        ]
      }
    }
  }
};

/*
 * "quotes": [2, "single"],
 * //单引号
 * "no-console": 0,
 * //不禁用console
 * "no-debugger": 2,
 * //禁用debugger
 * "no-var": 0,
 * //对var警告
 * "semi": 0,
 * //不强制使用分号
 * "no-irregular-whitespace": 0,
 * //不规则的空白不允许
 * "no-trailing-spaces": 1,
 * //一行结束后面有空格就发出警告
 * "eol-last": 0,
 * //文件以单一的换行符结束
 * "no-unused-vars": [2, {"vars": "all", "args": "after-used"}],
 * //不能有声明后未被使用的变量或参数
 * "no-underscore-dangle": 0,
 * //标识符不能以_开头或结尾
 * "no-alert": 2,
 * //禁止使用alert confirm prompt
 * "no-lone-blocks": 0,
 * //禁止不必要的嵌套块
 * "no-class-assign": 2,
 * //禁止给类赋值
 * "no-cond-assign": 2,
 * //禁止在条件表达式中使用赋值语句
 * "no-const-assign": 2,
 * //禁止修改const声明的变量
 * "no-delete-var": 2,
 * //不能对var声明的变量使用delete操作符
 * "no-dupe-keys": 2,
 * //在创建对象字面量时不允许键重复
 * "no-duplicate-case": 2,
 * //switch中的case标签不能重复
 * "no-dupe-args": 2,
 * //函数参数不能重复
 * "no-empty": 2,
 * //块语句中的内容不能为空
 * "no-func-assign": 2,
 * //禁止重复的函数声明
 * "no-invalid-this": 0,
 * //禁止无效的this，只能用在构造器，类，对象字面量
 * "no-redeclare": 2,
 * //禁止重复声明变量
 * "no-spaced-func": 2,
 * //函数调用时 函数名与()之间不能有空格
 * "no-this-before-super": 0,
 * //在调用super()之前不能使用this或super
 * "no-undef": 2,
 * //不能有未定义的变量
 * "no-use-before-define": 2,
 * //未定义前不能使用
 * "camelcase": 0,
 * //强制驼峰法命名
 * "jsx-quotes": [2, "prefer-double"],
 * //强制在JSX属性（jsx-quotes）中一致使用双引号
 * "react/display-name": 0,
 * //防止在React组件定义中丢失displayName
 * "react/forbid-prop-types": [2, {"forbid": ["any"]}],
 * //禁止某些propTypes
 * "react/jsx-boolean-value": 2,
 * //在JSX中强制布尔属性符号
 * "react/jsx-closing-bracket-location": 1,
 * //在JSX中验证右括号位置
 * "react/jsx-curly-spacing": [2, {"when": "never", "children": true}],
 * //在JSX属性和表达式中加强或禁止大括号内的空格。
 * "react/jsx-indent-props": [2, 4],
 * //验证JSX中的props缩进
 * "react/jsx-key": 2,
 * //在数组或迭代器中验证JSX具有key属性
 * "react/jsx-max-props-per-line": [1, {"maximum": 1}],
 * // 限制JSX中单行上的props的最大数量
 * "react/jsx-no-bind": 0,
 * //JSX中不允许使用箭头函数和bind
 * "react/jsx-no-duplicate-props": 2,
 * //防止在JSX中重复的props
 * "react/jsx-no-literals": 0,
 * //防止使用未包装的JSX字符串
 * "react/jsx-no-undef": 1,
 * //在JSX中禁止未声明的变量
 * "react/jsx-pascal-case": 0,
 * //为用户定义的JSX组件强制使用PascalCase
 * "react/jsx-sort-props": 2,
 * //强化props按字母排序
 * "react/jsx-uses-react": 1,
 * //防止反应被错误地标记为未使用
 * "react/jsx-uses-vars": 2,
 * //防止在JSX中使用的变量被错误地标记为未使用
 * "react/no-danger": 0,
 * //防止使用危险的JSX属性
 * "react/no-did-mount-set-state": 0,
 * //防止在componentDidMount中使用setState
 * "react/no-did-update-set-state": 1,
 * //防止在componentDidUpdate中使用setState
 * "react/no-direct-mutation-state": 2,
 * //防止this.state的直接变异
 * "react/no-multi-comp": 2,
 * //防止每个文件有多个组件定义
 * "react/no-set-state": 0,
 * //防止使用setState
 * "react/no-unknown-property": 2,
 * //防止使用未知的DOM属性
 * "react/prefer-es6-class": 2,
 * //为React组件强制执行ES5或ES6类
 * "react/prop-types": 0,
 * //防止在React组件定义中丢失props验证
 * "react/react-in-jsx-scope": 2,
 * //使用JSX时防止丢失React
 * "react/self-closing-comp": 0,
 * //防止没有children的组件的额外结束标签
 * "react/sort-comp": 2,
 * //强制组件方法顺序
 * "no-extra-boolean-cast": 0,
 * //禁止不必要的bool转换
 * "react/no-array-index-key": 0,
 * //防止在数组中遍历中使用数组key做索引
 * "react/no-deprecated": 1,
 * //不使用弃用的方法
 * "react/jsx-equals-spacing": 2,
 * //在JSX属性中强制或禁止等号周围的空格
 * "no-unreachable": 1,
 * //不能有无法执行的代码
 * "comma-dangle": 2,
 * //对象字面量项尾不能有逗号
 * "no-mixed-spaces-and-tabs": 0,
 * //禁止混用tab和空格
 * "prefer-arrow-callback": 0,
 * //比较喜欢箭头回调
 * "arrow-parens": 0,
 * //箭头函数用小括号括起来
 * "arrow-spacing": 0
 * //=>的前/后括号
 */
