(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["263b"],{"263b":function(a,t,i){"use strict";i.r(t);var e=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",[i("h1",[a._v("Tabs")]),i("h1",[a._v("Horizontal Tab")]),i("h-tabs",{staticClass:"h-mt-md",attrs:{bgcolor:"bg-secondary",textcolor:"text-white"},on:{tabChange:a.tabChange},model:{value:a.tabModel,callback:function(t){a.tabModel=t},expression:"tabModel"}},[i("h-tab",{attrs:{name:"TAB 1",lefticon:["fas","home"]}},[i("p",[a._v("\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.\n      ")]),i("p",[a._v("\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.\n      ")])]),i("h-tab",{attrs:{name:"TAB 2",lefticon:["fas","globe"],topicon:["fas","globe"],default:""}},[a._v("\n        This is the content of the second tab\n    ")]),i("h-tab",{attrs:{name:"TAB 3"}},[a._v("\n        This is the content of the tab 3\n    ")]),i("h-tab",{attrs:{name:"TAB 4"}},[a._v("\n        This is the content of the tab 4\n    ")]),i("h-tab",{attrs:{name:"TAB 5"}},[a._v("\n      This is the content of the tab 5\n    ")])],1),i("h3",[a._v("TabModel: "+a._s(a.tabModel))]),i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:a.tabhor,expression:"tabhor"}]},[a._v("  "),i("code",{staticClass:"html"},[a._v("\n  ")]),a._v("\n  ")]),i("h1",[a._v("Vertical Tab")]),i("h-tabs",{staticClass:"h-mt-md",attrs:{bgcolor:"bg-primary",textcolor:"text-white",vertical:""}},[i("h-tab",{attrs:{name:"First tab",lefticon:["fas","globe"],topicon:["fas","home"],default:""}},[i("p",[a._v("\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.\n      ")]),i("p",[a._v("\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.\n      ")]),i("p",[a._v("\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.\n      ")]),i("p",[a._v("\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.\n      ")]),i("p",[a._v("\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.\n      ")]),i("p",[a._v("\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.\n      ")])]),i("h-tab",{attrs:{name:"TAB 2",lefticon:["fas","globe"],topicon:["fas","globe"]}},[a._v("\n        This is the content of the second tab\n    ")]),i("h-tab",{attrs:{name:"TAB 3"}},[a._v("\n        This is the content of the tab 3\n    ")]),i("h-tab",{attrs:{name:"TAB 4"}},[a._v("\n        This is the content of the tab 4\n    ")]),i("h-tab",{attrs:{name:"TAB 5"}},[a._v("\n      This is the content of the tab 5\n    ")])],1),i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:a.tabver,expression:"tabver"}]},[a._v("  "),i("code",{staticClass:"html"},[a._v("\n  ")]),a._v("\n  ")])],1)},o=[],n={components:{},data:function(){return{tabModel:"",tabhor:'\n<h-tabs v-model="tabModel" @tabChange="tabChange" bgcolor="bg-secondary" textcolor="text-white" class="h-mt-md">\n  <h-tab name="TAB 1" :lefticon="[\'fas\', \'home\']">\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.\n    </p>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.\n    </p>\n  </h-tab>\n  <h-tab name="TAB 2" :lefticon="[\'fas\', \'globe\']" :topicon="[\'fas\', \'globe\']" default>\n      This is the content of the second tab\n  </h-tab>\n  <h-tab name="TAB 3">\n      This is the content of the tab 3\n  </h-tab>\n  <h-tab name="TAB 4">\n      This is the content of the tab 4\n  </h-tab>\n  <h-tab name="TAB 5">\n    This is the content of the tab 5\n  </h-tab>\n</h-tabs>\n\n<h3>TabModel: {{tabModel}}</h3>      \n      ',tabver:'\n<h-tabs bgcolor="bg-primary" textcolor="text-white"  vertical class="h-mt-md">\n  <h-tab name="First tab" :lefticon="[\'fas\', \'globe\']" :topicon="[\'fas\', \'home\']" default>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.\n    </p>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.\n    </p>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.\n    </p>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.\n    </p>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.\n    </p>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.\n    </p>\n  </h-tab>\n  <h-tab name="TAB 2" :lefticon="[\'fas\', \'globe\']" :topicon="[\'fas\', \'globe\']">\n      This is the content of the second tab\n  </h-tab>\n  <h-tab name="TAB 3">\n      This is the content of the tab 3\n  </h-tab>\n  <h-tab name="TAB 4">\n      This is the content of the tab 4\n  </h-tab>\n  <h-tab name="TAB 5">\n    This is the content of the tab 5\n  </h-tab>\n</h-tabs>\n      '}},methods:{tabChange:function(a){}}},s=n,m=i("2877"),r=Object(m["a"])(s,e,o,!1,null,null,null);t["default"]=r.exports}}]);
//# sourceMappingURL=263b.51b95f1c.js.map