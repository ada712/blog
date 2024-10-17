(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{601:function(s,t,a){"use strict";a.r(t);var r=a(2),e=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[s._v("Tips: 这块知识非常容易出问答题/作为性能优化面试题的切入点，大家需要引起重视。")])]),s._v(" "),t("p",[s._v("​")]),s._v(" "),t("h2",{attrs:{id:"渲染引擎工作流解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#渲染引擎工作流解析"}},[s._v("#")]),s._v(" 渲染引擎工作流解析")]),s._v(" "),t("p",[s._v("通过前面几节的学习，大家现在已经知道，浏览器的渲染引擎承载着把静态资源转换为可视化界面的任务。前面咱们已经明确了这样的转换关系：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img1.sycdn.imooc.com/5eba8a370001156813220256.png",alt:"图片描述"}})]),s._v(" "),t("p",[s._v("中间这个“渲染引擎处理”目前对大家来说仍然是一个黑盒。我们把这个黑盒拆开，会看到它其实包含了以下几个具体流程：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img1.sycdn.imooc.com/5eba8a2e0001c87011440168.png",alt:"图片描述"}})]),s._v(" "),t("p",[s._v("整体来看，这五个过程分别完成了以下任务：")]),s._v(" "),t("p",[t("strong",[s._v("1. HTML解析")])]),s._v(" "),t("p",[s._v("在这一步浏览器对HTML文档进行解析，并在解析 HTML 的过程中发出了页面渲染所需的各种外部资源请求。")]),s._v(" "),t("p",[t("strong",[s._v("2. CSS解析")]),t("br"),s._v("\n浏览器将识别并加载所有的 CSS 样式信息。")]),s._v(" "),t("p",[t("strong",[s._v("3. 样式与结构合并")]),t("br"),s._v("\n将样式信息和文档结构合并，最终生成页面 render 树（:after :before 这样的伪元素会在这个环节被构建到 DOM 树中）。")]),s._v(" "),t("p",[t("strong",[s._v("4. 布局阶段")]),t("br"),s._v("\n页面中所有元素的相对位置信息，大小等信息均在这一步得到计算。")]),s._v(" "),t("p",[t("strong",[s._v("5. 页面绘制")]),t("br"),s._v("\n在这一步中浏览器会根据我们前面处理出来的结果，把每一个页面图层转换为像素，并对所有的媒体文件进行解码。")]),s._v(" "),t("p",[s._v("这五个步骤可以说是每一步都很关键，每一步都不白干，每一步都有一个阶段性产物作为收获。这些产物是我们理解渲染过程的重要抓手：")]),s._v(" "),t("h2",{attrs:{id:"阶段性产物分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#阶段性产物分析"}},[s._v("#")]),s._v(" 阶段性产物分析")]),s._v(" "),t("p",[s._v("这五个流程分别对应了以下五个产物：")]),s._v(" "),t("ul",[t("li",[s._v("DOM树")]),s._v(" "),t("li",[s._v("CSSOM树")]),s._v(" "),t("li",[s._v("渲染树")]),s._v(" "),t("li",[s._v("盒模型")]),s._v(" "),t("li",[s._v("目标界面")])]),s._v(" "),t("p",[s._v("认识产物的目的是为了能够更好地掌握创造产物的过程。产物是具体的，因此咱们此处的讲解也应该是具体的。下面我就带大家来观摩一个渲染引擎的工作实例：")]),s._v(" "),t("h4",{attrs:{id:"html解析-dom树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#html解析-dom树"}},[s._v("#")]),s._v(" HTML解析 —— DOM树")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOCTYPE")]),s._v(" html"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("html lang"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"en"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("head"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("meta charset"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UTF-8"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("meta name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"viewport"')]),s._v(" content"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"width=device-width, initial-scale=1.0"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("meta http"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("equiv"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"X-UA-Compatible"')]),s._v(" content"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ie=edge"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("title"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("前端面试体系专栏"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("title"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("style"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    body "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      font"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("size"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 20px；\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    div "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("width")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 100px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("height")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 100px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    span "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("color")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" #"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    p "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" none\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("style"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("head"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("body"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"box1"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("span"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("我在盒子"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("号里"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("span"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"box2"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("span"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("我在盒子"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("号里"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("span"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("p"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("你看不见我"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("p"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("body"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("html"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br")])]),t("p",[s._v("楼上我们给出的是一段非常简单的 HTML。相信对大家来说，阅读 HTML 不是什么难事。不过对浏览器来说，这可不是什么美差——浏览器不能够直接理解 HTML，它首先会把它转化成自己能理解的 DOM 树：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img1.sycdn.imooc.com/5eba8a21000128ba10240768.png",alt:"图片描述"}})]),s._v(" "),t("p",[s._v("CSS 解析 —— CSSOM 树")]),s._v(" "),t("p",[s._v("一样的道理，浏览器也是没法直接理解 CSS 代码的，需要把它处理成自己能理解的 CSSOM 树——注意，虽然我们编写 CSS 代码时不像 HTML 代码一样表现出明显的嵌套关系，"),t("strong",[s._v("但是")]),s._v(" "),t("strong",[s._v("CSSOM 也是具有树结构的")]),s._v("。这是因为在样式计算的过程中，浏览器总是从适用于该节点的最通用规则开始（例如 div 节点是 body 元素的子项，则应用所有 body 样式），一层一层递归细化出具体的样式。这个由通用到具体的细化关系，我们也可以用树结构来描述：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img1.sycdn.imooc.com/5eba8a0e0001fb2f10240768.jpg",alt:"图片描述"}})]),s._v(" "),t("h4",{attrs:{id:"dom树与cssom树-合体-渲染树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dom树与cssom树-合体-渲染树"}},[s._v("#")]),s._v(" DOM树与CSSOM树“合体” ——渲染树")]),s._v(" "),t("p",[s._v("当 DOM 树和 CSSOM 树都解析完毕后，它们就会被结合在一起，构建出 Render Tree（渲染树）。")]),s._v(" "),t("p",[s._v("值得注意的是，渲染树的特点是它**只包含渲染网页所需的节点。**所以在构建渲染树的过程中，除了“结合”之外，浏览器还做了一些关键的小动作，这些小动作可能作为考点出现：")]),s._v(" "),t("ul",[t("li",[s._v("step1： 从 DOM 树的根节点开始遍历，筛选出所有"),t("strong",[s._v("可见")]),s._v("的节点；")]),s._v(" "),t("li",[s._v("step2：仅针对可见节点，为其匹配 CSSOM 中的 CSS 规则；")]),s._v(" "),t("li",[s._v("step3：发射可见节点（连同其内容和计算的样式）。")])]),s._v(" "),t("p",[s._v("经过这么一顿操作之后，渲染树就到手了：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img1.sycdn.imooc.com/5eba8a010001abe510240768.jpg",alt:"图片描述"}})]),s._v(" "),t("h4",{attrs:{id:"布局盒子模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#布局盒子模型"}},[s._v("#")]),s._v(" 布局盒子模型")]),s._v(" "),t("p",[s._v("经过咱们不断地构建、修修剪剪，和“树”之间的故事，算是告一段落了。接下来咱们以手里这棵渲染树作为依据，进入布局阶段了。")]),s._v(" "),t("p",[s._v("到现在为止，我们已经掌握了需要渲染的所有节点之间的结构关系及其样式信息。但是我们还不知道它们在渲染时，到底应该出现在浏览器视口的哪个位置上、占据多大的空间——计算这些信息，就是布局阶段要做的事情。浏览器对渲染树进行遍历，将元素间嵌套关系以盒子模型的形式写入文档流：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img1.sycdn.imooc.com/5eba89f90001d99610240768.jpg",alt:"图片描述"}})]),s._v(" "),t("p",[s._v("盒模型在布局过程中会计算出元素确切的大小和定位。计算完毕后，相应的信息被写回渲染树上，就形成了“布局渲染树”。同时，每一个元素盒子也都携带着自身的样式信息，作为后续绘制的依据。")]),s._v(" "),t("h4",{attrs:{id:"目标界面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目标界面"}},[s._v("#")]),s._v(" 目标界面")]),s._v(" "),t("p",[s._v("大家注意，走到现在这一步，我们浏览器的视窗内实际上还是啥也没展示出来的状态。咱们上述的渲染树也好，盒模型也好，它们都乖乖地躺在内存世界里，悄无声息。")]),s._v(" "),t("p",[s._v("布局阶段结束后，浏览器终于拿到了它绘制页面所需要的所有信息。此时它会将渲染树上的每一个节点转换成我们肉眼可见的像素，最终将页面呈现在我们面前，这个过程就是“绘制”。绘制完成后，目标界面也就在你眼前了：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img1.sycdn.imooc.com/5eba89ec0001134813760496.png",alt:"图片描述"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);