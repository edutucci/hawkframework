(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["4e22"],{"4e22":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[t._v("Search")]),s("h-search",{ref:"search",attrs:{options:t.options},on:{search:t.onSearch}}),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.exsearch,expression:"exsearch"}]},[t._v("    "),s("code",{staticClass:"html"},[t._v("\n    ")]),t._v("\n  ")]),s("h1",[t._v("Example")]),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.sample,expression:"sample"}]},[t._v("    "),s("code",{staticClass:"javascript"},[t._v("\n    ")]),t._v("\n  ")]),s("h2",{staticClass:"text-primary"},[t._v(" Vue Properties")]),s("hr"),t._m(0),s("h2",{staticClass:"text-primary"},[t._v(" Vue Events")]),s("hr"),t._m(1)],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex"},[s("div",[s("h3",[t._v("Name")]),s("div",[t._v("options")]),s("div",[t._v("placeholder")])]),s("div",{staticClass:"h-pl-md"},[s("h3",[t._v("Type")]),s("div",[t._v("Array")]),s("div",[t._v("String")])]),s("div",{staticClass:"h-pl-md"},[s("h3",[t._v("Description")]),s("div",[t._v("Sets a array with popup menu for the search")]),s("div",[t._v("Sets the placeholder for the input")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex"},[s("div",[s("h3",[t._v("Name")]),s("div",[t._v("@search(text)")])]),s("div",{staticClass:"h-pl-md"},[s("h3",[t._v("Description")]),s("div",[t._v("Triggered when the input changes after 1 second")])])])}],n={components:{},data:function(){return{options:[],exsearch:'\n<h-search @search="onSearch" ref="search" :options="options"/>\n      ',sample:"\nexport default {\n  data () {\n    return {\n      options: []\n    }\n  },\n  methods: {\n    onSearch (query) {\n      this.options = []\n      this.options.push({avatar: '/avatar/turtle.png', text: 'Ninja Turtle', desc: 'I kill you'})\n      this.options.push({img: '/avatar/folder_open.jpeg', text: 'Photos', desc: 'Dez 12, 2017'})\n      this.options.push({icon: ['fas', 'volleyball-ball'], text: 'Attractions', desc: 'Lets go to the movie?'})\n    }\n  }\n      "}},methods:{onSearch:function(t){this.options=[],this.options.push({avatar:"/avatar/turtle.png",text:"Ninja Turtle",desc:"I kill you"}),this.options.push({img:"/avatar/folder_open.jpeg",text:"Photos",desc:"Dez 12, 2017"}),this.options.push({icon:["fas","volleyball-ball"],text:"Attractions",desc:"Lets go to the movie?"})}}},o=n,r=s("2877"),h=Object(r["a"])(o,a,i,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=4e22.8ef4e283.js.map