<<<<<<< HEAD
# 关于
### 本仓库是为了方便本人做开发而定制的一套脚手架，预计将本人喜好的库引入并做好封装
### 核心宗旨：
- 快速开发
- 扩展性强
- 封装良好
- 兼容多端

# 脚手架
## 支持
- vue 2.0
- vue-cli 3.0
- vue-router
- webpack
- PostCSS
- vuex
- Less
- babel
- Ant Design ui(默认引入)
- Element ui (需手动引入)

## 自定义功能
- 引入FastClick
- 引入postcss-px-to-viewport
- 引入postcss-write-svg
- 封装了axios，添加了拦截器及不同环境下的配置(ps:接口与跨域请看"需注意"第五点)
- 新增vue/component 代码片段(置于snippets目录下,可在VsCode中使用)

## 待引入功能
- 编写基础功能代码
- 中后台开发

# ⚠️需注意
## 1. 不转换px为viewport
只需要在CSS中写:```**Px```，使用大写即可跳过```postcss-px-to-viewport```转换

## 2. 环境切换
我在```api/baseUrl.js```中定义了不同环境URL, 方便不同的环境的切换, 切换方法可在```package.jaon```中创建，其原理是通过命令参数，运行或编译的时候获取根目录下对应的配置文件，最后执行到api下的BaseUrl.js切换不同地址
### 切换方法
#### development:
```
npm run serve
```
#### pre:
```
npm run serve:pre
```
#### production:
```
npm run serve:prod
```

## 3. 前后端接口联调
开发前与后端设计接口结构、所需数据，使用[easy-mock平台](https://easy-mock.com)进行模拟数据的生成，前端使用该平台提供接口进行开发，等待联调时再切换回后端的URL
### 使用方法：
1. 在[easy-mock平台](https://easy-mock.com)设计接口
2. 获取接口地址如：
    ```
    https://easy-mock.com/mock/5cb098cdfeb025683678126b/api/todo
    ```
3. 配置baseUrl，在```api/baseUrl.js```中配置
    ```
    baseUrl = 'https://easy-mock.com/mock/5cb098cdfeb025683678126b/api' // 测试环境url
    ```
4. 设置接口地址，在```api/todo/urls.js```中配置
    ```
    todo: baseUrl + '/todo'
    ```
5. 享受开发吧！
> 开发完成后，只需要切换```baseUrl```为服务器URL即可！


# 感谢
> [周小肆：Axios封装](https://www.jianshu.com/p/8331e15fcacf)
ps:基于他进行封装，但是他代码有点坑，1是需要在```package.json```进行自定义，而他的没说清楚，只说了build模式，后面我自定义了几种命令模式，用于不同环境的切换。2是```install.js``` ```return```后面少写了'}'号- -
=======
# demo
>>>>>>> 6c679ce4dab83ee6040ea57c1519d39aaec7f0ba
