(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{1097:function(t,a,s){"use strict";var i=s(344);s.n(i).a},1740:function(t,a,s){"use strict";s.r(a);var i={props:{activated:{type:Boolean,default:!1},width:{type:String,default:"500"},name:String,mac:String,win:String,linux:String,img:String,filesList:Array},components:{"c-basic-popup":function(t){return s.e(15).then(function(){var a=[s(1812)];t.apply(null,a)}.bind(this)).catch(s.oe)},"c-dropdown":function(t){return s.e(23).then(function(){var a=[s(1788)];t.apply(null,a)}.bind(this)).catch(s.oe)}},data:function(){return{file:"Choose the game"}},methods:{choosenGame:function(){},makeCapitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}}},e=(s(1097),s(0)),n=Object(e.a)(i,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("c-basic-popup",{attrs:{activated:t.activated,width:t.width}},[s("div",{staticClass:"game-installer",attrs:{slot:"body"},slot:"body"},[s("div",{staticClass:"game-installer__header"},[s("div",{staticClass:"game-installer__game-img"},[s("c-img",{attrs:{src:t.img}})],1),t._v(" "),s("div",{staticClass:"game-installer__game-description"},[s("div",{staticClass:"h5 mb-0 pb-0 font-weight-bold"},[t._v("\n                    "+t._s(t.name)+"\n                ")]),t._v(" "),s("p",[t._t("default")],2),t._v(" "),s("div",{staticClass:"game-operations-support"},[t._v("\n                    Systems\n                    "),t.mac?s("i",{staticClass:"fab fa-apple"}):t._e(),t._v(" "),t.linux?s("i",{staticClass:"fab fa-linux"}):t._e(),t._v(" "),t.win?s("i",{staticClass:"fab fa-windows"}):t._e()])])]),t._v(" "),s("div",{staticClass:"game-installer__body"},[s("div",{staticClass:"game-installer__select-row"},[s("label",[t._v("\n                    Install\n                ")]),t._v(" "),s("div",{staticClass:"dropdown"},[s("a",{staticClass:"btn dropdown-toggle",attrs:{href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("i",{staticClass:"fas fa-gamepad"}),t._v("\n                        "+t._s(t.file)+"\n                    ")]),t._v(" "),s("div",{staticClass:"dropdown-menu"},[s("ul",{staticClass:"list-unstyled mb-0 p-0"},t._l(t.filesList,function(a,i){return s("li",{key:i,on:{click:function(s){t.choosenGame(a)}}},[t._v("\n                                "+t._s(t.name)+" ("+t._s(t.makeCapitalize(a.platform))+", "+t._s(t._f("numeralFormat")(a.size,"0.0"))+")\n                            ")])}))])])]),t._v(" "),s("div",{staticClass:"game-installer__select-row"},[s("label",[t._v("\n                    To location\n                ")]),t._v(" "),s("div",{staticClass:"input-group"},[s("div",{staticClass:"input-group-prepend"},[s("i",{staticClass:"fas fa-folder-open"})]),t._v(" "),s("select",{staticClass:"custom-select"},[s("option",{attrs:{selected:""}},[t._v("Choose...")]),t._v(" "),s("option",{attrs:{value:"1"}},[t._v("One")]),t._v(" "),s("option",{attrs:{value:"2"}},[t._v("Two")]),t._v(" "),s("option",{attrs:{value:"3"}},[t._v("Three")])])])]),t._v(" "),s("div",{staticClass:"game-installer__space"},[s("div",[t._v("\n                    Disk space required "),s("strong",[t._v("251")]),t._v(" MiB\n                ")]),t._v(" "),s("div",[t._v("\n                    Disk space available "),s("strong",[t._v("25")]),t._v(" GiB\n                    "),s("i",{staticClass:"fas fa-check-circle",staticStyle:{color:"#43C981"}})])]),t._v(" "),s("div",{staticClass:"game-installer__footer"},[s("a",{staticClass:"c-button btn-cancel",attrs:{href:"#"}},[t._v("\n                    Cancel\n                ")]),t._v(" "),s("a",{staticClass:"c-button btn-download",attrs:{href:"#"}},[s("i",{staticClass:"fas fa-download"}),t._v(" Install\n                ")])])])])])},[],!1,null,"118c9703",null);a.default=n.exports},344:function(t,a){}}]);