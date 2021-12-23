### 知识点

+ 对象结构时，注意对称性(key -> value会翻转)
+ for循环中()里面自成一个作用域。
+ ES6模块化export后面跟一个表达式，export导出的值会动态绑定import，而export default却不会。
+ import * as obj from '路径'：命名空间导入模块的全局export。
+ javaScript类中直接写函数，那个这个函数就会被默认放在函数的prototype上，而如果加上static就会作为函数属性而存在。
+ Promise的静态方法：
      + all：都满足时进入then，否则进入catch（res/err为决议结果）
      + race：首先被决议的promise，并进入相应的then或catch（res/err为决议结果）
      + allSettled：等到所有promise都被决议，则进入catch并（res为全部决议结果）
      + any：返回第一个决议成功的promise，并进入then，否则进入catch（res为成功决议结果，err为全部决议失败结果）