(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["form"],{ec6b:function(e,l,a){"use strict";a.r(l);var t=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-lx-calendar"}),e._v(" 表单\n            ")]),a("el-breadcrumb-item",[e._v("班次查询")])],1)],1),a("div",{staticClass:"container"},[a("div",{staticClass:"form-box"},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"表单名称"}},[a("el-input",{model:{value:e.form.name,callback:function(l){e.$set(e.form,"name",l)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"选择器"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.region,callback:function(l){e.$set(e.form,"region",l)},expression:"form.region"}},[a("el-option",{key:"bbk",attrs:{label:"步步高",value:"bbk"}}),a("el-option",{key:"xtc",attrs:{label:"小天才",value:"xtc"}}),a("el-option",{key:"imoo",attrs:{label:"imoo",value:"imoo"}})],1)],1),a("el-form-item",{attrs:{label:"日期时间"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.form.date1,callback:function(l){e.$set(e.form,"date1",l)},expression:"form.date1"}})],1),a("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),a("el-col",{attrs:{span:11}},[a("el-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间"},model:{value:e.form.date2,callback:function(l){e.$set(e.form,"date2",l)},expression:"form.date2"}})],1)],1),a("el-form-item",{attrs:{label:"城市级联"}},[a("el-cascader",{attrs:{options:e.options},model:{value:e.form.options,callback:function(l){e.$set(e.form,"options",l)},expression:"form.options"}})],1),a("el-form-item",{attrs:{label:"选择开关"}},[a("el-switch",{model:{value:e.form.delivery,callback:function(l){e.$set(e.form,"delivery",l)},expression:"form.delivery"}})],1),a("el-form-item",{attrs:{label:"多选框"}},[a("el-checkbox-group",{model:{value:e.form.type,callback:function(l){e.$set(e.form,"type",l)},expression:"form.type"}},[a("el-checkbox",{attrs:{label:"步步高",name:"type"}}),a("el-checkbox",{attrs:{label:"小天才",name:"type"}}),a("el-checkbox",{attrs:{label:"imoo",name:"type"}})],1)],1),a("el-form-item",{attrs:{label:"单选框"}},[a("el-radio-group",{model:{value:e.form.resource,callback:function(l){e.$set(e.form,"resource",l)},expression:"form.resource"}},[a("el-radio",{attrs:{label:"步步高"}}),a("el-radio",{attrs:{label:"小天才"}}),a("el-radio",{attrs:{label:"imoo"}})],1)],1),a("el-form-item",{attrs:{label:"文本框"}},[a("el-input",{attrs:{type:"textarea",rows:"5"},model:{value:e.form.desc,callback:function(l){e.$set(e.form,"desc",l)},expression:"form.desc"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("表单提交")]),a("el-button",[e._v("取消")])],1)],1)],1)])])},o=[],r={name:"baseform",data:function(){return{options:[{value:"guangdong",label:"广东省",children:[{value:"guangzhou",label:"广州市",children:[{value:"tianhe",label:"天河区"},{value:"haizhu",label:"海珠区"}]},{value:"dongguan",label:"东莞市",children:[{value:"changan",label:"长安镇"},{value:"humen",label:"虎门镇"}]}]},{value:"hunan",label:"湖南省",children:[{value:"changsha",label:"长沙市",children:[{value:"yuelu",label:"岳麓区"}]}]}],form:{name:"",region:"",date1:"",date2:"",delivery:!0,type:["步步高"],resource:"小天才",desc:"",options:[]}}},methods:{onSubmit:function(){this.$message.success("提交成功！")}}},s=r,i=a("2877"),n=Object(i["a"])(s,t,o,!1,null,null,null);l["default"]=n.exports}}]);