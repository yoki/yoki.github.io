(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Terms"],{"40dc":function(t,e,r){"use strict";r("a9e3"),r("b680"),r("c7cd");var i=r("5530"),o=(r("8b0d"),r("71d9"));function l(t,e){var r=e.value,i=e.options||{passive:!0},o=e.arg?document.querySelector(e.arg):window;o&&(o.addEventListener("scroll",r,i),t._onScroll={callback:r,options:i,target:o})}function n(t){if(t._onScroll){var e=t._onScroll,r=e.callback,i=e.options,o=e.target;o.removeEventListener("scroll",r,i),delete t._onScroll}}var s={inserted:l,unbind:n},c=s,a=r("3a66"),h=r("d9bd"),d=r("2b0e"),u=d["a"].extend({name:"scrollable",directives:{Scroll:s},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!==typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(h["c"])("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),p=r("d10f"),f=r("f2e7"),m=r("80d2"),S=r("58df"),v=Object(S["a"])(o["a"],u,p["a"],f["a"],Object(a["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));e["a"]=v.extend({name:"v-app-bar",directives:{Scroll:c},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return u.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return Object(i["a"])({},o["a"].options.computed.classes.call(this),{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},computedContentHeight:function(){if(!this.shrinkOnScroll)return o["a"].options.computed.computedContentHeight.call(this);var t=this.computedOriginalHeight,e=this.dense?48:56,r=t,i=r-e,l=i/this.computedScrollThreshold,n=this.currentScroll*l;return Math.max(e,r-n)},computedFontSize:function(){if(this.isProminent){var t=this.dense?96:128,e=t-this.computedContentHeight,r=.00347;return Number((1.5-e*r).toFixed(2))}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll){var t=Math.max((this.computedScrollThreshold-this.currentScroll)/this.computedScrollThreshold,0);return Number(parseFloat(t).toFixed(2))}},computedOriginalHeight:function(){var t=o["a"].options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:o["a"].options.computed.isCollapsed.call(this)},isProminent:function(){return o["a"].options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return Object(i["a"])({},o["a"].options.computed.styles.call(this),{fontSize:Object(m["d"])(this.computedFontSize,"rem"),marginTop:Object(m["d"])(this.computedMarginTop),transform:"translateY(".concat(Object(m["d"])(this.computedTransform),")"),left:Object(m["d"])(this.computedLeft),right:Object(m["d"])(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=o["a"].options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:this.currentThreshold<this.computedScrollThreshold||(this.hideOnScroll&&(this.isActive=this.isScrollingUp),this.savedScroll=this.currentScroll)}},render:function(t){var e=o["a"].options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},"8b0d":function(t,e,r){},a523:function(t,e,r){"use strict";r("99af"),r("4de4"),r("b64b"),r("2ca0"),r("20f6"),r("4b85"),r("a15b"),r("498a");var i=r("2b0e");function o(t){return i["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,r){var i=r.props,o=r.data,l=r.children;o.staticClass="".concat(t," ").concat(o.staticClass||"").trim();var n=o.attrs;if(n){o.attrs={};var s=Object.keys(n).filter((function(t){if("slot"===t)return!1;var e=n[t];return t.startsWith("data-")?(o.attrs[t]=e,!1):e||"string"===typeof e}));s.length&&(o.staticClass+=" ".concat(s.join(" ")))}return i.id&&(o.domProps=o.domProps||{},o.domProps.id=i.id),e(i.tag,o,l)}})}var l=r("d9f7");e["a"]=o("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,i=e.props,o=e.data,n=e.children,s=o.attrs;return s&&(o.attrs={},r=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(o.attrs[t]=e,!1):e||"string"===typeof e}))),i.id&&(o.domProps=o.domProps||{},o.domProps.id=i.id),t(i.tag,Object(l["a"])(o,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(r||[])}),n)}})},bd91:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"Terms"}},[r("v-app-bar",{staticStyle:{"z-index":"1"},attrs:{app:"",color:"primary",dark:"",id:"fakeappbar"}},[t._v(" This is from Terms ")]),r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{staticClass:"mb-4"},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Terms")]),r("p",{staticClass:"subheading font-weight-regular"},[t._v(" 情報は研究のためおよびAyameをよりよくするため及びその他の目的のために利用されます。 ")])])],1)],1)],1)},o=[],l=r("2877"),n=r("6544"),s=r.n(n),c=r("40dc"),a=r("62ad"),h=r("a523"),d=r("0fd9"),u={},p=Object(l["a"])(u,i,o,!1,null,null,null);e["default"]=p.exports;s()(p,{VAppBar:c["a"],VCol:a["a"],VContainer:h["a"],VRow:d["a"]})}}]);
//# sourceMappingURL=Terms.548714b7.js.map