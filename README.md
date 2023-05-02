# vite-vue3-scaffold 前端脚手架项目
## 概述
### 1. 定制目的
为统一团队前端项目技术栈(针对后续的常规web项目)，规范开发环境配置，特定制此前端脚手架项目。

### 2. 技术选型规范表
根据具体 工具/包/插件 的使用要求，分为`必选`，`推荐`，`参考`三个级别：
- `必选`：如无特殊情况，要求必须使用该项工具/包/插件
- `推荐`：推荐优先选择，不做强制要求
- `参考`：针对一些常用工具，脚手架中给出使用范例，仅供参考
  
当前脚手架的技术选型，具体见下表：

|类别|包/工具|使用要求|可选的替代|备注|
|-|-|-|-|-|
|IDE|[VS Code](https://code.visualstudio.com/)|`推荐`|Webstorm / Atom / sublime 等 | 结合vue3，推荐使用vscode + [Volar插件](https://marketplace.visualstudio.com/items?itemName=Vue.volar)的组合 |
|包管理器|[pnpm](https://pnpm.io/zh/)|`推荐`| yarn / npm | [pnpm vs npm vs yarn](https://zhuanlan.zhihu.com/p/542738352) |
|构建|[vite](https://cn.vitejs.dev/)|`必选`| -- | -- |
|框架|[vue 3](https://cn.vuejs.org/)|`必选`| React / Svelte 等 | 允许某些特殊项目需要React或其他框架 |
|语言|[typescript](https://www.typescriptlang.org/zh/)|`必选`| -- | -- |
|css预处理器|[sass(scss)](https://sass-lang.com/)|`必选`| -- | -- |
|语法检查|[eslint](https://eslint.org/)|`必选`| -- | 具体规则可根据项目情况和个人习惯进行自主配置。推荐vscode的eslint插件(dbaeumer.vscode-eslint) |
|格式化|[prettier](https://prettier.io/)|`必选`| -- | 具体规则可根据项目情况和个人习惯进行自主配置。推荐vscode的prettier插件(esbenp.prettier-vscode) |
|样式语法检查|[stylelint](https://stylelint.io/)|`必选`| -- | 具体规则可根据项目情况和个人习惯进行自主配置。推荐vscode的stylelint插件(stylelint.vscode-stylelint)|
|git提交预检|[simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) + [lint-staged](https://github.com/okonet/lint-staged)| `推荐` | husky + lingt-staged | simple-git-hooks相比husky的配置更直观简单，性能更稳定 |
|UI库|[element-plus](https://element-plus.gitee.io/zh-CN/)|`必选`| -- | 根据项目具体情况，如不需要UI库可以不用 |
|状态管理|[pinia](https://pinia.vuejs.org/zh/)|`必选`| -- | -- |
|路由|[vue-router](https://router.vuejs.org/zh/index.html)|`必选`| -- | -- |
|网络|[axios](https://axios-http.com/docs/intro)|`必选`| -- | -- |
|css框架|[unocss](https://github.com/unocss/unocss)|`推荐`| windicss / tailwind / twind | unocss兼容windicss和tailwind，同时附带iconify等比较方便的功能; 推荐vscode的unocss插件(antfu.unocss) |
|图标|[@unocss/preset-icons](https://github.com/unocss/unocss/tree/main/packages/preset-icons)|`推荐`| -- | unocss整合的[iconify](https://iconify.design/)方案，可方便使用众多图标库，以及引入自定义图标 |
|工具|[lodash-es](https://www.npmjs.com/package/lodash-es) [vueuse](https://vueuse.org/)|`参考`| -- | -- |
|测试|[vitest](https://cn.vitest.dev/)|`参考`| -- | -- |

## 项目安装&启动
```bash
# 项目首次运行前，执行prepare脚本
$ pnpm prepare

# 安装依赖
$pnpm i

# 开发
$pnpm dev

# 打包
$pnpm build
```

## 里程碑/TODO
- [x] 基本框架，约定技术选型
- [ ] cli工具
- [x] 表单通用验证规则范例
- [x] 表单通用交互规则范例
- [x] 统一的UI规范(色系/字体/间距等)
- [ ] 更多..

## 从0开始的搭建记录
### 1. 创建vite项目

```bash
$ pnpm create vite
```

根据命令行提示，选择vue和typescript，然后cd到新建的项目目录下


### 2. package安装和更新

2.1 Node.js v16.13后引入了corepack作为"包管理器的管理器"，
推荐项目使用pnpm作为包管理器。执行以下步骤启用pnpm：
* 启用corepack
    ```bash
    # 当前应用激活
    $ corepack enable
    ```

* 修改package.json，新增指定包管理器

    ```json
    ...
    "packageManager": "pnpm@7.18.1"
    ...
    ```

2.2 更新包到最新版本

```bash
$ pnpm install
# 更新包到最新版本
$ pnpm up --latest
```

### 3. 配置Prettier

install prettier

```bash
$ pnpm add -D prettier
```

新增`prettier.config.cjs` 文件:

```js
module.exports = {
  semi: true,
  tabWidth: 2,
  bracketSpacing: true,
  bracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  printWidth: 100,
  htmlWhitespaceSensitivity: 'ignore',
  endOfLine: 'auto',
  vueIndentScriptAndStyle: true
}
```

新增`.prettierignore`文件

    node_modules/
    public/
    dist/
    dist-ssr/
    __snapshots__/
    *.local
    *.css
    *.md
    pnpm-lock.yaml
    .DS_Store

在`package.json`文件中添加format和format\:check脚本:

```json
{
  // ...
  "scripts": {
    // ...
    "format": "prettier . --write",
    "format:check": "prettier . --check",
    // ...
```

格式化当前项目代码:

```bash
$ pnpm format
```

### 4. 通用的node类型支持

安装 @types/node，给 `__dirname` 和 `import * as path from 'path'`等加持ts类型支持 :

    $ pnpm add -D @types/node

### 5. 配置env环境变量的类型支持

vite中配置环境变量的类型支持, 在`src/vite-env.d.ts`中添加interface ImportMetaEnv(如果没有`vite-env.d.ts`或者`env.d.ts`，在src目录下创建一个)

```ts
interface ImportMetaEnv {
  // .env中设置的各环境变量，例如VITE_BASE_URL
  VITE_BASE_URL: string
  ...
}
```

### 6. 配置src的目录别名@

配置src的目录别名，方便路径引入，例如 `import HelloWorld from '@/components/HelloWorld.vue'`.

编辑 vite.config.ts， 添加新的 resolve key, 如下:
```ts
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

通过配置tsconfig，使typescript也可以解析该别名，并支持自动补全路径。在compilerOptions下添加baseUrl和paths配置:
```json
{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
    // ...
```

### 7. 配置eslint

安装eslint及相关插件:

```bash
$ pnpm add -D eslint eslint-plugin-vue eslint-config-prettier
$ pnpm add -D vue-eslint-parser @typescript-eslint/parser
$ pnpm add -D @typescript-eslint/eslint-plugin
```

新增 `.eslintrc.cjs` 文件:

```js
module.exports = {
  env: { node: true },
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'warn',
  },
  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly',
  },
};
```

添加以下内容到 `package.json` 文件:

```json
{
  // ...
  "scripts": {
    // ...
    "lint": "eslint --ext .js,.ts,.vue --ignore-path .gitignore --fix src/",
    "lint:check": "eslint --ext .js,.ts,.vue --ignore-path .gitignore src/",
    // ...
```

给`src/vite-env.d.ts` 添加eslint-disable:

```ts
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
  const component: DefineComponent<{}, {}, any>
  export default component
}
```

执行pnpm lint进行代码格式化，并修复可能出现的语法错误

```bash
$ pnpm lint
```

### 8 安装&配置scss和stylelint

install packages

```bash
$ pnpm add -D sass postcss postcss-scss postcss-html stylelint stylelint-scss stylelint-config-standard-scss stylelint-config-recommended-vue stylelint-config-recess-order stylelint-config-css-modules
# 各package的功能说明：
# postcss // peer dependency of postcss-scss
# postcss-scss // peer dependency of stylelint-config-recommended-scss
# postcss-html // peer dependency of stylelint-config-recommended-vue
# stylelint-scss // lint-rules for scss
# stylelint-config-standard-scss // standard lint-rules configure for SCSS
# stylelint-config-recommended-vue // add overrides for .Vue files
# stylelint-config-recess-order // use the recess order for properties
# stylelint-config-css-modules // configure for CSS Modules methodology
# stylelint-config-prettier // turn off any rules that conflict with Prettier
```

新增`stylelint.config.cjs`文件:

```js
module.exports = {
  plugins: ['stylelint-scss'],
  extends: [
    'stylelint-config-standard-scss', // configure for SCSS
    // 'stylelint-config-recommended-vue', // add overrides for .Vue files
    'stylelint-config-recommended-vue/scss', // add overrides for .Vue files
    'stylelint-config-recess-order', // use the recess order for properties
    'stylelint-config-css-modules', // configure for CSS Modules methodology
    // stylelint v15 nologner need stylelint-config-prettier
    // 'stylelint-config-prettier', // turn off any rules that conflict with Prettier
  ],
  rules: {
    'rule-empty-line-before': null,
    'comment-empty-line-before': null,
    'color-hex-length': null,
    'custom-property-empty-line-before': null,
    'selector-class-pattern': null,
    'value-keyword-case': null,
    // 'at-rule-no-unknown': [true, { ignoreAtRules: ['apply'] }],
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    // 'function-no-unknown': [true, { ignoreFunctions: ['theme'] }],
    'function-no-unknown': null,
    'scss/function-no-unknown': true,
    'scss/dollar-variable-pattern': null,
    'scss/dollar-variable-empty-line-before': null,
    'scss/selector-no-redundant-nesting-selector': true,
  },
  ignoreFiles: ['dist/**/*'],
};
```

编辑`package.json`,添加stylelint脚本

```json
{
  // ...
  "scripts": {
    // ...
    "lint:style": "stylelint ./src/**/*.{vue,css,scss} --fix",
    "lint:style:check": "stylelint ./src/**/*.{vue,css,scss}",
    // ...
```

修改vscode配置`.vscode/settings.json`，禁用自带的样式检查器，使用stylelint进行css和scss的样式检查。

editor.codeActionsOnSave配置保存文件时进行stylelint和eslint自动格式化和错误修复。
```json
{
  // ...
  "css.validate": false,
  "scss.validate": false,
  "less.validate": false,
  "stylelint.snippet": ["css", "less", "postcss", "scss", "vue"],
  "stylelint.validate": ["css", "less", "postcss", "scss", "vue"],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  }
  //...
}
```

注意保持vscode-stylelint插件默认设置，避免无法解析vue文件而报Unknown word (CssSyntaxError)错误。

执行stylelint，修复可能的样式语法错误

```bash
$ pnpm lint:style
```

### 9. 安装&配置simple-git-hooks 和 lint-staged
编辑package.json，添加pre-commit和lint-staged脚本

```json
{
  ...
  "simple-git-hooks": {
    "pre-commit": "npx lint-staged"
  },
  "lint-staged": {
    "*.{vue,js,ts,jsx,tsx,md,json}": "eslint --ignore-path .gitignore --fix",
    "*.{vue,js,ts,jsx,tsx,md,json,scss,css}": "prettier . --write",
    "*.{scss,css,vue}": "stylelint --fix"
  }
  ...
}
```

```bash
pnpm add -D simple-git-hooks lint-staged
npm pkg set scripts.prepare="simple-git-hooks"
pnpm prepare
```

### 10. 常用库的安装&配置

#### 10.1 安装&配置vue-router

install

```bash
$pnpm add vue-router
```

新增router文件`src/router/index.ts`:

```ts
import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/modules/home/views/Home.vue';

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

```

编辑 `src/main.ts` 文件:

```ts
import { createApp } from 'vue'

import './style.css'
import App from './App.vue'
import { router } from './router'

createApp(App).use(router).mount('#app')
```

编辑`App.vue`文件，添加RouterView组件

#### 10.2 安装pinia

```bash
$ pnpm add pinia
```

安装&配置详见[pinia官方文档](https://pinia.vuejs.org/zh/getting-started.html)

#### 10.3 安装element-plus

```bash
$ pnpm add element-plus
```

根据[官方文档](https://element-plus.org/zh-CN/guide/quickstart.html#%E7%94%A8%E6%B3%95)，按需选择完整引入或者按需引入，完整引入时build后element相关文件大小约0.8M。当前脚手架项目选择完整引入。

⚠️注意：
使用按需引入时，如果使用vscode + volar插件，仍然需要配置tsconfig来实现element组件的类型提示:

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["element-plus/global"]
  }
}
```

#### 10.4 安装&配置unocss

安装unocss和@iconify/json。@iconify/json包含了iconify所有的图标库，你也可以只安装需要用的图标库：@iconify-json/[the-collection-you-want]

```bash
$ pnpm add -D unocss @iconify/json
```

添加unocss插件到`vite.config.ts`

```ts
...
import Unocss from 'unocss/vite';
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          scale: 1.2,
          warn: true,
        }),
      ],
      transformers: [transformerDirectives(), transformerVariantGroup()],
    }),
  ]
  ...
});
```

在vite入口文件`main.ts`中引入unocss

```ts
import { createApp } from 'vue';
...
import 'uno.css'; // add this line
...
import App from '@/App.vue';

createApp(App).mount('#app');
```

#### 10.5 安装axios

```bash
$ pnpm add axios
```

#### 10.6 安装lodash-es, @vueuse/core and @vueuse/head

安装lodash-es
```bash
$ pnpm add lodash-es
$ pnpm add -D @types/lodash-es
```

安装@vueuse/core 和 @vueuse/head
```bash
$ pnpm add @vueuse/core @vueuse/head
```

### 11. 安装&配置vitest

添加如下内容到`.gitignore`:

```bash
# Vitest related files
__snapshots__/
coverage/
```

安装vitest:

```bash
$ pnpm add -D vitest @vitest/coverage-c8 @vue/test-utils jsdom
```

添加如下脚本到`package.json`:

```json
{
  // ...
  "scripts": {
    // ...
    "test": "vitest run",
    "test:coverage": "vitest run --coverage",
    "test:update": "vitest --update",
    "test:watch": "vitest",
    // ...
```

编辑`tsconfig.json`，添加类型"vitest/globals":

```json
{
  "compilerOptions": {
    // ...
    "types": ["element-plus/global", "vitest/globals"]
  }
}
```

添加如下内容到`vite.config.ts`，注意第一行添加reference标签:

```ts
/// <reference types="vitest" />

// ...
  test: {
    environment: 'jsdom',
    globals: true,
  }
})
```

创建文件`test/setup.ts`:

```ts
import { vi } from 'vitest'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

vi.mock('axios', () => {
  return {
    default: {
      create() {
        return {
          get() {
            return Promise.resolve({})
          },
          post() {
            return Promise.resolve({})
          }
        }
      }
    }
  }
})
```

编辑`vite.config.ts`，配置刚创建的setup文件:

```ts
{
  // ...
  test: {
    // ...
    setupFiles: [resolve(__dirname, 'test/setup.ts')]
  }
}
```
