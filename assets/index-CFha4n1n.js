(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var fh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Yx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Lg={exports:{}},Wc={},Ig={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qa=Symbol.for("react.element"),Kx=Symbol.for("react.portal"),Zx=Symbol.for("react.fragment"),Qx=Symbol.for("react.strict_mode"),Jx=Symbol.for("react.profiler"),e0=Symbol.for("react.provider"),t0=Symbol.for("react.context"),n0=Symbol.for("react.forward_ref"),i0=Symbol.for("react.suspense"),r0=Symbol.for("react.memo"),s0=Symbol.for("react.lazy"),Ap=Symbol.iterator;function o0(t){return t===null||typeof t!="object"?null:(t=Ap&&t[Ap]||t["@@iterator"],typeof t=="function"?t:null)}var Ug={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fg=Object.assign,kg={};function Oo(t,e,n){this.props=t,this.context=e,this.refs=kg,this.updater=n||Ug}Oo.prototype.isReactComponent={};Oo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Oo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Og(){}Og.prototype=Oo.prototype;function dh(t,e,n){this.props=t,this.context=e,this.refs=kg,this.updater=n||Ug}var hh=dh.prototype=new Og;hh.constructor=dh;Fg(hh,Oo.prototype);hh.isPureReactComponent=!0;var Cp=Array.isArray,Bg=Object.prototype.hasOwnProperty,ph={current:null},zg={key:!0,ref:!0,__self:!0,__source:!0};function Hg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Bg.call(e,i)&&!zg.hasOwnProperty(i)&&(r[i]=e[i]);var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];r.children=u}if(t&&t.defaultProps)for(i in l=t.defaultProps,l)r[i]===void 0&&(r[i]=l[i]);return{$$typeof:qa,type:t,key:s,ref:a,props:r,_owner:ph.current}}function a0(t,e){return{$$typeof:qa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function mh(t){return typeof t=="object"&&t!==null&&t.$$typeof===qa}function l0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Rp=/\/+/g;function bu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?l0(""+t.key):e.toString(36)}function Jl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case qa:case Kx:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+bu(a,0):i,Cp(r)?(n="",t!=null&&(n=t.replace(Rp,"$&/")+"/"),Jl(r,e,n,"",function(d){return d})):r!=null&&(mh(r)&&(r=a0(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Rp,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Cp(t))for(var l=0;l<t.length;l++){s=t[l];var u=i+bu(s,l);a+=Jl(s,e,n,u,r)}else if(u=o0(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=i+bu(s,l++),a+=Jl(s,e,n,u,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function dl(t,e,n){if(t==null)return t;var i=[],r=0;return Jl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function c0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var On={current:null},ec={transition:null},u0={ReactCurrentDispatcher:On,ReactCurrentBatchConfig:ec,ReactCurrentOwner:ph};function jg(){throw Error("act(...) is not supported in production builds of React.")}St.Children={map:dl,forEach:function(t,e,n){dl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return dl(t,function(){e++}),e},toArray:function(t){return dl(t,function(e){return e})||[]},only:function(t){if(!mh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};St.Component=Oo;St.Fragment=Zx;St.Profiler=Jx;St.PureComponent=dh;St.StrictMode=Qx;St.Suspense=i0;St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u0;St.act=jg;St.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Fg({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=ph.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Bg.call(e,u)&&!zg.hasOwnProperty(u)&&(i[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];i.children=l}return{$$typeof:qa,type:t.type,key:r,ref:s,props:i,_owner:a}};St.createContext=function(t){return t={$$typeof:t0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:e0,_context:t},t.Consumer=t};St.createElement=Hg;St.createFactory=function(t){var e=Hg.bind(null,t);return e.type=t,e};St.createRef=function(){return{current:null}};St.forwardRef=function(t){return{$$typeof:n0,render:t}};St.isValidElement=mh;St.lazy=function(t){return{$$typeof:s0,_payload:{_status:-1,_result:t},_init:c0}};St.memo=function(t,e){return{$$typeof:r0,type:t,compare:e===void 0?null:e}};St.startTransition=function(t){var e=ec.transition;ec.transition={};try{t()}finally{ec.transition=e}};St.unstable_act=jg;St.useCallback=function(t,e){return On.current.useCallback(t,e)};St.useContext=function(t){return On.current.useContext(t)};St.useDebugValue=function(){};St.useDeferredValue=function(t){return On.current.useDeferredValue(t)};St.useEffect=function(t,e){return On.current.useEffect(t,e)};St.useId=function(){return On.current.useId()};St.useImperativeHandle=function(t,e,n){return On.current.useImperativeHandle(t,e,n)};St.useInsertionEffect=function(t,e){return On.current.useInsertionEffect(t,e)};St.useLayoutEffect=function(t,e){return On.current.useLayoutEffect(t,e)};St.useMemo=function(t,e){return On.current.useMemo(t,e)};St.useReducer=function(t,e,n){return On.current.useReducer(t,e,n)};St.useRef=function(t){return On.current.useRef(t)};St.useState=function(t){return On.current.useState(t)};St.useSyncExternalStore=function(t,e,n){return On.current.useSyncExternalStore(t,e,n)};St.useTransition=function(){return On.current.useTransition()};St.version="18.3.1";Ig.exports=St;var Nt=Ig.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f0=Nt,d0=Symbol.for("react.element"),h0=Symbol.for("react.fragment"),p0=Object.prototype.hasOwnProperty,m0=f0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g0={key:!0,ref:!0,__self:!0,__source:!0};function Vg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)p0.call(e,i)&&!g0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:d0,type:t,key:s,ref:a,props:r,_owner:m0.current}}Wc.Fragment=h0;Wc.jsx=Vg;Wc.jsxs=Vg;Lg.exports=Wc;var x=Lg.exports,Gg={exports:{}},si={},Wg={exports:{}},Xg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,ce){var _e=V.length;V.push(ce);e:for(;0<_e;){var be=_e-1>>>1,Ge=V[be];if(0<r(Ge,ce))V[be]=ce,V[_e]=Ge,_e=be;else break e}}function n(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var ce=V[0],_e=V.pop();if(_e!==ce){V[0]=_e;e:for(var be=0,Ge=V.length,st=Ge>>>1;be<st;){var oe=2*(be+1)-1,xe=V[oe],Ae=oe+1,ye=V[Ae];if(0>r(xe,_e))Ae<Ge&&0>r(ye,xe)?(V[be]=ye,V[Ae]=_e,be=Ae):(V[be]=xe,V[oe]=_e,be=oe);else if(Ae<Ge&&0>r(ye,_e))V[be]=ye,V[Ae]=_e,be=Ae;else break e}}return ce}function r(V,ce){var _e=V.sortIndex-ce.sortIndex;return _e!==0?_e:V.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var u=[],d=[],m=1,g=null,v=3,y=!1,M=!1,A=!1,E=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(V){for(var ce=n(d);ce!==null;){if(ce.callback===null)i(d);else if(ce.startTime<=V)i(d),ce.sortIndex=ce.expirationTime,e(u,ce);else break;ce=n(d)}}function C(V){if(A=!1,w(V),!M)if(n(u)!==null)M=!0,fe(k);else{var ce=n(d);ce!==null&&me(C,ce.startTime-V)}}function k(V,ce){M=!1,A&&(A=!1,h(B),B=-1),y=!0;var _e=v;try{for(w(ce),g=n(u);g!==null&&(!(g.expirationTime>ce)||V&&!O());){var be=g.callback;if(typeof be=="function"){g.callback=null,v=g.priorityLevel;var Ge=be(g.expirationTime<=ce);ce=t.unstable_now(),typeof Ge=="function"?g.callback=Ge:g===n(u)&&i(u),w(ce)}else i(u);g=n(u)}if(g!==null)var st=!0;else{var oe=n(d);oe!==null&&me(C,oe.startTime-ce),st=!1}return st}finally{g=null,v=_e,y=!1}}var I=!1,f=null,B=-1,D=5,N=-1;function O(){return!(t.unstable_now()-N<D)}function q(){if(f!==null){var V=t.unstable_now();N=V;var ce=!0;try{ce=f(!0,V)}finally{ce?W():(I=!1,f=null)}}else I=!1}var W;if(typeof S=="function")W=function(){S(q)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,he=ee.port2;ee.port1.onmessage=q,W=function(){he.postMessage(null)}}else W=function(){E(q,0)};function fe(V){f=V,I||(I=!0,W())}function me(V,ce){B=E(function(){V(t.unstable_now())},ce)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){M||y||(M=!0,fe(k))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(V){switch(v){case 1:case 2:case 3:var ce=3;break;default:ce=v}var _e=v;v=ce;try{return V()}finally{v=_e}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,ce){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var _e=v;v=V;try{return ce()}finally{v=_e}},t.unstable_scheduleCallback=function(V,ce,_e){var be=t.unstable_now();switch(typeof _e=="object"&&_e!==null?(_e=_e.delay,_e=typeof _e=="number"&&0<_e?be+_e:be):_e=be,V){case 1:var Ge=-1;break;case 2:Ge=250;break;case 5:Ge=1073741823;break;case 4:Ge=1e4;break;default:Ge=5e3}return Ge=_e+Ge,V={id:m++,callback:ce,priorityLevel:V,startTime:_e,expirationTime:Ge,sortIndex:-1},_e>be?(V.sortIndex=_e,e(d,V),n(u)===null&&V===n(d)&&(A?(h(B),B=-1):A=!0,me(C,_e-be))):(V.sortIndex=Ge,e(u,V),M||y||(M=!0,fe(k))),V},t.unstable_shouldYield=O,t.unstable_wrapCallback=function(V){var ce=v;return function(){var _e=v;v=ce;try{return V.apply(this,arguments)}finally{v=_e}}}})(Xg);Wg.exports=Xg;var v0=Wg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0=Nt,ri=v0;function Me(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qg=new Set,ba={};function Fs(t,e){bo(t,e),bo(t+"Capture",e)}function bo(t,e){for(ba[t]=e,t=0;t<e.length;t++)qg.add(e[t])}var pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pf=Object.prototype.hasOwnProperty,x0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pp={},Np={};function y0(t){return Pf.call(Np,t)?!0:Pf.call(Pp,t)?!1:x0.test(t)?Np[t]=!0:(Pp[t]=!0,!1)}function S0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E0(t,e,n,i){if(e===null||typeof e>"u"||S0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Bn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Tn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Tn[t]=new Bn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Tn[e]=new Bn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Tn[t]=new Bn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Tn[t]=new Bn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Tn[t]=new Bn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Tn[t]=new Bn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Tn[t]=new Bn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Tn[t]=new Bn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Tn[t]=new Bn(t,5,!1,t.toLowerCase(),null,!1,!1)});var gh=/[\-:]([a-z])/g;function vh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(gh,vh);Tn[e]=new Bn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(gh,vh);Tn[e]=new Bn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(gh,vh);Tn[e]=new Bn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Tn[t]=new Bn(t,1,!1,t.toLowerCase(),null,!1,!1)});Tn.xlinkHref=new Bn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Tn[t]=new Bn(t,1,!1,t.toLowerCase(),null,!0,!0)});function _h(t,e,n,i){var r=Tn.hasOwnProperty(e)?Tn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(E0(e,n,r,i)&&(n=null),i||r===null?y0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Sr=_0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hl=Symbol.for("react.element"),ro=Symbol.for("react.portal"),so=Symbol.for("react.fragment"),xh=Symbol.for("react.strict_mode"),Nf=Symbol.for("react.profiler"),$g=Symbol.for("react.provider"),Yg=Symbol.for("react.context"),yh=Symbol.for("react.forward_ref"),Df=Symbol.for("react.suspense"),Lf=Symbol.for("react.suspense_list"),Sh=Symbol.for("react.memo"),Fr=Symbol.for("react.lazy"),Kg=Symbol.for("react.offscreen"),Dp=Symbol.iterator;function Jo(t){return t===null||typeof t!="object"?null:(t=Dp&&t[Dp]||t["@@iterator"],typeof t=="function"?t:null)}var en=Object.assign,Au;function da(t){if(Au===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Au=e&&e[1]||""}return`
`+Au+t}var Cu=!1;function Ru(t,e){if(!t||Cu)return"";Cu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var i=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){i=d}t.call(e.prototype)}else{try{throw Error()}catch(d){i=d}t()}}catch(d){if(d&&i&&typeof d.stack=="string"){for(var r=d.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,l=s.length-1;1<=a&&0<=l&&r[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(r[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||r[a]!==s[l]){var u=`
`+r[a].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=a&&0<=l);break}}}finally{Cu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?da(t):""}function M0(t){switch(t.tag){case 5:return da(t.type);case 16:return da("Lazy");case 13:return da("Suspense");case 19:return da("SuspenseList");case 0:case 2:case 15:return t=Ru(t.type,!1),t;case 11:return t=Ru(t.type.render,!1),t;case 1:return t=Ru(t.type,!0),t;default:return""}}function If(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case so:return"Fragment";case ro:return"Portal";case Nf:return"Profiler";case xh:return"StrictMode";case Df:return"Suspense";case Lf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Yg:return(t.displayName||"Context")+".Consumer";case $g:return(t._context.displayName||"Context")+".Provider";case yh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sh:return e=t.displayName||null,e!==null?e:If(t.type)||"Memo";case Fr:e=t._payload,t=t._init;try{return If(t(e))}catch{}}return null}function w0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return If(e);case 8:return e===xh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Jr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function T0(t){var e=Zg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function pl(t){t._valueTracker||(t._valueTracker=T0(t))}function Qg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Zg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function _c(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Uf(t,e){var n=e.checked;return en({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Lp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Jr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jg(t,e){e=e.checked,e!=null&&_h(t,"checked",e,!1)}function Ff(t,e){Jg(t,e);var n=Jr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?kf(t,e.type,n):e.hasOwnProperty("defaultValue")&&kf(t,e.type,Jr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ip(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function kf(t,e,n){(e!=="number"||_c(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ha=Array.isArray;function _o(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Jr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Of(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Me(91));return en({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Up(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Me(92));if(ha(n)){if(1<n.length)throw Error(Me(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Jr(n)}}function ev(t,e){var n=Jr(e.value),i=Jr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Fp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function tv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?tv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ml,nv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ml=ml||document.createElement("div"),ml.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ml.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Aa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var va={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},b0=["Webkit","ms","Moz","O"];Object.keys(va).forEach(function(t){b0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),va[e]=va[t]})});function iv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||va.hasOwnProperty(t)&&va[t]?(""+e).trim():e+"px"}function rv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=iv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var A0=en({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zf(t,e){if(e){if(A0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Me(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Me(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Me(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Me(62))}}function Hf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jf=null;function Eh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vf=null,xo=null,yo=null;function kp(t){if(t=Ka(t)){if(typeof Vf!="function")throw Error(Me(280));var e=t.stateNode;e&&(e=Kc(e),Vf(t.stateNode,t.type,e))}}function sv(t){xo?yo?yo.push(t):yo=[t]:xo=t}function ov(){if(xo){var t=xo,e=yo;if(yo=xo=null,kp(t),e)for(t=0;t<e.length;t++)kp(e[t])}}function av(t,e){return t(e)}function lv(){}var Pu=!1;function cv(t,e,n){if(Pu)return t(e,n);Pu=!0;try{return av(t,e,n)}finally{Pu=!1,(xo!==null||yo!==null)&&(lv(),ov())}}function Ca(t,e){var n=t.stateNode;if(n===null)return null;var i=Kc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Me(231,e,typeof n));return n}var Gf=!1;if(pr)try{var ea={};Object.defineProperty(ea,"passive",{get:function(){Gf=!0}}),window.addEventListener("test",ea,ea),window.removeEventListener("test",ea,ea)}catch{Gf=!1}function C0(t,e,n,i,r,s,a,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(m){this.onError(m)}}var _a=!1,xc=null,yc=!1,Wf=null,R0={onError:function(t){_a=!0,xc=t}};function P0(t,e,n,i,r,s,a,l,u){_a=!1,xc=null,C0.apply(R0,arguments)}function N0(t,e,n,i,r,s,a,l,u){if(P0.apply(this,arguments),_a){if(_a){var d=xc;_a=!1,xc=null}else throw Error(Me(198));yc||(yc=!0,Wf=d)}}function ks(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function uv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Op(t){if(ks(t)!==t)throw Error(Me(188))}function D0(t){var e=t.alternate;if(!e){if(e=ks(t),e===null)throw Error(Me(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Op(r),t;if(s===i)return Op(r),e;s=s.sibling}throw Error(Me(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,l=r.child;l;){if(l===n){a=!0,n=r,i=s;break}if(l===i){a=!0,i=r,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,i=r;break}if(l===i){a=!0,i=s,n=r;break}l=l.sibling}if(!a)throw Error(Me(189))}}if(n.alternate!==i)throw Error(Me(190))}if(n.tag!==3)throw Error(Me(188));return n.stateNode.current===n?t:e}function fv(t){return t=D0(t),t!==null?dv(t):null}function dv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=dv(t);if(e!==null)return e;t=t.sibling}return null}var hv=ri.unstable_scheduleCallback,Bp=ri.unstable_cancelCallback,L0=ri.unstable_shouldYield,I0=ri.unstable_requestPaint,rn=ri.unstable_now,U0=ri.unstable_getCurrentPriorityLevel,Mh=ri.unstable_ImmediatePriority,pv=ri.unstable_UserBlockingPriority,Sc=ri.unstable_NormalPriority,F0=ri.unstable_LowPriority,mv=ri.unstable_IdlePriority,Xc=null,Gi=null;function k0(t){if(Gi&&typeof Gi.onCommitFiberRoot=="function")try{Gi.onCommitFiberRoot(Xc,t,void 0,(t.current.flags&128)===128)}catch{}}var Pi=Math.clz32?Math.clz32:z0,O0=Math.log,B0=Math.LN2;function z0(t){return t>>>=0,t===0?32:31-(O0(t)/B0|0)|0}var gl=64,vl=4194304;function pa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ec(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~r;l!==0?i=pa(l):(s&=a,s!==0&&(i=pa(s)))}else a=n&~r,a!==0?i=pa(a):s!==0&&(i=pa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Pi(e),r=1<<n,i|=t[n],e&=~r;return i}function H0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Pi(s),l=1<<a,u=r[a];u===-1?(!(l&n)||l&i)&&(r[a]=H0(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Xf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gv(){var t=gl;return gl<<=1,!(gl&4194240)&&(gl=64),t}function Nu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $a(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Pi(e),t[e]=n}function V0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Pi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function wh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Pi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var zt=0;function vv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var _v,Th,xv,yv,Sv,qf=!1,_l=[],Vr=null,Gr=null,Wr=null,Ra=new Map,Pa=new Map,Or=[],G0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zp(t,e){switch(t){case"focusin":case"focusout":Vr=null;break;case"dragenter":case"dragleave":Gr=null;break;case"mouseover":case"mouseout":Wr=null;break;case"pointerover":case"pointerout":Ra.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pa.delete(e.pointerId)}}function ta(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ka(e),e!==null&&Th(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function W0(t,e,n,i,r){switch(e){case"focusin":return Vr=ta(Vr,t,e,n,i,r),!0;case"dragenter":return Gr=ta(Gr,t,e,n,i,r),!0;case"mouseover":return Wr=ta(Wr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ra.set(s,ta(Ra.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Pa.set(s,ta(Pa.get(s)||null,t,e,n,i,r)),!0}return!1}function Ev(t){var e=Ss(t.target);if(e!==null){var n=ks(e);if(n!==null){if(e=n.tag,e===13){if(e=uv(n),e!==null){t.blockedOn=e,Sv(t.priority,function(){xv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$f(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);jf=i,n.target.dispatchEvent(i),jf=null}else return e=Ka(n),e!==null&&Th(e),t.blockedOn=n,!1;e.shift()}return!0}function Hp(t,e,n){tc(t)&&n.delete(e)}function X0(){qf=!1,Vr!==null&&tc(Vr)&&(Vr=null),Gr!==null&&tc(Gr)&&(Gr=null),Wr!==null&&tc(Wr)&&(Wr=null),Ra.forEach(Hp),Pa.forEach(Hp)}function na(t,e){t.blockedOn===e&&(t.blockedOn=null,qf||(qf=!0,ri.unstable_scheduleCallback(ri.unstable_NormalPriority,X0)))}function Na(t){function e(r){return na(r,t)}if(0<_l.length){na(_l[0],t);for(var n=1;n<_l.length;n++){var i=_l[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Vr!==null&&na(Vr,t),Gr!==null&&na(Gr,t),Wr!==null&&na(Wr,t),Ra.forEach(e),Pa.forEach(e),n=0;n<Or.length;n++)i=Or[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Or.length&&(n=Or[0],n.blockedOn===null);)Ev(n),n.blockedOn===null&&Or.shift()}var So=Sr.ReactCurrentBatchConfig,Mc=!0;function q0(t,e,n,i){var r=zt,s=So.transition;So.transition=null;try{zt=1,bh(t,e,n,i)}finally{zt=r,So.transition=s}}function $0(t,e,n,i){var r=zt,s=So.transition;So.transition=null;try{zt=4,bh(t,e,n,i)}finally{zt=r,So.transition=s}}function bh(t,e,n,i){if(Mc){var r=$f(t,e,n,i);if(r===null)Hu(t,e,i,wc,n),zp(t,i);else if(W0(r,t,e,n,i))i.stopPropagation();else if(zp(t,i),e&4&&-1<G0.indexOf(t)){for(;r!==null;){var s=Ka(r);if(s!==null&&_v(s),s=$f(t,e,n,i),s===null&&Hu(t,e,i,wc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Hu(t,e,i,null,n)}}var wc=null;function $f(t,e,n,i){if(wc=null,t=Eh(i),t=Ss(t),t!==null)if(e=ks(t),e===null)t=null;else if(n=e.tag,n===13){if(t=uv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return wc=t,null}function Mv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(U0()){case Mh:return 1;case pv:return 4;case Sc:case F0:return 16;case mv:return 536870912;default:return 16}default:return 16}}var Hr=null,Ah=null,nc=null;function wv(){if(nc)return nc;var t,e=Ah,n=e.length,i,r="value"in Hr?Hr.value:Hr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return nc=r.slice(t,1<i?1-i:void 0)}function ic(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xl(){return!0}function jp(){return!1}function oi(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xl:jp,this.isPropagationStopped=jp,this}return en(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),e}var Bo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ch=oi(Bo),Ya=en({},Bo,{view:0,detail:0}),Y0=oi(Ya),Du,Lu,ia,qc=en({},Ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ia&&(ia&&t.type==="mousemove"?(Du=t.screenX-ia.screenX,Lu=t.screenY-ia.screenY):Lu=Du=0,ia=t),Du)},movementY:function(t){return"movementY"in t?t.movementY:Lu}}),Vp=oi(qc),K0=en({},qc,{dataTransfer:0}),Z0=oi(K0),Q0=en({},Ya,{relatedTarget:0}),Iu=oi(Q0),J0=en({},Bo,{animationName:0,elapsedTime:0,pseudoElement:0}),ey=oi(J0),ty=en({},Bo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ny=oi(ty),iy=en({},Bo,{data:0}),Gp=oi(iy),ry={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ay(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=oy[t])?!!e[t]:!1}function Rh(){return ay}var ly=en({},Ya,{key:function(t){if(t.key){var e=ry[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ic(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rh,charCode:function(t){return t.type==="keypress"?ic(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ic(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cy=oi(ly),uy=en({},qc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wp=oi(uy),fy=en({},Ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rh}),dy=oi(fy),hy=en({},Bo,{propertyName:0,elapsedTime:0,pseudoElement:0}),py=oi(hy),my=en({},qc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gy=oi(my),vy=[9,13,27,32],Ph=pr&&"CompositionEvent"in window,xa=null;pr&&"documentMode"in document&&(xa=document.documentMode);var _y=pr&&"TextEvent"in window&&!xa,Tv=pr&&(!Ph||xa&&8<xa&&11>=xa),Xp=" ",qp=!1;function bv(t,e){switch(t){case"keyup":return vy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Av(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var oo=!1;function xy(t,e){switch(t){case"compositionend":return Av(e);case"keypress":return e.which!==32?null:(qp=!0,Xp);case"textInput":return t=e.data,t===Xp&&qp?null:t;default:return null}}function yy(t,e){if(oo)return t==="compositionend"||!Ph&&bv(t,e)?(t=wv(),nc=Ah=Hr=null,oo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Tv&&e.locale!=="ko"?null:e.data;default:return null}}var Sy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $p(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Sy[t.type]:e==="textarea"}function Cv(t,e,n,i){sv(i),e=Tc(e,"onChange"),0<e.length&&(n=new Ch("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ya=null,Da=null;function Ey(t){Bv(t,0)}function $c(t){var e=co(t);if(Qg(e))return t}function My(t,e){if(t==="change")return e}var Rv=!1;if(pr){var Uu;if(pr){var Fu="oninput"in document;if(!Fu){var Yp=document.createElement("div");Yp.setAttribute("oninput","return;"),Fu=typeof Yp.oninput=="function"}Uu=Fu}else Uu=!1;Rv=Uu&&(!document.documentMode||9<document.documentMode)}function Kp(){ya&&(ya.detachEvent("onpropertychange",Pv),Da=ya=null)}function Pv(t){if(t.propertyName==="value"&&$c(Da)){var e=[];Cv(e,Da,t,Eh(t)),cv(Ey,e)}}function wy(t,e,n){t==="focusin"?(Kp(),ya=e,Da=n,ya.attachEvent("onpropertychange",Pv)):t==="focusout"&&Kp()}function Ty(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $c(Da)}function by(t,e){if(t==="click")return $c(e)}function Ay(t,e){if(t==="input"||t==="change")return $c(e)}function Cy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Li=typeof Object.is=="function"?Object.is:Cy;function La(t,e){if(Li(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Pf.call(e,r)||!Li(t[r],e[r]))return!1}return!0}function Zp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qp(t,e){var n=Zp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zp(n)}}function Nv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Nv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Dv(){for(var t=window,e=_c();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=_c(t.document)}return e}function Nh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ry(t){var e=Dv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Nv(n.ownerDocument.documentElement,n)){if(i!==null&&Nh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Qp(n,s);var a=Qp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Py=pr&&"documentMode"in document&&11>=document.documentMode,ao=null,Yf=null,Sa=null,Kf=!1;function Jp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kf||ao==null||ao!==_c(i)||(i=ao,"selectionStart"in i&&Nh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Sa&&La(Sa,i)||(Sa=i,i=Tc(Yf,"onSelect"),0<i.length&&(e=new Ch("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ao)))}function yl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var lo={animationend:yl("Animation","AnimationEnd"),animationiteration:yl("Animation","AnimationIteration"),animationstart:yl("Animation","AnimationStart"),transitionend:yl("Transition","TransitionEnd")},ku={},Lv={};pr&&(Lv=document.createElement("div").style,"AnimationEvent"in window||(delete lo.animationend.animation,delete lo.animationiteration.animation,delete lo.animationstart.animation),"TransitionEvent"in window||delete lo.transitionend.transition);function Yc(t){if(ku[t])return ku[t];if(!lo[t])return t;var e=lo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Lv)return ku[t]=e[n];return t}var Iv=Yc("animationend"),Uv=Yc("animationiteration"),Fv=Yc("animationstart"),kv=Yc("transitionend"),Ov=new Map,em="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ns(t,e){Ov.set(t,e),Fs(e,[t])}for(var Ou=0;Ou<em.length;Ou++){var Bu=em[Ou],Ny=Bu.toLowerCase(),Dy=Bu[0].toUpperCase()+Bu.slice(1);ns(Ny,"on"+Dy)}ns(Iv,"onAnimationEnd");ns(Uv,"onAnimationIteration");ns(Fv,"onAnimationStart");ns("dblclick","onDoubleClick");ns("focusin","onFocus");ns("focusout","onBlur");ns(kv,"onTransitionEnd");bo("onMouseEnter",["mouseout","mouseover"]);bo("onMouseLeave",["mouseout","mouseover"]);bo("onPointerEnter",["pointerout","pointerover"]);bo("onPointerLeave",["pointerout","pointerover"]);Fs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ly=new Set("cancel close invalid load scroll toggle".split(" ").concat(ma));function tm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,N0(i,e,void 0,t),t.currentTarget=null}function Bv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var l=i[a],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==s&&r.isPropagationStopped())break e;tm(r,l,d),s=u}else for(a=0;a<i.length;a++){if(l=i[a],u=l.instance,d=l.currentTarget,l=l.listener,u!==s&&r.isPropagationStopped())break e;tm(r,l,d),s=u}}}if(yc)throw t=Wf,yc=!1,Wf=null,t}function qt(t,e){var n=e[td];n===void 0&&(n=e[td]=new Set);var i=t+"__bubble";n.has(i)||(zv(e,t,2,!1),n.add(i))}function zu(t,e,n){var i=0;e&&(i|=4),zv(n,t,i,e)}var Sl="_reactListening"+Math.random().toString(36).slice(2);function Ia(t){if(!t[Sl]){t[Sl]=!0,qg.forEach(function(n){n!=="selectionchange"&&(Ly.has(n)||zu(n,!1,t),zu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Sl]||(e[Sl]=!0,zu("selectionchange",!1,e))}}function zv(t,e,n,i){switch(Mv(e)){case 1:var r=q0;break;case 4:r=$0;break;default:r=bh}n=r.bind(null,e,n,t),r=void 0,!Gf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Hu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var l=i.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===r||u.nodeType===8&&u.parentNode===r))return;a=a.return}for(;l!==null;){if(a=Ss(l),a===null)return;if(u=a.tag,u===5||u===6){i=s=a;continue e}l=l.parentNode}}i=i.return}cv(function(){var d=s,m=Eh(n),g=[];e:{var v=Ov.get(t);if(v!==void 0){var y=Ch,M=t;switch(t){case"keypress":if(ic(n)===0)break e;case"keydown":case"keyup":y=cy;break;case"focusin":M="focus",y=Iu;break;case"focusout":M="blur",y=Iu;break;case"beforeblur":case"afterblur":y=Iu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Z0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=dy;break;case Iv:case Uv:case Fv:y=ey;break;case kv:y=py;break;case"scroll":y=Y0;break;case"wheel":y=gy;break;case"copy":case"cut":case"paste":y=ny;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Wp}var A=(e&4)!==0,E=!A&&t==="scroll",h=A?v!==null?v+"Capture":null:v;A=[];for(var S=d,w;S!==null;){w=S;var C=w.stateNode;if(w.tag===5&&C!==null&&(w=C,h!==null&&(C=Ca(S,h),C!=null&&A.push(Ua(S,C,w)))),E)break;S=S.return}0<A.length&&(v=new y(v,M,null,n,m),g.push({event:v,listeners:A}))}}if(!(e&7)){e:{if(v=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",v&&n!==jf&&(M=n.relatedTarget||n.fromElement)&&(Ss(M)||M[mr]))break e;if((y||v)&&(v=m.window===m?m:(v=m.ownerDocument)?v.defaultView||v.parentWindow:window,y?(M=n.relatedTarget||n.toElement,y=d,M=M?Ss(M):null,M!==null&&(E=ks(M),M!==E||M.tag!==5&&M.tag!==6)&&(M=null)):(y=null,M=d),y!==M)){if(A=Vp,C="onMouseLeave",h="onMouseEnter",S="mouse",(t==="pointerout"||t==="pointerover")&&(A=Wp,C="onPointerLeave",h="onPointerEnter",S="pointer"),E=y==null?v:co(y),w=M==null?v:co(M),v=new A(C,S+"leave",y,n,m),v.target=E,v.relatedTarget=w,C=null,Ss(m)===d&&(A=new A(h,S+"enter",M,n,m),A.target=w,A.relatedTarget=E,C=A),E=C,y&&M)t:{for(A=y,h=M,S=0,w=A;w;w=Vs(w))S++;for(w=0,C=h;C;C=Vs(C))w++;for(;0<S-w;)A=Vs(A),S--;for(;0<w-S;)h=Vs(h),w--;for(;S--;){if(A===h||h!==null&&A===h.alternate)break t;A=Vs(A),h=Vs(h)}A=null}else A=null;y!==null&&nm(g,v,y,A,!1),M!==null&&E!==null&&nm(g,E,M,A,!0)}}e:{if(v=d?co(d):window,y=v.nodeName&&v.nodeName.toLowerCase(),y==="select"||y==="input"&&v.type==="file")var k=My;else if($p(v))if(Rv)k=Ay;else{k=Ty;var I=wy}else(y=v.nodeName)&&y.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(k=by);if(k&&(k=k(t,d))){Cv(g,k,n,m);break e}I&&I(t,v,d),t==="focusout"&&(I=v._wrapperState)&&I.controlled&&v.type==="number"&&kf(v,"number",v.value)}switch(I=d?co(d):window,t){case"focusin":($p(I)||I.contentEditable==="true")&&(ao=I,Yf=d,Sa=null);break;case"focusout":Sa=Yf=ao=null;break;case"mousedown":Kf=!0;break;case"contextmenu":case"mouseup":case"dragend":Kf=!1,Jp(g,n,m);break;case"selectionchange":if(Py)break;case"keydown":case"keyup":Jp(g,n,m)}var f;if(Ph)e:{switch(t){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else oo?bv(t,n)&&(B="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(B="onCompositionStart");B&&(Tv&&n.locale!=="ko"&&(oo||B!=="onCompositionStart"?B==="onCompositionEnd"&&oo&&(f=wv()):(Hr=m,Ah="value"in Hr?Hr.value:Hr.textContent,oo=!0)),I=Tc(d,B),0<I.length&&(B=new Gp(B,t,null,n,m),g.push({event:B,listeners:I}),f?B.data=f:(f=Av(n),f!==null&&(B.data=f)))),(f=_y?xy(t,n):yy(t,n))&&(d=Tc(d,"onBeforeInput"),0<d.length&&(m=new Gp("onBeforeInput","beforeinput",null,n,m),g.push({event:m,listeners:d}),m.data=f))}Bv(g,e)})}function Ua(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Tc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ca(t,n),s!=null&&i.unshift(Ua(t,s,r)),s=Ca(t,e),s!=null&&i.push(Ua(t,s,r))),t=t.return}return i}function Vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function nm(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===i)break;l.tag===5&&d!==null&&(l=d,r?(u=Ca(n,s),u!=null&&a.unshift(Ua(n,u,l))):r||(u=Ca(n,s),u!=null&&a.push(Ua(n,u,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Iy=/\r\n?/g,Uy=/\u0000|\uFFFD/g;function im(t){return(typeof t=="string"?t:""+t).replace(Iy,`
`).replace(Uy,"")}function El(t,e,n){if(e=im(e),im(t)!==e&&n)throw Error(Me(425))}function bc(){}var Zf=null,Qf=null;function Jf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ed=typeof setTimeout=="function"?setTimeout:void 0,Fy=typeof clearTimeout=="function"?clearTimeout:void 0,rm=typeof Promise=="function"?Promise:void 0,ky=typeof queueMicrotask=="function"?queueMicrotask:typeof rm<"u"?function(t){return rm.resolve(null).then(t).catch(Oy)}:ed;function Oy(t){setTimeout(function(){throw t})}function ju(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Na(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Na(e)}function Xr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function sm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var zo=Math.random().toString(36).slice(2),ji="__reactFiber$"+zo,Fa="__reactProps$"+zo,mr="__reactContainer$"+zo,td="__reactEvents$"+zo,By="__reactListeners$"+zo,zy="__reactHandles$"+zo;function Ss(t){var e=t[ji];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mr]||n[ji]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=sm(t);t!==null;){if(n=t[ji])return n;t=sm(t)}return e}t=n,n=t.parentNode}return null}function Ka(t){return t=t[ji]||t[mr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function co(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Me(33))}function Kc(t){return t[Fa]||null}var nd=[],uo=-1;function is(t){return{current:t}}function $t(t){0>uo||(t.current=nd[uo],nd[uo]=null,uo--)}function Xt(t,e){uo++,nd[uo]=t.current,t.current=e}var es={},Dn=is(es),Xn=is(!1),Rs=es;function Ao(t,e){var n=t.type.contextTypes;if(!n)return es;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function qn(t){return t=t.childContextTypes,t!=null}function Ac(){$t(Xn),$t(Dn)}function om(t,e,n){if(Dn.current!==es)throw Error(Me(168));Xt(Dn,e),Xt(Xn,n)}function Hv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Me(108,w0(t)||"Unknown",r));return en({},n,i)}function Cc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||es,Rs=Dn.current,Xt(Dn,t),Xt(Xn,Xn.current),!0}function am(t,e,n){var i=t.stateNode;if(!i)throw Error(Me(169));n?(t=Hv(t,e,Rs),i.__reactInternalMemoizedMergedChildContext=t,$t(Xn),$t(Dn),Xt(Dn,t)):$t(Xn),Xt(Xn,n)}var sr=null,Zc=!1,Vu=!1;function jv(t){sr===null?sr=[t]:sr.push(t)}function Hy(t){Zc=!0,jv(t)}function rs(){if(!Vu&&sr!==null){Vu=!0;var t=0,e=zt;try{var n=sr;for(zt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}sr=null,Zc=!1}catch(r){throw sr!==null&&(sr=sr.slice(t+1)),hv(Mh,rs),r}finally{zt=e,Vu=!1}}return null}var fo=[],ho=0,Rc=null,Pc=0,di=[],hi=0,Ps=null,ar=1,lr="";function ms(t,e){fo[ho++]=Pc,fo[ho++]=Rc,Rc=t,Pc=e}function Vv(t,e,n){di[hi++]=ar,di[hi++]=lr,di[hi++]=Ps,Ps=t;var i=ar;t=lr;var r=32-Pi(i)-1;i&=~(1<<r),n+=1;var s=32-Pi(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ar=1<<32-Pi(e)+r|n<<r|i,lr=s+t}else ar=1<<s|n<<r|i,lr=t}function Dh(t){t.return!==null&&(ms(t,1),Vv(t,1,0))}function Lh(t){for(;t===Rc;)Rc=fo[--ho],fo[ho]=null,Pc=fo[--ho],fo[ho]=null;for(;t===Ps;)Ps=di[--hi],di[hi]=null,lr=di[--hi],di[hi]=null,ar=di[--hi],di[hi]=null}var ni=null,ti=null,Kt=!1,Ai=null;function Gv(t,e){var n=mi(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function lm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ni=t,ti=Xr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ni=t,ti=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ps!==null?{id:ar,overflow:lr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=mi(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ni=t,ti=null,!0):!1;default:return!1}}function id(t){return(t.mode&1)!==0&&(t.flags&128)===0}function rd(t){if(Kt){var e=ti;if(e){var n=e;if(!lm(t,e)){if(id(t))throw Error(Me(418));e=Xr(n.nextSibling);var i=ni;e&&lm(t,e)?Gv(i,n):(t.flags=t.flags&-4097|2,Kt=!1,ni=t)}}else{if(id(t))throw Error(Me(418));t.flags=t.flags&-4097|2,Kt=!1,ni=t}}}function cm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ni=t}function Ml(t){if(t!==ni)return!1;if(!Kt)return cm(t),Kt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Jf(t.type,t.memoizedProps)),e&&(e=ti)){if(id(t))throw Wv(),Error(Me(418));for(;e;)Gv(t,e),e=Xr(e.nextSibling)}if(cm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Me(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ti=Xr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ti=null}}else ti=ni?Xr(t.stateNode.nextSibling):null;return!0}function Wv(){for(var t=ti;t;)t=Xr(t.nextSibling)}function Co(){ti=ni=null,Kt=!1}function Ih(t){Ai===null?Ai=[t]:Ai.push(t)}var jy=Sr.ReactCurrentBatchConfig;function ra(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Me(309));var i=n.stateNode}if(!i)throw Error(Me(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var l=r.refs;a===null?delete l[s]:l[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(Me(284));if(!n._owner)throw Error(Me(290,t))}return t}function wl(t,e){throw t=Object.prototype.toString.call(e),Error(Me(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function um(t){var e=t._init;return e(t._payload)}function Xv(t){function e(h,S){if(t){var w=h.deletions;w===null?(h.deletions=[S],h.flags|=16):w.push(S)}}function n(h,S){if(!t)return null;for(;S!==null;)e(h,S),S=S.sibling;return null}function i(h,S){for(h=new Map;S!==null;)S.key!==null?h.set(S.key,S):h.set(S.index,S),S=S.sibling;return h}function r(h,S){return h=Kr(h,S),h.index=0,h.sibling=null,h}function s(h,S,w){return h.index=w,t?(w=h.alternate,w!==null?(w=w.index,w<S?(h.flags|=2,S):w):(h.flags|=2,S)):(h.flags|=1048576,S)}function a(h){return t&&h.alternate===null&&(h.flags|=2),h}function l(h,S,w,C){return S===null||S.tag!==6?(S=Ku(w,h.mode,C),S.return=h,S):(S=r(S,w),S.return=h,S)}function u(h,S,w,C){var k=w.type;return k===so?m(h,S,w.props.children,C,w.key):S!==null&&(S.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Fr&&um(k)===S.type)?(C=r(S,w.props),C.ref=ra(h,S,w),C.return=h,C):(C=uc(w.type,w.key,w.props,null,h.mode,C),C.ref=ra(h,S,w),C.return=h,C)}function d(h,S,w,C){return S===null||S.tag!==4||S.stateNode.containerInfo!==w.containerInfo||S.stateNode.implementation!==w.implementation?(S=Zu(w,h.mode,C),S.return=h,S):(S=r(S,w.children||[]),S.return=h,S)}function m(h,S,w,C,k){return S===null||S.tag!==7?(S=As(w,h.mode,C,k),S.return=h,S):(S=r(S,w),S.return=h,S)}function g(h,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return S=Ku(""+S,h.mode,w),S.return=h,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case hl:return w=uc(S.type,S.key,S.props,null,h.mode,w),w.ref=ra(h,null,S),w.return=h,w;case ro:return S=Zu(S,h.mode,w),S.return=h,S;case Fr:var C=S._init;return g(h,C(S._payload),w)}if(ha(S)||Jo(S))return S=As(S,h.mode,w,null),S.return=h,S;wl(h,S)}return null}function v(h,S,w,C){var k=S!==null?S.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return k!==null?null:l(h,S,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case hl:return w.key===k?u(h,S,w,C):null;case ro:return w.key===k?d(h,S,w,C):null;case Fr:return k=w._init,v(h,S,k(w._payload),C)}if(ha(w)||Jo(w))return k!==null?null:m(h,S,w,C,null);wl(h,w)}return null}function y(h,S,w,C,k){if(typeof C=="string"&&C!==""||typeof C=="number")return h=h.get(w)||null,l(S,h,""+C,k);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case hl:return h=h.get(C.key===null?w:C.key)||null,u(S,h,C,k);case ro:return h=h.get(C.key===null?w:C.key)||null,d(S,h,C,k);case Fr:var I=C._init;return y(h,S,w,I(C._payload),k)}if(ha(C)||Jo(C))return h=h.get(w)||null,m(S,h,C,k,null);wl(S,C)}return null}function M(h,S,w,C){for(var k=null,I=null,f=S,B=S=0,D=null;f!==null&&B<w.length;B++){f.index>B?(D=f,f=null):D=f.sibling;var N=v(h,f,w[B],C);if(N===null){f===null&&(f=D);break}t&&f&&N.alternate===null&&e(h,f),S=s(N,S,B),I===null?k=N:I.sibling=N,I=N,f=D}if(B===w.length)return n(h,f),Kt&&ms(h,B),k;if(f===null){for(;B<w.length;B++)f=g(h,w[B],C),f!==null&&(S=s(f,S,B),I===null?k=f:I.sibling=f,I=f);return Kt&&ms(h,B),k}for(f=i(h,f);B<w.length;B++)D=y(f,h,B,w[B],C),D!==null&&(t&&D.alternate!==null&&f.delete(D.key===null?B:D.key),S=s(D,S,B),I===null?k=D:I.sibling=D,I=D);return t&&f.forEach(function(O){return e(h,O)}),Kt&&ms(h,B),k}function A(h,S,w,C){var k=Jo(w);if(typeof k!="function")throw Error(Me(150));if(w=k.call(w),w==null)throw Error(Me(151));for(var I=k=null,f=S,B=S=0,D=null,N=w.next();f!==null&&!N.done;B++,N=w.next()){f.index>B?(D=f,f=null):D=f.sibling;var O=v(h,f,N.value,C);if(O===null){f===null&&(f=D);break}t&&f&&O.alternate===null&&e(h,f),S=s(O,S,B),I===null?k=O:I.sibling=O,I=O,f=D}if(N.done)return n(h,f),Kt&&ms(h,B),k;if(f===null){for(;!N.done;B++,N=w.next())N=g(h,N.value,C),N!==null&&(S=s(N,S,B),I===null?k=N:I.sibling=N,I=N);return Kt&&ms(h,B),k}for(f=i(h,f);!N.done;B++,N=w.next())N=y(f,h,B,N.value,C),N!==null&&(t&&N.alternate!==null&&f.delete(N.key===null?B:N.key),S=s(N,S,B),I===null?k=N:I.sibling=N,I=N);return t&&f.forEach(function(q){return e(h,q)}),Kt&&ms(h,B),k}function E(h,S,w,C){if(typeof w=="object"&&w!==null&&w.type===so&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case hl:e:{for(var k=w.key,I=S;I!==null;){if(I.key===k){if(k=w.type,k===so){if(I.tag===7){n(h,I.sibling),S=r(I,w.props.children),S.return=h,h=S;break e}}else if(I.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Fr&&um(k)===I.type){n(h,I.sibling),S=r(I,w.props),S.ref=ra(h,I,w),S.return=h,h=S;break e}n(h,I);break}else e(h,I);I=I.sibling}w.type===so?(S=As(w.props.children,h.mode,C,w.key),S.return=h,h=S):(C=uc(w.type,w.key,w.props,null,h.mode,C),C.ref=ra(h,S,w),C.return=h,h=C)}return a(h);case ro:e:{for(I=w.key;S!==null;){if(S.key===I)if(S.tag===4&&S.stateNode.containerInfo===w.containerInfo&&S.stateNode.implementation===w.implementation){n(h,S.sibling),S=r(S,w.children||[]),S.return=h,h=S;break e}else{n(h,S);break}else e(h,S);S=S.sibling}S=Zu(w,h.mode,C),S.return=h,h=S}return a(h);case Fr:return I=w._init,E(h,S,I(w._payload),C)}if(ha(w))return M(h,S,w,C);if(Jo(w))return A(h,S,w,C);wl(h,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,S!==null&&S.tag===6?(n(h,S.sibling),S=r(S,w),S.return=h,h=S):(n(h,S),S=Ku(w,h.mode,C),S.return=h,h=S),a(h)):n(h,S)}return E}var Ro=Xv(!0),qv=Xv(!1),Nc=is(null),Dc=null,po=null,Uh=null;function Fh(){Uh=po=Dc=null}function kh(t){var e=Nc.current;$t(Nc),t._currentValue=e}function sd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Eo(t,e){Dc=t,Uh=po=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Wn=!0),t.firstContext=null)}function vi(t){var e=t._currentValue;if(Uh!==t)if(t={context:t,memoizedValue:e,next:null},po===null){if(Dc===null)throw Error(Me(308));po=t,Dc.dependencies={lanes:0,firstContext:t}}else po=po.next=t;return e}var Es=null;function Oh(t){Es===null?Es=[t]:Es.push(t)}function $v(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Oh(e)):(n.next=r.next,r.next=n),e.interleaved=n,gr(t,i)}function gr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var kr=!1;function Bh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function dr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Dt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,gr(t,n)}return r=i.interleaved,r===null?(e.next=e,Oh(i)):(e.next=r.next,r.next=e),i.interleaved=e,gr(t,n)}function rc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,wh(t,n)}}function fm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Lc(t,e,n,i){var r=t.updateQueue;kr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var u=l,d=u.next;u.next=null,a===null?s=d:a.next=d,a=u;var m=t.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==a&&(l===null?m.firstBaseUpdate=d:l.next=d,m.lastBaseUpdate=u))}if(s!==null){var g=r.baseState;a=0,m=d=u=null,l=s;do{var v=l.lane,y=l.eventTime;if((i&v)===v){m!==null&&(m=m.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var M=t,A=l;switch(v=e,y=n,A.tag){case 1:if(M=A.payload,typeof M=="function"){g=M.call(y,g,v);break e}g=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=A.payload,v=typeof M=="function"?M.call(y,g,v):M,v==null)break e;g=en({},g,v);break e;case 2:kr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,v=r.effects,v===null?r.effects=[l]:v.push(l))}else y={eventTime:y,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(d=m=y,u=g):m=m.next=y,a|=v;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;v=l,l=v.next,v.next=null,r.lastBaseUpdate=v,r.shared.pending=null}}while(!0);if(m===null&&(u=g),r.baseState=u,r.firstBaseUpdate=d,r.lastBaseUpdate=m,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ds|=a,t.lanes=a,t.memoizedState=g}}function dm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Me(191,r));r.call(i)}}}var Za={},Wi=is(Za),ka=is(Za),Oa=is(Za);function Ms(t){if(t===Za)throw Error(Me(174));return t}function zh(t,e){switch(Xt(Oa,e),Xt(ka,t),Xt(Wi,Za),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bf(e,t)}$t(Wi),Xt(Wi,e)}function Po(){$t(Wi),$t(ka),$t(Oa)}function Kv(t){Ms(Oa.current);var e=Ms(Wi.current),n=Bf(e,t.type);e!==n&&(Xt(ka,t),Xt(Wi,n))}function Hh(t){ka.current===t&&($t(Wi),$t(ka))}var Qt=is(0);function Ic(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Gu=[];function jh(){for(var t=0;t<Gu.length;t++)Gu[t]._workInProgressVersionPrimary=null;Gu.length=0}var sc=Sr.ReactCurrentDispatcher,Wu=Sr.ReactCurrentBatchConfig,Ns=0,Jt=null,hn=null,yn=null,Uc=!1,Ea=!1,Ba=0,Vy=0;function An(){throw Error(Me(321))}function Vh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Li(t[n],e[n]))return!1;return!0}function Gh(t,e,n,i,r,s){if(Ns=s,Jt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,sc.current=t===null||t.memoizedState===null?qy:$y,t=n(i,r),Ea){s=0;do{if(Ea=!1,Ba=0,25<=s)throw Error(Me(301));s+=1,yn=hn=null,e.updateQueue=null,sc.current=Yy,t=n(i,r)}while(Ea)}if(sc.current=Fc,e=hn!==null&&hn.next!==null,Ns=0,yn=hn=Jt=null,Uc=!1,e)throw Error(Me(300));return t}function Wh(){var t=Ba!==0;return Ba=0,t}function zi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?Jt.memoizedState=yn=t:yn=yn.next=t,yn}function _i(){if(hn===null){var t=Jt.alternate;t=t!==null?t.memoizedState:null}else t=hn.next;var e=yn===null?Jt.memoizedState:yn.next;if(e!==null)yn=e,hn=t;else{if(t===null)throw Error(Me(310));hn=t,t={memoizedState:hn.memoizedState,baseState:hn.baseState,baseQueue:hn.baseQueue,queue:hn.queue,next:null},yn===null?Jt.memoizedState=yn=t:yn=yn.next=t}return yn}function za(t,e){return typeof e=="function"?e(t):e}function Xu(t){var e=_i(),n=e.queue;if(n===null)throw Error(Me(311));n.lastRenderedReducer=t;var i=hn,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var l=a=null,u=null,d=s;do{var m=d.lane;if((Ns&m)===m)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:t(i,d.action);else{var g={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=g,a=i):u=u.next=g,Jt.lanes|=m,Ds|=m}d=d.next}while(d!==null&&d!==s);u===null?a=i:u.next=l,Li(i,e.memoizedState)||(Wn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=u,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Jt.lanes|=s,Ds|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qu(t){var e=_i(),n=e.queue;if(n===null)throw Error(Me(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Li(s,e.memoizedState)||(Wn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Zv(){}function Qv(t,e){var n=Jt,i=_i(),r=e(),s=!Li(i.memoizedState,r);if(s&&(i.memoizedState=r,Wn=!0),i=i.queue,Xh(t_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||yn!==null&&yn.memoizedState.tag&1){if(n.flags|=2048,Ha(9,e_.bind(null,n,i,r,e),void 0,null),Sn===null)throw Error(Me(349));Ns&30||Jv(n,e,r)}return r}function Jv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Jt.updateQueue,e===null?(e={lastEffect:null,stores:null},Jt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function e_(t,e,n,i){e.value=n,e.getSnapshot=i,n_(e)&&i_(t)}function t_(t,e,n){return n(function(){n_(e)&&i_(t)})}function n_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Li(t,n)}catch{return!0}}function i_(t){var e=gr(t,1);e!==null&&Ni(e,t,1,-1)}function hm(t){var e=zi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:t},e.queue=t,t=t.dispatch=Xy.bind(null,Jt,t),[e.memoizedState,t]}function Ha(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Jt.updateQueue,e===null?(e={lastEffect:null,stores:null},Jt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function r_(){return _i().memoizedState}function oc(t,e,n,i){var r=zi();Jt.flags|=t,r.memoizedState=Ha(1|e,n,void 0,i===void 0?null:i)}function Qc(t,e,n,i){var r=_i();i=i===void 0?null:i;var s=void 0;if(hn!==null){var a=hn.memoizedState;if(s=a.destroy,i!==null&&Vh(i,a.deps)){r.memoizedState=Ha(e,n,s,i);return}}Jt.flags|=t,r.memoizedState=Ha(1|e,n,s,i)}function pm(t,e){return oc(8390656,8,t,e)}function Xh(t,e){return Qc(2048,8,t,e)}function s_(t,e){return Qc(4,2,t,e)}function o_(t,e){return Qc(4,4,t,e)}function a_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function l_(t,e,n){return n=n!=null?n.concat([t]):null,Qc(4,4,a_.bind(null,e,t),n)}function qh(){}function c_(t,e){var n=_i();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Vh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function u_(t,e){var n=_i();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Vh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function f_(t,e,n){return Ns&21?(Li(n,e)||(n=gv(),Jt.lanes|=n,Ds|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Wn=!0),t.memoizedState=n)}function Gy(t,e){var n=zt;zt=n!==0&&4>n?n:4,t(!0);var i=Wu.transition;Wu.transition={};try{t(!1),e()}finally{zt=n,Wu.transition=i}}function d_(){return _i().memoizedState}function Wy(t,e,n){var i=Yr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},h_(t))p_(e,n);else if(n=$v(t,e,n,i),n!==null){var r=kn();Ni(n,t,i,r),m_(n,e,i)}}function Xy(t,e,n){var i=Yr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(h_(t))p_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(r.hasEagerState=!0,r.eagerState=l,Li(l,a)){var u=e.interleaved;u===null?(r.next=r,Oh(e)):(r.next=u.next,u.next=r),e.interleaved=r;return}}catch{}finally{}n=$v(t,e,r,i),n!==null&&(r=kn(),Ni(n,t,i,r),m_(n,e,i))}}function h_(t){var e=t.alternate;return t===Jt||e!==null&&e===Jt}function p_(t,e){Ea=Uc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function m_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,wh(t,n)}}var Fc={readContext:vi,useCallback:An,useContext:An,useEffect:An,useImperativeHandle:An,useInsertionEffect:An,useLayoutEffect:An,useMemo:An,useReducer:An,useRef:An,useState:An,useDebugValue:An,useDeferredValue:An,useTransition:An,useMutableSource:An,useSyncExternalStore:An,useId:An,unstable_isNewReconciler:!1},qy={readContext:vi,useCallback:function(t,e){return zi().memoizedState=[t,e===void 0?null:e],t},useContext:vi,useEffect:pm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,oc(4194308,4,a_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return oc(4194308,4,t,e)},useInsertionEffect:function(t,e){return oc(4,2,t,e)},useMemo:function(t,e){var n=zi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=zi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Wy.bind(null,Jt,t),[i.memoizedState,t]},useRef:function(t){var e=zi();return t={current:t},e.memoizedState=t},useState:hm,useDebugValue:qh,useDeferredValue:function(t){return zi().memoizedState=t},useTransition:function(){var t=hm(!1),e=t[0];return t=Gy.bind(null,t[1]),zi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Jt,r=zi();if(Kt){if(n===void 0)throw Error(Me(407));n=n()}else{if(n=e(),Sn===null)throw Error(Me(349));Ns&30||Jv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,pm(t_.bind(null,i,s,t),[t]),i.flags|=2048,Ha(9,e_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=zi(),e=Sn.identifierPrefix;if(Kt){var n=lr,i=ar;n=(i&~(1<<32-Pi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ba++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Vy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},$y={readContext:vi,useCallback:c_,useContext:vi,useEffect:Xh,useImperativeHandle:l_,useInsertionEffect:s_,useLayoutEffect:o_,useMemo:u_,useReducer:Xu,useRef:r_,useState:function(){return Xu(za)},useDebugValue:qh,useDeferredValue:function(t){var e=_i();return f_(e,hn.memoizedState,t)},useTransition:function(){var t=Xu(za)[0],e=_i().memoizedState;return[t,e]},useMutableSource:Zv,useSyncExternalStore:Qv,useId:d_,unstable_isNewReconciler:!1},Yy={readContext:vi,useCallback:c_,useContext:vi,useEffect:Xh,useImperativeHandle:l_,useInsertionEffect:s_,useLayoutEffect:o_,useMemo:u_,useReducer:qu,useRef:r_,useState:function(){return qu(za)},useDebugValue:qh,useDeferredValue:function(t){var e=_i();return hn===null?e.memoizedState=t:f_(e,hn.memoizedState,t)},useTransition:function(){var t=qu(za)[0],e=_i().memoizedState;return[t,e]},useMutableSource:Zv,useSyncExternalStore:Qv,useId:d_,unstable_isNewReconciler:!1};function Ti(t,e){if(t&&t.defaultProps){e=en({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function od(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:en({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jc={isMounted:function(t){return(t=t._reactInternals)?ks(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=kn(),r=Yr(t),s=dr(i,r);s.payload=e,n!=null&&(s.callback=n),e=qr(t,s,r),e!==null&&(Ni(e,t,r,i),rc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=kn(),r=Yr(t),s=dr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=qr(t,s,r),e!==null&&(Ni(e,t,r,i),rc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=kn(),i=Yr(t),r=dr(n,i);r.tag=2,e!=null&&(r.callback=e),e=qr(t,r,i),e!==null&&(Ni(e,t,i,n),rc(e,t,i))}};function mm(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!La(n,i)||!La(r,s):!0}function g_(t,e,n){var i=!1,r=es,s=e.contextType;return typeof s=="object"&&s!==null?s=vi(s):(r=qn(e)?Rs:Dn.current,i=e.contextTypes,s=(i=i!=null)?Ao(t,r):es),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function gm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Jc.enqueueReplaceState(e,e.state,null)}function ad(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Bh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=vi(s):(s=qn(e)?Rs:Dn.current,r.context=Ao(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(od(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Jc.enqueueReplaceState(r,r.state,null),Lc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function No(t,e){try{var n="",i=e;do n+=M0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function $u(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ld(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ky=typeof WeakMap=="function"?WeakMap:Map;function v_(t,e,n){n=dr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Oc||(Oc=!0,_d=i),ld(t,e)},n}function __(t,e,n){n=dr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ld(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ld(t,e),typeof i!="function"&&($r===null?$r=new Set([this]):$r.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function vm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Ky;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=uS.bind(null,t,e,n),e.then(t,t))}function _m(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=dr(-1,1),e.tag=2,qr(n,e,1))),n.lanes|=1),t)}var Zy=Sr.ReactCurrentOwner,Wn=!1;function Fn(t,e,n,i){e.child=t===null?qv(e,null,n,i):Ro(e,t.child,n,i)}function ym(t,e,n,i,r){n=n.render;var s=e.ref;return Eo(e,r),i=Gh(t,e,n,i,s,r),n=Wh(),t!==null&&!Wn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vr(t,e,r)):(Kt&&n&&Dh(e),e.flags|=1,Fn(t,e,i,r),e.child)}function Sm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!tp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,x_(t,e,s,i,r)):(t=uc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:La,n(a,i)&&t.ref===e.ref)return vr(t,e,r)}return e.flags|=1,t=Kr(s,i),t.ref=e.ref,t.return=e,e.child=t}function x_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(La(s,i)&&t.ref===e.ref)if(Wn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Wn=!0);else return e.lanes=t.lanes,vr(t,e,r)}return cd(t,e,n,i,r)}function y_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xt(go,ei),ei|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Xt(go,ei),ei|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Xt(go,ei),ei|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Xt(go,ei),ei|=i;return Fn(t,e,r,n),e.child}function S_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function cd(t,e,n,i,r){var s=qn(n)?Rs:Dn.current;return s=Ao(e,s),Eo(e,r),n=Gh(t,e,n,i,s,r),i=Wh(),t!==null&&!Wn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vr(t,e,r)):(Kt&&i&&Dh(e),e.flags|=1,Fn(t,e,n,r),e.child)}function Em(t,e,n,i,r){if(qn(n)){var s=!0;Cc(e)}else s=!1;if(Eo(e,r),e.stateNode===null)ac(t,e),g_(e,n,i),ad(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=vi(d):(d=qn(n)?Rs:Dn.current,d=Ao(e,d));var m=n.getDerivedStateFromProps,g=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==i||u!==d)&&gm(e,a,i,d),kr=!1;var v=e.memoizedState;a.state=v,Lc(e,i,a,r),u=e.memoizedState,l!==i||v!==u||Xn.current||kr?(typeof m=="function"&&(od(e,n,m,i),u=e.memoizedState),(l=kr||mm(e,n,l,i,v,u,d))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=u),a.props=i,a.state=u,a.context=d,i=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Yv(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:Ti(e.type,l),a.props=d,g=e.pendingProps,v=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=vi(u):(u=qn(n)?Rs:Dn.current,u=Ao(e,u));var y=n.getDerivedStateFromProps;(m=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==g||v!==u)&&gm(e,a,i,u),kr=!1,v=e.memoizedState,a.state=v,Lc(e,i,a,r);var M=e.memoizedState;l!==g||v!==M||Xn.current||kr?(typeof y=="function"&&(od(e,n,y,i),M=e.memoizedState),(d=kr||mm(e,n,d,i,v,M,u)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,M,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,M,u)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=M),a.props=i,a.state=M,a.context=u,i=d):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),i=!1)}return ud(t,e,n,i,s,r)}function ud(t,e,n,i,r,s){S_(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&am(e,n,!1),vr(t,e,s);i=e.stateNode,Zy.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ro(e,t.child,null,s),e.child=Ro(e,null,l,s)):Fn(t,e,l,s),e.memoizedState=i.state,r&&am(e,n,!0),e.child}function E_(t){var e=t.stateNode;e.pendingContext?om(t,e.pendingContext,e.pendingContext!==e.context):e.context&&om(t,e.context,!1),zh(t,e.containerInfo)}function Mm(t,e,n,i,r){return Co(),Ih(r),e.flags|=256,Fn(t,e,n,i),e.child}var fd={dehydrated:null,treeContext:null,retryLane:0};function dd(t){return{baseLanes:t,cachePool:null,transitions:null}}function M_(t,e,n){var i=e.pendingProps,r=Qt.current,s=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(r&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Xt(Qt,r&1),t===null)return rd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=nu(a,i,0,null),t=As(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=dd(n),e.memoizedState=fd,t):$h(e,a));if(r=t.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return Qy(t,e,a,i,l,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,l=r.sibling;var u={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=u,e.deletions=null):(i=Kr(r,u),i.subtreeFlags=r.subtreeFlags&14680064),l!==null?s=Kr(l,s):(s=As(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?dd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=fd,i}return s=t.child,t=s.sibling,i=Kr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function $h(t,e){return e=nu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Tl(t,e,n,i){return i!==null&&Ih(i),Ro(e,t.child,null,n),t=$h(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Qy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=$u(Error(Me(422))),Tl(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=nu({mode:"visible",children:i.children},r,0,null),s=As(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ro(e,t.child,null,a),e.child.memoizedState=dd(a),e.memoizedState=fd,s);if(!(e.mode&1))return Tl(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,s=Error(Me(419)),i=$u(s,i,void 0),Tl(t,e,a,i)}if(l=(a&t.childLanes)!==0,Wn||l){if(i=Sn,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,gr(t,r),Ni(i,t,r,-1))}return ep(),i=$u(Error(Me(421))),Tl(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=fS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,ti=Xr(r.nextSibling),ni=e,Kt=!0,Ai=null,t!==null&&(di[hi++]=ar,di[hi++]=lr,di[hi++]=Ps,ar=t.id,lr=t.overflow,Ps=e),e=$h(e,i.children),e.flags|=4096,e)}function wm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),sd(t.return,e,n)}function Yu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function w_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Fn(t,e,i.children,n),i=Qt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wm(t,n,e);else if(t.tag===19)wm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Xt(Qt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ic(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Yu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ic(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Yu(e,!0,n,null,s);break;case"together":Yu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ac(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ds|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Me(153));if(e.child!==null){for(t=e.child,n=Kr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Kr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Jy(t,e,n){switch(e.tag){case 3:E_(e),Co();break;case 5:Kv(e);break;case 1:qn(e.type)&&Cc(e);break;case 4:zh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Xt(Nc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Xt(Qt,Qt.current&1),e.flags|=128,null):n&e.child.childLanes?M_(t,e,n):(Xt(Qt,Qt.current&1),t=vr(t,e,n),t!==null?t.sibling:null);Xt(Qt,Qt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return w_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Xt(Qt,Qt.current),i)break;return null;case 22:case 23:return e.lanes=0,y_(t,e,n)}return vr(t,e,n)}var T_,hd,b_,A_;T_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hd=function(){};b_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ms(Wi.current);var s=null;switch(n){case"input":r=Uf(t,r),i=Uf(t,i),s=[];break;case"select":r=en({},r,{value:void 0}),i=en({},i,{value:void 0}),s=[];break;case"textarea":r=Of(t,r),i=Of(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=bc)}zf(n,i);var a;n=null;for(d in r)if(!i.hasOwnProperty(d)&&r.hasOwnProperty(d)&&r[d]!=null)if(d==="style"){var l=r[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(ba.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in i){var u=i[d];if(l=r!=null?r[d]:void 0,i.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(s||(s=[]),s.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(ba.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&qt("scroll",t),s||l===u||(s=[])):(s=s||[]).push(d,u))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};A_=function(t,e,n,i){n!==i&&(e.flags|=4)};function sa(t,e){if(!Kt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Cn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function eS(t,e,n){var i=e.pendingProps;switch(Lh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Cn(e),null;case 1:return qn(e.type)&&Ac(),Cn(e),null;case 3:return i=e.stateNode,Po(),$t(Xn),$t(Dn),jh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ml(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ai!==null&&(Sd(Ai),Ai=null))),hd(t,e),Cn(e),null;case 5:Hh(e);var r=Ms(Oa.current);if(n=e.type,t!==null&&e.stateNode!=null)b_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Me(166));return Cn(e),null}if(t=Ms(Wi.current),Ml(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ji]=e,i[Fa]=s,t=(e.mode&1)!==0,n){case"dialog":qt("cancel",i),qt("close",i);break;case"iframe":case"object":case"embed":qt("load",i);break;case"video":case"audio":for(r=0;r<ma.length;r++)qt(ma[r],i);break;case"source":qt("error",i);break;case"img":case"image":case"link":qt("error",i),qt("load",i);break;case"details":qt("toggle",i);break;case"input":Lp(i,s),qt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},qt("invalid",i);break;case"textarea":Up(i,s),qt("invalid",i)}zf(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?i.textContent!==l&&(s.suppressHydrationWarning!==!0&&El(i.textContent,l,t),r=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&El(i.textContent,l,t),r=["children",""+l]):ba.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&qt("scroll",i)}switch(n){case"input":pl(i),Ip(i,s,!0);break;case"textarea":pl(i),Fp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=bc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=tv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ji]=e,t[Fa]=i,T_(t,e,!1,!1),e.stateNode=t;e:{switch(a=Hf(n,i),n){case"dialog":qt("cancel",t),qt("close",t),r=i;break;case"iframe":case"object":case"embed":qt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ma.length;r++)qt(ma[r],t);r=i;break;case"source":qt("error",t),r=i;break;case"img":case"image":case"link":qt("error",t),qt("load",t),r=i;break;case"details":qt("toggle",t),r=i;break;case"input":Lp(t,i),r=Uf(t,i),qt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=en({},i,{value:void 0}),qt("invalid",t);break;case"textarea":Up(t,i),r=Of(t,i),qt("invalid",t);break;default:r=i}zf(n,r),l=r;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?rv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&nv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Aa(t,u):typeof u=="number"&&Aa(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ba.hasOwnProperty(s)?u!=null&&s==="onScroll"&&qt("scroll",t):u!=null&&_h(t,s,u,a))}switch(n){case"input":pl(t),Ip(t,i,!1);break;case"textarea":pl(t),Fp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Jr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?_o(t,!!i.multiple,s,!1):i.defaultValue!=null&&_o(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=bc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Cn(e),null;case 6:if(t&&e.stateNode!=null)A_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Me(166));if(n=Ms(Oa.current),Ms(Wi.current),Ml(e)){if(i=e.stateNode,n=e.memoizedProps,i[ji]=e,(s=i.nodeValue!==n)&&(t=ni,t!==null))switch(t.tag){case 3:El(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&El(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ji]=e,e.stateNode=i}return Cn(e),null;case 13:if($t(Qt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Kt&&ti!==null&&e.mode&1&&!(e.flags&128))Wv(),Co(),e.flags|=98560,s=!1;else if(s=Ml(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Me(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Me(317));s[ji]=e}else Co(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Cn(e),s=!1}else Ai!==null&&(Sd(Ai),Ai=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Qt.current&1?pn===0&&(pn=3):ep())),e.updateQueue!==null&&(e.flags|=4),Cn(e),null);case 4:return Po(),hd(t,e),t===null&&Ia(e.stateNode.containerInfo),Cn(e),null;case 10:return kh(e.type._context),Cn(e),null;case 17:return qn(e.type)&&Ac(),Cn(e),null;case 19:if($t(Qt),s=e.memoizedState,s===null)return Cn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)sa(s,!1);else{if(pn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Ic(t),a!==null){for(e.flags|=128,sa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Xt(Qt,Qt.current&1|2),e.child}t=t.sibling}s.tail!==null&&rn()>Do&&(e.flags|=128,i=!0,sa(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ic(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),sa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Kt)return Cn(e),null}else 2*rn()-s.renderingStartTime>Do&&n!==1073741824&&(e.flags|=128,i=!0,sa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=rn(),e.sibling=null,n=Qt.current,Xt(Qt,i?n&1|2:n&1),e):(Cn(e),null);case 22:case 23:return Jh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ei&1073741824&&(Cn(e),e.subtreeFlags&6&&(e.flags|=8192)):Cn(e),null;case 24:return null;case 25:return null}throw Error(Me(156,e.tag))}function tS(t,e){switch(Lh(e),e.tag){case 1:return qn(e.type)&&Ac(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Po(),$t(Xn),$t(Dn),jh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Hh(e),null;case 13:if($t(Qt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Me(340));Co()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return $t(Qt),null;case 4:return Po(),null;case 10:return kh(e.type._context),null;case 22:case 23:return Jh(),null;case 24:return null;default:return null}}var bl=!1,Nn=!1,nS=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function mo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){nn(t,e,i)}else n.current=null}function pd(t,e,n){try{n()}catch(i){nn(t,e,i)}}var Tm=!1;function iS(t,e){if(Zf=Mc,t=Dv(),Nh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,d=0,m=0,g=t,v=null;t:for(;;){for(var y;g!==n||r!==0&&g.nodeType!==3||(l=a+r),g!==s||i!==0&&g.nodeType!==3||(u=a+i),g.nodeType===3&&(a+=g.nodeValue.length),(y=g.firstChild)!==null;)v=g,g=y;for(;;){if(g===t)break t;if(v===n&&++d===r&&(l=a),v===s&&++m===i&&(u=a),(y=g.nextSibling)!==null)break;g=v,v=g.parentNode}g=y}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qf={focusedElem:t,selectionRange:n},Mc=!1,Ve=e;Ve!==null;)if(e=Ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ve=t;else for(;Ve!==null;){e=Ve;try{var M=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var A=M.memoizedProps,E=M.memoizedState,h=e.stateNode,S=h.getSnapshotBeforeUpdate(e.elementType===e.type?A:Ti(e.type,A),E);h.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Me(163))}}catch(C){nn(e,e.return,C)}if(t=e.sibling,t!==null){t.return=e.return,Ve=t;break}Ve=e.return}return M=Tm,Tm=!1,M}function Ma(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&pd(e,n,s)}r=r.next}while(r!==i)}}function eu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function md(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function C_(t){var e=t.alternate;e!==null&&(t.alternate=null,C_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ji],delete e[Fa],delete e[td],delete e[By],delete e[zy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function R_(t){return t.tag===5||t.tag===3||t.tag===4}function bm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||R_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=bc));else if(i!==4&&(t=t.child,t!==null))for(gd(t,e,n),t=t.sibling;t!==null;)gd(t,e,n),t=t.sibling}function vd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(vd(t,e,n),t=t.sibling;t!==null;)vd(t,e,n),t=t.sibling}var Mn=null,bi=!1;function Rr(t,e,n){for(n=n.child;n!==null;)P_(t,e,n),n=n.sibling}function P_(t,e,n){if(Gi&&typeof Gi.onCommitFiberUnmount=="function")try{Gi.onCommitFiberUnmount(Xc,n)}catch{}switch(n.tag){case 5:Nn||mo(n,e);case 6:var i=Mn,r=bi;Mn=null,Rr(t,e,n),Mn=i,bi=r,Mn!==null&&(bi?(t=Mn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Mn.removeChild(n.stateNode));break;case 18:Mn!==null&&(bi?(t=Mn,n=n.stateNode,t.nodeType===8?ju(t.parentNode,n):t.nodeType===1&&ju(t,n),Na(t)):ju(Mn,n.stateNode));break;case 4:i=Mn,r=bi,Mn=n.stateNode.containerInfo,bi=!0,Rr(t,e,n),Mn=i,bi=r;break;case 0:case 11:case 14:case 15:if(!Nn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&pd(n,e,a),r=r.next}while(r!==i)}Rr(t,e,n);break;case 1:if(!Nn&&(mo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(l){nn(n,e,l)}Rr(t,e,n);break;case 21:Rr(t,e,n);break;case 22:n.mode&1?(Nn=(i=Nn)||n.memoizedState!==null,Rr(t,e,n),Nn=i):Rr(t,e,n);break;default:Rr(t,e,n)}}function Am(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new nS),e.forEach(function(i){var r=dS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Si(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:Mn=l.stateNode,bi=!1;break e;case 3:Mn=l.stateNode.containerInfo,bi=!0;break e;case 4:Mn=l.stateNode.containerInfo,bi=!0;break e}l=l.return}if(Mn===null)throw Error(Me(160));P_(s,a,r),Mn=null,bi=!1;var u=r.alternate;u!==null&&(u.return=null),r.return=null}catch(d){nn(r,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)N_(e,t),e=e.sibling}function N_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Si(e,t),Bi(t),i&4){try{Ma(3,t,t.return),eu(3,t)}catch(A){nn(t,t.return,A)}try{Ma(5,t,t.return)}catch(A){nn(t,t.return,A)}}break;case 1:Si(e,t),Bi(t),i&512&&n!==null&&mo(n,n.return);break;case 5:if(Si(e,t),Bi(t),i&512&&n!==null&&mo(n,n.return),t.flags&32){var r=t.stateNode;try{Aa(r,"")}catch(A){nn(t,t.return,A)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Jg(r,s),Hf(l,a);var d=Hf(l,s);for(a=0;a<u.length;a+=2){var m=u[a],g=u[a+1];m==="style"?rv(r,g):m==="dangerouslySetInnerHTML"?nv(r,g):m==="children"?Aa(r,g):_h(r,m,g,d)}switch(l){case"input":Ff(r,s);break;case"textarea":ev(r,s);break;case"select":var v=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?_o(r,!!s.multiple,y,!1):v!==!!s.multiple&&(s.defaultValue!=null?_o(r,!!s.multiple,s.defaultValue,!0):_o(r,!!s.multiple,s.multiple?[]:"",!1))}r[Fa]=s}catch(A){nn(t,t.return,A)}}break;case 6:if(Si(e,t),Bi(t),i&4){if(t.stateNode===null)throw Error(Me(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(A){nn(t,t.return,A)}}break;case 3:if(Si(e,t),Bi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Na(e.containerInfo)}catch(A){nn(t,t.return,A)}break;case 4:Si(e,t),Bi(t);break;case 13:Si(e,t),Bi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Zh=rn())),i&4&&Am(t);break;case 22:if(m=n!==null&&n.memoizedState!==null,t.mode&1?(Nn=(d=Nn)||m,Si(e,t),Nn=d):Si(e,t),Bi(t),i&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!m&&t.mode&1)for(Ve=t,m=t.child;m!==null;){for(g=Ve=m;Ve!==null;){switch(v=Ve,y=v.child,v.tag){case 0:case 11:case 14:case 15:Ma(4,v,v.return);break;case 1:mo(v,v.return);var M=v.stateNode;if(typeof M.componentWillUnmount=="function"){i=v,n=v.return;try{e=i,M.props=e.memoizedProps,M.state=e.memoizedState,M.componentWillUnmount()}catch(A){nn(i,n,A)}}break;case 5:mo(v,v.return);break;case 22:if(v.memoizedState!==null){Rm(g);continue}}y!==null?(y.return=v,Ve=y):Rm(g)}m=m.sibling}e:for(m=null,g=t;;){if(g.tag===5){if(m===null){m=g;try{r=g.stateNode,d?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=g.stateNode,u=g.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=iv("display",a))}catch(A){nn(t,t.return,A)}}}else if(g.tag===6){if(m===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(A){nn(t,t.return,A)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;m===g&&(m=null),g=g.return}m===g&&(m=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Si(e,t),Bi(t),i&4&&Am(t);break;case 21:break;default:Si(e,t),Bi(t)}}function Bi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(R_(n)){var i=n;break e}n=n.return}throw Error(Me(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Aa(r,""),i.flags&=-33);var s=bm(t);vd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,l=bm(t);gd(t,l,a);break;default:throw Error(Me(161))}}catch(u){nn(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function rS(t,e,n){Ve=t,D_(t)}function D_(t,e,n){for(var i=(t.mode&1)!==0;Ve!==null;){var r=Ve,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||bl;if(!a){var l=r.alternate,u=l!==null&&l.memoizedState!==null||Nn;l=bl;var d=Nn;if(bl=a,(Nn=u)&&!d)for(Ve=r;Ve!==null;)a=Ve,u=a.child,a.tag===22&&a.memoizedState!==null?Pm(r):u!==null?(u.return=a,Ve=u):Pm(r);for(;s!==null;)Ve=s,D_(s),s=s.sibling;Ve=r,bl=l,Nn=d}Cm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ve=s):Cm(t)}}function Cm(t){for(;Ve!==null;){var e=Ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Nn||eu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Nn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Ti(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&dm(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}dm(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var g=m.dehydrated;g!==null&&Na(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Me(163))}Nn||e.flags&512&&md(e)}catch(v){nn(e,e.return,v)}}if(e===t){Ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ve=n;break}Ve=e.return}}function Rm(t){for(;Ve!==null;){var e=Ve;if(e===t){Ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ve=n;break}Ve=e.return}}function Pm(t){for(;Ve!==null;){var e=Ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{eu(4,e)}catch(u){nn(e,n,u)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(u){nn(e,r,u)}}var s=e.return;try{md(e)}catch(u){nn(e,s,u)}break;case 5:var a=e.return;try{md(e)}catch(u){nn(e,a,u)}}}catch(u){nn(e,e.return,u)}if(e===t){Ve=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Ve=l;break}Ve=e.return}}var sS=Math.ceil,kc=Sr.ReactCurrentDispatcher,Yh=Sr.ReactCurrentOwner,gi=Sr.ReactCurrentBatchConfig,Dt=0,Sn=null,un=null,wn=0,ei=0,go=is(0),pn=0,ja=null,Ds=0,tu=0,Kh=0,wa=null,Gn=null,Zh=0,Do=1/0,rr=null,Oc=!1,_d=null,$r=null,Al=!1,jr=null,Bc=0,Ta=0,xd=null,lc=-1,cc=0;function kn(){return Dt&6?rn():lc!==-1?lc:lc=rn()}function Yr(t){return t.mode&1?Dt&2&&wn!==0?wn&-wn:jy.transition!==null?(cc===0&&(cc=gv()),cc):(t=zt,t!==0||(t=window.event,t=t===void 0?16:Mv(t.type)),t):1}function Ni(t,e,n,i){if(50<Ta)throw Ta=0,xd=null,Error(Me(185));$a(t,n,i),(!(Dt&2)||t!==Sn)&&(t===Sn&&(!(Dt&2)&&(tu|=n),pn===4&&Br(t,wn)),$n(t,i),n===1&&Dt===0&&!(e.mode&1)&&(Do=rn()+500,Zc&&rs()))}function $n(t,e){var n=t.callbackNode;j0(t,e);var i=Ec(t,t===Sn?wn:0);if(i===0)n!==null&&Bp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Bp(n),e===1)t.tag===0?Hy(Nm.bind(null,t)):jv(Nm.bind(null,t)),ky(function(){!(Dt&6)&&rs()}),n=null;else{switch(vv(i)){case 1:n=Mh;break;case 4:n=pv;break;case 16:n=Sc;break;case 536870912:n=mv;break;default:n=Sc}n=z_(n,L_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function L_(t,e){if(lc=-1,cc=0,Dt&6)throw Error(Me(327));var n=t.callbackNode;if(Mo()&&t.callbackNode!==n)return null;var i=Ec(t,t===Sn?wn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=zc(t,i);else{e=i;var r=Dt;Dt|=2;var s=U_();(Sn!==t||wn!==e)&&(rr=null,Do=rn()+500,bs(t,e));do try{lS();break}catch(l){I_(t,l)}while(!0);Fh(),kc.current=s,Dt=r,un!==null?e=0:(Sn=null,wn=0,e=pn)}if(e!==0){if(e===2&&(r=Xf(t),r!==0&&(i=r,e=yd(t,r))),e===1)throw n=ja,bs(t,0),Br(t,i),$n(t,rn()),n;if(e===6)Br(t,i);else{if(r=t.current.alternate,!(i&30)&&!oS(r)&&(e=zc(t,i),e===2&&(s=Xf(t),s!==0&&(i=s,e=yd(t,s))),e===1))throw n=ja,bs(t,0),Br(t,i),$n(t,rn()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Me(345));case 2:gs(t,Gn,rr);break;case 3:if(Br(t,i),(i&130023424)===i&&(e=Zh+500-rn(),10<e)){if(Ec(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){kn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ed(gs.bind(null,t,Gn,rr),e);break}gs(t,Gn,rr);break;case 4:if(Br(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Pi(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=rn()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*sS(i/1960))-i,10<i){t.timeoutHandle=ed(gs.bind(null,t,Gn,rr),i);break}gs(t,Gn,rr);break;case 5:gs(t,Gn,rr);break;default:throw Error(Me(329))}}}return $n(t,rn()),t.callbackNode===n?L_.bind(null,t):null}function yd(t,e){var n=wa;return t.current.memoizedState.isDehydrated&&(bs(t,e).flags|=256),t=zc(t,e),t!==2&&(e=Gn,Gn=n,e!==null&&Sd(e)),t}function Sd(t){Gn===null?Gn=t:Gn.push.apply(Gn,t)}function oS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Li(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Br(t,e){for(e&=~Kh,e&=~tu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Pi(e),i=1<<n;t[n]=-1,e&=~i}}function Nm(t){if(Dt&6)throw Error(Me(327));Mo();var e=Ec(t,0);if(!(e&1))return $n(t,rn()),null;var n=zc(t,e);if(t.tag!==0&&n===2){var i=Xf(t);i!==0&&(e=i,n=yd(t,i))}if(n===1)throw n=ja,bs(t,0),Br(t,e),$n(t,rn()),n;if(n===6)throw Error(Me(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gs(t,Gn,rr),$n(t,rn()),null}function Qh(t,e){var n=Dt;Dt|=1;try{return t(e)}finally{Dt=n,Dt===0&&(Do=rn()+500,Zc&&rs())}}function Ls(t){jr!==null&&jr.tag===0&&!(Dt&6)&&Mo();var e=Dt;Dt|=1;var n=gi.transition,i=zt;try{if(gi.transition=null,zt=1,t)return t()}finally{zt=i,gi.transition=n,Dt=e,!(Dt&6)&&rs()}}function Jh(){ei=go.current,$t(go)}function bs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Fy(n)),un!==null)for(n=un.return;n!==null;){var i=n;switch(Lh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ac();break;case 3:Po(),$t(Xn),$t(Dn),jh();break;case 5:Hh(i);break;case 4:Po();break;case 13:$t(Qt);break;case 19:$t(Qt);break;case 10:kh(i.type._context);break;case 22:case 23:Jh()}n=n.return}if(Sn=t,un=t=Kr(t.current,null),wn=ei=e,pn=0,ja=null,Kh=tu=Ds=0,Gn=wa=null,Es!==null){for(e=0;e<Es.length;e++)if(n=Es[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Es=null}return t}function I_(t,e){do{var n=un;try{if(Fh(),sc.current=Fc,Uc){for(var i=Jt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Uc=!1}if(Ns=0,yn=hn=Jt=null,Ea=!1,Ba=0,Yh.current=null,n===null||n.return===null){pn=1,ja=e,un=null;break}e:{var s=t,a=n.return,l=n,u=e;if(e=wn,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,m=l,g=m.tag;if(!(m.mode&1)&&(g===0||g===11||g===15)){var v=m.alternate;v?(m.updateQueue=v.updateQueue,m.memoizedState=v.memoizedState,m.lanes=v.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=_m(a);if(y!==null){y.flags&=-257,xm(y,a,l,s,e),y.mode&1&&vm(s,d,e),e=y,u=d;var M=e.updateQueue;if(M===null){var A=new Set;A.add(u),e.updateQueue=A}else M.add(u);break e}else{if(!(e&1)){vm(s,d,e),ep();break e}u=Error(Me(426))}}else if(Kt&&l.mode&1){var E=_m(a);if(E!==null){!(E.flags&65536)&&(E.flags|=256),xm(E,a,l,s,e),Ih(No(u,l));break e}}s=u=No(u,l),pn!==4&&(pn=2),wa===null?wa=[s]:wa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=v_(s,u,e);fm(s,h);break e;case 1:l=u;var S=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof S.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&($r===null||!$r.has(w)))){s.flags|=65536,e&=-e,s.lanes|=e;var C=__(s,l,e);fm(s,C);break e}}s=s.return}while(s!==null)}k_(n)}catch(k){e=k,un===n&&n!==null&&(un=n=n.return);continue}break}while(!0)}function U_(){var t=kc.current;return kc.current=Fc,t===null?Fc:t}function ep(){(pn===0||pn===3||pn===2)&&(pn=4),Sn===null||!(Ds&268435455)&&!(tu&268435455)||Br(Sn,wn)}function zc(t,e){var n=Dt;Dt|=2;var i=U_();(Sn!==t||wn!==e)&&(rr=null,bs(t,e));do try{aS();break}catch(r){I_(t,r)}while(!0);if(Fh(),Dt=n,kc.current=i,un!==null)throw Error(Me(261));return Sn=null,wn=0,pn}function aS(){for(;un!==null;)F_(un)}function lS(){for(;un!==null&&!L0();)F_(un)}function F_(t){var e=B_(t.alternate,t,ei);t.memoizedProps=t.pendingProps,e===null?k_(t):un=e,Yh.current=null}function k_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=tS(n,e),n!==null){n.flags&=32767,un=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{pn=6,un=null;return}}else if(n=eS(n,e,ei),n!==null){un=n;return}if(e=e.sibling,e!==null){un=e;return}un=e=t}while(e!==null);pn===0&&(pn=5)}function gs(t,e,n){var i=zt,r=gi.transition;try{gi.transition=null,zt=1,cS(t,e,n,i)}finally{gi.transition=r,zt=i}return null}function cS(t,e,n,i){do Mo();while(jr!==null);if(Dt&6)throw Error(Me(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Me(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(V0(t,s),t===Sn&&(un=Sn=null,wn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Al||(Al=!0,z_(Sc,function(){return Mo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=gi.transition,gi.transition=null;var a=zt;zt=1;var l=Dt;Dt|=4,Yh.current=null,iS(t,n),N_(n,t),Ry(Qf),Mc=!!Zf,Qf=Zf=null,t.current=n,rS(n),I0(),Dt=l,zt=a,gi.transition=s}else t.current=n;if(Al&&(Al=!1,jr=t,Bc=r),s=t.pendingLanes,s===0&&($r=null),k0(n.stateNode),$n(t,rn()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Oc)throw Oc=!1,t=_d,_d=null,t;return Bc&1&&t.tag!==0&&Mo(),s=t.pendingLanes,s&1?t===xd?Ta++:(Ta=0,xd=t):Ta=0,rs(),null}function Mo(){if(jr!==null){var t=vv(Bc),e=gi.transition,n=zt;try{if(gi.transition=null,zt=16>t?16:t,jr===null)var i=!1;else{if(t=jr,jr=null,Bc=0,Dt&6)throw Error(Me(331));var r=Dt;for(Dt|=4,Ve=t.current;Ve!==null;){var s=Ve,a=s.child;if(Ve.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(Ve=d;Ve!==null;){var m=Ve;switch(m.tag){case 0:case 11:case 15:Ma(8,m,s)}var g=m.child;if(g!==null)g.return=m,Ve=g;else for(;Ve!==null;){m=Ve;var v=m.sibling,y=m.return;if(C_(m),m===d){Ve=null;break}if(v!==null){v.return=y,Ve=v;break}Ve=y}}}var M=s.alternate;if(M!==null){var A=M.child;if(A!==null){M.child=null;do{var E=A.sibling;A.sibling=null,A=E}while(A!==null)}}Ve=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ve=a;else e:for(;Ve!==null;){if(s=Ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ma(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Ve=h;break e}Ve=s.return}}var S=t.current;for(Ve=S;Ve!==null;){a=Ve;var w=a.child;if(a.subtreeFlags&2064&&w!==null)w.return=a,Ve=w;else e:for(a=S;Ve!==null;){if(l=Ve,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:eu(9,l)}}catch(k){nn(l,l.return,k)}if(l===a){Ve=null;break e}var C=l.sibling;if(C!==null){C.return=l.return,Ve=C;break e}Ve=l.return}}if(Dt=r,rs(),Gi&&typeof Gi.onPostCommitFiberRoot=="function")try{Gi.onPostCommitFiberRoot(Xc,t)}catch{}i=!0}return i}finally{zt=n,gi.transition=e}}return!1}function Dm(t,e,n){e=No(n,e),e=v_(t,e,1),t=qr(t,e,1),e=kn(),t!==null&&($a(t,1,e),$n(t,e))}function nn(t,e,n){if(t.tag===3)Dm(t,t,n);else for(;e!==null;){if(e.tag===3){Dm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&($r===null||!$r.has(i))){t=No(n,t),t=__(e,t,1),e=qr(e,t,1),t=kn(),e!==null&&($a(e,1,t),$n(e,t));break}}e=e.return}}function uS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=kn(),t.pingedLanes|=t.suspendedLanes&n,Sn===t&&(wn&n)===n&&(pn===4||pn===3&&(wn&130023424)===wn&&500>rn()-Zh?bs(t,0):Kh|=n),$n(t,e)}function O_(t,e){e===0&&(t.mode&1?(e=vl,vl<<=1,!(vl&130023424)&&(vl=4194304)):e=1);var n=kn();t=gr(t,e),t!==null&&($a(t,e,n),$n(t,n))}function fS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),O_(t,n)}function dS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Me(314))}i!==null&&i.delete(e),O_(t,n)}var B_;B_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Xn.current)Wn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Wn=!1,Jy(t,e,n);Wn=!!(t.flags&131072)}else Wn=!1,Kt&&e.flags&1048576&&Vv(e,Pc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ac(t,e),t=e.pendingProps;var r=Ao(e,Dn.current);Eo(e,n),r=Gh(null,e,i,t,r,n);var s=Wh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qn(i)?(s=!0,Cc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Bh(e),r.updater=Jc,e.stateNode=r,r._reactInternals=e,ad(e,i,t,n),e=ud(null,e,i,!0,s,n)):(e.tag=0,Kt&&s&&Dh(e),Fn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ac(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=pS(i),t=Ti(i,t),r){case 0:e=cd(null,e,i,t,n);break e;case 1:e=Em(null,e,i,t,n);break e;case 11:e=ym(null,e,i,t,n);break e;case 14:e=Sm(null,e,i,Ti(i.type,t),n);break e}throw Error(Me(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ti(i,r),cd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ti(i,r),Em(t,e,i,r,n);case 3:e:{if(E_(e),t===null)throw Error(Me(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Yv(t,e),Lc(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=No(Error(Me(423)),e),e=Mm(t,e,i,n,r);break e}else if(i!==r){r=No(Error(Me(424)),e),e=Mm(t,e,i,n,r);break e}else for(ti=Xr(e.stateNode.containerInfo.firstChild),ni=e,Kt=!0,Ai=null,n=qv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Co(),i===r){e=vr(t,e,n);break e}Fn(t,e,i,n)}e=e.child}return e;case 5:return Kv(e),t===null&&rd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Jf(i,r)?a=null:s!==null&&Jf(i,s)&&(e.flags|=32),S_(t,e),Fn(t,e,a,n),e.child;case 6:return t===null&&rd(e),null;case 13:return M_(t,e,n);case 4:return zh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ro(e,null,i,n):Fn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ti(i,r),ym(t,e,i,r,n);case 7:return Fn(t,e,e.pendingProps,n),e.child;case 8:return Fn(t,e,e.pendingProps.children,n),e.child;case 12:return Fn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,Xt(Nc,i._currentValue),i._currentValue=a,s!==null)if(Li(s.value,a)){if(s.children===r.children&&!Xn.current){e=vr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var u=l.firstContext;u!==null;){if(u.context===i){if(s.tag===1){u=dr(-1,n&-n),u.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?u.next=u:(u.next=m.next,m.next=u),d.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),sd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(Me(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),sd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Fn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Eo(e,n),r=vi(r),i=i(r),e.flags|=1,Fn(t,e,i,n),e.child;case 14:return i=e.type,r=Ti(i,e.pendingProps),r=Ti(i.type,r),Sm(t,e,i,r,n);case 15:return x_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ti(i,r),ac(t,e),e.tag=1,qn(i)?(t=!0,Cc(e)):t=!1,Eo(e,n),g_(e,i,r),ad(e,i,r,n),ud(null,e,i,!0,t,n);case 19:return w_(t,e,n);case 22:return y_(t,e,n)}throw Error(Me(156,e.tag))};function z_(t,e){return hv(t,e)}function hS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(t,e,n,i){return new hS(t,e,n,i)}function tp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pS(t){if(typeof t=="function")return tp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===yh)return 11;if(t===Sh)return 14}return 2}function Kr(t,e){var n=t.alternate;return n===null?(n=mi(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function uc(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")tp(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case so:return As(n.children,r,s,e);case xh:a=8,r|=8;break;case Nf:return t=mi(12,n,e,r|2),t.elementType=Nf,t.lanes=s,t;case Df:return t=mi(13,n,e,r),t.elementType=Df,t.lanes=s,t;case Lf:return t=mi(19,n,e,r),t.elementType=Lf,t.lanes=s,t;case Kg:return nu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $g:a=10;break e;case Yg:a=9;break e;case yh:a=11;break e;case Sh:a=14;break e;case Fr:a=16,i=null;break e}throw Error(Me(130,t==null?t:typeof t,""))}return e=mi(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function As(t,e,n,i){return t=mi(7,t,i,e),t.lanes=n,t}function nu(t,e,n,i){return t=mi(22,t,i,e),t.elementType=Kg,t.lanes=n,t.stateNode={isHidden:!1},t}function Ku(t,e,n){return t=mi(6,t,null,e),t.lanes=n,t}function Zu(t,e,n){return e=mi(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function mS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nu(0),this.expirationTimes=Nu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function np(t,e,n,i,r,s,a,l,u){return t=new mS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=mi(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bh(s),t}function gS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ro,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function H_(t){if(!t)return es;t=t._reactInternals;e:{if(ks(t)!==t||t.tag!==1)throw Error(Me(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Me(171))}if(t.tag===1){var n=t.type;if(qn(n))return Hv(t,n,e)}return e}function j_(t,e,n,i,r,s,a,l,u){return t=np(n,i,!0,t,r,s,a,l,u),t.context=H_(null),n=t.current,i=kn(),r=Yr(n),s=dr(i,r),s.callback=e??null,qr(n,s,r),t.current.lanes=r,$a(t,r,i),$n(t,i),t}function iu(t,e,n,i){var r=e.current,s=kn(),a=Yr(r);return n=H_(n),e.context===null?e.context=n:e.pendingContext=n,e=dr(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=qr(r,e,a),t!==null&&(Ni(t,r,a,s),rc(t,r,a)),a}function Hc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ip(t,e){Lm(t,e),(t=t.alternate)&&Lm(t,e)}function vS(){return null}var V_=typeof reportError=="function"?reportError:function(t){console.error(t)};function rp(t){this._internalRoot=t}ru.prototype.render=rp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Me(409));iu(t,e,null,null)};ru.prototype.unmount=rp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ls(function(){iu(null,t,null,null)}),e[mr]=null}};function ru(t){this._internalRoot=t}ru.prototype.unstable_scheduleHydration=function(t){if(t){var e=yv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Or.length&&e!==0&&e<Or[n].priority;n++);Or.splice(n,0,t),n===0&&Ev(t)}};function sp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Im(){}function _S(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var d=Hc(a);s.call(d)}}var a=j_(e,i,t,0,null,!1,!1,"",Im);return t._reactRootContainer=a,t[mr]=a.current,Ia(t.nodeType===8?t.parentNode:t),Ls(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var l=i;i=function(){var d=Hc(u);l.call(d)}}var u=np(t,0,!1,null,null,!1,!1,"",Im);return t._reactRootContainer=u,t[mr]=u.current,Ia(t.nodeType===8?t.parentNode:t),Ls(function(){iu(e,u,n,i)}),u}function ou(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var l=r;r=function(){var u=Hc(a);l.call(u)}}iu(e,a,t,r)}else a=_S(n,e,t,r,i);return Hc(a)}_v=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=pa(e.pendingLanes);n!==0&&(wh(e,n|1),$n(e,rn()),!(Dt&6)&&(Do=rn()+500,rs()))}break;case 13:Ls(function(){var i=gr(t,1);if(i!==null){var r=kn();Ni(i,t,1,r)}}),ip(t,1)}};Th=function(t){if(t.tag===13){var e=gr(t,134217728);if(e!==null){var n=kn();Ni(e,t,134217728,n)}ip(t,134217728)}};xv=function(t){if(t.tag===13){var e=Yr(t),n=gr(t,e);if(n!==null){var i=kn();Ni(n,t,e,i)}ip(t,e)}};yv=function(){return zt};Sv=function(t,e){var n=zt;try{return zt=t,e()}finally{zt=n}};Vf=function(t,e,n){switch(e){case"input":if(Ff(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Kc(i);if(!r)throw Error(Me(90));Qg(i),Ff(i,r)}}}break;case"textarea":ev(t,n);break;case"select":e=n.value,e!=null&&_o(t,!!n.multiple,e,!1)}};av=Qh;lv=Ls;var xS={usingClientEntryPoint:!1,Events:[Ka,co,Kc,sv,ov,Qh]},oa={findFiberByHostInstance:Ss,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yS={bundleType:oa.bundleType,version:oa.version,rendererPackageName:oa.rendererPackageName,rendererConfig:oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=fv(t),t===null?null:t.stateNode},findFiberByHostInstance:oa.findFiberByHostInstance||vS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cl.isDisabled&&Cl.supportsFiber)try{Xc=Cl.inject(yS),Gi=Cl}catch{}}si.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xS;si.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sp(e))throw Error(Me(200));return gS(t,e,null,n)};si.createRoot=function(t,e){if(!sp(t))throw Error(Me(299));var n=!1,i="",r=V_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=np(t,1,!1,null,null,n,!1,i,r),t[mr]=e.current,Ia(t.nodeType===8?t.parentNode:t),new rp(e)};si.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Me(188)):(t=Object.keys(t).join(","),Error(Me(268,t)));return t=fv(e),t=t===null?null:t.stateNode,t};si.flushSync=function(t){return Ls(t)};si.hydrate=function(t,e,n){if(!su(e))throw Error(Me(200));return ou(null,t,e,!0,n)};si.hydrateRoot=function(t,e,n){if(!sp(t))throw Error(Me(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=V_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=j_(e,null,t,1,n??null,r,!1,s,a),t[mr]=e.current,Ia(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ru(e)};si.render=function(t,e,n){if(!su(e))throw Error(Me(200));return ou(null,t,e,!1,n)};si.unmountComponentAtNode=function(t){if(!su(t))throw Error(Me(40));return t._reactRootContainer?(Ls(function(){ou(null,null,t,!1,function(){t._reactRootContainer=null,t[mr]=null})}),!0):!1};si.unstable_batchedUpdates=Qh;si.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!su(n))throw Error(Me(200));if(t==null||t._reactInternals===void 0)throw Error(Me(38));return ou(t,e,n,!1,i)};si.version="18.3.1-next-f1338f8080-20240426";function G_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(G_)}catch(t){console.error(t)}}G_(),Gg.exports=si;var SS=Gg.exports,W_,Um=SS;W_=Um.createRoot,Um.hydrateRoot;var X_={exports:{}};(function(t,e){(function(n,i){t.exports=i()})(fh,function(){return function(n){function i(s){if(r[s])return r[s].exports;var a=r[s]={exports:{},id:s,loaded:!1};return n[s].call(a.exports,a,a.exports,i),a.loaded=!0,a.exports}var r={};return i.m=n,i.c=r,i.p="dist/",i(0)}([function(n,i,r){function s(ee){return ee&&ee.__esModule?ee:{default:ee}}var a=Object.assign||function(ee){for(var he=1;he<arguments.length;he++){var fe=arguments[he];for(var me in fe)Object.prototype.hasOwnProperty.call(fe,me)&&(ee[me]=fe[me])}return ee},l=r(1),u=(s(l),r(6)),d=s(u),m=r(7),g=s(m),v=r(8),y=s(v),M=r(9),A=s(M),E=r(10),h=s(E),S=r(11),w=s(S),C=r(14),k=s(C),I=[],f=!1,B={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},D=function(){var ee=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(ee&&(f=!0),f)return I=(0,w.default)(I,B),(0,h.default)(I,B.once),I},N=function(){I=(0,k.default)(),D()},O=function(){I.forEach(function(ee,he){ee.node.removeAttribute("data-aos"),ee.node.removeAttribute("data-aos-easing"),ee.node.removeAttribute("data-aos-duration"),ee.node.removeAttribute("data-aos-delay")})},q=function(ee){return ee===!0||ee==="mobile"&&A.default.mobile()||ee==="phone"&&A.default.phone()||ee==="tablet"&&A.default.tablet()||typeof ee=="function"&&ee()===!0},W=function(ee){B=a(B,ee),I=(0,k.default)();var he=document.all&&!window.atob;return q(B.disable)||he?O():(B.disableMutationObserver||y.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),B.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",B.easing),document.querySelector("body").setAttribute("data-aos-duration",B.duration),document.querySelector("body").setAttribute("data-aos-delay",B.delay),B.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?D(!0):B.startEvent==="load"?window.addEventListener(B.startEvent,function(){D(!0)}):document.addEventListener(B.startEvent,function(){D(!0)}),window.addEventListener("resize",(0,g.default)(D,B.debounceDelay,!0)),window.addEventListener("orientationchange",(0,g.default)(D,B.debounceDelay,!0)),window.addEventListener("scroll",(0,d.default)(function(){(0,h.default)(I,B.once)},B.throttleDelay)),B.disableMutationObserver||y.default.ready("[data-aos]",N),I)};n.exports={init:W,refresh:D,refreshHard:N}},function(n,i){},,,,,function(n,i){(function(r){function s(q,W,ee){function he(H){var kt=oe,at=xe;return oe=xe=void 0,He=H,ye=q.apply(at,kt)}function fe(H){return He=H,Fe=setTimeout(ce,W),Lt?he(H):ye}function me(H){var kt=H-nt,at=H-He,ft=W-kt;return ht?N(ft,Ae-at):ft}function V(H){var kt=H-nt,at=H-He;return nt===void 0||kt>=W||kt<0||ht&&at>=Ae}function ce(){var H=O();return V(H)?_e(H):void(Fe=setTimeout(ce,me(H)))}function _e(H){return Fe=void 0,We&&oe?he(H):(oe=xe=void 0,ye)}function be(){Fe!==void 0&&clearTimeout(Fe),He=0,oe=nt=xe=Fe=void 0}function Ge(){return Fe===void 0?ye:_e(O())}function st(){var H=O(),kt=V(H);if(oe=arguments,xe=this,nt=H,kt){if(Fe===void 0)return fe(nt);if(ht)return Fe=setTimeout(ce,W),he(nt)}return Fe===void 0&&(Fe=setTimeout(ce,W)),ye}var oe,xe,Ae,ye,Fe,nt,He=0,Lt=!1,ht=!1,We=!0;if(typeof q!="function")throw new TypeError(v);return W=m(W)||0,l(ee)&&(Lt=!!ee.leading,ht="maxWait"in ee,Ae=ht?D(m(ee.maxWait)||0,W):Ae,We="trailing"in ee?!!ee.trailing:We),st.cancel=be,st.flush=Ge,st}function a(q,W,ee){var he=!0,fe=!0;if(typeof q!="function")throw new TypeError(v);return l(ee)&&(he="leading"in ee?!!ee.leading:he,fe="trailing"in ee?!!ee.trailing:fe),s(q,W,{leading:he,maxWait:W,trailing:fe})}function l(q){var W=typeof q>"u"?"undefined":g(q);return!!q&&(W=="object"||W=="function")}function u(q){return!!q&&(typeof q>"u"?"undefined":g(q))=="object"}function d(q){return(typeof q>"u"?"undefined":g(q))=="symbol"||u(q)&&B.call(q)==M}function m(q){if(typeof q=="number")return q;if(d(q))return y;if(l(q)){var W=typeof q.valueOf=="function"?q.valueOf():q;q=l(W)?W+"":W}if(typeof q!="string")return q===0?q:+q;q=q.replace(A,"");var ee=h.test(q);return ee||S.test(q)?w(q.slice(2),ee?2:8):E.test(q)?y:+q}var g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(q){return typeof q}:function(q){return q&&typeof Symbol=="function"&&q.constructor===Symbol&&q!==Symbol.prototype?"symbol":typeof q},v="Expected a function",y=NaN,M="[object Symbol]",A=/^\s+|\s+$/g,E=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,S=/^0o[0-7]+$/i,w=parseInt,C=(typeof r>"u"?"undefined":g(r))=="object"&&r&&r.Object===Object&&r,k=(typeof self>"u"?"undefined":g(self))=="object"&&self&&self.Object===Object&&self,I=C||k||Function("return this")(),f=Object.prototype,B=f.toString,D=Math.max,N=Math.min,O=function(){return I.Date.now()};n.exports=a}).call(i,function(){return this}())},function(n,i){(function(r){function s(O,q,W){function ee(We){var H=st,kt=oe;return st=oe=void 0,nt=We,Ae=O.apply(kt,H)}function he(We){return nt=We,ye=setTimeout(V,q),He?ee(We):Ae}function fe(We){var H=We-Fe,kt=We-nt,at=q-H;return Lt?D(at,xe-kt):at}function me(We){var H=We-Fe,kt=We-nt;return Fe===void 0||H>=q||H<0||Lt&&kt>=xe}function V(){var We=N();return me(We)?ce(We):void(ye=setTimeout(V,fe(We)))}function ce(We){return ye=void 0,ht&&st?ee(We):(st=oe=void 0,Ae)}function _e(){ye!==void 0&&clearTimeout(ye),nt=0,st=Fe=oe=ye=void 0}function be(){return ye===void 0?Ae:ce(N())}function Ge(){var We=N(),H=me(We);if(st=arguments,oe=this,Fe=We,H){if(ye===void 0)return he(Fe);if(Lt)return ye=setTimeout(V,q),ee(Fe)}return ye===void 0&&(ye=setTimeout(V,q)),Ae}var st,oe,xe,Ae,ye,Fe,nt=0,He=!1,Lt=!1,ht=!0;if(typeof O!="function")throw new TypeError(g);return q=d(q)||0,a(W)&&(He=!!W.leading,Lt="maxWait"in W,xe=Lt?B(d(W.maxWait)||0,q):xe,ht="trailing"in W?!!W.trailing:ht),Ge.cancel=_e,Ge.flush=be,Ge}function a(O){var q=typeof O>"u"?"undefined":m(O);return!!O&&(q=="object"||q=="function")}function l(O){return!!O&&(typeof O>"u"?"undefined":m(O))=="object"}function u(O){return(typeof O>"u"?"undefined":m(O))=="symbol"||l(O)&&f.call(O)==y}function d(O){if(typeof O=="number")return O;if(u(O))return v;if(a(O)){var q=typeof O.valueOf=="function"?O.valueOf():O;O=a(q)?q+"":q}if(typeof O!="string")return O===0?O:+O;O=O.replace(M,"");var W=E.test(O);return W||h.test(O)?S(O.slice(2),W?2:8):A.test(O)?v:+O}var m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},g="Expected a function",v=NaN,y="[object Symbol]",M=/^\s+|\s+$/g,A=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,h=/^0o[0-7]+$/i,S=parseInt,w=(typeof r>"u"?"undefined":m(r))=="object"&&r&&r.Object===Object&&r,C=(typeof self>"u"?"undefined":m(self))=="object"&&self&&self.Object===Object&&self,k=w||C||Function("return this")(),I=Object.prototype,f=I.toString,B=Math.max,D=Math.min,N=function(){return k.Date.now()};n.exports=s}).call(i,function(){return this}())},function(n,i){function r(m){var g=void 0,v=void 0;for(g=0;g<m.length;g+=1)if(v=m[g],v.dataset&&v.dataset.aos||v.children&&r(v.children))return!0;return!1}function s(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function a(){return!!s()}function l(m,g){var v=window.document,y=s(),M=new y(u);d=g,M.observe(v.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function u(m){m&&m.forEach(function(g){var v=Array.prototype.slice.call(g.addedNodes),y=Array.prototype.slice.call(g.removedNodes),M=v.concat(y);if(r(M))return d()})}Object.defineProperty(i,"__esModule",{value:!0});var d=function(){};i.default={isSupported:a,ready:l}},function(n,i){function r(v,y){if(!(v instanceof y))throw new TypeError("Cannot call a class as a function")}function s(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(i,"__esModule",{value:!0});var a=function(){function v(y,M){for(var A=0;A<M.length;A++){var E=M[A];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(y,E.key,E)}}return function(y,M,A){return M&&v(y.prototype,M),A&&v(y,A),y}}(),l=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,u=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,d=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,m=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,g=function(){function v(){r(this,v)}return a(v,[{key:"phone",value:function(){var y=s();return!(!l.test(y)&&!u.test(y.substr(0,4)))}},{key:"mobile",value:function(){var y=s();return!(!d.test(y)&&!m.test(y.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),v}();i.default=new g},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(a,l,u){var d=a.node.getAttribute("data-aos-once");l>a.position?a.node.classList.add("aos-animate"):typeof d<"u"&&(d==="false"||!u&&d!=="true")&&a.node.classList.remove("aos-animate")},s=function(a,l){var u=window.pageYOffset,d=window.innerHeight;a.forEach(function(m,g){r(m,d+u,l)})};i.default=s},function(n,i,r){function s(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(i,"__esModule",{value:!0});var a=r(12),l=s(a),u=function(d,m){return d.forEach(function(g,v){g.node.classList.add("aos-init"),g.position=(0,l.default)(g.node,m.offset)}),d};i.default=u},function(n,i,r){function s(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(i,"__esModule",{value:!0});var a=r(13),l=s(a),u=function(d,m){var g=0,v=0,y=window.innerHeight,M={offset:d.getAttribute("data-aos-offset"),anchor:d.getAttribute("data-aos-anchor"),anchorPlacement:d.getAttribute("data-aos-anchor-placement")};switch(M.offset&&!isNaN(M.offset)&&(v=parseInt(M.offset)),M.anchor&&document.querySelectorAll(M.anchor)&&(d=document.querySelectorAll(M.anchor)[0]),g=(0,l.default)(d).top,M.anchorPlacement){case"top-bottom":break;case"center-bottom":g+=d.offsetHeight/2;break;case"bottom-bottom":g+=d.offsetHeight;break;case"top-center":g+=y/2;break;case"bottom-center":g+=y/2+d.offsetHeight;break;case"center-center":g+=y/2+d.offsetHeight/2;break;case"top-top":g+=y;break;case"bottom-top":g+=d.offsetHeight+y;break;case"center-top":g+=d.offsetHeight/2+y}return M.anchorPlacement||M.offset||isNaN(m)||(v=m),g+v};i.default=u},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(s){for(var a=0,l=0;s&&!isNaN(s.offsetLeft)&&!isNaN(s.offsetTop);)a+=s.offsetLeft-(s.tagName!="BODY"?s.scrollLeft:0),l+=s.offsetTop-(s.tagName!="BODY"?s.scrollTop:0),s=s.offsetParent;return{top:l,left:a}};i.default=r},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(s){return s=s||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(s,function(a){return{node:a}})};i.default=r}])})})(X_);var ES=X_.exports;const MS=Yx(ES),wS=()=>{const[t,e]=Nt.useState(!1);Nt.useEffect(()=>{const i=localStorage.getItem("theme"),r=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;i?e(i==="dark"):r&&e(!0)},[]),Nt.useEffect(()=>{t?(document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")):(document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("theme","light"))},[t]);const n=()=>{e(!t)};return x.jsx("button",{onClick:n,className:"dark-mode-toggle","aria-label":t?"Switch to light mode":"Switch to dark mode",children:t?x.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[x.jsx("circle",{cx:"12",cy:"12",r:"5"}),x.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),x.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),x.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),x.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),x.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),x.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),x.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),x.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}):x.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:x.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})})},TS=()=>{const[t,e]=Nt.useState(!1),n=()=>{e(!t)},i=r=>{r.preventDefault();const s=r.currentTarget.getAttribute("href");if(s&&s.startsWith("#")){const a=document.querySelector(s);if(a){const l=document.querySelector(".navbar"),u=(l==null?void 0:l.offsetHeight)||0,d=a.offsetTop-u-20,m=window.pageYOffset,g=d-m,v=800;let y=null;const M=A=>{y||(y=A);const E=A-y,h=Math.min(E/v,1),S=w=>w<.5?4*w*w*w:(w-1)*(2*w-2)*(2*w-2)+1;window.scrollTo({top:m+g*S(h),behavior:"auto"}),E<v&&window.requestAnimationFrame(M)};window.requestAnimationFrame(M),t&&e(!1)}}};return x.jsxs("div",{className:`navbar ${t?"active":""}`,children:[x.jsx("a",{href:"#about",onClick:i,children:"About"}),x.jsx("a",{href:"#terminal",onClick:i,children:"Terminal"}),x.jsx("a",{href:"#journey",onClick:i,children:"Journey"}),x.jsx("a",{href:"#passions",onClick:i,children:"Passions"}),x.jsx("a",{href:"#gallery",onClick:i,children:"Gallery"}),x.jsx("a",{href:"#projects",onClick:i,children:"Projects"}),x.jsx("a",{href:"#insights",onClick:i,children:"Insights"}),x.jsx("a",{href:"#bookshelf",onClick:i,children:"Books"}),x.jsx("a",{href:"#Social-Accounts",onClick:i,children:"Connect"}),x.jsx(wS,{}),x.jsx("button",{className:"menu-toggle",onClick:n,children:x.jsx("i",{className:"fas fa-bars"})})]})},bS=()=>{const[t,e]=Nt.useState(""),n="Hello,World! I'm ZHOU.",i=Nt.useRef(0);return Nt.useEffect(()=>{const r=()=>{const s=i.current;s<n.length&&(e(a=>a+n.charAt(s)),i.current++,setTimeout(r,100))};return r(),()=>{i.current=0}},[]),x.jsxs("div",{className:"container",id:"about",children:[x.jsx("img",{src:"photos/my_photo.jpg",alt:"My Photo",className:"profile-photo"}),x.jsx("h1",{style:{color:"var(--primary-color)"},children:t}),x.jsxs("p",{className:"bio-text",children:["Welcome to my digital space! As an individual fascinated by the intricate interplay between hardware",x.jsx("i",{className:"fas fa-microchip"})," and software",x.jsx("i",{className:"fas fa-file-code"}),", I explore the full spectrum of technology. Beyond coding, I'm an avid photographer capturing life's moments ",x.jsx("i",{className:"fas fa-camera"})," and a billiards enthusiast seeking the perfect shot ",x.jsx("i",{className:"fas fa-circle"}),". Here, I share my journey through system architecture, creative pursuits, and continuous learning",x.jsx("i",{className:"fas fa-book"}),"."]})]})},AS=()=>{const[t,e]=Nt.useState([]),[n,i]=Nt.useState(-1),[r,s]=Nt.useState(""),[a,l]=Nt.useState(""),u=Nt.useRef(null),d=Nt.useRef(null),g=`
  ____            _____                 
 |  _ \\   _ __   |___ /   _ __     __ _ 
 | |_) | | '_ \\    |_ \\  | '_ \\   / _\` |
 |  __/  | |_) |  ___) | | | | | | (_| |
 |_|     | .__/  |____/  |_| |_|  \\__, |
         |_|                      |___/ 

<span style="color: #42b983;">Welcome to my Terminal</span>
Type '<span style="color: #ff79c6;">help</span>' for available commands.

`;Nt.useEffect(()=>{if(l(g),M()){const S=document.getElementById("terminal-output");S&&(S.style.fontSize="8px")}},[]),Nt.useEffect(()=>{A()},[a]);const v={help:()=>`Available commands:
- help: Show this help message
- whoami: Display personal information
- contact: Show contact information
- clear: Clear terminal
- goto [section]: Navigate to a section
- joke: Show a programming joke
- cowsay [message]: Make a cow say something
- weather [city]: Show weather (your location if no city specified)
- crypto: Show current Bitcoin prices
- cat: Get random cat picture
- dog: Get random dog picture
- nasa: Get NASA astronomy picture of the day
- fact: Get random fact
- date: Show current date and time
- history: Show command history
- neofetch: Display system information
- advice: Get a random advice
- word: Get a random word with definition

Type any command to execute.`,whoami:()=>`Name: Penn.L.Zhou(周罗鹏)
Occupation: Programmer
Passions:
- Programming: C/C++ development in Linux environment
- Photography: Capturing moments and finding beauty in everyday scenes
- Billiards: Strategic game requiring precision and focus`,contact:()=>`<a href="https://www.instagram.com/pp3ng___" target="_blank">Instagram: @pp3ng___</a>
<a href="https://github.com/Pp3ng" target="_blank">GitHub: github.com/Pp3ng</a>
<a href="mailto:pp3ng@outlook.com">Email: Pp3ng@outlook.com</a>`,clear:()=>(l(g),null),goto:S=>{const w=document.getElementById(S);if(w){const C=document.querySelector(".navbar"),k=(C==null?void 0:C.offsetHeight)||0;return window.scrollTo({top:w.offsetTop-k-20,behavior:"smooth"}),`Navigating to ${S}...`}else return`Section not found: ${S}. Available sections: about, terminal, journey, passions, gallery, projects, insights, bookshelf`},joke:()=>'<img src="https://readme-jokes.vercel.app/api?theme=vue" alt="Programming Joke" style="max-width: 100%; border-radius: 8px;">',cowsay:(S="Mooooo!")=>{const w=Array.isArray(S)?S.join(" "):S.toString();return`
  ${"-".repeat(w.length+2)}
< ${w} >
  ${"-".repeat(w.length+2)}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
        `},weather:async S=>{try{if(!S)return await(await fetch("https://wttr.in/?format=3")).text();const w=await fetch(`https://wttr.in/${encodeURIComponent(S)}?format=3`);if(!w.ok)throw new Error("Weather service error");return await w.text()}catch{return"Failed to fetch weather data. Please try again later or specify a valid city name."}},crypto:async()=>{try{const w=await(await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")).json(),C=w.bpi.USD.rate_float,k=w.bpi.EUR.rate_float,B=(await(await fetch("https://open.er-api.com/v6/latest/USD")).json()).rates.CNY,D=C*B;return`Bitcoin Price:
USD: $${C.toFixed(2)}
CNY: ¥${D.toFixed(2)}
EUR: €${k.toFixed(2)}`}catch{return"Failed to fetch cryptocurrency prices"}},cat:async()=>{try{return`<div style="margin: 10px 0;">
                    <img src="${(await(await fetch("https://api.thecatapi.com/v1/images/search")).json())[0].url}" alt="Random Cat" style="max-width: 100%; max-height: 300px; border-radius: 5px; border: 3px solid rgba(255, 255, 255, 0.4);">
                </div>`}catch{return"Failed to fetch cat picture"}},dog:async()=>{try{return`<div style="margin: 10px 0;">
                    <img src="${(await(await fetch("https://api.thedogapi.com/v1/images/search")).json())[0].url}" alt="Random Dog" style="max-width: 100%; max-height: 300px; border-radius: 5px; border: 3px solid rgba(255, 255, 255, 0.4);">
                </div>`}catch{return"Failed to fetch dog picture"}},nasa:async()=>{try{const w=await(await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")).json();return`NASA Astronomy Picture of the Day:
Title: ${w.title}
Date: ${w.date}
<div style="margin: 10px 0;">
    <img src="${w.url}" alt="${w.title}" style="max-width: 100%; max-height: 300px; border-radius: 5px; border: 3px solid rgba(255, 255, 255, 0.4);">
</div>
${w.explanation.slice(0,200)}...`}catch{return"Failed to fetch NASA picture of the day"}},fact:async()=>{try{return`Random Fact: ${(await(await fetch("https://uselessfacts.jsph.pl/random.json?language=en")).json()).text}`}catch{return"Failed to fetch random fact"}},date:()=>{const S=new Date,w=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],C=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${w[S.getDay()]} ${C[S.getMonth()]} ${S.getDate()} ${S.toTimeString().slice(0,8)} KST ${S.getFullYear()}`},history:()=>t.map((S,w)=>` ${w+1}  ${S}`).join(`
`),neofetch:()=>{const S=new Date("2024-09-28"),C=Math.floor((new Date().getTime()-S.getTime())/(1e3*60*60*24)),k=navigator.language||"en-US",I=()=>{const D=navigator.userAgent;return D.includes("Firefox")?"Browser (Firefox)":D.includes("Chrome")&&!D.includes("Edg")?"Browser (Chrome)":D.includes("Safari")&&!D.includes("Chrome")?"Browser (Safari)":D.includes("Edg")?"Browser (Edge)":D.includes("OPR")?"Browser (Opera)":"Browser (Other)"},f=["Time to code and conquer!","Coffee level: Critical","Bug hunting in progress...","System status: Awesome","Ready to debug!"];return`
                            .---.                ${f[Math.floor(Math.random()*f.length)]}
                           /     \\               ------------------------------------
                           \\.@-@./               OS: ${I()} <i class="fas fa-globe"></i>
                           /\`\\_/\`\\               Host: Personal Portfolio v2.0 <i class="fas fa-laptop-code"></i>
                          //  _  \\\\              Kernel: JavaScript ES2024 <i class="fab fa-js"></i>
                         | \\     )|_             Uptime: ${Math.abs(C)} days <i class="fas fa-clock"></i>
                        /\`\\_\`>  <_/ \\            Packages: 42 node_modules installed <i class="fab fa-npm"></i>
                       (  \\_     _/  )           Shell: Terminal.js v3.14 <i class="fas fa-terminal"></i>
                        \`-\\_____/--'             Resolution: ${window.screen.width}x${window.screen.height} <i class="fas fa-desktop"></i>
                                                 DE: Glass Morphism <i class="fas fa-palette"></i>
                                                 Icons: Font Awesome <i class="fab fa-font-awesome"></i>
                                                 Terminal: Web Console Pro <i class="fas fa-code"></i>
                                                 CPU: Brain 6.0 GHz <i class="fas fa-microchip"></i>
                                                 GPU: Eyes RTX 5090 Ti <i class="fas fa-eye"></i>
                                                 Locale: ${k} <i class="fas fa-globe-asia"></i>
                                                 Battery: Coffee 99% <i class="fas fa-coffee"></i>`},advice:async()=>{try{const w=await(await fetch("https://api.adviceslip.com/advice")).json();return`💡 Advice #${w.slip.id}: ${w.slip.advice}`}catch{return"Failed to fetch advice. Maybe that's the advice: sometimes things fail."}},word:async()=>{var S,w,C,k;try{const I=await fetch("https://random-word-api.herokuapp.com/word"),[f]=await I.json(),B=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${f}`);if(!B.ok)return`Random Word: ${f}
Definition: No definition found for this random word.`;const D=await B.json();let N=`📚 Random Word: ${f}

`;if(((w=(S=D[0])==null?void 0:S.meanings)==null?void 0:w.length)>0){const O=D[0].meanings[0],q=O.partOfSpeech,W=((C=O.definitions[0])==null?void 0:C.definition)||"No definition available";N+=`Part of Speech: ${q}
Definition: ${W}`,(k=O.definitions[0])!=null&&k.example&&(N+=`

Example: "${O.definitions[0].example}"`)}else N+="No definition found for this random word.";return N}catch{return"Failed to fetch a random word. Please try again later."}}},y=async S=>{if(!S.trim())return"";const w=S.split(" "),C=w[0],k=w.slice(1);if(v[C]){if(C==="cowsay")return v[C](k.join(" "));const I=v[C](...k);return I instanceof Promise?await I:I}else if(S.trim()!=="")return`Command not found: ${S}. Type 'help' for available commands.`;return""},M=()=>window.innerWidth<=768,A=()=>{u.current&&(u.current.scrollTop=u.current.scrollHeight)},E=async S=>{if(S.key==="Enter"){const w=r.trim();if(w){e(k=>[...k,w]),i(t.length+1);const C=await y(w);C!==null&&l(k=>`${k}>_ ${w}
${C||""}

`)}s(""),A()}else if(S.key==="ArrowUp"){if(S.preventDefault(),t.length>0&&n>0){const w=n-1;i(w),s(t[w])}}else if(S.key==="ArrowDown")if(S.preventDefault(),n<t.length-1){const w=n+1;i(w),s(t[w])}else i(t.length),s("");else if(S.key==="Tab"){S.preventDefault();const w=r,C=Object.keys(v).filter(k=>k.startsWith(w.split(" ")[0]));C.length===1?s(C[0]+(w.includes(" ")?w.substring(w.indexOf(" ")):"")):C.length>1&&(l(k=>`${k}>_ ${w}
${C.join("  ")}

`),A())}else S.key==="c"&&S.ctrlKey?(S.preventDefault(),s(""),l(w=>`${w}>_ ^C
`),A()):S.key==="l"&&S.ctrlKey&&(S.preventDefault(),v.clear())},h=S=>({__html:S});return x.jsxs("div",{className:"container",id:"terminal","data-aos":"fade-up",children:[x.jsx("h2",{children:"Terminal"}),x.jsx("div",{className:"terminal-section",children:x.jsxs("div",{id:"terminal-window",ref:u,children:[x.jsx("div",{id:"terminal-output",dangerouslySetInnerHTML:h(a)}),x.jsxs("div",{id:"terminal-input-line",children:[x.jsx("span",{id:"terminal-prompt",children:"pp3ng@portfolio:~$"}),x.jsx("input",{type:"text",id:"terminal-input",ref:d,value:r,onChange:S=>s(S.target.value),onKeyDown:E})]})]})})]})},CS=()=>{const t=Nt.useRef(null);return Nt.useEffect(()=>{const e=new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting&&a.target.classList.add("visible")})},{threshold:.1}),n=new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting&&a.target.classList.add("animate-timeline")})},{threshold:.05}),i=document.querySelectorAll(".journey-item");i.forEach(s=>{e.observe(s)});const r=document.querySelector(".journey-wrapper");return r&&n.observe(r),()=>{i.forEach(s=>{e.unobserve(s)}),r&&n.unobserve(r)}},[]),x.jsxs("div",{className:"container compact-section",id:"journey","data-aos":"fade-up",ref:t,children:[x.jsx("h2",{children:"Life Journey"}),x.jsxs("div",{className:"journey-wrapper",children:[x.jsxs("div",{className:"journey-item",children:[x.jsx("div",{className:"journey-dot"}),x.jsx("div",{className:"journey-date",children:"Spring 2022"}),x.jsxs("div",{className:"journey-content",children:[x.jsx("h3",{children:"First Encounter with Linux"}),x.jsx("p",{children:"Discovered Linux operating system and was captivated by its design philosophy. This marked the beginning of my passion for system programming and helped me find my true technical interest."}),x.jsx("div",{className:"journey-icon",children:x.jsx("i",{className:"fab fa-linux"})})]})]}),x.jsxs("div",{className:"journey-item",children:[x.jsx("div",{className:"journey-dot"}),x.jsx("div",{className:"journey-date",children:"Spring 2021"}),x.jsxs("div",{className:"journey-content",children:[x.jsx("h3",{children:"Beginning Computer Science Journey"}),x.jsx("p",{children:"Formally began studying Computer Science and Engineering at university. This marked the start of my systematic exploration of computer science, laying a solid foundation for my future technical pursuits."}),x.jsx("div",{className:"journey-icon",children:x.jsx("i",{className:"fas fa-laptop-code"})})]})]}),x.jsxs("div",{className:"journey-item",children:[x.jsx("div",{className:"journey-dot"}),x.jsx("div",{className:"journey-date",children:"Spring 2021"}),x.jsxs("div",{className:"journey-content",children:[x.jsx("h3",{children:"First Study Abroad Experience"}),x.jsx("p",{children:"Embarked on my first international journey as an international student. This experience not only broadened my academic horizons but also helped me develop independence and cross-cultural understanding while adapting to a new environment."}),x.jsx("div",{className:"journey-icon",children:x.jsx("i",{className:"fas fa-globe-asia"})})]})]}),x.jsxs("div",{className:"journey-item",children:[x.jsx("div",{className:"journey-dot"}),x.jsx("div",{className:"journey-date",children:"Winter 2019"}),x.jsxs("div",{className:"journey-content",children:[x.jsx("h3",{children:"Beginning Independent Living"}),x.jsx("p",{children:"Moved into a new place and started living independently. Learned to manage various aspects of life on my own, enjoying solitude while also gaining a deeper appreciation for time spent with family and friends."}),x.jsx("div",{className:"journey-icon",children:x.jsx("i",{className:"fas fa-home"})})]})]}),x.jsxs("div",{className:"journey-item",children:[x.jsx("div",{className:"journey-dot"}),x.jsx("div",{className:"journey-date",children:"Winter 2018"}),x.jsxs("div",{className:"journey-content",children:[x.jsx("h3",{children:"Billiards: From Beginner to Enthusiast"}),x.jsx("p",{children:"First encountered billiards and was deeply drawn to its precision and strategy. Regular practice became a weekly routine, continuously improving techniques. Through this journey, I learned the importance of patience and focus."}),x.jsx("div",{className:"journey-icon",children:x.jsx("i",{className:"fas fa-circle"})})]})]})]})]})},RS=()=>x.jsxs("section",{className:"container",id:"passions","data-aos":"fade-up",children:[x.jsx("h2",{className:"section-title",children:"My Passions"}),x.jsxs("div",{className:"passion-items-container",children:[x.jsxs("div",{className:"passion-item",children:[x.jsx("div",{className:"passion-images",children:x.jsx("img",{src:"photos/programming.JPG",alt:"Programming",className:"passion-image",loading:"lazy"})}),x.jsxs("div",{className:"passion-description",children:[x.jsx("h3",{children:"Programming"}),x.jsx("p",{children:"I'm passionate about software development and system programming. I enjoy exploring different programming paradigms and technologies to create efficient solutions. Whether it's building high-performance systems, developing web applications, or working on data processing tools, I find great satisfaction in turning complex problems into elegant code."})]}),x.jsx("div",{className:"passion-images",children:x.jsx("img",{src:"photos/coding.JPG",alt:"Coding",className:"passion-image",loading:"lazy"})})]}),x.jsxs("div",{className:"passion-item",children:[x.jsx("div",{className:"passion-images",children:x.jsx("img",{src:"photos/photography.jpg",alt:"Photography",className:"passion-image",loading:"lazy"})}),x.jsxs("div",{className:"passion-description",children:[x.jsx("h3",{children:"Photography"}),x.jsx("p",{children:"Through the lens of my camera, I seek to capture the extraordinary in the ordinary. Photography allows me to explore the interplay of light and shadow, while documenting the subtle beauty that surrounds us. Each frame tells its own story, whether it's the grandeur of architecture or the quiet moments in nature."})]}),x.jsx("div",{className:"passion-images",children:x.jsx("img",{src:"photos/photography2.jpg",alt:"Travel",className:"passion-image",loading:"lazy"})})]}),x.jsxs("div",{className:"passion-item",children:[x.jsx("div",{className:"passion-images",children:x.jsx("img",{src:"photos/billiards.jpg",alt:"Billiards",className:"passion-image",loading:"lazy"})}),x.jsxs("div",{className:"passion-description",children:[x.jsx("h3",{children:"Billiards"}),x.jsx("p",{children:"Billiards represents the perfect blend of precision, strategy, and artistry. Each shot is a puzzle to be solved, requiring careful consideration of angles, force, and position. Beyond the technical aspects, it's a meditative practice that teaches patience and continuous improvement."})]}),x.jsx("div",{className:"passion-images",children:x.jsx("img",{src:"photos/billiards2.jpg",alt:"Billiards",className:"passion-image",loading:"lazy"})})]})]})]});var PS={exports:{}},Qu={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var Fm;function NS(){return Fm||(Fm=1,function(t){(function(e,n){t.exports=e.document?n(e,!0):function(i){if(!i.document)throw new Error("jQuery requires a window with a document");return n(i)}})(typeof window<"u"?window:fh,function(e,n){var i=[],r=Object.getPrototypeOf,s=i.slice,a=i.flat?function(o){return i.flat.call(o)}:function(o){return i.concat.apply([],o)},l=i.push,u=i.indexOf,d={},m=d.toString,g=d.hasOwnProperty,v=g.toString,y=v.call(Object),M={},A=function(c){return typeof c=="function"&&typeof c.nodeType!="number"&&typeof c.item!="function"},E=function(c){return c!=null&&c===c.window},h=e.document,S={type:!0,src:!0,nonce:!0,noModule:!0};function w(o,c,p){p=p||h;var _,T,b=p.createElement("script");if(b.text=o,c)for(_ in S)T=c[_]||c.getAttribute&&c.getAttribute(_),T&&b.setAttribute(_,T);p.head.appendChild(b).parentNode.removeChild(b)}function C(o){return o==null?o+"":typeof o=="object"||typeof o=="function"?d[m.call(o)]||"object":typeof o}var k="3.7.1",I=/HTML$/i,f=function(o,c){return new f.fn.init(o,c)};f.fn=f.prototype={jquery:k,constructor:f,length:0,toArray:function(){return s.call(this)},get:function(o){return o==null?s.call(this):o<0?this[o+this.length]:this[o]},pushStack:function(o){var c=f.merge(this.constructor(),o);return c.prevObject=this,c},each:function(o){return f.each(this,o)},map:function(o){return this.pushStack(f.map(this,function(c,p){return o.call(c,p,c)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(f.grep(this,function(o,c){return(c+1)%2}))},odd:function(){return this.pushStack(f.grep(this,function(o,c){return c%2}))},eq:function(o){var c=this.length,p=+o+(o<0?c:0);return this.pushStack(p>=0&&p<c?[this[p]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:i.sort,splice:i.splice},f.extend=f.fn.extend=function(){var o,c,p,_,T,b,R=arguments[0]||{},j=1,z=arguments.length,X=!1;for(typeof R=="boolean"&&(X=R,R=arguments[j]||{},j++),typeof R!="object"&&!A(R)&&(R={}),j===z&&(R=this,j--);j<z;j++)if((o=arguments[j])!=null)for(c in o)_=o[c],!(c==="__proto__"||R===_)&&(X&&_&&(f.isPlainObject(_)||(T=Array.isArray(_)))?(p=R[c],T&&!Array.isArray(p)?b=[]:!T&&!f.isPlainObject(p)?b={}:b=p,T=!1,R[c]=f.extend(X,b,_)):_!==void 0&&(R[c]=_));return R},f.extend({expando:"jQuery"+(k+Math.random()).replace(/\D/g,""),isReady:!0,error:function(o){throw new Error(o)},noop:function(){},isPlainObject:function(o){var c,p;return!o||m.call(o)!=="[object Object]"?!1:(c=r(o),c?(p=g.call(c,"constructor")&&c.constructor,typeof p=="function"&&v.call(p)===y):!0)},isEmptyObject:function(o){var c;for(c in o)return!1;return!0},globalEval:function(o,c,p){w(o,{nonce:c&&c.nonce},p)},each:function(o,c){var p,_=0;if(B(o))for(p=o.length;_<p&&c.call(o[_],_,o[_])!==!1;_++);else for(_ in o)if(c.call(o[_],_,o[_])===!1)break;return o},text:function(o){var c,p="",_=0,T=o.nodeType;if(!T)for(;c=o[_++];)p+=f.text(c);return T===1||T===11?o.textContent:T===9?o.documentElement.textContent:T===3||T===4?o.nodeValue:p},makeArray:function(o,c){var p=c||[];return o!=null&&(B(Object(o))?f.merge(p,typeof o=="string"?[o]:o):l.call(p,o)),p},inArray:function(o,c,p){return c==null?-1:u.call(c,o,p)},isXMLDoc:function(o){var c=o&&o.namespaceURI,p=o&&(o.ownerDocument||o).documentElement;return!I.test(c||p&&p.nodeName||"HTML")},merge:function(o,c){for(var p=+c.length,_=0,T=o.length;_<p;_++)o[T++]=c[_];return o.length=T,o},grep:function(o,c,p){for(var _,T=[],b=0,R=o.length,j=!p;b<R;b++)_=!c(o[b],b),_!==j&&T.push(o[b]);return T},map:function(o,c,p){var _,T,b=0,R=[];if(B(o))for(_=o.length;b<_;b++)T=c(o[b],b,p),T!=null&&R.push(T);else for(b in o)T=c(o[b],b,p),T!=null&&R.push(T);return a(R)},guid:1,support:M}),typeof Symbol=="function"&&(f.fn[Symbol.iterator]=i[Symbol.iterator]),f.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(o,c){d["[object "+c+"]"]=c.toLowerCase()});function B(o){var c=!!o&&"length"in o&&o.length,p=C(o);return A(o)||E(o)?!1:p==="array"||c===0||typeof c=="number"&&c>0&&c-1 in o}function D(o,c){return o.nodeName&&o.nodeName.toLowerCase()===c.toLowerCase()}var N=i.pop,O=i.sort,q=i.splice,W="[\\x20\\t\\r\\n\\f]",ee=new RegExp("^"+W+"+|((?:^|[^\\\\])(?:\\\\.)*)"+W+"+$","g");f.contains=function(o,c){var p=c&&c.parentNode;return o===p||!!(p&&p.nodeType===1&&(o.contains?o.contains(p):o.compareDocumentPosition&&o.compareDocumentPosition(p)&16))};var he=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function fe(o,c){return c?o==="\0"?"�":o.slice(0,-1)+"\\"+o.charCodeAt(o.length-1).toString(16)+" ":"\\"+o}f.escapeSelector=function(o){return(o+"").replace(he,fe)};var me=h,V=l;(function(){var o,c,p,_,T,b=V,R,j,z,X,ae,pe=f.expando,te=0,Se=0,lt=ll(),Rt=ll(),pt=ll(),En=ll(),dn=function(U,G){return U===G&&(T=!0),0},Ii="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Ui="(?:\\\\[\\da-fA-F]{1,6}"+W+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Tt="\\["+W+"*("+Ui+")(?:"+W+"*([*^$|!~]?=)"+W+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Ui+"))|)"+W+"*\\]",as=":("+Ui+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Tt+")*)|.*)\\)|)",Pt=new RegExp(W+"+","g"),tn=new RegExp("^"+W+"*,"+W+"*"),Ko=new RegExp("^"+W+"*([>+~]|"+W+")"+W+"*"),xu=new RegExp(W+"|>"),Fi=new RegExp(as),Zo=new RegExp("^"+Ui+"$"),ki={ID:new RegExp("^#("+Ui+")"),CLASS:new RegExp("^\\.("+Ui+")"),TAG:new RegExp("^("+Ui+"|[*])"),ATTR:new RegExp("^"+Tt),PSEUDO:new RegExp("^"+as),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+W+"*(even|odd|(([+-]|)(\\d*)n|)"+W+"*(?:([+-]|)"+W+"*(\\d+)|))"+W+"*\\)|)","i"),bool:new RegExp("^(?:"+Ii+")$","i"),needsContext:new RegExp("^"+W+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+W+"*((?:-\\d)?\\d*)"+W+"*\\)|)(?=[^-]|$)","i")},br=/^(?:input|select|textarea|button)$/i,Ar=/^h\d$/i,li=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,yu=/[+~]/,Ki=new RegExp("\\\\[\\da-fA-F]{1,6}"+W+"?|\\\\([^\\r\\n\\f])","g"),Zi=function(U,G){var Q="0x"+U.slice(1)-65536;return G||(Q<0?String.fromCharCode(Q+65536):String.fromCharCode(Q>>10|55296,Q&1023|56320))},jx=function(){Cr()},Vx=ul(function(U){return U.disabled===!0&&D(U,"fieldset")},{dir:"parentNode",next:"legend"});function Gx(){try{return R.activeElement}catch{}}try{b.apply(i=s.call(me.childNodes),me.childNodes),i[me.childNodes.length].nodeType}catch{b={apply:function(G,Q){V.apply(G,s.call(Q))},call:function(G){V.apply(G,s.call(arguments,1))}}}function Bt(U,G,Q,re){var de,Te,Ie,qe,Ue,xt,rt,ut=G&&G.ownerDocument,yt=G?G.nodeType:9;if(Q=Q||[],typeof U!="string"||!U||yt!==1&&yt!==9&&yt!==11)return Q;if(!re&&(Cr(G),G=G||R,z)){if(yt!==11&&(Ue=li.exec(U)))if(de=Ue[1]){if(yt===9)if(Ie=G.getElementById(de)){if(Ie.id===de)return b.call(Q,Ie),Q}else return Q;else if(ut&&(Ie=ut.getElementById(de))&&Bt.contains(G,Ie)&&Ie.id===de)return b.call(Q,Ie),Q}else{if(Ue[2])return b.apply(Q,G.getElementsByTagName(U)),Q;if((de=Ue[3])&&G.getElementsByClassName)return b.apply(Q,G.getElementsByClassName(de)),Q}if(!En[U+" "]&&(!X||!X.test(U))){if(rt=U,ut=G,yt===1&&(xu.test(U)||Ko.test(U))){for(ut=yu.test(U)&&Su(G.parentNode)||G,(ut!=G||!M.scope)&&((qe=G.getAttribute("id"))?qe=f.escapeSelector(qe):G.setAttribute("id",qe=pe)),xt=Qo(U),Te=xt.length;Te--;)xt[Te]=(qe?"#"+qe:":scope")+" "+cl(xt[Te]);rt=xt.join(",")}try{return b.apply(Q,ut.querySelectorAll(rt)),Q}catch{En(U,!0)}finally{qe===pe&&G.removeAttribute("id")}}}return bp(U.replace(ee,"$1"),G,Q,re)}function ll(){var U=[];function G(Q,re){return U.push(Q+" ")>c.cacheLength&&delete G[U.shift()],G[Q+" "]=re}return G}function yi(U){return U[pe]=!0,U}function Hs(U){var G=R.createElement("fieldset");try{return!!U(G)}catch{return!1}finally{G.parentNode&&G.parentNode.removeChild(G),G=null}}function Wx(U){return function(G){return D(G,"input")&&G.type===U}}function Xx(U){return function(G){return(D(G,"input")||D(G,"button"))&&G.type===U}}function wp(U){return function(G){return"form"in G?G.parentNode&&G.disabled===!1?"label"in G?"label"in G.parentNode?G.parentNode.disabled===U:G.disabled===U:G.isDisabled===U||G.isDisabled!==!U&&Vx(G)===U:G.disabled===U:"label"in G?G.disabled===U:!1}}function ls(U){return yi(function(G){return G=+G,yi(function(Q,re){for(var de,Te=U([],Q.length,G),Ie=Te.length;Ie--;)Q[de=Te[Ie]]&&(Q[de]=!(re[de]=Q[de]))})})}function Su(U){return U&&typeof U.getElementsByTagName<"u"&&U}function Cr(U){var G,Q=U?U.ownerDocument||U:me;return Q==R||Q.nodeType!==9||!Q.documentElement||(R=Q,j=R.documentElement,z=!f.isXMLDoc(R),ae=j.matches||j.webkitMatchesSelector||j.msMatchesSelector,j.msMatchesSelector&&me!=R&&(G=R.defaultView)&&G.top!==G&&G.addEventListener("unload",jx),M.getById=Hs(function(re){return j.appendChild(re).id=f.expando,!R.getElementsByName||!R.getElementsByName(f.expando).length}),M.disconnectedMatch=Hs(function(re){return ae.call(re,"*")}),M.scope=Hs(function(){return R.querySelectorAll(":scope")}),M.cssHas=Hs(function(){try{return R.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),M.getById?(c.filter.ID=function(re){var de=re.replace(Ki,Zi);return function(Te){return Te.getAttribute("id")===de}},c.find.ID=function(re,de){if(typeof de.getElementById<"u"&&z){var Te=de.getElementById(re);return Te?[Te]:[]}}):(c.filter.ID=function(re){var de=re.replace(Ki,Zi);return function(Te){var Ie=typeof Te.getAttributeNode<"u"&&Te.getAttributeNode("id");return Ie&&Ie.value===de}},c.find.ID=function(re,de){if(typeof de.getElementById<"u"&&z){var Te,Ie,qe,Ue=de.getElementById(re);if(Ue){if(Te=Ue.getAttributeNode("id"),Te&&Te.value===re)return[Ue];for(qe=de.getElementsByName(re),Ie=0;Ue=qe[Ie++];)if(Te=Ue.getAttributeNode("id"),Te&&Te.value===re)return[Ue]}return[]}}),c.find.TAG=function(re,de){return typeof de.getElementsByTagName<"u"?de.getElementsByTagName(re):de.querySelectorAll(re)},c.find.CLASS=function(re,de){if(typeof de.getElementsByClassName<"u"&&z)return de.getElementsByClassName(re)},X=[],Hs(function(re){var de;j.appendChild(re).innerHTML="<a id='"+pe+"' href='' disabled='disabled'></a><select id='"+pe+"-\r\\' disabled='disabled'><option selected=''></option></select>",re.querySelectorAll("[selected]").length||X.push("\\["+W+"*(?:value|"+Ii+")"),re.querySelectorAll("[id~="+pe+"-]").length||X.push("~="),re.querySelectorAll("a#"+pe+"+*").length||X.push(".#.+[+~]"),re.querySelectorAll(":checked").length||X.push(":checked"),de=R.createElement("input"),de.setAttribute("type","hidden"),re.appendChild(de).setAttribute("name","D"),j.appendChild(re).disabled=!0,re.querySelectorAll(":disabled").length!==2&&X.push(":enabled",":disabled"),de=R.createElement("input"),de.setAttribute("name",""),re.appendChild(de),re.querySelectorAll("[name='']").length||X.push("\\["+W+"*name"+W+"*="+W+`*(?:''|"")`)}),M.cssHas||X.push(":has"),X=X.length&&new RegExp(X.join("|")),dn=function(re,de){if(re===de)return T=!0,0;var Te=!re.compareDocumentPosition-!de.compareDocumentPosition;return Te||(Te=(re.ownerDocument||re)==(de.ownerDocument||de)?re.compareDocumentPosition(de):1,Te&1||!M.sortDetached&&de.compareDocumentPosition(re)===Te?re===R||re.ownerDocument==me&&Bt.contains(me,re)?-1:de===R||de.ownerDocument==me&&Bt.contains(me,de)?1:_?u.call(_,re)-u.call(_,de):0:Te&4?-1:1)}),R}Bt.matches=function(U,G){return Bt(U,null,null,G)},Bt.matchesSelector=function(U,G){if(Cr(U),z&&!En[G+" "]&&(!X||!X.test(G)))try{var Q=ae.call(U,G);if(Q||M.disconnectedMatch||U.document&&U.document.nodeType!==11)return Q}catch{En(G,!0)}return Bt(G,R,null,[U]).length>0},Bt.contains=function(U,G){return(U.ownerDocument||U)!=R&&Cr(U),f.contains(U,G)},Bt.attr=function(U,G){(U.ownerDocument||U)!=R&&Cr(U);var Q=c.attrHandle[G.toLowerCase()],re=Q&&g.call(c.attrHandle,G.toLowerCase())?Q(U,G,!z):void 0;return re!==void 0?re:U.getAttribute(G)},Bt.error=function(U){throw new Error("Syntax error, unrecognized expression: "+U)},f.uniqueSort=function(U){var G,Q=[],re=0,de=0;if(T=!M.sortStable,_=!M.sortStable&&s.call(U,0),O.call(U,dn),T){for(;G=U[de++];)G===U[de]&&(re=Q.push(de));for(;re--;)q.call(U,Q[re],1)}return _=null,U},f.fn.uniqueSort=function(){return this.pushStack(f.uniqueSort(s.apply(this)))},c=f.expr={cacheLength:50,createPseudo:yi,match:ki,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(U){return U[1]=U[1].replace(Ki,Zi),U[3]=(U[3]||U[4]||U[5]||"").replace(Ki,Zi),U[2]==="~="&&(U[3]=" "+U[3]+" "),U.slice(0,4)},CHILD:function(U){return U[1]=U[1].toLowerCase(),U[1].slice(0,3)==="nth"?(U[3]||Bt.error(U[0]),U[4]=+(U[4]?U[5]+(U[6]||1):2*(U[3]==="even"||U[3]==="odd")),U[5]=+(U[7]+U[8]||U[3]==="odd")):U[3]&&Bt.error(U[0]),U},PSEUDO:function(U){var G,Q=!U[6]&&U[2];return ki.CHILD.test(U[0])?null:(U[3]?U[2]=U[4]||U[5]||"":Q&&Fi.test(Q)&&(G=Qo(Q,!0))&&(G=Q.indexOf(")",Q.length-G)-Q.length)&&(U[0]=U[0].slice(0,G),U[2]=Q.slice(0,G)),U.slice(0,3))}},filter:{TAG:function(U){var G=U.replace(Ki,Zi).toLowerCase();return U==="*"?function(){return!0}:function(Q){return D(Q,G)}},CLASS:function(U){var G=lt[U+" "];return G||(G=new RegExp("(^|"+W+")"+U+"("+W+"|$)"))&&lt(U,function(Q){return G.test(typeof Q.className=="string"&&Q.className||typeof Q.getAttribute<"u"&&Q.getAttribute("class")||"")})},ATTR:function(U,G,Q){return function(re){var de=Bt.attr(re,U);return de==null?G==="!=":G?(de+="",G==="="?de===Q:G==="!="?de!==Q:G==="^="?Q&&de.indexOf(Q)===0:G==="*="?Q&&de.indexOf(Q)>-1:G==="$="?Q&&de.slice(-Q.length)===Q:G==="~="?(" "+de.replace(Pt," ")+" ").indexOf(Q)>-1:G==="|="?de===Q||de.slice(0,Q.length+1)===Q+"-":!1):!0}},CHILD:function(U,G,Q,re,de){var Te=U.slice(0,3)!=="nth",Ie=U.slice(-4)!=="last",qe=G==="of-type";return re===1&&de===0?function(Ue){return!!Ue.parentNode}:function(Ue,xt,rt){var ut,yt,tt,Wt,jn,bn=Te!==Ie?"nextSibling":"previousSibling",ci=Ue.parentNode,Oi=qe&&Ue.nodeName.toLowerCase(),js=!rt&&!qe,In=!1;if(ci){if(Te){for(;bn;){for(tt=Ue;tt=tt[bn];)if(qe?D(tt,Oi):tt.nodeType===1)return!1;jn=bn=U==="only"&&!jn&&"nextSibling"}return!0}if(jn=[Ie?ci.firstChild:ci.lastChild],Ie&&js){for(yt=ci[pe]||(ci[pe]={}),ut=yt[U]||[],Wt=ut[0]===te&&ut[1],In=Wt&&ut[2],tt=Wt&&ci.childNodes[Wt];tt=++Wt&&tt&&tt[bn]||(In=Wt=0)||jn.pop();)if(tt.nodeType===1&&++In&&tt===Ue){yt[U]=[te,Wt,In];break}}else if(js&&(yt=Ue[pe]||(Ue[pe]={}),ut=yt[U]||[],Wt=ut[0]===te&&ut[1],In=Wt),In===!1)for(;(tt=++Wt&&tt&&tt[bn]||(In=Wt=0)||jn.pop())&&!((qe?D(tt,Oi):tt.nodeType===1)&&++In&&(js&&(yt=tt[pe]||(tt[pe]={}),yt[U]=[te,In]),tt===Ue)););return In-=de,In===re||In%re===0&&In/re>=0}}},PSEUDO:function(U,G){var Q,re=c.pseudos[U]||c.setFilters[U.toLowerCase()]||Bt.error("unsupported pseudo: "+U);return re[pe]?re(G):re.length>1?(Q=[U,U,"",G],c.setFilters.hasOwnProperty(U.toLowerCase())?yi(function(de,Te){for(var Ie,qe=re(de,G),Ue=qe.length;Ue--;)Ie=u.call(de,qe[Ue]),de[Ie]=!(Te[Ie]=qe[Ue])}):function(de){return re(de,0,Q)}):re}},pseudos:{not:yi(function(U){var G=[],Q=[],re=Tu(U.replace(ee,"$1"));return re[pe]?yi(function(de,Te,Ie,qe){for(var Ue,xt=re(de,null,qe,[]),rt=de.length;rt--;)(Ue=xt[rt])&&(de[rt]=!(Te[rt]=Ue))}):function(de,Te,Ie){return G[0]=de,re(G,null,Ie,Q),G[0]=null,!Q.pop()}}),has:yi(function(U){return function(G){return Bt(U,G).length>0}}),contains:yi(function(U){return U=U.replace(Ki,Zi),function(G){return(G.textContent||f.text(G)).indexOf(U)>-1}}),lang:yi(function(U){return Zo.test(U||"")||Bt.error("unsupported lang: "+U),U=U.replace(Ki,Zi).toLowerCase(),function(G){var Q;do if(Q=z?G.lang:G.getAttribute("xml:lang")||G.getAttribute("lang"))return Q=Q.toLowerCase(),Q===U||Q.indexOf(U+"-")===0;while((G=G.parentNode)&&G.nodeType===1);return!1}}),target:function(U){var G=e.location&&e.location.hash;return G&&G.slice(1)===U.id},root:function(U){return U===j},focus:function(U){return U===Gx()&&R.hasFocus()&&!!(U.type||U.href||~U.tabIndex)},enabled:wp(!1),disabled:wp(!0),checked:function(U){return D(U,"input")&&!!U.checked||D(U,"option")&&!!U.selected},selected:function(U){return U.parentNode&&U.parentNode.selectedIndex,U.selected===!0},empty:function(U){for(U=U.firstChild;U;U=U.nextSibling)if(U.nodeType<6)return!1;return!0},parent:function(U){return!c.pseudos.empty(U)},header:function(U){return Ar.test(U.nodeName)},input:function(U){return br.test(U.nodeName)},button:function(U){return D(U,"input")&&U.type==="button"||D(U,"button")},text:function(U){var G;return D(U,"input")&&U.type==="text"&&((G=U.getAttribute("type"))==null||G.toLowerCase()==="text")},first:ls(function(){return[0]}),last:ls(function(U,G){return[G-1]}),eq:ls(function(U,G,Q){return[Q<0?Q+G:Q]}),even:ls(function(U,G){for(var Q=0;Q<G;Q+=2)U.push(Q);return U}),odd:ls(function(U,G){for(var Q=1;Q<G;Q+=2)U.push(Q);return U}),lt:ls(function(U,G,Q){var re;for(Q<0?re=Q+G:Q>G?re=G:re=Q;--re>=0;)U.push(re);return U}),gt:ls(function(U,G,Q){for(var re=Q<0?Q+G:Q;++re<G;)U.push(re);return U})}},c.pseudos.nth=c.pseudos.eq;for(o in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})c.pseudos[o]=Wx(o);for(o in{submit:!0,reset:!0})c.pseudos[o]=Xx(o);function Tp(){}Tp.prototype=c.filters=c.pseudos,c.setFilters=new Tp;function Qo(U,G){var Q,re,de,Te,Ie,qe,Ue,xt=Rt[U+" "];if(xt)return G?0:xt.slice(0);for(Ie=U,qe=[],Ue=c.preFilter;Ie;){(!Q||(re=tn.exec(Ie)))&&(re&&(Ie=Ie.slice(re[0].length)||Ie),qe.push(de=[])),Q=!1,(re=Ko.exec(Ie))&&(Q=re.shift(),de.push({value:Q,type:re[0].replace(ee," ")}),Ie=Ie.slice(Q.length));for(Te in c.filter)(re=ki[Te].exec(Ie))&&(!Ue[Te]||(re=Ue[Te](re)))&&(Q=re.shift(),de.push({value:Q,type:Te,matches:re}),Ie=Ie.slice(Q.length));if(!Q)break}return G?Ie.length:Ie?Bt.error(U):Rt(U,qe).slice(0)}function cl(U){for(var G=0,Q=U.length,re="";G<Q;G++)re+=U[G].value;return re}function ul(U,G,Q){var re=G.dir,de=G.next,Te=de||re,Ie=Q&&Te==="parentNode",qe=Se++;return G.first?function(Ue,xt,rt){for(;Ue=Ue[re];)if(Ue.nodeType===1||Ie)return U(Ue,xt,rt);return!1}:function(Ue,xt,rt){var ut,yt,tt=[te,qe];if(rt){for(;Ue=Ue[re];)if((Ue.nodeType===1||Ie)&&U(Ue,xt,rt))return!0}else for(;Ue=Ue[re];)if(Ue.nodeType===1||Ie)if(yt=Ue[pe]||(Ue[pe]={}),de&&D(Ue,de))Ue=Ue[re]||Ue;else{if((ut=yt[Te])&&ut[0]===te&&ut[1]===qe)return tt[2]=ut[2];if(yt[Te]=tt,tt[2]=U(Ue,xt,rt))return!0}return!1}}function Eu(U){return U.length>1?function(G,Q,re){for(var de=U.length;de--;)if(!U[de](G,Q,re))return!1;return!0}:U[0]}function qx(U,G,Q){for(var re=0,de=G.length;re<de;re++)Bt(U,G[re],Q);return Q}function fl(U,G,Q,re,de){for(var Te,Ie=[],qe=0,Ue=U.length,xt=G!=null;qe<Ue;qe++)(Te=U[qe])&&(!Q||Q(Te,re,de))&&(Ie.push(Te),xt&&G.push(qe));return Ie}function Mu(U,G,Q,re,de,Te){return re&&!re[pe]&&(re=Mu(re)),de&&!de[pe]&&(de=Mu(de,Te)),yi(function(Ie,qe,Ue,xt){var rt,ut,yt,tt,Wt=[],jn=[],bn=qe.length,ci=Ie||qx(G||"*",Ue.nodeType?[Ue]:Ue,[]),Oi=U&&(Ie||!G)?fl(ci,Wt,U,Ue,xt):ci;if(Q?(tt=de||(Ie?U:bn||re)?[]:qe,Q(Oi,tt,Ue,xt)):tt=Oi,re)for(rt=fl(tt,jn),re(rt,[],Ue,xt),ut=rt.length;ut--;)(yt=rt[ut])&&(tt[jn[ut]]=!(Oi[jn[ut]]=yt));if(Ie){if(de||U){if(de){for(rt=[],ut=tt.length;ut--;)(yt=tt[ut])&&rt.push(Oi[ut]=yt);de(null,tt=[],rt,xt)}for(ut=tt.length;ut--;)(yt=tt[ut])&&(rt=de?u.call(Ie,yt):Wt[ut])>-1&&(Ie[rt]=!(qe[rt]=yt))}}else tt=fl(tt===qe?tt.splice(bn,tt.length):tt),de?de(null,qe,tt,xt):b.apply(qe,tt)})}function wu(U){for(var G,Q,re,de=U.length,Te=c.relative[U[0].type],Ie=Te||c.relative[" "],qe=Te?1:0,Ue=ul(function(ut){return ut===G},Ie,!0),xt=ul(function(ut){return u.call(G,ut)>-1},Ie,!0),rt=[function(ut,yt,tt){var Wt=!Te&&(tt||yt!=p)||((G=yt).nodeType?Ue(ut,yt,tt):xt(ut,yt,tt));return G=null,Wt}];qe<de;qe++)if(Q=c.relative[U[qe].type])rt=[ul(Eu(rt),Q)];else{if(Q=c.filter[U[qe].type].apply(null,U[qe].matches),Q[pe]){for(re=++qe;re<de&&!c.relative[U[re].type];re++);return Mu(qe>1&&Eu(rt),qe>1&&cl(U.slice(0,qe-1).concat({value:U[qe-2].type===" "?"*":""})).replace(ee,"$1"),Q,qe<re&&wu(U.slice(qe,re)),re<de&&wu(U=U.slice(re)),re<de&&cl(U))}rt.push(Q)}return Eu(rt)}function $x(U,G){var Q=G.length>0,re=U.length>0,de=function(Te,Ie,qe,Ue,xt){var rt,ut,yt,tt=0,Wt="0",jn=Te&&[],bn=[],ci=p,Oi=Te||re&&c.find.TAG("*",xt),js=te+=ci==null?1:Math.random()||.1,In=Oi.length;for(xt&&(p=Ie==R||Ie||xt);Wt!==In&&(rt=Oi[Wt])!=null;Wt++){if(re&&rt){for(ut=0,!Ie&&rt.ownerDocument!=R&&(Cr(rt),qe=!z);yt=U[ut++];)if(yt(rt,Ie||R,qe)){b.call(Ue,rt);break}xt&&(te=js)}Q&&((rt=!yt&&rt)&&tt--,Te&&jn.push(rt))}if(tt+=Wt,Q&&Wt!==tt){for(ut=0;yt=G[ut++];)yt(jn,bn,Ie,qe);if(Te){if(tt>0)for(;Wt--;)jn[Wt]||bn[Wt]||(bn[Wt]=N.call(Ue));bn=fl(bn)}b.apply(Ue,bn),xt&&!Te&&bn.length>0&&tt+G.length>1&&f.uniqueSort(Ue)}return xt&&(te=js,p=ci),jn};return Q?yi(de):de}function Tu(U,G){var Q,re=[],de=[],Te=pt[U+" "];if(!Te){for(G||(G=Qo(U)),Q=G.length;Q--;)Te=wu(G[Q]),Te[pe]?re.push(Te):de.push(Te);Te=pt(U,$x(de,re)),Te.selector=U}return Te}function bp(U,G,Q,re){var de,Te,Ie,qe,Ue,xt=typeof U=="function"&&U,rt=!re&&Qo(U=xt.selector||U);if(Q=Q||[],rt.length===1){if(Te=rt[0]=rt[0].slice(0),Te.length>2&&(Ie=Te[0]).type==="ID"&&G.nodeType===9&&z&&c.relative[Te[1].type]){if(G=(c.find.ID(Ie.matches[0].replace(Ki,Zi),G)||[])[0],G)xt&&(G=G.parentNode);else return Q;U=U.slice(Te.shift().value.length)}for(de=ki.needsContext.test(U)?0:Te.length;de--&&(Ie=Te[de],!c.relative[qe=Ie.type]);)if((Ue=c.find[qe])&&(re=Ue(Ie.matches[0].replace(Ki,Zi),yu.test(Te[0].type)&&Su(G.parentNode)||G))){if(Te.splice(de,1),U=re.length&&cl(Te),!U)return b.apply(Q,re),Q;break}}return(xt||Tu(U,rt))(re,G,!z,Q,!G||yu.test(U)&&Su(G.parentNode)||G),Q}M.sortStable=pe.split("").sort(dn).join("")===pe,Cr(),M.sortDetached=Hs(function(U){return U.compareDocumentPosition(R.createElement("fieldset"))&1}),f.find=Bt,f.expr[":"]=f.expr.pseudos,f.unique=f.uniqueSort,Bt.compile=Tu,Bt.select=bp,Bt.setDocument=Cr,Bt.tokenize=Qo,Bt.escape=f.escapeSelector,Bt.getText=f.text,Bt.isXML=f.isXMLDoc,Bt.selectors=f.expr,Bt.support=f.support,Bt.uniqueSort=f.uniqueSort})();var ce=function(o,c,p){for(var _=[],T=p!==void 0;(o=o[c])&&o.nodeType!==9;)if(o.nodeType===1){if(T&&f(o).is(p))break;_.push(o)}return _},_e=function(o,c){for(var p=[];o;o=o.nextSibling)o.nodeType===1&&o!==c&&p.push(o);return p},be=f.expr.match.needsContext,Ge=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function st(o,c,p){return A(c)?f.grep(o,function(_,T){return!!c.call(_,T,_)!==p}):c.nodeType?f.grep(o,function(_){return _===c!==p}):typeof c!="string"?f.grep(o,function(_){return u.call(c,_)>-1!==p}):f.filter(c,o,p)}f.filter=function(o,c,p){var _=c[0];return p&&(o=":not("+o+")"),c.length===1&&_.nodeType===1?f.find.matchesSelector(_,o)?[_]:[]:f.find.matches(o,f.grep(c,function(T){return T.nodeType===1}))},f.fn.extend({find:function(o){var c,p,_=this.length,T=this;if(typeof o!="string")return this.pushStack(f(o).filter(function(){for(c=0;c<_;c++)if(f.contains(T[c],this))return!0}));for(p=this.pushStack([]),c=0;c<_;c++)f.find(o,T[c],p);return _>1?f.uniqueSort(p):p},filter:function(o){return this.pushStack(st(this,o||[],!1))},not:function(o){return this.pushStack(st(this,o||[],!0))},is:function(o){return!!st(this,typeof o=="string"&&be.test(o)?f(o):o||[],!1).length}});var oe,xe=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Ae=f.fn.init=function(o,c,p){var _,T;if(!o)return this;if(p=p||oe,typeof o=="string")if(o[0]==="<"&&o[o.length-1]===">"&&o.length>=3?_=[null,o,null]:_=xe.exec(o),_&&(_[1]||!c))if(_[1]){if(c=c instanceof f?c[0]:c,f.merge(this,f.parseHTML(_[1],c&&c.nodeType?c.ownerDocument||c:h,!0)),Ge.test(_[1])&&f.isPlainObject(c))for(_ in c)A(this[_])?this[_](c[_]):this.attr(_,c[_]);return this}else return T=h.getElementById(_[2]),T&&(this[0]=T,this.length=1),this;else return!c||c.jquery?(c||p).find(o):this.constructor(c).find(o);else{if(o.nodeType)return this[0]=o,this.length=1,this;if(A(o))return p.ready!==void 0?p.ready(o):o(f)}return f.makeArray(o,this)};Ae.prototype=f.fn,oe=f(h);var ye=/^(?:parents|prev(?:Until|All))/,Fe={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({has:function(o){var c=f(o,this),p=c.length;return this.filter(function(){for(var _=0;_<p;_++)if(f.contains(this,c[_]))return!0})},closest:function(o,c){var p,_=0,T=this.length,b=[],R=typeof o!="string"&&f(o);if(!be.test(o)){for(;_<T;_++)for(p=this[_];p&&p!==c;p=p.parentNode)if(p.nodeType<11&&(R?R.index(p)>-1:p.nodeType===1&&f.find.matchesSelector(p,o))){b.push(p);break}}return this.pushStack(b.length>1?f.uniqueSort(b):b)},index:function(o){return o?typeof o=="string"?u.call(f(o),this[0]):u.call(this,o.jquery?o[0]:o):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(o,c){return this.pushStack(f.uniqueSort(f.merge(this.get(),f(o,c))))},addBack:function(o){return this.add(o==null?this.prevObject:this.prevObject.filter(o))}});function nt(o,c){for(;(o=o[c])&&o.nodeType!==1;);return o}f.each({parent:function(o){var c=o.parentNode;return c&&c.nodeType!==11?c:null},parents:function(o){return ce(o,"parentNode")},parentsUntil:function(o,c,p){return ce(o,"parentNode",p)},next:function(o){return nt(o,"nextSibling")},prev:function(o){return nt(o,"previousSibling")},nextAll:function(o){return ce(o,"nextSibling")},prevAll:function(o){return ce(o,"previousSibling")},nextUntil:function(o,c,p){return ce(o,"nextSibling",p)},prevUntil:function(o,c,p){return ce(o,"previousSibling",p)},siblings:function(o){return _e((o.parentNode||{}).firstChild,o)},children:function(o){return _e(o.firstChild)},contents:function(o){return o.contentDocument!=null&&r(o.contentDocument)?o.contentDocument:(D(o,"template")&&(o=o.content||o),f.merge([],o.childNodes))}},function(o,c){f.fn[o]=function(p,_){var T=f.map(this,c,p);return o.slice(-5)!=="Until"&&(_=p),_&&typeof _=="string"&&(T=f.filter(_,T)),this.length>1&&(Fe[o]||f.uniqueSort(T),ye.test(o)&&T.reverse()),this.pushStack(T)}});var He=/[^\x20\t\r\n\f]+/g;function Lt(o){var c={};return f.each(o.match(He)||[],function(p,_){c[_]=!0}),c}f.Callbacks=function(o){o=typeof o=="string"?Lt(o):f.extend({},o);var c,p,_,T,b=[],R=[],j=-1,z=function(){for(T=T||o.once,_=c=!0;R.length;j=-1)for(p=R.shift();++j<b.length;)b[j].apply(p[0],p[1])===!1&&o.stopOnFalse&&(j=b.length,p=!1);o.memory||(p=!1),c=!1,T&&(p?b=[]:b="")},X={add:function(){return b&&(p&&!c&&(j=b.length-1,R.push(p)),function ae(pe){f.each(pe,function(te,Se){A(Se)?(!o.unique||!X.has(Se))&&b.push(Se):Se&&Se.length&&C(Se)!=="string"&&ae(Se)})}(arguments),p&&!c&&z()),this},remove:function(){return f.each(arguments,function(ae,pe){for(var te;(te=f.inArray(pe,b,te))>-1;)b.splice(te,1),te<=j&&j--}),this},has:function(ae){return ae?f.inArray(ae,b)>-1:b.length>0},empty:function(){return b&&(b=[]),this},disable:function(){return T=R=[],b=p="",this},disabled:function(){return!b},lock:function(){return T=R=[],!p&&!c&&(b=p=""),this},locked:function(){return!!T},fireWith:function(ae,pe){return T||(pe=pe||[],pe=[ae,pe.slice?pe.slice():pe],R.push(pe),c||z()),this},fire:function(){return X.fireWith(this,arguments),this},fired:function(){return!!_}};return X};function ht(o){return o}function We(o){throw o}function H(o,c,p,_){var T;try{o&&A(T=o.promise)?T.call(o).done(c).fail(p):o&&A(T=o.then)?T.call(o,c,p):c.apply(void 0,[o].slice(_))}catch(b){p.apply(void 0,[b])}}f.extend({Deferred:function(o){var c=[["notify","progress",f.Callbacks("memory"),f.Callbacks("memory"),2],["resolve","done",f.Callbacks("once memory"),f.Callbacks("once memory"),0,"resolved"],["reject","fail",f.Callbacks("once memory"),f.Callbacks("once memory"),1,"rejected"]],p="pending",_={state:function(){return p},always:function(){return T.done(arguments).fail(arguments),this},catch:function(b){return _.then(null,b)},pipe:function(){var b=arguments;return f.Deferred(function(R){f.each(c,function(j,z){var X=A(b[z[4]])&&b[z[4]];T[z[1]](function(){var ae=X&&X.apply(this,arguments);ae&&A(ae.promise)?ae.promise().progress(R.notify).done(R.resolve).fail(R.reject):R[z[0]+"With"](this,X?[ae]:arguments)})}),b=null}).promise()},then:function(b,R,j){var z=0;function X(ae,pe,te,Se){return function(){var lt=this,Rt=arguments,pt=function(){var dn,Ii;if(!(ae<z)){if(dn=te.apply(lt,Rt),dn===pe.promise())throw new TypeError("Thenable self-resolution");Ii=dn&&(typeof dn=="object"||typeof dn=="function")&&dn.then,A(Ii)?Se?Ii.call(dn,X(z,pe,ht,Se),X(z,pe,We,Se)):(z++,Ii.call(dn,X(z,pe,ht,Se),X(z,pe,We,Se),X(z,pe,ht,pe.notifyWith))):(te!==ht&&(lt=void 0,Rt=[dn]),(Se||pe.resolveWith)(lt,Rt))}},En=Se?pt:function(){try{pt()}catch(dn){f.Deferred.exceptionHook&&f.Deferred.exceptionHook(dn,En.error),ae+1>=z&&(te!==We&&(lt=void 0,Rt=[dn]),pe.rejectWith(lt,Rt))}};ae?En():(f.Deferred.getErrorHook?En.error=f.Deferred.getErrorHook():f.Deferred.getStackHook&&(En.error=f.Deferred.getStackHook()),e.setTimeout(En))}}return f.Deferred(function(ae){c[0][3].add(X(0,ae,A(j)?j:ht,ae.notifyWith)),c[1][3].add(X(0,ae,A(b)?b:ht)),c[2][3].add(X(0,ae,A(R)?R:We))}).promise()},promise:function(b){return b!=null?f.extend(b,_):_}},T={};return f.each(c,function(b,R){var j=R[2],z=R[5];_[R[1]]=j.add,z&&j.add(function(){p=z},c[3-b][2].disable,c[3-b][3].disable,c[0][2].lock,c[0][3].lock),j.add(R[3].fire),T[R[0]]=function(){return T[R[0]+"With"](this===T?void 0:this,arguments),this},T[R[0]+"With"]=j.fireWith}),_.promise(T),o&&o.call(T,T),T},when:function(o){var c=arguments.length,p=c,_=Array(p),T=s.call(arguments),b=f.Deferred(),R=function(j){return function(z){_[j]=this,T[j]=arguments.length>1?s.call(arguments):z,--c||b.resolveWith(_,T)}};if(c<=1&&(H(o,b.done(R(p)).resolve,b.reject,!c),b.state()==="pending"||A(T[p]&&T[p].then)))return b.then();for(;p--;)H(T[p],R(p),b.reject);return b.promise()}});var kt=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;f.Deferred.exceptionHook=function(o,c){e.console&&e.console.warn&&o&&kt.test(o.name)&&e.console.warn("jQuery.Deferred exception: "+o.message,o.stack,c)},f.readyException=function(o){e.setTimeout(function(){throw o})};var at=f.Deferred();f.fn.ready=function(o){return at.then(o).catch(function(c){f.readyException(c)}),this},f.extend({isReady:!1,readyWait:1,ready:function(o){(o===!0?--f.readyWait:f.isReady)||(f.isReady=!0,!(o!==!0&&--f.readyWait>0)&&at.resolveWith(h,[f]))}}),f.ready.then=at.then;function ft(){h.removeEventListener("DOMContentLoaded",ft),e.removeEventListener("load",ft),f.ready()}h.readyState==="complete"||h.readyState!=="loading"&&!h.documentElement.doScroll?e.setTimeout(f.ready):(h.addEventListener("DOMContentLoaded",ft),e.addEventListener("load",ft));var Xe=function(o,c,p,_,T,b,R){var j=0,z=o.length,X=p==null;if(C(p)==="object"){T=!0;for(j in p)Xe(o,c,j,p[j],!0,b,R)}else if(_!==void 0&&(T=!0,A(_)||(R=!0),X&&(R?(c.call(o,_),c=null):(X=c,c=function(ae,pe,te){return X.call(f(ae),te)})),c))for(;j<z;j++)c(o[j],p,R?_:_.call(o[j],j,c(o[j],p)));return T?o:X?c.call(o):z?c(o[0],p):b},Vt=/^-ms-/,Ke=/-([a-z])/g;function F(o,c){return c.toUpperCase()}function P(o){return o.replace(Vt,"ms-").replace(Ke,F)}var J=function(o){return o.nodeType===1||o.nodeType===9||!+o.nodeType};function ge(){this.expando=f.expando+ge.uid++}ge.uid=1,ge.prototype={cache:function(o){var c=o[this.expando];return c||(c={},J(o)&&(o.nodeType?o[this.expando]=c:Object.defineProperty(o,this.expando,{value:c,configurable:!0}))),c},set:function(o,c,p){var _,T=this.cache(o);if(typeof c=="string")T[P(c)]=p;else for(_ in c)T[P(_)]=c[_];return T},get:function(o,c){return c===void 0?this.cache(o):o[this.expando]&&o[this.expando][P(c)]},access:function(o,c,p){return c===void 0||c&&typeof c=="string"&&p===void 0?this.get(o,c):(this.set(o,c,p),p!==void 0?p:c)},remove:function(o,c){var p,_=o[this.expando];if(_!==void 0){if(c!==void 0)for(Array.isArray(c)?c=c.map(P):(c=P(c),c=c in _?[c]:c.match(He)||[]),p=c.length;p--;)delete _[c[p]];(c===void 0||f.isEmptyObject(_))&&(o.nodeType?o[this.expando]=void 0:delete o[this.expando])}},hasData:function(o){var c=o[this.expando];return c!==void 0&&!f.isEmptyObject(c)}};var Z=new ge,ue=new ge,$e=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ne=/[A-Z]/g;function je(o){return o==="true"?!0:o==="false"?!1:o==="null"?null:o===+o+""?+o:$e.test(o)?JSON.parse(o):o}function Et(o,c,p){var _;if(p===void 0&&o.nodeType===1)if(_="data-"+c.replace(Ne,"-$&").toLowerCase(),p=o.getAttribute(_),typeof p=="string"){try{p=je(p)}catch{}ue.set(o,c,p)}else p=void 0;return p}f.extend({hasData:function(o){return ue.hasData(o)||Z.hasData(o)},data:function(o,c,p){return ue.access(o,c,p)},removeData:function(o,c){ue.remove(o,c)},_data:function(o,c,p){return Z.access(o,c,p)},_removeData:function(o,c){Z.remove(o,c)}}),f.fn.extend({data:function(o,c){var p,_,T,b=this[0],R=b&&b.attributes;if(o===void 0){if(this.length&&(T=ue.get(b),b.nodeType===1&&!Z.get(b,"hasDataAttrs"))){for(p=R.length;p--;)R[p]&&(_=R[p].name,_.indexOf("data-")===0&&(_=P(_.slice(5)),Et(b,_,T[_])));Z.set(b,"hasDataAttrs",!0)}return T}return typeof o=="object"?this.each(function(){ue.set(this,o)}):Xe(this,function(j){var z;if(b&&j===void 0)return z=ue.get(b,o),z!==void 0||(z=Et(b,o),z!==void 0)?z:void 0;this.each(function(){ue.set(this,o,j)})},null,c,arguments.length>1,null,!0)},removeData:function(o){return this.each(function(){ue.remove(this,o)})}}),f.extend({queue:function(o,c,p){var _;if(o)return c=(c||"fx")+"queue",_=Z.get(o,c),p&&(!_||Array.isArray(p)?_=Z.access(o,c,f.makeArray(p)):_.push(p)),_||[]},dequeue:function(o,c){c=c||"fx";var p=f.queue(o,c),_=p.length,T=p.shift(),b=f._queueHooks(o,c),R=function(){f.dequeue(o,c)};T==="inprogress"&&(T=p.shift(),_--),T&&(c==="fx"&&p.unshift("inprogress"),delete b.stop,T.call(o,R,b)),!_&&b&&b.empty.fire()},_queueHooks:function(o,c){var p=c+"queueHooks";return Z.get(o,p)||Z.access(o,p,{empty:f.Callbacks("once memory").add(function(){Z.remove(o,[c+"queue",p])})})}}),f.fn.extend({queue:function(o,c){var p=2;return typeof o!="string"&&(c=o,o="fx",p--),arguments.length<p?f.queue(this[0],o):c===void 0?this:this.each(function(){var _=f.queue(this,o,c);f._queueHooks(this,o),o==="fx"&&_[0]!=="inprogress"&&f.dequeue(this,o)})},dequeue:function(o){return this.each(function(){f.dequeue(this,o)})},clearQueue:function(o){return this.queue(o||"fx",[])},promise:function(o,c){var p,_=1,T=f.Deferred(),b=this,R=this.length,j=function(){--_||T.resolveWith(b,[b])};for(typeof o!="string"&&(c=o,o=void 0),o=o||"fx";R--;)p=Z.get(b[R],o+"queueHooks"),p&&p.empty&&(_++,p.empty.add(j));return j(),T.promise(c)}});var we=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Oe=new RegExp("^(?:([+-])=|)("+we+")([a-z%]*)$","i"),Ye=["Top","Right","Bottom","Left"],et=h.documentElement,ke=function(o){return f.contains(o.ownerDocument,o)},Mt={composed:!0};et.getRootNode&&(ke=function(o){return f.contains(o.ownerDocument,o)||o.getRootNode(Mt)===o.ownerDocument});var ct=function(o,c){return o=c||o,o.style.display==="none"||o.style.display===""&&ke(o)&&f.css(o,"display")==="none"};function Ot(o,c,p,_){var T,b,R=20,j=_?function(){return _.cur()}:function(){return f.css(o,c,"")},z=j(),X=p&&p[3]||(f.cssNumber[c]?"":"px"),ae=o.nodeType&&(f.cssNumber[c]||X!=="px"&&+z)&&Oe.exec(f.css(o,c));if(ae&&ae[3]!==X){for(z=z/2,X=X||ae[3],ae=+z||1;R--;)f.style(o,c,ae+X),(1-b)*(1-(b=j()/z||.5))<=0&&(R=0),ae=ae/b;ae=ae*2,f.style(o,c,ae+X),p=p||[]}return p&&(ae=+ae||+z||0,T=p[1]?ae+(p[1]+1)*p[2]:+p[2],_&&(_.unit=X,_.start=ae,_.end=T)),T}var $={};function De(o){var c,p=o.ownerDocument,_=o.nodeName,T=$[_];return T||(c=p.body.appendChild(p.createElement(_)),T=f.css(c,"display"),c.parentNode.removeChild(c),T==="none"&&(T="block"),$[_]=T,T)}function le(o,c){for(var p,_,T=[],b=0,R=o.length;b<R;b++)_=o[b],_.style&&(p=_.style.display,c?(p==="none"&&(T[b]=Z.get(_,"display")||null,T[b]||(_.style.display="")),_.style.display===""&&ct(_)&&(T[b]=De(_))):p!=="none"&&(T[b]="none",Z.set(_,"display",p)));for(b=0;b<R;b++)T[b]!=null&&(o[b].style.display=T[b]);return o}f.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(o){return typeof o=="boolean"?o?this.show():this.hide():this.each(function(){ct(this)?f(this).show():f(this).hide()})}});var ve=/^(?:checkbox|radio)$/i,Le=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Pe=/^$|^module$|\/(?:java|ecma)script/i;(function(){var o=h.createDocumentFragment(),c=o.appendChild(h.createElement("div")),p=h.createElement("input");p.setAttribute("type","radio"),p.setAttribute("checked","checked"),p.setAttribute("name","t"),c.appendChild(p),M.checkClone=c.cloneNode(!0).cloneNode(!0).lastChild.checked,c.innerHTML="<textarea>x</textarea>",M.noCloneChecked=!!c.cloneNode(!0).lastChild.defaultValue,c.innerHTML="<option></option>",M.option=!!c.lastChild})();var Je={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Je.tbody=Je.tfoot=Je.colgroup=Je.caption=Je.thead,Je.th=Je.td,M.option||(Je.optgroup=Je.option=[1,"<select multiple='multiple'>","</select>"]);function vt(o,c){var p;return typeof o.getElementsByTagName<"u"?p=o.getElementsByTagName(c||"*"):typeof o.querySelectorAll<"u"?p=o.querySelectorAll(c||"*"):p=[],c===void 0||c&&D(o,c)?f.merge([o],p):p}function an(o,c){for(var p=0,_=o.length;p<_;p++)Z.set(o[p],"globalEval",!c||Z.get(c[p],"globalEval"))}var Ft=/<|&#?\w+;/;function zn(o,c,p,_,T){for(var b,R,j,z,X,ae,pe=c.createDocumentFragment(),te=[],Se=0,lt=o.length;Se<lt;Se++)if(b=o[Se],b||b===0)if(C(b)==="object")f.merge(te,b.nodeType?[b]:b);else if(!Ft.test(b))te.push(c.createTextNode(b));else{for(R=R||pe.appendChild(c.createElement("div")),j=(Le.exec(b)||["",""])[1].toLowerCase(),z=Je[j]||Je._default,R.innerHTML=z[1]+f.htmlPrefilter(b)+z[2],ae=z[0];ae--;)R=R.lastChild;f.merge(te,R.childNodes),R=pe.firstChild,R.textContent=""}for(pe.textContent="",Se=0;b=te[Se++];){if(_&&f.inArray(b,_)>-1){T&&T.push(b);continue}if(X=ke(b),R=vt(pe.appendChild(b),"script"),X&&an(R),p)for(ae=0;b=R[ae++];)Pe.test(b.type||"")&&p.push(b)}return pe}var ai=/^([^.]*)(?:\.(.+)|)/;function Xi(){return!0}function qi(){return!1}function xi(o,c,p,_,T,b){var R,j;if(typeof c=="object"){typeof p!="string"&&(_=_||p,p=void 0);for(j in c)xi(o,j,p,_,c[j],b);return o}if(_==null&&T==null?(T=p,_=p=void 0):T==null&&(typeof p=="string"?(T=_,_=void 0):(T=_,_=p,p=void 0)),T===!1)T=qi;else if(!T)return o;return b===1&&(R=T,T=function(z){return f().off(z),R.apply(this,arguments)},T.guid=R.guid||(R.guid=f.guid++)),o.each(function(){f.event.add(this,c,T,_,p)})}f.event={global:{},add:function(o,c,p,_,T){var b,R,j,z,X,ae,pe,te,Se,lt,Rt,pt=Z.get(o);if(J(o))for(p.handler&&(b=p,p=b.handler,T=b.selector),T&&f.find.matchesSelector(et,T),p.guid||(p.guid=f.guid++),(z=pt.events)||(z=pt.events=Object.create(null)),(R=pt.handle)||(R=pt.handle=function(En){return typeof f<"u"&&f.event.triggered!==En.type?f.event.dispatch.apply(o,arguments):void 0}),c=(c||"").match(He)||[""],X=c.length;X--;)j=ai.exec(c[X])||[],Se=Rt=j[1],lt=(j[2]||"").split(".").sort(),Se&&(pe=f.event.special[Se]||{},Se=(T?pe.delegateType:pe.bindType)||Se,pe=f.event.special[Se]||{},ae=f.extend({type:Se,origType:Rt,data:_,handler:p,guid:p.guid,selector:T,needsContext:T&&f.expr.match.needsContext.test(T),namespace:lt.join(".")},b),(te=z[Se])||(te=z[Se]=[],te.delegateCount=0,(!pe.setup||pe.setup.call(o,_,lt,R)===!1)&&o.addEventListener&&o.addEventListener(Se,R)),pe.add&&(pe.add.call(o,ae),ae.handler.guid||(ae.handler.guid=p.guid)),T?te.splice(te.delegateCount++,0,ae):te.push(ae),f.event.global[Se]=!0)},remove:function(o,c,p,_,T){var b,R,j,z,X,ae,pe,te,Se,lt,Rt,pt=Z.hasData(o)&&Z.get(o);if(!(!pt||!(z=pt.events))){for(c=(c||"").match(He)||[""],X=c.length;X--;){if(j=ai.exec(c[X])||[],Se=Rt=j[1],lt=(j[2]||"").split(".").sort(),!Se){for(Se in z)f.event.remove(o,Se+c[X],p,_,!0);continue}for(pe=f.event.special[Se]||{},Se=(_?pe.delegateType:pe.bindType)||Se,te=z[Se]||[],j=j[2]&&new RegExp("(^|\\.)"+lt.join("\\.(?:.*\\.|)")+"(\\.|$)"),R=b=te.length;b--;)ae=te[b],(T||Rt===ae.origType)&&(!p||p.guid===ae.guid)&&(!j||j.test(ae.namespace))&&(!_||_===ae.selector||_==="**"&&ae.selector)&&(te.splice(b,1),ae.selector&&te.delegateCount--,pe.remove&&pe.remove.call(o,ae));R&&!te.length&&((!pe.teardown||pe.teardown.call(o,lt,pt.handle)===!1)&&f.removeEvent(o,Se,pt.handle),delete z[Se])}f.isEmptyObject(z)&&Z.remove(o,"handle events")}},dispatch:function(o){var c,p,_,T,b,R,j=new Array(arguments.length),z=f.event.fix(o),X=(Z.get(this,"events")||Object.create(null))[z.type]||[],ae=f.event.special[z.type]||{};for(j[0]=z,c=1;c<arguments.length;c++)j[c]=arguments[c];if(z.delegateTarget=this,!(ae.preDispatch&&ae.preDispatch.call(this,z)===!1)){for(R=f.event.handlers.call(this,z,X),c=0;(T=R[c++])&&!z.isPropagationStopped();)for(z.currentTarget=T.elem,p=0;(b=T.handlers[p++])&&!z.isImmediatePropagationStopped();)(!z.rnamespace||b.namespace===!1||z.rnamespace.test(b.namespace))&&(z.handleObj=b,z.data=b.data,_=((f.event.special[b.origType]||{}).handle||b.handler).apply(T.elem,j),_!==void 0&&(z.result=_)===!1&&(z.preventDefault(),z.stopPropagation()));return ae.postDispatch&&ae.postDispatch.call(this,z),z.result}},handlers:function(o,c){var p,_,T,b,R,j=[],z=c.delegateCount,X=o.target;if(z&&X.nodeType&&!(o.type==="click"&&o.button>=1)){for(;X!==this;X=X.parentNode||this)if(X.nodeType===1&&!(o.type==="click"&&X.disabled===!0)){for(b=[],R={},p=0;p<z;p++)_=c[p],T=_.selector+" ",R[T]===void 0&&(R[T]=_.needsContext?f(T,this).index(X)>-1:f.find(T,this,null,[X]).length),R[T]&&b.push(_);b.length&&j.push({elem:X,handlers:b})}}return X=this,z<c.length&&j.push({elem:X,handlers:c.slice(z)}),j},addProp:function(o,c){Object.defineProperty(f.Event.prototype,o,{enumerable:!0,configurable:!0,get:A(c)?function(){if(this.originalEvent)return c(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[o]},set:function(p){Object.defineProperty(this,o,{enumerable:!0,configurable:!0,writable:!0,value:p})}})},fix:function(o){return o[f.expando]?o:new f.Event(o)},special:{load:{noBubble:!0},click:{setup:function(o){var c=this||o;return ve.test(c.type)&&c.click&&D(c,"input")&&Mr(c,"click",!0),!1},trigger:function(o){var c=this||o;return ve.test(c.type)&&c.click&&D(c,"input")&&Mr(c,"click"),!0},_default:function(o){var c=o.target;return ve.test(c.type)&&c.click&&D(c,"input")&&Z.get(c,"click")||D(c,"a")}},beforeunload:{postDispatch:function(o){o.result!==void 0&&o.originalEvent&&(o.originalEvent.returnValue=o.result)}}}};function Mr(o,c,p){if(!p){Z.get(o,c)===void 0&&f.event.add(o,c,Xi);return}Z.set(o,c,!1),f.event.add(o,c,{namespace:!1,handler:function(_){var T,b=Z.get(this,c);if(_.isTrigger&1&&this[c]){if(b)(f.event.special[c]||{}).delegateType&&_.stopPropagation();else if(b=s.call(arguments),Z.set(this,c,b),this[c](),T=Z.get(this,c),Z.set(this,c,!1),b!==T)return _.stopImmediatePropagation(),_.preventDefault(),T}else b&&(Z.set(this,c,f.event.trigger(b[0],b.slice(1),this)),_.stopPropagation(),_.isImmediatePropagationStopped=Xi)}})}f.removeEvent=function(o,c,p){o.removeEventListener&&o.removeEventListener(c,p)},f.Event=function(o,c){if(!(this instanceof f.Event))return new f.Event(o,c);o&&o.type?(this.originalEvent=o,this.type=o.type,this.isDefaultPrevented=o.defaultPrevented||o.defaultPrevented===void 0&&o.returnValue===!1?Xi:qi,this.target=o.target&&o.target.nodeType===3?o.target.parentNode:o.target,this.currentTarget=o.currentTarget,this.relatedTarget=o.relatedTarget):this.type=o,c&&f.extend(this,c),this.timeStamp=o&&o.timeStamp||Date.now(),this[f.expando]=!0},f.Event.prototype={constructor:f.Event,isDefaultPrevented:qi,isPropagationStopped:qi,isImmediatePropagationStopped:qi,isSimulated:!1,preventDefault:function(){var o=this.originalEvent;this.isDefaultPrevented=Xi,o&&!this.isSimulated&&o.preventDefault()},stopPropagation:function(){var o=this.originalEvent;this.isPropagationStopped=Xi,o&&!this.isSimulated&&o.stopPropagation()},stopImmediatePropagation:function(){var o=this.originalEvent;this.isImmediatePropagationStopped=Xi,o&&!this.isSimulated&&o.stopImmediatePropagation(),this.stopPropagation()}},f.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},f.event.addProp),f.each({focus:"focusin",blur:"focusout"},function(o,c){function p(_){if(h.documentMode){var T=Z.get(this,"handle"),b=f.event.fix(_);b.type=_.type==="focusin"?"focus":"blur",b.isSimulated=!0,T(_),b.target===b.currentTarget&&T(b)}else f.event.simulate(c,_.target,f.event.fix(_))}f.event.special[o]={setup:function(){var _;if(Mr(this,o,!0),h.documentMode)_=Z.get(this,c),_||this.addEventListener(c,p),Z.set(this,c,(_||0)+1);else return!1},trigger:function(){return Mr(this,o),!0},teardown:function(){var _;if(h.documentMode)_=Z.get(this,c)-1,_?Z.set(this,c,_):(this.removeEventListener(c,p),Z.remove(this,c));else return!1},_default:function(_){return Z.get(_.target,o)},delegateType:c},f.event.special[c]={setup:function(){var _=this.ownerDocument||this.document||this,T=h.documentMode?this:_,b=Z.get(T,c);b||(h.documentMode?this.addEventListener(c,p):_.addEventListener(o,p,!0)),Z.set(T,c,(b||0)+1)},teardown:function(){var _=this.ownerDocument||this.document||this,T=h.documentMode?this:_,b=Z.get(T,c)-1;b?Z.set(T,c,b):(h.documentMode?this.removeEventListener(c,p):_.removeEventListener(o,p,!0),Z.remove(T,c))}}}),f.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(o,c){f.event.special[o]={delegateType:c,bindType:c,handle:function(p){var _,T=this,b=p.relatedTarget,R=p.handleObj;return(!b||b!==T&&!f.contains(T,b))&&(p.type=R.origType,_=R.handler.apply(this,arguments),p.type=c),_}}}),f.fn.extend({on:function(o,c,p,_){return xi(this,o,c,p,_)},one:function(o,c,p,_){return xi(this,o,c,p,_,1)},off:function(o,c,p){var _,T;if(o&&o.preventDefault&&o.handleObj)return _=o.handleObj,f(o.delegateTarget).off(_.namespace?_.origType+"."+_.namespace:_.origType,_.selector,_.handler),this;if(typeof o=="object"){for(T in o)this.off(T,c,o[T]);return this}return(c===!1||typeof c=="function")&&(p=c,c=void 0),p===!1&&(p=qi),this.each(function(){f.event.remove(this,o,p,c)})}});var rl=/<script|<style|<link/i,sl=/checked\s*(?:[^=]|=\s*.checked.)/i,Os=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Vo(o,c){return D(o,"table")&&D(c.nodeType!==11?c:c.firstChild,"tr")&&f(o).children("tbody")[0]||o}function Bs(o){return o.type=(o.getAttribute("type")!==null)+"/"+o.type,o}function ol(o){return(o.type||"").slice(0,5)==="true/"?o.type=o.type.slice(5):o.removeAttribute("type"),o}function Go(o,c){var p,_,T,b,R,j,z;if(c.nodeType===1){if(Z.hasData(o)&&(b=Z.get(o),z=b.events,z)){Z.remove(c,"handle events");for(T in z)for(p=0,_=z[T].length;p<_;p++)f.event.add(c,T,z[T][p])}ue.hasData(o)&&(R=ue.access(o),j=f.extend({},R),ue.set(c,j))}}function fu(o,c){var p=c.nodeName.toLowerCase();p==="input"&&ve.test(o.type)?c.checked=o.checked:(p==="input"||p==="textarea")&&(c.defaultValue=o.defaultValue)}function wr(o,c,p,_){c=a(c);var T,b,R,j,z,X,ae=0,pe=o.length,te=pe-1,Se=c[0],lt=A(Se);if(lt||pe>1&&typeof Se=="string"&&!M.checkClone&&sl.test(Se))return o.each(function(Rt){var pt=o.eq(Rt);lt&&(c[0]=Se.call(this,Rt,pt.html())),wr(pt,c,p,_)});if(pe&&(T=zn(c,o[0].ownerDocument,!1,o,_),b=T.firstChild,T.childNodes.length===1&&(T=b),b||_)){for(R=f.map(vt(T,"script"),Bs),j=R.length;ae<pe;ae++)z=T,ae!==te&&(z=f.clone(z,!0,!0),j&&f.merge(R,vt(z,"script"))),p.call(o[ae],z,ae);if(j)for(X=R[R.length-1].ownerDocument,f.map(R,ol),ae=0;ae<j;ae++)z=R[ae],Pe.test(z.type||"")&&!Z.access(z,"globalEval")&&f.contains(X,z)&&(z.src&&(z.type||"").toLowerCase()!=="module"?f._evalUrl&&!z.noModule&&f._evalUrl(z.src,{nonce:z.nonce||z.getAttribute("nonce")},X):w(z.textContent.replace(Os,""),z,X))}return o}function al(o,c,p){for(var _,T=c?f.filter(c,o):o,b=0;(_=T[b])!=null;b++)!p&&_.nodeType===1&&f.cleanData(vt(_)),_.parentNode&&(p&&ke(_)&&an(vt(_,"script")),_.parentNode.removeChild(_));return o}f.extend({htmlPrefilter:function(o){return o},clone:function(o,c,p){var _,T,b,R,j=o.cloneNode(!0),z=ke(o);if(!M.noCloneChecked&&(o.nodeType===1||o.nodeType===11)&&!f.isXMLDoc(o))for(R=vt(j),b=vt(o),_=0,T=b.length;_<T;_++)fu(b[_],R[_]);if(c)if(p)for(b=b||vt(o),R=R||vt(j),_=0,T=b.length;_<T;_++)Go(b[_],R[_]);else Go(o,j);return R=vt(j,"script"),R.length>0&&an(R,!z&&vt(o,"script")),j},cleanData:function(o){for(var c,p,_,T=f.event.special,b=0;(p=o[b])!==void 0;b++)if(J(p)){if(c=p[Z.expando]){if(c.events)for(_ in c.events)T[_]?f.event.remove(p,_):f.removeEvent(p,_,c.handle);p[Z.expando]=void 0}p[ue.expando]&&(p[ue.expando]=void 0)}}}),f.fn.extend({detach:function(o){return al(this,o,!0)},remove:function(o){return al(this,o)},text:function(o){return Xe(this,function(c){return c===void 0?f.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=c)})},null,o,arguments.length)},append:function(){return wr(this,arguments,function(o){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var c=Vo(this,o);c.appendChild(o)}})},prepend:function(){return wr(this,arguments,function(o){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var c=Vo(this,o);c.insertBefore(o,c.firstChild)}})},before:function(){return wr(this,arguments,function(o){this.parentNode&&this.parentNode.insertBefore(o,this)})},after:function(){return wr(this,arguments,function(o){this.parentNode&&this.parentNode.insertBefore(o,this.nextSibling)})},empty:function(){for(var o,c=0;(o=this[c])!=null;c++)o.nodeType===1&&(f.cleanData(vt(o,!1)),o.textContent="");return this},clone:function(o,c){return o=o??!1,c=c??o,this.map(function(){return f.clone(this,o,c)})},html:function(o){return Xe(this,function(c){var p=this[0]||{},_=0,T=this.length;if(c===void 0&&p.nodeType===1)return p.innerHTML;if(typeof c=="string"&&!rl.test(c)&&!Je[(Le.exec(c)||["",""])[1].toLowerCase()]){c=f.htmlPrefilter(c);try{for(;_<T;_++)p=this[_]||{},p.nodeType===1&&(f.cleanData(vt(p,!1)),p.innerHTML=c);p=0}catch{}}p&&this.empty().append(c)},null,o,arguments.length)},replaceWith:function(){var o=[];return wr(this,arguments,function(c){var p=this.parentNode;f.inArray(this,o)<0&&(f.cleanData(vt(this)),p&&p.replaceChild(c,this))},o)}}),f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(o,c){f.fn[o]=function(p){for(var _,T=[],b=f(p),R=b.length-1,j=0;j<=R;j++)_=j===R?this:this.clone(!0),f(b[j])[c](_),l.apply(T,_.get());return this.pushStack(T)}});var Wo=new RegExp("^("+we+")(?!px)[a-z%]+$","i"),Xo=/^--/,zs=function(o){var c=o.ownerDocument.defaultView;return(!c||!c.opener)&&(c=e),c.getComputedStyle(o)},L=function(o,c,p){var _,T,b={};for(T in c)b[T]=o.style[T],o.style[T]=c[T];_=p.call(o);for(T in c)o.style[T]=b[T];return _},Y=new RegExp(Ye.join("|"),"i");(function(){function o(){if(X){z.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",X.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",et.appendChild(z).appendChild(X);var ae=e.getComputedStyle(X);p=ae.top!=="1%",j=c(ae.marginLeft)===12,X.style.right="60%",b=c(ae.right)===36,_=c(ae.width)===36,X.style.position="absolute",T=c(X.offsetWidth/3)===12,et.removeChild(z),X=null}}function c(ae){return Math.round(parseFloat(ae))}var p,_,T,b,R,j,z=h.createElement("div"),X=h.createElement("div");X.style&&(X.style.backgroundClip="content-box",X.cloneNode(!0).style.backgroundClip="",M.clearCloneStyle=X.style.backgroundClip==="content-box",f.extend(M,{boxSizingReliable:function(){return o(),_},pixelBoxStyles:function(){return o(),b},pixelPosition:function(){return o(),p},reliableMarginLeft:function(){return o(),j},scrollboxSize:function(){return o(),T},reliableTrDimensions:function(){var ae,pe,te,Se;return R==null&&(ae=h.createElement("table"),pe=h.createElement("tr"),te=h.createElement("div"),ae.style.cssText="position:absolute;left:-11111px;border-collapse:separate",pe.style.cssText="box-sizing:content-box;border:1px solid",pe.style.height="1px",te.style.height="9px",te.style.display="block",et.appendChild(ae).appendChild(pe).appendChild(te),Se=e.getComputedStyle(pe),R=parseInt(Se.height,10)+parseInt(Se.borderTopWidth,10)+parseInt(Se.borderBottomWidth,10)===pe.offsetHeight,et.removeChild(ae)),R}}))})();function ne(o,c,p){var _,T,b,R,j=Xo.test(c),z=o.style;return p=p||zs(o),p&&(R=p.getPropertyValue(c)||p[c],j&&R&&(R=R.replace(ee,"$1")||void 0),R===""&&!ke(o)&&(R=f.style(o,c)),!M.pixelBoxStyles()&&Wo.test(R)&&Y.test(c)&&(_=z.width,T=z.minWidth,b=z.maxWidth,z.minWidth=z.maxWidth=z.width=R,R=p.width,z.width=_,z.minWidth=T,z.maxWidth=b)),R!==void 0?R+"":R}function ie(o,c){return{get:function(){if(o()){delete this.get;return}return(this.get=c).apply(this,arguments)}}}var K=["Webkit","Moz","ms"],Ee=h.createElement("div").style,Ce={};function Be(o){for(var c=o[0].toUpperCase()+o.slice(1),p=K.length;p--;)if(o=K[p]+c,o in Ee)return o}function ze(o){var c=f.cssProps[o]||Ce[o];return c||(o in Ee?o:Ce[o]=Be(o)||o)}var ot=/^(none|table(?!-c[ea]).+)/,it={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function wt(o,c,p){var _=Oe.exec(c);return _?Math.max(0,_[2]-(p||0))+(_[3]||"px"):c}function Ct(o,c,p,_,T,b){var R=c==="width"?1:0,j=0,z=0,X=0;if(p===(_?"border":"content"))return 0;for(;R<4;R+=2)p==="margin"&&(X+=f.css(o,p+Ye[R],!0,T)),_?(p==="content"&&(z-=f.css(o,"padding"+Ye[R],!0,T)),p!=="margin"&&(z-=f.css(o,"border"+Ye[R]+"Width",!0,T))):(z+=f.css(o,"padding"+Ye[R],!0,T),p!=="padding"?z+=f.css(o,"border"+Ye[R]+"Width",!0,T):j+=f.css(o,"border"+Ye[R]+"Width",!0,T));return!_&&b>=0&&(z+=Math.max(0,Math.ceil(o["offset"+c[0].toUpperCase()+c.slice(1)]-b-z-j-.5))||0),z+X}function Zt(o,c,p){var _=zs(o),T=!M.boxSizingReliable()||p,b=T&&f.css(o,"boxSizing",!1,_)==="border-box",R=b,j=ne(o,c,_),z="offset"+c[0].toUpperCase()+c.slice(1);if(Wo.test(j)){if(!p)return j;j="auto"}return(!M.boxSizingReliable()&&b||!M.reliableTrDimensions()&&D(o,"tr")||j==="auto"||!parseFloat(j)&&f.css(o,"display",!1,_)==="inline")&&o.getClientRects().length&&(b=f.css(o,"boxSizing",!1,_)==="border-box",R=z in o,R&&(j=o[z])),j=parseFloat(j)||0,j+Ct(o,c,p||(b?"border":"content"),R,_,j)+"px"}f.extend({cssHooks:{opacity:{get:function(o,c){if(c){var p=ne(o,"opacity");return p===""?"1":p}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(o,c,p,_){if(!(!o||o.nodeType===3||o.nodeType===8||!o.style)){var T,b,R,j=P(c),z=Xo.test(c),X=o.style;if(z||(c=ze(j)),R=f.cssHooks[c]||f.cssHooks[j],p!==void 0){if(b=typeof p,b==="string"&&(T=Oe.exec(p))&&T[1]&&(p=Ot(o,c,T),b="number"),p==null||p!==p)return;b==="number"&&!z&&(p+=T&&T[3]||(f.cssNumber[j]?"":"px")),!M.clearCloneStyle&&p===""&&c.indexOf("background")===0&&(X[c]="inherit"),(!R||!("set"in R)||(p=R.set(o,p,_))!==void 0)&&(z?X.setProperty(c,p):X[c]=p)}else return R&&"get"in R&&(T=R.get(o,!1,_))!==void 0?T:X[c]}},css:function(o,c,p,_){var T,b,R,j=P(c),z=Xo.test(c);return z||(c=ze(j)),R=f.cssHooks[c]||f.cssHooks[j],R&&"get"in R&&(T=R.get(o,!0,p)),T===void 0&&(T=ne(o,c,_)),T==="normal"&&c in Qe&&(T=Qe[c]),p===""||p?(b=parseFloat(T),p===!0||isFinite(b)?b||0:T):T}}),f.each(["height","width"],function(o,c){f.cssHooks[c]={get:function(p,_,T){if(_)return ot.test(f.css(p,"display"))&&(!p.getClientRects().length||!p.getBoundingClientRect().width)?L(p,it,function(){return Zt(p,c,T)}):Zt(p,c,T)},set:function(p,_,T){var b,R=zs(p),j=!M.scrollboxSize()&&R.position==="absolute",z=j||T,X=z&&f.css(p,"boxSizing",!1,R)==="border-box",ae=T?Ct(p,c,T,X,R):0;return X&&j&&(ae-=Math.ceil(p["offset"+c[0].toUpperCase()+c.slice(1)]-parseFloat(R[c])-Ct(p,c,"border",!1,R)-.5)),ae&&(b=Oe.exec(_))&&(b[3]||"px")!=="px"&&(p.style[c]=_,_=f.css(p,c)),wt(p,_,ae)}}}),f.cssHooks.marginLeft=ie(M.reliableMarginLeft,function(o,c){if(c)return(parseFloat(ne(o,"marginLeft"))||o.getBoundingClientRect().left-L(o,{marginLeft:0},function(){return o.getBoundingClientRect().left}))+"px"}),f.each({margin:"",padding:"",border:"Width"},function(o,c){f.cssHooks[o+c]={expand:function(p){for(var _=0,T={},b=typeof p=="string"?p.split(" "):[p];_<4;_++)T[o+Ye[_]+c]=b[_]||b[_-2]||b[0];return T}},o!=="margin"&&(f.cssHooks[o+c].set=wt)}),f.fn.extend({css:function(o,c){return Xe(this,function(p,_,T){var b,R,j={},z=0;if(Array.isArray(_)){for(b=zs(p),R=_.length;z<R;z++)j[_[z]]=f.css(p,_[z],!1,b);return j}return T!==void 0?f.style(p,_,T):f.css(p,_)},o,c,arguments.length>1)}});function _t(o,c,p,_,T){return new _t.prototype.init(o,c,p,_,T)}f.Tween=_t,_t.prototype={constructor:_t,init:function(o,c,p,_,T,b){this.elem=o,this.prop=p,this.easing=T||f.easing._default,this.options=c,this.start=this.now=this.cur(),this.end=_,this.unit=b||(f.cssNumber[p]?"":"px")},cur:function(){var o=_t.propHooks[this.prop];return o&&o.get?o.get(this):_t.propHooks._default.get(this)},run:function(o){var c,p=_t.propHooks[this.prop];return this.options.duration?this.pos=c=f.easing[this.easing](o,this.options.duration*o,0,1,this.options.duration):this.pos=c=o,this.now=(this.end-this.start)*c+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),p&&p.set?p.set(this):_t.propHooks._default.set(this),this}},_t.prototype.init.prototype=_t.prototype,_t.propHooks={_default:{get:function(o){var c;return o.elem.nodeType!==1||o.elem[o.prop]!=null&&o.elem.style[o.prop]==null?o.elem[o.prop]:(c=f.css(o.elem,o.prop,""),!c||c==="auto"?0:c)},set:function(o){f.fx.step[o.prop]?f.fx.step[o.prop](o):o.elem.nodeType===1&&(f.cssHooks[o.prop]||o.elem.style[ze(o.prop)]!=null)?f.style(o.elem,o.prop,o.now+o.unit):o.elem[o.prop]=o.now}}},_t.propHooks.scrollTop=_t.propHooks.scrollLeft={set:function(o){o.elem.nodeType&&o.elem.parentNode&&(o.elem[o.prop]=o.now)}},f.easing={linear:function(o){return o},swing:function(o){return .5-Math.cos(o*Math.PI)/2},_default:"swing"},f.fx=_t.prototype.init,f.fx.step={};var gt,Ze,fn=/^(?:toggle|show|hide)$/,It=/queueHooks$/;function Ln(){Ze&&(h.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(Ln):e.setTimeout(Ln,f.fx.interval),f.fx.tick())}function $i(){return e.setTimeout(function(){gt=void 0}),gt=Date.now()}function vn(o,c){var p,_=0,T={height:o};for(c=c?1:0;_<4;_+=2-c)p=Ye[_],T["margin"+p]=T["padding"+p]=o;return c&&(T.opacity=T.width=o),T}function Tr(o,c,p){for(var _,T=(Yt.tweeners[c]||[]).concat(Yt.tweeners["*"]),b=0,R=T.length;b<R;b++)if(_=T[b].call(p,c,o))return _}function Gt(o,c,p){var _,T,b,R,j,z,X,ae,pe="width"in c||"height"in c,te=this,Se={},lt=o.style,Rt=o.nodeType&&ct(o),pt=Z.get(o,"fxshow");p.queue||(R=f._queueHooks(o,"fx"),R.unqueued==null&&(R.unqueued=0,j=R.empty.fire,R.empty.fire=function(){R.unqueued||j()}),R.unqueued++,te.always(function(){te.always(function(){R.unqueued--,f.queue(o,"fx").length||R.empty.fire()})}));for(_ in c)if(T=c[_],fn.test(T)){if(delete c[_],b=b||T==="toggle",T===(Rt?"hide":"show"))if(T==="show"&&pt&&pt[_]!==void 0)Rt=!0;else continue;Se[_]=pt&&pt[_]||f.style(o,_)}if(z=!f.isEmptyObject(c),!(!z&&f.isEmptyObject(Se))){pe&&o.nodeType===1&&(p.overflow=[lt.overflow,lt.overflowX,lt.overflowY],X=pt&&pt.display,X==null&&(X=Z.get(o,"display")),ae=f.css(o,"display"),ae==="none"&&(X?ae=X:(le([o],!0),X=o.style.display||X,ae=f.css(o,"display"),le([o]))),(ae==="inline"||ae==="inline-block"&&X!=null)&&f.css(o,"float")==="none"&&(z||(te.done(function(){lt.display=X}),X==null&&(ae=lt.display,X=ae==="none"?"":ae)),lt.display="inline-block")),p.overflow&&(lt.overflow="hidden",te.always(function(){lt.overflow=p.overflow[0],lt.overflowX=p.overflow[1],lt.overflowY=p.overflow[2]})),z=!1;for(_ in Se)z||(pt?"hidden"in pt&&(Rt=pt.hidden):pt=Z.access(o,"fxshow",{display:X}),b&&(pt.hidden=!Rt),Rt&&le([o],!0),te.done(function(){Rt||le([o]),Z.remove(o,"fxshow");for(_ in Se)f.style(o,_,Se[_])})),z=Tr(Rt?pt[_]:0,_,te),_ in pt||(pt[_]=z.start,Rt&&(z.end=z.start,z.start=0))}}function Hn(o,c){var p,_,T,b,R;for(p in o)if(_=P(p),T=c[_],b=o[p],Array.isArray(b)&&(T=b[1],b=o[p]=b[0]),p!==_&&(o[_]=b,delete o[p]),R=f.cssHooks[_],R&&"expand"in R){b=R.expand(b),delete o[_];for(p in b)p in o||(o[p]=b[p],c[p]=T)}else c[_]=T}function Yt(o,c,p){var _,T,b=0,R=Yt.prefilters.length,j=f.Deferred().always(function(){delete z.elem}),z=function(){if(T)return!1;for(var pe=gt||$i(),te=Math.max(0,X.startTime+X.duration-pe),Se=te/X.duration||0,lt=1-Se,Rt=0,pt=X.tweens.length;Rt<pt;Rt++)X.tweens[Rt].run(lt);return j.notifyWith(o,[X,lt,te]),lt<1&&pt?te:(pt||j.notifyWith(o,[X,1,0]),j.resolveWith(o,[X]),!1)},X=j.promise({elem:o,props:f.extend({},c),opts:f.extend(!0,{specialEasing:{},easing:f.easing._default},p),originalProperties:c,originalOptions:p,startTime:gt||$i(),duration:p.duration,tweens:[],createTween:function(pe,te){var Se=f.Tween(o,X.opts,pe,te,X.opts.specialEasing[pe]||X.opts.easing);return X.tweens.push(Se),Se},stop:function(pe){var te=0,Se=pe?X.tweens.length:0;if(T)return this;for(T=!0;te<Se;te++)X.tweens[te].run(1);return pe?(j.notifyWith(o,[X,1,0]),j.resolveWith(o,[X,pe])):j.rejectWith(o,[X,pe]),this}}),ae=X.props;for(Hn(ae,X.opts.specialEasing);b<R;b++)if(_=Yt.prefilters[b].call(X,o,ae,X.opts),_)return A(_.stop)&&(f._queueHooks(X.elem,X.opts.queue).stop=_.stop.bind(_)),_;return f.map(ae,Tr,X),A(X.opts.start)&&X.opts.start.call(o,X),X.progress(X.opts.progress).done(X.opts.done,X.opts.complete).fail(X.opts.fail).always(X.opts.always),f.fx.timer(f.extend(z,{elem:o,anim:X,queue:X.opts.queue})),X}f.Animation=f.extend(Yt,{tweeners:{"*":[function(o,c){var p=this.createTween(o,c);return Ot(p.elem,o,Oe.exec(c),p),p}]},tweener:function(o,c){A(o)?(c=o,o=["*"]):o=o.match(He);for(var p,_=0,T=o.length;_<T;_++)p=o[_],Yt.tweeners[p]=Yt.tweeners[p]||[],Yt.tweeners[p].unshift(c)},prefilters:[Gt],prefilter:function(o,c){c?Yt.prefilters.unshift(o):Yt.prefilters.push(o)}}),f.speed=function(o,c,p){var _=o&&typeof o=="object"?f.extend({},o):{complete:p||!p&&c||A(o)&&o,duration:o,easing:p&&c||c&&!A(c)&&c};return f.fx.off?_.duration=0:typeof _.duration!="number"&&(_.duration in f.fx.speeds?_.duration=f.fx.speeds[_.duration]:_.duration=f.fx.speeds._default),(_.queue==null||_.queue===!0)&&(_.queue="fx"),_.old=_.complete,_.complete=function(){A(_.old)&&_.old.call(this),_.queue&&f.dequeue(this,_.queue)},_},f.fn.extend({fadeTo:function(o,c,p,_){return this.filter(ct).css("opacity",0).show().end().animate({opacity:c},o,p,_)},animate:function(o,c,p,_){var T=f.isEmptyObject(o),b=f.speed(c,p,_),R=function(){var j=Yt(this,f.extend({},o),b);(T||Z.get(this,"finish"))&&j.stop(!0)};return R.finish=R,T||b.queue===!1?this.each(R):this.queue(b.queue,R)},stop:function(o,c,p){var _=function(T){var b=T.stop;delete T.stop,b(p)};return typeof o!="string"&&(p=c,c=o,o=void 0),c&&this.queue(o||"fx",[]),this.each(function(){var T=!0,b=o!=null&&o+"queueHooks",R=f.timers,j=Z.get(this);if(b)j[b]&&j[b].stop&&_(j[b]);else for(b in j)j[b]&&j[b].stop&&It.test(b)&&_(j[b]);for(b=R.length;b--;)R[b].elem===this&&(o==null||R[b].queue===o)&&(R[b].anim.stop(p),T=!1,R.splice(b,1));(T||!p)&&f.dequeue(this,o)})},finish:function(o){return o!==!1&&(o=o||"fx"),this.each(function(){var c,p=Z.get(this),_=p[o+"queue"],T=p[o+"queueHooks"],b=f.timers,R=_?_.length:0;for(p.finish=!0,f.queue(this,o,[]),T&&T.stop&&T.stop.call(this,!0),c=b.length;c--;)b[c].elem===this&&b[c].queue===o&&(b[c].anim.stop(!0),b.splice(c,1));for(c=0;c<R;c++)_[c]&&_[c].finish&&_[c].finish.call(this);delete p.finish})}}),f.each(["toggle","show","hide"],function(o,c){var p=f.fn[c];f.fn[c]=function(_,T,b){return _==null||typeof _=="boolean"?p.apply(this,arguments):this.animate(vn(c,!0),_,T,b)}}),f.each({slideDown:vn("show"),slideUp:vn("hide"),slideToggle:vn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(o,c){f.fn[o]=function(p,_,T){return this.animate(c,p,_,T)}}),f.timers=[],f.fx.tick=function(){var o,c=0,p=f.timers;for(gt=Date.now();c<p.length;c++)o=p[c],!o()&&p[c]===o&&p.splice(c--,1);p.length||f.fx.stop(),gt=void 0},f.fx.timer=function(o){f.timers.push(o),f.fx.start()},f.fx.interval=13,f.fx.start=function(){Ze||(Ze=!0,Ln())},f.fx.stop=function(){Ze=null},f.fx.speeds={slow:600,fast:200,_default:400},f.fn.delay=function(o,c){return o=f.fx&&f.fx.speeds[o]||o,c=c||"fx",this.queue(c,function(p,_){var T=e.setTimeout(p,o);_.stop=function(){e.clearTimeout(T)}})},function(){var o=h.createElement("input"),c=h.createElement("select"),p=c.appendChild(h.createElement("option"));o.type="checkbox",M.checkOn=o.value!=="",M.optSelected=p.selected,o=h.createElement("input"),o.value="t",o.type="radio",M.radioValue=o.value==="t"}();var _n,ln=f.expr.attrHandle;f.fn.extend({attr:function(o,c){return Xe(this,f.attr,o,c,arguments.length>1)},removeAttr:function(o){return this.each(function(){f.removeAttr(this,o)})}}),f.extend({attr:function(o,c,p){var _,T,b=o.nodeType;if(!(b===3||b===8||b===2)){if(typeof o.getAttribute>"u")return f.prop(o,c,p);if((b!==1||!f.isXMLDoc(o))&&(T=f.attrHooks[c.toLowerCase()]||(f.expr.match.bool.test(c)?_n:void 0)),p!==void 0){if(p===null){f.removeAttr(o,c);return}return T&&"set"in T&&(_=T.set(o,p,c))!==void 0?_:(o.setAttribute(c,p+""),p)}return T&&"get"in T&&(_=T.get(o,c))!==null?_:(_=f.find.attr(o,c),_??void 0)}},attrHooks:{type:{set:function(o,c){if(!M.radioValue&&c==="radio"&&D(o,"input")){var p=o.value;return o.setAttribute("type",c),p&&(o.value=p),c}}}},removeAttr:function(o,c){var p,_=0,T=c&&c.match(He);if(T&&o.nodeType===1)for(;p=T[_++];)o.removeAttribute(p)}}),_n={set:function(o,c,p){return c===!1?f.removeAttr(o,p):o.setAttribute(p,p),p}},f.each(f.expr.match.bool.source.match(/\w+/g),function(o,c){var p=ln[c]||f.find.attr;ln[c]=function(_,T,b){var R,j,z=T.toLowerCase();return b||(j=ln[z],ln[z]=R,R=p(_,T,b)!=null?z:null,ln[z]=j),R}});var qo=/^(?:input|select|textarea|button)$/i,Yi=/^(?:a|area)$/i;f.fn.extend({prop:function(o,c){return Xe(this,f.prop,o,c,arguments.length>1)},removeProp:function(o){return this.each(function(){delete this[f.propFix[o]||o]})}}),f.extend({prop:function(o,c,p){var _,T,b=o.nodeType;if(!(b===3||b===8||b===2))return(b!==1||!f.isXMLDoc(o))&&(c=f.propFix[c]||c,T=f.propHooks[c]),p!==void 0?T&&"set"in T&&(_=T.set(o,p,c))!==void 0?_:o[c]=p:T&&"get"in T&&(_=T.get(o,c))!==null?_:o[c]},propHooks:{tabIndex:{get:function(o){var c=f.find.attr(o,"tabindex");return c?parseInt(c,10):qo.test(o.nodeName)||Yi.test(o.nodeName)&&o.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),M.optSelected||(f.propHooks.selected={get:function(o){var c=o.parentNode;return c&&c.parentNode&&c.parentNode.selectedIndex,null},set:function(o){var c=o.parentNode;c&&(c.selectedIndex,c.parentNode&&c.parentNode.selectedIndex)}}),f.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){f.propFix[this.toLowerCase()]=this});function ss(o){var c=o.match(He)||[];return c.join(" ")}function os(o){return o.getAttribute&&o.getAttribute("class")||""}function du(o){return Array.isArray(o)?o:typeof o=="string"?o.match(He)||[]:[]}f.fn.extend({addClass:function(o){var c,p,_,T,b,R;return A(o)?this.each(function(j){f(this).addClass(o.call(this,j,os(this)))}):(c=du(o),c.length?this.each(function(){if(_=os(this),p=this.nodeType===1&&" "+ss(_)+" ",p){for(b=0;b<c.length;b++)T=c[b],p.indexOf(" "+T+" ")<0&&(p+=T+" ");R=ss(p),_!==R&&this.setAttribute("class",R)}}):this)},removeClass:function(o){var c,p,_,T,b,R;return A(o)?this.each(function(j){f(this).removeClass(o.call(this,j,os(this)))}):arguments.length?(c=du(o),c.length?this.each(function(){if(_=os(this),p=this.nodeType===1&&" "+ss(_)+" ",p){for(b=0;b<c.length;b++)for(T=c[b];p.indexOf(" "+T+" ")>-1;)p=p.replace(" "+T+" "," ");R=ss(p),_!==R&&this.setAttribute("class",R)}}):this):this.attr("class","")},toggleClass:function(o,c){var p,_,T,b,R=typeof o,j=R==="string"||Array.isArray(o);return A(o)?this.each(function(z){f(this).toggleClass(o.call(this,z,os(this),c),c)}):typeof c=="boolean"&&j?c?this.addClass(o):this.removeClass(o):(p=du(o),this.each(function(){if(j)for(b=f(this),T=0;T<p.length;T++)_=p[T],b.hasClass(_)?b.removeClass(_):b.addClass(_);else(o===void 0||R==="boolean")&&(_=os(this),_&&Z.set(this,"__className__",_),this.setAttribute&&this.setAttribute("class",_||o===!1?"":Z.get(this,"__className__")||""))}))},hasClass:function(o){var c,p,_=0;for(c=" "+o+" ";p=this[_++];)if(p.nodeType===1&&(" "+ss(os(p))+" ").indexOf(c)>-1)return!0;return!1}});var Tx=/\r/g;f.fn.extend({val:function(o){var c,p,_,T=this[0];return arguments.length?(_=A(o),this.each(function(b){var R;this.nodeType===1&&(_?R=o.call(this,b,f(this).val()):R=o,R==null?R="":typeof R=="number"?R+="":Array.isArray(R)&&(R=f.map(R,function(j){return j==null?"":j+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()],(!c||!("set"in c)||c.set(this,R,"value")===void 0)&&(this.value=R))})):T?(c=f.valHooks[T.type]||f.valHooks[T.nodeName.toLowerCase()],c&&"get"in c&&(p=c.get(T,"value"))!==void 0?p:(p=T.value,typeof p=="string"?p.replace(Tx,""):p??"")):void 0}}),f.extend({valHooks:{option:{get:function(o){var c=f.find.attr(o,"value");return c??ss(f.text(o))}},select:{get:function(o){var c,p,_,T=o.options,b=o.selectedIndex,R=o.type==="select-one",j=R?null:[],z=R?b+1:T.length;for(b<0?_=z:_=R?b:0;_<z;_++)if(p=T[_],(p.selected||_===b)&&!p.disabled&&(!p.parentNode.disabled||!D(p.parentNode,"optgroup"))){if(c=f(p).val(),R)return c;j.push(c)}return j},set:function(o,c){for(var p,_,T=o.options,b=f.makeArray(c),R=T.length;R--;)_=T[R],(_.selected=f.inArray(f.valHooks.option.get(_),b)>-1)&&(p=!0);return p||(o.selectedIndex=-1),b}}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]={set:function(o,c){if(Array.isArray(c))return o.checked=f.inArray(f(o).val(),c)>-1}},M.checkOn||(f.valHooks[this].get=function(o){return o.getAttribute("value")===null?"on":o.value})});var $o=e.location,mp={guid:Date.now()},hu=/\?/;f.parseXML=function(o){var c,p;if(!o||typeof o!="string")return null;try{c=new e.DOMParser().parseFromString(o,"text/xml")}catch{}return p=c&&c.getElementsByTagName("parsererror")[0],(!c||p)&&f.error("Invalid XML: "+(p?f.map(p.childNodes,function(_){return _.textContent}).join(`
`):o)),c};var gp=/^(?:focusinfocus|focusoutblur)$/,vp=function(o){o.stopPropagation()};f.extend(f.event,{trigger:function(o,c,p,_){var T,b,R,j,z,X,ae,pe,te=[p||h],Se=g.call(o,"type")?o.type:o,lt=g.call(o,"namespace")?o.namespace.split("."):[];if(b=pe=R=p=p||h,!(p.nodeType===3||p.nodeType===8)&&!gp.test(Se+f.event.triggered)&&(Se.indexOf(".")>-1&&(lt=Se.split("."),Se=lt.shift(),lt.sort()),z=Se.indexOf(":")<0&&"on"+Se,o=o[f.expando]?o:new f.Event(Se,typeof o=="object"&&o),o.isTrigger=_?2:3,o.namespace=lt.join("."),o.rnamespace=o.namespace?new RegExp("(^|\\.)"+lt.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,o.result=void 0,o.target||(o.target=p),c=c==null?[o]:f.makeArray(c,[o]),ae=f.event.special[Se]||{},!(!_&&ae.trigger&&ae.trigger.apply(p,c)===!1))){if(!_&&!ae.noBubble&&!E(p)){for(j=ae.delegateType||Se,gp.test(j+Se)||(b=b.parentNode);b;b=b.parentNode)te.push(b),R=b;R===(p.ownerDocument||h)&&te.push(R.defaultView||R.parentWindow||e)}for(T=0;(b=te[T++])&&!o.isPropagationStopped();)pe=b,o.type=T>1?j:ae.bindType||Se,X=(Z.get(b,"events")||Object.create(null))[o.type]&&Z.get(b,"handle"),X&&X.apply(b,c),X=z&&b[z],X&&X.apply&&J(b)&&(o.result=X.apply(b,c),o.result===!1&&o.preventDefault());return o.type=Se,!_&&!o.isDefaultPrevented()&&(!ae._default||ae._default.apply(te.pop(),c)===!1)&&J(p)&&z&&A(p[Se])&&!E(p)&&(R=p[z],R&&(p[z]=null),f.event.triggered=Se,o.isPropagationStopped()&&pe.addEventListener(Se,vp),p[Se](),o.isPropagationStopped()&&pe.removeEventListener(Se,vp),f.event.triggered=void 0,R&&(p[z]=R)),o.result}},simulate:function(o,c,p){var _=f.extend(new f.Event,p,{type:o,isSimulated:!0});f.event.trigger(_,null,c)}}),f.fn.extend({trigger:function(o,c){return this.each(function(){f.event.trigger(o,c,this)})},triggerHandler:function(o,c){var p=this[0];if(p)return f.event.trigger(o,c,p,!0)}});var bx=/\[\]$/,_p=/\r?\n/g,Ax=/^(?:submit|button|image|reset|file)$/i,Cx=/^(?:input|select|textarea|keygen)/i;function pu(o,c,p,_){var T;if(Array.isArray(c))f.each(c,function(b,R){p||bx.test(o)?_(o,R):pu(o+"["+(typeof R=="object"&&R!=null?b:"")+"]",R,p,_)});else if(!p&&C(c)==="object")for(T in c)pu(o+"["+T+"]",c[T],p,_);else _(o,c)}f.param=function(o,c){var p,_=[],T=function(b,R){var j=A(R)?R():R;_[_.length]=encodeURIComponent(b)+"="+encodeURIComponent(j??"")};if(o==null)return"";if(Array.isArray(o)||o.jquery&&!f.isPlainObject(o))f.each(o,function(){T(this.name,this.value)});else for(p in o)pu(p,o[p],c,T);return _.join("&")},f.fn.extend({serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var o=f.prop(this,"elements");return o?f.makeArray(o):this}).filter(function(){var o=this.type;return this.name&&!f(this).is(":disabled")&&Cx.test(this.nodeName)&&!Ax.test(o)&&(this.checked||!ve.test(o))}).map(function(o,c){var p=f(this).val();return p==null?null:Array.isArray(p)?f.map(p,function(_){return{name:c.name,value:_.replace(_p,`\r
`)}}):{name:c.name,value:p.replace(_p,`\r
`)}}).get()}});var Rx=/%20/g,Px=/#.*$/,Nx=/([?&])_=[^&]*/,Dx=/^(.*?):[ \t]*([^\r\n]*)$/mg,Lx=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ix=/^(?:GET|HEAD)$/,Ux=/^\/\//,xp={},mu={},yp="*/".concat("*"),gu=h.createElement("a");gu.href=$o.href;function Sp(o){return function(c,p){typeof c!="string"&&(p=c,c="*");var _,T=0,b=c.toLowerCase().match(He)||[];if(A(p))for(;_=b[T++];)_[0]==="+"?(_=_.slice(1)||"*",(o[_]=o[_]||[]).unshift(p)):(o[_]=o[_]||[]).push(p)}}function Ep(o,c,p,_){var T={},b=o===mu;function R(j){var z;return T[j]=!0,f.each(o[j]||[],function(X,ae){var pe=ae(c,p,_);if(typeof pe=="string"&&!b&&!T[pe])return c.dataTypes.unshift(pe),R(pe),!1;if(b)return!(z=pe)}),z}return R(c.dataTypes[0])||!T["*"]&&R("*")}function vu(o,c){var p,_,T=f.ajaxSettings.flatOptions||{};for(p in c)c[p]!==void 0&&((T[p]?o:_||(_={}))[p]=c[p]);return _&&f.extend(!0,o,_),o}function Fx(o,c,p){for(var _,T,b,R,j=o.contents,z=o.dataTypes;z[0]==="*";)z.shift(),_===void 0&&(_=o.mimeType||c.getResponseHeader("Content-Type"));if(_){for(T in j)if(j[T]&&j[T].test(_)){z.unshift(T);break}}if(z[0]in p)b=z[0];else{for(T in p){if(!z[0]||o.converters[T+" "+z[0]]){b=T;break}R||(R=T)}b=b||R}if(b)return b!==z[0]&&z.unshift(b),p[b]}function kx(o,c,p,_){var T,b,R,j,z,X={},ae=o.dataTypes.slice();if(ae[1])for(R in o.converters)X[R.toLowerCase()]=o.converters[R];for(b=ae.shift();b;)if(o.responseFields[b]&&(p[o.responseFields[b]]=c),!z&&_&&o.dataFilter&&(c=o.dataFilter(c,o.dataType)),z=b,b=ae.shift(),b){if(b==="*")b=z;else if(z!=="*"&&z!==b){if(R=X[z+" "+b]||X["* "+b],!R){for(T in X)if(j=T.split(" "),j[1]===b&&(R=X[z+" "+j[0]]||X["* "+j[0]],R)){R===!0?R=X[T]:X[T]!==!0&&(b=j[0],ae.unshift(j[1]));break}}if(R!==!0)if(R&&o.throws)c=R(c);else try{c=R(c)}catch(pe){return{state:"parsererror",error:R?pe:"No conversion from "+z+" to "+b}}}}return{state:"success",data:c}}f.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:$o.href,type:"GET",isLocal:Lx.test($o.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":yp,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":f.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(o,c){return c?vu(vu(o,f.ajaxSettings),c):vu(f.ajaxSettings,o)},ajaxPrefilter:Sp(xp),ajaxTransport:Sp(mu),ajax:function(o,c){typeof o=="object"&&(c=o,o=void 0),c=c||{};var p,_,T,b,R,j,z,X,ae,pe,te=f.ajaxSetup({},c),Se=te.context||te,lt=te.context&&(Se.nodeType||Se.jquery)?f(Se):f.event,Rt=f.Deferred(),pt=f.Callbacks("once memory"),En=te.statusCode||{},dn={},Ii={},Ui="canceled",Tt={readyState:0,getResponseHeader:function(Pt){var tn;if(z){if(!b)for(b={};tn=Dx.exec(T);)b[tn[1].toLowerCase()+" "]=(b[tn[1].toLowerCase()+" "]||[]).concat(tn[2]);tn=b[Pt.toLowerCase()+" "]}return tn==null?null:tn.join(", ")},getAllResponseHeaders:function(){return z?T:null},setRequestHeader:function(Pt,tn){return z==null&&(Pt=Ii[Pt.toLowerCase()]=Ii[Pt.toLowerCase()]||Pt,dn[Pt]=tn),this},overrideMimeType:function(Pt){return z==null&&(te.mimeType=Pt),this},statusCode:function(Pt){var tn;if(Pt)if(z)Tt.always(Pt[Tt.status]);else for(tn in Pt)En[tn]=[En[tn],Pt[tn]];return this},abort:function(Pt){var tn=Pt||Ui;return p&&p.abort(tn),as(0,tn),this}};if(Rt.promise(Tt),te.url=((o||te.url||$o.href)+"").replace(Ux,$o.protocol+"//"),te.type=c.method||c.type||te.method||te.type,te.dataTypes=(te.dataType||"*").toLowerCase().match(He)||[""],te.crossDomain==null){j=h.createElement("a");try{j.href=te.url,j.href=j.href,te.crossDomain=gu.protocol+"//"+gu.host!=j.protocol+"//"+j.host}catch{te.crossDomain=!0}}if(te.data&&te.processData&&typeof te.data!="string"&&(te.data=f.param(te.data,te.traditional)),Ep(xp,te,c,Tt),z)return Tt;X=f.event&&te.global,X&&f.active++===0&&f.event.trigger("ajaxStart"),te.type=te.type.toUpperCase(),te.hasContent=!Ix.test(te.type),_=te.url.replace(Px,""),te.hasContent?te.data&&te.processData&&(te.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(te.data=te.data.replace(Rx,"+")):(pe=te.url.slice(_.length),te.data&&(te.processData||typeof te.data=="string")&&(_+=(hu.test(_)?"&":"?")+te.data,delete te.data),te.cache===!1&&(_=_.replace(Nx,"$1"),pe=(hu.test(_)?"&":"?")+"_="+mp.guid+++pe),te.url=_+pe),te.ifModified&&(f.lastModified[_]&&Tt.setRequestHeader("If-Modified-Since",f.lastModified[_]),f.etag[_]&&Tt.setRequestHeader("If-None-Match",f.etag[_])),(te.data&&te.hasContent&&te.contentType!==!1||c.contentType)&&Tt.setRequestHeader("Content-Type",te.contentType),Tt.setRequestHeader("Accept",te.dataTypes[0]&&te.accepts[te.dataTypes[0]]?te.accepts[te.dataTypes[0]]+(te.dataTypes[0]!=="*"?", "+yp+"; q=0.01":""):te.accepts["*"]);for(ae in te.headers)Tt.setRequestHeader(ae,te.headers[ae]);if(te.beforeSend&&(te.beforeSend.call(Se,Tt,te)===!1||z))return Tt.abort();if(Ui="abort",pt.add(te.complete),Tt.done(te.success),Tt.fail(te.error),p=Ep(mu,te,c,Tt),!p)as(-1,"No Transport");else{if(Tt.readyState=1,X&&lt.trigger("ajaxSend",[Tt,te]),z)return Tt;te.async&&te.timeout>0&&(R=e.setTimeout(function(){Tt.abort("timeout")},te.timeout));try{z=!1,p.send(dn,as)}catch(Pt){if(z)throw Pt;as(-1,Pt)}}function as(Pt,tn,Ko,xu){var Fi,Zo,ki,br,Ar,li=tn;z||(z=!0,R&&e.clearTimeout(R),p=void 0,T=xu||"",Tt.readyState=Pt>0?4:0,Fi=Pt>=200&&Pt<300||Pt===304,Ko&&(br=Fx(te,Tt,Ko)),!Fi&&f.inArray("script",te.dataTypes)>-1&&f.inArray("json",te.dataTypes)<0&&(te.converters["text script"]=function(){}),br=kx(te,br,Tt,Fi),Fi?(te.ifModified&&(Ar=Tt.getResponseHeader("Last-Modified"),Ar&&(f.lastModified[_]=Ar),Ar=Tt.getResponseHeader("etag"),Ar&&(f.etag[_]=Ar)),Pt===204||te.type==="HEAD"?li="nocontent":Pt===304?li="notmodified":(li=br.state,Zo=br.data,ki=br.error,Fi=!ki)):(ki=li,(Pt||!li)&&(li="error",Pt<0&&(Pt=0))),Tt.status=Pt,Tt.statusText=(tn||li)+"",Fi?Rt.resolveWith(Se,[Zo,li,Tt]):Rt.rejectWith(Se,[Tt,li,ki]),Tt.statusCode(En),En=void 0,X&&lt.trigger(Fi?"ajaxSuccess":"ajaxError",[Tt,te,Fi?Zo:ki]),pt.fireWith(Se,[Tt,li]),X&&(lt.trigger("ajaxComplete",[Tt,te]),--f.active||f.event.trigger("ajaxStop")))}return Tt},getJSON:function(o,c,p){return f.get(o,c,p,"json")},getScript:function(o,c){return f.get(o,void 0,c,"script")}}),f.each(["get","post"],function(o,c){f[c]=function(p,_,T,b){return A(_)&&(b=b||T,T=_,_=void 0),f.ajax(f.extend({url:p,type:c,dataType:b,data:_,success:T},f.isPlainObject(p)&&p))}}),f.ajaxPrefilter(function(o){var c;for(c in o.headers)c.toLowerCase()==="content-type"&&(o.contentType=o.headers[c]||"")}),f._evalUrl=function(o,c,p){return f.ajax({url:o,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(_){f.globalEval(_,c,p)}})},f.fn.extend({wrapAll:function(o){var c;return this[0]&&(A(o)&&(o=o.call(this[0])),c=f(o,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&c.insertBefore(this[0]),c.map(function(){for(var p=this;p.firstElementChild;)p=p.firstElementChild;return p}).append(this)),this},wrapInner:function(o){return A(o)?this.each(function(c){f(this).wrapInner(o.call(this,c))}):this.each(function(){var c=f(this),p=c.contents();p.length?p.wrapAll(o):c.append(o)})},wrap:function(o){var c=A(o);return this.each(function(p){f(this).wrapAll(c?o.call(this,p):o)})},unwrap:function(o){return this.parent(o).not("body").each(function(){f(this).replaceWith(this.childNodes)}),this}}),f.expr.pseudos.hidden=function(o){return!f.expr.pseudos.visible(o)},f.expr.pseudos.visible=function(o){return!!(o.offsetWidth||o.offsetHeight||o.getClientRects().length)},f.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Ox={0:200,1223:204},Yo=f.ajaxSettings.xhr();M.cors=!!Yo&&"withCredentials"in Yo,M.ajax=Yo=!!Yo,f.ajaxTransport(function(o){var c,p;if(M.cors||Yo&&!o.crossDomain)return{send:function(_,T){var b,R=o.xhr();if(R.open(o.type,o.url,o.async,o.username,o.password),o.xhrFields)for(b in o.xhrFields)R[b]=o.xhrFields[b];o.mimeType&&R.overrideMimeType&&R.overrideMimeType(o.mimeType),!o.crossDomain&&!_["X-Requested-With"]&&(_["X-Requested-With"]="XMLHttpRequest");for(b in _)R.setRequestHeader(b,_[b]);c=function(j){return function(){c&&(c=p=R.onload=R.onerror=R.onabort=R.ontimeout=R.onreadystatechange=null,j==="abort"?R.abort():j==="error"?typeof R.status!="number"?T(0,"error"):T(R.status,R.statusText):T(Ox[R.status]||R.status,R.statusText,(R.responseType||"text")!=="text"||typeof R.responseText!="string"?{binary:R.response}:{text:R.responseText},R.getAllResponseHeaders()))}},R.onload=c(),p=R.onerror=R.ontimeout=c("error"),R.onabort!==void 0?R.onabort=p:R.onreadystatechange=function(){R.readyState===4&&e.setTimeout(function(){c&&p()})},c=c("abort");try{R.send(o.hasContent&&o.data||null)}catch(j){if(c)throw j}},abort:function(){c&&c()}}}),f.ajaxPrefilter(function(o){o.crossDomain&&(o.contents.script=!1)}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(o){return f.globalEval(o),o}}}),f.ajaxPrefilter("script",function(o){o.cache===void 0&&(o.cache=!1),o.crossDomain&&(o.type="GET")}),f.ajaxTransport("script",function(o){if(o.crossDomain||o.scriptAttrs){var c,p;return{send:function(_,T){c=f("<script>").attr(o.scriptAttrs||{}).prop({charset:o.scriptCharset,src:o.url}).on("load error",p=function(b){c.remove(),p=null,b&&T(b.type==="error"?404:200,b.type)}),h.head.appendChild(c[0])},abort:function(){p&&p()}}}});var Mp=[],_u=/(=)\?(?=&|$)|\?\?/;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var o=Mp.pop()||f.expando+"_"+mp.guid++;return this[o]=!0,o}}),f.ajaxPrefilter("json jsonp",function(o,c,p){var _,T,b,R=o.jsonp!==!1&&(_u.test(o.url)?"url":typeof o.data=="string"&&(o.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&_u.test(o.data)&&"data");if(R||o.dataTypes[0]==="jsonp")return _=o.jsonpCallback=A(o.jsonpCallback)?o.jsonpCallback():o.jsonpCallback,R?o[R]=o[R].replace(_u,"$1"+_):o.jsonp!==!1&&(o.url+=(hu.test(o.url)?"&":"?")+o.jsonp+"="+_),o.converters["script json"]=function(){return b||f.error(_+" was not called"),b[0]},o.dataTypes[0]="json",T=e[_],e[_]=function(){b=arguments},p.always(function(){T===void 0?f(e).removeProp(_):e[_]=T,o[_]&&(o.jsonpCallback=c.jsonpCallback,Mp.push(_)),b&&A(T)&&T(b[0]),b=T=void 0}),"script"}),M.createHTMLDocument=function(){var o=h.implementation.createHTMLDocument("").body;return o.innerHTML="<form></form><form></form>",o.childNodes.length===2}(),f.parseHTML=function(o,c,p){if(typeof o!="string")return[];typeof c=="boolean"&&(p=c,c=!1);var _,T,b;return c||(M.createHTMLDocument?(c=h.implementation.createHTMLDocument(""),_=c.createElement("base"),_.href=h.location.href,c.head.appendChild(_)):c=h),T=Ge.exec(o),b=!p&&[],T?[c.createElement(T[1])]:(T=zn([o],c,b),b&&b.length&&f(b).remove(),f.merge([],T.childNodes))},f.fn.load=function(o,c,p){var _,T,b,R=this,j=o.indexOf(" ");return j>-1&&(_=ss(o.slice(j)),o=o.slice(0,j)),A(c)?(p=c,c=void 0):c&&typeof c=="object"&&(T="POST"),R.length>0&&f.ajax({url:o,type:T||"GET",dataType:"html",data:c}).done(function(z){b=arguments,R.html(_?f("<div>").append(f.parseHTML(z)).find(_):z)}).always(p&&function(z,X){R.each(function(){p.apply(this,b||[z.responseText,X,z])})}),this},f.expr.pseudos.animated=function(o){return f.grep(f.timers,function(c){return o===c.elem}).length},f.offset={setOffset:function(o,c,p){var _,T,b,R,j,z,X,ae=f.css(o,"position"),pe=f(o),te={};ae==="static"&&(o.style.position="relative"),j=pe.offset(),b=f.css(o,"top"),z=f.css(o,"left"),X=(ae==="absolute"||ae==="fixed")&&(b+z).indexOf("auto")>-1,X?(_=pe.position(),R=_.top,T=_.left):(R=parseFloat(b)||0,T=parseFloat(z)||0),A(c)&&(c=c.call(o,p,f.extend({},j))),c.top!=null&&(te.top=c.top-j.top+R),c.left!=null&&(te.left=c.left-j.left+T),"using"in c?c.using.call(o,te):pe.css(te)}},f.fn.extend({offset:function(o){if(arguments.length)return o===void 0?this:this.each(function(T){f.offset.setOffset(this,o,T)});var c,p,_=this[0];if(_)return _.getClientRects().length?(c=_.getBoundingClientRect(),p=_.ownerDocument.defaultView,{top:c.top+p.pageYOffset,left:c.left+p.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var o,c,p,_=this[0],T={top:0,left:0};if(f.css(_,"position")==="fixed")c=_.getBoundingClientRect();else{for(c=this.offset(),p=_.ownerDocument,o=_.offsetParent||p.documentElement;o&&(o===p.body||o===p.documentElement)&&f.css(o,"position")==="static";)o=o.parentNode;o&&o!==_&&o.nodeType===1&&(T=f(o).offset(),T.top+=f.css(o,"borderTopWidth",!0),T.left+=f.css(o,"borderLeftWidth",!0))}return{top:c.top-T.top-f.css(_,"marginTop",!0),left:c.left-T.left-f.css(_,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var o=this.offsetParent;o&&f.css(o,"position")==="static";)o=o.offsetParent;return o||et})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(o,c){var p=c==="pageYOffset";f.fn[o]=function(_){return Xe(this,function(T,b,R){var j;if(E(T)?j=T:T.nodeType===9&&(j=T.defaultView),R===void 0)return j?j[c]:T[b];j?j.scrollTo(p?j.pageXOffset:R,p?R:j.pageYOffset):T[b]=R},o,_,arguments.length)}}),f.each(["top","left"],function(o,c){f.cssHooks[c]=ie(M.pixelPosition,function(p,_){if(_)return _=ne(p,c),Wo.test(_)?f(p).position()[c]+"px":_})}),f.each({Height:"height",Width:"width"},function(o,c){f.each({padding:"inner"+o,content:c,"":"outer"+o},function(p,_){f.fn[_]=function(T,b){var R=arguments.length&&(p||typeof T!="boolean"),j=p||(T===!0||b===!0?"margin":"border");return Xe(this,function(z,X,ae){var pe;return E(z)?_.indexOf("outer")===0?z["inner"+o]:z.document.documentElement["client"+o]:z.nodeType===9?(pe=z.documentElement,Math.max(z.body["scroll"+o],pe["scroll"+o],z.body["offset"+o],pe["offset"+o],pe["client"+o])):ae===void 0?f.css(z,X,j):f.style(z,X,ae,j)},c,R?T:void 0,R)}})}),f.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(o,c){f.fn[c]=function(p){return this.on(c,p)}}),f.fn.extend({bind:function(o,c,p){return this.on(o,null,c,p)},unbind:function(o,c){return this.off(o,null,c)},delegate:function(o,c,p,_){return this.on(c,o,p,_)},undelegate:function(o,c,p){return arguments.length===1?this.off(o,"**"):this.off(c,o||"**",p)},hover:function(o,c){return this.on("mouseenter",o).on("mouseleave",c||o)}}),f.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(o,c){f.fn[c]=function(p,_){return arguments.length>0?this.on(c,null,p,_):this.trigger(c)}});var Bx=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;f.proxy=function(o,c){var p,_,T;if(typeof c=="string"&&(p=o[c],c=o,o=p),!!A(o))return _=s.call(arguments,2),T=function(){return o.apply(c||this,_.concat(s.call(arguments)))},T.guid=o.guid=o.guid||f.guid++,T},f.holdReady=function(o){o?f.readyWait++:f.ready(!0)},f.isArray=Array.isArray,f.parseJSON=JSON.parse,f.nodeName=D,f.isFunction=A,f.isWindow=E,f.camelCase=P,f.type=C,f.now=Date.now,f.isNumeric=function(o){var c=f.type(o);return(c==="number"||c==="string")&&!isNaN(o-parseFloat(o))},f.trim=function(o){return o==null?"":(o+"").replace(Bx,"$1")};var zx=e.jQuery,Hx=e.$;return f.noConflict=function(o){return e.$===f&&(e.$=Hx),o&&e.jQuery===f&&(e.jQuery=zx),f},typeof n>"u"&&(e.jQuery=e.$=f),f})}(Qu)),Qu.exports}/*!
 * Lightbox v2.11.5
 * by Lokesh Dhakar
 *
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 *
 * Copyright Lokesh Dhakar
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 *
 * @preserve
 */(function(t,e){(function(n,i){t.exports=i(NS())})(fh,function(n){function i(r){this.album=[],this.currentImageIndex=void 0,this.init(),this.options=n.extend({},this.constructor.defaults),this.option(r)}return i.defaults={albumLabel:"Image %1 of %2",alwaysShowNavOnTouchDevices:!1,fadeDuration:600,fitImagesInViewport:!0,imageFadeDuration:600,positionFromTop:50,resizeDuration:700,showImageNumberLabel:!0,wrapAround:!1,disableScrolling:!1,sanitizeTitle:!1},i.prototype.option=function(r){n.extend(this.options,r)},i.prototype.imageCountLabel=function(r,s){return this.options.albumLabel.replace(/%1/g,r).replace(/%2/g,s)},i.prototype.init=function(){var r=this;n(document).ready(function(){r.enable(),r.build()})},i.prototype.enable=function(){var r=this;n("body").on("click","a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]",function(s){return r.start(n(s.currentTarget)),!1})},i.prototype.build=function(){if(!(n("#lightbox").length>0)){var r=this;n('<div id="lightboxOverlay" tabindex="-1" class="lightboxOverlay"></div><div id="lightbox" tabindex="-1" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt=""/><div class="lb-nav"><a class="lb-prev" role="button" tabindex="0" aria-label="Previous image" href="" ></a><a class="lb-next" role="button" tabindex="0" aria-label="Next image" href="" ></a></div><div class="lb-loader"><a class="lb-cancel" role="button" tabindex="0"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close" role="button" tabindex="0"></a></div></div></div></div>').appendTo(n("body")),this.$lightbox=n("#lightbox"),this.$overlay=n("#lightboxOverlay"),this.$outerContainer=this.$lightbox.find(".lb-outerContainer"),this.$container=this.$lightbox.find(".lb-container"),this.$image=this.$lightbox.find(".lb-image"),this.$nav=this.$lightbox.find(".lb-nav"),this.containerPadding={top:parseInt(this.$container.css("padding-top"),10),right:parseInt(this.$container.css("padding-right"),10),bottom:parseInt(this.$container.css("padding-bottom"),10),left:parseInt(this.$container.css("padding-left"),10)},this.imageBorderWidth={top:parseInt(this.$image.css("border-top-width"),10),right:parseInt(this.$image.css("border-right-width"),10),bottom:parseInt(this.$image.css("border-bottom-width"),10),left:parseInt(this.$image.css("border-left-width"),10)},this.$overlay.hide().on("click",function(){return r.end(),!1}),this.$lightbox.hide().on("click",function(s){n(s.target).attr("id")==="lightbox"&&r.end()}),this.$outerContainer.on("click",function(s){return n(s.target).attr("id")==="lightbox"&&r.end(),!1}),this.$lightbox.find(".lb-prev").on("click",function(){return r.currentImageIndex===0?r.changeImage(r.album.length-1):r.changeImage(r.currentImageIndex-1),!1}),this.$lightbox.find(".lb-next").on("click",function(){return r.currentImageIndex===r.album.length-1?r.changeImage(0):r.changeImage(r.currentImageIndex+1),!1}),this.$nav.on("mousedown",function(s){s.which===3&&(r.$nav.css("pointer-events","none"),r.$lightbox.one("contextmenu",function(){setTimeout((function(){this.$nav.css("pointer-events","auto")}).bind(r),0)}))}),this.$lightbox.find(".lb-loader, .lb-close").on("click keyup",function(s){if(s.type==="click"||s.type==="keyup"&&(s.which===13||s.which===32))return r.end(),!1})}},i.prototype.start=function(r){var s=this,a=n(window);a.on("resize",n.proxy(this.sizeOverlay,this)),this.sizeOverlay(),this.album=[];var l=0;function u(A){s.album.push({alt:A.attr("data-alt"),link:A.attr("href"),title:A.attr("data-title")||A.attr("title")})}var d=r.attr("data-lightbox"),m;if(d){m=n(r.prop("tagName")+'[data-lightbox="'+d+'"]');for(var g=0;g<m.length;g=++g)u(n(m[g])),m[g]===r[0]&&(l=g)}else if(r.attr("rel")==="lightbox")u(r);else{m=n(r.prop("tagName")+'[rel="'+r.attr("rel")+'"]');for(var v=0;v<m.length;v=++v)u(n(m[v])),m[v]===r[0]&&(l=v)}var y=a.scrollTop()+this.options.positionFromTop,M=a.scrollLeft();this.$lightbox.css({top:y+"px",left:M+"px"}).fadeIn(this.options.fadeDuration),this.options.disableScrolling&&n("body").addClass("lb-disable-scrolling"),this.changeImage(l)},i.prototype.changeImage=function(r){var s=this,a=this.album[r].link,l=a.split(".").slice(-1)[0],u=this.$lightbox.find(".lb-image");this.disableKeyboardNav(),this.$overlay.fadeIn(this.options.fadeDuration),n(".lb-loader").fadeIn("slow"),this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(),this.$outerContainer.addClass("animating");var d=new Image;d.onload=function(){var m,g,v,y,M,A;u.attr({alt:s.album[r].alt,src:a}),n(d),u.width(d.width),u.height(d.height);var E=d.width/d.height;A=n(window).width(),M=n(window).height(),y=A-s.containerPadding.left-s.containerPadding.right-s.imageBorderWidth.left-s.imageBorderWidth.right-20,v=M-s.containerPadding.top-s.containerPadding.bottom-s.imageBorderWidth.top-s.imageBorderWidth.bottom-s.options.positionFromTop-70,l==="svg"?(E>=1?(g=y,m=parseInt(y/E,10)):(g=parseInt(v/E,10),m=v),u.width(g),u.height(m)):(s.options.fitImagesInViewport?(s.options.maxWidth&&s.options.maxWidth<y&&(y=s.options.maxWidth),s.options.maxHeight&&s.options.maxHeight<v&&(v=s.options.maxHeight)):(y=s.options.maxWidth||d.width||y,v=s.options.maxHeight||d.height||v),(d.width>y||d.height>v)&&(d.width/y>d.height/v?(g=y,m=parseInt(d.height/(d.width/g),10),u.width(g),u.height(m)):(m=v,g=parseInt(d.width/(d.height/m),10),u.width(g),u.height(m)))),s.sizeContainer(u.width(),u.height())},d.src=this.album[r].link,this.currentImageIndex=r},i.prototype.sizeOverlay=function(){var r=this;setTimeout(function(){r.$overlay.width(n(document).width()).height(n(document).height())},0)},i.prototype.sizeContainer=function(r,s){var a=this,l=this.$outerContainer.outerWidth(),u=this.$outerContainer.outerHeight(),d=r+this.containerPadding.left+this.containerPadding.right+this.imageBorderWidth.left+this.imageBorderWidth.right,m=s+this.containerPadding.top+this.containerPadding.bottom+this.imageBorderWidth.top+this.imageBorderWidth.bottom;function g(){a.$lightbox.find(".lb-dataContainer").width(d),a.$lightbox.find(".lb-prevLink").height(m),a.$lightbox.find(".lb-nextLink").height(m),a.$overlay.trigger("focus"),a.showImage()}l!==d||u!==m?this.$outerContainer.animate({width:d,height:m},this.options.resizeDuration,"swing",function(){g()}):g()},i.prototype.showImage=function(){this.$lightbox.find(".lb-loader").stop(!0).hide(),this.$lightbox.find(".lb-image").fadeIn(this.options.imageFadeDuration),this.updateNav(),this.updateDetails(),this.preloadNeighboringImages(),this.enableKeyboardNav()},i.prototype.updateNav=function(){var r=!1;try{document.createEvent("TouchEvent"),r=!!this.options.alwaysShowNavOnTouchDevices}catch{}this.$lightbox.find(".lb-nav").show(),this.album.length>1&&(this.options.wrapAround?(r&&this.$lightbox.find(".lb-prev, .lb-next").css("opacity","1"),this.$lightbox.find(".lb-prev, .lb-next").show()):(this.currentImageIndex>0&&(this.$lightbox.find(".lb-prev").show(),r&&this.$lightbox.find(".lb-prev").css("opacity","1")),this.currentImageIndex<this.album.length-1&&(this.$lightbox.find(".lb-next").show(),r&&this.$lightbox.find(".lb-next").css("opacity","1"))))},i.prototype.updateDetails=function(){var r=this;if(typeof this.album[this.currentImageIndex].title<"u"&&this.album[this.currentImageIndex].title!==""){var s=this.$lightbox.find(".lb-caption");this.options.sanitizeTitle?s.text(this.album[this.currentImageIndex].title):s.html(this.album[this.currentImageIndex].title),s.fadeIn("fast")}if(this.album.length>1&&this.options.showImageNumberLabel){var a=this.imageCountLabel(this.currentImageIndex+1,this.album.length);this.$lightbox.find(".lb-number").text(a).fadeIn("fast")}else this.$lightbox.find(".lb-number").hide();this.$outerContainer.removeClass("animating"),this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration,function(){return r.sizeOverlay()})},i.prototype.preloadNeighboringImages=function(){if(this.album.length>this.currentImageIndex+1){var r=new Image;r.src=this.album[this.currentImageIndex+1].link}if(this.currentImageIndex>0){var s=new Image;s.src=this.album[this.currentImageIndex-1].link}},i.prototype.enableKeyboardNav=function(){this.$lightbox.on("keyup.keyboard",n.proxy(this.keyboardAction,this)),this.$overlay.on("keyup.keyboard",n.proxy(this.keyboardAction,this))},i.prototype.disableKeyboardNav=function(){this.$lightbox.off(".keyboard"),this.$overlay.off(".keyboard")},i.prototype.keyboardAction=function(r){var s=27,a=37,l=39,u=r.keyCode;u===s?(r.stopPropagation(),this.end()):u===a?this.currentImageIndex!==0?this.changeImage(this.currentImageIndex-1):this.options.wrapAround&&this.album.length>1&&this.changeImage(this.album.length-1):u===l&&(this.currentImageIndex!==this.album.length-1?this.changeImage(this.currentImageIndex+1):this.options.wrapAround&&this.album.length>1&&this.changeImage(0))},i.prototype.end=function(){this.disableKeyboardNav(),n(window).off("resize",this.sizeOverlay),this.$lightbox.fadeOut(this.options.fadeDuration),this.$overlay.fadeOut(this.options.fadeDuration),this.options.disableScrolling&&n("body").removeClass("lb-disable-scrolling")},new i})})(PS);const DS=()=>{const t=["p1.jpg","p12.jpg","p3.jpg","p4.jpg","p5.jpg","p6.jpg","p7.jpg","p8.jpg","p10.jpg","p11.jpg","p13.jpg","p14.jpg"];return Nt.useEffect(()=>{const e=document.querySelector(".gallery-container");if(e&&(e.innerHTML="",t.forEach((i,r)=>{const s=`photos/gallery/${i}`,a=document.createElement("a");a.setAttribute("href",s),a.setAttribute("data-lightbox","gallery");const l=document.createElement("img");l.setAttribute("data-src",s),l.setAttribute("alt",`Gallery image ${r+1}`),l.classList.add("gallery-image"),a.appendChild(l),e.appendChild(a)}),(()=>{const i=new IntersectionObserver((r,s)=>{r.forEach(a=>{if(a.isIntersecting){const l=a.target;l.src=l.dataset.src||"",l.onload=()=>{l.classList.add("loaded")},s.unobserve(l)}})});document.querySelectorAll(".gallery-image[data-src]").forEach(r=>{i.observe(r)})})()),typeof window.lightbox<"u"){window.lightbox.option({showImageNumberLabel:!1,wrapAround:!0,alwaysShowNavOnTouchDevices:!1,disableScrolling:!0,fadeDuration:300,resizeDuration:300,imageFadeDuration:300,closeButtonEnabled:!1});const n=i=>{i.target.classList.contains("lb-image")&&window.lightbox.end()};document.removeEventListener("click",n),document.addEventListener("click",n)}},[]),x.jsxs("div",{className:"container",id:"gallery","data-aos":"fade-up",children:[x.jsx("h2",{children:"My Gallery"}),x.jsx("div",{className:"gallery-container"})]})},LS=()=>(Nt.useEffect(()=>{(()=>{const e=document.querySelector(".projects-grid");e&&e.classList.add("project-container")})()},[]),x.jsxs("div",{className:"container",id:"projects","data-aos":"fade-up",children:[x.jsx("h2",{children:"My Projects"}),x.jsxs("div",{className:"projects-grid",children:[x.jsxs("div",{className:"project-item",children:[x.jsxs("div",{className:"project-description",children:[x.jsx("h3",{children:x.jsx("a",{href:"https://github.com/Pp3ng/PGS",target:"_blank",rel:"noopener noreferrer",children:"PGS"})}),x.jsx("p",{children:"A high-performance static HTTP server meticulously crafted in C++. Engineered with a focus on efficiency, it harnesses epoll-based event handling and a sophisticated thread pool architecture to achieve optimal throughput while maintaining robust resource management."})]}),x.jsxs("div",{className:"project-technologies",children:[x.jsx("span",{className:"technology-tag",children:"Network Programming"}),x.jsx("span",{className:"technology-tag",children:"Concurrent Computing"}),x.jsx("span",{className:"technology-tag",children:"System Architecture"})]})]}),x.jsxs("div",{className:"project-item",children:[x.jsxs("div",{className:"project-description",children:[x.jsx("h3",{children:x.jsx("a",{href:"https://github.com/Pp3ng/CinCout",target:"_blank",rel:"noopener noreferrer",children:"CinCout"})}),x.jsx("p",{children:"An intuitive web-based development environment for C/C++ programming. Features real-time compilation, code execution, and integrated analysis tools. Designed to help developers write better code through immediate feedback on style and memory management."})]}),x.jsxs("div",{className:"project-technologies",children:[x.jsx("span",{className:"technology-tag",children:"Web Development"}),x.jsx("span",{className:"technology-tag",children:"Backend Systems"}),x.jsx("span",{className:"technology-tag",children:"Developer Tools"})]})]}),x.jsxs("div",{className:"project-item",children:[x.jsxs("div",{className:"project-description",children:[x.jsx("h3",{children:x.jsx("a",{href:"https://github.com/Pp3ng/blitz_logger",target:"_blank",rel:"noopener noreferrer",children:"Blitz_Logger"})}),x.jsx("p",{children:"A high-performance, thread-safe logging library built for modern C++ applications. Implements lock-free architecture and zero-allocation design to minimize overhead while providing comprehensive logging capabilities without external dependencies."})]}),x.jsxs("div",{className:"project-technologies",children:[x.jsx("span",{className:"technology-tag",children:"System Programming"}),x.jsx("span",{className:"technology-tag",children:"Concurrent Computing"}),x.jsx("span",{className:"technology-tag",children:"Performance Optimization"})]})]}),x.jsxs("div",{className:"project-item",children:[x.jsxs("div",{className:"project-description",children:[x.jsx("h3",{children:x.jsx("a",{href:"https://github.com/Pp3ng/Mandelbrot-Set",target:"_blank",rel:"noopener noreferrer",children:"Mandelbrot-Set"})}),x.jsx("p",{children:"A comparative study of fractal generation implementing both CPU and GPU approaches. Leverages CUDA parallel processing to demonstrate significant performance improvements over traditional sequential computation while maintaining high precision in mathematical calculations."})]}),x.jsxs("div",{className:"project-technologies",children:[x.jsx("span",{className:"technology-tag",children:"Parallel Computing"}),x.jsx("span",{className:"technology-tag",children:"GPU Programming"}),x.jsx("span",{className:"technology-tag",children:"Scientific Computing"})]})]}),x.jsxs("div",{className:"project-item",children:[x.jsxs("div",{className:"project-description",children:[x.jsx("h3",{children:x.jsx("a",{href:"https://github.com/Pp3ng/Pshell",target:"_blank",rel:"noopener noreferrer",children:"PShell"})}),x.jsx("p",{children:"A lightweight shell implementation focusing on essential command-line functionality. Features built-in commands, process management, and pipeline support while maintaining a clean, efficient interface for system interaction and task automation."})]}),x.jsxs("div",{className:"project-technologies",children:[x.jsx("span",{className:"technology-tag",children:"System Programming"}),x.jsx("span",{className:"technology-tag",children:"Process Management"}),x.jsx("span",{className:"technology-tag",children:"Shell Development"})]})]}),x.jsxs("div",{className:"project-item",children:[x.jsxs("div",{className:"project-description",children:[x.jsx("h3",{children:x.jsx("a",{href:"https://github.com/Pp3ng/TinyPacker",target:"_blank",rel:"noopener noreferrer",children:"Tiny_Packer"})}),x.jsx("p",{children:"An efficient compression utility optimized for small file operations. Implements a sliding window algorithm to achieve effective compression ratios while maintaining quick processing times, particularly suited for configuration files and small text documents."})]}),x.jsxs("div",{className:"project-technologies",children:[x.jsx("span",{className:"technology-tag",children:"Algorithm Design"}),x.jsx("span",{className:"technology-tag",children:"Data Compression"}),x.jsx("span",{className:"technology-tag",children:"Memory Management"})]})]}),x.jsxs("div",{className:"project-item",children:[x.jsxs("div",{className:"project-description",children:[x.jsx("h3",{children:x.jsx("a",{href:"https://github.com/Pp3ng/Directory-Analyzer",target:"_blank",rel:"noopener noreferrer",children:"Directory_Analyzer"})}),x.jsx("p",{children:"A comprehensive file system analysis tool providing detailed insights into directory structures. Generates statistical reports on file distributions, sizes, and types while offering an efficient interface for understanding complex file system hierarchies."})]}),x.jsxs("div",{className:"project-technologies",children:[x.jsx("span",{className:"technology-tag",children:"System Programming"}),x.jsx("span",{className:"technology-tag",children:"File Systems"}),x.jsx("span",{className:"technology-tag",children:"Command Line Tools"})]})]}),x.jsxs("div",{className:"project-item",children:[x.jsxs("div",{className:"project-description",children:[x.jsx("h3",{children:x.jsx("a",{href:"https://github.com/Pp3ng/pdd",target:"_blank",rel:"noopener noreferrer",children:"pdd"})}),x.jsx("p",{children:"A high-performance data duplication and transfer utility built as a modern alternative to Unix dd. Features real-time progress monitoring, direct I/O operations, and optimized buffer management. Implements advanced error handling and verification mechanisms while maintaining compatibility with traditional dd syntax."})]}),x.jsxs("div",{className:"project-technologies",children:[x.jsx("span",{className:"technology-tag",children:"System Programming"}),x.jsx("span",{className:"technology-tag",children:"I/O Operations"}),x.jsx("span",{className:"technology-tag",children:"Performance Optimization"})]})]})]})]})),IS=()=>{Nt.useEffect(()=>{document.querySelectorAll("#insights .insight-item").forEach(r=>{r.addEventListener("click",a=>{const l=a.target;if(l.tagName==="A"||l.closest("a"))return;r.classList.toggle("active"),r.querySelectorAll(".insight-content").forEach(d=>{const m=d,g=window.getComputedStyle(m).display!=="none";if(g){const v=m.offsetHeight;m.style.height=v+"px",m.style.overflow="hidden",m.style.transition="height 300ms ease-out",m.offsetHeight,m.style.height="0px",m.style.paddingTop="0px",m.style.paddingBottom="0px",m.style.marginTop="0px",m.style.marginBottom="0px",setTimeout(()=>{m.style.display="none",m.style.height="",m.style.paddingTop="",m.style.paddingBottom="",m.style.marginTop="",m.style.marginBottom="",m.style.overflow="",m.style.transition=""},300)}else{m.style.display="flex",m.style.height="0px",m.style.overflow="hidden",m.style.transition="height 300ms ease-in",m.style.paddingTop="0px",m.style.paddingBottom="0px",m.style.marginTop="0px",m.style.marginBottom="0px",m.offsetHeight;const v=m.scrollHeight;m.style.height=v+"px",m.style.paddingTop="",m.style.paddingBottom="",m.style.marginTop="",m.style.marginBottom="",setTimeout(()=>{m.style.height="",m.style.overflow="",m.style.transition="",g||setTimeout(()=>{const y=document.querySelector(".navbar"),M=(y==null?void 0:y.offsetHeight)||0,A=r.getBoundingClientRect().top+window.pageYOffset-M-20;window.scrollTo({top:A,behavior:"smooth"})},50)},300)}})}),r.querySelectorAll(".insight-content").forEach(a=>{a.style.display="none"})})},[]);const t={display:"flex",alignItems:"flex-start",marginBottom:"18px",gap:"24px",position:"relative",paddingLeft:"18px"},e={margin:"4.5px 0 0",flex:"1"},n={marginLeft:"27px",maxWidth:"270px",height:"auto",borderRadius:"13.5px",transition:"transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"};return x.jsxs("div",{className:"container",id:"insights","data-aos":"fade-up",children:[x.jsx("h2",{children:"Technical Insights"}),x.jsxs("div",{className:"insight-item",children:[x.jsx("h3",{children:"Language Abstraction Levels: Performance vs Productivity"}),x.jsxs("div",{className:"insight-content",style:t,children:[x.jsxs("p",{style:e,children:["The distinction between",x.jsx("mark",{children:"low-level languages"}),"like C/C++ and",x.jsx("mark",{children:"higher-level alternatives"}),"presents a fundamental trade-off in software development. Low-level languages provide",x.jsx("strong",{children:"direct hardware access"})," and",x.jsx("strong",{children:"memory management capabilities"}),", enabling",x.jsx("strong",{children:"precise system control"})," and",x.jsx("strong",{children:"optimal performance"}),"."]}),x.jsx("img",{src:"photos/hardwares.png",alt:"hardware",className:"insight-image",style:n})]}),x.jsxs("div",{className:"insight-content",style:t,children:[x.jsxs("p",{style:e,children:["Higher-level languages",x.jsx("strong",{children:"abstract implementation details"})," through features like",x.jsx("mark",{children:"automatic memory management"}),"and",x.jsx("mark",{children:"intuitive syntax constructs"}),". While this abstraction can impact performance, it significantly",x.jsx("strong",{children:"accelerates development cycles"})," and",x.jsx("strong",{children:"reduces potential errors"}),". The choice between abstraction levels typically depends on",x.jsx("strong",{children:"specific project requirements"})," -",x.jsx("mark",{children:"system programming"}),"and",x.jsx("mark",{children:"performance-critical applications"}),"benefit from low-level control, while",x.jsx("strong",{children:"rapid development"})," often favors higher-level abstractions."]}),x.jsx("img",{src:"photos/languages.png",alt:"Programming Languages",className:"insight-image",style:n})]}),x.jsxs("div",{className:"insight-content",style:t,children:[x.jsxs("p",{style:e,children:["Understanding both paradigms provides",x.jsx("strong",{children:"comprehensive insight"})," into the software development spectrum. This knowledge enables",x.jsx("strong",{children:"informed decisions"})," about language selection based on",x.jsx("mark",{children:"project requirements"}),",",x.jsx("mark",{children:"performance constraints"}),", and",x.jsx("mark",{children:"development timelines"}),". The ability to navigate different abstraction levels proves invaluable when"," ",x.jsx("strong",{children:"optimizing critical systems"})," or",x.jsx("strong",{children:"rapidly prototyping solutions"}),"."]}),x.jsx("img",{src:"photos/programmer.png",alt:"Coder",className:"insight-image",style:n})]}),x.jsx("div",{className:"insight-time",children:x.jsx("span",{className:"timestamp",children:"Mon Mar 20 02:52:22 KST 2023"})})]}),x.jsxs("div",{className:"insight-item",children:[x.jsx("h3",{children:"Operating Systems: Linux and FreeBSD Deep Dive"}),x.jsxs("div",{className:"insight-content",style:t,children:[x.jsxs("p",{style:e,children:[x.jsx("mark",{children:"Linux system programming"}),"reveals the sophisticated interface between",x.jsx("mark",{children:"hardware"}),"and",x.jsx("mark",{children:"software layers"}),". The kernel's",x.jsx("strong",{children:"resource management capabilities"})," provide a robust foundation for system operations, while",x.jsx("strong",{children:"system calls"})," enable efficient hardware access. This architecture demonstrates the",x.jsx("strong",{children:"elegant abstraction"})," of complex hardware interactions through a",x.jsx("mark",{children:"unified programming interface"}),"."]}),x.jsx("img",{src:"photos/linux.png",alt:"linux",className:"insight-image",style:n})]}),x.jsxs("div",{className:"insight-content",style:t,children:[x.jsxs("p",{style:e,children:[x.jsx("mark",{children:"FreeBSD's architecture"}),"emphasizes ",x.jsx("strong",{children:"stability"})," and",x.jsx("strong",{children:"performance optimization"}),", particularly evident in",x.jsx("mark",{children:"server"}),"and",x.jsx("mark",{children:"embedded system"}),"deployments. Its coherent design philosophy manifests in the",x.jsx("strong",{children:"ports system"})," and",x.jsx("strong",{children:"package management infrastructure"}),". The implementation of",x.jsx("mark",{children:"ZFS"}),"provides ",x.jsx("strong",{children:"advanced data management capabilities"}),", while the kernel architecture facilitates",x.jsx("strong",{children:"efficient system resource utilization"}),"."]}),x.jsx("img",{src:"photos/FreeBSD.png",alt:"FreeBSD",className:"insight-image",style:n})]}),x.jsxs("div",{className:"insight-content",style:t,children:[x.jsxs("p",{style:e,children:[x.jsx("mark",{children:"Vim"}),"serves as an efficient interface for",x.jsx("strong",{children:"system-level development"}),", offering",x.jsx("strong",{children:"precise text manipulation capabilities"})," and",x.jsx("strong",{children:"extensive customization options"}),". Its",x.jsx("mark",{children:"modal editing paradigm"}),"enables ",x.jsx("strong",{children:"rapid code navigation"})," and",x.jsx("strong",{children:"modification"}),", particularly valuable in system programming contexts where efficiency is paramount."]}),x.jsx("img",{src:"photos/vim.png",alt:"Vim Editor",className:"insight-image",style:n})]}),x.jsxs("div",{className:"insight-content",style:t,children:[x.jsxs("p",{style:e,children:["The",x.jsx("mark",{children:"Command Line Interface"}),"provides ",x.jsx("strong",{children:"direct system interaction capabilities"}),", enabling ",x.jsx("strong",{children:"efficient resource management"})," and",x.jsx("strong",{children:"process control"}),". Its",x.jsx("mark",{children:"scripting capabilities"}),"facilitate ",x.jsx("strong",{children:"task automation"})," and",x.jsx("strong",{children:"system administration"}),". Advanced text processing tools enhance ",x.jsx("strong",{children:"data manipulation capabilities"}),", while the immediate feedback loop accelerates the development cycle."]}),x.jsx("img",{src:"photos/Terminalicon2.png",alt:"Terminal",className:"insight-image",style:n})]}),x.jsxs("div",{className:"insight-content",style:t,children:[x.jsxs("p",{style:e,children:["The",x.jsx("mark",{children:"open-source nature"}),"of these systems enables ",x.jsx("strong",{children:"comprehensive analysis"})," and",x.jsx("strong",{children:"modification"})," of system components. This transparency facilitates ",x.jsx("strong",{children:"deep understanding"})," of system architecture and enables ",x.jsx("strong",{children:"customization"})," for specific use cases. The interaction between",x.jsx("mark",{children:"software abstractions"}),"and",x.jsx("mark",{children:"hardware implementations"}),"demonstrates the sophisticated design principles underlying modern operating systems."]}),x.jsx("img",{src:"photos/open-source.png",alt:"Ubuntu",className:"insight-image",style:n})]}),x.jsx("div",{className:"insight-time",children:x.jsx("span",{className:"timestamp",children:"Wed Aug 23 23:08:31 KST 2023"})})]}),x.jsxs("div",{className:"insight-item",children:[x.jsx("h3",{children:"Network Security: From Infrastructure to Implementation"}),x.jsxs("div",{className:"insight-content",style:t,children:[x.jsxs("p",{style:e,children:[x.jsx("mark",{children:"Linux's network infrastructure"}),"provides comprehensive control over",x.jsx("mark",{children:"network interfaces"}),",",x.jsx("mark",{children:"connections"}),", and",x.jsx("mark",{children:"security protocols"}),". The platform's"," ",x.jsx("strong",{children:"extensive toolkit"})," facilitates network management through",x.jsx("strong",{children:"sophisticated utilities"})," including",x.jsx("mark",{children:"ifconfig"}),",",x.jsx("mark",{children:"iptables"}),", and",x.jsx("mark",{children:"Wireshark"}),". These tools enable"," ",x.jsx("strong",{children:"precise monitoring"}),",",x.jsx("strong",{children:"analysis"}),", and",x.jsx("strong",{children:"security implementation"})," across network layers."]}),x.jsx("img",{src:"photos/network.png",alt:"Linux Networking",className:"insight-image",style:n})]}),x.jsxs("div",{className:"insight-content",style:t,children:[x.jsxs("p",{style:e,children:[x.jsx("mark",{children:"Kali Linux's security framework"}),"incorporates ",x.jsx("strong",{children:"advanced network analysis tools"}),".",x.jsx("mark",{children:"Netdiscover"}),"facilitates ",x.jsx("strong",{children:"network topology mapping"})," and",x.jsx("strong",{children:"device enumeration"}),", while",x.jsx("mark",{children:"nmap"}),"enables ",x.jsx("strong",{children:"comprehensive port scanning"})," and",x.jsx("strong",{children:"service detection"}),". These capabilities form an essential foundation for ",x.jsx("strong",{children:"security assessment"})," and",x.jsx("strong",{children:"vulnerability analysis"})," in network environments."]}),x.jsx("img",{src:"photos/kali.png",alt:"Kali Linux Networking Tools",className:"insight-image",style:n})]}),x.jsxs("div",{className:"insight-content",style:t,children:[x.jsxs("p",{style:e,children:["The",x.jsx("mark",{children:"iptables framework"}),"provides ",x.jsx("strong",{children:"granular control"})," over network traffic through its ",x.jsx("strong",{children:"robust packet filtering mechanism"}),". This system enables ",x.jsx("strong",{children:"precise implementation"})," of security policies through",x.jsx("mark",{children:"custom rule sets"}),", facilitating",x.jsx("strong",{children:"comprehensive network access control"})," and",x.jsx("strong",{children:"traffic management"})," at the kernel level."]}),x.jsx("img",{src:"photos/iptables.png",alt:"Iptables Firewall",className:"insight-image",style:n})]}),x.jsxs("div",{className:"insight-content",style:t,children:[x.jsxs("p",{style:e,children:["Network security auditing tools like",x.jsx("mark",{children:"Bettercap"}),"enable ",x.jsx("strong",{children:"sophisticated network analysis"})," and",x.jsx("strong",{children:"vulnerability assessment"}),". The platform's",x.jsx("strong",{children:"packet capture"})," and",x.jsx("strong",{children:"analysis capabilities"})," facilitate thorough security evaluations, emphasizing the critical importance of",x.jsx("mark",{children:"encryption protocols"}),"and",x.jsx("mark",{children:"secure communication channels"}),"in modern network architectures."]}),x.jsx("img",{src:"photos/bettercap.png",alt:"Bettercap",className:"insight-image",style:n})]}),x.jsxs("div",{className:"insight-content",style:t,children:[x.jsxs("p",{style:e,children:[x.jsx("mark",{children:"SSH protocol"}),"implementation provides",x.jsx("strong",{children:"secure remote system administration"})," capabilities. The transition to",x.jsx("mark",{children:"key-based authentication"}),"mechanisms enhances security through",x.jsx("strong",{children:"cryptographic verification"}),", while maintaining",x.jsx("strong",{children:"operational efficiency"}),". This approach exemplifies the balance between ",x.jsx("strong",{children:"security requirements"})," and",x.jsx("strong",{children:"administrative functionality"})," in network operations."]}),x.jsx("img",{src:"photos/ssh.png",alt:"SSH Secure Shell",className:"insight-image",style:n})]}),x.jsx("div",{className:"insight-time",children:x.jsx("span",{className:"timestamp",children:"Fri Sep 15 16:43:00 KST 2023"})})]}),x.jsxs("div",{className:"insight-item",children:[x.jsx("h3",{children:"Modern Database Systems: SQL, NoSQL and Beyond"}),x.jsxs("div",{className:"insight-content",style:t,children:[x.jsxs("p",{style:e,children:["The architectural distinctions between",x.jsx("mark",{children:"SQL"}),"and",x.jsx("mark",{children:"NoSQL"}),"database systems present fundamental trade-offs in data management strategies. SQL databases implement",x.jsx("strong",{children:"ACID properties"}),", facilitating",x.jsx("strong",{children:"complex query operations"})," and maintaining",x.jsx("strong",{children:"strict data integrity"}),". NoSQL systems prioritize",x.jsx("mark",{children:"scalability"}),"and",x.jsx("mark",{children:"flexibility"}),", particularly advantageous in",x.jsx("strong",{children:"distributed computing environments"})," and",x.jsx("strong",{children:"unstructured data management"}),"."]}),x.jsx("img",{src:"photos/sqlVSnosql.png",alt:"SQL vs NoSQL",className:"insight-image",style:n})]}),x.jsxs("div",{className:"insight-content",style:t,children:[x.jsxs("p",{style:e,children:[x.jsx("mark",{children:"OLAP"}),"and",x.jsx("mark",{children:"OLTP"}),"systems serve distinct operational requirements in database architecture. OLTP systems",x.jsx("strong",{children:"optimize transaction processing"})," for operational databases, emphasizing ",x.jsx("strong",{children:"rapid query execution"})," and",x.jsx("strong",{children:"concurrent access patterns"}),". OLAP implementations focus on ",x.jsx("strong",{children:"analytical processing"}),", facilitating",x.jsx("strong",{children:"complex data analysis"})," and",x.jsx("strong",{children:"decision support"})," through optimized query structures."]}),x.jsx("img",{src:"photos/oltpVSolap.png",alt:"OLAP vs OLTP",className:"insight-image",style:n})]}),x.jsxs("div",{className:"insight-content",style:t,children:[x.jsxs("p",{style:e,children:["Modern database architectures often implement",x.jsx("mark",{children:"hybrid solutions"}),", leveraging the"," ",x.jsx("strong",{children:"respective advantages"})," of different database paradigms. This approach enables",x.jsx("strong",{children:"optimal performance"})," across varied use cases, combining",x.jsx("mark",{children:"transactional efficiency"}),"with ",x.jsx("strong",{children:"analytical capabilities"})," through carefully designed ",x.jsx("strong",{children:"system integration"}),"."]}),x.jsx("img",{src:"photos/database.png",alt:"Database Paradigms",className:"insight-image",style:n})]}),x.jsx("div",{className:"insight-time",children:x.jsx("span",{className:"timestamp",children:"Wed Jan 03 05:39:34 KST 2024"})})]}),x.jsxs("div",{className:"insight-item",children:[x.jsx("h3",{children:"High Performance Computing: CPU-GPU Synergy"}),x.jsxs("div",{className:"insight-content",style:t,children:[x.jsxs("p",{style:e,children:[x.jsx("mark",{children:"CUDA implementation"}),"enables efficient parallel computation through",x.jsx("mark",{children:"GPU architecture utilization"}),". The fundamental distinction between",x.jsx("mark",{children:"CPU"}),"and",x.jsx("mark",{children:"GPU"}),"architectures manifests in their respective",x.jsx("strong",{children:"optimization strategies"})," - GPUs excel in",x.jsx("strong",{children:"parallel data processing"})," through multiple processing units, while CPUs optimize",x.jsx("strong",{children:"sequential execution"})," through sophisticated control units."]}),x.jsx("img",{src:"photos/Cpu_Gpu_arch.png",alt:"CPU and GPU Architecture Comparison",className:"insight-image",style:n})]}),x.jsxs("div",{className:"insight-content",style:t,children:[x.jsxs("p",{style:e,children:["GPU",x.jsx("mark",{children:"parallel processing capabilities"}),"particularly benefit",x.jsx("strong",{children:"computationally intensive applications"})," in",x.jsx("strong",{children:"machine learning"}),",",x.jsx("strong",{children:"graphics processing"}),", and",x.jsx("strong",{children:"scientific computing"}),". CUDA framework implementation facilitates ",x.jsx("strong",{children:"efficient workload distribution"})," across GPU threads, while requiring careful optimization of",x.jsx("mark",{children:"memory access patterns"}),"and",x.jsx("mark",{children:"kernel execution parameters"}),"."]}),x.jsx("img",{src:"photos/CUDA.png",alt:"GPU Parallel Computing",className:"insight-image",style:n})]}),x.jsxs("div",{className:"insight-content",style:t,children:[x.jsxs("p",{style:e,children:["The",x.jsx("mark",{children:"CPU architecture"}),"maintains primary control through its",x.jsx("strong",{children:"sophisticated instruction pipeline"})," and",x.jsx("strong",{children:"branch prediction capabilities"}),". Its design optimizes",x.jsx("mark",{children:"sequential processing"}),"and ",x.jsx("strong",{children:"complex decision-making tasks"}),", while providing",x.jsx("strong",{children:"efficient interrupt handling"})," and",x.jsx("strong",{children:"system resource management"}),"."]}),x.jsx("img",{src:"photos/CGC.png",alt:"CPU and GPU Collaboration",className:"insight-image",style:n})]}),x.jsxs("div",{className:"insight-content",style:t,children:[x.jsxs("p",{style:e,children:["Optimal",x.jsx("mark",{children:"heterogeneous computing"}),"requires understanding of both architectures'",x.jsx("strong",{children:"performance characteristics"}),". This knowledge enables",x.jsx("strong",{children:"effective workload distribution"})," between CPU and GPU, maximizing",x.jsx("mark",{children:"system efficiency"}),"through ",x.jsx("strong",{children:"parallel execution"})," of suitable tasks while maintaining ",x.jsx("strong",{children:"sequential processing"})," for control-intensive operations."]}),x.jsx("img",{src:"photos/performance.png",alt:"Optimizing CPU and GPU Performance",className:"insight-image",style:n})]}),x.jsx("div",{className:"insight-time",children:x.jsx("span",{className:"timestamp",children:"Wed Oct 16 19:58:26 CST 2024"})})]}),x.jsxs("div",{className:"insight-item",children:[x.jsx("h3",{children:"Web Servers: Tomcat and Nginx Ecosystem"}),x.jsxs("div",{className:"insight-content",style:t,children:[x.jsxs("p",{style:e,children:[x.jsx("mark",{children:"Tomcat's architecture"}),"specializes in",x.jsx("strong",{children:"Java Servlet container implementation"}),", providing robust support for",x.jsx("strong",{children:"dynamic content generation"})," through",x.jsx("mark",{children:"Java Servlet"}),"and",x.jsx("mark",{children:"JSP processing"}),". This architecture enables",x.jsx("strong",{children:"efficient server-side application logic execution"}),"within the Java ecosystem."]}),x.jsx("img",{src:"photos/tomcat.png",alt:"Overview of Tomcat",className:"insight-image",style:n})]}),x.jsxs("div",{className:"insight-content",style:t,children:[x.jsxs("p",{style:e,children:[x.jsx("mark",{children:"Nginx's event-driven architecture"}),"optimizes ",x.jsx("strong",{children:"static content delivery"})," and",x.jsx("strong",{children:"connection management"}),". Its implementation efficiently handles",x.jsx("strong",{children:"high-concurrency scenarios"})," while minimizing resource utilization, particularly effective in",x.jsx("mark",{children:"reverse proxy configurations"}),"and",x.jsx("mark",{children:"content delivery optimization"}),"."]}),x.jsx("img",{src:"photos/nginx.png",alt:"Overview of Nginx",className:"insight-image",style:n})]}),x.jsxs("div",{className:"insight-content",style:t,children:[x.jsxs("p",{style:e,children:["Integration of both server architectures enables",x.jsx("strong",{children:"optimal resource utilization"})," through",x.jsx("mark",{children:"specialized task distribution"}),". This approach maximizes"," ",x.jsx("strong",{children:"system performance"})," by leveraging each server's",x.jsx("strong",{children:"specific optimization characteristics"}),"."]}),x.jsx("img",{src:"photos/web-server.png",alt:"Integration of Tomcat and Nginx",className:"insight-image",style:n})]}),x.jsx("div",{className:"insight-time",children:x.jsx("span",{className:"timestamp",children:"Fri Oct 25 00:26:33 KST 2024"})})]}),x.jsxs("div",{className:"insight-item",children:[x.jsx("h3",{children:"Hardware Spotlight: HHKB Professional"}),x.jsxs("div",{className:"insight-content",style:t,children:[x.jsxs("p",{style:e,children:["Received the",x.jsx("mark",{children:"HHKB Professional HYBRID Type-S"}),"as a birthday gift, marking a significant upgrade in my typing experience. The keyboard's",x.jsx("mark",{children:"Topre switches"}),"provide ",x.jsx("strong",{children:"exceptional tactile feedback"})," and",x.jsx("strong",{children:"reduced actuation force"}),", offering substantial relief from the finger fatigue and hand strain commonly associated with traditional mechanical keyboards. This ergonomic improvement is particularly valuable for",x.jsx("strong",{children:"intensive coding sessions"})," and",x.jsx("strong",{children:"extended typing periods"}),"."]}),x.jsx("img",{src:"photos/hhkb_logo.png",className:"insight-image",style:n})]}),x.jsxs("div",{className:"insight-content",style:t,children:[x.jsxs("p",{style:e,children:["The",x.jsx("mark",{children:"electrostatic capacitive switches"}),"demonstrate their superiority through",x.jsx("strong",{children:"smoother keystrokes"})," and",x.jsx("strong",{children:"reduced typing fatigue"}),". For",x.jsx("mark",{children:"professional developers"}),"and ",x.jsx("strong",{children:"content creators"})," who engage in extensive daily typing, the HHKB's thoughtful design and premium switch technology represent a significant advancement in both",x.jsx("strong",{children:"comfort"})," and ",x.jsx("strong",{children:"typing efficiency"}),"."]}),x.jsx("img",{src:"photos/hhkb.png",className:"insight-image",style:n})]}),x.jsx("div",{className:"insight-time",children:x.jsx("span",{className:"timestamp",children:"Wed Nov 6 19:03:21 KST 2024"})})]}),x.jsxs("div",{className:"insight-item",children:[x.jsx("h3",{children:"MacOS: The Perfect Blend of GUI and UNIX Power"}),x.jsxs("div",{className:"insight-content",style:t,children:[x.jsxs("p",{style:e,children:["Recently acquired a ",x.jsx("mark",{children:"MacBook Pro"}),", marking my transition from",x.jsx("mark",{children:"Windows Subsystem for Linux (WSL)"})," to a fully integrated",x.jsx("mark",{children:"macOS environment"}),". This shift represents a significant upgrade in my development workflow. MacOS brilliantly combines an",x.jsx("strong",{children:"aesthetically pleasing GUI"})," with a",x.jsx("strong",{children:"powerful command-line interface"}),", offering the best of both worlds without compromises. The system's"," ",x.jsx("mark",{children:"UNIX certification"})," ensures",x.jsx("strong",{children:"robust command-line capabilities"})," while maintaining a",x.jsx("strong",{children:"polished user experience"})," at the surface level."]}),x.jsx("img",{src:"photos/Macos.png",className:"insight-image",style:n})]}),x.jsxs("div",{className:"insight-content",style:t,children:[x.jsxs("p",{style:e,children:["The ",x.jsx("mark",{children:"native UNIX foundation"})," of macOS eliminates the",x.jsx("strong",{children:" compatibility layers"})," and"," ",x.jsx("strong",{children:"performance constraints"}),"commonly encountered with virtualized Linux environments like WSL. This direct implementation provides ",x.jsx("strong",{children:"seamless access"})," ","to essential development tools and utilities, significantly enhancing ",x.jsx("strong",{children:"system responsiveness"})," and",x.jsx("strong",{children:"development efficiency"}),". The integration with my",x.jsx("mark",{children:"HHKB keyboard"})," creates an"," ",x.jsx("strong",{children:"optimal coding experience"}),", with macOS's keyboard mapping perfectly complementing the HHKB's unique layout."]}),x.jsx("img",{src:"photos/mac_with_hhkb.jpg",className:"insight-image",style:n})]}),x.jsx("div",{className:"insight-content",style:t,children:x.jsxs("p",{style:e,children:["This new MacBook Pro will serve as my primary platform for",x.jsx("strong",{children:"software development"})," and"," ",x.jsx("strong",{children:"creative projects"}),". The"," ",x.jsx("mark",{children:"unified ecosystem"})," between hardware and software provides a",x.jsx("strong",{children:"consistent development environment"})," that significantly",x.jsx("strong",{children:"reduces configuration overhead"})," and enables me to focus on",x.jsx("strong",{children:"creating innovative solutions"}),". The combination of",x.jsx("mark",{children:"powerful hardware"}),", ",x.jsx("mark",{children:"Unix underpinnings"}),", and",x.jsx("mark",{children:"refined user interface"})," makes macOS an",x.jsx("strong",{children:"ideal platform"})," for professional software development."]})}),x.jsx("div",{className:"insight-time",children:x.jsx("span",{className:"timestamp",children:"Fri Jan 10 20:15:00 CST 2025"})})]})]})},US=()=>{const t=[{title:"Advanced Programming in UNIX Environment",cover:"BookCovers/APUE.jpg",pdfFilename:"Advanced Programming in the UNIX Environment 3rd Edition.pdf"},{title:"TCP/IP Illustrated Volume1",cover:"BookCovers/TCPV1.jpg",pdfFilename:"TCP-IP-Illustrated-Volume-1-The-Protocols.pdf"},{title:"TCP/IP Illustrated Volume2",cover:"BookCovers/TCPV2.jpg",pdfFilename:"TCP-IP-Illustrated-Volume-2-The-Implementation.pdf"},{title:"UNIX Network Programming Volume1",cover:"BookCovers/UNPV1.jpg",pdfFilename:"UNIX Network Programming V1.pdf"},{title:"The Art of UNIX Programming",cover:"BookCovers/ART.png",pdfFilename:"The Art of Unix Programming.pdf"},{title:"The C++ Programming Language",cover:"BookCovers/C++.jpg",pdfFilename:"The C++ Programming Language-4th.pdf"},{title:"Linux Command Line And Shell Scripting Bible",cover:"BookCovers/CLIBIBLE.jpg",pdfFilename:"Linux Command Line And Shell Scripting Bible.pdf"},{title:"Learning the vi and vim Editors",cover:"BookCovers/LTVAVE.jpg",pdfFilename:"Learning the vi and Vim Editors 8th Edition-2021.pdf"},{title:"The Linux Programming Interface",cover:"BookCovers/TLPI.png",pdfFilename:"The Linux Programming Interface-2010.pdf"},{title:"Computer Systems A Programmer's Perspective",cover:"BookCovers/CSAPP.jpg",pdfFilename:"Computer Systems A Programmer's Perspective.pdf"},{title:"Introduction To Algorithms",cover:"BookCovers/ITA.jpg",pdfFilename:"Introduction to Algorithms 4th.pdf"},{title:"Computer Organization and Design",cover:"BookCovers/COAD.jpg",pdfFilename:"Computer Organization and Design 5E.pdf"},{title:"Operating System Three Easy Pieces",cover:"BookCovers/OSTEP.png",pdfFilename:"Operating System Three Easy Pieces.pdf"},{title:"Computer Networking-A Top Down Approach",cover:"BookCovers/NW.jpg",pdfFilename:"Computer Networking-A Top Down Approach-7th.pdf"},{title:"System Performance",cover:"BookCovers/SP.jpg",pdfFilename:"Systems Performance-Enterprise And The Cloud.pdf"},{title:"Database System Concepts",cover:"BookCovers/DSC.jpg",pdfFilename:"Database System Concepts-7th.pdf"},{title:"Compilers Principles Techniques and Tools",cover:"BookCovers/COMPILER.jpg",pdfFilename:"Compilers Principles Techniques and Tools.pdf"},{title:"Programming Massively Parallel Processors",cover:"BookCovers/CUDA.jpg",pdfFilename:"Programming Massively Parallel Processors.pdf"},{title:"How Linux Works",cover:"BookCovers/HLW.jpg",pdfFilename:"How Linux Works.pdf"},{title:"Absolute FreeBSD",cover:"BookCovers/AF.jpg",pdfFilename:"Absolute FreeBSD 3rd Edition.pdf"}];return x.jsxs("section",{id:"bookshelf",className:"container","data-aos":"fade-up",children:[x.jsx("h2",{children:"My Bookshelf"}),x.jsx("div",{className:"bookshelf-container",children:t.map((e,n)=>{const s=`https://github.com/Pp3ng/My-bookshelf/raw/main/${e.pdfFilename}`;return x.jsxs("div",{className:"book-item",children:[x.jsx("img",{className:"book-cover",src:e.cover,alt:`${e.title} cover`}),x.jsx("h3",{className:"book-title",children:e.title}),x.jsx("a",{className:"book-link",href:s,target:"_blank",rel:"noopener noreferrer",children:x.jsx("span",{children:"Download"})})]},n)})})]})},FS=()=>x.jsxs("div",{className:"container",id:"Social-Accounts","data-aos":"fade-up",children:[x.jsx("h2",{children:"Let's Connect"}),x.jsxs("ul",{className:"social-links",children:[x.jsx("li",{className:"social-link-item",children:x.jsxs("div",{className:"social-link-wrapper",children:[x.jsx("a",{href:"https://www.instagram.com/pp3ng___",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:x.jsx("i",{className:"fa-brands fa-instagram"})}),x.jsx("span",{className:"social-tooltip",children:"Follow on Instagram"})]})}),x.jsx("li",{className:"social-link-item",children:x.jsxs("div",{className:"social-link-wrapper",children:[x.jsx("a",{href:"https://x.com/Pp3ng_",target:"_blank",rel:"noopener noreferrer","aria-label":"Twitter",children:x.jsx("i",{className:"fa-brands fa-x-twitter"})}),x.jsx("span",{className:"social-tooltip",children:"Follow on X"})]})}),x.jsx("li",{className:"social-link-item",children:x.jsxs("div",{className:"social-link-wrapper",children:[x.jsx("a",{href:"https://github.com/Pp3ng",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:x.jsx("i",{className:"fa-brands fa-github"})}),x.jsx("span",{className:"social-tooltip",children:"Visit my GitHub"})]})}),x.jsx("li",{className:"social-link-item",children:x.jsxs("div",{className:"social-link-wrapper",children:[x.jsx("a",{href:"mailto:pp3ng@outlook.com","aria-label":"Email",children:x.jsx("i",{className:"fa-solid fa-envelope"})}),x.jsx("span",{className:"social-tooltip",children:"Send me an email"})]})})]})]}),kS=()=>x.jsx("footer",{className:"site-footer",children:x.jsxs("p",{children:["© ",new Date().getFullYear()," PENN.L.ZHOU | Built with"," ",x.jsx("i",{className:"fas fa-coffee"})," & ",x.jsx("i",{className:"fas fa-keyboard"})]})}),OS=()=>{const[t,e]=Nt.useState(!1),n=()=>{window.scrollY>300?e(!0):e(!1)},i=()=>{window.scrollTo({top:0,behavior:"smooth"})};return Nt.useEffect(()=>(window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)),[]),x.jsxs("button",{id:"back-to-top",className:`back-to-top ${t?"visible":""}`,onClick:i,"aria-label":"Back to top",children:[x.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"back-to-top-icon",children:x.jsx("polyline",{points:"18 15 12 9 6 15"})}),x.jsx("span",{className:"back-to-top-circle"})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const op="175",BS=0,km=1,zS=2,q_=1,HS=2,ir=3,ts=0,Yn=1,or=2,Zr=0,wo=1,Ed=2,Om=3,Bm=4,jS=5,xs=100,VS=101,GS=102,WS=103,XS=104,qS=200,$S=201,YS=202,KS=203,Md=204,wd=205,ZS=206,QS=207,JS=208,eE=209,tE=210,nE=211,iE=212,rE=213,sE=214,Td=0,bd=1,Ad=2,Lo=3,Cd=4,Rd=5,Pd=6,Nd=7,$_=0,oE=1,aE=2,Qr=0,lE=1,cE=2,uE=3,fE=4,dE=5,hE=6,pE=7,Y_=300,Io=301,Uo=302,Dd=303,Ld=304,au=306,Id=1e3,ws=1001,Ud=1002,Di=1003,mE=1004,Rl=1005,Vi=1006,Ju=1007,Ts=1008,_r=1009,K_=1010,Z_=1011,Va=1012,ap=1013,Is=1014,cr=1015,Qa=1016,lp=1017,cp=1018,Ga=1020,Q_=35902,J_=1021,ex=1022,Ri=1023,tx=1024,nx=1025,Wa=1026,Xa=1027,ix=1028,up=1029,rx=1030,fp=1031,dp=1033,fc=33776,dc=33777,hc=33778,pc=33779,Fd=35840,kd=35841,Od=35842,Bd=35843,zd=36196,Hd=37492,jd=37496,Vd=37808,Gd=37809,Wd=37810,Xd=37811,qd=37812,$d=37813,Yd=37814,Kd=37815,Zd=37816,Qd=37817,Jd=37818,eh=37819,th=37820,nh=37821,mc=36492,ih=36494,rh=36495,sx=36283,sh=36284,oh=36285,ah=36286,gE=3200,vE=3201,_E=0,xE=1,zr="",fi="srgb",Fo="srgb-linear",jc="linear",jt="srgb",Gs=7680,zm=519,yE=512,SE=513,EE=514,ox=515,ME=516,wE=517,TE=518,bE=519,Hm=35044,jm="300 es",ur=2e3,Vc=2001;class Ho{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ef=Math.PI/180,lh=180/Math.PI;function Ja(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rn[t&255]+Rn[t>>8&255]+Rn[t>>16&255]+Rn[t>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[n&63|128]+Rn[n>>8&255]+"-"+Rn[n>>16&255]+Rn[n>>24&255]+Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]).toLowerCase()}function bt(t,e,n){return Math.max(e,Math.min(n,t))}function AE(t,e){return(t%e+e)%e}function tf(t,e,n){return(1-n)*t+n*e}function aa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ht{constructor(e=0,n=0){Ht.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=bt(this.x,e.x,n.x),this.y=bt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=bt(this.x,e,n),this.y=bt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(bt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,n,i,r,s,a,l,u,d){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,l,u,d)}set(e,n,i,r,s,a,l,u,d){const m=this.elements;return m[0]=e,m[1]=r,m[2]=l,m[3]=n,m[4]=s,m[5]=u,m[6]=i,m[7]=a,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],l=i[3],u=i[6],d=i[1],m=i[4],g=i[7],v=i[2],y=i[5],M=i[8],A=r[0],E=r[3],h=r[6],S=r[1],w=r[4],C=r[7],k=r[2],I=r[5],f=r[8];return s[0]=a*A+l*S+u*k,s[3]=a*E+l*w+u*I,s[6]=a*h+l*C+u*f,s[1]=d*A+m*S+g*k,s[4]=d*E+m*w+g*I,s[7]=d*h+m*C+g*f,s[2]=v*A+y*S+M*k,s[5]=v*E+y*w+M*I,s[8]=v*h+y*C+M*f,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],u=e[6],d=e[7],m=e[8];return n*a*m-n*l*d-i*s*m+i*l*u+r*s*d-r*a*u}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],u=e[6],d=e[7],m=e[8],g=m*a-l*d,v=l*u-m*s,y=d*s-a*u,M=n*g+i*v+r*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=g*A,e[1]=(r*d-m*i)*A,e[2]=(l*i-r*a)*A,e[3]=v*A,e[4]=(m*n-r*u)*A,e[5]=(r*s-l*n)*A,e[6]=y*A,e[7]=(i*u-d*n)*A,e[8]=(a*n-i*s)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,l){const u=Math.cos(s),d=Math.sin(s);return this.set(i*u,i*d,-i*(u*a+d*l)+a+e,-r*d,r*u,-r*(-d*a+u*l)+l+n,0,0,1),this}scale(e,n){return this.premultiply(nf.makeScale(e,n)),this}rotate(e){return this.premultiply(nf.makeRotation(-e)),this}translate(e,n){return this.premultiply(nf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nf=new dt;function ax(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Gc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function CE(){const t=Gc("canvas");return t.style.display="block",t}const Vm={};function gc(t){t in Vm||(Vm[t]=!0,console.warn(t))}function RE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function PE(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function NE(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Gm=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wm=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function DE(){const t={enabled:!0,workingColorSpace:Fo,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===jt&&(r.r=hr(r.r),r.g=hr(r.g),r.b=hr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===jt&&(r.r=To(r.r),r.g=To(r.g),r.b=To(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===zr?jc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Fo]:{primaries:e,whitePoint:i,transfer:jc,toXYZ:Gm,fromXYZ:Wm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:i,transfer:jt,toXYZ:Gm,fromXYZ:Wm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),t}const Ut=DE();function hr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function To(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ws;class LE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ws===void 0&&(Ws=Gc("canvas")),Ws.width=e.width,Ws.height=e.height;const r=Ws.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ws}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Gc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=hr(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(hr(n[i]/255)*255):n[i]=hr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let IE=0;class hp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=Ja(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(rf(r[a].image)):s.push(rf(r[a]))}else s=rf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function rf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?LE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let UE=0;class Kn extends Ho{constructor(e=Kn.DEFAULT_IMAGE,n=Kn.DEFAULT_MAPPING,i=ws,r=ws,s=Vi,a=Ts,l=Ri,u=_r,d=Kn.DEFAULT_ANISOTROPY,m=zr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=Ja(),this.name="",this.source=new hp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=d,this.format=l,this.internalFormat=null,this.type=u,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Y_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Id:e.x=e.x-Math.floor(e.x);break;case ws:e.x=e.x<0?0:1;break;case Ud:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Id:e.y=e.y-Math.floor(e.y);break;case ws:e.y=e.y<0?0:1;break;case Ud:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=Y_;Kn.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,n=0,i=0,r=1){sn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const u=e.elements,d=u[0],m=u[4],g=u[8],v=u[1],y=u[5],M=u[9],A=u[2],E=u[6],h=u[10];if(Math.abs(m-v)<.01&&Math.abs(g-A)<.01&&Math.abs(M-E)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+A)<.1&&Math.abs(M+E)<.1&&Math.abs(d+y+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(d+1)/2,C=(y+1)/2,k=(h+1)/2,I=(m+v)/4,f=(g+A)/4,B=(M+E)/4;return w>C&&w>k?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=I/i,s=f/i):C>k?C<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(C),i=I/r,s=B/r):k<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(k),i=f/s,r=B/s),this.set(i,r,s,n),this}let S=Math.sqrt((E-M)*(E-M)+(g-A)*(g-A)+(v-m)*(v-m));return Math.abs(S)<.001&&(S=1),this.x=(E-M)/S,this.y=(g-A)/S,this.z=(v-m)/S,this.w=Math.acos((d+y+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=bt(this.x,e.x,n.x),this.y=bt(this.y,e.y,n.y),this.z=bt(this.z,e.z,n.z),this.w=bt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=bt(this.x,e,n),this.y=bt(this.y,e,n),this.z=bt(this.z,e,n),this.w=bt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(bt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class FE extends Ho{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new sn(0,0,e,n),this.scissorTest=!1,this.viewport=new sn(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Kn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new hp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Us extends FE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class lx extends Kn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Di,this.minFilter=Di,this.wrapR=ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kE extends Kn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Di,this.minFilter=Di,this.wrapR=ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class el{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,l){let u=i[r+0],d=i[r+1],m=i[r+2],g=i[r+3];const v=s[a+0],y=s[a+1],M=s[a+2],A=s[a+3];if(l===0){e[n+0]=u,e[n+1]=d,e[n+2]=m,e[n+3]=g;return}if(l===1){e[n+0]=v,e[n+1]=y,e[n+2]=M,e[n+3]=A;return}if(g!==A||u!==v||d!==y||m!==M){let E=1-l;const h=u*v+d*y+m*M+g*A,S=h>=0?1:-1,w=1-h*h;if(w>Number.EPSILON){const k=Math.sqrt(w),I=Math.atan2(k,h*S);E=Math.sin(E*I)/k,l=Math.sin(l*I)/k}const C=l*S;if(u=u*E+v*C,d=d*E+y*C,m=m*E+M*C,g=g*E+A*C,E===1-l){const k=1/Math.sqrt(u*u+d*d+m*m+g*g);u*=k,d*=k,m*=k,g*=k}}e[n]=u,e[n+1]=d,e[n+2]=m,e[n+3]=g}static multiplyQuaternionsFlat(e,n,i,r,s,a){const l=i[r],u=i[r+1],d=i[r+2],m=i[r+3],g=s[a],v=s[a+1],y=s[a+2],M=s[a+3];return e[n]=l*M+m*g+u*y-d*v,e[n+1]=u*M+m*v+d*g-l*y,e[n+2]=d*M+m*y+l*v-u*g,e[n+3]=m*M-l*g-u*v-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,u=Math.sin,d=l(i/2),m=l(r/2),g=l(s/2),v=u(i/2),y=u(r/2),M=u(s/2);switch(a){case"XYZ":this._x=v*m*g+d*y*M,this._y=d*y*g-v*m*M,this._z=d*m*M+v*y*g,this._w=d*m*g-v*y*M;break;case"YXZ":this._x=v*m*g+d*y*M,this._y=d*y*g-v*m*M,this._z=d*m*M-v*y*g,this._w=d*m*g+v*y*M;break;case"ZXY":this._x=v*m*g-d*y*M,this._y=d*y*g+v*m*M,this._z=d*m*M+v*y*g,this._w=d*m*g-v*y*M;break;case"ZYX":this._x=v*m*g-d*y*M,this._y=d*y*g+v*m*M,this._z=d*m*M-v*y*g,this._w=d*m*g+v*y*M;break;case"YZX":this._x=v*m*g+d*y*M,this._y=d*y*g+v*m*M,this._z=d*m*M-v*y*g,this._w=d*m*g-v*y*M;break;case"XZY":this._x=v*m*g-d*y*M,this._y=d*y*g-v*m*M,this._z=d*m*M+v*y*g,this._w=d*m*g+v*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],l=n[5],u=n[9],d=n[2],m=n[6],g=n[10],v=i+l+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(m-u)*y,this._y=(s-d)*y,this._z=(a-r)*y}else if(i>l&&i>g){const y=2*Math.sqrt(1+i-l-g);this._w=(m-u)/y,this._x=.25*y,this._y=(r+a)/y,this._z=(s+d)/y}else if(l>g){const y=2*Math.sqrt(1+l-i-g);this._w=(s-d)/y,this._x=(r+a)/y,this._y=.25*y,this._z=(u+m)/y}else{const y=2*Math.sqrt(1+g-i-l);this._w=(a-r)/y,this._x=(s+d)/y,this._y=(u+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,l=n._x,u=n._y,d=n._z,m=n._w;return this._x=i*m+a*l+r*d-s*u,this._y=r*m+a*u+s*l-i*d,this._z=s*m+a*d+i*u-r*l,this._w=a*m-i*l-r*u-s*d,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let l=a*e._w+i*e._x+r*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const u=1-l*l;if(u<=Number.EPSILON){const y=1-n;return this._w=y*a+n*this._w,this._x=y*i+n*this._x,this._y=y*r+n*this._y,this._z=y*s+n*this._z,this.normalize(),this}const d=Math.sqrt(u),m=Math.atan2(d,l),g=Math.sin((1-n)*m)/d,v=Math.sin(n*m)/d;return this._w=a*g+this._w*v,this._x=i*g+this._x*v,this._y=r*g+this._y*v,this._z=s*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,n=0,i=0){se.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Xm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Xm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,l=e.z,u=e.w,d=2*(a*r-l*i),m=2*(l*n-s*r),g=2*(s*i-a*n);return this.x=n+u*d+a*g-l*m,this.y=i+u*m+l*d-s*g,this.z=r+u*g+s*m-a*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=bt(this.x,e.x,n.x),this.y=bt(this.y,e.y,n.y),this.z=bt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=bt(this.x,e,n),this.y=bt(this.y,e,n),this.z=bt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(bt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,l=n.y,u=n.z;return this.x=r*u-s*l,this.y=s*a-i*u,this.z=i*l-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sf.copy(this).projectOnVector(e),this.sub(sf)}reflect(e){return this.sub(sf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sf=new se,Xm=new el;class tl{constructor(e=new se(1/0,1/0,1/0),n=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Ei):Ei.fromBufferAttribute(s,a),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pl.copy(i.boundingBox)),Pl.applyMatrix4(e.matrixWorld),this.union(Pl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(la),Nl.subVectors(this.max,la),Xs.subVectors(e.a,la),qs.subVectors(e.b,la),$s.subVectors(e.c,la),Pr.subVectors(qs,Xs),Nr.subVectors($s,qs),cs.subVectors(Xs,$s);let n=[0,-Pr.z,Pr.y,0,-Nr.z,Nr.y,0,-cs.z,cs.y,Pr.z,0,-Pr.x,Nr.z,0,-Nr.x,cs.z,0,-cs.x,-Pr.y,Pr.x,0,-Nr.y,Nr.x,0,-cs.y,cs.x,0];return!of(n,Xs,qs,$s,Nl)||(n=[1,0,0,0,1,0,0,0,1],!of(n,Xs,qs,$s,Nl))?!1:(Dl.crossVectors(Pr,Nr),n=[Dl.x,Dl.y,Dl.z],of(n,Xs,qs,$s,Nl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qi=[new se,new se,new se,new se,new se,new se,new se,new se],Ei=new se,Pl=new tl,Xs=new se,qs=new se,$s=new se,Pr=new se,Nr=new se,cs=new se,la=new se,Nl=new se,Dl=new se,us=new se;function of(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){us.fromArray(t,s);const l=r.x*Math.abs(us.x)+r.y*Math.abs(us.y)+r.z*Math.abs(us.z),u=e.dot(us),d=n.dot(us),m=i.dot(us);if(Math.max(-Math.max(u,d,m),Math.min(u,d,m))>l)return!1}return!0}const OE=new tl,ca=new se,af=new se;class lu{constructor(e=new se,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):OE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ca.subVectors(e,this.center);const n=ca.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ca,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(af.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ca.copy(e.center).add(af)),this.expandByPoint(ca.copy(e.center).sub(af))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ji=new se,lf=new se,Ll=new se,Dr=new se,cf=new se,Il=new se,uf=new se;class cx{constructor(e=new se,n=new se(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ji.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,n),Ji.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){lf.copy(e).add(n).multiplyScalar(.5),Ll.copy(n).sub(e).normalize(),Dr.copy(this.origin).sub(lf);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ll),l=Dr.dot(this.direction),u=-Dr.dot(Ll),d=Dr.lengthSq(),m=Math.abs(1-a*a);let g,v,y,M;if(m>0)if(g=a*u-l,v=a*l-u,M=s*m,g>=0)if(v>=-M)if(v<=M){const A=1/m;g*=A,v*=A,y=g*(g+a*v+2*l)+v*(a*g+v+2*u)+d}else v=s,g=Math.max(0,-(a*v+l)),y=-g*g+v*(v+2*u)+d;else v=-s,g=Math.max(0,-(a*v+l)),y=-g*g+v*(v+2*u)+d;else v<=-M?(g=Math.max(0,-(-a*s+l)),v=g>0?-s:Math.min(Math.max(-s,-u),s),y=-g*g+v*(v+2*u)+d):v<=M?(g=0,v=Math.min(Math.max(-s,-u),s),y=v*(v+2*u)+d):(g=Math.max(0,-(a*s+l)),v=g>0?s:Math.min(Math.max(-s,-u),s),y=-g*g+v*(v+2*u)+d);else v=a>0?-s:s,g=Math.max(0,-(a*v+l)),y=-g*g+v*(v+2*u)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(lf).addScaledVector(Ll,v),y}intersectSphere(e,n){Ji.subVectors(e.center,this.origin);const i=Ji.dot(this.direction),r=Ji.dot(Ji)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),l=i-a,u=i+a;return u<0?null:l<0?this.at(u,n):this.at(l,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,l,u;const d=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return d>=0?(i=(e.min.x-v.x)*d,r=(e.max.x-v.x)*d):(i=(e.max.x-v.x)*d,r=(e.min.x-v.x)*d),m>=0?(s=(e.min.y-v.y)*m,a=(e.max.y-v.y)*m):(s=(e.max.y-v.y)*m,a=(e.min.y-v.y)*m),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),g>=0?(l=(e.min.z-v.z)*g,u=(e.max.z-v.z)*g):(l=(e.max.z-v.z)*g,u=(e.min.z-v.z)*g),i>u||l>r)||((l>i||i!==i)&&(i=l),(u<r||r!==r)&&(r=u),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,n,i,r,s){cf.subVectors(n,e),Il.subVectors(i,e),uf.crossVectors(cf,Il);let a=this.direction.dot(uf),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;Dr.subVectors(this.origin,e);const u=l*this.direction.dot(Il.crossVectors(Dr,Il));if(u<0)return null;const d=l*this.direction.dot(cf.cross(Dr));if(d<0||u+d>a)return null;const m=-l*Dr.dot(uf);return m<0?null:this.at(m/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on{constructor(e,n,i,r,s,a,l,u,d,m,g,v,y,M,A,E){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,l,u,d,m,g,v,y,M,A,E)}set(e,n,i,r,s,a,l,u,d,m,g,v,y,M,A,E){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=l,h[13]=u,h[2]=d,h[6]=m,h[10]=g,h[14]=v,h[3]=y,h[7]=M,h[11]=A,h[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ys.setFromMatrixColumn(e,0).length(),s=1/Ys.setFromMatrixColumn(e,1).length(),a=1/Ys.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),l=Math.sin(i),u=Math.cos(r),d=Math.sin(r),m=Math.cos(s),g=Math.sin(s);if(e.order==="XYZ"){const v=a*m,y=a*g,M=l*m,A=l*g;n[0]=u*m,n[4]=-u*g,n[8]=d,n[1]=y+M*d,n[5]=v-A*d,n[9]=-l*u,n[2]=A-v*d,n[6]=M+y*d,n[10]=a*u}else if(e.order==="YXZ"){const v=u*m,y=u*g,M=d*m,A=d*g;n[0]=v+A*l,n[4]=M*l-y,n[8]=a*d,n[1]=a*g,n[5]=a*m,n[9]=-l,n[2]=y*l-M,n[6]=A+v*l,n[10]=a*u}else if(e.order==="ZXY"){const v=u*m,y=u*g,M=d*m,A=d*g;n[0]=v-A*l,n[4]=-a*g,n[8]=M+y*l,n[1]=y+M*l,n[5]=a*m,n[9]=A-v*l,n[2]=-a*d,n[6]=l,n[10]=a*u}else if(e.order==="ZYX"){const v=a*m,y=a*g,M=l*m,A=l*g;n[0]=u*m,n[4]=M*d-y,n[8]=v*d+A,n[1]=u*g,n[5]=A*d+v,n[9]=y*d-M,n[2]=-d,n[6]=l*u,n[10]=a*u}else if(e.order==="YZX"){const v=a*u,y=a*d,M=l*u,A=l*d;n[0]=u*m,n[4]=A-v*g,n[8]=M*g+y,n[1]=g,n[5]=a*m,n[9]=-l*m,n[2]=-d*m,n[6]=y*g+M,n[10]=v-A*g}else if(e.order==="XZY"){const v=a*u,y=a*d,M=l*u,A=l*d;n[0]=u*m,n[4]=-g,n[8]=d*m,n[1]=v*g+A,n[5]=a*m,n[9]=y*g-M,n[2]=M*g-y,n[6]=l*m,n[10]=A*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BE,e,zE)}lookAt(e,n,i){const r=this.elements;return Qn.subVectors(e,n),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Lr.crossVectors(i,Qn),Lr.lengthSq()===0&&(Math.abs(i.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Lr.crossVectors(i,Qn)),Lr.normalize(),Ul.crossVectors(Qn,Lr),r[0]=Lr.x,r[4]=Ul.x,r[8]=Qn.x,r[1]=Lr.y,r[5]=Ul.y,r[9]=Qn.y,r[2]=Lr.z,r[6]=Ul.z,r[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],l=i[4],u=i[8],d=i[12],m=i[1],g=i[5],v=i[9],y=i[13],M=i[2],A=i[6],E=i[10],h=i[14],S=i[3],w=i[7],C=i[11],k=i[15],I=r[0],f=r[4],B=r[8],D=r[12],N=r[1],O=r[5],q=r[9],W=r[13],ee=r[2],he=r[6],fe=r[10],me=r[14],V=r[3],ce=r[7],_e=r[11],be=r[15];return s[0]=a*I+l*N+u*ee+d*V,s[4]=a*f+l*O+u*he+d*ce,s[8]=a*B+l*q+u*fe+d*_e,s[12]=a*D+l*W+u*me+d*be,s[1]=m*I+g*N+v*ee+y*V,s[5]=m*f+g*O+v*he+y*ce,s[9]=m*B+g*q+v*fe+y*_e,s[13]=m*D+g*W+v*me+y*be,s[2]=M*I+A*N+E*ee+h*V,s[6]=M*f+A*O+E*he+h*ce,s[10]=M*B+A*q+E*fe+h*_e,s[14]=M*D+A*W+E*me+h*be,s[3]=S*I+w*N+C*ee+k*V,s[7]=S*f+w*O+C*he+k*ce,s[11]=S*B+w*q+C*fe+k*_e,s[15]=S*D+w*W+C*me+k*be,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],l=e[5],u=e[9],d=e[13],m=e[2],g=e[6],v=e[10],y=e[14],M=e[3],A=e[7],E=e[11],h=e[15];return M*(+s*u*g-r*d*g-s*l*v+i*d*v+r*l*y-i*u*y)+A*(+n*u*y-n*d*v+s*a*v-r*a*y+r*d*m-s*u*m)+E*(+n*d*g-n*l*y-s*a*g+i*a*y+s*l*m-i*d*m)+h*(-r*l*m-n*u*g+n*l*v+r*a*g-i*a*v+i*u*m)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],u=e[6],d=e[7],m=e[8],g=e[9],v=e[10],y=e[11],M=e[12],A=e[13],E=e[14],h=e[15],S=g*E*d-A*v*d+A*u*y-l*E*y-g*u*h+l*v*h,w=M*v*d-m*E*d-M*u*y+a*E*y+m*u*h-a*v*h,C=m*A*d-M*g*d+M*l*y-a*A*y-m*l*h+a*g*h,k=M*g*u-m*A*u-M*l*v+a*A*v+m*l*E-a*g*E,I=n*S+i*w+r*C+s*k;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const f=1/I;return e[0]=S*f,e[1]=(A*v*s-g*E*s-A*r*y+i*E*y+g*r*h-i*v*h)*f,e[2]=(l*E*s-A*u*s+A*r*d-i*E*d-l*r*h+i*u*h)*f,e[3]=(g*u*s-l*v*s-g*r*d+i*v*d+l*r*y-i*u*y)*f,e[4]=w*f,e[5]=(m*E*s-M*v*s+M*r*y-n*E*y-m*r*h+n*v*h)*f,e[6]=(M*u*s-a*E*s-M*r*d+n*E*d+a*r*h-n*u*h)*f,e[7]=(a*v*s-m*u*s+m*r*d-n*v*d-a*r*y+n*u*y)*f,e[8]=C*f,e[9]=(M*g*s-m*A*s-M*i*y+n*A*y+m*i*h-n*g*h)*f,e[10]=(a*A*s-M*l*s+M*i*d-n*A*d-a*i*h+n*l*h)*f,e[11]=(m*l*s-a*g*s-m*i*d+n*g*d+a*i*y-n*l*y)*f,e[12]=k*f,e[13]=(m*A*r-M*g*r+M*i*v-n*A*v-m*i*E+n*g*E)*f,e[14]=(M*l*r-a*A*r-M*i*u+n*A*u+a*i*E-n*l*E)*f,e[15]=(a*g*r-m*l*r+m*i*u-n*g*u-a*i*v+n*l*v)*f,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,l=e.y,u=e.z,d=s*a,m=s*l;return this.set(d*a+i,d*l-r*u,d*u+r*l,0,d*l+r*u,m*l+i,m*u-r*a,0,d*u-r*l,m*u+r*a,s*u*u+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,l=n._z,u=n._w,d=s+s,m=a+a,g=l+l,v=s*d,y=s*m,M=s*g,A=a*m,E=a*g,h=l*g,S=u*d,w=u*m,C=u*g,k=i.x,I=i.y,f=i.z;return r[0]=(1-(A+h))*k,r[1]=(y+C)*k,r[2]=(M-w)*k,r[3]=0,r[4]=(y-C)*I,r[5]=(1-(v+h))*I,r[6]=(E+S)*I,r[7]=0,r[8]=(M+w)*f,r[9]=(E-S)*f,r[10]=(1-(v+A))*f,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ys.set(r[0],r[1],r[2]).length();const a=Ys.set(r[4],r[5],r[6]).length(),l=Ys.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Mi.copy(this);const d=1/s,m=1/a,g=1/l;return Mi.elements[0]*=d,Mi.elements[1]*=d,Mi.elements[2]*=d,Mi.elements[4]*=m,Mi.elements[5]*=m,Mi.elements[6]*=m,Mi.elements[8]*=g,Mi.elements[9]*=g,Mi.elements[10]*=g,n.setFromRotationMatrix(Mi),i.x=s,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,a,l=ur){const u=this.elements,d=2*s/(n-e),m=2*s/(i-r),g=(n+e)/(n-e),v=(i+r)/(i-r);let y,M;if(l===ur)y=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(l===Vc)y=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=d,u[4]=0,u[8]=g,u[12]=0,u[1]=0,u[5]=m,u[9]=v,u[13]=0,u[2]=0,u[6]=0,u[10]=y,u[14]=M,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,l=ur){const u=this.elements,d=1/(n-e),m=1/(i-r),g=1/(a-s),v=(n+e)*d,y=(i+r)*m;let M,A;if(l===ur)M=(a+s)*g,A=-2*g;else if(l===Vc)M=s*g,A=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=2*d,u[4]=0,u[8]=0,u[12]=-v,u[1]=0,u[5]=2*m,u[9]=0,u[13]=-y,u[2]=0,u[6]=0,u[10]=A,u[14]=-M,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ys=new se,Mi=new on,BE=new se(0,0,0),zE=new se(1,1,1),Lr=new se,Ul=new se,Qn=new se,qm=new on,$m=new el;class xr{constructor(e=0,n=0,i=0,r=xr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],l=r[8],u=r[1],d=r[5],m=r[9],g=r[2],v=r[6],y=r[10];switch(n){case"XYZ":this._y=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(l,y),this._z=Math.atan2(u,d)):(this._y=Math.atan2(-g,s),this._z=0);break;case"ZXY":this._x=Math.asin(bt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-a,d)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-bt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-a,d));break;case"YZX":this._z=Math.asin(bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-g,s)):(this._x=0,this._y=Math.atan2(l,y));break;case"XZY":this._z=Math.asin(-bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return qm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return $m.setFromEuler(this),this.setFromQuaternion($m,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xr.DEFAULT_ORDER="XYZ";class ux{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let HE=0;const Ym=new se,Ks=new el,er=new on,Fl=new se,ua=new se,jE=new se,VE=new el,Km=new se(1,0,0),Zm=new se(0,1,0),Qm=new se(0,0,1),Jm={type:"added"},GE={type:"removed"},Zs={type:"childadded",child:null},ff={type:"childremoved",child:null};class Zn extends Ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=Ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zn.DEFAULT_UP.clone();const e=new se,n=new xr,i=new el,r=new se(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new on},normalMatrix:{value:new dt}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ux,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ks.setFromAxisAngle(e,n),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,n){return Ks.setFromAxisAngle(e,n),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(Km,e)}rotateY(e){return this.rotateOnAxis(Zm,e)}rotateZ(e){return this.rotateOnAxis(Qm,e)}translateOnAxis(e,n){return Ym.copy(e).applyQuaternion(this.quaternion),this.position.add(Ym.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Km,e)}translateY(e){return this.translateOnAxis(Zm,e)}translateZ(e){return this.translateOnAxis(Qm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(er.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Fl.copy(e):Fl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?er.lookAt(ua,Fl,this.up):er.lookAt(Fl,ua,this.up),this.quaternion.setFromRotationMatrix(er),r&&(er.extractRotation(r.matrixWorld),Ks.setFromRotationMatrix(er),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jm),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(GE),ff.child=e,this.dispatchEvent(ff),ff.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),er.multiply(e.parent.matrixWorld)),e.applyMatrix4(er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jm),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,e,jE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,VE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const u=l.shapes;if(Array.isArray(u))for(let d=0,m=u.length;d<m;d++){const g=u[d];s(e.shapes,g)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let u=0,d=this.material.length;u<d;u++)l.push(s(e.materials,this.material[u]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const u=this.animations[l];r.animations.push(s(e.animations,u))}}if(n){const l=a(e.geometries),u=a(e.materials),d=a(e.textures),m=a(e.images),g=a(e.shapes),v=a(e.skeletons),y=a(e.animations),M=a(e.nodes);l.length>0&&(i.geometries=l),u.length>0&&(i.materials=u),d.length>0&&(i.textures=d),m.length>0&&(i.images=m),g.length>0&&(i.shapes=g),v.length>0&&(i.skeletons=v),y.length>0&&(i.animations=y),M.length>0&&(i.nodes=M)}return i.object=r,i;function a(l){const u=[];for(const d in l){const m=l[d];delete m.metadata,u.push(m)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Zn.DEFAULT_UP=new se(0,1,0);Zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new se,tr=new se,df=new se,nr=new se,Qs=new se,Js=new se,eg=new se,hf=new se,pf=new se,mf=new se,gf=new sn,vf=new sn,_f=new sn;class Ci{constructor(e=new se,n=new se,i=new se){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),wi.subVectors(e,n),r.cross(wi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){wi.subVectors(r,n),tr.subVectors(i,n),df.subVectors(e,n);const a=wi.dot(wi),l=wi.dot(tr),u=wi.dot(df),d=tr.dot(tr),m=tr.dot(df),g=a*d-l*l;if(g===0)return s.set(0,0,0),null;const v=1/g,y=(d*u-l*m)*v,M=(a*m-l*u)*v;return s.set(1-y-M,M,y)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,nr)===null?!1:nr.x>=0&&nr.y>=0&&nr.x+nr.y<=1}static getInterpolation(e,n,i,r,s,a,l,u){return this.getBarycoord(e,n,i,r,nr)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,nr.x),u.addScaledVector(a,nr.y),u.addScaledVector(l,nr.z),u)}static getInterpolatedAttribute(e,n,i,r,s,a){return gf.setScalar(0),vf.setScalar(0),_f.setScalar(0),gf.fromBufferAttribute(e,n),vf.fromBufferAttribute(e,i),_f.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(gf,s.x),a.addScaledVector(vf,s.y),a.addScaledVector(_f,s.z),a}static isFrontFacing(e,n,i,r){return wi.subVectors(i,n),tr.subVectors(e,n),wi.cross(tr).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),wi.cross(tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ci.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Ci.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,l;Qs.subVectors(r,i),Js.subVectors(s,i),hf.subVectors(e,i);const u=Qs.dot(hf),d=Js.dot(hf);if(u<=0&&d<=0)return n.copy(i);pf.subVectors(e,r);const m=Qs.dot(pf),g=Js.dot(pf);if(m>=0&&g<=m)return n.copy(r);const v=u*g-m*d;if(v<=0&&u>=0&&m<=0)return a=u/(u-m),n.copy(i).addScaledVector(Qs,a);mf.subVectors(e,s);const y=Qs.dot(mf),M=Js.dot(mf);if(M>=0&&y<=M)return n.copy(s);const A=y*d-u*M;if(A<=0&&d>=0&&M<=0)return l=d/(d-M),n.copy(i).addScaledVector(Js,l);const E=m*M-y*g;if(E<=0&&g-m>=0&&y-M>=0)return eg.subVectors(s,r),l=(g-m)/(g-m+(y-M)),n.copy(r).addScaledVector(eg,l);const h=1/(E+A+v);return a=A*h,l=v*h,n.copy(i).addScaledVector(Qs,a).addScaledVector(Js,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ir={h:0,s:0,l:0},kl={h:0,s:0,l:0};function xf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class At{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ut.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ut.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ut.workingColorSpace){if(e=AE(e,1),n=bt(n,0,1),i=bt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=xf(a,s,e+1/3),this.g=xf(a,s,e),this.b=xf(a,s,e-1/3)}return Ut.toWorkingColorSpace(this,r),this}setStyle(e,n=fi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=fi){const i=fx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}copyLinearToSRGB(e){return this.r=To(e.r),this.g=To(e.g),this.b=To(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return Ut.fromWorkingColorSpace(Pn.copy(this),e),Math.round(bt(Pn.r*255,0,255))*65536+Math.round(bt(Pn.g*255,0,255))*256+Math.round(bt(Pn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ut.workingColorSpace){Ut.fromWorkingColorSpace(Pn.copy(this),n);const i=Pn.r,r=Pn.g,s=Pn.b,a=Math.max(i,r,s),l=Math.min(i,r,s);let u,d;const m=(l+a)/2;if(l===a)u=0,d=0;else{const g=a-l;switch(d=m<=.5?g/(a+l):g/(2-a-l),a){case i:u=(r-s)/g+(r<s?6:0);break;case r:u=(s-i)/g+2;break;case s:u=(i-r)/g+4;break}u/=6}return e.h=u,e.s=d,e.l=m,e}getRGB(e,n=Ut.workingColorSpace){return Ut.fromWorkingColorSpace(Pn.copy(this),n),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=fi){Ut.fromWorkingColorSpace(Pn.copy(this),e);const n=Pn.r,i=Pn.g,r=Pn.b;return e!==fi?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ir),this.setHSL(Ir.h+e,Ir.s+n,Ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ir),e.getHSL(kl);const i=tf(Ir.h,kl.h,n),r=tf(Ir.s,kl.s,n),s=tf(Ir.l,kl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new At;At.NAMES=fx;let WE=0;class nl extends Ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=Ja(),this.name="",this.type="Material",this.blending=wo,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Md,this.blendDst=wd,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==wo&&(i.blending=this.blending),this.side!==ts&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Md&&(i.blendSrc=this.blendSrc),this.blendDst!==wd&&(i.blendDst=this.blendDst),this.blendEquation!==xs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Lo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const l in s){const u=s[l];delete u.metadata,a.push(u)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class dx extends nl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xr,this.combine=$_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cn=new se,Ol=new Ht;let XE=0;class ii{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:XE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Hm,this.updateRanges=[],this.gpuType=cr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ol.fromBufferAttribute(this,n),Ol.applyMatrix3(e),this.setXY(n,Ol.x,Ol.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix3(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix4(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)cn.fromBufferAttribute(this,n),cn.applyNormalMatrix(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)cn.fromBufferAttribute(this,n),cn.transformDirection(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=aa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=aa(n,this.array)),n}setX(e,n){return this.normalized&&(n=Vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=aa(n,this.array)),n}setY(e,n){return this.normalized&&(n=Vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=aa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=aa(n,this.array)),n}setW(e,n){return this.normalized&&(n=Vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Vn(n,this.array),i=Vn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Vn(n,this.array),i=Vn(i,this.array),r=Vn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Vn(n,this.array),i=Vn(i,this.array),r=Vn(r,this.array),s=Vn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hm&&(e.usage=this.usage),e}}class hx extends ii{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class px extends ii{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Cs extends ii{constructor(e,n,i){super(new Float32Array(e),n,i)}}let qE=0;const ui=new on,yf=new Zn,eo=new se,Jn=new tl,fa=new tl,xn=new se;class Er extends Ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=Ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ax(e)?px:hx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new dt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,n,i){return ui.makeTranslation(e,n,i),this.applyMatrix4(ui),this}scale(e,n,i){return ui.makeScale(e,n,i),this.applyMatrix4(ui),this}lookAt(e){return yf.lookAt(e),yf.updateMatrix(),this.applyMatrix4(yf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Cs(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Jn.setFromBufferAttribute(s),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const i=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const l=n[s];fa.setFromBufferAttribute(l),this.morphTargetsRelative?(xn.addVectors(Jn.min,fa.min),Jn.expandByPoint(xn),xn.addVectors(Jn.max,fa.max),Jn.expandByPoint(xn)):(Jn.expandByPoint(fa.min),Jn.expandByPoint(fa.max))}Jn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)xn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(xn));if(n)for(let s=0,a=n.length;s<a;s++){const l=n[s],u=this.morphTargetsRelative;for(let d=0,m=l.count;d<m;d++)xn.fromBufferAttribute(l,d),u&&(eo.fromBufferAttribute(e,d),xn.add(eo)),r=Math.max(r,i.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),l=[],u=[];for(let B=0;B<i.count;B++)l[B]=new se,u[B]=new se;const d=new se,m=new se,g=new se,v=new Ht,y=new Ht,M=new Ht,A=new se,E=new se;function h(B,D,N){d.fromBufferAttribute(i,B),m.fromBufferAttribute(i,D),g.fromBufferAttribute(i,N),v.fromBufferAttribute(s,B),y.fromBufferAttribute(s,D),M.fromBufferAttribute(s,N),m.sub(d),g.sub(d),y.sub(v),M.sub(v);const O=1/(y.x*M.y-M.x*y.y);isFinite(O)&&(A.copy(m).multiplyScalar(M.y).addScaledVector(g,-y.y).multiplyScalar(O),E.copy(g).multiplyScalar(y.x).addScaledVector(m,-M.x).multiplyScalar(O),l[B].add(A),l[D].add(A),l[N].add(A),u[B].add(E),u[D].add(E),u[N].add(E))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let B=0,D=S.length;B<D;++B){const N=S[B],O=N.start,q=N.count;for(let W=O,ee=O+q;W<ee;W+=3)h(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const w=new se,C=new se,k=new se,I=new se;function f(B){k.fromBufferAttribute(r,B),I.copy(k);const D=l[B];w.copy(D),w.sub(k.multiplyScalar(k.dot(D))).normalize(),C.crossVectors(I,D);const O=C.dot(u[B])<0?-1:1;a.setXYZW(B,w.x,w.y,w.z,O)}for(let B=0,D=S.length;B<D;++B){const N=S[B],O=N.start,q=N.count;for(let W=O,ee=O+q;W<ee;W+=3)f(e.getX(W+0)),f(e.getX(W+1)),f(e.getX(W+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ii(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let v=0,y=i.count;v<y;v++)i.setXYZ(v,0,0,0);const r=new se,s=new se,a=new se,l=new se,u=new se,d=new se,m=new se,g=new se;if(e)for(let v=0,y=e.count;v<y;v+=3){const M=e.getX(v+0),A=e.getX(v+1),E=e.getX(v+2);r.fromBufferAttribute(n,M),s.fromBufferAttribute(n,A),a.fromBufferAttribute(n,E),m.subVectors(a,s),g.subVectors(r,s),m.cross(g),l.fromBufferAttribute(i,M),u.fromBufferAttribute(i,A),d.fromBufferAttribute(i,E),l.add(m),u.add(m),d.add(m),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(A,u.x,u.y,u.z),i.setXYZ(E,d.x,d.y,d.z)}else for(let v=0,y=n.count;v<y;v+=3)r.fromBufferAttribute(n,v+0),s.fromBufferAttribute(n,v+1),a.fromBufferAttribute(n,v+2),m.subVectors(a,s),g.subVectors(r,s),m.cross(g),i.setXYZ(v+0,m.x,m.y,m.z),i.setXYZ(v+1,m.x,m.y,m.z),i.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)xn.fromBufferAttribute(e,n),xn.normalize(),e.setXYZ(n,xn.x,xn.y,xn.z)}toNonIndexed(){function e(l,u){const d=l.array,m=l.itemSize,g=l.normalized,v=new d.constructor(u.length*m);let y=0,M=0;for(let A=0,E=u.length;A<E;A++){l.isInterleavedBufferAttribute?y=u[A]*l.data.stride+l.offset:y=u[A]*m;for(let h=0;h<m;h++)v[M++]=d[y++]}return new ii(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Er,i=this.index.array,r=this.attributes;for(const l in r){const u=r[l],d=e(u,i);n.setAttribute(l,d)}const s=this.morphAttributes;for(const l in s){const u=[],d=s[l];for(let m=0,g=d.length;m<g;m++){const v=d[m],y=e(v,i);u.push(y)}n.morphAttributes[l]=u}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const d in u)u[d]!==void 0&&(e[d]=u[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const u in i){const d=i[u];e.data.attributes[u]=d.toJSON(e.data)}const r={};let s=!1;for(const u in this.morphAttributes){const d=this.morphAttributes[u],m=[];for(let g=0,v=d.length;g<v;g++){const y=d[g];m.push(y.toJSON(e.data))}m.length>0&&(r[u]=m,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const d in r){const m=r[d];this.setAttribute(d,m.clone(n))}const s=e.morphAttributes;for(const d in s){const m=[],g=s[d];for(let v=0,y=g.length;v<y;v++)m.push(g[v].clone(n));this.morphAttributes[d]=m}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let d=0,m=a.length;d<m;d++){const g=a[d];this.addGroup(g.start,g.count,g.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tg=new on,fs=new cx,Bl=new lu,ng=new se,zl=new se,Hl=new se,jl=new se,Sf=new se,Vl=new se,ig=new se,Gl=new se;class fr extends Zn{constructor(e=new Er,n=new dx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){Vl.set(0,0,0);for(let u=0,d=s.length;u<d;u++){const m=l[u],g=s[u];m!==0&&(Sf.fromBufferAttribute(g,e),a?Vl.addScaledVector(Sf,m):Vl.addScaledVector(Sf.sub(n),m))}n.add(Vl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bl.copy(i.boundingSphere),Bl.applyMatrix4(s),fs.copy(e.ray).recast(e.near),!(Bl.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Bl,ng)===null||fs.origin.distanceToSquared(ng)>(e.far-e.near)**2))&&(tg.copy(s).invert(),fs.copy(e.ray).applyMatrix4(tg),!(i.boundingBox!==null&&fs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,fs)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,l=s.index,u=s.attributes.position,d=s.attributes.uv,m=s.attributes.uv1,g=s.attributes.normal,v=s.groups,y=s.drawRange;if(l!==null)if(Array.isArray(a))for(let M=0,A=v.length;M<A;M++){const E=v[M],h=a[E.materialIndex],S=Math.max(E.start,y.start),w=Math.min(l.count,Math.min(E.start+E.count,y.start+y.count));for(let C=S,k=w;C<k;C+=3){const I=l.getX(C),f=l.getX(C+1),B=l.getX(C+2);r=Wl(this,h,e,i,d,m,g,I,f,B),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=E.materialIndex,n.push(r))}}else{const M=Math.max(0,y.start),A=Math.min(l.count,y.start+y.count);for(let E=M,h=A;E<h;E+=3){const S=l.getX(E),w=l.getX(E+1),C=l.getX(E+2);r=Wl(this,a,e,i,d,m,g,S,w,C),r&&(r.faceIndex=Math.floor(E/3),n.push(r))}}else if(u!==void 0)if(Array.isArray(a))for(let M=0,A=v.length;M<A;M++){const E=v[M],h=a[E.materialIndex],S=Math.max(E.start,y.start),w=Math.min(u.count,Math.min(E.start+E.count,y.start+y.count));for(let C=S,k=w;C<k;C+=3){const I=C,f=C+1,B=C+2;r=Wl(this,h,e,i,d,m,g,I,f,B),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=E.materialIndex,n.push(r))}}else{const M=Math.max(0,y.start),A=Math.min(u.count,y.start+y.count);for(let E=M,h=A;E<h;E+=3){const S=E,w=E+1,C=E+2;r=Wl(this,a,e,i,d,m,g,S,w,C),r&&(r.faceIndex=Math.floor(E/3),n.push(r))}}}}function $E(t,e,n,i,r,s,a,l){let u;if(e.side===Yn?u=i.intersectTriangle(a,s,r,!0,l):u=i.intersectTriangle(r,s,a,e.side===ts,l),u===null)return null;Gl.copy(l),Gl.applyMatrix4(t.matrixWorld);const d=n.ray.origin.distanceTo(Gl);return d<n.near||d>n.far?null:{distance:d,point:Gl.clone(),object:t}}function Wl(t,e,n,i,r,s,a,l,u,d){t.getVertexPosition(l,zl),t.getVertexPosition(u,Hl),t.getVertexPosition(d,jl);const m=$E(t,e,n,i,zl,Hl,jl,ig);if(m){const g=new se;Ci.getBarycoord(ig,zl,Hl,jl,g),r&&(m.uv=Ci.getInterpolatedAttribute(r,l,u,d,g,new Ht)),s&&(m.uv1=Ci.getInterpolatedAttribute(s,l,u,d,g,new Ht)),a&&(m.normal=Ci.getInterpolatedAttribute(a,l,u,d,g,new se),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const v={a:l,b:u,c:d,normal:new se,materialIndex:0};Ci.getNormal(zl,Hl,jl,v.normal),m.face=v,m.barycoord=g}return m}class il extends Er{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const u=[],d=[],m=[],g=[];let v=0,y=0;M("z","y","x",-1,-1,i,n,e,a,s,0),M("z","y","x",1,-1,i,n,-e,a,s,1),M("x","z","y",1,1,e,i,n,r,a,2),M("x","z","y",1,-1,e,i,-n,r,a,3),M("x","y","z",1,-1,e,n,i,r,s,4),M("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(u),this.setAttribute("position",new Cs(d,3)),this.setAttribute("normal",new Cs(m,3)),this.setAttribute("uv",new Cs(g,2));function M(A,E,h,S,w,C,k,I,f,B,D){const N=C/f,O=k/B,q=C/2,W=k/2,ee=I/2,he=f+1,fe=B+1;let me=0,V=0;const ce=new se;for(let _e=0;_e<fe;_e++){const be=_e*O-W;for(let Ge=0;Ge<he;Ge++){const st=Ge*N-q;ce[A]=st*S,ce[E]=be*w,ce[h]=ee,d.push(ce.x,ce.y,ce.z),ce[A]=0,ce[E]=0,ce[h]=I>0?1:-1,m.push(ce.x,ce.y,ce.z),g.push(Ge/f),g.push(1-_e/B),me+=1}}for(let _e=0;_e<B;_e++)for(let be=0;be<f;be++){const Ge=v+be+he*_e,st=v+be+he*(_e+1),oe=v+(be+1)+he*(_e+1),xe=v+(be+1)+he*_e;u.push(Ge,st,xe),u.push(st,oe,xe),V+=6}l.addGroup(y,V,D),y+=V,v+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ko(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Un(t){const e={};for(let n=0;n<t.length;n++){const i=ko(t[n]);for(const r in i)e[r]=i[r]}return e}function YE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function mx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const KE={clone:ko,merge:Un};var ZE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends nl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZE,this.fragmentShader=QE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ko(e.uniforms),this.uniformsGroups=YE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class gx extends Zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=ur}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ur=new se,rg=new Ht,sg=new Ht;class pi extends gx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=lh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ef*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lh*2*Math.atan(Math.tan(ef*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z),Ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z)}getViewSize(e,n){return this.getViewBounds(e,rg,sg),n.subVectors(sg,rg)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ef*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const u=a.fullWidth,d=a.fullHeight;s+=a.offsetX*r/u,n-=a.offsetY*i/d,r*=a.width/u,i*=a.height/d}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const to=-90,no=1;class JE extends Zn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pi(to,no,e,n);r.layers=this.layers,this.add(r);const s=new pi(to,no,e,n);s.layers=this.layers,this.add(s);const a=new pi(to,no,e,n);a.layers=this.layers,this.add(a);const l=new pi(to,no,e,n);l.layers=this.layers,this.add(l);const u=new pi(to,no,e,n);u.layers=this.layers,this.add(u);const d=new pi(to,no,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,l,u]=n;for(const d of n)this.remove(d);if(e===ur)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Vc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,u,d,m]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,l),e.setRenderTarget(i,3,r),e.render(n,u),e.setRenderTarget(i,4,r),e.render(n,d),i.texture.generateMipmaps=A,e.setRenderTarget(i,5,r),e.render(n,m),e.setRenderTarget(g,v,y),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class vx extends Kn{constructor(e=[],n=Io,i,r,s,a,l,u,d,m){super(e,n,i,r,s,a,l,u,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eM extends Us{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new vx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Vi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new il(5,5,5),s=new yr({name:"CubemapFromEquirect",uniforms:ko(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yn,blending:Zr});s.uniforms.tEquirect.value=n;const a=new fr(r,s),l=n.minFilter;return n.minFilter===Ts&&(n.minFilter=Vi),new JE(1,10,this).update(e,a),n.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}class Xl extends Zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tM={type:"move"};class Ef{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const l=this._targetRay,u=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){a=!0;for(const A of e.hand.values()){const E=n.getJointPose(A,i),h=this._getHandJoint(d,A);E!==null&&(h.matrix.fromArray(E.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=E.radius),h.visible=E!==null}const m=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],v=m.position.distanceTo(g.position),y=.02,M=.005;d.inputState.pinching&&v>y+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=y-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));l!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(tM)))}return l!==null&&(l.visible=r!==null),u!==null&&(u.visible=s!==null),d!==null&&(d.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Xl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class nM extends Zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xr,this.environmentIntensity=1,this.environmentRotation=new xr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Mf=new se,iM=new se,rM=new dt;class vs{constructor(e=new se(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Mf.subVectors(i,n).cross(iM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Mf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||rM.getNormalMatrix(e),r=this.coplanarPoint(Mf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ds=new lu,ql=new se;class _x{constructor(e=new vs,n=new vs,i=new vs,r=new vs,s=new vs,a=new vs){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const l=this.planes;return l[0].copy(e),l[1].copy(n),l[2].copy(i),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ur){const i=this.planes,r=e.elements,s=r[0],a=r[1],l=r[2],u=r[3],d=r[4],m=r[5],g=r[6],v=r[7],y=r[8],M=r[9],A=r[10],E=r[11],h=r[12],S=r[13],w=r[14],C=r[15];if(i[0].setComponents(u-s,v-d,E-y,C-h).normalize(),i[1].setComponents(u+s,v+d,E+y,C+h).normalize(),i[2].setComponents(u+a,v+m,E+M,C+S).normalize(),i[3].setComponents(u-a,v-m,E-M,C-S).normalize(),i[4].setComponents(u-l,v-g,E-A,C-w).normalize(),n===ur)i[5].setComponents(u+l,v+g,E+A,C+w).normalize();else if(n===Vc)i[5].setComponents(l,g,A,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){return ds.center.set(0,0,0),ds.radius=.7071067811865476,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ql.x=r.normal.x>0?e.max.x:e.min.x,ql.y=r.normal.y>0?e.max.y:e.min.y,ql.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ql)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sM extends nl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const og=new on,ch=new cx,$l=new lu,Yl=new se;class oM extends Zn{constructor(e=new Er,n=new sM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$l.copy(i.boundingSphere),$l.applyMatrix4(r),$l.radius+=s,e.ray.intersectsSphere($l)===!1)return;og.copy(r).invert(),ch.copy(e.ray).applyMatrix4(og);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,d=i.index,g=i.attributes.position;if(d!==null){const v=Math.max(0,a.start),y=Math.min(d.count,a.start+a.count);for(let M=v,A=y;M<A;M++){const E=d.getX(M);Yl.fromBufferAttribute(g,E),ag(Yl,E,u,r,e,n,this)}}else{const v=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let M=v,A=y;M<A;M++)Yl.fromBufferAttribute(g,M),ag(Yl,M,u,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function ag(t,e,n,i,r,s,a){const l=ch.distanceSqToPoint(t);if(l<n){const u=new se;ch.closestPointToPoint(t,u),u.applyMatrix4(i);const d=r.ray.origin.distanceTo(u);if(d<r.near||d>r.far)return;s.push({distance:d,distanceToRay:Math.sqrt(l),point:u,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class xx extends Kn{constructor(e,n,i=Is,r,s,a,l=Di,u=Di,d,m=Wa){if(m!==Wa&&m!==Xa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,a,l,u,m,i,d),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class cu extends Er{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,l=Math.floor(i),u=Math.floor(r),d=l+1,m=u+1,g=e/l,v=n/u,y=[],M=[],A=[],E=[];for(let h=0;h<m;h++){const S=h*v-a;for(let w=0;w<d;w++){const C=w*g-s;M.push(C,-S,0),A.push(0,0,1),E.push(w/l),E.push(1-h/u)}}for(let h=0;h<u;h++)for(let S=0;S<l;S++){const w=S+d*h,C=S+d*(h+1),k=S+1+d*(h+1),I=S+1+d*h;y.push(w,C,I),y.push(C,k,I)}this.setIndex(y),this.setAttribute("position",new Cs(M,3)),this.setAttribute("normal",new Cs(A,3)),this.setAttribute("uv",new Cs(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cu(e.width,e.height,e.widthSegments,e.heightSegments)}}class aM extends nl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lM extends nl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class cM extends gx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,l=r+n,u=r-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=d*this.view.offsetX,a=s+d*this.view.width,l-=m*this.view.offsetY,u=l-m*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class uM extends pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function lg(t,e,n,i){const r=fM(i);switch(n){case J_:return t*e;case tx:return t*e;case nx:return t*e*2;case ix:return t*e/r.components*r.byteLength;case up:return t*e/r.components*r.byteLength;case rx:return t*e*2/r.components*r.byteLength;case fp:return t*e*2/r.components*r.byteLength;case ex:return t*e*3/r.components*r.byteLength;case Ri:return t*e*4/r.components*r.byteLength;case dp:return t*e*4/r.components*r.byteLength;case fc:case dc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case hc:case pc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case kd:case Bd:return Math.max(t,16)*Math.max(e,8)/4;case Fd:case Od:return Math.max(t,8)*Math.max(e,8)/2;case zd:case Hd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case jd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case qd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case $d:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Zd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case eh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case th:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case nh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case mc:case ih:case rh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case sx:case sh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case oh:case ah:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function fM(t){switch(t){case _r:case K_:return{byteLength:1,components:1};case Va:case Z_:case Qa:return{byteLength:2,components:1};case lp:case cp:return{byteLength:2,components:4};case Is:case ap:case cr:return{byteLength:4,components:1};case Q_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:op}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=op);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function dM(t){const e=new WeakMap;function n(l,u){const d=l.array,m=l.usage,g=d.byteLength,v=t.createBuffer();t.bindBuffer(u,v),t.bufferData(u,d,m),l.onUploadCallback();let y;if(d instanceof Float32Array)y=t.FLOAT;else if(d instanceof Uint16Array)l.isFloat16BufferAttribute?y=t.HALF_FLOAT:y=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=t.SHORT;else if(d instanceof Uint32Array)y=t.UNSIGNED_INT;else if(d instanceof Int32Array)y=t.INT;else if(d instanceof Int8Array)y=t.BYTE;else if(d instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:g}}function i(l,u,d){const m=u.array,g=u.updateRanges;if(t.bindBuffer(d,l),g.length===0)t.bufferSubData(d,0,m);else{g.sort((y,M)=>y.start-M.start);let v=0;for(let y=1;y<g.length;y++){const M=g[v],A=g[y];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++v,g[v]=A)}g.length=v+1;for(let y=0,M=g.length;y<M;y++){const A=g[y];t.bufferSubData(d,A.start*m.BYTES_PER_ELEMENT,m,A.start,A.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=e.get(l);u&&(t.deleteBuffer(u.buffer),e.delete(l))}function a(l,u){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const m=e.get(l);(!m||m.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const d=e.get(l);if(d===void 0)e.set(l,n(l,u));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,l,u),d.version=l.version}}return{get:r,remove:s,update:a}}var hM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_M=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,EM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,MM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bM=`#ifdef USE_IRIDESCENCE
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
#endif`,AM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,IM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,UM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,FM=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,OM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,BM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VM="gl_FragColor = linearToOutputTexel( gl_FragColor );",GM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WM=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,XM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qM=`#ifdef USE_ENVMAP
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
#endif`,$M=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YM=`#ifdef USE_ENVMAP
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
#endif`,KM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ew=`#ifdef USE_GRADIENTMAP
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
}`,tw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,sw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ow=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,dw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_w=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ew=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ww=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Aw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Rw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ow=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ww=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$w=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Yw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Kw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Zw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tT=`#ifdef USE_SKINNING
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
#endif`,nT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,oT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aT=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_T=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,xT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,ST=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ET=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,AT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,RT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,NT=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,LT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,IT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,UT=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,kT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,BT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,HT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,GT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,WT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:hM,alphahash_pars_fragment:pM,alphamap_fragment:mM,alphamap_pars_fragment:gM,alphatest_fragment:vM,alphatest_pars_fragment:_M,aomap_fragment:xM,aomap_pars_fragment:yM,batching_pars_vertex:SM,batching_vertex:EM,begin_vertex:MM,beginnormal_vertex:wM,bsdfs:TM,iridescence_fragment:bM,bumpmap_pars_fragment:AM,clipping_planes_fragment:CM,clipping_planes_pars_fragment:RM,clipping_planes_pars_vertex:PM,clipping_planes_vertex:NM,color_fragment:DM,color_pars_fragment:LM,color_pars_vertex:IM,color_vertex:UM,common:FM,cube_uv_reflection_fragment:kM,defaultnormal_vertex:OM,displacementmap_pars_vertex:BM,displacementmap_vertex:zM,emissivemap_fragment:HM,emissivemap_pars_fragment:jM,colorspace_fragment:VM,colorspace_pars_fragment:GM,envmap_fragment:WM,envmap_common_pars_fragment:XM,envmap_pars_fragment:qM,envmap_pars_vertex:$M,envmap_physical_pars_fragment:sw,envmap_vertex:YM,fog_vertex:KM,fog_pars_vertex:ZM,fog_fragment:QM,fog_pars_fragment:JM,gradientmap_pars_fragment:ew,lightmap_pars_fragment:tw,lights_lambert_fragment:nw,lights_lambert_pars_fragment:iw,lights_pars_begin:rw,lights_toon_fragment:ow,lights_toon_pars_fragment:aw,lights_phong_fragment:lw,lights_phong_pars_fragment:cw,lights_physical_fragment:uw,lights_physical_pars_fragment:fw,lights_fragment_begin:dw,lights_fragment_maps:hw,lights_fragment_end:pw,logdepthbuf_fragment:mw,logdepthbuf_pars_fragment:gw,logdepthbuf_pars_vertex:vw,logdepthbuf_vertex:_w,map_fragment:xw,map_pars_fragment:yw,map_particle_fragment:Sw,map_particle_pars_fragment:Ew,metalnessmap_fragment:Mw,metalnessmap_pars_fragment:ww,morphinstance_vertex:Tw,morphcolor_vertex:bw,morphnormal_vertex:Aw,morphtarget_pars_vertex:Cw,morphtarget_vertex:Rw,normal_fragment_begin:Pw,normal_fragment_maps:Nw,normal_pars_fragment:Dw,normal_pars_vertex:Lw,normal_vertex:Iw,normalmap_pars_fragment:Uw,clearcoat_normal_fragment_begin:Fw,clearcoat_normal_fragment_maps:kw,clearcoat_pars_fragment:Ow,iridescence_pars_fragment:Bw,opaque_fragment:zw,packing:Hw,premultiplied_alpha_fragment:jw,project_vertex:Vw,dithering_fragment:Gw,dithering_pars_fragment:Ww,roughnessmap_fragment:Xw,roughnessmap_pars_fragment:qw,shadowmap_pars_fragment:$w,shadowmap_pars_vertex:Yw,shadowmap_vertex:Kw,shadowmask_pars_fragment:Zw,skinbase_vertex:Qw,skinning_pars_vertex:Jw,skinning_vertex:eT,skinnormal_vertex:tT,specularmap_fragment:nT,specularmap_pars_fragment:iT,tonemapping_fragment:rT,tonemapping_pars_fragment:sT,transmission_fragment:oT,transmission_pars_fragment:aT,uv_pars_fragment:lT,uv_pars_vertex:cT,uv_vertex:uT,worldpos_vertex:fT,background_vert:dT,background_frag:hT,backgroundCube_vert:pT,backgroundCube_frag:mT,cube_vert:gT,cube_frag:vT,depth_vert:_T,depth_frag:xT,distanceRGBA_vert:yT,distanceRGBA_frag:ST,equirect_vert:ET,equirect_frag:MT,linedashed_vert:wT,linedashed_frag:TT,meshbasic_vert:bT,meshbasic_frag:AT,meshlambert_vert:CT,meshlambert_frag:RT,meshmatcap_vert:PT,meshmatcap_frag:NT,meshnormal_vert:DT,meshnormal_frag:LT,meshphong_vert:IT,meshphong_frag:UT,meshphysical_vert:FT,meshphysical_frag:kT,meshtoon_vert:OT,meshtoon_frag:BT,points_vert:zT,points_frag:HT,shadow_vert:jT,shadow_frag:VT,sprite_vert:GT,sprite_frag:WT},Re={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Hi={basic:{uniforms:Un([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Un([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new At(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Un([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Un([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Un([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new At(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Un([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Un([Re.points,Re.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Un([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Un([Re.common,Re.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Un([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Un([Re.sprite,Re.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Un([Re.common,Re.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Un([Re.lights,Re.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Hi.physical={uniforms:Un([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Kl={r:0,b:0,g:0},hs=new xr,XT=new on;function qT(t,e,n,i,r,s,a){const l=new At(0);let u=s===!0?0:1,d,m,g=null,v=0,y=null;function M(w){let C=w.isScene===!0?w.background:null;return C&&C.isTexture&&(C=(w.backgroundBlurriness>0?n:e).get(C)),C}function A(w){let C=!1;const k=M(w);k===null?h(l,u):k&&k.isColor&&(h(k,1),C=!0);const I=t.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||C)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(w,C){const k=M(C);k&&(k.isCubeTexture||k.mapping===au)?(m===void 0&&(m=new fr(new il(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:ko(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(I,f,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),hs.copy(C.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),m.material.uniforms.envMap.value=k,m.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(XT.makeRotationFromEuler(hs)),m.material.toneMapped=Ut.getTransfer(k.colorSpace)!==jt,(g!==k||v!==k.version||y!==t.toneMapping)&&(m.material.needsUpdate=!0,g=k,v=k.version,y=t.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null)):k&&k.isTexture&&(d===void 0&&(d=new fr(new cu(2,2),new yr({name:"BackgroundMaterial",uniforms:ko(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=k,d.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,d.material.toneMapped=Ut.getTransfer(k.colorSpace)!==jt,k.matrixAutoUpdate===!0&&k.updateMatrix(),d.material.uniforms.uvTransform.value.copy(k.matrix),(g!==k||v!==k.version||y!==t.toneMapping)&&(d.material.needsUpdate=!0,g=k,v=k.version,y=t.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null))}function h(w,C){w.getRGB(Kl,mx(t)),i.buffers.color.setClear(Kl.r,Kl.g,Kl.b,C,a)}function S(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return l},setClearColor:function(w,C=1){l.set(w),u=C,h(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(w){u=w,h(l,u)},render:A,addToRenderList:E,dispose:S}}function $T(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=v(null);let s=r,a=!1;function l(N,O,q,W,ee){let he=!1;const fe=g(W,q,O);s!==fe&&(s=fe,d(s.object)),he=y(N,W,q,ee),he&&M(N,W,q,ee),ee!==null&&e.update(ee,t.ELEMENT_ARRAY_BUFFER),(he||a)&&(a=!1,C(N,O,q,W),ee!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function u(){return t.createVertexArray()}function d(N){return t.bindVertexArray(N)}function m(N){return t.deleteVertexArray(N)}function g(N,O,q){const W=q.wireframe===!0;let ee=i[N.id];ee===void 0&&(ee={},i[N.id]=ee);let he=ee[O.id];he===void 0&&(he={},ee[O.id]=he);let fe=he[W];return fe===void 0&&(fe=v(u()),he[W]=fe),fe}function v(N){const O=[],q=[],W=[];for(let ee=0;ee<n;ee++)O[ee]=0,q[ee]=0,W[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:q,attributeDivisors:W,object:N,attributes:{},index:null}}function y(N,O,q,W){const ee=s.attributes,he=O.attributes;let fe=0;const me=q.getAttributes();for(const V in me)if(me[V].location>=0){const _e=ee[V];let be=he[V];if(be===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(be=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(be=N.instanceColor)),_e===void 0||_e.attribute!==be||be&&_e.data!==be.data)return!0;fe++}return s.attributesNum!==fe||s.index!==W}function M(N,O,q,W){const ee={},he=O.attributes;let fe=0;const me=q.getAttributes();for(const V in me)if(me[V].location>=0){let _e=he[V];_e===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(_e=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(_e=N.instanceColor));const be={};be.attribute=_e,_e&&_e.data&&(be.data=_e.data),ee[V]=be,fe++}s.attributes=ee,s.attributesNum=fe,s.index=W}function A(){const N=s.newAttributes;for(let O=0,q=N.length;O<q;O++)N[O]=0}function E(N){h(N,0)}function h(N,O){const q=s.newAttributes,W=s.enabledAttributes,ee=s.attributeDivisors;q[N]=1,W[N]===0&&(t.enableVertexAttribArray(N),W[N]=1),ee[N]!==O&&(t.vertexAttribDivisor(N,O),ee[N]=O)}function S(){const N=s.newAttributes,O=s.enabledAttributes;for(let q=0,W=O.length;q<W;q++)O[q]!==N[q]&&(t.disableVertexAttribArray(q),O[q]=0)}function w(N,O,q,W,ee,he,fe){fe===!0?t.vertexAttribIPointer(N,O,q,ee,he):t.vertexAttribPointer(N,O,q,W,ee,he)}function C(N,O,q,W){A();const ee=W.attributes,he=q.getAttributes(),fe=O.defaultAttributeValues;for(const me in he){const V=he[me];if(V.location>=0){let ce=ee[me];if(ce===void 0&&(me==="instanceMatrix"&&N.instanceMatrix&&(ce=N.instanceMatrix),me==="instanceColor"&&N.instanceColor&&(ce=N.instanceColor)),ce!==void 0){const _e=ce.normalized,be=ce.itemSize,Ge=e.get(ce);if(Ge===void 0)continue;const st=Ge.buffer,oe=Ge.type,xe=Ge.bytesPerElement,Ae=oe===t.INT||oe===t.UNSIGNED_INT||ce.gpuType===ap;if(ce.isInterleavedBufferAttribute){const ye=ce.data,Fe=ye.stride,nt=ce.offset;if(ye.isInstancedInterleavedBuffer){for(let He=0;He<V.locationSize;He++)h(V.location+He,ye.meshPerAttribute);N.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let He=0;He<V.locationSize;He++)E(V.location+He);t.bindBuffer(t.ARRAY_BUFFER,st);for(let He=0;He<V.locationSize;He++)w(V.location+He,be/V.locationSize,oe,_e,Fe*xe,(nt+be/V.locationSize*He)*xe,Ae)}else{if(ce.isInstancedBufferAttribute){for(let ye=0;ye<V.locationSize;ye++)h(V.location+ye,ce.meshPerAttribute);N.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ye=0;ye<V.locationSize;ye++)E(V.location+ye);t.bindBuffer(t.ARRAY_BUFFER,st);for(let ye=0;ye<V.locationSize;ye++)w(V.location+ye,be/V.locationSize,oe,_e,be*xe,be/V.locationSize*ye*xe,Ae)}}else if(fe!==void 0){const _e=fe[me];if(_e!==void 0)switch(_e.length){case 2:t.vertexAttrib2fv(V.location,_e);break;case 3:t.vertexAttrib3fv(V.location,_e);break;case 4:t.vertexAttrib4fv(V.location,_e);break;default:t.vertexAttrib1fv(V.location,_e)}}}}S()}function k(){B();for(const N in i){const O=i[N];for(const q in O){const W=O[q];for(const ee in W)m(W[ee].object),delete W[ee];delete O[q]}delete i[N]}}function I(N){if(i[N.id]===void 0)return;const O=i[N.id];for(const q in O){const W=O[q];for(const ee in W)m(W[ee].object),delete W[ee];delete O[q]}delete i[N.id]}function f(N){for(const O in i){const q=i[O];if(q[N.id]===void 0)continue;const W=q[N.id];for(const ee in W)m(W[ee].object),delete W[ee];delete q[N.id]}}function B(){D(),a=!0,s!==r&&(s=r,d(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:B,resetDefaultState:D,dispose:k,releaseStatesOfGeometry:I,releaseStatesOfProgram:f,initAttributes:A,enableAttribute:E,disableUnusedAttributes:S}}function YT(t,e,n){let i;function r(d){i=d}function s(d,m){t.drawArrays(i,d,m),n.update(m,i,1)}function a(d,m,g){g!==0&&(t.drawArraysInstanced(i,d,m,g),n.update(m,i,g))}function l(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,m,0,g);let y=0;for(let M=0;M<g;M++)y+=m[M];n.update(y,i,1)}function u(d,m,g,v){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<d.length;M++)a(d[M],m[M],v[M]);else{y.multiDrawArraysInstancedWEBGL(i,d,0,m,0,v,0,g);let M=0;for(let A=0;A<g;A++)M+=m[A]*v[A];n.update(M,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function KT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const f=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(f.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(f){return!(f!==Ri&&i.convert(f)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(f){const B=f===Qa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(f!==_r&&i.convert(f)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&f!==cr&&!B)}function u(f){if(f==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";f="mediump"}return f==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const m=u(d);m!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",m,"instead."),d=m);const g=n.logarithmicDepthBuffer===!0,v=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=t.getParameter(t.MAX_TEXTURE_SIZE),E=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),S=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),w=t.getParameter(t.MAX_VARYING_VECTORS),C=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),k=M>0,I=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:a,textureTypeReadable:l,precision:d,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:E,maxAttributes:h,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:C,vertexTextures:k,maxSamples:I}}function ZT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new vs,l=new dt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||i!==0||r;return r=v,i=g.length,y},this.beginShadows=function(){s=!0,m(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(g,v){n=m(g,v,0)},this.setState=function(g,v,y){const M=g.clippingPlanes,A=g.clipIntersection,E=g.clipShadows,h=t.get(g);if(!r||M===null||M.length===0||s&&!E)s?m(null):d();else{const S=s?0:i,w=S*4;let C=h.clippingState||null;u.value=C,C=m(M,v,w,y);for(let k=0;k!==w;++k)C[k]=n[k];h.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=S}};function d(){u.value!==n&&(u.value=n,u.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(g,v,y,M){const A=g!==null?g.length:0;let E=null;if(A!==0){if(E=u.value,M!==!0||E===null){const h=y+A*4,S=v.matrixWorldInverse;l.getNormalMatrix(S),(E===null||E.length<h)&&(E=new Float32Array(h));for(let w=0,C=y;w!==A;++w,C+=4)a.copy(g[w]).applyMatrix4(S,l),a.normal.toArray(E,C),E[C+3]=a.constant}u.value=E,u.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,E}}function QT(t){let e=new WeakMap;function n(a,l){return l===Dd?a.mapping=Io:l===Ld&&(a.mapping=Uo),a}function i(a){if(a&&a.isTexture){const l=a.mapping;if(l===Dd||l===Ld)if(e.has(a)){const u=e.get(a).texture;return n(u,a.mapping)}else{const u=a.image;if(u&&u.height>0){const d=new eM(u.height);return d.fromEquirectangularTexture(t,a),e.set(a,d),a.addEventListener("dispose",r),n(d.texture,a.mapping)}else return null}}return a}function r(a){const l=a.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const vo=4,cg=[.125,.215,.35,.446,.526,.582],ys=20,wf=new cM,ug=new At;let Tf=null,bf=0,Af=0,Cf=!1;const _s=(1+Math.sqrt(5))/2,io=1/_s,fg=[new se(-_s,io,0),new se(_s,io,0),new se(-io,0,_s),new se(io,0,_s),new se(0,_s,-io),new se(0,_s,io),new se(-1,1,-1),new se(1,1,-1),new se(-1,1,1),new se(1,1,1)],JT=new se;class dg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:l=JT}=s;Tf=this._renderer.getRenderTarget(),bf=this._renderer.getActiveCubeFace(),Af=this._renderer.getActiveMipmapLevel(),Cf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,i,r,u,l),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tf,bf,Af),this._renderer.xr.enabled=Cf,e.scissorTest=!1,Zl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Io||e.mapping===Uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tf=this._renderer.getRenderTarget(),bf=this._renderer.getActiveCubeFace(),Af=this._renderer.getActiveMipmapLevel(),Cf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Vi,minFilter:Vi,generateMipmaps:!1,type:Qa,format:Ri,colorSpace:Fo,depthBuffer:!1},r=hg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=e1(s)),this._blurMaterial=t1(s,e,n)}return r}_compileMaterial(e){const n=new fr(this._lodPlanes[0],e);this._renderer.compile(n,wf)}_sceneToCubeUV(e,n,i,r,s){const u=new pi(90,1,n,i),d=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(ug),g.toneMapping=Qr,g.autoClear=!1;const M=new dx({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),A=new fr(new il,M);let E=!1;const h=e.background;h?h.isColor&&(M.color.copy(h),e.background=null,E=!0):(M.color.copy(ug),E=!0);for(let S=0;S<6;S++){const w=S%3;w===0?(u.up.set(0,d[S],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x+m[S],s.y,s.z)):w===1?(u.up.set(0,0,d[S]),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y+m[S],s.z)):(u.up.set(0,d[S],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y,s.z+m[S]));const C=this._cubeSize;Zl(r,w*C,S>2?C:0,C,C),g.setRenderTarget(r),E&&g.render(A,u),g.render(e,u)}A.geometry.dispose(),A.material.dispose(),g.toneMapping=y,g.autoClear=v,e.background=h}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Io||e.mapping===Uo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pg());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new fr(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const u=this._cubeSize;Zl(n,0,0,3*u,2*u),i.setRenderTarget(n),i.render(a,wf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=fg[(r-s-1)%fg.length];this._blur(e,s-1,s,a,l)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,l){const u=this._renderer,d=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new fr(this._lodPlanes[r],d),v=d.uniforms,y=this._sizeLods[i]-1,M=isFinite(s)?Math.PI/(2*y):2*Math.PI/(2*ys-1),A=s/M,E=isFinite(s)?1+Math.floor(m*A):ys;E>ys&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${ys}`);const h=[];let S=0;for(let f=0;f<ys;++f){const B=f/A,D=Math.exp(-B*B/2);h.push(D),f===0?S+=D:f<E&&(S+=2*D)}for(let f=0;f<h.length;f++)h[f]=h[f]/S;v.envMap.value=e.texture,v.samples.value=E,v.weights.value=h,v.latitudinal.value=a==="latitudinal",l&&(v.poleAxis.value=l);const{_lodMax:w}=this;v.dTheta.value=M,v.mipInt.value=w-i;const C=this._sizeLods[r],k=3*C*(r>w-vo?r-w+vo:0),I=4*(this._cubeSize-C);Zl(n,k,I,3*C,2*C),u.setRenderTarget(n),u.render(g,wf)}}function e1(t){const e=[],n=[],i=[];let r=t;const s=t-vo+1+cg.length;for(let a=0;a<s;a++){const l=Math.pow(2,r);n.push(l);let u=1/l;a>t-vo?u=cg[a-t+vo-1]:a===0&&(u=0),i.push(u);const d=1/(l-2),m=-d,g=1+d,v=[m,m,g,m,g,g,m,m,g,g,m,g],y=6,M=6,A=3,E=2,h=1,S=new Float32Array(A*M*y),w=new Float32Array(E*M*y),C=new Float32Array(h*M*y);for(let I=0;I<y;I++){const f=I%3*2/3-1,B=I>2?0:-1,D=[f,B,0,f+2/3,B,0,f+2/3,B+1,0,f,B,0,f+2/3,B+1,0,f,B+1,0];S.set(D,A*M*I),w.set(v,E*M*I);const N=[I,I,I,I,I,I];C.set(N,h*M*I)}const k=new Er;k.setAttribute("position",new ii(S,A)),k.setAttribute("uv",new ii(w,E)),k.setAttribute("faceIndex",new ii(C,h)),e.push(k),r>vo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function hg(t,e,n){const i=new Us(t,e,n);return i.texture.mapping=au,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function t1(t,e,n){const i=new Float32Array(ys),r=new se(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:pp(),fragmentShader:`

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
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function pg(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pp(),fragmentShader:`

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
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function mg(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function pp(){return`

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
	`}function n1(t){let e=new WeakMap,n=null;function i(l){if(l&&l.isTexture){const u=l.mapping,d=u===Dd||u===Ld,m=u===Io||u===Uo;if(d||m){let g=e.get(l);const v=g!==void 0?g.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==v)return n===null&&(n=new dg(t)),g=d?n.fromEquirectangular(l,g):n.fromCubemap(l,g),g.texture.pmremVersion=l.pmremVersion,e.set(l,g),g.texture;if(g!==void 0)return g.texture;{const y=l.image;return d&&y&&y.height>0||m&&y&&r(y)?(n===null&&(n=new dg(t)),g=d?n.fromEquirectangular(l):n.fromCubemap(l),g.texture.pmremVersion=l.pmremVersion,e.set(l,g),l.addEventListener("dispose",s),g.texture):null}}}return l}function r(l){let u=0;const d=6;for(let m=0;m<d;m++)l[m]!==void 0&&u++;return u===d}function s(l){const u=l.target;u.removeEventListener("dispose",s);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function i1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&gc("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function r1(t,e,n,i){const r={},s=new WeakMap;function a(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",a),delete r[v.id];const y=s.get(v);y&&(e.remove(y),s.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function l(g,v){return r[v.id]===!0||(v.addEventListener("dispose",a),r[v.id]=!0,n.memory.geometries++),v}function u(g){const v=g.attributes;for(const y in v)e.update(v[y],t.ARRAY_BUFFER)}function d(g){const v=[],y=g.index,M=g.attributes.position;let A=0;if(y!==null){const S=y.array;A=y.version;for(let w=0,C=S.length;w<C;w+=3){const k=S[w+0],I=S[w+1],f=S[w+2];v.push(k,I,I,f,f,k)}}else if(M!==void 0){const S=M.array;A=M.version;for(let w=0,C=S.length/3-1;w<C;w+=3){const k=w+0,I=w+1,f=w+2;v.push(k,I,I,f,f,k)}}else return;const E=new(ax(v)?px:hx)(v,1);E.version=A;const h=s.get(g);h&&e.remove(h),s.set(g,E)}function m(g){const v=s.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&d(g)}else d(g);return s.get(g)}return{get:l,update:u,getWireframeAttribute:m}}function s1(t,e,n){let i;function r(v){i=v}let s,a;function l(v){s=v.type,a=v.bytesPerElement}function u(v,y){t.drawElements(i,y,s,v*a),n.update(y,i,1)}function d(v,y,M){M!==0&&(t.drawElementsInstanced(i,y,s,v*a,M),n.update(y,i,M))}function m(v,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,y,0,s,v,0,M);let E=0;for(let h=0;h<M;h++)E+=y[h];n.update(E,i,1)}function g(v,y,M,A){if(M===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let h=0;h<v.length;h++)d(v[h]/a,y[h],A[h]);else{E.multiDrawElementsInstancedWEBGL(i,y,0,s,v,0,A,0,M);let h=0;for(let S=0;S<M;S++)h+=y[S]*A[S];n.update(h,i,1)}}this.setMode=r,this.setIndex=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function o1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,l){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=l*(s/3);break;case t.LINES:n.lines+=l*(s/2);break;case t.LINE_STRIP:n.lines+=l*(s-1);break;case t.LINE_LOOP:n.lines+=l*s;break;case t.POINTS:n.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function a1(t,e,n){const i=new WeakMap,r=new sn;function s(a,l,u){const d=a.morphTargetInfluences,m=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,g=m!==void 0?m.length:0;let v=i.get(l);if(v===void 0||v.count!==g){let N=function(){B.dispose(),i.delete(l),l.removeEventListener("dispose",N)};var y=N;v!==void 0&&v.texture.dispose();const M=l.morphAttributes.position!==void 0,A=l.morphAttributes.normal!==void 0,E=l.morphAttributes.color!==void 0,h=l.morphAttributes.position||[],S=l.morphAttributes.normal||[],w=l.morphAttributes.color||[];let C=0;M===!0&&(C=1),A===!0&&(C=2),E===!0&&(C=3);let k=l.attributes.position.count*C,I=1;k>e.maxTextureSize&&(I=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const f=new Float32Array(k*I*4*g),B=new lx(f,k,I,g);B.type=cr,B.needsUpdate=!0;const D=C*4;for(let O=0;O<g;O++){const q=h[O],W=S[O],ee=w[O],he=k*I*4*O;for(let fe=0;fe<q.count;fe++){const me=fe*D;M===!0&&(r.fromBufferAttribute(q,fe),f[he+me+0]=r.x,f[he+me+1]=r.y,f[he+me+2]=r.z,f[he+me+3]=0),A===!0&&(r.fromBufferAttribute(W,fe),f[he+me+4]=r.x,f[he+me+5]=r.y,f[he+me+6]=r.z,f[he+me+7]=0),E===!0&&(r.fromBufferAttribute(ee,fe),f[he+me+8]=r.x,f[he+me+9]=r.y,f[he+me+10]=r.z,f[he+me+11]=ee.itemSize===4?r.w:1)}}v={count:g,texture:B,size:new Ht(k,I)},i.set(l,v),l.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)u.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let M=0;for(let E=0;E<d.length;E++)M+=d[E];const A=l.morphTargetsRelative?1:1-M;u.getUniforms().setValue(t,"morphTargetBaseInfluence",A),u.getUniforms().setValue(t,"morphTargetInfluences",d)}u.getUniforms().setValue(t,"morphTargetsTexture",v.texture,n),u.getUniforms().setValue(t,"morphTargetsTextureSize",v.size)}return{update:s}}function l1(t,e,n,i){let r=new WeakMap;function s(u){const d=i.render.frame,m=u.geometry,g=e.get(u,m);if(r.get(g)!==d&&(e.update(g),r.set(g,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),r.get(u)!==d&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),r.set(u,d))),u.isSkinnedMesh){const v=u.skeleton;r.get(v)!==d&&(v.update(),r.set(v,d))}return g}function a(){r=new WeakMap}function l(u){const d=u.target;d.removeEventListener("dispose",l),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:s,dispose:a}}const Sx=new Kn,gg=new xx(1,1),Ex=new lx,Mx=new kE,wx=new vx,vg=[],_g=[],xg=new Float32Array(16),yg=new Float32Array(9),Sg=new Float32Array(4);function jo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=vg[r];if(s===void 0&&(s=new Float32Array(r),vg[r]=s),e!==0){i.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=n,t[a].toArray(s,l)}return s}function mn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function gn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function uu(t,e){let n=_g[e];n===void 0&&(n=new Int32Array(e),_g[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function c1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function u1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(mn(n,e))return;t.uniform2fv(this.addr,e),gn(n,e)}}function f1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(mn(n,e))return;t.uniform3fv(this.addr,e),gn(n,e)}}function d1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(mn(n,e))return;t.uniform4fv(this.addr,e),gn(n,e)}}function h1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(mn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),gn(n,e)}else{if(mn(n,i))return;Sg.set(i),t.uniformMatrix2fv(this.addr,!1,Sg),gn(n,i)}}function p1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(mn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),gn(n,e)}else{if(mn(n,i))return;yg.set(i),t.uniformMatrix3fv(this.addr,!1,yg),gn(n,i)}}function m1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(mn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),gn(n,e)}else{if(mn(n,i))return;xg.set(i),t.uniformMatrix4fv(this.addr,!1,xg),gn(n,i)}}function g1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function v1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(mn(n,e))return;t.uniform2iv(this.addr,e),gn(n,e)}}function _1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(mn(n,e))return;t.uniform3iv(this.addr,e),gn(n,e)}}function x1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(mn(n,e))return;t.uniform4iv(this.addr,e),gn(n,e)}}function y1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function S1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(mn(n,e))return;t.uniform2uiv(this.addr,e),gn(n,e)}}function E1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(mn(n,e))return;t.uniform3uiv(this.addr,e),gn(n,e)}}function M1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(mn(n,e))return;t.uniform4uiv(this.addr,e),gn(n,e)}}function w1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(gg.compareFunction=ox,s=gg):s=Sx,n.setTexture2D(e||s,r)}function T1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Mx,r)}function b1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||wx,r)}function A1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ex,r)}function C1(t){switch(t){case 5126:return c1;case 35664:return u1;case 35665:return f1;case 35666:return d1;case 35674:return h1;case 35675:return p1;case 35676:return m1;case 5124:case 35670:return g1;case 35667:case 35671:return v1;case 35668:case 35672:return _1;case 35669:case 35673:return x1;case 5125:return y1;case 36294:return S1;case 36295:return E1;case 36296:return M1;case 35678:case 36198:case 36298:case 36306:case 35682:return w1;case 35679:case 36299:case 36307:return T1;case 35680:case 36300:case 36308:case 36293:return b1;case 36289:case 36303:case 36311:case 36292:return A1}}function R1(t,e){t.uniform1fv(this.addr,e)}function P1(t,e){const n=jo(e,this.size,2);t.uniform2fv(this.addr,n)}function N1(t,e){const n=jo(e,this.size,3);t.uniform3fv(this.addr,n)}function D1(t,e){const n=jo(e,this.size,4);t.uniform4fv(this.addr,n)}function L1(t,e){const n=jo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function I1(t,e){const n=jo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function U1(t,e){const n=jo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function F1(t,e){t.uniform1iv(this.addr,e)}function k1(t,e){t.uniform2iv(this.addr,e)}function O1(t,e){t.uniform3iv(this.addr,e)}function B1(t,e){t.uniform4iv(this.addr,e)}function z1(t,e){t.uniform1uiv(this.addr,e)}function H1(t,e){t.uniform2uiv(this.addr,e)}function j1(t,e){t.uniform3uiv(this.addr,e)}function V1(t,e){t.uniform4uiv(this.addr,e)}function G1(t,e,n){const i=this.cache,r=e.length,s=uu(n,r);mn(i,s)||(t.uniform1iv(this.addr,s),gn(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Sx,s[a])}function W1(t,e,n){const i=this.cache,r=e.length,s=uu(n,r);mn(i,s)||(t.uniform1iv(this.addr,s),gn(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Mx,s[a])}function X1(t,e,n){const i=this.cache,r=e.length,s=uu(n,r);mn(i,s)||(t.uniform1iv(this.addr,s),gn(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||wx,s[a])}function q1(t,e,n){const i=this.cache,r=e.length,s=uu(n,r);mn(i,s)||(t.uniform1iv(this.addr,s),gn(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Ex,s[a])}function $1(t){switch(t){case 5126:return R1;case 35664:return P1;case 35665:return N1;case 35666:return D1;case 35674:return L1;case 35675:return I1;case 35676:return U1;case 5124:case 35670:return F1;case 35667:case 35671:return k1;case 35668:case 35672:return O1;case 35669:case 35673:return B1;case 5125:return z1;case 36294:return H1;case 36295:return j1;case 36296:return V1;case 35678:case 36198:case 36298:case 36306:case 35682:return G1;case 35679:case 36299:case 36307:return W1;case 35680:case 36300:case 36308:case 36293:return X1;case 36289:case 36303:case 36311:case 36292:return q1}}class Y1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=C1(n.type)}}class K1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=$1(n.type)}}class Z1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const l=r[s];l.setValue(e,n[l.id],i)}}}const Rf=/(\w+)(\])?(\[|\.)?/g;function Eg(t,e){t.seq.push(e),t.map[e.id]=e}function Q1(t,e,n){const i=t.name,r=i.length;for(Rf.lastIndex=0;;){const s=Rf.exec(i),a=Rf.lastIndex;let l=s[1];const u=s[2]==="]",d=s[3];if(u&&(l=l|0),d===void 0||d==="["&&a+2===r){Eg(n,d===void 0?new Y1(l,t,e):new K1(l,t,e));break}else{let g=n.map[l];g===void 0&&(g=new Z1(l),Eg(n,g)),n=g}}}class vc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);Q1(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const l=n[s],u=i[l.id];u.needsUpdate!==!1&&l.setValue(e,u.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Mg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const J1=37297;let eb=0;function tb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const l=a+1;i.push(`${l===e?">":" "} ${l}: ${n[a]}`)}return i.join(`
`)}const wg=new dt;function nb(t){Ut._getMatrix(wg,Ut.workingColorSpace,t);const e=`mat3( ${wg.elements.map(n=>n.toFixed(4))} )`;switch(Ut.getTransfer(t)){case jc:return[e,"LinearTransferOETF"];case jt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Tg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+tb(t.getShaderSource(e),a)}else return r}function ib(t,e){const n=nb(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function rb(t,e){let n;switch(e){case lE:n="Linear";break;case cE:n="Reinhard";break;case uE:n="Cineon";break;case fE:n="ACESFilmic";break;case hE:n="AgX";break;case pE:n="Neutral";break;case dE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ql=new se;function sb(){Ut.getLuminanceCoefficients(Ql);const t=Ql.x.toFixed(4),e=Ql.y.toFixed(4),n=Ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ob(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function ab(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function lb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let l=1;s.type===t.FLOAT_MAT2&&(l=2),s.type===t.FLOAT_MAT3&&(l=3),s.type===t.FLOAT_MAT4&&(l=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:l}}return n}function ga(t){return t!==""}function bg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ag(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cb=/^[ \t]*#include +<([\w\d./]+)>/gm;function uh(t){return t.replace(cb,fb)}const ub=new Map;function fb(t,e){let n=mt[e];if(n===void 0){const i=ub.get(e);if(i!==void 0)n=mt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return uh(n)}const db=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cg(t){return t.replace(db,hb)}function hb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Rg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===q_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===HS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ir&&(e="SHADOWMAP_TYPE_VSM"),e}function mb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Io:case Uo:e="ENVMAP_TYPE_CUBE";break;case au:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Uo:e="ENVMAP_MODE_REFRACTION";break}return e}function vb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case $_:e="ENVMAP_BLENDING_MULTIPLY";break;case oE:e="ENVMAP_BLENDING_MIX";break;case aE:e="ENVMAP_BLENDING_ADD";break}return e}function _b(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function xb(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,l=n.fragmentShader;const u=pb(n),d=mb(n),m=gb(n),g=vb(n),v=_b(n),y=ob(n),M=ab(s),A=r.createProgram();let E,h,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(E=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(ga).join(`
`),E.length>0&&(E+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(ga).join(`
`),h.length>0&&(h+=`
`)):(E=[Rg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+u:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),h=[Rg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+u:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Qr?"#define TONE_MAPPING":"",n.toneMapping!==Qr?mt.tonemapping_pars_fragment:"",n.toneMapping!==Qr?rb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,ib("linearToOutputTexel",n.outputColorSpace),sb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ga).join(`
`)),a=uh(a),a=bg(a,n),a=Ag(a,n),l=uh(l),l=bg(l,n),l=Ag(l,n),a=Cg(a),l=Cg(l),n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,E=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,h=["#define varying in",n.glslVersion===jm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===jm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const w=S+E+a,C=S+h+l,k=Mg(r,r.VERTEX_SHADER,w),I=Mg(r,r.FRAGMENT_SHADER,C);r.attachShader(A,k),r.attachShader(A,I),n.index0AttributeName!==void 0?r.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(A,0,"position"),r.linkProgram(A);function f(O){if(t.debug.checkShaderErrors){const q=r.getProgramInfoLog(A).trim(),W=r.getShaderInfoLog(k).trim(),ee=r.getShaderInfoLog(I).trim();let he=!0,fe=!0;if(r.getProgramParameter(A,r.LINK_STATUS)===!1)if(he=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,A,k,I);else{const me=Tg(r,k,"vertex"),V=Tg(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(A,r.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+q+`
`+me+`
`+V)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(W===""||ee==="")&&(fe=!1);fe&&(O.diagnostics={runnable:he,programLog:q,vertexShader:{log:W,prefix:E},fragmentShader:{log:ee,prefix:h}})}r.deleteShader(k),r.deleteShader(I),B=new vc(r,A),D=lb(r,A)}let B;this.getUniforms=function(){return B===void 0&&f(this),B};let D;this.getAttributes=function(){return D===void 0&&f(this),D};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(A,J1)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=eb++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=k,this.fragmentShader=I,this}let yb=0;class Sb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Eb(e),n.set(e,i)),i}}class Eb{constructor(e){this.id=yb++,this.code=e,this.usedTimes=0}}function Mb(t,e,n,i,r,s,a){const l=new ux,u=new Sb,d=new Set,m=[],g=r.logarithmicDepthBuffer,v=r.vertexTextures;let y=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return d.add(D),D===0?"uv":`uv${D}`}function E(D,N,O,q,W){const ee=q.fog,he=W.geometry,fe=D.isMeshStandardMaterial?q.environment:null,me=(D.isMeshStandardMaterial?n:e).get(D.envMap||fe),V=me&&me.mapping===au?me.image.height:null,ce=M[D.type];D.precision!==null&&(y=r.getMaxPrecision(D.precision),y!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const _e=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,be=_e!==void 0?_e.length:0;let Ge=0;he.morphAttributes.position!==void 0&&(Ge=1),he.morphAttributes.normal!==void 0&&(Ge=2),he.morphAttributes.color!==void 0&&(Ge=3);let st,oe,xe,Ae;if(ce){const Ft=Hi[ce];st=Ft.vertexShader,oe=Ft.fragmentShader}else st=D.vertexShader,oe=D.fragmentShader,u.update(D),xe=u.getVertexShaderID(D),Ae=u.getFragmentShaderID(D);const ye=t.getRenderTarget(),Fe=t.state.buffers.depth.getReversed(),nt=W.isInstancedMesh===!0,He=W.isBatchedMesh===!0,Lt=!!D.map,ht=!!D.matcap,We=!!me,H=!!D.aoMap,kt=!!D.lightMap,at=!!D.bumpMap,ft=!!D.normalMap,Xe=!!D.displacementMap,Vt=!!D.emissiveMap,Ke=!!D.metalnessMap,F=!!D.roughnessMap,P=D.anisotropy>0,J=D.clearcoat>0,ge=D.dispersion>0,Z=D.iridescence>0,ue=D.sheen>0,$e=D.transmission>0,Ne=P&&!!D.anisotropyMap,je=J&&!!D.clearcoatMap,Et=J&&!!D.clearcoatNormalMap,we=J&&!!D.clearcoatRoughnessMap,Oe=Z&&!!D.iridescenceMap,Ye=Z&&!!D.iridescenceThicknessMap,et=ue&&!!D.sheenColorMap,ke=ue&&!!D.sheenRoughnessMap,Mt=!!D.specularMap,ct=!!D.specularColorMap,Ot=!!D.specularIntensityMap,$=$e&&!!D.transmissionMap,De=$e&&!!D.thicknessMap,le=!!D.gradientMap,ve=!!D.alphaMap,Le=D.alphaTest>0,Pe=!!D.alphaHash,Je=!!D.extensions;let vt=Qr;D.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(vt=t.toneMapping);const an={shaderID:ce,shaderType:D.type,shaderName:D.name,vertexShader:st,fragmentShader:oe,defines:D.defines,customVertexShaderID:xe,customFragmentShaderID:Ae,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:He,batchingColor:He&&W._colorsTexture!==null,instancing:nt,instancingColor:nt&&W.instanceColor!==null,instancingMorph:nt&&W.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ye===null?t.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Fo,alphaToCoverage:!!D.alphaToCoverage,map:Lt,matcap:ht,envMap:We,envMapMode:We&&me.mapping,envMapCubeUVHeight:V,aoMap:H,lightMap:kt,bumpMap:at,normalMap:ft,displacementMap:v&&Xe,emissiveMap:Vt,normalMapObjectSpace:ft&&D.normalMapType===xE,normalMapTangentSpace:ft&&D.normalMapType===_E,metalnessMap:Ke,roughnessMap:F,anisotropy:P,anisotropyMap:Ne,clearcoat:J,clearcoatMap:je,clearcoatNormalMap:Et,clearcoatRoughnessMap:we,dispersion:ge,iridescence:Z,iridescenceMap:Oe,iridescenceThicknessMap:Ye,sheen:ue,sheenColorMap:et,sheenRoughnessMap:ke,specularMap:Mt,specularColorMap:ct,specularIntensityMap:Ot,transmission:$e,transmissionMap:$,thicknessMap:De,gradientMap:le,opaque:D.transparent===!1&&D.blending===wo&&D.alphaToCoverage===!1,alphaMap:ve,alphaTest:Le,alphaHash:Pe,combine:D.combine,mapUv:Lt&&A(D.map.channel),aoMapUv:H&&A(D.aoMap.channel),lightMapUv:kt&&A(D.lightMap.channel),bumpMapUv:at&&A(D.bumpMap.channel),normalMapUv:ft&&A(D.normalMap.channel),displacementMapUv:Xe&&A(D.displacementMap.channel),emissiveMapUv:Vt&&A(D.emissiveMap.channel),metalnessMapUv:Ke&&A(D.metalnessMap.channel),roughnessMapUv:F&&A(D.roughnessMap.channel),anisotropyMapUv:Ne&&A(D.anisotropyMap.channel),clearcoatMapUv:je&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:Et&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:et&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:ke&&A(D.sheenRoughnessMap.channel),specularMapUv:Mt&&A(D.specularMap.channel),specularColorMapUv:ct&&A(D.specularColorMap.channel),specularIntensityMapUv:Ot&&A(D.specularIntensityMap.channel),transmissionMapUv:$&&A(D.transmissionMap.channel),thicknessMapUv:De&&A(D.thicknessMap.channel),alphaMapUv:ve&&A(D.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(ft||P),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!he.attributes.uv&&(Lt||ve),fog:!!ee,useFog:D.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Fe,skinning:W.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Ge,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:D.dithering,shadowMapEnabled:t.shadowMap.enabled&&O.length>0,shadowMapType:t.shadowMap.type,toneMapping:vt,decodeVideoTexture:Lt&&D.map.isVideoTexture===!0&&Ut.getTransfer(D.map.colorSpace)===jt,decodeVideoTextureEmissive:Vt&&D.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(D.emissiveMap.colorSpace)===jt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===or,flipSided:D.side===Yn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Je&&D.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&D.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return an.vertexUv1s=d.has(1),an.vertexUv2s=d.has(2),an.vertexUv3s=d.has(3),d.clear(),an}function h(D){const N=[];if(D.shaderID?N.push(D.shaderID):(N.push(D.customVertexShaderID),N.push(D.customFragmentShaderID)),D.defines!==void 0)for(const O in D.defines)N.push(O),N.push(D.defines[O]);return D.isRawShaderMaterial===!1&&(S(N,D),w(N,D),N.push(t.outputColorSpace)),N.push(D.customProgramCacheKey),N.join()}function S(D,N){D.push(N.precision),D.push(N.outputColorSpace),D.push(N.envMapMode),D.push(N.envMapCubeUVHeight),D.push(N.mapUv),D.push(N.alphaMapUv),D.push(N.lightMapUv),D.push(N.aoMapUv),D.push(N.bumpMapUv),D.push(N.normalMapUv),D.push(N.displacementMapUv),D.push(N.emissiveMapUv),D.push(N.metalnessMapUv),D.push(N.roughnessMapUv),D.push(N.anisotropyMapUv),D.push(N.clearcoatMapUv),D.push(N.clearcoatNormalMapUv),D.push(N.clearcoatRoughnessMapUv),D.push(N.iridescenceMapUv),D.push(N.iridescenceThicknessMapUv),D.push(N.sheenColorMapUv),D.push(N.sheenRoughnessMapUv),D.push(N.specularMapUv),D.push(N.specularColorMapUv),D.push(N.specularIntensityMapUv),D.push(N.transmissionMapUv),D.push(N.thicknessMapUv),D.push(N.combine),D.push(N.fogExp2),D.push(N.sizeAttenuation),D.push(N.morphTargetsCount),D.push(N.morphAttributeCount),D.push(N.numDirLights),D.push(N.numPointLights),D.push(N.numSpotLights),D.push(N.numSpotLightMaps),D.push(N.numHemiLights),D.push(N.numRectAreaLights),D.push(N.numDirLightShadows),D.push(N.numPointLightShadows),D.push(N.numSpotLightShadows),D.push(N.numSpotLightShadowsWithMaps),D.push(N.numLightProbes),D.push(N.shadowMapType),D.push(N.toneMapping),D.push(N.numClippingPlanes),D.push(N.numClipIntersection),D.push(N.depthPacking)}function w(D,N){l.disableAll(),N.supportsVertexTextures&&l.enable(0),N.instancing&&l.enable(1),N.instancingColor&&l.enable(2),N.instancingMorph&&l.enable(3),N.matcap&&l.enable(4),N.envMap&&l.enable(5),N.normalMapObjectSpace&&l.enable(6),N.normalMapTangentSpace&&l.enable(7),N.clearcoat&&l.enable(8),N.iridescence&&l.enable(9),N.alphaTest&&l.enable(10),N.vertexColors&&l.enable(11),N.vertexAlphas&&l.enable(12),N.vertexUv1s&&l.enable(13),N.vertexUv2s&&l.enable(14),N.vertexUv3s&&l.enable(15),N.vertexTangents&&l.enable(16),N.anisotropy&&l.enable(17),N.alphaHash&&l.enable(18),N.batching&&l.enable(19),N.dispersion&&l.enable(20),N.batchingColor&&l.enable(21),D.push(l.mask),l.disableAll(),N.fog&&l.enable(0),N.useFog&&l.enable(1),N.flatShading&&l.enable(2),N.logarithmicDepthBuffer&&l.enable(3),N.reverseDepthBuffer&&l.enable(4),N.skinning&&l.enable(5),N.morphTargets&&l.enable(6),N.morphNormals&&l.enable(7),N.morphColors&&l.enable(8),N.premultipliedAlpha&&l.enable(9),N.shadowMapEnabled&&l.enable(10),N.doubleSided&&l.enable(11),N.flipSided&&l.enable(12),N.useDepthPacking&&l.enable(13),N.dithering&&l.enable(14),N.transmission&&l.enable(15),N.sheen&&l.enable(16),N.opaque&&l.enable(17),N.pointsUvs&&l.enable(18),N.decodeVideoTexture&&l.enable(19),N.decodeVideoTextureEmissive&&l.enable(20),N.alphaToCoverage&&l.enable(21),D.push(l.mask)}function C(D){const N=M[D.type];let O;if(N){const q=Hi[N];O=KE.clone(q.uniforms)}else O=D.uniforms;return O}function k(D,N){let O;for(let q=0,W=m.length;q<W;q++){const ee=m[q];if(ee.cacheKey===N){O=ee,++O.usedTimes;break}}return O===void 0&&(O=new xb(t,N,D,s),m.push(O)),O}function I(D){if(--D.usedTimes===0){const N=m.indexOf(D);m[N]=m[m.length-1],m.pop(),D.destroy()}}function f(D){u.remove(D)}function B(){u.dispose()}return{getParameters:E,getProgramCacheKey:h,getUniforms:C,acquireProgram:k,releaseProgram:I,releaseShaderCache:f,programs:m,dispose:B}}function wb(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let l=t.get(a);return l===void 0&&(l={},t.set(a,l)),l}function i(a){t.delete(a)}function r(a,l,u){t.get(a)[l]=u}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Tb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Pg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ng(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(g,v,y,M,A,E){let h=t[e];return h===void 0?(h={id:g.id,object:g,geometry:v,material:y,groupOrder:M,renderOrder:g.renderOrder,z:A,group:E},t[e]=h):(h.id=g.id,h.object=g,h.geometry=v,h.material=y,h.groupOrder=M,h.renderOrder=g.renderOrder,h.z=A,h.group=E),e++,h}function l(g,v,y,M,A,E){const h=a(g,v,y,M,A,E);y.transmission>0?i.push(h):y.transparent===!0?r.push(h):n.push(h)}function u(g,v,y,M,A,E){const h=a(g,v,y,M,A,E);y.transmission>0?i.unshift(h):y.transparent===!0?r.unshift(h):n.unshift(h)}function d(g,v){n.length>1&&n.sort(g||Tb),i.length>1&&i.sort(v||Pg),r.length>1&&r.sort(v||Pg)}function m(){for(let g=e,v=t.length;g<v;g++){const y=t[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:m,sort:d}}function bb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Ng,t.set(i,[a])):r>=s.length?(a=new Ng,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Ab(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new se,color:new At};break;case"SpotLight":n={position:new se,direction:new se,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new se,color:new At,distance:0,decay:0};break;case"HemisphereLight":n={direction:new se,skyColor:new At,groundColor:new At};break;case"RectAreaLight":n={color:new At,position:new se,halfWidth:new se,halfHeight:new se};break}return t[e.id]=n,n}}}function Cb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Rb=0;function Pb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Nb(t){const e=new Ab,n=Cb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new se);const r=new se,s=new on,a=new on;function l(d){let m=0,g=0,v=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let y=0,M=0,A=0,E=0,h=0,S=0,w=0,C=0,k=0,I=0,f=0;d.sort(Pb);for(let D=0,N=d.length;D<N;D++){const O=d[D],q=O.color,W=O.intensity,ee=O.distance,he=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)m+=q.r*W,g+=q.g*W,v+=q.b*W;else if(O.isLightProbe){for(let fe=0;fe<9;fe++)i.probe[fe].addScaledVector(O.sh.coefficients[fe],W);f++}else if(O.isDirectionalLight){const fe=e.get(O);if(fe.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const me=O.shadow,V=n.get(O);V.shadowIntensity=me.intensity,V.shadowBias=me.bias,V.shadowNormalBias=me.normalBias,V.shadowRadius=me.radius,V.shadowMapSize=me.mapSize,i.directionalShadow[y]=V,i.directionalShadowMap[y]=he,i.directionalShadowMatrix[y]=O.shadow.matrix,S++}i.directional[y]=fe,y++}else if(O.isSpotLight){const fe=e.get(O);fe.position.setFromMatrixPosition(O.matrixWorld),fe.color.copy(q).multiplyScalar(W),fe.distance=ee,fe.coneCos=Math.cos(O.angle),fe.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),fe.decay=O.decay,i.spot[A]=fe;const me=O.shadow;if(O.map&&(i.spotLightMap[k]=O.map,k++,me.updateMatrices(O),O.castShadow&&I++),i.spotLightMatrix[A]=me.matrix,O.castShadow){const V=n.get(O);V.shadowIntensity=me.intensity,V.shadowBias=me.bias,V.shadowNormalBias=me.normalBias,V.shadowRadius=me.radius,V.shadowMapSize=me.mapSize,i.spotShadow[A]=V,i.spotShadowMap[A]=he,C++}A++}else if(O.isRectAreaLight){const fe=e.get(O);fe.color.copy(q).multiplyScalar(W),fe.halfWidth.set(O.width*.5,0,0),fe.halfHeight.set(0,O.height*.5,0),i.rectArea[E]=fe,E++}else if(O.isPointLight){const fe=e.get(O);if(fe.color.copy(O.color).multiplyScalar(O.intensity),fe.distance=O.distance,fe.decay=O.decay,O.castShadow){const me=O.shadow,V=n.get(O);V.shadowIntensity=me.intensity,V.shadowBias=me.bias,V.shadowNormalBias=me.normalBias,V.shadowRadius=me.radius,V.shadowMapSize=me.mapSize,V.shadowCameraNear=me.camera.near,V.shadowCameraFar=me.camera.far,i.pointShadow[M]=V,i.pointShadowMap[M]=he,i.pointShadowMatrix[M]=O.shadow.matrix,w++}i.point[M]=fe,M++}else if(O.isHemisphereLight){const fe=e.get(O);fe.skyColor.copy(O.color).multiplyScalar(W),fe.groundColor.copy(O.groundColor).multiplyScalar(W),i.hemi[h]=fe,h++}}E>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=v;const B=i.hash;(B.directionalLength!==y||B.pointLength!==M||B.spotLength!==A||B.rectAreaLength!==E||B.hemiLength!==h||B.numDirectionalShadows!==S||B.numPointShadows!==w||B.numSpotShadows!==C||B.numSpotMaps!==k||B.numLightProbes!==f)&&(i.directional.length=y,i.spot.length=A,i.rectArea.length=E,i.point.length=M,i.hemi.length=h,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=C+k-I,i.spotLightMap.length=k,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=f,B.directionalLength=y,B.pointLength=M,B.spotLength=A,B.rectAreaLength=E,B.hemiLength=h,B.numDirectionalShadows=S,B.numPointShadows=w,B.numSpotShadows=C,B.numSpotMaps=k,B.numLightProbes=f,i.version=Rb++)}function u(d,m){let g=0,v=0,y=0,M=0,A=0;const E=m.matrixWorldInverse;for(let h=0,S=d.length;h<S;h++){const w=d[h];if(w.isDirectionalLight){const C=i.directional[g];C.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(E),g++}else if(w.isSpotLight){const C=i.spot[y];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(E),C.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(E),y++}else if(w.isRectAreaLight){const C=i.rectArea[M];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(E),a.identity(),s.copy(w.matrixWorld),s.premultiply(E),a.extractRotation(s),C.halfWidth.set(w.width*.5,0,0),C.halfHeight.set(0,w.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),M++}else if(w.isPointLight){const C=i.point[v];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(E),v++}else if(w.isHemisphereLight){const C=i.hemi[A];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(E),A++}}}return{setup:l,setupView:u,state:i}}function Dg(t){const e=new Nb(t),n=[],i=[];function r(m){d.camera=m,n.length=0,i.length=0}function s(m){n.push(m)}function a(m){i.push(m)}function l(){e.setup(n)}function u(m){e.setupView(n,m)}const d={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:s,pushShadow:a}}function Db(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let l;return a===void 0?(l=new Dg(t),e.set(r,[l])):s>=a.length?(l=new Dg(t),a.push(l)):l=a[s],l}function i(){e=new WeakMap}return{get:n,dispose:i}}const Lb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ib=`uniform sampler2D shadow_pass;
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
}`;function Ub(t,e,n){let i=new _x;const r=new Ht,s=new Ht,a=new sn,l=new aM({depthPacking:vE}),u=new lM,d={},m=n.maxTextureSize,g={[ts]:Yn,[Yn]:ts,[or]:or},v=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:Lb,fragmentShader:Ib}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const M=new Er;M.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new fr(M,v),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=q_;let h=this.type;this.render=function(I,f,B){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||I.length===0)return;const D=t.getRenderTarget(),N=t.getActiveCubeFace(),O=t.getActiveMipmapLevel(),q=t.state;q.setBlending(Zr),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const W=h!==ir&&this.type===ir,ee=h===ir&&this.type!==ir;for(let he=0,fe=I.length;he<fe;he++){const me=I[he],V=me.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",me,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ce=V.getFrameExtents();if(r.multiply(ce),s.copy(V.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(s.x=Math.floor(m/ce.x),r.x=s.x*ce.x,V.mapSize.x=s.x),r.y>m&&(s.y=Math.floor(m/ce.y),r.y=s.y*ce.y,V.mapSize.y=s.y)),V.map===null||W===!0||ee===!0){const be=this.type!==ir?{minFilter:Di,magFilter:Di}:{};V.map!==null&&V.map.dispose(),V.map=new Us(r.x,r.y,be),V.map.texture.name=me.name+".shadowMap",V.camera.updateProjectionMatrix()}t.setRenderTarget(V.map),t.clear();const _e=V.getViewportCount();for(let be=0;be<_e;be++){const Ge=V.getViewport(be);a.set(s.x*Ge.x,s.y*Ge.y,s.x*Ge.z,s.y*Ge.w),q.viewport(a),V.updateMatrices(me,be),i=V.getFrustum(),C(f,B,V.camera,me,this.type)}V.isPointLightShadow!==!0&&this.type===ir&&S(V,B),V.needsUpdate=!1}h=this.type,E.needsUpdate=!1,t.setRenderTarget(D,N,O)};function S(I,f){const B=e.update(A);v.defines.VSM_SAMPLES!==I.blurSamples&&(v.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Us(r.x,r.y)),v.uniforms.shadow_pass.value=I.map.texture,v.uniforms.resolution.value=I.mapSize,v.uniforms.radius.value=I.radius,t.setRenderTarget(I.mapPass),t.clear(),t.renderBufferDirect(f,null,B,v,A,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,t.setRenderTarget(I.map),t.clear(),t.renderBufferDirect(f,null,B,y,A,null)}function w(I,f,B,D){let N=null;const O=B.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(O!==void 0)N=O;else if(N=B.isPointLight===!0?u:l,t.localClippingEnabled&&f.clipShadows===!0&&Array.isArray(f.clippingPlanes)&&f.clippingPlanes.length!==0||f.displacementMap&&f.displacementScale!==0||f.alphaMap&&f.alphaTest>0||f.map&&f.alphaTest>0){const q=N.uuid,W=f.uuid;let ee=d[q];ee===void 0&&(ee={},d[q]=ee);let he=ee[W];he===void 0&&(he=N.clone(),ee[W]=he,f.addEventListener("dispose",k)),N=he}if(N.visible=f.visible,N.wireframe=f.wireframe,D===ir?N.side=f.shadowSide!==null?f.shadowSide:f.side:N.side=f.shadowSide!==null?f.shadowSide:g[f.side],N.alphaMap=f.alphaMap,N.alphaTest=f.alphaTest,N.map=f.map,N.clipShadows=f.clipShadows,N.clippingPlanes=f.clippingPlanes,N.clipIntersection=f.clipIntersection,N.displacementMap=f.displacementMap,N.displacementScale=f.displacementScale,N.displacementBias=f.displacementBias,N.wireframeLinewidth=f.wireframeLinewidth,N.linewidth=f.linewidth,B.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const q=t.properties.get(N);q.light=B}return N}function C(I,f,B,D,N){if(I.visible===!1)return;if(I.layers.test(f.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&N===ir)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,I.matrixWorld);const W=e.update(I),ee=I.material;if(Array.isArray(ee)){const he=W.groups;for(let fe=0,me=he.length;fe<me;fe++){const V=he[fe],ce=ee[V.materialIndex];if(ce&&ce.visible){const _e=w(I,ce,D,N);I.onBeforeShadow(t,I,f,B,W,_e,V),t.renderBufferDirect(B,null,W,_e,I,V),I.onAfterShadow(t,I,f,B,W,_e,V)}}}else if(ee.visible){const he=w(I,ee,D,N);I.onBeforeShadow(t,I,f,B,W,he,null),t.renderBufferDirect(B,null,W,he,I,null),I.onAfterShadow(t,I,f,B,W,he,null)}}const q=I.children;for(let W=0,ee=q.length;W<ee;W++)C(q[W],f,B,D,N)}function k(I){I.target.removeEventListener("dispose",k);for(const B in d){const D=d[B],N=I.target.uuid;N in D&&(D[N].dispose(),delete D[N])}}}const Fb={[Td]:bd,[Ad]:Pd,[Cd]:Nd,[Lo]:Rd,[bd]:Td,[Pd]:Ad,[Nd]:Cd,[Rd]:Lo};function kb(t,e){function n(){let $=!1;const De=new sn;let le=null;const ve=new sn(0,0,0,0);return{setMask:function(Le){le!==Le&&!$&&(t.colorMask(Le,Le,Le,Le),le=Le)},setLocked:function(Le){$=Le},setClear:function(Le,Pe,Je,vt,an){an===!0&&(Le*=vt,Pe*=vt,Je*=vt),De.set(Le,Pe,Je,vt),ve.equals(De)===!1&&(t.clearColor(Le,Pe,Je,vt),ve.copy(De))},reset:function(){$=!1,le=null,ve.set(-1,0,0,0)}}}function i(){let $=!1,De=!1,le=null,ve=null,Le=null;return{setReversed:function(Pe){if(De!==Pe){const Je=e.get("EXT_clip_control");Pe?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),De=Pe;const vt=Le;Le=null,this.setClear(vt)}},getReversed:function(){return De},setTest:function(Pe){Pe?ye(t.DEPTH_TEST):Fe(t.DEPTH_TEST)},setMask:function(Pe){le!==Pe&&!$&&(t.depthMask(Pe),le=Pe)},setFunc:function(Pe){if(De&&(Pe=Fb[Pe]),ve!==Pe){switch(Pe){case Td:t.depthFunc(t.NEVER);break;case bd:t.depthFunc(t.ALWAYS);break;case Ad:t.depthFunc(t.LESS);break;case Lo:t.depthFunc(t.LEQUAL);break;case Cd:t.depthFunc(t.EQUAL);break;case Rd:t.depthFunc(t.GEQUAL);break;case Pd:t.depthFunc(t.GREATER);break;case Nd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ve=Pe}},setLocked:function(Pe){$=Pe},setClear:function(Pe){Le!==Pe&&(De&&(Pe=1-Pe),t.clearDepth(Pe),Le=Pe)},reset:function(){$=!1,le=null,ve=null,Le=null,De=!1}}}function r(){let $=!1,De=null,le=null,ve=null,Le=null,Pe=null,Je=null,vt=null,an=null;return{setTest:function(Ft){$||(Ft?ye(t.STENCIL_TEST):Fe(t.STENCIL_TEST))},setMask:function(Ft){De!==Ft&&!$&&(t.stencilMask(Ft),De=Ft)},setFunc:function(Ft,zn,ai){(le!==Ft||ve!==zn||Le!==ai)&&(t.stencilFunc(Ft,zn,ai),le=Ft,ve=zn,Le=ai)},setOp:function(Ft,zn,ai){(Pe!==Ft||Je!==zn||vt!==ai)&&(t.stencilOp(Ft,zn,ai),Pe=Ft,Je=zn,vt=ai)},setLocked:function(Ft){$=Ft},setClear:function(Ft){an!==Ft&&(t.clearStencil(Ft),an=Ft)},reset:function(){$=!1,De=null,le=null,ve=null,Le=null,Pe=null,Je=null,vt=null,an=null}}}const s=new n,a=new i,l=new r,u=new WeakMap,d=new WeakMap;let m={},g={},v=new WeakMap,y=[],M=null,A=!1,E=null,h=null,S=null,w=null,C=null,k=null,I=null,f=new At(0,0,0),B=0,D=!1,N=null,O=null,q=null,W=null,ee=null;const he=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let fe=!1,me=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(V)[1]),fe=me>=1):V.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),fe=me>=2);let ce=null,_e={};const be=t.getParameter(t.SCISSOR_BOX),Ge=t.getParameter(t.VIEWPORT),st=new sn().fromArray(be),oe=new sn().fromArray(Ge);function xe($,De,le,ve){const Le=new Uint8Array(4),Pe=t.createTexture();t.bindTexture($,Pe),t.texParameteri($,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri($,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Je=0;Je<le;Je++)$===t.TEXTURE_3D||$===t.TEXTURE_2D_ARRAY?t.texImage3D(De,0,t.RGBA,1,1,ve,0,t.RGBA,t.UNSIGNED_BYTE,Le):t.texImage2D(De+Je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Le);return Pe}const Ae={};Ae[t.TEXTURE_2D]=xe(t.TEXTURE_2D,t.TEXTURE_2D,1),Ae[t.TEXTURE_CUBE_MAP]=xe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[t.TEXTURE_2D_ARRAY]=xe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ae[t.TEXTURE_3D]=xe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),ye(t.DEPTH_TEST),a.setFunc(Lo),at(!1),ft(km),ye(t.CULL_FACE),H(Zr);function ye($){m[$]!==!0&&(t.enable($),m[$]=!0)}function Fe($){m[$]!==!1&&(t.disable($),m[$]=!1)}function nt($,De){return g[$]!==De?(t.bindFramebuffer($,De),g[$]=De,$===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=De),$===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=De),!0):!1}function He($,De){let le=y,ve=!1;if($){le=v.get(De),le===void 0&&(le=[],v.set(De,le));const Le=$.textures;if(le.length!==Le.length||le[0]!==t.COLOR_ATTACHMENT0){for(let Pe=0,Je=Le.length;Pe<Je;Pe++)le[Pe]=t.COLOR_ATTACHMENT0+Pe;le.length=Le.length,ve=!0}}else le[0]!==t.BACK&&(le[0]=t.BACK,ve=!0);ve&&t.drawBuffers(le)}function Lt($){return M!==$?(t.useProgram($),M=$,!0):!1}const ht={[xs]:t.FUNC_ADD,[VS]:t.FUNC_SUBTRACT,[GS]:t.FUNC_REVERSE_SUBTRACT};ht[WS]=t.MIN,ht[XS]=t.MAX;const We={[qS]:t.ZERO,[$S]:t.ONE,[YS]:t.SRC_COLOR,[Md]:t.SRC_ALPHA,[tE]:t.SRC_ALPHA_SATURATE,[JS]:t.DST_COLOR,[ZS]:t.DST_ALPHA,[KS]:t.ONE_MINUS_SRC_COLOR,[wd]:t.ONE_MINUS_SRC_ALPHA,[eE]:t.ONE_MINUS_DST_COLOR,[QS]:t.ONE_MINUS_DST_ALPHA,[nE]:t.CONSTANT_COLOR,[iE]:t.ONE_MINUS_CONSTANT_COLOR,[rE]:t.CONSTANT_ALPHA,[sE]:t.ONE_MINUS_CONSTANT_ALPHA};function H($,De,le,ve,Le,Pe,Je,vt,an,Ft){if($===Zr){A===!0&&(Fe(t.BLEND),A=!1);return}if(A===!1&&(ye(t.BLEND),A=!0),$!==jS){if($!==E||Ft!==D){if((h!==xs||C!==xs)&&(t.blendEquation(t.FUNC_ADD),h=xs,C=xs),Ft)switch($){case wo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ed:t.blendFunc(t.ONE,t.ONE);break;case Om:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Bm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case wo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ed:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Om:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Bm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}S=null,w=null,k=null,I=null,f.set(0,0,0),B=0,E=$,D=Ft}return}Le=Le||De,Pe=Pe||le,Je=Je||ve,(De!==h||Le!==C)&&(t.blendEquationSeparate(ht[De],ht[Le]),h=De,C=Le),(le!==S||ve!==w||Pe!==k||Je!==I)&&(t.blendFuncSeparate(We[le],We[ve],We[Pe],We[Je]),S=le,w=ve,k=Pe,I=Je),(vt.equals(f)===!1||an!==B)&&(t.blendColor(vt.r,vt.g,vt.b,an),f.copy(vt),B=an),E=$,D=!1}function kt($,De){$.side===or?Fe(t.CULL_FACE):ye(t.CULL_FACE);let le=$.side===Yn;De&&(le=!le),at(le),$.blending===wo&&$.transparent===!1?H(Zr):H($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),a.setFunc($.depthFunc),a.setTest($.depthTest),a.setMask($.depthWrite),s.setMask($.colorWrite);const ve=$.stencilWrite;l.setTest(ve),ve&&(l.setMask($.stencilWriteMask),l.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),l.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),Vt($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?ye(t.SAMPLE_ALPHA_TO_COVERAGE):Fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function at($){N!==$&&($?t.frontFace(t.CW):t.frontFace(t.CCW),N=$)}function ft($){$!==BS?(ye(t.CULL_FACE),$!==O&&($===km?t.cullFace(t.BACK):$===zS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Fe(t.CULL_FACE),O=$}function Xe($){$!==q&&(fe&&t.lineWidth($),q=$)}function Vt($,De,le){$?(ye(t.POLYGON_OFFSET_FILL),(W!==De||ee!==le)&&(t.polygonOffset(De,le),W=De,ee=le)):Fe(t.POLYGON_OFFSET_FILL)}function Ke($){$?ye(t.SCISSOR_TEST):Fe(t.SCISSOR_TEST)}function F($){$===void 0&&($=t.TEXTURE0+he-1),ce!==$&&(t.activeTexture($),ce=$)}function P($,De,le){le===void 0&&(ce===null?le=t.TEXTURE0+he-1:le=ce);let ve=_e[le];ve===void 0&&(ve={type:void 0,texture:void 0},_e[le]=ve),(ve.type!==$||ve.texture!==De)&&(ce!==le&&(t.activeTexture(le),ce=le),t.bindTexture($,De||Ae[$]),ve.type=$,ve.texture=De)}function J(){const $=_e[ce];$!==void 0&&$.type!==void 0&&(t.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function ge(){try{t.compressedTexImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Z(){try{t.compressedTexImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ue(){try{t.texSubImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function $e(){try{t.texSubImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ne(){try{t.compressedTexSubImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function je(){try{t.compressedTexSubImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Et(){try{t.texStorage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function we(){try{t.texStorage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Oe(){try{t.texImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ye(){try{t.texImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function et($){st.equals($)===!1&&(t.scissor($.x,$.y,$.z,$.w),st.copy($))}function ke($){oe.equals($)===!1&&(t.viewport($.x,$.y,$.z,$.w),oe.copy($))}function Mt($,De){let le=d.get(De);le===void 0&&(le=new WeakMap,d.set(De,le));let ve=le.get($);ve===void 0&&(ve=t.getUniformBlockIndex(De,$.name),le.set($,ve))}function ct($,De){const ve=d.get(De).get($);u.get(De)!==ve&&(t.uniformBlockBinding(De,ve,$.__bindingPointIndex),u.set(De,ve))}function Ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),m={},ce=null,_e={},g={},v=new WeakMap,y=[],M=null,A=!1,E=null,h=null,S=null,w=null,C=null,k=null,I=null,f=new At(0,0,0),B=0,D=!1,N=null,O=null,q=null,W=null,ee=null,st.set(0,0,t.canvas.width,t.canvas.height),oe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:ye,disable:Fe,bindFramebuffer:nt,drawBuffers:He,useProgram:Lt,setBlending:H,setMaterial:kt,setFlipSided:at,setCullFace:ft,setLineWidth:Xe,setPolygonOffset:Vt,setScissorTest:Ke,activeTexture:F,bindTexture:P,unbindTexture:J,compressedTexImage2D:ge,compressedTexImage3D:Z,texImage2D:Oe,texImage3D:Ye,updateUBOMapping:Mt,uniformBlockBinding:ct,texStorage2D:Et,texStorage3D:we,texSubImage2D:ue,texSubImage3D:$e,compressedTexSubImage2D:Ne,compressedTexSubImage3D:je,scissor:et,viewport:ke,reset:Ot}}function Ob(t,e,n,i,r,s,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ht,m=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(F,P){return y?new OffscreenCanvas(F,P):Gc("canvas")}function A(F,P,J){let ge=1;const Z=Ke(F);if((Z.width>J||Z.height>J)&&(ge=J/Math.max(Z.width,Z.height)),ge<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const ue=Math.floor(ge*Z.width),$e=Math.floor(ge*Z.height);g===void 0&&(g=M(ue,$e));const Ne=P?M(ue,$e):g;return Ne.width=ue,Ne.height=$e,Ne.getContext("2d").drawImage(F,0,0,ue,$e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ue+"x"+$e+")."),Ne}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),F;return F}function E(F){return F.generateMipmaps}function h(F){t.generateMipmap(F)}function S(F){return F.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?t.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function w(F,P,J,ge,Z=!1){if(F!==null){if(t[F]!==void 0)return t[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ue=P;if(P===t.RED&&(J===t.FLOAT&&(ue=t.R32F),J===t.HALF_FLOAT&&(ue=t.R16F),J===t.UNSIGNED_BYTE&&(ue=t.R8)),P===t.RED_INTEGER&&(J===t.UNSIGNED_BYTE&&(ue=t.R8UI),J===t.UNSIGNED_SHORT&&(ue=t.R16UI),J===t.UNSIGNED_INT&&(ue=t.R32UI),J===t.BYTE&&(ue=t.R8I),J===t.SHORT&&(ue=t.R16I),J===t.INT&&(ue=t.R32I)),P===t.RG&&(J===t.FLOAT&&(ue=t.RG32F),J===t.HALF_FLOAT&&(ue=t.RG16F),J===t.UNSIGNED_BYTE&&(ue=t.RG8)),P===t.RG_INTEGER&&(J===t.UNSIGNED_BYTE&&(ue=t.RG8UI),J===t.UNSIGNED_SHORT&&(ue=t.RG16UI),J===t.UNSIGNED_INT&&(ue=t.RG32UI),J===t.BYTE&&(ue=t.RG8I),J===t.SHORT&&(ue=t.RG16I),J===t.INT&&(ue=t.RG32I)),P===t.RGB_INTEGER&&(J===t.UNSIGNED_BYTE&&(ue=t.RGB8UI),J===t.UNSIGNED_SHORT&&(ue=t.RGB16UI),J===t.UNSIGNED_INT&&(ue=t.RGB32UI),J===t.BYTE&&(ue=t.RGB8I),J===t.SHORT&&(ue=t.RGB16I),J===t.INT&&(ue=t.RGB32I)),P===t.RGBA_INTEGER&&(J===t.UNSIGNED_BYTE&&(ue=t.RGBA8UI),J===t.UNSIGNED_SHORT&&(ue=t.RGBA16UI),J===t.UNSIGNED_INT&&(ue=t.RGBA32UI),J===t.BYTE&&(ue=t.RGBA8I),J===t.SHORT&&(ue=t.RGBA16I),J===t.INT&&(ue=t.RGBA32I)),P===t.RGB&&J===t.UNSIGNED_INT_5_9_9_9_REV&&(ue=t.RGB9_E5),P===t.RGBA){const $e=Z?jc:Ut.getTransfer(ge);J===t.FLOAT&&(ue=t.RGBA32F),J===t.HALF_FLOAT&&(ue=t.RGBA16F),J===t.UNSIGNED_BYTE&&(ue=$e===jt?t.SRGB8_ALPHA8:t.RGBA8),J===t.UNSIGNED_SHORT_4_4_4_4&&(ue=t.RGBA4),J===t.UNSIGNED_SHORT_5_5_5_1&&(ue=t.RGB5_A1)}return(ue===t.R16F||ue===t.R32F||ue===t.RG16F||ue===t.RG32F||ue===t.RGBA16F||ue===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function C(F,P){let J;return F?P===null||P===Is||P===Ga?J=t.DEPTH24_STENCIL8:P===cr?J=t.DEPTH32F_STENCIL8:P===Va&&(J=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===Is||P===Ga?J=t.DEPTH_COMPONENT24:P===cr?J=t.DEPTH_COMPONENT32F:P===Va&&(J=t.DEPTH_COMPONENT16),J}function k(F,P){return E(F)===!0||F.isFramebufferTexture&&F.minFilter!==Di&&F.minFilter!==Vi?Math.log2(Math.max(P.width,P.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?P.mipmaps.length:1}function I(F){const P=F.target;P.removeEventListener("dispose",I),B(P),P.isVideoTexture&&m.delete(P)}function f(F){const P=F.target;P.removeEventListener("dispose",f),N(P)}function B(F){const P=i.get(F);if(P.__webglInit===void 0)return;const J=F.source,ge=v.get(J);if(ge){const Z=ge[P.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&D(F),Object.keys(ge).length===0&&v.delete(J)}i.remove(F)}function D(F){const P=i.get(F);t.deleteTexture(P.__webglTexture);const J=F.source,ge=v.get(J);delete ge[P.__cacheKey],a.memory.textures--}function N(F){const P=i.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),i.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(P.__webglFramebuffer[ge]))for(let Z=0;Z<P.__webglFramebuffer[ge].length;Z++)t.deleteFramebuffer(P.__webglFramebuffer[ge][Z]);else t.deleteFramebuffer(P.__webglFramebuffer[ge]);P.__webglDepthbuffer&&t.deleteRenderbuffer(P.__webglDepthbuffer[ge])}else{if(Array.isArray(P.__webglFramebuffer))for(let ge=0;ge<P.__webglFramebuffer.length;ge++)t.deleteFramebuffer(P.__webglFramebuffer[ge]);else t.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&t.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&t.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let ge=0;ge<P.__webglColorRenderbuffer.length;ge++)P.__webglColorRenderbuffer[ge]&&t.deleteRenderbuffer(P.__webglColorRenderbuffer[ge]);P.__webglDepthRenderbuffer&&t.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const J=F.textures;for(let ge=0,Z=J.length;ge<Z;ge++){const ue=i.get(J[ge]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(J[ge])}i.remove(F)}let O=0;function q(){O=0}function W(){const F=O;return F>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+r.maxTextures),O+=1,F}function ee(F){const P=[];return P.push(F.wrapS),P.push(F.wrapT),P.push(F.wrapR||0),P.push(F.magFilter),P.push(F.minFilter),P.push(F.anisotropy),P.push(F.internalFormat),P.push(F.format),P.push(F.type),P.push(F.generateMipmaps),P.push(F.premultiplyAlpha),P.push(F.flipY),P.push(F.unpackAlignment),P.push(F.colorSpace),P.join()}function he(F,P){const J=i.get(F);if(F.isVideoTexture&&Xe(F),F.isRenderTargetTexture===!1&&F.version>0&&J.__version!==F.version){const ge=F.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(J,F,P);return}}n.bindTexture(t.TEXTURE_2D,J.__webglTexture,t.TEXTURE0+P)}function fe(F,P){const J=i.get(F);if(F.version>0&&J.__version!==F.version){oe(J,F,P);return}n.bindTexture(t.TEXTURE_2D_ARRAY,J.__webglTexture,t.TEXTURE0+P)}function me(F,P){const J=i.get(F);if(F.version>0&&J.__version!==F.version){oe(J,F,P);return}n.bindTexture(t.TEXTURE_3D,J.__webglTexture,t.TEXTURE0+P)}function V(F,P){const J=i.get(F);if(F.version>0&&J.__version!==F.version){xe(J,F,P);return}n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture,t.TEXTURE0+P)}const ce={[Id]:t.REPEAT,[ws]:t.CLAMP_TO_EDGE,[Ud]:t.MIRRORED_REPEAT},_e={[Di]:t.NEAREST,[mE]:t.NEAREST_MIPMAP_NEAREST,[Rl]:t.NEAREST_MIPMAP_LINEAR,[Vi]:t.LINEAR,[Ju]:t.LINEAR_MIPMAP_NEAREST,[Ts]:t.LINEAR_MIPMAP_LINEAR},be={[yE]:t.NEVER,[bE]:t.ALWAYS,[SE]:t.LESS,[ox]:t.LEQUAL,[EE]:t.EQUAL,[TE]:t.GEQUAL,[ME]:t.GREATER,[wE]:t.NOTEQUAL};function Ge(F,P){if(P.type===cr&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===Vi||P.magFilter===Ju||P.magFilter===Rl||P.magFilter===Ts||P.minFilter===Vi||P.minFilter===Ju||P.minFilter===Rl||P.minFilter===Ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(F,t.TEXTURE_WRAP_S,ce[P.wrapS]),t.texParameteri(F,t.TEXTURE_WRAP_T,ce[P.wrapT]),(F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY)&&t.texParameteri(F,t.TEXTURE_WRAP_R,ce[P.wrapR]),t.texParameteri(F,t.TEXTURE_MAG_FILTER,_e[P.magFilter]),t.texParameteri(F,t.TEXTURE_MIN_FILTER,_e[P.minFilter]),P.compareFunction&&(t.texParameteri(F,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(F,t.TEXTURE_COMPARE_FUNC,be[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===Di||P.minFilter!==Rl&&P.minFilter!==Ts||P.type===cr&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||i.get(P).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");t.texParameterf(F,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),i.get(P).__currentAnisotropy=P.anisotropy}}}function st(F,P){let J=!1;F.__webglInit===void 0&&(F.__webglInit=!0,P.addEventListener("dispose",I));const ge=P.source;let Z=v.get(ge);Z===void 0&&(Z={},v.set(ge,Z));const ue=ee(P);if(ue!==F.__cacheKey){Z[ue]===void 0&&(Z[ue]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,J=!0),Z[ue].usedTimes++;const $e=Z[F.__cacheKey];$e!==void 0&&(Z[F.__cacheKey].usedTimes--,$e.usedTimes===0&&D(P)),F.__cacheKey=ue,F.__webglTexture=Z[ue].texture}return J}function oe(F,P,J){let ge=t.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(ge=t.TEXTURE_2D_ARRAY),P.isData3DTexture&&(ge=t.TEXTURE_3D);const Z=st(F,P),ue=P.source;n.bindTexture(ge,F.__webglTexture,t.TEXTURE0+J);const $e=i.get(ue);if(ue.version!==$e.__version||Z===!0){n.activeTexture(t.TEXTURE0+J);const Ne=Ut.getPrimaries(Ut.workingColorSpace),je=P.colorSpace===zr?null:Ut.getPrimaries(P.colorSpace),Et=P.colorSpace===zr||Ne===je?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,P.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,P.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let we=A(P.image,!1,r.maxTextureSize);we=Vt(P,we);const Oe=s.convert(P.format,P.colorSpace),Ye=s.convert(P.type);let et=w(P.internalFormat,Oe,Ye,P.colorSpace,P.isVideoTexture);Ge(ge,P);let ke;const Mt=P.mipmaps,ct=P.isVideoTexture!==!0,Ot=$e.__version===void 0||Z===!0,$=ue.dataReady,De=k(P,we);if(P.isDepthTexture)et=C(P.format===Xa,P.type),Ot&&(ct?n.texStorage2D(t.TEXTURE_2D,1,et,we.width,we.height):n.texImage2D(t.TEXTURE_2D,0,et,we.width,we.height,0,Oe,Ye,null));else if(P.isDataTexture)if(Mt.length>0){ct&&Ot&&n.texStorage2D(t.TEXTURE_2D,De,et,Mt[0].width,Mt[0].height);for(let le=0,ve=Mt.length;le<ve;le++)ke=Mt[le],ct?$&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,ke.width,ke.height,Oe,Ye,ke.data):n.texImage2D(t.TEXTURE_2D,le,et,ke.width,ke.height,0,Oe,Ye,ke.data);P.generateMipmaps=!1}else ct?(Ot&&n.texStorage2D(t.TEXTURE_2D,De,et,we.width,we.height),$&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,we.width,we.height,Oe,Ye,we.data)):n.texImage2D(t.TEXTURE_2D,0,et,we.width,we.height,0,Oe,Ye,we.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){ct&&Ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,et,Mt[0].width,Mt[0].height,we.depth);for(let le=0,ve=Mt.length;le<ve;le++)if(ke=Mt[le],P.format!==Ri)if(Oe!==null)if(ct){if($)if(P.layerUpdates.size>0){const Le=lg(ke.width,ke.height,P.format,P.type);for(const Pe of P.layerUpdates){const Je=ke.data.subarray(Pe*Le/ke.data.BYTES_PER_ELEMENT,(Pe+1)*Le/ke.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,Pe,ke.width,ke.height,1,Oe,Je)}P.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,ke.width,ke.height,we.depth,Oe,ke.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,le,et,ke.width,ke.height,we.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?$&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,ke.width,ke.height,we.depth,Oe,Ye,ke.data):n.texImage3D(t.TEXTURE_2D_ARRAY,le,et,ke.width,ke.height,we.depth,0,Oe,Ye,ke.data)}else{ct&&Ot&&n.texStorage2D(t.TEXTURE_2D,De,et,Mt[0].width,Mt[0].height);for(let le=0,ve=Mt.length;le<ve;le++)ke=Mt[le],P.format!==Ri?Oe!==null?ct?$&&n.compressedTexSubImage2D(t.TEXTURE_2D,le,0,0,ke.width,ke.height,Oe,ke.data):n.compressedTexImage2D(t.TEXTURE_2D,le,et,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?$&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,ke.width,ke.height,Oe,Ye,ke.data):n.texImage2D(t.TEXTURE_2D,le,et,ke.width,ke.height,0,Oe,Ye,ke.data)}else if(P.isDataArrayTexture)if(ct){if(Ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,et,we.width,we.height,we.depth),$)if(P.layerUpdates.size>0){const le=lg(we.width,we.height,P.format,P.type);for(const ve of P.layerUpdates){const Le=we.data.subarray(ve*le/we.data.BYTES_PER_ELEMENT,(ve+1)*le/we.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ve,we.width,we.height,1,Oe,Ye,Le)}P.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Oe,Ye,we.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,et,we.width,we.height,we.depth,0,Oe,Ye,we.data);else if(P.isData3DTexture)ct?(Ot&&n.texStorage3D(t.TEXTURE_3D,De,et,we.width,we.height,we.depth),$&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Oe,Ye,we.data)):n.texImage3D(t.TEXTURE_3D,0,et,we.width,we.height,we.depth,0,Oe,Ye,we.data);else if(P.isFramebufferTexture){if(Ot)if(ct)n.texStorage2D(t.TEXTURE_2D,De,et,we.width,we.height);else{let le=we.width,ve=we.height;for(let Le=0;Le<De;Le++)n.texImage2D(t.TEXTURE_2D,Le,et,le,ve,0,Oe,Ye,null),le>>=1,ve>>=1}}else if(Mt.length>0){if(ct&&Ot){const le=Ke(Mt[0]);n.texStorage2D(t.TEXTURE_2D,De,et,le.width,le.height)}for(let le=0,ve=Mt.length;le<ve;le++)ke=Mt[le],ct?$&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,Oe,Ye,ke):n.texImage2D(t.TEXTURE_2D,le,et,Oe,Ye,ke);P.generateMipmaps=!1}else if(ct){if(Ot){const le=Ke(we);n.texStorage2D(t.TEXTURE_2D,De,et,le.width,le.height)}$&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Oe,Ye,we)}else n.texImage2D(t.TEXTURE_2D,0,et,Oe,Ye,we);E(P)&&h(ge),$e.__version=ue.version,P.onUpdate&&P.onUpdate(P)}F.__version=P.version}function xe(F,P,J){if(P.image.length!==6)return;const ge=st(F,P),Z=P.source;n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+J);const ue=i.get(Z);if(Z.version!==ue.__version||ge===!0){n.activeTexture(t.TEXTURE0+J);const $e=Ut.getPrimaries(Ut.workingColorSpace),Ne=P.colorSpace===zr?null:Ut.getPrimaries(P.colorSpace),je=P.colorSpace===zr||$e===Ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,P.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,P.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);const Et=P.isCompressedTexture||P.image[0].isCompressedTexture,we=P.image[0]&&P.image[0].isDataTexture,Oe=[];for(let ve=0;ve<6;ve++)!Et&&!we?Oe[ve]=A(P.image[ve],!0,r.maxCubemapSize):Oe[ve]=we?P.image[ve].image:P.image[ve],Oe[ve]=Vt(P,Oe[ve]);const Ye=Oe[0],et=s.convert(P.format,P.colorSpace),ke=s.convert(P.type),Mt=w(P.internalFormat,et,ke,P.colorSpace),ct=P.isVideoTexture!==!0,Ot=ue.__version===void 0||ge===!0,$=Z.dataReady;let De=k(P,Ye);Ge(t.TEXTURE_CUBE_MAP,P);let le;if(Et){ct&&Ot&&n.texStorage2D(t.TEXTURE_CUBE_MAP,De,Mt,Ye.width,Ye.height);for(let ve=0;ve<6;ve++){le=Oe[ve].mipmaps;for(let Le=0;Le<le.length;Le++){const Pe=le[Le];P.format!==Ri?et!==null?ct?$&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Le,0,0,Pe.width,Pe.height,et,Pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Le,Mt,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Le,0,0,Pe.width,Pe.height,et,ke,Pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Le,Mt,Pe.width,Pe.height,0,et,ke,Pe.data)}}}else{if(le=P.mipmaps,ct&&Ot){le.length>0&&De++;const ve=Ke(Oe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,De,Mt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(we){ct?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Oe[ve].width,Oe[ve].height,et,ke,Oe[ve].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Mt,Oe[ve].width,Oe[ve].height,0,et,ke,Oe[ve].data);for(let Le=0;Le<le.length;Le++){const Je=le[Le].image[ve].image;ct?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Le+1,0,0,Je.width,Je.height,et,ke,Je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Le+1,Mt,Je.width,Je.height,0,et,ke,Je.data)}}else{ct?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,et,ke,Oe[ve]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Mt,et,ke,Oe[ve]);for(let Le=0;Le<le.length;Le++){const Pe=le[Le];ct?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Le+1,0,0,et,ke,Pe.image[ve]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Le+1,Mt,et,ke,Pe.image[ve])}}}E(P)&&h(t.TEXTURE_CUBE_MAP),ue.__version=Z.version,P.onUpdate&&P.onUpdate(P)}F.__version=P.version}function Ae(F,P,J,ge,Z,ue){const $e=s.convert(J.format,J.colorSpace),Ne=s.convert(J.type),je=w(J.internalFormat,$e,Ne,J.colorSpace),Et=i.get(P),we=i.get(J);if(we.__renderTarget=P,!Et.__hasExternalTextures){const Oe=Math.max(1,P.width>>ue),Ye=Math.max(1,P.height>>ue);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,ue,je,Oe,Ye,P.depth,0,$e,Ne,null):n.texImage2D(Z,ue,je,Oe,Ye,0,$e,Ne,null)}n.bindFramebuffer(t.FRAMEBUFFER,F),ft(P)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ge,Z,we.__webglTexture,0,at(P)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ge,Z,we.__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ye(F,P,J){if(t.bindRenderbuffer(t.RENDERBUFFER,F),P.depthBuffer){const ge=P.depthTexture,Z=ge&&ge.isDepthTexture?ge.type:null,ue=C(P.stencilBuffer,Z),$e=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ne=at(P);ft(P)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ne,ue,P.width,P.height):J?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,ue,P.width,P.height):t.renderbufferStorage(t.RENDERBUFFER,ue,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,$e,t.RENDERBUFFER,F)}else{const ge=P.textures;for(let Z=0;Z<ge.length;Z++){const ue=ge[Z],$e=s.convert(ue.format,ue.colorSpace),Ne=s.convert(ue.type),je=w(ue.internalFormat,$e,Ne,ue.colorSpace),Et=at(P);J&&ft(P)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Et,je,P.width,P.height):ft(P)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Et,je,P.width,P.height):t.renderbufferStorage(t.RENDERBUFFER,je,P.width,P.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Fe(F,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,F),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=i.get(P.depthTexture);ge.__renderTarget=P,(!ge.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),he(P.depthTexture,0);const Z=ge.__webglTexture,ue=at(P);if(P.depthTexture.format===Wa)ft(P)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0);else if(P.depthTexture.format===Xa)ft(P)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function nt(F){const P=i.get(F),J=F.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==F.depthTexture){const ge=F.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),ge){const Z=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,ge.removeEventListener("dispose",Z)};ge.addEventListener("dispose",Z),P.__depthDisposeCallback=Z}P.__boundDepthTexture=ge}if(F.depthTexture&&!P.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Fe(P.__webglFramebuffer,F)}else if(J){P.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(n.bindFramebuffer(t.FRAMEBUFFER,P.__webglFramebuffer[ge]),P.__webglDepthbuffer[ge]===void 0)P.__webglDepthbuffer[ge]=t.createRenderbuffer(),ye(P.__webglDepthbuffer[ge],F,!1);else{const Z=F.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=P.__webglDepthbuffer[ge];t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,ue)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=t.createRenderbuffer(),ye(P.__webglDepthbuffer,F,!1);else{const ge=F.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=P.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,ge,t.RENDERBUFFER,Z)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function He(F,P,J){const ge=i.get(F);P!==void 0&&Ae(ge.__webglFramebuffer,F,F.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),J!==void 0&&nt(F)}function Lt(F){const P=F.texture,J=i.get(F),ge=i.get(P);F.addEventListener("dispose",f);const Z=F.textures,ue=F.isWebGLCubeRenderTarget===!0,$e=Z.length>1;if($e||(ge.__webglTexture===void 0&&(ge.__webglTexture=t.createTexture()),ge.__version=P.version,a.memory.textures++),ue){J.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(P.mipmaps&&P.mipmaps.length>0){J.__webglFramebuffer[Ne]=[];for(let je=0;je<P.mipmaps.length;je++)J.__webglFramebuffer[Ne][je]=t.createFramebuffer()}else J.__webglFramebuffer[Ne]=t.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ne=0;Ne<P.mipmaps.length;Ne++)J.__webglFramebuffer[Ne]=t.createFramebuffer()}else J.__webglFramebuffer=t.createFramebuffer();if($e)for(let Ne=0,je=Z.length;Ne<je;Ne++){const Et=i.get(Z[Ne]);Et.__webglTexture===void 0&&(Et.__webglTexture=t.createTexture(),a.memory.textures++)}if(F.samples>0&&ft(F)===!1){J.__webglMultisampledFramebuffer=t.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ne=0;Ne<Z.length;Ne++){const je=Z[Ne];J.__webglColorRenderbuffer[Ne]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,J.__webglColorRenderbuffer[Ne]);const Et=s.convert(je.format,je.colorSpace),we=s.convert(je.type),Oe=w(je.internalFormat,Et,we,je.colorSpace,F.isXRRenderTarget===!0),Ye=at(F);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ye,Oe,F.width,F.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.RENDERBUFFER,J.__webglColorRenderbuffer[Ne])}t.bindRenderbuffer(t.RENDERBUFFER,null),F.depthBuffer&&(J.__webglDepthRenderbuffer=t.createRenderbuffer(),ye(J.__webglDepthRenderbuffer,F,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){n.bindTexture(t.TEXTURE_CUBE_MAP,ge.__webglTexture),Ge(t.TEXTURE_CUBE_MAP,P);for(let Ne=0;Ne<6;Ne++)if(P.mipmaps&&P.mipmaps.length>0)for(let je=0;je<P.mipmaps.length;je++)Ae(J.__webglFramebuffer[Ne][je],F,P,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,je);else Ae(J.__webglFramebuffer[Ne],F,P,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);E(P)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if($e){for(let Ne=0,je=Z.length;Ne<je;Ne++){const Et=Z[Ne],we=i.get(Et);n.bindTexture(t.TEXTURE_2D,we.__webglTexture),Ge(t.TEXTURE_2D,Et),Ae(J.__webglFramebuffer,F,Et,t.COLOR_ATTACHMENT0+Ne,t.TEXTURE_2D,0),E(Et)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let Ne=t.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ne=F.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ne,ge.__webglTexture),Ge(Ne,P),P.mipmaps&&P.mipmaps.length>0)for(let je=0;je<P.mipmaps.length;je++)Ae(J.__webglFramebuffer[je],F,P,t.COLOR_ATTACHMENT0,Ne,je);else Ae(J.__webglFramebuffer,F,P,t.COLOR_ATTACHMENT0,Ne,0);E(P)&&h(Ne),n.unbindTexture()}F.depthBuffer&&nt(F)}function ht(F){const P=F.textures;for(let J=0,ge=P.length;J<ge;J++){const Z=P[J];if(E(Z)){const ue=S(F),$e=i.get(Z).__webglTexture;n.bindTexture(ue,$e),h(ue),n.unbindTexture()}}}const We=[],H=[];function kt(F){if(F.samples>0){if(ft(F)===!1){const P=F.textures,J=F.width,ge=F.height;let Z=t.COLOR_BUFFER_BIT;const ue=F.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$e=i.get(F),Ne=P.length>1;if(Ne)for(let je=0;je<P.length;je++)n.bindFramebuffer(t.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+je,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,$e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+je,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let je=0;je<P.length;je++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),Ne){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,$e.__webglColorRenderbuffer[je]);const Et=i.get(P[je]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Et,0)}t.blitFramebuffer(0,0,J,ge,0,0,J,ge,Z,t.NEAREST),u===!0&&(We.length=0,H.length=0,We.push(t.COLOR_ATTACHMENT0+je),F.depthBuffer&&F.resolveDepthBuffer===!1&&(We.push(ue),H.push(ue),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,H)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,We))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Ne)for(let je=0;je<P.length;je++){n.bindFramebuffer(t.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+je,t.RENDERBUFFER,$e.__webglColorRenderbuffer[je]);const Et=i.get(P[je]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,$e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+je,t.TEXTURE_2D,Et,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&u){const P=F.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[P])}}}function at(F){return Math.min(r.maxSamples,F.samples)}function ft(F){const P=i.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Xe(F){const P=a.render.frame;m.get(F)!==P&&(m.set(F,P),F.update())}function Vt(F,P){const J=F.colorSpace,ge=F.format,Z=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||J!==Fo&&J!==zr&&(Ut.getTransfer(J)===jt?(ge!==Ri||Z!==_r)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),P}function Ke(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(d.width=F.naturalWidth||F.width,d.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(d.width=F.displayWidth,d.height=F.displayHeight):(d.width=F.width,d.height=F.height),d}this.allocateTextureUnit=W,this.resetTextureUnits=q,this.setTexture2D=he,this.setTexture2DArray=fe,this.setTexture3D=me,this.setTextureCube=V,this.rebindTextures=He,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=ft}function Bb(t,e){function n(i,r=zr){let s;const a=Ut.getTransfer(r);if(i===_r)return t.UNSIGNED_BYTE;if(i===lp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===cp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Q_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===K_)return t.BYTE;if(i===Z_)return t.SHORT;if(i===Va)return t.UNSIGNED_SHORT;if(i===ap)return t.INT;if(i===Is)return t.UNSIGNED_INT;if(i===cr)return t.FLOAT;if(i===Qa)return t.HALF_FLOAT;if(i===J_)return t.ALPHA;if(i===ex)return t.RGB;if(i===Ri)return t.RGBA;if(i===tx)return t.LUMINANCE;if(i===nx)return t.LUMINANCE_ALPHA;if(i===Wa)return t.DEPTH_COMPONENT;if(i===Xa)return t.DEPTH_STENCIL;if(i===ix)return t.RED;if(i===up)return t.RED_INTEGER;if(i===rx)return t.RG;if(i===fp)return t.RG_INTEGER;if(i===dp)return t.RGBA_INTEGER;if(i===fc||i===dc||i===hc||i===pc)if(a===jt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===fc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===dc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===hc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===fc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===dc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===hc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fd||i===kd||i===Od||i===Bd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Fd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Od)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zd||i===Hd||i===jd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===zd||i===Hd)return a===jt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===jd)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Vd||i===Gd||i===Wd||i===Xd||i===qd||i===$d||i===Yd||i===Kd||i===Zd||i===Qd||i===Jd||i===eh||i===th||i===nh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Vd)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gd)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wd)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xd)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qd)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$d)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yd)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Kd)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zd)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qd)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jd)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===eh)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===th)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nh)return a===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mc||i===ih||i===rh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===mc)return a===jt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ih)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sx||i===sh||i===oh||i===ah)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===mc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===sh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===oh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ah)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ga?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const zb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Kn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new yr({vertexShader:zb,fragmentShader:Hb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new fr(new cu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vb extends Ho{constructor(e,n){super();const i=this;let r=null,s=1,a=null,l="local-floor",u=1,d=null,m=null,g=null,v=null,y=null,M=null;const A=new jb,E=n.getContextAttributes();let h=null,S=null;const w=[],C=[],k=new Ht;let I=null;const f=new pi;f.viewport=new sn;const B=new pi;B.viewport=new sn;const D=[f,B],N=new uM;let O=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let xe=w[oe];return xe===void 0&&(xe=new Ef,w[oe]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(oe){let xe=w[oe];return xe===void 0&&(xe=new Ef,w[oe]=xe),xe.getGripSpace()},this.getHand=function(oe){let xe=w[oe];return xe===void 0&&(xe=new Ef,w[oe]=xe),xe.getHandSpace()};function W(oe){const xe=C.indexOf(oe.inputSource);if(xe===-1)return;const Ae=w[xe];Ae!==void 0&&(Ae.update(oe.inputSource,oe.frame,d||a),Ae.dispatchEvent({type:oe.type,data:oe.inputSource}))}function ee(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",he);for(let oe=0;oe<w.length;oe++){const xe=C[oe];xe!==null&&(C[oe]=null,w[oe].disconnect(xe))}O=null,q=null,A.reset(),e.setRenderTarget(h),y=null,v=null,g=null,r=null,S=null,st.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(k.width,k.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){s=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){l=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||a},this.setReferenceSpace=function(oe){d=oe},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(oe){if(r=oe,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",he),E.xrCompatible!==!0&&await n.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(k),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,ye=null,Fe=null;E.depth&&(Fe=E.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ae=E.stencil?Xa:Wa,ye=E.stencil?Ga:Is);const nt={colorFormat:n.RGBA8,depthFormat:Fe,scaleFactor:s};g=new XRWebGLBinding(r,n),v=g.createProjectionLayer(nt),r.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),S=new Us(v.textureWidth,v.textureHeight,{format:Ri,type:_r,depthTexture:new xx(v.textureWidth,v.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ae={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};y=new XRWebGLLayer(r,n,Ae),r.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),S=new Us(y.framebufferWidth,y.framebufferHeight,{format:Ri,type:_r,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(u),d=null,a=await r.requestReferenceSpace(l),st.setContext(r),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function he(oe){for(let xe=0;xe<oe.removed.length;xe++){const Ae=oe.removed[xe],ye=C.indexOf(Ae);ye>=0&&(C[ye]=null,w[ye].disconnect(Ae))}for(let xe=0;xe<oe.added.length;xe++){const Ae=oe.added[xe];let ye=C.indexOf(Ae);if(ye===-1){for(let nt=0;nt<w.length;nt++)if(nt>=C.length){C.push(Ae),ye=nt;break}else if(C[nt]===null){C[nt]=Ae,ye=nt;break}if(ye===-1)break}const Fe=w[ye];Fe&&Fe.connect(Ae)}}const fe=new se,me=new se;function V(oe,xe,Ae){fe.setFromMatrixPosition(xe.matrixWorld),me.setFromMatrixPosition(Ae.matrixWorld);const ye=fe.distanceTo(me),Fe=xe.projectionMatrix.elements,nt=Ae.projectionMatrix.elements,He=Fe[14]/(Fe[10]-1),Lt=Fe[14]/(Fe[10]+1),ht=(Fe[9]+1)/Fe[5],We=(Fe[9]-1)/Fe[5],H=(Fe[8]-1)/Fe[0],kt=(nt[8]+1)/nt[0],at=He*H,ft=He*kt,Xe=ye/(-H+kt),Vt=Xe*-H;if(xe.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Vt),oe.translateZ(Xe),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Fe[10]===-1)oe.projectionMatrix.copy(xe.projectionMatrix),oe.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const Ke=He+Xe,F=Lt+Xe,P=at-Vt,J=ft+(ye-Vt),ge=ht*Lt/F*Ke,Z=We*Lt/F*Ke;oe.projectionMatrix.makePerspective(P,J,ge,Z,Ke,F),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function ce(oe,xe){xe===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(xe.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(r===null)return;let xe=oe.near,Ae=oe.far;A.texture!==null&&(A.depthNear>0&&(xe=A.depthNear),A.depthFar>0&&(Ae=A.depthFar)),N.near=B.near=f.near=xe,N.far=B.far=f.far=Ae,(O!==N.near||q!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),O=N.near,q=N.far),f.layers.mask=oe.layers.mask|2,B.layers.mask=oe.layers.mask|4,N.layers.mask=f.layers.mask|B.layers.mask;const ye=oe.parent,Fe=N.cameras;ce(N,ye);for(let nt=0;nt<Fe.length;nt++)ce(Fe[nt],ye);Fe.length===2?V(N,f,B):N.projectionMatrix.copy(f.projectionMatrix),_e(oe,N,ye)};function _e(oe,xe,Ae){Ae===null?oe.matrix.copy(xe.matrixWorld):(oe.matrix.copy(Ae.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(xe.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(xe.projectionMatrix),oe.projectionMatrixInverse.copy(xe.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=lh*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(v===null&&y===null))return u},this.setFoveation=function(oe){u=oe,v!==null&&(v.fixedFoveation=oe),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=oe)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(N)};let be=null;function Ge(oe,xe){if(m=xe.getViewerPose(d||a),M=xe,m!==null){const Ae=m.views;y!==null&&(e.setRenderTargetFramebuffer(S,y.framebuffer),e.setRenderTarget(S));let ye=!1;Ae.length!==N.cameras.length&&(N.cameras.length=0,ye=!0);for(let He=0;He<Ae.length;He++){const Lt=Ae[He];let ht=null;if(y!==null)ht=y.getViewport(Lt);else{const H=g.getViewSubImage(v,Lt);ht=H.viewport,He===0&&(e.setRenderTargetTextures(S,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(S))}let We=D[He];We===void 0&&(We=new pi,We.layers.enable(He),We.viewport=new sn,D[He]=We),We.matrix.fromArray(Lt.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Lt.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(ht.x,ht.y,ht.width,ht.height),He===0&&(N.matrix.copy(We.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),ye===!0&&N.cameras.push(We)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){const He=g.getDepthInformation(Ae[0]);He&&He.isValid&&He.texture&&A.init(e,He,r.renderState)}}for(let Ae=0;Ae<w.length;Ae++){const ye=C[Ae],Fe=w[Ae];ye!==null&&Fe!==void 0&&Fe.update(ye,xe,d||a)}be&&be(oe,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),M=null}const st=new yx;st.setAnimationLoop(Ge),this.setAnimationLoop=function(oe){be=oe},this.dispose=function(){}}}const ps=new xr,Gb=new on;function Wb(t,e){function n(E,h){E.matrixAutoUpdate===!0&&E.updateMatrix(),h.value.copy(E.matrix)}function i(E,h){h.color.getRGB(E.fogColor.value,mx(t)),h.isFog?(E.fogNear.value=h.near,E.fogFar.value=h.far):h.isFogExp2&&(E.fogDensity.value=h.density)}function r(E,h,S,w,C){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(E,h):h.isMeshToonMaterial?(s(E,h),g(E,h)):h.isMeshPhongMaterial?(s(E,h),m(E,h)):h.isMeshStandardMaterial?(s(E,h),v(E,h),h.isMeshPhysicalMaterial&&y(E,h,C)):h.isMeshMatcapMaterial?(s(E,h),M(E,h)):h.isMeshDepthMaterial?s(E,h):h.isMeshDistanceMaterial?(s(E,h),A(E,h)):h.isMeshNormalMaterial?s(E,h):h.isLineBasicMaterial?(a(E,h),h.isLineDashedMaterial&&l(E,h)):h.isPointsMaterial?u(E,h,S,w):h.isSpriteMaterial?d(E,h):h.isShadowMaterial?(E.color.value.copy(h.color),E.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(E,h){E.opacity.value=h.opacity,h.color&&E.diffuse.value.copy(h.color),h.emissive&&E.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(E.map.value=h.map,n(h.map,E.mapTransform)),h.alphaMap&&(E.alphaMap.value=h.alphaMap,n(h.alphaMap,E.alphaMapTransform)),h.bumpMap&&(E.bumpMap.value=h.bumpMap,n(h.bumpMap,E.bumpMapTransform),E.bumpScale.value=h.bumpScale,h.side===Yn&&(E.bumpScale.value*=-1)),h.normalMap&&(E.normalMap.value=h.normalMap,n(h.normalMap,E.normalMapTransform),E.normalScale.value.copy(h.normalScale),h.side===Yn&&E.normalScale.value.negate()),h.displacementMap&&(E.displacementMap.value=h.displacementMap,n(h.displacementMap,E.displacementMapTransform),E.displacementScale.value=h.displacementScale,E.displacementBias.value=h.displacementBias),h.emissiveMap&&(E.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,E.emissiveMapTransform)),h.specularMap&&(E.specularMap.value=h.specularMap,n(h.specularMap,E.specularMapTransform)),h.alphaTest>0&&(E.alphaTest.value=h.alphaTest);const S=e.get(h),w=S.envMap,C=S.envMapRotation;w&&(E.envMap.value=w,ps.copy(C),ps.x*=-1,ps.y*=-1,ps.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),E.envMapRotation.value.setFromMatrix4(Gb.makeRotationFromEuler(ps)),E.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=h.reflectivity,E.ior.value=h.ior,E.refractionRatio.value=h.refractionRatio),h.lightMap&&(E.lightMap.value=h.lightMap,E.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,E.lightMapTransform)),h.aoMap&&(E.aoMap.value=h.aoMap,E.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,E.aoMapTransform))}function a(E,h){E.diffuse.value.copy(h.color),E.opacity.value=h.opacity,h.map&&(E.map.value=h.map,n(h.map,E.mapTransform))}function l(E,h){E.dashSize.value=h.dashSize,E.totalSize.value=h.dashSize+h.gapSize,E.scale.value=h.scale}function u(E,h,S,w){E.diffuse.value.copy(h.color),E.opacity.value=h.opacity,E.size.value=h.size*S,E.scale.value=w*.5,h.map&&(E.map.value=h.map,n(h.map,E.uvTransform)),h.alphaMap&&(E.alphaMap.value=h.alphaMap,n(h.alphaMap,E.alphaMapTransform)),h.alphaTest>0&&(E.alphaTest.value=h.alphaTest)}function d(E,h){E.diffuse.value.copy(h.color),E.opacity.value=h.opacity,E.rotation.value=h.rotation,h.map&&(E.map.value=h.map,n(h.map,E.mapTransform)),h.alphaMap&&(E.alphaMap.value=h.alphaMap,n(h.alphaMap,E.alphaMapTransform)),h.alphaTest>0&&(E.alphaTest.value=h.alphaTest)}function m(E,h){E.specular.value.copy(h.specular),E.shininess.value=Math.max(h.shininess,1e-4)}function g(E,h){h.gradientMap&&(E.gradientMap.value=h.gradientMap)}function v(E,h){E.metalness.value=h.metalness,h.metalnessMap&&(E.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,E.metalnessMapTransform)),E.roughness.value=h.roughness,h.roughnessMap&&(E.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,E.roughnessMapTransform)),h.envMap&&(E.envMapIntensity.value=h.envMapIntensity)}function y(E,h,S){E.ior.value=h.ior,h.sheen>0&&(E.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),E.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(E.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,E.sheenColorMapTransform)),h.sheenRoughnessMap&&(E.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,E.sheenRoughnessMapTransform))),h.clearcoat>0&&(E.clearcoat.value=h.clearcoat,E.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(E.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,E.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(E.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Yn&&E.clearcoatNormalScale.value.negate())),h.dispersion>0&&(E.dispersion.value=h.dispersion),h.iridescence>0&&(E.iridescence.value=h.iridescence,E.iridescenceIOR.value=h.iridescenceIOR,E.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(E.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,E.iridescenceMapTransform)),h.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),h.transmission>0&&(E.transmission.value=h.transmission,E.transmissionSamplerMap.value=S.texture,E.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(E.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,E.transmissionMapTransform)),E.thickness.value=h.thickness,h.thicknessMap&&(E.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=h.attenuationDistance,E.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(E.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(E.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=h.specularIntensity,E.specularColor.value.copy(h.specularColor),h.specularColorMap&&(E.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,E.specularColorMapTransform)),h.specularIntensityMap&&(E.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,E.specularIntensityMapTransform))}function M(E,h){h.matcap&&(E.matcap.value=h.matcap)}function A(E,h){const S=e.get(h).light;E.referencePosition.value.setFromMatrixPosition(S.matrixWorld),E.nearDistance.value=S.shadow.camera.near,E.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Xb(t,e,n,i){let r={},s={},a=[];const l=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function u(S,w){const C=w.program;i.uniformBlockBinding(S,C)}function d(S,w){let C=r[S.id];C===void 0&&(M(S),C=m(S),r[S.id]=C,S.addEventListener("dispose",E));const k=w.program;i.updateUBOMapping(S,k);const I=e.render.frame;s[S.id]!==I&&(v(S),s[S.id]=I)}function m(S){const w=g();S.__bindingPointIndex=w;const C=t.createBuffer(),k=S.__size,I=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,C),t.bufferData(t.UNIFORM_BUFFER,k,I),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,w,C),C}function g(){for(let S=0;S<l;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(S){const w=r[S.id],C=S.uniforms,k=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let I=0,f=C.length;I<f;I++){const B=Array.isArray(C[I])?C[I]:[C[I]];for(let D=0,N=B.length;D<N;D++){const O=B[D];if(y(O,I,D,k)===!0){const q=O.__offset,W=Array.isArray(O.value)?O.value:[O.value];let ee=0;for(let he=0;he<W.length;he++){const fe=W[he],me=A(fe);typeof fe=="number"||typeof fe=="boolean"?(O.__data[0]=fe,t.bufferSubData(t.UNIFORM_BUFFER,q+ee,O.__data)):fe.isMatrix3?(O.__data[0]=fe.elements[0],O.__data[1]=fe.elements[1],O.__data[2]=fe.elements[2],O.__data[3]=0,O.__data[4]=fe.elements[3],O.__data[5]=fe.elements[4],O.__data[6]=fe.elements[5],O.__data[7]=0,O.__data[8]=fe.elements[6],O.__data[9]=fe.elements[7],O.__data[10]=fe.elements[8],O.__data[11]=0):(fe.toArray(O.__data,ee),ee+=me.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,q,O.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function y(S,w,C,k){const I=S.value,f=w+"_"+C;if(k[f]===void 0)return typeof I=="number"||typeof I=="boolean"?k[f]=I:k[f]=I.clone(),!0;{const B=k[f];if(typeof I=="number"||typeof I=="boolean"){if(B!==I)return k[f]=I,!0}else if(B.equals(I)===!1)return B.copy(I),!0}return!1}function M(S){const w=S.uniforms;let C=0;const k=16;for(let f=0,B=w.length;f<B;f++){const D=Array.isArray(w[f])?w[f]:[w[f]];for(let N=0,O=D.length;N<O;N++){const q=D[N],W=Array.isArray(q.value)?q.value:[q.value];for(let ee=0,he=W.length;ee<he;ee++){const fe=W[ee],me=A(fe),V=C%k,ce=V%me.boundary,_e=V+ce;C+=ce,_e!==0&&k-_e<me.storage&&(C+=k-_e),q.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=C,C+=me.storage}}}const I=C%k;return I>0&&(C+=k-I),S.__size=C,S.__cache={},this}function A(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),w}function E(S){const w=S.target;w.removeEventListener("dispose",E);const C=a.indexOf(w.__bindingPointIndex);a.splice(C,1),t.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function h(){for(const S in r)t.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:u,update:d,dispose:h}}class qb{constructor(e={}){const{canvas:n=CE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=a;const M=new Uint32Array(4),A=new Int32Array(4);let E=null,h=null;const S=[],w=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let k=!1;this._outputColorSpace=fi;let I=0,f=0,B=null,D=-1,N=null;const O=new sn,q=new sn;let W=null;const ee=new At(0);let he=0,fe=n.width,me=n.height,V=1,ce=null,_e=null;const be=new sn(0,0,fe,me),Ge=new sn(0,0,fe,me);let st=!1;const oe=new _x;let xe=!1,Ae=!1;const ye=new on,Fe=new on,nt=new se,He=new sn,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function We(){return B===null?V:1}let H=i;function kt(L,Y){return n.getContext(L,Y)}try{const L={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${op}`),n.addEventListener("webglcontextlost",ve,!1),n.addEventListener("webglcontextrestored",Le,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),H===null){const Y="webgl2";if(H=kt(Y,L),H===null)throw kt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let at,ft,Xe,Vt,Ke,F,P,J,ge,Z,ue,$e,Ne,je,Et,we,Oe,Ye,et,ke,Mt,ct,Ot,$;function De(){at=new i1(H),at.init(),ct=new Bb(H,at),ft=new KT(H,at,e,ct),Xe=new kb(H,at),ft.reverseDepthBuffer&&v&&Xe.buffers.depth.setReversed(!0),Vt=new o1(H),Ke=new wb,F=new Ob(H,at,Xe,Ke,ft,ct,Vt),P=new QT(C),J=new n1(C),ge=new dM(H),Ot=new $T(H,ge),Z=new r1(H,ge,Vt,Ot),ue=new l1(H,Z,ge,Vt),et=new a1(H,ft,F),we=new ZT(Ke),$e=new Mb(C,P,J,at,ft,Ot,we),Ne=new Wb(C,Ke),je=new bb,Et=new Db(at),Ye=new qT(C,P,J,Xe,ue,y,u),Oe=new Ub(C,ue,ft),$=new Xb(H,Vt,ft,Xe),ke=new YT(H,at,Vt),Mt=new s1(H,at,Vt),Vt.programs=$e.programs,C.capabilities=ft,C.extensions=at,C.properties=Ke,C.renderLists=je,C.shadowMap=Oe,C.state=Xe,C.info=Vt}De();const le=new Vb(C,H);this.xr=le,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const L=at.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=at.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(L){L!==void 0&&(V=L,this.setSize(fe,me,!1))},this.getSize=function(L){return L.set(fe,me)},this.setSize=function(L,Y,ne=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}fe=L,me=Y,n.width=Math.floor(L*V),n.height=Math.floor(Y*V),ne===!0&&(n.style.width=L+"px",n.style.height=Y+"px"),this.setViewport(0,0,L,Y)},this.getDrawingBufferSize=function(L){return L.set(fe*V,me*V).floor()},this.setDrawingBufferSize=function(L,Y,ne){fe=L,me=Y,V=ne,n.width=Math.floor(L*ne),n.height=Math.floor(Y*ne),this.setViewport(0,0,L,Y)},this.getCurrentViewport=function(L){return L.copy(O)},this.getViewport=function(L){return L.copy(be)},this.setViewport=function(L,Y,ne,ie){L.isVector4?be.set(L.x,L.y,L.z,L.w):be.set(L,Y,ne,ie),Xe.viewport(O.copy(be).multiplyScalar(V).round())},this.getScissor=function(L){return L.copy(Ge)},this.setScissor=function(L,Y,ne,ie){L.isVector4?Ge.set(L.x,L.y,L.z,L.w):Ge.set(L,Y,ne,ie),Xe.scissor(q.copy(Ge).multiplyScalar(V).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(L){Xe.setScissorTest(st=L)},this.setOpaqueSort=function(L){ce=L},this.setTransparentSort=function(L){_e=L},this.getClearColor=function(L){return L.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(L=!0,Y=!0,ne=!0){let ie=0;if(L){let K=!1;if(B!==null){const Ee=B.texture.format;K=Ee===dp||Ee===fp||Ee===up}if(K){const Ee=B.texture.type,Ce=Ee===_r||Ee===Is||Ee===Va||Ee===Ga||Ee===lp||Ee===cp,Be=Ye.getClearColor(),ze=Ye.getClearAlpha(),ot=Be.r,it=Be.g,Qe=Be.b;Ce?(M[0]=ot,M[1]=it,M[2]=Qe,M[3]=ze,H.clearBufferuiv(H.COLOR,0,M)):(A[0]=ot,A[1]=it,A[2]=Qe,A[3]=ze,H.clearBufferiv(H.COLOR,0,A))}else ie|=H.COLOR_BUFFER_BIT}Y&&(ie|=H.DEPTH_BUFFER_BIT),ne&&(ie|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ve,!1),n.removeEventListener("webglcontextrestored",Le,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),Ye.dispose(),je.dispose(),Et.dispose(),Ke.dispose(),P.dispose(),J.dispose(),ue.dispose(),Ot.dispose(),$.dispose(),$e.dispose(),le.dispose(),le.removeEventListener("sessionstart",Xi),le.removeEventListener("sessionend",qi),xi.stop()};function ve(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const L=Vt.autoReset,Y=Oe.enabled,ne=Oe.autoUpdate,ie=Oe.needsUpdate,K=Oe.type;De(),Vt.autoReset=L,Oe.enabled=Y,Oe.autoUpdate=ne,Oe.needsUpdate=ie,Oe.type=K}function Pe(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Je(L){const Y=L.target;Y.removeEventListener("dispose",Je),vt(Y)}function vt(L){an(L),Ke.remove(L)}function an(L){const Y=Ke.get(L).programs;Y!==void 0&&(Y.forEach(function(ne){$e.releaseProgram(ne)}),L.isShaderMaterial&&$e.releaseShaderCache(L))}this.renderBufferDirect=function(L,Y,ne,ie,K,Ee){Y===null&&(Y=Lt);const Ce=K.isMesh&&K.matrixWorld.determinant()<0,Be=fu(L,Y,ne,ie,K);Xe.setMaterial(ie,Ce);let ze=ne.index,ot=1;if(ie.wireframe===!0){if(ze=Z.getWireframeAttribute(ne),ze===void 0)return;ot=2}const it=ne.drawRange,Qe=ne.attributes.position;let wt=it.start*ot,Ct=(it.start+it.count)*ot;Ee!==null&&(wt=Math.max(wt,Ee.start*ot),Ct=Math.min(Ct,(Ee.start+Ee.count)*ot)),ze!==null?(wt=Math.max(wt,0),Ct=Math.min(Ct,ze.count)):Qe!=null&&(wt=Math.max(wt,0),Ct=Math.min(Ct,Qe.count));const Zt=Ct-wt;if(Zt<0||Zt===1/0)return;Ot.setup(K,ie,Be,ne,ze);let _t,gt=ke;if(ze!==null&&(_t=ge.get(ze),gt=Mt,gt.setIndex(_t)),K.isMesh)ie.wireframe===!0?(Xe.setLineWidth(ie.wireframeLinewidth*We()),gt.setMode(H.LINES)):gt.setMode(H.TRIANGLES);else if(K.isLine){let Ze=ie.linewidth;Ze===void 0&&(Ze=1),Xe.setLineWidth(Ze*We()),K.isLineSegments?gt.setMode(H.LINES):K.isLineLoop?gt.setMode(H.LINE_LOOP):gt.setMode(H.LINE_STRIP)}else K.isPoints?gt.setMode(H.POINTS):K.isSprite&&gt.setMode(H.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)gc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))gt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Ze=K._multiDrawStarts,fn=K._multiDrawCounts,It=K._multiDrawCount,Ln=ze?ge.get(ze).bytesPerElement:1,$i=Ke.get(ie).currentProgram.getUniforms();for(let vn=0;vn<It;vn++)$i.setValue(H,"_gl_DrawID",vn),gt.render(Ze[vn]/Ln,fn[vn])}else if(K.isInstancedMesh)gt.renderInstances(wt,Zt,K.count);else if(ne.isInstancedBufferGeometry){const Ze=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,fn=Math.min(ne.instanceCount,Ze);gt.renderInstances(wt,Zt,fn)}else gt.render(wt,Zt)};function Ft(L,Y,ne){L.transparent===!0&&L.side===or&&L.forceSinglePass===!1?(L.side=Yn,L.needsUpdate=!0,Bs(L,Y,ne),L.side=ts,L.needsUpdate=!0,Bs(L,Y,ne),L.side=or):Bs(L,Y,ne)}this.compile=function(L,Y,ne=null){ne===null&&(ne=L),h=Et.get(ne),h.init(Y),w.push(h),ne.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(h.pushLight(K),K.castShadow&&h.pushShadow(K))}),L!==ne&&L.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(h.pushLight(K),K.castShadow&&h.pushShadow(K))}),h.setupLights();const ie=new Set;return L.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ee=K.material;if(Ee)if(Array.isArray(Ee))for(let Ce=0;Ce<Ee.length;Ce++){const Be=Ee[Ce];Ft(Be,ne,K),ie.add(Be)}else Ft(Ee,ne,K),ie.add(Ee)}),h=w.pop(),ie},this.compileAsync=function(L,Y,ne=null){const ie=this.compile(L,Y,ne);return new Promise(K=>{function Ee(){if(ie.forEach(function(Ce){Ke.get(Ce).currentProgram.isReady()&&ie.delete(Ce)}),ie.size===0){K(L);return}setTimeout(Ee,10)}at.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let zn=null;function ai(L){zn&&zn(L)}function Xi(){xi.stop()}function qi(){xi.start()}const xi=new yx;xi.setAnimationLoop(ai),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(L){zn=L,le.setAnimationLoop(L),L===null?xi.stop():xi.start()},le.addEventListener("sessionstart",Xi),le.addEventListener("sessionend",qi),this.render=function(L,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(Y),Y=le.getCamera()),L.isScene===!0&&L.onBeforeRender(C,L,Y,B),h=Et.get(L,w.length),h.init(Y),w.push(h),Fe.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),oe.setFromProjectionMatrix(Fe),Ae=this.localClippingEnabled,xe=we.init(this.clippingPlanes,Ae),E=je.get(L,S.length),E.init(),S.push(E),le.enabled===!0&&le.isPresenting===!0){const Ee=C.xr.getDepthSensingMesh();Ee!==null&&Mr(Ee,Y,-1/0,C.sortObjects)}Mr(L,Y,0,C.sortObjects),E.finish(),C.sortObjects===!0&&E.sort(ce,_e),ht=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,ht&&Ye.addToRenderList(E,L),this.info.render.frame++,xe===!0&&we.beginShadows();const ne=h.state.shadowsArray;Oe.render(ne,L,Y),xe===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=E.opaque,K=E.transmissive;if(h.setupLights(),Y.isArrayCamera){const Ee=Y.cameras;if(K.length>0)for(let Ce=0,Be=Ee.length;Ce<Be;Ce++){const ze=Ee[Ce];sl(ie,K,L,ze)}ht&&Ye.render(L);for(let Ce=0,Be=Ee.length;Ce<Be;Ce++){const ze=Ee[Ce];rl(E,L,ze,ze.viewport)}}else K.length>0&&sl(ie,K,L,Y),ht&&Ye.render(L),rl(E,L,Y);B!==null&&f===0&&(F.updateMultisampleRenderTarget(B),F.updateRenderTargetMipmap(B)),L.isScene===!0&&L.onAfterRender(C,L,Y),Ot.resetDefaultState(),D=-1,N=null,w.pop(),w.length>0?(h=w[w.length-1],xe===!0&&we.setGlobalState(C.clippingPlanes,h.state.camera)):h=null,S.pop(),S.length>0?E=S[S.length-1]:E=null};function Mr(L,Y,ne,ie){if(L.visible===!1)return;if(L.layers.test(Y.layers)){if(L.isGroup)ne=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Y);else if(L.isLight)h.pushLight(L),L.castShadow&&h.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||oe.intersectsSprite(L)){ie&&He.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Fe);const Ce=ue.update(L),Be=L.material;Be.visible&&E.push(L,Ce,Be,ne,He.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||oe.intersectsObject(L))){const Ce=ue.update(L),Be=L.material;if(ie&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),He.copy(L.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),He.copy(Ce.boundingSphere.center)),He.applyMatrix4(L.matrixWorld).applyMatrix4(Fe)),Array.isArray(Be)){const ze=Ce.groups;for(let ot=0,it=ze.length;ot<it;ot++){const Qe=ze[ot],wt=Be[Qe.materialIndex];wt&&wt.visible&&E.push(L,Ce,wt,ne,He.z,Qe)}}else Be.visible&&E.push(L,Ce,Be,ne,He.z,null)}}const Ee=L.children;for(let Ce=0,Be=Ee.length;Ce<Be;Ce++)Mr(Ee[Ce],Y,ne,ie)}function rl(L,Y,ne,ie){const K=L.opaque,Ee=L.transmissive,Ce=L.transparent;h.setupLightsView(ne),xe===!0&&we.setGlobalState(C.clippingPlanes,ne),ie&&Xe.viewport(O.copy(ie)),K.length>0&&Os(K,Y,ne),Ee.length>0&&Os(Ee,Y,ne),Ce.length>0&&Os(Ce,Y,ne),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function sl(L,Y,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[ie.id]===void 0&&(h.state.transmissionRenderTarget[ie.id]=new Us(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?Qa:_r,minFilter:Ts,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace}));const Ee=h.state.transmissionRenderTarget[ie.id],Ce=ie.viewport||O;Ee.setSize(Ce.z*C.transmissionResolutionScale,Ce.w*C.transmissionResolutionScale);const Be=C.getRenderTarget();C.setRenderTarget(Ee),C.getClearColor(ee),he=C.getClearAlpha(),he<1&&C.setClearColor(16777215,.5),C.clear(),ht&&Ye.render(ne);const ze=C.toneMapping;C.toneMapping=Qr;const ot=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),h.setupLightsView(ie),xe===!0&&we.setGlobalState(C.clippingPlanes,ie),Os(L,ne,ie),F.updateMultisampleRenderTarget(Ee),F.updateRenderTargetMipmap(Ee),at.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Qe=0,wt=Y.length;Qe<wt;Qe++){const Ct=Y[Qe],Zt=Ct.object,_t=Ct.geometry,gt=Ct.material,Ze=Ct.group;if(gt.side===or&&Zt.layers.test(ie.layers)){const fn=gt.side;gt.side=Yn,gt.needsUpdate=!0,Vo(Zt,ne,ie,_t,gt,Ze),gt.side=fn,gt.needsUpdate=!0,it=!0}}it===!0&&(F.updateMultisampleRenderTarget(Ee),F.updateRenderTargetMipmap(Ee))}C.setRenderTarget(Be),C.setClearColor(ee,he),ot!==void 0&&(ie.viewport=ot),C.toneMapping=ze}function Os(L,Y,ne){const ie=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,Ee=L.length;K<Ee;K++){const Ce=L[K],Be=Ce.object,ze=Ce.geometry,ot=Ce.group;let it=Ce.material;it.allowOverride===!0&&ie!==null&&(it=ie),Be.layers.test(ne.layers)&&Vo(Be,Y,ne,ze,it,ot)}}function Vo(L,Y,ne,ie,K,Ee){L.onBeforeRender(C,Y,ne,ie,K,Ee),L.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),K.onBeforeRender(C,Y,ne,ie,L,Ee),K.transparent===!0&&K.side===or&&K.forceSinglePass===!1?(K.side=Yn,K.needsUpdate=!0,C.renderBufferDirect(ne,Y,ie,K,L,Ee),K.side=ts,K.needsUpdate=!0,C.renderBufferDirect(ne,Y,ie,K,L,Ee),K.side=or):C.renderBufferDirect(ne,Y,ie,K,L,Ee),L.onAfterRender(C,Y,ne,ie,K,Ee)}function Bs(L,Y,ne){Y.isScene!==!0&&(Y=Lt);const ie=Ke.get(L),K=h.state.lights,Ee=h.state.shadowsArray,Ce=K.state.version,Be=$e.getParameters(L,K.state,Ee,Y,ne),ze=$e.getProgramCacheKey(Be);let ot=ie.programs;ie.environment=L.isMeshStandardMaterial?Y.environment:null,ie.fog=Y.fog,ie.envMap=(L.isMeshStandardMaterial?J:P).get(L.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&L.envMap===null?Y.environmentRotation:L.envMapRotation,ot===void 0&&(L.addEventListener("dispose",Je),ot=new Map,ie.programs=ot);let it=ot.get(ze);if(it!==void 0){if(ie.currentProgram===it&&ie.lightsStateVersion===Ce)return Go(L,Be),it}else Be.uniforms=$e.getUniforms(L),L.onBeforeCompile(Be,C),it=$e.acquireProgram(Be,ze),ot.set(ze,it),ie.uniforms=Be.uniforms;const Qe=ie.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Qe.clippingPlanes=we.uniform),Go(L,Be),ie.needsLights=al(L),ie.lightsStateVersion=Ce,ie.needsLights&&(Qe.ambientLightColor.value=K.state.ambient,Qe.lightProbe.value=K.state.probe,Qe.directionalLights.value=K.state.directional,Qe.directionalLightShadows.value=K.state.directionalShadow,Qe.spotLights.value=K.state.spot,Qe.spotLightShadows.value=K.state.spotShadow,Qe.rectAreaLights.value=K.state.rectArea,Qe.ltc_1.value=K.state.rectAreaLTC1,Qe.ltc_2.value=K.state.rectAreaLTC2,Qe.pointLights.value=K.state.point,Qe.pointLightShadows.value=K.state.pointShadow,Qe.hemisphereLights.value=K.state.hemi,Qe.directionalShadowMap.value=K.state.directionalShadowMap,Qe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Qe.spotShadowMap.value=K.state.spotShadowMap,Qe.spotLightMatrix.value=K.state.spotLightMatrix,Qe.spotLightMap.value=K.state.spotLightMap,Qe.pointShadowMap.value=K.state.pointShadowMap,Qe.pointShadowMatrix.value=K.state.pointShadowMatrix),ie.currentProgram=it,ie.uniformsList=null,it}function ol(L){if(L.uniformsList===null){const Y=L.currentProgram.getUniforms();L.uniformsList=vc.seqWithValue(Y.seq,L.uniforms)}return L.uniformsList}function Go(L,Y){const ne=Ke.get(L);ne.outputColorSpace=Y.outputColorSpace,ne.batching=Y.batching,ne.batchingColor=Y.batchingColor,ne.instancing=Y.instancing,ne.instancingColor=Y.instancingColor,ne.instancingMorph=Y.instancingMorph,ne.skinning=Y.skinning,ne.morphTargets=Y.morphTargets,ne.morphNormals=Y.morphNormals,ne.morphColors=Y.morphColors,ne.morphTargetsCount=Y.morphTargetsCount,ne.numClippingPlanes=Y.numClippingPlanes,ne.numIntersection=Y.numClipIntersection,ne.vertexAlphas=Y.vertexAlphas,ne.vertexTangents=Y.vertexTangents,ne.toneMapping=Y.toneMapping}function fu(L,Y,ne,ie,K){Y.isScene!==!0&&(Y=Lt),F.resetTextureUnits();const Ee=Y.fog,Ce=ie.isMeshStandardMaterial?Y.environment:null,Be=B===null?C.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Fo,ze=(ie.isMeshStandardMaterial?J:P).get(ie.envMap||Ce),ot=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,it=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Qe=!!ne.morphAttributes.position,wt=!!ne.morphAttributes.normal,Ct=!!ne.morphAttributes.color;let Zt=Qr;ie.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Zt=C.toneMapping);const _t=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,gt=_t!==void 0?_t.length:0,Ze=Ke.get(ie),fn=h.state.lights;if(xe===!0&&(Ae===!0||L!==N)){const _n=L===N&&ie.id===D;we.setState(ie,L,_n)}let It=!1;ie.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==fn.state.version||Ze.outputColorSpace!==Be||K.isBatchedMesh&&Ze.batching===!1||!K.isBatchedMesh&&Ze.batching===!0||K.isBatchedMesh&&Ze.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Ze.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Ze.instancing===!1||!K.isInstancedMesh&&Ze.instancing===!0||K.isSkinnedMesh&&Ze.skinning===!1||!K.isSkinnedMesh&&Ze.skinning===!0||K.isInstancedMesh&&Ze.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ze.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ze.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ze.instancingMorph===!1&&K.morphTexture!==null||Ze.envMap!==ze||ie.fog===!0&&Ze.fog!==Ee||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==we.numPlanes||Ze.numIntersection!==we.numIntersection)||Ze.vertexAlphas!==ot||Ze.vertexTangents!==it||Ze.morphTargets!==Qe||Ze.morphNormals!==wt||Ze.morphColors!==Ct||Ze.toneMapping!==Zt||Ze.morphTargetsCount!==gt)&&(It=!0):(It=!0,Ze.__version=ie.version);let Ln=Ze.currentProgram;It===!0&&(Ln=Bs(ie,Y,K));let $i=!1,vn=!1,Tr=!1;const Gt=Ln.getUniforms(),Hn=Ze.uniforms;if(Xe.useProgram(Ln.program)&&($i=!0,vn=!0,Tr=!0),ie.id!==D&&(D=ie.id,vn=!0),$i||N!==L){Xe.buffers.depth.getReversed()?(ye.copy(L.projectionMatrix),PE(ye),NE(ye),Gt.setValue(H,"projectionMatrix",ye)):Gt.setValue(H,"projectionMatrix",L.projectionMatrix),Gt.setValue(H,"viewMatrix",L.matrixWorldInverse);const ln=Gt.map.cameraPosition;ln!==void 0&&ln.setValue(H,nt.setFromMatrixPosition(L.matrixWorld)),ft.logarithmicDepthBuffer&&Gt.setValue(H,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Gt.setValue(H,"isOrthographic",L.isOrthographicCamera===!0),N!==L&&(N=L,vn=!0,Tr=!0)}if(K.isSkinnedMesh){Gt.setOptional(H,K,"bindMatrix"),Gt.setOptional(H,K,"bindMatrixInverse");const _n=K.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Gt.setValue(H,"boneTexture",_n.boneTexture,F))}K.isBatchedMesh&&(Gt.setOptional(H,K,"batchingTexture"),Gt.setValue(H,"batchingTexture",K._matricesTexture,F),Gt.setOptional(H,K,"batchingIdTexture"),Gt.setValue(H,"batchingIdTexture",K._indirectTexture,F),Gt.setOptional(H,K,"batchingColorTexture"),K._colorsTexture!==null&&Gt.setValue(H,"batchingColorTexture",K._colorsTexture,F));const Yt=ne.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0)&&et.update(K,ne,Ln),(vn||Ze.receiveShadow!==K.receiveShadow)&&(Ze.receiveShadow=K.receiveShadow,Gt.setValue(H,"receiveShadow",K.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Hn.envMap.value=ze,Hn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&Y.environment!==null&&(Hn.envMapIntensity.value=Y.environmentIntensity),vn&&(Gt.setValue(H,"toneMappingExposure",C.toneMappingExposure),Ze.needsLights&&wr(Hn,Tr),Ee&&ie.fog===!0&&Ne.refreshFogUniforms(Hn,Ee),Ne.refreshMaterialUniforms(Hn,ie,V,me,h.state.transmissionRenderTarget[L.id]),vc.upload(H,ol(Ze),Hn,F)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(vc.upload(H,ol(Ze),Hn,F),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Gt.setValue(H,"center",K.center),Gt.setValue(H,"modelViewMatrix",K.modelViewMatrix),Gt.setValue(H,"normalMatrix",K.normalMatrix),Gt.setValue(H,"modelMatrix",K.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const _n=ie.uniformsGroups;for(let ln=0,qo=_n.length;ln<qo;ln++){const Yi=_n[ln];$.update(Yi,Ln),$.bind(Yi,Ln)}}return Ln}function wr(L,Y){L.ambientLightColor.needsUpdate=Y,L.lightProbe.needsUpdate=Y,L.directionalLights.needsUpdate=Y,L.directionalLightShadows.needsUpdate=Y,L.pointLights.needsUpdate=Y,L.pointLightShadows.needsUpdate=Y,L.spotLights.needsUpdate=Y,L.spotLightShadows.needsUpdate=Y,L.rectAreaLights.needsUpdate=Y,L.hemisphereLights.needsUpdate=Y}function al(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return f},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(L,Y,ne){const ie=Ke.get(L);ie.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),Ke.get(L.texture).__webglTexture=Y,Ke.get(L.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ne,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,Y){const ne=Ke.get(L);ne.__webglFramebuffer=Y,ne.__useDefaultFramebuffer=Y===void 0};const Wo=H.createFramebuffer();this.setRenderTarget=function(L,Y=0,ne=0){B=L,I=Y,f=ne;let ie=!0,K=null,Ee=!1,Ce=!1;if(L){const ze=Ke.get(L);if(ze.__useDefaultFramebuffer!==void 0)Xe.bindFramebuffer(H.FRAMEBUFFER,null),ie=!1;else if(ze.__webglFramebuffer===void 0)F.setupRenderTarget(L);else if(ze.__hasExternalTextures)F.rebindTextures(L,Ke.get(L.texture).__webglTexture,Ke.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const Qe=L.depthTexture;if(ze.__boundDepthTexture!==Qe){if(Qe!==null&&Ke.has(Qe)&&(L.width!==Qe.image.width||L.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(L)}}const ot=L.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Ce=!0);const it=Ke.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(it[Y])?K=it[Y][ne]:K=it[Y],Ee=!0):L.samples>0&&F.useMultisampledRTT(L)===!1?K=Ke.get(L).__webglMultisampledFramebuffer:Array.isArray(it)?K=it[ne]:K=it,O.copy(L.viewport),q.copy(L.scissor),W=L.scissorTest}else O.copy(be).multiplyScalar(V).floor(),q.copy(Ge).multiplyScalar(V).floor(),W=st;if(ne!==0&&(K=Wo),Xe.bindFramebuffer(H.FRAMEBUFFER,K)&&ie&&Xe.drawBuffers(L,K),Xe.viewport(O),Xe.scissor(q),Xe.setScissorTest(W),Ee){const ze=Ke.get(L.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ze.__webglTexture,ne)}else if(Ce){const ze=Ke.get(L.texture),ot=Y;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,ze.__webglTexture,ne,ot)}else if(L!==null&&ne!==0){const ze=Ke.get(L.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ze.__webglTexture,ne)}D=-1},this.readRenderTargetPixels=function(L,Y,ne,ie,K,Ee,Ce){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Ke.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ce!==void 0&&(Be=Be[Ce]),Be){Xe.bindFramebuffer(H.FRAMEBUFFER,Be);try{const ze=L.texture,ot=ze.format,it=ze.type;if(!ft.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=L.width-ie&&ne>=0&&ne<=L.height-K&&H.readPixels(Y,ne,ie,K,ct.convert(ot),ct.convert(it),Ee)}finally{const ze=B!==null?Ke.get(B).__webglFramebuffer:null;Xe.bindFramebuffer(H.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(L,Y,ne,ie,K,Ee,Ce){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Ke.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ce!==void 0&&(Be=Be[Ce]),Be)if(Y>=0&&Y<=L.width-ie&&ne>=0&&ne<=L.height-K){Xe.bindFramebuffer(H.FRAMEBUFFER,Be);const ze=L.texture,ot=ze.format,it=ze.type;if(!ft.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Qe),H.bufferData(H.PIXEL_PACK_BUFFER,Ee.byteLength,H.STREAM_READ),H.readPixels(Y,ne,ie,K,ct.convert(ot),ct.convert(it),0);const wt=B!==null?Ke.get(B).__webglFramebuffer:null;Xe.bindFramebuffer(H.FRAMEBUFFER,wt);const Ct=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await RE(H,Ct,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Qe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ee),H.deleteBuffer(Qe),H.deleteSync(Ct),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,Y=null,ne=0){const ie=Math.pow(2,-ne),K=Math.floor(L.image.width*ie),Ee=Math.floor(L.image.height*ie),Ce=Y!==null?Y.x:0,Be=Y!==null?Y.y:0;F.setTexture2D(L,0),H.copyTexSubImage2D(H.TEXTURE_2D,ne,0,0,Ce,Be,K,Ee),Xe.unbindTexture()};const Xo=H.createFramebuffer(),zs=H.createFramebuffer();this.copyTextureToTexture=function(L,Y,ne=null,ie=null,K=0,Ee=null){Ee===null&&(K!==0?(gc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=K,K=0):Ee=0);let Ce,Be,ze,ot,it,Qe,wt,Ct,Zt;const _t=L.isCompressedTexture?L.mipmaps[Ee]:L.image;if(ne!==null)Ce=ne.max.x-ne.min.x,Be=ne.max.y-ne.min.y,ze=ne.isBox3?ne.max.z-ne.min.z:1,ot=ne.min.x,it=ne.min.y,Qe=ne.isBox3?ne.min.z:0;else{const Yt=Math.pow(2,-K);Ce=Math.floor(_t.width*Yt),Be=Math.floor(_t.height*Yt),L.isDataArrayTexture?ze=_t.depth:L.isData3DTexture?ze=Math.floor(_t.depth*Yt):ze=1,ot=0,it=0,Qe=0}ie!==null?(wt=ie.x,Ct=ie.y,Zt=ie.z):(wt=0,Ct=0,Zt=0);const gt=ct.convert(Y.format),Ze=ct.convert(Y.type);let fn;Y.isData3DTexture?(F.setTexture3D(Y,0),fn=H.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(F.setTexture2DArray(Y,0),fn=H.TEXTURE_2D_ARRAY):(F.setTexture2D(Y,0),fn=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const It=H.getParameter(H.UNPACK_ROW_LENGTH),Ln=H.getParameter(H.UNPACK_IMAGE_HEIGHT),$i=H.getParameter(H.UNPACK_SKIP_PIXELS),vn=H.getParameter(H.UNPACK_SKIP_ROWS),Tr=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,_t.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,_t.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ot),H.pixelStorei(H.UNPACK_SKIP_ROWS,it),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Qe);const Gt=L.isDataArrayTexture||L.isData3DTexture,Hn=Y.isDataArrayTexture||Y.isData3DTexture;if(L.isDepthTexture){const Yt=Ke.get(L),_n=Ke.get(Y),ln=Ke.get(Yt.__renderTarget),qo=Ke.get(_n.__renderTarget);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,ln.__webglFramebuffer),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,qo.__webglFramebuffer);for(let Yi=0;Yi<ze;Yi++)Gt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ke.get(L).__webglTexture,K,Qe+Yi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ke.get(Y).__webglTexture,Ee,Zt+Yi)),H.blitFramebuffer(ot,it,Ce,Be,wt,Ct,Ce,Be,H.DEPTH_BUFFER_BIT,H.NEAREST);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(K!==0||L.isRenderTargetTexture||Ke.has(L)){const Yt=Ke.get(L),_n=Ke.get(Y);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,Xo),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,zs);for(let ln=0;ln<ze;ln++)Gt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Yt.__webglTexture,K,Qe+ln):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Yt.__webglTexture,K),Hn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,_n.__webglTexture,Ee,Zt+ln):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,_n.__webglTexture,Ee),K!==0?H.blitFramebuffer(ot,it,Ce,Be,wt,Ct,Ce,Be,H.COLOR_BUFFER_BIT,H.NEAREST):Hn?H.copyTexSubImage3D(fn,Ee,wt,Ct,Zt+ln,ot,it,Ce,Be):H.copyTexSubImage2D(fn,Ee,wt,Ct,ot,it,Ce,Be);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Hn?L.isDataTexture||L.isData3DTexture?H.texSubImage3D(fn,Ee,wt,Ct,Zt,Ce,Be,ze,gt,Ze,_t.data):Y.isCompressedArrayTexture?H.compressedTexSubImage3D(fn,Ee,wt,Ct,Zt,Ce,Be,ze,gt,_t.data):H.texSubImage3D(fn,Ee,wt,Ct,Zt,Ce,Be,ze,gt,Ze,_t):L.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ee,wt,Ct,Ce,Be,gt,Ze,_t.data):L.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ee,wt,Ct,_t.width,_t.height,gt,_t.data):H.texSubImage2D(H.TEXTURE_2D,Ee,wt,Ct,Ce,Be,gt,Ze,_t);H.pixelStorei(H.UNPACK_ROW_LENGTH,It),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ln),H.pixelStorei(H.UNPACK_SKIP_PIXELS,$i),H.pixelStorei(H.UNPACK_SKIP_ROWS,vn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Tr),Ee===0&&Y.generateMipmaps&&H.generateMipmap(fn),Xe.unbindTexture()},this.copyTextureToTexture3D=function(L,Y,ne=null,ie=null,K=0){return gc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,Y,ne,ie,K)},this.initRenderTarget=function(L){Ke.get(L).__webglFramebuffer===void 0&&F.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?F.setTextureCube(L,0):L.isData3DTexture?F.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?F.setTexture2DArray(L,0):F.setTexture2D(L,0),Xe.unbindTexture()},this.resetState=function(){I=0,f=0,B=null,Xe.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ur}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ut._getUnpackColorSpace()}}const $b=()=>{const t=Nt.useRef(null),e=Nt.useRef(null),n=Nt.useRef(null),i=Nt.useRef(null),r=Nt.useRef(null);return Nt.useEffect(()=>{if(!t.current)return;const s=new nM;e.current=s;const a=new pi(75,window.innerWidth/window.innerHeight,.1,1e3);a.position.z=100,n.current=a;const l=new qb({alpha:!0,antialias:!0});l.setSize(window.innerWidth,window.innerHeight),l.setClearColor(0,0),t.current.appendChild(l.domElement),i.current=l;const u=new Er,d=2e3,m=new Float32Array(d*3),g=new Float32Array(d*3),v=new Float32Array(d),y=[new At("#1e3c72"),new At("#2a5298"),new At("#4caf50"),new At("#006400"),new At("#00bfae"),new At("#0288d1")];for(let I=0;I<d*3;I+=3){const f=(Math.random()-.5)*200,B=(Math.random()-.5)*200,D=(Math.random()-.5)*200;m[I]=f,m[I+1]=B,m[I+2]=D;const N=y[Math.floor(Math.random()*y.length)];g[I]=N.r,g[I+1]=N.g,g[I+2]=N.b,v[I/3]=Math.random()*1.5+.5}u.setAttribute("position",new ii(m,3)),u.setAttribute("color",new ii(g,3)),u.setAttribute("size",new ii(v,1));const M=new yr({vertexShader:`
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        
        void main() {
          // Create a circular shape instead of a square
          float r = 0.5;
          vec2 coords = gl_PointCoord - vec2(0.5);
          float len = length(coords);
          
          float alpha = 1.0 - smoothstep(r - 0.05, r, len);
          
          // Soft edge
          gl_FragColor = vec4(vColor, alpha * 0.6);
        }
      `,transparent:!0,depthWrite:!1,blending:Ed}),A=new oM(u,M);s.add(A),r.current=A;const E=()=>{!n.current||!i.current||(n.current.aspect=window.innerWidth/window.innerHeight,n.current.updateProjectionMatrix(),i.current.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",E);const h=new Ht,S=new Ht,w=I=>{S.x=I.clientX/window.innerWidth*2-1,S.y=-(I.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",w);let C=0;const k=()=>{if(C=requestAnimationFrame(k),!r.current||!i.current||!e.current||!n.current)return;h.x+=(S.x-h.x)*.05,h.y+=(S.y-h.y)*.05,r.current.rotation.x=h.y*.3,r.current.rotation.y=h.x*.3,r.current.rotation.z+=.001;const I=r.current.geometry.attributes.position.array;for(let f=0;f<I.length;f+=3)I[f+1]+=Math.sin(C*.001+I[f]*.01)*.01;r.current.geometry.attributes.position.needsUpdate=!0,i.current.render(e.current,n.current)};return k(),()=>{var I,f,B;window.removeEventListener("resize",E),window.removeEventListener("mousemove",w),cancelAnimationFrame(C),i.current&&t.current&&t.current.removeChild(i.current.domElement),r.current&&e.current&&e.current.remove(r.current),(I=r.current)!=null&&I.geometry&&r.current.geometry.dispose(),(f=r.current)!=null&&f.material&&r.current.material.dispose(),(B=i.current)==null||B.dispose()}},[]),x.jsx("div",{ref:t,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:0,pointerEvents:"none"}})},Yb=()=>{const[t,e]=Nt.useState(0);return Nt.useEffect(()=>{const n=()=>{const i=document.documentElement.scrollHeight-document.documentElement.clientHeight,s=window.scrollY/i;e(s)};return window.addEventListener("scroll",n),n(),()=>window.removeEventListener("scroll",n)},[]),x.jsx("div",{className:"scroll-progress",style:{transform:`scaleX(${t})`}})},Kb=()=>(Nt.useEffect(()=>{MS.init({duration:800,once:!1,easing:"ease-out-cubic"})},[]),x.jsxs(x.Fragment,{children:[x.jsx($b,{}),x.jsx(Yb,{}),x.jsx(TS,{}),x.jsxs("main",{children:[x.jsx(bS,{}),x.jsx(AS,{}),x.jsx(CS,{}),x.jsx(RS,{}),x.jsx(DS,{}),x.jsx(LS,{}),x.jsx(IS,{}),x.jsx(US,{}),x.jsx(FS,{})]}),x.jsx(kS,{}),x.jsx(OS,{})]})),Zb=document.getElementById("root"),Qb=W_(Zb);Qb.render(x.jsx(Kb,{}));
