System.register([],(function(r,t){"use strict";return{execute:function(){r({_:function(r,t,e){if(e||2===arguments.length)for(var n,o=0,l=t.length;o<l;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return r.concat(n||Array.prototype.slice.call(t))},a:function(r,t){var e="function"==typeof Symbol&&r[Symbol.iterator];if(!e)return r;var n,o,l=e.call(r),a=[];try{for(;(void 0===t||t-- >0)&&!(n=l.next()).done;)a.push(n.value)}catch(c){o={error:c}}finally{try{n&&!n.done&&(e=l.return)&&e.call(l)}finally{if(o)throw o.error}}return a},c:function(r,t,e,n){return new(e||(e=Promise))((function(o,l){function a(r){try{i(n.next(r))}catch(t){l(t)}}function c(r){try{i(n.throw(r))}catch(t){l(t)}}function i(r){var t;r.done?o(r.value):(t=r.value,t instanceof e?t:new e((function(r){r(t)}))).then(a,c)}i((n=n.apply(r,t||[])).next())}))},d:function(r,t){var e,n,o,l,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return l={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function c(c){return function(i){return function(c){if(e)throw new TypeError("Generator is already executing.");for(;l&&(l=0,c[0]&&(a=0)),a;)try{if(e=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,n=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(r,a)}catch(i){c=[6,i],n=0}finally{e=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}},e:function(r,t){var e={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.indexOf(n)<0&&(e[n]=r[n]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(r);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(r,n[o])&&(e[n[o]]=r[n[o]])}return e}});var t=r("b",(function(){return r("b",t=Object.assign||function(r){for(var t,e=1,n=arguments.length;e<n;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o]);return r}),t.apply(this,arguments)}));"function"==typeof SuppressedError&&SuppressedError}}}));