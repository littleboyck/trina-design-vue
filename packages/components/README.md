## npm 作用域包的发布
{
  "name": "@your-scope/my-package",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module", // 是es6语法， 或指定commonjs
  "publishConfig": {
    "access": "public" // 如果不指定，默认情况下，作用域包就是私有的 private
  }
}
## 发布
npm publish 
或者 npm publish --access public // 发布为公开
或者 npm publish --assccess private // 发布为私有

## 更新包
* 更新包：更新 `package.json` 中的 `version` 属性，然后运行 `npm publish --access public`，这会发布新的版本。
## 删除包
* `npm unpublish @your-scope/my-package --force`

## 私有仓库

## 方法 1：使用 Verdaccio 搭建公司内部 NPM 私有仓库
### Verdaccio 是轻量级的私有 NPM 仓库，非常适合快速部署在公司内部网络中，易于配置和维护。

1. **安装 Verdaccio**： 在公司内部服务器上安装 Verdaccio。
`npm install -g verdaccio
`
2. **启动 Verdaccio** ：`verdaccio`  
Verdaccio 默认运行在本地 4873 端口，可以在服务器上通过 http://localhost:4873 访问，也可以配置不同的端口。

3. **配置 Verdaccio**: 
 * auth：设置登录认证方式，可以配置使用 LDAP 等公司认证方式。
 * publish：限制哪些用户或 IP 地址可以发布包。
 * proxy：配置代理，可以在内部服务器与外部 NPM 仓库之间建立连接，允许无法访问外网的用户安装开源包。

4. **设置防火墙**： 确保内部服务器防火墙允许端口 4873（或您配置的端口）上的访问，从而允许公司网络中的其他用户访问该服务。

5. **配置 NPM 使用内部仓库**： 在客户端（即开发者机器）。  
执行以下命令：`npm set registry http://your-internal-server:4873
`
或者
开发目录下新建`.npmrc`文件，内容如下：`registry=http://your-internal-server:port/`
6.发布和安装包：
 * 发布到私服： `npm publish`
`
 * 安装包： `npm install`