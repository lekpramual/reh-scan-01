(window.webpackJsonp=window.webpackJsonp||[]).push([["6319"],{"2GS6":function(e,n,t){"use strict";function a(){var e=[].slice.call(arguments,0);return 1===e.length?e[0]:function(){for(var n=0;n<e.length;n++)e[n]&&e[n].apply&&e[n].apply(this,arguments)}}t.d(n,"a",function(){return a})},"8tx+":function(e,n,t){"use strict";t.r(n);var a=t("jo6Y"),o=t.n(a),r=t("YEIV"),i=t.n(r),c=t("QbLZ"),l=t.n(c),s=t("iCc5"),u=t.n(s),f=t("V7oC"),m=t.n(f),p=t("FYw3"),d=t.n(p),y=t("mRg0"),v=t.n(y),h=t("q1tI"),C=t.n(h),g=t("17x9"),E=t.n(g),T=t("i8i4"),b=t.n(T),k=t("MFj2"),N=t("2GS6"),w=t("TSYQ"),x=t.n(w),O=function(e){function n(){var e,t,a,o;u()(this,n);for(var r=arguments.length,i=Array(r),c=0;c<r;c++)i[c]=arguments[c];return t=a=d()(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),a.close=function(e){e&&e.stopPropagation(),a.clearCloseTimer(),a.props.onClose()},a.startCloseTimer=function(){a.props.duration&&(a.closeTimer=setTimeout(function(){a.close()},1e3*a.props.duration))},a.clearCloseTimer=function(){a.closeTimer&&(clearTimeout(a.closeTimer),a.closeTimer=null)},o=t,d()(a,o)}return v()(n,e),m()(n,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentDidUpdate",value:function(e){(this.props.duration!==e.duration||this.props.update)&&this.restartCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"restartCloseTimer",value:function(){this.clearCloseTimer(),this.startCloseTimer()}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls+"-notice",a=(e={},i()(e,""+t,1),i()(e,t+"-closable",n.closable),i()(e,n.className,!!n.className),e);return C.a.createElement("div",{className:x()(a),style:n.style,onMouseEnter:this.clearCloseTimer,onMouseLeave:this.startCloseTimer,onClick:n.onClick},C.a.createElement("div",{className:t+"-content"},n.children),n.closable?C.a.createElement("a",{tabIndex:"0",onClick:this.close,className:t+"-close"},n.closeIcon||C.a.createElement("span",{className:t+"-close-x"})):null)}}]),n}(h.Component);O.propTypes={duration:E.a.number,onClose:E.a.func,children:E.a.any,update:E.a.bool,closeIcon:E.a.node},O.defaultProps={onEnd:function(){},onClose:function(){},duration:1.5,style:{right:"50%"}};var _=O,j=0,P=Date.now();var I=function(e){function n(){var e,t,a,o;u()(this,n);for(var r=arguments.length,i=Array(r),c=0;c<r;c++)i[c]=arguments[c];return t=a=d()(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),a.state={notices:[]},a.add=function(e){var n=e.key=e.key||"rcNotification_"+P+"_"+j++,t=a.props.maxCount;a.setState(function(a){var o=a.notices,r=o.map(function(e){return e.key}).indexOf(n),i=o.concat();return-1!==r?i.splice(r,1,e):(t&&o.length>=t&&(e.updateKey=i[0].updateKey||i[0].key,i.shift()),i.push(e)),{notices:i}})},a.remove=function(e){a.setState(function(n){return{notices:n.notices.filter(function(n){return n.key!==e})}})},o=t,d()(a,o)}return v()(n,e),m()(n,[{key:"getTransitionName",value:function(){var e=this.props,n=e.transitionName;return!n&&e.animation&&(n=e.prefixCls+"-"+e.animation),n}},{key:"render",value:function(){var e,n=this,t=this.props,a=this.state.notices,o=a.map(function(e,o){var r=Boolean(o===a.length-1&&e.updateKey),i=e.updateKey?e.updateKey:e.key,c=Object(N.a)(n.remove.bind(n,e.key),e.onClose);return C.a.createElement(_,l()({prefixCls:t.prefixCls},e,{key:i,update:r,onClose:c,onClick:e.onClick,closeIcon:t.closeIcon}),e.content)}),r=(e={},i()(e,t.prefixCls,1),i()(e,t.className,!!t.className),e);return C.a.createElement("div",{className:x()(r),style:t.style},C.a.createElement(k.default,{transitionName:this.getTransitionName()},o))}}]),n}(h.Component);I.propTypes={prefixCls:E.a.string,transitionName:E.a.string,animation:E.a.oneOfType([E.a.string,E.a.object]),style:E.a.object,maxCount:E.a.number,closeIcon:E.a.node},I.defaultProps={prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}},I.newInstance=function(e,n){var t=e||{},a=t.getContainer,r=o()(t,["getContainer"]),i=document.createElement("div");a?a().appendChild(i):document.body.appendChild(i);var c=!1;b.a.render(C.a.createElement(I,l()({},r,{ref:function(e){c||(c=!0,n({notice:function(n){e.add(n)},removeNotice:function(n){e.remove(n)},component:e,destroy:function(){b.a.unmountComponentAtNode(i),i.parentNode.removeChild(i)}}))}})),i)};var D=I;n.default=D},DHZp:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),o=t.n(a),r=t("pbKT"),i=t.n(r),c=t("N9UN"),l=t.n(c),s=t("UIqZ"),u=t.n(s),f=t("0iUn"),m=t("sLSF"),p=t("Tit0"),d=t("MI3g"),y=t("a7VT"),v=t("4IMT"),h=t.n(v),C=t("QpBz"),g=t.n(C),E=function(){g.a.success("This is a prompt message for success, and it will disappear in 10 seconds",10)},T=function(){return o.a.createElement(h.a,{onClick:E},"Customized display duration")},b=function(){g.a.info("This is a normal message")},k=function(){return o.a.createElement(h.a,{onClick:b},"Display normal message")},N=function(){var e=g.a.loading("Action in progress..",0);setTimeout(e,2500)},w=function(){return o.a.createElement(h.a,{onClick:N},"Display a loading indicator")},x=function(){g.a.success("This is a message of success")},O=function(){g.a.error("This is a message of error")},_=function(){g.a.warning("This is message of warning")},j=function(){return o.a.createElement("div",null,o.a.createElement(h.a,{onClick:x},"Success"),o.a.createElement(h.a,{onClick:O},"Error"),o.a.createElement(h.a,{onClick:_},"Warning"))},P=function(){g.a.loading("Action in progress..",2.5).then(function(){return g.a.success("Loading finished",2.5)}).then(function(){return g.a.info("Loading finished is finished",2.5)})},I=function(){return o.a.createElement(h.a,{onClick:P},"Display a sequence of message")};function D(e){var n=function(){if("undefined"==typeof Reflect||!i.a)return!1;if(i.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(i()(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var t,a=Object(y.default)(e);if(n){var o=Object(y.default)(this).constructor;t=i()(a,arguments,o)}else t=a.apply(this,arguments);return Object(d.default)(this,t)}}var M=function(e){Object(p.default)(t,e);var n=D(t);function t(){return Object(f.default)(this,t),n.apply(this,arguments)}return Object(m.default)(t,[{key:"render",value:function(){return o.a.createElement(l.a,{bodyStyle:{padding:0},id:"components-button-demo"},o.a.createElement(u.a,{orientation:"left"},o.a.createElement("small",null,"Normal prompt")),o.a.createElement("div",{className:"p-4"},o.a.createElement(k,null)),o.a.createElement(u.a,{orientation:"left"},o.a.createElement("small",null,"Customized duration")),o.a.createElement("div",{className:"p-4"},o.a.createElement(T,null)),o.a.createElement(u.a,{orientation:"left"},o.a.createElement("small",null,"Promise interface")),o.a.createElement("div",{className:"p-4"},o.a.createElement(I,null)),o.a.createElement(u.a,{orientation:"left"},o.a.createElement("small",null,"Other types of messages")),o.a.createElement("div",{className:"p-4"},o.a.createElement(j,null)),o.a.createElement(u.a,{orientation:"left"},o.a.createElement("small",null,"Loading message")),o.a.createElement("div",{className:"p-4"},o.a.createElement(w,null)))}}]),t}(o.a.Component);n.default=function(){return o.a.createElement(M,null)}},HPjZ:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/feedback/message",function(){var e=t("DHZp");return{page:e.default||e}}])},QpBz:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};a.get||a.set?Object.defineProperty(n,t,a):n[t]=e[t]}return n.default=e,n}(t("q1tI")),o=i(t("8tx+")),r=i(t("Pbn2"));function i(e){return e&&e.__esModule?e:{default:e}}var c,l,s,u,f=3,m=1,p="ant-message",d="move-up";var y={open:function(e){var n=void 0!==e.duration?e.duration:f,t={info:"info-circle",success:"check-circle",error:"close-circle",warning:"exclamation-circle",loading:"loading"}[e.type],i=m++,y=new Promise(function(f){var m=function(){return"function"==typeof e.onClose&&e.onClose(),f(!0)};!function(e){l?e(l):o.default.newInstance({prefixCls:p,transitionName:d,style:{top:c},getContainer:s,maxCount:u},function(n){l?e(l):(l=n,e(n))})}(function(o){var c=a.createElement(r.default,{type:t,theme:"loading"===t?"outlined":"filled"});o.notice({key:i,duration:n,style:{},content:a.createElement("div",{className:"".concat(p,"-custom-content").concat(e.type?" ".concat(p,"-").concat(e.type):"")},e.icon?e.icon:t?c:"",a.createElement("span",null,e.content)),onClose:m})})}),v=function(){l&&l.removeNotice(i)};return v.then=function(e,n){return y.then(e,n)},v.promise=y,v},config:function(e){void 0!==e.top&&(c=e.top,l=null),void 0!==e.duration&&(f=e.duration),void 0!==e.prefixCls&&(p=e.prefixCls),void 0!==e.getContainer&&(s=e.getContainer),void 0!==e.transitionName&&(d=e.transitionName,l=null),void 0!==e.maxCount&&(u=e.maxCount,l=null)},destroy:function(){l&&(l.destroy(),l=null)}};["success","info","warning","error","loading"].forEach(function(e){y[e]=function(n,t,a){return"function"==typeof t&&(a=t,t=void 0),y.open({content:n,duration:t,type:e,onClose:a})}}),y.warn=y.warning;var v=y;n.default=v,e.exports=n.default}},[["HPjZ","5d41","9da1"]]]);