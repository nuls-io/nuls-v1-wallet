webpackJsonp([12],{"+p6K":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("LPk9"),o=s("KcW0"),n=s("FJop"),d=s("YgNb"),r=s("x47x"),i={data:function(){var e=this;return{submitId:"addNode",agentAddress:this.$route.query.agentAddress,agentId:this.$route.query.agentId,agentAddressInfo:[],addNodeForm:{nodeNo:""},addNodeRules:{nodeNo:[{validator:function(t,s,a){s||a(new Error(e.$t("message.c52"))),setTimeout(function(){var t=new r.BigNumber(1e8),o=new r.BigNumber(1e-8);if(t.times(e.addNodeForm.nodeNo).toString()===t.times(e.usable).toString()&&(e.addNodeForm.nodeNo=o.times(t.times(e.usable)-t.times(e.fee)).toString(),s=e.addNodeForm.nodeNo),/^\d+(?=\.{0,1}\d+$|$)/.exec(s)&&/^\d{1,8}(\.\d{1,8})?$/.exec(s)){var n=new r.BigNumber(s),d=new r.BigNumber(e.usable);s<2e3?a(new Error(e.$t("message.c54"))):1===n.comparedTo(d.minus(e.fee))?a(new Error(e.$t("message.c542"))):a()}else a(new Error(e.$t("message.c53")))},300)},trigger:"blur"}]},usable:0,fee:0,toCheckOk:!1}},components:{Back:a.a,ProgressBar:o.a,Password:n.a},created:function(){this.getAgentAddressInfo("/consensus/agent/"+this.agentId),this.getBalanceAddress("/accountledger/balance/"+localStorage.getItem("newAccountAddress"))},mounted:function(){this.$refs.input.focus()},methods:{getAgentAddressInfo:function(e){var t=this;this.$fetch(e).then(function(e){if(e.success){var s=new r.BigNumber(1e-8);t.toCheckOk=e.data.agentAddress===localStorage.getItem("newAccountAddress"),e.data.deposit=parseFloat(s.times(e.data.deposit).toString()),e.data.creditVals=e.data.creditVal,e.data.creditVal=((e.data.creditVal+1)/2*100).toFixed().toString()+"%",e.data.agentAddresss=e.data.agentAddress.substr(0,9)+"..."+e.data.agentAddress.substr(-9),e.data.totalDeposits=(1e-8*e.data.totalDeposit).toFixed(0)+"/500000",e.data.totalDeposit>5e13?e.data.totalDeposit="100%":e.data.totalDeposit=(e.data.totalDeposit/5e11).toString()+"%",t.agentAddressInfo=e.data,t.agentId=e.data.txHash}})},getBalanceAddress:function(e){var t=this;this.$fetch(e).then(function(e){e.success&&(t.usable=parseFloat(Object(d.b)(e.data.usable.value).toString()))})},toCheck:function(){this.$router.push({path:"/consensus/nodeInfo",query:{agentHash:this.agentAddressInfo.agentHash}})},countFee:function(){var e=this;if(this.addNodeForm.nodeNo>0){var t=new r.BigNumber(1e8),s="address="+localStorage.getItem("newAccountAddress")+"&agentHash="+this.agentId+"&deposit="+t.times(this.addNodeForm.nodeNo);this.$fetch("/consensus/deposit/fee?"+s).then(function(t){if(t.success){var s=new r.BigNumber(1e-8);e.fee=s.times(t.data.value)}})}},onSubmit:function(e){var t=this;this.$store.getters.getNetWorkInfo.localBestHeight===this.$store.getters.getNetWorkInfo.netBestHeight&&"true"===sessionStorage.getItem("setNodeNumberOk")?this.$refs[e].validate(function(e){if(!e)return!1;"true"===localStorage.getItem("encrypted")?t.$refs.password.showPassword(!0):t.$confirm(t.$t("message.c165"),"",{confirmButtonText:t.$t("message.confirmButtonText"),cancelButtonText:t.$t("message.cancelButtonText")}).then(function(){t.toSubmit("")}).catch(function(){})}):this.$message({message:this.$t("message.c133"),duration:"800"})},toSubmit:function(e){var t=this,s=new r.BigNumber(1e8),a='{"address":"'+localStorage.getItem("newAccountAddress")+'","agentHash":"'+this.agentId+'","deposit":"'+parseFloat(s.times(this.addNodeForm.nodeNo).toString())+'","password":"'+e+'"}';this.$post("/consensus/deposit/",a).then(function(e){e.success?(t.$message({message:t.$t("message.passWordSuccess"),type:"success"}),t.$router.push({name:"/myNode",query:{agentAddress:t.agentAddress,agentHash:t.agentId}})):t.$message({message:t.$t("message.passWordFailed")+e.data.msg,type:"warning"})})}}},c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"add-node"},[s("Back",{attrs:{backTitle:this.$t("message.consensusManagement")}}),e._v(" "),s("h2",[e._v(e._s(this.agentAddressInfo.agentId))]),e._v(" "),s("div",{staticClass:"div-icon1 node-page-top"},[s("p",{staticClass:"subscript",class:0===this.agentAddressInfo.status?"stay":""},[e._v("\n      "+e._s(e.$t("message.status"+this.agentAddressInfo.status))+"\n    ")]),e._v(" "),s("ul",[s("li",{staticClass:"li-bg overflow"},[s("label",[e._v(e._s(e.$t("message.c16"))+"：")]),e._v(e._s(this.agentAddressInfo.agentName?this.agentAddressInfo.agentName:this.agentAddressInfo.agentAddresss)+"\n        "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.toCheckOk,expression:"toCheckOk"}],staticClass:"cursor-p text-d",on:{click:e.toCheck}},[e._v(e._s(e.$t("message.c5_1")))])]),e._v(" "),s("li",[s("label",[e._v(e._s(e.$t("message.c17"))+"：")]),e._v(e._s(this.agentAddressInfo.commissionRate)+"%\n      ")]),e._v(" "),s("li",[s("label",[e._v(e._s(e.$t("message.c25"))+"：")]),e._v(e._s(this.agentAddressInfo.deposit)+"\n        NULS\n      ")]),e._v(" "),s("li",[s("label",[e._v(e._s(e.$t("message.c19"))+"：")]),e._v(e._s(this.agentAddressInfo.memberCount)+"\n      ")]),e._v(" "),s("li",[s("label",[e._v(e._s(e.$t("message.c18"))+"：")]),e._v(" "),s("ProgressBar",{attrs:{colorData:this.agentAddressInfo.creditVals<0?"#f64b3e":"#82bd39",widthData:this.agentAddressInfo.creditVal}}),e._v(" "),s("span",[e._v(" "+e._s(this.agentAddressInfo.creditRatios))])],1),e._v(" "),s("li",[s("label",[e._v(e._s(e.$t("message.c47"))+"：")]),e._v(" "),s("ProgressBar",{attrs:{colorData:"#58a5c9",widthData:this.agentAddressInfo.totalDeposit}}),e._v(" "),s("span",[e._v(" "+e._s(this.agentAddressInfo.totalDeposits))])],1)])]),e._v(" "),s("div",{staticClass:"add-node-bottom"},[s("el-form",{ref:"addNodeForm",attrs:{model:e.addNodeForm,rules:e.addNodeRules,size:"mini","label-position":"left"},nativeOn:{submit:function(e){e.preventDefault()}}},[s("el-form-item",{staticClass:"pledge-money",attrs:{label:e.$t("message.c51")+":",prop:"nodeNo"}},[s("span",{staticClass:"allUsable"},[e._v(e._s(e.$t("message.currentBalance"))+": "+e._s(this.usable)+" NULS")]),e._v(" "),s("el-input",{ref:"input",attrs:{maxlength:17},on:{change:e.countFee},model:{value:e.addNodeForm.nodeNo,callback:function(t){e.$set(e.addNodeForm,"nodeNo",t)},expression:"addNodeForm.nodeNo"}})],1),e._v(" "),s("el-form-item",{staticClass:"procedure",attrs:{label:e.$t("message.c28")+"："+this.fee+" NULS"}}),e._v(" "),s("el-form-item",{staticClass:"submit",attrs:{size:"large"}},[s("el-button",{attrs:{type:"primary",id:"addNode"},on:{click:function(t){e.onSubmit("addNodeForm")}}},[e._v("\n          "+e._s(e.$t("message.confirmButtonText"))+"\n        ")])],1)],1)],1),e._v(" "),s("Password",{ref:"password",attrs:{submitId:e.submitId},on:{toSubmit:e.toSubmit}})],1)},staticRenderFns:[]};var g=s("vSla")(i,c,!1,function(e){s("wd7D")},null,null);t.default=g.exports},wd7D:function(e,t){}});