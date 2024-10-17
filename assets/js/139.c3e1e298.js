(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{619:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("跨域及跨域解决方案也是一个稳定性比较高的考点。关于跨域如何解决这个问题，不同的人有着不同的思路。笔者之前曾经尝试在团队内做过一次头脑风暴，想看看大家能想出多少种解决跨域的办法，最后竟然数出了近10种之多（可见程序员的脑洞之大，哈哈）。")]),s._v(" "),t("p",[s._v("不过，面试的时候，在跨域这块想要“出奇制胜”其实是一个不太合适的事情。一来强记太多的方法，脑壳容易懵，不利于你现场发挥；二来面试官多数情况下想听的也就只有那么几个，讲得太多，对方也会不耐烦（我个人就有被打断的经历）。本节我们针对面试官比较喜闻乐见的几个思路来讲，也鼓励大家私下里结合自己的开发经验补充自己的思路，但不鼓励死磕。")]),s._v(" "),t("h2",{attrs:{id:"什么是跨域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是跨域"}},[s._v("#")]),s._v(" 什么是跨域")]),s._v(" "),t("p",[s._v("跨域的故事，要从“同源策略”说起了。")]),s._v(" "),t("p",[s._v("这里的源(origin)指的是协议、域名、端口号，同源指的是在url中协议、域名、端口号均相同。那么同源策略是浏览器的一个安全功能，不同源的脚本在没有明确授权的情况下，不能读写对方资源。")]),s._v(" "),t("p",[s._v("注意这个“不能读写资源”的含义，它主要限制了以下三个方面：")]),s._v(" "),t("ul",[t("li",[s._v("Cookie、LocalStorage 和 IndexDB 无法读取")]),s._v(" "),t("li",[s._v("DOM 和 JS 对象无法获取")]),s._v(" "),t("li",[s._v("Ajax请求发送不出去")])]),s._v(" "),t("p",[s._v("只要协议、域名、端口有任何一个不同，都被当作是不同的域，这就是所谓“跨域”。")]),s._v(" "),t("p",[s._v("虽然同源策略带来了安全上的保证，但是实际业务中，跨域的场景实在是太多了。如果仅仅因为跨域就导致资源无法互相读写，那么我们现在看到的许多互联网功能都将原地歇菜。之所以没歇菜，是因为网络策略有其灵活性，我们可以通过一些方式来绕过同源策略、达到通信目的。")]),s._v(" "),t("h2",{attrs:{id:"跨域解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跨域解决方案"}},[s._v("#")]),s._v(" 跨域解决方案")]),s._v(" "),t("h3",{attrs:{id:"jsonp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jsonp"}},[s._v("#")]),s._v(" JSONP")]),s._v(" "),t("p",[s._v("由于js调用跨域文件是被允许的。只要我们在远程服务器上设法把数据装进js格式的文件里，就可以供客户端调用和进一步处理。")]),s._v(" "),t("p",[s._v("在这个思路的指导下，人们挖掘出了 JSONP。JSONP 的一个要点就是允许用户传递一个callback参数给服务端，然后服务端返回数据时会将这个callback参数作为函数名来包裹住JSON数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了。")]),s._v(" "),t("p",[s._v("举个?，我在 HTML 里面去调用一个服务端的 callback 函数：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOCTYPE")]),s._v(" html"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("html"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("body"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script type"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text/javascript"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// callback是存在服务端的")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("callback")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("data")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这里引入服务端代码")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://www.imooc.com/jsonp.shtml"')]),s._v(" type"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text/javascript"')]),s._v(" charset"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"utf-8"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("body"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("html"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("然后在 "),t("a",{attrs:{href:"http://www.imooc.com/jsonp.shtml",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://www.imooc.com/jsonp.shtml"),t("OutboundLink")],1),s._v(" （注意它是个虚拟链接，作示例用，大家不要贴到浏览器访问哈，估计是404），这个链接请求的服务端代码可以是这样写的：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * jsonp 测试\n * @return\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RequestMapping")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jsonp"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("method"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RequestMethod")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GET")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@ResponseBody")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Jsonp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"callback('我是目标字符串');\"")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("这段代码是用 JAVA 写的，各位不必看懂 JAVA，只需要关注到它 return 的是个什么东西：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"callback('我是目标字符串');\"")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("没错， return 的就是一个对 callback 的调用！ 因此 JSONP 方案，大家只需要记住两个角色、两件事情：")]),s._v(" "),t("ol",[t("li",[s._v("浏览器脚本——"),t("strong",[s._v("定义")]),s._v("：定义 callback，callback内是读取数据的逻辑")]),s._v(" "),t("li",[s._v("服务端——"),t("strong",[s._v("调用")]),s._v("：输出对 callback 的调用，把目标数据作为入参传给 callback")])]),s._v(" "),t("p",[s._v("如此一来，就可以成功地把 {message:“success”} 这个跨域的信息写入目标文件里啦。")]),s._v(" "),t("h3",{attrs:{id:"cors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[s._v("#")]),s._v(" CORS")]),s._v(" "),t("p",[s._v('CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。')]),s._v(" "),t("p",[s._v("它允许浏览器向不同源的服务器，发出XMLHttpRequest请求。虽然需要浏览器和服务器同时支持，但目前来看，除了低版本 IE 外，基本所有浏览器都支持该功能。")]),s._v(" "),t("p",[s._v("CORS的通信过程，实际上不需要什么代码层面的配合与改动，由浏览器自动实现。")]),s._v(" "),t("p",[s._v("对于开发者来说，CORS通信与同源的通信没有差别，至少代码上是一样的。浏览器一旦发现AJAX请求跨域，就会自动添加一些"),t("strong",[s._v("附加的头信息、追加必要的请求")]),s._v("，但用户不会有感觉。")]),s._v(" "),t("p",[s._v("浏览器的行为是通用的、自动化的。因此能否实现 CORS 的关键，其实在于服务器是否对此提供支持。我们下面从过程来理解一下浏览器和服务器在 CORS 上的合作机制：")]),s._v(" "),t("h4",{attrs:{id:"简单请求对应的-cors-行为"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单请求对应的-cors-行为"}},[s._v("#")]),s._v(" 简单请求对应的 CORS 行为")]),s._v(" "),t("p",[s._v("浏览器会把请求分为简单请求和非简单请求，对于这两种请求，CORS 的处理过程是不同的，我们先来看简单请求：")]),s._v(" "),t("ul",[t("li",[s._v("请求方式为HEAD、POST 或者 GET")]),s._v(" "),t("li",[s._v("http头信息不超出以下字段：Accept、Accept-Language 、 Content-Language、 Last-Event-ID、 Content-Type(限于三个值：application/x-www-form-urlencoded、multipart/form-data、text/plain)")])]),s._v(" "),t("p",[s._v("满足这两个条件的，就是简单请求。对于简单请求，对于简单请求，浏览器直接发出CORS请求。具体来说，就是在头信息之中，增加一个Origin字段：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("Origin")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" http"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("imooc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Origin字段用来说明，本次请求来自哪个源（协议 + 域名 + 端口）。服务器根据这个值，决定是否同意这次请求。服务器处理的结果，分为两种情况：")]),s._v(" "),t("ul",[t("li",[s._v("不同意： 如果Origin指定的源，不在许可范围内，服务器会返回一个正常的HTTP回应；浏览器发现，这个回应的头信息没有包含Access-Control-Allow-Origin字段，就知道出错了，从而抛出一个错误，被 XMLHttpRequest 的 onerror 回调函数捕获。")]),s._v(" "),t("li",[s._v("同意：如果Origin指定的域名在许可范围内，服务器返回的响应，会多出这个关键的头信息字段：")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("Access"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Control"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Allow"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Origin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" http"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("imooc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这个字段用于说明服务器接纳哪些域名。它的值要么是请求时Origin字段的值，要么是一个*——表示接受任意域名的请求。")]),s._v(" "),t("h4",{attrs:{id:"复杂请求对应的-cors-行为"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复杂请求对应的-cors-行为"}},[s._v("#")]),s._v(" 复杂请求对应的 CORS 行为")]),s._v(" "),t("p",[s._v("有一些请求对服务器有着特殊的要求，比如请求方法是PUT或DELETE，或者Content-Type字段的类型是application/json。")]),s._v(" "),t("p",[s._v('非简单请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为"预检"请求（preflight）。')]),s._v(" "),t("p",[s._v("这个 preflight 的作用在于，确认当前网页所在的域名是否在服务器的许可名单之中、明确可以使用的 HTTP 请求方法和头信息字段。只有在这个请求返回成功的情况下，浏览器才会发出正式的请求。")]),s._v(" "),t("p",[s._v("这样做的目的是为了避免“无用功”。要知道，一般来说，正式请求要携带一些信息，它体积可能比较大。如果我们背着这么大一个包袱到了服务端那边，却发现对方根本不接受你，那岂不是白费力气了嘛。所以说，发送正式请求前先“预检”，就跟结婚之前要先订婚一样，是一个必要的确认动作。")]),s._v(" "),t("p",[s._v('注："预检"请求用的请求方法是OPTIONS，这也是一个小小的考点。')]),s._v(" "),t("h4",{attrs:{id:"cors-和-jsonp-的对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cors-和-jsonp-的对比"}},[s._v("#")]),s._v(" CORS 和 JSONP 的对比")]),s._v(" "),t("p",[s._v("CORS 的优势，往往是相对于 JSONP 来说的：JSONP只支持GET请求，而CORS支持所有类型的HTTP请求。但相应地，JSONP在低版本 IE 上也可以畅通无阻，CORS 就没有这么好的兼容性了。")]),s._v(" "),t("h3",{attrs:{id:"postmessage跨域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#postmessage跨域"}},[s._v("#")]),s._v(" postMessage跨域")]),s._v(" "),t("p",[s._v("这个 API 从 H5 开始支持，通过注册监听信息的Message事件、调用发送信息的postMessage方法，我们可以实现跨窗口通信。")]),s._v(" "),t("blockquote",[t("p",[s._v("从广义上讲，一个窗口可以获得对另一个窗口的引用（比如 "),t("code",[s._v("targetWindow = window.opener")]),s._v("），然后在窗口上调用 "),t("code",[s._v("targetWindow.postMessage()")]),s._v(" 方法分发一个 "),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/MessageEvent",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("MessageEvent")]),t("OutboundLink")],1),s._v(" 消息。接收消息的窗口可以根据需要自由"),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Guide/Events",target:"_blank",rel:"noopener noreferrer"}},[s._v("处理此事件"),t("OutboundLink")],1),s._v("。传递给 window.postMessage() 的参数（比如 message ）将"),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage#The_dispatched_event",target:"_blank",rel:"noopener noreferrer"}},[s._v("通过消息事件对象暴露给接收消息的窗口"),t("OutboundLink")],1),s._v("。")])]),s._v(" "),t("h4",{attrs:{id:"发送信息的postmessage方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发送信息的postmessage方法"}},[s._v("#")]),s._v(" 发送信息的postMessage方法")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("otherWindow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("postMessage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" targetOrigin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("transfer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这里otherWindow是对目标窗口的引用；message是要发送的消息；targetOrigin是限定消息接受范围，一般是字符串或者URI，星号 * 则意味着不限制。")]),s._v(" "),t("h4",{attrs:{id:"接受信息的message事件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#接受信息的message事件"}},[s._v("#")]),s._v(" 接受信息的message事件")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("onmessage")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("event")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" event"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" origin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" event"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("origin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("addEventListener "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'undefined'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addEventListener")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'message'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("onmessage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("attachEvent "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'undefined'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("attachEvent")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'onmessage'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" onmessage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h4",{attrs:{id:"流程演示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#流程演示"}},[s._v("#")]),s._v(" 流程演示")]),s._v(" "),t("p",[s._v("下面我们通过一个例子来理解这个过程：")]),s._v(" "),t("p",[s._v("a页面（"),t("a",{attrs:{href:"http://www.imooc.com/b.html%EF%BC%89%E4%B8%AD%E5%AF%B9%E6%B6%88%E6%81%AF%E6%8E%A5%E5%8F%97%E5%92%8C%E6%B4%BE%E5%8F%91%E7%9A%84%E5%A4%84%E7%90%86%EF%BC%9A",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://www.imooc.com/b.html）中对消息接受和派发的处理："),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// a页面")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("iframe id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"iframe"')]),s._v(" src"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://www.imooc.com/b.html"')]),s._v(" style"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"display:none;"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("iframe"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("       \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" iframe "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getElementById")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'iframe'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    iframe"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("onload")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xiuyan'")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// a 页面向 b 页面派发消息")]),s._v("\n        iframe"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("contentWindow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("postMessage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("stringify")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://www.neal.cn'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// a 页面接受 b 页面的消息")]),s._v("\n   window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addEventListener")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"message"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("event")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'data from b is'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" event"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("b页面（"),t("a",{attrs:{href:"http://www.imooc.com/b.html%EF%BC%89%E5%AF%B9%E6%B6%88%E6%81%AF%E6%8E%A5%E5%8F%97%E5%92%8C%E6%B4%BE%E5%8F%91%E7%9A%84%E5%A4%84%E7%90%86%EF%BC%9A",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://www.imooc.com/b.html）对消息接受和派发的处理："),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 接收 a 页面的数据")]),s._v("\n    window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addEventListener")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'message'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("e")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'data from a is'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" event"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("parse")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 派发数据到 a 页面")]),s._v("\n            window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("parent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("postMessage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("stringify")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://www.imooc.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),t("p",[s._v("关于跨域的解决方案，其实还有很多，比如 iframe（个人不推荐，如果有兴趣可以了解下）、cookie 跨域或者反向代理跨域等等。但是原则上，各位需要优先掌握本节提及的这几种思路。还是那句话，回答跨域问题，不要想着剑走偏锋，中规中矩是最妥帖的。")])])}),[],!1,null,null,null);t.default=e.exports}}]);