(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{412:function(t,v,_){t.exports=_.p+"assets/img/20221023-heightTa.7fd643de.png"},494:function(t,v,_){"use strict";_.r(v);var a=_(2),s=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[v("img",{attrs:{src:_(412),alt:"avatar"}})]),t._v(" "),v("h3",{attrs:{id:"背景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景：")]),t._v(" "),v("ul",[v("li",[t._v("父元素的高度，都是由内部 "),v("strong",[t._v("未浮动")]),t._v(" 子元素的高度撑起的")]),t._v(" "),v("li",[t._v("子元素浮动，还会对父元素造成影响")])]),t._v(" "),v("p",[t._v("如果"),v("strong",[t._v("子元素浮动")]),t._v("起来，就不占用"),v("strong",[t._v("普通文档流")]),t._v("的位置。"),v("strong",[t._v("父元素高度")]),t._v("就会"),v("strong",[t._v("失去支撑")]),t._v("，也称为"),v("strong",[t._v("高度坍塌")]),t._v("。")]),t._v(" "),v("h3",{attrs:{id:"问题现象"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#问题现象"}},[t._v("#")]),t._v(" 问题现象：")]),t._v(" "),v("p",[t._v("父元素不写高度时，子元素写了浮动后，父元素会发生高度塌陷（造成父元素高度为 0）")]),t._v(" "),v("h3",{attrs:{id:"解决方案"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),v("h4",{attrs:{id:"方案一"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#方案一"}},[t._v("#")]),t._v(" 方案一")]),t._v(" "),v("ul",[v("li",[t._v("为"),v("strong",[t._v("父元素")]),t._v("设置"),v("strong",[t._v("overflow:hidden")]),t._v("属性")]),t._v(" "),v("li",[t._v("原理:  CSS中的"),v("strong",[t._v("overflow:hidden")]),t._v("属性会"),v("strong",[t._v("强制要求父元素必须裹住所有内部浮动的元素，以及所有元素的margin范围")])]),t._v(" "),v("li",[t._v("缺点: 不能和position定位配合使用，超出的尺寸会被隐藏")])]),t._v(" "),v("h4",{attrs:{id:"方案二"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#方案二"}},[t._v("#")]),t._v(" 方案二")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("在浮动元素下方添加空div，并给元素声明 clear：both，保险起见，再加height:0。清除个别块元素可能自带的height:16px;")])]),t._v(" "),v("li",[t._v("原理: 利用clear:both属性和父元素必须包含非浮动的元素两个原理")]),t._v(" "),v("li",[t._v("缺点：需要添加多余的空标签并添加属性")])]),t._v(" "),v("h4",{attrs:{id:"方案三"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#方案三"}},[t._v("#")]),t._v(" 方案三")]),t._v(" "),v("ul",[v("li",[t._v("设置"),v("strong",[t._v("父元素也浮动")])]),t._v(" "),v("li",[t._v("原理："),v("strong",[t._v("浮动属性也会强制父元素扩大到包含所有浮动的内部元素")])]),t._v(" "),v("li",[t._v("缺点： 产生了新的浮动，无穷无尽")])]),t._v(" "),v("h4",{attrs:{id:"方案四"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#方案四"}},[t._v("#")]),t._v(" 方案四")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v('父元素::after{ content:""; display:table; clear:both; height:0 }')])]),t._v(" "),v("li",[t._v("ps : 个别浏览器，display:table，可能带默认高度保险起见: 再加一个属性height:0px")])])])}),[],!1,null,null,null);v.default=s.exports}}]);