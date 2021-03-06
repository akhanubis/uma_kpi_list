(self.webpackChunkuma_kpi_list=self.webpackChunkuma_kpi_list||[]).push([[678],{7757:function(t,e,r){t.exports=r(5666)},2104:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,o)}r.r(e),r.d(e,{default:function(){return c}});r(5827);var o=r(7757),i=r.n(o),a=r(7294),u={users:"voting with UMA or being a sponsor",holders:"holding at least 10 UMA",gov_voters:"voting in Yearn, Yam, Sushi, BadgerDAO, or Balancer"};function c(){var t=(0,a.useState)(!0),e=t[0],r=t[1],o=(0,a.useState)({}),c=o[0],s=o[1],l=(0,a.useState)(""),h=l[0],f=l[1],p=(0,a.useState)(""),v=p[0],y=p[1],d=(0,a.useState)({}),m=d[0],g=d[1];(0,a.useEffect)((function(t){(function(){var t,e=(t=i().mark((function t(e){var n,o,a,u;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([fetch("https://raw.githubusercontent.com/UMAprotocol/token-distribution/master/outputs/uma_user_recipients.json").then((function(t){return t.json()})),fetch("https://raw.githubusercontent.com/UMAprotocol/token-distribution/master/outputs/uma_holder_recipients.json").then((function(t){return t.json()})),fetch("https://raw.githubusercontent.com/UMAprotocol/token-distribution/master/outputs/governance_recipients.json").then((function(t){return t.json()}))]);case 2:n=t.sent,o=n[0],a=n[1],u=n[2],s({users:o,holders:a,gov_voters:u}),r(!1);case 8:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))});return function(t){return e.apply(this,arguments)}})()()}),[]);return e?"LOADING...":a.createElement("div",null,a.createElement("h1",null,"KPI Airdrop Eligibility"),a.createElement("input",{type:"text",onChange:function(t){f((t.target.value||"").toLowerCase().trim())},placeholder:"Enter your address",style:{width:"320px"}}),a.createElement("input",{type:"button",onClick:function(t){var e={};for(var r in c)e[r]=c[r][h]||0;y(h),g(e)},value:"Check KPI eligibility"}),a.createElement("br",null),a.createElement("br",null),function(t){if(v)return a.createElement("div",null,a.createElement("div",null,Object.values(m).reduce((function(t,e){return t+e}),0)," KPI for address ",v),a.createElement("hr",null),Object.entries(m).map((function(t){var e=t[0],r=t[1];return a.createElement("div",{key:e},r," KPI for ",u[e])})))}())}},5666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(G){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new P(n||[]);return i._invoke=function(t,e,r){var n=h;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return A()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=k(a,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?v:f,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=v,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(G){return{type:"throw",arg:G}}}t.wrap=s;var h="suspendedStart",f="suspendedYield",p="executing",v="completed",y={};function d(){}function m(){}function g(){}var w={};w[i]=function(){return this};var b=Object.getPrototypeOf,E=b&&b(b(S([])));E&&E!==r&&n.call(E,i)&&(w=E);var x=g.prototype=d.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,i,a,u){var c=l(t[o],t,i);if("throw"!==c.type){var s=c.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function S(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:A}}function A(){return{value:e,done:!0}}return m.prototype=x.constructor=g,g.constructor=m,m.displayName=c(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(x),c(x,u,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(r){Function("r","regeneratorRuntime = r")(e)}}}]);
//# sourceMappingURL=component---src-pages-index-js-4953a2964f36ed01b1f2.js.map