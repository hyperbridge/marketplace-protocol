(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{100:function(t,e){},463:function(t,e,r){"use strict";var s=r(100);r.n(s).a},707:function(t,e,r){"use strict";r.r(e);var s=r(4),n=r.n(s),a=r(7),o=r.n(a),c={components:{"c-layout":function(t){return Promise.resolve().then(function(){var e=[r(737)];t.apply(null,e)}.bind(this)).catch(r.oe)},"c-switch":function(t){return Promise.resolve().then(function(){var e=[r(15)];t.apply(null,e)}.bind(this)).catch(r.oe)}},data:function(){return{selected:[]}},computed:{selectAll:{get:function(){return this.selected.length==this.protocols.map(function(t){return t.contracts.length}).reduce(function(t,e){return t+e})},set:function(t){this.selected=t?this.protocols.map(function(t){return t.contracts.map(function(e){return t.id+"."+e.name})}).reduce(function(t,e){return t.concat(e)}):[]}},protocols:function(){return[{id:"network",name:"Token",link:"https://github.com/hyperbridge/token",contracts:[{name:"Token",link:"https://github.com/hyperbridge/token/blob/master/smart-contracts/ethereum/contracts/Token.sol",created_at:this.$store.state.application.ethereum[this.$store.state.application.current_ethereum_network].contracts.Token.created_at,address:this.$store.state.application.ethereum[this.$store.state.application.current_ethereum_network].contracts.Token.address,links:[]},{name:"TokenDelegate",link:"https://github.com/hyperbridge/token/blob/master/smart-contracts/ethereum/contracts/TokenDelegate.sol",created_at:this.$store.state.application.ethereum[this.$store.state.application.current_ethereum_network].contracts.TokenDelegate.created_at,address:this.$store.state.application.ethereum[this.$store.state.application.current_ethereum_network].contracts.TokenDelegate.address,links:[]},{name:"EternalStorage",link:"https://github.com/hyperbridge/token/blob/master/smart-contracts/ethereum/contracts/EternalStorage.sol",created_at:this.$store.state.application.ethereum[this.$store.state.application.current_ethereum_network].contracts.EternalStorage.created_at,address:this.$store.state.application.ethereum[this.$store.state.application.current_ethereum_network].contracts.EternalStorage.address,links:[]}]},{id:"marketplace",name:"Marketplace Protocol",link:"https://github.com/hyperbridge/marketplace-protocol",contracts:[{name:"Marketplace",link:"https://github.com/hyperbridge/marketplace-protocol/blob/master/smart-contracts/ethereum/contracts/Marketplace.sol",created_at:this.$store.state.marketplace.ethereum[this.$store.state.marketplace.current_ethereum_network].contracts.Marketplace.created_at,address:this.$store.state.marketplace.ethereum[this.$store.state.marketplace.current_ethereum_network].contracts.Marketplace.address,links:[]}]},{id:"funding",name:"Funding Protocol",link:"https://github.com/hyperbridge/funding-protocol",contracts:[{name:"FundingStorage",link:"https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/FundingStorage.sol",created_at:this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.FundingStorage.created_at,address:this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.FundingStorage.address,links:[]},{name:"DeveloperStorageAccess",link:"https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/DeveloperStorageAccess.sol",created_at:this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.DeveloperStorageAccess.created_at,address:this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.DeveloperStorageAccess.address,links:[]},{name:"ContributionStorageAccess",link:"https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/ContributionStorageAccess.sol",created_at:this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ContributionStorageAccess.created_at,address:this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ContributionStorageAccess.address,links:[]},{name:"ProjectStorageAccess",link:"https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/ProjectStorageAccess.sol",created_at:this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectStorageAccess.created_at,address:this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectStorageAccess.address,links:[]},{name:"CurationStorageAccess",link:"https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/CurationStorageAccess.sol",created_at:this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.CurationStorageAccess.created_at,address:this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.CurationStorageAccess.address,links:[]},{name:"FundingVault",link:"https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/FundingVault.sol",created_at:this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.FundingVault.created_at,address:this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.FundingVault.address,links:[]},{name:"Developer",link:"https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/Developer.sol",created_at:this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.Developer.created_at,address:this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.Developer.address,links:[]},{name:"Contribution",link:"https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/Contribution.sol",created_at:this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.Contribution.created_at,address:this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.Contribution.address,links:[]},{name:"ProjectTimeline",link:"https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/ProjectTimeline.sol",created_at:this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectTimeline.created_at,address:this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectTimeline.address,links:[]},{name:"ProjectTimelineHelpersLibrary",link:"https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/libraries/ProjectTimelineHelpersLibrary.sol",created_at:this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectTimelineHelpersLibrary.created_at,address:this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectTimelineHelpersLibrary.address,links:[]},{name:"ProjectTimelineProposal",link:"https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/ProjectTimelineProposal.sol",created_at:this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectTimelineProposal.created_at,address:this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectTimelineProposal.address,links:[]},{name:"ProjectContributionTierHelpersLibrary",link:"https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/libraries/ProjectContributionTierHelpersLibrary.sol",created_at:this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectContributionTierHelpersLibrary.created_at,address:this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectContributionTierHelpersLibrary.address,links:[]},{name:"ProjectMilestoneCompletion",link:"https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/libraries/ProjectMilestoneCompletion.sol",created_at:this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectMilestoneCompletion.created_at,address:this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectMilestoneCompletion.address,links:[]},{name:"ProjectRegistrationHelpersLibrary",link:"https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/ProjectRegistrationHelpersLibrary.sol",created_at:this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectRegistrationHelpersLibrary.created_at,address:this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectRegistrationHelpersLibrary.address,links:[]},{name:"ProjectRegistration",link:"https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/ProjectRegistration.sol",created_at:this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectRegistration.created_at,address:this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.ProjectRegistration.address,links:[]},{name:"Curation",link:"https://github.com/hyperbridge/funding-protocol/blob/master/smart-contracts/ethereum/contracts/Curation.sol",created_at:this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.Curation.created_at,address:this.$store.state.funding.ethereum[this.$store.state.funding.current_ethereum_network].contracts.Curation.address,links:[]}]}]}},methods:{cleanDatabase:function(){this.$store.dispatch("database/clean")},reloadDatabase:function(){this.$store.dispatch("database/reload")},deployContract:function(t,e){this.$store.dispatch(t+"/deployContract",{contractName:e})},deployAll:function(){var t=this;return o()(n.a.mark(function e(){var r,s,a,o;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n.a.keys(t.protocols);case 1:if((e.t1=e.t0()).done){e.next=20;break}r=e.t1.value,s=t.protocols[r],e.t2=n.a.keys(s.contracts);case 5:if((e.t3=e.t2()).done){e.next=18;break}return a=e.t3.value,o=t.protocols[r].contracts[a],e.prev=8,e.next=11,t.$store.dispatch(s.id+"/deployContract",{contractName:o.name});case 11:e.sent,e.next=16;break;case 14:e.prev=14,e.t4=e.catch(8);case 16:e.next=5;break;case 18:e.next=1;break;case 20:case"end":return e.stop()}},e,t,[[8,14]])}))()},deploySelected:function(){var t=this;return o()(n.a.mark(function e(){var r,s,a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n.a.keys(t.selected);case 1:if((e.t1=e.t0()).done){e.next=9;break}return r=e.t1.value,s=t.selected[r].split(".")[0],a=t.selected[r].split(".")[1],e.next=7,t.$store.dispatch(s+"/deployContract",{contractName:a});case 7:e.next=1;break;case 9:case"end":return e.stop()}},e,t)}))()}}},i=(r(463),r(0)),l=Object(i.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("c-layout",{attrs:{navigationKey:"settings-navigation"}},[r("div",{staticClass:"content",attrs:{id:"content"}},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("h3",[t._v("Client Settings")]),t._v(" "),r("div",{staticClass:"card invert"},[r("div",{staticClass:"page-heading"},[r("div",{staticClass:"page-heading__container"},[r("h1",{staticClass:"title"},[t._v("Protocol Settings")]),t._v(" "),r("p",{staticClass:"caption"},[t._v("Select protocol contracts to deploy")])]),t._v(" "),r("div",{staticClass:"page-heading__container float-right d-none d-md-block"},[t.selected.length?r("button",{staticClass:"btn btn-outline-secondary",on:{click:t.deploySelected}},[t._v("Deploy selected")]):t._e(),t._v(" "),r("button",{staticClass:"btn btn-outline-secondary",on:{click:t.deployAll}},[t._v("Deploy all")])])]),t._v(" "),r("div",{},[r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-dark margin-bottom-0"},[r("thead",[r("tr",[r("th",{attrs:{scope:"col",width:"40"}},[r("label",{staticClass:"custom-control custom-checkbox"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.selectAll,expression:"selectAll"}],staticClass:"custom-control-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.selectAll)?t._i(t.selectAll,null)>-1:t.selectAll},on:{change:function(e){var r=t.selectAll,s=e.target,n=!!s.checked;if(Array.isArray(r)){var a=t._i(r,null);s.checked?a<0&&(t.selectAll=r.concat([null])):a>-1&&(t.selectAll=r.slice(0,a).concat(r.slice(a+1)))}else t.selectAll=n}}}),t._v(" "),r("span",{staticClass:"custom-control-label"})])]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("Name")]),t._v(" "),r("th",{attrs:{scope:"col",width:"160"}},[t._v("Status")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("Address")]),t._v(" "),r("th",{attrs:{scope:"col"}})])]),t._v(" "),r("tbody",[t._l(t.protocols,function(e){return[r("tr",{key:e.id},[r("td",{staticClass:"margin-top-0 margin-bottom-0",staticStyle:{background:"rgba(255, 255, 255, 0.01)"},attrs:{colspan:"5"}},[r("a",{attrs:{href:e.link}},[r("strong",[t._v(t._s(e.name))])])])]),t._v(" "),t._l(e.contracts,function(s){return r("tr",{key:s.name},[r("td",[r("label",{staticClass:"custom-control custom-checkbox"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"custom-control-input",attrs:{type:"checkbox",number:""},domProps:{value:e.id+"."+s.name,checked:Array.isArray(t.selected)?t._i(t.selected,e.id+"."+s.name)>-1:t.selected},on:{change:function(r){var n=t.selected,a=r.target,o=!!a.checked;if(Array.isArray(n)){var c=e.id+"."+s.name,i=t._i(n,c);a.checked?i<0&&(t.selected=n.concat([c])):i>-1&&(t.selected=n.slice(0,i).concat(n.slice(i+1)))}else t.selected=o}}}),t._v(" "),r("span",{staticClass:"custom-control-label"})])]),t._v(" "),r("td",[r("a",{attrs:{href:s.link}},[t._v(t._s(s.name))]),t._v(" "),r("br"),t._v(" "),s.links&&s.links.length?r("p",[r("strong",[t._v("Dependencies:")]),t._v(" "),t._l(s.links,function(e){return r("em",{key:e.name},[t._v(t._s(e.name)+" ")])})],2):t._e()]),t._v(" "),r("td",[s.created_at?r("span",{staticClass:"badge badge-success"},[t._v("Deployed")]):t._e(),t._v(" "),s.created_at?t._e():r("span",{staticClass:"badge badge-warning"},[t._v("Undeployed")]),t._v(" "),s.created_at?r("div",[r("strong",[t._v(t._s(t._f("formatDate")(s.created_at)))]),r("br"),t._v(" "),r("span",{staticClass:"text-muted"},[t._v(t._s(t._f("formatTime")(s.created_at)))])]):t._e()]),t._v(" "),r("td",[r("div",{staticClass:"input-group"},[r("input",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:s.address}}),t._v(" "),r("span",{staticClass:"input-group-append"},[r("button",{staticClass:"btn btn-light",attrs:{type:"button"}},[t._v("Copy")])])])]),t._v(" "),r("td",[r("button",{staticClass:"btn btn-light btn-sm",on:{click:function(r){r.preventDefault(),t.deployContract(e.id,s.name)}}},[t._v("Deploy")])])])})]})],2)])])])]),t._v(" "),r("div",{staticClass:"card invert"},[r("div",{staticClass:"page-heading"},[r("div",{staticClass:"page-heading__container"},[r("h1",{staticClass:"title"},[t._v("Database Settings")]),t._v(" "),r("p",{staticClass:"caption"})]),t._v(" "),r("div",{staticClass:"page-heading__container float-right d-none d-md-block"},[r("button",{staticClass:"btn btn-outline-secondary",on:{click:function(e){t.cleanDatabase()}}},[t._v("Clean")]),t._v(" "),r("button",{staticClass:"btn btn-outline-secondary",on:{click:function(e){t.reloadDatabase()}}},[t._v("Reload initial data")])])]),t._v(" "),r("div",{})])])])])])])},[],!1,null,"6348e16c",null);e.default=l.exports}}]);