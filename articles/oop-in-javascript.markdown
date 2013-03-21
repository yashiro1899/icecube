Title: OOP in JavaScript
Author: Ice White
Date: Mon Mar 11 2013 11:28:46 GMT+0800 (CST)
Node: v0.8.22
Tags: javascript, oop
Theme: monokai

![oop](s3://ice.cube:oop.jpg "oop")

#### Joe Armstrong（Erlang 发明人）
> 面向对象编程语言的问题在于，它总是附带着所有它需要的隐含环境。你想要一个香蕉，但得到的却是一个大猩猩拿着香蕉，而其还有整个丛林。

#### Eric Allman（sendmail 创造者）
> 我一度曾经迷恋上了面向对象编程。现在我发现自己更倾向于认为面向对象是一个阴谋，企图毁掉我们的编程乐趣。

#### Rob Pike（Go 语言之父）
> 面向对象设计是用罗马数字做计算。

[http://www.linuxeden.com/html/news/20130222/136009.html](http://www.linuxeden.com/html/news/20130222/136009.html "linuxeden.com")

## 面向对象的程序设计

面向对象的语言有一个标志，那就是它们都有类的概念，而通过类可以创建任意多个具有相同属性和方法的对象。

![ECMA Keywords](s3://ice.cube:ecma-keywords.png "ECMA Keywords")

面向对象是一种对现实世界理解和抽象的方法，是计算机编程技术发展到一定阶段后的产物。面向对象的三个基本特征是：封装、继承、多态。

### 封装

*封装*（encapsulation）可以被定义为对对象的内部数据表现形式和实现细节进行隐藏。要想访问封装过的对象中的数据，只有使用定义的操作这一种方法。（接口提供了一种用以说明一个对象应该具有哪些方法的手段）

为对象创建私用成员是任何面向对象语言中最基本和有用的特性之一，许多面向对象语言都使用关键字来说明某些方法和属性应被隐藏。但。。。

<oop-in-javascript/encapsulation.js*>

#### 封装之利

* 封装保护了内部数据的完整性；
* 对象的重构因此也可以变得更轻松；
* 可以弱化模块间的耦合

#### 封装之弊

* 私有方法很难进行单元测试；
* 使用封装意味着不得不与复杂的作用域链打交道

### 继承

一般来说，在设计类的时候，我们希望能减少重复性的代码，并且尽量弱化对象间的耦合。使用继承符合可以达到减少重复性代码的目的。

#### 类式继承

<oop-in-javascript/inheritance-classical.js*>

#### 原型式继承

<oop-in-javascript/inheritance-prototypal.js*>

#### 类式继承和原型式继承的对比

* 包括 JavaScript 程序员在内的整个程序员群体对类式继承都比较熟悉；
* 原型式继承更能节约内存；
* 原型式继承，属性读写的不对等性

## 多态

多态是强类型语言的问题。

