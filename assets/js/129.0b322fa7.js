(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{609:function(s,t,a){"use strict";a.r(t);var n=a(2),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("学习虚拟 DOM，首先要知其所以然——要清楚它的出现是为了解决什么问题。")]),s._v(" "),t("p",[s._v("为了弄明白这一点，我们不得不从 DOM 操作的历史说起。")]),s._v(" "),t("h2",{attrs:{id:"为什么我们需要虚拟-dom-dom-操作演化史"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么我们需要虚拟-dom-dom-操作演化史"}},[s._v("#")]),s._v(" 为什么我们需要虚拟 DOM——DOM 操作演化史")]),s._v(" "),t("p",[s._v("首先，我们一起来回顾一下那段没有虚拟 DOM 的日子。")]),s._v(" "),t("h3",{attrs:{id:"远古前端的无奈-人肉操作-时期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#远古前端的无奈-人肉操作-时期"}},[s._v("#")]),s._v(" 远古前端的无奈——“人肉操作”时期")]),s._v(" "),t("p",[s._v("在前端这个工种的萌芽阶段，前端页面“展示”的属性远远强于其“交互”的属性。因此 JavaScript 在很长一段时间里都不是前端世界的主角，人们只用 JS 来做一些类似于拖拽、隐藏这样简单的动效。")]),s._v(" "),t("p",[s._v("这个时期里，前端工程师需要关心的 DOM 操作是有限的。这样看来，使用 JS、jQuery 来定点对 DOM 进行修改好像也不是什么特别让人头大的事情。于是，任劳任怨的程序员们就这样过了很多年人肉修改 DOM 的日子。")]),s._v(" "),t("h3",{attrs:{id:"数据驱动的先驱-模板助攻-时期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据驱动的先驱-模板助攻-时期"}},[s._v("#")]),s._v(" 数据驱动的先驱——“模板助攻”时期")]),s._v(" "),t("p",[s._v("随着前端业务复杂度不断提升，前端页面对交互体验的要求越来越高，骤增的动态内容带来了大量的 DOM 修改需求。此时若再要求工程师们去逐一修改 DOM 节点，其工作量将大到令人绝望。")]),s._v(" "),t("p",[s._v("聪明的前端er们可不会这么容易被难倒，很快，我们的前辈创造出了“模板”这一解决方案。比如说我有一个学生信息表格需要展示，那么我可以给它一组初始化数据 students：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 'Bob'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    age"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 'Maria'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    age"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 'Lynn'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    age"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("然后把这组数据塞进 template 去：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("table"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" students"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("forEach")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("student")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("tr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("td"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" student"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("td"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("td"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" student"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("td"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("tr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("table"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("模板会帮我们做什么呢？它会把你的 students 这个数据源读进去，塞到上面这段 template 代码里，把它们融合在一起，吐出一段目标 HTML 给你。然后这段 HTML 代码就可以直接被拿去渲染到页面上，成为 DOM。")]),s._v(" "),t("p",[s._v("这个过程差不多是这样：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 数据和模板融合出 HTML 代码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" targetDOM "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("data")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" students"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 添加到页面中去")]),s._v("\ndocument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("appendChild")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("targetDOM"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("这样的操作，可以帮助我们程序员做到只关心数据及数据变化，而不必操心具体的 DOM 细节，大大解放了生产力。")]),s._v(" "),t("h3",{attrs:{id:"模板带来的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模板带来的问题"}},[s._v("#")]),s._v(" 模板带来的问题")]),s._v(" "),t("p",[s._v("模板这种形式的 DOM 方案，其实是非常粗糙的，蕴含了不小的隐患。")]),s._v(" "),t("p",[s._v("大家现在考虑一个常见的场景：如果我发现上述表格中某个同学的名字写错了——Maria 其实叫 Mariana。现在我要把这个名字改掉，于是我改了 students 里对应的姓名信息，模板会做什么呢？")]),s._v(" "),t("p",[s._v("首先，模板引擎会把 targetDOM 这个节点整个给注销掉；")]),s._v(" "),t("p",[s._v("然后，再重新走一遍刚刚走过的渲染流程：")]),s._v(" "),t("ol",[t("li",[s._v("数据+模板=HTML代码")]),s._v(" "),t("li",[s._v("把 HTML 代码渲染到页面上，形成真实的 DOM")])]),s._v(" "),t("p",[s._v("注意到没有？这一通操作波及了太多无辜群众啊！")]),s._v(" "),t("p",[s._v("本来我只是想改 Maria 的名字，现在整个表格都需要被重新渲染。DOM 操作的范围，从小小的一个表格字段位，扩大到了整个表格。这不合理。")]),s._v(" "),t("p",[s._v("同时，由于上述更新过程中涉及的 DOM 节点注销和 DOM 节点添加，都是真刀真枪、真耗性能的 DOM 操作。当我们更新频率稍微高一点时，页面就会吃不消了。因此，模板渲染方案并不能很好地解决更新的问题。")]),s._v(" "),t("h2",{attrs:{id:"现代前端框架的基石-虚拟-dom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#现代前端框架的基石-虚拟-dom"}},[s._v("#")]),s._v(" 现代前端框架的基石——虚拟 DOM")]),s._v(" "),t("p",[s._v("发现问题并不是一件坏事——如果我们能够恰如其分地解决问题，那么问题就变成了机会。善于解决问题的工程师，才是真正的创造者。")]),s._v(" "),t("p",[s._v("当这帮创造者发现模板方案纵有千好万好、无奈性能不好时，他们并没有气馁。反而是转念一想：操作真实 DOM 太费力，那我操作假的不就行了？")]),s._v(" "),t("p",[s._v("更进一步想：过去，我们利用模板来实现 DOM 操作，初始化过程是这样的：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img1.sycdn.imooc.com/5ece4b020001276c09700776.png",alt:"图片描述"}})]),s._v(" "),t("p",[s._v("当更新发生时：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("注销旧 "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 数据 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("模板")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" 新的一套"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HTML")]),s._v(" 代码 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 挂载新 "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOM")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这里的“旧 DOM”、“新 DOM”指的都是模板对应的整块 DOM 的整体更新。我们错就错在每次都整体更新——如果有一种方法，可以既帮我们保持住模板方案的数据驱动思想，又做到像人肉 JS、jQuery 一样能够定点只对需要修改的 DOM 做小范围操作，那该多好！")]),s._v(" "),t("p",[s._v("你品，你细品！DOM 操作从“一刀切”到“精细化”，中间需要的是啥？需要的是 diff ！")]),s._v(" "),t("p",[s._v("虚拟 DOM + diff，新的 DOM 操作解决方案应运而生！初始化过程是这样的：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img1.sycdn.imooc.com/5ece4b0a0001307509840838.png",alt:"图片描述"}})]),s._v(" "),t("p",[s._v("当更新发生时：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("数据 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" 模板 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 虚拟 "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" diff 新旧两套虚拟 "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOM")]),s._v(" 的差异，得到补丁集 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 把“补丁”打到真实 "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOM")]),s._v(" 上 \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("其中，虚拟 DOM 这一层是用 JS 实现的。也就是说在这个阶段所有的更改、对比操作都是纯 JS 层面的计算。JS vs DOM操作，其性能消耗完全不在一个量级上。")]),s._v(" "),t("p",[s._v("如此一来，简单粗暴的“删了重写”，变成了灵活精确的“定点打击”！")]),s._v(" "),t("p",[s._v("模板渲染带来的性能问题，就这样被 Virtual DOM 完美地解决了。")])])}),[],!1,null,null,null);t.default=r.exports}}]);