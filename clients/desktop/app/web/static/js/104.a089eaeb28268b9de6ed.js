(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{1466:function(t,e,i){"use strict";i.r(e);var n=i(2),a=i.n(n),s=i(10),o={components:{"c-heading-bar":function(t){return Promise.resolve().then(function(){var e=[i(1439)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-user-card":function(t){return i.e(10).then(function(){var e=[i(1432)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-button-arrows":function(t){return i.e(182).then(function(){var e=[i(1314)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-modal-light":function(t){return i.e(229).then(function(){var e=[i(1421)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-checkbox":function(t){return Promise.resolve().then(function(){var e=[i(1467)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-input-searcher":function(t){return Promise.resolve().then(function(){var e=[i(1272)];t.apply(null,e)}.bind(this)).catch(i.oe)}},data:function(){return{newprofile:{name:"",wallet:"",img:"/static/img/new-profile.png",default:!1,edit:!1},profileCopy:{},editedprofile:null,removeprofile:null,filterPhrase:"",sortAsc:!0}},methods:{setDefault:function(t){this.$store.state.application.account.activeProfile=t,this.$store.state.application.developerMode=!!t.developerId,this.saveprofiles()},editprofile:function(t){console.log(t,this.editedprofile,this.filteredprofiles),this.editedprofile?this.$snotify.warning("You must finish editing the current profile"):(t.edit=!0,this.editedprofile=t)},cancelEditprofile:function(t){t.edit=!1,this.editedprofile=null},saveprofile:function(t){var e=this;for(var i in t)t[i]=this.profileClone[i];t.name||(t.name="Default"),t.edit=!1,this.editedprofile=null,s.sendCommand("saveprofileRequest",t).then(function(t){e.saveprofiles()})},deleteprofile:function(t){var e=this;this.removeprofile?s.sendCommand("removeprofileRequest",this.removeprofile).then(function(){var t=e.profiles.indexOf(e.removeprofile);e.profiles.splice(t,1),e.removeprofile.edit=!1,e.removeprofile=null,e.saveprofiles()}):this.removeprofile=t,this.editedprofile=null,this.saveprofiles()},createprofile:function(){var t=this,e=this.newprofile;Math.floor(100*Math.random());s.sendCommand("createprofileRequest",e).then(function(i){e.id=i.id,e.address=i.address,e.name||(e.name="Default"),t.profiles.push(a()({},e,{edit:!0})),t.editedprofile=e,t.saveprofiles()})},saveprofiles:function(){this.$store.state.application.account.profiles=this.profiles,this.$store.dispatch("application/updateState")}},computed:{profiles:function(){for(var t in this.$store.state.application.account.profiles)this.$store.state.application.account.profiles[t].name||(this.$store.state.application.account.profiles[t].name="Default");return this.$store.state.application.account.profiles},defaultprofile:function(){var t=this;return this.profiles.find(function(e){return t.$store.state.application.account.activeProfile?e.id==t.$store.state.application.account.activeProfile.id:null})},profileClone:function(){return this.editedprofile?a()({},this.editedprofile):{}},isEditing:function(){return this.profiles.find(function(t){return t.edit})},filteredprofiles:function(){var t=this;return this.profiles.filter(function(e){return!e.name||e.name.toLowerCase().includes(t.filterPhrase.toLowerCase())}).sort(function(e,i){return e.name>i.name?t.sortAsc?1:-1:0})}}},d=(i(922),i(0)),c=Object(d.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("c-layout",{attrs:{navigationKey:"account"}},[i("div",{staticClass:"row align-items-stretch justify-content-center margin-bottom-40"},[i("div",{staticClass:"col-12"},[i("c-heading-bar",{attrs:{name:"My Profile",showArrows:!1,showBackground:!1}})],1),t._v(" "),i("div",{staticClass:"col-12 col-md-6 col-lg-4 my_profile"},[t.defaultprofile?i("c-user-card",{attrs:{user:t.defaultprofile,previewMode:!0},on:{updateprofile:function(e,i){return t.defaultprofile[e]=i}}}):t.profiles.length?i("p",[t._v("\n                        You don't have a default profile.\n                    ")]):i("p",[t._v("\n                        You don't have any profiles yet.\n                    ")])],1),t._v(" "),t.defaultprofile?i("div",{staticClass:"col-12 col-md-6 col-lg-4"},[i("div",{staticClass:"verification-blk text-center"},[i("h3",{staticClass:"text-white"},[t._v("Verify Your Profile")]),t._v(" "),t.defaultprofile.isVerified?i("div",{staticClass:"status"},[i("i",{staticClass:"fas fa-check"}),t._v("\n                            Verified\n                        ")]):t.defaultprofile.isVerifying?i("div",{staticClass:"status"},[i("i",{staticClass:"fas fa-hourglass"}),t._v("\n                            Verifying\n                        ")]):i("c-button",{staticClass:"mt-3",attrs:{status:"outline-success",href:"#/account/verification"}},[t._v("\n                            Click here to verify\n                        ")]),t._v(" "),t.defaultprofile.isVerified?i("div",{staticClass:"date"},[t._v("\n                            Valid up to $7,500 USD\n                        ")]):t._e()],1)]):t._e()]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 mb-4"},[i("c-button",{attrs:{status:"info",icon:"user-plus"},on:{click:t.createprofile}},[t._v(" New Profile")])],1),t._v(" "),i("div",{staticClass:"col-12"},[i("c-heading-bar",{attrs:{name:"All Profiles",showArrows:!1,showBackground:!1,showActions:""}},[i("div",{staticClass:"additional-action margin-left-20",attrs:{slot:"additional-action"},slot:"additional-action"},[i("span",{staticClass:"text"},[t._v("Name "),i("c-icon",{attrs:{name:"user"}})],1),t._v(" "),i("c-button-arrows",{attrs:{activeUp:t.sortAsc},on:{clickUp:function(e){t.sortAsc=!0},clickDown:function(e){t.sortAsc=!1}}})],1),t._v(" "),i("div",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"REPUTATION",expression:"'REPUTATION'"}],staticClass:"additional-action margin-left-20",attrs:{slot:"additional-action"},slot:"additional-action"},[i("span",{staticClass:"text"},[t._v("Rating "),i("c-icon",{attrs:{name:"trophy"}})],1),t._v(" "),i("c-button-arrows")],1),t._v(" "),i("div",{staticClass:"additional-action margin-left-20 padding-5",attrs:{slot:"additional-action"},slot:"additional-action"},[i("c-input-searcher",{attrs:{placeholder:"Search"},model:{value:t.filterPhrase,callback:function(e){t.filterPhrase=e},expression:"filterPhrase"}})],1)])],1),t._v(" "),i("transition-group",{staticClass:"profile-picker",attrs:{tag:"div",name:"item",duration:100}},t._l(t.filteredprofiles,function(e){return i("div",{key:e.id,staticClass:"profile-picker__profile",class:{edit:e.edit,"default-type":e.id==(t.defaultprofile&&t.defaultprofile.id)}},[i("c-user-card",t._b({staticClass:"margin-bottom-30",class:{default:e.id==(t.defaultprofile&&t.defaultprofile.id)},attrs:{user:e,previewMode:!e.edit}},"c-user-card",t.profileClone,!1,!0)),t._v(" "),i("div",{staticClass:"profile__action"},[e.edit||e.id==(t.defaultprofile&&t.defaultprofile.id)?t._e():i("c-button",{attrs:{status:"info",icon:"check"},on:{click:function(i){t.setDefault(e)}}},[t._v("Set default")]),t._v(" "),e.edit?t._e():i("c-button",{attrs:{status:"share",icon:"pen"},on:{click:function(i){t.editprofile(e)}}},[t._v("Edit")]),t._v(" "),e.edit?i("c-button",{attrs:{status:"share",icon:"pen"},on:{click:function(i){t.saveprofile(e)}}},[t._v("Save")]):t._e(),t._v(" "),e.edit?i("c-button",{attrs:{status:"danger",icon:"trash"},on:{click:function(i){t.deleteprofile(e)}}},[t._v("Delete")]):t._e(),t._v(" "),e.edit?i("c-button",{attrs:{icon:"times"},on:{click:function(i){t.cancelEditprofile(e)}}},[t._v("Cancel")]):t._e()],1)],1)})),t._v(" "),t.removeprofile?i("c-modal-light",{on:{close:function(e){t.removeprofile=null}}},[i("h4",[t._v("Are you sure that you want to delete this profile?")]),t._v(" "),i("p",[t._v("This operation can not be reversed")]),t._v(" "),i("c-user-card",{attrs:{user:t.removeprofile,previewMode:""}}),t._v(" "),i("div",[i("div",{staticClass:"profile-remove__buttons"},[i("c-button",{attrs:{size:"md"},on:{click:function(e){t.removeprofile=null}}},[t._v("Cancel")]),t._v(" "),i("c-button",{attrs:{size:"md"},on:{click:function(e){t.deleteprofile()}}},[t._v("Confirm")])],1)])],1):t._e()],1)])},[],!1,null,"24739ec6",null);e.default=c.exports},293:function(t,e){},922:function(t,e,i){"use strict";var n=i(293);i.n(n).a}}]);