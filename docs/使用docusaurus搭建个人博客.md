#  使用Docusaurus搭建个人博客

## 目录

## 搭建个人博客介绍

[Github: Docusaurus地址](https://github.com/facebook/docusaurus)  
[Docusaurus 中文网](https://www.docusaurus.cn/docs/)

## 安装运行环境

使用 npm 或 yarn 的包管理器

[Node.js](https://nodejs.org/en/)

[Yarn](https://classic.yarnpkg.com/en/)

### 安装Node

下载`node-v16.13.1-darwin-arm64.tar.gz`后，打开Mac终端

```bash
cd /opt/modules
mkdir node
tar -zxvf ~/Downloads/node-v16.13.1-darwin-arm64.tar.gz -C node
ln -s /opt/modules/node/node-v16.13.1-darwin-arm64 /opt/apps/node
```

添加环境变量 `vim ~/.zshrc`

```bash
# ------------------------< Node >-----------------------
export NODE_HOME=/opt/apps/node
export PATH=$NODE_HOME/bin:$PATH
```

生效环境变量

```bash
source ~/.zshrc
```

检查是否安装成功, 如出现版本号, 证明安装成功

```bash
node -v
npm -v
```

#### 配置Node环境

```bash
# 在NodeJs文件目录下创建global和cache的文件夹
cd /opt/apps/node
mkdir node_global
mkdir node_cache

npm config set prefix "/opt/apps/node/node_global"
npm config set cache "/opt/apps/node/node_cache"
```

查看配置是否设置成功

```bash
npm config get prefix
npm config get cache

# 通过下面这个命令查看配置
npm config list

npm root -g
# 出现以下内容, 说明配置成功
# /opt/apps/node/node_global/lib/node_modules
```

#### npm 安装模块

```bash
# 利用npm安装xxx模块到当前命令行所在目录
npm install xxx

# 利用npm安装全局模块xxx
npm install -g xxx
```

测试, 在终端输入 

```bash
npm install --global vue-cli
```

#### npm 删除模块

```bash
# 删除xxx模块
npm uninstall xxx

# 删除全局模块xxx
npm uninstall -g xxx
```

#### npm更换镜像源

```bash
# npm设置淘宝镜像
npm config set registry "https://registry.npm.taobao.org"

# 查看镜像设置
npm config get registry

# 还原成npm镜像
# npm config set registry "https://registry.npmjs.org/"

# 清除npm缓存
npm cache clean --force
```

#### npm常用命令及参数详解

```bash
# --save, -S参数意思是把模块的版本信息保存到dependencies(生产环境依赖)中, 即你的package.json文件的dependencies字段中
npm install packagename --save # 或 -S

# --save-dev, -D参数意思是吧模块版本信息保存到devDependencies(开发环境依赖)中, 即你的package.json文件的devDependencies字段中
npm install packagename --save-dev # 或 -D

# --save-optional, -O参数意思是把模块安装到optionalDependencies(可选环境依赖)中, 即你的package.json文件的optionalDependencies字段中
npm install packagename --save-optional # 或 -O

# --save-exact, -E参数的意思是精确的安装指定版本的模块, 细心的同学会发现dependencies字段里每个模块版本号前面的^不见了...
npm install packagename --save-exact # 或 -E

# 如果你打开的是别人的项目, 这个时候一般是没有任何依赖包的, 但是所以需要的包已在package.json里面写好了, 这个时候我们就可以使用npm install来安装所有项目中需要的依赖包了
npm install packagename -g # 或 --global

# 安装全局的模块(不加参数的时候默认安装本地模块)
npm list 或 npm ll 或 npm la 或 npm ls

# 卸载已经安装的模块
npm uninstall packagename [options]

# 列出所有已经过时了的模块，对于已经过时了的模块可以使用下面的命令去更新
npm outdated

# 更新已经安装的模块(或全局的模块)
npm update [-g]

# 查看某条命令的详细帮助
npm help '命令'

# 查看命令的绝对路径
npm root
```

#### npm源管理软件nrm

```bash
npm install -g nrm

# 查看所有源
nrm ls

### 显示信息如下
  npm ---------- https://registry.npmjs.org/
  yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.npmmirror.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/

之后输入 nrm use npm 这样即可切换回npm的官方源
```

### 安装Yarn(推荐使用npm安装)

- 安装步骤

第一种:

进入: [Yarn](https://classic.yarnpkg.com/en/)  
点击: `INSTALL YARN` -> 选择`Alternatives`下拉菜单可以选择**操作环境**  
安装:   
①MacOS环境中如果尚未安装Node.js, 使用`brew install yarn`安装, `brew upgrade yarn`更新  
②MacOS环境中使用脚本安装`curl -o- -L https://yarnpkg.com/install.sh | bash`  
检测: `yarn --version`

推荐: [yarn官网](https://classic.yarnpkg.com/en/docs/install#mac-stable) | Mac安装yarn介绍

第二种:

在开始使用 Yarn 之前，您首先需要在系统上安装它。安装 Yarn 的方法有很多种，但建议使用一种跨平台的方法：

通过 npm 安装
建议通过npm包管理器安装Yarn，当您在系统上安装它时，它与Node.js捆绑在一起。

安装 npm 后，您可以运行以下命令来安装和升级Yarn：

```bash
npm install yarn -g # 或 --global
# npm uninstall yarn -g
```

检查安装, 通过运行检查是否安装了Yarn:

```bash
yarn --version
```

#### yarn更换镜像源

```bash
# 如果yarn install的速度很慢, 可以尝试配置淘宝Registry
yarn config set registry "https://registry.npm.taobao.org"

# 查看当前 Registry 的命令如下(默认 https://registry.yarnpkg.com)
yarn config get registry
```

#### yarn常用命令

```bash
# yarn安装ramda(指定包名: [package]@[version])
yarn add ramda

# yarn删除ramda
yarn remove ramda

# yarn更新ramda
yarn upgrade ramda

# 创建项目
yarn init

# 安装依赖包
yarn install # 或 yarn

# 添加依赖包
yarn add

# 配置淘宝镜像
yarn config set registry "https://registry.npm.taobao.org"
```

#### yarn命令列表

| 命令                     | 操作                                   | 参数                                                         | 标签                                                         |
| ------------------------ | -------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| yarn add                 | 添加依赖包                             | 包名                                                         | --dev/-D                                                     |
| yarn bin                 | 显示yarn安装目录                       | 无                                                           | 无                                                           |
| yarn cache               | 显示缓存                               | 列出缓存包：ls，<br />打出缓存目录路径：dir，<br />清除缓存：clean | 无                                                           |
| yarn check               | 检查包                                 |                                                              |                                                              |
| yarn clean               | 清理不需要的依赖文件                   |                                                              |                                                              |
| yarn config              | 配置                                   | 设置：`set <key> <value>`， <br />删除：`delete`， <br />列出：`list` | [-g \| --global]                                             |
| yarn generate-lock-entry | 生成锁定文件                           | 无                                                           | 无                                                           |
| yarn global              | 全局安装依赖包                         | yarn global <add/bin/list/remove/upgrade> [--prefix]         | --prefix 包路径前缀                                          |
| yarn info                | 显示依赖包的信息                       | 包名                                                         | --json：json格式显示结果                                     |
| yarn init                | 互动式创建/更新package.json文件        | 无                                                           | --yes/-y：以默认值生成package.json文件                       |
| yarn install             | 安装所有依赖包                         |                                                              | --flat：只安装一个版本；<br />--force：强制重新下载安装；<br />--har：输出安装时网络性能日志；<br />--no-lockfile：不生成yarn.lock文件；<br />--production：生产模式安装（不安装devDependencies中的依赖） |
| yarn licenses            | 列出已安装依赖包的证书                 | ls：证书列表；<br />generate-disclaimer：生成免责声明        |                                                              |
| yarn link                | 开发时链接依赖包，以便在其他项目中使用 | 包名                                                         |                                                              |
| yarn login               | 保存你的用户名、邮箱                   |                                                              |                                                              |
| yarn logout              | 删除你的用户名、邮箱                   |                                                              |                                                              |
| yarn list                | 列出已安装依赖包                       |                                                              | --depth=0：列表深度，从0开始                                 |
| yarn outdated            | 检查过时的依赖包                       | 包名                                                         |                                                              |
| yarn owner               | 管理拥有者                             | ls/add/remove                                                |                                                              |
| yarn pack                | 给包的依赖打包                         | --filename                                                   |                                                              |
| yarn publish             | 将包发布到npm                          |                                                              | --tag：版本标签；<br />--access：公开（public）还是限制的（restricted） |
| yarn remove              | 卸载包，更新package.json和yarn.lock    | 包名                                                         |                                                              |
| yarn run                 | 运行package.json中预定义的脚本         |                                                              |                                                              |
| yarn self-update         | yarn自身更新--未实现                   |                                                              |                                                              |
| yarn tag                 | 显示包的标签                           | add/rm/ls                                                    |                                                              |
| yarn team                | 管理团队                               | create/destroy/add/rm/ls                                     |                                                              |
| yarn test                | 测试 = yarn run test                   |                                                              |                                                              |
| yarn unlink              | 取消链接依赖包                         |                                                              |                                                              |
| yarn upgrade             | 升级依赖包                             |                                                              |                                                              |
| yarn version             | 管理当前项目的版本号                   | --new-version ：直接记录版本号；<br />--no-git-tag-version：不生成git标签 |                                                              |
| yarn why                 | 分析为什么需要安装依赖包               | 包名/包目录/包目录中的文件名                                 |                                                              |


### npm/yarn命令对比

| 描述           | npm                                | yarn                   |
| -------------- | ---------------------------------- | ---------------------- |
| 安装           | npm install/i                      | yarn install           |
| 卸载           | npm unintall/un                    | yarn remove            |
| 全局安装       | npm install xxx --global/-g        | yarn global add xxx    |
| 安装包         | npm install xxx --save/-S          | yarn add xxx           |
| 开发模式依赖包 | npm install xxx --save-dev/-D      | yarn add xxx -dev/-D   |
| 更新           | npm update                         | yarn upgrade           |
| 全局更新       | npm update -g                      | yarn global upgrade    |
| 卸载           | npm unintall xxx                   | yarn remove xxx        |
| 全局卸载       | npm unintall xxx --global/-g       | yarn global remove xxx |
| 清除缓存       | npm cache clean                    | yarn cache clean       |
| 重装           | rm -rf node_modules && npm install | yarn upgrade           |


## 使用Docusaurus搭建博客

[使用 Docusaurus 搭建个人博客教程](https://zxuqian.cn/deploy-a-docusaurus-site/) | 教程

- 创建项目, 安装 docusaurus

必须使用cmd, 不要用git bash, 否则yarn init报错 Can't answer a question unless a user TTY

注: MacOS环境使用终端, Win环境使用cmd

```bash
# 准备Blog路径(没有则新建Blog)
# Win
cd /d/Apps/Project/Blog

# Mac
cd && cd ./Apps/Project/Blog

# 运行下边的命令创建项目
# npx @docusaurus/init@latest init [name] [template] ## name:项目名, template:模板
npx @docusaurus/init@latest init blog classic

# 进入创建的项目
cd blog

# 安装依赖包
## 如果你打开的是别人的项目, 这个时候一般是没有任何依赖包的, 但是所以需要的包已在package.json里面写好了, 这个时候我们就可以使用yarn install来安装所有项目中需要的依赖包
yarn install

# 本地启动
yarn start
```

运行成功了之后呢，它会自动打开一个浏览器，然后访问的是`http://localhost:3000`，可以看到他这个界面，跟咱们之前看到的官网的文档是一样的。上面有文档、博客、还有 github 链接，切换暗黑和白天模式。

### Docusaurus项目结构

```bash
my-website
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── package.json
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock
```

- /blog/ - 里面就是写博客文章的，都是 markdown 文件。
- /docs/ - 里面就是写文档的，也都是 markdown 文件。
- /src/ - 源代码文件夹，里面有一个 css 文件夹，然后它里边有个 custom.css 里面是写自定义的 css 代码的。
    - /src/pages - 里边放一些自定义的页面，使用 react 语法来写。
- /static/ - 放静态资源文件，这些文件会出现在最后打包出来的静态网站里面，在它的根目录下边，它下边的 img 文件夹是放静态图片的。
- /docusaurus.config.js - 这个是配置这个站点的。
- /package.json - node.js 的工程配置文件。
- /sidebar.js - 配置文档页面侧边栏，只有文档页面才有，用它来定义文档的目录结构。

另外呢，也可以自己创建一个 theme 文件夹，里边可以定义一些组件用来替换默认主题里面的一些组件。

## 配置为博客模式

docusaurus 默认是文档风格的主页，要是把它改成一个博客形式的，需要做一点点的配置。打开它的配置文件 `docusaurus.config.js`。把 presets 这个配置改成如下所示：

- vim docusaurus.config.js

大约从第17行开始修改, 内容如下:

```js
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // 文档
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // 请把这个远程仓库换成自己的远程仓库, 默认为"editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',"
          // 项目放到gitee可以快速访问
          //editUrl: 'https://github.com/xqg1316/blog/tree/master/docs/',
          editUrl: 'https://gitee.com/xqg1316/blog/tree/master/docs/',
        },
        // 博客
        blog: {
          showReadingTime: true,
          // 请把这个远程仓库换成自己的远程仓库, 默认为"editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/blog/',"
          // 项目放到gitee可以快速访问
          //editUrl: 'https://github.com/xqg1316/blog/tree/master/blog/',
          editUrl: 'https://gitee.com/xqg1316/blog/tree/master/blog/',
        },
        // API, 格式如下
        /** api: {
          editUrl: 'https://gitee.com/xqg1316/blog/tree/master/api/',
        }, */
        // 主题
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
```

如果不用文档的话，就把 `docs` 这个删除或者注释了，然后加上 `blog` ，里边添加：

- path 属性，它的值为 `./blog`，也就是指向 `blog` 的文件夹。
- routeBasePath 属性，这个是访问这个博客的路径，设置成/斜杠就是默认网站的首页。

然后把 `src/pages` 下边 `index.js` 的改成别的名字或者是给删除，这样的话他就不会同时匹配这两个文件了。

顶部导航的 `docs` 如果要去掉的话，可以找到 `navBar` 这个配置项，把 `links` 中的有关 `docs` 的这段删掉：

```bash
{ to: "docs/doc1", label: "Docs", position: "left" }
```

## 发布到 GitHub Pages

- vim docusaurus.config.js

大约从第7行开始修改, 内容如下:

```js
title: 'My Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://xqg1316.github.io', // 修改为Github Pages地址
  baseUrl: '/', // Web界面显示时URL后面的"/xxx/"路径, 这里是个人是配置为"/"
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'xqg1316', // github的用户名, https://github.com/xqg1316/blog
  projectName: 'blog', // github的项目名称, https://github.com/xqg1316/blog
```

在 `docusaurus.config.js` 中设置两个必需的参数：

- organizationName: 拥有存储库的 GitHub 用户或组织。 在 Docusaurus 的情景下，这 GitHub 组织将是 "facebook"。
- projectName: 您的项目的 GitHub 存储库的名称。 例如，Docusaurus 托管在 https://github.com/facebook/docusaurus, 所以在这种情景下我们的项目名称将是 "docusaurus"。

其中一个必需的参数设置为环境变量：

- GIT_USER: 具有提交访问权限的 GitHub 帐户的用户名。 对于你自己的仓库，这通常是你自己的 GitHub 用户名。

还有两个可选参数设置为环境变量：

- USE_SSH: 如果设置为 true，则使用 SSH 代替 HTTPS 连接到 GitHub 仓库。 如果未设置此变量，则默认值是 HTTPS 。
- CURRENT_BRANCH: 包含将部署的最新文档更改的分支。 通常情况下，分支是 master，但是除了 gh-pages 外，它可以是任何分支（默认或其他）。 如果没有设置这个变量，那么将使用当前的分支。

```bash
cd my-blog

# 使用https提交项目
GIT_USER=xqg1316 yarn deploy

# 使用ssh提交项目
GIT_USER=xqg1316 USE_SSH=true yarn deploy
```

访问 https://xqg1316.github.io/blog/ 在线地址
