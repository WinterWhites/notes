#                                         										webpack

# 一、webpack.config.js与loader的使用

## 1. webpack-config.js文件

<img src="C:\Users\winter\Desktop\js知识点截图\webpack\webpack中loader配置.png" style="zoom:60%;" />

## 2.less工具把less文件转为css文件

命令行使用：

![](C:\Users\winter\Desktop\js知识点截图\webpack\less工具把less文件转为css文件命令.png)

webpack-config-js文件中处理

![](C:\Users\winter\Desktop\js知识点截图\webpack\配置less转css.png)

## 3.postcss(浏览器兼容问题)

<img src="C:\Users\winter\Desktop\js知识点截图\webpack\浏览器市场份额.png" style="zoom:50%;" />

<img src="C:\Users\winter\Desktop\js知识点截图\webpack\浏览器市场份额1.png" alt="浏览器市场份额1" style="zoom:50%;" />



![](C:\Users\winter\Desktop\js知识点截图\webpack\browserslist命令行使用.png)

![](C:\Users\winter\Desktop\js知识点截图\webpack\postcss和autoprefixer基本使用.png)

注意：要使用postcss工具需依赖于postcss-cli进行扩展插件

#### postcss结合插件autoprefixer的使用

![](C:\Users\winter\Desktop\js知识点截图\webpack\postcss结合插件autoprefixer的使用.png)



#### 抽离postcss公共插件

![](C:\Users\winter\Desktop\js知识点截图\webpack\postcss抽离公共插件代码(插件).png)



#### 特别：关于@import方式css文件处理方式

![](C:\Users\winter\Desktop\js知识点截图\webpack\关于@import方式css文件处理方式.png)



## 4. 配置file-loader及其简单实现

![](C:\Users\winter\Desktop\js知识点截图\webpack\file-loader配置基本实现.png)

![](C:\Users\winter\Desktop\js知识点截图\webpack\file-loader打包图片简单实现.png)

## 5、url-loader配置文件

![](C:\Users\winter\Desktop\js知识点截图\webpack\url-loader配置文件.png)



## 6、asset module type替代资源加载loader

![](C:\Users\winter\Desktop\js知识点截图\webpack\asset module type配置资源类型.png)

代替资源型loader:

![](C:\Users\winter\Desktop\js知识点截图\webpack\asset module type配置.png)

 #### 字体打包过程

![](C:\Users\winter\Desktop\js知识点截图\webpack\字体资源打包.png)



# 二、plugin的使用

### 1.clean-webpack-plugin -> 每次运行时自动重新打包dist静态资源包

![](C:\Users\winter\Desktop\js知识点截图\webpack\clean-webpack-plugin.png)



### 2. html-webpack-plugin -> 打包后自动生成index.html文件

![](C:\Users\winter\Desktop\js知识点截图\webpack\html-webpack-plugin.png)



### 3.DefinePlugin定义全局常量

![](C:\Users\winter\Desktop\js知识点截图\webpack\DefinePlugin定义全局常量.png)

### 4.copy-webpack-plugin插件基本使用

![](C:\Users\winter\Desktop\js知识点截图\webpack\copy-webpack-plugin插件基本使用.png)



# 三、source-map的使用

### 1. 简单配置source-map

![](C:\Users\winter\Desktop\js知识点截图\webpack\source-map简单原理.png)

# 四、babel

### 1. babel中在命令行使用箭头函数转普通函数的插件使用

![](C:\Users\winter\Desktop\js知识点截图\webpack\babel在命令行中的基本使用.png)

### 2. babel中使用命令行预设@babel-preset-env的基本转换es6以下代码

![](C:\Users\winter\Desktop\js知识点截图\webpack\babel使用预设preset-env.png)

### 3. 浏览器和babel执行代码过程

![](C:\Users\winter\Desktop\js知识点截图\webpack\babel底层原理.png)

babel编译原理图

![](C:\Users\winter\Desktop\js知识点截图\webpack\babel原理图.png)

### 4. webpack.config.js中配置基本babel

![](C:\Users\winter\Desktop\js知识点截图\webpack\webpack.config.js中配置基本babel.png)

### 5. babel.config.js文件配置

![](C:\Users\winter\Desktop\js知识点截图\webpack\babel.config.js文件基本配置.png)



### 6. babel.config.js配置polyfii

安装npm install core-js regenerator-runtime --save

![](C:\Users\winter\Desktop\js知识点截图\webpack\core-js和regenerator-runtime.png)

<img src="C:\Users\winter\Desktop\js知识点截图\webpack\babel.config.js配置polyfill.png" style="zoom:100%;" />

## 7. tsc编译ts文件(没有polyfill功能)

![](C:\Users\winter\Desktop\js知识点截图\webpack\编译ts文件.png)

 ### 8. babel编译ts文件(没有类型检测)

![](C:\Users\winter\Desktop\js知识点截图\webpack\babel编译ts文件.png)

### 9. babel+tsc编译ts文件的最佳实践方式

![](C:\Users\winter\Desktop\js知识点截图\webpack\babel编译ts文件的最佳实践.png)

### 10. webpack配置编译vue文件

![](C:\Users\winter\Desktop\js知识点截图\webpack\webpack编译vue文件.png)



# 五、eslint





# 六、devServer和HMR

###  1.webpack中watch实时监听源代码改变(依赖打包后的文件)

![](C:\Users\winter\Desktop\js知识点截图\webpack\webpack脚本命令中watch的使用.png)

### 2. webpack-dev-server库监听源码的使用(不依赖打包后的文件)



![](C:\Users\winter\Desktop\js知识点截图\webpack\webpack-dev-server的使用.png)



### 3. devServer(HMR)热模块更新

![](C:\Users\winter\Desktop\js知识点截图\webpack\devServer热模块更新.png)

### 4. vue-loader加载vue的HMR热更新模块:

![](C:\Users\winter\Desktop\js知识点截图\webpack\vue-loader加载HMR热模块(自动).png)

### 5. HMR模块更新图原理解析

![](C:\Users\winter\Desktop\js知识点截图\webpack\HMR原理图解析.png)

### 6. publicPath属性的路径问题

![](C:\Users\winter\Desktop\js知识点截图\webpack\publicPath属性路径问题.png)

### 7. 配置proxy代理跨域

![](C:\Users\winter\Desktop\js知识点截图\webpack\dev-Server配置proxy跨域访问.png)

### 8. resolve扩展名和别名的设置

![](C:\Users\winter\Desktop\js知识点截图\webpack\resolve扩展名和别名的设置.png)





























































