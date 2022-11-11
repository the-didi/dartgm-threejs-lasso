(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();function Oa(i,t){const e=Object.create(null),n=i.split(",");for(let s=0;s<n.length;s++)e[n[s]]=!0;return t?s=>!!e[s.toLowerCase()]:s=>!!e[s]}function za(i){if(Ot(i)){const t={};for(let e=0;e<i.length;e++){const n=i[e],s=fe(n)?Jf(n):za(n);if(s)for(const r in s)t[r]=s[r]}return t}else{if(fe(i))return i;if(ne(i))return i}}const Yf=/;(?![^(]*\))/g,Zf=/:([^]+)/,Kf=/\/\*.*?\*\//gs;function Jf(i){const t={};return i.replace(Kf,"").split(Yf).forEach(e=>{if(e){const n=e.split(Zf);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Ua(i){let t="";if(fe(i))t=i;else if(Ot(i))for(let e=0;e<i.length;e++){const n=Ua(i[e]);n&&(t+=n+" ")}else if(ne(i))for(const e in i)i[e]&&(t+=e+" ");return t.trim()}const Qf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",th=Oa(Qf);function Au(i){return!!i||i===""}const Zt={},Ps=[],Ke=()=>{},eh=()=>!1,nh=/^on[^a-z]/,Zr=i=>nh.test(i),Ba=i=>i.startsWith("onUpdate:"),ge=Object.assign,Va=(i,t)=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)},ih=Object.prototype.hasOwnProperty,kt=(i,t)=>ih.call(i,t),Ot=Array.isArray,Ds=i=>Kr(i)==="[object Map]",sh=i=>Kr(i)==="[object Set]",Bt=i=>typeof i=="function",fe=i=>typeof i=="string",ka=i=>typeof i=="symbol",ne=i=>i!==null&&typeof i=="object",Eu=i=>ne(i)&&Bt(i.then)&&Bt(i.catch),rh=Object.prototype.toString,Kr=i=>rh.call(i),oh=i=>Kr(i).slice(8,-1),ah=i=>Kr(i)==="[object Object]",Ha=i=>fe(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Ir=Oa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jr=i=>{const t=Object.create(null);return e=>t[e]||(t[e]=i(e))},lh=/-(\w)/g,ss=Jr(i=>i.replace(lh,(t,e)=>e?e.toUpperCase():"")),ch=/\B([A-Z])/g,us=Jr(i=>i.replace(ch,"-$1").toLowerCase()),Tu=Jr(i=>i.charAt(0).toUpperCase()+i.slice(1)),po=Jr(i=>i?`on${Tu(i)}`:""),kr=(i,t)=>!Object.is(i,t),mo=(i,t)=>{for(let e=0;e<i.length;e++)i[e](t)},Hr=(i,t,e)=>{Object.defineProperty(i,t,{configurable:!0,enumerable:!1,value:e})},Cu=i=>{const t=parseFloat(i);return isNaN(t)?i:t};let gl;const uh=()=>gl||(gl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let sn;class fh{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=sn,!t&&sn&&(this.index=(sn.scopes||(sn.scopes=[])).push(this)-1)}run(t){if(this.active){const e=sn;try{return sn=this,t()}finally{sn=e}}}on(){sn=this}off(){sn=this.parent}stop(t){if(this.active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this.active=!1}}}function hh(i,t=sn){t&&t.active&&t.effects.push(i)}const Ga=i=>{const t=new Set(i);return t.w=0,t.n=0,t},Lu=i=>(i.w&Yn)>0,Pu=i=>(i.n&Yn)>0,dh=({deps:i})=>{if(i.length)for(let t=0;t<i.length;t++)i[t].w|=Yn},ph=i=>{const{deps:t}=i;if(t.length){let e=0;for(let n=0;n<t.length;n++){const s=t[n];Lu(s)&&!Pu(s)?s.delete(i):t[e++]=s,s.w&=~Yn,s.n&=~Yn}t.length=e}},aa=new WeakMap;let As=0,Yn=1;const la=30;let qe;const gi=Symbol(""),ca=Symbol("");class Wa{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,hh(this,n)}run(){if(!this.active)return this.fn();let t=qe,e=Wn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=qe,qe=this,Wn=!0,Yn=1<<++As,As<=la?dh(this):_l(this),this.fn()}finally{As<=la&&ph(this),Yn=1<<--As,qe=this.parent,Wn=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){qe===this?this.deferStop=!0:this.active&&(_l(this),this.onStop&&this.onStop(),this.active=!1)}}function _l(i){const{deps:t}=i;if(t.length){for(let e=0;e<t.length;e++)t[e].delete(i);t.length=0}}let Wn=!0;const Du=[];function fs(){Du.push(Wn),Wn=!1}function hs(){const i=Du.pop();Wn=i===void 0?!0:i}function Pe(i,t,e){if(Wn&&qe){let n=aa.get(i);n||aa.set(i,n=new Map);let s=n.get(e);s||n.set(e,s=Ga()),Ru(s)}}function Ru(i,t){let e=!1;As<=la?Pu(i)||(i.n|=Yn,e=!Lu(i)):e=!i.has(qe),e&&(i.add(qe),qe.deps.push(i))}function Tn(i,t,e,n,s,r){const a=aa.get(i);if(!a)return;let o=[];if(t==="clear")o=[...a.values()];else if(e==="length"&&Ot(i)){const l=Cu(n);a.forEach((c,u)=>{(u==="length"||u>=l)&&o.push(c)})}else switch(e!==void 0&&o.push(a.get(e)),t){case"add":Ot(i)?Ha(e)&&o.push(a.get("length")):(o.push(a.get(gi)),Ds(i)&&o.push(a.get(ca)));break;case"delete":Ot(i)||(o.push(a.get(gi)),Ds(i)&&o.push(a.get(ca)));break;case"set":Ds(i)&&o.push(a.get(gi));break}if(o.length===1)o[0]&&ua(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);ua(Ga(l))}}function ua(i,t){const e=Ot(i)?i:[...i];for(const n of e)n.computed&&xl(n);for(const n of e)n.computed||xl(n)}function xl(i,t){(i!==qe||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const mh=Oa("__proto__,__v_isRef,__isVue"),Iu=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(ka)),gh=Xa(),_h=Xa(!1,!0),xh=Xa(!0),vl=vh();function vh(){const i={};return["includes","indexOf","lastIndexOf"].forEach(t=>{i[t]=function(...e){const n=$t(this);for(let r=0,a=this.length;r<a;r++)Pe(n,"get",r+"");const s=n[t](...e);return s===-1||s===!1?n[t](...e.map($t)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{i[t]=function(...e){fs();const n=$t(this)[t].apply(this,e);return hs(),n}}),i}function Xa(i=!1,t=!1){return function(n,s,r){if(s==="__v_isReactive")return!i;if(s==="__v_isReadonly")return i;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&r===(i?t?Nh:Uu:t?zu:Ou).get(n))return n;const a=Ot(n);if(!i&&a&&kt(vl,s))return Reflect.get(vl,s,r);const o=Reflect.get(n,s,r);return(ka(s)?Iu.has(s):mh(s))||(i||Pe(n,"get",s),t)?o:ye(o)?a&&Ha(s)?o:o.value:ne(o)?i?Bu(o):ja(o):o}}const yh=Fu(),bh=Fu(!0);function Fu(i=!1){return function(e,n,s,r){let a=e[n];if(zs(a)&&ye(a)&&!ye(s))return!1;if(!i&&(!fa(s)&&!zs(s)&&(a=$t(a),s=$t(s)),!Ot(e)&&ye(a)&&!ye(s)))return a.value=s,!0;const o=Ot(e)&&Ha(n)?Number(n)<e.length:kt(e,n),l=Reflect.set(e,n,s,r);return e===$t(r)&&(o?kr(s,a)&&Tn(e,"set",n,s):Tn(e,"add",n,s)),l}}function Mh(i,t){const e=kt(i,t);i[t];const n=Reflect.deleteProperty(i,t);return n&&e&&Tn(i,"delete",t,void 0),n}function wh(i,t){const e=Reflect.has(i,t);return(!ka(t)||!Iu.has(t))&&Pe(i,"has",t),e}function Sh(i){return Pe(i,"iterate",Ot(i)?"length":gi),Reflect.ownKeys(i)}const Nu={get:gh,set:yh,deleteProperty:Mh,has:wh,ownKeys:Sh},Ah={get:xh,set(i,t){return!0},deleteProperty(i,t){return!0}},Eh=ge({},Nu,{get:_h,set:bh}),qa=i=>i,Qr=i=>Reflect.getPrototypeOf(i);function Ys(i,t,e=!1,n=!1){i=i.__v_raw;const s=$t(i),r=$t(t);e||(t!==r&&Pe(s,"get",t),Pe(s,"get",r));const{has:a}=Qr(s),o=n?qa:e?Ka:Za;if(a.call(s,t))return o(i.get(t));if(a.call(s,r))return o(i.get(r));i!==s&&i.get(t)}function Zs(i,t=!1){const e=this.__v_raw,n=$t(e),s=$t(i);return t||(i!==s&&Pe(n,"has",i),Pe(n,"has",s)),i===s?e.has(i):e.has(i)||e.has(s)}function Ks(i,t=!1){return i=i.__v_raw,!t&&Pe($t(i),"iterate",gi),Reflect.get(i,"size",i)}function yl(i){i=$t(i);const t=$t(this);return Qr(t).has.call(t,i)||(t.add(i),Tn(t,"add",i,i)),this}function bl(i,t){t=$t(t);const e=$t(this),{has:n,get:s}=Qr(e);let r=n.call(e,i);r||(i=$t(i),r=n.call(e,i));const a=s.call(e,i);return e.set(i,t),r?kr(t,a)&&Tn(e,"set",i,t):Tn(e,"add",i,t),this}function Ml(i){const t=$t(this),{has:e,get:n}=Qr(t);let s=e.call(t,i);s||(i=$t(i),s=e.call(t,i)),n&&n.call(t,i);const r=t.delete(i);return s&&Tn(t,"delete",i,void 0),r}function wl(){const i=$t(this),t=i.size!==0,e=i.clear();return t&&Tn(i,"clear",void 0,void 0),e}function Js(i,t){return function(n,s){const r=this,a=r.__v_raw,o=$t(a),l=t?qa:i?Ka:Za;return!i&&Pe(o,"iterate",gi),a.forEach((c,u)=>n.call(s,l(c),l(u),r))}}function Qs(i,t,e){return function(...n){const s=this.__v_raw,r=$t(s),a=Ds(r),o=i==="entries"||i===Symbol.iterator&&a,l=i==="keys"&&a,c=s[i](...n),u=e?qa:t?Ka:Za;return!t&&Pe(r,"iterate",l?ca:gi),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:o?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Dn(i){return function(...t){return i==="delete"?!1:this}}function Th(){const i={get(r){return Ys(this,r)},get size(){return Ks(this)},has:Zs,add:yl,set:bl,delete:Ml,clear:wl,forEach:Js(!1,!1)},t={get(r){return Ys(this,r,!1,!0)},get size(){return Ks(this)},has:Zs,add:yl,set:bl,delete:Ml,clear:wl,forEach:Js(!1,!0)},e={get(r){return Ys(this,r,!0)},get size(){return Ks(this,!0)},has(r){return Zs.call(this,r,!0)},add:Dn("add"),set:Dn("set"),delete:Dn("delete"),clear:Dn("clear"),forEach:Js(!0,!1)},n={get(r){return Ys(this,r,!0,!0)},get size(){return Ks(this,!0)},has(r){return Zs.call(this,r,!0)},add:Dn("add"),set:Dn("set"),delete:Dn("delete"),clear:Dn("clear"),forEach:Js(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{i[r]=Qs(r,!1,!1),e[r]=Qs(r,!0,!1),t[r]=Qs(r,!1,!0),n[r]=Qs(r,!0,!0)}),[i,e,t,n]}const[Ch,Lh,Ph,Dh]=Th();function $a(i,t){const e=t?i?Dh:Ph:i?Lh:Ch;return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(kt(e,s)&&s in n?e:n,s,r)}const Rh={get:$a(!1,!1)},Ih={get:$a(!1,!0)},Fh={get:$a(!0,!1)},Ou=new WeakMap,zu=new WeakMap,Uu=new WeakMap,Nh=new WeakMap;function Oh(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zh(i){return i.__v_skip||!Object.isExtensible(i)?0:Oh(oh(i))}function ja(i){return zs(i)?i:Ya(i,!1,Nu,Rh,Ou)}function Uh(i){return Ya(i,!1,Eh,Ih,zu)}function Bu(i){return Ya(i,!0,Ah,Fh,Uu)}function Ya(i,t,e,n,s){if(!ne(i)||i.__v_raw&&!(t&&i.__v_isReactive))return i;const r=s.get(i);if(r)return r;const a=zh(i);if(a===0)return i;const o=new Proxy(i,a===2?n:e);return s.set(i,o),o}function Qi(i){return zs(i)?Qi(i.__v_raw):!!(i&&i.__v_isReactive)}function zs(i){return!!(i&&i.__v_isReadonly)}function fa(i){return!!(i&&i.__v_isShallow)}function Vu(i){return Qi(i)||zs(i)}function $t(i){const t=i&&i.__v_raw;return t?$t(t):i}function ku(i){return Hr(i,"__v_skip",!0),i}const Za=i=>ne(i)?ja(i):i,Ka=i=>ne(i)?Bu(i):i;function Bh(i){Wn&&qe&&(i=$t(i),Ru(i.dep||(i.dep=Ga())))}function Vh(i,t){i=$t(i),i.dep&&ua(i.dep)}function ye(i){return!!(i&&i.__v_isRef===!0)}function kh(i){return ye(i)?i.value:i}const Hh={get:(i,t,e)=>kh(Reflect.get(i,t,e)),set:(i,t,e,n)=>{const s=i[t];return ye(s)&&!ye(e)?(s.value=e,!0):Reflect.set(i,t,e,n)}};function Hu(i){return Qi(i)?i:new Proxy(i,Hh)}var Gu;class Gh{constructor(t,e,n,s){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this[Gu]=!1,this._dirty=!0,this.effect=new Wa(t,()=>{this._dirty||(this._dirty=!0,Vh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=n}get value(){const t=$t(this);return Bh(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Gu="__v_isReadonly";function Wh(i,t,e=!1){let n,s;const r=Bt(i);return r?(n=i,s=Ke):(n=i.get,s=i.set),new Gh(n,s,r||!s,e)}function Xn(i,t,e,n){let s;try{s=n?i(...n):i()}catch(r){to(r,t,e)}return s}function Be(i,t,e,n){if(Bt(i)){const r=Xn(i,t,e,n);return r&&Eu(r)&&r.catch(a=>{to(a,t,e)}),r}const s=[];for(let r=0;r<i.length;r++)s.push(Be(i[r],t,e,n));return s}function to(i,t,e,n=!0){const s=t?t.vnode:null;if(t){let r=t.parent;const a=t.proxy,o=e;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,a,o)===!1)return}r=r.parent}const l=t.appContext.config.errorHandler;if(l){Xn(l,null,10,[i,a,o]);return}}Xh(i,e,s,n)}function Xh(i,t,e,n=!0){console.error(i)}let Us=!1,ha=!1;const me=[];let cn=0;const ts=[];let Mn=null,ci=0;const Wu=Promise.resolve();let Ja=null;function qh(i){const t=Ja||Wu;return i?t.then(this?i.bind(this):i):t}function $h(i){let t=cn+1,e=me.length;for(;t<e;){const n=t+e>>>1;Bs(me[n])<i?t=n+1:e=n}return t}function Qa(i){(!me.length||!me.includes(i,Us&&i.allowRecurse?cn+1:cn))&&(i.id==null?me.push(i):me.splice($h(i.id),0,i),Xu())}function Xu(){!Us&&!ha&&(ha=!0,Ja=Wu.then($u))}function jh(i){const t=me.indexOf(i);t>cn&&me.splice(t,1)}function Yh(i){Ot(i)?ts.push(...i):(!Mn||!Mn.includes(i,i.allowRecurse?ci+1:ci))&&ts.push(i),Xu()}function Sl(i,t=Us?cn+1:0){for(;t<me.length;t++){const e=me[t];e&&e.pre&&(me.splice(t,1),t--,e())}}function qu(i){if(ts.length){const t=[...new Set(ts)];if(ts.length=0,Mn){Mn.push(...t);return}for(Mn=t,Mn.sort((e,n)=>Bs(e)-Bs(n)),ci=0;ci<Mn.length;ci++)Mn[ci]();Mn=null,ci=0}}const Bs=i=>i.id==null?1/0:i.id,Zh=(i,t)=>{const e=Bs(i)-Bs(t);if(e===0){if(i.pre&&!t.pre)return-1;if(t.pre&&!i.pre)return 1}return e};function $u(i){ha=!1,Us=!0,me.sort(Zh);const t=Ke;try{for(cn=0;cn<me.length;cn++){const e=me[cn];e&&e.active!==!1&&Xn(e,null,14)}}finally{cn=0,me.length=0,qu(),Us=!1,Ja=null,(me.length||ts.length)&&$u()}}function Kh(i,t,...e){if(i.isUnmounted)return;const n=i.vnode.props||Zt;let s=e;const r=t.startsWith("update:"),a=r&&t.slice(7);if(a&&a in n){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:h,trim:f}=n[u]||Zt;f&&(s=e.map(p=>fe(p)?p.trim():p)),h&&(s=e.map(Cu))}let o,l=n[o=po(t)]||n[o=po(ss(t))];!l&&r&&(l=n[o=po(us(t))]),l&&Be(l,i,6,s);const c=n[o+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[o])return;i.emitted[o]=!0,Be(c,i,6,s)}}function ju(i,t,e=!1){const n=t.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let a={},o=!1;if(!Bt(i)){const l=c=>{const u=ju(c,t,!0);u&&(o=!0,ge(a,u))};!e&&t.mixins.length&&t.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!o?(ne(i)&&n.set(i,null),null):(Ot(r)?r.forEach(l=>a[l]=null):ge(a,r),ne(i)&&n.set(i,a),a)}function eo(i,t){return!i||!Zr(t)?!1:(t=t.slice(2).replace(/Once$/,""),kt(i,t[0].toLowerCase()+t.slice(1))||kt(i,us(t))||kt(i,t))}let un=null,Yu=null;function Gr(i){const t=un;return un=i,Yu=i&&i.type.__scopeId||null,t}function Jh(i,t=un,e){if(!t||i._n)return i;const n=(...s)=>{n._d&&Il(-1);const r=Gr(t);let a;try{a=i(...s)}finally{Gr(r),n._d&&Il(1)}return a};return n._n=!0,n._c=!0,n._d=!0,n}function go(i){const{type:t,vnode:e,proxy:n,withProxy:s,props:r,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:p,ctx:g,inheritAttrs:m}=i;let d,_;const w=Gr(i);try{if(e.shapeFlag&4){const b=s||n;d=on(u.call(b,b,h,r,p,f,g)),_=l}else{const b=t;d=on(b.length>1?b(r,{attrs:l,slots:o,emit:c}):b(r,null)),_=t.props?l:Qh(l)}}catch(b){to(b,i,1),d=_i(An)}let x=d;if(_&&m!==!1){const b=Object.keys(_),{shapeFlag:v}=x;b.length&&v&7&&(a&&b.some(Ba)&&(_=td(_,a)),x=Zn(x,_))}return e.dirs&&(x=Zn(x),x.dirs=x.dirs?x.dirs.concat(e.dirs):e.dirs),e.transition&&(x.transition=e.transition),d=x,Gr(w),d}const Qh=i=>{let t;for(const e in i)(e==="class"||e==="style"||Zr(e))&&((t||(t={}))[e]=i[e]);return t},td=(i,t)=>{const e={};for(const n in i)(!Ba(n)||!(n.slice(9)in t))&&(e[n]=i[n]);return e};function ed(i,t,e){const{props:n,children:s,component:r}=i,{props:a,children:o,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return n?Al(n,a,c):!!a;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(a[f]!==n[f]&&!eo(c,f))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:n===a?!1:n?a?Al(n,a,c):!0:!!a;return!1}function Al(i,t,e){const n=Object.keys(t);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(t[r]!==i[r]&&!eo(e,r))return!0}return!1}function nd({vnode:i,parent:t},e){for(;t&&t.subTree===i;)(i=t.vnode).el=e,t=t.parent}const id=i=>i.__isSuspense;function sd(i,t){t&&t.pendingBranch?Ot(i)?t.effects.push(...i):t.effects.push(i):Yh(i)}function rd(i,t){if(ue){let e=ue.provides;const n=ue.parent&&ue.parent.provides;n===e&&(e=ue.provides=Object.create(n)),e[i]=t}}function Fr(i,t,e=!1){const n=ue||un;if(n){const s=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(s&&i in s)return s[i];if(arguments.length>1)return e&&Bt(t)?t.call(n.proxy):t}}const tr={};function _o(i,t,e){return Zu(i,t,e)}function Zu(i,t,{immediate:e,deep:n,flush:s,onTrack:r,onTrigger:a}=Zt){const o=ue;let l,c=!1,u=!1;if(ye(i)?(l=()=>i.value,c=fa(i)):Qi(i)?(l=()=>i,n=!0):Ot(i)?(u=!0,c=i.some(x=>Qi(x)||fa(x)),l=()=>i.map(x=>{if(ye(x))return x.value;if(Qi(x))return ji(x);if(Bt(x))return Xn(x,o,2)})):Bt(i)?t?l=()=>Xn(i,o,2):l=()=>{if(!(o&&o.isUnmounted))return h&&h(),Be(i,o,3,[f])}:l=Ke,t&&n){const x=l;l=()=>ji(x())}let h,f=x=>{h=_.onStop=()=>{Xn(x,o,4)}},p;if(Vs)if(f=Ke,t?e&&Be(t,o,3,[l(),u?[]:void 0,f]):l(),s==="sync"){const x=ep();p=x.__watcherHandles||(x.__watcherHandles=[])}else return Ke;let g=u?new Array(i.length).fill(tr):tr;const m=()=>{if(!!_.active)if(t){const x=_.run();(n||c||(u?x.some((b,v)=>kr(b,g[v])):kr(x,g)))&&(h&&h(),Be(t,o,3,[x,g===tr?void 0:u&&g[0]===tr?[]:g,f]),g=x)}else _.run()};m.allowRecurse=!!t;let d;s==="sync"?d=m:s==="post"?d=()=>we(m,o&&o.suspense):(m.pre=!0,o&&(m.id=o.uid),d=()=>Qa(m));const _=new Wa(l,d);t?e?m():g=_.run():s==="post"?we(_.run.bind(_),o&&o.suspense):_.run();const w=()=>{_.stop(),o&&o.scope&&Va(o.scope.effects,_)};return p&&p.push(w),w}function od(i,t,e){const n=this.proxy,s=fe(i)?i.includes(".")?Ku(n,i):()=>n[i]:i.bind(n,n);let r;Bt(t)?r=t:(r=t.handler,e=t);const a=ue;rs(this);const o=Zu(s,r.bind(n),e);return a?rs(a):xi(),o}function Ku(i,t){const e=t.split(".");return()=>{let n=i;for(let s=0;s<e.length&&n;s++)n=n[e[s]];return n}}function ji(i,t){if(!ne(i)||i.__v_skip||(t=t||new Set,t.has(i)))return i;if(t.add(i),ye(i))ji(i.value,t);else if(Ot(i))for(let e=0;e<i.length;e++)ji(i[e],t);else if(sh(i)||Ds(i))i.forEach(e=>{ji(e,t)});else if(ah(i))for(const e in i)ji(i[e],t);return i}function ad(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ef(()=>{i.isMounted=!0}),nf(()=>{i.isUnmounting=!0}),i}const Ie=[Function,Array],ld={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ie,onEnter:Ie,onAfterEnter:Ie,onEnterCancelled:Ie,onBeforeLeave:Ie,onLeave:Ie,onAfterLeave:Ie,onLeaveCancelled:Ie,onBeforeAppear:Ie,onAppear:Ie,onAfterAppear:Ie,onAppearCancelled:Ie},setup(i,{slots:t}){const e=$d(),n=ad();let s;return()=>{const r=t.default&&Qu(t.default(),!0);if(!r||!r.length)return;let a=r[0];if(r.length>1){for(const m of r)if(m.type!==An){a=m;break}}const o=$t(i),{mode:l}=o;if(n.isLeaving)return xo(a);const c=El(a);if(!c)return xo(a);const u=da(c,o,n,e);pa(c,u);const h=e.subTree,f=h&&El(h);let p=!1;const{getTransitionKey:g}=c.type;if(g){const m=g();s===void 0?s=m:m!==s&&(s=m,p=!0)}if(f&&f.type!==An&&(!ui(c,f)||p)){const m=da(f,o,n,e);if(pa(f,m),l==="out-in")return n.isLeaving=!0,m.afterLeave=()=>{n.isLeaving=!1,e.update.active!==!1&&e.update()},xo(a);l==="in-out"&&c.type!==An&&(m.delayLeave=(d,_,w)=>{const x=Ju(n,f);x[String(f.key)]=f,d._leaveCb=()=>{_(),d._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=w})}return a}}},cd=ld;function Ju(i,t){const{leavingVNodes:e}=i;let n=e.get(t.type);return n||(n=Object.create(null),e.set(t.type,n)),n}function da(i,t,e,n){const{appear:s,mode:r,persisted:a=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:m,onAppear:d,onAfterAppear:_,onAppearCancelled:w}=t,x=String(i.key),b=Ju(e,i),v=(y,E)=>{y&&Be(y,n,9,E)},A=(y,E)=>{const R=E[1];v(y,E),Ot(y)?y.every(X=>X.length<=1)&&R():y.length<=1&&R()},P={mode:r,persisted:a,beforeEnter(y){let E=o;if(!e.isMounted)if(s)E=m||o;else return;y._leaveCb&&y._leaveCb(!0);const R=b[x];R&&ui(i,R)&&R.el._leaveCb&&R.el._leaveCb(),v(E,[y])},enter(y){let E=l,R=c,X=u;if(!e.isMounted)if(s)E=d||l,R=_||c,X=w||u;else return;let tt=!1;const F=y._enterCb=N=>{tt||(tt=!0,N?v(X,[y]):v(R,[y]),P.delayedLeave&&P.delayedLeave(),y._enterCb=void 0)};E?A(E,[y,F]):F()},leave(y,E){const R=String(i.key);if(y._enterCb&&y._enterCb(!0),e.isUnmounting)return E();v(h,[y]);let X=!1;const tt=y._leaveCb=F=>{X||(X=!0,E(),F?v(g,[y]):v(p,[y]),y._leaveCb=void 0,b[R]===i&&delete b[R])};b[R]=i,f?A(f,[y,tt]):tt()},clone(y){return da(y,t,e,n)}};return P}function xo(i){if(no(i))return i=Zn(i),i.children=null,i}function El(i){return no(i)?i.children?i.children[0]:void 0:i}function pa(i,t){i.shapeFlag&6&&i.component?pa(i.component.subTree,t):i.shapeFlag&128?(i.ssContent.transition=t.clone(i.ssContent),i.ssFallback.transition=t.clone(i.ssFallback)):i.transition=t}function Qu(i,t=!1,e){let n=[],s=0;for(let r=0;r<i.length;r++){let a=i[r];const o=e==null?a.key:String(e)+String(a.key!=null?a.key:r);a.type===rn?(a.patchFlag&128&&s++,n=n.concat(Qu(a.children,t,o))):(t||a.type!==An)&&n.push(o!=null?Zn(a,{key:o}):a)}if(s>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}const Nr=i=>!!i.type.__asyncLoader,no=i=>i.type.__isKeepAlive;function ud(i,t){tf(i,"a",t)}function fd(i,t){tf(i,"da",t)}function tf(i,t,e=ue){const n=i.__wdc||(i.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(io(t,n,e),e){let s=e.parent;for(;s&&s.parent;)no(s.parent.vnode)&&hd(n,t,e,s),s=s.parent}}function hd(i,t,e,n){const s=io(t,i,n,!0);sf(()=>{Va(n[t],s)},e)}function io(i,t,e=ue,n=!1){if(e){const s=e[i]||(e[i]=[]),r=t.__weh||(t.__weh=(...a)=>{if(e.isUnmounted)return;fs(),rs(e);const o=Be(t,e,i,a);return xi(),hs(),o});return n?s.unshift(r):s.push(r),r}}const Ln=i=>(t,e=ue)=>(!Vs||i==="sp")&&io(i,(...n)=>t(...n),e),dd=Ln("bm"),ef=Ln("m"),pd=Ln("bu"),md=Ln("u"),nf=Ln("bum"),sf=Ln("um"),gd=Ln("sp"),_d=Ln("rtg"),xd=Ln("rtc");function vd(i,t=ue){io("ec",i,t)}function ei(i,t,e,n){const s=i.dirs,r=t&&t.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[n];l&&(fs(),Be(l,e,8,[i.el,o,i,t]),hs())}}const yd=Symbol(),ma=i=>i?pf(i)?rl(i)||i.proxy:ma(i.parent):null,Rs=ge(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>ma(i.parent),$root:i=>ma(i.root),$emit:i=>i.emit,$options:i=>tl(i),$forceUpdate:i=>i.f||(i.f=()=>Qa(i.update)),$nextTick:i=>i.n||(i.n=qh.bind(i.proxy)),$watch:i=>od.bind(i)}),bd={get({_:i},t){const{ctx:e,setupState:n,data:s,props:r,accessCache:a,type:o,appContext:l}=i;let c;if(t[0]!=="$"){const p=a[t];if(p!==void 0)switch(p){case 1:return n[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(n!==Zt&&kt(n,t))return a[t]=1,n[t];if(s!==Zt&&kt(s,t))return a[t]=2,s[t];if((c=i.propsOptions[0])&&kt(c,t))return a[t]=3,r[t];if(e!==Zt&&kt(e,t))return a[t]=4,e[t];ga&&(a[t]=0)}}const u=Rs[t];let h,f;if(u)return t==="$attrs"&&Pe(i,"get",t),u(i);if((h=o.__cssModules)&&(h=h[t]))return h;if(e!==Zt&&kt(e,t))return a[t]=4,e[t];if(f=l.config.globalProperties,kt(f,t))return f[t]},set({_:i},t,e){const{data:n,setupState:s,ctx:r}=i;return s!==Zt&&kt(s,t)?(s[t]=e,!0):n!==Zt&&kt(n,t)?(n[t]=e,!0):kt(i.props,t)||t[0]==="$"&&t.slice(1)in i?!1:(r[t]=e,!0)},has({_:{data:i,setupState:t,accessCache:e,ctx:n,appContext:s,propsOptions:r}},a){let o;return!!e[a]||i!==Zt&&kt(i,a)||t!==Zt&&kt(t,a)||(o=r[0])&&kt(o,a)||kt(n,a)||kt(Rs,a)||kt(s.config.globalProperties,a)},defineProperty(i,t,e){return e.get!=null?i._.accessCache[t]=0:kt(e,"value")&&this.set(i,t,e.value,null),Reflect.defineProperty(i,t,e)}};let ga=!0;function Md(i){const t=tl(i),e=i.proxy,n=i.ctx;ga=!1,t.beforeCreate&&Tl(t.beforeCreate,i,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:m,deactivated:d,beforeDestroy:_,beforeUnmount:w,destroyed:x,unmounted:b,render:v,renderTracked:A,renderTriggered:P,errorCaptured:y,serverPrefetch:E,expose:R,inheritAttrs:X,components:tt,directives:F,filters:N}=t;if(c&&wd(c,n,null,i.appContext.config.unwrapInjectedRef),a)for(const J in a){const W=a[J];Bt(W)&&(n[J]=W.bind(e))}if(s){const J=s.call(e,e);ne(J)&&(i.data=ja(J))}if(ga=!0,r)for(const J in r){const W=r[J],k=Bt(W)?W.bind(e,e):Bt(W.get)?W.get.bind(e,e):Ke,B=!Bt(W)&&Bt(W.set)?W.set.bind(e):Ke,et=Qd({get:k,set:B});Object.defineProperty(n,J,{enumerable:!0,configurable:!0,get:()=>et.value,set:ot=>et.value=ot})}if(o)for(const J in o)rf(o[J],n,e,J);if(l){const J=Bt(l)?l.call(e):l;Reflect.ownKeys(J).forEach(W=>{rd(W,J[W])})}u&&Tl(u,i,"c");function nt(J,W){Ot(W)?W.forEach(k=>J(k.bind(e))):W&&J(W.bind(e))}if(nt(dd,h),nt(ef,f),nt(pd,p),nt(md,g),nt(ud,m),nt(fd,d),nt(vd,y),nt(xd,A),nt(_d,P),nt(nf,w),nt(sf,b),nt(gd,E),Ot(R))if(R.length){const J=i.exposed||(i.exposed={});R.forEach(W=>{Object.defineProperty(J,W,{get:()=>e[W],set:k=>e[W]=k})})}else i.exposed||(i.exposed={});v&&i.render===Ke&&(i.render=v),X!=null&&(i.inheritAttrs=X),tt&&(i.components=tt),F&&(i.directives=F)}function wd(i,t,e=Ke,n=!1){Ot(i)&&(i=_a(i));for(const s in i){const r=i[s];let a;ne(r)?"default"in r?a=Fr(r.from||s,r.default,!0):a=Fr(r.from||s):a=Fr(r),ye(a)&&n?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):t[s]=a}}function Tl(i,t,e){Be(Ot(i)?i.map(n=>n.bind(t.proxy)):i.bind(t.proxy),t,e)}function rf(i,t,e,n){const s=n.includes(".")?Ku(e,n):()=>e[n];if(fe(i)){const r=t[i];Bt(r)&&_o(s,r)}else if(Bt(i))_o(s,i.bind(e));else if(ne(i))if(Ot(i))i.forEach(r=>rf(r,t,e,n));else{const r=Bt(i.handler)?i.handler.bind(e):t[i.handler];Bt(r)&&_o(s,r,i)}}function tl(i){const t=i.type,{mixins:e,extends:n}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=i.appContext,o=r.get(t);let l;return o?l=o:!s.length&&!e&&!n?l=t:(l={},s.length&&s.forEach(c=>Wr(l,c,a,!0)),Wr(l,t,a)),ne(t)&&r.set(t,l),l}function Wr(i,t,e,n=!1){const{mixins:s,extends:r}=t;r&&Wr(i,r,e,!0),s&&s.forEach(a=>Wr(i,a,e,!0));for(const a in t)if(!(n&&a==="expose")){const o=Sd[a]||e&&e[a];i[a]=o?o(i[a],t[a]):t[a]}return i}const Sd={data:Cl,props:ai,emits:ai,methods:ai,computed:ai,beforeCreate:xe,created:xe,beforeMount:xe,mounted:xe,beforeUpdate:xe,updated:xe,beforeDestroy:xe,beforeUnmount:xe,destroyed:xe,unmounted:xe,activated:xe,deactivated:xe,errorCaptured:xe,serverPrefetch:xe,components:ai,directives:ai,watch:Ed,provide:Cl,inject:Ad};function Cl(i,t){return t?i?function(){return ge(Bt(i)?i.call(this,this):i,Bt(t)?t.call(this,this):t)}:t:i}function Ad(i,t){return ai(_a(i),_a(t))}function _a(i){if(Ot(i)){const t={};for(let e=0;e<i.length;e++)t[i[e]]=i[e];return t}return i}function xe(i,t){return i?[...new Set([].concat(i,t))]:t}function ai(i,t){return i?ge(ge(Object.create(null),i),t):t}function Ed(i,t){if(!i)return t;if(!t)return i;const e=ge(Object.create(null),i);for(const n in t)e[n]=xe(i[n],t[n]);return e}function Td(i,t,e,n=!1){const s={},r={};Hr(r,so,1),i.propsDefaults=Object.create(null),of(i,t,s,r);for(const a in i.propsOptions[0])a in s||(s[a]=void 0);e?i.props=n?s:Uh(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function Cd(i,t,e,n){const{props:s,attrs:r,vnode:{patchFlag:a}}=i,o=$t(s),[l]=i.propsOptions;let c=!1;if((n||a>0)&&!(a&16)){if(a&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(eo(i.emitsOptions,f))continue;const p=t[f];if(l)if(kt(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const g=ss(f);s[g]=xa(l,o,g,p,i,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{of(i,t,s,r)&&(c=!0);let u;for(const h in o)(!t||!kt(t,h)&&((u=us(h))===h||!kt(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(s[h]=xa(l,o,h,void 0,i,!0)):delete s[h]);if(r!==o)for(const h in r)(!t||!kt(t,h)&&!0)&&(delete r[h],c=!0)}c&&Tn(i,"set","$attrs")}function of(i,t,e,n){const[s,r]=i.propsOptions;let a=!1,o;if(t)for(let l in t){if(Ir(l))continue;const c=t[l];let u;s&&kt(s,u=ss(l))?!r||!r.includes(u)?e[u]=c:(o||(o={}))[u]=c:eo(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,a=!0)}if(r){const l=$t(e),c=o||Zt;for(let u=0;u<r.length;u++){const h=r[u];e[h]=xa(s,l,h,c[h],i,!kt(c,h))}}return a}function xa(i,t,e,n,s,r){const a=i[e];if(a!=null){const o=kt(a,"default");if(o&&n===void 0){const l=a.default;if(a.type!==Function&&Bt(l)){const{propsDefaults:c}=s;e in c?n=c[e]:(rs(s),n=c[e]=l.call(null,t),xi())}else n=l}a[0]&&(r&&!o?n=!1:a[1]&&(n===""||n===us(e))&&(n=!0))}return n}function af(i,t,e=!1){const n=t.propsCache,s=n.get(i);if(s)return s;const r=i.props,a={},o=[];let l=!1;if(!Bt(i)){const u=h=>{l=!0;const[f,p]=af(h,t,!0);ge(a,f),p&&o.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!r&&!l)return ne(i)&&n.set(i,Ps),Ps;if(Ot(r))for(let u=0;u<r.length;u++){const h=ss(r[u]);Ll(h)&&(a[h]=Zt)}else if(r)for(const u in r){const h=ss(u);if(Ll(h)){const f=r[u],p=a[h]=Ot(f)||Bt(f)?{type:f}:Object.assign({},f);if(p){const g=Rl(Boolean,p.type),m=Rl(String,p.type);p[0]=g>-1,p[1]=m<0||g<m,(g>-1||kt(p,"default"))&&o.push(h)}}}const c=[a,o];return ne(i)&&n.set(i,c),c}function Ll(i){return i[0]!=="$"}function Pl(i){const t=i&&i.toString().match(/^\s*function (\w+)/);return t?t[1]:i===null?"null":""}function Dl(i,t){return Pl(i)===Pl(t)}function Rl(i,t){return Ot(t)?t.findIndex(e=>Dl(e,i)):Bt(t)&&Dl(t,i)?0:-1}const lf=i=>i[0]==="_"||i==="$stable",el=i=>Ot(i)?i.map(on):[on(i)],Ld=(i,t,e)=>{if(t._n)return t;const n=Jh((...s)=>el(t(...s)),e);return n._c=!1,n},cf=(i,t,e)=>{const n=i._ctx;for(const s in i){if(lf(s))continue;const r=i[s];if(Bt(r))t[s]=Ld(s,r,n);else if(r!=null){const a=el(r);t[s]=()=>a}}},uf=(i,t)=>{const e=el(t);i.slots.default=()=>e},Pd=(i,t)=>{if(i.vnode.shapeFlag&32){const e=t._;e?(i.slots=$t(t),Hr(t,"_",e)):cf(t,i.slots={})}else i.slots={},t&&uf(i,t);Hr(i.slots,so,1)},Dd=(i,t,e)=>{const{vnode:n,slots:s}=i;let r=!0,a=Zt;if(n.shapeFlag&32){const o=t._;o?e&&o===1?r=!1:(ge(s,t),!e&&o===1&&delete s._):(r=!t.$stable,cf(t,s)),a=t}else t&&(uf(i,t),a={default:1});if(r)for(const o in s)!lf(o)&&!(o in a)&&delete s[o]};function ff(){return{app:null,config:{isNativeTag:eh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rd=0;function Id(i,t){return function(n,s=null){Bt(n)||(n=Object.assign({},n)),s!=null&&!ne(s)&&(s=null);const r=ff(),a=new Set;let o=!1;const l=r.app={_uid:Rd++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:np,get config(){return r.config},set config(c){},use(c,...u){return a.has(c)||(c&&Bt(c.install)?(a.add(c),c.install(l,...u)):Bt(c)&&(a.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!o){const f=_i(n,s);return f.appContext=r,u&&t?t(f,c):i(f,c,h),o=!0,l._container=c,c.__vue_app__=l,rl(f.component)||f.component.proxy}},unmount(){o&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function va(i,t,e,n,s=!1){if(Ot(i)){i.forEach((f,p)=>va(f,t&&(Ot(t)?t[p]:t),e,n,s));return}if(Nr(n)&&!s)return;const r=n.shapeFlag&4?rl(n.component)||n.component.proxy:n.el,a=s?null:r,{i:o,r:l}=i,c=t&&t.r,u=o.refs===Zt?o.refs={}:o.refs,h=o.setupState;if(c!=null&&c!==l&&(fe(c)?(u[c]=null,kt(h,c)&&(h[c]=null)):ye(c)&&(c.value=null)),Bt(l))Xn(l,o,12,[a,u]);else{const f=fe(l),p=ye(l);if(f||p){const g=()=>{if(i.f){const m=f?kt(h,l)?h[l]:u[l]:l.value;s?Ot(m)&&Va(m,r):Ot(m)?m.includes(r)||m.push(r):f?(u[l]=[r],kt(h,l)&&(h[l]=u[l])):(l.value=[r],i.k&&(u[i.k]=l.value))}else f?(u[l]=a,kt(h,l)&&(h[l]=a)):p&&(l.value=a,i.k&&(u[i.k]=a))};a?(g.id=-1,we(g,e)):g()}}}const we=sd;function Fd(i){return Nd(i)}function Nd(i,t){const e=uh();e.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=Ke,insertStaticContent:g}=i,m=(T,L,U,$=null,j=null,ct=null,dt=!1,Y=null,ut=!!L.dynamicChildren)=>{if(T===L)return;T&&!ui(T,L)&&($=St(T),ot(T,j,ct,!0),T=null),L.patchFlag===-2&&(ut=!1,L.dynamicChildren=null);const{type:Q,ref:S,shapeFlag:M}=L;switch(Q){case nl:d(T,L,U,$);break;case An:_(T,L,U,$);break;case vo:T==null&&w(L,U,$,dt);break;case rn:tt(T,L,U,$,j,ct,dt,Y,ut);break;default:M&1?v(T,L,U,$,j,ct,dt,Y,ut):M&6?F(T,L,U,$,j,ct,dt,Y,ut):(M&64||M&128)&&Q.process(T,L,U,$,j,ct,dt,Y,ut,gt)}S!=null&&j&&va(S,T&&T.ref,ct,L||T,!L)},d=(T,L,U,$)=>{if(T==null)n(L.el=o(L.children),U,$);else{const j=L.el=T.el;L.children!==T.children&&c(j,L.children)}},_=(T,L,U,$)=>{T==null?n(L.el=l(L.children||""),U,$):L.el=T.el},w=(T,L,U,$)=>{[T.el,T.anchor]=g(T.children,L,U,$,T.el,T.anchor)},x=({el:T,anchor:L},U,$)=>{let j;for(;T&&T!==L;)j=f(T),n(T,U,$),T=j;n(L,U,$)},b=({el:T,anchor:L})=>{let U;for(;T&&T!==L;)U=f(T),s(T),T=U;s(L)},v=(T,L,U,$,j,ct,dt,Y,ut)=>{dt=dt||L.type==="svg",T==null?A(L,U,$,j,ct,dt,Y,ut):E(T,L,j,ct,dt,Y,ut)},A=(T,L,U,$,j,ct,dt,Y)=>{let ut,Q;const{type:S,props:M,shapeFlag:z,transition:Z,dirs:it}=T;if(ut=T.el=a(T.type,ct,M&&M.is,M),z&8?u(ut,T.children):z&16&&y(T.children,ut,null,$,j,ct&&S!=="foreignObject",dt,Y),it&&ei(T,null,$,"created"),M){for(const vt in M)vt!=="value"&&!Ir(vt)&&r(ut,vt,null,M[vt],ct,T.children,$,j,H);"value"in M&&r(ut,"value",null,M.value),(Q=M.onVnodeBeforeMount)&&en(Q,$,T)}P(ut,T,T.scopeId,dt,$),it&&ei(T,null,$,"beforeMount");const pt=(!j||j&&!j.pendingBranch)&&Z&&!Z.persisted;pt&&Z.beforeEnter(ut),n(ut,L,U),((Q=M&&M.onVnodeMounted)||pt||it)&&we(()=>{Q&&en(Q,$,T),pt&&Z.enter(ut),it&&ei(T,null,$,"mounted")},j)},P=(T,L,U,$,j)=>{if(U&&p(T,U),$)for(let ct=0;ct<$.length;ct++)p(T,$[ct]);if(j){let ct=j.subTree;if(L===ct){const dt=j.vnode;P(T,dt,dt.scopeId,dt.slotScopeIds,j.parent)}}},y=(T,L,U,$,j,ct,dt,Y,ut=0)=>{for(let Q=ut;Q<T.length;Q++){const S=T[Q]=Y?Vn(T[Q]):on(T[Q]);m(null,S,L,U,$,j,ct,dt,Y)}},E=(T,L,U,$,j,ct,dt)=>{const Y=L.el=T.el;let{patchFlag:ut,dynamicChildren:Q,dirs:S}=L;ut|=T.patchFlag&16;const M=T.props||Zt,z=L.props||Zt;let Z;U&&ni(U,!1),(Z=z.onVnodeBeforeUpdate)&&en(Z,U,L,T),S&&ei(L,T,U,"beforeUpdate"),U&&ni(U,!0);const it=j&&L.type!=="foreignObject";if(Q?R(T.dynamicChildren,Q,Y,U,$,it,ct):dt||W(T,L,Y,null,U,$,it,ct,!1),ut>0){if(ut&16)X(Y,L,M,z,U,$,j);else if(ut&2&&M.class!==z.class&&r(Y,"class",null,z.class,j),ut&4&&r(Y,"style",M.style,z.style,j),ut&8){const pt=L.dynamicProps;for(let vt=0;vt<pt.length;vt++){const D=pt[vt],V=M[D],bt=z[D];(bt!==V||D==="value")&&r(Y,D,V,bt,j,T.children,U,$,H)}}ut&1&&T.children!==L.children&&u(Y,L.children)}else!dt&&Q==null&&X(Y,L,M,z,U,$,j);((Z=z.onVnodeUpdated)||S)&&we(()=>{Z&&en(Z,U,L,T),S&&ei(L,T,U,"updated")},$)},R=(T,L,U,$,j,ct,dt)=>{for(let Y=0;Y<L.length;Y++){const ut=T[Y],Q=L[Y],S=ut.el&&(ut.type===rn||!ui(ut,Q)||ut.shapeFlag&70)?h(ut.el):U;m(ut,Q,S,null,$,j,ct,dt,!0)}},X=(T,L,U,$,j,ct,dt)=>{if(U!==$){if(U!==Zt)for(const Y in U)!Ir(Y)&&!(Y in $)&&r(T,Y,U[Y],null,dt,L.children,j,ct,H);for(const Y in $){if(Ir(Y))continue;const ut=$[Y],Q=U[Y];ut!==Q&&Y!=="value"&&r(T,Y,Q,ut,dt,L.children,j,ct,H)}"value"in $&&r(T,"value",U.value,$.value)}},tt=(T,L,U,$,j,ct,dt,Y,ut)=>{const Q=L.el=T?T.el:o(""),S=L.anchor=T?T.anchor:o("");let{patchFlag:M,dynamicChildren:z,slotScopeIds:Z}=L;Z&&(Y=Y?Y.concat(Z):Z),T==null?(n(Q,U,$),n(S,U,$),y(L.children,U,S,j,ct,dt,Y,ut)):M>0&&M&64&&z&&T.dynamicChildren?(R(T.dynamicChildren,z,U,j,ct,dt,Y),(L.key!=null||j&&L===j.subTree)&&hf(T,L,!0)):W(T,L,U,S,j,ct,dt,Y,ut)},F=(T,L,U,$,j,ct,dt,Y,ut)=>{L.slotScopeIds=Y,T==null?L.shapeFlag&512?j.ctx.activate(L,U,$,dt,ut):N(L,U,$,j,ct,dt,ut):K(T,L,ut)},N=(T,L,U,$,j,ct,dt)=>{const Y=T.component=qd(T,$,j);if(no(T)&&(Y.ctx.renderer=gt),jd(Y),Y.asyncDep){if(j&&j.registerDep(Y,nt),!T.el){const ut=Y.subTree=_i(An);_(null,ut,L,U)}return}nt(Y,T,L,U,j,ct,dt)},K=(T,L,U)=>{const $=L.component=T.component;if(ed(T,L,U))if($.asyncDep&&!$.asyncResolved){J($,L,U);return}else $.next=L,jh($.update),$.update();else L.el=T.el,$.vnode=L},nt=(T,L,U,$,j,ct,dt)=>{const Y=()=>{if(T.isMounted){let{next:S,bu:M,u:z,parent:Z,vnode:it}=T,pt=S,vt;ni(T,!1),S?(S.el=it.el,J(T,S,dt)):S=it,M&&mo(M),(vt=S.props&&S.props.onVnodeBeforeUpdate)&&en(vt,Z,S,it),ni(T,!0);const D=go(T),V=T.subTree;T.subTree=D,m(V,D,h(V.el),St(V),T,j,ct),S.el=D.el,pt===null&&nd(T,D.el),z&&we(z,j),(vt=S.props&&S.props.onVnodeUpdated)&&we(()=>en(vt,Z,S,it),j)}else{let S;const{el:M,props:z}=L,{bm:Z,m:it,parent:pt}=T,vt=Nr(L);if(ni(T,!1),Z&&mo(Z),!vt&&(S=z&&z.onVnodeBeforeMount)&&en(S,pt,L),ni(T,!0),M&&Et){const D=()=>{T.subTree=go(T),Et(M,T.subTree,T,j,null)};vt?L.type.__asyncLoader().then(()=>!T.isUnmounted&&D()):D()}else{const D=T.subTree=go(T);m(null,D,U,$,T,j,ct),L.el=D.el}if(it&&we(it,j),!vt&&(S=z&&z.onVnodeMounted)){const D=L;we(()=>en(S,pt,D),j)}(L.shapeFlag&256||pt&&Nr(pt.vnode)&&pt.vnode.shapeFlag&256)&&T.a&&we(T.a,j),T.isMounted=!0,L=U=$=null}},ut=T.effect=new Wa(Y,()=>Qa(Q),T.scope),Q=T.update=()=>ut.run();Q.id=T.uid,ni(T,!0),Q()},J=(T,L,U)=>{L.component=T;const $=T.vnode.props;T.vnode=L,T.next=null,Cd(T,L.props,$,U),Dd(T,L.children,U),fs(),Sl(),hs()},W=(T,L,U,$,j,ct,dt,Y,ut=!1)=>{const Q=T&&T.children,S=T?T.shapeFlag:0,M=L.children,{patchFlag:z,shapeFlag:Z}=L;if(z>0){if(z&128){B(Q,M,U,$,j,ct,dt,Y,ut);return}else if(z&256){k(Q,M,U,$,j,ct,dt,Y,ut);return}}Z&8?(S&16&&H(Q,j,ct),M!==Q&&u(U,M)):S&16?Z&16?B(Q,M,U,$,j,ct,dt,Y,ut):H(Q,j,ct,!0):(S&8&&u(U,""),Z&16&&y(M,U,$,j,ct,dt,Y,ut))},k=(T,L,U,$,j,ct,dt,Y,ut)=>{T=T||Ps,L=L||Ps;const Q=T.length,S=L.length,M=Math.min(Q,S);let z;for(z=0;z<M;z++){const Z=L[z]=ut?Vn(L[z]):on(L[z]);m(T[z],Z,U,null,j,ct,dt,Y,ut)}Q>S?H(T,j,ct,!0,!1,M):y(L,U,$,j,ct,dt,Y,ut,M)},B=(T,L,U,$,j,ct,dt,Y,ut)=>{let Q=0;const S=L.length;let M=T.length-1,z=S-1;for(;Q<=M&&Q<=z;){const Z=T[Q],it=L[Q]=ut?Vn(L[Q]):on(L[Q]);if(ui(Z,it))m(Z,it,U,null,j,ct,dt,Y,ut);else break;Q++}for(;Q<=M&&Q<=z;){const Z=T[M],it=L[z]=ut?Vn(L[z]):on(L[z]);if(ui(Z,it))m(Z,it,U,null,j,ct,dt,Y,ut);else break;M--,z--}if(Q>M){if(Q<=z){const Z=z+1,it=Z<S?L[Z].el:$;for(;Q<=z;)m(null,L[Q]=ut?Vn(L[Q]):on(L[Q]),U,it,j,ct,dt,Y,ut),Q++}}else if(Q>z)for(;Q<=M;)ot(T[Q],j,ct,!0),Q++;else{const Z=Q,it=Q,pt=new Map;for(Q=it;Q<=z;Q++){const wt=L[Q]=ut?Vn(L[Q]):on(L[Q]);wt.key!=null&&pt.set(wt.key,Q)}let vt,D=0;const V=z-it+1;let bt=!1,At=0;const Mt=new Array(V);for(Q=0;Q<V;Q++)Mt[Q]=0;for(Q=Z;Q<=M;Q++){const wt=T[Q];if(D>=V){ot(wt,j,ct,!0);continue}let Dt;if(wt.key!=null)Dt=pt.get(wt.key);else for(vt=it;vt<=z;vt++)if(Mt[vt-it]===0&&ui(wt,L[vt])){Dt=vt;break}Dt===void 0?ot(wt,j,ct,!0):(Mt[Dt-it]=Q+1,Dt>=At?At=Dt:bt=!0,m(wt,L[Dt],U,null,j,ct,dt,Y,ut),D++)}const Ct=bt?Od(Mt):Ps;for(vt=Ct.length-1,Q=V-1;Q>=0;Q--){const wt=it+Q,Dt=L[wt],Ut=wt+1<S?L[wt+1].el:$;Mt[Q]===0?m(null,Dt,U,Ut,j,ct,dt,Y,ut):bt&&(vt<0||Q!==Ct[vt]?et(Dt,U,Ut,2):vt--)}}},et=(T,L,U,$,j=null)=>{const{el:ct,type:dt,transition:Y,children:ut,shapeFlag:Q}=T;if(Q&6){et(T.component.subTree,L,U,$);return}if(Q&128){T.suspense.move(L,U,$);return}if(Q&64){dt.move(T,L,U,gt);return}if(dt===rn){n(ct,L,U);for(let M=0;M<ut.length;M++)et(ut[M],L,U,$);n(T.anchor,L,U);return}if(dt===vo){x(T,L,U);return}if($!==2&&Q&1&&Y)if($===0)Y.beforeEnter(ct),n(ct,L,U),we(()=>Y.enter(ct),j);else{const{leave:M,delayLeave:z,afterLeave:Z}=Y,it=()=>n(ct,L,U),pt=()=>{M(ct,()=>{it(),Z&&Z()})};z?z(ct,it,pt):pt()}else n(ct,L,U)},ot=(T,L,U,$=!1,j=!1)=>{const{type:ct,props:dt,ref:Y,children:ut,dynamicChildren:Q,shapeFlag:S,patchFlag:M,dirs:z}=T;if(Y!=null&&va(Y,null,U,T,!0),S&256){L.ctx.deactivate(T);return}const Z=S&1&&z,it=!Nr(T);let pt;if(it&&(pt=dt&&dt.onVnodeBeforeUnmount)&&en(pt,L,T),S&6)_t(T.component,U,$);else{if(S&128){T.suspense.unmount(U,$);return}Z&&ei(T,null,L,"beforeUnmount"),S&64?T.type.remove(T,L,U,j,gt,$):Q&&(ct!==rn||M>0&&M&64)?H(Q,L,U,!1,!0):(ct===rn&&M&384||!j&&S&16)&&H(ut,L,U),$&&ht(T)}(it&&(pt=dt&&dt.onVnodeUnmounted)||Z)&&we(()=>{pt&&en(pt,L,T),Z&&ei(T,null,L,"unmounted")},U)},ht=T=>{const{type:L,el:U,anchor:$,transition:j}=T;if(L===rn){at(U,$);return}if(L===vo){b(T);return}const ct=()=>{s(U),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(T.shapeFlag&1&&j&&!j.persisted){const{leave:dt,delayLeave:Y}=j,ut=()=>dt(U,ct);Y?Y(T.el,ct,ut):ut()}else ct()},at=(T,L)=>{let U;for(;T!==L;)U=f(T),s(T),T=U;s(L)},_t=(T,L,U)=>{const{bum:$,scope:j,update:ct,subTree:dt,um:Y}=T;$&&mo($),j.stop(),ct&&(ct.active=!1,ot(dt,T,L,U)),Y&&we(Y,L),we(()=>{T.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},H=(T,L,U,$=!1,j=!1,ct=0)=>{for(let dt=ct;dt<T.length;dt++)ot(T[dt],L,U,$,j)},St=T=>T.shapeFlag&6?St(T.component.subTree):T.shapeFlag&128?T.suspense.next():f(T.anchor||T.el),xt=(T,L,U)=>{T==null?L._vnode&&ot(L._vnode,null,null,!0):m(L._vnode||null,T,L,null,null,null,U),Sl(),qu(),L._vnode=T},gt={p:m,um:ot,m:et,r:ht,mt:N,mc:y,pc:W,pbc:R,n:St,o:i};let lt,Et;return t&&([lt,Et]=t(gt)),{render:xt,hydrate:lt,createApp:Id(xt,lt)}}function ni({effect:i,update:t},e){i.allowRecurse=t.allowRecurse=e}function hf(i,t,e=!1){const n=i.children,s=t.children;if(Ot(n)&&Ot(s))for(let r=0;r<n.length;r++){const a=n[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=Vn(s[r]),o.el=a.el),e||hf(a,o))}}function Od(i){const t=i.slice(),e=[0];let n,s,r,a,o;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(s=e[e.length-1],i[s]<c){t[n]=s,e.push(n);continue}for(r=0,a=e.length-1;r<a;)o=r+a>>1,i[e[o]]<c?r=o+1:a=o;c<i[e[r]]&&(r>0&&(t[n]=e[r-1]),e[r]=n)}}for(r=e.length,a=e[r-1];r-- >0;)e[r]=a,a=t[a];return e}const zd=i=>i.__isTeleport,rn=Symbol(void 0),nl=Symbol(void 0),An=Symbol(void 0),vo=Symbol(void 0);let Yi=null,il=1;function Il(i){il+=i}function Ud(i){return i?i.__v_isVNode===!0:!1}function ui(i,t){return i.type===t.type&&i.key===t.key}const so="__vInternal",df=({key:i})=>i!=null?i:null,Or=({ref:i,ref_key:t,ref_for:e})=>i!=null?fe(i)||ye(i)||Bt(i)?{i:un,r:i,k:t,f:!!e}:i:null;function Bd(i,t=null,e=null,n=0,s=null,r=i===rn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:t,key:t&&df(t),ref:t&&Or(t),scopeId:Yu,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null};return o?(sl(l,e),r&128&&i.normalize(l)):e&&(l.shapeFlag|=fe(e)?8:16),il>0&&!a&&Yi&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Yi.push(l),l}const _i=Vd;function Vd(i,t=null,e=null,n=0,s=null,r=!1){if((!i||i===yd)&&(i=An),Ud(i)){const o=Zn(i,t,!0);return e&&sl(o,e),il>0&&!r&&Yi&&(o.shapeFlag&6?Yi[Yi.indexOf(i)]=o:Yi.push(o)),o.patchFlag|=-2,o}if(Jd(i)&&(i=i.__vccOpts),t){t=kd(t);let{class:o,style:l}=t;o&&!fe(o)&&(t.class=Ua(o)),ne(l)&&(Vu(l)&&!Ot(l)&&(l=ge({},l)),t.style=za(l))}const a=fe(i)?1:id(i)?128:zd(i)?64:ne(i)?4:Bt(i)?2:0;return Bd(i,t,e,n,s,a,r,!0)}function kd(i){return i?Vu(i)||so in i?ge({},i):i:null}function Zn(i,t,e=!1){const{props:n,ref:s,patchFlag:r,children:a}=i,o=t?Gd(n||{},t):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:o,key:o&&df(o),ref:t&&t.ref?e&&s?Ot(s)?s.concat(Or(t)):[s,Or(t)]:Or(t):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:t&&i.type!==rn?r===-1?16:r|16:r,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Zn(i.ssContent),ssFallback:i.ssFallback&&Zn(i.ssFallback),el:i.el,anchor:i.anchor}}function Hd(i=" ",t=0){return _i(nl,null,i,t)}function on(i){return i==null||typeof i=="boolean"?_i(An):Ot(i)?_i(rn,null,i.slice()):typeof i=="object"?Vn(i):_i(nl,null,String(i))}function Vn(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Zn(i)}function sl(i,t){let e=0;const{shapeFlag:n}=i;if(t==null)t=null;else if(Ot(t))e=16;else if(typeof t=="object")if(n&65){const s=t.default;s&&(s._c&&(s._d=!1),sl(i,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!(so in t)?t._ctx=un:s===3&&un&&(un.slots._===1?t._=1:(t._=2,i.patchFlag|=1024))}else Bt(t)?(t={default:t,_ctx:un},e=32):(t=String(t),n&64?(e=16,t=[Hd(t)]):e=8);i.children=t,i.shapeFlag|=e}function Gd(...i){const t={};for(let e=0;e<i.length;e++){const n=i[e];for(const s in n)if(s==="class")t.class!==n.class&&(t.class=Ua([t.class,n.class]));else if(s==="style")t.style=za([t.style,n.style]);else if(Zr(s)){const r=t[s],a=n[s];a&&r!==a&&!(Ot(r)&&r.includes(a))&&(t[s]=r?[].concat(r,a):a)}else s!==""&&(t[s]=n[s])}return t}function en(i,t,e,n=null){Be(i,t,7,[e,n])}const Wd=ff();let Xd=0;function qd(i,t,e){const n=i.type,s=(t?t.appContext:i.appContext)||Wd,r={uid:Xd++,vnode:i,type:n,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new fh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:af(n,s),emitsOptions:ju(n,s),emit:null,emitted:null,propsDefaults:Zt,inheritAttrs:n.inheritAttrs,ctx:Zt,data:Zt,props:Zt,attrs:Zt,slots:Zt,refs:Zt,setupState:Zt,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Kh.bind(null,r),i.ce&&i.ce(r),r}let ue=null;const $d=()=>ue||un,rs=i=>{ue=i,i.scope.on()},xi=()=>{ue&&ue.scope.off(),ue=null};function pf(i){return i.vnode.shapeFlag&4}let Vs=!1;function jd(i,t=!1){Vs=t;const{props:e,children:n}=i.vnode,s=pf(i);Td(i,e,s,t),Pd(i,n);const r=s?Yd(i,t):void 0;return Vs=!1,r}function Yd(i,t){const e=i.type;i.accessCache=Object.create(null),i.proxy=ku(new Proxy(i.ctx,bd));const{setup:n}=e;if(n){const s=i.setupContext=n.length>1?Kd(i):null;rs(i),fs();const r=Xn(n,i,0,[i.props,s]);if(hs(),xi(),Eu(r)){if(r.then(xi,xi),t)return r.then(a=>{Fl(i,a,t)}).catch(a=>{to(a,i,0)});i.asyncDep=r}else Fl(i,r,t)}else mf(i,t)}function Fl(i,t,e){Bt(t)?i.type.__ssrInlineRender?i.ssrRender=t:i.render=t:ne(t)&&(i.setupState=Hu(t)),mf(i,e)}let Nl;function mf(i,t,e){const n=i.type;if(!i.render){if(!t&&Nl&&!n.render){const s=n.template||tl(i).template;if(s){const{isCustomElement:r,compilerOptions:a}=i.appContext.config,{delimiters:o,compilerOptions:l}=n,c=ge(ge({isCustomElement:r,delimiters:o},a),l);n.render=Nl(s,c)}}i.render=n.render||Ke}rs(i),fs(),Md(i),hs(),xi()}function Zd(i){return new Proxy(i.attrs,{get(t,e){return Pe(i,"get","$attrs"),t[e]}})}function Kd(i){const t=n=>{i.exposed=n||{}};let e;return{get attrs(){return e||(e=Zd(i))},slots:i.slots,emit:i.emit,expose:t}}function rl(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(Hu(ku(i.exposed)),{get(t,e){if(e in t)return t[e];if(e in Rs)return Rs[e](i)},has(t,e){return e in t||e in Rs}}))}function Jd(i){return Bt(i)&&"__vccOpts"in i}const Qd=(i,t)=>Wh(i,t,Vs),tp=Symbol(""),ep=()=>Fr(tp),np="3.2.44",ip="http://www.w3.org/2000/svg",fi=typeof document<"u"?document:null,Ol=fi&&fi.createElement("template"),sp={insert:(i,t,e)=>{t.insertBefore(i,e||null)},remove:i=>{const t=i.parentNode;t&&t.removeChild(i)},createElement:(i,t,e,n)=>{const s=t?fi.createElementNS(ip,i):fi.createElement(i,e?{is:e}:void 0);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>fi.createTextNode(i),createComment:i=>fi.createComment(i),setText:(i,t)=>{i.nodeValue=t},setElementText:(i,t)=>{i.textContent=t},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>fi.querySelector(i),setScopeId(i,t){i.setAttribute(t,"")},insertStaticContent(i,t,e,n,s,r){const a=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Ol.innerHTML=n?`<svg>${i}</svg>`:i;const o=Ol.content;if(n){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,e)}return[a?a.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}};function rp(i,t,e){const n=i._vtc;n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?i.removeAttribute("class"):e?i.setAttribute("class",t):i.className=t}function op(i,t,e){const n=i.style,s=fe(e);if(e&&!s){for(const r in e)ya(n,r,e[r]);if(t&&!fe(t))for(const r in t)e[r]==null&&ya(n,r,"")}else{const r=n.display;s?t!==e&&(n.cssText=e):t&&i.removeAttribute("style"),"_vod"in i&&(n.display=r)}}const zl=/\s*!important$/;function ya(i,t,e){if(Ot(e))e.forEach(n=>ya(i,t,n));else if(e==null&&(e=""),t.startsWith("--"))i.setProperty(t,e);else{const n=ap(i,t);zl.test(e)?i.setProperty(us(n),e.replace(zl,""),"important"):i[n]=e}}const Ul=["Webkit","Moz","ms"],yo={};function ap(i,t){const e=yo[t];if(e)return e;let n=ss(t);if(n!=="filter"&&n in i)return yo[t]=n;n=Tu(n);for(let s=0;s<Ul.length;s++){const r=Ul[s]+n;if(r in i)return yo[t]=r}return t}const Bl="http://www.w3.org/1999/xlink";function lp(i,t,e,n,s){if(n&&t.startsWith("xlink:"))e==null?i.removeAttributeNS(Bl,t.slice(6,t.length)):i.setAttributeNS(Bl,t,e);else{const r=th(t);e==null||r&&!Au(e)?i.removeAttribute(t):i.setAttribute(t,r?"":e)}}function cp(i,t,e,n,s,r,a){if(t==="innerHTML"||t==="textContent"){n&&a(n,s,r),i[t]=e==null?"":e;return}if(t==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=e;const l=e==null?"":e;(i.value!==l||i.tagName==="OPTION")&&(i.value=l),e==null&&i.removeAttribute(t);return}let o=!1;if(e===""||e==null){const l=typeof i[t];l==="boolean"?e=Au(e):e==null&&l==="string"?(e="",o=!0):l==="number"&&(e=0,o=!0)}try{i[t]=e}catch{}o&&i.removeAttribute(t)}function up(i,t,e,n){i.addEventListener(t,e,n)}function fp(i,t,e,n){i.removeEventListener(t,e,n)}function hp(i,t,e,n,s=null){const r=i._vei||(i._vei={}),a=r[t];if(n&&a)a.value=n;else{const[o,l]=dp(t);if(n){const c=r[t]=gp(n,s);up(i,o,c,l)}else a&&(fp(i,o,a,l),r[t]=void 0)}}const Vl=/(?:Once|Passive|Capture)$/;function dp(i){let t;if(Vl.test(i)){t={};let n;for(;n=i.match(Vl);)i=i.slice(0,i.length-n[0].length),t[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):us(i.slice(2)),t]}let bo=0;const pp=Promise.resolve(),mp=()=>bo||(pp.then(()=>bo=0),bo=Date.now());function gp(i,t){const e=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=e.attached)return;Be(_p(n,e.value),t,5,[n])};return e.value=i,e.attached=mp(),e}function _p(i,t){if(Ot(t)){const e=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{e.call(i),i._stopped=!0},t.map(n=>s=>!s._stopped&&n&&n(s))}else return t}const kl=/^on[a-z]/,xp=(i,t,e,n,s=!1,r,a,o,l)=>{t==="class"?rp(i,n,s):t==="style"?op(i,e,n):Zr(t)?Ba(t)||hp(i,t,e,n,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):vp(i,t,n,s))?cp(i,t,n,r,a,o,l):(t==="true-value"?i._trueValue=n:t==="false-value"&&(i._falseValue=n),lp(i,t,n,s))};function vp(i,t,e,n){return n?!!(t==="innerHTML"||t==="textContent"||t in i&&kl.test(t)&&Bt(e)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&i.tagName==="INPUT"||t==="type"&&i.tagName==="TEXTAREA"||kl.test(t)&&fe(e)?!1:t in i}const yp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};cd.props;const bp=ge({patchProp:xp},sp);let Hl;function Mp(){return Hl||(Hl=Fd(bp))}const wp=(...i)=>{const t=Mp().createApp(...i),{mount:e}=t;return t.mount=n=>{const s=Sp(n);if(!s)return;const r=t._component;!Bt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const a=e(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function Sp(i){return fe(i)?document.querySelector(i):i}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ol="146",kn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Hn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ap=0,Gl=1,Ep=2,gf=1,Tp=2,Es=3,Kn=0,Le=1,fn=2,qn=0,es=1,Wl=2,Xl=3,ql=4,Cp=5,$i=100,Lp=101,Pp=102,$l=103,jl=104,Dp=200,Rp=201,Ip=202,Fp=203,_f=204,xf=205,Np=206,Op=207,zp=208,Up=209,Bp=210,Vp=0,kp=1,Hp=2,ba=3,Gp=4,Wp=5,Xp=6,qp=7,vf=0,$p=1,jp=2,En=0,Yp=1,Zp=2,Kp=3,Jp=4,Qp=5,yf=300,os=301,as=302,Ma=303,wa=304,ro=306,Sa=1e3,$e=1001,Aa=1002,Se=1003,Yl=1004,Zl=1005,Ne=1006,tm=1007,oo=1008,bi=1009,em=1010,nm=1011,bf=1012,im=1013,di=1014,pi=1015,ks=1016,sm=1017,rm=1018,ns=1020,om=1021,am=1022,je=1023,lm=1024,cm=1025,vi=1026,ls=1027,um=1028,fm=1029,hm=1030,dm=1031,pm=1033,Mo=33776,wo=33777,So=33778,Ao=33779,Kl=35840,Jl=35841,Ql=35842,tc=35843,mm=36196,ec=37492,nc=37496,ic=37808,sc=37809,rc=37810,oc=37811,ac=37812,lc=37813,cc=37814,uc=37815,fc=37816,hc=37817,dc=37818,pc=37819,mc=37820,gc=37821,_c=36492,Mi=3e3,Jt=3001,gm=3200,_m=3201,xm=0,vm=1,wn="srgb",mi="srgb-linear",Eo=7680,ym=519,xc=35044,vc="300 es",Ea=1035;class Ei{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const de=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yc=1234567;const Is=Math.PI/180,Xr=180/Math.PI;function ds(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(de[i&255]+de[i>>8&255]+de[i>>16&255]+de[i>>24&255]+"-"+de[t&255]+de[t>>8&255]+"-"+de[t>>16&15|64]+de[t>>24&255]+"-"+de[e&63|128]+de[e>>8&255]+"-"+de[e>>16&255]+de[e>>24&255]+de[n&255]+de[n>>8&255]+de[n>>16&255]+de[n>>24&255]).toLowerCase()}function pe(i,t,e){return Math.max(t,Math.min(e,i))}function al(i,t){return(i%t+t)%t}function bm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Mm(i,t,e){return i!==t?(e-i)/(t-i):0}function Fs(i,t,e){return(1-e)*i+e*t}function wm(i,t,e,n){return Fs(i,t,1-Math.exp(-e*n))}function Sm(i,t=1){return t-Math.abs(al(i,t*2)-t)}function Am(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Em(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Tm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Cm(i,t){return i+Math.random()*(t-i)}function Lm(i){return i*(.5-Math.random())}function Pm(i){i!==void 0&&(yc=i);let t=yc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Dm(i){return i*Is}function Rm(i){return i*Xr}function Ta(i){return(i&i-1)===0&&i!==0}function Im(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function qr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Fm(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),h=r((t-n)/2),f=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*h,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ts(i,t){switch(t.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Me(i,t){switch(t.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Nm=Object.freeze({__proto__:null,DEG2RAD:Is,RAD2DEG:Xr,generateUUID:ds,clamp:pe,euclideanModulo:al,mapLinear:bm,inverseLerp:Mm,lerp:Fs,damp:wm,pingpong:Sm,smoothstep:Am,smootherstep:Em,randInt:Tm,randFloat:Cm,randFloatSpread:Lm,seededRandom:Pm,degToRad:Dm,radToDeg:Rm,isPowerOfTwo:Ta,ceilPowerOfTwo:Im,floorPowerOfTwo:qr,setQuaternionFromProperEuler:Fm,normalize:Me,denormalize:Ts});class Rt{constructor(t=0,e=0){Rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],m=s[0],d=s[3],_=s[6],w=s[1],x=s[4],b=s[7],v=s[2],A=s[5],P=s[8];return r[0]=a*m+o*w+l*v,r[3]=a*d+o*x+l*A,r[6]=a*_+o*b+l*P,r[1]=c*m+u*w+h*v,r[4]=c*d+u*x+h*A,r[7]=c*_+u*b+h*P,r[2]=f*m+p*w+g*v,r[5]=f*d+p*x+g*A,r[8]=f*_+p*b+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*r,p=c*r-a*l,g=e*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return t[0]=h*m,t[1]=(s*c-u*n)*m,t[2]=(o*n-s*a)*m,t[3]=f*m,t[4]=(u*e-s*l)*m,t[5]=(s*r-o*e)*m,t[6]=p*m,t[7]=(n*l-c*e)*m,t[8]=(a*e-n*r)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),s=this.elements,r=s[0],a=s[3],o=s[6],l=s[1],c=s[4],u=s[7];return s[0]=e*r+n*l,s[3]=e*a+n*c,s[6]=e*o+n*u,s[1]=-n*r+e*l,s[4]=-n*a+e*c,s[7]=-n*o+e*u,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function Mf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function $r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const To={[wn]:{[mi]:yi},[mi]:{[wn]:zr}},He={legacyMode:!0,get workingColorSpace(){return mi},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,t,e){if(this.legacyMode||t===e||!t||!e)return i;if(To[t]&&To[t][e]!==void 0){const n=To[t][e];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)}},wf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ie={r:0,g:0,b:0},Ge={h:0,s:0,l:0},er={h:0,s:0,l:0};function Co(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}function nr(i,t){return t.r=i.r,t.g=i.g,t.b=i.b,t}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,He.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=mi){return this.r=t,this.g=e,this.b=n,He.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=mi){if(t=al(t,1),e=pe(e,0,1),n=pe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Co(a,r,t+1/3),this.g=Co(a,r,t),this.b=Co(a,r,t-1/3)}return He.toWorkingColorSpace(this,s),this}setStyle(t,e=wn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,He.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,He.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,e)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,He.toWorkingColorSpace(this,e),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,He.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=wn){const n=wf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}copyLinearToSRGB(t){return this.r=zr(t.r),this.g=zr(t.g),this.b=zr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=wn){return He.fromWorkingColorSpace(nr(this,ie),t),pe(ie.r*255,0,255)<<16^pe(ie.g*255,0,255)<<8^pe(ie.b*255,0,255)<<0}getHexString(t=wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=mi){He.fromWorkingColorSpace(nr(this,ie),e);const n=ie.r,s=ie.g,r=ie.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=mi){return He.fromWorkingColorSpace(nr(this,ie),e),t.r=ie.r,t.g=ie.g,t.b=ie.b,t}getStyle(t=wn){return He.fromWorkingColorSpace(nr(this,ie),t),t!==wn?`color(${t} ${ie.r} ${ie.g} ${ie.b})`:`rgb(${ie.r*255|0},${ie.g*255|0},${ie.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(Ge),Ge.h+=t,Ge.s+=e,Ge.l+=n,this.setHSL(Ge.h,Ge.s,Ge.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ge),t.getHSL(er);const n=Fs(Ge.h,er.h,e),s=Fs(Ge.s,er.s,e),r=Fs(Ge.l,er.l,e);return this.setHSL(n,s,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Gt.NAMES=wf;let Di;class Sf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Di===void 0&&(Di=$r("canvas")),Di.width=t.width,Di.height=t.height;const n=Di.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Di}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$r("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=yi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yi(e[n]/255)*255):e[n]=yi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Af{constructor(t=null){this.isSource=!0,this.uuid=ds(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Lo(s[a].image)):r.push(Lo(s[a]))}else r=Lo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Lo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Sf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Om=0;class Qe extends Ei{constructor(t=Qe.DEFAULT_IMAGE,e=Qe.DEFAULT_MAPPING,n=$e,s=$e,r=Ne,a=oo,o=je,l=bi,c=1,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=ds(),this.name="",this.source=new Af(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sa:t.x=t.x-Math.floor(t.x);break;case $e:t.x=t.x<0?0:1;break;case Aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sa:t.y=t.y-Math.floor(t.y);break;case $e:t.y=t.y<0?0:1;break;case Aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=yf;class ce{constructor(t=0,e=0,n=0,s=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],m=l[2],d=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(g+d)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,b=(p+1)/2,v=(_+1)/2,A=(u+f)/4,P=(h+m)/4,y=(g+d)/4;return x>b&&x>v?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=A/n,r=P/n):b>v?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=A/s,r=y/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=P/r,s=y/r),this.set(n,s,r,e),this}let w=Math.sqrt((d-g)*(d-g)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(d-g)/w,this.y=(h-m)/w,this.z=(f-u)/w,this.w=Math.acos((c+p+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wi extends Ei{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const s={width:t,height:e,depth:1};this.texture=new Qe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ne,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Af(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ef extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Se,this.minFilter=Se,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zm extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Se,this.minFilter=Se,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Si{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[a+0],p=r[a+1],g=r[a+2],m=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=m;return}if(h!==m||l!==f||c!==p||u!==g){let d=1-o;const _=l*f+c*p+u*g+h*m,w=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const v=Math.sqrt(x),A=Math.atan2(v,_*w);d=Math.sin(d*A)/v,o=Math.sin(o*A)/v}const b=o*w;if(l=l*d+f*b,c=c*d+p*b,u=u*d+g*b,h=h*d+m*b,d===1-o){const v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+u*h+l*p-c*f,t[e+1]=l*g+u*f+c*h-o*p,t[e+2]=c*g+u*p+o*f-l*h,t[e+3]=u*g-o*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=l*e+a*s-o*n,u=l*n+o*e-r*s,h=l*s+r*n-a*e,f=-r*e-a*n-o*s;return this.x=c*l+f*-r+u*-o-h*-a,this.y=u*l+f*-a+h*-r-c*-o,this.z=h*l+f*-o+c*-a-u*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Po.copy(this).projectOnVector(t),this.sub(Po)}reflect(t){return this.sub(Po.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Po=new I,bc=new Si;class Ve{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,s=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=t.length;l<c;l+=3){const u=t[l],h=t[l+1],f=t[l+2];u<e&&(e=u),h<n&&(n=h),f<s&&(s=f),u>r&&(r=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(e,n,s),this.max.set(r,a,o),this}setFromBufferAttribute(t){let e=1/0,n=1/0,s=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=t.count;l<c;l++){const u=t.getX(l),h=t.getY(l),f=t.getZ(l);u<e&&(e=u),h<n&&(n=h),f<s&&(s=f),u>r&&(r=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(e,n,s),this.max.set(r,a,o),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ii.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,o=r.count;a<o;a++)ii.fromBufferAttribute(r,a).applyMatrix4(t.matrixWorld),this.expandByPoint(ii)}else n.boundingBox===null&&n.computeBoundingBox(),Do.copy(n.boundingBox),Do.applyMatrix4(t.matrixWorld),this.union(Do);const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ii),ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xs),ir.subVectors(this.max,xs),Ri.subVectors(t.a,xs),Ii.subVectors(t.b,xs),Fi.subVectors(t.c,xs),Rn.subVectors(Ii,Ri),In.subVectors(Fi,Ii),si.subVectors(Ri,Fi);let e=[0,-Rn.z,Rn.y,0,-In.z,In.y,0,-si.z,si.y,Rn.z,0,-Rn.x,In.z,0,-In.x,si.z,0,-si.x,-Rn.y,Rn.x,0,-In.y,In.x,0,-si.y,si.x,0];return!Ro(e,Ri,Ii,Fi,ir)||(e=[1,0,0,0,1,0,0,0,1],!Ro(e,Ri,Ii,Fi,ir))?!1:(sr.crossVectors(Rn,In),e=[sr.x,sr.y,sr.z],Ro(e,Ri,Ii,Fi,ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return ii.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(ii).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const gn=[new I,new I,new I,new I,new I,new I,new I,new I],ii=new I,Do=new Ve,Ri=new I,Ii=new I,Fi=new I,Rn=new I,In=new I,si=new I,xs=new I,ir=new I,sr=new I,ri=new I;function Ro(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ri.fromArray(i,r);const o=s.x*Math.abs(ri.x)+s.y*Math.abs(ri.y)+s.z*Math.abs(ri.z),l=t.dot(ri),c=e.dot(ri),u=n.dot(ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Um=new Ve,vs=new I,Io=new I;class ps{constructor(t=new I,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Um.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);const e=vs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(vs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Io.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(Io)),this.expandByPoint(vs.copy(t.center).sub(Io))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new I,Fo=new I,rr=new I,Fn=new I,No=new I,or=new I,Oo=new I;class ao{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_n.copy(this.direction).multiplyScalar(e).add(this.origin),_n.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Fo.copy(t).add(e).multiplyScalar(.5),rr.copy(e).sub(t).normalize(),Fn.copy(this.origin).sub(Fo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(rr),o=Fn.dot(this.direction),l=-Fn.dot(rr),c=Fn.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*l-o,f=a*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const m=1/u;h*=m,f*=m,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),s&&s.copy(rr).multiplyScalar(f).add(Fo),p}intersectSphere(t,e){_n.subVectors(t.center,this.origin);const n=_n.dot(this.direction),s=_n.dot(_n)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,_n)!==null}intersectTriangle(t,e,n,s,r){No.subVectors(e,t),or.subVectors(n,t),Oo.crossVectors(No,or);let a=this.direction.dot(Oo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fn.subVectors(this.origin,t);const l=o*this.direction.dot(or.crossVectors(Fn,or));if(l<0)return null;const c=o*this.direction.dot(No.cross(Fn));if(c<0||l+c>a)return null;const u=-o*Fn.dot(Oo);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,s,r,a,o,l,c,u,h,f,p,g,m,d){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=s,_[1]=r,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=p,_[7]=g,_[11]=m,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ni.setFromMatrixColumn(t,0).length(),r=1/Ni.setFromMatrixColumn(t,1).length(),a=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*u,p=a*h,g=o*u,m=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=f-m*c,e[9]=-o*l,e[2]=m-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,p=l*h,g=c*u,m=c*h;e[0]=f+m*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=m+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,p=l*h,g=c*u,m=c*h;e[0]=f-m*o,e[4]=-a*h,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=m-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,p=a*h,g=o*u,m=o*h;e[0]=l*u,e[4]=g*c-p,e[8]=f*c+m,e[1]=l*h,e[5]=m*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,g=o*l,m=o*c;e[0]=l*u,e[4]=m-f*h,e[8]=g*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*h+g,e[10]=f-m*h}else if(t.order==="XZY"){const f=a*l,p=a*c,g=o*l,m=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+m,e[5]=a*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=o*u,e[10]=m*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bm,t,Vm)}lookAt(t,e,n){const s=this.elements;return Te.subVectors(t,e),Te.lengthSq()===0&&(Te.z=1),Te.normalize(),Nn.crossVectors(n,Te),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Te.x+=1e-4:Te.z+=1e-4,Te.normalize(),Nn.crossVectors(n,Te)),Nn.normalize(),ar.crossVectors(Te,Nn),s[0]=Nn.x,s[4]=ar.x,s[8]=Te.x,s[1]=Nn.y,s[5]=ar.y,s[9]=Te.y,s[2]=Nn.z,s[6]=ar.z,s[10]=Te.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],m=n[6],d=n[10],_=n[14],w=n[3],x=n[7],b=n[11],v=n[15],A=s[0],P=s[4],y=s[8],E=s[12],R=s[1],X=s[5],tt=s[9],F=s[13],N=s[2],K=s[6],nt=s[10],J=s[14],W=s[3],k=s[7],B=s[11],et=s[15];return r[0]=a*A+o*R+l*N+c*W,r[4]=a*P+o*X+l*K+c*k,r[8]=a*y+o*tt+l*nt+c*B,r[12]=a*E+o*F+l*J+c*et,r[1]=u*A+h*R+f*N+p*W,r[5]=u*P+h*X+f*K+p*k,r[9]=u*y+h*tt+f*nt+p*B,r[13]=u*E+h*F+f*J+p*et,r[2]=g*A+m*R+d*N+_*W,r[6]=g*P+m*X+d*K+_*k,r[10]=g*y+m*tt+d*nt+_*B,r[14]=g*E+m*F+d*J+_*et,r[3]=w*A+x*R+b*N+v*W,r[7]=w*P+x*X+b*K+v*k,r[11]=w*y+x*tt+b*nt+v*B,r[15]=w*E+x*F+b*J+v*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],m=t[7],d=t[11],_=t[15];return g*(+r*l*h-s*c*h-r*o*f+n*c*f+s*o*p-n*l*p)+m*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*u-r*l*u)+d*(+e*c*h-e*o*p-r*a*h+n*a*p+r*o*u-n*c*u)+_*(-s*o*u-e*l*h+e*o*f+s*a*h-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],m=t[13],d=t[14],_=t[15],w=h*d*c-m*f*c+m*l*p-o*d*p-h*l*_+o*f*_,x=g*f*c-u*d*c-g*l*p+a*d*p+u*l*_-a*f*_,b=u*m*c-g*h*c+g*o*p-a*m*p-u*o*_+a*h*_,v=g*h*l-u*m*l-g*o*f+a*m*f+u*o*d-a*h*d,A=e*w+n*x+s*b+r*v;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return t[0]=w*P,t[1]=(m*f*r-h*d*r-m*s*p+n*d*p+h*s*_-n*f*_)*P,t[2]=(o*d*r-m*l*r+m*s*c-n*d*c-o*s*_+n*l*_)*P,t[3]=(h*l*r-o*f*r-h*s*c+n*f*c+o*s*p-n*l*p)*P,t[4]=x*P,t[5]=(u*d*r-g*f*r+g*s*p-e*d*p-u*s*_+e*f*_)*P,t[6]=(g*l*r-a*d*r-g*s*c+e*d*c+a*s*_-e*l*_)*P,t[7]=(a*f*r-u*l*r+u*s*c-e*f*c-a*s*p+e*l*p)*P,t[8]=b*P,t[9]=(g*h*r-u*m*r-g*n*p+e*m*p+u*n*_-e*h*_)*P,t[10]=(a*m*r-g*o*r+g*n*c-e*m*c-a*n*_+e*o*_)*P,t[11]=(u*o*r-a*h*r-u*n*c+e*h*c+a*n*p-e*o*p)*P,t[12]=v*P,t[13]=(u*m*s-g*h*s+g*n*f-e*m*f-u*n*d+e*h*d)*P,t[14]=(g*o*s-a*m*s-g*n*l+e*m*l+a*n*d-e*o*d)*P,t[15]=(a*h*s-u*o*s+u*n*l-e*h*l-a*n*f+e*o*f)*P,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,f=r*c,p=r*u,g=r*h,m=a*u,d=a*h,_=o*h,w=l*c,x=l*u,b=l*h,v=n.x,A=n.y,P=n.z;return s[0]=(1-(m+_))*v,s[1]=(p+b)*v,s[2]=(g-x)*v,s[3]=0,s[4]=(p-b)*A,s[5]=(1-(f+_))*A,s[6]=(d+w)*A,s[7]=0,s[8]=(g+x)*P,s[9]=(d-w)*P,s[10]=(1-(f+m))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ni.set(s[0],s[1],s[2]).length();const a=Ni.set(s[4],s[5],s[6]).length(),o=Ni.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],We.copy(this);const c=1/r,u=1/a,h=1/o;return We.elements[0]*=c,We.elements[1]*=c,We.elements[2]*=c,We.elements[4]*=u,We.elements[5]*=u,We.elements[6]*=u,We.elements[8]*=h,We.elements[9]*=h,We.elements[10]*=h,e.setFromRotationMatrix(We),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a){const o=this.elements,l=2*r/(e-t),c=2*r/(n-s),u=(e+t)/(e-t),h=(n+s)/(n-s),f=-(a+r)/(a-r),p=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,s,r,a){const o=this.elements,l=1/(e-t),c=1/(n-s),u=1/(a-r),h=(e+t)*l,f=(n+s)*c,p=(a+r)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ni=new I,We=new Yt,Bm=new I(0,0,0),Vm=new I(1,1,1),Nn=new I,ar=new I,Te=new I,Mc=new Yt,wc=new Si;class $s{constructor(t=0,e=0,n=0,s=$s.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(pe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Mc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wc.setFromEuler(this),this.setFromQuaternion(wc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}$s.DefaultOrder="XYZ";$s.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Tf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let km=0;const Sc=new I,Oi=new Si,xn=new Yt,lr=new I,ys=new I,Hm=new I,Gm=new Si,Ac=new I(1,0,0),Ec=new I(0,1,0),Tc=new I(0,0,1),Wm={type:"added"},Cc={type:"removed"};class se extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=se.DefaultUp.clone();const t=new I,e=new $s,n=new Si,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Ue}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=se.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=se.DefaultMatrixWorldAutoUpdate,this.layers=new Tf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(Ac,t)}rotateY(t){return this.rotateOnAxis(Ec,t)}rotateZ(t){return this.rotateOnAxis(Tc,t)}translateOnAxis(t,e){return Sc.copy(t).applyQuaternion(this.quaternion),this.position.add(Sc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ac,t)}translateY(t){return this.translateOnAxis(Ec,t)}translateZ(t){return this.translateOnAxis(Tc,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lr.copy(t):lr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(ys,lr,this.up):xn.lookAt(lr,ys,this.up),this.quaternion.setFromRotationMatrix(xn),s&&(xn.extractRotation(s.matrixWorld),Oi.setFromRotationMatrix(xn),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Wm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Cc)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(xn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,t,Hm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,Gm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}se.DefaultUp=new I(0,1,0);se.DefaultMatrixAutoUpdate=!0;se.DefaultMatrixWorldAutoUpdate=!0;const Xe=new I,vn=new I,zo=new I,yn=new I,zi=new I,Ui=new I,Lc=new I,Uo=new I,Bo=new I,Vo=new I;class ze{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Xe.subVectors(t,e),s.cross(Xe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Xe.subVectors(s,e),vn.subVectors(n,e),zo.subVectors(t,e);const a=Xe.dot(Xe),o=Xe.dot(vn),l=Xe.dot(zo),c=vn.dot(vn),u=vn.dot(zo),h=a*c-o*o;if(h===0)return r.set(-2,-1,-1);const f=1/h,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,yn),yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getUV(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,yn),l.set(0,0),l.addScaledVector(r,yn.x),l.addScaledVector(a,yn.y),l.addScaledVector(o,yn.z),l}static isFrontFacing(t,e,n,s){return Xe.subVectors(n,e),vn.subVectors(t,e),Xe.cross(vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xe.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),Xe.cross(vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ze.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return ze.getUV(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;zi.subVectors(s,n),Ui.subVectors(r,n),Uo.subVectors(t,n);const l=zi.dot(Uo),c=Ui.dot(Uo);if(l<=0&&c<=0)return e.copy(n);Bo.subVectors(t,s);const u=zi.dot(Bo),h=Ui.dot(Bo);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(zi,a);Vo.subVectors(t,r);const p=zi.dot(Vo),g=Ui.dot(Vo);if(g>=0&&p<=g)return e.copy(r);const m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ui,o);const d=u*g-p*h;if(d<=0&&h-u>=0&&p-g>=0)return Lc.subVectors(r,s),o=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(Lc,o);const _=1/(d+m+f);return a=m*_,o=f*_,e.copy(n).addScaledVector(zi,a).addScaledVector(Ui,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Xm=0;class Ti extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=ds(),this.name="",this.type="Material",this.blending=es,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=_f,this.blendDst=xf,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ym,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eo,this.stencilZFail=Eo,this.stencilZPass=Eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const s=this[e];if(s===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Hs extends Ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ee=new I,cr=new Rt;class Ae{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=xc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)cr.fromBufferAttribute(this,e),cr.applyMatrix3(t),this.setXY(e,cr.x,cr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.applyMatrix3(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.applyMatrix4(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.applyNormalMatrix(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.transformDirection(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ts(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ts(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ts(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ts(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xc&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Cf extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Lf extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class be extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}}let qm=0;const Fe=new Yt,ko=new se,Bi=new I,Ce=new Ve,bs=new Ve,le=new I;class ke extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mf(t)?Lf:Cf)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ue().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fe.makeRotationFromQuaternion(t),this.applyMatrix4(Fe),this}rotateX(t){return Fe.makeRotationX(t),this.applyMatrix4(Fe),this}rotateY(t){return Fe.makeRotationY(t),this.applyMatrix4(Fe),this}rotateZ(t){return Fe.makeRotationZ(t),this.applyMatrix4(Fe),this}translate(t,e,n){return Fe.makeTranslation(t,e,n),this.applyMatrix4(Fe),this}scale(t,e,n){return Fe.makeScale(t,e,n),this.applyMatrix4(Fe),this}lookAt(t){return ko.lookAt(t),ko.updateMatrix(),this.applyMatrix4(ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new be(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ve);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ce.setFromBufferAttribute(r),this.morphTargetsRelative?(le.addVectors(this.boundingBox.min,Ce.min),this.boundingBox.expandByPoint(le),le.addVectors(this.boundingBox.max,Ce.max),this.boundingBox.expandByPoint(le)):(this.boundingBox.expandByPoint(Ce.min),this.boundingBox.expandByPoint(Ce.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Ce.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];bs.setFromBufferAttribute(o),this.morphTargetsRelative?(le.addVectors(Ce.min,bs.min),Ce.expandByPoint(le),le.addVectors(Ce.max,bs.max),Ce.expandByPoint(le)):(Ce.expandByPoint(bs.min),Ce.expandByPoint(bs.max))}Ce.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(le));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)le.fromBufferAttribute(o,c),l&&(Bi.fromBufferAttribute(t,c),le.add(Bi)),s=Math.max(s,n.distanceToSquared(le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ae(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<o;R++)c[R]=new I,u[R]=new I;const h=new I,f=new I,p=new I,g=new Rt,m=new Rt,d=new Rt,_=new I,w=new I;function x(R,X,tt){h.fromArray(s,R*3),f.fromArray(s,X*3),p.fromArray(s,tt*3),g.fromArray(a,R*2),m.fromArray(a,X*2),d.fromArray(a,tt*2),f.sub(h),p.sub(h),m.sub(g),d.sub(g);const F=1/(m.x*d.y-d.x*m.y);!isFinite(F)||(_.copy(f).multiplyScalar(d.y).addScaledVector(p,-m.y).multiplyScalar(F),w.copy(p).multiplyScalar(m.x).addScaledVector(f,-d.x).multiplyScalar(F),c[R].add(_),c[X].add(_),c[tt].add(_),u[R].add(w),u[X].add(w),u[tt].add(w))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let R=0,X=b.length;R<X;++R){const tt=b[R],F=tt.start,N=tt.count;for(let K=F,nt=F+N;K<nt;K+=3)x(n[K+0],n[K+1],n[K+2])}const v=new I,A=new I,P=new I,y=new I;function E(R){P.fromArray(r,R*3),y.copy(P);const X=c[R];v.copy(X),v.sub(P.multiplyScalar(P.dot(X))).normalize(),A.crossVectors(y,X);const F=A.dot(u[R])<0?-1:1;l[R*4]=v.x,l[R*4+1]=v.y,l[R*4+2]=v.z,l[R*4+3]=F}for(let R=0,X=b.length;R<X;++R){const tt=b[R],F=tt.start,N=tt.count;for(let K=F,nt=F+N;K<nt;K+=3)E(n[K+0]),E(n[K+1]),E(n[K+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,h=new I;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),m=t.getX(f+1),d=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,m),a.fromBufferAttribute(e,d),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,d),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)le.fromBufferAttribute(t,e),le.normalize(),t.setXYZ(e,le.x,le.y,le.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let m=0,d=l.length;m<d;m++){o.isInterleavedBufferAttribute?p=l[m]*o.data.stride+o.offset:p=l[m]*u;for(let _=0;_<u;_++)f[g++]=c[p++]}return new Ae(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ke,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pc=new Yt,Vi=new ao,Ho=new ps,On=new I,zn=new I,Un=new I,Go=new I,Wo=new I,Xo=new I,ur=new I,fr=new I,hr=new I,dr=new Rt,pr=new Rt,mr=new Rt,qo=new I,gr=new I;class Ze extends se{constructor(t=new ke,e=new Hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(r),t.ray.intersectsSphere(Ho)===!1)||(Pc.copy(r).invert(),Vi.copy(t.ray).applyMatrix4(Pc),n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,p=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,d=p.length;m<d;m++){const _=p[m],w=s[_.materialIndex],x=Math.max(_.start,g.start),b=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let v=x,A=b;v<A;v+=3){const P=o.getX(v),y=o.getX(v+1),E=o.getX(v+2);a=_r(this,w,t,Vi,l,c,u,h,f,P,y,E),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=_.materialIndex,e.push(a))}}else{const m=Math.max(0,g.start),d=Math.min(o.count,g.start+g.count);for(let _=m,w=d;_<w;_+=3){const x=o.getX(_),b=o.getX(_+1),v=o.getX(_+2);a=_r(this,s,t,Vi,l,c,u,h,f,x,b,v),a&&(a.faceIndex=Math.floor(_/3),e.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,d=p.length;m<d;m++){const _=p[m],w=s[_.materialIndex],x=Math.max(_.start,g.start),b=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let v=x,A=b;v<A;v+=3){const P=v,y=v+1,E=v+2;a=_r(this,w,t,Vi,l,c,u,h,f,P,y,E),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=_.materialIndex,e.push(a))}}else{const m=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let _=m,w=d;_<w;_+=3){const x=_,b=_+1,v=_+2;a=_r(this,s,t,Vi,l,c,u,h,f,x,b,v),a&&(a.faceIndex=Math.floor(_/3),e.push(a))}}}}function $m(i,t,e,n,s,r,a,o){let l;if(t.side===Le?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side!==fn,o),l===null)return null;gr.copy(o),gr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(gr);return c<e.near||c>e.far?null:{distance:c,point:gr.clone(),object:i}}function _r(i,t,e,n,s,r,a,o,l,c,u,h){On.fromBufferAttribute(s,c),zn.fromBufferAttribute(s,u),Un.fromBufferAttribute(s,h);const f=i.morphTargetInfluences;if(r&&f){ur.set(0,0,0),fr.set(0,0,0),hr.set(0,0,0);for(let g=0,m=r.length;g<m;g++){const d=f[g],_=r[g];d!==0&&(Go.fromBufferAttribute(_,c),Wo.fromBufferAttribute(_,u),Xo.fromBufferAttribute(_,h),a?(ur.addScaledVector(Go,d),fr.addScaledVector(Wo,d),hr.addScaledVector(Xo,d)):(ur.addScaledVector(Go.sub(On),d),fr.addScaledVector(Wo.sub(zn),d),hr.addScaledVector(Xo.sub(Un),d)))}On.add(ur),zn.add(fr),Un.add(hr)}i.isSkinnedMesh&&(i.boneTransform(c,On),i.boneTransform(u,zn),i.boneTransform(h,Un));const p=$m(i,t,e,n,On,zn,Un,qo);if(p){o&&(dr.fromBufferAttribute(o,c),pr.fromBufferAttribute(o,u),mr.fromBufferAttribute(o,h),p.uv=ze.getUV(qo,On,zn,Un,dr,pr,mr,new Rt)),l&&(dr.fromBufferAttribute(l,c),pr.fromBufferAttribute(l,u),mr.fromBufferAttribute(l,h),p.uv2=ze.getUV(qo,On,zn,Un,dr,pr,mr,new Rt));const g={a:c,b:u,c:h,normal:new I,materialIndex:0};ze.getNormal(On,zn,Un,g.normal),p.face=g}return p}class js extends ke{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(u,3)),this.setAttribute("uv",new be(h,2));function g(m,d,_,w,x,b,v,A,P,y,E){const R=b/P,X=v/y,tt=b/2,F=v/2,N=A/2,K=P+1,nt=y+1;let J=0,W=0;const k=new I;for(let B=0;B<nt;B++){const et=B*X-F;for(let ot=0;ot<K;ot++){const ht=ot*R-tt;k[m]=ht*w,k[d]=et*x,k[_]=N,c.push(k.x,k.y,k.z),k[m]=0,k[d]=0,k[_]=A>0?1:-1,u.push(k.x,k.y,k.z),h.push(ot/P),h.push(1-B/y),J+=1}}for(let B=0;B<y;B++)for(let et=0;et<P;et++){const ot=f+et+K*B,ht=f+et+K*(B+1),at=f+(et+1)+K*(B+1),_t=f+(et+1)+K*B;l.push(ot,ht,_t),l.push(ht,at,_t),W+=6}o.addGroup(p,W,E),p+=W,f+=J}}static fromJSON(t){return new js(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function cs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ve(i){const t={};for(let e=0;e<i.length;e++){const n=cs(i[e]);for(const s in n)t[s]=n[s]}return t}function jm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}const Ym={clone:cs,merge:ve};var Zm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Km=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends Ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zm,this.fragmentShader=Km,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=jm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Pf extends se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Oe extends Pf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Xr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Is*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(Is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Is*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ki=90,Hi=1;class Jm extends se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const s=new Oe(ki,Hi,t,e);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new I(1,0,0)),this.add(s);const r=new Oe(ki,Hi,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new I(-1,0,0)),this.add(r);const a=new Oe(ki,Hi,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new I(0,1,0)),this.add(a);const o=new Oe(ki,Hi,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new I(0,-1,0)),this.add(o);const l=new Oe(ki,Hi,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new I(0,0,1)),this.add(l);const c=new Oe(ki,Hi,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new I(0,0,-1)),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,r,a,o,l,c]=this.children,u=t.getRenderTarget(),h=t.toneMapping,f=t.xr.enabled;t.toneMapping=En,t.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,s),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=p,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Df extends Qe{constructor(t,e,n,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:os,super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qm extends wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Df(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ne}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new js(5,5,5),r=new Ai({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:qn});r.uniforms.tEquirect.value=e;const a=new Ze(s,r),o=e.minFilter;return e.minFilter===oo&&(e.minFilter=Ne),new Jm(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const $o=new I,tg=new I,eg=new Ue;class Sn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=$o.subVectors(n,e).cross(tg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta($o),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||eg.getNormalMatrix(t),s=this.coplanarPoint($o).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new ps,xr=new I;class ll{constructor(t=new Sn,e=new Sn,n=new Sn,s=new Sn,r=new Sn,a=new Sn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,s=n[0],r=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],p=n[9],g=n[10],m=n[11],d=n[12],_=n[13],w=n[14],x=n[15];return e[0].setComponents(o-s,h-l,m-f,x-d).normalize(),e[1].setComponents(o+s,h+l,m+f,x+d).normalize(),e[2].setComponents(o+r,h+c,m+p,x+_).normalize(),e[3].setComponents(o-r,h-c,m-p,x-_).normalize(),e[4].setComponents(o-a,h-u,m-g,x-w).normalize(),e[5].setComponents(o+a,h+u,m+g,x+w).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSprite(t){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(xr.x=s.normal.x>0?t.max.x:t.min.x,xr.y=s.normal.y>0?t.max.y:t.min.y,xr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rf(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ng(i,t){const e=t.isWebGL2,n=new WeakMap;function s(c,u){const h=c.array,f=c.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,p=u.updateRange;i.bindBuffer(h,c),p.count===-1?i.bufferSubData(h,0,f):(e?i.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,s(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class lo extends ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=t/o,f=e/l,p=[],g=[],m=[],d=[];for(let _=0;_<u;_++){const w=_*f-a;for(let x=0;x<c;x++){const b=x*h-r;g.push(b,-w,0),m.push(0,0,1),d.push(x/o),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let w=0;w<o;w++){const x=w+c*_,b=w+c*(_+1),v=w+1+c*(_+1),A=w+1+c*_;p.push(x,b,A),p.push(b,v,A)}this.setIndex(p),this.setAttribute("position",new be(g,3)),this.setAttribute("normal",new be(m,3)),this.setAttribute("uv",new be(d,2))}static fromJSON(t){return new lo(t.width,t.height,t.widthSegments,t.heightSegments)}}var ig=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,sg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,og=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ag=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cg="vec3 transformed = vec3( position );",ug=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fg=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,hg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Mg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,wg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ag=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Tg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Rg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ig=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ng=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Og=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ug=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Hg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,Xg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qg=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,$g=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Yg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Kg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Jg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,t_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,e_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,n_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,r_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,o_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,c_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,h_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,d_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,p_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,m_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,g_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,__=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,x_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,b_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,M_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,w_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,S_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,A_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,C_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,P_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,D_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,F_=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,N_=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,O_=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,z_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,U_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,B_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,V_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,H_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,X_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,q_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,$_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,j_=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Y_=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Z_=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,K_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,J_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Q_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,tx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ex=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nx=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ox=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ax=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,cx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ux=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,dx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,px=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mx=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_x=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ax=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ex=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Px=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ix=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Nt={alphamap_fragment:ig,alphamap_pars_fragment:sg,alphatest_fragment:rg,alphatest_pars_fragment:og,aomap_fragment:ag,aomap_pars_fragment:lg,begin_vertex:cg,beginnormal_vertex:ug,bsdfs:fg,iridescence_fragment:hg,bumpmap_pars_fragment:dg,clipping_planes_fragment:pg,clipping_planes_pars_fragment:mg,clipping_planes_pars_vertex:gg,clipping_planes_vertex:_g,color_fragment:xg,color_pars_fragment:vg,color_pars_vertex:yg,color_vertex:bg,common:Mg,cube_uv_reflection_fragment:wg,defaultnormal_vertex:Sg,displacementmap_pars_vertex:Ag,displacementmap_vertex:Eg,emissivemap_fragment:Tg,emissivemap_pars_fragment:Cg,encodings_fragment:Lg,encodings_pars_fragment:Pg,envmap_fragment:Dg,envmap_common_pars_fragment:Rg,envmap_pars_fragment:Ig,envmap_pars_vertex:Fg,envmap_physical_pars_fragment:qg,envmap_vertex:Ng,fog_vertex:Og,fog_pars_vertex:zg,fog_fragment:Ug,fog_pars_fragment:Bg,gradientmap_pars_fragment:Vg,lightmap_fragment:kg,lightmap_pars_fragment:Hg,lights_lambert_fragment:Gg,lights_lambert_pars_fragment:Wg,lights_pars_begin:Xg,lights_toon_fragment:$g,lights_toon_pars_fragment:jg,lights_phong_fragment:Yg,lights_phong_pars_fragment:Zg,lights_physical_fragment:Kg,lights_physical_pars_fragment:Jg,lights_fragment_begin:Qg,lights_fragment_maps:t_,lights_fragment_end:e_,logdepthbuf_fragment:n_,logdepthbuf_pars_fragment:i_,logdepthbuf_pars_vertex:s_,logdepthbuf_vertex:r_,map_fragment:o_,map_pars_fragment:a_,map_particle_fragment:l_,map_particle_pars_fragment:c_,metalnessmap_fragment:u_,metalnessmap_pars_fragment:f_,morphcolor_vertex:h_,morphnormal_vertex:d_,morphtarget_pars_vertex:p_,morphtarget_vertex:m_,normal_fragment_begin:g_,normal_fragment_maps:__,normal_pars_fragment:x_,normal_pars_vertex:v_,normal_vertex:y_,normalmap_pars_fragment:b_,clearcoat_normal_fragment_begin:M_,clearcoat_normal_fragment_maps:w_,clearcoat_pars_fragment:S_,iridescence_pars_fragment:A_,output_fragment:E_,packing:T_,premultiplied_alpha_fragment:C_,project_vertex:L_,dithering_fragment:P_,dithering_pars_fragment:D_,roughnessmap_fragment:R_,roughnessmap_pars_fragment:I_,shadowmap_pars_fragment:F_,shadowmap_pars_vertex:N_,shadowmap_vertex:O_,shadowmask_pars_fragment:z_,skinbase_vertex:U_,skinning_pars_vertex:B_,skinning_vertex:V_,skinnormal_vertex:k_,specularmap_fragment:H_,specularmap_pars_fragment:G_,tonemapping_fragment:W_,tonemapping_pars_fragment:X_,transmission_fragment:q_,transmission_pars_fragment:$_,uv_pars_fragment:j_,uv_pars_vertex:Y_,uv_vertex:Z_,uv2_pars_fragment:K_,uv2_pars_vertex:J_,uv2_vertex:Q_,worldpos_vertex:tx,background_vert:ex,background_frag:nx,backgroundCube_vert:ix,backgroundCube_frag:sx,cube_vert:rx,cube_frag:ox,depth_vert:ax,depth_frag:lx,distanceRGBA_vert:cx,distanceRGBA_frag:ux,equirect_vert:fx,equirect_frag:hx,linedashed_vert:dx,linedashed_frag:px,meshbasic_vert:mx,meshbasic_frag:gx,meshlambert_vert:_x,meshlambert_frag:xx,meshmatcap_vert:vx,meshmatcap_frag:yx,meshnormal_vert:bx,meshnormal_frag:Mx,meshphong_vert:wx,meshphong_frag:Sx,meshphysical_vert:Ax,meshphysical_frag:Ex,meshtoon_vert:Tx,meshtoon_frag:Cx,points_vert:Lx,points_frag:Px,shadow_vert:Dx,shadow_frag:Rx,sprite_vert:Ix,sprite_frag:Fx},yt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ue},uv2Transform:{value:new Ue},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ue}}},an={basic:{uniforms:ve([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:ve([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:ve([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:ve([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:ve([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:ve([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:ve([yt.points,yt.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:ve([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:ve([yt.common,yt.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:ve([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:ve([yt.sprite,yt.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:ve([yt.common,yt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:ve([yt.lights,yt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};an.physical={uniforms:ve([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};function Nx(i,t,e,n,s,r,a){const o=new Gt(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(d,_){let w=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?e:t).get(x));const b=i.xr,v=b.getSession&&b.getSession();v&&v.environmentBlendMode==="additive"&&(x=null),x===null?m(o,l):x&&x.isColor&&(m(x,1),w=!0),(i.autoClear||w)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ro)?(u===void 0&&(u=new Ze(new js(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:cs(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,P,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,(h!==x||f!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=i.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ze(new lo(2,2),new Ai({name:"BackgroundMaterial",uniforms:cs(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=i.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function m(d,_){n.buffers.color.setClear(d.r,d.g,d.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(d,_=1){o.set(d),l=_,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,m(o,l)},render:g}}function Ox(i,t,e,n){const s=i.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=d(null);let c=l,u=!1;function h(N,K,nt,J,W){let k=!1;if(a){const B=m(J,nt,K);c!==B&&(c=B,p(c.object)),k=_(N,J,nt,W),k&&w(N,J,nt,W)}else{const B=K.wireframe===!0;(c.geometry!==J.id||c.program!==nt.id||c.wireframe!==B)&&(c.geometry=J.id,c.program=nt.id,c.wireframe=B,k=!0)}W!==null&&e.update(W,34963),(k||u)&&(u=!1,y(N,K,nt,J),W!==null&&i.bindBuffer(34963,e.get(W).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(N){return n.isWebGL2?i.bindVertexArray(N):r.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?i.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function m(N,K,nt){const J=nt.wireframe===!0;let W=o[N.id];W===void 0&&(W={},o[N.id]=W);let k=W[K.id];k===void 0&&(k={},W[K.id]=k);let B=k[J];return B===void 0&&(B=d(f()),k[J]=B),B}function d(N){const K=[],nt=[],J=[];for(let W=0;W<s;W++)K[W]=0,nt[W]=0,J[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:nt,attributeDivisors:J,object:N,attributes:{},index:null}}function _(N,K,nt,J){const W=c.attributes,k=K.attributes;let B=0;const et=nt.getAttributes();for(const ot in et)if(et[ot].location>=0){const at=W[ot];let _t=k[ot];if(_t===void 0&&(ot==="instanceMatrix"&&N.instanceMatrix&&(_t=N.instanceMatrix),ot==="instanceColor"&&N.instanceColor&&(_t=N.instanceColor)),at===void 0||at.attribute!==_t||_t&&at.data!==_t.data)return!0;B++}return c.attributesNum!==B||c.index!==J}function w(N,K,nt,J){const W={},k=K.attributes;let B=0;const et=nt.getAttributes();for(const ot in et)if(et[ot].location>=0){let at=k[ot];at===void 0&&(ot==="instanceMatrix"&&N.instanceMatrix&&(at=N.instanceMatrix),ot==="instanceColor"&&N.instanceColor&&(at=N.instanceColor));const _t={};_t.attribute=at,at&&at.data&&(_t.data=at.data),W[ot]=_t,B++}c.attributes=W,c.attributesNum=B,c.index=J}function x(){const N=c.newAttributes;for(let K=0,nt=N.length;K<nt;K++)N[K]=0}function b(N){v(N,0)}function v(N,K){const nt=c.newAttributes,J=c.enabledAttributes,W=c.attributeDivisors;nt[N]=1,J[N]===0&&(i.enableVertexAttribArray(N),J[N]=1),W[N]!==K&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,K),W[N]=K)}function A(){const N=c.newAttributes,K=c.enabledAttributes;for(let nt=0,J=K.length;nt<J;nt++)K[nt]!==N[nt]&&(i.disableVertexAttribArray(nt),K[nt]=0)}function P(N,K,nt,J,W,k){n.isWebGL2===!0&&(nt===5124||nt===5125)?i.vertexAttribIPointer(N,K,nt,W,k):i.vertexAttribPointer(N,K,nt,J,W,k)}function y(N,K,nt,J){if(n.isWebGL2===!1&&(N.isInstancedMesh||J.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const W=J.attributes,k=nt.getAttributes(),B=K.defaultAttributeValues;for(const et in k){const ot=k[et];if(ot.location>=0){let ht=W[et];if(ht===void 0&&(et==="instanceMatrix"&&N.instanceMatrix&&(ht=N.instanceMatrix),et==="instanceColor"&&N.instanceColor&&(ht=N.instanceColor)),ht!==void 0){const at=ht.normalized,_t=ht.itemSize,H=e.get(ht);if(H===void 0)continue;const St=H.buffer,xt=H.type,gt=H.bytesPerElement;if(ht.isInterleavedBufferAttribute){const lt=ht.data,Et=lt.stride,T=ht.offset;if(lt.isInstancedInterleavedBuffer){for(let L=0;L<ot.locationSize;L++)v(ot.location+L,lt.meshPerAttribute);N.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let L=0;L<ot.locationSize;L++)b(ot.location+L);i.bindBuffer(34962,St);for(let L=0;L<ot.locationSize;L++)P(ot.location+L,_t/ot.locationSize,xt,at,Et*gt,(T+_t/ot.locationSize*L)*gt)}else{if(ht.isInstancedBufferAttribute){for(let lt=0;lt<ot.locationSize;lt++)v(ot.location+lt,ht.meshPerAttribute);N.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let lt=0;lt<ot.locationSize;lt++)b(ot.location+lt);i.bindBuffer(34962,St);for(let lt=0;lt<ot.locationSize;lt++)P(ot.location+lt,_t/ot.locationSize,xt,at,_t*gt,_t/ot.locationSize*lt*gt)}}else if(B!==void 0){const at=B[et];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(ot.location,at);break;case 3:i.vertexAttrib3fv(ot.location,at);break;case 4:i.vertexAttrib4fv(ot.location,at);break;default:i.vertexAttrib1fv(ot.location,at)}}}}A()}function E(){tt();for(const N in o){const K=o[N];for(const nt in K){const J=K[nt];for(const W in J)g(J[W].object),delete J[W];delete K[nt]}delete o[N]}}function R(N){if(o[N.id]===void 0)return;const K=o[N.id];for(const nt in K){const J=K[nt];for(const W in J)g(J[W].object),delete J[W];delete K[nt]}delete o[N.id]}function X(N){for(const K in o){const nt=o[K];if(nt[N.id]===void 0)continue;const J=nt[N.id];for(const W in J)g(J[W].object),delete J[W];delete nt[N.id]}}function tt(){F(),u=!0,c!==l&&(c=l,p(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:tt,resetDefaultState:F,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfProgram:X,initAttributes:x,enableAttribute:b,disableUnusedAttributes:A}}function zx(i,t,e,n){const s=n.isWebGL2;let r;function a(c){r=c}function o(c,u){i.drawArrays(r,c,u),e.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,p;if(s)f=i,p="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,c,u,h),e.update(u,r,h)}this.setMode=a,this.render=o,this.renderInstances=l}function Ux(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let o=e.precision!==void 0?e.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=i.getParameter(34930),f=i.getParameter(35660),p=i.getParameter(3379),g=i.getParameter(34076),m=i.getParameter(34921),d=i.getParameter(36347),_=i.getParameter(36348),w=i.getParameter(36349),x=f>0,b=a||t.has("OES_texture_float"),v=x&&b,A=a?i.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:w,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:v,maxSamples:A}}function Bx(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Sn,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,p){const g=h.length!==0||f||n!==0||s;return s=f,e=u(h,p,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,p){const g=h.clippingPlanes,m=h.clipIntersection,d=h.clipShadows,_=i.get(h);if(!s||g===null||g.length===0||r&&!d)r?u(null):c();else{const w=r?0:n,x=w*4;let b=_.clippingState||null;l.value=b,b=u(g,f,x,p);for(let v=0;v!==x;++v)b[v]=e[v];_.clippingState=b,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,p,g){const m=h!==null?h.length:0;let d=null;if(m!==0){if(d=l.value,g!==!0||d===null){const _=p+m*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(d===null||d.length<_)&&(d=new Float32Array(_));for(let x=0,b=p;x!==m;++x,b+=4)a.copy(h[x]).applyMatrix4(w,o),a.normal.toArray(d,b),d[b+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,d}}function Vx(i){let t=new WeakMap;function e(a,o){return o===Ma?a.mapping=os:o===wa&&(a.mapping=as),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ma||o===wa)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Qm(l.height/2);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class If extends Pf{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Zi=4,Dc=[.125,.215,.35,.446,.526,.582],hi=20,jo=new If,Rc=new Gt;let Yo=null;const li=(1+Math.sqrt(5))/2,Wi=1/li,Ic=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,li,Wi),new I(0,li,-Wi),new I(Wi,0,li),new I(-Wi,0,li),new I(li,Wi,0),new I(-li,Wi,0)];class Fc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Yo=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Yo),t.scissorTest=!1,vr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yo=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ne,minFilter:Ne,generateMipmaps:!1,type:ks,format:je,encoding:Mi,depthBuffer:!1},s=Nc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kx(r)),this._blurMaterial=Hx(r,t,e)}return s}_compileMaterial(t){const e=new Ze(this._lodPlanes[0],t);this._renderer.compile(e,jo)}_sceneToCubeUV(t,e,n,s){const o=new Oe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Rc),u.toneMapping=En,u.autoClear=!1;const p=new Hs({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),g=new Ze(new js,p);let m=!1;const d=t.background;d?d.isColor&&(p.color.copy(d),t.background=null,m=!0):(p.color.copy(Rc),m=!0);for(let _=0;_<6;_++){const w=_%3;w===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):w===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const x=this._cubeSize;vr(s,w*x,_>2?x:0,x,x),u.setRenderTarget(s),m&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===os||t.mapping===as;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ze(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;vr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,jo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ic[(s-1)%Ic.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ze(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*hi-1),m=r/g,d=isFinite(r)?1+Math.floor(u*m):hi;d>hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${hi}`);const _=[];let w=0;for(let P=0;P<hi;++P){const y=P/m,E=Math.exp(-y*y/2);_.push(E),P===0?w+=E:P<d&&(w+=2*E)}for(let P=0;P<_.length;P++)_[P]=_[P]/w;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=_,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const b=this._sizeLods[s],v=3*b*(s>x-Zi?s-x+Zi:0),A=4*(this._cubeSize-b);vr(e,v,A,3*b,2*b),l.setRenderTarget(e),l.render(h,jo)}}function kx(i){const t=[],e=[],n=[];let s=i;const r=i-Zi+1+Dc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Zi?l=Dc[a-i+Zi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,m=3,d=2,_=1,w=new Float32Array(m*g*p),x=new Float32Array(d*g*p),b=new Float32Array(_*g*p);for(let A=0;A<p;A++){const P=A%3*2/3-1,y=A>2?0:-1,E=[P,y,0,P+2/3,y,0,P+2/3,y+1,0,P,y,0,P+2/3,y+1,0,P,y+1,0];w.set(E,m*g*A),x.set(f,d*g*A);const R=[A,A,A,A,A,A];b.set(R,_*g*A)}const v=new ke;v.setAttribute("position",new Ae(w,m)),v.setAttribute("uv",new Ae(x,d)),v.setAttribute("faceIndex",new Ae(b,_)),t.push(v),s>Zi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Nc(i,t,e){const n=new wi(i,t,e);return n.texture.mapping=ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Hx(i,t,e){const n=new Float32Array(hi),s=new I(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Oc(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function zc(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function cl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gx(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ma||l===wa,u=l===os||l===as;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=t.get(o);return e===null&&(e=new Fc(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),t.set(o,h),h.texture}else{if(t.has(o))return t.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&s(h)){e===null&&(e=new Fc(i));const f=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Wx(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Xx(i,t,e,n){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],34962);const p=h.morphAttributes;for(const g in p){const m=p[g];for(let d=0,_=m.length;d<_;d++)t.update(m[d],34962)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let m=0;if(p!==null){const w=p.array;m=p.version;for(let x=0,b=w.length;x<b;x+=3){const v=w[x+0],A=w[x+1],P=w[x+2];f.push(v,A,A,P,P,v)}}else{const w=g.array;m=g.version;for(let x=0,b=w.length/3-1;x<b;x+=3){const v=x+0,A=x+1,P=x+2;f.push(v,A,A,P,P,v)}}const d=new(Mf(f)?Lf:Cf)(f,1);d.version=m;const _=r.get(h);_&&t.remove(_),r.set(h,d)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function qx(i,t,e,n){const s=n.isWebGL2;let r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,p){i.drawElements(r,p,o,f*l),e.update(p,r,1)}function h(f,p,g){if(g===0)return;let m,d;if(s)m=i,d="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,p,o,f*l,g),e.update(p,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function $x(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case 4:e.triangles+=o*(r/3);break;case 1:e.lines+=o*(r/2);break;case 3:e.lines+=o*(r-1);break;case 2:e.lines+=o*r;break;case 0:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function jx(i,t){return i[0]-t[0]}function Yx(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Zx(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,a=new ce,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,f){const p=c.morphTargetInfluences;if(t.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=m!==void 0?m.length:0;let _=r.get(u);if(_===void 0||_.count!==d){let nt=function(){N.dispose(),r.delete(u),u.removeEventListener("dispose",nt)};var g=nt;_!==void 0&&_.texture.dispose();const b=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],y=u.morphAttributes.normal||[],E=u.morphAttributes.color||[];let R=0;b===!0&&(R=1),v===!0&&(R=2),A===!0&&(R=3);let X=u.attributes.position.count*R,tt=1;X>t.maxTextureSize&&(tt=Math.ceil(X/t.maxTextureSize),X=t.maxTextureSize);const F=new Float32Array(X*tt*4*d),N=new Ef(F,X,tt,d);N.type=pi,N.needsUpdate=!0;const K=R*4;for(let J=0;J<d;J++){const W=P[J],k=y[J],B=E[J],et=X*tt*4*J;for(let ot=0;ot<W.count;ot++){const ht=ot*K;b===!0&&(a.fromBufferAttribute(W,ot),F[et+ht+0]=a.x,F[et+ht+1]=a.y,F[et+ht+2]=a.z,F[et+ht+3]=0),v===!0&&(a.fromBufferAttribute(k,ot),F[et+ht+4]=a.x,F[et+ht+5]=a.y,F[et+ht+6]=a.z,F[et+ht+7]=0),A===!0&&(a.fromBufferAttribute(B,ot),F[et+ht+8]=a.x,F[et+ht+9]=a.y,F[et+ht+10]=a.z,F[et+ht+11]=B.itemSize===4?a.w:1)}}_={count:d,texture:N,size:new Rt(X,tt)},r.set(u,_),u.addEventListener("dispose",nt)}let w=0;for(let b=0;b<p.length;b++)w+=p[b];const x=u.morphTargetsRelative?1:1-w;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",p),f.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),f.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const m=p===void 0?0:p.length;let d=n[u.id];if(d===void 0||d.length!==m){d=[];for(let v=0;v<m;v++)d[v]=[v,0];n[u.id]=d}for(let v=0;v<m;v++){const A=d[v];A[0]=v,A[1]=p[v]}d.sort(Yx);for(let v=0;v<8;v++)v<m&&d[v][1]?(o[v][0]=d[v][0],o[v][1]=d[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(jx);const _=u.morphAttributes.position,w=u.morphAttributes.normal;let x=0;for(let v=0;v<8;v++){const A=o[v],P=A[0],y=A[1];P!==Number.MAX_SAFE_INTEGER&&y?(_&&u.getAttribute("morphTarget"+v)!==_[P]&&u.setAttribute("morphTarget"+v,_[P]),w&&u.getAttribute("morphNormal"+v)!==w[P]&&u.setAttribute("morphNormal"+v,w[P]),s[v]=y,x+=y):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),w&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),s[v]=0)}const b=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(i,"morphTargetBaseInfluence",b),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Kx(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);return s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Ff=new Qe,Nf=new Ef,Of=new zm,zf=new Df,Uc=[],Bc=[],Vc=new Float32Array(16),kc=new Float32Array(9),Hc=new Float32Array(4);function ms(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Uc[s];if(r===void 0&&(r=new Float32Array(s),Uc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function co(i,t){let e=Bc[t];e===void 0&&(e=new Int32Array(t),Bc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Jx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Qx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(re(e,t))return;i.uniform2fv(this.addr,t),oe(e,t)}}function t0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(re(e,t))return;i.uniform3fv(this.addr,t),oe(e,t)}}function e0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(re(e,t))return;i.uniform4fv(this.addr,t),oe(e,t)}}function n0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),oe(e,t)}else{if(re(e,n))return;Hc.set(n),i.uniformMatrix2fv(this.addr,!1,Hc),oe(e,n)}}function i0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),oe(e,t)}else{if(re(e,n))return;kc.set(n),i.uniformMatrix3fv(this.addr,!1,kc),oe(e,n)}}function s0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),oe(e,t)}else{if(re(e,n))return;Vc.set(n),i.uniformMatrix4fv(this.addr,!1,Vc),oe(e,n)}}function r0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function o0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(re(e,t))return;i.uniform2iv(this.addr,t),oe(e,t)}}function a0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(re(e,t))return;i.uniform3iv(this.addr,t),oe(e,t)}}function l0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(re(e,t))return;i.uniform4iv(this.addr,t),oe(e,t)}}function c0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function u0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(re(e,t))return;i.uniform2uiv(this.addr,t),oe(e,t)}}function f0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(re(e,t))return;i.uniform3uiv(this.addr,t),oe(e,t)}}function h0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(re(e,t))return;i.uniform4uiv(this.addr,t),oe(e,t)}}function d0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2D(t||Ff,s)}function p0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Of,s)}function m0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||zf,s)}function g0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Nf,s)}function _0(i){switch(i){case 5126:return Jx;case 35664:return Qx;case 35665:return t0;case 35666:return e0;case 35674:return n0;case 35675:return i0;case 35676:return s0;case 5124:case 35670:return r0;case 35667:case 35671:return o0;case 35668:case 35672:return a0;case 35669:case 35673:return l0;case 5125:return c0;case 36294:return u0;case 36295:return f0;case 36296:return h0;case 35678:case 36198:case 36298:case 36306:case 35682:return d0;case 35679:case 36299:case 36307:return p0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return g0}}function x0(i,t){i.uniform1fv(this.addr,t)}function v0(i,t){const e=ms(t,this.size,2);i.uniform2fv(this.addr,e)}function y0(i,t){const e=ms(t,this.size,3);i.uniform3fv(this.addr,e)}function b0(i,t){const e=ms(t,this.size,4);i.uniform4fv(this.addr,e)}function M0(i,t){const e=ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function w0(i,t){const e=ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function S0(i,t){const e=ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function A0(i,t){i.uniform1iv(this.addr,t)}function E0(i,t){i.uniform2iv(this.addr,t)}function T0(i,t){i.uniform3iv(this.addr,t)}function C0(i,t){i.uniform4iv(this.addr,t)}function L0(i,t){i.uniform1uiv(this.addr,t)}function P0(i,t){i.uniform2uiv(this.addr,t)}function D0(i,t){i.uniform3uiv(this.addr,t)}function R0(i,t){i.uniform4uiv(this.addr,t)}function I0(i,t,e){const n=this.cache,s=t.length,r=co(e,s);re(n,r)||(i.uniform1iv(this.addr,r),oe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Ff,r[a])}function F0(i,t,e){const n=this.cache,s=t.length,r=co(e,s);re(n,r)||(i.uniform1iv(this.addr,r),oe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Of,r[a])}function N0(i,t,e){const n=this.cache,s=t.length,r=co(e,s);re(n,r)||(i.uniform1iv(this.addr,r),oe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||zf,r[a])}function O0(i,t,e){const n=this.cache,s=t.length,r=co(e,s);re(n,r)||(i.uniform1iv(this.addr,r),oe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Nf,r[a])}function z0(i){switch(i){case 5126:return x0;case 35664:return v0;case 35665:return y0;case 35666:return b0;case 35674:return M0;case 35675:return w0;case 35676:return S0;case 5124:case 35670:return A0;case 35667:case 35671:return E0;case 35668:case 35672:return T0;case 35669:case 35673:return C0;case 5125:return L0;case 36294:return P0;case 36295:return D0;case 36296:return R0;case 35678:case 36198:case 36298:case 36306:case 35682:return I0;case 35679:case 36299:case 36307:return F0;case 35680:case 36300:case 36308:case 36293:return N0;case 36289:case 36303:case 36311:case 36292:return O0}}class U0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=_0(e.type)}}class B0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=z0(e.type)}}class V0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Zo=/(\w+)(\])?(\[|\.)?/g;function Gc(i,t){i.seq.push(t),i.map[t.id]=t}function k0(i,t,e){const n=i.name,s=n.length;for(Zo.lastIndex=0;;){const r=Zo.exec(n),a=Zo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Gc(e,c===void 0?new U0(o,i,t):new B0(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new V0(o),Gc(e,h)),e=h}}}class Ur{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);k0(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Wc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}let H0=0;function G0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function W0(i){switch(i){case Mi:return["Linear","( value )"];case Jt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Xc(i,t,e){const n=i.getShaderParameter(t,35713),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+G0(i.getShaderSource(t),a)}else return s}function X0(i,t){const e=W0(t);return"vec4 "+i+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function q0(i,t){let e;switch(t){case Yp:e="Linear";break;case Zp:e="Reinhard";break;case Kp:e="OptimizedCineon";break;case Jp:e="ACESFilmic";break;case Qp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function $0(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cs).join(`
`)}function j0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Y0(i,t){const e={},n=i.getProgramParameter(t,35721);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Cs(i){return i!==""}function qc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $c(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Z0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ca(i){return i.replace(Z0,K0)}function K0(i,t){const e=Nt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Ca(e)}const J0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jc(i){return i.replace(J0,Q0)}function Q0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yc(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function tv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===gf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Tp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Es&&(t="SHADOWMAP_TYPE_VSM"),t}function ev(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case os:case as:t="ENVMAP_TYPE_CUBE";break;case ro:t="ENVMAP_TYPE_CUBE_UV";break}return t}function nv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case as:t="ENVMAP_MODE_REFRACTION";break}return t}function iv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case vf:t="ENVMAP_BLENDING_MULTIPLY";break;case $p:t="ENVMAP_BLENDING_MIX";break;case jp:t="ENVMAP_BLENDING_ADD";break}return t}function sv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function rv(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=tv(e),c=ev(e),u=nv(e),h=iv(e),f=sv(e),p=e.isWebGL2?"":$0(e),g=j0(r),m=s.createProgram();let d,_,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=[g].filter(Cs).join(`
`),d.length>0&&(d+=`
`),_=[p,g].filter(Cs).join(`
`),_.length>0&&(_+=`
`)):(d=[Yc(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),_=[p,Yc(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==En?"#define TONE_MAPPING":"",e.toneMapping!==En?Nt.tonemapping_pars_fragment:"",e.toneMapping!==En?q0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.encodings_pars_fragment,X0("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cs).join(`
`)),a=Ca(a),a=qc(a,e),a=$c(a,e),o=Ca(o),o=qc(o,e),o=$c(o,e),a=jc(a),o=jc(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",e.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=w+d+a,b=w+_+o,v=Wc(s,35633,x),A=Wc(s,35632,b);if(s.attachShader(m,v),s.attachShader(m,A),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m),i.debug.checkShaderErrors){const E=s.getProgramInfoLog(m).trim(),R=s.getShaderInfoLog(v).trim(),X=s.getShaderInfoLog(A).trim();let tt=!0,F=!0;if(s.getProgramParameter(m,35714)===!1){tt=!1;const N=Xc(s,v,"vertex"),K=Xc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,35715)+`

Program Info Log: `+E+`
`+N+`
`+K)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(R===""||X==="")&&(F=!1);F&&(this.diagnostics={runnable:tt,programLog:E,vertexShader:{log:R,prefix:d},fragmentShader:{log:X,prefix:_}})}s.deleteShader(v),s.deleteShader(A);let P;this.getUniforms=function(){return P===void 0&&(P=new Ur(s,m)),P};let y;return this.getAttributes=function(){return y===void 0&&(y=Y0(s,m)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.name=e.shaderName,this.id=H0++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=A,this}let ov=0;class av{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new lv(t),e.set(t,n)),n}}class lv{constructor(t){this.id=ov++,this.code=t,this.usedTimes=0}}function cv(i,t,e,n,s,r,a){const o=new Tf,l=new av,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y,E,R,X,tt){const F=X.fog,N=tt.geometry,K=y.isMeshStandardMaterial?X.environment:null,nt=(y.isMeshStandardMaterial?e:t).get(y.envMap||K),J=!!nt&&nt.mapping===ro?nt.image.height:null,W=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const k=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,B=k!==void 0?k.length:0;let et=0;N.morphAttributes.position!==void 0&&(et=1),N.morphAttributes.normal!==void 0&&(et=2),N.morphAttributes.color!==void 0&&(et=3);let ot,ht,at,_t;if(W){const Et=an[W];ot=Et.vertexShader,ht=Et.fragmentShader}else ot=y.vertexShader,ht=y.fragmentShader,l.update(y),at=l.getVertexShaderID(y),_t=l.getFragmentShaderID(y);const H=i.getRenderTarget(),St=y.alphaTest>0,xt=y.clearcoat>0,gt=y.iridescence>0;return{isWebGL2:u,shaderID:W,shaderName:y.type,vertexShader:ot,fragmentShader:ht,defines:y.defines,customVertexShaderID:at,customFragmentShaderID:_t,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:tt.isInstancedMesh===!0,instancingColor:tt.isInstancedMesh===!0&&tt.instanceColor!==null,supportsVertexTextures:f,outputEncoding:H===null?i.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:Mi,map:!!y.map,matcap:!!y.matcap,envMap:!!nt,envMapMode:nt&&nt.mapping,envMapCubeUVHeight:J,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===vm,tangentSpaceNormalMap:y.normalMapType===xm,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Jt,clearcoat:xt,clearcoatMap:xt&&!!y.clearcoatMap,clearcoatRoughnessMap:xt&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:xt&&!!y.clearcoatNormalMap,iridescence:gt,iridescenceMap:gt&&!!y.iridescenceMap,iridescenceThicknessMap:gt&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===es,alphaMap:!!y.alphaMap,alphaTest:St,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!N.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!F,useFog:y.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:h,skinning:tt.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:et,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:y.toneMapped?i.toneMapping:En,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===fn,flipSided:y.side===Le,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)E.push(R),E.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(_(E,y),w(E,y),E.push(i.outputEncoding)),E.push(y.customProgramCacheKey),E.join()}function _(y,E){y.push(E.precision),y.push(E.outputEncoding),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.combine),y.push(E.vertexUvs),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function w(y,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.map&&o.enable(4),E.matcap&&o.enable(5),E.envMap&&o.enable(6),E.lightMap&&o.enable(7),E.aoMap&&o.enable(8),E.emissiveMap&&o.enable(9),E.bumpMap&&o.enable(10),E.normalMap&&o.enable(11),E.objectSpaceNormalMap&&o.enable(12),E.tangentSpaceNormalMap&&o.enable(13),E.clearcoat&&o.enable(14),E.clearcoatMap&&o.enable(15),E.clearcoatRoughnessMap&&o.enable(16),E.clearcoatNormalMap&&o.enable(17),E.iridescence&&o.enable(18),E.iridescenceMap&&o.enable(19),E.iridescenceThicknessMap&&o.enable(20),E.displacementMap&&o.enable(21),E.specularMap&&o.enable(22),E.roughnessMap&&o.enable(23),E.metalnessMap&&o.enable(24),E.gradientMap&&o.enable(25),E.alphaMap&&o.enable(26),E.alphaTest&&o.enable(27),E.vertexColors&&o.enable(28),E.vertexAlphas&&o.enable(29),E.vertexUvs&&o.enable(30),E.vertexTangents&&o.enable(31),E.uvsVertexOnly&&o.enable(32),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.physicallyCorrectLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.specularIntensityMap&&o.enable(15),E.specularColorMap&&o.enable(16),E.transmission&&o.enable(17),E.transmissionMap&&o.enable(18),E.thicknessMap&&o.enable(19),E.sheen&&o.enable(20),E.sheenColorMap&&o.enable(21),E.sheenRoughnessMap&&o.enable(22),E.decodeVideoTexture&&o.enable(23),E.opaque&&o.enable(24),y.push(o.mask)}function x(y){const E=g[y.type];let R;if(E){const X=an[E];R=Ym.clone(X.uniforms)}else R=y.uniforms;return R}function b(y,E){let R;for(let X=0,tt=c.length;X<tt;X++){const F=c[X];if(F.cacheKey===E){R=F,++R.usedTimes;break}}return R===void 0&&(R=new rv(i,E,y,r),c.push(R)),R}function v(y){if(--y.usedTimes===0){const E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),y.destroy()}}function A(y){l.remove(y)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:b,releaseProgram:v,releaseShaderCache:A,programs:c,dispose:P}}function uv(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function fv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Zc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Kc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,f,p,g,m,d){let _=i[t];return _===void 0?(_={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:m,group:d},i[t]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=p,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=m,_.group=d),t++,_}function o(h,f,p,g,m,d){const _=a(h,f,p,g,m,d);p.transmission>0?n.push(_):p.transparent===!0?s.push(_):e.push(_)}function l(h,f,p,g,m,d){const _=a(h,f,p,g,m,d);p.transmission>0?n.unshift(_):p.transparent===!0?s.unshift(_):e.unshift(_)}function c(h,f){e.length>1&&e.sort(h||fv),n.length>1&&n.sort(f||Zc),s.length>1&&s.sort(f||Zc)}function u(){for(let h=t,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function hv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Kc,i.set(n,[a])):s>=r.length?(a=new Kc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function dv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Gt};break;case"SpotLight":e={position:new I,direction:new I,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function pv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let mv=0;function gv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _v(i,t){const e=new dv,n=pv(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new I);const r=new I,a=new Yt,o=new Yt;function l(u,h){let f=0,p=0,g=0;for(let X=0;X<9;X++)s.probe[X].set(0,0,0);let m=0,d=0,_=0,w=0,x=0,b=0,v=0,A=0,P=0,y=0;u.sort(gv);const E=h!==!0?Math.PI:1;for(let X=0,tt=u.length;X<tt;X++){const F=u[X],N=F.color,K=F.intensity,nt=F.distance,J=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=N.r*K*E,p+=N.g*K*E,g+=N.b*K*E;else if(F.isLightProbe)for(let W=0;W<9;W++)s.probe[W].addScaledVector(F.sh.coefficients[W],K);else if(F.isDirectionalLight){const W=e.get(F);if(W.color.copy(F.color).multiplyScalar(F.intensity*E),F.castShadow){const k=F.shadow,B=n.get(F);B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,s.directionalShadow[m]=B,s.directionalShadowMap[m]=J,s.directionalShadowMatrix[m]=F.shadow.matrix,b++}s.directional[m]=W,m++}else if(F.isSpotLight){const W=e.get(F);W.position.setFromMatrixPosition(F.matrixWorld),W.color.copy(N).multiplyScalar(K*E),W.distance=nt,W.coneCos=Math.cos(F.angle),W.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),W.decay=F.decay,s.spot[_]=W;const k=F.shadow;if(F.map&&(s.spotLightMap[P]=F.map,P++,k.updateMatrices(F),F.castShadow&&y++),s.spotLightMatrix[_]=k.matrix,F.castShadow){const B=n.get(F);B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,s.spotShadow[_]=B,s.spotShadowMap[_]=J,A++}_++}else if(F.isRectAreaLight){const W=e.get(F);W.color.copy(N).multiplyScalar(K),W.halfWidth.set(F.width*.5,0,0),W.halfHeight.set(0,F.height*.5,0),s.rectArea[w]=W,w++}else if(F.isPointLight){const W=e.get(F);if(W.color.copy(F.color).multiplyScalar(F.intensity*E),W.distance=F.distance,W.decay=F.decay,F.castShadow){const k=F.shadow,B=n.get(F);B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,B.shadowCameraNear=k.camera.near,B.shadowCameraFar=k.camera.far,s.pointShadow[d]=B,s.pointShadowMap[d]=J,s.pointShadowMatrix[d]=F.shadow.matrix,v++}s.point[d]=W,d++}else if(F.isHemisphereLight){const W=e.get(F);W.skyColor.copy(F.color).multiplyScalar(K*E),W.groundColor.copy(F.groundColor).multiplyScalar(K*E),s.hemi[x]=W,x++}}w>0&&(t.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=yt.LTC_FLOAT_1,s.rectAreaLTC2=yt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=yt.LTC_HALF_1,s.rectAreaLTC2=yt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=g;const R=s.hash;(R.directionalLength!==m||R.pointLength!==d||R.spotLength!==_||R.rectAreaLength!==w||R.hemiLength!==x||R.numDirectionalShadows!==b||R.numPointShadows!==v||R.numSpotShadows!==A||R.numSpotMaps!==P)&&(s.directional.length=m,s.spot.length=_,s.rectArea.length=w,s.point.length=d,s.hemi.length=x,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=v,s.pointShadowMap.length=v,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=v,s.spotLightMatrix.length=A+P-y,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=y,R.directionalLength=m,R.pointLength=d,R.spotLength=_,R.rectAreaLength=w,R.hemiLength=x,R.numDirectionalShadows=b,R.numPointShadows=v,R.numSpotShadows=A,R.numSpotMaps=P,s.version=mv++)}function c(u,h){let f=0,p=0,g=0,m=0,d=0;const _=h.matrixWorldInverse;for(let w=0,x=u.length;w<x;w++){const b=u[w];if(b.isDirectionalLight){const v=s.directional[f];v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),f++}else if(b.isSpotLight){const v=s.spot[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const v=s.rectArea[m];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(_),o.identity(),a.copy(b.matrixWorld),a.premultiply(_),o.extractRotation(a),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(b.isPointLight){const v=s.point[p];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(_),p++}else if(b.isHemisphereLight){const v=s.hemi[d];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:s}}function Jc(i,t){const e=new _v(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(h){n.push(h)}function o(h){s.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function xv(i,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let l;return o===void 0?(l=new Jc(i,t),e.set(r,[l])):a>=o.length?(l=new Jc(i,t),o.push(l)):l=o[a],l}function s(){e=new WeakMap}return{get:n,dispose:s}}class vv extends Ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class yv extends Ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new I,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const bv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wv(i,t,e){let n=new ll;const s=new Rt,r=new Rt,a=new ce,o=new vv({depthPacking:_m}),l=new yv,c={},u=e.maxTextureSize,h={0:Le,1:Kn,2:fn},f=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:bv,fragmentShader:Mv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new ke;g.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Ze(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gf,this.render=function(b,v,A){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||b.length===0)return;const P=i.getRenderTarget(),y=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),R=i.state;R.setBlending(qn),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let X=0,tt=b.length;X<tt;X++){const F=b[X],N=F.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const K=N.getFrameExtents();if(s.multiply(K),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/K.x),s.x=r.x*K.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/K.y),s.y=r.y*K.y,N.mapSize.y=r.y)),N.map===null){const J=this.type!==Es?{minFilter:Se,magFilter:Se}:{};N.map=new wi(s.x,s.y,J),N.map.texture.name=F.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const nt=N.getViewportCount();for(let J=0;J<nt;J++){const W=N.getViewport(J);a.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),R.viewport(a),N.updateMatrices(F,J),n=N.getFrustum(),x(v,A,N.camera,F,this.type)}N.isPointLightShadow!==!0&&this.type===Es&&_(N,A),N.needsUpdate=!1}d.needsUpdate=!1,i.setRenderTarget(P,y,E)};function _(b,v){const A=t.update(m);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new wi(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(v,null,A,f,m,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(v,null,A,p,m,null)}function w(b,v,A,P,y,E){let R=null;const X=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(X!==void 0?R=X:R=A.isPointLight===!0?l:o,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0){const tt=R.uuid,F=v.uuid;let N=c[tt];N===void 0&&(N={},c[tt]=N);let K=N[F];K===void 0&&(K=R.clone(),N[F]=K),R=K}return R.visible=v.visible,R.wireframe=v.wireframe,E===Es?R.side=v.shadowSide!==null?v.shadowSide:v.side:R.side=v.shadowSide!==null?v.shadowSide:h[v.side],R.alphaMap=v.alphaMap,R.alphaTest=v.alphaTest,R.clipShadows=v.clipShadows,R.clippingPlanes=v.clippingPlanes,R.clipIntersection=v.clipIntersection,R.displacementMap=v.displacementMap,R.displacementScale=v.displacementScale,R.displacementBias=v.displacementBias,R.wireframeLinewidth=v.wireframeLinewidth,R.linewidth=v.linewidth,A.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(A.matrixWorld),R.nearDistance=P,R.farDistance=y),R}function x(b,v,A,P,y){if(b.visible===!1)return;if(b.layers.test(v.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===Es)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);const X=t.update(b),tt=b.material;if(Array.isArray(tt)){const F=X.groups;for(let N=0,K=F.length;N<K;N++){const nt=F[N],J=tt[nt.materialIndex];if(J&&J.visible){const W=w(b,J,P,A.near,A.far,y);i.renderBufferDirect(A,null,X,W,b,nt)}}}else if(tt.visible){const F=w(b,tt,P,A.near,A.far,y);i.renderBufferDirect(A,null,X,F,b,null)}}const R=b.children;for(let X=0,tt=R.length;X<tt;X++)x(R[X],v,A,P,y)}}function Sv(i,t,e){const n=e.isWebGL2;function s(){let O=!1;const rt=new ce;let mt=null;const Tt=new ce(0,0,0,0);return{setMask:function(Lt){mt!==Lt&&!O&&(i.colorMask(Lt,Lt,Lt,Lt),mt=Lt)},setLocked:function(Lt){O=Lt},setClear:function(Lt,Wt,ae,he,Jn){Jn===!0&&(Lt*=he,Wt*=he,ae*=he),rt.set(Lt,Wt,ae,he),Tt.equals(rt)===!1&&(i.clearColor(Lt,Wt,ae,he),Tt.copy(rt))},reset:function(){O=!1,mt=null,Tt.set(-1,0,0,0)}}}function r(){let O=!1,rt=null,mt=null,Tt=null;return{setTest:function(Lt){Lt?St(2929):xt(2929)},setMask:function(Lt){rt!==Lt&&!O&&(i.depthMask(Lt),rt=Lt)},setFunc:function(Lt){if(mt!==Lt){switch(Lt){case Vp:i.depthFunc(512);break;case kp:i.depthFunc(519);break;case Hp:i.depthFunc(513);break;case ba:i.depthFunc(515);break;case Gp:i.depthFunc(514);break;case Wp:i.depthFunc(518);break;case Xp:i.depthFunc(516);break;case qp:i.depthFunc(517);break;default:i.depthFunc(515)}mt=Lt}},setLocked:function(Lt){O=Lt},setClear:function(Lt){Tt!==Lt&&(i.clearDepth(Lt),Tt=Lt)},reset:function(){O=!1,rt=null,mt=null,Tt=null}}}function a(){let O=!1,rt=null,mt=null,Tt=null,Lt=null,Wt=null,ae=null,he=null,Jn=null;return{setTest:function(Kt){O||(Kt?St(2960):xt(2960))},setMask:function(Kt){rt!==Kt&&!O&&(i.stencilMask(Kt),rt=Kt)},setFunc:function(Kt,mn,De){(mt!==Kt||Tt!==mn||Lt!==De)&&(i.stencilFunc(Kt,mn,De),mt=Kt,Tt=mn,Lt=De)},setOp:function(Kt,mn,De){(Wt!==Kt||ae!==mn||he!==De)&&(i.stencilOp(Kt,mn,De),Wt=Kt,ae=mn,he=De)},setLocked:function(Kt){O=Kt},setClear:function(Kt){Jn!==Kt&&(i.clearStencil(Kt),Jn=Kt)},reset:function(){O=!1,rt=null,mt=null,Tt=null,Lt=null,Wt=null,ae=null,he=null,Jn=null}}}const o=new s,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,m=[],d=null,_=!1,w=null,x=null,b=null,v=null,A=null,P=null,y=null,E=!1,R=null,X=null,tt=null,F=null,N=null;const K=i.getParameter(35661);let nt=!1,J=0;const W=i.getParameter(7938);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),nt=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),nt=J>=2);let k=null,B={};const et=i.getParameter(3088),ot=i.getParameter(2978),ht=new ce().fromArray(et),at=new ce().fromArray(ot);function _t(O,rt,mt){const Tt=new Uint8Array(4),Lt=i.createTexture();i.bindTexture(O,Lt),i.texParameteri(O,10241,9728),i.texParameteri(O,10240,9728);for(let Wt=0;Wt<mt;Wt++)i.texImage2D(rt+Wt,0,6408,1,1,0,6408,5121,Tt);return Lt}const H={};H[3553]=_t(3553,3553,1),H[34067]=_t(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),St(2929),l.setFunc(ba),j(!1),ct(Gl),St(2884),U(qn);function St(O){f[O]!==!0&&(i.enable(O),f[O]=!0)}function xt(O){f[O]!==!1&&(i.disable(O),f[O]=!1)}function gt(O,rt){return p[O]!==rt?(i.bindFramebuffer(O,rt),p[O]=rt,n&&(O===36009&&(p[36160]=rt),O===36160&&(p[36009]=rt)),!0):!1}function lt(O,rt){let mt=m,Tt=!1;if(O)if(mt=g.get(rt),mt===void 0&&(mt=[],g.set(rt,mt)),O.isWebGLMultipleRenderTargets){const Lt=O.texture;if(mt.length!==Lt.length||mt[0]!==36064){for(let Wt=0,ae=Lt.length;Wt<ae;Wt++)mt[Wt]=36064+Wt;mt.length=Lt.length,Tt=!0}}else mt[0]!==36064&&(mt[0]=36064,Tt=!0);else mt[0]!==1029&&(mt[0]=1029,Tt=!0);Tt&&(e.isWebGL2?i.drawBuffers(mt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(mt))}function Et(O){return d!==O?(i.useProgram(O),d=O,!0):!1}const T={[$i]:32774,[Lp]:32778,[Pp]:32779};if(n)T[$l]=32775,T[jl]=32776;else{const O=t.get("EXT_blend_minmax");O!==null&&(T[$l]=O.MIN_EXT,T[jl]=O.MAX_EXT)}const L={[Dp]:0,[Rp]:1,[Ip]:768,[_f]:770,[Bp]:776,[zp]:774,[Np]:772,[Fp]:769,[xf]:771,[Up]:775,[Op]:773};function U(O,rt,mt,Tt,Lt,Wt,ae,he){if(O===qn){_===!0&&(xt(3042),_=!1);return}if(_===!1&&(St(3042),_=!0),O!==Cp){if(O!==w||he!==E){if((x!==$i||A!==$i)&&(i.blendEquation(32774),x=$i,A=$i),he)switch(O){case es:i.blendFuncSeparate(1,771,1,771);break;case Wl:i.blendFunc(1,1);break;case Xl:i.blendFuncSeparate(0,769,0,1);break;case ql:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case es:i.blendFuncSeparate(770,771,1,771);break;case Wl:i.blendFunc(770,1);break;case Xl:i.blendFuncSeparate(0,769,0,1);break;case ql:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}b=null,v=null,P=null,y=null,w=O,E=he}return}Lt=Lt||rt,Wt=Wt||mt,ae=ae||Tt,(rt!==x||Lt!==A)&&(i.blendEquationSeparate(T[rt],T[Lt]),x=rt,A=Lt),(mt!==b||Tt!==v||Wt!==P||ae!==y)&&(i.blendFuncSeparate(L[mt],L[Tt],L[Wt],L[ae]),b=mt,v=Tt,P=Wt,y=ae),w=O,E=null}function $(O,rt){O.side===fn?xt(2884):St(2884);let mt=O.side===Le;rt&&(mt=!mt),j(mt),O.blending===es&&O.transparent===!1?U(qn):U(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),o.setMask(O.colorWrite);const Tt=O.stencilWrite;c.setTest(Tt),Tt&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Y(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?St(32926):xt(32926)}function j(O){R!==O&&(O?i.frontFace(2304):i.frontFace(2305),R=O)}function ct(O){O!==Ap?(St(2884),O!==X&&(O===Gl?i.cullFace(1029):O===Ep?i.cullFace(1028):i.cullFace(1032))):xt(2884),X=O}function dt(O){O!==tt&&(nt&&i.lineWidth(O),tt=O)}function Y(O,rt,mt){O?(St(32823),(F!==rt||N!==mt)&&(i.polygonOffset(rt,mt),F=rt,N=mt)):xt(32823)}function ut(O){O?St(3089):xt(3089)}function Q(O){O===void 0&&(O=33984+K-1),k!==O&&(i.activeTexture(O),k=O)}function S(O,rt,mt){mt===void 0&&(k===null?mt=33984+K-1:mt=k);let Tt=B[mt];Tt===void 0&&(Tt={type:void 0,texture:void 0},B[mt]=Tt),(Tt.type!==O||Tt.texture!==rt)&&(k!==mt&&(i.activeTexture(mt),k=mt),i.bindTexture(O,rt||H[O]),Tt.type=O,Tt.texture=rt)}function M(){const O=B[k];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function vt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function D(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function V(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function bt(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Mt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ct(O){ht.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),ht.copy(O))}function wt(O){at.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),at.copy(O))}function Dt(O,rt){let mt=h.get(rt);mt===void 0&&(mt=new WeakMap,h.set(rt,mt));let Tt=mt.get(O);Tt===void 0&&(Tt=i.getUniformBlockIndex(rt,O.name),mt.set(O,Tt))}function Ut(O,rt){const Tt=h.get(rt).get(O);u.get(O)!==Tt&&(i.uniformBlockBinding(rt,Tt,O.__bindingPointIndex),u.set(O,Tt))}function jt(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},k=null,B={},p={},g=new WeakMap,m=[],d=null,_=!1,w=null,x=null,b=null,v=null,A=null,P=null,y=null,E=!1,R=null,X=null,tt=null,F=null,N=null,ht.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:St,disable:xt,bindFramebuffer:gt,drawBuffers:lt,useProgram:Et,setBlending:U,setMaterial:$,setFlipSided:j,setCullFace:ct,setLineWidth:dt,setPolygonOffset:Y,setScissorTest:ut,activeTexture:Q,bindTexture:S,unbindTexture:M,compressedTexImage2D:z,compressedTexImage3D:Z,texImage2D:At,texImage3D:Mt,updateUBOMapping:Dt,uniformBlockBinding:Ut,texStorage2D:V,texStorage3D:bt,texSubImage2D:it,texSubImage3D:pt,compressedTexSubImage2D:vt,compressedTexSubImage3D:D,scissor:Ct,viewport:wt,reset:jt}}function Av(i,t,e,n,s,r,a){const o=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,h=s.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),g=new WeakMap;let m;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(S,M){return _?new OffscreenCanvas(S,M):$r("canvas")}function x(S,M,z,Z){let it=1;if((S.width>Z||S.height>Z)&&(it=Z/Math.max(S.width,S.height)),it<1||M===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const pt=M?qr:Math.floor,vt=pt(it*S.width),D=pt(it*S.height);m===void 0&&(m=w(vt,D));const V=z?w(vt,D):m;return V.width=vt,V.height=D,V.getContext("2d").drawImage(S,0,0,vt,D),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+vt+"x"+D+")."),V}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function b(S){return Ta(S.width)&&Ta(S.height)}function v(S){return o?!1:S.wrapS!==$e||S.wrapT!==$e||S.minFilter!==Se&&S.minFilter!==Ne}function A(S,M){return S.generateMipmaps&&M&&S.minFilter!==Se&&S.minFilter!==Ne}function P(S){i.generateMipmap(S)}function y(S,M,z,Z,it=!1){if(o===!1)return M;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let pt=M;return M===6403&&(z===5126&&(pt=33326),z===5131&&(pt=33325),z===5121&&(pt=33321)),M===33319&&(z===5126&&(pt=33328),z===5131&&(pt=33327),z===5121&&(pt=33323)),M===6408&&(z===5126&&(pt=34836),z===5131&&(pt=34842),z===5121&&(pt=Z===Jt&&it===!1?35907:32856),z===32819&&(pt=32854),z===32820&&(pt=32855)),(pt===33325||pt===33326||pt===33327||pt===33328||pt===34842||pt===34836)&&t.get("EXT_color_buffer_float"),pt}function E(S,M,z){return A(S,z)===!0||S.isFramebufferTexture&&S.minFilter!==Se&&S.minFilter!==Ne?Math.log2(Math.max(M.width,M.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?M.mipmaps.length:1}function R(S){return S===Se||S===Yl||S===Zl?9728:9729}function X(S){const M=S.target;M.removeEventListener("dispose",X),F(M),M.isVideoTexture&&g.delete(M)}function tt(S){const M=S.target;M.removeEventListener("dispose",tt),K(M)}function F(S){const M=n.get(S);if(M.__webglInit===void 0)return;const z=S.source,Z=d.get(z);if(Z){const it=Z[M.__cacheKey];it.usedTimes--,it.usedTimes===0&&N(S),Object.keys(Z).length===0&&d.delete(z)}n.remove(S)}function N(S){const M=n.get(S);i.deleteTexture(M.__webglTexture);const z=S.source,Z=d.get(z);delete Z[M.__cacheKey],a.memory.textures--}function K(S){const M=S.texture,z=n.get(S),Z=n.get(M);if(Z.__webglTexture!==void 0&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let it=0;it<6;it++)i.deleteFramebuffer(z.__webglFramebuffer[it]),z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer[it]);else{if(i.deleteFramebuffer(z.__webglFramebuffer),z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let it=0;it<z.__webglColorRenderbuffer.length;it++)z.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(z.__webglColorRenderbuffer[it]);z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let it=0,pt=M.length;it<pt;it++){const vt=n.get(M[it]);vt.__webglTexture&&(i.deleteTexture(vt.__webglTexture),a.memory.textures--),n.remove(M[it])}n.remove(M),n.remove(S)}let nt=0;function J(){nt=0}function W(){const S=nt;return S>=l&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+l),nt+=1,S}function k(S){const M=[];return M.push(S.wrapS),M.push(S.wrapT),M.push(S.wrapR||0),M.push(S.magFilter),M.push(S.minFilter),M.push(S.anisotropy),M.push(S.internalFormat),M.push(S.format),M.push(S.type),M.push(S.generateMipmaps),M.push(S.premultiplyAlpha),M.push(S.flipY),M.push(S.unpackAlignment),M.push(S.encoding),M.join()}function B(S,M){const z=n.get(S);if(S.isVideoTexture&&ut(S),S.isRenderTargetTexture===!1&&S.version>0&&z.__version!==S.version){const Z=S.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xt(z,S,M);return}}e.bindTexture(3553,z.__webglTexture,33984+M)}function et(S,M){const z=n.get(S);if(S.version>0&&z.__version!==S.version){xt(z,S,M);return}e.bindTexture(35866,z.__webglTexture,33984+M)}function ot(S,M){const z=n.get(S);if(S.version>0&&z.__version!==S.version){xt(z,S,M);return}e.bindTexture(32879,z.__webglTexture,33984+M)}function ht(S,M){const z=n.get(S);if(S.version>0&&z.__version!==S.version){gt(z,S,M);return}e.bindTexture(34067,z.__webglTexture,33984+M)}const at={[Sa]:10497,[$e]:33071,[Aa]:33648},_t={[Se]:9728,[Yl]:9984,[Zl]:9986,[Ne]:9729,[tm]:9985,[oo]:9987};function H(S,M,z){if(z?(i.texParameteri(S,10242,at[M.wrapS]),i.texParameteri(S,10243,at[M.wrapT]),(S===32879||S===35866)&&i.texParameteri(S,32882,at[M.wrapR]),i.texParameteri(S,10240,_t[M.magFilter]),i.texParameteri(S,10241,_t[M.minFilter])):(i.texParameteri(S,10242,33071),i.texParameteri(S,10243,33071),(S===32879||S===35866)&&i.texParameteri(S,32882,33071),(M.wrapS!==$e||M.wrapT!==$e)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,10240,R(M.magFilter)),i.texParameteri(S,10241,R(M.minFilter)),M.minFilter!==Se&&M.minFilter!==Ne&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const Z=t.get("EXT_texture_filter_anisotropic");if(M.type===pi&&t.has("OES_texture_float_linear")===!1||o===!1&&M.type===ks&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(S,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function St(S,M){let z=!1;S.__webglInit===void 0&&(S.__webglInit=!0,M.addEventListener("dispose",X));const Z=M.source;let it=d.get(Z);it===void 0&&(it={},d.set(Z,it));const pt=k(M);if(pt!==S.__cacheKey){it[pt]===void 0&&(it[pt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),it[pt].usedTimes++;const vt=it[S.__cacheKey];vt!==void 0&&(it[S.__cacheKey].usedTimes--,vt.usedTimes===0&&N(M)),S.__cacheKey=pt,S.__webglTexture=it[pt].texture}return z}function xt(S,M,z){let Z=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=35866),M.isData3DTexture&&(Z=32879);const it=St(S,M),pt=M.source;e.bindTexture(Z,S.__webglTexture,33984+z);const vt=n.get(pt);if(pt.version!==vt.__version||it===!0){e.activeTexture(33984+z),i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);const D=v(M)&&b(M.image)===!1;let V=x(M.image,D,!1,u);V=Q(M,V);const bt=b(V)||o,At=r.convert(M.format,M.encoding);let Mt=r.convert(M.type),Ct=y(M.internalFormat,At,Mt,M.encoding,M.isVideoTexture);H(Z,M,bt);let wt;const Dt=M.mipmaps,Ut=o&&M.isVideoTexture!==!0,jt=vt.__version===void 0||it===!0,O=E(M,V,bt);if(M.isDepthTexture)Ct=6402,o?M.type===pi?Ct=36012:M.type===di?Ct=33190:M.type===ns?Ct=35056:Ct=33189:M.type===pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===vi&&Ct===6402&&M.type!==bf&&M.type!==di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=di,Mt=r.convert(M.type)),M.format===ls&&Ct===6402&&(Ct=34041,M.type!==ns&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=ns,Mt=r.convert(M.type))),jt&&(Ut?e.texStorage2D(3553,1,Ct,V.width,V.height):e.texImage2D(3553,0,Ct,V.width,V.height,0,At,Mt,null));else if(M.isDataTexture)if(Dt.length>0&&bt){Ut&&jt&&e.texStorage2D(3553,O,Ct,Dt[0].width,Dt[0].height);for(let rt=0,mt=Dt.length;rt<mt;rt++)wt=Dt[rt],Ut?e.texSubImage2D(3553,rt,0,0,wt.width,wt.height,At,Mt,wt.data):e.texImage2D(3553,rt,Ct,wt.width,wt.height,0,At,Mt,wt.data);M.generateMipmaps=!1}else Ut?(jt&&e.texStorage2D(3553,O,Ct,V.width,V.height),e.texSubImage2D(3553,0,0,0,V.width,V.height,At,Mt,V.data)):e.texImage2D(3553,0,Ct,V.width,V.height,0,At,Mt,V.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ut&&jt&&e.texStorage3D(35866,O,Ct,Dt[0].width,Dt[0].height,V.depth);for(let rt=0,mt=Dt.length;rt<mt;rt++)wt=Dt[rt],M.format!==je?At!==null?Ut?e.compressedTexSubImage3D(35866,rt,0,0,0,wt.width,wt.height,V.depth,At,wt.data,0,0):e.compressedTexImage3D(35866,rt,Ct,wt.width,wt.height,V.depth,0,wt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?e.texSubImage3D(35866,rt,0,0,0,wt.width,wt.height,V.depth,At,Mt,wt.data):e.texImage3D(35866,rt,Ct,wt.width,wt.height,V.depth,0,At,Mt,wt.data)}else{Ut&&jt&&e.texStorage2D(3553,O,Ct,Dt[0].width,Dt[0].height);for(let rt=0,mt=Dt.length;rt<mt;rt++)wt=Dt[rt],M.format!==je?At!==null?Ut?e.compressedTexSubImage2D(3553,rt,0,0,wt.width,wt.height,At,wt.data):e.compressedTexImage2D(3553,rt,Ct,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?e.texSubImage2D(3553,rt,0,0,wt.width,wt.height,At,Mt,wt.data):e.texImage2D(3553,rt,Ct,wt.width,wt.height,0,At,Mt,wt.data)}else if(M.isDataArrayTexture)Ut?(jt&&e.texStorage3D(35866,O,Ct,V.width,V.height,V.depth),e.texSubImage3D(35866,0,0,0,0,V.width,V.height,V.depth,At,Mt,V.data)):e.texImage3D(35866,0,Ct,V.width,V.height,V.depth,0,At,Mt,V.data);else if(M.isData3DTexture)Ut?(jt&&e.texStorage3D(32879,O,Ct,V.width,V.height,V.depth),e.texSubImage3D(32879,0,0,0,0,V.width,V.height,V.depth,At,Mt,V.data)):e.texImage3D(32879,0,Ct,V.width,V.height,V.depth,0,At,Mt,V.data);else if(M.isFramebufferTexture){if(jt)if(Ut)e.texStorage2D(3553,O,Ct,V.width,V.height);else{let rt=V.width,mt=V.height;for(let Tt=0;Tt<O;Tt++)e.texImage2D(3553,Tt,Ct,rt,mt,0,At,Mt,null),rt>>=1,mt>>=1}}else if(Dt.length>0&&bt){Ut&&jt&&e.texStorage2D(3553,O,Ct,Dt[0].width,Dt[0].height);for(let rt=0,mt=Dt.length;rt<mt;rt++)wt=Dt[rt],Ut?e.texSubImage2D(3553,rt,0,0,At,Mt,wt):e.texImage2D(3553,rt,Ct,At,Mt,wt);M.generateMipmaps=!1}else Ut?(jt&&e.texStorage2D(3553,O,Ct,V.width,V.height),e.texSubImage2D(3553,0,0,0,At,Mt,V)):e.texImage2D(3553,0,Ct,At,Mt,V);A(M,bt)&&P(Z),vt.__version=pt.version,M.onUpdate&&M.onUpdate(M)}S.__version=M.version}function gt(S,M,z){if(M.image.length!==6)return;const Z=St(S,M),it=M.source;e.bindTexture(34067,S.__webglTexture,33984+z);const pt=n.get(it);if(it.version!==pt.__version||Z===!0){e.activeTexture(33984+z),i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);const vt=M.isCompressedTexture||M.image[0].isCompressedTexture,D=M.image[0]&&M.image[0].isDataTexture,V=[];for(let rt=0;rt<6;rt++)!vt&&!D?V[rt]=x(M.image[rt],!1,!0,c):V[rt]=D?M.image[rt].image:M.image[rt],V[rt]=Q(M,V[rt]);const bt=V[0],At=b(bt)||o,Mt=r.convert(M.format,M.encoding),Ct=r.convert(M.type),wt=y(M.internalFormat,Mt,Ct,M.encoding),Dt=o&&M.isVideoTexture!==!0,Ut=pt.__version===void 0||Z===!0;let jt=E(M,bt,At);H(34067,M,At);let O;if(vt){Dt&&Ut&&e.texStorage2D(34067,jt,wt,bt.width,bt.height);for(let rt=0;rt<6;rt++){O=V[rt].mipmaps;for(let mt=0;mt<O.length;mt++){const Tt=O[mt];M.format!==je?Mt!==null?Dt?e.compressedTexSubImage2D(34069+rt,mt,0,0,Tt.width,Tt.height,Mt,Tt.data):e.compressedTexImage2D(34069+rt,mt,wt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?e.texSubImage2D(34069+rt,mt,0,0,Tt.width,Tt.height,Mt,Ct,Tt.data):e.texImage2D(34069+rt,mt,wt,Tt.width,Tt.height,0,Mt,Ct,Tt.data)}}}else{O=M.mipmaps,Dt&&Ut&&(O.length>0&&jt++,e.texStorage2D(34067,jt,wt,V[0].width,V[0].height));for(let rt=0;rt<6;rt++)if(D){Dt?e.texSubImage2D(34069+rt,0,0,0,V[rt].width,V[rt].height,Mt,Ct,V[rt].data):e.texImage2D(34069+rt,0,wt,V[rt].width,V[rt].height,0,Mt,Ct,V[rt].data);for(let mt=0;mt<O.length;mt++){const Lt=O[mt].image[rt].image;Dt?e.texSubImage2D(34069+rt,mt+1,0,0,Lt.width,Lt.height,Mt,Ct,Lt.data):e.texImage2D(34069+rt,mt+1,wt,Lt.width,Lt.height,0,Mt,Ct,Lt.data)}}else{Dt?e.texSubImage2D(34069+rt,0,0,0,Mt,Ct,V[rt]):e.texImage2D(34069+rt,0,wt,Mt,Ct,V[rt]);for(let mt=0;mt<O.length;mt++){const Tt=O[mt];Dt?e.texSubImage2D(34069+rt,mt+1,0,0,Mt,Ct,Tt.image[rt]):e.texImage2D(34069+rt,mt+1,wt,Mt,Ct,Tt.image[rt])}}}A(M,At)&&P(34067),pt.__version=it.version,M.onUpdate&&M.onUpdate(M)}S.__version=M.version}function lt(S,M,z,Z,it){const pt=r.convert(z.format,z.encoding),vt=r.convert(z.type),D=y(z.internalFormat,pt,vt,z.encoding);n.get(M).__hasExternalTextures||(it===32879||it===35866?e.texImage3D(it,0,D,M.width,M.height,M.depth,0,pt,vt,null):e.texImage2D(it,0,D,M.width,M.height,0,pt,vt,null)),e.bindFramebuffer(36160,S),Y(M)?f.framebufferTexture2DMultisampleEXT(36160,Z,it,n.get(z).__webglTexture,0,dt(M)):(it===3553||it>=34069&&it<=34074)&&i.framebufferTexture2D(36160,Z,it,n.get(z).__webglTexture,0),e.bindFramebuffer(36160,null)}function Et(S,M,z){if(i.bindRenderbuffer(36161,S),M.depthBuffer&&!M.stencilBuffer){let Z=33189;if(z||Y(M)){const it=M.depthTexture;it&&it.isDepthTexture&&(it.type===pi?Z=36012:it.type===di&&(Z=33190));const pt=dt(M);Y(M)?f.renderbufferStorageMultisampleEXT(36161,pt,Z,M.width,M.height):i.renderbufferStorageMultisample(36161,pt,Z,M.width,M.height)}else i.renderbufferStorage(36161,Z,M.width,M.height);i.framebufferRenderbuffer(36160,36096,36161,S)}else if(M.depthBuffer&&M.stencilBuffer){const Z=dt(M);z&&Y(M)===!1?i.renderbufferStorageMultisample(36161,Z,35056,M.width,M.height):Y(M)?f.renderbufferStorageMultisampleEXT(36161,Z,35056,M.width,M.height):i.renderbufferStorage(36161,34041,M.width,M.height),i.framebufferRenderbuffer(36160,33306,36161,S)}else{const Z=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let it=0;it<Z.length;it++){const pt=Z[it],vt=r.convert(pt.format,pt.encoding),D=r.convert(pt.type),V=y(pt.internalFormat,vt,D,pt.encoding),bt=dt(M);z&&Y(M)===!1?i.renderbufferStorageMultisample(36161,bt,V,M.width,M.height):Y(M)?f.renderbufferStorageMultisampleEXT(36161,bt,V,M.width,M.height):i.renderbufferStorage(36161,V,M.width,M.height)}}i.bindRenderbuffer(36161,null)}function T(S,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,S),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),B(M.depthTexture,0);const Z=n.get(M.depthTexture).__webglTexture,it=dt(M);if(M.depthTexture.format===vi)Y(M)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Z,0,it):i.framebufferTexture2D(36160,36096,3553,Z,0);else if(M.depthTexture.format===ls)Y(M)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Z,0,it):i.framebufferTexture2D(36160,33306,3553,Z,0);else throw new Error("Unknown depthTexture format")}function L(S){const M=n.get(S),z=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");T(M.__webglFramebuffer,S)}else if(z){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)e.bindFramebuffer(36160,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]=i.createRenderbuffer(),Et(M.__webglDepthbuffer[Z],S,!1)}else e.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),Et(M.__webglDepthbuffer,S,!1);e.bindFramebuffer(36160,null)}function U(S,M,z){const Z=n.get(S);M!==void 0&&lt(Z.__webglFramebuffer,S,S.texture,36064,3553),z!==void 0&&L(S)}function $(S){const M=S.texture,z=n.get(S),Z=n.get(M);S.addEventListener("dispose",tt),S.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=M.version,a.memory.textures++);const it=S.isWebGLCubeRenderTarget===!0,pt=S.isWebGLMultipleRenderTargets===!0,vt=b(S)||o;if(it){z.__webglFramebuffer=[];for(let D=0;D<6;D++)z.__webglFramebuffer[D]=i.createFramebuffer()}else{if(z.__webglFramebuffer=i.createFramebuffer(),pt)if(s.drawBuffers){const D=S.texture;for(let V=0,bt=D.length;V<bt;V++){const At=n.get(D[V]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&S.samples>0&&Y(S)===!1){const D=pt?M:[M];z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,z.__webglMultisampledFramebuffer);for(let V=0;V<D.length;V++){const bt=D[V];z.__webglColorRenderbuffer[V]=i.createRenderbuffer(),i.bindRenderbuffer(36161,z.__webglColorRenderbuffer[V]);const At=r.convert(bt.format,bt.encoding),Mt=r.convert(bt.type),Ct=y(bt.internalFormat,At,Mt,bt.encoding,S.isXRRenderTarget===!0),wt=dt(S);i.renderbufferStorageMultisample(36161,wt,Ct,S.width,S.height),i.framebufferRenderbuffer(36160,36064+V,36161,z.__webglColorRenderbuffer[V])}i.bindRenderbuffer(36161,null),S.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Et(z.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(36160,null)}}if(it){e.bindTexture(34067,Z.__webglTexture),H(34067,M,vt);for(let D=0;D<6;D++)lt(z.__webglFramebuffer[D],S,M,36064,34069+D);A(M,vt)&&P(34067),e.unbindTexture()}else if(pt){const D=S.texture;for(let V=0,bt=D.length;V<bt;V++){const At=D[V],Mt=n.get(At);e.bindTexture(3553,Mt.__webglTexture),H(3553,At,vt),lt(z.__webglFramebuffer,S,At,36064+V,3553),A(At,vt)&&P(3553)}e.unbindTexture()}else{let D=3553;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(o?D=S.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(D,Z.__webglTexture),H(D,M,vt),lt(z.__webglFramebuffer,S,M,36064,D),A(M,vt)&&P(D),e.unbindTexture()}S.depthBuffer&&L(S)}function j(S){const M=b(S)||o,z=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Z=0,it=z.length;Z<it;Z++){const pt=z[Z];if(A(pt,M)){const vt=S.isWebGLCubeRenderTarget?34067:3553,D=n.get(pt).__webglTexture;e.bindTexture(vt,D),P(vt),e.unbindTexture()}}}function ct(S){if(o&&S.samples>0&&Y(S)===!1){const M=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],z=S.width,Z=S.height;let it=16384;const pt=[],vt=S.stencilBuffer?33306:36096,D=n.get(S),V=S.isWebGLMultipleRenderTargets===!0;if(V)for(let bt=0;bt<M.length;bt++)e.bindFramebuffer(36160,D.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+bt,36161,null),e.bindFramebuffer(36160,D.__webglFramebuffer),i.framebufferTexture2D(36009,36064+bt,3553,null,0);e.bindFramebuffer(36008,D.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,D.__webglFramebuffer);for(let bt=0;bt<M.length;bt++){pt.push(36064+bt),S.depthBuffer&&pt.push(vt);const At=D.__ignoreDepthValues!==void 0?D.__ignoreDepthValues:!1;if(At===!1&&(S.depthBuffer&&(it|=256),S.stencilBuffer&&(it|=1024)),V&&i.framebufferRenderbuffer(36008,36064,36161,D.__webglColorRenderbuffer[bt]),At===!0&&(i.invalidateFramebuffer(36008,[vt]),i.invalidateFramebuffer(36009,[vt])),V){const Mt=n.get(M[bt]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,Mt,0)}i.blitFramebuffer(0,0,z,Z,0,0,z,Z,it,9728),p&&i.invalidateFramebuffer(36008,pt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),V)for(let bt=0;bt<M.length;bt++){e.bindFramebuffer(36160,D.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+bt,36161,D.__webglColorRenderbuffer[bt]);const At=n.get(M[bt]).__webglTexture;e.bindFramebuffer(36160,D.__webglFramebuffer),i.framebufferTexture2D(36009,36064+bt,3553,At,0)}e.bindFramebuffer(36009,D.__webglMultisampledFramebuffer)}}function dt(S){return Math.min(h,S.samples)}function Y(S){const M=n.get(S);return o&&S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ut(S){const M=a.render.frame;g.get(S)!==M&&(g.set(S,M),S.update())}function Q(S,M){const z=S.encoding,Z=S.format,it=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Ea||z!==Mi&&(z===Jt?o===!1?t.has("EXT_sRGB")===!0&&Z===je?(S.format=Ea,S.minFilter=Ne,S.generateMipmaps=!1):M=Sf.sRGBToLinear(M):(Z!==je||it!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",z)),M}this.allocateTextureUnit=W,this.resetTextureUnits=J,this.setTexture2D=B,this.setTexture2DArray=et,this.setTexture3D=ot,this.setTextureCube=ht,this.rebindTextures=U,this.setupRenderTarget=$,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=L,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=Y}function Ev(i,t,e){const n=e.isWebGL2;function s(r,a=null){let o;if(r===bi)return 5121;if(r===sm)return 32819;if(r===rm)return 32820;if(r===em)return 5120;if(r===nm)return 5122;if(r===bf)return 5123;if(r===im)return 5124;if(r===di)return 5125;if(r===pi)return 5126;if(r===ks)return n?5131:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===om)return 6406;if(r===je)return 6408;if(r===lm)return 6409;if(r===cm)return 6410;if(r===vi)return 6402;if(r===ls)return 34041;if(r===um)return 6403;if(r===am)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Ea)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===fm)return 36244;if(r===hm)return 33319;if(r===dm)return 33320;if(r===pm)return 36249;if(r===Mo||r===wo||r===So||r===Ao)if(a===Jt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Mo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===wo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===So)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ao)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Mo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===wo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===So)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ao)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Kl||r===Jl||r===Ql||r===tc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Kl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Jl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ql)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===tc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===mm)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ec||r===nc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ec)return a===Jt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===nc)return a===Jt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ic||r===sc||r===rc||r===oc||r===ac||r===lc||r===cc||r===uc||r===fc||r===hc||r===dc||r===pc||r===mc||r===gc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===ic)return a===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===sc)return a===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===rc)return a===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===oc)return a===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ac)return a===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===lc)return a===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===cc)return a===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===uc)return a===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fc)return a===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===hc)return a===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===dc)return a===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===pc)return a===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===mc)return a===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===gc)return a===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===_c)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===_c)return a===Jt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===ns?n?34042:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class Tv extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ki extends se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cv={type:"move"};class Ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const m of t.hand.values()){const d=e.getJointPose(m,n);if(c.joints[m.jointName]===void 0){const w=new Ki;w.matrixAutoUpdate=!1,w.visible=!1,c.joints[m.jointName]=w,c.add(w)}const _=c.joints[m.jointName];d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}}class Lv extends Qe{constructor(t,e,n,s,r,a,o,l,c,u){if(u=u!==void 0?u:vi,u!==vi&&u!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===vi&&(n=di),n===void 0&&u===ls&&(n=ns),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Se,this.minFilter=l!==void 0?l:Se,this.flipY=!1,this.generateMipmaps=!1}}class Pv extends Ei{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=null,c=null,u=null,h=null,f=null,p=null;const g=e.getContextAttributes();let m=null,d=null;const _=[],w=[],x=new Oe;x.layers.enable(1),x.viewport=new ce;const b=new Oe;b.layers.enable(2),b.viewport=new ce;const v=[x,b],A=new Tv;A.layers.enable(1),A.layers.enable(2);let P=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let B=_[k];return B===void 0&&(B=new Ko,_[k]=B),B.getTargetRaySpace()},this.getControllerGrip=function(k){let B=_[k];return B===void 0&&(B=new Ko,_[k]=B),B.getGripSpace()},this.getHand=function(k){let B=_[k];return B===void 0&&(B=new Ko,_[k]=B),B.getHandSpace()};function E(k){const B=w.indexOf(k.inputSource);if(B===-1)return;const et=_[B];et!==void 0&&et.dispatchEvent({type:k.type,data:k.inputSource})}function R(){s.removeEventListener("select",E),s.removeEventListener("selectstart",E),s.removeEventListener("selectend",E),s.removeEventListener("squeeze",E),s.removeEventListener("squeezestart",E),s.removeEventListener("squeezeend",E),s.removeEventListener("end",R),s.removeEventListener("inputsourceschange",X);for(let k=0;k<_.length;k++){const B=w[k];B!==null&&(w[k]=null,_[k].disconnect(B))}P=null,y=null,t.setRenderTarget(m),f=null,h=null,u=null,s=null,d=null,W.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",E),s.addEventListener("selectstart",E),s.addEventListener("selectend",E),s.addEventListener("squeeze",E),s.addEventListener("squeezestart",E),s.addEventListener("squeezeend",E),s.addEventListener("end",R),s.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await e.makeXRCompatible(),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const B={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,B),s.updateRenderState({baseLayer:f}),d=new wi(f.framebufferWidth,f.framebufferHeight,{format:je,type:bi,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let B=null,et=null,ot=null;g.depth&&(ot=g.stencil?35056:33190,B=g.stencil?ls:vi,et=g.stencil?ns:di);const ht={colorFormat:32856,depthFormat:ot,scaleFactor:r};u=new XRWebGLBinding(s,e),h=u.createProjectionLayer(ht),s.updateRenderState({layers:[h]}),d=new wi(h.textureWidth,h.textureHeight,{format:je,type:bi,depthTexture:new Lv(h.textureWidth,h.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const at=t.properties.get(d);at.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await s.requestReferenceSpace(o),W.setContext(s),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function X(k){for(let B=0;B<k.removed.length;B++){const et=k.removed[B],ot=w.indexOf(et);ot>=0&&(w[ot]=null,_[ot].dispatchEvent({type:"disconnected",data:et}))}for(let B=0;B<k.added.length;B++){const et=k.added[B];let ot=w.indexOf(et);if(ot===-1){for(let at=0;at<_.length;at++)if(at>=w.length){w.push(et),ot=at;break}else if(w[at]===null){w[at]=et,ot=at;break}if(ot===-1)break}const ht=_[ot];ht&&ht.dispatchEvent({type:"connected",data:et})}}const tt=new I,F=new I;function N(k,B,et){tt.setFromMatrixPosition(B.matrixWorld),F.setFromMatrixPosition(et.matrixWorld);const ot=tt.distanceTo(F),ht=B.projectionMatrix.elements,at=et.projectionMatrix.elements,_t=ht[14]/(ht[10]-1),H=ht[14]/(ht[10]+1),St=(ht[9]+1)/ht[5],xt=(ht[9]-1)/ht[5],gt=(ht[8]-1)/ht[0],lt=(at[8]+1)/at[0],Et=_t*gt,T=_t*lt,L=ot/(-gt+lt),U=L*-gt;B.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(U),k.translateZ(L),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const $=_t+L,j=H+L,ct=Et-U,dt=T+(ot-U),Y=St*H/j*$,ut=xt*H/j*$;k.projectionMatrix.makePerspective(ct,dt,Y,ut,$,j)}function K(k,B){B===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(B.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;A.near=b.near=x.near=k.near,A.far=b.far=x.far=k.far,(P!==A.near||y!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),P=A.near,y=A.far);const B=k.parent,et=A.cameras;K(A,B);for(let ht=0;ht<et.length;ht++)K(et[ht],B);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),k.matrix.copy(A.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);const ot=k.children;for(let ht=0,at=ot.length;ht<at;ht++)ot[ht].updateMatrixWorld(!0);et.length===2?N(A,x,b):A.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(k){h!==null&&(h.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)};let nt=null;function J(k,B){if(c=B.getViewerPose(l||a),p=B,c!==null){const et=c.views;f!==null&&(t.setRenderTargetFramebuffer(d,f.framebuffer),t.setRenderTarget(d));let ot=!1;et.length!==A.cameras.length&&(A.cameras.length=0,ot=!0);for(let ht=0;ht<et.length;ht++){const at=et[ht];let _t=null;if(f!==null)_t=f.getViewport(at);else{const St=u.getViewSubImage(h,at);_t=St.viewport,ht===0&&(t.setRenderTargetTextures(d,St.colorTexture,h.ignoreDepthValues?void 0:St.depthStencilTexture),t.setRenderTarget(d))}let H=v[ht];H===void 0&&(H=new Oe,H.layers.enable(ht),H.viewport=new ce,v[ht]=H),H.matrix.fromArray(at.transform.matrix),H.projectionMatrix.fromArray(at.projectionMatrix),H.viewport.set(_t.x,_t.y,_t.width,_t.height),ht===0&&A.matrix.copy(H.matrix),ot===!0&&A.cameras.push(H)}}for(let et=0;et<_.length;et++){const ot=w[et],ht=_[et];ot!==null&&ht!==void 0&&ht.update(ot,B,l||a)}nt&&nt(k,B),p=null}const W=new Rf;W.setAnimationLoop(J),this.setAnimationLoop=function(k){nt=k},this.dispose=function(){}}}function Dv(i,t){function e(m,d){m.fogColor.value.copy(d.color),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function n(m,d,_,w,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&f(m,d,x)):d.isMeshMatcapMaterial?(s(m,d),p(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),g(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(r(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?o(m,d,_,w):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.bumpMap&&(m.bumpMap.value=d.bumpMap,m.bumpScale.value=d.bumpScale,d.side===Le&&(m.bumpScale.value*=-1)),d.displacementMap&&(m.displacementMap.value=d.displacementMap,m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap),d.normalMap&&(m.normalMap.value=d.normalMap,m.normalScale.value.copy(d.normalScale),d.side===Le&&m.normalScale.value.negate()),d.specularMap&&(m.specularMap.value=d.specularMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=t.get(d).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const b=i.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*b}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity);let w;d.map?w=d.map:d.specularMap?w=d.specularMap:d.displacementMap?w=d.displacementMap:d.normalMap?w=d.normalMap:d.bumpMap?w=d.bumpMap:d.roughnessMap?w=d.roughnessMap:d.metalnessMap?w=d.metalnessMap:d.alphaMap?w=d.alphaMap:d.emissiveMap?w=d.emissiveMap:d.clearcoatMap?w=d.clearcoatMap:d.clearcoatNormalMap?w=d.clearcoatNormalMap:d.clearcoatRoughnessMap?w=d.clearcoatRoughnessMap:d.iridescenceMap?w=d.iridescenceMap:d.iridescenceThicknessMap?w=d.iridescenceThicknessMap:d.specularIntensityMap?w=d.specularIntensityMap:d.specularColorMap?w=d.specularColorMap:d.transmissionMap?w=d.transmissionMap:d.thicknessMap?w=d.thicknessMap:d.sheenColorMap?w=d.sheenColorMap:d.sheenRoughnessMap&&(w=d.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix));let x;d.aoMap?x=d.aoMap:d.lightMap&&(x=d.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uv2Transform.value.copy(x.matrix))}function r(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function o(m,d,_,w){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=w*.5,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let x;d.map?x=d.map:d.alphaMap&&(x=d.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.roughness.value=d.roughness,m.metalness.value=d.metalness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),m.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Le&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap)}function p(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){m.referencePosition.value.copy(d.referencePosition),m.nearDistance.value=d.nearDistance,m.farDistance.value=d.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Rv(i,t,e,n){let s={},r={},a=[];const o=e.isWebGL2?i.getParameter(35375):0;function l(w,x){const b=x.program;n.uniformBlockBinding(w,b)}function c(w,x){let b=s[w.id];b===void 0&&(g(w),b=u(w),s[w.id]=b,w.addEventListener("dispose",d));const v=x.program;n.updateUBOMapping(w,v);const A=t.render.frame;r[w.id]!==A&&(f(w),r[w.id]=A)}function u(w){const x=h();w.__bindingPointIndex=x;const b=i.createBuffer(),v=w.__size,A=w.usage;return i.bindBuffer(35345,b),i.bufferData(35345,v,A),i.bindBuffer(35345,null),i.bindBufferBase(35345,x,b),b}function h(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const x=s[w.id],b=w.uniforms,v=w.__cache;i.bindBuffer(35345,x);for(let A=0,P=b.length;A<P;A++){const y=b[A];if(p(y,A,v)===!0){const E=y.value,R=y.__offset;typeof E=="number"?(y.__data[0]=E,i.bufferSubData(35345,R,y.__data)):(y.value.isMatrix3?(y.__data[0]=y.value.elements[0],y.__data[1]=y.value.elements[1],y.__data[2]=y.value.elements[2],y.__data[3]=y.value.elements[0],y.__data[4]=y.value.elements[3],y.__data[5]=y.value.elements[4],y.__data[6]=y.value.elements[5],y.__data[7]=y.value.elements[0],y.__data[8]=y.value.elements[6],y.__data[9]=y.value.elements[7],y.__data[10]=y.value.elements[8],y.__data[11]=y.value.elements[0]):E.toArray(y.__data),i.bufferSubData(35345,R,y.__data))}}i.bindBuffer(35345,null)}function p(w,x,b){const v=w.value;if(b[x]===void 0)return typeof v=="number"?b[x]=v:b[x]=v.clone(),!0;if(typeof v=="number"){if(b[x]!==v)return b[x]=v,!0}else{const A=b[x];if(A.equals(v)===!1)return A.copy(v),!0}return!1}function g(w){const x=w.uniforms;let b=0;const v=16;let A=0;for(let P=0,y=x.length;P<y;P++){const E=x[P],R=m(E);if(E.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=b,P>0){A=b%v;const X=v-A;A!==0&&X-R.boundary<0&&(b+=v-A,E.__offset=b)}b+=R.storage}return A=b%v,A>0&&(b+=v-A),w.__size=b,w.__cache={},this}function m(w){const x=w.value,b={boundary:0,storage:0};return typeof x=="number"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),b}function d(w){const x=w.target;x.removeEventListener("dispose",d);const b=a.indexOf(x.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function _(){for(const w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:_}}function Iv(){const i=$r("canvas");return i.style.display="block",i}function Uf(i={}){this.isWebGLRenderer=!0;const t=i.canvas!==void 0?i.canvas:Iv(),e=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,r=i.antialias!==void 0?i.antialias:!1,a=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,o=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,f=null;const p=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Mi,this.physicallyCorrectLights=!1,this.toneMapping=En,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let d=!1,_=0,w=0,x=null,b=-1,v=null;const A=new ce,P=new ce;let y=null,E=t.width,R=t.height,X=1,tt=null,F=null;const N=new ce(0,0,E,R),K=new ce(0,0,E,R);let nt=!1;const J=new ll;let W=!1,k=!1,B=null;const et=new Yt,ot=new Rt,ht=new I,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _t(){return x===null?X:1}let H=e;function St(C,q){for(let st=0;st<C.length;st++){const G=C[st],ft=t.getContext(G,q);if(ft!==null)return ft}return null}try{const C={alpha:!0,depth:n,stencil:s,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ol}`),t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",wt,!1),t.addEventListener("webglcontextcreationerror",Dt,!1),H===null){const q=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&q.shift(),H=St(q,C),H===null)throw St(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let xt,gt,lt,Et,T,L,U,$,j,ct,dt,Y,ut,Q,S,M,z,Z,it,pt,vt,D,V,bt;function At(){xt=new Wx(H),gt=new Ux(H,xt,i),xt.init(gt),D=new Ev(H,xt,gt),lt=new Sv(H,xt,gt),Et=new $x,T=new uv,L=new Av(H,xt,lt,T,gt,D,Et),U=new Vx(m),$=new Gx(m),j=new ng(H,gt),V=new Ox(H,xt,j,gt),ct=new Xx(H,j,Et,V),dt=new Kx(H,ct,j,Et),it=new Zx(H,gt,L),M=new Bx(T),Y=new cv(m,U,$,xt,gt,V,M),ut=new Dv(m,T),Q=new hv,S=new xv(xt,gt),Z=new Nx(m,U,$,lt,dt,u,a),z=new wv(m,dt,gt),bt=new Rv(H,Et,gt,lt),pt=new zx(H,xt,Et,gt),vt=new qx(H,xt,Et,gt),Et.programs=Y.programs,m.capabilities=gt,m.extensions=xt,m.properties=T,m.renderLists=Q,m.shadowMap=z,m.state=lt,m.info=Et}At();const Mt=new Pv(m,H);this.xr=Mt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=xt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=xt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(C){C!==void 0&&(X=C,this.setSize(E,R,!1))},this.getSize=function(C){return C.set(E,R)},this.setSize=function(C,q,st){if(Mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=C,R=q,t.width=Math.floor(C*X),t.height=Math.floor(q*X),st!==!1&&(t.style.width=C+"px",t.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(E*X,R*X).floor()},this.setDrawingBufferSize=function(C,q,st){E=C,R=q,X=st,t.width=Math.floor(C*st),t.height=Math.floor(q*st),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(A)},this.getViewport=function(C){return C.copy(N)},this.setViewport=function(C,q,st,G){C.isVector4?N.set(C.x,C.y,C.z,C.w):N.set(C,q,st,G),lt.viewport(A.copy(N).multiplyScalar(X).floor())},this.getScissor=function(C){return C.copy(K)},this.setScissor=function(C,q,st,G){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,q,st,G),lt.scissor(P.copy(K).multiplyScalar(X).floor())},this.getScissorTest=function(){return nt},this.setScissorTest=function(C){lt.setScissorTest(nt=C)},this.setOpaqueSort=function(C){tt=C},this.setTransparentSort=function(C){F=C},this.getClearColor=function(C){return C.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(C=!0,q=!0,st=!0){let G=0;C&&(G|=16384),q&&(G|=256),st&&(G|=1024),H.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",Dt,!1),Q.dispose(),S.dispose(),T.dispose(),U.dispose(),$.dispose(),dt.dispose(),V.dispose(),bt.dispose(),Y.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",Tt),Mt.removeEventListener("sessionend",Lt),B&&(B.dispose(),B=null),Wt.stop()};function Ct(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const C=Et.autoReset,q=z.enabled,st=z.autoUpdate,G=z.needsUpdate,ft=z.type;At(),Et.autoReset=C,z.enabled=q,z.autoUpdate=st,z.needsUpdate=G,z.type=ft}function Dt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ut(C){const q=C.target;q.removeEventListener("dispose",Ut),jt(q)}function jt(C){O(C),T.remove(C)}function O(C){const q=T.get(C).programs;q!==void 0&&(q.forEach(function(st){Y.releaseProgram(st)}),C.isShaderMaterial&&Y.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,st,G,ft,Pt){q===null&&(q=at);const It=ft.isMesh&&ft.matrixWorld.determinant()<0,zt=Xf(C,q,st,G,ft);lt.setMaterial(G,It);let Ft=st.index;const Xt=st.attributes.position;if(Ft===null){if(Xt===void 0||Xt.count===0)return}else if(Ft.count===0)return;let Vt=1;G.wireframe===!0&&(Ft=ct.getWireframeAttribute(st),Vt=2),V.setup(ft,G,zt,st,Ft);let Ht,Qt=pt;Ft!==null&&(Ht=j.get(Ft),Qt=vt,Qt.setIndex(Ht));const Qn=Ft!==null?Ft.count:Xt.count,Ci=st.drawRange.start*Vt,Li=st.drawRange.count*Vt,tn=Pt!==null?Pt.start*Vt:0,qt=Pt!==null?Pt.count*Vt:1/0,Pi=Math.max(Ci,tn),te=Math.min(Qn,Ci+Li,tn+qt)-1,Re=Math.max(0,te-Pi+1);if(Re!==0){if(ft.isMesh)G.wireframe===!0?(lt.setLineWidth(G.wireframeLinewidth*_t()),Qt.setMode(1)):Qt.setMode(4);else if(ft.isLine){let Pn=G.linewidth;Pn===void 0&&(Pn=1),lt.setLineWidth(Pn*_t()),ft.isLineSegments?Qt.setMode(1):ft.isLineLoop?Qt.setMode(2):Qt.setMode(3)}else ft.isPoints?Qt.setMode(0):ft.isSprite&&Qt.setMode(4);if(ft.isInstancedMesh)Qt.renderInstances(Pi,Re,ft.count);else if(st.isInstancedBufferGeometry){const Pn=Math.min(st.instanceCount,st._maxInstanceCount);Qt.renderInstances(Pi,Re,Pn)}else Qt.render(Pi,Re)}},this.compile=function(C,q){function st(G,ft,Pt){G.transparent===!0&&G.side===fn?(G.side=Le,G.needsUpdate=!0,De(G,ft,Pt),G.side=Kn,G.needsUpdate=!0,De(G,ft,Pt),G.side=fn):De(G,ft,Pt)}f=S.get(C),f.init(),g.push(f),C.traverseVisible(function(G){G.isLight&&G.layers.test(q.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights(m.physicallyCorrectLights),C.traverse(function(G){const ft=G.material;if(ft)if(Array.isArray(ft))for(let Pt=0;Pt<ft.length;Pt++){const It=ft[Pt];st(It,C,G)}else st(ft,C,G)}),g.pop(),f=null};let rt=null;function mt(C){rt&&rt(C)}function Tt(){Wt.stop()}function Lt(){Wt.start()}const Wt=new Rf;Wt.setAnimationLoop(mt),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(C){rt=C,Mt.setAnimationLoop(C),C===null?Wt.stop():Wt.start()},Mt.addEventListener("sessionstart",Tt),Mt.addEventListener("sessionend",Lt),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(q),q=Mt.getCamera()),C.isScene===!0&&C.onBeforeRender(m,C,q,x),f=S.get(C,g.length),f.init(),g.push(f),et.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),J.setFromProjectionMatrix(et),k=this.localClippingEnabled,W=M.init(this.clippingPlanes,k,q),h=Q.get(C,p.length),h.init(),p.push(h),ae(C,q,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(tt,F),W===!0&&M.beginShadows();const st=f.state.shadowsArray;if(z.render(st,C,q),W===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(h,C),f.setupLights(m.physicallyCorrectLights),q.isArrayCamera){const G=q.cameras;for(let ft=0,Pt=G.length;ft<Pt;ft++){const It=G[ft];he(h,C,It,It.viewport)}}else he(h,C,q);x!==null&&(L.updateMultisampleRenderTarget(x),L.updateRenderTargetMipmap(x)),C.isScene===!0&&C.onAfterRender(m,C,q),V.resetDefaultState(),b=-1,v=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function ae(C,q,st,G){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)st=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||J.intersectsSprite(C)){G&&ht.setFromMatrixPosition(C.matrixWorld).applyMatrix4(et);const It=dt.update(C),zt=C.material;zt.visible&&h.push(C,It,zt,st,ht.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==Et.render.frame&&(C.skeleton.update(),C.skeleton.frame=Et.render.frame),!C.frustumCulled||J.intersectsObject(C))){G&&ht.setFromMatrixPosition(C.matrixWorld).applyMatrix4(et);const It=dt.update(C),zt=C.material;if(Array.isArray(zt)){const Ft=It.groups;for(let Xt=0,Vt=Ft.length;Xt<Vt;Xt++){const Ht=Ft[Xt],Qt=zt[Ht.materialIndex];Qt&&Qt.visible&&h.push(C,It,Qt,st,ht.z,Ht)}}else zt.visible&&h.push(C,It,zt,st,ht.z,null)}}const Pt=C.children;for(let It=0,zt=Pt.length;It<zt;It++)ae(Pt[It],q,st,G)}function he(C,q,st,G){const ft=C.opaque,Pt=C.transmissive,It=C.transparent;f.setupLightsView(st),Pt.length>0&&Jn(ft,q,st),G&&lt.viewport(A.copy(G)),ft.length>0&&Kt(ft,q,st),Pt.length>0&&Kt(Pt,q,st),It.length>0&&Kt(It,q,st),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function Jn(C,q,st){const G=gt.isWebGL2;B===null&&(B=new wi(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")?ks:bi,minFilter:oo,samples:G&&r===!0?4:0})),m.getDrawingBufferSize(ot),G?B.setSize(ot.x,ot.y):B.setSize(qr(ot.x),qr(ot.y));const ft=m.getRenderTarget();m.setRenderTarget(B),m.clear();const Pt=m.toneMapping;m.toneMapping=En,Kt(C,q,st),m.toneMapping=Pt,L.updateMultisampleRenderTarget(B),L.updateRenderTargetMipmap(B),m.setRenderTarget(ft)}function Kt(C,q,st){const G=q.isScene===!0?q.overrideMaterial:null;for(let ft=0,Pt=C.length;ft<Pt;ft++){const It=C[ft],zt=It.object,Ft=It.geometry,Xt=G===null?It.material:G,Vt=It.group;zt.layers.test(st.layers)&&mn(zt,q,st,Ft,Xt,Vt)}}function mn(C,q,st,G,ft,Pt){C.onBeforeRender(m,q,st,G,ft,Pt),C.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ft.onBeforeRender(m,q,st,G,C,Pt),ft.transparent===!0&&ft.side===fn?(ft.side=Le,ft.needsUpdate=!0,m.renderBufferDirect(st,q,G,ft,C,Pt),ft.side=Kn,ft.needsUpdate=!0,m.renderBufferDirect(st,q,G,ft,C,Pt),ft.side=fn):m.renderBufferDirect(st,q,G,ft,C,Pt),C.onAfterRender(m,q,st,G,ft,Pt)}function De(C,q,st){q.isScene!==!0&&(q=at);const G=T.get(C),ft=f.state.lights,Pt=f.state.shadowsArray,It=ft.state.version,zt=Y.getParameters(C,ft.state,Pt,q,st),Ft=Y.getProgramCacheKey(zt);let Xt=G.programs;G.environment=C.isMeshStandardMaterial?q.environment:null,G.fog=q.fog,G.envMap=(C.isMeshStandardMaterial?$:U).get(C.envMap||G.environment),Xt===void 0&&(C.addEventListener("dispose",Ut),Xt=new Map,G.programs=Xt);let Vt=Xt.get(Ft);if(Vt!==void 0){if(G.currentProgram===Vt&&G.lightsStateVersion===It)return pl(C,zt),Vt}else zt.uniforms=Y.getUniforms(C),C.onBuild(st,zt,m),C.onBeforeCompile(zt,m),Vt=Y.acquireProgram(zt,Ft),Xt.set(Ft,Vt),G.uniforms=zt.uniforms;const Ht=G.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ht.clippingPlanes=M.uniform),pl(C,zt),G.needsLights=$f(C),G.lightsStateVersion=It,G.needsLights&&(Ht.ambientLightColor.value=ft.state.ambient,Ht.lightProbe.value=ft.state.probe,Ht.directionalLights.value=ft.state.directional,Ht.directionalLightShadows.value=ft.state.directionalShadow,Ht.spotLights.value=ft.state.spot,Ht.spotLightShadows.value=ft.state.spotShadow,Ht.rectAreaLights.value=ft.state.rectArea,Ht.ltc_1.value=ft.state.rectAreaLTC1,Ht.ltc_2.value=ft.state.rectAreaLTC2,Ht.pointLights.value=ft.state.point,Ht.pointLightShadows.value=ft.state.pointShadow,Ht.hemisphereLights.value=ft.state.hemi,Ht.directionalShadowMap.value=ft.state.directionalShadowMap,Ht.directionalShadowMatrix.value=ft.state.directionalShadowMatrix,Ht.spotShadowMap.value=ft.state.spotShadowMap,Ht.spotLightMatrix.value=ft.state.spotLightMatrix,Ht.spotLightMap.value=ft.state.spotLightMap,Ht.pointShadowMap.value=ft.state.pointShadowMap,Ht.pointShadowMatrix.value=ft.state.pointShadowMatrix);const Qt=Vt.getUniforms(),Qn=Ur.seqWithValue(Qt.seq,Ht);return G.currentProgram=Vt,G.uniformsList=Qn,Vt}function pl(C,q){const st=T.get(C);st.outputEncoding=q.outputEncoding,st.instancing=q.instancing,st.skinning=q.skinning,st.morphTargets=q.morphTargets,st.morphNormals=q.morphNormals,st.morphColors=q.morphColors,st.morphTargetsCount=q.morphTargetsCount,st.numClippingPlanes=q.numClippingPlanes,st.numIntersection=q.numClipIntersection,st.vertexAlphas=q.vertexAlphas,st.vertexTangents=q.vertexTangents,st.toneMapping=q.toneMapping}function Xf(C,q,st,G,ft){q.isScene!==!0&&(q=at),L.resetTextureUnits();const Pt=q.fog,It=G.isMeshStandardMaterial?q.environment:null,zt=x===null?m.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Mi,Ft=(G.isMeshStandardMaterial?$:U).get(G.envMap||It),Xt=G.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Vt=!!G.normalMap&&!!st.attributes.tangent,Ht=!!st.morphAttributes.position,Qt=!!st.morphAttributes.normal,Qn=!!st.morphAttributes.color,Ci=G.toneMapped?m.toneMapping:En,Li=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,tn=Li!==void 0?Li.length:0,qt=T.get(G),Pi=f.state.lights;if(W===!0&&(k===!0||C!==v)){const Ee=C===v&&G.id===b;M.setState(G,C,Ee)}let te=!1;G.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Pi.state.version||qt.outputEncoding!==zt||ft.isInstancedMesh&&qt.instancing===!1||!ft.isInstancedMesh&&qt.instancing===!0||ft.isSkinnedMesh&&qt.skinning===!1||!ft.isSkinnedMesh&&qt.skinning===!0||qt.envMap!==Ft||G.fog===!0&&qt.fog!==Pt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==M.numPlanes||qt.numIntersection!==M.numIntersection)||qt.vertexAlphas!==Xt||qt.vertexTangents!==Vt||qt.morphTargets!==Ht||qt.morphNormals!==Qt||qt.morphColors!==Qn||qt.toneMapping!==Ci||gt.isWebGL2===!0&&qt.morphTargetsCount!==tn)&&(te=!0):(te=!0,qt.__version=G.version);let Re=qt.currentProgram;te===!0&&(Re=De(G,q,ft));let Pn=!1,_s=!1,uo=!1;const _e=Re.getUniforms(),ti=qt.uniforms;if(lt.useProgram(Re.program)&&(Pn=!0,_s=!0,uo=!0),G.id!==b&&(b=G.id,_s=!0),Pn||v!==C){if(_e.setValue(H,"projectionMatrix",C.projectionMatrix),gt.logarithmicDepthBuffer&&_e.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),v!==C&&(v=C,_s=!0,uo=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const Ee=_e.map.cameraPosition;Ee!==void 0&&Ee.setValue(H,ht.setFromMatrixPosition(C.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&_e.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||ft.isSkinnedMesh)&&_e.setValue(H,"viewMatrix",C.matrixWorldInverse)}if(ft.isSkinnedMesh){_e.setOptional(H,ft,"bindMatrix"),_e.setOptional(H,ft,"bindMatrixInverse");const Ee=ft.skeleton;Ee&&(gt.floatVertexTextures?(Ee.boneTexture===null&&Ee.computeBoneTexture(),_e.setValue(H,"boneTexture",Ee.boneTexture,L),_e.setValue(H,"boneTextureSize",Ee.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const fo=st.morphAttributes;if((fo.position!==void 0||fo.normal!==void 0||fo.color!==void 0&&gt.isWebGL2===!0)&&it.update(ft,st,G,Re),(_s||qt.receiveShadow!==ft.receiveShadow)&&(qt.receiveShadow=ft.receiveShadow,_e.setValue(H,"receiveShadow",ft.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(ti.envMap.value=Ft,ti.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),_s&&(_e.setValue(H,"toneMappingExposure",m.toneMappingExposure),qt.needsLights&&qf(ti,uo),Pt&&G.fog===!0&&ut.refreshFogUniforms(ti,Pt),ut.refreshMaterialUniforms(ti,G,X,R,B),Ur.upload(H,qt.uniformsList,ti,L)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ur.upload(H,qt.uniformsList,ti,L),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&_e.setValue(H,"center",ft.center),_e.setValue(H,"modelViewMatrix",ft.modelViewMatrix),_e.setValue(H,"normalMatrix",ft.normalMatrix),_e.setValue(H,"modelMatrix",ft.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ee=G.uniformsGroups;for(let ho=0,jf=Ee.length;ho<jf;ho++)if(gt.isWebGL2){const ml=Ee[ho];bt.update(ml,Re),bt.bind(ml,Re)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Re}function qf(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function $f(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(C,q,st){T.get(C.texture).__webglTexture=q,T.get(C.depthTexture).__webglTexture=st;const G=T.get(C);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=st===void 0,G.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,q){const st=T.get(C);st.__webglFramebuffer=q,st.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(C,q=0,st=0){x=C,_=q,w=st;let G=!0,ft=null,Pt=!1,It=!1;if(C){const Ft=T.get(C);Ft.__useDefaultFramebuffer!==void 0?(lt.bindFramebuffer(36160,null),G=!1):Ft.__webglFramebuffer===void 0?L.setupRenderTarget(C):Ft.__hasExternalTextures&&L.rebindTextures(C,T.get(C.texture).__webglTexture,T.get(C.depthTexture).__webglTexture);const Xt=C.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(It=!0);const Vt=T.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(ft=Vt[q],Pt=!0):gt.isWebGL2&&C.samples>0&&L.useMultisampledRTT(C)===!1?ft=T.get(C).__webglMultisampledFramebuffer:ft=Vt,A.copy(C.viewport),P.copy(C.scissor),y=C.scissorTest}else A.copy(N).multiplyScalar(X).floor(),P.copy(K).multiplyScalar(X).floor(),y=nt;if(lt.bindFramebuffer(36160,ft)&&gt.drawBuffers&&G&&lt.drawBuffers(C,ft),lt.viewport(A),lt.scissor(P),lt.setScissorTest(y),Pt){const Ft=T.get(C.texture);H.framebufferTexture2D(36160,36064,34069+q,Ft.__webglTexture,st)}else if(It){const Ft=T.get(C.texture),Xt=q||0;H.framebufferTextureLayer(36160,36064,Ft.__webglTexture,st||0,Xt)}b=-1},this.readRenderTargetPixels=function(C,q,st,G,ft,Pt,It){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=T.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&It!==void 0&&(zt=zt[It]),zt){lt.bindFramebuffer(36160,zt);try{const Ft=C.texture,Xt=Ft.format,Vt=Ft.type;if(Xt!==je&&D.convert(Xt)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ht=Vt===ks&&(xt.has("EXT_color_buffer_half_float")||gt.isWebGL2&&xt.has("EXT_color_buffer_float"));if(Vt!==bi&&D.convert(Vt)!==H.getParameter(35738)&&!(Vt===pi&&(gt.isWebGL2||xt.has("OES_texture_float")||xt.has("WEBGL_color_buffer_float")))&&!Ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-G&&st>=0&&st<=C.height-ft&&H.readPixels(q,st,G,ft,D.convert(Xt),D.convert(Vt),Pt)}finally{const Ft=x!==null?T.get(x).__webglFramebuffer:null;lt.bindFramebuffer(36160,Ft)}}},this.copyFramebufferToTexture=function(C,q,st=0){const G=Math.pow(2,-st),ft=Math.floor(q.image.width*G),Pt=Math.floor(q.image.height*G);L.setTexture2D(q,0),H.copyTexSubImage2D(3553,st,0,0,C.x,C.y,ft,Pt),lt.unbindTexture()},this.copyTextureToTexture=function(C,q,st,G=0){const ft=q.image.width,Pt=q.image.height,It=D.convert(st.format),zt=D.convert(st.type);L.setTexture2D(st,0),H.pixelStorei(37440,st.flipY),H.pixelStorei(37441,st.premultiplyAlpha),H.pixelStorei(3317,st.unpackAlignment),q.isDataTexture?H.texSubImage2D(3553,G,C.x,C.y,ft,Pt,It,zt,q.image.data):q.isCompressedTexture?H.compressedTexSubImage2D(3553,G,C.x,C.y,q.mipmaps[0].width,q.mipmaps[0].height,It,q.mipmaps[0].data):H.texSubImage2D(3553,G,C.x,C.y,It,zt,q.image),G===0&&st.generateMipmaps&&H.generateMipmap(3553),lt.unbindTexture()},this.copyTextureToTexture3D=function(C,q,st,G,ft=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pt=C.max.x-C.min.x+1,It=C.max.y-C.min.y+1,zt=C.max.z-C.min.z+1,Ft=D.convert(G.format),Xt=D.convert(G.type);let Vt;if(G.isData3DTexture)L.setTexture3D(G,0),Vt=32879;else if(G.isDataArrayTexture)L.setTexture2DArray(G,0),Vt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,G.flipY),H.pixelStorei(37441,G.premultiplyAlpha),H.pixelStorei(3317,G.unpackAlignment);const Ht=H.getParameter(3314),Qt=H.getParameter(32878),Qn=H.getParameter(3316),Ci=H.getParameter(3315),Li=H.getParameter(32877),tn=st.isCompressedTexture?st.mipmaps[0]:st.image;H.pixelStorei(3314,tn.width),H.pixelStorei(32878,tn.height),H.pixelStorei(3316,C.min.x),H.pixelStorei(3315,C.min.y),H.pixelStorei(32877,C.min.z),st.isDataTexture||st.isData3DTexture?H.texSubImage3D(Vt,ft,q.x,q.y,q.z,Pt,It,zt,Ft,Xt,tn.data):st.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Vt,ft,q.x,q.y,q.z,Pt,It,zt,Ft,tn.data)):H.texSubImage3D(Vt,ft,q.x,q.y,q.z,Pt,It,zt,Ft,Xt,tn),H.pixelStorei(3314,Ht),H.pixelStorei(32878,Qt),H.pixelStorei(3316,Qn),H.pixelStorei(3315,Ci),H.pixelStorei(32877,Li),ft===0&&G.generateMipmaps&&H.generateMipmap(Vt),lt.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),lt.unbindTexture()},this.resetState=function(){_=0,w=0,x=null,lt.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Fv extends Uf{}Fv.prototype.isWebGL1Renderer=!0;class Nv extends se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.backgroundBlurriness=this.backgroundBlurriness),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class ul extends Ti{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Qc=new I,tu=new I,eu=new Yt,Jo=new ao,yr=new ps;class Bf extends se{constructor(t=new ke,e=new ul){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Qc.fromBufferAttribute(e,s-1),tu.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Qc.distanceTo(tu);t.setAttribute("lineDistance",new be(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(s),yr.radius+=r,t.ray.intersectsSphere(yr)===!1)return;eu.copy(s).invert(),Jo.copy(t.ray).applyMatrix4(eu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new I,u=new I,h=new I,f=new I,p=this.isLineSegments?2:1,g=n.index,d=n.attributes.position;if(g!==null){const _=Math.max(0,a.start),w=Math.min(g.count,a.start+a.count);for(let x=_,b=w-1;x<b;x+=p){const v=g.getX(x),A=g.getX(x+1);if(c.fromBufferAttribute(d,v),u.fromBufferAttribute(d,A),Jo.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const y=t.ray.origin.distanceTo(f);y<t.near||y>t.far||e.push({distance:y,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,a.start),w=Math.min(d.count,a.start+a.count);for(let x=_,b=w-1;x<b;x+=p){if(c.fromBufferAttribute(d,x),u.fromBufferAttribute(d,x+1),Jo.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const A=t.ray.origin.distanceTo(f);A<t.near||A>t.far||e.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const nu=new I,iu=new I;class Ov extends Bf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)nu.fromBufferAttribute(e,s),iu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+nu.distanceTo(iu);t.setAttribute("lineDistance",new be(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vf extends Ti{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const su=new Yt,La=new ao,br=new ps,Mr=new I;class zv extends se{constructor(t=new ke,e=new Vf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(s),br.radius+=r,t.ray.intersectsSphere(br)===!1)return;su.copy(s).invert(),La.copy(t.ray).applyMatrix4(su);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,m=p;g<m;g++){const d=c.getX(g);Mr.fromBufferAttribute(h,d),ru(Mr,d,l,s,t,e,this)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,m=p;g<m;g++)Mr.fromBufferAttribute(h,g),ru(Mr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ru(i,t,e,n,s,r,a){const o=La.distanceSqToPoint(i);if(o<e){const l=new I;La.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class Uv extends Ti{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Gt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class kf extends se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Qo=new Yt,ou=new I,au=new I;class Bv{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ll,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ou.setFromMatrixPosition(t.matrixWorld),e.position.copy(ou),au.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(au),e.updateMatrixWorld(),Qo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Vv extends Bv{constructor(){super(new If(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kv extends kf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(se.DefaultUp),this.updateMatrix(),this.target=new se,this.shadow=new Vv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Hv extends kf{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class lu{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(pe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const cu=new I,wr=new I;class Je{constructor(t=new I,e=new I){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){cu.subVectors(t,this.start),wr.subVectors(this.end,this.start);const n=wr.dot(wr);let r=wr.dot(cu)/n;return e&&(r=pe(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Gv extends Ov{constructor(t=10,e=10,n=4473924,s=8947848){n=new Gt(n),s=new Gt(s);const r=e/2,a=t/e,o=t/2,l=[],c=[];for(let f=0,p=0,g=-o;f<=e;f++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const m=f===r?n:s;m.toArray(c,p),p+=3,m.toArray(c,p),p+=3,m.toArray(c,p),p+=3,m.toArray(c,p),p+=3}const u=new ke;u.setAttribute("position",new be(l,3)),u.setAttribute("color",new be(c,3));const h=new ul({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Wv extends lo{constructor(t,e,n,s){console.warn("THREE.PlaneBufferGeometry has been renamed to THREE.PlaneGeometry."),super(t,e,n,s)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ol}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ol);var Ns=function(){var i=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(u){u.preventDefault(),n(++i%t.children.length)},!1);function e(u){return t.appendChild(u.dom),u}function n(u){for(var h=0;h<t.children.length;h++)t.children[h].style.display=h===u?"block":"none";i=u}var s=(performance||Date).now(),r=s,a=0,o=e(new Ns.Panel("FPS","#0ff","#002")),l=e(new Ns.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=e(new Ns.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:t,addPanel:e,showPanel:n,begin:function(){s=(performance||Date).now()},end:function(){a++;var u=(performance||Date).now();if(l.update(u-s,200),u>=r+1e3&&(o.update(a*1e3/(u-r),100),r=u,a=0,c)){var h=performance.memory;c.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return u},update:function(){s=this.end()},domElement:t,setMode:n}};Ns.Panel=function(i,t,e){var n=1/0,s=0,r=Math.round,a=r(window.devicePixelRatio||1),o=80*a,l=48*a,c=3*a,u=2*a,h=3*a,f=15*a,p=74*a,g=30*a,m=document.createElement("canvas");m.width=o,m.height=l,m.style.cssText="width:80px;height:48px";var d=m.getContext("2d");return d.font="bold "+9*a+"px Helvetica,Arial,sans-serif",d.textBaseline="top",d.fillStyle=e,d.fillRect(0,0,o,l),d.fillStyle=t,d.fillText(i,c,u),d.fillRect(h,f,p,g),d.fillStyle=e,d.globalAlpha=.9,d.fillRect(h,f,p,g),{dom:m,update:function(_,w){n=Math.min(n,_),s=Math.max(s,_),d.fillStyle=e,d.globalAlpha=1,d.fillRect(0,0,o,f),d.fillStyle=t,d.fillText(r(_)+" "+i+" ("+r(n)+"-"+r(s)+")",c,u),d.drawImage(m,h+a,f,p-a,g,h,f,p-a,g),d.fillRect(h+p-a,f,a,g),d.fillStyle=e,d.globalAlpha=.9,d.fillRect(h+p-a,f,a,r((1-_/w)*g))}}};const Xv=Ns;/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.16.0
 * @author George Michael Brower
 * @license MIT
 */class hn{constructor(t,e,n,s,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),hn.nextNameID=hn.nextNameID||0,this.$name.id="lil-gui-name-"+ ++hn.nextNameID,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled||(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t)),this}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback),this.updateDisplay()}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class qv extends hn{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Pa(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),!!e&&"#"+e}const $v={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:Pa,toHexString:Pa},Gs={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},jv={isPrimitive:!1,match:Array.isArray,fromHexString(i,t,e=1){const n=Gs.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(255&n)/255*e},toHexString:([i,t,e],n=1)=>Gs.toHexString(i*(n=255/n)<<16^t*n<<8^e*n<<0)},Yv={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=Gs.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(255&n)/255*e},toHexString:({r:i,g:t,b:e},n=1)=>Gs.toHexString(i*(n=255/n)<<16^t*n<<8^e*n<<0)},Zv=[$v,Gs,jv,Yv];class Kv extends hn{constructor(t,e,n,s){var r;super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(r=this.initialValue,Zv.find(a=>a.match(r))),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const a=Pa(this.$text.value);a&&this._setValueFromHexString(a)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ta extends hn{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{}),this.$disable=this.$button}}class Jv extends hn{constructor(t,e,n,s,r,a){super(t,e,n,"number"),this._initInput(),this.min(s),this.max(r);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=100*e+"%"}return this._inputFocused||(this.$input.value=t),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=u=>{const h=parseFloat(this.$input.value);isNaN(h)||(this._snapClampSetValue(h+u),this.$input.value=this.getValue())};let e,n,s,r,a,o=!1;const l=u=>{if(o){const h=u.clientX-e,f=u.clientY-n;Math.abs(f)>5?(u.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(h)>5&&c()}if(!o){const h=u.clientY-s;a-=h*this._step*this._arrowKeyMultiplier(u),r+a>this._max?a=this._max-r:r+a<this._min&&(a=this._min-r),this._snapClampSetValue(r+a)}s=u.clientY},c=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c)};this.$input.addEventListener("input",()=>{const u=parseFloat(this.$input.value);isNaN(u)||this.setValue(this._clamp(u))}),this.$input.addEventListener("keydown",u=>{u.code==="Enter"&&this.$input.blur(),u.code==="ArrowUp"&&(u.preventDefault(),t(this._step*this._arrowKeyMultiplier(u))),u.code==="ArrowDown"&&(u.preventDefault(),t(this._step*this._arrowKeyMultiplier(u)*-1))}),this.$input.addEventListener("wheel",u=>{this._inputFocused&&(u.preventDefault(),t(this._step*this._normalizeMouseWheel(u)))}),this.$input.addEventListener("mousedown",u=>{e=u.clientX,n=s=u.clientY,o=!0,r=this.getValue(),a=0,window.addEventListener("mousemove",l),window.addEventListener("mouseup",c)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=f=>{const p=this.$slider.getBoundingClientRect();let g=(m=f,d=p.left,_=p.right,w=this._min,x=this._max,(m-d)/(_-d)*(x-w)+w);var m,d,_,w,x;this._snapClampSetValue(g)},e=f=>{t(f.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",n)};let s,r,a=!1;const o=f=>{f.preventDefault(),this._setDraggingStyle(!0),t(f.touches[0].clientX),a=!1},l=f=>{if(a){const p=f.touches[0].clientX-s,g=f.touches[0].clientY-r;Math.abs(p)>Math.abs(g)?o(f):(window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c))}else f.preventDefault(),t(f.touches[0].clientX)},c=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c)},u=this._callOnFinishChange.bind(this);let h;this.$slider.addEventListener("mousedown",f=>{this._setDraggingStyle(!0),t(f.clientX),window.addEventListener("mousemove",e),window.addEventListener("mouseup",n)}),this.$slider.addEventListener("touchstart",f=>{f.touches.length>1||(this._hasScrollBar?(s=f.touches[0].clientX,r=f.touches[0].clientY,a=!0):o(f),window.addEventListener("touchmove",l),window.addEventListener("touchend",c))}),this.$slider.addEventListener("wheel",f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const p=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+p),this.$input.value=this.getValue(),clearTimeout(h),h=setTimeout(u,400)})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle("lil-gui-"+e,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Qv extends hn{constructor(t,e,n,s){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(s)?s:Object.values(s),this._names=Array.isArray(s)?s:Object.keys(s),this._names.forEach(r=>{const a=document.createElement("option");a.innerHTML=r,this.$select.appendChild(a)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class ty extends hn{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let uu=!1;class fl{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:s,title:r="Controls",injectStyles:a=!0,touchStyles:o=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{l.code!=="Enter"&&l.code!=="Space"||(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),o&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!uu&&a&&(function(l){const c=document.createElement("style");c.innerHTML=l;const u=document.querySelector("head link[rel=stylesheet], head style");u?document.head.insertBefore(c,u):document.head.appendChild(c)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"\u2195";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"\u25BE";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"\u25B8"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"\u2713";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),uu=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(t,e,n,s,r){if(Object(n)===n)return new Qv(this,t,e,n);const a=t[e];switch(typeof a){case"number":return new Jv(this,t,e,n,s,r);case"boolean":return new qv(this,t,e);case"string":return new ty(this,t,e);case"function":return new ta(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,a)}addColor(t,e,n=1){return new Kv(this,t,e,n)}addFolder(t){return new fl({parent:this,title:t})}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof ta||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof ta)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const fu={type:"change"},ea={type:"start"},hu={type:"end"};class ey extends Ei{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:kn.ROTATE,MIDDLE:kn.DOLLY,RIGHT:kn.PAN},this.touches={ONE:Hn.ROTATE,TWO:Hn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",Q),this._domElementKeyEvents=D},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(fu),n.update(),r=s.NONE},this.update=function(){const D=new I,V=new Si().setFromUnitVectors(t.up,new I(0,1,0)),bt=V.clone().invert(),At=new I,Mt=new Si,Ct=2*Math.PI;return function(){const Dt=n.object.position;D.copy(Dt).sub(n.target),D.applyQuaternion(V),o.setFromVector3(D),n.autoRotate&&r===s.NONE&&E(P()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Ut=n.minAzimuthAngle,jt=n.maxAzimuthAngle;return isFinite(Ut)&&isFinite(jt)&&(Ut<-Math.PI?Ut+=Ct:Ut>Math.PI&&(Ut-=Ct),jt<-Math.PI?jt+=Ct:jt>Math.PI&&(jt-=Ct),Ut<=jt?o.theta=Math.max(Ut,Math.min(jt,o.theta)):o.theta=o.theta>(Ut+jt)/2?Math.max(Ut,o.theta):Math.min(jt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),D.setFromSpherical(o),D.applyQuaternion(bt),Dt.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||At.distanceToSquared(n.object.position)>a||8*(1-Mt.dot(n.object.quaternion))>a?(n.dispatchEvent(fu),At.copy(n.object.position),Mt.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",z),n.domElement.removeEventListener("pointerdown",U),n.domElement.removeEventListener("pointercancel",ct),n.domElement.removeEventListener("wheel",ut),n.domElement.removeEventListener("pointermove",$),n.domElement.removeEventListener("pointerup",j),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Q)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new lu,l=new lu;let c=1;const u=new I;let h=!1;const f=new Rt,p=new Rt,g=new Rt,m=new Rt,d=new Rt,_=new Rt,w=new Rt,x=new Rt,b=new Rt,v=[],A={};function P(){return 2*Math.PI/60/60*n.autoRotateSpeed}function y(){return Math.pow(.95,n.zoomSpeed)}function E(D){l.theta-=D}function R(D){l.phi-=D}const X=function(){const D=new I;return function(bt,At){D.setFromMatrixColumn(At,0),D.multiplyScalar(-bt),u.add(D)}}(),tt=function(){const D=new I;return function(bt,At){n.screenSpacePanning===!0?D.setFromMatrixColumn(At,1):(D.setFromMatrixColumn(At,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(bt),u.add(D)}}(),F=function(){const D=new I;return function(bt,At){const Mt=n.domElement;if(n.object.isPerspectiveCamera){const Ct=n.object.position;D.copy(Ct).sub(n.target);let wt=D.length();wt*=Math.tan(n.object.fov/2*Math.PI/180),X(2*bt*wt/Mt.clientHeight,n.object.matrix),tt(2*At*wt/Mt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(X(bt*(n.object.right-n.object.left)/n.object.zoom/Mt.clientWidth,n.object.matrix),tt(At*(n.object.top-n.object.bottom)/n.object.zoom/Mt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function N(D){n.object.isPerspectiveCamera?c/=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*D)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(D){n.object.isPerspectiveCamera?c*=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/D)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function nt(D){f.set(D.clientX,D.clientY)}function J(D){w.set(D.clientX,D.clientY)}function W(D){m.set(D.clientX,D.clientY)}function k(D){p.set(D.clientX,D.clientY),g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const V=n.domElement;E(2*Math.PI*g.x/V.clientHeight),R(2*Math.PI*g.y/V.clientHeight),f.copy(p),n.update()}function B(D){x.set(D.clientX,D.clientY),b.subVectors(x,w),b.y>0?N(y()):b.y<0&&K(y()),w.copy(x),n.update()}function et(D){d.set(D.clientX,D.clientY),_.subVectors(d,m).multiplyScalar(n.panSpeed),F(_.x,_.y),m.copy(d),n.update()}function ot(D){D.deltaY<0?K(y()):D.deltaY>0&&N(y()),n.update()}function ht(D){let V=!1;switch(D.code){case n.keys.UP:F(0,n.keyPanSpeed),V=!0;break;case n.keys.BOTTOM:F(0,-n.keyPanSpeed),V=!0;break;case n.keys.LEFT:F(n.keyPanSpeed,0),V=!0;break;case n.keys.RIGHT:F(-n.keyPanSpeed,0),V=!0;break}V&&(D.preventDefault(),n.update())}function at(){if(v.length===1)f.set(v[0].pageX,v[0].pageY);else{const D=.5*(v[0].pageX+v[1].pageX),V=.5*(v[0].pageY+v[1].pageY);f.set(D,V)}}function _t(){if(v.length===1)m.set(v[0].pageX,v[0].pageY);else{const D=.5*(v[0].pageX+v[1].pageX),V=.5*(v[0].pageY+v[1].pageY);m.set(D,V)}}function H(){const D=v[0].pageX-v[1].pageX,V=v[0].pageY-v[1].pageY,bt=Math.sqrt(D*D+V*V);w.set(0,bt)}function St(){n.enableZoom&&H(),n.enablePan&&_t()}function xt(){n.enableZoom&&H(),n.enableRotate&&at()}function gt(D){if(v.length==1)p.set(D.pageX,D.pageY);else{const bt=vt(D),At=.5*(D.pageX+bt.x),Mt=.5*(D.pageY+bt.y);p.set(At,Mt)}g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const V=n.domElement;E(2*Math.PI*g.x/V.clientHeight),R(2*Math.PI*g.y/V.clientHeight),f.copy(p)}function lt(D){if(v.length===1)d.set(D.pageX,D.pageY);else{const V=vt(D),bt=.5*(D.pageX+V.x),At=.5*(D.pageY+V.y);d.set(bt,At)}_.subVectors(d,m).multiplyScalar(n.panSpeed),F(_.x,_.y),m.copy(d)}function Et(D){const V=vt(D),bt=D.pageX-V.x,At=D.pageY-V.y,Mt=Math.sqrt(bt*bt+At*At);x.set(0,Mt),b.set(0,Math.pow(x.y/w.y,n.zoomSpeed)),N(b.y),w.copy(x)}function T(D){n.enableZoom&&Et(D),n.enablePan&&lt(D)}function L(D){n.enableZoom&&Et(D),n.enableRotate&&gt(D)}function U(D){n.enabled!==!1&&(v.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",$),n.domElement.addEventListener("pointerup",j)),Z(D),D.pointerType==="touch"?S(D):dt(D))}function $(D){n.enabled!==!1&&(D.pointerType==="touch"?M(D):Y(D))}function j(D){it(D),v.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",$),n.domElement.removeEventListener("pointerup",j)),n.dispatchEvent(hu),r=s.NONE}function ct(D){it(D)}function dt(D){let V;switch(D.button){case 0:V=n.mouseButtons.LEFT;break;case 1:V=n.mouseButtons.MIDDLE;break;case 2:V=n.mouseButtons.RIGHT;break;default:V=-1}switch(V){case kn.DOLLY:if(n.enableZoom===!1)return;J(D),r=s.DOLLY;break;case kn.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;W(D),r=s.PAN}else{if(n.enableRotate===!1)return;nt(D),r=s.ROTATE}break;case kn.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;nt(D),r=s.ROTATE}else{if(n.enablePan===!1)return;W(D),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(ea)}function Y(D){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;k(D);break;case s.DOLLY:if(n.enableZoom===!1)return;B(D);break;case s.PAN:if(n.enablePan===!1)return;et(D);break}}function ut(D){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(D.preventDefault(),n.dispatchEvent(ea),ot(D),n.dispatchEvent(hu))}function Q(D){n.enabled===!1||n.enablePan===!1||ht(D)}function S(D){switch(pt(D),v.length){case 1:switch(n.touches.ONE){case Hn.ROTATE:if(n.enableRotate===!1)return;at(),r=s.TOUCH_ROTATE;break;case Hn.PAN:if(n.enablePan===!1)return;_t(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Hn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;St(),r=s.TOUCH_DOLLY_PAN;break;case Hn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xt(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(ea)}function M(D){switch(pt(D),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;gt(D),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;lt(D),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;T(D),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;L(D),n.update();break;default:r=s.NONE}}function z(D){n.enabled!==!1&&D.preventDefault()}function Z(D){v.push(D)}function it(D){delete A[D.pointerId];for(let V=0;V<v.length;V++)if(v[V].pointerId==D.pointerId){v.splice(V,1);return}}function pt(D){let V=A[D.pointerId];V===void 0&&(V=new Rt,A[D.pointerId]=V),V.set(D.pageX,D.pageY)}function vt(D){const V=D.pointerId===v[0].pointerId?v[1]:v[0];return A[V.pointerId]}n.domElement.addEventListener("contextmenu",z),n.domElement.addEventListener("pointerdown",U),n.domElement.addEventListener("pointercancel",ct),n.domElement.addEventListener("wheel",ut,{passive:!1}),this.update()}}const Hf=0,ny=1,iy=2,du=0,Sr=1,Da=2,na=1.25,pu=1,Br=6*4+4+4,Ra=65535,sy=Math.pow(2,-24);class Ar{constructor(){}}function Ye(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function mu(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const s=i[n+3]-i[n];s>e&&(e=s,t=n)}return t}function gu(i,t){t.set(i)}function _u(i,t,e){let n,s;for(let r=0;r<3;r++){const a=r+3;n=i[r],s=t[r],e[r]=n<s?n:s,n=i[a],s=t[a],e[a]=n>s?n:s}}function Er(i,t,e){for(let n=0;n<3;n++){const s=t[i+2*n],r=t[i+2*n+1],a=s-r,o=s+r;a<e[n]&&(e[n]=a),o>e[n+3]&&(e[n+3]=o)}}function Ms(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}function ry(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer;let s;e>65535?s=new Uint32Array(new n(4*e)):s=new Uint16Array(new n(2*e)),i.setIndex(new Ae(s,1));for(let r=0;r<e;r++)s[r]=r}}function oy(i){if(!i.groups||!i.groups.length)return[{offset:0,count:i.index.count/3}];const t=[],e=new Set;for(const s of i.groups)e.add(s.start),e.add(s.start+s.count);const n=Array.from(e.values()).sort((s,r)=>s-r);for(let s=0;s<n.length-1;s++){const r=n[s],a=n[s+1];t.push({offset:r/3,count:(a-r)/3})}return t}function ia(i,t,e,n,s=null){let r=1/0,a=1/0,o=1/0,l=-1/0,c=-1/0,u=-1/0,h=1/0,f=1/0,p=1/0,g=-1/0,m=-1/0,d=-1/0;const _=s!==null;for(let w=t*6,x=(t+e)*6;w<x;w+=6){const b=i[w+0],v=i[w+1],A=b-v,P=b+v;A<r&&(r=A),P>l&&(l=P),_&&b<h&&(h=b),_&&b>g&&(g=b);const y=i[w+2],E=i[w+3],R=y-E,X=y+E;R<a&&(a=R),X>c&&(c=X),_&&y<f&&(f=y),_&&y>m&&(m=y);const tt=i[w+4],F=i[w+5],N=tt-F,K=tt+F;N<o&&(o=N),K>u&&(u=K),_&&tt<p&&(p=tt),_&&tt>d&&(d=tt)}n[0]=r,n[1]=a,n[2]=o,n[3]=l,n[4]=c,n[5]=u,_&&(s[0]=h,s[1]=f,s[2]=p,s[3]=g,s[4]=m,s[5]=d)}function ay(i,t,e,n){let s=1/0,r=1/0,a=1/0,o=-1/0,l=-1/0,c=-1/0;for(let u=t*6,h=(t+e)*6;u<h;u+=6){const f=i[u+0];f<s&&(s=f),f>o&&(o=f);const p=i[u+2];p<r&&(r=p),p>l&&(l=p);const g=i[u+4];g<a&&(a=g),g>c&&(c=g)}n[0]=s,n[1]=r,n[2]=a,n[3]=o,n[4]=l,n[5]=c}function ly(i,t,e,n,s){let r=e,a=e+n-1;const o=s.pos,l=s.axis*2;for(;;){for(;r<=a&&t[r*6+l]<o;)r++;for(;r<=a&&t[a*6+l]>=o;)a--;if(r<a){for(let c=0;c<3;c++){let u=i[r*3+c];i[r*3+c]=i[a*3+c],i[a*3+c]=u;let h=t[r*6+c*2+0];t[r*6+c*2+0]=t[a*6+c*2+0],t[a*6+c*2+0]=h;let f=t[r*6+c*2+1];t[r*6+c*2+1]=t[a*6+c*2+1],t[a*6+c*2+1]=f}r++,a--}else return r}}const bn=32,cy=(i,t)=>i.candidate-t.candidate,Bn=new Array(bn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Tr=new Float32Array(6);function uy(i,t,e,n,s,r){let a=-1,o=0;if(r===Hf)a=mu(t),a!==-1&&(o=(t[a]+t[a+3])/2);else if(r===ny)a=mu(i),a!==-1&&(o=fy(e,n,s,a));else if(r===iy){const l=Ms(i);let c=na*s;const u=n*6,h=(n+s)*6;for(let f=0;f<3;f++){const p=t[f],d=(t[f+3]-p)/bn;if(s<bn/4){const _=[...Bn];_.length=s;let w=0;for(let b=u;b<h;b+=6,w++){const v=_[w];v.candidate=e[b+2*f],v.count=0;const{bounds:A,leftCacheBounds:P,rightCacheBounds:y}=v;for(let E=0;E<3;E++)y[E]=1/0,y[E+3]=-1/0,P[E]=1/0,P[E+3]=-1/0,A[E]=1/0,A[E+3]=-1/0;Er(b,e,A)}_.sort(cy);let x=s;for(let b=0;b<x;b++){const v=_[b];for(;b+1<x&&_[b+1].candidate===v.candidate;)_.splice(b+1,1),x--}for(let b=u;b<h;b+=6){const v=e[b+2*f];for(let A=0;A<x;A++){const P=_[A];v>=P.candidate?Er(b,e,P.rightCacheBounds):(Er(b,e,P.leftCacheBounds),P.count++)}}for(let b=0;b<x;b++){const v=_[b],A=v.count,P=s-v.count,y=v.leftCacheBounds,E=v.rightCacheBounds;let R=0;A!==0&&(R=Ms(y)/l);let X=0;P!==0&&(X=Ms(E)/l);const tt=pu+na*(R*A+X*P);tt<c&&(a=f,c=tt,o=v.candidate)}}else{for(let x=0;x<bn;x++){const b=Bn[x];b.count=0,b.candidate=p+d+x*d;const v=b.bounds;for(let A=0;A<3;A++)v[A]=1/0,v[A+3]=-1/0}for(let x=u;x<h;x+=6){let A=~~((e[x+2*f]-p)/d);A>=bn&&(A=bn-1);const P=Bn[A];P.count++,Er(x,e,P.bounds)}const _=Bn[bn-1];gu(_.bounds,_.rightCacheBounds);for(let x=bn-2;x>=0;x--){const b=Bn[x],v=Bn[x+1];_u(b.bounds,v.rightCacheBounds,b.rightCacheBounds)}let w=0;for(let x=0;x<bn-1;x++){const b=Bn[x],v=b.count,A=b.bounds,y=Bn[x+1].rightCacheBounds;v!==0&&(w===0?gu(A,Tr):_u(A,Tr,Tr)),w+=v;let E=0,R=0;w!==0&&(E=Ms(Tr)/l);const X=s-w;X!==0&&(R=Ms(y)/l);const tt=pu+na*(E*w+R*X);tt<c&&(a=f,c=tt,o=b.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:a,pos:o}}function fy(i,t,e,n){let s=0;for(let r=t,a=t+e;r<a;r++)s+=i[r*6+n*2];return s/e}function hy(i,t){const e=i.attributes.position,n=i.index.array,s=n.length/3,r=new Float32Array(s*6),a=e.normalized,o=e.array,l=e.offset||0;let c=3;e.isInterleavedBufferAttribute&&(c=e.data.stride);const u=["getX","getY","getZ"];for(let h=0;h<s;h++){const f=h*3,p=h*6;let g,m,d;a?(g=n[f+0],m=n[f+1],d=n[f+2]):(g=n[f+0]*c+l,m=n[f+1]*c+l,d=n[f+2]*c+l);for(let _=0;_<3;_++){let w,x,b;a?(w=e[u[_]](g),x=e[u[_]](m),b=e[u[_]](d)):(w=o[g+_],x=o[m+_],b=o[d+_]);let v=w;x<v&&(v=x),b<v&&(v=b);let A=w;x>A&&(A=x),b>A&&(A=b);const P=(A-v)/2,y=_*2;r[p+y+0]=v+P,r[p+y+1]=P+(Math.abs(v)+P)*sy,v<t[_]&&(t[_]=v),A>t[_+3]&&(t[_+3]=A)}}return r}function dy(i,t){function e(_){f&&f(_/p)}function n(_,w,x,b=null,v=0){if(!g&&v>=l&&(g=!0,c&&(console.warn(`MeshBVH: Max depth of ${l} reached when generating BVH. Consider increasing maxDepth.`),console.warn(i))),x<=u||v>=l)return e(w+x),_.offset=w,_.count=x,_;const A=uy(_.boundingData,b,a,w,x,h);if(A.axis===-1)return e(w+x),_.offset=w,_.count=x,_;const P=ly(o,a,w,x,A);if(P===w||P===w+x)e(w+x),_.offset=w,_.count=x;else{_.splitAxis=A.axis;const y=new Ar,E=w,R=P-w;_.left=y,y.boundingData=new Float32Array(6),ia(a,E,R,y.boundingData,r),n(y,E,R,r,v+1);const X=new Ar,tt=P,F=x-R;_.right=X,X.boundingData=new Float32Array(6),ia(a,tt,F,X.boundingData,r),n(X,tt,F,r,v+1)}return _}ry(i,t);const s=new Float32Array(6),r=new Float32Array(6),a=hy(i,s),o=i.index.array,l=t.maxDepth,c=t.verbose,u=t.maxLeafTris,h=t.strategy,f=t.onProgress,p=i.index.count/3;let g=!1;const m=[],d=oy(i);if(d.length===1){const _=d[0],w=new Ar;w.boundingData=s,ay(a,_.offset,_.count,r),n(w,_.offset,_.count,r),m.push(w)}else for(let _ of d){const w=new Ar;w.boundingData=new Float32Array(6),ia(a,_.offset,_.count,w.boundingData,r),n(w,_.offset,_.count,r),m.push(w)}return m}function py(i,t){const e=dy(i,t);let n,s,r;const a=[],o=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer;for(let u=0;u<e.length;u++){const h=e[u];let f=l(h);const p=new o(Br*f);n=new Float32Array(p),s=new Uint32Array(p),r=new Uint16Array(p),c(0,h),a.push(p)}return a;function l(u){return u.count?1:1+l(u.left)+l(u.right)}function c(u,h){const f=u/4,p=u/2,g=!!h.count,m=h.boundingData;for(let d=0;d<6;d++)n[f+d]=m[d];if(g){const d=h.offset,_=h.count;return s[f+6]=d,r[p+14]=_,r[p+15]=Ra,u+Br}else{const d=h.left,_=h.right,w=h.splitAxis;let x;if(x=c(u+Br,d),x/4>Math.pow(2,32))throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return s[f+6]=x/4,x=c(x,_),s[f+7]=w,x}}}class dn{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,s=-1/0;for(let r=0,a=t.length;r<a;r++){const l=t[r][e];n=l<n?l:n,s=l>s?l:s}this.min=n,this.max=s}setFromPoints(t,e){let n=1/0,s=-1/0;for(let r=0,a=e.length;r<a;r++){const o=e[r],l=t.dot(o);n=l<n?l:n,s=l>s?l:s}this.min=n,this.max=s}isSeparated(t){return this.min>t.max||t.min>this.max}}dn.prototype.setFromBox=function(){const i=new I;return function(e,n){const s=n.min,r=n.max;let a=1/0,o=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let u=0;u<=1;u++){i.x=s.x*l+r.x*(1-l),i.y=s.y*c+r.y*(1-c),i.z=s.z*u+r.z*(1-u);const h=e.dot(i);a=Math.min(h,a),o=Math.max(h,o)}this.min=a,this.max=o}}();(function(){const i=new dn;return function(e,n){const s=e.points,r=e.satAxes,a=e.satBounds,o=n.points,l=n.satAxes,c=n.satBounds;for(let u=0;u<3;u++){const h=a[u],f=r[u];if(i.setFromPoints(f,o),h.isSeparated(i))return!1}for(let u=0;u<3;u++){const h=c[u],f=l[u];if(i.setFromPoints(f,s),h.isSeparated(i))return!1}}})();const my=function(){const i=new I,t=new I,e=new I;return function(s,r,a){const o=s.start,l=i,c=r.start,u=t;e.subVectors(o,c),i.subVectors(s.end,s.start),t.subVectors(r.end,r.start);const h=e.dot(u),f=u.dot(l),p=u.dot(u),g=e.dot(l),d=l.dot(l)*p-f*f;let _,w;d!==0?_=(h*f-g*p)/d:_=0,w=(h+_*f)/p,a.x=_,a.y=w}}(),hl=function(){const i=new Rt,t=new I,e=new I;return function(s,r,a,o){my(s,r,i);let l=i.x,c=i.y;if(l>=0&&l<=1&&c>=0&&c<=1){s.at(l,a),r.at(c,o);return}else if(l>=0&&l<=1){c<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else if(c>=0&&c<=1){l<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else{let u;l<0?u=s.start:u=s.end;let h;c<0?h=r.start:h=r.end;const f=t,p=e;if(s.closestPointToPoint(h,!0,t),r.closestPointToPoint(u,!0,e),f.distanceToSquared(h)<=p.distanceToSquared(u)){a.copy(f),o.copy(h);return}else{a.copy(u),o.copy(p);return}}}}(),gy=function(){const i=new I,t=new I,e=new Sn,n=new Je;return function(r,a){const{radius:o,center:l}=r,{a:c,b:u,c:h}=a;if(n.start=c,n.end=u,n.closestPointToPoint(l,!0,i).distanceTo(l)<=o||(n.start=c,n.end=h,n.closestPointToPoint(l,!0,i).distanceTo(l)<=o)||(n.start=u,n.end=h,n.closestPointToPoint(l,!0,i).distanceTo(l)<=o))return!0;const m=a.getPlane(e);if(Math.abs(m.distanceToPoint(l))<=o){const _=m.projectPoint(l,t);if(a.containsPoint(_))return!0}return!1}}(),_y=1e-15;function Xi(i){return Math.abs(i)<_y}class Cn extends ze{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new I),this.satBounds=new Array(4).fill().map(()=>new dn),this.points=[this.a,this.b,this.c],this.sphere=new ps,this.plane=new Sn,this.needsUpdate=!0}intersectsSphere(t){return gy(t,this)}update(){const t=this.a,e=this.b,n=this.c,s=this.points,r=this.satAxes,a=this.satBounds,o=r[0],l=a[0];this.getNormal(o),l.setFromPoints(o,s);const c=r[1],u=a[1];c.subVectors(t,e),u.setFromPoints(c,s);const h=r[2],f=a[2];h.subVectors(e,n),f.setFromPoints(h,s);const p=r[3],g=a[3];p.subVectors(n,t),g.setFromPoints(p,s),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(o,t),this.needsUpdate=!1}}Cn.prototype.closestPointToSegment=function(){const i=new I,t=new I,e=new Je;return function(s,r=null,a=null){const{start:o,end:l}=s,c=this.points;let u,h=1/0;for(let f=0;f<3;f++){const p=(f+1)%3;e.start.copy(c[f]),e.end.copy(c[p]),hl(e,s,i,t),u=i.distanceToSquared(t),u<h&&(h=u,r&&r.copy(i),a&&a.copy(t))}return this.closestPointToPoint(o,i),u=o.distanceToSquared(i),u<h&&(h=u,r&&r.copy(i),a&&a.copy(o)),this.closestPointToPoint(l,i),u=l.distanceToSquared(i),u<h&&(h=u,r&&r.copy(i),a&&a.copy(l)),Math.sqrt(h)}}();Cn.prototype.intersectsTriangle=function(){const i=new Cn,t=new Array(3),e=new Array(3),n=new dn,s=new dn,r=new I,a=new I,o=new I,l=new I,c=new Je,u=new Je,h=new Je;return function(p,g=null){this.needsUpdate&&this.update(),p.isExtendedTriangle?p.needsUpdate&&p.update():(i.copy(p),i.update(),p=i);const m=this.plane,d=p.plane;if(Math.abs(m.normal.dot(d.normal))>1-1e-10){const _=this.satBounds,w=this.satAxes;e[0]=p.a,e[1]=p.b,e[2]=p.c;for(let v=0;v<4;v++){const A=_[v],P=w[v];if(n.setFromPoints(P,e),A.isSeparated(n))return!1}const x=p.satBounds,b=p.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let v=0;v<4;v++){const A=x[v],P=b[v];if(n.setFromPoints(P,t),A.isSeparated(n))return!1}for(let v=0;v<4;v++){const A=w[v];for(let P=0;P<4;P++){const y=b[P];if(r.crossVectors(A,y),n.setFromPoints(r,t),s.setFromPoints(r,e),n.isSeparated(s))return!1}}return g&&(console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),g.start.set(0,0,0),g.end.set(0,0,0)),!0}else{const _=this.points;let w=!1,x=0;for(let F=0;F<3;F++){const N=_[F],K=_[(F+1)%3];c.start.copy(N),c.end.copy(K),c.delta(a);const nt=w?u.start:u.end,J=Xi(d.distanceToPoint(N));if(Xi(d.normal.dot(a))&&J){u.copy(c),x=2;break}if((d.intersectLine(c,nt)||J)&&!Xi(nt.distanceTo(K))){if(x++,w)break;w=!0}}if(x===1&&this.containsPoint(u.end))return g&&(g.start.copy(u.end),g.end.copy(u.end)),!0;if(x!==2)return!1;const b=p.points;let v=!1,A=0;for(let F=0;F<3;F++){const N=b[F],K=b[(F+1)%3];c.start.copy(N),c.end.copy(K),c.delta(o);const nt=v?h.start:h.end,J=Xi(m.distanceToPoint(N));if(Xi(m.normal.dot(o))&&J){h.copy(c),A=2;break}if((m.intersectLine(c,nt)||J)&&!Xi(nt.distanceTo(K))){if(A++,v)break;v=!0}}if(A===1&&this.containsPoint(h.end))return g&&(g.start.copy(h.end),g.end.copy(h.end)),!0;if(A!==2)return!1;if(u.delta(a),h.delta(o),a.dot(o)<0){let F=h.start;h.start=h.end,h.end=F}const P=u.start.dot(a),y=u.end.dot(a),E=h.start.dot(a),R=h.end.dot(a),X=y<E,tt=P<R;return P!==R&&E!==y&&X===tt?!1:(g&&(l.subVectors(u.start,h.start),l.dot(a)>0?g.start.copy(u.start):g.start.copy(h.start),l.subVectors(u.end,h.end),l.dot(a)<0?g.end.copy(u.end):g.end.copy(h.end)),!0)}}}();Cn.prototype.distanceToPoint=function(){const i=new I;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();Cn.prototype.distanceToTriangle=function(){const i=new I,t=new I,e=["a","b","c"],n=new Je,s=new Je;return function(a,o=null,l=null){const c=o||l?n:null;if(this.intersectsTriangle(a,c))return(o||l)&&(o&&c.getCenter(o),l&&c.getCenter(l)),0;let u=1/0;for(let h=0;h<3;h++){let f;const p=e[h],g=a[p];this.closestPointToPoint(g,i),f=g.distanceToSquared(i),f<u&&(u=f,o&&o.copy(i),l&&l.copy(g));const m=this[p];a.closestPointToPoint(m,i),f=m.distanceToSquared(i),f<u&&(u=f,o&&o.copy(m),l&&l.copy(i))}for(let h=0;h<3;h++){const f=e[h],p=e[(h+1)%3];n.set(this[f],this[p]);for(let g=0;g<3;g++){const m=e[g],d=e[(g+1)%3];s.set(a[m],a[d]),hl(n,s,i,t);const _=i.distanceToSquared(t);_<u&&(u=_,o&&o.copy(i),l&&l.copy(t))}}return Math.sqrt(u)}}();class pn{constructor(t,e,n){this.isOrientedBox=!0,this.min=new I,this.max=new I,this.matrix=new Yt,this.invMatrix=new Yt,this.points=new Array(8).fill().map(()=>new I),this.satAxes=new Array(3).fill().map(()=>new I),this.satBounds=new Array(3).fill().map(()=>new dn),this.alignedSatBounds=new Array(3).fill().map(()=>new dn),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}pn.prototype.update=function(){return function(){const t=this.matrix,e=this.min,n=this.max,s=this.points;for(let c=0;c<=1;c++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){const f=1*c|2*u|4*h,p=s[f];p.x=c?n.x:e.x,p.y=u?n.y:e.y,p.z=h?n.z:e.z,p.applyMatrix4(t)}const r=this.satBounds,a=this.satAxes,o=s[0];for(let c=0;c<3;c++){const u=a[c],h=r[c],f=1<<c,p=s[f];u.subVectors(o,p),h.setFromPoints(u,s)}const l=this.alignedSatBounds;l[0].setFromPointsField(s,"x"),l[1].setFromPointsField(s,"y"),l[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();pn.prototype.intersectsBox=function(){const i=new dn;return function(e){this.needsUpdate&&this.update();const n=e.min,s=e.max,r=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,o[0].isSeparated(i)||(i.min=n.y,i.max=s.y,o[1].isSeparated(i))||(i.min=n.z,i.max=s.z,o[2].isSeparated(i)))return!1;for(let l=0;l<3;l++){const c=a[l],u=r[l];if(i.setFromBox(c,e),u.isSeparated(i))return!1}return!0}}();pn.prototype.intersectsTriangle=function(){const i=new Cn,t=new Array(3),e=new dn,n=new dn,s=new I;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(i.copy(a),i.update(),a=i);const o=this.satBounds,l=this.satAxes;t[0]=a.a,t[1]=a.b,t[2]=a.c;for(let f=0;f<3;f++){const p=o[f],g=l[f];if(e.setFromPoints(g,t),p.isSeparated(e))return!1}const c=a.satBounds,u=a.satAxes,h=this.points;for(let f=0;f<3;f++){const p=c[f],g=u[f];if(e.setFromPoints(g,h),p.isSeparated(e))return!1}for(let f=0;f<3;f++){const p=l[f];for(let g=0;g<4;g++){const m=u[g];if(s.crossVectors(p,m),e.setFromPoints(s,t),n.setFromPoints(s,h),e.isSeparated(n))return!1}}return!0}}();pn.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();pn.prototype.distanceToPoint=function(){const i=new I;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();pn.prototype.distanceToBox=function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new Je),e=new Array(12).fill().map(()=>new Je),n=new I,s=new I;return function(a,o=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(l||c)&&(a.getCenter(s),this.closestPointToPoint(s,n),a.closestPointToPoint(n,s),l&&l.copy(n),c&&c.copy(s)),0;const u=o*o,h=a.min,f=a.max,p=this.points;let g=1/0;for(let d=0;d<8;d++){const _=p[d];s.copy(_).clamp(h,f);const w=_.distanceToSquared(s);if(w<g&&(g=w,l&&l.copy(_),c&&c.copy(s),w<u))return Math.sqrt(w)}let m=0;for(let d=0;d<3;d++)for(let _=0;_<=1;_++)for(let w=0;w<=1;w++){const x=(d+1)%3,b=(d+2)%3,v=_<<x|w<<b,A=1<<d|_<<x|w<<b,P=p[v],y=p[A];t[m].set(P,y);const R=i[d],X=i[x],tt=i[b],F=e[m],N=F.start,K=F.end;N[R]=h[R],N[X]=_?h[X]:f[X],N[tt]=w?h[tt]:f[X],K[R]=f[R],K[X]=_?h[X]:f[X],K[tt]=w?h[tt]:f[X],m++}for(let d=0;d<=1;d++)for(let _=0;_<=1;_++)for(let w=0;w<=1;w++){s.x=d?f.x:h.x,s.y=_?f.y:h.y,s.z=w?f.z:h.z,this.closestPointToPoint(s,n);const x=s.distanceToSquared(n);if(x<g&&(g=x,l&&l.copy(n),c&&c.copy(s),x<u))return Math.sqrt(x)}for(let d=0;d<12;d++){const _=t[d];for(let w=0;w<12;w++){const x=e[w];hl(_,x,n,s);const b=n.distanceToSquared(s);if(b<g&&(g=b,l&&l.copy(n),c&&c.copy(s),b<u))return Math.sqrt(b)}}return Math.sqrt(g)}}();const Cr=new I,Lr=new I,Pr=new I,xu=new Rt,vu=new Rt,yu=new Rt,bu=new I;function xy(i,t,e,n,s,r){let a;return r===Le?a=i.intersectTriangle(n,e,t,!0,s):a=i.intersectTriangle(t,e,n,r!==fn,s),a===null?null:{distance:i.origin.distanceTo(s),point:s.clone()}}function vy(i,t,e,n,s,r,a){Cr.fromBufferAttribute(t,n),Lr.fromBufferAttribute(t,s),Pr.fromBufferAttribute(t,r);const o=xy(i,Cr,Lr,Pr,bu,a);if(o){e&&(xu.fromBufferAttribute(e,n),vu.fromBufferAttribute(e,s),yu.fromBufferAttribute(e,r),o.uv=ze.getUV(bu,Cr,Lr,Pr,xu,vu,yu,new Rt));const l={a:n,b:s,c:r,normal:new I,materialIndex:0};ze.getNormal(Cr,Lr,Pr,l.normal),o.face=l,o.faceIndex=n}return o}function Gf(i,t,e,n,s){const r=n*3,a=i.index.getX(r),o=i.index.getX(r+1),l=i.index.getX(r+2),c=vy(e,i.attributes.position,i.attributes.uv,a,o,l,t);return c?(c.faceIndex=n,s&&s.push(c),c):null}function yy(i,t,e,n,s,r){for(let a=n,o=n+s;a<o;a++)Gf(i,t,e,a,r)}function by(i,t,e,n,s){let r=1/0,a=null;for(let o=n,l=n+s;o<l;o++){const c=Gf(i,t,e,o);c&&c.distance<r&&(a=c,r=c.distance)}return a}function ln(i,t,e,n){const s=i.a,r=i.b,a=i.c;let o=t,l=t+1,c=t+2;e&&(o=e.getX(t),l=e.getX(t+1),c=e.getX(t+2)),s.x=n.getX(o),s.y=n.getY(o),s.z=n.getZ(o),r.x=n.getX(l),r.y=n.getY(l),r.z=n.getZ(l),a.x=n.getX(c),a.y=n.getY(c),a.z=n.getZ(c)}function Mu(i,t,e,n,s,r,a){const o=e.index,l=e.attributes.position;for(let c=i,u=t+i;c<u;c++)if(ln(a,c*3,o,l),a.needsUpdate=!0,n(a,c,s,r))return!0;return!1}class Wf{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}function Gn(i,t){return t[i+15]===65535}function is(i,t){return t[i+6]}function Ws(i,t){return t[i+14]}function Xs(i){return i+8}function qs(i,t){return t[i+6]}function My(i,t){return t[i+7]}const Ji=new Ve,jr=new I,wy=["x","y","z"];function Ia(i,t,e,n,s){let r=i*2,a=gs,o=$n,l=jn;if(Gn(r,o)){const u=is(i,l),h=Ws(r,o);yy(t,e,n,u,h,s)}else{const u=Xs(i);Yr(u,a,n,jr)&&Ia(u,t,e,n,s);const h=qs(i,l);Yr(h,a,n,jr)&&Ia(h,t,e,n,s)}}function Fa(i,t,e,n){let s=i*2,r=gs,a=$n,o=jn;if(Gn(s,a)){const c=is(i,o),u=Ws(s,a);return by(t,e,n,c,u)}else{const c=My(i,o),u=wy[c],f=n.direction[u]>=0;let p,g;f?(p=Xs(i),g=qs(i,o)):(p=qs(i,o),g=Xs(i));const d=Yr(p,r,n,jr)?Fa(p,t,e,n):null;if(d){const x=d.point[u];if(f?x<=r[g+c]:x>=r[g+c+3])return d}const w=Yr(g,r,n,jr)?Fa(g,t,e,n):null;return d&&w?d.distance<=w.distance?d:w:d||w||null}}const Sy=function(){let i,t;const e=[],n=new Wf(()=>new Ve);return function(...a){i=n.getPrimitive(),t=n.getPrimitive(),e.push(i,t);const o=s(...a);n.releasePrimitive(i),n.releasePrimitive(t),e.pop(),e.pop();const l=e.length;return l>0&&(t=e[l-1],i=e[l-2]),o};function s(r,a,o,l,c=null,u=0,h=0){function f(x){let b=x*2,v=$n,A=jn;for(;!Gn(b,v);)x=Xs(x),b=x*2;return is(x,A)}function p(x){let b=x*2,v=$n,A=jn;for(;!Gn(b,v);)x=qs(x,A),b=x*2;return is(x,A)+Ws(b,v)}let g=r*2,m=gs,d=$n,_=jn;if(Gn(g,d)){const x=is(r,_),b=Ws(g,d);return Ye(r,m,i),l(x,b,!1,h,u+r,i)}else{const x=Xs(r),b=qs(r,_);let v=x,A=b,P,y,E,R;if(c&&(E=i,R=t,Ye(v,m,E),Ye(A,m,R),P=c(E),y=c(R),y<P)){v=b,A=x;const J=P;P=y,y=J,E=R}E||(E=i,Ye(v,m,E));const X=Gn(v*2,d),tt=o(E,X,P,h+1,u+v);let F;if(tt===Da){const J=f(v),k=p(v)-J;F=l(J,k,!0,h+1,u+v,E)}else F=tt&&s(v,a,o,l,c,u,h+1);if(F)return!0;R=t,Ye(A,m,R);const N=Gn(A*2,d),K=o(R,N,y,h+1,u+A);let nt;if(K===Da){const J=f(A),k=p(A)-J;nt=l(J,k,!0,h+1,u+A,R)}else nt=K&&s(A,a,o,l,c,u,h+1);return!!nt}}}(),Ay=function(){const i=new Cn,t=new Cn,e=new Yt,n=new pn,s=new pn;return function r(a,o,l,c,u=null){let h=a*2,f=gs,p=$n,g=jn;if(u===null&&(l.boundingBox||l.computeBoundingBox(),n.set(l.boundingBox.min,l.boundingBox.max,c),u=n),Gn(h,p)){const d=o,_=d.index,w=d.attributes.position,x=l.index,b=l.attributes.position,v=is(a,g),A=Ws(h,p);if(e.copy(c).invert(),l.boundsTree)return Ye(a,f,s),s.matrix.copy(e),s.needsUpdate=!0,l.boundsTree.shapecast({intersectsBounds:y=>s.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(c),y.b.applyMatrix4(c),y.c.applyMatrix4(c),y.needsUpdate=!0;for(let E=v*3,R=(A+v)*3;E<R;E+=3)if(ln(t,E,_,w),t.needsUpdate=!0,y.intersectsTriangle(t))return!0;return!1}});for(let P=v*3,y=A+v*3;P<y;P+=3){ln(i,P,_,w),i.a.applyMatrix4(e),i.b.applyMatrix4(e),i.c.applyMatrix4(e),i.needsUpdate=!0;for(let E=0,R=x.count;E<R;E+=3)if(ln(t,E,x,b),t.needsUpdate=!0,i.intersectsTriangle(t))return!0}}else{const d=a+8,_=g[a+6];return Ye(d,f,Ji),!!(u.intersectsBox(Ji)&&r(d,o,l,c,u)||(Ye(_,f,Ji),u.intersectsBox(Ji)&&r(_,o,l,c,u)))}}}();function Yr(i,t,e,n){return Ye(i,t,Ji),e.intersectBox(Ji,n)}const Na=[];let Vr,gs,$n,jn;function Ls(i){Vr&&Na.push(Vr),Vr=i,gs=new Float32Array(i),$n=new Uint16Array(i),jn=new Uint32Array(i)}function Dr(){Vr=null,gs=null,$n=null,jn=null,Na.length&&Ls(Na.pop())}const sa=Symbol("skip tree generation"),ra=new Ve,oa=new Ve,qi=new Yt,oi=new pn,ws=new pn,Ss=new I,Rr=new I,Ey=new I,Ty=new I,Cy=new I,wu=new Ve,nn=new Wf(()=>new Cn);class Os{static serialize(t,e={}){if(e.isBufferGeometry)return console.warn("MeshBVH.serialize: The arguments for the function have changed. See documentation for new signature."),Os.serialize(arguments[0],{cloneBuffers:arguments[2]===void 0?!0:arguments[2]});e={cloneBuffers:!0,...e};const n=t.geometry,s=t._roots,r=n.getIndex();let a;return e.cloneBuffers?a={roots:s.map(o=>o.slice()),index:r.array.slice()}:a={roots:s,index:r.array},a}static deserialize(t,e,n={}){if(typeof n=="boolean")return console.warn("MeshBVH.deserialize: The arguments for the function have changed. See documentation for new signature."),Os.deserialize(arguments[0],arguments[1],{setIndex:arguments[2]===void 0?!0:arguments[2]});n={setIndex:!0,...n};const{index:s,roots:r}=t,a=new Os(e,{...n,[sa]:!0});if(a._roots=r,n.setIndex){const o=e.getIndex();if(o===null){const l=new Ae(t.index,1,!1);e.setIndex(l)}else o.array!==s&&(o.array.set(s),o.needsUpdate=!0)}return a}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({strategy:Hf,maxDepth:40,maxLeafTris:10,verbose:!0,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,[sa]:!1},e),e.useSharedArrayBuffer&&typeof SharedArrayBuffer>"u")throw new Error("MeshBVH: SharedArrayBuffer is not available.");this._roots=null,e[sa]||(this._roots=py(t,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new Ve))),this.geometry=t}refit(t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=this.geometry,n=e.index.array,s=e.attributes.position;let r,a,o,l,c=0;const u=this._roots;for(let f=0,p=u.length;f<p;f++)r=u[f],a=new Uint32Array(r),o=new Uint16Array(r),l=new Float32Array(r),h(0,c),c+=r.byteLength;function h(f,p,g=!1){const m=f*2;if(o[m+15]===Ra){const _=a[f+6],w=o[m+14];let x=1/0,b=1/0,v=1/0,A=-1/0,P=-1/0,y=-1/0;for(let E=3*_,R=3*(_+w);E<R;E++){const X=n[E],tt=s.getX(X),F=s.getY(X),N=s.getZ(X);tt<x&&(x=tt),tt>A&&(A=tt),F<b&&(b=F),F>P&&(P=F),N<v&&(v=N),N>y&&(y=N)}return l[f+0]!==x||l[f+1]!==b||l[f+2]!==v||l[f+3]!==A||l[f+4]!==P||l[f+5]!==y?(l[f+0]=x,l[f+1]=b,l[f+2]=v,l[f+3]=A,l[f+4]=P,l[f+5]=y,!0):!1}else{const _=f+8,w=a[f+6],x=_+p,b=w+p;let v=g,A=!1,P=!1;t?v||(A=t.has(x),P=t.has(b),v=!A&&!P):(A=!0,P=!0);const y=v||A,E=v||P;let R=!1;y&&(R=h(_,p,v));let X=!1;E&&(X=h(w,p,v));const tt=R||X;if(tt)for(let F=0;F<3;F++){const N=_+F,K=w+F,nt=l[N],J=l[N+3],W=l[K],k=l[K+3];l[f+F]=nt<W?nt:W,l[f+F+3]=J>k?J:k}return tt}}}traverse(t,e=0){const n=this._roots[e],s=new Uint32Array(n),r=new Uint16Array(n);a(0);function a(o,l=0){const c=o*2,u=r[c+15]===Ra;if(u){const h=s[o+6],f=r[c+14];t(l,u,new Float32Array(n,o*4,6),h,f)}else{const h=o+Br/4,f=s[o+6],p=s[o+7];t(l,u,new Float32Array(n,o*4,6),p)||(a(h,l+1),a(f,l+1))}}}raycast(t,e=Kn){const n=this._roots,s=this.geometry,r=[],a=e.isMaterial,o=Array.isArray(e),l=s.groups,c=a?e.side:e;for(let u=0,h=n.length;u<h;u++){const f=o?e[l[u].materialIndex].side:c,p=r.length;if(Ls(n[u]),Ia(0,s,f,t,r),Dr(),o){const g=l[u].materialIndex;for(let m=p,d=r.length;m<d;m++)r[m].face.materialIndex=g}}return r}raycastFirst(t,e=Kn){const n=this._roots,s=this.geometry,r=e.isMaterial,a=Array.isArray(e);let o=null;const l=s.groups,c=r?e.side:e;for(let u=0,h=n.length;u<h;u++){const f=a?e[l[u].materialIndex].side:c;Ls(n[u]);const p=Fa(0,s,f,t);Dr(),p!=null&&(o==null||p.distance<o.distance)&&(o=p,a&&(p.face.materialIndex=l[u].materialIndex))}return o}intersectsGeometry(t,e){const n=this.geometry;let s=!1;for(const r of this._roots)if(Ls(r),s=Ay(0,n,t,e),Dr(),s)break;return s}shapecast(t,e,n){const s=this.geometry;if(t instanceof Function){if(e){const f=e;e=(p,g,m,d)=>{const _=g*3;return f(p,_,_+1,_+2,m,d)}}t={boundsTraverseOrder:n,intersectsBounds:t,intersectsTriangle:e,intersectsRange:null},console.warn("MeshBVH: Shapecast function signature has changed and now takes an object of callbacks as a second argument. See docs for new signature.")}const r=nn.getPrimitive();let{boundsTraverseOrder:a,intersectsBounds:o,intersectsRange:l,intersectsTriangle:c}=t;if(l&&c){const f=l;l=(p,g,m,d,_)=>f(p,g,m,d,_)?!0:Mu(p,g,s,c,m,d,r)}else l||(c?l=(f,p,g,m)=>Mu(f,p,s,c,g,m,r):l=(f,p,g)=>g);let u=!1,h=0;for(const f of this._roots){if(Ls(f),u=Sy(0,s,o,l,a,h),Dr(),u)break;h+=f.byteLength}return nn.releasePrimitive(r),u}bvhcast(t,e,n){let{intersectsRanges:s,intersectsTriangles:r}=n;const a=this.geometry.index,o=this.geometry.attributes.position,l=t.geometry.index,c=t.geometry.attributes.position;qi.copy(e).invert();const u=nn.getPrimitive(),h=nn.getPrimitive();if(r){let g=function(m,d,_,w,x,b,v,A){for(let P=_,y=_+w;P<y;P++){ln(h,P*3,l,c),h.a.applyMatrix4(e),h.b.applyMatrix4(e),h.c.applyMatrix4(e),h.needsUpdate=!0;for(let E=m,R=m+d;E<R;E++)if(ln(u,E*3,a,o),u.needsUpdate=!0,r(u,h,E,P,x,b,v,A))return!0}return!1};var p=g;if(s){const m=s;s=function(d,_,w,x,b,v,A,P){return m(d,_,w,x,b,v,A,P)?!0:g(d,_,w,x,b,v,A,P)}}else s=g}t.getBoundingBox(oa),oa.applyMatrix4(e);const f=this.shapecast({intersectsBounds:g=>oa.intersectsBox(g),intersectsRange:(g,m,d,_,w,x)=>(ra.copy(x),ra.applyMatrix4(qi),t.shapecast({intersectsBounds:b=>ra.intersectsBox(b),intersectsRange:(b,v,A,P,y)=>s(g,m,b,v,_,w,P,y)}))});return nn.releasePrimitive(u),nn.releasePrimitive(h),f}intersectsBox(t,e){return oi.set(t.min,t.max,e),oi.needsUpdate=!0,this.shapecast({intersectsBounds:n=>oi.intersectsBox(n),intersectsTriangle:n=>oi.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},s={},r=0,a=1/0){t.boundingBox||t.computeBoundingBox(),oi.set(t.boundingBox.min,t.boundingBox.max,e),oi.needsUpdate=!0;const o=this.geometry,l=o.attributes.position,c=o.index,u=t.attributes.position,h=t.index,f=nn.getPrimitive(),p=nn.getPrimitive();let g=Rr,m=Ey,d=null,_=null;s&&(d=Ty,_=Cy);let w=1/0,x=null,b=null;return qi.copy(e).invert(),ws.matrix.copy(qi),this.shapecast({boundsTraverseOrder:v=>oi.distanceToBox(v),intersectsBounds:(v,A,P)=>P<w&&P<a?(A&&(ws.min.copy(v.min),ws.max.copy(v.max),ws.needsUpdate=!0),!0):!1,intersectsRange:(v,A)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:P=>ws.distanceToBox(P),intersectsBounds:(P,y,E)=>E<w&&E<a,intersectsRange:(P,y)=>{for(let E=P*3,R=(P+y)*3;E<R;E+=3){ln(p,E,h,u),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let X=v*3,tt=(v+A)*3;X<tt;X+=3){ln(f,X,c,l),f.needsUpdate=!0;const F=f.distanceToTriangle(p,g,d);if(F<w&&(m.copy(g),_&&_.copy(d),w=F,x=X/3,b=E/3),F<r)return!0}}}});{const P=h?h.count:u.count;for(let y=0,E=P;y<E;y+=3){ln(p,y,h,u),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let R=v*3,X=(v+A)*3;R<X;R+=3){ln(f,R,c,l),f.needsUpdate=!0;const tt=f.distanceToTriangle(p,g,d);if(tt<w&&(m.copy(g),_&&_.copy(d),w=tt,x=R/3,b=y/3),tt<r)return!0}}}}}),nn.releasePrimitive(f),nn.releasePrimitive(p),w===1/0?null:(n.point?n.point.copy(m):n.point=m.clone(),n.distance=w,n.faceIndex=x,s&&(s.point?s.point.copy(_):s.point=_.clone(),s.point.applyMatrix4(qi),m.applyMatrix4(qi),s.distance=m.sub(s.point).length(),s.faceIndex=b),n)}closestPointToPoint(t,e={},n=0,s=1/0){const r=n*n,a=s*s;let o=1/0,l=null;if(this.shapecast({boundsTraverseOrder:u=>(Ss.copy(t).clamp(u.min,u.max),Ss.distanceToSquared(t)),intersectsBounds:(u,h,f)=>f<o&&f<a,intersectsTriangle:(u,h)=>{u.closestPointToPoint(t,Ss);const f=t.distanceToSquared(Ss);return f<o&&(Rr.copy(Ss),o=f,l=h),f<r}}),o===1/0)return null;const c=Math.sqrt(o);return e.point?e.point.copy(Rr):e.point=Rr.clone(),e.distance=c,e.faceIndex=l,e}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{Ye(0,new Float32Array(n),wu),t.union(wu)}),t}}const Su=new Ve;class Ly extends se{get isMesh(){return!this.displayEdges}get isLineSegments(){return this.displayEdges}get isLine(){return this.displayEdges}constructor(t,e,n=10,s=0){super(),this.material=e,this.geometry=new ke,this.name="MeshBVHRootVisualizer",this.depth=n,this.displayParents=!1,this.mesh=t,this.displayEdges=!0,this._group=s}raycast(){}update(){const t=this.geometry,e=this.mesh.geometry.boundsTree,n=this._group;if(t.dispose(),this.visible=!1,e){const s=this.depth-1,r=this.displayParents;let a=0;e.traverse((f,p)=>{if(f===s||p)return a++,!0;r&&a++},n);let o=0;const l=new Float32Array(8*3*a);e.traverse((f,p,g)=>{const m=f===s||p;if(m||r){Ye(0,g,Su);const{min:d,max:_}=Su;for(let w=-1;w<=1;w+=2){const x=w<0?d.x:_.x;for(let b=-1;b<=1;b+=2){const v=b<0?d.y:_.y;for(let A=-1;A<=1;A+=2){const P=A<0?d.z:_.z;l[o+0]=x,l[o+1]=v,l[o+2]=P,o+=3}}}return m}},n);let c,u;this.displayEdges?u=new Uint8Array([0,4,1,5,2,6,3,7,0,2,1,3,4,6,5,7,0,1,2,3,4,5,6,7]):u=new Uint8Array([0,1,2,2,1,3,4,6,5,6,7,5,1,4,5,0,4,1,2,3,6,3,7,6,0,2,4,2,6,4,1,5,3,3,5,7]),l.length>65535?c=new Uint32Array(u.length*a):c=new Uint16Array(u.length*a);const h=u.length;for(let f=0;f<a;f++){const p=f*8,g=f*h;for(let m=0;m<h;m++)c[g+m]=p+u[m]}t.setIndex(new Ae(c,1,!1)),t.setAttribute("position",new Ae(l,3,!1)),this.visible=!0}}}class dl extends Ki{get color(){return this.edgeMaterial.color}get opacity(){return this.edgeMaterial.opacity}set opacity(t){this.edgeMaterial.opacity=t,this.meshMaterial.opacity=t}constructor(t,e=10){super(),this.name="MeshBVHVisualizer",this.depth=e,this.mesh=t,this.displayParents=!1,this.displayEdges=!0,this._roots=[];const n=new ul({color:65416,transparent:!0,opacity:.3,depthWrite:!1}),s=new Hs({color:65416,transparent:!0,opacity:.3,depthWrite:!1});s.color=n.color,this.edgeMaterial=n,this.meshMaterial=s,this.update()}update(){const t=this.mesh.geometry.boundsTree,e=t?t._roots.length:0;for(;this._roots.length>e;){const n=this._roots.pop();n.geometry.dispose(),this.remove(n)}for(let n=0;n<e;n++){if(n>=this._roots.length){const r=new Ly(this.mesh,this.edgeMaterial,this.depth,n);this.add(r),this._roots.push(r)}const s=this._roots[n];s.depth=this.depth,s.mesh=this.mesh,s.displayParents=this.displayParents,s.displayEdges=this.displayEdges,s.material=this.displayEdges?this.edgeMaterial:this.meshMaterial,s.update()}}updateMatrixWorld(...t){this.position.copy(this.mesh.position),this.rotation.copy(this.mesh.rotation),this.scale.copy(this.mesh.scale),super.updateMatrixWorld(...t)}copy(t){this.depth=t.depth,this.mesh=t.mesh}clone(){return new dl(this.mesh,this.depth)}dispose(){this.edgeMaterial.dispose(),this.meshMaterial.dispose();const t=this.children;for(let e=0,n=t.length;e<n;e++)t[e].geometry.dispose()}}const Py={__name:"App",setup(i){const t={toolMode:"lasso",selectionMode:"intersection",liveUpdate:!1,selectModel:!1,wireframe:!1,useBoundsTree:!0,displayHelper:!1,helperDepth:10,rotate:!0};let e,n,s,r,a,o,l,c,u,h,f,p;const g=[];let m=!1,d=!1,_=!1;w(),x();function w(){const B=new Gt(2503224);e=new Uf({antialias:!0}),e.setPixelRatio(window.devicePixelRatio),e.setSize(window.innerWidth,window.innerHeight),e.setClearColor(B,1),e.shadowMap.enabled=!0,e.outputEncoding=Jt,document.body.appendChild(e.domElement),s=new Nv;const et=new kv(16777215,1);et.castShadow=!0,et.shadow.mapSize.set(2048,2048),et.position.set(10,10,10),s.add(et),s.add(new Hv(11583173,.8)),n=new Oe(75,window.innerWidth/window.innerHeight,.1,50),n.position.set(2,4,6),n.far=100,n.updateProjectionMatrix(),s.add(n),l=new Bf,l.material.color.set(16750592).convertSRGBToLinear(),l.renderOrder=1,l.position.z=-.2,l.depthTest=!1,l.scale.setScalar(1),n.add(l),p=new Ki,s.add(p),ot();function ot(){const U=new ke,$=new Vf({size:.1,vertexColors:!0,color:16777215});let j=[],ct=[];for(let dt=-3;dt<3;dt++)for(let Y=-3;Y<3;Y++)for(let ut=-3;ut<3;ut++){j.push(dt,Y,ut);const Q=new Gt(16777215);ct.push(Q.r,Q.g,Q.b)}U.setAttribute("position",new be(j,3)),U.setAttribute("color",new be(ct,3)),c=new zv(U,$),c.geometry.boundsTree=new Os(c.geometry),c.castShadow=!0,c.receiveShadow=!0,p.add(c),u=new dl(c,10),p.add(u)}h=new Ze,h.geometry=c.geometry.clone(),h.geometry.drawRange.count=0,h.material=new Hs({opacity:.05,transparent:!0,depthWrite:!1}),h.material.color.set(16750592).convertSRGBToLinear(),h.renderOrder=1,p.add(h),f=new Ze,f.geometry=h.geometry,f.material=new Hs({opacity:.25,transparent:!0,wireframe:!0,depthWrite:!1}),f.material.color.copy(h.material.color),f.renderOrder=2,p.add(f);const ht=new Gv(10,10,16777215,16777215);ht.material.opacity=.2,ht.material.transparent=!0,ht.position.y=-2.75,s.add(ht);const at=new Ze(new Wv,new Uv({color:0,opacity:.2,depthWrite:!1}));at.position.y=-2.74,at.rotation.x=-Math.PI/2,at.scale.setScalar(20),at.renderOrder=2,at.receiveShadow=!0,s.add(at),a=new Xv,document.body.appendChild(a.dom),o=new ey(n,e.domElement),o.minDistance=3,o.touches.ONE=Hn.PAN,o.mouseButtons.LEFT=kn.PAN,o.touches.TWO=Hn.ROTATE,o.mouseButtons.RIGHT=kn.ROTATE,o.enablePan=!1,r=new fl;const _t=r.addFolder("\u70B9\u4E91\u9009\u53D6\u5957\u7D22\u5DE5\u5177");_t.add(t,"toolMode",["lasso","box"]),_t.add(t,"selectionMode",["centroid","centroid-visible","intersection"]),_t.add(t,"selectModel"),_t.add(t,"liveUpdate"),_t.add(t,"useBoundsTree"),_t.open();const H=r.addFolder("\u6027\u80FD\u4F18\u5316\u9009\u9879");H.add(t,"wireframe"),H.add(t,"rotate"),H.add(t,"displayHelper"),H.add(t,"helperDepth",1,30,1).onChange(U=>{u.depth=U,u.update()}),H.open(),r.open();let St=-1/0,xt=-1/0,gt=-1/0,lt=-1/0;const Et=new Rt,T=new Rt,L=new Rt;e.domElement.addEventListener("pointerdown",U=>{gt=U.clientX,lt=U.clientY,St=U.clientX/window.innerWidth*2-1,xt=-(U.clientY/window.innerHeight*2-1),g.length=0,m=!0}),e.domElement.addEventListener("pointerup",()=>{l.visible=!1,m=!1,g.length&&(_=!0)}),e.domElement.addEventListener("pointermove",U=>{if((1&U.buttons)===0)return;const $=U.clientX,j=U.clientY,ct=U.clientX/window.innerWidth*2-1,dt=-(U.clientY/window.innerHeight*2-1);if(t.toolMode==="box")g.length=3*5,g[0]=St,g[1]=xt,g[2]=0,g[3]=ct,g[4]=xt,g[5]=0,g[6]=ct,g[7]=dt,g[8]=0,g[9]=St,g[10]=dt,g[11]=0,g[12]=St,g[13]=xt,g[14]=0,($!==gt||j!==lt)&&(d=!0),gt=$,lt=j,l.visible=!0,t.liveUpdate&&(_=!0);else if(Math.abs($-gt)>=3||Math.abs(j-lt)>=3){const ut=(g.length/3-1)*3;let Q=!1;g.length>3&&(Et.set(g[ut-3],g[ut-3+1]),T.set(g[ut],g[ut+1]),T.sub(Et).normalize(),Et.set(g[ut],g[ut+1]),L.set(ct,dt),L.sub(Et).normalize(),Q=T.dot(L)>.99),Q?(g[ut]=ct,g[ut+1]=dt):g.push(ct,dt,0),d=!0,l.visible=!0,gt=$,lt=j,t.liveUpdate&&(_=!0)}}),window.addEventListener("resize",function(){n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)},!1)}function x(){if(a.update(),requestAnimationFrame(x),c.material.wireframe=t.wireframe,u.visible=t.displayHelper,d){if(t.toolMode==="lasso"){const et=g.length;g.push(g[0],g[1],g[2]),l.geometry.setAttribute("position",new be(g,3,!1)),g.length=et}else l.geometry.setAttribute("position",new be(g,3,!1));l.frustumCulled=!1,d=!1}_&&(_=!1,g.length>0&&K());const B=Math.tan(Nm.DEG2RAD*n.fov/2)*l.position.z;l.scale.set(-B*n.aspect,-B,1),e.render(s,n),t.rotate&&(p.rotation.y+=.01,t.liveUpdate&&m&&(_=!0))}const b=new Yt,v=new I,A=new ao,P=new I,y=new I,E=new I,R=new Yt,X=new Array(8).fill().map(()=>new I),tt=new Array(12).fill().map(()=>new Je),F=[],N=[];function K(){for(R.copy(c.matrixWorld).premultiply(n.matrixWorldInverse).premultiply(n.projectionMatrix);F.length<g.length;)F.push(new Je);F.length=g.length;for(let at=0,_t=g.length;at<_t;at+=3){const H=F[at],St=(at+3)%_t;H.start.x=g[at],H.start.y=g[at+1],H.end.x=g[St],H.end.y=g[St+1]}b.copy(c.matrixWorld).invert(),v.set(0,0,0).applyMatrix4(n.matrixWorld).applyMatrix4(b);const B=window.performance.now(),et=[];c.geometry.boundsTree.shapecast({intersectsBounds:(at,_t,H,St)=>{if(!t.useBoundsTree)return Sr;const{min:xt,max:gt}=at;let lt=0,Et=1/0,T=-1/0,L=1/0;for(let Y=0;Y<=1;Y++)for(let ut=0;ut<=1;ut++)for(let Q=0;Q<=1;Q++){const S=X[lt];S.x=Y===0?xt.x:gt.x,S.y=ut===0?xt.y:gt.y,S.z=Q===0?xt.z:gt.z,S.w=1,S.applyMatrix4(R),lt++,S.y<Et&&(Et=S.y),S.y>T&&(T=S.y),S.x<L&&(L=S.x)}const U=N[St-1]||F,$=N[St]||[];$.length=0,N[St]=$;for(let Y=0,ut=U.length;Y<ut;Y++){const Q=U[Y],S=Q.start.x,M=Q.start.y,z=Q.end.x,Z=Q.end.y;if(S<L&&z<L)continue;const it=M>T,pt=Z>T;if(it&&pt)continue;const vt=M<Et,D=Z<Et;vt&&D||$.push(Q)}if($.length===0)return du;const j=nt(X),ct=j.map((Y,ut)=>{const Q=j[(ut+1)%j.length],S=tt[ut];return S.start.copy(Y),S.end.copy(Q),S});if(W($[0].start,ct)%2===1)return Sr;let dt=0;for(let Y=0,ut=j.length;Y<ut;Y++){const Q=j[Y],S=W(Q,$);if(Y===0&&(dt=S),dt!==S)return Sr}for(let Y=0,ut=ct.length;Y<ut;Y++){const Q=ct[Y];for(let S=0,M=$.length;S<M;S++)if(k(Q,$[S]))return Sr}return dt%2===0?du:Da},intersectsTriangle:(at,_t,H,St)=>{const xt=_t*3,gt=xt+0,lt=xt+1,Et=xt+2,T=t.useBoundsTree?N[St]:F;if(t.selectionMode==="centroid"||t.selectionMode==="centroid-visible"){if(P.copy(at.a).add(at.b).add(at.c).multiplyScalar(1/3),y.copy(P).applyMatrix4(R),H||W(y,T)%2===1)return t.selectionMode==="centroid-visible"&&(at.getNormal(E),A.origin.copy(P).addScaledVector(E,1e-6),A.direction.subVectors(v,P),c.geometry.boundsTree.raycastFirst(A,fn))?!1:(et.push(gt,lt,Et),t.selectModel)}else if(t.selectionMode==="intersection"){if(H)return et.push(gt,lt,Et),t.selectModel;const L=[at.a,at.b,at.c];for(let $=0;$<3;$++){const j=L[$];if(j.applyMatrix4(R),W(j,T)%2===1)return et.push(gt,lt,Et),t.selectModel}const U=[tt[0],tt[1],tt[2]];U[0].start.copy(at.a),U[0].end.copy(at.b),U[1].start.copy(at.b),U[1].end.copy(at.c),U[2].start.copy(at.c),U[2].end.copy(at.a);for(let $=0;$<3;$++){const j=U[$];for(let ct=0,dt=T.length;ct<dt;ct++)if(k(j,T[ct]))return et.push(gt,lt,Et),t.selectModel}}return!1}}),window.performance.now()-B;const ot=c.geometry.index,ht=h.geometry.index;if(et.length&&t.selectModel){for(let at=0,_t=ot.count;at<_t;at++){const H=ot.getX(at);ht.setX(at,H)}h.geometry.drawRange.count=1/0,ht.needsUpdate=!0}else{for(let at=0,_t=et.length;at<_t;at++){const H=ot.getX(et[at]);ht.setX(at,H)}h.geometry.drawRange.count=et.length,ht.needsUpdate=!0}}function nt(B){function et(lt,Et,T){const L=(Et.y-lt.y)*(T.x-Et.x)-(Et.x-lt.x)*(T.y-Et.y);return L==0?0:L>0?1:2}function ot(lt,Et){return(lt.x-Et.x)*(lt.x-Et.x)+(lt.y-Et.y)*(lt.y-Et.y)}function ht(lt,Et){const T=et(H,lt,Et);return T==0?ot(H,Et)>=ot(H,lt)?-1:1:T==2?-1:1}let at=1/0,_t=-1;for(let lt=0,Et=B.length;lt<Et;lt++){const T=B[lt];T.y<at&&(_t=lt,at=T.y)}const H=B[_t];B[_t]=B[0],B[0]=H,B=B.sort(ht);let St=1;const xt=B.length;for(let lt=1;lt<xt;lt++){for(;lt<xt-1&&et(H,B[lt],B[lt+1])==0;)lt++;B[St]=B[lt],St++}if(St<3)return null;const gt=[B[0],B[1],B[2]];for(let lt=3;lt<St;lt++){for(;et(gt[gt.length-2],gt[gt.length-1],B[lt])!==2;)gt.pop();gt.push(B[lt])}return gt}function J(B,et,ot,ht){const{start:at,end:_t}=et,H=B.x,St=B.y,xt=at.y,gt=_t.y;if(xt===gt||St>xt&&St>gt||St<xt&&St<gt)return!1;const lt=at.x,Et=_t.x;if(H>lt&&H>Et)return!1;if(H<lt&&H<Et)return!(St===xt&&ot!==ht);const T=Et-lt,U=gt-xt,$=-T,j=H-lt,ct=St-xt,dt=U*j+$*ct;return Math.sign(dt)!==Math.sign(U)}function W(B,et){let ot=0;const ht=et[et.length-1];let at=ht.start.y>ht.end.y;for(let _t=0,H=et.length;_t<H;_t++){const St=et[_t],xt=St.start.y>St.end.y;J(B,St,at,xt)&&ot++,at=xt}return ot}function k(B,et){function ot(St,xt,gt){return(gt.y-St.y)*(xt.x-St.x)>(xt.y-St.y)*(gt.x-St.x)}const ht=B.start,at=B.end,_t=et.start,H=et.end;return ot(ht,_t,H)!==ot(at,_t,H)&&ot(ht,at,_t)!==ot(ht,at,H)}return(B,et)=>null}};wp(Py).mount("#app");
