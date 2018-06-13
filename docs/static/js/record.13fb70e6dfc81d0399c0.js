webpackJsonp([2],{"88zO":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("Dd8w"),i=r.n(n),s=r("NYxO"),a=r("CESU"),o=r("oqQY"),c={name:"recorder",props:["theme"],data:function(){return{title:this.theme.title,editable:!1}},computed:{color:function(){return this.theme.data.basic.color}},methods:{dayjs:r.n(o).a,changeTitle:function(e){e?""!==this.title?this.editable=!1:this.$message.error("请输入主题标题"):(this.title=this.theme.title,this.editable=!1)},onClick:function(e){this.editable||this.$emit("select",e)}}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"palette-recorder",on:{click:function(t){e.onClick(e.theme.index)}}},[r("div",{staticClass:"palette-recorder-top"},[e.editable?r("div",[r("el-input",{attrs:{placeholder:e.$t("recorder.placeholder")},nativeOn:{click:function(e){e.stopPropagation()}},model:{value:e.title,callback:function(t){e.title="string"==typeof t?t.trim():t},expression:"title"}}),e._v(" "),r("el-button",{attrs:{size:"small"},nativeOn:{click:function(t){t.stopPropagation(),e.changeTitle(!1)}}},[e._v(e._s(e.$t("recorder.cancel")))]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"small"},nativeOn:{click:function(t){t.stopPropagation(),e.changeTitle(!0)}}},[e._v(e._s(e.$t("recorder.confirm")))])],1):r("p",{staticClass:"title",domProps:{textContent:e._s(e.theme.title)}})]),e._v(" "),r("div",{staticClass:"palette-recorder-detail"},[r("ul",{staticClass:"color-list clearfix"},[r("li",{staticClass:"color-item",style:{background:e.color["color-primary"]}}),e._v(" "),r("li",{staticClass:"color-item",style:{background:e.color["color-primary-tap"]}}),e._v(" "),r("li",{staticClass:"color-item",style:{background:e.color["color-primary-background"]}})]),e._v(" "),r("p",{staticClass:"text"},[e._v(e._s(e.$t("recorder.modify")+" "+e.dayjs(e.theme.lastModify).format("YYYY/MM/DD HH:mm")))])]),e._v(" "),r("div",{staticClass:"palette-recorder-operate"},[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.$t("recorder.edit"),placement:"top"}},[r("i",{staticClass:"el-icon-edit",on:{click:function(t){t.stopPropagation(),e.$emit("edit",e.theme.index)}}})]),e._v(" "),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.$t("recorder.download"),placement:"top"}},[r("i",{staticClass:"el-icon-download",on:{click:function(t){t.stopPropagation(),e.$emit("download",e.theme.index)}}})]),e._v(" "),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.$t("recorder.delete"),placement:"top"}},[r("i",{staticClass:"el-icon-delete",on:{click:function(t){t.stopPropagation(),e.$emit("delete",e.theme.index)}}})])],1)])},staticRenderFns:[]};var u=r("VU/8")(c,l,!1,function(e){r("jZ/n")},null,null).exports,h=r("olLJ"),d={components:{PaletteSearcher:a.a,PaletteRecorder:u,PaletteStatus:h.a},data:function(){return{searchThemes:[],themeFormVisible:!1,themeForm:{}}},computed:i()({},Object(s.d)(["themes","mandMobileInfo"]),{themeList:function(){return this.searchThemes.length?this.searchThemes:this.themes}}),mounted:function(){var e=this;this.getMandMobileInfo().catch(function(t){t.message&&e.$message(t.message)})},methods:i()({},Object(s.c)(["createTheme","deleteTheme","updateThemeInfo"]),Object(s.b)({getMandMobileInfo:"GET_MAND_MOBILE_RELEASE",saveThemeStore:"SAVE_THEMES_STORE"}),{onDelete:function(e){var t=this;this.$confirm(this.$t("record.messageDescribe"),this.$t("record.messageTitle"),{confirmButtonText:this.$t("record.messageConfirm"),cancelButtonText:this.$t("record.messageCancel"),type:"warning"}).then(function(){t.deleteTheme(e),t.saveThemeStore()}).catch(function(){})},onSelect:function(e){this.$router.push({path:"/list",query:{themeIndex:e}})},onDownload:function(e){this.$router.push({path:"/generate",query:{themeIndex:e}})},onSearchTheme:function(e){this.searchThemes=e?this.themes.filter(function(t){return!!~t.title.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())}):this.themes},showThemeDialog:function(e){this.$refs.themeForm&&this.$refs.themeForm.resetFields();var t="";this.themes&&e>=0&&(t=this.themes[e]),this.themeForm=t?{title:t.title,version:t.version,themeIndex:e}:{title:"",version:this.mandMobileInfo,themeIndex:-1},this.themeFormVisible=!0},doSaveTheme:function(){var e=this;this.$refs.themeForm.validate(function(t){t&&(e.themeFormVisible=!1,e.themeForm.themeIndex<0?e.createTheme(e.themeForm):e.updateThemeInfo(e.themeForm),e.saveThemeStore())})}})},m={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"palette-record"},[r("div",{staticClass:"palette-record-top clearfix"},[r("palette-searcher",{attrs:{placeholder:e.$t("record.searchTip")},on:{search:e.onSearchTheme}}),e._v(" "),r("el-button",{attrs:{type:"primary",round:"",icon:"el-icon-circle-plus"},on:{click:function(t){e.showThemeDialog(-1)}}},[e._v("\n      "+e._s(e.$t("record.createBtn"))+"\n    ")])],1),e._v(" "),r("div",{staticClass:"palette-record-list clearfix"},[e.themeList&&e.themeList.length?[r("transition-group",{attrs:{name:"list-complete",tag:"div"}},e._l(e.themeList,function(t,n){return r("palette-recorder",{key:"record-"+n,attrs:{theme:t},on:{delete:e.onDelete,select:e.onSelect,edit:e.showThemeDialog,download:e.onDownload}})}))]:[r("palette-status",{attrs:{imgUrl:"//manhattan.didistatic.com/static/manhattan/mfd/result-page/empty",describe:e.$t("record.errorTip")}})]],2),e._v(" "),r("el-dialog",{attrs:{width:"500px",title:e.$t("record.dialogTitle"),visible:e.themeFormVisible},on:{"update:visible":function(t){e.themeFormVisible=t}}},[r("el-form",{ref:"themeForm",attrs:{model:e.themeForm,"label-width":"120px","label-position":"left"}},[r("el-form-item",{attrs:{prop:"title",label:e.$t("record.dialogThemeName"),rules:[{required:!0,message:e.$t("recorder.placeholder"),trigger:"blur"}]}},[r("el-input",{attrs:{placeholder:e.$t("recorder.placeholder"),"auto-complete":"off",maxlength:"20"},model:{value:e.themeForm.title,callback:function(t){e.$set(e.themeForm,"title",t)},expression:"themeForm.title"}})],1),e._v(" "),r("el-form-item",{attrs:{prop:"version",label:e.$t("record.dialogThemeVersion"),rules:[{required:!0,message:e.$t("record.dialogThemeVersionTip"),trigger:"blur"}]}},[r("el-select",{attrs:{placeholder:e.$t("record.dialogThemeVersionTip"),disabled:""},model:{value:e.themeForm.version,callback:function(t){e.$set(e.themeForm,"version",t)},expression:"themeForm.version"}},[r("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),r("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.themeFormVisible=!1}}},[e._v(e._s(e.$t("record.messageCancel")))]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.doSaveTheme}},[e._v(e._s(e.$t("record.messageConfirm")))])],1)],1)],1)},staticRenderFns:[]};var f=r("VU/8")(d,m,!1,function(e){r("Cyhk")},null,null);t.default=f.exports},CESU:function(e,t,r){"use strict";var n={name:"palette-searcher",props:{placeholder:{type:String,default:""}},data:function(){return{value:""}},watch:{value:function(e){this.$emit("search",e)}}},i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"palette-searcher"},[r("i",{staticClass:"el-icon-search"}),e._v(" "),r("el-input",{staticClass:"palette-searcher-input",attrs:{placeholder:e.placeholder,"auto-complete":"off"},model:{value:e.value,callback:function(t){e.value="string"==typeof t?t.trim():t},expression:"value"}})],1)},staticRenderFns:[]};var s=r("VU/8")(n,i,!1,function(e){r("zn5i")},null,null);t.a=s.exports},Cyhk:function(e,t){},"jZ/n":function(e,t){},oqQY:function(e,t,r){var n;n=function(){"use strict";var e="second",t="minute",r="hour",n="day",i="week",s="month",a="year",o=/^(\d{4})-?(\d{1,2})-?(\d{0,2})(.*?(\d{1,2}):(\d{1,2}):(\d{1,2}))?.?(\d{1,3})?$/,c=/\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},u=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},h={padStart:u,padZoneStr:function(e){var t=Math.abs(e),r=Math.floor(t/60),n=t%60;return(e<=0?"+":"-")+u(r,2,"0")+":"+u(n,2,"0")},monthDiff:function(e,t){var r=12*(t.year()-e.year())+(t.month()-e.month()),n=e.clone().add(r,"months"),i=t-n<0,s=e.clone().add(r+(i?-1:1),"months");return Number(-(r+(t-n)/(i?n-s:s-n)))},absFloor:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},prettyUnit:function(e){return e&&String(e).toLowerCase().replace(/s$/,"")},isUndefined:function(e){return void 0===e}},d="en",m={};m[d]=l;var f=function(e){return e instanceof b},p=function(e,t,r){var n;if(!e)return null;if("string"==typeof e)m[e]&&(n=e),t&&(m[e]=t,n=e);else{var i=e.name;m[i]=e,n=i}return r||(d=n),n},$=function(e,t){if(f(e))return e.clone();var r=t||{};return r.date=e,new b(r)},v=function(e,t){return $(e,{locale:t.$L})},g=h;g.parseLocale=p,g.isDayjs=f,g.wrapper=v;var b=function(){function l(e){this.parse(e)}var u=l.prototype;return u.parse=function(e){var t,r;this.$d=null===(t=e.date)?new Date(NaN):g.isUndefined(t)?new Date:t instanceof Date?t:"string"==typeof t&&(r=t.match(o))?new Date(r[1],r[2]-1,r[3]||1,r[5]||0,r[6]||0,r[7]||0,r[8]||0):new Date(t),this.init(e)},u.init=function(e){this.$y=this.$d.getFullYear(),this.$M=this.$d.getMonth(),this.$D=this.$d.getDate(),this.$W=this.$d.getDay(),this.$H=this.$d.getHours(),this.$m=this.$d.getMinutes(),this.$s=this.$d.getSeconds(),this.$ms=this.$d.getMilliseconds(),this.$L=this.$L||p(e.locale,null,!0)||d},u.$utils=function(){return g},u.isValid=function(){return!("Invalid Date"===this.$d.toString())},u.isLeapYear=function(){return this.$y%4==0&&this.$y%100!=0||this.$y%400==0},u.isSame=function(e){return this.valueOf()===e.valueOf()},u.isBefore=function(e){return this.valueOf()<e.valueOf()},u.isAfter=function(e){return this.valueOf()>e.valueOf()},u.year=function(){return this.$y},u.month=function(){return this.$M},u.day=function(){return this.$W},u.date=function(){return this.$D},u.hour=function(){return this.$H},u.minute=function(){return this.$m},u.second=function(){return this.$s},u.millisecond=function(){return this.$ms},u.unix=function(){return Math.floor(this.valueOf()/1e3)},u.valueOf=function(){return this.$d.getTime()},u.startOf=function(o,c){var l=this,u=!!g.isUndefined(c)||c,h=function(e,t,r){void 0===r&&(r=l.$y);var i=v(new Date(r,t,e),l);return u?i:i.endOf(n)},d=function(e,t){return v(l.toDate()[e].apply(l.toDate(),u?[0,0,0,0].slice(t):[23,59,59,999].slice(t)),l)};switch(g.prettyUnit(o)){case a:return u?h(1,0):h(31,11,this.$y);case s:return u?h(1,this.$M):h(0,this.$M+1,this.$y);case i:return u?h(this.$D-this.$W,this.$M):h(this.$D+(6-this.$W),this.$M,this.$y);case n:case"date":return d("setHours",0);case r:return d("setMinutes",1);case t:return d("setSeconds",2);case e:return d("setMilliseconds",3);default:return this.clone()}},u.endOf=function(e){return this.startOf(e,!1)},u.$set=function(n,i){switch(g.prettyUnit(n)){case"date":this.$d.setDate(i);break;case s:this.$d.setMonth(i);break;case a:this.$d.setFullYear(i);break;case r:this.$d.setHours(i);break;case t:this.$d.setMinutes(i);break;case e:this.$d.setSeconds(i);break;case"millisecond":this.$d.setMilliseconds(i)}return this.init(),this},u.set=function(e,t){return this.clone().$set(e,t)},u.add=function(o,c){var l=this;o=Number(o);var u,h=!c||1!==c.length&&"ms"!==c?g.prettyUnit(c):c,d=function(e,t){var r=l.set("date",1).set(e,t+o);return r.set("date",Math.min(l.$D,r.daysInMonth()))};if(["M",s].indexOf(h)>-1)return d(s,this.$M);if(["y",a].indexOf(h)>-1)return d(a,this.$y);switch(h){case"m":case t:u=6e4;break;case"h":case r:u=36e5;break;case"d":case n:u=864e5;break;case"w":case i:u=6048e5;break;case"s":case e:u=1e3;break;default:u=1}var m=this.valueOf()+o*u;return v(m,this)},u.subtract=function(e,t){return this.add(-1*e,t)},u.format=function(e,t){var r=this,n=e||"YYYY-MM-DDTHH:mm:ssZ",i=g.padZoneStr(this.$d.getTimezoneOffset()),s=t||this.$locale(),a=s.weekdays,o=s.months;return n.replace(c,function(e){if(e.indexOf("[")>-1)return e.replace(/\[|\]/g,"");switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return String(r.$y);case"M":return String(r.$M+1);case"MM":return g.padStart(r.$M+1,2,"0");case"MMM":return o[r.$M].slice(0,3);case"MMMM":return o[r.$M];case"D":return String(r.$D);case"DD":return g.padStart(r.$D,2,"0");case"d":return String(r.$W);case"dddd":return a[r.$W];case"H":return String(r.$H);case"HH":return g.padStart(r.$H,2,"0");case"h":case"hh":return 0===r.$H?12:g.padStart(r.$H<13?r.$H:r.$H-12,"hh"===e?2:1,"0");case"a":return r.$H<12?"am":"pm";case"A":return r.$H<12?"AM":"PM";case"m":return String(r.$m);case"mm":return g.padStart(r.$m,2,"0");case"s":return String(r.$s);case"ss":return g.padStart(r.$s,2,"0");case"SSS":return g.padStart(r.$ms,3,"0");case"Z":return i;default:return i.replace(":","")}})},u.diff=function(o,c,l){var u=g.prettyUnit(c),h=f(o)?o:$(o.valueOf()),d=this-h,m=g.monthDiff(this,h);switch(u){case a:m/=12;break;case s:break;case"quarter":m/=3;break;case i:m=d/6048e5;break;case n:m=d/864e5;break;case r:m=d/36e5;break;case t:m=d/6e4;break;case e:m=d/1e3;break;default:m=d}return l?m:g.absFloor(m)},u.daysInMonth=function(){return this.endOf(s).$D},u.$locale=function(){return m[this.$L]},u.locale=function(e,t){var r=this.clone();return r.$L=p(e,t,!0),r},u.clone=function(){return v(this.toDate(),this)},u.toDate=function(){return new Date(this.$d)},u.toArray=function(){return[this.$y,this.$M,this.$D,this.$H,this.$m,this.$s,this.$ms]},u.toJSON=function(){return this.toISOString()},u.toISOString=function(){return this.toDate().toISOString()},u.toObject=function(){return{years:this.$y,months:this.$M,date:this.$D,hours:this.$H,minutes:this.$m,seconds:this.$s,milliseconds:this.$ms}},u.toString=function(){return this.$d.toUTCString()},l}();return $.extend=function(e,t){return e(t,b,$),$},$.locale=p,$.en=m[d],$},e.exports=n()},zn5i:function(e,t){}});
//# sourceMappingURL=record.13fb70e6dfc81d0399c0.js.map