# 使用Docusaurus搭建个人博客

## 创建项目

```bash
# npx @docusaurus/init@latest init [name] [template] ## name:项目名, template:模板
npx @docusaurus/init@latest init my-blog classic
```

## 安装依赖包

```bash
## 如果你打开的是别人的项目, 这个时候一般是没有任何依赖包的, 但是所以需要的包已在package.json里面写好了, 这个时候我们就可以使用yarn install来安装所有项目中需要的依赖包
yarn install # 或 yarn
```

## 本地启动

```bash
yarn start
```

## 编译

```bash
yarn build
```

## 部署

```bash
# GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
GIT_USER=xqg1316 USE_SSH=true yarn deploy
```

访问 https://xqg1316.github.io/my-blog
