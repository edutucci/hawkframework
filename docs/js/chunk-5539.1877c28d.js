(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5539"],{"263b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Tabs")]),a("h1",[t._v("Horizontal Tab")]),a("h-tabs",{staticClass:"h-mt-md",attrs:{bgcolor:"bg-secondary",textcolor:"text-white"},on:{tabChange:t.tabChange},model:{value:t.tabModel,callback:function(e){t.tabModel=e},expression:"tabModel"}},[a("h-tab",{attrs:{name:"First tab"}},[t._v("\n      This is the content of the first tab\n  ")]),a("h-tab",{attrs:{name:"Second tab"}},[t._v("\n      This is the content of the second tab\n  ")]),a("h-tab",{attrs:{name:"Disabled tab","is-disabled":!0}},[t._v("\n      This content will be unavailable while :is-disabled prop set to true\n  ")]),a("h-tab",{attrs:{name:"Custom fragment"}},[t._v("\n      The fragment that is appended to the url can be customized\n  ")]),a("h-tab",{attrs:{prefix:"<span class='glyphicon glyphicon-star'></span>",name:"Prefix and suffix",suffix:" <span class='badge'>4</span>"}},[t._v("\n      A prefix and a suffix can be added\n  ")]),a("h-tab",{attrs:{name:"Gift"}},[t._v("\n      Anyone is waiting a gift from you\n  ")])],1),a("h3",[t._v("TabModel: "+t._s(t.tabModel))]),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.tabhor,expression:"tabhor"}]},[t._v("  "),a("code",{staticClass:"html"},[t._v("\n  ")]),t._v("\n  ")]),a("h1",[t._v("Vertical Tab")]),a("h-tabs",{staticClass:"h-mt-md",attrs:{bgcolor:"bg-primary",textcolor:"text-white",vertical:""}},[a("h-tab",{attrs:{name:"First tab"}},[t._v("\n      This is the content of the first tab\n  ")]),a("h-tab",{attrs:{name:"Second tab"}},[t._v("\n      This is the content of the second tab\n  ")]),a("h-tab",{attrs:{name:"Disabled tab","is-disabled":!0}},[t._v("\n      This content will be unavailable while :is-disabled prop set to true\n  ")]),a("h-tab",{attrs:{name:"Custom fragment"}},[t._v("\n      The fragment that is appended to the url can be customized\n  ")]),a("h-tab",{attrs:{prefix:"<span class='glyphicon glyphicon-star'></span> ",name:"Prefix and suffix",suffix:" <span class='badge'>4</span>"}},[t._v("\n      A prefix and a suffix can be added\n  ")]),a("h-tab",{attrs:{name:"Gift"}},[t._v("\n      Anyone is waiting a gift from you\n  ")])],1),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.tabver,expression:"tabver"}]},[t._v("  "),a("code",{staticClass:"html"},[t._v("\n  ")]),t._v("\n  ")])],1)},s=[],i=a("b8d1"),o=a("f72f"),r={components:{HTab:i["a"],HTabs:o["a"]},data:function(){return{tabModel:"",tabhor:'\n<h-tabs v-model="tabModel" @tabChange="tabChange" bgcolor="bg-secondary" textcolor="text-white" class="h-mt-md">\n    <h-tab name="First tab">\n        This is the content of the first tab\n    </h-tab>\n    <h-tab name="Second tab">\n        This is the content of the second tab\n    </h-tab>\n    <h-tab name="Disabled tab" :is-disabled="true">\n        This content will be unavailable while :is-disabled prop set to true\n    </h-tab>\n    <h-tab name="Custom fragment">\n        The fragment that is appended to the url can be customized\n    </h-tab>\n    <h-tab prefix="<span class=\'glyphicon glyphicon-star\'></span> " \n            name="Prefix and suffix" \n            suffix=" <span class=\'badge\'>4</span>">\n        A prefix and a suffix can be added\n    </h-tab>\n    <h-tab name="Gift">\n        Anyone is waiting a gift from you\n    </h-tab>      \n</h-tabs>\n\n<h3>TabModel: {{tabModel}}</h3>      \n      ',tabver:'\n<h-tabs bgcolor="bg-primary" textcolor="text-white"  vertical class="h-mt-md">\n    <h-tab name="First tab">\n        This is the content of the first tab\n    </h-tab>\n    <h-tab name="Second tab">\n        This is the content of the second tab\n    </h-tab>\n    <h-tab name="Disabled tab" :is-disabled="true">\n        This content will be unavailable while :is-disabled prop set to true\n    </h-tab>\n    <h-tab name="Custom fragment">\n        The fragment that is appended to the url can be customized\n    </h-tab>\n    <h-tab prefix="<span class=\'glyphicon glyphicon-star\'></span> " \n            name="Prefix and suffix" \n            suffix=" <span class=\'badge\'>4</span>">\n        A prefix and a suffix can be added\n    </h-tab>\n    <h-tab name="Gift">\n        Anyone is waiting a gift from you\n    </h-tab>      \n</h-tabs>      \n      '}},methods:{tabChange:function(t){console.log("tab change name: "+t)}}},c=r,l=a("2877"),b=Object(l["a"])(c,n,s,!1,null,null,null);e["default"]=b.exports},"2cc9":function(t,e,a){"use strict";var n=a("a975"),s=a.n(n);s.a},"2f2f":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},s=[],i={props:{value:{type:String},textcolor:{type:String,default:"text-black"},bgcolor:{type:String,default:"bg-white"}},data:function(){return{themeColors:void 0}},created:function(){},mounted:function(){},methods:{}},o=i,r=(a("edb0"),a("2877")),c=Object(r["a"])(o,n,s,!1,null,"d749b7a2",null);e["a"]=c.exports},"4cdb":function(t,e,a){},"7f7f":function(t,e,a){var n=a("86cc").f,s=Function.prototype,i=/^\s*function ([^ (]*)/,o="name";o in s||a("9e1e")&&n(s,o,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},"8a68":function(t,e,a){},a975:function(t,e,a){},b8d1:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isVisible?a("div",{staticClass:"tab full-width  full-height"},[t._t("default")],2):t._e()},s=[],i=(a("7f7f"),{props:{name:{type:String,default:""}},data:function(){return{isVisible:!1}},methods:{tabName:function(){return this.name},setVisible:function(t){this.isVisible=t}}}),o=i,r=(a("2cc9"),a("2877")),c=Object(r["a"])(o,n,s,!1,null,"410f9d55",null);e["a"]=c.exports},ca5c:function(t,e,a){"use strict";var n=a("4cdb"),s=a.n(n);s.a},edb0:function(t,e,a){"use strict";var n=a("8a68"),s=a.n(n);s.a},f72f:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.vertical?a("div",[a("div",{staticClass:"flex"},[a("div",{staticClass:"flex flex-column flex-wrap",class:t.bgcolor},t._l(t.tabs,function(e,n){return a("div",{key:n,staticClass:"h-pl-sm h-pr-sm h-pt-md h-pb-md tab",class:[t.bordercolor[n],t.bgcolor,t.textcolor],style:t.bordercolor[n],on:{click:function(a){t.selectTab(e,n)}}},[a("strong",[t._v("  "+t._s(e.tabName())+" ")])])})),a("div",{staticClass:"flex-1"},[t._t("default")],2)])]):a("div",[a("div",{staticClass:"flex flex-column"},[a("div",{staticClass:"flex flex-wrap",class:t.bgcolor},t._l(t.tabs,function(e,n){return a("div",{key:n,staticClass:"h-pl-sm h-pr-sm h-pt-md h-pb-md tab",class:[t.bordercolor[n],t.bgcolor,t.textcolor],style:t.bordercolor[n],on:{click:function(a){t.selectTab(e,n)}}},[a("strong",[t._v("  "+t._s(e.tabName())+" ")])])})),a("div",[t._t("default")],2)])])])},s=[],i=a("2f2f"),o={extends:i["a"],props:{value:{type:String,default:""},vertical:{type:Boolean,default:!1}},data:function(){return{tabs:[],currentTab:void 0,selectedIndex:-1,bordercolor:[]}},created:function(){this.tabs=this.$children},mounted:function(){},methods:{isActive:function(t){return this.selectedIndex===t},selectTab:function(t,e){this.$set(this.bordercolor,this.selectedIndex,""),this.currentTab&&this.currentTab.setVisible(!1),this.currentTab=t,this.currentTab.setVisible(!0),this.selectedIndex=e,this.isActive(e)&&this.$set(this.bordercolor,e,this.tabBorderColor()),this.$emit("input",t.tabName()),this.$emit("tabChange",t.tabName())},tabBorderColor:function(){var t="";return t=this.vertical?"bg-white"===this.bgcolor?"active-border-right-black":"active-border-right-white":"bg-white"===this.bgcolor?"active-border-bottom-black":"active-border-bottom-white",t}}},r=o,c=(a("ca5c"),a("2877")),l=Object(c["a"])(r,n,s,!1,null,"026d4a4d",null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-5539.1877c28d.js.map