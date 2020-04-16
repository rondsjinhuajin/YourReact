## 写一篇有关react的知识体系
> 初衷：本人前端开发，因为工作中一直使用的是react,所以一直想记录下来有关react的二年学习过程中间的学习心得，以及项目实战的经验，同时通过记录加深学习的记忆，形成内心有关react相关的知识体系，心中有一条连贯的知识线路。

> 说明：由于水平有限，编写过程中难免会有一些错误，欢迎大家提出问题和意见

**转载请注明出处，保留原文链接以及作者信息**

本文相关代码详见github地址：https://github.com/rondsjinhuajin/YourReact

**欢迎fork和star**

## 目录
- 1.前言和简介
- 2.核心概念
- 3.高级进阶
- 4.Hook

> 前言和简介
- 1，初衷：本次教程希望让非前端人员了解基本的react使用，前端开发能对react认识有所加深，甚至到达进阶的水平。接下来，我将通过自己对react的认识，以及实际项目中的使用方法，通过简单易懂的方式逐步揭开react的神秘面纱。说明：此次教程相关代码是在自己实践和深入理解之后才会输出，但是由于水平有限，讲解理解过程中难免会有一些错误，欢迎大家提出问题和意见。
> 注：react指的是react.js，版本号：16.12.0
- 2，前置知识：js+html+css，需要安装node环境，构建工具webpack，基本ES6语法使用
- 3，（5个W一个H）why学习react?what是react？who学习react?where环境学习react?when什么时间学习?how怎么样?

    当你把这篇文章看完，我相信这些问题自然不是问题了！
- 4，react简介: 一句话：A JavaScript library for building user interfaces (用于构建用户界面的JavaScript库)
- 5，背景知识：react是由Facebook在2013年5月推出的一款JS前端开源框架,推出时主打特点是函数式编程风格。值得一说的是，到目前为止react是世界上使用人数最多的前端框架,它拥有全球最健全的文档和社区体系。我们这里学习的是React Fiber版本，也就是React16这个版本，这个版本算是一个大升级，增加了很多新的特性，这些特性我都会后面中给大家一点点讲，官网地址：https://reactjs.org
- 6，优点：生态强大，声明式编程，组件化，一次学习随处编写，上手简单，社区强大（reactNative reactVR）
- 7，谁在用：国内的一二线互联网公司大部分都在使用React进行开发，比如阿里、美团、百度、去哪儿、网易 、知乎这样的一线互联网公司都把React作为前端主要技术栈
- 8，react和vue的对比？

    #### 不同点:
    - react是mvc,vue是mvvm
    - vdom不同：react是state改变所有的组件都改变，vue是通过组件之间的依赖关系
    - 组件写法不同：react是jsx和style all in js，vue是html+js+css写在同一个文件里
    - vue数据绑定是双向的，react是严格的单向数据流
    - state对象在react应用中不可变的,需要使用setState方法更新状态;在vue中,state对象不是必须的,数据由data属性在vue对象中管理
    - react是函数式编程，vue是渐进式编程
    - Vue的优势包括： 
    模板和渲染函数的弹性选择， 简单的语法及项目创建， 更快的渲染速度和更小的体积；
    - React的优势包括： 更适用于大型应用和更好的可测试性，同时适用于Web端和原生App， 更大的生态圈带来的更多支持和工具
    - 下面是一图胜前言：
![](https://user-gold-cdn.xitu.io/2020/4/12/1716c341395c7747?w=554&h=643&f=png&s=211833)
    #### 相同点：
    - 都有vdom
    - 组件开发 props state
    - 数据驱动视图
    - 专注于核心代码。其他都依赖第三方库
    - 都支持SSR
- 9，拓展：浏览器原理？浏览器如何解析html,css,js代码？什么是声明或者命令式编程？函数式编程是什么？（FRP）JS函数柯里化？

  答：当代现有的浏览器主要由用户界面（The user interface）、浏览器引擎（The browser engine）、呈现引擎（The rendering engine）、网络（Networking）、JavasScript 解释器（JavaScript interpreter）、用户界面后端（UI backend）、数据存储组成（Data storage）。
  
  FRP:函数式编程关心数据的映射，函数式编程是声明式编程的一部分。javascript中的函数是第一类公民，这意味着函数是数据，你可以像保存变量一样在应用程序中保存、检索和传递这些函数。
  函数式编程有些核心的概念，如下：

    - 不可变性(Immutability)
    - 纯函数(Pure Functions)
    - 数据转换(Data Transformations)
    - 高阶函数 (Higher-Order Functions)
    - 递归
    - 组合
  
  函数柯里化：Currying(果然是满满的英译中的既视感)，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术；
  
 一道经典面试题：
  // 实现一个add方法，使计算结果能够满足如下预期：
```  
add(1)(2)(3) = 6;
add(1, 2, 3)(4) = 10;
add(1)(2)(3)(4)(5) = 15;

function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = Array.prototype.slice.call(arguments);

    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var _adder = function() {
        _args.push(...arguments);
        return _adder;
    };

    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
        return _args.reduce(function (a, b) {
            return a + b;
        });
    }
    return _adder;
}

add(1)(2)(3)                // 6
add(1, 2, 3)(4)             // 10
add(1)(2)(3)(4)(5)          // 15
add(2, 6)(1)                // 9```


