---
title: 数据类型（判断、转换）
autoGroup-1: JS 核心
---

## 数据类型

- 最新的 ECMAScript 标准定义了 8 种数据类型: (7 种原始类型)

  - `undefined`（未定义）、
  - `null`（空）、
  - `boolean`（布尔型）、
  - `string`（字符串）、
  - `symbol`、
  - `number`（数字）、
  - `bigint`（可以表示任意大的整数）
  - `object`（对象）

### number 类型

根据 ECMAScript 标准，JavaScript 中只有一种数字类型：基于 IEEE 754 标准的双精度 64 位二进制格式的值（-(253 -1) 到 253 -1）。**它并没有为整数给出一种特定的类型。**

- 检查值是否大于或小于 +/-Infinity
  - 可以使用常量 `Number.MAX_VALUE` 和 `Number.MIN_VALUE`
  - 也可以通过 `Number.isSafeInteger()` 方法还有 `Number.MAX_SAFE_INTEGER` 和 `Number.MIN_SAFE_INTEGER` 来检查值是否在双精度浮点数的取值范围内

```js
Number.isSafeInteger(Number.MAX_SAFE_INTEGER); // true
Number.isSafeInteger(Math.pow(2, 53)); // false
Number.isSafeInteger(Math.pow(2, 53) - 1); // true

// 可以为 ES6 之前的版本 polyfill Number.isSafeInteger()
if (!Number.isSafeInteger) {
  Number.isSafeInteger = function (num) {
    // （ES6方法）检测是否是整数
    return Number.isInteger(num) && Math.abs(num) <= Number.MAX_SAFE_INTEGER;
  };
}
```

`NaN` 不是数字的数字，但仍然是数字类型。它很特殊，与自身不相等，是唯一一个非自反。（即 `x === x` 不成立）
当使用内建的全局工具函数 `isNaN` 判断一个值是否是 `NaN`，会有一个严重的缺陷。

```js
isNaN(1 / "a"); // true
isNaN("a"); // true
```

ES6 之后可以使用工具函数 `Number.isNaN(...)`

```js
// ES6之前的浏览器 ployfill
if (!Number.isNaN) {
  Number.isNaN = function (n) {
    return typeof n === "number" && window.isNaN(n);
  };
}

Number.isNaN(1 / "a"); // true
Number.isNaN("a"); // false

// 利用 NaN 不等于自身可以实现
if (!Number.isNaN) {
  Number.isNaN = function (n) {
    return n !== n;
  };
}
```

ES6 之后新加入一个工具方法 `Object.is(...)` 来判断两个值是否相等

```js
Object.is(1 / "a", NaN); // true
Object.is(-1 * 0, -0); // true
Object.is(-0, 0); // false

// ES6之前的浏览器 ployfill
if (Object.is) {
  Object.is = function (v1, v2) {
    // 判断是否是-0
    if (v1 === 0 && v2 === 0) {
      return 1 / v1 === 1 / v2;
    }
    // 判断是否是NaN
    if (v1 !== v1) {
      return v2 !== v2;
    }
    // 其他
    return v1 === v2;
  };
}
```

### BigInt 类型

BigInt 类型是 JavaScript 中的一个基础的数值类型，可以用任意精度表示整数。使用 BigInt，您可以安全地存储和操作大整数，甚至可以超过数字的安全整数限制。BigInt 是通过在整数末尾附加 n 或调用构造函数来创建的。

- 使用常量`Number.MAX_SAFE_INTEGER`，可以获得可以用数字递增的最安全的值。引入 `BigInt`，也可以操作超过最大安全值的数字。

```js
> const x = 2n ** 53n;
9007199254740992n
> const y = x + 1n;
9007199254740993n
```

### Symbol 类型

符号(Symbols)是 ECMAScript 第 6 版新定义的。符号类型是唯一的并且是不可修改的, 并且也可以用来作为 Object 的 key 的值.

- `Symbol()`函数会返回 symbol 类型的值，该类型具有静态属性和静态方法。
- 一个`symbol`值能作为对象属性的标识符；这是该数据类型仅有的目的。
- `Symbol`类型唯一合理的用法是用变量存储 `symbol`的值，然后使用存储的值创建对象属性。
- 这个属性可以通过创建时的原始 `symbol` 值访问到，或者通过遍历 “`Object.getOwnPropertySymbols()`” 返回的数组。

```js
var  myPrivateMethod  = Symbol();
this[myPrivateMethod] = function() {...};
```

### Objects

属性：

在 `JavaScript` 里，对象可以被看作是一组属性的集合。用 对象字面量语法 来定义一个对象时，会自动初始化一组属性。

属性使用键来标识，它的键值可以是一个字符串或者符号值（Symbol）

ECMAScript 定义的对象中有两种属性：数据属性和访问器属性。

#### 数据属性

数据属性是键值对，并且每个数据属性拥有下列特性:

| 特性             | 数据类型             | 描述                                                                                               | 默认值    |
| :--------------- | :------------------- | :------------------------------------------------------------------------------------------------- | :-------- |
| [[Value]]        | 任何 Javascript 类型 | 包含这个属性的数据值。                                                                             | undefined |
| [[Writable]]     | Boolean              | 如果该值为 false，则该属性的 [[Value]] 特性 不能被改变。                                           | false     |
| [[Enumerable]]   | Boolean              | 如果该值为 true，则该属性可以用 for...in 循环来枚举。                                              | false     |
| [[Configurable]] | Boolean              | 如果该值为 false，则该属性不能被删除，并且 除了 [[Value]] 和 [[Writable]] 以外的特性都不能被改变。 | false     |

#### 访问器属性

访问器属性有一个或两个访问器函数 (get 和 set) 来存取数值，并且有以下特性:

| 特性            | 类型                   | 描述                                                                                                                                                        | 默认值    |
| :-------------- | :--------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------- |
| [[Get]]         | 函数对象或者 undefined | 该函数使用一个空的参数列表，能够在有权访问的情况下读取属性值。另见 [get](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)。 | undefined |
| [[Set]]         | 函数对象或者 undefined | 该函数有一个参数，用来写入属性值，另见 [set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)。                             | undefined |
| [[Enumerable]]  | Boolean                | 如果该值为 true，则该属性可以用 [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) 循环来枚举。              | false     |
| [[Configurable] | Boolean                | 如果该值为 false，则该属性不能被删除，并且不能被转变成一个数据属性。                                                                                        | false     |

> 注意：这些特性只有 JavaScript 引擎才用到，因此你不能直接访问它们。所以特性被放在两对方括号中，而不是一对。

> Tips：
>
> 1. 当 JavaScript 中的变量被声明的时候，程序内部会给它一个初始值 `undefined`。 当你对一个值为 `undefined` 的变量进行运算操作的时候，算出来的结果将会是 `NaN`，它的意思是 "Not a Number"。 当你用一个值是 `undefined` 的变量来做字符串拼接操作的时候，它会转换成字符串（string）`undefined`。
> 2. `typeof` 操作符的唯一目的就是检查数据类型。
> 3. ` BigInt`不能与数字互换操作。

## typeof

`typeof` 操作符返回一个字符串，表示未经计算的操作数的类型。

| 类型                                            | 结果           |
| :---------------------------------------------- | :------------- |
| Undefined                                       | "undefined"    |
| Null                                            | "object"       |
| Boolean                                         | "boolean"      |
| Number                                          | "number"       |
| BigInt(ECMAScript 2020 新增)                    | "bigint"       |
| String                                          | "string"       |
| Symbol (ECMAScript 2015 新增)                   | "symbol"       |
| 宿主对象（由 JS 环境提供）                      | 取决于具体实现 |
| Function 对象 (按照 ECMA-262 规范实现 [[Call]]) | "function"     |
| 其他任何对象                                    | "object"       |

```js
// 数值
typeof 37 === "number";
typeof 3.14 === "number";
typeof 42 === "number";
typeof Math.LN2 === "number";
typeof Infinity === "number";
typeof NaN === "number"; // 尽管它是 "Not-A-Number" (非数值) 的缩写
typeof Number(1) === "number"; // Number 会尝试把参数解析成数值

typeof 42n === "bigint";

// 字符串
typeof "" === "string";
typeof "bla" === "string";
typeof `template literal` === "string";
typeof "1" === "string"; // 注意内容为数字的字符串仍是字符串
typeof typeof 1 === "string"; // typeof 总是返回一个字符串
typeof String(1) === "string"; // String 将任意值转换为字符串，比 toString 更安全

// 布尔值
typeof true === "boolean";
typeof false === "boolean";
typeof Boolean(1) === "boolean"; // Boolean() 会基于参数是真值还是虚值进行转换
typeof !!1 === "boolean"; // 两次调用 ! (逻辑非) 操作符相当于 Boolean()

// Symbols
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";

// Undefined
typeof undefined === "undefined";
typeof declaredButUndefinedVariable === "undefined";
typeof undeclaredVariable === "undefined";

// 对象
typeof { a: 1 } === "object";

// 使用 Array.isArray 或者 Object.prototype.toString.call
// 区分数组和普通对象
typeof [1, 2, 4] === "object";

typeof new Date() === "object";
typeof /regex/ === "object"; // 历史结果请参阅正则表达式部分

// 下面的例子令人迷惑，非常危险，没有用处。避免使用它们。
typeof new Boolean(true) === "object";
typeof new Number(1) === "object";
typeof new String("abc") === "object";

// 函数
typeof function () {} === "function";
typeof class C {} === "function";
typeof Math.sin === "function";

// JavaScript 诞生以来便如此
typeof null === "object";
```

## instanceof

`instanceof` 运算符用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。

> object instanceof constructor

- 参数:
  - object 某个实例对象
  - constructor 某个构造函数

```js
// 定义构造函数
function C() {}
function D() {}

var o = new C();

o instanceof C; // true，因为 Object.getPrototypeOf(o) === C.prototype

o instanceof D; // false，因为 D.prototype 不在 o 的原型链上

o instanceof Object; // true，因为 Object.prototype.isPrototypeOf(o) 返回 true
C.prototype instanceof Object; // true，同上

C.prototype = {};
var o2 = new C();

o2 instanceof C; // true

o instanceof C; // false，C.prototype 指向了一个空对象,这个空对象不在 o 的原型链上.

D.prototype = new C(); // 继承
var o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true 因为 C.prototype 现在在 o3 的原型链上
```

## Object.prototype.toString()

`toString()` 方法返回一个表示该对象的字符串。

> obj.toString()

每个对象都有一个 toString() 方法，当该对象被表示为一个文本值时，或者一个对象以预期的字符串方式引用时自动调用。可以通过 toString() 来获取每个对象的类型。

```js
var toString = Object.prototype.toString;

toString.call(new Date()); // [object Date]
toString.call("1" || new String()); // [object String]
toString.call(new Error()); // [object Error]
toString.call([] || new Array()); // [object Array]
toString.call({} || new Object()); // [object Object]
toString.call(/a/); // [object RegExp]
toString.call(1); // [object Number]
toString.call(true); // [object Boolean]
toString.call(function () {}); // [object Function]
toString.call(Math); // [object Math]
toString.call(JSON); // [object JSON]

//Since JavaScript 1.8.5
toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
```

## 常用类型的判断函数

```ts
// 作为工具方法使用
const toString = Object.prototype.toString;

/**
 * @description: 判断值是否未某个类型
 */
export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`;
}

/**
 * @description:  是否为函数
 */
export function isFunction<T = Function>(val: unknown): val is T {
  return is(val, "Function");
}

/**
 * @description: 是否已定义
 */
export const isDef = <T = unknown>(val?: T): val is T => {
  return typeof val !== "undefined";
};

/**
 * @description: 是否未定义
 */
export const isUnDef = <T = unknown>(val?: T): val is T => {
  return !isDef(val);
};

/**
 * @description: 是否为对象
 */
export const isObject = (val: any): val is Record<any, any> => {
  return val !== null && is(val, "Object");
};

/**
 * @description:  是否为时间
 */
export function isDate(val: unknown): val is Date {
  return is(val, "Date");
}

/**
 * @description:  是否为数值
 */
export function isNumber(val: unknown): val is number {
  return is(val, "Number");
}

/**
 * @description:  是否为AsyncFunction
 */
export function isAsyncFunction<T = any>(val: unknown): val is Promise<T> {
  return is(val, "AsyncFunction");
}

/**
 * @description:  是否为promise
 */
export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return (
    is(val, "Promise") &&
    isObject(val) &&
    isFunction(val.then) &&
    isFunction(val.catch)
  );
}

/**
 * @description:  是否为字符串
 */
export function isString(val: unknown): val is string {
  return is(val, "String");
}

/**
 * @description:  是否为boolean类型
 */
export function isBoolean(val: unknown): val is boolean {
  return is(val, "Boolean");
}

/**
 * @description:  是否为数组
 */
export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val);
}

/**
 * @description:  是否为DOM 元素
 */
export function isElement(obj: any) {
  return !!(obj && obj.nodeType === 1);
}
```

## 类型转换

在 Javascript 中，这些类型的转换主要区分为“隐式强制”与“显式强制”

```js
// 例如
var a = 42;
var b = a + ""; // 隐式强制法
var c = String(a); // 显式强制法
```

### ToPrimitive ( input [ , preferredType ] )

在 JavaScript 中，如果想要将对象转换成基本类型时，也就是所谓的拆箱时，会调用`toPrimitive()`。
**参数解释：**

`input`是输入的值，即要转换的对象，必选；

`preferedType`是期望转换的基本类型，可以是字符串，也可以是数字。选填，默认为 number；

如果是 `ToPrimitive(obj, Number)`，处理步骤如下：

- 如果 `obj` 为 基本类型，直接返回
- 否则，调用 `valueOf` 方法，如果返回一个原始值，则 `JavaScript` 将其返回。
- 否则，调用 `toString` 方法，如果返回一个原始值，则 `JavaScript` 将其返回。
- 否则，`JavaScript` 抛出一个类型错误异常。

如果是 `ToPrimitive(obj, String)`，处理步骤如下：

- 如果 `obj` 为 基本类型，直接返回
- 否则，调用 `toString` 方法，如果返回一个原始值，则 `JavaScript` 将其返回。
- 否则，调用 `valueOf` 方法，如果返回一个原始值，则 `JavaScript` 将其返回。
- 否则，`JavaScript` 抛出一个类型错误异常。

### ToBoolean

| Argument Type | Result                                                                                  |
| :------------ | :-------------------------------------------------------------------------------------- |
| Undefined     | Return false.                                                                           |
| Null          | Return false.                                                                           |
| Boolean       | Return argument.                                                                        |
| Number        | If argument is +0𝔽, -0𝔽, or NaN, return false; otherwise return true.                   |
| String        | If argument is the empty String (its length is 0), return false; otherwise return true. |
| Symbol        | Return true.                                                                            |
| BigInt        | If argument is 0ℤ, return false; otherwise return true.                                 |
| Object        | Return true.                                                                            |

### ToNumber

| Argument Type | Result                                                            |
| :------------ | :---------------------------------------------------------------- |
| Undefined     | Return NaN.                                                       |
| Null          | Return +0𝔽.                                                       |
| Boolean       | If argument is true, return 1𝔽. If argument is false, return +0𝔽. |
| Number        | Return argument (no conversion).                                  |
| String        | Return ! StringToNumber(argument).                                |
| Symbol        | Throw a TypeError exception.                                      |
| BigInt        | Throw a TypeError exception.                                      |
| Object        | 1、 ToPrimitive(argument, number). 2、 return ToNumber(argument)  |

> 为了转换到这个 Object 对象，使用 ToPrimitive 抽象操作，看它是否有 valueOf()方法。如果 valueOf()是可用的，并且它返回一个原始值，那么这个值将被用于强制执行。如果没有，但 toString()是可用的，它将提供用于强制的值。如果这两个操作都不能提供一个原始值，就会抛出一个 TypeError。

### ToBigInt

| Argument Type | Result                                                                                                |
| :------------ | :---------------------------------------------------------------------------------------------------- |
| Undefined     | Throw a TypeError exception.                                                                          |
| Null          | Throw a TypeError exception.                                                                          |
| Boolean       | Return 1n if prim is true and 0n if prim is false.                                                    |
| BigInt        | Return prim.                                                                                          |
| Number        | Throw a TypeError exception.                                                                          |
| String        | 1. Let n be ! StringToBigInt(prim). 2. If n is undefined, throw a SyntaxError exception. 3. Return n. |
| Symbol        | Throw a TypeError exception.                                                                          |

### ToString

| Argument Type | Result                                                                    |
| :------------ | :------------------------------------------------------------------------ |
| Undefined     | Return "undefined".                                                       |
| Null          | Return "null".                                                            |
| Boolean       | If argument is true, return "true". If argument is false, return "false". |
| Number        | Return ! Number::toString(argument).                                      |
| String        | Return argument.                                                          |
| Symbol        | Throw a TypeError exception.                                              |
| BigInt        | Return ! BigInt::toString(argument).                                      |
| Object        | 1、 ToPrimitive(argument, number). 2、 return ToString(argument)          |

> 一个对象被强制变成字符串的方式在技术上是通过 ToPrimitive 抽象操作, 如果 toString()是可用的，它将提供用于强制的值。如果都不能提供一个原始值，就会抛出一个 TypeError。

**`JSON.stringify` 方法，可以将一个 `JavaScript` 值转换为一个 `JSON` 字符串。（实现上也是调用了 `toString` 方法）**

_1._ 处理基本类型时，与使用 `toString` 基本相同，结果都是字符串，除了 `undefined`和函数

```js
JSON.stringify(null); // null
JSON.stringify(true); // true
JSON.stringify(1); // 1
JSON.stringify("1"); // "1"
JSON.stringify(undefined); // undefined （类型）
JSON.stringify(function () {}); // undefined （类型）
```

_2._ 布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值。

```js
JSON.stringify([new Number(1), new String("false"), new Boolean(false)]); // "[1,"false",false]"
```

_3._ `undefined`、任意的函数以及 `symbol` 值，在序列化过程中会被忽略（出现在非数组对象的属性值中时）或者被转换成 `null`（出现在数组中时）。

```js
JSON.stringify([undefined, function () {}, Symbol()]); // "[null,null,null]"
JSON.stringify({ a: 2, b: function () {} }); // "{"a":2}"
```

_4._ JSON.stringify 有第二个参数 `replacer`，它可以是数组或者函数，用来指定对象序列化过程中哪些属性应该被处理，哪些应该被排除。

```js
var a = {
  b: 42,
  c: "42",
  d: [1, 2, 3],
};

JSON.stringify(a, ["b", "c"]); // "{"b":42,"c":"42"}"

JSON.stringify(a, function (k, v) {
  if (k !== "c") return v;
});
// "{"b":42,"d":[1,2,3]}"
```

_5._ 如果你把一个对象的值传递给`JSON.stringify(...)`，而该对象上有一个`toJSON()`方法，`toJSON()`会被自动调用，以便在字符串化之前（某种程度上）"强制 "该值为 JSON 安全的。如果打算对一个可能包含非法 JSON 值的对象进行 JSON 字符串化，或者只是在对象中有不适合序列化的值，应该为它定义一个 toJSON()方法，返回该对象的 JSON 安全版本。

```js
var o = {};

var a = {
  b: 42,
  c: o,
  d: function () {},
};

var b = {
  val: [1, 2, 3],

  // probably incorrect!
  toJSON: function () {
    return "[" + this.val.slice(1).join() + "]";
  },
};

// create a circular reference inside `a`
o.e = a;

// would throw an error on the circular reference
// JSON.stringify( a );

// define a custom JSON value serialization
a.toJSON = function () {
  // only include the `b` property for serialization
  return { b: this.b };
};

JSON.stringify(a); // "{"b":42}"
JSON.stringify(b); // ""[2,3]""
```

### ToObject

| Argument Type | Result                                                                              |
| :------------ | :---------------------------------------------------------------------------------- |
| Undefined     | Throw a TypeError exception.                                                        |
| Null          | Throw a TypeError exception.                                                        |
| Boolean       | Return a new Boolean object whose [[BooleanData]] internal slot is set to argument. |
| Number        | Return a new Number object whose [[NumberData]] internal slot is set to argument.   |
| String        | Return a new String object whose [[StringData]] internal slot is set to argument.   |
| Symbol        | Return a new Symbol object whose [[SymbolData]] internal slot is set to argument.   |
| BigInt        | Return a new BigInt object whose [[BigIntData]] internal slot is set to argument.   |
| Object        | Return argument.                                                                    |

## 文档

【1】 数据类型：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)

【2】 类型转换：[You Don't Know JS: Types & Grammar](https://github.com/weiqinl/You-Dont-Know-JS-CN/blob/master/types%20%26%20grammar/ch4.md#/)

【2】 ES 标准：[Sec-abstract-operations](https://tc39.es/ecma262/#/sec-toprimitive)
