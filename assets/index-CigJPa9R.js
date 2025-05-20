var z1=Object.defineProperty;var V1=(n,e,t)=>e in n?z1(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var vr=(n,e,t)=>V1(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function Bl(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ph={exports:{}},ll={},mh={exports:{}},yt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ay;function H1(){if(Ay)return yt;Ay=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;function g(O){return O===null||typeof O!="object"?null:(O=m&&O[m]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function S(O,Q,Me){this.props=O,this.context=Q,this.refs=M,this.updater=Me||y}S.prototype.isReactComponent={},S.prototype.setState=function(O,Q){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Q,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function _(){}_.prototype=S.prototype;function T(O,Q,Me){this.props=O,this.context=Q,this.refs=M,this.updater=Me||y}var w=T.prototype=new _;w.constructor=T,E(w,S.prototype),w.isPureReactComponent=!0;var b=Array.isArray,N=Object.prototype.hasOwnProperty,L={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function B(O,Q,Me){var te,de={},ve=null,pe=null;if(Q!=null)for(te in Q.ref!==void 0&&(pe=Q.ref),Q.key!==void 0&&(ve=""+Q.key),Q)N.call(Q,te)&&!I.hasOwnProperty(te)&&(de[te]=Q[te]);var xe=arguments.length-2;if(xe===1)de.children=Me;else if(1<xe){for(var Ce=Array(xe),Pe=0;Pe<xe;Pe++)Ce[Pe]=arguments[Pe+2];de.children=Ce}if(O&&O.defaultProps)for(te in xe=O.defaultProps,xe)de[te]===void 0&&(de[te]=xe[te]);return{$$typeof:n,type:O,key:ve,ref:pe,props:de,_owner:L.current}}function P(O,Q){return{$$typeof:n,type:O.type,key:Q,ref:O.ref,props:O.props,_owner:O._owner}}function C(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function k(O){var Q={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Me){return Q[Me]})}var X=/\/+/g;function j(O,Q){return typeof O=="object"&&O!==null&&O.key!=null?k(""+O.key):Q.toString(36)}function W(O,Q,Me,te,de){var ve=typeof O;(ve==="undefined"||ve==="boolean")&&(O=null);var pe=!1;if(O===null)pe=!0;else switch(ve){case"string":case"number":pe=!0;break;case"object":switch(O.$$typeof){case n:case e:pe=!0}}if(pe)return pe=O,de=de(pe),O=te===""?"."+j(pe,0):te,b(de)?(Me="",O!=null&&(Me=O.replace(X,"$&/")+"/"),W(de,Q,Me,"",function(Pe){return Pe})):de!=null&&(C(de)&&(de=P(de,Me+(!de.key||pe&&pe.key===de.key?"":(""+de.key).replace(X,"$&/")+"/")+O)),Q.push(de)),1;if(pe=0,te=te===""?".":te+":",b(O))for(var xe=0;xe<O.length;xe++){ve=O[xe];var Ce=te+j(ve,xe);pe+=W(ve,Q,Me,Ce,de)}else if(Ce=g(O),typeof Ce=="function")for(O=Ce.call(O),xe=0;!(ve=O.next()).done;)ve=ve.value,Ce=te+j(ve,xe++),pe+=W(ve,Q,Me,Ce,de);else if(ve==="object")throw Q=String(O),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return pe}function Y(O,Q,Me){if(O==null)return O;var te=[],de=0;return W(O,te,"","",function(ve){return Q.call(Me,ve,de++)}),te}function ee(O){if(O._status===-1){var Q=O._result;Q=Q(),Q.then(function(Me){(O._status===0||O._status===-1)&&(O._status=1,O._result=Me)},function(Me){(O._status===0||O._status===-1)&&(O._status=2,O._result=Me)}),O._status===-1&&(O._status=0,O._result=Q)}if(O._status===1)return O._result.default;throw O._result}var J={current:null},H={transition:null},ae={ReactCurrentDispatcher:J,ReactCurrentBatchConfig:H,ReactCurrentOwner:L};function Z(){throw Error("act(...) is not supported in production builds of React.")}return yt.Children={map:Y,forEach:function(O,Q,Me){Y(O,function(){Q.apply(this,arguments)},Me)},count:function(O){var Q=0;return Y(O,function(){Q++}),Q},toArray:function(O){return Y(O,function(Q){return Q})||[]},only:function(O){if(!C(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},yt.Component=S,yt.Fragment=t,yt.Profiler=s,yt.PureComponent=T,yt.StrictMode=i,yt.Suspense=f,yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,yt.act=Z,yt.cloneElement=function(O,Q,Me){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var te=E({},O.props),de=O.key,ve=O.ref,pe=O._owner;if(Q!=null){if(Q.ref!==void 0&&(ve=Q.ref,pe=L.current),Q.key!==void 0&&(de=""+Q.key),O.type&&O.type.defaultProps)var xe=O.type.defaultProps;for(Ce in Q)N.call(Q,Ce)&&!I.hasOwnProperty(Ce)&&(te[Ce]=Q[Ce]===void 0&&xe!==void 0?xe[Ce]:Q[Ce])}var Ce=arguments.length-2;if(Ce===1)te.children=Me;else if(1<Ce){xe=Array(Ce);for(var Pe=0;Pe<Ce;Pe++)xe[Pe]=arguments[Pe+2];te.children=xe}return{$$typeof:n,type:O.type,key:de,ref:ve,props:te,_owner:pe}},yt.createContext=function(O){return O={$$typeof:l,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:a,_context:O},O.Consumer=O},yt.createElement=B,yt.createFactory=function(O){var Q=B.bind(null,O);return Q.type=O,Q},yt.createRef=function(){return{current:null}},yt.forwardRef=function(O){return{$$typeof:u,render:O}},yt.isValidElement=C,yt.lazy=function(O){return{$$typeof:p,_payload:{_status:-1,_result:O},_init:ee}},yt.memo=function(O,Q){return{$$typeof:d,type:O,compare:Q===void 0?null:Q}},yt.startTransition=function(O){var Q=H.transition;H.transition={};try{O()}finally{H.transition=Q}},yt.unstable_act=Z,yt.useCallback=function(O,Q){return J.current.useCallback(O,Q)},yt.useContext=function(O){return J.current.useContext(O)},yt.useDebugValue=function(){},yt.useDeferredValue=function(O){return J.current.useDeferredValue(O)},yt.useEffect=function(O,Q){return J.current.useEffect(O,Q)},yt.useId=function(){return J.current.useId()},yt.useImperativeHandle=function(O,Q,Me){return J.current.useImperativeHandle(O,Q,Me)},yt.useInsertionEffect=function(O,Q){return J.current.useInsertionEffect(O,Q)},yt.useLayoutEffect=function(O,Q){return J.current.useLayoutEffect(O,Q)},yt.useMemo=function(O,Q){return J.current.useMemo(O,Q)},yt.useReducer=function(O,Q,Me){return J.current.useReducer(O,Q,Me)},yt.useRef=function(O){return J.current.useRef(O)},yt.useState=function(O){return J.current.useState(O)},yt.useSyncExternalStore=function(O,Q,Me){return J.current.useSyncExternalStore(O,Q,Me)},yt.useTransition=function(){return J.current.useTransition()},yt.version="18.3.1",yt}var Cy;function Jm(){return Cy||(Cy=1,mh.exports=H1()),mh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ry;function G1(){if(Ry)return ll;Ry=1;var n=Jm(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(u,f,d){var p,m={},g=null,y=null;d!==void 0&&(g=""+d),f.key!==void 0&&(g=""+f.key),f.ref!==void 0&&(y=f.ref);for(p in f)i.call(f,p)&&!a.hasOwnProperty(p)&&(m[p]=f[p]);if(u&&u.defaultProps)for(p in f=u.defaultProps,f)m[p]===void 0&&(m[p]=f[p]);return{$$typeof:e,type:u,key:g,ref:y,props:m,_owner:s.current}}return ll.Fragment=t,ll.jsx=l,ll.jsxs=l,ll}var Py;function W1(){return Py||(Py=1,ph.exports=G1()),ph.exports}var G=W1(),ou={},gh={exports:{}},qn={},vh={exports:{}},yh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dy;function j1(){return Dy||(Dy=1,function(n){function e(H,ae){var Z=H.length;H.push(ae);e:for(;0<Z;){var O=Z-1>>>1,Q=H[O];if(0<s(Q,ae))H[O]=ae,H[Z]=Q,Z=O;else break e}}function t(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var ae=H[0],Z=H.pop();if(Z!==ae){H[0]=Z;e:for(var O=0,Q=H.length,Me=Q>>>1;O<Me;){var te=2*(O+1)-1,de=H[te],ve=te+1,pe=H[ve];if(0>s(de,Z))ve<Q&&0>s(pe,de)?(H[O]=pe,H[ve]=Z,O=ve):(H[O]=de,H[te]=Z,O=te);else if(ve<Q&&0>s(pe,Z))H[O]=pe,H[ve]=Z,O=ve;else break e}}return ae}function s(H,ae){var Z=H.sortIndex-ae.sortIndex;return Z!==0?Z:H.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var l=Date,u=l.now();n.unstable_now=function(){return l.now()-u}}var f=[],d=[],p=1,m=null,g=3,y=!1,E=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(H){for(var ae=t(d);ae!==null;){if(ae.callback===null)i(d);else if(ae.startTime<=H)i(d),ae.sortIndex=ae.expirationTime,e(f,ae);else break;ae=t(d)}}function b(H){if(M=!1,w(H),!E)if(t(f)!==null)E=!0,ee(N);else{var ae=t(d);ae!==null&&J(b,ae.startTime-H)}}function N(H,ae){E=!1,M&&(M=!1,_(B),B=-1),y=!0;var Z=g;try{for(w(ae),m=t(f);m!==null&&(!(m.expirationTime>ae)||H&&!k());){var O=m.callback;if(typeof O=="function"){m.callback=null,g=m.priorityLevel;var Q=O(m.expirationTime<=ae);ae=n.unstable_now(),typeof Q=="function"?m.callback=Q:m===t(f)&&i(f),w(ae)}else i(f);m=t(f)}if(m!==null)var Me=!0;else{var te=t(d);te!==null&&J(b,te.startTime-ae),Me=!1}return Me}finally{m=null,g=Z,y=!1}}var L=!1,I=null,B=-1,P=5,C=-1;function k(){return!(n.unstable_now()-C<P)}function X(){if(I!==null){var H=n.unstable_now();C=H;var ae=!0;try{ae=I(!0,H)}finally{ae?j():(L=!1,I=null)}}else L=!1}var j;if(typeof T=="function")j=function(){T(X)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,Y=W.port2;W.port1.onmessage=X,j=function(){Y.postMessage(null)}}else j=function(){S(X,0)};function ee(H){I=H,L||(L=!0,j())}function J(H,ae){B=S(function(){H(n.unstable_now())},ae)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(H){H.callback=null},n.unstable_continueExecution=function(){E||y||(E=!0,ee(N))},n.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<H?Math.floor(1e3/H):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(H){switch(g){case 1:case 2:case 3:var ae=3;break;default:ae=g}var Z=g;g=ae;try{return H()}finally{g=Z}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(H,ae){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var Z=g;g=H;try{return ae()}finally{g=Z}},n.unstable_scheduleCallback=function(H,ae,Z){var O=n.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?O+Z:O):Z=O,H){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=Z+Q,H={id:p++,callback:ae,priorityLevel:H,startTime:Z,expirationTime:Q,sortIndex:-1},Z>O?(H.sortIndex=Z,e(d,H),t(f)===null&&H===t(d)&&(M?(_(B),B=-1):M=!0,J(b,Z-O))):(H.sortIndex=Q,e(f,H),E||y||(E=!0,ee(N))),H},n.unstable_shouldYield=k,n.unstable_wrapCallback=function(H){var ae=g;return function(){var Z=g;g=ae;try{return H.apply(this,arguments)}finally{g=Z}}}}(yh)),yh}var Ly;function X1(){return Ly||(Ly=1,vh.exports=j1()),vh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iy;function $1(){if(Iy)return qn;Iy=1;var n=Jm(),e=X1();function t(r){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+r,c=1;c<arguments.length;c++)o+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+r+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(r,o){l(r,o),l(r+"Capture",o)}function l(r,o){for(s[r]=o,r=0;r<o.length;r++)i.add(o[r])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function g(r){return f.call(m,r)?!0:f.call(p,r)?!1:d.test(r)?m[r]=!0:(p[r]=!0,!1)}function y(r,o,c,h){if(c!==null&&c.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return h?!1:c!==null?!c.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function E(r,o,c,h){if(o===null||typeof o>"u"||y(r,o,c,h))return!0;if(h)return!1;if(c!==null)switch(c.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function M(r,o,c,h,v,x,A){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=h,this.attributeNamespace=v,this.mustUseProperty=c,this.propertyName=r,this.type=o,this.sanitizeURL=x,this.removeEmptyString=A}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){S[r]=new M(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var o=r[0];S[o]=new M(o,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){S[r]=new M(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){S[r]=new M(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){S[r]=new M(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){S[r]=new M(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){S[r]=new M(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){S[r]=new M(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){S[r]=new M(r,5,!1,r.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function T(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var o=r.replace(_,T);S[o]=new M(o,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var o=r.replace(_,T);S[o]=new M(o,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var o=r.replace(_,T);S[o]=new M(o,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){S[r]=new M(r,1,!1,r.toLowerCase(),null,!1,!1)}),S.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){S[r]=new M(r,1,!1,r.toLowerCase(),null,!0,!0)});function w(r,o,c,h){var v=S.hasOwnProperty(o)?S[o]:null;(v!==null?v.type!==0:h||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(E(o,c,v,h)&&(c=null),h||v===null?g(o)&&(c===null?r.removeAttribute(o):r.setAttribute(o,""+c)):v.mustUseProperty?r[v.propertyName]=c===null?v.type===3?!1:"":c:(o=v.attributeName,h=v.attributeNamespace,c===null?r.removeAttribute(o):(v=v.type,c=v===3||v===4&&c===!0?"":""+c,h?r.setAttributeNS(h,o,c):r.setAttribute(o,c))))}var b=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),L=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),k=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),H=Symbol.iterator;function ae(r){return r===null||typeof r!="object"?null:(r=H&&r[H]||r["@@iterator"],typeof r=="function"?r:null)}var Z=Object.assign,O;function Q(r){if(O===void 0)try{throw Error()}catch(c){var o=c.stack.trim().match(/\n( *(at )?)/);O=o&&o[1]||""}return`
`+O+r}var Me=!1;function te(r,o){if(!r||Me)return"";Me=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(ce){var h=ce}Reflect.construct(r,[],o)}else{try{o.call()}catch(ce){h=ce}r.call(o.prototype)}else{try{throw Error()}catch(ce){h=ce}r()}}catch(ce){if(ce&&h&&typeof ce.stack=="string"){for(var v=ce.stack.split(`
`),x=h.stack.split(`
`),A=v.length-1,z=x.length-1;1<=A&&0<=z&&v[A]!==x[z];)z--;for(;1<=A&&0<=z;A--,z--)if(v[A]!==x[z]){if(A!==1||z!==1)do if(A--,z--,0>z||v[A]!==x[z]){var $=`
`+v[A].replace(" at new "," at ");return r.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",r.displayName)),$}while(1<=A&&0<=z);break}}}finally{Me=!1,Error.prepareStackTrace=c}return(r=r?r.displayName||r.name:"")?Q(r):""}function de(r){switch(r.tag){case 5:return Q(r.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return r=te(r.type,!1),r;case 11:return r=te(r.type.render,!1),r;case 1:return r=te(r.type,!0),r;default:return""}}function ve(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case I:return"Fragment";case L:return"Portal";case P:return"Profiler";case B:return"StrictMode";case j:return"Suspense";case W:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case k:return(r.displayName||"Context")+".Consumer";case C:return(r._context.displayName||"Context")+".Provider";case X:var o=r.render;return r=r.displayName,r||(r=o.displayName||o.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Y:return o=r.displayName||null,o!==null?o:ve(r.type)||"Memo";case ee:o=r._payload,r=r._init;try{return ve(r(o))}catch{}}return null}function pe(r){var o=r.type;switch(r.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=o.render,r=r.displayName||r.name||"",o.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ve(o);case 8:return o===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function xe(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Ce(r){var o=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Pe(r){var o=Ce(r)?"checked":"value",c=Object.getOwnPropertyDescriptor(r.constructor.prototype,o),h=""+r[o];if(!r.hasOwnProperty(o)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var v=c.get,x=c.set;return Object.defineProperty(r,o,{configurable:!0,get:function(){return v.call(this)},set:function(A){h=""+A,x.call(this,A)}}),Object.defineProperty(r,o,{enumerable:c.enumerable}),{getValue:function(){return h},setValue:function(A){h=""+A},stopTracking:function(){r._valueTracker=null,delete r[o]}}}}function dt(r){r._valueTracker||(r._valueTracker=Pe(r))}function rt(r){if(!r)return!1;var o=r._valueTracker;if(!o)return!0;var c=o.getValue(),h="";return r&&(h=Ce(r)?r.checked?"true":"false":r.value),r=h,r!==c?(o.setValue(r),!0):!1}function Ve(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function V(r,o){var c=o.checked;return Z({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:c??r._wrapperState.initialChecked})}function xt(r,o){var c=o.defaultValue==null?"":o.defaultValue,h=o.checked!=null?o.checked:o.defaultChecked;c=xe(o.value!=null?o.value:c),r._wrapperState={initialChecked:h,initialValue:c,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function st(r,o){o=o.checked,o!=null&&w(r,"checked",o,!1)}function ft(r,o){st(r,o);var c=xe(o.value),h=o.type;if(c!=null)h==="number"?(c===0&&r.value===""||r.value!=c)&&(r.value=""+c):r.value!==""+c&&(r.value=""+c);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}o.hasOwnProperty("value")?Rt(r,o.type,c):o.hasOwnProperty("defaultValue")&&Rt(r,o.type,xe(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(r.defaultChecked=!!o.defaultChecked)}function Ke(r,o,c){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var h=o.type;if(!(h!=="submit"&&h!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+r._wrapperState.initialValue,c||o===r.value||(r.value=o),r.defaultValue=o}c=r.name,c!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,c!==""&&(r.name=c)}function Rt(r,o,c){(o!=="number"||Ve(r.ownerDocument)!==r)&&(c==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+c&&(r.defaultValue=""+c))}var $e=Array.isArray;function U(r,o,c,h){if(r=r.options,o){o={};for(var v=0;v<c.length;v++)o["$"+c[v]]=!0;for(c=0;c<r.length;c++)v=o.hasOwnProperty("$"+r[c].value),r[c].selected!==v&&(r[c].selected=v),v&&h&&(r[c].defaultSelected=!0)}else{for(c=""+xe(c),o=null,v=0;v<r.length;v++){if(r[v].value===c){r[v].selected=!0,h&&(r[v].defaultSelected=!0);return}o!==null||r[v].disabled||(o=r[v])}o!==null&&(o.selected=!0)}}function R(r,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return Z({},o,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function re(r,o){var c=o.value;if(c==null){if(c=o.children,o=o.defaultValue,c!=null){if(o!=null)throw Error(t(92));if($e(c)){if(1<c.length)throw Error(t(93));c=c[0]}o=c}o==null&&(o=""),c=o}r._wrapperState={initialValue:xe(c)}}function ge(r,o){var c=xe(o.value),h=xe(o.defaultValue);c!=null&&(c=""+c,c!==r.value&&(r.value=c),o.defaultValue==null&&r.defaultValue!==c&&(r.defaultValue=c)),h!=null&&(r.defaultValue=""+h)}function ye(r){var o=r.textContent;o===r._wrapperState.initialValue&&o!==""&&o!==null&&(r.value=o)}function me(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function He(r,o){return r==null||r==="http://www.w3.org/1999/xhtml"?me(o):r==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Re,Fe=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,c,h,v){MSApp.execUnsafeLocalFunction(function(){return r(o,c,h,v)})}:r}(function(r,o){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=o;else{for(Re=Re||document.createElement("div"),Re.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Re.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;o.firstChild;)r.appendChild(o.firstChild)}});function it(r,o){if(o){var c=r.firstChild;if(c&&c===r.lastChild&&c.nodeType===3){c.nodeValue=o;return}}r.textContent=o}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(r){Oe.forEach(function(o){o=o+r.charAt(0).toUpperCase()+r.substring(1),we[o]=we[r]})});function Qe(r,o,c){return o==null||typeof o=="boolean"||o===""?"":c||typeof o!="number"||o===0||we.hasOwnProperty(r)&&we[r]?(""+o).trim():o+"px"}function Je(r,o){r=r.style;for(var c in o)if(o.hasOwnProperty(c)){var h=c.indexOf("--")===0,v=Qe(c,o[c],h);c==="float"&&(c="cssFloat"),h?r.setProperty(c,v):r[c]=v}}var Ge=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vt(r,o){if(o){if(Ge[r]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function ct(r,o){if(r.indexOf("-")===-1)return typeof o.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var It=null;function K(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var De=null,he=null,_e=null;function Ue(r){if(r=$a(r)){if(typeof De!="function")throw Error(t(280));var o=r.stateNode;o&&(o=Sc(o),De(r.stateNode,r.type,o))}}function Ne(r){he?_e?_e.push(r):_e=[r]:he=r}function ut(){if(he){var r=he,o=_e;if(_e=he=null,Ue(r),o)for(r=0;r<o.length;r++)Ue(o[r])}}function zt(r,o){return r(o)}function ln(){}var bt=!1;function Gn(r,o,c){if(bt)return r(o,c);bt=!0;try{return zt(r,o,c)}finally{bt=!1,(he!==null||_e!==null)&&(ln(),ut())}}function On(r,o){var c=r.stateNode;if(c===null)return null;var h=Sc(c);if(h===null)return null;c=h[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(c&&typeof c!="function")throw Error(t(231,o,typeof c));return c}var ho=!1;if(u)try{var zr={};Object.defineProperty(zr,"passive",{get:function(){ho=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{ho=!1}function or(r,o,c,h,v,x,A,z,$){var ce=Array.prototype.slice.call(arguments,3);try{o.apply(c,ce)}catch(Ee){this.onError(Ee)}}var ar=!1,ws=null,Ts=!1,Vr=null,Jl={onError:function(r){ar=!0,ws=r}};function po(r,o,c,h,v,x,A,z,$){ar=!1,ws=null,or.apply(Jl,arguments)}function ec(r,o,c,h,v,x,A,z,$){if(po.apply(this,arguments),ar){if(ar){var ce=ws;ar=!1,ws=null}else throw Error(t(198));Ts||(Ts=!0,Vr=ce)}}function Xi(r){var o=r,c=r;if(r.alternate)for(;o.return;)o=o.return;else{r=o;do o=r,(o.flags&4098)!==0&&(c=o.return),r=o.return;while(r)}return o.tag===3?c:null}function tc(r){if(r.tag===13){var o=r.memoizedState;if(o===null&&(r=r.alternate,r!==null&&(o=r.memoizedState)),o!==null)return o.dehydrated}return null}function nc(r){if(Xi(r)!==r)throw Error(t(188))}function Of(r){var o=r.alternate;if(!o){if(o=Xi(r),o===null)throw Error(t(188));return o!==r?null:r}for(var c=r,h=o;;){var v=c.return;if(v===null)break;var x=v.alternate;if(x===null){if(h=v.return,h!==null){c=h;continue}break}if(v.child===x.child){for(x=v.child;x;){if(x===c)return nc(v),r;if(x===h)return nc(v),o;x=x.sibling}throw Error(t(188))}if(c.return!==h.return)c=v,h=x;else{for(var A=!1,z=v.child;z;){if(z===c){A=!0,c=v,h=x;break}if(z===h){A=!0,h=v,c=x;break}z=z.sibling}if(!A){for(z=x.child;z;){if(z===c){A=!0,c=x,h=v;break}if(z===h){A=!0,h=x,c=v;break}z=z.sibling}if(!A)throw Error(t(189))}}if(c.alternate!==h)throw Error(t(190))}if(c.tag!==3)throw Error(t(188));return c.stateNode.current===c?r:o}function ic(r){return r=Of(r),r!==null?rc(r):null}function rc(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var o=rc(r);if(o!==null)return o;r=r.sibling}return null}var sc=e.unstable_scheduleCallback,F=e.unstable_cancelCallback,ne=e.unstable_shouldYield,ue=e.unstable_requestPaint,oe=e.unstable_now,ie=e.unstable_getCurrentPriorityLevel,be=e.unstable_ImmediatePriority,Le=e.unstable_UserBlockingPriority,ke=e.unstable_NormalPriority,We=e.unstable_LowPriority,ot=e.unstable_IdlePriority,nt=null,Xe=null;function Et(r){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(nt,r,void 0,(r.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:Tt,Kt=Math.log,Wt=Math.LN2;function Tt(r){return r>>>=0,r===0?32:31-(Kt(r)/Wt|0)|0}var Ze=64,Zt=4194304;function St(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Tn(r,o){var c=r.pendingLanes;if(c===0)return 0;var h=0,v=r.suspendedLanes,x=r.pingedLanes,A=c&268435455;if(A!==0){var z=A&~v;z!==0?h=St(z):(x&=A,x!==0&&(h=St(x)))}else A=c&~v,A!==0?h=St(A):x!==0&&(h=St(x));if(h===0)return 0;if(o!==0&&o!==h&&(o&v)===0&&(v=h&-h,x=o&-o,v>=x||v===16&&(x&4194240)!==0))return o;if((h&4)!==0&&(h|=c&16),o=r.entangledLanes,o!==0)for(r=r.entanglements,o&=h;0<o;)c=31-ht(o),v=1<<c,h|=r[c],o&=~v;return h}function Hr(r,o){switch(r){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kn(r,o){for(var c=r.suspendedLanes,h=r.pingedLanes,v=r.expirationTimes,x=r.pendingLanes;0<x;){var A=31-ht(x),z=1<<A,$=v[A];$===-1?((z&c)===0||(z&h)!==0)&&(v[A]=Hr(z,o)):$<=o&&(r.expiredLanes|=z),x&=~z}}function lr(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Ot(){var r=Ze;return Ze<<=1,(Ze&4194240)===0&&(Ze=64),r}function bn(r){for(var o=[],c=0;31>c;c++)o.push(r);return o}function hn(r,o,c){r.pendingLanes|=o,o!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,o=31-ht(o),r[o]=c}function Sn(r,o){var c=r.pendingLanes&~o;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=o,r.mutableReadLanes&=o,r.entangledLanes&=o,o=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<c;){var v=31-ht(c),x=1<<v;o[v]=0,h[v]=-1,r[v]=-1,c&=~x}}function pn(r,o){var c=r.entangledLanes|=o;for(r=r.entanglements;c;){var h=31-ht(c),v=1<<h;v&o|r[h]&o&&(r[h]|=o),c&=~v}}var At=0;function $i(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var ov,kf,av,lv,cv,Bf=!1,oc=[],Gr=null,Wr=null,jr=null,Da=new Map,La=new Map,Xr=[],lT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uv(r,o){switch(r){case"focusin":case"focusout":Gr=null;break;case"dragenter":case"dragleave":Wr=null;break;case"mouseover":case"mouseout":jr=null;break;case"pointerover":case"pointerout":Da.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":La.delete(o.pointerId)}}function Ia(r,o,c,h,v,x){return r===null||r.nativeEvent!==x?(r={blockedOn:o,domEventName:c,eventSystemFlags:h,nativeEvent:x,targetContainers:[v]},o!==null&&(o=$a(o),o!==null&&kf(o)),r):(r.eventSystemFlags|=h,o=r.targetContainers,v!==null&&o.indexOf(v)===-1&&o.push(v),r)}function cT(r,o,c,h,v){switch(o){case"focusin":return Gr=Ia(Gr,r,o,c,h,v),!0;case"dragenter":return Wr=Ia(Wr,r,o,c,h,v),!0;case"mouseover":return jr=Ia(jr,r,o,c,h,v),!0;case"pointerover":var x=v.pointerId;return Da.set(x,Ia(Da.get(x)||null,r,o,c,h,v)),!0;case"gotpointercapture":return x=v.pointerId,La.set(x,Ia(La.get(x)||null,r,o,c,h,v)),!0}return!1}function fv(r){var o=bs(r.target);if(o!==null){var c=Xi(o);if(c!==null){if(o=c.tag,o===13){if(o=tc(c),o!==null){r.blockedOn=o,cv(r.priority,function(){av(c)});return}}else if(o===3&&c.stateNode.current.memoizedState.isDehydrated){r.blockedOn=c.tag===3?c.stateNode.containerInfo:null;return}}}r.blockedOn=null}function ac(r){if(r.blockedOn!==null)return!1;for(var o=r.targetContainers;0<o.length;){var c=Vf(r.domEventName,r.eventSystemFlags,o[0],r.nativeEvent);if(c===null){c=r.nativeEvent;var h=new c.constructor(c.type,c);It=h,c.target.dispatchEvent(h),It=null}else return o=$a(c),o!==null&&kf(o),r.blockedOn=c,!1;o.shift()}return!0}function dv(r,o,c){ac(r)&&c.delete(o)}function uT(){Bf=!1,Gr!==null&&ac(Gr)&&(Gr=null),Wr!==null&&ac(Wr)&&(Wr=null),jr!==null&&ac(jr)&&(jr=null),Da.forEach(dv),La.forEach(dv)}function Na(r,o){r.blockedOn===o&&(r.blockedOn=null,Bf||(Bf=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,uT)))}function Ua(r){function o(v){return Na(v,r)}if(0<oc.length){Na(oc[0],r);for(var c=1;c<oc.length;c++){var h=oc[c];h.blockedOn===r&&(h.blockedOn=null)}}for(Gr!==null&&Na(Gr,r),Wr!==null&&Na(Wr,r),jr!==null&&Na(jr,r),Da.forEach(o),La.forEach(o),c=0;c<Xr.length;c++)h=Xr[c],h.blockedOn===r&&(h.blockedOn=null);for(;0<Xr.length&&(c=Xr[0],c.blockedOn===null);)fv(c),c.blockedOn===null&&Xr.shift()}var mo=b.ReactCurrentBatchConfig,lc=!0;function fT(r,o,c,h){var v=At,x=mo.transition;mo.transition=null;try{At=1,zf(r,o,c,h)}finally{At=v,mo.transition=x}}function dT(r,o,c,h){var v=At,x=mo.transition;mo.transition=null;try{At=4,zf(r,o,c,h)}finally{At=v,mo.transition=x}}function zf(r,o,c,h){if(lc){var v=Vf(r,o,c,h);if(v===null)rd(r,o,h,cc,c),uv(r,h);else if(cT(v,r,o,c,h))h.stopPropagation();else if(uv(r,h),o&4&&-1<lT.indexOf(r)){for(;v!==null;){var x=$a(v);if(x!==null&&ov(x),x=Vf(r,o,c,h),x===null&&rd(r,o,h,cc,c),x===v)break;v=x}v!==null&&h.stopPropagation()}else rd(r,o,h,null,c)}}var cc=null;function Vf(r,o,c,h){if(cc=null,r=K(h),r=bs(r),r!==null)if(o=Xi(r),o===null)r=null;else if(c=o.tag,c===13){if(r=tc(o),r!==null)return r;r=null}else if(c===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;r=null}else o!==r&&(r=null);return cc=r,null}function hv(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ie()){case be:return 1;case Le:return 4;case ke:case We:return 16;case ot:return 536870912;default:return 16}default:return 16}}var $r=null,Hf=null,uc=null;function pv(){if(uc)return uc;var r,o=Hf,c=o.length,h,v="value"in $r?$r.value:$r.textContent,x=v.length;for(r=0;r<c&&o[r]===v[r];r++);var A=c-r;for(h=1;h<=A&&o[c-h]===v[x-h];h++);return uc=v.slice(r,1<h?1-h:void 0)}function fc(r){var o=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&o===13&&(r=13)):r=o,r===10&&(r=13),32<=r||r===13?r:0}function dc(){return!0}function mv(){return!1}function ri(r){function o(c,h,v,x,A){this._reactName=c,this._targetInst=v,this.type=h,this.nativeEvent=x,this.target=A,this.currentTarget=null;for(var z in r)r.hasOwnProperty(z)&&(c=r[z],this[z]=c?c(x):x[z]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?dc:mv,this.isPropagationStopped=mv,this}return Z(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=dc)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=dc)},persist:function(){},isPersistent:dc}),o}var go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gf=ri(go),Fa=Z({},go,{view:0,detail:0}),hT=ri(Fa),Wf,jf,Oa,hc=Z({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$f,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Oa&&(Oa&&r.type==="mousemove"?(Wf=r.screenX-Oa.screenX,jf=r.screenY-Oa.screenY):jf=Wf=0,Oa=r),Wf)},movementY:function(r){return"movementY"in r?r.movementY:jf}}),gv=ri(hc),pT=Z({},hc,{dataTransfer:0}),mT=ri(pT),gT=Z({},Fa,{relatedTarget:0}),Xf=ri(gT),vT=Z({},go,{animationName:0,elapsedTime:0,pseudoElement:0}),yT=ri(vT),_T=Z({},go,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),xT=ri(_T),ST=Z({},go,{data:0}),vv=ri(ST),ET={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},MT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function TT(r){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(r):(r=wT[r])?!!o[r]:!1}function $f(){return TT}var bT=Z({},Fa,{key:function(r){if(r.key){var o=ET[r.key]||r.key;if(o!=="Unidentified")return o}return r.type==="keypress"?(r=fc(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?MT[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$f,charCode:function(r){return r.type==="keypress"?fc(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?fc(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),AT=ri(bT),CT=Z({},hc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yv=ri(CT),RT=Z({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$f}),PT=ri(RT),DT=Z({},go,{propertyName:0,elapsedTime:0,pseudoElement:0}),LT=ri(DT),IT=Z({},hc,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),NT=ri(IT),UT=[9,13,27,32],Yf=u&&"CompositionEvent"in window,ka=null;u&&"documentMode"in document&&(ka=document.documentMode);var FT=u&&"TextEvent"in window&&!ka,_v=u&&(!Yf||ka&&8<ka&&11>=ka),xv=" ",Sv=!1;function Ev(r,o){switch(r){case"keyup":return UT.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mv(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var vo=!1;function OT(r,o){switch(r){case"compositionend":return Mv(o);case"keypress":return o.which!==32?null:(Sv=!0,xv);case"textInput":return r=o.data,r===xv&&Sv?null:r;default:return null}}function kT(r,o){if(vo)return r==="compositionend"||!Yf&&Ev(r,o)?(r=pv(),uc=Hf=$r=null,vo=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return _v&&o.locale!=="ko"?null:o.data;default:return null}}var BT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wv(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o==="input"?!!BT[r.type]:o==="textarea"}function Tv(r,o,c,h){Ne(h),o=yc(o,"onChange"),0<o.length&&(c=new Gf("onChange","change",null,c,h),r.push({event:c,listeners:o}))}var Ba=null,za=null;function zT(r){Gv(r,0)}function pc(r){var o=Eo(r);if(rt(o))return r}function VT(r,o){if(r==="change")return o}var bv=!1;if(u){var qf;if(u){var Kf="oninput"in document;if(!Kf){var Av=document.createElement("div");Av.setAttribute("oninput","return;"),Kf=typeof Av.oninput=="function"}qf=Kf}else qf=!1;bv=qf&&(!document.documentMode||9<document.documentMode)}function Cv(){Ba&&(Ba.detachEvent("onpropertychange",Rv),za=Ba=null)}function Rv(r){if(r.propertyName==="value"&&pc(za)){var o=[];Tv(o,za,r,K(r)),Gn(zT,o)}}function HT(r,o,c){r==="focusin"?(Cv(),Ba=o,za=c,Ba.attachEvent("onpropertychange",Rv)):r==="focusout"&&Cv()}function GT(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return pc(za)}function WT(r,o){if(r==="click")return pc(o)}function jT(r,o){if(r==="input"||r==="change")return pc(o)}function XT(r,o){return r===o&&(r!==0||1/r===1/o)||r!==r&&o!==o}var Ci=typeof Object.is=="function"?Object.is:XT;function Va(r,o){if(Ci(r,o))return!0;if(typeof r!="object"||r===null||typeof o!="object"||o===null)return!1;var c=Object.keys(r),h=Object.keys(o);if(c.length!==h.length)return!1;for(h=0;h<c.length;h++){var v=c[h];if(!f.call(o,v)||!Ci(r[v],o[v]))return!1}return!0}function Pv(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Dv(r,o){var c=Pv(r);r=0;for(var h;c;){if(c.nodeType===3){if(h=r+c.textContent.length,r<=o&&h>=o)return{node:c,offset:o-r};r=h}e:{for(;c;){if(c.nextSibling){c=c.nextSibling;break e}c=c.parentNode}c=void 0}c=Pv(c)}}function Lv(r,o){return r&&o?r===o?!0:r&&r.nodeType===3?!1:o&&o.nodeType===3?Lv(r,o.parentNode):"contains"in r?r.contains(o):r.compareDocumentPosition?!!(r.compareDocumentPosition(o)&16):!1:!1}function Iv(){for(var r=window,o=Ve();o instanceof r.HTMLIFrameElement;){try{var c=typeof o.contentWindow.location.href=="string"}catch{c=!1}if(c)r=o.contentWindow;else break;o=Ve(r.document)}return o}function Zf(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o&&(o==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||o==="textarea"||r.contentEditable==="true")}function $T(r){var o=Iv(),c=r.focusedElem,h=r.selectionRange;if(o!==c&&c&&c.ownerDocument&&Lv(c.ownerDocument.documentElement,c)){if(h!==null&&Zf(c)){if(o=h.start,r=h.end,r===void 0&&(r=o),"selectionStart"in c)c.selectionStart=o,c.selectionEnd=Math.min(r,c.value.length);else if(r=(o=c.ownerDocument||document)&&o.defaultView||window,r.getSelection){r=r.getSelection();var v=c.textContent.length,x=Math.min(h.start,v);h=h.end===void 0?x:Math.min(h.end,v),!r.extend&&x>h&&(v=h,h=x,x=v),v=Dv(c,x);var A=Dv(c,h);v&&A&&(r.rangeCount!==1||r.anchorNode!==v.node||r.anchorOffset!==v.offset||r.focusNode!==A.node||r.focusOffset!==A.offset)&&(o=o.createRange(),o.setStart(v.node,v.offset),r.removeAllRanges(),x>h?(r.addRange(o),r.extend(A.node,A.offset)):(o.setEnd(A.node,A.offset),r.addRange(o)))}}for(o=[],r=c;r=r.parentNode;)r.nodeType===1&&o.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<o.length;c++)r=o[c],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var YT=u&&"documentMode"in document&&11>=document.documentMode,yo=null,Qf=null,Ha=null,Jf=!1;function Nv(r,o,c){var h=c.window===c?c.document:c.nodeType===9?c:c.ownerDocument;Jf||yo==null||yo!==Ve(h)||(h=yo,"selectionStart"in h&&Zf(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Ha&&Va(Ha,h)||(Ha=h,h=yc(Qf,"onSelect"),0<h.length&&(o=new Gf("onSelect","select",null,o,c),r.push({event:o,listeners:h}),o.target=yo)))}function mc(r,o){var c={};return c[r.toLowerCase()]=o.toLowerCase(),c["Webkit"+r]="webkit"+o,c["Moz"+r]="moz"+o,c}var _o={animationend:mc("Animation","AnimationEnd"),animationiteration:mc("Animation","AnimationIteration"),animationstart:mc("Animation","AnimationStart"),transitionend:mc("Transition","TransitionEnd")},ed={},Uv={};u&&(Uv=document.createElement("div").style,"AnimationEvent"in window||(delete _o.animationend.animation,delete _o.animationiteration.animation,delete _o.animationstart.animation),"TransitionEvent"in window||delete _o.transitionend.transition);function gc(r){if(ed[r])return ed[r];if(!_o[r])return r;var o=_o[r],c;for(c in o)if(o.hasOwnProperty(c)&&c in Uv)return ed[r]=o[c];return r}var Fv=gc("animationend"),Ov=gc("animationiteration"),kv=gc("animationstart"),Bv=gc("transitionend"),zv=new Map,Vv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(r,o){zv.set(r,o),a(o,[r])}for(var td=0;td<Vv.length;td++){var nd=Vv[td],qT=nd.toLowerCase(),KT=nd[0].toUpperCase()+nd.slice(1);Yr(qT,"on"+KT)}Yr(Fv,"onAnimationEnd"),Yr(Ov,"onAnimationIteration"),Yr(kv,"onAnimationStart"),Yr("dblclick","onDoubleClick"),Yr("focusin","onFocus"),Yr("focusout","onBlur"),Yr(Bv,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ga));function Hv(r,o,c){var h=r.type||"unknown-event";r.currentTarget=c,ec(h,o,void 0,r),r.currentTarget=null}function Gv(r,o){o=(o&4)!==0;for(var c=0;c<r.length;c++){var h=r[c],v=h.event;h=h.listeners;e:{var x=void 0;if(o)for(var A=h.length-1;0<=A;A--){var z=h[A],$=z.instance,ce=z.currentTarget;if(z=z.listener,$!==x&&v.isPropagationStopped())break e;Hv(v,z,ce),x=$}else for(A=0;A<h.length;A++){if(z=h[A],$=z.instance,ce=z.currentTarget,z=z.listener,$!==x&&v.isPropagationStopped())break e;Hv(v,z,ce),x=$}}}if(Ts)throw r=Vr,Ts=!1,Vr=null,r}function Vt(r,o){var c=o[ud];c===void 0&&(c=o[ud]=new Set);var h=r+"__bubble";c.has(h)||(Wv(o,r,2,!1),c.add(h))}function id(r,o,c){var h=0;o&&(h|=4),Wv(c,r,h,o)}var vc="_reactListening"+Math.random().toString(36).slice(2);function Wa(r){if(!r[vc]){r[vc]=!0,i.forEach(function(c){c!=="selectionchange"&&(ZT.has(c)||id(c,!1,r),id(c,!0,r))});var o=r.nodeType===9?r:r.ownerDocument;o===null||o[vc]||(o[vc]=!0,id("selectionchange",!1,o))}}function Wv(r,o,c,h){switch(hv(o)){case 1:var v=fT;break;case 4:v=dT;break;default:v=zf}c=v.bind(null,o,c,r),v=void 0,!ho||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(v=!0),h?v!==void 0?r.addEventListener(o,c,{capture:!0,passive:v}):r.addEventListener(o,c,!0):v!==void 0?r.addEventListener(o,c,{passive:v}):r.addEventListener(o,c,!1)}function rd(r,o,c,h,v){var x=h;if((o&1)===0&&(o&2)===0&&h!==null)e:for(;;){if(h===null)return;var A=h.tag;if(A===3||A===4){var z=h.stateNode.containerInfo;if(z===v||z.nodeType===8&&z.parentNode===v)break;if(A===4)for(A=h.return;A!==null;){var $=A.tag;if(($===3||$===4)&&($=A.stateNode.containerInfo,$===v||$.nodeType===8&&$.parentNode===v))return;A=A.return}for(;z!==null;){if(A=bs(z),A===null)return;if($=A.tag,$===5||$===6){h=x=A;continue e}z=z.parentNode}}h=h.return}Gn(function(){var ce=x,Ee=K(c),Te=[];e:{var Se=zv.get(r);if(Se!==void 0){var Be=Gf,je=r;switch(r){case"keypress":if(fc(c)===0)break e;case"keydown":case"keyup":Be=AT;break;case"focusin":je="focus",Be=Xf;break;case"focusout":je="blur",Be=Xf;break;case"beforeblur":case"afterblur":Be=Xf;break;case"click":if(c.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=gv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=mT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=PT;break;case Fv:case Ov:case kv:Be=yT;break;case Bv:Be=LT;break;case"scroll":Be=hT;break;case"wheel":Be=NT;break;case"copy":case"cut":case"paste":Be=xT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=yv}var Ye=(o&4)!==0,en=!Ye&&r==="scroll",se=Ye?Se!==null?Se+"Capture":null:Se;Ye=[];for(var q=ce,le;q!==null;){le=q;var Ae=le.stateNode;if(le.tag===5&&Ae!==null&&(le=Ae,se!==null&&(Ae=On(q,se),Ae!=null&&Ye.push(ja(q,Ae,le)))),en)break;q=q.return}0<Ye.length&&(Se=new Be(Se,je,null,c,Ee),Te.push({event:Se,listeners:Ye}))}}if((o&7)===0){e:{if(Se=r==="mouseover"||r==="pointerover",Be=r==="mouseout"||r==="pointerout",Se&&c!==It&&(je=c.relatedTarget||c.fromElement)&&(bs(je)||je[cr]))break e;if((Be||Se)&&(Se=Ee.window===Ee?Ee:(Se=Ee.ownerDocument)?Se.defaultView||Se.parentWindow:window,Be?(je=c.relatedTarget||c.toElement,Be=ce,je=je?bs(je):null,je!==null&&(en=Xi(je),je!==en||je.tag!==5&&je.tag!==6)&&(je=null)):(Be=null,je=ce),Be!==je)){if(Ye=gv,Ae="onMouseLeave",se="onMouseEnter",q="mouse",(r==="pointerout"||r==="pointerover")&&(Ye=yv,Ae="onPointerLeave",se="onPointerEnter",q="pointer"),en=Be==null?Se:Eo(Be),le=je==null?Se:Eo(je),Se=new Ye(Ae,q+"leave",Be,c,Ee),Se.target=en,Se.relatedTarget=le,Ae=null,bs(Ee)===ce&&(Ye=new Ye(se,q+"enter",je,c,Ee),Ye.target=le,Ye.relatedTarget=en,Ae=Ye),en=Ae,Be&&je)t:{for(Ye=Be,se=je,q=0,le=Ye;le;le=xo(le))q++;for(le=0,Ae=se;Ae;Ae=xo(Ae))le++;for(;0<q-le;)Ye=xo(Ye),q--;for(;0<le-q;)se=xo(se),le--;for(;q--;){if(Ye===se||se!==null&&Ye===se.alternate)break t;Ye=xo(Ye),se=xo(se)}Ye=null}else Ye=null;Be!==null&&jv(Te,Se,Be,Ye,!1),je!==null&&en!==null&&jv(Te,en,je,Ye,!0)}}e:{if(Se=ce?Eo(ce):window,Be=Se.nodeName&&Se.nodeName.toLowerCase(),Be==="select"||Be==="input"&&Se.type==="file")var qe=VT;else if(wv(Se))if(bv)qe=jT;else{qe=GT;var et=HT}else(Be=Se.nodeName)&&Be.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(qe=WT);if(qe&&(qe=qe(r,ce))){Tv(Te,qe,c,Ee);break e}et&&et(r,Se,ce),r==="focusout"&&(et=Se._wrapperState)&&et.controlled&&Se.type==="number"&&Rt(Se,"number",Se.value)}switch(et=ce?Eo(ce):window,r){case"focusin":(wv(et)||et.contentEditable==="true")&&(yo=et,Qf=ce,Ha=null);break;case"focusout":Ha=Qf=yo=null;break;case"mousedown":Jf=!0;break;case"contextmenu":case"mouseup":case"dragend":Jf=!1,Nv(Te,c,Ee);break;case"selectionchange":if(YT)break;case"keydown":case"keyup":Nv(Te,c,Ee)}var tt;if(Yf)e:{switch(r){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else vo?Ev(r,c)&&(lt="onCompositionEnd"):r==="keydown"&&c.keyCode===229&&(lt="onCompositionStart");lt&&(_v&&c.locale!=="ko"&&(vo||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&vo&&(tt=pv()):($r=Ee,Hf="value"in $r?$r.value:$r.textContent,vo=!0)),et=yc(ce,lt),0<et.length&&(lt=new vv(lt,r,null,c,Ee),Te.push({event:lt,listeners:et}),tt?lt.data=tt:(tt=Mv(c),tt!==null&&(lt.data=tt)))),(tt=FT?OT(r,c):kT(r,c))&&(ce=yc(ce,"onBeforeInput"),0<ce.length&&(Ee=new vv("onBeforeInput","beforeinput",null,c,Ee),Te.push({event:Ee,listeners:ce}),Ee.data=tt))}Gv(Te,o)})}function ja(r,o,c){return{instance:r,listener:o,currentTarget:c}}function yc(r,o){for(var c=o+"Capture",h=[];r!==null;){var v=r,x=v.stateNode;v.tag===5&&x!==null&&(v=x,x=On(r,c),x!=null&&h.unshift(ja(r,x,v)),x=On(r,o),x!=null&&h.push(ja(r,x,v))),r=r.return}return h}function xo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function jv(r,o,c,h,v){for(var x=o._reactName,A=[];c!==null&&c!==h;){var z=c,$=z.alternate,ce=z.stateNode;if($!==null&&$===h)break;z.tag===5&&ce!==null&&(z=ce,v?($=On(c,x),$!=null&&A.unshift(ja(c,$,z))):v||($=On(c,x),$!=null&&A.push(ja(c,$,z)))),c=c.return}A.length!==0&&r.push({event:o,listeners:A})}var QT=/\r\n?/g,JT=/\u0000|\uFFFD/g;function Xv(r){return(typeof r=="string"?r:""+r).replace(QT,`
`).replace(JT,"")}function _c(r,o,c){if(o=Xv(o),Xv(r)!==o&&c)throw Error(t(425))}function xc(){}var sd=null,od=null;function ad(r,o){return r==="textarea"||r==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var ld=typeof setTimeout=="function"?setTimeout:void 0,e1=typeof clearTimeout=="function"?clearTimeout:void 0,$v=typeof Promise=="function"?Promise:void 0,t1=typeof queueMicrotask=="function"?queueMicrotask:typeof $v<"u"?function(r){return $v.resolve(null).then(r).catch(n1)}:ld;function n1(r){setTimeout(function(){throw r})}function cd(r,o){var c=o,h=0;do{var v=c.nextSibling;if(r.removeChild(c),v&&v.nodeType===8)if(c=v.data,c==="/$"){if(h===0){r.removeChild(v),Ua(o);return}h--}else c!=="$"&&c!=="$?"&&c!=="$!"||h++;c=v}while(c);Ua(o)}function qr(r){for(;r!=null;r=r.nextSibling){var o=r.nodeType;if(o===1||o===3)break;if(o===8){if(o=r.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return r}function Yv(r){r=r.previousSibling;for(var o=0;r;){if(r.nodeType===8){var c=r.data;if(c==="$"||c==="$!"||c==="$?"){if(o===0)return r;o--}else c==="/$"&&o++}r=r.previousSibling}return null}var So=Math.random().toString(36).slice(2),Yi="__reactFiber$"+So,Xa="__reactProps$"+So,cr="__reactContainer$"+So,ud="__reactEvents$"+So,i1="__reactListeners$"+So,r1="__reactHandles$"+So;function bs(r){var o=r[Yi];if(o)return o;for(var c=r.parentNode;c;){if(o=c[cr]||c[Yi]){if(c=o.alternate,o.child!==null||c!==null&&c.child!==null)for(r=Yv(r);r!==null;){if(c=r[Yi])return c;r=Yv(r)}return o}r=c,c=r.parentNode}return null}function $a(r){return r=r[Yi]||r[cr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Eo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Sc(r){return r[Xa]||null}var fd=[],Mo=-1;function Kr(r){return{current:r}}function Ht(r){0>Mo||(r.current=fd[Mo],fd[Mo]=null,Mo--)}function Bt(r,o){Mo++,fd[Mo]=r.current,r.current=o}var Zr={},An=Kr(Zr),Wn=Kr(!1),As=Zr;function wo(r,o){var c=r.type.contextTypes;if(!c)return Zr;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===o)return h.__reactInternalMemoizedMaskedChildContext;var v={},x;for(x in c)v[x]=o[x];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=o,r.__reactInternalMemoizedMaskedChildContext=v),v}function jn(r){return r=r.childContextTypes,r!=null}function Ec(){Ht(Wn),Ht(An)}function qv(r,o,c){if(An.current!==Zr)throw Error(t(168));Bt(An,o),Bt(Wn,c)}function Kv(r,o,c){var h=r.stateNode;if(o=o.childContextTypes,typeof h.getChildContext!="function")return c;h=h.getChildContext();for(var v in h)if(!(v in o))throw Error(t(108,pe(r)||"Unknown",v));return Z({},c,h)}function Mc(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Zr,As=An.current,Bt(An,r),Bt(Wn,Wn.current),!0}function Zv(r,o,c){var h=r.stateNode;if(!h)throw Error(t(169));c?(r=Kv(r,o,As),h.__reactInternalMemoizedMergedChildContext=r,Ht(Wn),Ht(An),Bt(An,r)):Ht(Wn),Bt(Wn,c)}var ur=null,wc=!1,dd=!1;function Qv(r){ur===null?ur=[r]:ur.push(r)}function s1(r){wc=!0,Qv(r)}function Qr(){if(!dd&&ur!==null){dd=!0;var r=0,o=At;try{var c=ur;for(At=1;r<c.length;r++){var h=c[r];do h=h(!0);while(h!==null)}ur=null,wc=!1}catch(v){throw ur!==null&&(ur=ur.slice(r+1)),sc(be,Qr),v}finally{At=o,dd=!1}}return null}var To=[],bo=0,Tc=null,bc=0,hi=[],pi=0,Cs=null,fr=1,dr="";function Rs(r,o){To[bo++]=bc,To[bo++]=Tc,Tc=r,bc=o}function Jv(r,o,c){hi[pi++]=fr,hi[pi++]=dr,hi[pi++]=Cs,Cs=r;var h=fr;r=dr;var v=32-ht(h)-1;h&=~(1<<v),c+=1;var x=32-ht(o)+v;if(30<x){var A=v-v%5;x=(h&(1<<A)-1).toString(32),h>>=A,v-=A,fr=1<<32-ht(o)+v|c<<v|h,dr=x+r}else fr=1<<x|c<<v|h,dr=r}function hd(r){r.return!==null&&(Rs(r,1),Jv(r,1,0))}function pd(r){for(;r===Tc;)Tc=To[--bo],To[bo]=null,bc=To[--bo],To[bo]=null;for(;r===Cs;)Cs=hi[--pi],hi[pi]=null,dr=hi[--pi],hi[pi]=null,fr=hi[--pi],hi[pi]=null}var si=null,oi=null,jt=!1,Ri=null;function e0(r,o){var c=yi(5,null,null,0);c.elementType="DELETED",c.stateNode=o,c.return=r,o=r.deletions,o===null?(r.deletions=[c],r.flags|=16):o.push(c)}function t0(r,o){switch(r.tag){case 5:var c=r.type;return o=o.nodeType!==1||c.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(r.stateNode=o,si=r,oi=qr(o.firstChild),!0):!1;case 6:return o=r.pendingProps===""||o.nodeType!==3?null:o,o!==null?(r.stateNode=o,si=r,oi=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(c=Cs!==null?{id:fr,overflow:dr}:null,r.memoizedState={dehydrated:o,treeContext:c,retryLane:1073741824},c=yi(18,null,null,0),c.stateNode=o,c.return=r,r.child=c,si=r,oi=null,!0):!1;default:return!1}}function md(r){return(r.mode&1)!==0&&(r.flags&128)===0}function gd(r){if(jt){var o=oi;if(o){var c=o;if(!t0(r,o)){if(md(r))throw Error(t(418));o=qr(c.nextSibling);var h=si;o&&t0(r,o)?e0(h,c):(r.flags=r.flags&-4097|2,jt=!1,si=r)}}else{if(md(r))throw Error(t(418));r.flags=r.flags&-4097|2,jt=!1,si=r}}}function n0(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;si=r}function Ac(r){if(r!==si)return!1;if(!jt)return n0(r),jt=!0,!1;var o;if((o=r.tag!==3)&&!(o=r.tag!==5)&&(o=r.type,o=o!=="head"&&o!=="body"&&!ad(r.type,r.memoizedProps)),o&&(o=oi)){if(md(r))throw i0(),Error(t(418));for(;o;)e0(r,o),o=qr(o.nextSibling)}if(n0(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,o=0;r;){if(r.nodeType===8){var c=r.data;if(c==="/$"){if(o===0){oi=qr(r.nextSibling);break e}o--}else c!=="$"&&c!=="$!"&&c!=="$?"||o++}r=r.nextSibling}oi=null}}else oi=si?qr(r.stateNode.nextSibling):null;return!0}function i0(){for(var r=oi;r;)r=qr(r.nextSibling)}function Ao(){oi=si=null,jt=!1}function vd(r){Ri===null?Ri=[r]:Ri.push(r)}var o1=b.ReactCurrentBatchConfig;function Ya(r,o,c){if(r=c.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(c._owner){if(c=c._owner,c){if(c.tag!==1)throw Error(t(309));var h=c.stateNode}if(!h)throw Error(t(147,r));var v=h,x=""+r;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===x?o.ref:(o=function(A){var z=v.refs;A===null?delete z[x]:z[x]=A},o._stringRef=x,o)}if(typeof r!="string")throw Error(t(284));if(!c._owner)throw Error(t(290,r))}return r}function Cc(r,o){throw r=Object.prototype.toString.call(o),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":r))}function r0(r){var o=r._init;return o(r._payload)}function s0(r){function o(se,q){if(r){var le=se.deletions;le===null?(se.deletions=[q],se.flags|=16):le.push(q)}}function c(se,q){if(!r)return null;for(;q!==null;)o(se,q),q=q.sibling;return null}function h(se,q){for(se=new Map;q!==null;)q.key!==null?se.set(q.key,q):se.set(q.index,q),q=q.sibling;return se}function v(se,q){return se=os(se,q),se.index=0,se.sibling=null,se}function x(se,q,le){return se.index=le,r?(le=se.alternate,le!==null?(le=le.index,le<q?(se.flags|=2,q):le):(se.flags|=2,q)):(se.flags|=1048576,q)}function A(se){return r&&se.alternate===null&&(se.flags|=2),se}function z(se,q,le,Ae){return q===null||q.tag!==6?(q=lh(le,se.mode,Ae),q.return=se,q):(q=v(q,le),q.return=se,q)}function $(se,q,le,Ae){var qe=le.type;return qe===I?Ee(se,q,le.props.children,Ae,le.key):q!==null&&(q.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===ee&&r0(qe)===q.type)?(Ae=v(q,le.props),Ae.ref=Ya(se,q,le),Ae.return=se,Ae):(Ae=Qc(le.type,le.key,le.props,null,se.mode,Ae),Ae.ref=Ya(se,q,le),Ae.return=se,Ae)}function ce(se,q,le,Ae){return q===null||q.tag!==4||q.stateNode.containerInfo!==le.containerInfo||q.stateNode.implementation!==le.implementation?(q=ch(le,se.mode,Ae),q.return=se,q):(q=v(q,le.children||[]),q.return=se,q)}function Ee(se,q,le,Ae,qe){return q===null||q.tag!==7?(q=Os(le,se.mode,Ae,qe),q.return=se,q):(q=v(q,le),q.return=se,q)}function Te(se,q,le){if(typeof q=="string"&&q!==""||typeof q=="number")return q=lh(""+q,se.mode,le),q.return=se,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case N:return le=Qc(q.type,q.key,q.props,null,se.mode,le),le.ref=Ya(se,null,q),le.return=se,le;case L:return q=ch(q,se.mode,le),q.return=se,q;case ee:var Ae=q._init;return Te(se,Ae(q._payload),le)}if($e(q)||ae(q))return q=Os(q,se.mode,le,null),q.return=se,q;Cc(se,q)}return null}function Se(se,q,le,Ae){var qe=q!==null?q.key:null;if(typeof le=="string"&&le!==""||typeof le=="number")return qe!==null?null:z(se,q,""+le,Ae);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case N:return le.key===qe?$(se,q,le,Ae):null;case L:return le.key===qe?ce(se,q,le,Ae):null;case ee:return qe=le._init,Se(se,q,qe(le._payload),Ae)}if($e(le)||ae(le))return qe!==null?null:Ee(se,q,le,Ae,null);Cc(se,le)}return null}function Be(se,q,le,Ae,qe){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return se=se.get(le)||null,z(q,se,""+Ae,qe);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case N:return se=se.get(Ae.key===null?le:Ae.key)||null,$(q,se,Ae,qe);case L:return se=se.get(Ae.key===null?le:Ae.key)||null,ce(q,se,Ae,qe);case ee:var et=Ae._init;return Be(se,q,le,et(Ae._payload),qe)}if($e(Ae)||ae(Ae))return se=se.get(le)||null,Ee(q,se,Ae,qe,null);Cc(q,Ae)}return null}function je(se,q,le,Ae){for(var qe=null,et=null,tt=q,lt=q=0,vn=null;tt!==null&&lt<le.length;lt++){tt.index>lt?(vn=tt,tt=null):vn=tt.sibling;var Pt=Se(se,tt,le[lt],Ae);if(Pt===null){tt===null&&(tt=vn);break}r&&tt&&Pt.alternate===null&&o(se,tt),q=x(Pt,q,lt),et===null?qe=Pt:et.sibling=Pt,et=Pt,tt=vn}if(lt===le.length)return c(se,tt),jt&&Rs(se,lt),qe;if(tt===null){for(;lt<le.length;lt++)tt=Te(se,le[lt],Ae),tt!==null&&(q=x(tt,q,lt),et===null?qe=tt:et.sibling=tt,et=tt);return jt&&Rs(se,lt),qe}for(tt=h(se,tt);lt<le.length;lt++)vn=Be(tt,se,lt,le[lt],Ae),vn!==null&&(r&&vn.alternate!==null&&tt.delete(vn.key===null?lt:vn.key),q=x(vn,q,lt),et===null?qe=vn:et.sibling=vn,et=vn);return r&&tt.forEach(function(as){return o(se,as)}),jt&&Rs(se,lt),qe}function Ye(se,q,le,Ae){var qe=ae(le);if(typeof qe!="function")throw Error(t(150));if(le=qe.call(le),le==null)throw Error(t(151));for(var et=qe=null,tt=q,lt=q=0,vn=null,Pt=le.next();tt!==null&&!Pt.done;lt++,Pt=le.next()){tt.index>lt?(vn=tt,tt=null):vn=tt.sibling;var as=Se(se,tt,Pt.value,Ae);if(as===null){tt===null&&(tt=vn);break}r&&tt&&as.alternate===null&&o(se,tt),q=x(as,q,lt),et===null?qe=as:et.sibling=as,et=as,tt=vn}if(Pt.done)return c(se,tt),jt&&Rs(se,lt),qe;if(tt===null){for(;!Pt.done;lt++,Pt=le.next())Pt=Te(se,Pt.value,Ae),Pt!==null&&(q=x(Pt,q,lt),et===null?qe=Pt:et.sibling=Pt,et=Pt);return jt&&Rs(se,lt),qe}for(tt=h(se,tt);!Pt.done;lt++,Pt=le.next())Pt=Be(tt,se,lt,Pt.value,Ae),Pt!==null&&(r&&Pt.alternate!==null&&tt.delete(Pt.key===null?lt:Pt.key),q=x(Pt,q,lt),et===null?qe=Pt:et.sibling=Pt,et=Pt);return r&&tt.forEach(function(B1){return o(se,B1)}),jt&&Rs(se,lt),qe}function en(se,q,le,Ae){if(typeof le=="object"&&le!==null&&le.type===I&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case N:e:{for(var qe=le.key,et=q;et!==null;){if(et.key===qe){if(qe=le.type,qe===I){if(et.tag===7){c(se,et.sibling),q=v(et,le.props.children),q.return=se,se=q;break e}}else if(et.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===ee&&r0(qe)===et.type){c(se,et.sibling),q=v(et,le.props),q.ref=Ya(se,et,le),q.return=se,se=q;break e}c(se,et);break}else o(se,et);et=et.sibling}le.type===I?(q=Os(le.props.children,se.mode,Ae,le.key),q.return=se,se=q):(Ae=Qc(le.type,le.key,le.props,null,se.mode,Ae),Ae.ref=Ya(se,q,le),Ae.return=se,se=Ae)}return A(se);case L:e:{for(et=le.key;q!==null;){if(q.key===et)if(q.tag===4&&q.stateNode.containerInfo===le.containerInfo&&q.stateNode.implementation===le.implementation){c(se,q.sibling),q=v(q,le.children||[]),q.return=se,se=q;break e}else{c(se,q);break}else o(se,q);q=q.sibling}q=ch(le,se.mode,Ae),q.return=se,se=q}return A(se);case ee:return et=le._init,en(se,q,et(le._payload),Ae)}if($e(le))return je(se,q,le,Ae);if(ae(le))return Ye(se,q,le,Ae);Cc(se,le)}return typeof le=="string"&&le!==""||typeof le=="number"?(le=""+le,q!==null&&q.tag===6?(c(se,q.sibling),q=v(q,le),q.return=se,se=q):(c(se,q),q=lh(le,se.mode,Ae),q.return=se,se=q),A(se)):c(se,q)}return en}var Co=s0(!0),o0=s0(!1),Rc=Kr(null),Pc=null,Ro=null,yd=null;function _d(){yd=Ro=Pc=null}function xd(r){var o=Rc.current;Ht(Rc),r._currentValue=o}function Sd(r,o,c){for(;r!==null;){var h=r.alternate;if((r.childLanes&o)!==o?(r.childLanes|=o,h!==null&&(h.childLanes|=o)):h!==null&&(h.childLanes&o)!==o&&(h.childLanes|=o),r===c)break;r=r.return}}function Po(r,o){Pc=r,yd=Ro=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&o)!==0&&(Xn=!0),r.firstContext=null)}function mi(r){var o=r._currentValue;if(yd!==r)if(r={context:r,memoizedValue:o,next:null},Ro===null){if(Pc===null)throw Error(t(308));Ro=r,Pc.dependencies={lanes:0,firstContext:r}}else Ro=Ro.next=r;return o}var Ps=null;function Ed(r){Ps===null?Ps=[r]:Ps.push(r)}function a0(r,o,c,h){var v=o.interleaved;return v===null?(c.next=c,Ed(o)):(c.next=v.next,v.next=c),o.interleaved=c,hr(r,h)}function hr(r,o){r.lanes|=o;var c=r.alternate;for(c!==null&&(c.lanes|=o),c=r,r=r.return;r!==null;)r.childLanes|=o,c=r.alternate,c!==null&&(c.childLanes|=o),c=r,r=r.return;return c.tag===3?c.stateNode:null}var Jr=!1;function Md(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function l0(r,o){r=r.updateQueue,o.updateQueue===r&&(o.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function pr(r,o){return{eventTime:r,lane:o,tag:0,payload:null,callback:null,next:null}}function es(r,o,c){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,(Ct&2)!==0){var v=h.pending;return v===null?o.next=o:(o.next=v.next,v.next=o),h.pending=o,hr(r,c)}return v=h.interleaved,v===null?(o.next=o,Ed(h)):(o.next=v.next,v.next=o),h.interleaved=o,hr(r,c)}function Dc(r,o,c){if(o=o.updateQueue,o!==null&&(o=o.shared,(c&4194240)!==0)){var h=o.lanes;h&=r.pendingLanes,c|=h,o.lanes=c,pn(r,c)}}function c0(r,o){var c=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,c===h)){var v=null,x=null;if(c=c.firstBaseUpdate,c!==null){do{var A={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};x===null?v=x=A:x=x.next=A,c=c.next}while(c!==null);x===null?v=x=o:x=x.next=o}else v=x=o;c={baseState:h.baseState,firstBaseUpdate:v,lastBaseUpdate:x,shared:h.shared,effects:h.effects},r.updateQueue=c;return}r=c.lastBaseUpdate,r===null?c.firstBaseUpdate=o:r.next=o,c.lastBaseUpdate=o}function Lc(r,o,c,h){var v=r.updateQueue;Jr=!1;var x=v.firstBaseUpdate,A=v.lastBaseUpdate,z=v.shared.pending;if(z!==null){v.shared.pending=null;var $=z,ce=$.next;$.next=null,A===null?x=ce:A.next=ce,A=$;var Ee=r.alternate;Ee!==null&&(Ee=Ee.updateQueue,z=Ee.lastBaseUpdate,z!==A&&(z===null?Ee.firstBaseUpdate=ce:z.next=ce,Ee.lastBaseUpdate=$))}if(x!==null){var Te=v.baseState;A=0,Ee=ce=$=null,z=x;do{var Se=z.lane,Be=z.eventTime;if((h&Se)===Se){Ee!==null&&(Ee=Ee.next={eventTime:Be,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var je=r,Ye=z;switch(Se=o,Be=c,Ye.tag){case 1:if(je=Ye.payload,typeof je=="function"){Te=je.call(Be,Te,Se);break e}Te=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Ye.payload,Se=typeof je=="function"?je.call(Be,Te,Se):je,Se==null)break e;Te=Z({},Te,Se);break e;case 2:Jr=!0}}z.callback!==null&&z.lane!==0&&(r.flags|=64,Se=v.effects,Se===null?v.effects=[z]:Se.push(z))}else Be={eventTime:Be,lane:Se,tag:z.tag,payload:z.payload,callback:z.callback,next:null},Ee===null?(ce=Ee=Be,$=Te):Ee=Ee.next=Be,A|=Se;if(z=z.next,z===null){if(z=v.shared.pending,z===null)break;Se=z,z=Se.next,Se.next=null,v.lastBaseUpdate=Se,v.shared.pending=null}}while(!0);if(Ee===null&&($=Te),v.baseState=$,v.firstBaseUpdate=ce,v.lastBaseUpdate=Ee,o=v.shared.interleaved,o!==null){v=o;do A|=v.lane,v=v.next;while(v!==o)}else x===null&&(v.shared.lanes=0);Is|=A,r.lanes=A,r.memoizedState=Te}}function u0(r,o,c){if(r=o.effects,o.effects=null,r!==null)for(o=0;o<r.length;o++){var h=r[o],v=h.callback;if(v!==null){if(h.callback=null,h=c,typeof v!="function")throw Error(t(191,v));v.call(h)}}}var qa={},qi=Kr(qa),Ka=Kr(qa),Za=Kr(qa);function Ds(r){if(r===qa)throw Error(t(174));return r}function wd(r,o){switch(Bt(Za,o),Bt(Ka,r),Bt(qi,qa),r=o.nodeType,r){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:He(null,"");break;default:r=r===8?o.parentNode:o,o=r.namespaceURI||null,r=r.tagName,o=He(o,r)}Ht(qi),Bt(qi,o)}function Do(){Ht(qi),Ht(Ka),Ht(Za)}function f0(r){Ds(Za.current);var o=Ds(qi.current),c=He(o,r.type);o!==c&&(Bt(Ka,r),Bt(qi,c))}function Td(r){Ka.current===r&&(Ht(qi),Ht(Ka))}var Xt=Kr(0);function Ic(r){for(var o=r;o!==null;){if(o.tag===13){var c=o.memoizedState;if(c!==null&&(c=c.dehydrated,c===null||c.data==="$?"||c.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var bd=[];function Ad(){for(var r=0;r<bd.length;r++)bd[r]._workInProgressVersionPrimary=null;bd.length=0}var Nc=b.ReactCurrentDispatcher,Cd=b.ReactCurrentBatchConfig,Ls=0,$t=null,cn=null,mn=null,Uc=!1,Qa=!1,Ja=0,a1=0;function Cn(){throw Error(t(321))}function Rd(r,o){if(o===null)return!1;for(var c=0;c<o.length&&c<r.length;c++)if(!Ci(r[c],o[c]))return!1;return!0}function Pd(r,o,c,h,v,x){if(Ls=x,$t=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Nc.current=r===null||r.memoizedState===null?f1:d1,r=c(h,v),Qa){x=0;do{if(Qa=!1,Ja=0,25<=x)throw Error(t(301));x+=1,mn=cn=null,o.updateQueue=null,Nc.current=h1,r=c(h,v)}while(Qa)}if(Nc.current=kc,o=cn!==null&&cn.next!==null,Ls=0,mn=cn=$t=null,Uc=!1,o)throw Error(t(300));return r}function Dd(){var r=Ja!==0;return Ja=0,r}function Ki(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?$t.memoizedState=mn=r:mn=mn.next=r,mn}function gi(){if(cn===null){var r=$t.alternate;r=r!==null?r.memoizedState:null}else r=cn.next;var o=mn===null?$t.memoizedState:mn.next;if(o!==null)mn=o,cn=r;else{if(r===null)throw Error(t(310));cn=r,r={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},mn===null?$t.memoizedState=mn=r:mn=mn.next=r}return mn}function el(r,o){return typeof o=="function"?o(r):o}function Ld(r){var o=gi(),c=o.queue;if(c===null)throw Error(t(311));c.lastRenderedReducer=r;var h=cn,v=h.baseQueue,x=c.pending;if(x!==null){if(v!==null){var A=v.next;v.next=x.next,x.next=A}h.baseQueue=v=x,c.pending=null}if(v!==null){x=v.next,h=h.baseState;var z=A=null,$=null,ce=x;do{var Ee=ce.lane;if((Ls&Ee)===Ee)$!==null&&($=$.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),h=ce.hasEagerState?ce.eagerState:r(h,ce.action);else{var Te={lane:Ee,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};$===null?(z=$=Te,A=h):$=$.next=Te,$t.lanes|=Ee,Is|=Ee}ce=ce.next}while(ce!==null&&ce!==x);$===null?A=h:$.next=z,Ci(h,o.memoizedState)||(Xn=!0),o.memoizedState=h,o.baseState=A,o.baseQueue=$,c.lastRenderedState=h}if(r=c.interleaved,r!==null){v=r;do x=v.lane,$t.lanes|=x,Is|=x,v=v.next;while(v!==r)}else v===null&&(c.lanes=0);return[o.memoizedState,c.dispatch]}function Id(r){var o=gi(),c=o.queue;if(c===null)throw Error(t(311));c.lastRenderedReducer=r;var h=c.dispatch,v=c.pending,x=o.memoizedState;if(v!==null){c.pending=null;var A=v=v.next;do x=r(x,A.action),A=A.next;while(A!==v);Ci(x,o.memoizedState)||(Xn=!0),o.memoizedState=x,o.baseQueue===null&&(o.baseState=x),c.lastRenderedState=x}return[x,h]}function d0(){}function h0(r,o){var c=$t,h=gi(),v=o(),x=!Ci(h.memoizedState,v);if(x&&(h.memoizedState=v,Xn=!0),h=h.queue,Nd(g0.bind(null,c,h,r),[r]),h.getSnapshot!==o||x||mn!==null&&mn.memoizedState.tag&1){if(c.flags|=2048,tl(9,m0.bind(null,c,h,v,o),void 0,null),gn===null)throw Error(t(349));(Ls&30)!==0||p0(c,o,v)}return v}function p0(r,o,c){r.flags|=16384,r={getSnapshot:o,value:c},o=$t.updateQueue,o===null?(o={lastEffect:null,stores:null},$t.updateQueue=o,o.stores=[r]):(c=o.stores,c===null?o.stores=[r]:c.push(r))}function m0(r,o,c,h){o.value=c,o.getSnapshot=h,v0(o)&&y0(r)}function g0(r,o,c){return c(function(){v0(o)&&y0(r)})}function v0(r){var o=r.getSnapshot;r=r.value;try{var c=o();return!Ci(r,c)}catch{return!0}}function y0(r){var o=hr(r,1);o!==null&&Ii(o,r,1,-1)}function _0(r){var o=Ki();return typeof r=="function"&&(r=r()),o.memoizedState=o.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:el,lastRenderedState:r},o.queue=r,r=r.dispatch=u1.bind(null,$t,r),[o.memoizedState,r]}function tl(r,o,c,h){return r={tag:r,create:o,destroy:c,deps:h,next:null},o=$t.updateQueue,o===null?(o={lastEffect:null,stores:null},$t.updateQueue=o,o.lastEffect=r.next=r):(c=o.lastEffect,c===null?o.lastEffect=r.next=r:(h=c.next,c.next=r,r.next=h,o.lastEffect=r)),r}function x0(){return gi().memoizedState}function Fc(r,o,c,h){var v=Ki();$t.flags|=r,v.memoizedState=tl(1|o,c,void 0,h===void 0?null:h)}function Oc(r,o,c,h){var v=gi();h=h===void 0?null:h;var x=void 0;if(cn!==null){var A=cn.memoizedState;if(x=A.destroy,h!==null&&Rd(h,A.deps)){v.memoizedState=tl(o,c,x,h);return}}$t.flags|=r,v.memoizedState=tl(1|o,c,x,h)}function S0(r,o){return Fc(8390656,8,r,o)}function Nd(r,o){return Oc(2048,8,r,o)}function E0(r,o){return Oc(4,2,r,o)}function M0(r,o){return Oc(4,4,r,o)}function w0(r,o){if(typeof o=="function")return r=r(),o(r),function(){o(null)};if(o!=null)return r=r(),o.current=r,function(){o.current=null}}function T0(r,o,c){return c=c!=null?c.concat([r]):null,Oc(4,4,w0.bind(null,o,r),c)}function Ud(){}function b0(r,o){var c=gi();o=o===void 0?null:o;var h=c.memoizedState;return h!==null&&o!==null&&Rd(o,h[1])?h[0]:(c.memoizedState=[r,o],r)}function A0(r,o){var c=gi();o=o===void 0?null:o;var h=c.memoizedState;return h!==null&&o!==null&&Rd(o,h[1])?h[0]:(r=r(),c.memoizedState=[r,o],r)}function C0(r,o,c){return(Ls&21)===0?(r.baseState&&(r.baseState=!1,Xn=!0),r.memoizedState=c):(Ci(c,o)||(c=Ot(),$t.lanes|=c,Is|=c,r.baseState=!0),o)}function l1(r,o){var c=At;At=c!==0&&4>c?c:4,r(!0);var h=Cd.transition;Cd.transition={};try{r(!1),o()}finally{At=c,Cd.transition=h}}function R0(){return gi().memoizedState}function c1(r,o,c){var h=rs(r);if(c={lane:h,action:c,hasEagerState:!1,eagerState:null,next:null},P0(r))D0(o,c);else if(c=a0(r,o,c,h),c!==null){var v=zn();Ii(c,r,h,v),L0(c,o,h)}}function u1(r,o,c){var h=rs(r),v={lane:h,action:c,hasEagerState:!1,eagerState:null,next:null};if(P0(r))D0(o,v);else{var x=r.alternate;if(r.lanes===0&&(x===null||x.lanes===0)&&(x=o.lastRenderedReducer,x!==null))try{var A=o.lastRenderedState,z=x(A,c);if(v.hasEagerState=!0,v.eagerState=z,Ci(z,A)){var $=o.interleaved;$===null?(v.next=v,Ed(o)):(v.next=$.next,$.next=v),o.interleaved=v;return}}catch{}finally{}c=a0(r,o,v,h),c!==null&&(v=zn(),Ii(c,r,h,v),L0(c,o,h))}}function P0(r){var o=r.alternate;return r===$t||o!==null&&o===$t}function D0(r,o){Qa=Uc=!0;var c=r.pending;c===null?o.next=o:(o.next=c.next,c.next=o),r.pending=o}function L0(r,o,c){if((c&4194240)!==0){var h=o.lanes;h&=r.pendingLanes,c|=h,o.lanes=c,pn(r,c)}}var kc={readContext:mi,useCallback:Cn,useContext:Cn,useEffect:Cn,useImperativeHandle:Cn,useInsertionEffect:Cn,useLayoutEffect:Cn,useMemo:Cn,useReducer:Cn,useRef:Cn,useState:Cn,useDebugValue:Cn,useDeferredValue:Cn,useTransition:Cn,useMutableSource:Cn,useSyncExternalStore:Cn,useId:Cn,unstable_isNewReconciler:!1},f1={readContext:mi,useCallback:function(r,o){return Ki().memoizedState=[r,o===void 0?null:o],r},useContext:mi,useEffect:S0,useImperativeHandle:function(r,o,c){return c=c!=null?c.concat([r]):null,Fc(4194308,4,w0.bind(null,o,r),c)},useLayoutEffect:function(r,o){return Fc(4194308,4,r,o)},useInsertionEffect:function(r,o){return Fc(4,2,r,o)},useMemo:function(r,o){var c=Ki();return o=o===void 0?null:o,r=r(),c.memoizedState=[r,o],r},useReducer:function(r,o,c){var h=Ki();return o=c!==void 0?c(o):o,h.memoizedState=h.baseState=o,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:o},h.queue=r,r=r.dispatch=c1.bind(null,$t,r),[h.memoizedState,r]},useRef:function(r){var o=Ki();return r={current:r},o.memoizedState=r},useState:_0,useDebugValue:Ud,useDeferredValue:function(r){return Ki().memoizedState=r},useTransition:function(){var r=_0(!1),o=r[0];return r=l1.bind(null,r[1]),Ki().memoizedState=r,[o,r]},useMutableSource:function(){},useSyncExternalStore:function(r,o,c){var h=$t,v=Ki();if(jt){if(c===void 0)throw Error(t(407));c=c()}else{if(c=o(),gn===null)throw Error(t(349));(Ls&30)!==0||p0(h,o,c)}v.memoizedState=c;var x={value:c,getSnapshot:o};return v.queue=x,S0(g0.bind(null,h,x,r),[r]),h.flags|=2048,tl(9,m0.bind(null,h,x,c,o),void 0,null),c},useId:function(){var r=Ki(),o=gn.identifierPrefix;if(jt){var c=dr,h=fr;c=(h&~(1<<32-ht(h)-1)).toString(32)+c,o=":"+o+"R"+c,c=Ja++,0<c&&(o+="H"+c.toString(32)),o+=":"}else c=a1++,o=":"+o+"r"+c.toString(32)+":";return r.memoizedState=o},unstable_isNewReconciler:!1},d1={readContext:mi,useCallback:b0,useContext:mi,useEffect:Nd,useImperativeHandle:T0,useInsertionEffect:E0,useLayoutEffect:M0,useMemo:A0,useReducer:Ld,useRef:x0,useState:function(){return Ld(el)},useDebugValue:Ud,useDeferredValue:function(r){var o=gi();return C0(o,cn.memoizedState,r)},useTransition:function(){var r=Ld(el)[0],o=gi().memoizedState;return[r,o]},useMutableSource:d0,useSyncExternalStore:h0,useId:R0,unstable_isNewReconciler:!1},h1={readContext:mi,useCallback:b0,useContext:mi,useEffect:Nd,useImperativeHandle:T0,useInsertionEffect:E0,useLayoutEffect:M0,useMemo:A0,useReducer:Id,useRef:x0,useState:function(){return Id(el)},useDebugValue:Ud,useDeferredValue:function(r){var o=gi();return cn===null?o.memoizedState=r:C0(o,cn.memoizedState,r)},useTransition:function(){var r=Id(el)[0],o=gi().memoizedState;return[r,o]},useMutableSource:d0,useSyncExternalStore:h0,useId:R0,unstable_isNewReconciler:!1};function Pi(r,o){if(r&&r.defaultProps){o=Z({},o),r=r.defaultProps;for(var c in r)o[c]===void 0&&(o[c]=r[c]);return o}return o}function Fd(r,o,c,h){o=r.memoizedState,c=c(h,o),c=c==null?o:Z({},o,c),r.memoizedState=c,r.lanes===0&&(r.updateQueue.baseState=c)}var Bc={isMounted:function(r){return(r=r._reactInternals)?Xi(r)===r:!1},enqueueSetState:function(r,o,c){r=r._reactInternals;var h=zn(),v=rs(r),x=pr(h,v);x.payload=o,c!=null&&(x.callback=c),o=es(r,x,v),o!==null&&(Ii(o,r,v,h),Dc(o,r,v))},enqueueReplaceState:function(r,o,c){r=r._reactInternals;var h=zn(),v=rs(r),x=pr(h,v);x.tag=1,x.payload=o,c!=null&&(x.callback=c),o=es(r,x,v),o!==null&&(Ii(o,r,v,h),Dc(o,r,v))},enqueueForceUpdate:function(r,o){r=r._reactInternals;var c=zn(),h=rs(r),v=pr(c,h);v.tag=2,o!=null&&(v.callback=o),o=es(r,v,h),o!==null&&(Ii(o,r,h,c),Dc(o,r,h))}};function I0(r,o,c,h,v,x,A){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,x,A):o.prototype&&o.prototype.isPureReactComponent?!Va(c,h)||!Va(v,x):!0}function N0(r,o,c){var h=!1,v=Zr,x=o.contextType;return typeof x=="object"&&x!==null?x=mi(x):(v=jn(o)?As:An.current,h=o.contextTypes,x=(h=h!=null)?wo(r,v):Zr),o=new o(c,x),r.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Bc,r.stateNode=o,o._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=v,r.__reactInternalMemoizedMaskedChildContext=x),o}function U0(r,o,c,h){r=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(c,h),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(c,h),o.state!==r&&Bc.enqueueReplaceState(o,o.state,null)}function Od(r,o,c,h){var v=r.stateNode;v.props=c,v.state=r.memoizedState,v.refs={},Md(r);var x=o.contextType;typeof x=="object"&&x!==null?v.context=mi(x):(x=jn(o)?As:An.current,v.context=wo(r,x)),v.state=r.memoizedState,x=o.getDerivedStateFromProps,typeof x=="function"&&(Fd(r,o,x,c),v.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof v.getSnapshotBeforeUpdate=="function"||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(o=v.state,typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount(),o!==v.state&&Bc.enqueueReplaceState(v,v.state,null),Lc(r,c,v,h),v.state=r.memoizedState),typeof v.componentDidMount=="function"&&(r.flags|=4194308)}function Lo(r,o){try{var c="",h=o;do c+=de(h),h=h.return;while(h);var v=c}catch(x){v=`
Error generating stack: `+x.message+`
`+x.stack}return{value:r,source:o,stack:v,digest:null}}function kd(r,o,c){return{value:r,source:null,stack:c??null,digest:o??null}}function Bd(r,o){try{console.error(o.value)}catch(c){setTimeout(function(){throw c})}}var p1=typeof WeakMap=="function"?WeakMap:Map;function F0(r,o,c){c=pr(-1,c),c.tag=3,c.payload={element:null};var h=o.value;return c.callback=function(){Xc||(Xc=!0,eh=h),Bd(r,o)},c}function O0(r,o,c){c=pr(-1,c),c.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var v=o.value;c.payload=function(){return h(v)},c.callback=function(){Bd(r,o)}}var x=r.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(c.callback=function(){Bd(r,o),typeof h!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})}),c}function k0(r,o,c){var h=r.pingCache;if(h===null){h=r.pingCache=new p1;var v=new Set;h.set(o,v)}else v=h.get(o),v===void 0&&(v=new Set,h.set(o,v));v.has(c)||(v.add(c),r=C1.bind(null,r,o,c),o.then(r,r))}function B0(r){do{var o;if((o=r.tag===13)&&(o=r.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return r;r=r.return}while(r!==null);return null}function z0(r,o,c,h,v){return(r.mode&1)===0?(r===o?r.flags|=65536:(r.flags|=128,c.flags|=131072,c.flags&=-52805,c.tag===1&&(c.alternate===null?c.tag=17:(o=pr(-1,1),o.tag=2,es(c,o,1))),c.lanes|=1),r):(r.flags|=65536,r.lanes=v,r)}var m1=b.ReactCurrentOwner,Xn=!1;function Bn(r,o,c,h){o.child=r===null?o0(o,null,c,h):Co(o,r.child,c,h)}function V0(r,o,c,h,v){c=c.render;var x=o.ref;return Po(o,v),h=Pd(r,o,c,h,x,v),c=Dd(),r!==null&&!Xn?(o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~v,mr(r,o,v)):(jt&&c&&hd(o),o.flags|=1,Bn(r,o,h,v),o.child)}function H0(r,o,c,h,v){if(r===null){var x=c.type;return typeof x=="function"&&!ah(x)&&x.defaultProps===void 0&&c.compare===null&&c.defaultProps===void 0?(o.tag=15,o.type=x,G0(r,o,x,h,v)):(r=Qc(c.type,null,h,o,o.mode,v),r.ref=o.ref,r.return=o,o.child=r)}if(x=r.child,(r.lanes&v)===0){var A=x.memoizedProps;if(c=c.compare,c=c!==null?c:Va,c(A,h)&&r.ref===o.ref)return mr(r,o,v)}return o.flags|=1,r=os(x,h),r.ref=o.ref,r.return=o,o.child=r}function G0(r,o,c,h,v){if(r!==null){var x=r.memoizedProps;if(Va(x,h)&&r.ref===o.ref)if(Xn=!1,o.pendingProps=h=x,(r.lanes&v)!==0)(r.flags&131072)!==0&&(Xn=!0);else return o.lanes=r.lanes,mr(r,o,v)}return zd(r,o,c,h,v)}function W0(r,o,c){var h=o.pendingProps,v=h.children,x=r!==null?r.memoizedState:null;if(h.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(No,ai),ai|=c;else{if((c&1073741824)===0)return r=x!==null?x.baseLanes|c:c,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:r,cachePool:null,transitions:null},o.updateQueue=null,Bt(No,ai),ai|=r,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=x!==null?x.baseLanes:c,Bt(No,ai),ai|=h}else x!==null?(h=x.baseLanes|c,o.memoizedState=null):h=c,Bt(No,ai),ai|=h;return Bn(r,o,v,c),o.child}function j0(r,o){var c=o.ref;(r===null&&c!==null||r!==null&&r.ref!==c)&&(o.flags|=512,o.flags|=2097152)}function zd(r,o,c,h,v){var x=jn(c)?As:An.current;return x=wo(o,x),Po(o,v),c=Pd(r,o,c,h,x,v),h=Dd(),r!==null&&!Xn?(o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~v,mr(r,o,v)):(jt&&h&&hd(o),o.flags|=1,Bn(r,o,c,v),o.child)}function X0(r,o,c,h,v){if(jn(c)){var x=!0;Mc(o)}else x=!1;if(Po(o,v),o.stateNode===null)Vc(r,o),N0(o,c,h),Od(o,c,h,v),h=!0;else if(r===null){var A=o.stateNode,z=o.memoizedProps;A.props=z;var $=A.context,ce=c.contextType;typeof ce=="object"&&ce!==null?ce=mi(ce):(ce=jn(c)?As:An.current,ce=wo(o,ce));var Ee=c.getDerivedStateFromProps,Te=typeof Ee=="function"||typeof A.getSnapshotBeforeUpdate=="function";Te||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(z!==h||$!==ce)&&U0(o,A,h,ce),Jr=!1;var Se=o.memoizedState;A.state=Se,Lc(o,h,A,v),$=o.memoizedState,z!==h||Se!==$||Wn.current||Jr?(typeof Ee=="function"&&(Fd(o,c,Ee,h),$=o.memoizedState),(z=Jr||I0(o,c,z,h,Se,$,ce))?(Te||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(o.flags|=4194308)):(typeof A.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=h,o.memoizedState=$),A.props=h,A.state=$,A.context=ce,h=z):(typeof A.componentDidMount=="function"&&(o.flags|=4194308),h=!1)}else{A=o.stateNode,l0(r,o),z=o.memoizedProps,ce=o.type===o.elementType?z:Pi(o.type,z),A.props=ce,Te=o.pendingProps,Se=A.context,$=c.contextType,typeof $=="object"&&$!==null?$=mi($):($=jn(c)?As:An.current,$=wo(o,$));var Be=c.getDerivedStateFromProps;(Ee=typeof Be=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(z!==Te||Se!==$)&&U0(o,A,h,$),Jr=!1,Se=o.memoizedState,A.state=Se,Lc(o,h,A,v);var je=o.memoizedState;z!==Te||Se!==je||Wn.current||Jr?(typeof Be=="function"&&(Fd(o,c,Be,h),je=o.memoizedState),(ce=Jr||I0(o,c,ce,h,Se,je,$)||!1)?(Ee||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(h,je,$),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(h,je,$)),typeof A.componentDidUpdate=="function"&&(o.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof A.componentDidUpdate!="function"||z===r.memoizedProps&&Se===r.memoizedState||(o.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||z===r.memoizedProps&&Se===r.memoizedState||(o.flags|=1024),o.memoizedProps=h,o.memoizedState=je),A.props=h,A.state=je,A.context=$,h=ce):(typeof A.componentDidUpdate!="function"||z===r.memoizedProps&&Se===r.memoizedState||(o.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||z===r.memoizedProps&&Se===r.memoizedState||(o.flags|=1024),h=!1)}return Vd(r,o,c,h,x,v)}function Vd(r,o,c,h,v,x){j0(r,o);var A=(o.flags&128)!==0;if(!h&&!A)return v&&Zv(o,c,!1),mr(r,o,x);h=o.stateNode,m1.current=o;var z=A&&typeof c.getDerivedStateFromError!="function"?null:h.render();return o.flags|=1,r!==null&&A?(o.child=Co(o,r.child,null,x),o.child=Co(o,null,z,x)):Bn(r,o,z,x),o.memoizedState=h.state,v&&Zv(o,c,!0),o.child}function $0(r){var o=r.stateNode;o.pendingContext?qv(r,o.pendingContext,o.pendingContext!==o.context):o.context&&qv(r,o.context,!1),wd(r,o.containerInfo)}function Y0(r,o,c,h,v){return Ao(),vd(v),o.flags|=256,Bn(r,o,c,h),o.child}var Hd={dehydrated:null,treeContext:null,retryLane:0};function Gd(r){return{baseLanes:r,cachePool:null,transitions:null}}function q0(r,o,c){var h=o.pendingProps,v=Xt.current,x=!1,A=(o.flags&128)!==0,z;if((z=A)||(z=r!==null&&r.memoizedState===null?!1:(v&2)!==0),z?(x=!0,o.flags&=-129):(r===null||r.memoizedState!==null)&&(v|=1),Bt(Xt,v&1),r===null)return gd(o),r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((o.mode&1)===0?o.lanes=1:r.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(A=h.children,r=h.fallback,x?(h=o.mode,x=o.child,A={mode:"hidden",children:A},(h&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=A):x=Jc(A,h,0,null),r=Os(r,h,c,null),x.return=o,r.return=o,x.sibling=r,o.child=x,o.child.memoizedState=Gd(c),o.memoizedState=Hd,r):Wd(o,A));if(v=r.memoizedState,v!==null&&(z=v.dehydrated,z!==null))return g1(r,o,A,h,z,v,c);if(x){x=h.fallback,A=o.mode,v=r.child,z=v.sibling;var $={mode:"hidden",children:h.children};return(A&1)===0&&o.child!==v?(h=o.child,h.childLanes=0,h.pendingProps=$,o.deletions=null):(h=os(v,$),h.subtreeFlags=v.subtreeFlags&14680064),z!==null?x=os(z,x):(x=Os(x,A,c,null),x.flags|=2),x.return=o,h.return=o,h.sibling=x,o.child=h,h=x,x=o.child,A=r.child.memoizedState,A=A===null?Gd(c):{baseLanes:A.baseLanes|c,cachePool:null,transitions:A.transitions},x.memoizedState=A,x.childLanes=r.childLanes&~c,o.memoizedState=Hd,h}return x=r.child,r=x.sibling,h=os(x,{mode:"visible",children:h.children}),(o.mode&1)===0&&(h.lanes=c),h.return=o,h.sibling=null,r!==null&&(c=o.deletions,c===null?(o.deletions=[r],o.flags|=16):c.push(r)),o.child=h,o.memoizedState=null,h}function Wd(r,o){return o=Jc({mode:"visible",children:o},r.mode,0,null),o.return=r,r.child=o}function zc(r,o,c,h){return h!==null&&vd(h),Co(o,r.child,null,c),r=Wd(o,o.pendingProps.children),r.flags|=2,o.memoizedState=null,r}function g1(r,o,c,h,v,x,A){if(c)return o.flags&256?(o.flags&=-257,h=kd(Error(t(422))),zc(r,o,A,h)):o.memoizedState!==null?(o.child=r.child,o.flags|=128,null):(x=h.fallback,v=o.mode,h=Jc({mode:"visible",children:h.children},v,0,null),x=Os(x,v,A,null),x.flags|=2,h.return=o,x.return=o,h.sibling=x,o.child=h,(o.mode&1)!==0&&Co(o,r.child,null,A),o.child.memoizedState=Gd(A),o.memoizedState=Hd,x);if((o.mode&1)===0)return zc(r,o,A,null);if(v.data==="$!"){if(h=v.nextSibling&&v.nextSibling.dataset,h)var z=h.dgst;return h=z,x=Error(t(419)),h=kd(x,h,void 0),zc(r,o,A,h)}if(z=(A&r.childLanes)!==0,Xn||z){if(h=gn,h!==null){switch(A&-A){case 4:v=2;break;case 16:v=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:v=32;break;case 536870912:v=268435456;break;default:v=0}v=(v&(h.suspendedLanes|A))!==0?0:v,v!==0&&v!==x.retryLane&&(x.retryLane=v,hr(r,v),Ii(h,r,v,-1))}return oh(),h=kd(Error(t(421))),zc(r,o,A,h)}return v.data==="$?"?(o.flags|=128,o.child=r.child,o=R1.bind(null,r),v._reactRetry=o,null):(r=x.treeContext,oi=qr(v.nextSibling),si=o,jt=!0,Ri=null,r!==null&&(hi[pi++]=fr,hi[pi++]=dr,hi[pi++]=Cs,fr=r.id,dr=r.overflow,Cs=o),o=Wd(o,h.children),o.flags|=4096,o)}function K0(r,o,c){r.lanes|=o;var h=r.alternate;h!==null&&(h.lanes|=o),Sd(r.return,o,c)}function jd(r,o,c,h,v){var x=r.memoizedState;x===null?r.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:h,tail:c,tailMode:v}:(x.isBackwards=o,x.rendering=null,x.renderingStartTime=0,x.last=h,x.tail=c,x.tailMode=v)}function Z0(r,o,c){var h=o.pendingProps,v=h.revealOrder,x=h.tail;if(Bn(r,o,h.children,c),h=Xt.current,(h&2)!==0)h=h&1|2,o.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=o.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&K0(r,c,o);else if(r.tag===19)K0(r,c,o);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===o)break e;for(;r.sibling===null;){if(r.return===null||r.return===o)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(Bt(Xt,h),(o.mode&1)===0)o.memoizedState=null;else switch(v){case"forwards":for(c=o.child,v=null;c!==null;)r=c.alternate,r!==null&&Ic(r)===null&&(v=c),c=c.sibling;c=v,c===null?(v=o.child,o.child=null):(v=c.sibling,c.sibling=null),jd(o,!1,v,c,x);break;case"backwards":for(c=null,v=o.child,o.child=null;v!==null;){if(r=v.alternate,r!==null&&Ic(r)===null){o.child=v;break}r=v.sibling,v.sibling=c,c=v,v=r}jd(o,!0,c,null,x);break;case"together":jd(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function Vc(r,o){(o.mode&1)===0&&r!==null&&(r.alternate=null,o.alternate=null,o.flags|=2)}function mr(r,o,c){if(r!==null&&(o.dependencies=r.dependencies),Is|=o.lanes,(c&o.childLanes)===0)return null;if(r!==null&&o.child!==r.child)throw Error(t(153));if(o.child!==null){for(r=o.child,c=os(r,r.pendingProps),o.child=c,c.return=o;r.sibling!==null;)r=r.sibling,c=c.sibling=os(r,r.pendingProps),c.return=o;c.sibling=null}return o.child}function v1(r,o,c){switch(o.tag){case 3:$0(o),Ao();break;case 5:f0(o);break;case 1:jn(o.type)&&Mc(o);break;case 4:wd(o,o.stateNode.containerInfo);break;case 10:var h=o.type._context,v=o.memoizedProps.value;Bt(Rc,h._currentValue),h._currentValue=v;break;case 13:if(h=o.memoizedState,h!==null)return h.dehydrated!==null?(Bt(Xt,Xt.current&1),o.flags|=128,null):(c&o.child.childLanes)!==0?q0(r,o,c):(Bt(Xt,Xt.current&1),r=mr(r,o,c),r!==null?r.sibling:null);Bt(Xt,Xt.current&1);break;case 19:if(h=(c&o.childLanes)!==0,(r.flags&128)!==0){if(h)return Z0(r,o,c);o.flags|=128}if(v=o.memoizedState,v!==null&&(v.rendering=null,v.tail=null,v.lastEffect=null),Bt(Xt,Xt.current),h)break;return null;case 22:case 23:return o.lanes=0,W0(r,o,c)}return mr(r,o,c)}var Q0,Xd,J0,ey;Q0=function(r,o){for(var c=o.child;c!==null;){if(c.tag===5||c.tag===6)r.appendChild(c.stateNode);else if(c.tag!==4&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===o)break;for(;c.sibling===null;){if(c.return===null||c.return===o)return;c=c.return}c.sibling.return=c.return,c=c.sibling}},Xd=function(){},J0=function(r,o,c,h){var v=r.memoizedProps;if(v!==h){r=o.stateNode,Ds(qi.current);var x=null;switch(c){case"input":v=V(r,v),h=V(r,h),x=[];break;case"select":v=Z({},v,{value:void 0}),h=Z({},h,{value:void 0}),x=[];break;case"textarea":v=R(r,v),h=R(r,h),x=[];break;default:typeof v.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=xc)}vt(c,h);var A;c=null;for(ce in v)if(!h.hasOwnProperty(ce)&&v.hasOwnProperty(ce)&&v[ce]!=null)if(ce==="style"){var z=v[ce];for(A in z)z.hasOwnProperty(A)&&(c||(c={}),c[A]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(s.hasOwnProperty(ce)?x||(x=[]):(x=x||[]).push(ce,null));for(ce in h){var $=h[ce];if(z=v!=null?v[ce]:void 0,h.hasOwnProperty(ce)&&$!==z&&($!=null||z!=null))if(ce==="style")if(z){for(A in z)!z.hasOwnProperty(A)||$&&$.hasOwnProperty(A)||(c||(c={}),c[A]="");for(A in $)$.hasOwnProperty(A)&&z[A]!==$[A]&&(c||(c={}),c[A]=$[A])}else c||(x||(x=[]),x.push(ce,c)),c=$;else ce==="dangerouslySetInnerHTML"?($=$?$.__html:void 0,z=z?z.__html:void 0,$!=null&&z!==$&&(x=x||[]).push(ce,$)):ce==="children"?typeof $!="string"&&typeof $!="number"||(x=x||[]).push(ce,""+$):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(s.hasOwnProperty(ce)?($!=null&&ce==="onScroll"&&Vt("scroll",r),x||z===$||(x=[])):(x=x||[]).push(ce,$))}c&&(x=x||[]).push("style",c);var ce=x;(o.updateQueue=ce)&&(o.flags|=4)}},ey=function(r,o,c,h){c!==h&&(o.flags|=4)};function nl(r,o){if(!jt)switch(r.tailMode){case"hidden":o=r.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?r.tail=null:c.sibling=null;break;case"collapsed":c=r.tail;for(var h=null;c!==null;)c.alternate!==null&&(h=c),c=c.sibling;h===null?o||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function Rn(r){var o=r.alternate!==null&&r.alternate.child===r.child,c=0,h=0;if(o)for(var v=r.child;v!==null;)c|=v.lanes|v.childLanes,h|=v.subtreeFlags&14680064,h|=v.flags&14680064,v.return=r,v=v.sibling;else for(v=r.child;v!==null;)c|=v.lanes|v.childLanes,h|=v.subtreeFlags,h|=v.flags,v.return=r,v=v.sibling;return r.subtreeFlags|=h,r.childLanes=c,o}function y1(r,o,c){var h=o.pendingProps;switch(pd(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rn(o),null;case 1:return jn(o.type)&&Ec(),Rn(o),null;case 3:return h=o.stateNode,Do(),Ht(Wn),Ht(An),Ad(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(Ac(o)?o.flags|=4:r===null||r.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,Ri!==null&&(ih(Ri),Ri=null))),Xd(r,o),Rn(o),null;case 5:Td(o);var v=Ds(Za.current);if(c=o.type,r!==null&&o.stateNode!=null)J0(r,o,c,h,v),r.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!h){if(o.stateNode===null)throw Error(t(166));return Rn(o),null}if(r=Ds(qi.current),Ac(o)){h=o.stateNode,c=o.type;var x=o.memoizedProps;switch(h[Yi]=o,h[Xa]=x,r=(o.mode&1)!==0,c){case"dialog":Vt("cancel",h),Vt("close",h);break;case"iframe":case"object":case"embed":Vt("load",h);break;case"video":case"audio":for(v=0;v<Ga.length;v++)Vt(Ga[v],h);break;case"source":Vt("error",h);break;case"img":case"image":case"link":Vt("error",h),Vt("load",h);break;case"details":Vt("toggle",h);break;case"input":xt(h,x),Vt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!x.multiple},Vt("invalid",h);break;case"textarea":re(h,x),Vt("invalid",h)}vt(c,x),v=null;for(var A in x)if(x.hasOwnProperty(A)){var z=x[A];A==="children"?typeof z=="string"?h.textContent!==z&&(x.suppressHydrationWarning!==!0&&_c(h.textContent,z,r),v=["children",z]):typeof z=="number"&&h.textContent!==""+z&&(x.suppressHydrationWarning!==!0&&_c(h.textContent,z,r),v=["children",""+z]):s.hasOwnProperty(A)&&z!=null&&A==="onScroll"&&Vt("scroll",h)}switch(c){case"input":dt(h),Ke(h,x,!0);break;case"textarea":dt(h),ye(h);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(h.onclick=xc)}h=v,o.updateQueue=h,h!==null&&(o.flags|=4)}else{A=v.nodeType===9?v:v.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=me(c)),r==="http://www.w3.org/1999/xhtml"?c==="script"?(r=A.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=A.createElement(c,{is:h.is}):(r=A.createElement(c),c==="select"&&(A=r,h.multiple?A.multiple=!0:h.size&&(A.size=h.size))):r=A.createElementNS(r,c),r[Yi]=o,r[Xa]=h,Q0(r,o,!1,!1),o.stateNode=r;e:{switch(A=ct(c,h),c){case"dialog":Vt("cancel",r),Vt("close",r),v=h;break;case"iframe":case"object":case"embed":Vt("load",r),v=h;break;case"video":case"audio":for(v=0;v<Ga.length;v++)Vt(Ga[v],r);v=h;break;case"source":Vt("error",r),v=h;break;case"img":case"image":case"link":Vt("error",r),Vt("load",r),v=h;break;case"details":Vt("toggle",r),v=h;break;case"input":xt(r,h),v=V(r,h),Vt("invalid",r);break;case"option":v=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},v=Z({},h,{value:void 0}),Vt("invalid",r);break;case"textarea":re(r,h),v=R(r,h),Vt("invalid",r);break;default:v=h}vt(c,v),z=v;for(x in z)if(z.hasOwnProperty(x)){var $=z[x];x==="style"?Je(r,$):x==="dangerouslySetInnerHTML"?($=$?$.__html:void 0,$!=null&&Fe(r,$)):x==="children"?typeof $=="string"?(c!=="textarea"||$!=="")&&it(r,$):typeof $=="number"&&it(r,""+$):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(s.hasOwnProperty(x)?$!=null&&x==="onScroll"&&Vt("scroll",r):$!=null&&w(r,x,$,A))}switch(c){case"input":dt(r),Ke(r,h,!1);break;case"textarea":dt(r),ye(r);break;case"option":h.value!=null&&r.setAttribute("value",""+xe(h.value));break;case"select":r.multiple=!!h.multiple,x=h.value,x!=null?U(r,!!h.multiple,x,!1):h.defaultValue!=null&&U(r,!!h.multiple,h.defaultValue,!0);break;default:typeof v.onClick=="function"&&(r.onclick=xc)}switch(c){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Rn(o),null;case 6:if(r&&o.stateNode!=null)ey(r,o,r.memoizedProps,h);else{if(typeof h!="string"&&o.stateNode===null)throw Error(t(166));if(c=Ds(Za.current),Ds(qi.current),Ac(o)){if(h=o.stateNode,c=o.memoizedProps,h[Yi]=o,(x=h.nodeValue!==c)&&(r=si,r!==null))switch(r.tag){case 3:_c(h.nodeValue,c,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&_c(h.nodeValue,c,(r.mode&1)!==0)}x&&(o.flags|=4)}else h=(c.nodeType===9?c:c.ownerDocument).createTextNode(h),h[Yi]=o,o.stateNode=h}return Rn(o),null;case 13:if(Ht(Xt),h=o.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(jt&&oi!==null&&(o.mode&1)!==0&&(o.flags&128)===0)i0(),Ao(),o.flags|=98560,x=!1;else if(x=Ac(o),h!==null&&h.dehydrated!==null){if(r===null){if(!x)throw Error(t(318));if(x=o.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Yi]=o}else Ao(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;Rn(o),x=!1}else Ri!==null&&(ih(Ri),Ri=null),x=!0;if(!x)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=c,o):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(o.child.flags|=8192,(o.mode&1)!==0&&(r===null||(Xt.current&1)!==0?un===0&&(un=3):oh())),o.updateQueue!==null&&(o.flags|=4),Rn(o),null);case 4:return Do(),Xd(r,o),r===null&&Wa(o.stateNode.containerInfo),Rn(o),null;case 10:return xd(o.type._context),Rn(o),null;case 17:return jn(o.type)&&Ec(),Rn(o),null;case 19:if(Ht(Xt),x=o.memoizedState,x===null)return Rn(o),null;if(h=(o.flags&128)!==0,A=x.rendering,A===null)if(h)nl(x,!1);else{if(un!==0||r!==null&&(r.flags&128)!==0)for(r=o.child;r!==null;){if(A=Ic(r),A!==null){for(o.flags|=128,nl(x,!1),h=A.updateQueue,h!==null&&(o.updateQueue=h,o.flags|=4),o.subtreeFlags=0,h=c,c=o.child;c!==null;)x=c,r=h,x.flags&=14680066,A=x.alternate,A===null?(x.childLanes=0,x.lanes=r,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=A.childLanes,x.lanes=A.lanes,x.child=A.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=A.memoizedProps,x.memoizedState=A.memoizedState,x.updateQueue=A.updateQueue,x.type=A.type,r=A.dependencies,x.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),c=c.sibling;return Bt(Xt,Xt.current&1|2),o.child}r=r.sibling}x.tail!==null&&oe()>Uo&&(o.flags|=128,h=!0,nl(x,!1),o.lanes=4194304)}else{if(!h)if(r=Ic(A),r!==null){if(o.flags|=128,h=!0,c=r.updateQueue,c!==null&&(o.updateQueue=c,o.flags|=4),nl(x,!0),x.tail===null&&x.tailMode==="hidden"&&!A.alternate&&!jt)return Rn(o),null}else 2*oe()-x.renderingStartTime>Uo&&c!==1073741824&&(o.flags|=128,h=!0,nl(x,!1),o.lanes=4194304);x.isBackwards?(A.sibling=o.child,o.child=A):(c=x.last,c!==null?c.sibling=A:o.child=A,x.last=A)}return x.tail!==null?(o=x.tail,x.rendering=o,x.tail=o.sibling,x.renderingStartTime=oe(),o.sibling=null,c=Xt.current,Bt(Xt,h?c&1|2:c&1),o):(Rn(o),null);case 22:case 23:return sh(),h=o.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(o.flags|=8192),h&&(o.mode&1)!==0?(ai&1073741824)!==0&&(Rn(o),o.subtreeFlags&6&&(o.flags|=8192)):Rn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function _1(r,o){switch(pd(o),o.tag){case 1:return jn(o.type)&&Ec(),r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 3:return Do(),Ht(Wn),Ht(An),Ad(),r=o.flags,(r&65536)!==0&&(r&128)===0?(o.flags=r&-65537|128,o):null;case 5:return Td(o),null;case 13:if(Ht(Xt),r=o.memoizedState,r!==null&&r.dehydrated!==null){if(o.alternate===null)throw Error(t(340));Ao()}return r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 19:return Ht(Xt),null;case 4:return Do(),null;case 10:return xd(o.type._context),null;case 22:case 23:return sh(),null;case 24:return null;default:return null}}var Hc=!1,Pn=!1,x1=typeof WeakSet=="function"?WeakSet:Set,ze=null;function Io(r,o){var c=r.ref;if(c!==null)if(typeof c=="function")try{c(null)}catch(h){Qt(r,o,h)}else c.current=null}function $d(r,o,c){try{c()}catch(h){Qt(r,o,h)}}var ty=!1;function S1(r,o){if(sd=lc,r=Iv(),Zf(r)){if("selectionStart"in r)var c={start:r.selectionStart,end:r.selectionEnd};else e:{c=(c=r.ownerDocument)&&c.defaultView||window;var h=c.getSelection&&c.getSelection();if(h&&h.rangeCount!==0){c=h.anchorNode;var v=h.anchorOffset,x=h.focusNode;h=h.focusOffset;try{c.nodeType,x.nodeType}catch{c=null;break e}var A=0,z=-1,$=-1,ce=0,Ee=0,Te=r,Se=null;t:for(;;){for(var Be;Te!==c||v!==0&&Te.nodeType!==3||(z=A+v),Te!==x||h!==0&&Te.nodeType!==3||($=A+h),Te.nodeType===3&&(A+=Te.nodeValue.length),(Be=Te.firstChild)!==null;)Se=Te,Te=Be;for(;;){if(Te===r)break t;if(Se===c&&++ce===v&&(z=A),Se===x&&++Ee===h&&($=A),(Be=Te.nextSibling)!==null)break;Te=Se,Se=Te.parentNode}Te=Be}c=z===-1||$===-1?null:{start:z,end:$}}else c=null}c=c||{start:0,end:0}}else c=null;for(od={focusedElem:r,selectionRange:c},lc=!1,ze=o;ze!==null;)if(o=ze,r=o.child,(o.subtreeFlags&1028)!==0&&r!==null)r.return=o,ze=r;else for(;ze!==null;){o=ze;try{var je=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Ye=je.memoizedProps,en=je.memoizedState,se=o.stateNode,q=se.getSnapshotBeforeUpdate(o.elementType===o.type?Ye:Pi(o.type,Ye),en);se.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var le=o.stateNode.containerInfo;le.nodeType===1?le.textContent="":le.nodeType===9&&le.documentElement&&le.removeChild(le.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){Qt(o,o.return,Ae)}if(r=o.sibling,r!==null){r.return=o.return,ze=r;break}ze=o.return}return je=ty,ty=!1,je}function il(r,o,c){var h=o.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var v=h=h.next;do{if((v.tag&r)===r){var x=v.destroy;v.destroy=void 0,x!==void 0&&$d(o,c,x)}v=v.next}while(v!==h)}}function Gc(r,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var c=o=o.next;do{if((c.tag&r)===r){var h=c.create;c.destroy=h()}c=c.next}while(c!==o)}}function Yd(r){var o=r.ref;if(o!==null){var c=r.stateNode;switch(r.tag){case 5:r=c;break;default:r=c}typeof o=="function"?o(r):o.current=r}}function ny(r){var o=r.alternate;o!==null&&(r.alternate=null,ny(o)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(o=r.stateNode,o!==null&&(delete o[Yi],delete o[Xa],delete o[ud],delete o[i1],delete o[r1])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function iy(r){return r.tag===5||r.tag===3||r.tag===4}function ry(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||iy(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function qd(r,o,c){var h=r.tag;if(h===5||h===6)r=r.stateNode,o?c.nodeType===8?c.parentNode.insertBefore(r,o):c.insertBefore(r,o):(c.nodeType===8?(o=c.parentNode,o.insertBefore(r,c)):(o=c,o.appendChild(r)),c=c._reactRootContainer,c!=null||o.onclick!==null||(o.onclick=xc));else if(h!==4&&(r=r.child,r!==null))for(qd(r,o,c),r=r.sibling;r!==null;)qd(r,o,c),r=r.sibling}function Kd(r,o,c){var h=r.tag;if(h===5||h===6)r=r.stateNode,o?c.insertBefore(r,o):c.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(Kd(r,o,c),r=r.sibling;r!==null;)Kd(r,o,c),r=r.sibling}var En=null,Di=!1;function ts(r,o,c){for(c=c.child;c!==null;)sy(r,o,c),c=c.sibling}function sy(r,o,c){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(nt,c)}catch{}switch(c.tag){case 5:Pn||Io(c,o);case 6:var h=En,v=Di;En=null,ts(r,o,c),En=h,Di=v,En!==null&&(Di?(r=En,c=c.stateNode,r.nodeType===8?r.parentNode.removeChild(c):r.removeChild(c)):En.removeChild(c.stateNode));break;case 18:En!==null&&(Di?(r=En,c=c.stateNode,r.nodeType===8?cd(r.parentNode,c):r.nodeType===1&&cd(r,c),Ua(r)):cd(En,c.stateNode));break;case 4:h=En,v=Di,En=c.stateNode.containerInfo,Di=!0,ts(r,o,c),En=h,Di=v;break;case 0:case 11:case 14:case 15:if(!Pn&&(h=c.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){v=h=h.next;do{var x=v,A=x.destroy;x=x.tag,A!==void 0&&((x&2)!==0||(x&4)!==0)&&$d(c,o,A),v=v.next}while(v!==h)}ts(r,o,c);break;case 1:if(!Pn&&(Io(c,o),h=c.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=c.memoizedProps,h.state=c.memoizedState,h.componentWillUnmount()}catch(z){Qt(c,o,z)}ts(r,o,c);break;case 21:ts(r,o,c);break;case 22:c.mode&1?(Pn=(h=Pn)||c.memoizedState!==null,ts(r,o,c),Pn=h):ts(r,o,c);break;default:ts(r,o,c)}}function oy(r){var o=r.updateQueue;if(o!==null){r.updateQueue=null;var c=r.stateNode;c===null&&(c=r.stateNode=new x1),o.forEach(function(h){var v=P1.bind(null,r,h);c.has(h)||(c.add(h),h.then(v,v))})}}function Li(r,o){var c=o.deletions;if(c!==null)for(var h=0;h<c.length;h++){var v=c[h];try{var x=r,A=o,z=A;e:for(;z!==null;){switch(z.tag){case 5:En=z.stateNode,Di=!1;break e;case 3:En=z.stateNode.containerInfo,Di=!0;break e;case 4:En=z.stateNode.containerInfo,Di=!0;break e}z=z.return}if(En===null)throw Error(t(160));sy(x,A,v),En=null,Di=!1;var $=v.alternate;$!==null&&($.return=null),v.return=null}catch(ce){Qt(v,o,ce)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)ay(o,r),o=o.sibling}function ay(r,o){var c=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Li(o,r),Zi(r),h&4){try{il(3,r,r.return),Gc(3,r)}catch(Ye){Qt(r,r.return,Ye)}try{il(5,r,r.return)}catch(Ye){Qt(r,r.return,Ye)}}break;case 1:Li(o,r),Zi(r),h&512&&c!==null&&Io(c,c.return);break;case 5:if(Li(o,r),Zi(r),h&512&&c!==null&&Io(c,c.return),r.flags&32){var v=r.stateNode;try{it(v,"")}catch(Ye){Qt(r,r.return,Ye)}}if(h&4&&(v=r.stateNode,v!=null)){var x=r.memoizedProps,A=c!==null?c.memoizedProps:x,z=r.type,$=r.updateQueue;if(r.updateQueue=null,$!==null)try{z==="input"&&x.type==="radio"&&x.name!=null&&st(v,x),ct(z,A);var ce=ct(z,x);for(A=0;A<$.length;A+=2){var Ee=$[A],Te=$[A+1];Ee==="style"?Je(v,Te):Ee==="dangerouslySetInnerHTML"?Fe(v,Te):Ee==="children"?it(v,Te):w(v,Ee,Te,ce)}switch(z){case"input":ft(v,x);break;case"textarea":ge(v,x);break;case"select":var Se=v._wrapperState.wasMultiple;v._wrapperState.wasMultiple=!!x.multiple;var Be=x.value;Be!=null?U(v,!!x.multiple,Be,!1):Se!==!!x.multiple&&(x.defaultValue!=null?U(v,!!x.multiple,x.defaultValue,!0):U(v,!!x.multiple,x.multiple?[]:"",!1))}v[Xa]=x}catch(Ye){Qt(r,r.return,Ye)}}break;case 6:if(Li(o,r),Zi(r),h&4){if(r.stateNode===null)throw Error(t(162));v=r.stateNode,x=r.memoizedProps;try{v.nodeValue=x}catch(Ye){Qt(r,r.return,Ye)}}break;case 3:if(Li(o,r),Zi(r),h&4&&c!==null&&c.memoizedState.isDehydrated)try{Ua(o.containerInfo)}catch(Ye){Qt(r,r.return,Ye)}break;case 4:Li(o,r),Zi(r);break;case 13:Li(o,r),Zi(r),v=r.child,v.flags&8192&&(x=v.memoizedState!==null,v.stateNode.isHidden=x,!x||v.alternate!==null&&v.alternate.memoizedState!==null||(Jd=oe())),h&4&&oy(r);break;case 22:if(Ee=c!==null&&c.memoizedState!==null,r.mode&1?(Pn=(ce=Pn)||Ee,Li(o,r),Pn=ce):Li(o,r),Zi(r),h&8192){if(ce=r.memoizedState!==null,(r.stateNode.isHidden=ce)&&!Ee&&(r.mode&1)!==0)for(ze=r,Ee=r.child;Ee!==null;){for(Te=ze=Ee;ze!==null;){switch(Se=ze,Be=Se.child,Se.tag){case 0:case 11:case 14:case 15:il(4,Se,Se.return);break;case 1:Io(Se,Se.return);var je=Se.stateNode;if(typeof je.componentWillUnmount=="function"){h=Se,c=Se.return;try{o=h,je.props=o.memoizedProps,je.state=o.memoizedState,je.componentWillUnmount()}catch(Ye){Qt(h,c,Ye)}}break;case 5:Io(Se,Se.return);break;case 22:if(Se.memoizedState!==null){uy(Te);continue}}Be!==null?(Be.return=Se,ze=Be):uy(Te)}Ee=Ee.sibling}e:for(Ee=null,Te=r;;){if(Te.tag===5){if(Ee===null){Ee=Te;try{v=Te.stateNode,ce?(x=v.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(z=Te.stateNode,$=Te.memoizedProps.style,A=$!=null&&$.hasOwnProperty("display")?$.display:null,z.style.display=Qe("display",A))}catch(Ye){Qt(r,r.return,Ye)}}}else if(Te.tag===6){if(Ee===null)try{Te.stateNode.nodeValue=ce?"":Te.memoizedProps}catch(Ye){Qt(r,r.return,Ye)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===r)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===r)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===r)break e;Ee===Te&&(Ee=null),Te=Te.return}Ee===Te&&(Ee=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:Li(o,r),Zi(r),h&4&&oy(r);break;case 21:break;default:Li(o,r),Zi(r)}}function Zi(r){var o=r.flags;if(o&2){try{e:{for(var c=r.return;c!==null;){if(iy(c)){var h=c;break e}c=c.return}throw Error(t(160))}switch(h.tag){case 5:var v=h.stateNode;h.flags&32&&(it(v,""),h.flags&=-33);var x=ry(r);Kd(r,x,v);break;case 3:case 4:var A=h.stateNode.containerInfo,z=ry(r);qd(r,z,A);break;default:throw Error(t(161))}}catch($){Qt(r,r.return,$)}r.flags&=-3}o&4096&&(r.flags&=-4097)}function E1(r,o,c){ze=r,ly(r)}function ly(r,o,c){for(var h=(r.mode&1)!==0;ze!==null;){var v=ze,x=v.child;if(v.tag===22&&h){var A=v.memoizedState!==null||Hc;if(!A){var z=v.alternate,$=z!==null&&z.memoizedState!==null||Pn;z=Hc;var ce=Pn;if(Hc=A,(Pn=$)&&!ce)for(ze=v;ze!==null;)A=ze,$=A.child,A.tag===22&&A.memoizedState!==null?fy(v):$!==null?($.return=A,ze=$):fy(v);for(;x!==null;)ze=x,ly(x),x=x.sibling;ze=v,Hc=z,Pn=ce}cy(r)}else(v.subtreeFlags&8772)!==0&&x!==null?(x.return=v,ze=x):cy(r)}}function cy(r){for(;ze!==null;){var o=ze;if((o.flags&8772)!==0){var c=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:Pn||Gc(5,o);break;case 1:var h=o.stateNode;if(o.flags&4&&!Pn)if(c===null)h.componentDidMount();else{var v=o.elementType===o.type?c.memoizedProps:Pi(o.type,c.memoizedProps);h.componentDidUpdate(v,c.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var x=o.updateQueue;x!==null&&u0(o,x,h);break;case 3:var A=o.updateQueue;if(A!==null){if(c=null,o.child!==null)switch(o.child.tag){case 5:c=o.child.stateNode;break;case 1:c=o.child.stateNode}u0(o,A,c)}break;case 5:var z=o.stateNode;if(c===null&&o.flags&4){c=z;var $=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":$.autoFocus&&c.focus();break;case"img":$.src&&(c.src=$.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var ce=o.alternate;if(ce!==null){var Ee=ce.memoizedState;if(Ee!==null){var Te=Ee.dehydrated;Te!==null&&Ua(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Pn||o.flags&512&&Yd(o)}catch(Se){Qt(o,o.return,Se)}}if(o===r){ze=null;break}if(c=o.sibling,c!==null){c.return=o.return,ze=c;break}ze=o.return}}function uy(r){for(;ze!==null;){var o=ze;if(o===r){ze=null;break}var c=o.sibling;if(c!==null){c.return=o.return,ze=c;break}ze=o.return}}function fy(r){for(;ze!==null;){var o=ze;try{switch(o.tag){case 0:case 11:case 15:var c=o.return;try{Gc(4,o)}catch($){Qt(o,c,$)}break;case 1:var h=o.stateNode;if(typeof h.componentDidMount=="function"){var v=o.return;try{h.componentDidMount()}catch($){Qt(o,v,$)}}var x=o.return;try{Yd(o)}catch($){Qt(o,x,$)}break;case 5:var A=o.return;try{Yd(o)}catch($){Qt(o,A,$)}}}catch($){Qt(o,o.return,$)}if(o===r){ze=null;break}var z=o.sibling;if(z!==null){z.return=o.return,ze=z;break}ze=o.return}}var M1=Math.ceil,Wc=b.ReactCurrentDispatcher,Zd=b.ReactCurrentOwner,vi=b.ReactCurrentBatchConfig,Ct=0,gn=null,sn=null,Mn=0,ai=0,No=Kr(0),un=0,rl=null,Is=0,jc=0,Qd=0,sl=null,$n=null,Jd=0,Uo=1/0,gr=null,Xc=!1,eh=null,ns=null,$c=!1,is=null,Yc=0,ol=0,th=null,qc=-1,Kc=0;function zn(){return(Ct&6)!==0?oe():qc!==-1?qc:qc=oe()}function rs(r){return(r.mode&1)===0?1:(Ct&2)!==0&&Mn!==0?Mn&-Mn:o1.transition!==null?(Kc===0&&(Kc=Ot()),Kc):(r=At,r!==0||(r=window.event,r=r===void 0?16:hv(r.type)),r)}function Ii(r,o,c,h){if(50<ol)throw ol=0,th=null,Error(t(185));hn(r,c,h),((Ct&2)===0||r!==gn)&&(r===gn&&((Ct&2)===0&&(jc|=c),un===4&&ss(r,Mn)),Yn(r,h),c===1&&Ct===0&&(o.mode&1)===0&&(Uo=oe()+500,wc&&Qr()))}function Yn(r,o){var c=r.callbackNode;kn(r,o);var h=Tn(r,r===gn?Mn:0);if(h===0)c!==null&&F(c),r.callbackNode=null,r.callbackPriority=0;else if(o=h&-h,r.callbackPriority!==o){if(c!=null&&F(c),o===1)r.tag===0?s1(hy.bind(null,r)):Qv(hy.bind(null,r)),t1(function(){(Ct&6)===0&&Qr()}),c=null;else{switch($i(h)){case 1:c=be;break;case 4:c=Le;break;case 16:c=ke;break;case 536870912:c=ot;break;default:c=ke}c=Sy(c,dy.bind(null,r))}r.callbackPriority=o,r.callbackNode=c}}function dy(r,o){if(qc=-1,Kc=0,(Ct&6)!==0)throw Error(t(327));var c=r.callbackNode;if(Fo()&&r.callbackNode!==c)return null;var h=Tn(r,r===gn?Mn:0);if(h===0)return null;if((h&30)!==0||(h&r.expiredLanes)!==0||o)o=Zc(r,h);else{o=h;var v=Ct;Ct|=2;var x=my();(gn!==r||Mn!==o)&&(gr=null,Uo=oe()+500,Us(r,o));do try{b1();break}catch(z){py(r,z)}while(!0);_d(),Wc.current=x,Ct=v,sn!==null?o=0:(gn=null,Mn=0,o=un)}if(o!==0){if(o===2&&(v=lr(r),v!==0&&(h=v,o=nh(r,v))),o===1)throw c=rl,Us(r,0),ss(r,h),Yn(r,oe()),c;if(o===6)ss(r,h);else{if(v=r.current.alternate,(h&30)===0&&!w1(v)&&(o=Zc(r,h),o===2&&(x=lr(r),x!==0&&(h=x,o=nh(r,x))),o===1))throw c=rl,Us(r,0),ss(r,h),Yn(r,oe()),c;switch(r.finishedWork=v,r.finishedLanes=h,o){case 0:case 1:throw Error(t(345));case 2:Fs(r,$n,gr);break;case 3:if(ss(r,h),(h&130023424)===h&&(o=Jd+500-oe(),10<o)){if(Tn(r,0)!==0)break;if(v=r.suspendedLanes,(v&h)!==h){zn(),r.pingedLanes|=r.suspendedLanes&v;break}r.timeoutHandle=ld(Fs.bind(null,r,$n,gr),o);break}Fs(r,$n,gr);break;case 4:if(ss(r,h),(h&4194240)===h)break;for(o=r.eventTimes,v=-1;0<h;){var A=31-ht(h);x=1<<A,A=o[A],A>v&&(v=A),h&=~x}if(h=v,h=oe()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*M1(h/1960))-h,10<h){r.timeoutHandle=ld(Fs.bind(null,r,$n,gr),h);break}Fs(r,$n,gr);break;case 5:Fs(r,$n,gr);break;default:throw Error(t(329))}}}return Yn(r,oe()),r.callbackNode===c?dy.bind(null,r):null}function nh(r,o){var c=sl;return r.current.memoizedState.isDehydrated&&(Us(r,o).flags|=256),r=Zc(r,o),r!==2&&(o=$n,$n=c,o!==null&&ih(o)),r}function ih(r){$n===null?$n=r:$n.push.apply($n,r)}function w1(r){for(var o=r;;){if(o.flags&16384){var c=o.updateQueue;if(c!==null&&(c=c.stores,c!==null))for(var h=0;h<c.length;h++){var v=c[h],x=v.getSnapshot;v=v.value;try{if(!Ci(x(),v))return!1}catch{return!1}}}if(c=o.child,o.subtreeFlags&16384&&c!==null)c.return=o,o=c;else{if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function ss(r,o){for(o&=~Qd,o&=~jc,r.suspendedLanes|=o,r.pingedLanes&=~o,r=r.expirationTimes;0<o;){var c=31-ht(o),h=1<<c;r[c]=-1,o&=~h}}function hy(r){if((Ct&6)!==0)throw Error(t(327));Fo();var o=Tn(r,0);if((o&1)===0)return Yn(r,oe()),null;var c=Zc(r,o);if(r.tag!==0&&c===2){var h=lr(r);h!==0&&(o=h,c=nh(r,h))}if(c===1)throw c=rl,Us(r,0),ss(r,o),Yn(r,oe()),c;if(c===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=o,Fs(r,$n,gr),Yn(r,oe()),null}function rh(r,o){var c=Ct;Ct|=1;try{return r(o)}finally{Ct=c,Ct===0&&(Uo=oe()+500,wc&&Qr())}}function Ns(r){is!==null&&is.tag===0&&(Ct&6)===0&&Fo();var o=Ct;Ct|=1;var c=vi.transition,h=At;try{if(vi.transition=null,At=1,r)return r()}finally{At=h,vi.transition=c,Ct=o,(Ct&6)===0&&Qr()}}function sh(){ai=No.current,Ht(No)}function Us(r,o){r.finishedWork=null,r.finishedLanes=0;var c=r.timeoutHandle;if(c!==-1&&(r.timeoutHandle=-1,e1(c)),sn!==null)for(c=sn.return;c!==null;){var h=c;switch(pd(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Ec();break;case 3:Do(),Ht(Wn),Ht(An),Ad();break;case 5:Td(h);break;case 4:Do();break;case 13:Ht(Xt);break;case 19:Ht(Xt);break;case 10:xd(h.type._context);break;case 22:case 23:sh()}c=c.return}if(gn=r,sn=r=os(r.current,null),Mn=ai=o,un=0,rl=null,Qd=jc=Is=0,$n=sl=null,Ps!==null){for(o=0;o<Ps.length;o++)if(c=Ps[o],h=c.interleaved,h!==null){c.interleaved=null;var v=h.next,x=c.pending;if(x!==null){var A=x.next;x.next=v,h.next=A}c.pending=h}Ps=null}return r}function py(r,o){do{var c=sn;try{if(_d(),Nc.current=kc,Uc){for(var h=$t.memoizedState;h!==null;){var v=h.queue;v!==null&&(v.pending=null),h=h.next}Uc=!1}if(Ls=0,mn=cn=$t=null,Qa=!1,Ja=0,Zd.current=null,c===null||c.return===null){un=1,rl=o,sn=null;break}e:{var x=r,A=c.return,z=c,$=o;if(o=Mn,z.flags|=32768,$!==null&&typeof $=="object"&&typeof $.then=="function"){var ce=$,Ee=z,Te=Ee.tag;if((Ee.mode&1)===0&&(Te===0||Te===11||Te===15)){var Se=Ee.alternate;Se?(Ee.updateQueue=Se.updateQueue,Ee.memoizedState=Se.memoizedState,Ee.lanes=Se.lanes):(Ee.updateQueue=null,Ee.memoizedState=null)}var Be=B0(A);if(Be!==null){Be.flags&=-257,z0(Be,A,z,x,o),Be.mode&1&&k0(x,ce,o),o=Be,$=ce;var je=o.updateQueue;if(je===null){var Ye=new Set;Ye.add($),o.updateQueue=Ye}else je.add($);break e}else{if((o&1)===0){k0(x,ce,o),oh();break e}$=Error(t(426))}}else if(jt&&z.mode&1){var en=B0(A);if(en!==null){(en.flags&65536)===0&&(en.flags|=256),z0(en,A,z,x,o),vd(Lo($,z));break e}}x=$=Lo($,z),un!==4&&(un=2),sl===null?sl=[x]:sl.push(x),x=A;do{switch(x.tag){case 3:x.flags|=65536,o&=-o,x.lanes|=o;var se=F0(x,$,o);c0(x,se);break e;case 1:z=$;var q=x.type,le=x.stateNode;if((x.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||le!==null&&typeof le.componentDidCatch=="function"&&(ns===null||!ns.has(le)))){x.flags|=65536,o&=-o,x.lanes|=o;var Ae=O0(x,z,o);c0(x,Ae);break e}}x=x.return}while(x!==null)}vy(c)}catch(qe){o=qe,sn===c&&c!==null&&(sn=c=c.return);continue}break}while(!0)}function my(){var r=Wc.current;return Wc.current=kc,r===null?kc:r}function oh(){(un===0||un===3||un===2)&&(un=4),gn===null||(Is&268435455)===0&&(jc&268435455)===0||ss(gn,Mn)}function Zc(r,o){var c=Ct;Ct|=2;var h=my();(gn!==r||Mn!==o)&&(gr=null,Us(r,o));do try{T1();break}catch(v){py(r,v)}while(!0);if(_d(),Ct=c,Wc.current=h,sn!==null)throw Error(t(261));return gn=null,Mn=0,un}function T1(){for(;sn!==null;)gy(sn)}function b1(){for(;sn!==null&&!ne();)gy(sn)}function gy(r){var o=xy(r.alternate,r,ai);r.memoizedProps=r.pendingProps,o===null?vy(r):sn=o,Zd.current=null}function vy(r){var o=r;do{var c=o.alternate;if(r=o.return,(o.flags&32768)===0){if(c=y1(c,o,ai),c!==null){sn=c;return}}else{if(c=_1(c,o),c!==null){c.flags&=32767,sn=c;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{un=6,sn=null;return}}if(o=o.sibling,o!==null){sn=o;return}sn=o=r}while(o!==null);un===0&&(un=5)}function Fs(r,o,c){var h=At,v=vi.transition;try{vi.transition=null,At=1,A1(r,o,c,h)}finally{vi.transition=v,At=h}return null}function A1(r,o,c,h){do Fo();while(is!==null);if((Ct&6)!==0)throw Error(t(327));c=r.finishedWork;var v=r.finishedLanes;if(c===null)return null;if(r.finishedWork=null,r.finishedLanes=0,c===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var x=c.lanes|c.childLanes;if(Sn(r,x),r===gn&&(sn=gn=null,Mn=0),(c.subtreeFlags&2064)===0&&(c.flags&2064)===0||$c||($c=!0,Sy(ke,function(){return Fo(),null})),x=(c.flags&15990)!==0,(c.subtreeFlags&15990)!==0||x){x=vi.transition,vi.transition=null;var A=At;At=1;var z=Ct;Ct|=4,Zd.current=null,S1(r,c),ay(c,r),$T(od),lc=!!sd,od=sd=null,r.current=c,E1(c),ue(),Ct=z,At=A,vi.transition=x}else r.current=c;if($c&&($c=!1,is=r,Yc=v),x=r.pendingLanes,x===0&&(ns=null),Et(c.stateNode),Yn(r,oe()),o!==null)for(h=r.onRecoverableError,c=0;c<o.length;c++)v=o[c],h(v.value,{componentStack:v.stack,digest:v.digest});if(Xc)throw Xc=!1,r=eh,eh=null,r;return(Yc&1)!==0&&r.tag!==0&&Fo(),x=r.pendingLanes,(x&1)!==0?r===th?ol++:(ol=0,th=r):ol=0,Qr(),null}function Fo(){if(is!==null){var r=$i(Yc),o=vi.transition,c=At;try{if(vi.transition=null,At=16>r?16:r,is===null)var h=!1;else{if(r=is,is=null,Yc=0,(Ct&6)!==0)throw Error(t(331));var v=Ct;for(Ct|=4,ze=r.current;ze!==null;){var x=ze,A=x.child;if((ze.flags&16)!==0){var z=x.deletions;if(z!==null){for(var $=0;$<z.length;$++){var ce=z[$];for(ze=ce;ze!==null;){var Ee=ze;switch(Ee.tag){case 0:case 11:case 15:il(8,Ee,x)}var Te=Ee.child;if(Te!==null)Te.return=Ee,ze=Te;else for(;ze!==null;){Ee=ze;var Se=Ee.sibling,Be=Ee.return;if(ny(Ee),Ee===ce){ze=null;break}if(Se!==null){Se.return=Be,ze=Se;break}ze=Be}}}var je=x.alternate;if(je!==null){var Ye=je.child;if(Ye!==null){je.child=null;do{var en=Ye.sibling;Ye.sibling=null,Ye=en}while(Ye!==null)}}ze=x}}if((x.subtreeFlags&2064)!==0&&A!==null)A.return=x,ze=A;else e:for(;ze!==null;){if(x=ze,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:il(9,x,x.return)}var se=x.sibling;if(se!==null){se.return=x.return,ze=se;break e}ze=x.return}}var q=r.current;for(ze=q;ze!==null;){A=ze;var le=A.child;if((A.subtreeFlags&2064)!==0&&le!==null)le.return=A,ze=le;else e:for(A=q;ze!==null;){if(z=ze,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:Gc(9,z)}}catch(qe){Qt(z,z.return,qe)}if(z===A){ze=null;break e}var Ae=z.sibling;if(Ae!==null){Ae.return=z.return,ze=Ae;break e}ze=z.return}}if(Ct=v,Qr(),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(nt,r)}catch{}h=!0}return h}finally{At=c,vi.transition=o}}return!1}function yy(r,o,c){o=Lo(c,o),o=F0(r,o,1),r=es(r,o,1),o=zn(),r!==null&&(hn(r,1,o),Yn(r,o))}function Qt(r,o,c){if(r.tag===3)yy(r,r,c);else for(;o!==null;){if(o.tag===3){yy(o,r,c);break}else if(o.tag===1){var h=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(ns===null||!ns.has(h))){r=Lo(c,r),r=O0(o,r,1),o=es(o,r,1),r=zn(),o!==null&&(hn(o,1,r),Yn(o,r));break}}o=o.return}}function C1(r,o,c){var h=r.pingCache;h!==null&&h.delete(o),o=zn(),r.pingedLanes|=r.suspendedLanes&c,gn===r&&(Mn&c)===c&&(un===4||un===3&&(Mn&130023424)===Mn&&500>oe()-Jd?Us(r,0):Qd|=c),Yn(r,o)}function _y(r,o){o===0&&((r.mode&1)===0?o=1:(o=Zt,Zt<<=1,(Zt&130023424)===0&&(Zt=4194304)));var c=zn();r=hr(r,o),r!==null&&(hn(r,o,c),Yn(r,c))}function R1(r){var o=r.memoizedState,c=0;o!==null&&(c=o.retryLane),_y(r,c)}function P1(r,o){var c=0;switch(r.tag){case 13:var h=r.stateNode,v=r.memoizedState;v!==null&&(c=v.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(o),_y(r,c)}var xy;xy=function(r,o,c){if(r!==null)if(r.memoizedProps!==o.pendingProps||Wn.current)Xn=!0;else{if((r.lanes&c)===0&&(o.flags&128)===0)return Xn=!1,v1(r,o,c);Xn=(r.flags&131072)!==0}else Xn=!1,jt&&(o.flags&1048576)!==0&&Jv(o,bc,o.index);switch(o.lanes=0,o.tag){case 2:var h=o.type;Vc(r,o),r=o.pendingProps;var v=wo(o,An.current);Po(o,c),v=Pd(null,o,h,r,v,c);var x=Dd();return o.flags|=1,typeof v=="object"&&v!==null&&typeof v.render=="function"&&v.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,jn(h)?(x=!0,Mc(o)):x=!1,o.memoizedState=v.state!==null&&v.state!==void 0?v.state:null,Md(o),v.updater=Bc,o.stateNode=v,v._reactInternals=o,Od(o,h,r,c),o=Vd(null,o,h,!0,x,c)):(o.tag=0,jt&&x&&hd(o),Bn(null,o,v,c),o=o.child),o;case 16:h=o.elementType;e:{switch(Vc(r,o),r=o.pendingProps,v=h._init,h=v(h._payload),o.type=h,v=o.tag=L1(h),r=Pi(h,r),v){case 0:o=zd(null,o,h,r,c);break e;case 1:o=X0(null,o,h,r,c);break e;case 11:o=V0(null,o,h,r,c);break e;case 14:o=H0(null,o,h,Pi(h.type,r),c);break e}throw Error(t(306,h,""))}return o;case 0:return h=o.type,v=o.pendingProps,v=o.elementType===h?v:Pi(h,v),zd(r,o,h,v,c);case 1:return h=o.type,v=o.pendingProps,v=o.elementType===h?v:Pi(h,v),X0(r,o,h,v,c);case 3:e:{if($0(o),r===null)throw Error(t(387));h=o.pendingProps,x=o.memoizedState,v=x.element,l0(r,o),Lc(o,h,null,c);var A=o.memoizedState;if(h=A.element,x.isDehydrated)if(x={element:h,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},o.updateQueue.baseState=x,o.memoizedState=x,o.flags&256){v=Lo(Error(t(423)),o),o=Y0(r,o,h,c,v);break e}else if(h!==v){v=Lo(Error(t(424)),o),o=Y0(r,o,h,c,v);break e}else for(oi=qr(o.stateNode.containerInfo.firstChild),si=o,jt=!0,Ri=null,c=o0(o,null,h,c),o.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{if(Ao(),h===v){o=mr(r,o,c);break e}Bn(r,o,h,c)}o=o.child}return o;case 5:return f0(o),r===null&&gd(o),h=o.type,v=o.pendingProps,x=r!==null?r.memoizedProps:null,A=v.children,ad(h,v)?A=null:x!==null&&ad(h,x)&&(o.flags|=32),j0(r,o),Bn(r,o,A,c),o.child;case 6:return r===null&&gd(o),null;case 13:return q0(r,o,c);case 4:return wd(o,o.stateNode.containerInfo),h=o.pendingProps,r===null?o.child=Co(o,null,h,c):Bn(r,o,h,c),o.child;case 11:return h=o.type,v=o.pendingProps,v=o.elementType===h?v:Pi(h,v),V0(r,o,h,v,c);case 7:return Bn(r,o,o.pendingProps,c),o.child;case 8:return Bn(r,o,o.pendingProps.children,c),o.child;case 12:return Bn(r,o,o.pendingProps.children,c),o.child;case 10:e:{if(h=o.type._context,v=o.pendingProps,x=o.memoizedProps,A=v.value,Bt(Rc,h._currentValue),h._currentValue=A,x!==null)if(Ci(x.value,A)){if(x.children===v.children&&!Wn.current){o=mr(r,o,c);break e}}else for(x=o.child,x!==null&&(x.return=o);x!==null;){var z=x.dependencies;if(z!==null){A=x.child;for(var $=z.firstContext;$!==null;){if($.context===h){if(x.tag===1){$=pr(-1,c&-c),$.tag=2;var ce=x.updateQueue;if(ce!==null){ce=ce.shared;var Ee=ce.pending;Ee===null?$.next=$:($.next=Ee.next,Ee.next=$),ce.pending=$}}x.lanes|=c,$=x.alternate,$!==null&&($.lanes|=c),Sd(x.return,c,o),z.lanes|=c;break}$=$.next}}else if(x.tag===10)A=x.type===o.type?null:x.child;else if(x.tag===18){if(A=x.return,A===null)throw Error(t(341));A.lanes|=c,z=A.alternate,z!==null&&(z.lanes|=c),Sd(A,c,o),A=x.sibling}else A=x.child;if(A!==null)A.return=x;else for(A=x;A!==null;){if(A===o){A=null;break}if(x=A.sibling,x!==null){x.return=A.return,A=x;break}A=A.return}x=A}Bn(r,o,v.children,c),o=o.child}return o;case 9:return v=o.type,h=o.pendingProps.children,Po(o,c),v=mi(v),h=h(v),o.flags|=1,Bn(r,o,h,c),o.child;case 14:return h=o.type,v=Pi(h,o.pendingProps),v=Pi(h.type,v),H0(r,o,h,v,c);case 15:return G0(r,o,o.type,o.pendingProps,c);case 17:return h=o.type,v=o.pendingProps,v=o.elementType===h?v:Pi(h,v),Vc(r,o),o.tag=1,jn(h)?(r=!0,Mc(o)):r=!1,Po(o,c),N0(o,h,v),Od(o,h,v,c),Vd(null,o,h,!0,r,c);case 19:return Z0(r,o,c);case 22:return W0(r,o,c)}throw Error(t(156,o.tag))};function Sy(r,o){return sc(r,o)}function D1(r,o,c,h){this.tag=r,this.key=c,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yi(r,o,c,h){return new D1(r,o,c,h)}function ah(r){return r=r.prototype,!(!r||!r.isReactComponent)}function L1(r){if(typeof r=="function")return ah(r)?1:0;if(r!=null){if(r=r.$$typeof,r===X)return 11;if(r===Y)return 14}return 2}function os(r,o){var c=r.alternate;return c===null?(c=yi(r.tag,o,r.key,r.mode),c.elementType=r.elementType,c.type=r.type,c.stateNode=r.stateNode,c.alternate=r,r.alternate=c):(c.pendingProps=o,c.type=r.type,c.flags=0,c.subtreeFlags=0,c.deletions=null),c.flags=r.flags&14680064,c.childLanes=r.childLanes,c.lanes=r.lanes,c.child=r.child,c.memoizedProps=r.memoizedProps,c.memoizedState=r.memoizedState,c.updateQueue=r.updateQueue,o=r.dependencies,c.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},c.sibling=r.sibling,c.index=r.index,c.ref=r.ref,c}function Qc(r,o,c,h,v,x){var A=2;if(h=r,typeof r=="function")ah(r)&&(A=1);else if(typeof r=="string")A=5;else e:switch(r){case I:return Os(c.children,v,x,o);case B:A=8,v|=8;break;case P:return r=yi(12,c,o,v|2),r.elementType=P,r.lanes=x,r;case j:return r=yi(13,c,o,v),r.elementType=j,r.lanes=x,r;case W:return r=yi(19,c,o,v),r.elementType=W,r.lanes=x,r;case J:return Jc(c,v,x,o);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case C:A=10;break e;case k:A=9;break e;case X:A=11;break e;case Y:A=14;break e;case ee:A=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return o=yi(A,c,o,v),o.elementType=r,o.type=h,o.lanes=x,o}function Os(r,o,c,h){return r=yi(7,r,h,o),r.lanes=c,r}function Jc(r,o,c,h){return r=yi(22,r,h,o),r.elementType=J,r.lanes=c,r.stateNode={isHidden:!1},r}function lh(r,o,c){return r=yi(6,r,null,o),r.lanes=c,r}function ch(r,o,c){return o=yi(4,r.children!==null?r.children:[],r.key,o),o.lanes=c,o.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},o}function I1(r,o,c,h,v){this.tag=o,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bn(0),this.expirationTimes=bn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bn(0),this.identifierPrefix=h,this.onRecoverableError=v,this.mutableSourceEagerHydrationData=null}function uh(r,o,c,h,v,x,A,z,$){return r=new I1(r,o,c,z,$),o===1?(o=1,x===!0&&(o|=8)):o=0,x=yi(3,null,null,o),r.current=x,x.stateNode=r,x.memoizedState={element:h,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null},Md(x),r}function N1(r,o,c){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:h==null?null:""+h,children:r,containerInfo:o,implementation:c}}function Ey(r){if(!r)return Zr;r=r._reactInternals;e:{if(Xi(r)!==r||r.tag!==1)throw Error(t(170));var o=r;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(jn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(r.tag===1){var c=r.type;if(jn(c))return Kv(r,c,o)}return o}function My(r,o,c,h,v,x,A,z,$){return r=uh(c,h,!0,r,v,x,A,z,$),r.context=Ey(null),c=r.current,h=zn(),v=rs(c),x=pr(h,v),x.callback=o??null,es(c,x,v),r.current.lanes=v,hn(r,v,h),Yn(r,h),r}function eu(r,o,c,h){var v=o.current,x=zn(),A=rs(v);return c=Ey(c),o.context===null?o.context=c:o.pendingContext=c,o=pr(x,A),o.payload={element:r},h=h===void 0?null:h,h!==null&&(o.callback=h),r=es(v,o,A),r!==null&&(Ii(r,v,A,x),Dc(r,v,A)),A}function tu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function wy(r,o){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var c=r.retryLane;r.retryLane=c!==0&&c<o?c:o}}function fh(r,o){wy(r,o),(r=r.alternate)&&wy(r,o)}function U1(){return null}var Ty=typeof reportError=="function"?reportError:function(r){console.error(r)};function dh(r){this._internalRoot=r}nu.prototype.render=dh.prototype.render=function(r){var o=this._internalRoot;if(o===null)throw Error(t(409));eu(r,o,null,null)},nu.prototype.unmount=dh.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var o=r.containerInfo;Ns(function(){eu(null,r,null,null)}),o[cr]=null}};function nu(r){this._internalRoot=r}nu.prototype.unstable_scheduleHydration=function(r){if(r){var o=lv();r={blockedOn:null,target:r,priority:o};for(var c=0;c<Xr.length&&o!==0&&o<Xr[c].priority;c++);Xr.splice(c,0,r),c===0&&fv(r)}};function hh(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function iu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function by(){}function F1(r,o,c,h,v){if(v){if(typeof h=="function"){var x=h;h=function(){var ce=tu(A);x.call(ce)}}var A=My(o,h,r,0,null,!1,!1,"",by);return r._reactRootContainer=A,r[cr]=A.current,Wa(r.nodeType===8?r.parentNode:r),Ns(),A}for(;v=r.lastChild;)r.removeChild(v);if(typeof h=="function"){var z=h;h=function(){var ce=tu($);z.call(ce)}}var $=uh(r,0,!1,null,null,!1,!1,"",by);return r._reactRootContainer=$,r[cr]=$.current,Wa(r.nodeType===8?r.parentNode:r),Ns(function(){eu(o,$,c,h)}),$}function ru(r,o,c,h,v){var x=c._reactRootContainer;if(x){var A=x;if(typeof v=="function"){var z=v;v=function(){var $=tu(A);z.call($)}}eu(o,A,r,v)}else A=F1(c,o,r,v,h);return tu(A)}ov=function(r){switch(r.tag){case 3:var o=r.stateNode;if(o.current.memoizedState.isDehydrated){var c=St(o.pendingLanes);c!==0&&(pn(o,c|1),Yn(o,oe()),(Ct&6)===0&&(Uo=oe()+500,Qr()))}break;case 13:Ns(function(){var h=hr(r,1);if(h!==null){var v=zn();Ii(h,r,1,v)}}),fh(r,1)}},kf=function(r){if(r.tag===13){var o=hr(r,134217728);if(o!==null){var c=zn();Ii(o,r,134217728,c)}fh(r,134217728)}},av=function(r){if(r.tag===13){var o=rs(r),c=hr(r,o);if(c!==null){var h=zn();Ii(c,r,o,h)}fh(r,o)}},lv=function(){return At},cv=function(r,o){var c=At;try{return At=r,o()}finally{At=c}},De=function(r,o,c){switch(o){case"input":if(ft(r,c),o=c.name,c.type==="radio"&&o!=null){for(c=r;c.parentNode;)c=c.parentNode;for(c=c.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<c.length;o++){var h=c[o];if(h!==r&&h.form===r.form){var v=Sc(h);if(!v)throw Error(t(90));rt(h),ft(h,v)}}}break;case"textarea":ge(r,c);break;case"select":o=c.value,o!=null&&U(r,!!c.multiple,o,!1)}},zt=rh,ln=Ns;var O1={usingClientEntryPoint:!1,Events:[$a,Eo,Sc,Ne,ut,rh]},al={findFiberByHostInstance:bs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},k1={bundleType:al.bundleType,version:al.version,rendererPackageName:al.rendererPackageName,rendererConfig:al.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ic(r),r===null?null:r.stateNode},findFiberByHostInstance:al.findFiberByHostInstance||U1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!su.isDisabled&&su.supportsFiber)try{nt=su.inject(k1),Xe=su}catch{}}return qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O1,qn.createPortal=function(r,o){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hh(o))throw Error(t(200));return N1(r,o,null,c)},qn.createRoot=function(r,o){if(!hh(r))throw Error(t(299));var c=!1,h="",v=Ty;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(v=o.onRecoverableError)),o=uh(r,1,!1,null,null,c,!1,h,v),r[cr]=o.current,Wa(r.nodeType===8?r.parentNode:r),new dh(o)},qn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var o=r._reactInternals;if(o===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ic(o),r=r===null?null:r.stateNode,r},qn.flushSync=function(r){return Ns(r)},qn.hydrate=function(r,o,c){if(!iu(o))throw Error(t(200));return ru(null,r,o,!0,c)},qn.hydrateRoot=function(r,o,c){if(!hh(r))throw Error(t(405));var h=c!=null&&c.hydratedSources||null,v=!1,x="",A=Ty;if(c!=null&&(c.unstable_strictMode===!0&&(v=!0),c.identifierPrefix!==void 0&&(x=c.identifierPrefix),c.onRecoverableError!==void 0&&(A=c.onRecoverableError)),o=My(o,null,r,1,c??null,v,!1,x,A),r[cr]=o.current,Wa(r),h)for(r=0;r<h.length;r++)c=h[r],v=c._getVersion,v=v(c._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[c,v]:o.mutableSourceEagerHydrationData.push(c,v);return new nu(o)},qn.render=function(r,o,c){if(!iu(o))throw Error(t(200));return ru(null,r,o,!1,c)},qn.unmountComponentAtNode=function(r){if(!iu(r))throw Error(t(40));return r._reactRootContainer?(Ns(function(){ru(null,null,r,!1,function(){r._reactRootContainer=null,r[cr]=null})}),!0):!1},qn.unstable_batchedUpdates=rh,qn.unstable_renderSubtreeIntoContainer=function(r,o,c,h){if(!iu(c))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return ru(r,o,c,!1,h)},qn.version="18.3.1-next-f1338f8080-20240426",qn}var Ny;function LS(){if(Ny)return gh.exports;Ny=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),gh.exports=$1(),gh.exports}var Uy;function Y1(){if(Uy)return ou;Uy=1;var n=LS();return ou.createRoot=n.createRoot,ou.hydrateRoot=n.hydrateRoot,ou}var q1=Y1(),D=Jm();const Un=Bl(D);var _h,Fy;function K1(){if(Fy)return _h;Fy=1;var n=typeof Element<"u",e=typeof Map=="function",t=typeof Set=="function",i=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function s(a,l){if(a===l)return!0;if(a&&l&&typeof a=="object"&&typeof l=="object"){if(a.constructor!==l.constructor)return!1;var u,f,d;if(Array.isArray(a)){if(u=a.length,u!=l.length)return!1;for(f=u;f--!==0;)if(!s(a[f],l[f]))return!1;return!0}var p;if(e&&a instanceof Map&&l instanceof Map){if(a.size!==l.size)return!1;for(p=a.entries();!(f=p.next()).done;)if(!l.has(f.value[0]))return!1;for(p=a.entries();!(f=p.next()).done;)if(!s(f.value[1],l.get(f.value[0])))return!1;return!0}if(t&&a instanceof Set&&l instanceof Set){if(a.size!==l.size)return!1;for(p=a.entries();!(f=p.next()).done;)if(!l.has(f.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(a)&&ArrayBuffer.isView(l)){if(u=a.length,u!=l.length)return!1;for(f=u;f--!==0;)if(a[f]!==l[f])return!1;return!0}if(a.constructor===RegExp)return a.source===l.source&&a.flags===l.flags;if(a.valueOf!==Object.prototype.valueOf&&typeof a.valueOf=="function"&&typeof l.valueOf=="function")return a.valueOf()===l.valueOf();if(a.toString!==Object.prototype.toString&&typeof a.toString=="function"&&typeof l.toString=="function")return a.toString()===l.toString();if(d=Object.keys(a),u=d.length,u!==Object.keys(l).length)return!1;for(f=u;f--!==0;)if(!Object.prototype.hasOwnProperty.call(l,d[f]))return!1;if(n&&a instanceof Element)return!1;for(f=u;f--!==0;)if(!((d[f]==="_owner"||d[f]==="__v"||d[f]==="__o")&&a.$$typeof)&&!s(a[d[f]],l[d[f]]))return!1;return!0}return a!==a&&l!==l}return _h=function(l,u){try{return s(l,u)}catch(f){if((f.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw f}},_h}var Z1=K1();const Q1=Bl(Z1);var xh,Oy;function J1(){if(Oy)return xh;Oy=1;var n=function(e,t,i,s,a,l,u,f){if(!e){var d;if(t===void 0)d=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var p=[i,s,a,l,u,f],m=0;d=new Error(t.replace(/%s/g,function(){return p[m++]})),d.name="Invariant Violation"}throw d.framesToPop=1,d}};return xh=n,xh}var eb=J1();const ky=Bl(eb);var Sh,By;function tb(){return By||(By=1,Sh=function(e,t,i,s){var a=i?i.call(s,e,t):void 0;if(a!==void 0)return!!a;if(e===t)return!0;if(typeof e!="object"||!e||typeof t!="object"||!t)return!1;var l=Object.keys(e),u=Object.keys(t);if(l.length!==u.length)return!1;for(var f=Object.prototype.hasOwnProperty.bind(t),d=0;d<l.length;d++){var p=l[d];if(!f(p))return!1;var m=e[p],g=t[p];if(a=i?i.call(s,m,g,p):void 0,a===!1||a===void 0&&m!==g)return!1}return!0}),Sh}var nb=tb();const ib=Bl(nb);var IS=(n=>(n.BASE="base",n.BODY="body",n.HEAD="head",n.HTML="html",n.LINK="link",n.META="meta",n.NOSCRIPT="noscript",n.SCRIPT="script",n.STYLE="style",n.TITLE="title",n.FRAGMENT="Symbol(react.fragment)",n))(IS||{}),Eh={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},zy=Object.values(IS),eg={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},rb=Object.entries(eg).reduce((n,[e,t])=>(n[t]=e,n),{}),Vi="data-rh",aa={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},la=(n,e)=>{for(let t=n.length-1;t>=0;t-=1){const i=n[t];if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}return null},sb=n=>{let e=la(n,"title");const t=la(n,aa.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),t&&e)return t.replace(/%s/g,()=>e);const i=la(n,aa.DEFAULT_TITLE);return e||i||void 0},ob=n=>la(n,aa.ON_CHANGE_CLIENT_STATE)||(()=>{}),Mh=(n,e)=>e.filter(t=>typeof t[n]<"u").map(t=>t[n]).reduce((t,i)=>({...t,...i}),{}),ab=(n,e)=>e.filter(t=>typeof t.base<"u").map(t=>t.base).reverse().reduce((t,i)=>{if(!t.length){const s=Object.keys(i);for(let a=0;a<s.length;a+=1){const u=s[a].toLowerCase();if(n.indexOf(u)!==-1&&i[u])return t.concat(i)}}return t},[]),lb=n=>console&&typeof console.warn=="function"&&console.warn(n),cl=(n,e,t)=>{const i={};return t.filter(s=>Array.isArray(s[n])?!0:(typeof s[n]<"u"&&lb(`Helmet: ${n} should be of type "Array". Instead found type "${typeof s[n]}"`),!1)).map(s=>s[n]).reverse().reduce((s,a)=>{const l={};a.filter(f=>{let d;const p=Object.keys(f);for(let g=0;g<p.length;g+=1){const y=p[g],E=y.toLowerCase();e.indexOf(E)!==-1&&!(d==="rel"&&f[d].toLowerCase()==="canonical")&&!(E==="rel"&&f[E].toLowerCase()==="stylesheet")&&(d=E),e.indexOf(y)!==-1&&(y==="innerHTML"||y==="cssText"||y==="itemprop")&&(d=y)}if(!d||!f[d])return!1;const m=f[d].toLowerCase();return i[d]||(i[d]={}),l[d]||(l[d]={}),i[d][m]?!1:(l[d][m]=!0,!0)}).reverse().forEach(f=>s.push(f));const u=Object.keys(l);for(let f=0;f<u.length;f+=1){const d=u[f],p={...i[d],...l[d]};i[d]=p}return s},[]).reverse()},cb=(n,e)=>{if(Array.isArray(n)&&n.length){for(let t=0;t<n.length;t+=1)if(n[t][e])return!0}return!1},ub=n=>({baseTag:ab(["href"],n),bodyAttributes:Mh("bodyAttributes",n),defer:la(n,aa.DEFER),encode:la(n,aa.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Mh("htmlAttributes",n),linkTags:cl("link",["rel","href"],n),metaTags:cl("meta",["name","charset","http-equiv","property","itemprop"],n),noscriptTags:cl("noscript",["innerHTML"],n),onChangeClientState:ob(n),scriptTags:cl("script",["src","innerHTML"],n),styleTags:cl("style",["cssText"],n),title:sb(n),titleAttributes:Mh("titleAttributes",n),prioritizeSeoTags:cb(n,aa.PRIORITIZE_SEO_TAGS)}),NS=n=>Array.isArray(n)?n.join(""):n,fb=(n,e)=>{const t=Object.keys(n);for(let i=0;i<t.length;i+=1)if(e[t[i]]&&e[t[i]].includes(n[t[i]]))return!0;return!1},wh=(n,e)=>Array.isArray(n)?n.reduce((t,i)=>(fb(i,e)?t.priority.push(i):t.default.push(i),t),{priority:[],default:[]}):{default:n,priority:[]},Vy=(n,e)=>({...n,[e]:void 0}),db=["noscript","script","style"],bp=(n,e=!0)=>e===!1?String(n):String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),US=n=>Object.keys(n).reduce((e,t)=>{const i=typeof n[t]<"u"?`${t}="${n[t]}"`:`${t}`;return e?`${e} ${i}`:i},""),hb=(n,e,t,i)=>{const s=US(t),a=NS(e);return s?`<${n} ${Vi}="true" ${s}>${bp(a,i)}</${n}>`:`<${n} ${Vi}="true">${bp(a,i)}</${n}>`},pb=(n,e,t=!0)=>e.reduce((i,s)=>{const a=s,l=Object.keys(a).filter(d=>!(d==="innerHTML"||d==="cssText")).reduce((d,p)=>{const m=typeof a[p]>"u"?p:`${p}="${bp(a[p],t)}"`;return d?`${d} ${m}`:m},""),u=a.innerHTML||a.cssText||"",f=db.indexOf(n)===-1;return`${i}<${n} ${Vi}="true" ${l}${f?"/>":`>${u}</${n}>`}`},""),FS=(n,e={})=>Object.keys(n).reduce((t,i)=>{const s=eg[i];return t[s||i]=n[i],t},e),mb=(n,e,t)=>{const i={key:e,[Vi]:!0},s=FS(t,i);return[Un.createElement("title",s,e)]},Ou=(n,e)=>e.map((t,i)=>{const s={key:i,[Vi]:!0};return Object.keys(t).forEach(a=>{const u=eg[a]||a;if(u==="innerHTML"||u==="cssText"){const f=t.innerHTML||t.cssText;s.dangerouslySetInnerHTML={__html:f}}else s[u]=t[a]}),Un.createElement(n,s)}),Ei=(n,e,t=!0)=>{switch(n){case"title":return{toComponent:()=>mb(n,e.title,e.titleAttributes),toString:()=>hb(n,e.title,e.titleAttributes,t)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>FS(e),toString:()=>US(e)};default:return{toComponent:()=>Ou(n,e),toString:()=>pb(n,e,t)}}},gb=({metaTags:n,linkTags:e,scriptTags:t,encode:i})=>{const s=wh(n,Eh.meta),a=wh(e,Eh.link),l=wh(t,Eh.script);return{priorityMethods:{toComponent:()=>[...Ou("meta",s.priority),...Ou("link",a.priority),...Ou("script",l.priority)],toString:()=>`${Ei("meta",s.priority,i)} ${Ei("link",a.priority,i)} ${Ei("script",l.priority,i)}`},metaTags:s.default,linkTags:a.default,scriptTags:l.default}},vb=n=>{const{baseTag:e,bodyAttributes:t,encode:i=!0,htmlAttributes:s,noscriptTags:a,styleTags:l,title:u="",titleAttributes:f,prioritizeSeoTags:d}=n;let{linkTags:p,metaTags:m,scriptTags:g}=n,y={toComponent:()=>{},toString:()=>""};return d&&({priorityMethods:y,linkTags:p,metaTags:m,scriptTags:g}=gb(n)),{priority:y,base:Ei("base",e,i),bodyAttributes:Ei("bodyAttributes",t,i),htmlAttributes:Ei("htmlAttributes",s,i),link:Ei("link",p,i),meta:Ei("meta",m,i),noscript:Ei("noscript",a,i),script:Ei("script",g,i),style:Ei("style",l,i),title:Ei("title",{title:u,titleAttributes:f},i)}},Ap=vb,au=[],OS=!!(typeof window<"u"&&window.document&&window.document.createElement),Cp=class{constructor(n,e){vr(this,"instances",[]);vr(this,"canUseDOM",OS);vr(this,"context");vr(this,"value",{setHelmet:n=>{this.context.helmet=n},helmetInstances:{get:()=>this.canUseDOM?au:this.instances,add:n=>{(this.canUseDOM?au:this.instances).push(n)},remove:n=>{const e=(this.canUseDOM?au:this.instances).indexOf(n);(this.canUseDOM?au:this.instances).splice(e,1)}}});this.context=n,this.canUseDOM=e||!1,e||(n.helmet=Ap({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},yb={},kS=Un.createContext(yb),ro,BS=(ro=class extends D.Component{constructor(t){super(t);vr(this,"helmetData");this.helmetData=new Cp(this.props.context||{},ro.canUseDOM)}render(){return Un.createElement(kS.Provider,{value:this.helmetData.value},this.props.children)}},vr(ro,"canUseDOM",OS),ro),Oo=(n,e)=>{const t=document.head||document.querySelector("head"),i=t.querySelectorAll(`${n}[${Vi}]`),s=[].slice.call(i),a=[];let l;return e&&e.length&&e.forEach(u=>{const f=document.createElement(n);for(const d in u)if(Object.prototype.hasOwnProperty.call(u,d))if(d==="innerHTML")f.innerHTML=u.innerHTML;else if(d==="cssText")f.styleSheet?f.styleSheet.cssText=u.cssText:f.appendChild(document.createTextNode(u.cssText));else{const p=d,m=typeof u[p]>"u"?"":u[p];f.setAttribute(d,m)}f.setAttribute(Vi,"true"),s.some((d,p)=>(l=p,f.isEqualNode(d)))?s.splice(l,1):a.push(f)}),s.forEach(u=>{var f;return(f=u.parentNode)==null?void 0:f.removeChild(u)}),a.forEach(u=>t.appendChild(u)),{oldTags:s,newTags:a}},Rp=(n,e)=>{const t=document.getElementsByTagName(n)[0];if(!t)return;const i=t.getAttribute(Vi),s=i?i.split(","):[],a=[...s],l=Object.keys(e);for(const u of l){const f=e[u]||"";t.getAttribute(u)!==f&&t.setAttribute(u,f),s.indexOf(u)===-1&&s.push(u);const d=a.indexOf(u);d!==-1&&a.splice(d,1)}for(let u=a.length-1;u>=0;u-=1)t.removeAttribute(a[u]);s.length===a.length?t.removeAttribute(Vi):t.getAttribute(Vi)!==l.join(",")&&t.setAttribute(Vi,l.join(","))},_b=(n,e)=>{typeof n<"u"&&document.title!==n&&(document.title=NS(n)),Rp("title",e)},Hy=(n,e)=>{const{baseTag:t,bodyAttributes:i,htmlAttributes:s,linkTags:a,metaTags:l,noscriptTags:u,onChangeClientState:f,scriptTags:d,styleTags:p,title:m,titleAttributes:g}=n;Rp("body",i),Rp("html",s),_b(m,g);const y={baseTag:Oo("base",t),linkTags:Oo("link",a),metaTags:Oo("meta",l),noscriptTags:Oo("noscript",u),scriptTags:Oo("script",d),styleTags:Oo("style",p)},E={},M={};Object.keys(y).forEach(S=>{const{newTags:_,oldTags:T}=y[S];_.length&&(E[S]=_),T.length&&(M[S]=y[S].oldTags)}),e&&e(),f(n,E,M)},ul=null,xb=n=>{ul&&cancelAnimationFrame(ul),n.defer?ul=requestAnimationFrame(()=>{Hy(n,()=>{ul=null})}):(Hy(n),ul=null)},Sb=xb,Gy=class extends D.Component{constructor(){super(...arguments);vr(this,"rendered",!1)}shouldComponentUpdate(e){return!ib(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:t}=this.props.context;let i=null;const s=ub(e.get().map(a=>{const l={...a.props};return delete l.context,l}));BS.canUseDOM?Sb(s):Ap&&(i=Ap(s)),t(i)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},Tp,Eb=(Tp=class extends D.Component{shouldComponentUpdate(n){return!Q1(Vy(this.props,"helmetData"),Vy(n,"helmetData"))}mapNestedChildrenToProps(n,e){if(!e)return null;switch(n.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${n.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(n,e,t,i){return{...e,[n.type]:[...e[n.type]||[],{...t,...this.mapNestedChildrenToProps(n,i)}]}}mapObjectTypeChildren(n,e,t,i){switch(n.type){case"title":return{...e,[n.type]:i,titleAttributes:{...t}};case"body":return{...e,bodyAttributes:{...t}};case"html":return{...e,htmlAttributes:{...t}};default:return{...e,[n.type]:{...t}}}}mapArrayTypeChildrenToProps(n,e){let t={...e};return Object.keys(n).forEach(i=>{t={...t,[i]:n[i]}}),t}warnOnInvalidChildren(n,e){return ky(zy.some(t=>n.type===t),typeof n.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${zy.join(", ")} are allowed. Helmet does not support rendering <${n.type}> elements. Refer to our API for more information.`),ky(!e||typeof e=="string"||Array.isArray(e)&&!e.some(t=>typeof t!="string"),`Helmet expects a string as a child of <${n.type}>. Did you forget to wrap your children in braces? ( <${n.type}>{\`\`}</${n.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(n,e){let t={};return Un.Children.forEach(n,i=>{if(!i||!i.props)return;const{children:s,...a}=i.props,l=Object.keys(a).reduce((f,d)=>(f[rb[d]||d]=a[d],f),{});let{type:u}=i;switch(typeof u=="symbol"?u=u.toString():this.warnOnInvalidChildren(i,s),u){case"Symbol(react.fragment)":e=this.mapChildrenToProps(s,e);break;case"link":case"meta":case"noscript":case"script":case"style":t=this.flattenArrayTypeChildren(i,t,l,s);break;default:e=this.mapObjectTypeChildren(i,e,l,s);break}}),this.mapArrayTypeChildrenToProps(t,e)}render(){const{children:n,...e}=this.props;let t={...e},{helmetData:i}=e;if(n&&(t=this.mapChildrenToProps(n,t)),i&&!(i instanceof Cp)){const s=i;i=new Cp(s.context,!0),delete t.helmetData}return i?Un.createElement(Gy,{...t,context:i.value}):Un.createElement(kS.Consumer,null,s=>Un.createElement(Gy,{...t,context:s}))}},vr(Tp,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Tp),ku={exports:{}},Mb=ku.exports,Wy;function wb(){return Wy||(Wy=1,function(n,e){(function(t,i){n.exports=i()})(Mb,function(){return function(t){function i(a){if(s[a])return s[a].exports;var l=s[a]={exports:{},id:a,loaded:!1};return t[a].call(l.exports,l,l.exports,i),l.loaded=!0,l.exports}var s={};return i.m=t,i.c=s,i.p="dist/",i(0)}([function(t,i,s){function a(W){return W&&W.__esModule?W:{default:W}}var l=Object.assign||function(W){for(var Y=1;Y<arguments.length;Y++){var ee=arguments[Y];for(var J in ee)Object.prototype.hasOwnProperty.call(ee,J)&&(W[J]=ee[J])}return W},u=s(1),f=(a(u),s(6)),d=a(f),p=s(7),m=a(p),g=s(8),y=a(g),E=s(9),M=a(E),S=s(10),_=a(S),T=s(11),w=a(T),b=s(14),N=a(b),L=[],I=!1,B={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},P=function(){var W=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(W&&(I=!0),I)return L=(0,w.default)(L,B),(0,_.default)(L,B.once),L},C=function(){L=(0,N.default)(),P()},k=function(){L.forEach(function(W,Y){W.node.removeAttribute("data-aos"),W.node.removeAttribute("data-aos-easing"),W.node.removeAttribute("data-aos-duration"),W.node.removeAttribute("data-aos-delay")})},X=function(W){return W===!0||W==="mobile"&&M.default.mobile()||W==="phone"&&M.default.phone()||W==="tablet"&&M.default.tablet()||typeof W=="function"&&W()===!0},j=function(W){B=l(B,W),L=(0,N.default)();var Y=document.all&&!window.atob;return X(B.disable)||Y?k():(B.disableMutationObserver||y.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),B.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",B.easing),document.querySelector("body").setAttribute("data-aos-duration",B.duration),document.querySelector("body").setAttribute("data-aos-delay",B.delay),B.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?P(!0):B.startEvent==="load"?window.addEventListener(B.startEvent,function(){P(!0)}):document.addEventListener(B.startEvent,function(){P(!0)}),window.addEventListener("resize",(0,m.default)(P,B.debounceDelay,!0)),window.addEventListener("orientationchange",(0,m.default)(P,B.debounceDelay,!0)),window.addEventListener("scroll",(0,d.default)(function(){(0,_.default)(L,B.once)},B.throttleDelay)),B.disableMutationObserver||y.default.ready("[data-aos]",C),L)};t.exports={init:j,refresh:P,refreshHard:C}},function(t,i){},,,,,function(t,i){(function(s){function a(X,j,W){function Y(V){var xt=te,st=de;return te=de=void 0,Pe=V,pe=X.apply(st,xt)}function ee(V){return Pe=V,xe=setTimeout(ae,j),dt?Y(V):pe}function J(V){var xt=V-Ce,st=V-Pe,ft=j-xt;return rt?C(ft,ve-st):ft}function H(V){var xt=V-Ce,st=V-Pe;return Ce===void 0||xt>=j||xt<0||rt&&st>=ve}function ae(){var V=k();return H(V)?Z(V):void(xe=setTimeout(ae,J(V)))}function Z(V){return xe=void 0,Ve&&te?Y(V):(te=de=void 0,pe)}function O(){xe!==void 0&&clearTimeout(xe),Pe=0,te=Ce=de=xe=void 0}function Q(){return xe===void 0?pe:Z(k())}function Me(){var V=k(),xt=H(V);if(te=arguments,de=this,Ce=V,xt){if(xe===void 0)return ee(Ce);if(rt)return xe=setTimeout(ae,j),Y(Ce)}return xe===void 0&&(xe=setTimeout(ae,j)),pe}var te,de,ve,pe,xe,Ce,Pe=0,dt=!1,rt=!1,Ve=!0;if(typeof X!="function")throw new TypeError(g);return j=p(j)||0,u(W)&&(dt=!!W.leading,rt="maxWait"in W,ve=rt?P(p(W.maxWait)||0,j):ve,Ve="trailing"in W?!!W.trailing:Ve),Me.cancel=O,Me.flush=Q,Me}function l(X,j,W){var Y=!0,ee=!0;if(typeof X!="function")throw new TypeError(g);return u(W)&&(Y="leading"in W?!!W.leading:Y,ee="trailing"in W?!!W.trailing:ee),a(X,j,{leading:Y,maxWait:j,trailing:ee})}function u(X){var j=typeof X>"u"?"undefined":m(X);return!!X&&(j=="object"||j=="function")}function f(X){return!!X&&(typeof X>"u"?"undefined":m(X))=="object"}function d(X){return(typeof X>"u"?"undefined":m(X))=="symbol"||f(X)&&B.call(X)==E}function p(X){if(typeof X=="number")return X;if(d(X))return y;if(u(X)){var j=typeof X.valueOf=="function"?X.valueOf():X;X=u(j)?j+"":j}if(typeof X!="string")return X===0?X:+X;X=X.replace(M,"");var W=_.test(X);return W||T.test(X)?w(X.slice(2),W?2:8):S.test(X)?y:+X}var m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(X){return typeof X}:function(X){return X&&typeof Symbol=="function"&&X.constructor===Symbol&&X!==Symbol.prototype?"symbol":typeof X},g="Expected a function",y=NaN,E="[object Symbol]",M=/^\s+|\s+$/g,S=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,T=/^0o[0-7]+$/i,w=parseInt,b=(typeof s>"u"?"undefined":m(s))=="object"&&s&&s.Object===Object&&s,N=(typeof self>"u"?"undefined":m(self))=="object"&&self&&self.Object===Object&&self,L=b||N||Function("return this")(),I=Object.prototype,B=I.toString,P=Math.max,C=Math.min,k=function(){return L.Date.now()};t.exports=l}).call(i,function(){return this}())},function(t,i){(function(s){function a(k,X,j){function W(Ve){var V=Me,xt=te;return Me=te=void 0,Ce=Ve,ve=k.apply(xt,V)}function Y(Ve){return Ce=Ve,pe=setTimeout(H,X),Pe?W(Ve):ve}function ee(Ve){var V=Ve-xe,xt=Ve-Ce,st=X-V;return dt?P(st,de-xt):st}function J(Ve){var V=Ve-xe,xt=Ve-Ce;return xe===void 0||V>=X||V<0||dt&&xt>=de}function H(){var Ve=C();return J(Ve)?ae(Ve):void(pe=setTimeout(H,ee(Ve)))}function ae(Ve){return pe=void 0,rt&&Me?W(Ve):(Me=te=void 0,ve)}function Z(){pe!==void 0&&clearTimeout(pe),Ce=0,Me=xe=te=pe=void 0}function O(){return pe===void 0?ve:ae(C())}function Q(){var Ve=C(),V=J(Ve);if(Me=arguments,te=this,xe=Ve,V){if(pe===void 0)return Y(xe);if(dt)return pe=setTimeout(H,X),W(xe)}return pe===void 0&&(pe=setTimeout(H,X)),ve}var Me,te,de,ve,pe,xe,Ce=0,Pe=!1,dt=!1,rt=!0;if(typeof k!="function")throw new TypeError(m);return X=d(X)||0,l(j)&&(Pe=!!j.leading,dt="maxWait"in j,de=dt?B(d(j.maxWait)||0,X):de,rt="trailing"in j?!!j.trailing:rt),Q.cancel=Z,Q.flush=O,Q}function l(k){var X=typeof k>"u"?"undefined":p(k);return!!k&&(X=="object"||X=="function")}function u(k){return!!k&&(typeof k>"u"?"undefined":p(k))=="object"}function f(k){return(typeof k>"u"?"undefined":p(k))=="symbol"||u(k)&&I.call(k)==y}function d(k){if(typeof k=="number")return k;if(f(k))return g;if(l(k)){var X=typeof k.valueOf=="function"?k.valueOf():k;k=l(X)?X+"":X}if(typeof k!="string")return k===0?k:+k;k=k.replace(E,"");var j=S.test(k);return j||_.test(k)?T(k.slice(2),j?2:8):M.test(k)?g:+k}var p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(k){return typeof k}:function(k){return k&&typeof Symbol=="function"&&k.constructor===Symbol&&k!==Symbol.prototype?"symbol":typeof k},m="Expected a function",g=NaN,y="[object Symbol]",E=/^\s+|\s+$/g,M=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,_=/^0o[0-7]+$/i,T=parseInt,w=(typeof s>"u"?"undefined":p(s))=="object"&&s&&s.Object===Object&&s,b=(typeof self>"u"?"undefined":p(self))=="object"&&self&&self.Object===Object&&self,N=w||b||Function("return this")(),L=Object.prototype,I=L.toString,B=Math.max,P=Math.min,C=function(){return N.Date.now()};t.exports=a}).call(i,function(){return this}())},function(t,i){function s(p){var m=void 0,g=void 0;for(m=0;m<p.length;m+=1)if(g=p[m],g.dataset&&g.dataset.aos||g.children&&s(g.children))return!0;return!1}function a(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function l(){return!!a()}function u(p,m){var g=window.document,y=a(),E=new y(f);d=m,E.observe(g.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function f(p){p&&p.forEach(function(m){var g=Array.prototype.slice.call(m.addedNodes),y=Array.prototype.slice.call(m.removedNodes),E=g.concat(y);if(s(E))return d()})}Object.defineProperty(i,"__esModule",{value:!0});var d=function(){};i.default={isSupported:l,ready:u}},function(t,i){function s(g,y){if(!(g instanceof y))throw new TypeError("Cannot call a class as a function")}function a(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(i,"__esModule",{value:!0});var l=function(){function g(y,E){for(var M=0;M<E.length;M++){var S=E[M];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(y,S.key,S)}}return function(y,E,M){return E&&g(y.prototype,E),M&&g(y,M),y}}(),u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,f=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,d=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,m=function(){function g(){s(this,g)}return l(g,[{key:"phone",value:function(){var y=a();return!(!u.test(y)&&!f.test(y.substr(0,4)))}},{key:"mobile",value:function(){var y=a();return!(!d.test(y)&&!p.test(y.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),g}();i.default=new m},function(t,i){Object.defineProperty(i,"__esModule",{value:!0});var s=function(l,u,f){var d=l.node.getAttribute("data-aos-once");u>l.position?l.node.classList.add("aos-animate"):typeof d<"u"&&(d==="false"||!f&&d!=="true")&&l.node.classList.remove("aos-animate")},a=function(l,u){var f=window.pageYOffset,d=window.innerHeight;l.forEach(function(p,m){s(p,d+f,u)})};i.default=a},function(t,i,s){function a(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(i,"__esModule",{value:!0});var l=s(12),u=a(l),f=function(d,p){return d.forEach(function(m,g){m.node.classList.add("aos-init"),m.position=(0,u.default)(m.node,p.offset)}),d};i.default=f},function(t,i,s){function a(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(i,"__esModule",{value:!0});var l=s(13),u=a(l),f=function(d,p){var m=0,g=0,y=window.innerHeight,E={offset:d.getAttribute("data-aos-offset"),anchor:d.getAttribute("data-aos-anchor"),anchorPlacement:d.getAttribute("data-aos-anchor-placement")};switch(E.offset&&!isNaN(E.offset)&&(g=parseInt(E.offset)),E.anchor&&document.querySelectorAll(E.anchor)&&(d=document.querySelectorAll(E.anchor)[0]),m=(0,u.default)(d).top,E.anchorPlacement){case"top-bottom":break;case"center-bottom":m+=d.offsetHeight/2;break;case"bottom-bottom":m+=d.offsetHeight;break;case"top-center":m+=y/2;break;case"bottom-center":m+=y/2+d.offsetHeight;break;case"center-center":m+=y/2+d.offsetHeight/2;break;case"top-top":m+=y;break;case"bottom-top":m+=d.offsetHeight+y;break;case"center-top":m+=d.offsetHeight/2+y}return E.anchorPlacement||E.offset||isNaN(p)||(g=p),m+g};i.default=f},function(t,i){Object.defineProperty(i,"__esModule",{value:!0});var s=function(a){for(var l=0,u=0;a&&!isNaN(a.offsetLeft)&&!isNaN(a.offsetTop);)l+=a.offsetLeft-(a.tagName!="BODY"?a.scrollLeft:0),u+=a.offsetTop-(a.tagName!="BODY"?a.scrollTop:0),a=a.offsetParent;return{top:u,left:l}};i.default=s},function(t,i){Object.defineProperty(i,"__esModule",{value:!0});var s=function(a){return a=a||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(a,function(l){return{node:l}})};i.default=s}])})}(ku)),ku.exports}var Tb=wb();const bb=Bl(Tb);var Jn=function(){return Jn=Object.assign||function(e){for(var t,i=1,s=arguments.length;i<s;i++){t=arguments[i];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Jn.apply(this,arguments)};function bl(n,e,t){if(t||arguments.length===2)for(var i=0,s=e.length,a;i<s;i++)(a||!(i in e))&&(a||(a=Array.prototype.slice.call(e,0,i)),a[i]=e[i]);return n.concat(a||Array.prototype.slice.call(e))}var Gt="-ms-",xl="-moz-",Nt="-webkit-",zS="comm",gf="rule",tg="decl",Ab="@import",VS="@keyframes",Cb="@layer",HS=Math.abs,ng=String.fromCharCode,Pp=Object.assign;function Rb(n,e){return xn(n,0)^45?(((e<<2^xn(n,0))<<2^xn(n,1))<<2^xn(n,2))<<2^xn(n,3):0}function GS(n){return n.trim()}function wr(n,e){return(n=e.exec(n))?n[0]:n}function gt(n,e,t){return n.replace(e,t)}function Bu(n,e,t){return n.indexOf(e,t)}function xn(n,e){return n.charCodeAt(e)|0}function fa(n,e,t){return n.slice(e,t)}function Qi(n){return n.length}function WS(n){return n.length}function vl(n,e){return e.push(n),n}function Pb(n,e){return n.map(e).join("")}function jy(n,e){return n.filter(function(t){return!wr(t,e)})}var vf=1,da=1,jS=0,Ai=0,an=0,wa="";function yf(n,e,t,i,s,a,l,u){return{value:n,root:e,parent:t,type:i,props:s,children:a,line:vf,column:da,length:l,return:"",siblings:u}}function ps(n,e){return Pp(yf("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function ko(n){for(;n.root;)n=ps(n.root,{children:[n]});vl(n,n.siblings)}function Db(){return an}function Lb(){return an=Ai>0?xn(wa,--Ai):0,da--,an===10&&(da=1,vf--),an}function Gi(){return an=Ai<jS?xn(wa,Ai++):0,da++,an===10&&(da=1,vf++),an}function so(){return xn(wa,Ai)}function zu(){return Ai}function _f(n,e){return fa(wa,n,e)}function Dp(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ib(n){return vf=da=1,jS=Qi(wa=n),Ai=0,[]}function Nb(n){return wa="",n}function Th(n){return GS(_f(Ai-1,Lp(n===91?n+2:n===40?n+1:n)))}function Ub(n){for(;(an=so())&&an<33;)Gi();return Dp(n)>2||Dp(an)>3?"":" "}function Fb(n,e){for(;--e&&Gi()&&!(an<48||an>102||an>57&&an<65||an>70&&an<97););return _f(n,zu()+(e<6&&so()==32&&Gi()==32))}function Lp(n){for(;Gi();)switch(an){case n:return Ai;case 34:case 39:n!==34&&n!==39&&Lp(an);break;case 40:n===41&&Lp(n);break;case 92:Gi();break}return Ai}function Ob(n,e){for(;Gi()&&n+an!==57;)if(n+an===84&&so()===47)break;return"/*"+_f(e,Ai-1)+"*"+ng(n===47?n:Gi())}function kb(n){for(;!Dp(so());)Gi();return _f(n,Ai)}function Bb(n){return Nb(Vu("",null,null,null,[""],n=Ib(n),0,[0],n))}function Vu(n,e,t,i,s,a,l,u,f){for(var d=0,p=0,m=l,g=0,y=0,E=0,M=1,S=1,_=1,T=0,w="",b=s,N=a,L=i,I=w;S;)switch(E=T,T=Gi()){case 40:if(E!=108&&xn(I,m-1)==58){Bu(I+=gt(Th(T),"&","&\f"),"&\f",HS(d?u[d-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:I+=Th(T);break;case 9:case 10:case 13:case 32:I+=Ub(E);break;case 92:I+=Fb(zu()-1,7);continue;case 47:switch(so()){case 42:case 47:vl(zb(Ob(Gi(),zu()),e,t,f),f);break;default:I+="/"}break;case 123*M:u[d++]=Qi(I)*_;case 125*M:case 59:case 0:switch(T){case 0:case 125:S=0;case 59+p:_==-1&&(I=gt(I,/\f/g,"")),y>0&&Qi(I)-m&&vl(y>32?$y(I+";",i,t,m-1,f):$y(gt(I," ","")+";",i,t,m-2,f),f);break;case 59:I+=";";default:if(vl(L=Xy(I,e,t,d,p,s,u,w,b=[],N=[],m,a),a),T===123)if(p===0)Vu(I,e,L,L,b,a,m,u,N);else switch(g===99&&xn(I,3)===110?100:g){case 100:case 108:case 109:case 115:Vu(n,L,L,i&&vl(Xy(n,L,L,0,0,s,u,w,s,b=[],m,N),N),s,N,m,u,i?b:N);break;default:Vu(I,L,L,L,[""],N,0,u,N)}}d=p=y=0,M=_=1,w=I="",m=l;break;case 58:m=1+Qi(I),y=E;default:if(M<1){if(T==123)--M;else if(T==125&&M++==0&&Lb()==125)continue}switch(I+=ng(T),T*M){case 38:_=p>0?1:(I+="\f",-1);break;case 44:u[d++]=(Qi(I)-1)*_,_=1;break;case 64:so()===45&&(I+=Th(Gi())),g=so(),p=m=Qi(w=I+=kb(zu())),T++;break;case 45:E===45&&Qi(I)==2&&(M=0)}}return a}function Xy(n,e,t,i,s,a,l,u,f,d,p,m){for(var g=s-1,y=s===0?a:[""],E=WS(y),M=0,S=0,_=0;M<i;++M)for(var T=0,w=fa(n,g+1,g=HS(S=l[M])),b=n;T<E;++T)(b=GS(S>0?y[T]+" "+w:gt(w,/&\f/g,y[T])))&&(f[_++]=b);return yf(n,e,t,s===0?gf:u,f,d,p,m)}function zb(n,e,t,i){return yf(n,e,t,zS,ng(Db()),fa(n,2,-2),0,i)}function $y(n,e,t,i,s){return yf(n,e,t,tg,fa(n,0,i),fa(n,i+1,-1),i,s)}function XS(n,e,t){switch(Rb(n,e)){case 5103:return Nt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Nt+n+n;case 4789:return xl+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Nt+n+xl+n+Gt+n+n;case 5936:switch(xn(n,e+11)){case 114:return Nt+n+Gt+gt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Nt+n+Gt+gt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Nt+n+Gt+gt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Nt+n+Gt+n+n;case 6165:return Nt+n+Gt+"flex-"+n+n;case 5187:return Nt+n+gt(n,/(\w+).+(:[^]+)/,Nt+"box-$1$2"+Gt+"flex-$1$2")+n;case 5443:return Nt+n+Gt+"flex-item-"+gt(n,/flex-|-self/g,"")+(wr(n,/flex-|baseline/)?"":Gt+"grid-row-"+gt(n,/flex-|-self/g,""))+n;case 4675:return Nt+n+Gt+"flex-line-pack"+gt(n,/align-content|flex-|-self/g,"")+n;case 5548:return Nt+n+Gt+gt(n,"shrink","negative")+n;case 5292:return Nt+n+Gt+gt(n,"basis","preferred-size")+n;case 6060:return Nt+"box-"+gt(n,"-grow","")+Nt+n+Gt+gt(n,"grow","positive")+n;case 4554:return Nt+gt(n,/([^-])(transform)/g,"$1"+Nt+"$2")+n;case 6187:return gt(gt(gt(n,/(zoom-|grab)/,Nt+"$1"),/(image-set)/,Nt+"$1"),n,"")+n;case 5495:case 3959:return gt(n,/(image-set\([^]*)/,Nt+"$1$`$1");case 4968:return gt(gt(n,/(.+:)(flex-)?(.*)/,Nt+"box-pack:$3"+Gt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Nt+n+n;case 4200:if(!wr(n,/flex-|baseline/))return Gt+"grid-column-align"+fa(n,e)+n;break;case 2592:case 3360:return Gt+gt(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(i,s){return e=s,wr(i.props,/grid-\w+-end/)})?~Bu(n+(t=t[e].value),"span",0)?n:Gt+gt(n,"-start","")+n+Gt+"grid-row-span:"+(~Bu(t,"span",0)?wr(t,/\d+/):+wr(t,/\d+/)-+wr(n,/\d+/))+";":Gt+gt(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(i){return wr(i.props,/grid-\w+-start/)})?n:Gt+gt(gt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return gt(n,/(.+)-inline(.+)/,Nt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Qi(n)-1-e>6)switch(xn(n,e+1)){case 109:if(xn(n,e+4)!==45)break;case 102:return gt(n,/(.+:)(.+)-([^]+)/,"$1"+Nt+"$2-$3$1"+xl+(xn(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~Bu(n,"stretch",0)?XS(gt(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return gt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,s,a,l,u,f,d){return Gt+s+":"+a+d+(l?Gt+s+"-span:"+(u?f:+f-+a)+d:"")+n});case 4949:if(xn(n,e+6)===121)return gt(n,":",":"+Nt)+n;break;case 6444:switch(xn(n,xn(n,14)===45?18:11)){case 120:return gt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Nt+(xn(n,14)===45?"inline-":"")+"box$3$1"+Nt+"$2$3$1"+Gt+"$2box$3")+n;case 100:return gt(n,":",":"+Gt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return gt(n,"scroll-","scroll-snap-")+n}return n}function nf(n,e){for(var t="",i=0;i<n.length;i++)t+=e(n[i],i,n,e)||"";return t}function Vb(n,e,t,i){switch(n.type){case Cb:if(n.children.length)break;case Ab:case tg:return n.return=n.return||n.value;case zS:return"";case VS:return n.return=n.value+"{"+nf(n.children,i)+"}";case gf:if(!Qi(n.value=n.props.join(",")))return""}return Qi(t=nf(n.children,i))?n.return=n.value+"{"+t+"}":""}function Hb(n){var e=WS(n);return function(t,i,s,a){for(var l="",u=0;u<e;u++)l+=n[u](t,i,s,a)||"";return l}}function Gb(n){return function(e){e.root||(e=e.return)&&n(e)}}function Wb(n,e,t,i){if(n.length>-1&&!n.return)switch(n.type){case tg:n.return=XS(n.value,n.length,t);return;case VS:return nf([ps(n,{value:gt(n.value,"@","@"+Nt)})],i);case gf:if(n.length)return Pb(t=n.props,function(s){switch(wr(s,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ko(ps(n,{props:[gt(s,/:(read-\w+)/,":"+xl+"$1")]})),ko(ps(n,{props:[s]})),Pp(n,{props:jy(t,i)});break;case"::placeholder":ko(ps(n,{props:[gt(s,/:(plac\w+)/,":"+Nt+"input-$1")]})),ko(ps(n,{props:[gt(s,/:(plac\w+)/,":"+xl+"$1")]})),ko(ps(n,{props:[gt(s,/:(plac\w+)/,Gt+"input-$1")]})),ko(ps(n,{props:[s]})),Pp(n,{props:jy(t,i)});break}return""})}}var jb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ui={},ha=typeof process<"u"&&ui!==void 0&&(ui.REACT_APP_SC_ATTR||ui.SC_ATTR)||"data-styled",$S="active",YS="data-styled-version",xf="6.1.18",ig=`/*!sc*/
`,rf=typeof window<"u"&&typeof document<"u",Xb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ui!==void 0&&ui.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ui.REACT_APP_SC_DISABLE_SPEEDY!==""?ui.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ui.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ui!==void 0&&ui.SC_DISABLE_SPEEDY!==void 0&&ui.SC_DISABLE_SPEEDY!==""&&ui.SC_DISABLE_SPEEDY!=="false"&&ui.SC_DISABLE_SPEEDY),Sf=Object.freeze([]),pa=Object.freeze({});function $b(n,e,t){return t===void 0&&(t=pa),n.theme!==t.theme&&n.theme||e||t.theme}var qS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Yb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,qb=/(^-|-$)/g;function Yy(n){return n.replace(Yb,"-").replace(qb,"")}var Kb=/(a)(d)/gi,lu=52,qy=function(n){return String.fromCharCode(n+(n>25?39:97))};function Ip(n){var e,t="";for(e=Math.abs(n);e>lu;e=e/lu|0)t=qy(e%lu)+t;return(qy(e%lu)+t).replace(Kb,"$1-$2")}var bh,KS=5381,ea=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},ZS=function(n){return ea(KS,n)};function QS(n){return Ip(ZS(n)>>>0)}function Zb(n){return n.displayName||n.name||"Component"}function Ah(n){return typeof n=="string"&&!0}var JS=typeof Symbol=="function"&&Symbol.for,eE=JS?Symbol.for("react.memo"):60115,Qb=JS?Symbol.for("react.forward_ref"):60112,Jb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},eA={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},tE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tA=((bh={})[Qb]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},bh[eE]=tE,bh);function Ky(n){return("type"in(e=n)&&e.type.$$typeof)===eE?tE:"$$typeof"in n?tA[n.$$typeof]:Jb;var e}var nA=Object.defineProperty,iA=Object.getOwnPropertyNames,Zy=Object.getOwnPropertySymbols,rA=Object.getOwnPropertyDescriptor,sA=Object.getPrototypeOf,Qy=Object.prototype;function nE(n,e,t){if(typeof e!="string"){if(Qy){var i=sA(e);i&&i!==Qy&&nE(n,i,t)}var s=iA(e);Zy&&(s=s.concat(Zy(e)));for(var a=Ky(n),l=Ky(e),u=0;u<s.length;++u){var f=s[u];if(!(f in eA||t&&t[f]||l&&f in l||a&&f in a)){var d=rA(e,f);try{nA(n,f,d)}catch{}}}}return n}function ma(n){return typeof n=="function"}function rg(n){return typeof n=="object"&&"styledComponentId"in n}function Js(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function Np(n,e){if(n.length===0)return"";for(var t=n[0],i=1;i<n.length;i++)t+=n[i];return t}function Al(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Up(n,e,t){if(t===void 0&&(t=!1),!t&&!Al(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)n[i]=Up(n[i],e[i]);else if(Al(e))for(var i in e)n[i]=Up(n[i],e[i]);return n}function sg(n,e){Object.defineProperty(n,"toString",{value:e})}function zl(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var oA=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,i=0;i<e;i++)t+=this.groupSizes[i];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,a=s;e>=a;)if((a<<=1)<0)throw zl(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var l=s;l<a;l++)this.groupSizes[l]=0}for(var u=this.indexOfGroup(e+1),f=(l=0,t.length);l<f;l++)this.tag.insertRule(u,t[l])&&(this.groupSizes[e]++,u++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],i=this.indexOfGroup(e),s=i+t;this.groupSizes[e]=0;for(var a=i;a<s;a++)this.tag.deleteRule(i)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var i=this.groupSizes[e],s=this.indexOfGroup(e),a=s+i,l=s;l<a;l++)t+="".concat(this.tag.getRule(l)).concat(ig);return t},n}(),Hu=new Map,sf=new Map,Gu=1,cu=function(n){if(Hu.has(n))return Hu.get(n);for(;sf.has(Gu);)Gu++;var e=Gu++;return Hu.set(n,e),sf.set(e,n),e},aA=function(n,e){Gu=e+1,Hu.set(n,e),sf.set(e,n)},lA="style[".concat(ha,"][").concat(YS,'="').concat(xf,'"]'),cA=new RegExp("^".concat(ha,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),uA=function(n,e,t){for(var i,s=t.split(","),a=0,l=s.length;a<l;a++)(i=s[a])&&n.registerName(e,i)},fA=function(n,e){for(var t,i=((t=e.textContent)!==null&&t!==void 0?t:"").split(ig),s=[],a=0,l=i.length;a<l;a++){var u=i[a].trim();if(u){var f=u.match(cA);if(f){var d=0|parseInt(f[1],10),p=f[2];d!==0&&(aA(p,d),uA(n,p,f[3]),n.getTag().insertRules(d,s)),s.length=0}else s.push(u)}}},Jy=function(n){for(var e=document.querySelectorAll(lA),t=0,i=e.length;t<i;t++){var s=e[t];s&&s.getAttribute(ha)!==$S&&(fA(n,s),s.parentNode&&s.parentNode.removeChild(s))}};function dA(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var iE=function(n){var e=document.head,t=n||e,i=document.createElement("style"),s=function(u){var f=Array.from(u.querySelectorAll("style[".concat(ha,"]")));return f[f.length-1]}(t),a=s!==void 0?s.nextSibling:null;i.setAttribute(ha,$S),i.setAttribute(YS,xf);var l=dA();return l&&i.setAttribute("nonce",l),t.insertBefore(i,a),i},hA=function(){function n(e){this.element=iE(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var i=document.styleSheets,s=0,a=i.length;s<a;s++){var l=i[s];if(l.ownerNode===t)return l}throw zl(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),pA=function(){function n(e){this.element=iE(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var i=document.createTextNode(t);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),mA=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),e_=rf,gA={isServer:!rf,useCSSOMInjection:!Xb},rE=function(){function n(e,t,i){e===void 0&&(e=pa),t===void 0&&(t={});var s=this;this.options=Jn(Jn({},gA),e),this.gs=t,this.names=new Map(i),this.server=!!e.isServer,!this.server&&rf&&e_&&(e_=!1,Jy(this)),sg(this,function(){return function(a){for(var l=a.getTag(),u=l.length,f="",d=function(m){var g=function(_){return sf.get(_)}(m);if(g===void 0)return"continue";var y=a.names.get(g),E=l.getGroup(m);if(y===void 0||!y.size||E.length===0)return"continue";var M="".concat(ha,".g").concat(m,'[id="').concat(g,'"]'),S="";y!==void 0&&y.forEach(function(_){_.length>0&&(S+="".concat(_,","))}),f+="".concat(E).concat(M,'{content:"').concat(S,'"}').concat(ig)},p=0;p<u;p++)d(p);return f}(s)})}return n.registerId=function(e){return cu(e)},n.prototype.rehydrate=function(){!this.server&&rf&&Jy(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(Jn(Jn({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var i=t.useCSSOMInjection,s=t.target;return t.isServer?new mA(s):i?new hA(s):new pA(s)}(this.options),new oA(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(cu(e),this.names.has(e))this.names.get(e).add(t);else{var i=new Set;i.add(t),this.names.set(e,i)}},n.prototype.insertRules=function(e,t,i){this.registerName(e,t),this.getTag().insertRules(cu(e),i)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(cu(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),vA=/&/g,yA=/^\s*\/\/.*$/gm;function sE(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=sE(t.children,e)),t})}function _A(n){var e,t,i,s=pa,a=s.options,l=a===void 0?pa:a,u=s.plugins,f=u===void 0?Sf:u,d=function(g,y,E){return E.startsWith(t)&&E.endsWith(t)&&E.replaceAll(t,"").length>0?".".concat(e):g},p=f.slice();p.push(function(g){g.type===gf&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(vA,t).replace(i,d))}),l.prefix&&p.push(Wb),p.push(Vb);var m=function(g,y,E,M){y===void 0&&(y=""),E===void 0&&(E=""),M===void 0&&(M="&"),e=M,t=y,i=new RegExp("\\".concat(t,"\\b"),"g");var S=g.replace(yA,""),_=Bb(E||y?"".concat(E," ").concat(y," { ").concat(S," }"):S);l.namespace&&(_=sE(_,l.namespace));var T=[];return nf(_,Hb(p.concat(Gb(function(w){return T.push(w)})))),T};return m.hash=f.length?f.reduce(function(g,y){return y.name||zl(15),ea(g,y.name)},KS).toString():"",m}var xA=new rE,Fp=_A(),oE=Un.createContext({shouldForwardProp:void 0,styleSheet:xA,stylis:Fp});oE.Consumer;Un.createContext(void 0);function t_(){return D.useContext(oE)}var aE=function(){function n(e,t){var i=this;this.inject=function(s,a){a===void 0&&(a=Fp);var l=i.name+a.hash;s.hasNameForId(i.id,l)||s.insertRules(i.id,l,a(i.rules,l,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,sg(this,function(){throw zl(12,String(i.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=Fp),this.name+e.hash},n}(),SA=function(n){return n>="A"&&n<="Z"};function n_(n){for(var e="",t=0;t<n.length;t++){var i=n[t];if(t===1&&i==="-"&&n[0]==="-")return n;SA(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var lE=function(n){return n==null||n===!1||n===""},cE=function(n){var e,t,i=[];for(var s in n){var a=n[s];n.hasOwnProperty(s)&&!lE(a)&&(Array.isArray(a)&&a.isCss||ma(a)?i.push("".concat(n_(s),":"),a,";"):Al(a)?i.push.apply(i,bl(bl(["".concat(s," {")],cE(a),!1),["}"],!1)):i.push("".concat(n_(s),": ").concat((e=s,(t=a)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in jb||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return i};function oo(n,e,t,i){if(lE(n))return[];if(rg(n))return[".".concat(n.styledComponentId)];if(ma(n)){if(!ma(a=n)||a.prototype&&a.prototype.isReactComponent||!e)return[n];var s=n(e);return oo(s,e,t,i)}var a;return n instanceof aE?t?(n.inject(t,i),[n.getName(i)]):[n]:Al(n)?cE(n):Array.isArray(n)?Array.prototype.concat.apply(Sf,n.map(function(l){return oo(l,e,t,i)})):[n.toString()]}function EA(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(ma(t)&&!rg(t))return!1}return!0}var MA=ZS(xf),wA=function(){function n(e,t,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&EA(e),this.componentId=t,this.baseHash=ea(MA,t),this.baseStyle=i,rE.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,i){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))s=Js(s,this.staticRulesId);else{var a=Np(oo(this.rules,e,t,i)),l=Ip(ea(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,l)){var u=i(a,".".concat(l),void 0,this.componentId);t.insertRules(this.componentId,l,u)}s=Js(s,l),this.staticRulesId=l}else{for(var f=ea(this.baseHash,i.hash),d="",p=0;p<this.rules.length;p++){var m=this.rules[p];if(typeof m=="string")d+=m;else if(m){var g=Np(oo(m,e,t,i));f=ea(f,g+p),d+=g}}if(d){var y=Ip(f>>>0);t.hasNameForId(this.componentId,y)||t.insertRules(this.componentId,y,i(d,".".concat(y),void 0,this.componentId)),s=Js(s,y)}}return s},n}(),uE=Un.createContext(void 0);uE.Consumer;var Ch={};function TA(n,e,t){var i=rg(n),s=n,a=!Ah(n),l=e.attrs,u=l===void 0?Sf:l,f=e.componentId,d=f===void 0?function(b,N){var L=typeof b!="string"?"sc":Yy(b);Ch[L]=(Ch[L]||0)+1;var I="".concat(L,"-").concat(QS(xf+L+Ch[L]));return N?"".concat(N,"-").concat(I):I}(e.displayName,e.parentComponentId):f,p=e.displayName,m=p===void 0?function(b){return Ah(b)?"styled.".concat(b):"Styled(".concat(Zb(b),")")}(n):p,g=e.displayName&&e.componentId?"".concat(Yy(e.displayName),"-").concat(e.componentId):e.componentId||d,y=i&&s.attrs?s.attrs.concat(u).filter(Boolean):u,E=e.shouldForwardProp;if(i&&s.shouldForwardProp){var M=s.shouldForwardProp;if(e.shouldForwardProp){var S=e.shouldForwardProp;E=function(b,N){return M(b,N)&&S(b,N)}}else E=M}var _=new wA(t,g,i?s.componentStyle:void 0);function T(b,N){return function(L,I,B){var P=L.attrs,C=L.componentStyle,k=L.defaultProps,X=L.foldedComponentIds,j=L.styledComponentId,W=L.target,Y=Un.useContext(uE),ee=t_(),J=L.shouldForwardProp||ee.shouldForwardProp,H=$b(I,Y,k)||pa,ae=function(de,ve,pe){for(var xe,Ce=Jn(Jn({},ve),{className:void 0,theme:pe}),Pe=0;Pe<de.length;Pe+=1){var dt=ma(xe=de[Pe])?xe(Ce):xe;for(var rt in dt)Ce[rt]=rt==="className"?Js(Ce[rt],dt[rt]):rt==="style"?Jn(Jn({},Ce[rt]),dt[rt]):dt[rt]}return ve.className&&(Ce.className=Js(Ce.className,ve.className)),Ce}(P,I,H),Z=ae.as||W,O={};for(var Q in ae)ae[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&ae.theme===H||(Q==="forwardedAs"?O.as=ae.forwardedAs:J&&!J(Q,Z)||(O[Q]=ae[Q]));var Me=function(de,ve){var pe=t_(),xe=de.generateAndInjectStyles(ve,pe.styleSheet,pe.stylis);return xe}(C,ae),te=Js(X,j);return Me&&(te+=" "+Me),ae.className&&(te+=" "+ae.className),O[Ah(Z)&&!qS.has(Z)?"class":"className"]=te,B&&(O.ref=B),D.createElement(Z,O)}(w,b,N)}T.displayName=m;var w=Un.forwardRef(T);return w.attrs=y,w.componentStyle=_,w.displayName=m,w.shouldForwardProp=E,w.foldedComponentIds=i?Js(s.foldedComponentIds,s.styledComponentId):"",w.styledComponentId=g,w.target=i?s.target:n,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=i?function(N){for(var L=[],I=1;I<arguments.length;I++)L[I-1]=arguments[I];for(var B=0,P=L;B<P.length;B++)Up(N,P[B],!0);return N}({},s.defaultProps,b):b}}),sg(w,function(){return".".concat(w.styledComponentId)}),a&&nE(w,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function i_(n,e){for(var t=[n[0]],i=0,s=e.length;i<s;i+=1)t.push(e[i],n[i+1]);return t}var r_=function(n){return Object.assign(n,{isCss:!0})};function fE(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(ma(n)||Al(n))return r_(oo(i_(Sf,bl([n],e,!0))));var i=n;return e.length===0&&i.length===1&&typeof i[0]=="string"?oo(i):r_(oo(i_(i,e)))}function Op(n,e,t){if(t===void 0&&(t=pa),!e)throw zl(1,e);var i=function(s){for(var a=[],l=1;l<arguments.length;l++)a[l-1]=arguments[l];return n(e,t,fE.apply(void 0,bl([s],a,!1)))};return i.attrs=function(s){return Op(n,e,Jn(Jn({},t),{attrs:Array.prototype.concat(t.attrs,s).filter(Boolean)}))},i.withConfig=function(s){return Op(n,e,Jn(Jn({},t),s))},i}var dE=function(n){return Op(TA,n)},kt=dE;qS.forEach(function(n){kt[n]=dE(n)});function bA(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var i=Np(fE.apply(void 0,bl([n],e,!1))),s=QS(i);return new aE(s,i)}const AA=kt.button`
  background: transparent;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--text-color);
  padding: 0;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  margin: 0 5px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(var(--primary-rgb), 0.1);
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
  }

  &:hover::before {
    transform: scale(1);
  }

  svg {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    stroke: var(--text-color);
  }

  &:hover svg {
    transform: rotate(30deg);
    color: var(--primary-color);
    stroke: var(--primary-color);
  }

  [data-theme="dark"] &:hover svg {
    transform: rotate(-30deg);
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`,CA=()=>{const[n,e]=D.useState(!1),t=D.useCallback(()=>{if(typeof document<"u"){const i=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",i),localStorage.setItem("theme",i),e(i==="dark")}},[]);return D.useEffect(()=>{if(typeof document<"u"){const i=localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.setAttribute("data-theme",i),e(i==="dark")}},[]),G.jsx(AA,{onClick:t,"aria-label":"Toggle dark mode",children:n?G.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[G.jsx("circle",{cx:"12",cy:"12",r:"5"}),G.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),G.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),G.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),G.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),G.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),G.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),G.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),G.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}):G.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:G.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})})},RA=kt.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  gap: 3px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  margin: 0 auto;
  padding: 0.2rem 0.7rem;
  position: fixed;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
  max-width: 90%;
  border-radius: 30px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 1000;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  /* Dark mode adjustments for navbar */
  [data-theme="dark"] & {
    background: rgba(30, 32, 40, 0.65);
    border: 1px solid rgba(80, 90, 120, 0.3);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    width: 90%;
    padding: 0.25rem;
    gap: 2px;
  }

  @media (max-width: 480px) {
    top: 10px;
    padding: 0.2rem;
  }
`,PA=kt.a`
  color: var(--text-color);
  text-decoration: none;
  padding: 0.25rem 0.55rem;
  margin: 0 1.5px;
  border-radius: 15px;
  font-size: 0.8em;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  overflow: visible;
  white-space: nowrap;

  &::after {
    content: "";
    position: absolute;
    bottom: 3px;
    left: 15%;
    width: 70%;
    height: 1.2px;
    background: linear-gradient(
      90deg,
      var(--primary-color),
      var(--secondary-color)
    );
    transform: scaleX(0);
    transition: transform 0.3s ease-out;
    transform-origin: right;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  &.active {
    background: rgba(74, 144, 226, 0.15);
    color: var(--primary-color);
    font-weight: 600;
  }

  [data-theme="dark"] &.active {
    background: rgba(100, 160, 255, 0.15);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    text-decoration: none;
    transform: translateY(-1px);
  }

  [data-theme="dark"] &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    font-size: 0.85em;
    padding: 0.4rem 0.5rem;
    margin: 0;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
    padding: 0.3rem 0.4rem;
  }
`,DA=kt.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(
    90deg,
    var(--primary-color),
    var(--secondary-color)
  );
  transform-origin: 0 50%;
  transform: scaleX(${n=>n.$progress});
  z-index: 1001;
  transition: transform 0.2s ease;
`,LA=()=>{const[n,e]=D.useState(0),[t,i]=D.useState(0);D.useEffect(()=>{let l=!1;const u=()=>{l||(window.requestAnimationFrame(()=>{e(window.scrollY);const f=document.documentElement.scrollHeight-window.innerHeight,d=f>0?window.scrollY/f:0;i(d),l=!1}),l=!0)};return window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]);const s=D.useCallback(l=>{l.preventDefault();const u=l.currentTarget.getAttribute("href");if(u&&u.startsWith("#")){const f=document.querySelector(u);if(f){const d=document.querySelector(".navbar"),p=(d==null?void 0:d.offsetHeight)||0,m=f.offsetTop-p-20;window.scrollTo({top:m,behavior:"smooth"})}}},[]),a=D.useMemo(()=>[{href:"#about",label:"About"},{href:"#terminal",label:"Terminal"},{href:"#journey",label:"Journey"},{href:"#passions",label:"Passions"},{href:"#gallery",label:"Gallery"},{href:"#projects",label:"Projects"},{href:"#insights",label:"Insights"},{href:"#bookshelf",label:"Books"},{href:"#Social-Accounts",label:"Connect"}],[]);return G.jsxs(G.Fragment,{children:[G.jsx(DA,{$progress:t}),G.jsxs(RA,{$scrolled:n>50,className:"navbar",children:[a.map((l,u)=>G.jsx(PA,{href:l.href,onClick:s,children:l.label},`nav-${u}`)),G.jsx(CA,{})]})]})},hE=D.createContext({});function IA(n){const e=D.useRef(null);return e.current===null&&(e.current=n()),e.current}const og=typeof window<"u",NA=og?D.useLayoutEffect:D.useEffect,ag=D.createContext(null);function lg(n,e){n.indexOf(e)===-1&&n.push(e)}function cg(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const Pr=(n,e,t)=>t>e?e:t<n?n:t;let ug=()=>{};const Dr={},pE=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function mE(n){return typeof n=="object"&&n!==null}const gE=n=>/^0[^.\s]+$/u.test(n);function fg(n){let e;return()=>(e===void 0&&(e=n()),e)}const Ti=n=>n,UA=(n,e)=>t=>e(n(t)),Vl=(...n)=>n.reduce(UA),Cl=(n,e,t)=>{const i=e-n;return i===0?1:(t-n)/i};class dg{constructor(){this.subscriptions=[]}add(e){return lg(this.subscriptions,e),()=>cg(this.subscriptions,e)}notify(e,t,i){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](e,t,i);else for(let a=0;a<s;a++){const l=this.subscriptions[a];l&&l(e,t,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const nr=n=>n*1e3,ir=n=>n/1e3;function vE(n,e){return e?n*(1e3/e):0}const yE=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,FA=1e-7,OA=12;function kA(n,e,t,i,s){let a,l,u=0;do l=e+(t-e)/2,a=yE(l,i,s)-n,a>0?t=l:e=l;while(Math.abs(a)>FA&&++u<OA);return l}function Hl(n,e,t,i){if(n===e&&t===i)return Ti;const s=a=>kA(a,0,1,n,t);return a=>a===0||a===1?a:yE(s(a),e,i)}const _E=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,xE=n=>e=>1-n(1-e),SE=Hl(.33,1.53,.69,.99),hg=xE(SE),EE=_E(hg),ME=n=>(n*=2)<1?.5*hg(n):.5*(2-Math.pow(2,-10*(n-1))),pg=n=>1-Math.sin(Math.acos(n)),wE=xE(pg),TE=_E(pg),BA=Hl(.42,0,1,1),zA=Hl(0,0,.58,1),bE=Hl(.42,0,.58,1),VA=n=>Array.isArray(n)&&typeof n[0]!="number",AE=n=>Array.isArray(n)&&typeof n[0]=="number",HA={linear:Ti,easeIn:BA,easeInOut:bE,easeOut:zA,circIn:pg,circInOut:TE,circOut:wE,backIn:hg,backInOut:EE,backOut:SE,anticipate:ME},GA=n=>typeof n=="string",s_=n=>{if(AE(n)){ug(n.length===4);const[e,t,i,s]=n;return Hl(e,t,i,s)}else if(GA(n))return HA[n];return n},uu=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],o_={value:null};function WA(n,e){let t=new Set,i=new Set,s=!1,a=!1;const l=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1},f=0;function d(m){l.has(m)&&(p.schedule(m),n()),f++,m(u)}const p={schedule:(m,g=!1,y=!1)=>{const M=y&&s?t:i;return g&&l.add(m),M.has(m)||M.add(m),m},cancel:m=>{i.delete(m),l.delete(m)},process:m=>{if(u=m,s){a=!0;return}s=!0,[t,i]=[i,t],t.forEach(d),e&&o_.value&&o_.value.frameloop[e].push(f),f=0,t.clear(),s=!1,a&&(a=!1,p.process(m))}};return p}const jA=40;function CE(n,e){let t=!1,i=!0;const s={delta:0,timestamp:0,isProcessing:!1},a=()=>t=!0,l=uu.reduce((w,b)=>(w[b]=WA(a,e?b:void 0),w),{}),{setup:u,read:f,resolveKeyframes:d,preUpdate:p,update:m,preRender:g,render:y,postRender:E}=l,M=()=>{const w=Dr.useManualTiming?s.timestamp:performance.now();t=!1,Dr.useManualTiming||(s.delta=i?1e3/60:Math.max(Math.min(w-s.timestamp,jA),1)),s.timestamp=w,s.isProcessing=!0,u.process(s),f.process(s),d.process(s),p.process(s),m.process(s),g.process(s),y.process(s),E.process(s),s.isProcessing=!1,t&&e&&(i=!1,n(M))},S=()=>{t=!0,i=!0,s.isProcessing||n(M)};return{schedule:uu.reduce((w,b)=>{const N=l[b];return w[b]=(L,I=!1,B=!1)=>(t||S(),N.schedule(L,I,B)),w},{}),cancel:w=>{for(let b=0;b<uu.length;b++)l[uu[b]].cancel(w)},state:s,steps:l}}const{schedule:qt,cancel:xs,state:wn,steps:Rh}=CE(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ti,!0);let Wu;function XA(){Wu=void 0}const ei={now:()=>(Wu===void 0&&ei.set(wn.isProcessing||Dr.useManualTiming?wn.timestamp:performance.now()),Wu),set:n=>{Wu=n,queueMicrotask(XA)}},RE=n=>e=>typeof e=="string"&&e.startsWith(n),mg=RE("--"),$A=RE("var(--"),gg=n=>$A(n)?YA.test(n.split("/*")[0].trim()):!1,YA=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Ta={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Rl={...Ta,transform:n=>Pr(0,1,n)},fu={...Ta,default:1},Sl=n=>Math.round(n*1e5)/1e5,vg=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function qA(n){return n==null}const KA=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,yg=(n,e)=>t=>!!(typeof t=="string"&&KA.test(t)&&t.startsWith(n)||e&&!qA(t)&&Object.prototype.hasOwnProperty.call(t,e)),PE=(n,e,t)=>i=>{if(typeof i!="string")return i;const[s,a,l,u]=i.match(vg);return{[n]:parseFloat(s),[e]:parseFloat(a),[t]:parseFloat(l),alpha:u!==void 0?parseFloat(u):1}},ZA=n=>Pr(0,255,n),Ph={...Ta,transform:n=>Math.round(ZA(n))},eo={test:yg("rgb","red"),parse:PE("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:i=1})=>"rgba("+Ph.transform(n)+", "+Ph.transform(e)+", "+Ph.transform(t)+", "+Sl(Rl.transform(i))+")"};function QA(n){let e="",t="",i="",s="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),i=n.substring(5,7),s=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),i=n.substring(3,4),s=n.substring(4,5),e+=e,t+=t,i+=i,s+=s),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(i,16),alpha:s?parseInt(s,16)/255:1}}const kp={test:yg("#"),parse:QA,transform:eo.transform},Gl=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),ms=Gl("deg"),rr=Gl("%"),at=Gl("px"),JA=Gl("vh"),eC=Gl("vw"),a_={...rr,parse:n=>rr.parse(n)/100,transform:n=>rr.transform(n*100)},ta={test:yg("hsl","hue"),parse:PE("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:i=1})=>"hsla("+Math.round(n)+", "+rr.transform(Sl(e))+", "+rr.transform(Sl(t))+", "+Sl(Rl.transform(i))+")"},Nn={test:n=>eo.test(n)||kp.test(n)||ta.test(n),parse:n=>eo.test(n)?eo.parse(n):ta.test(n)?ta.parse(n):kp.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?eo.transform(n):ta.transform(n)},tC=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function nC(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(vg))==null?void 0:e.length)||0)+(((t=n.match(tC))==null?void 0:t.length)||0)>0}const DE="number",LE="color",iC="var",rC="var(",l_="${}",sC=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Pl(n){const e=n.toString(),t=[],i={color:[],number:[],var:[]},s=[];let a=0;const u=e.replace(sC,f=>(Nn.test(f)?(i.color.push(a),s.push(LE),t.push(Nn.parse(f))):f.startsWith(rC)?(i.var.push(a),s.push(iC),t.push(f)):(i.number.push(a),s.push(DE),t.push(parseFloat(f))),++a,l_)).split(l_);return{values:t,split:u,indexes:i,types:s}}function IE(n){return Pl(n).values}function NE(n){const{split:e,types:t}=Pl(n),i=e.length;return s=>{let a="";for(let l=0;l<i;l++)if(a+=e[l],s[l]!==void 0){const u=t[l];u===DE?a+=Sl(s[l]):u===LE?a+=Nn.transform(s[l]):a+=s[l]}return a}}const oC=n=>typeof n=="number"?0:n;function aC(n){const e=IE(n);return NE(n)(e.map(oC))}const Ss={test:nC,parse:IE,createTransformer:NE,getAnimatableNone:aC};function Dh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function lC({hue:n,saturation:e,lightness:t,alpha:i}){n/=360,e/=100,t/=100;let s=0,a=0,l=0;if(!e)s=a=l=t;else{const u=t<.5?t*(1+e):t+e-t*e,f=2*t-u;s=Dh(f,u,n+1/3),a=Dh(f,u,n),l=Dh(f,u,n-1/3)}return{red:Math.round(s*255),green:Math.round(a*255),blue:Math.round(l*255),alpha:i}}function of(n,e){return t=>t>0?e:n}const Yt=(n,e,t)=>n+(e-n)*t,Lh=(n,e,t)=>{const i=n*n,s=t*(e*e-i)+i;return s<0?0:Math.sqrt(s)},cC=[kp,eo,ta],uC=n=>cC.find(e=>e.test(n));function c_(n){const e=uC(n);if(!e)return!1;let t=e.parse(n);return e===ta&&(t=lC(t)),t}const u_=(n,e)=>{const t=c_(n),i=c_(e);if(!t||!i)return of(n,e);const s={...t};return a=>(s.red=Lh(t.red,i.red,a),s.green=Lh(t.green,i.green,a),s.blue=Lh(t.blue,i.blue,a),s.alpha=Yt(t.alpha,i.alpha,a),eo.transform(s))},Bp=new Set(["none","hidden"]);function fC(n,e){return Bp.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function dC(n,e){return t=>Yt(n,e,t)}function _g(n){return typeof n=="number"?dC:typeof n=="string"?gg(n)?of:Nn.test(n)?u_:mC:Array.isArray(n)?UE:typeof n=="object"?Nn.test(n)?u_:hC:of}function UE(n,e){const t=[...n],i=t.length,s=n.map((a,l)=>_g(a)(a,e[l]));return a=>{for(let l=0;l<i;l++)t[l]=s[l](a);return t}}function hC(n,e){const t={...n,...e},i={};for(const s in t)n[s]!==void 0&&e[s]!==void 0&&(i[s]=_g(n[s])(n[s],e[s]));return s=>{for(const a in i)t[a]=i[a](s);return t}}function pC(n,e){const t=[],i={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const a=e.types[s],l=n.indexes[a][i[a]],u=n.values[l]??0;t[s]=u,i[a]++}return t}const mC=(n,e)=>{const t=Ss.createTransformer(e),i=Pl(n),s=Pl(e);return i.indexes.var.length===s.indexes.var.length&&i.indexes.color.length===s.indexes.color.length&&i.indexes.number.length>=s.indexes.number.length?Bp.has(n)&&!s.values.length||Bp.has(e)&&!i.values.length?fC(n,e):Vl(UE(pC(i,s),s.values),t):of(n,e)};function FE(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Yt(n,e,t):_g(n)(n,e)}const gC=n=>{const e=({timestamp:t})=>n(t);return{start:(t=!0)=>qt.update(e,t),stop:()=>xs(e),now:()=>wn.isProcessing?wn.timestamp:ei.now()}},OE=(n,e,t=10)=>{let i="";const s=Math.max(Math.round(e/t),2);for(let a=0;a<s;a++)i+=n(a/(s-1))+", ";return`linear(${i.substring(0,i.length-2)})`},af=2e4;function xg(n){let e=0;const t=50;let i=n.next(e);for(;!i.done&&e<af;)e+=t,i=n.next(e);return e>=af?1/0:e}function vC(n,e=100,t){const i=t({...n,keyframes:[0,e]}),s=Math.min(xg(i),af);return{type:"keyframes",ease:a=>i.next(s*a).value/e,duration:ir(s)}}const yC=5;function kE(n,e,t){const i=Math.max(e-yC,0);return vE(t-n(i),e-i)}const Jt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},f_=.001;function _C({duration:n=Jt.duration,bounce:e=Jt.bounce,velocity:t=Jt.velocity,mass:i=Jt.mass}){let s,a,l=1-e;l=Pr(Jt.minDamping,Jt.maxDamping,l),n=Pr(Jt.minDuration,Jt.maxDuration,ir(n)),l<1?(s=d=>{const p=d*l,m=p*n,g=p-t,y=zp(d,l),E=Math.exp(-m);return f_-g/y*E},a=d=>{const m=d*l*n,g=m*t+t,y=Math.pow(l,2)*Math.pow(d,2)*n,E=Math.exp(-m),M=zp(Math.pow(d,2),l);return(-s(d)+f_>0?-1:1)*((g-y)*E)/M}):(s=d=>{const p=Math.exp(-d*n),m=(d-t)*n+1;return-.001+p*m},a=d=>{const p=Math.exp(-d*n),m=(t-d)*(n*n);return p*m});const u=5/n,f=SC(s,a,u);if(n=nr(n),isNaN(f))return{stiffness:Jt.stiffness,damping:Jt.damping,duration:n};{const d=Math.pow(f,2)*i;return{stiffness:d,damping:l*2*Math.sqrt(i*d),duration:n}}}const xC=12;function SC(n,e,t){let i=t;for(let s=1;s<xC;s++)i=i-n(i)/e(i);return i}function zp(n,e){return n*Math.sqrt(1-e*e)}const EC=["duration","bounce"],MC=["stiffness","damping","mass"];function d_(n,e){return e.some(t=>n[t]!==void 0)}function wC(n){let e={velocity:Jt.velocity,stiffness:Jt.stiffness,damping:Jt.damping,mass:Jt.mass,isResolvedFromDuration:!1,...n};if(!d_(n,MC)&&d_(n,EC))if(n.visualDuration){const t=n.visualDuration,i=2*Math.PI/(t*1.2),s=i*i,a=2*Pr(.05,1,1-(n.bounce||0))*Math.sqrt(s);e={...e,mass:Jt.mass,stiffness:s,damping:a}}else{const t=_C(n);e={...e,...t,mass:Jt.mass},e.isResolvedFromDuration=!0}return e}function lf(n=Jt.visualDuration,e=Jt.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:i,restDelta:s}=t;const a=t.keyframes[0],l=t.keyframes[t.keyframes.length-1],u={done:!1,value:a},{stiffness:f,damping:d,mass:p,duration:m,velocity:g,isResolvedFromDuration:y}=wC({...t,velocity:-ir(t.velocity||0)}),E=g||0,M=d/(2*Math.sqrt(f*p)),S=l-a,_=ir(Math.sqrt(f/p)),T=Math.abs(S)<5;i||(i=T?Jt.restSpeed.granular:Jt.restSpeed.default),s||(s=T?Jt.restDelta.granular:Jt.restDelta.default);let w;if(M<1){const N=zp(_,M);w=L=>{const I=Math.exp(-M*_*L);return l-I*((E+M*_*S)/N*Math.sin(N*L)+S*Math.cos(N*L))}}else if(M===1)w=N=>l-Math.exp(-_*N)*(S+(E+_*S)*N);else{const N=_*Math.sqrt(M*M-1);w=L=>{const I=Math.exp(-M*_*L),B=Math.min(N*L,300);return l-I*((E+M*_*S)*Math.sinh(B)+N*S*Math.cosh(B))/N}}const b={calculatedDuration:y&&m||null,next:N=>{const L=w(N);if(y)u.done=N>=m;else{let I=N===0?E:0;M<1&&(I=N===0?nr(E):kE(w,N,L));const B=Math.abs(I)<=i,P=Math.abs(l-L)<=s;u.done=B&&P}return u.value=u.done?l:L,u},toString:()=>{const N=Math.min(xg(b),af),L=OE(I=>b.next(N*I).value,N,30);return N+"ms "+L},toTransition:()=>{}};return b}lf.applyToOptions=n=>{const e=vC(n,100,lf);return n.ease=e.ease,n.duration=nr(e.duration),n.type="keyframes",n};function Vp({keyframes:n,velocity:e=0,power:t=.8,timeConstant:i=325,bounceDamping:s=10,bounceStiffness:a=500,modifyTarget:l,min:u,max:f,restDelta:d=.5,restSpeed:p}){const m=n[0],g={done:!1,value:m},y=B=>u!==void 0&&B<u||f!==void 0&&B>f,E=B=>u===void 0?f:f===void 0||Math.abs(u-B)<Math.abs(f-B)?u:f;let M=t*e;const S=m+M,_=l===void 0?S:l(S);_!==S&&(M=_-m);const T=B=>-M*Math.exp(-B/i),w=B=>_+T(B),b=B=>{const P=T(B),C=w(B);g.done=Math.abs(P)<=d,g.value=g.done?_:C};let N,L;const I=B=>{y(g.value)&&(N=B,L=lf({keyframes:[g.value,E(g.value)],velocity:kE(w,B,g.value),damping:s,stiffness:a,restDelta:d,restSpeed:p}))};return I(0),{calculatedDuration:null,next:B=>{let P=!1;return!L&&N===void 0&&(P=!0,b(B),I(B)),N!==void 0&&B>=N?L.next(B-N):(!P&&b(B),g)}}}function TC(n,e,t){const i=[],s=t||Dr.mix||FE,a=n.length-1;for(let l=0;l<a;l++){let u=s(n[l],n[l+1]);if(e){const f=Array.isArray(e)?e[l]||Ti:e;u=Vl(f,u)}i.push(u)}return i}function bC(n,e,{clamp:t=!0,ease:i,mixer:s}={}){const a=n.length;if(ug(a===e.length),a===1)return()=>e[0];if(a===2&&e[0]===e[1])return()=>e[1];const l=n[0]===n[1];n[0]>n[a-1]&&(n=[...n].reverse(),e=[...e].reverse());const u=TC(e,i,s),f=u.length,d=p=>{if(l&&p<n[0])return e[0];let m=0;if(f>1)for(;m<n.length-2&&!(p<n[m+1]);m++);const g=Cl(n[m],n[m+1],p);return u[m](g)};return t?p=>d(Pr(n[0],n[a-1],p)):d}function AC(n,e){const t=n[n.length-1];for(let i=1;i<=e;i++){const s=Cl(0,e,i);n.push(Yt(t,1,s))}}function CC(n){const e=[0];return AC(e,n.length-1),e}function RC(n,e){return n.map(t=>t*e)}function PC(n,e){return n.map(()=>e||bE).splice(0,n.length-1)}function El({duration:n=300,keyframes:e,times:t,ease:i="easeInOut"}){const s=VA(i)?i.map(s_):s_(i),a={done:!1,value:e[0]},l=RC(t&&t.length===e.length?t:CC(e),n),u=bC(l,e,{ease:Array.isArray(s)?s:PC(e,s)});return{calculatedDuration:n,next:f=>(a.value=u(f),a.done=f>=n,a)}}const DC=n=>n!==null;function Sg(n,{repeat:e,repeatType:t="loop"},i,s=1){const a=n.filter(DC),u=s<0||e&&t!=="loop"&&e%2===1?0:a.length-1;return!u||i===void 0?a[u]:i}const LC={decay:Vp,inertia:Vp,tween:El,keyframes:El,spring:lf};function BE(n){typeof n.type=="string"&&(n.type=LC[n.type])}class Eg{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const IC=n=>n/100;class Mg extends Eg{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=(t=!0)=>{var i,s;if(t){const{motionValue:a}=this.options;a&&a.updatedAt!==ei.now()&&this.tick(ei.now())}this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(s=(i=this.options).onStop)==null||s.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;BE(e);const{type:t=El,repeat:i=0,repeatDelay:s=0,repeatType:a,velocity:l=0}=e;let{keyframes:u}=e;const f=t||El;f!==El&&typeof u[0]!="number"&&(this.mixKeyframes=Vl(IC,FE(u[0],u[1])),u=[0,100]);const d=f({...e,keyframes:u});a==="mirror"&&(this.mirroredGenerator=f({...e,keyframes:[...u].reverse(),velocity:-l})),d.calculatedDuration===null&&(d.calculatedDuration=xg(d));const{calculatedDuration:p}=d;this.calculatedDuration=p,this.resolvedDuration=p+s,this.totalDuration=this.resolvedDuration*(i+1)-s,this.generator=d}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:i,totalDuration:s,mixKeyframes:a,mirroredGenerator:l,resolvedDuration:u,calculatedDuration:f}=this;if(this.startTime===null)return i.next(0);const{delay:d=0,keyframes:p,repeat:m,repeatType:g,repeatDelay:y,type:E,onUpdate:M,finalKeyframe:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-s/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const _=this.currentTime-d*(this.playbackSpeed>=0?1:-1),T=this.playbackSpeed>=0?_<0:_>s;this.currentTime=Math.max(_,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=s);let w=this.currentTime,b=i;if(m){const B=Math.min(this.currentTime,s)/u;let P=Math.floor(B),C=B%1;!C&&B>=1&&(C=1),C===1&&P--,P=Math.min(P,m+1),!!(P%2)&&(g==="reverse"?(C=1-C,y&&(C-=y/u)):g==="mirror"&&(b=l)),w=Pr(0,1,C)*u}const N=T?{done:!1,value:p[0]}:b.next(w);a&&(N.value=a(N.value));let{done:L}=N;!T&&f!==null&&(L=this.playbackSpeed>=0?this.currentTime>=s:this.currentTime<=0);const I=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&L);return I&&E!==Vp&&(N.value=Sg(p,this.options,S,this.speed)),M&&M(N.value),I&&this.finish(),N}then(e,t){return this.finished.then(e,t)}get duration(){return ir(this.calculatedDuration)}get time(){return ir(this.currentTime)}set time(e){var t;e=nr(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),(t=this.driver)==null||t.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(ei.now());const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=ir(this.currentTime))}play(){var s,a;if(this.isStopped)return;const{driver:e=gC,startTime:t}=this.options;this.driver||(this.driver=e(l=>this.tick(l))),(a=(s=this.options).onPlay)==null||a.call(s);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=t??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ei.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,t;this.notifyFinished(),this.teardown(),this.state="finished",(t=(e=this.options).onComplete)==null||t.call(e)}cancel(){var e,t;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(t=(e=this.options).onCancel)==null||t.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var t;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(t=this.driver)==null||t.stop(),e.observe(this)}}function NC(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const to=n=>n*180/Math.PI,Hp=n=>{const e=to(Math.atan2(n[1],n[0]));return Gp(e)},UC={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Hp,rotateZ:Hp,skewX:n=>to(Math.atan(n[1])),skewY:n=>to(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Gp=n=>(n=n%360,n<0&&(n+=360),n),h_=Hp,p_=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),m_=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),FC={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:p_,scaleY:m_,scale:n=>(p_(n)+m_(n))/2,rotateX:n=>Gp(to(Math.atan2(n[6],n[5]))),rotateY:n=>Gp(to(Math.atan2(-n[2],n[0]))),rotateZ:h_,rotate:h_,skewX:n=>to(Math.atan(n[4])),skewY:n=>to(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Wp(n){return n.includes("scale")?1:0}function jp(n,e){if(!n||n==="none")return Wp(e);const t=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,s;if(t)i=FC,s=t;else{const u=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=UC,s=u}if(!s)return Wp(e);const a=i[e],l=s[1].split(",").map(kC);return typeof a=="function"?a(l):l[a]}const OC=(n,e)=>{const{transform:t="none"}=getComputedStyle(n);return jp(t,e)};function kC(n){return parseFloat(n.trim())}const ba=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Aa=new Set(ba),g_=n=>n===Ta||n===at,BC=new Set(["x","y","z"]),zC=ba.filter(n=>!BC.has(n));function VC(n){const e=[];return zC.forEach(t=>{const i=n.getValue(t);i!==void 0&&(e.push([t,i.get()]),i.set(t.startsWith("scale")?1:0))}),e}const ao={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>jp(e,"x"),y:(n,{transform:e})=>jp(e,"y")};ao.translateX=ao.x;ao.translateY=ao.y;const lo=new Set;let Xp=!1,$p=!1,Yp=!1;function zE(){if($p){const n=Array.from(lo).filter(i=>i.needsMeasurement),e=new Set(n.map(i=>i.element)),t=new Map;e.forEach(i=>{const s=VC(i);s.length&&(t.set(i,s),i.render())}),n.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const s=t.get(i);s&&s.forEach(([a,l])=>{var u;(u=i.getValue(a))==null||u.set(l)})}),n.forEach(i=>i.measureEndState()),n.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}$p=!1,Xp=!1,lo.forEach(n=>n.complete(Yp)),lo.clear()}function VE(){lo.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&($p=!0)})}function HC(){Yp=!0,VE(),zE(),Yp=!1}class wg{constructor(e,t,i,s,a,l=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=i,this.motionValue=s,this.element=a,this.isAsync=l}scheduleResolve(){this.state="scheduled",this.isAsync?(lo.add(this),Xp||(Xp=!0,qt.read(VE),qt.resolveKeyframes(zE))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:i,motionValue:s}=this;if(e[0]===null){const a=s==null?void 0:s.get(),l=e[e.length-1];if(a!==void 0)e[0]=a;else if(i&&t){const u=i.readValue(t,l);u!=null&&(e[0]=u)}e[0]===void 0&&(e[0]=l),s&&a===void 0&&s.set(e[0])}NC(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),lo.delete(this)}cancel(){this.state==="scheduled"&&(lo.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const GC=n=>n.startsWith("--");function WC(n,e,t){GC(e)?n.style.setProperty(e,t):n.style[e]=t}const jC=fg(()=>window.ScrollTimeline!==void 0),XC={};function $C(n,e){const t=fg(n);return()=>XC[e]??t()}const HE=$C(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),yl=([n,e,t,i])=>`cubic-bezier(${n}, ${e}, ${t}, ${i})`,v_={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:yl([0,.65,.55,1]),circOut:yl([.55,0,1,.45]),backIn:yl([.31,.01,.66,-.59]),backOut:yl([.33,1.53,.69,.99])};function GE(n,e){if(n)return typeof n=="function"?HE()?OE(n,e):"ease-out":AE(n)?yl(n):Array.isArray(n)?n.map(t=>GE(t,e)||v_.easeOut):v_[n]}function YC(n,e,t,{delay:i=0,duration:s=300,repeat:a=0,repeatType:l="loop",ease:u="easeOut",times:f}={},d=void 0){const p={[e]:t};f&&(p.offset=f);const m=GE(u,s);Array.isArray(m)&&(p.easing=m);const g={delay:i,duration:s,easing:Array.isArray(m)?"linear":m,fill:"both",iterations:a+1,direction:l==="reverse"?"alternate":"normal"};return d&&(g.pseudoElement=d),n.animate(p,g)}function WE(n){return typeof n=="function"&&"applyToOptions"in n}function qC({type:n,...e}){return WE(n)&&HE()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class KC extends Eg{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:t,name:i,keyframes:s,pseudoElement:a,allowFlatten:l=!1,finalKeyframe:u,onComplete:f}=e;this.isPseudoElement=!!a,this.allowFlatten=l,this.options=e,ug(typeof e.type!="string");const d=qC(e);this.animation=YC(t,i,s,d,a),d.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!a){const p=Sg(s,this.options,u,this.speed);this.updateMotionValue?this.updateMotionValue(p):WC(t,i,p),this.animation.cancel()}f==null||f(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,t;(t=(e=this.animation).finish)==null||t.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var e,t;this.isPseudoElement||(t=(e=this.animation).commitStyles)==null||t.call(e)}get duration(){var t,i;const e=((i=(t=this.animation.effect)==null?void 0:t.getComputedTiming)==null?void 0:i.call(t).duration)||0;return ir(Number(e))}get time(){return ir(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=nr(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:t}){var i;return this.allowFlatten&&((i=this.animation.effect)==null||i.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&jC()?(this.animation.timeline=e,Ti):t(this)}}const jE={anticipate:ME,backInOut:EE,circInOut:TE};function ZC(n){return n in jE}function QC(n){typeof n.ease=="string"&&ZC(n.ease)&&(n.ease=jE[n.ease])}const y_=10;class JC extends KC{constructor(e){QC(e),BE(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:i,onComplete:s,element:a,...l}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}const u=new Mg({...l,autoplay:!1}),f=nr(this.finishedTime??this.time);t.setWithVelocity(u.sample(f-y_).value,u.sample(f).value,y_),u.stop()}}const __=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Ss.test(n)||n==="0")&&!n.startsWith("url("));function eR(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function tR(n,e,t,i){const s=n[0];if(s===null)return!1;if(e==="display"||e==="visibility")return!0;const a=n[n.length-1],l=__(s,e),u=__(a,e);return!l||!u?!1:eR(n)||(t==="spring"||WE(t))&&i}function XE(n){return mE(n)&&"offsetHeight"in n}const nR=new Set(["opacity","clipPath","filter","transform"]),iR=fg(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function rR(n){var d;const{motionValue:e,name:t,repeatDelay:i,repeatType:s,damping:a,type:l}=n;if(!XE((d=e==null?void 0:e.owner)==null?void 0:d.current))return!1;const{onUpdate:u,transformTemplate:f}=e.owner.getProps();return iR()&&t&&nR.has(t)&&(t!=="transform"||!f)&&!u&&!i&&s!=="mirror"&&a!==0&&l!=="inertia"}const sR=40;class oR extends Eg{constructor({autoplay:e=!0,delay:t=0,type:i="keyframes",repeat:s=0,repeatDelay:a=0,repeatType:l="loop",keyframes:u,name:f,motionValue:d,element:p,...m}){var E;super(),this.stop=()=>{var M,S;this._animation&&(this._animation.stop(),(M=this.stopTimeline)==null||M.call(this)),(S=this.keyframeResolver)==null||S.cancel()},this.createdAt=ei.now();const g={autoplay:e,delay:t,type:i,repeat:s,repeatDelay:a,repeatType:l,name:f,motionValue:d,element:p,...m},y=(p==null?void 0:p.KeyframeResolver)||wg;this.keyframeResolver=new y(u,(M,S,_)=>this.onKeyframesResolved(M,S,g,!_),f,d,p),(E=this.keyframeResolver)==null||E.scheduleResolve()}onKeyframesResolved(e,t,i,s){this.keyframeResolver=void 0;const{name:a,type:l,velocity:u,delay:f,isHandoff:d,onUpdate:p}=i;this.resolvedAt=ei.now(),tR(e,a,l,u)||((Dr.instantAnimations||!f)&&(p==null||p(Sg(e,i,t))),e[0]=e[e.length-1],i.duration=0,i.repeat=0);const g={startTime:s?this.resolvedAt?this.resolvedAt-this.createdAt>sR?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...i,keyframes:e},y=!d&&rR(g)?new JC({...g,element:g.motionValue.owner.current}):new Mg(g);y.finished.then(()=>this.notifyFinished()).catch(Ti),this.pendingTimeline&&(this.stopTimeline=y.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=y}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),HC()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}const aR=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function lR(n){const e=aR.exec(n);if(!e)return[,];const[,t,i,s]=e;return[`--${t??i}`,s]}function $E(n,e,t=1){const[i,s]=lR(n);if(!i)return;const a=window.getComputedStyle(e).getPropertyValue(i);if(a){const l=a.trim();return pE(l)?parseFloat(l):l}return gg(s)?$E(s,e,t+1):s}function Tg(n,e){return(n==null?void 0:n[e])??(n==null?void 0:n.default)??n}const YE=new Set(["width","height","top","left","right","bottom",...ba]),cR={test:n=>n==="auto",parse:n=>n},qE=n=>e=>e.test(n),KE=[Ta,at,rr,ms,eC,JA,cR],x_=n=>KE.find(qE(n));function uR(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||gE(n):!0}const fR=new Set(["brightness","contrast","saturate","opacity"]);function dR(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[i]=t.match(vg)||[];if(!i)return n;const s=t.replace(i,"");let a=fR.has(e)?1:0;return i!==t&&(a*=100),e+"("+a+s+")"}const hR=/\b([a-z-]*)\(.*?\)/gu,qp={...Ss,getAnimatableNone:n=>{const e=n.match(hR);return e?e.map(dR).join(" "):n}},S_={...Ta,transform:Math.round},pR={rotate:ms,rotateX:ms,rotateY:ms,rotateZ:ms,scale:fu,scaleX:fu,scaleY:fu,scaleZ:fu,skew:ms,skewX:ms,skewY:ms,distance:at,translateX:at,translateY:at,translateZ:at,x:at,y:at,z:at,perspective:at,transformPerspective:at,opacity:Rl,originX:a_,originY:a_,originZ:at},bg={borderWidth:at,borderTopWidth:at,borderRightWidth:at,borderBottomWidth:at,borderLeftWidth:at,borderRadius:at,radius:at,borderTopLeftRadius:at,borderTopRightRadius:at,borderBottomRightRadius:at,borderBottomLeftRadius:at,width:at,maxWidth:at,height:at,maxHeight:at,top:at,right:at,bottom:at,left:at,padding:at,paddingTop:at,paddingRight:at,paddingBottom:at,paddingLeft:at,margin:at,marginTop:at,marginRight:at,marginBottom:at,marginLeft:at,backgroundPositionX:at,backgroundPositionY:at,...pR,zIndex:S_,fillOpacity:Rl,strokeOpacity:Rl,numOctaves:S_},mR={...bg,color:Nn,backgroundColor:Nn,outlineColor:Nn,fill:Nn,stroke:Nn,borderColor:Nn,borderTopColor:Nn,borderRightColor:Nn,borderBottomColor:Nn,borderLeftColor:Nn,filter:qp,WebkitFilter:qp},ZE=n=>mR[n];function QE(n,e){let t=ZE(n);return t!==qp&&(t=Ss),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const gR=new Set(["auto","none","0"]);function vR(n,e,t){let i=0,s;for(;i<n.length&&!s;){const a=n[i];typeof a=="string"&&!gR.has(a)&&Pl(a).values.length&&(s=n[i]),i++}if(s&&t)for(const a of e)n[a]=QE(t,s)}class yR extends wg{constructor(e,t,i,s,a){super(e,t,i,s,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:i}=this;if(!t||!t.current)return;super.readKeyframes();for(let f=0;f<e.length;f++){let d=e[f];if(typeof d=="string"&&(d=d.trim(),gg(d))){const p=$E(d,t.current);p!==void 0&&(e[f]=p),f===e.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!YE.has(i)||e.length!==2)return;const[s,a]=e,l=x_(s),u=x_(a);if(l!==u)if(g_(l)&&g_(u))for(let f=0;f<e.length;f++){const d=e[f];typeof d=="string"&&(e[f]=parseFloat(d))}else ao[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,i=[];for(let s=0;s<e.length;s++)(e[s]===null||uR(e[s]))&&i.push(s);i.length&&vR(e,i,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ao[i](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const s=t[t.length-1];s!==void 0&&e.getValue(i,s).jump(s,!1)}measureEndState(){var u;const{element:e,name:t,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const s=e.getValue(t);s&&s.jump(this.measuredOrigin,!1);const a=i.length-1,l=i[a];i[a]=ao[t](e.measureViewportBox(),window.getComputedStyle(e.current)),l!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=l),(u=this.removedTransforms)!=null&&u.length&&this.removedTransforms.forEach(([f,d])=>{e.getValue(f).set(d)}),this.resolveNoneKeyframes()}}function _R(n,e,t){if(n instanceof EventTarget)return[n];if(typeof n=="string"){let i=document;const s=(t==null?void 0:t[n])??i.querySelectorAll(n);return s?Array.from(s):[]}return Array.from(n)}const E_=30,xR=n=>!isNaN(parseFloat(n));class SR{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,s=!0)=>{var l,u;const a=ei.now();if(this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((l=this.events.change)==null||l.notify(this.current),this.dependents))for(const f of this.dependents)f.dirty();s&&((u=this.events.renderRequest)==null||u.notify(this.current))},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=ei.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=xR(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new dg);const i=this.events[e].add(t);return e==="change"?()=>{i(),qt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,i){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=ei.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>E_)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,E_);return vE(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,t;(e=this.dependents)==null||e.clear(),(t=this.events.destroy)==null||t.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ga(n,e){return new SR(n,e)}const JE=(n,e)=>e&&typeof n=="number"?e.transform(n):n,{schedule:Ag}=CE(queueMicrotask,!1),Oi={x:!1,y:!1};function eM(){return Oi.x||Oi.y}function ER(n){return n==="x"||n==="y"?Oi[n]?null:(Oi[n]=!0,()=>{Oi[n]=!1}):Oi.x||Oi.y?null:(Oi.x=Oi.y=!0,()=>{Oi.x=Oi.y=!1})}function tM(n,e){const t=_R(n),i=new AbortController,s={passive:!0,...e,signal:i.signal};return[t,s,()=>i.abort()]}function M_(n){return!(n.pointerType==="touch"||eM())}function MR(n,e,t={}){const[i,s,a]=tM(n,t),l=u=>{if(!M_(u))return;const{target:f}=u,d=e(f,u);if(typeof d!="function"||!f)return;const p=m=>{M_(m)&&(d(m),f.removeEventListener("pointerleave",p))};f.addEventListener("pointerleave",p,s)};return i.forEach(u=>{u.addEventListener("pointerenter",l,s)}),a}const nM=(n,e)=>e?n===e?!0:nM(n,e.parentElement):!1,Cg=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,wR=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function TR(n){return wR.has(n.tagName)||n.tabIndex!==-1}const ju=new WeakSet;function w_(n){return e=>{e.key==="Enter"&&n(e)}}function Ih(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const bR=(n,e)=>{const t=n.currentTarget;if(!t)return;const i=w_(()=>{if(ju.has(t))return;Ih(t,"down");const s=w_(()=>{Ih(t,"up")}),a=()=>Ih(t,"cancel");t.addEventListener("keyup",s,e),t.addEventListener("blur",a,e)});t.addEventListener("keydown",i,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",i),e)};function T_(n){return Cg(n)&&!eM()}function AR(n,e,t={}){const[i,s,a]=tM(n,t),l=u=>{const f=u.currentTarget;if(!T_(u))return;ju.add(f);const d=e(f,u),p=(y,E)=>{window.removeEventListener("pointerup",m),window.removeEventListener("pointercancel",g),ju.has(f)&&ju.delete(f),T_(y)&&typeof d=="function"&&d(y,{success:E})},m=y=>{p(y,f===window||f===document||t.useGlobalTarget||nM(f,y.target))},g=y=>{p(y,!1)};window.addEventListener("pointerup",m,s),window.addEventListener("pointercancel",g,s)};return i.forEach(u=>{(t.useGlobalTarget?window:u).addEventListener("pointerdown",l,s),XE(u)&&(u.addEventListener("focus",d=>bR(d,s)),!TR(u)&&!u.hasAttribute("tabindex")&&(u.tabIndex=0))}),a}function iM(n){return mE(n)&&"ownerSVGElement"in n}function CR(n){return iM(n)&&n.tagName==="svg"}const Fn=n=>!!(n&&n.getVelocity),RR=[...KE,Nn,Ss],PR=n=>RR.find(qE(n)),rM=D.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function DR(n=!0){const e=D.useContext(ag);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:i,register:s}=e,a=D.useId();D.useEffect(()=>{if(n)return s(a)},[n]);const l=D.useCallback(()=>n&&i&&i(a),[a,i,n]);return!t&&i?[!1,l]:[!0]}const sM=D.createContext({strict:!1}),b_={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},va={};for(const n in b_)va[n]={isEnabled:e=>b_[n].some(t=>!!e[t])};function LR(n){for(const e in n)va[e]={...va[e],...n[e]}}const IR=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function cf(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||IR.has(n)}let oM=n=>!cf(n);function NR(n){n&&(oM=e=>e.startsWith("on")?!cf(e):n(e))}try{NR(require("@emotion/is-prop-valid").default)}catch{}function UR(n,e,t){const i={};for(const s in n)s==="values"&&typeof n.values=="object"||(oM(s)||t===!0&&cf(s)||!e&&!cf(s)||n.draggable&&s.startsWith("onDrag"))&&(i[s]=n[s]);return i}function FR(n){if(typeof Proxy>"u")return n;const e=new Map,t=(...i)=>n(...i);return new Proxy(t,{get:(i,s)=>s==="create"?n:(e.has(s)||e.set(s,n(s)),e.get(s))})}const Ef=D.createContext({});function Mf(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Dl(n){return typeof n=="string"||Array.isArray(n)}const Rg=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Pg=["initial",...Rg];function wf(n){return Mf(n.animate)||Pg.some(e=>Dl(n[e]))}function aM(n){return!!(wf(n)||n.variants)}function OR(n,e){if(wf(n)){const{initial:t,animate:i}=n;return{initial:t===!1||Dl(t)?t:void 0,animate:Dl(i)?i:void 0}}return n.inherit!==!1?e:{}}function kR(n){const{initial:e,animate:t}=OR(n,D.useContext(Ef));return D.useMemo(()=>({initial:e,animate:t}),[A_(e),A_(t)])}function A_(n){return Array.isArray(n)?n.join(" "):n}const BR=Symbol.for("motionComponentSymbol");function na(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function zR(n,e,t){return D.useCallback(i=>{i&&n.onMount&&n.onMount(i),e&&(i?e.mount(i):e.unmount()),t&&(typeof t=="function"?t(i):na(t)&&(t.current=i))},[e])}const Dg=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),VR="framerAppearId",lM="data-"+Dg(VR),cM=D.createContext({});function HR(n,e,t,i,s){var M,S;const{visualElement:a}=D.useContext(Ef),l=D.useContext(sM),u=D.useContext(ag),f=D.useContext(rM).reducedMotion,d=D.useRef(null);i=i||l.renderer,!d.current&&i&&(d.current=i(n,{visualState:e,parent:a,props:t,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:f}));const p=d.current,m=D.useContext(cM);p&&!p.projection&&s&&(p.type==="html"||p.type==="svg")&&GR(d.current,t,s,m);const g=D.useRef(!1);D.useInsertionEffect(()=>{p&&g.current&&p.update(t,u)});const y=t[lM],E=D.useRef(!!y&&!((M=window.MotionHandoffIsComplete)!=null&&M.call(window,y))&&((S=window.MotionHasOptimisedAnimation)==null?void 0:S.call(window,y)));return NA(()=>{p&&(g.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),Ag.render(p.render),E.current&&p.animationState&&p.animationState.animateChanges())}),D.useEffect(()=>{p&&(!E.current&&p.animationState&&p.animationState.animateChanges(),E.current&&(queueMicrotask(()=>{var _;(_=window.MotionHandoffMarkAsComplete)==null||_.call(window,y)}),E.current=!1))}),p}function GR(n,e,t,i){const{layoutId:s,layout:a,drag:l,dragConstraints:u,layoutScroll:f,layoutRoot:d,layoutCrossfade:p}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:uM(n.parent)),n.projection.setOptions({layoutId:s,layout:a,alwaysMeasureLayout:!!l||u&&na(u),visualElement:n,animationType:typeof a=="string"?a:"both",initialPromotionConfig:i,crossfade:p,layoutScroll:f,layoutRoot:d})}function uM(n){if(n)return n.options.allowProjection!==!1?n.projection:uM(n.parent)}function WR({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:i,Component:s}){n&&LR(n);function a(u,f){let d;const p={...D.useContext(rM),...u,layoutId:jR(u)},{isStatic:m}=p,g=kR(u),y=i(u,m);if(!m&&og){XR();const E=$R(p);d=E.MeasureLayout,g.visualElement=HR(s,y,p,e,E.ProjectionNode)}return G.jsxs(Ef.Provider,{value:g,children:[d&&g.visualElement?G.jsx(d,{visualElement:g.visualElement,...p}):null,t(s,u,zR(y,g.visualElement,f),y,m,g.visualElement)]})}a.displayName=`motion.${typeof s=="string"?s:`create(${s.displayName??s.name??""})`}`;const l=D.forwardRef(a);return l[BR]=s,l}function jR({layoutId:n}){const e=D.useContext(hE).id;return e&&n!==void 0?e+"-"+n:n}function XR(n,e){D.useContext(sM).strict}function $R(n){const{drag:e,layout:t}=va;if(!e&&!t)return{};const i={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const Ll={};function YR(n){for(const e in n)Ll[e]=n[e],mg(e)&&(Ll[e].isCSSVariable=!0)}function fM(n,{layout:e,layoutId:t}){return Aa.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!Ll[n]||n==="opacity")}const qR={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},KR=ba.length;function ZR(n,e,t){let i="",s=!0;for(let a=0;a<KR;a++){const l=ba[a],u=n[l];if(u===void 0)continue;let f=!0;if(typeof u=="number"?f=u===(l.startsWith("scale")?1:0):f=parseFloat(u)===0,!f||t){const d=JE(u,bg[l]);if(!f){s=!1;const p=qR[l]||l;i+=`${p}(${d}) `}t&&(e[l]=d)}}return i=i.trim(),t?i=t(e,s?"":i):s&&(i="none"),i}function Lg(n,e,t){const{style:i,vars:s,transformOrigin:a}=n;let l=!1,u=!1;for(const f in e){const d=e[f];if(Aa.has(f)){l=!0;continue}else if(mg(f)){s[f]=d;continue}else{const p=JE(d,bg[f]);f.startsWith("origin")?(u=!0,a[f]=p):i[f]=p}}if(e.transform||(l||t?i.transform=ZR(e,n.transform,t):i.transform&&(i.transform="none")),u){const{originX:f="50%",originY:d="50%",originZ:p=0}=a;i.transformOrigin=`${f} ${d} ${p}`}}const Ig=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function dM(n,e,t){for(const i in e)!Fn(e[i])&&!fM(i,t)&&(n[i]=e[i])}function QR({transformTemplate:n},e){return D.useMemo(()=>{const t=Ig();return Lg(t,e,n),Object.assign({},t.vars,t.style)},[e])}function JR(n,e){const t=n.style||{},i={};return dM(i,t,n),Object.assign(i,QR(n,e)),i}function eP(n,e){const t={},i=JR(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=i,t}const tP={offset:"stroke-dashoffset",array:"stroke-dasharray"},nP={offset:"strokeDashoffset",array:"strokeDasharray"};function iP(n,e,t=1,i=0,s=!0){n.pathLength=1;const a=s?tP:nP;n[a.offset]=at.transform(-i);const l=at.transform(e),u=at.transform(t);n[a.array]=`${l} ${u}`}function hM(n,{attrX:e,attrY:t,attrScale:i,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...u},f,d,p){if(Lg(n,u,d),f){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:m,style:g}=n;m.transform&&(g.transform=m.transform,delete m.transform),(g.transform||m.transformOrigin)&&(g.transformOrigin=m.transformOrigin??"50% 50%",delete m.transformOrigin),g.transform&&(g.transformBox=(p==null?void 0:p.transformBox)??"fill-box",delete m.transformBox),e!==void 0&&(m.x=e),t!==void 0&&(m.y=t),i!==void 0&&(m.scale=i),s!==void 0&&iP(m,s,a,l,!1)}const pM=()=>({...Ig(),attrs:{}}),mM=n=>typeof n=="string"&&n.toLowerCase()==="svg";function rP(n,e,t,i){const s=D.useMemo(()=>{const a=pM();return hM(a,e,mM(i),n.transformTemplate,n.style),{...a.attrs,style:{...a.style}}},[e]);if(n.style){const a={};dM(a,n.style,n),s.style={...a,...s.style}}return s}const sP=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ng(n){return typeof n!="string"||n.includes("-")?!1:!!(sP.indexOf(n)>-1||/[A-Z]/u.test(n))}function oP(n=!1){return(t,i,s,{latestValues:a},l)=>{const f=(Ng(t)?rP:eP)(i,a,l,t),d=UR(i,typeof t=="string",n),p=t!==D.Fragment?{...d,...f,ref:s}:{},{children:m}=i,g=D.useMemo(()=>Fn(m)?m.get():m,[m]);return D.createElement(t,{...p,children:g})}}function C_(n){const e=[{},{}];return n==null||n.values.forEach((t,i)=>{e[0][i]=t.get(),e[1][i]=t.getVelocity()}),e}function Ug(n,e,t,i){if(typeof e=="function"){const[s,a]=C_(i);e=e(t!==void 0?t:n.custom,s,a)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[s,a]=C_(i);e=e(t!==void 0?t:n.custom,s,a)}return e}function Xu(n){return Fn(n)?n.get():n}function aP({scrapeMotionValuesFromProps:n,createRenderState:e},t,i,s){return{latestValues:lP(t,i,s,n),renderState:e()}}const gM=n=>(e,t)=>{const i=D.useContext(Ef),s=D.useContext(ag),a=()=>aP(n,e,i,s);return t?a():IA(a)};function lP(n,e,t,i){const s={},a=i(n,{});for(const g in a)s[g]=Xu(a[g]);let{initial:l,animate:u}=n;const f=wf(n),d=aM(n);e&&d&&!f&&n.inherit!==!1&&(l===void 0&&(l=e.initial),u===void 0&&(u=e.animate));let p=t?t.initial===!1:!1;p=p||l===!1;const m=p?u:l;if(m&&typeof m!="boolean"&&!Mf(m)){const g=Array.isArray(m)?m:[m];for(let y=0;y<g.length;y++){const E=Ug(n,g[y]);if(E){const{transitionEnd:M,transition:S,..._}=E;for(const T in _){let w=_[T];if(Array.isArray(w)){const b=p?w.length-1:0;w=w[b]}w!==null&&(s[T]=w)}for(const T in M)s[T]=M[T]}}}return s}function Fg(n,e,t){var a;const{style:i}=n,s={};for(const l in i)(Fn(i[l])||e.style&&Fn(e.style[l])||fM(l,n)||((a=t==null?void 0:t.getValue(l))==null?void 0:a.liveStyle)!==void 0)&&(s[l]=i[l]);return s}const cP={useVisualState:gM({scrapeMotionValuesFromProps:Fg,createRenderState:Ig})};function vM(n,e,t){const i=Fg(n,e,t);for(const s in n)if(Fn(n[s])||Fn(e[s])){const a=ba.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;i[a]=n[s]}return i}const uP={useVisualState:gM({scrapeMotionValuesFromProps:vM,createRenderState:pM})};function fP(n,e){return function(i,{forwardMotionProps:s}={forwardMotionProps:!1}){const l={...Ng(i)?uP:cP,preloadedFeatures:n,useRender:oP(s),createVisualElement:e,Component:i};return WR(l)}}function Il(n,e,t){const i=n.getProps();return Ug(i,e,t!==void 0?t:i.custom,n)}const Kp=n=>Array.isArray(n);function dP(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,ga(t))}function hP(n){return Kp(n)?n[n.length-1]||0:n}function pP(n,e){const t=Il(n,e);let{transitionEnd:i={},transition:s={},...a}=t||{};a={...a,...i};for(const l in a){const u=hP(a[l]);dP(n,l,u)}}function mP(n){return!!(Fn(n)&&n.add)}function Zp(n,e){const t=n.getValue("willChange");if(mP(t))return t.add(e);if(!t&&Dr.WillChange){const i=new Dr.WillChange("auto");n.addValue("willChange",i),i.add(e)}}function yM(n){return n.props[lM]}const gP=n=>n!==null;function vP(n,{repeat:e,repeatType:t="loop"},i){const s=n.filter(gP),a=e&&t!=="loop"&&e%2===1?0:s.length-1;return s[a]}const yP={type:"spring",stiffness:500,damping:25,restSpeed:10},_P=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),xP={type:"keyframes",duration:.8},SP={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},EP=(n,{keyframes:e})=>e.length>2?xP:Aa.has(n)?n.startsWith("scale")?_P(e[1]):yP:SP;function MP({when:n,delay:e,delayChildren:t,staggerChildren:i,staggerDirection:s,repeat:a,repeatType:l,repeatDelay:u,from:f,elapsed:d,...p}){return!!Object.keys(p).length}const Og=(n,e,t,i={},s,a)=>l=>{const u=Tg(i,n)||{},f=u.delay||i.delay||0;let{elapsed:d=0}=i;d=d-nr(f);const p={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...u,delay:-d,onUpdate:g=>{e.set(g),u.onUpdate&&u.onUpdate(g)},onComplete:()=>{l(),u.onComplete&&u.onComplete()},name:n,motionValue:e,element:a?void 0:s};MP(u)||Object.assign(p,EP(n,p)),p.duration&&(p.duration=nr(p.duration)),p.repeatDelay&&(p.repeatDelay=nr(p.repeatDelay)),p.from!==void 0&&(p.keyframes[0]=p.from);let m=!1;if((p.type===!1||p.duration===0&&!p.repeatDelay)&&(p.duration=0,p.delay===0&&(m=!0)),(Dr.instantAnimations||Dr.skipAnimations)&&(m=!0,p.duration=0,p.delay=0),p.allowFlatten=!u.type&&!u.ease,m&&!a&&e.get()!==void 0){const g=vP(p.keyframes,u);if(g!==void 0){qt.update(()=>{p.onUpdate(g),p.onComplete()});return}}return u.isSync?new Mg(p):new oR(p)};function wP({protectedKeys:n,needsAnimating:e},t){const i=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,i}function _M(n,e,{delay:t=0,transitionOverride:i,type:s}={}){let{transition:a=n.getDefaultTransition(),transitionEnd:l,...u}=e;i&&(a=i);const f=[],d=s&&n.animationState&&n.animationState.getState()[s];for(const p in u){const m=n.getValue(p,n.latestValues[p]??null),g=u[p];if(g===void 0||d&&wP(d,p))continue;const y={delay:t,...Tg(a||{},p)},E=m.get();if(E!==void 0&&!m.isAnimating&&!Array.isArray(g)&&g===E&&!y.velocity)continue;let M=!1;if(window.MotionHandoffAnimation){const _=yM(n);if(_){const T=window.MotionHandoffAnimation(_,p,qt);T!==null&&(y.startTime=T,M=!0)}}Zp(n,p),m.start(Og(p,m,g,n.shouldReduceMotion&&YE.has(p)?{type:!1}:y,n,M));const S=m.animation;S&&f.push(S)}return l&&Promise.all(f).then(()=>{qt.update(()=>{l&&pP(n,l)})}),f}function Qp(n,e,t={}){var f;const i=Il(n,e,t.type==="exit"?(f=n.presenceContext)==null?void 0:f.custom:void 0);let{transition:s=n.getDefaultTransition()||{}}=i||{};t.transitionOverride&&(s=t.transitionOverride);const a=i?()=>Promise.all(_M(n,i,t)):()=>Promise.resolve(),l=n.variantChildren&&n.variantChildren.size?(d=0)=>{const{delayChildren:p=0,staggerChildren:m,staggerDirection:g}=s;return TP(n,e,p+d,m,g,t)}:()=>Promise.resolve(),{when:u}=s;if(u){const[d,p]=u==="beforeChildren"?[a,l]:[l,a];return d().then(()=>p())}else return Promise.all([a(),l(t.delay)])}function TP(n,e,t=0,i=0,s=1,a){const l=[],u=(n.variantChildren.size-1)*i,f=s===1?(d=0)=>d*i:(d=0)=>u-d*i;return Array.from(n.variantChildren).sort(bP).forEach((d,p)=>{d.notify("AnimationStart",e),l.push(Qp(d,e,{...a,delay:t+f(p)}).then(()=>d.notify("AnimationComplete",e)))}),Promise.all(l)}function bP(n,e){return n.sortNodePosition(e)}function AP(n,e,t={}){n.notify("AnimationStart",e);let i;if(Array.isArray(e)){const s=e.map(a=>Qp(n,a,t));i=Promise.all(s)}else if(typeof e=="string")i=Qp(n,e,t);else{const s=typeof e=="function"?Il(n,e,t.custom):e;i=Promise.all(_M(n,s,t))}return i.then(()=>{n.notify("AnimationComplete",e)})}function xM(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let i=0;i<t;i++)if(e[i]!==n[i])return!1;return!0}const CP=Pg.length;function SM(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?SM(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<CP;t++){const i=Pg[t],s=n.props[i];(Dl(s)||s===!1)&&(e[i]=s)}return e}const RP=[...Rg].reverse(),PP=Rg.length;function DP(n){return e=>Promise.all(e.map(({animation:t,options:i})=>AP(n,t,i)))}function LP(n){let e=DP(n),t=R_(),i=!0;const s=f=>(d,p)=>{var g;const m=Il(n,p,f==="exit"?(g=n.presenceContext)==null?void 0:g.custom:void 0);if(m){const{transition:y,transitionEnd:E,...M}=m;d={...d,...M,...E}}return d};function a(f){e=f(n)}function l(f){const{props:d}=n,p=SM(n.parent)||{},m=[],g=new Set;let y={},E=1/0;for(let S=0;S<PP;S++){const _=RP[S],T=t[_],w=d[_]!==void 0?d[_]:p[_],b=Dl(w),N=_===f?T.isActive:null;N===!1&&(E=S);let L=w===p[_]&&w!==d[_]&&b;if(L&&i&&n.manuallyAnimateOnMount&&(L=!1),T.protectedKeys={...y},!T.isActive&&N===null||!w&&!T.prevProp||Mf(w)||typeof w=="boolean")continue;const I=IP(T.prevProp,w);let B=I||_===f&&T.isActive&&!L&&b||S>E&&b,P=!1;const C=Array.isArray(w)?w:[w];let k=C.reduce(s(_),{});N===!1&&(k={});const{prevResolvedValues:X={}}=T,j={...X,...k},W=J=>{B=!0,g.has(J)&&(P=!0,g.delete(J)),T.needsAnimating[J]=!0;const H=n.getValue(J);H&&(H.liveStyle=!1)};for(const J in j){const H=k[J],ae=X[J];if(y.hasOwnProperty(J))continue;let Z=!1;Kp(H)&&Kp(ae)?Z=!xM(H,ae):Z=H!==ae,Z?H!=null?W(J):g.add(J):H!==void 0&&g.has(J)?W(J):T.protectedKeys[J]=!0}T.prevProp=w,T.prevResolvedValues=k,T.isActive&&(y={...y,...k}),i&&n.blockInitialAnimation&&(B=!1),B&&(!(L&&I)||P)&&m.push(...C.map(J=>({animation:J,options:{type:_}})))}if(g.size){const S={};if(typeof d.initial!="boolean"){const _=Il(n,Array.isArray(d.initial)?d.initial[0]:d.initial);_&&_.transition&&(S.transition=_.transition)}g.forEach(_=>{const T=n.getBaseTarget(_),w=n.getValue(_);w&&(w.liveStyle=!0),S[_]=T??null}),m.push({animation:S})}let M=!!m.length;return i&&(d.initial===!1||d.initial===d.animate)&&!n.manuallyAnimateOnMount&&(M=!1),i=!1,M?e(m):Promise.resolve()}function u(f,d){var m;if(t[f].isActive===d)return Promise.resolve();(m=n.variantChildren)==null||m.forEach(g=>{var y;return(y=g.animationState)==null?void 0:y.setActive(f,d)}),t[f].isActive=d;const p=l(f);for(const g in t)t[g].protectedKeys={};return p}return{animateChanges:l,setActive:u,setAnimateFunction:a,getState:()=>t,reset:()=>{t=R_(),i=!0}}}function IP(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!xM(e,n):!1}function ks(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function R_(){return{animate:ks(!0),whileInView:ks(),whileHover:ks(),whileTap:ks(),whileDrag:ks(),whileFocus:ks(),exit:ks()}}class Ms{constructor(e){this.isMounted=!1,this.node=e}update(){}}class NP extends Ms{constructor(e){super(e),e.animationState||(e.animationState=LP(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Mf(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let UP=0;class FP extends Ms{constructor(){super(...arguments),this.id=UP++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const s=this.node.animationState.setActive("exit",!e);t&&!e&&s.then(()=>{t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const OP={animation:{Feature:NP},exit:{Feature:FP}};function Nl(n,e,t,i={passive:!0}){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t)}function Wl(n){return{point:{x:n.pageX,y:n.pageY}}}const kP=n=>e=>Cg(e)&&n(e,Wl(e));function Ml(n,e,t,i){return Nl(n,e,kP(t),i)}function EM({top:n,left:e,right:t,bottom:i}){return{x:{min:e,max:t},y:{min:n,max:i}}}function BP({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function zP(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),i=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:i.y,right:i.x}}const MM=1e-4,VP=1-MM,HP=1+MM,wM=.01,GP=0-wM,WP=0+wM;function Hn(n){return n.max-n.min}function jP(n,e,t){return Math.abs(n-e)<=t}function P_(n,e,t,i=.5){n.origin=i,n.originPoint=Yt(e.min,e.max,n.origin),n.scale=Hn(t)/Hn(e),n.translate=Yt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=VP&&n.scale<=HP||isNaN(n.scale))&&(n.scale=1),(n.translate>=GP&&n.translate<=WP||isNaN(n.translate))&&(n.translate=0)}function wl(n,e,t,i){P_(n.x,e.x,t.x,i?i.originX:void 0),P_(n.y,e.y,t.y,i?i.originY:void 0)}function D_(n,e,t){n.min=t.min+e.min,n.max=n.min+Hn(e)}function XP(n,e,t){D_(n.x,e.x,t.x),D_(n.y,e.y,t.y)}function L_(n,e,t){n.min=e.min-t.min,n.max=n.min+Hn(e)}function Tl(n,e,t){L_(n.x,e.x,t.x),L_(n.y,e.y,t.y)}const I_=()=>({translate:0,scale:1,origin:0,originPoint:0}),ia=()=>({x:I_(),y:I_()}),N_=()=>({min:0,max:0}),tn=()=>({x:N_(),y:N_()});function Si(n){return[n("x"),n("y")]}function Nh(n){return n===void 0||n===1}function Jp({scale:n,scaleX:e,scaleY:t}){return!Nh(n)||!Nh(e)||!Nh(t)}function Xs(n){return Jp(n)||TM(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function TM(n){return U_(n.x)||U_(n.y)}function U_(n){return n&&n!=="0%"}function uf(n,e,t){const i=n-t,s=e*i;return t+s}function F_(n,e,t,i,s){return s!==void 0&&(n=uf(n,s,i)),uf(n,t,i)+e}function em(n,e=0,t=1,i,s){n.min=F_(n.min,e,t,i,s),n.max=F_(n.max,e,t,i,s)}function bM(n,{x:e,y:t}){em(n.x,e.translate,e.scale,e.originPoint),em(n.y,t.translate,t.scale,t.originPoint)}const O_=.999999999999,k_=1.0000000000001;function $P(n,e,t,i=!1){const s=t.length;if(!s)return;e.x=e.y=1;let a,l;for(let u=0;u<s;u++){a=t[u],l=a.projectionDelta;const{visualElement:f}=a.options;f&&f.props.style&&f.props.style.display==="contents"||(i&&a.options.layoutScroll&&a.scroll&&a!==a.root&&sa(n,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),l&&(e.x*=l.x.scale,e.y*=l.y.scale,bM(n,l)),i&&Xs(a.latestValues)&&sa(n,a.latestValues))}e.x<k_&&e.x>O_&&(e.x=1),e.y<k_&&e.y>O_&&(e.y=1)}function ra(n,e){n.min=n.min+e,n.max=n.max+e}function B_(n,e,t,i,s=.5){const a=Yt(n.min,n.max,s);em(n,e,t,a,i)}function sa(n,e){B_(n.x,e.x,e.scaleX,e.scale,e.originX),B_(n.y,e.y,e.scaleY,e.scale,e.originY)}function AM(n,e){return EM(zP(n.getBoundingClientRect(),e))}function YP(n,e,t){const i=AM(n,t),{scroll:s}=e;return s&&(ra(i.x,s.offset.x),ra(i.y,s.offset.y)),i}const CM=({current:n})=>n?n.ownerDocument.defaultView:null,z_=(n,e)=>Math.abs(n-e);function qP(n,e){const t=z_(n.x,e.x),i=z_(n.y,e.y);return Math.sqrt(t**2+i**2)}class RM{constructor(e,t,{transformPagePoint:i,contextWindow:s,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=Fh(this.lastMoveEventInfo,this.history),g=this.startEvent!==null,y=qP(m.offset,{x:0,y:0})>=3;if(!g&&!y)return;const{point:E}=m,{timestamp:M}=wn;this.history.push({...E,timestamp:M});const{onStart:S,onMove:_}=this.handlers;g||(S&&S(this.lastMoveEvent,m),this.startEvent=this.lastMoveEvent),_&&_(this.lastMoveEvent,m)},this.handlePointerMove=(m,g)=>{this.lastMoveEvent=m,this.lastMoveEventInfo=Uh(g,this.transformPagePoint),qt.update(this.updatePoint,!0)},this.handlePointerUp=(m,g)=>{this.end();const{onEnd:y,onSessionEnd:E,resumeAnimation:M}=this.handlers;if(this.dragSnapToOrigin&&M&&M(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Fh(m.type==="pointercancel"?this.lastMoveEventInfo:Uh(g,this.transformPagePoint),this.history);this.startEvent&&y&&y(m,S),E&&E(m,S)},!Cg(e))return;this.dragSnapToOrigin=a,this.handlers=t,this.transformPagePoint=i,this.contextWindow=s||window;const l=Wl(e),u=Uh(l,this.transformPagePoint),{point:f}=u,{timestamp:d}=wn;this.history=[{...f,timestamp:d}];const{onSessionStart:p}=t;p&&p(e,Fh(u,this.history)),this.removeListeners=Vl(Ml(this.contextWindow,"pointermove",this.handlePointerMove),Ml(this.contextWindow,"pointerup",this.handlePointerUp),Ml(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),xs(this.updatePoint)}}function Uh(n,e){return e?{point:e(n.point)}:n}function V_(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Fh({point:n},e){return{point:n,delta:V_(n,PM(e)),offset:V_(n,KP(e)),velocity:ZP(e,.1)}}function KP(n){return n[0]}function PM(n){return n[n.length-1]}function ZP(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,i=null;const s=PM(n);for(;t>=0&&(i=n[t],!(s.timestamp-i.timestamp>nr(e)));)t--;if(!i)return{x:0,y:0};const a=ir(s.timestamp-i.timestamp);if(a===0)return{x:0,y:0};const l={x:(s.x-i.x)/a,y:(s.y-i.y)/a};return l.x===1/0&&(l.x=0),l.y===1/0&&(l.y=0),l}function QP(n,{min:e,max:t},i){return e!==void 0&&n<e?n=i?Yt(e,n,i.min):Math.max(n,e):t!==void 0&&n>t&&(n=i?Yt(t,n,i.max):Math.min(n,t)),n}function H_(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function JP(n,{top:e,left:t,bottom:i,right:s}){return{x:H_(n.x,t,s),y:H_(n.y,e,i)}}function G_(n,e){let t=e.min-n.min,i=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,i]=[i,t]),{min:t,max:i}}function e2(n,e){return{x:G_(n.x,e.x),y:G_(n.y,e.y)}}function t2(n,e){let t=.5;const i=Hn(n),s=Hn(e);return s>i?t=Cl(e.min,e.max-i,n.min):i>s&&(t=Cl(n.min,n.max-s,e.min)),Pr(0,1,t)}function n2(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const tm=.35;function i2(n=tm){return n===!1?n=0:n===!0&&(n=tm),{x:W_(n,"left","right"),y:W_(n,"top","bottom")}}function W_(n,e,t){return{min:j_(n,e),max:j_(n,t)}}function j_(n,e){return typeof n=="number"?n:n[e]||0}const r2=new WeakMap;class s2{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=tn(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const s=p=>{const{dragSnapToOrigin:m}=this.getProps();m?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Wl(p).point)},a=(p,m)=>{const{drag:g,dragPropagation:y,onDragStart:E}=this.getProps();if(g&&!y&&(this.openDragLock&&this.openDragLock(),this.openDragLock=ER(g),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Si(S=>{let _=this.getAxisMotionValue(S).get()||0;if(rr.test(_)){const{projection:T}=this.visualElement;if(T&&T.layout){const w=T.layout.layoutBox[S];w&&(_=Hn(w)*(parseFloat(_)/100))}}this.originPoint[S]=_}),E&&qt.postRender(()=>E(p,m)),Zp(this.visualElement,"transform");const{animationState:M}=this.visualElement;M&&M.setActive("whileDrag",!0)},l=(p,m)=>{const{dragPropagation:g,dragDirectionLock:y,onDirectionLock:E,onDrag:M}=this.getProps();if(!g&&!this.openDragLock)return;const{offset:S}=m;if(y&&this.currentDirection===null){this.currentDirection=o2(S),this.currentDirection!==null&&E&&E(this.currentDirection);return}this.updateAxis("x",m.point,S),this.updateAxis("y",m.point,S),this.visualElement.render(),M&&M(p,m)},u=(p,m)=>this.stop(p,m),f=()=>Si(p=>{var m;return this.getAnimationState(p)==="paused"&&((m=this.getAxisMotionValue(p).animation)==null?void 0:m.play())}),{dragSnapToOrigin:d}=this.getProps();this.panSession=new RM(e,{onSessionStart:s,onStart:a,onMove:l,onSessionEnd:u,resumeAnimation:f},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,contextWindow:CM(this.visualElement)})}stop(e,t){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:s}=t;this.startAnimation(s);const{onDragEnd:a}=this.getProps();a&&qt.postRender(()=>a(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,i){const{drag:s}=this.getProps();if(!i||!du(e,s,this.currentDirection))return;const a=this.getAxisMotionValue(e);let l=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(l=QP(l,this.constraints[e],this.elastic[e])),a.set(l)}resolveConstraints(){var a;const{dragConstraints:e,dragElastic:t}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(a=this.visualElement.projection)==null?void 0:a.layout,s=this.constraints;e&&na(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=JP(i.layoutBox,e):this.constraints=!1,this.elastic=i2(t),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Si(l=>{this.constraints!==!1&&this.getAxisMotionValue(l)&&(this.constraints[l]=n2(i.layoutBox[l],this.constraints[l]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!na(e))return!1;const i=e.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const a=YP(i,s.root,this.visualElement.getTransformPagePoint());let l=e2(s.layout.layoutBox,a);if(t){const u=t(BP(l));this.hasMutatedConstraints=!!u,u&&(l=EM(u))}return l}startAnimation(e){const{drag:t,dragMomentum:i,dragElastic:s,dragTransition:a,dragSnapToOrigin:l,onDragTransitionEnd:u}=this.getProps(),f=this.constraints||{},d=Si(p=>{if(!du(p,t,this.currentDirection))return;let m=f&&f[p]||{};l&&(m={min:0,max:0});const g=s?200:1e6,y=s?40:1e7,E={type:"inertia",velocity:i?e[p]:0,bounceStiffness:g,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...a,...m};return this.startAxisValueAnimation(p,E)});return Promise.all(d).then(u)}startAxisValueAnimation(e,t){const i=this.getAxisMotionValue(e);return Zp(this.visualElement,e),i.start(Og(e,i,0,t,this.visualElement,!1))}stopAnimation(){Si(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Si(e=>{var t;return(t=this.getAxisMotionValue(e).animation)==null?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)==null?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),s=i[t];return s||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Si(t=>{const{drag:i}=this.getProps();if(!du(t,i,this.currentDirection))return;const{projection:s}=this.visualElement,a=this.getAxisMotionValue(t);if(s&&s.layout){const{min:l,max:u}=s.layout.layoutBox[t];a.set(e[t]-Yt(l,u,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:i}=this.visualElement;if(!na(t)||!i||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};Si(l=>{const u=this.getAxisMotionValue(l);if(u&&this.constraints!==!1){const f=u.get();s[l]=t2({min:f,max:f},this.constraints[l])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Si(l=>{if(!du(l,e,null))return;const u=this.getAxisMotionValue(l),{min:f,max:d}=this.constraints[l];u.set(Yt(f,d,s[l]))})}addListeners(){if(!this.visualElement.current)return;r2.set(this.visualElement,this);const e=this.visualElement.current,t=Ml(e,"pointerdown",f=>{const{drag:d,dragListener:p=!0}=this.getProps();d&&p&&this.start(f)}),i=()=>{const{dragConstraints:f}=this.getProps();na(f)&&f.current&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,a=s.addEventListener("measure",i);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),qt.read(i);const l=Nl(window,"resize",()=>this.scalePositionWithinConstraints()),u=s.addEventListener("didUpdate",({delta:f,hasLayoutChanged:d})=>{this.isDragging&&d&&(Si(p=>{const m=this.getAxisMotionValue(p);m&&(this.originPoint[p]+=f[p].translate,m.set(m.get()+f[p].translate))}),this.visualElement.render())});return()=>{l(),t(),a(),u&&u()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:i=!1,dragPropagation:s=!1,dragConstraints:a=!1,dragElastic:l=tm,dragMomentum:u=!0}=e;return{...e,drag:t,dragDirectionLock:i,dragPropagation:s,dragConstraints:a,dragElastic:l,dragMomentum:u}}}function du(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function o2(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class a2 extends Ms{constructor(e){super(e),this.removeGroupControls=Ti,this.removeListeners=Ti,this.controls=new s2(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ti}unmount(){this.removeGroupControls(),this.removeListeners()}}const X_=n=>(e,t)=>{n&&qt.postRender(()=>n(e,t))};class l2 extends Ms{constructor(){super(...arguments),this.removePointerDownListener=Ti}onPointerDown(e){this.session=new RM(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:CM(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:i,onPanEnd:s}=this.node.getProps();return{onSessionStart:X_(e),onStart:X_(t),onMove:i,onEnd:(a,l)=>{delete this.session,s&&qt.postRender(()=>s(a,l))}}}mount(){this.removePointerDownListener=Ml(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const $u={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function $_(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const fl={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(at.test(n))n=parseFloat(n);else return n;const t=$_(n,e.target.x),i=$_(n,e.target.y);return`${t}% ${i}%`}},c2={correct:(n,{treeScale:e,projectionDelta:t})=>{const i=n,s=Ss.parse(n);if(s.length>5)return i;const a=Ss.createTransformer(n),l=typeof s[0]!="number"?1:0,u=t.x.scale*e.x,f=t.y.scale*e.y;s[0+l]/=u,s[1+l]/=f;const d=Yt(u,f,.5);return typeof s[2+l]=="number"&&(s[2+l]/=d),typeof s[3+l]=="number"&&(s[3+l]/=d),a(s)}};class u2 extends D.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i,layoutId:s}=this.props,{projection:a}=e;YR(f2),a&&(t.group&&t.group.add(a),i&&i.register&&s&&i.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),$u.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:i,drag:s,isPresent:a}=this.props,{projection:l}=i;return l&&(l.isPresent=a,s||e.layoutDependency!==t||t===void 0||e.isPresent!==a?l.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?l.promote():l.relegate()||qt.postRender(()=>{const u=l.getStack();(!u||!u.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Ag.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i}=this.props,{projection:s}=e;s&&(s.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(s),i&&i.deregister&&i.deregister(s))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function DM(n){const[e,t]=DR(),i=D.useContext(hE);return G.jsx(u2,{...n,layoutGroup:i,switchLayoutGroup:D.useContext(cM),isPresent:e,safeToRemove:t})}const f2={borderRadius:{...fl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:fl,borderTopRightRadius:fl,borderBottomLeftRadius:fl,borderBottomRightRadius:fl,boxShadow:c2};function d2(n,e,t){const i=Fn(n)?n:ga(n);return i.start(Og("",i,e,t)),i.animation}const h2=(n,e)=>n.depth-e.depth;class p2{constructor(){this.children=[],this.isDirty=!1}add(e){lg(this.children,e),this.isDirty=!0}remove(e){cg(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(h2),this.isDirty=!1,this.children.forEach(e)}}function m2(n,e){const t=ei.now(),i=({timestamp:s})=>{const a=s-t;a>=e&&(xs(i),n(a-e))};return qt.setup(i,!0),()=>xs(i)}const LM=["TopLeft","TopRight","BottomLeft","BottomRight"],g2=LM.length,Y_=n=>typeof n=="string"?parseFloat(n):n,q_=n=>typeof n=="number"||at.test(n);function v2(n,e,t,i,s,a){s?(n.opacity=Yt(0,t.opacity??1,y2(i)),n.opacityExit=Yt(e.opacity??1,0,_2(i))):a&&(n.opacity=Yt(e.opacity??1,t.opacity??1,i));for(let l=0;l<g2;l++){const u=`border${LM[l]}Radius`;let f=K_(e,u),d=K_(t,u);if(f===void 0&&d===void 0)continue;f||(f=0),d||(d=0),f===0||d===0||q_(f)===q_(d)?(n[u]=Math.max(Yt(Y_(f),Y_(d),i),0),(rr.test(d)||rr.test(f))&&(n[u]+="%")):n[u]=d}(e.rotate||t.rotate)&&(n.rotate=Yt(e.rotate||0,t.rotate||0,i))}function K_(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const y2=IM(0,.5,wE),_2=IM(.5,.95,Ti);function IM(n,e,t){return i=>i<n?0:i>e?1:t(Cl(n,e,i))}function Z_(n,e){n.min=e.min,n.max=e.max}function _i(n,e){Z_(n.x,e.x),Z_(n.y,e.y)}function Q_(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function J_(n,e,t,i,s){return n-=e,n=uf(n,1/t,i),s!==void 0&&(n=uf(n,1/s,i)),n}function x2(n,e=0,t=1,i=.5,s,a=n,l=n){if(rr.test(e)&&(e=parseFloat(e),e=Yt(l.min,l.max,e/100)-l.min),typeof e!="number")return;let u=Yt(a.min,a.max,i);n===a&&(u-=e),n.min=J_(n.min,e,t,u,s),n.max=J_(n.max,e,t,u,s)}function ex(n,e,[t,i,s],a,l){x2(n,e[t],e[i],e[s],e.scale,a,l)}const S2=["x","scaleX","originX"],E2=["y","scaleY","originY"];function tx(n,e,t,i){ex(n.x,e,S2,t?t.x:void 0,i?i.x:void 0),ex(n.y,e,E2,t?t.y:void 0,i?i.y:void 0)}function nx(n){return n.translate===0&&n.scale===1}function NM(n){return nx(n.x)&&nx(n.y)}function ix(n,e){return n.min===e.min&&n.max===e.max}function M2(n,e){return ix(n.x,e.x)&&ix(n.y,e.y)}function rx(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function UM(n,e){return rx(n.x,e.x)&&rx(n.y,e.y)}function sx(n){return Hn(n.x)/Hn(n.y)}function ox(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class w2{constructor(){this.members=[]}add(e){lg(this.members,e),e.scheduleRender()}remove(e){if(cg(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(s=>e===s);if(t===0)return!1;let i;for(let s=t;s>=0;s--){const a=this.members[s];if(a.isPresent!==!1){i=a;break}}return i?(this.promote(i),!0):!1}promote(e,t){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,t&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:s}=e.options;s===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:i}=e;t.onExitComplete&&t.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function T2(n,e,t){let i="";const s=n.x.translate/e.x,a=n.y.translate/e.y,l=(t==null?void 0:t.z)||0;if((s||a||l)&&(i=`translate3d(${s}px, ${a}px, ${l}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:d,rotate:p,rotateX:m,rotateY:g,skewX:y,skewY:E}=t;d&&(i=`perspective(${d}px) ${i}`),p&&(i+=`rotate(${p}deg) `),m&&(i+=`rotateX(${m}deg) `),g&&(i+=`rotateY(${g}deg) `),y&&(i+=`skewX(${y}deg) `),E&&(i+=`skewY(${E}deg) `)}const u=n.x.scale*e.x,f=n.y.scale*e.y;return(u!==1||f!==1)&&(i+=`scale(${u}, ${f})`),i||"none"}const Oh=["","X","Y","Z"],b2={visibility:"hidden"},A2=1e3;let C2=0;function kh(n,e,t,i){const{latestValues:s}=e;s[n]&&(t[n]=s[n],e.setStaticValue(n,0),i&&(i[n]=0))}function FM(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=yM(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:s,layoutId:a}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",qt,!(s||a))}const{parent:i}=n;i&&!i.hasCheckedOptimisedAppear&&FM(i)}function OM({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:i,resetTransform:s}){return class{constructor(l={},u=e==null?void 0:e()){this.id=C2++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(D2),this.nodes.forEach(F2),this.nodes.forEach(O2),this.nodes.forEach(L2)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=l,this.root=u?u.root||u:this,this.path=u?[...u.path,u]:[],this.parent=u,this.depth=u?u.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new p2)}addEventListener(l,u){return this.eventHandlers.has(l)||this.eventHandlers.set(l,new dg),this.eventHandlers.get(l).add(u)}notifyListeners(l,...u){const f=this.eventHandlers.get(l);f&&f.notify(...u)}hasListeners(l){return this.eventHandlers.has(l)}mount(l){if(this.instance)return;this.isSVG=iM(l)&&!CR(l),this.instance=l;const{layoutId:u,layout:f,visualElement:d}=this.options;if(d&&!d.current&&d.mount(l),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(f||u)&&(this.isLayoutDirty=!0),n){let p;const m=()=>this.root.updateBlockedByResize=!1;n(l,()=>{this.root.updateBlockedByResize=!0,p&&p(),p=m2(m,250),$u.hasAnimatedSinceResize&&($u.hasAnimatedSinceResize=!1,this.nodes.forEach(lx))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&d&&(u||f)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:m,hasRelativeLayoutChanged:g,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=this.options.transition||d.getDefaultTransition()||H2,{onLayoutAnimationStart:M,onLayoutAnimationComplete:S}=d.getProps(),_=!this.targetLayout||!UM(this.targetLayout,y),T=!m&&g;if(this.options.layoutRoot||this.resumeFrom||T||m&&(_||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(p,T);const w={...Tg(E,"layout"),onPlay:M,onComplete:S};(d.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else m||lx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const l=this.getStack();l&&l.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),xs(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(k2),this.animationId++)}getTransformTemplate(){const{visualElement:l}=this.options;return l&&l.getProps().transformTemplate}willUpdate(l=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&FM(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const m=this.path[p];m.shouldResetTransform=!0,m.updateScroll("snapshot"),m.options.layoutRoot&&m.willUpdate(!1)}const{layoutId:u,layout:f}=this.options;if(u===void 0&&!f)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),l&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(ax);return}this.isUpdating||this.nodes.forEach(N2),this.isUpdating=!1,this.nodes.forEach(U2),this.nodes.forEach(R2),this.nodes.forEach(P2),this.clearAllSnapshots();const u=ei.now();wn.delta=Pr(0,1e3/60,u-wn.timestamp),wn.timestamp=u,wn.isProcessing=!0,Rh.update.process(wn),Rh.preRender.process(wn),Rh.render.process(wn),wn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ag.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(I2),this.sharedNodes.forEach(B2)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,qt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){qt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Hn(this.snapshot.measuredBox.x)&&!Hn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const l=this.layout;this.layout=this.measure(!1),this.layoutCorrected=tn(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:u}=this.options;u&&u.notify("LayoutMeasure",this.layout.layoutBox,l?l.layoutBox:void 0)}updateScroll(l="measure"){let u=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===l&&(u=!1),u&&this.instance){const f=i(this.instance);this.scroll={animationId:this.root.animationId,phase:l,isRoot:f,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:f}}}resetTransform(){if(!s)return;const l=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,u=this.projectionDelta&&!NM(this.projectionDelta),f=this.getTransformTemplate(),d=f?f(this.latestValues,""):void 0,p=d!==this.prevTransformTemplateValue;l&&this.instance&&(u||Xs(this.latestValues)||p)&&(s(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(l=!0){const u=this.measurePageBox();let f=this.removeElementScroll(u);return l&&(f=this.removeTransform(f)),G2(f),{animationId:this.root.animationId,measuredBox:u,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){var d;const{visualElement:l}=this.options;if(!l)return tn();const u=l.measureViewportBox();if(!(((d=this.scroll)==null?void 0:d.wasRoot)||this.path.some(W2))){const{scroll:p}=this.root;p&&(ra(u.x,p.offset.x),ra(u.y,p.offset.y))}return u}removeElementScroll(l){var f;const u=tn();if(_i(u,l),(f=this.scroll)!=null&&f.wasRoot)return u;for(let d=0;d<this.path.length;d++){const p=this.path[d],{scroll:m,options:g}=p;p!==this.root&&m&&g.layoutScroll&&(m.wasRoot&&_i(u,l),ra(u.x,m.offset.x),ra(u.y,m.offset.y))}return u}applyTransform(l,u=!1){const f=tn();_i(f,l);for(let d=0;d<this.path.length;d++){const p=this.path[d];!u&&p.options.layoutScroll&&p.scroll&&p!==p.root&&sa(f,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),Xs(p.latestValues)&&sa(f,p.latestValues)}return Xs(this.latestValues)&&sa(f,this.latestValues),f}removeTransform(l){const u=tn();_i(u,l);for(let f=0;f<this.path.length;f++){const d=this.path[f];if(!d.instance||!Xs(d.latestValues))continue;Jp(d.latestValues)&&d.updateSnapshot();const p=tn(),m=d.measurePageBox();_i(p,m),tx(u,d.latestValues,d.snapshot?d.snapshot.layoutBox:void 0,p)}return Xs(this.latestValues)&&tx(u,this.latestValues),u}setTargetDelta(l){this.targetDelta=l,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(l){this.options={...this.options,...l,crossfade:l.crossfade!==void 0?l.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==wn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(l=!1){var g;const u=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=u.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=u.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=u.isSharedProjectionDirty);const f=!!this.resumingFrom||this!==u;if(!(l||f&&this.isSharedProjectionDirty||this.isProjectionDirty||(g=this.parent)!=null&&g.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:p,layoutId:m}=this.options;if(!(!this.layout||!(p||m))){if(this.resolvedRelativeTargetAt=wn.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=tn(),this.relativeTargetOrigin=tn(),Tl(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),_i(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=tn(),this.targetWithTransforms=tn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),XP(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):_i(this.target,this.layout.layoutBox),bM(this.target,this.targetDelta)):_i(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=tn(),this.relativeTargetOrigin=tn(),Tl(this.relativeTargetOrigin,this.target,y.target),_i(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Jp(this.parent.latestValues)||TM(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var E;const l=this.getLead(),u=!!this.resumingFrom||this!==l;let f=!0;if((this.isProjectionDirty||(E=this.parent)!=null&&E.isProjectionDirty)&&(f=!1),u&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(f=!1),this.resolvedRelativeTargetAt===wn.timestamp&&(f=!1),f)return;const{layout:d,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||p))return;_i(this.layoutCorrected,this.layout.layoutBox);const m=this.treeScale.x,g=this.treeScale.y;$P(this.layoutCorrected,this.treeScale,this.path,u),l.layout&&!l.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(l.target=l.layout.layoutBox,l.targetWithTransforms=tn());const{target:y}=l;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Q_(this.prevProjectionDelta.x,this.projectionDelta.x),Q_(this.prevProjectionDelta.y,this.projectionDelta.y)),wl(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==m||this.treeScale.y!==g||!ox(this.projectionDelta.x,this.prevProjectionDelta.x)||!ox(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(l=!0){var u;if((u=this.options.visualElement)==null||u.scheduleRender(),l){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ia(),this.projectionDelta=ia(),this.projectionDeltaWithTransform=ia()}setAnimationOrigin(l,u=!1){const f=this.snapshot,d=f?f.latestValues:{},p={...this.latestValues},m=ia();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!u;const g=tn(),y=f?f.source:void 0,E=this.layout?this.layout.source:void 0,M=y!==E,S=this.getStack(),_=!S||S.members.length<=1,T=!!(M&&!_&&this.options.crossfade===!0&&!this.path.some(V2));this.animationProgress=0;let w;this.mixTargetDelta=b=>{const N=b/1e3;cx(m.x,l.x,N),cx(m.y,l.y,N),this.setTargetDelta(m),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Tl(g,this.layout.layoutBox,this.relativeParent.layout.layoutBox),z2(this.relativeTarget,this.relativeTargetOrigin,g,N),w&&M2(this.relativeTarget,w)&&(this.isProjectionDirty=!1),w||(w=tn()),_i(w,this.relativeTarget)),M&&(this.animationValues=p,v2(p,d,this.latestValues,N,T,_)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=N},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(l){var u,f,d;this.notifyListeners("animationStart"),(u=this.currentAnimation)==null||u.stop(!1),(d=(f=this.resumingFrom)==null?void 0:f.currentAnimation)==null||d.stop(!1),this.pendingAnimation&&(xs(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=qt.update(()=>{$u.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=ga(0)),this.currentAnimation=d2(this.motionValue,[0,1e3],{...l,isSync:!0,onUpdate:p=>{this.mixTargetDelta(p),l.onUpdate&&l.onUpdate(p)},onStop:()=>{},onComplete:()=>{l.onComplete&&l.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const l=this.getStack();l&&l.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(A2),this.currentAnimation.stop(!1)),this.completeAnimation()}applyTransformsToTarget(){const l=this.getLead();let{targetWithTransforms:u,target:f,layout:d,latestValues:p}=l;if(!(!u||!f||!d)){if(this!==l&&this.layout&&d&&kM(this.options.animationType,this.layout.layoutBox,d.layoutBox)){f=this.target||tn();const m=Hn(this.layout.layoutBox.x);f.x.min=l.target.x.min,f.x.max=f.x.min+m;const g=Hn(this.layout.layoutBox.y);f.y.min=l.target.y.min,f.y.max=f.y.min+g}_i(u,f),sa(u,p),wl(this.projectionDeltaWithTransform,this.layoutCorrected,u,p)}}registerSharedNode(l,u){this.sharedNodes.has(l)||this.sharedNodes.set(l,new w2),this.sharedNodes.get(l).add(u);const d=u.options.initialPromotionConfig;u.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(u):void 0})}isLead(){const l=this.getStack();return l?l.lead===this:!0}getLead(){var u;const{layoutId:l}=this.options;return l?((u=this.getStack())==null?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:l}=this.options;return l?(u=this.getStack())==null?void 0:u.prevLead:void 0}getStack(){const{layoutId:l}=this.options;if(l)return this.root.sharedNodes.get(l)}promote({needsReset:l,transition:u,preserveFollowOpacity:f}={}){const d=this.getStack();d&&d.promote(this,f),l&&(this.projectionDelta=void 0,this.needsReset=!0),u&&this.setOptions({transition:u})}relegate(){const l=this.getStack();return l?l.relegate(this):!1}resetSkewAndRotation(){const{visualElement:l}=this.options;if(!l)return;let u=!1;const{latestValues:f}=l;if((f.z||f.rotate||f.rotateX||f.rotateY||f.rotateZ||f.skewX||f.skewY)&&(u=!0),!u)return;const d={};f.z&&kh("z",l,d,this.animationValues);for(let p=0;p<Oh.length;p++)kh(`rotate${Oh[p]}`,l,d,this.animationValues),kh(`skew${Oh[p]}`,l,d,this.animationValues);l.render();for(const p in d)l.setStaticValue(p,d[p]),this.animationValues&&(this.animationValues[p]=d[p]);l.scheduleRender()}getProjectionStyles(l){if(!this.instance||this.isSVG)return;if(!this.isVisible)return b2;const u={visibility:""},f=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Xu(l==null?void 0:l.pointerEvents)||"",u.transform=f?f(this.latestValues,""):"none",u;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=Xu(l==null?void 0:l.pointerEvents)||""),this.hasProjected&&!Xs(this.latestValues)&&(y.transform=f?f({},""):"none",this.hasProjected=!1),y}const p=d.animationValues||d.latestValues;this.applyTransformsToTarget(),u.transform=T2(this.projectionDeltaWithTransform,this.treeScale,p),f&&(u.transform=f(p,u.transform));const{x:m,y:g}=this.projectionDelta;u.transformOrigin=`${m.origin*100}% ${g.origin*100}% 0`,d.animationValues?u.opacity=d===this?p.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:u.opacity=d===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const y in Ll){if(p[y]===void 0)continue;const{correct:E,applyTo:M,isCSSVariable:S}=Ll[y],_=u.transform==="none"?p[y]:E(p[y],d);if(M){const T=M.length;for(let w=0;w<T;w++)u[M[w]]=_}else S?this.options.visualElement.renderState.vars[y]=_:u[y]=_}return this.options.layoutId&&(u.pointerEvents=d===this?Xu(l==null?void 0:l.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(l=>{var u;return(u=l.currentAnimation)==null?void 0:u.stop(!1)}),this.root.nodes.forEach(ax),this.root.sharedNodes.clear()}}}function R2(n){n.updateLayout()}function P2(n){var t;const e=((t=n.resumeFrom)==null?void 0:t.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:s}=n.layout,{animationType:a}=n.options,l=e.source!==n.layout.source;a==="size"?Si(m=>{const g=l?e.measuredBox[m]:e.layoutBox[m],y=Hn(g);g.min=i[m].min,g.max=g.min+y}):kM(a,e.layoutBox,i)&&Si(m=>{const g=l?e.measuredBox[m]:e.layoutBox[m],y=Hn(i[m]);g.max=g.min+y,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[m].max=n.relativeTarget[m].min+y)});const u=ia();wl(u,i,e.layoutBox);const f=ia();l?wl(f,n.applyTransform(s,!0),e.measuredBox):wl(f,i,e.layoutBox);const d=!NM(u);let p=!1;if(!n.resumeFrom){const m=n.getClosestProjectingParent();if(m&&!m.resumeFrom){const{snapshot:g,layout:y}=m;if(g&&y){const E=tn();Tl(E,e.layoutBox,g.layoutBox);const M=tn();Tl(M,i,y.layoutBox),UM(E,M)||(p=!0),m.options.layoutRoot&&(n.relativeTarget=M,n.relativeTargetOrigin=E,n.relativeParent=m)}}}n.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:f,layoutDelta:u,hasLayoutChanged:d,hasRelativeLayoutChanged:p})}else if(n.isLead()){const{onExitComplete:i}=n.options;i&&i()}n.options.transition=void 0}function D2(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function L2(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function I2(n){n.clearSnapshot()}function ax(n){n.clearMeasurements()}function N2(n){n.isLayoutDirty=!1}function U2(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function lx(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function F2(n){n.resolveTargetDelta()}function O2(n){n.calcProjection()}function k2(n){n.resetSkewAndRotation()}function B2(n){n.removeLeadSnapshot()}function cx(n,e,t){n.translate=Yt(e.translate,0,t),n.scale=Yt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function ux(n,e,t,i){n.min=Yt(e.min,t.min,i),n.max=Yt(e.max,t.max,i)}function z2(n,e,t,i){ux(n.x,e.x,t.x,i),ux(n.y,e.y,t.y,i)}function V2(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const H2={duration:.45,ease:[.4,0,.1,1]},fx=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),dx=fx("applewebkit/")&&!fx("chrome/")?Math.round:Ti;function hx(n){n.min=dx(n.min),n.max=dx(n.max)}function G2(n){hx(n.x),hx(n.y)}function kM(n,e,t){return n==="position"||n==="preserve-aspect"&&!jP(sx(e),sx(t),.2)}function W2(n){var e;return n!==n.root&&((e=n.scroll)==null?void 0:e.wasRoot)}const j2=OM({attachResizeListener:(n,e)=>Nl(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Bh={current:void 0},BM=OM({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Bh.current){const n=new j2({});n.mount(window),n.setOptions({layoutScroll:!0}),Bh.current=n}return Bh.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),X2={pan:{Feature:l2},drag:{Feature:a2,ProjectionNode:BM,MeasureLayout:DM}};function px(n,e,t){const{props:i}=n;n.animationState&&i.whileHover&&n.animationState.setActive("whileHover",t==="Start");const s="onHover"+t,a=i[s];a&&qt.postRender(()=>a(e,Wl(e)))}class $2 extends Ms{mount(){const{current:e}=this.node;e&&(this.unmount=MR(e,(t,i)=>(px(this.node,i,"Start"),s=>px(this.node,s,"End"))))}unmount(){}}class Y2 extends Ms{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Vl(Nl(this.node.current,"focus",()=>this.onFocus()),Nl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function mx(n,e,t){const{props:i}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&i.whileTap&&n.animationState.setActive("whileTap",t==="Start");const s="onTap"+(t==="End"?"":t),a=i[s];a&&qt.postRender(()=>a(e,Wl(e)))}class q2 extends Ms{mount(){const{current:e}=this.node;e&&(this.unmount=AR(e,(t,i)=>(mx(this.node,i,"Start"),(s,{success:a})=>mx(this.node,s,a?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const nm=new WeakMap,zh=new WeakMap,K2=n=>{const e=nm.get(n.target);e&&e(n)},Z2=n=>{n.forEach(K2)};function Q2({root:n,...e}){const t=n||document;zh.has(t)||zh.set(t,{});const i=zh.get(t),s=JSON.stringify(e);return i[s]||(i[s]=new IntersectionObserver(Z2,{root:n,...e})),i[s]}function J2(n,e,t){const i=Q2(e);return nm.set(n,t),i.observe(n),()=>{nm.delete(n),i.unobserve(n)}}const eD={some:0,all:1};class tD extends Ms{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:i,amount:s="some",once:a}=e,l={root:t?t.current:void 0,rootMargin:i,threshold:typeof s=="number"?s:eD[s]},u=f=>{const{isIntersecting:d}=f;if(this.isInView===d||(this.isInView=d,a&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:p,onViewportLeave:m}=this.node.getProps(),g=d?p:m;g&&g(f)};return J2(this.node.current,l,u)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(nD(e,t))&&this.startObserver()}unmount(){}}function nD({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const iD={inView:{Feature:tD},tap:{Feature:q2},focus:{Feature:Y2},hover:{Feature:$2}},rD={layout:{ProjectionNode:BM,MeasureLayout:DM}},im={current:null},zM={current:!1};function sD(){if(zM.current=!0,!!og)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>im.current=n.matches;n.addListener(e),e()}else im.current=!1}const oD=new WeakMap;function aD(n,e,t){for(const i in e){const s=e[i],a=t[i];if(Fn(s))n.addValue(i,s);else if(Fn(a))n.addValue(i,ga(s,{owner:n}));else if(a!==s)if(n.hasValue(i)){const l=n.getValue(i);l.liveStyle===!0?l.jump(s):l.hasAnimated||l.set(s)}else{const l=n.getStaticValue(i);n.addValue(i,ga(l!==void 0?l:s,{owner:n}))}}for(const i in t)e[i]===void 0&&n.removeValue(i);return e}const gx=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class lD{scrapeMotionValuesFromProps(e,t,i){return{}}constructor({parent:e,props:t,presenceContext:i,reducedMotionConfig:s,blockInitialAnimation:a,visualState:l},u={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=wg,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const g=ei.now();this.renderScheduledAt<g&&(this.renderScheduledAt=g,qt.render(this.render,!1,!0))};const{latestValues:f,renderState:d}=l;this.latestValues=f,this.baseTarget={...f},this.initialValues=t.initial?{...f}:{},this.renderState=d,this.parent=e,this.props=t,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=s,this.options=u,this.blockInitialAnimation=!!a,this.isControllingVariants=wf(t),this.isVariantNode=aM(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:p,...m}=this.scrapeMotionValuesFromProps(t,{},this);for(const g in m){const y=m[g];f[g]!==void 0&&Fn(y)&&y.set(f[g],!1)}}mount(e){this.current=e,oD.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,i)=>this.bindToMotionValue(i,t)),zM.current||sD(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:im.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),xs(this.notifyUpdate),xs(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=Aa.has(e);i&&this.onBindTransform&&this.onBindTransform();const s=t.on("change",u=>{this.latestValues[e]=u,this.props.onUpdate&&qt.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),a=t.on("renderRequest",this.scheduleRender);let l;window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{s(),a(),l&&l(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in va){const t=va[e];if(!t)continue;const{isEnabled:i,Feature:s}=t;if(!this.features[e]&&s&&i(this.props)&&(this.features[e]=new s(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):tn()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let i=0;i<gx.length;i++){const s=gx[i];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const a="on"+s,l=e[a];l&&(this.propEventSubscriptions[s]=this.on(s,l))}this.prevMotionValues=aD(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const i=this.values.get(e);t!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&t!==void 0&&(i=ga(t===null?void 0:t,{owner:this}),this.addValue(e,i)),i}readValue(e,t){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(pE(i)||gE(i))?i=parseFloat(i):!PR(i)&&Ss.test(t)&&(i=QE(e,t)),this.setBaseTarget(e,Fn(i)?i.get():i)),Fn(i)?i.get():i}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var a;const{initial:t}=this.props;let i;if(typeof t=="string"||typeof t=="object"){const l=Ug(this.props,t,(a=this.presenceContext)==null?void 0:a.custom);l&&(i=l[e])}if(t&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!Fn(s)?s:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new dg),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class VM extends lD{constructor(){super(...arguments),this.KeyframeResolver=yR}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:i}){delete t[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Fn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function HM(n,{style:e,vars:t},i,s){Object.assign(n.style,e,s&&s.getProjectionStyles(i));for(const a in t)n.style.setProperty(a,t[a])}function cD(n){return window.getComputedStyle(n)}class uD extends VM{constructor(){super(...arguments),this.type="html",this.renderInstance=HM}readValueFromInstance(e,t){var i;if(Aa.has(t))return(i=this.projection)!=null&&i.isProjecting?Wp(t):OC(e,t);{const s=cD(e),a=(mg(t)?s.getPropertyValue(t):s[t])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(e,{transformPagePoint:t}){return AM(e,t)}build(e,t,i){Lg(e,t,i.transformTemplate)}scrapeMotionValuesFromProps(e,t,i){return Fg(e,t,i)}}const GM=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function fD(n,e,t,i){HM(n,e,void 0,i);for(const s in e.attrs)n.setAttribute(GM.has(s)?s:Dg(s),e.attrs[s])}class dD extends VM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=tn}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Aa.has(t)){const i=ZE(t);return i&&i.default||0}return t=GM.has(t)?t:Dg(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,i){return vM(e,t,i)}build(e,t,i){hM(e,t,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,t,i,s){fD(e,t,i,s)}mount(e){this.isSVGTag=mM(e.tagName),super.mount(e)}}const hD=(n,e)=>Ng(n)?new dD(e):new uD(e,{allowProjection:n!==D.Fragment}),pD=fP({...OP,...iD,...X2,...rD},hD),Qn=FR(pD);function Tf(n,e,t,i){return new(t||(t=Promise))(function(s,a){function l(d){try{f(i.next(d))}catch(p){a(p)}}function u(d){try{f(i.throw(d))}catch(p){a(p)}}function f(d){var p;d.done?s(d.value):(p=d.value,p instanceof t?p:new t(function(m){m(p)})).then(l,u)}f((i=i.apply(n,[])).next())})}function vs(n,e){var t,i,s,a,l={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(f){return function(d){return function(p){if(t)throw new TypeError("Generator is already executing.");for(;l;)try{if(t=1,i&&(s=2&p[0]?i.return:p[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,p[1])).done)return s;switch(i=0,s&&(p=[2&p[0],s.value]),p[0]){case 0:case 1:s=p;break;case 4:return l.label++,{value:p[1],done:!1};case 5:l.label++,i=p[1],p=[0];continue;case 7:p=l.ops.pop(),l.trys.pop();continue;default:if(s=l.trys,!((s=s.length>0&&s[s.length-1])||p[0]!==6&&p[0]!==2)){l=0;continue}if(p[0]===3&&(!s||p[1]>s[0]&&p[1]<s[3])){l.label=p[1];break}if(p[0]===6&&l.label<s[1]){l.label=s[1],s=p;break}if(s&&l.label<s[2]){l.label=s[2],l.ops.push(p);break}s[2]&&l.ops.pop(),l.trys.pop();continue}p=e.call(n,l)}catch(m){p=[6,m],i=0}finally{t=s=0}if(5&p[0])throw p[1];return{value:p[0]?p[1]:void 0,done:!0}}([f,d])}}}function rm(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Bi(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var i,s,a=t.call(n),l=[];try{for(;(e===void 0||e-- >0)&&!(i=a.next()).done;)l.push(i.value)}catch(u){s={error:u}}finally{try{i&&!i.done&&(t=a.return)&&t.call(a)}finally{if(s)throw s.error}}return l}function er(n,e,t){if(arguments.length===2)for(var i,s=0,a=e.length;s<a;s++)!i&&s in e||(i||(i=Array.prototype.slice.call(e,0,s)),i[s]=e[s]);return n.concat(i||Array.prototype.slice.call(e))}function vx(n,e,t,i,s){for(var a=[],l=5;l<arguments.length;l++)a[l-5]=arguments[l];return Tf(this,void 0,void 0,function(){var u,f,d,p,m,g;return vs(this,function(y){switch(y.label){case 0:y.trys.push([0,12,13,14]),u=rm(a),f=u.next(),y.label=1;case 1:if(f.done)return[3,11];switch(d=f.value,typeof d){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,mD(n,e,d,t,i,s)];case 3:return y.sent(),[3,10];case 4:return[4,WM(d)];case 5:return y.sent(),[3,10];case 6:return[4,d.apply(void 0,er([n,e,t,i,s],Bi(a),!1))];case 7:return y.sent(),[3,10];case 8:return[4,d];case 9:y.sent(),y.label=10;case 10:return f=u.next(),[3,1];case 11:return[3,14];case 12:return p=y.sent(),m={error:p},[3,14];case 13:try{f&&!f.done&&(g=u.return)&&g.call(u)}finally{if(m)throw m.error}return[7];case 14:return[2]}})})}function mD(n,e,t,i,s,a){return Tf(this,void 0,void 0,function(){var l,u;return vs(this,function(f){switch(f.label){case 0:return l=n.textContent||"",u=function(d,p){var m=Bi(p).slice(0);return er(er([],Bi(d),!1),[NaN],!1).findIndex(function(g,y){return m[y]!==g})}(l,t),[4,gD(n,er(er([],Bi(yD(l,e,u)),!1),Bi(vD(t,e,u)),!1),i,s,a)];case 1:return f.sent(),[2]}})})}function WM(n){return Tf(this,void 0,void 0,function(){return vs(this,function(e){switch(e.label){case 0:return[4,new Promise(function(t){return setTimeout(t,n)})];case 1:return e.sent(),[2]}})})}function gD(n,e,t,i,s){return Tf(this,void 0,void 0,function(){var a,l,u,f,d,p,m,g,y,E,M,S,_;return vs(this,function(T){switch(T.label){case 0:if(a=e,s){for(l=0,u=1;u<e.length;u++)if(f=Bi([e[u-1],e[u]],2),d=f[0],(p=f[1]).length>d.length||p===""){l=u;break}a=e.slice(l,e.length)}T.label=1;case 1:T.trys.push([1,6,7,8]),m=rm(function(w){var b,N,L,I,B,P,C;return vs(this,function(k){switch(k.label){case 0:b=function(X){return vs(this,function(j){switch(j.label){case 0:return[4,{op:function(W){return requestAnimationFrame(function(){return W.textContent=X})},opCode:function(W){var Y=W.textContent||"";return X===""||Y.length>X.length?"DELETE":"WRITING"}}];case 1:return j.sent(),[2]}})},k.label=1;case 1:k.trys.push([1,6,7,8]),N=rm(w),L=N.next(),k.label=2;case 2:return L.done?[3,5]:(I=L.value,[5,b(I)]);case 3:k.sent(),k.label=4;case 4:return L=N.next(),[3,2];case 5:return[3,8];case 6:return B=k.sent(),P={error:B},[3,8];case 7:try{L&&!L.done&&(C=N.return)&&C.call(N)}finally{if(P)throw P.error}return[7];case 8:return[2]}})}(a)),g=m.next(),T.label=2;case 2:return g.done?[3,5]:(y=g.value,E=y.opCode(n)==="WRITING"?t+t*(Math.random()-.5):i+i*(Math.random()-.5),y.op(n),[4,WM(E)]);case 3:T.sent(),T.label=4;case 4:return g=m.next(),[3,2];case 5:return[3,8];case 6:return M=T.sent(),S={error:M},[3,8];case 7:try{g&&!g.done&&(_=m.return)&&_.call(m)}finally{if(S)throw S.error}return[7];case 8:return[2]}})})}function vD(n,e,t){var i,s;return t===void 0&&(t=0),vs(this,function(a){switch(a.label){case 0:i=e(n),s=i.length,a.label=1;case 1:return t<s?[4,i.slice(0,++t).join("")]:[3,3];case 2:return a.sent(),[3,1];case 3:return[2]}})}function yD(n,e,t){var i,s;return t===void 0&&(t=0),vs(this,function(a){switch(a.label){case 0:i=e(n),s=i.length,a.label=1;case 1:return s>t?[4,i.slice(0,--s).join("")]:[3,3];case 2:return a.sent(),[3,1];case 3:return[2]}})}var _D="index-module_type__E-SaG";(function(n,e){e===void 0&&(e={});var t=e.insertAt;if(typeof document<"u"){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",t==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=n:s.appendChild(document.createTextNode(n))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);var xD=D.memo(D.forwardRef(function(n,e){var t=n.sequence,i=n.repeat,s=n.className,a=n.speed,l=a===void 0?40:a,u=n.deletionSpeed,f=n.omitDeletionAnimation,d=f!==void 0&&f,p=n.preRenderFirstString,m=p!==void 0&&p,g=n.wrapper,y=g===void 0?"span":g,E=n.splitter,M=E===void 0?function(Z){return er([],Bi(Z),!1)}:E,S=n.cursor,_=S===void 0||S,T=n.style,w=function(Z,O){var Q={};for(var Me in Z)Object.prototype.hasOwnProperty.call(Z,Me)&&O.indexOf(Me)<0&&(Q[Me]=Z[Me]);if(Z!=null&&typeof Object.getOwnPropertySymbols=="function"){var te=0;for(Me=Object.getOwnPropertySymbols(Z);te<Me.length;te++)O.indexOf(Me[te])<0&&Object.prototype.propertyIsEnumerable.call(Z,Me[te])&&(Q[Me[te]]=Z[Me[te]])}return Q}(n,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),b=w["aria-label"],N=w["aria-hidden"],L=w.role;u||(u=l);var I=new Array(2).fill(40);[l,u].forEach(function(Z,O){switch(typeof Z){case"number":I[O]=Math.abs(Z-100);break;case"object":var Q=Z.type,Me=Z.value;if(typeof Me!="number")break;Q==="keyStrokeDelayInMs"&&(I[O]=Me)}});var B,P,C,k,X,j,W=I[0],Y=I[1],ee=function(Z,O){O===void 0&&(O=null);var Q=D.useRef(O);return D.useEffect(function(){Z&&(typeof Z=="function"?Z(Q.current):Z.current=Q.current)},[Z]),Q}(e),J=_D;B=s?"".concat(_?J+" ":"").concat(s):_?J:"",P=D.useRef(function(){var Z,O=t;i===1/0?Z=vx:typeof i=="number"&&(O=Array(1+i).fill(t).flat());var Q=Z?er(er([],Bi(O),!1),[Z],!1):er([],Bi(O),!1);return vx.apply(void 0,er([ee.current,M,W,Y,d],Bi(Q),!1)),function(){ee.current}}),C=D.useRef(),k=D.useRef(!1),X=D.useRef(!1),j=Bi(D.useState(0),2)[1],k.current&&(X.current=!0),D.useEffect(function(){return k.current||(C.current=P.current(),k.current=!0),j(function(Z){return Z+1}),function(){X.current&&C.current&&C.current()}},[]);var H=y,ae=m?t.find(function(Z){return typeof Z=="string"})||"":null;return Un.createElement(H,{"aria-hidden":N,"aria-label":b,role:L,style:T,className:B,children:b?Un.createElement("span",{"aria-hidden":"true",ref:ee,children:ae}):ae,ref:b?void 0:ee})}),function(n,e){return!0});const SD=()=>{const[n,e]=D.useState(""),t="Hello,World! I'm ZHOU.",i=D.useRef(0),[s,a]=D.useState(!1),l={hidden:{opacity:0},visible:{opacity:1,transition:{delayChildren:.3,staggerChildren:.2}}},u={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.5,ease:"easeOut"}}},f={hidden:{opacity:0},visible:{opacity:1,transition:{type:"spring",stiffness:100,damping:15}}};return D.useEffect(()=>{const d=()=>{const p=i.current;if(p<t.length){e(g=>g+t.charAt(p)),i.current++;const m=[",",".","!"].includes(t.charAt(p))?300:100;setTimeout(d,m)}else a(!0)};return d(),()=>{i.current=0}},[]),G.jsx(Qn.div,{className:"container",id:"about",initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},variants:l,children:G.jsxs(Qn.div,{className:"flex flex-col items-center max-w-[1000px] w-full",variants:f,children:[G.jsx(Qn.img,{src:"photos/my_photo.jpg",alt:"My Photo",className:"w-[220px] rounded-[20px] shadow-lg transition-all hover:shadow-xl mb-3",whileHover:{scale:1.02},transition:{type:"spring",stiffness:300,damping:10}}),G.jsxs(Qn.div,{className:"text-center",variants:u,children:[G.jsxs(Qn.h1,{className:"text-[2.8rem] mb-2 font-bold tracking-[0.5px]",variants:u,style:{color:"var(--primary-color)"},children:[n,!s&&G.jsx("span",{className:"font-light animate-[blink_0.7s_infinite]",children:"|"})]}),s&&G.jsxs("div",{className:"my-2 mb-3 text-[1.6rem] flex items-center justify-center min-h-[30px]",children:[G.jsx("span",{className:"mr-2.5 font-light opacity-85",children:"I am a "}),G.jsx(xD,{sequence:["System Programmer",2e3,"Unix Enthusiast",2e3,"C/C++ Developer",2e3,"Billiards Player",2e3],wrapper:"span",cursor:!0,repeat:1/0,className:"font-semibold min-w-[10px]",style:{color:"var(--accent-color)"}})]}),G.jsxs(Qn.p,{className:"text-[1.15rem] leading-relaxed my-2 mx-auto opacity-90 max-w-[800px] text-center",variants:u,children:["Welcome to my digital space! As an individual fascinated by the intricate interplay between hardware",G.jsx("i",{className:"fas fa-microchip mx-[3px]"})," and software",G.jsx("i",{className:"fas fa-file-code mx-[3px]"}),", I explore the full spectrum of technology. Beyond coding, I'm an avid photographer capturing life's moments ",G.jsx("i",{className:"fas fa-camera mx-[3px]"})," ","and a billiards enthusiast seeking the perfect shot"," ",G.jsx("i",{className:"fas fa-circle mx-[3px]"}),". Here, I share my journey through system architecture, creative pursuits, and continuous learning",G.jsx("i",{className:"fas fa-book mx-[3px]"}),"."]})]})]})})},ED=()=>{const[n,e]=D.useState([]),[t,i]=D.useState(-1),[s,a]=D.useState(""),[l,u]=D.useState(""),f=D.useRef(null),d=D.useRef(null),p=D.useMemo(()=>`
  ____            _____                 
 |  _ \\   _ __   |___ /   _ __     __ _ 
 | |_) | | '_ \\    |_ \\  | '_ \\   / _\` |
 |  __/  | |_) |  ___) | | | | | | (_| |
 |_|     | .__/  |____/  |_| |_|  \\__, |
         |_|                      |___/ 
`,[]),m=D.useMemo(()=>`${p}
<span class="success-text">Welcome to my terminal</span>
Type '<span class="info-text">help</span>' for available commands
`,[p]),g=D.useCallback(()=>window.innerWidth<=768,[]),y=D.useCallback(()=>{f.current&&(f.current.scrollTop=f.current.scrollHeight)},[]);D.useEffect(()=>{if(u(m),g()){const T=document.getElementById("terminal-output");T&&(T.style.fontSize="8px")}},[m,g]),D.useEffect(()=>{y()},[l,y]);const E=D.useCallback(T=>({__html:T}),[]),M=D.useMemo(()=>({help:()=>`Available commands:
<span class="info-text">help</span>: Show this help message
<span class="info-text">whoami</span>: Display personal information
<span class="info-text">contact</span>: Show contact information
<span class="info-text">clear</span>: Clear terminal
<span class="info-text">goto</span> [section]: Navigate to a section
<span class="info-text">joke</span>: Show a programming joke
<span class="info-text">cowsay</span> [message]: Make a cow say something
<span class="info-text">weather</span> [city]: Show weather (your location if no city specified)
<span class="info-text">crypto</span>: Show current Bitcoin prices
<span class="info-text">cat</span>: Get random cat picture
<span class="info-text">dog</span>: Get random dog picture
<span class="info-text">nasa</span>: Get NASA astronomy picture of the day
<span class="info-text">fact</span>: Get random fact
<span class="info-text">date</span>: Show current date and time
<span class="info-text">history</span>: Show command history
<span class="info-text">neofetch</span>: Display system information
<span class="info-text">advice</span>: Get a random advice
<span class="info-text">word</span>: Get a random word

Type any command to execute.`,whoami:()=>`Name: Penn.L.Zhou(周罗鹏)
Occupation: Programmer
Passions:
- Programming: C/C++ development in Linux environment
- Photography: Capturing moments and finding beauty in everyday scenes
- Billiards: Strategic game requiring precision and focus`,contact:()=>`<a href="https://www.instagram.com/pp3ng___" target="_blank">Instagram: @pp3ng___</a>
<a href="https://github.com/Pp3ng" target="_blank">GitHub: github.com/Pp3ng</a>
<a href="mailto:pp3ng@outlook.com">Email: Pp3ng@outlook.com</a>`,clear:()=>(u(m),null),goto:T=>{const w=document.getElementById(T);if(w){const b=document.querySelector(".navbar"),N=(b==null?void 0:b.offsetHeight)||0;return window.scrollTo({top:w.offsetTop-N-20,behavior:"smooth"}),`<span class="success-text">Navigating to ${T}...</span>`}else return`<span class="error-text">Section not found: ${T}.</span>
Available sections: about, terminal, journey, passions, gallery, projects, insights, bookshelf`},joke:()=>'<img src="https://readme-jokes.vercel.app/api?theme=vue" alt="Programming Joke" style="max-width: 100%; border-radius: 8px;">',cowsay:(T="Mooooo!")=>{const w=Array.isArray(T)?T.join(" "):T.toString();return`
  ${"-".repeat(w.length+2)}
< ${w} >
  ${"-".repeat(w.length+2)}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
        `},weather:async T=>{try{if(!T)return await(await fetch("https://wttr.in/?format=3")).text();const w=await fetch(`https://wttr.in/${encodeURIComponent(T)}?format=3`);if(!w.ok)throw new Error("Weather service error");return await w.text()}catch{return'<span class="error-text">Failed to fetch weather data. Please try again later or specify a valid city name.</span>'}},crypto:async()=>{try{const T=await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd,eur,cny");if(!T.ok)throw new Error("API request failed");const w=await T.json();return`<span class="success-text">Cryptocurrency Prices:</span>

<span class="info-text">Bitcoin (BTC):</span>
USD: $${w.bitcoin.usd.toFixed(2)}
EUR: €${w.bitcoin.eur.toFixed(2)}
CNY: ¥${w.bitcoin.cny.toFixed(2)}

<span class="info-text">Ethereum (ETH):</span>
USD: $${w.ethereum.usd.toFixed(2)}
EUR: €${w.ethereum.eur.toFixed(2)}
CNY: ¥${w.ethereum.cny.toFixed(2)}`}catch{return'<span class="error-text">Failed to fetch cryptocurrency prices. The API might be rate limited or temporarily unavailable.</span>'}},cat:async()=>{try{return`<div class="my-2.5">
                    <img src="${(await(await fetch("https://api.thecatapi.com/v1/images/search")).json())[0].url}" alt="Random Cat" class="w-60 h-60 object-cover rounded-[15px] border-3 border-white/40">
                </div>`}catch{return'<span class="error-text">Failed to fetch cat picture</span>'}},dog:async()=>{try{return`<div class="my-2.5">
                    <img src="${(await(await fetch("https://api.thedogapi.com/v1/images/search")).json())[0].url}" alt="Random Dog" class="w-60 h-60 object-cover rounded-[15px] border-3 border-white/40">
                </div>`}catch{return'<span class="error-text">Failed to fetch dog picture</span>'}},nasa:async()=>{try{const w=await(await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")).json();return`<span class="success-text">NASA Astronomy Picture of the Day:</span>
Title: ${w.title}
Date: ${w.date}
<div class="my-2.5">
    <img src="${w.url}" alt="${w.title}" class="w-60 h-60 object-cover rounded-[15px] border-3 border-white/40">
</div>
${w.explanation.slice(0,200)}...`}catch{return'<span class="error-text">Failed to fetch NASA picture of the day</span>'}},fact:async()=>{try{return`<span class="info-text">Random Fact:</span> ${(await(await fetch("https://uselessfacts.jsph.pl/random.json?language=en")).json()).text}`}catch{return'<span class="error-text">Failed to fetch random fact</span>'}},date:()=>{const T=new Date,w=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],b=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`<span class="success-text">${w[T.getDay()]} ${b[T.getMonth()]} ${T.getDate()} ${T.toTimeString().slice(0,8)} KST ${T.getFullYear()}</span>`},history:()=>n.length===0?'<span class="error-text">No command history found</span>':n.map((T,w)=>`<span class="info-text"> ${w+1}</span>  ${T}`).join(`
`),neofetch:()=>{const T=new Date("2024-09-28"),b=Math.floor((new Date().getTime()-T.getTime())/(1e3*60*60*24)),N=navigator.language||"en-US",L=()=>{const P=navigator.userAgent;return P.includes("Firefox")?"Browser (Firefox)":P.includes("Chrome")&&!P.includes("Edg")?"Browser (Chrome)":P.includes("Safari")&&!P.includes("Chrome")?"Browser (Safari)":P.includes("Edg")?"Browser (Edge)":P.includes("OPR")?"Browser (Opera)":"Browser (Other)"},I=["Time to code and conquer!","Coffee level: Critical","Bug hunting in progress...","System status: Awesome","Ready to debug!"];return`<span style="color: #4a90e2;">
                            .---.                </span><span class="success-text">${I[Math.floor(Math.random()*I.length)]}</span><span style="color: #4a90e2;">
                           /     \\               ------------------------------------
                           \\.@-@./               </span><span class="info-text">OS:</span> ${L()} <i class="fas fa-globe"></i><span style="color: #4a90e2;">
                           /\`\\_/\`\\               </span><span class="info-text">Host:</span> Personal Portfolio v2.0 <i class="fas fa-laptop-code"></i><span style="color: #4a90e2;">
                          //  _  \\\\              </span><span class="info-text">Kernel:</span> JavaScript ES2024 <i class="fab fa-js"></i><span style="color: #4a90e2;">
                         | \\     )|_             </span><span class="info-text">Uptime:</span> ${Math.abs(b)} days <i class="fas fa-clock"></i><span style="color: #4a90e2;">
                        /\`\\_\`>  <_/ \\            </span><span class="info-text">Packages:</span> 42 node_modules installed <i class="fab fa-npm"></i><span style="color: #4a90e2;">
                       (  \\_     _/  )           </span><span class="info-text">Shell:</span> Terminal.js v3.14 <i class="fas fa-terminal"></i><span style="color: #4a90e2;">
                        \`-\\_____/--'             </span><span class="info-text">Resolution:</span> ${window.screen.width}x${window.screen.height} <i class="fas fa-desktop"></i><span style="color: #4a90e2;">
                                                 </span><span class="info-text">DE:</span> Glass Morphism <i class="fas fa-palette"></i><span style="color: #4a90e2;">
                                                 </span><span class="info-text">Icons:</span> Font Awesome <i class="fab fa-font-awesome"></i><span style="color: #4a90e2;">
                                                 </span><span class="info-text">Terminal:</span> Web Console Pro <i class="fas fa-code"></i><span style="color: #4a90e2;">
                                                 </span><span class="info-text">CPU:</span> Brain 6.0 GHz <i class="fas fa-microchip"></i><span style="color: #4a90e2;">
                                                 </span><span class="info-text">GPU:</span> Eyes RTX 5090 Ti <i class="fas fa-eye"></i><span style="color: #4a90e2;">
                                                 </span><span class="info-text">Locale:</span> ${N} <i class="fas fa-globe-asia"></i><span style="color: #4a90e2;">
                                                 </span><span class="info-text">Battery:</span> Coffee 99% <i class="fas fa-coffee"></i></span>`},advice:async()=>{try{const w=await(await fetch("https://api.adviceslip.com/advice")).json();return`<span class="success-text">💡 Advice #${w.slip.id}:</span> ${w.slip.advice}`}catch{return`<span class="error-text">Failed to fetch advice. Maybe that's the advice: sometimes things fail.</span>`}},word:async()=>{try{const T=await fetch("https://random-word-api.herokuapp.com/word"),[w]=await T.json();return`<span class="info-text">Random word:</span> ${w}`}catch{return'<span class="error-text">Failed to fetch a random word. Please try again later.</span>'}}}),[n,m]),S=D.useCallback(async T=>{if(!T.trim())return"";const w=T.split(" "),b=w[0],N=w.slice(1);if(M[b]){if(b==="cowsay")return M[b](N.join(" "));const L=M[b](...N);return L instanceof Promise?await L:L}else if(T.trim()!=="")return`<span class="error-text">Command not found: ${T}.</span> Type '<span class="info-text">help</span>' for available commands.`;return""},[M]),_=D.useCallback(async T=>{if(T.key==="Enter"){const w=s.trim();if(w){if(e(N=>[...N,w]),i(n.length+1),w==="clear"){M.clear(),a("");return}const b=await S(w);u(N=>`${N}>_ ${w}
`),b!==null&&u(N=>`${N}${b||""}

`)}a(""),y()}else if(T.key==="ArrowUp"){if(T.preventDefault(),n.length>0&&t>0){const w=t-1;i(w),a(n[w])}}else if(T.key==="ArrowDown")if(T.preventDefault(),t<n.length-1){const w=t+1;i(w),a(n[w])}else i(n.length),a("");else if(T.key==="Tab"){T.preventDefault();const w=s,b=Object.keys(M).filter(N=>N.startsWith(w.split(" ")[0]));b.length===1?a(b[0]+(w.includes(" ")?w.substring(w.indexOf(" ")):"")):b.length>1&&(u(N=>`${N}>_ ${w}
${b.join("  ")}

`),y())}else T.key==="c"&&T.ctrlKey?(T.preventDefault(),a(""),u(w=>`${w}>_ ^C
`),y()):T.key==="l"&&T.ctrlKey&&(T.preventDefault(),M.clear())},[s,n,t,S,y,M]);return G.jsxs("div",{className:"container",id:"terminal","data-aos":"fade-up",children:[G.jsx("h2",{children:"Terminal"}),G.jsx("div",{className:"terminal-section",children:G.jsxs("div",{id:"terminal-window",ref:f,children:[G.jsx("div",{id:"terminal-output",dangerouslySetInnerHTML:E(l)}),G.jsxs("div",{id:"terminal-input-line",children:[G.jsx("span",{id:"terminal-prompt",children:"pp3ng@portfolio:~$"}),G.jsx("input",{type:"text",id:"terminal-input",ref:d,value:s,onChange:T=>a(T.target.value),onKeyDown:_})]})]})})]})},MD=[{date:"Spring 2022",title:"First Encounter with Linux",description:"Discovered Linux operating system and was captivated by its design philosophy. This marked the beginning of my passion for system programming and helped me find my true technical interest.",icon:"fab fa-linux"},{date:"Spring 2021",title:"Beginning Computer Science Journey",description:"Formally began studying Computer Science and Engineering at university. This marked the start of my systematic exploration of computer science, laying a solid foundation for my future technical pursuits.",icon:"fas fa-laptop-code"},{date:"Spring 2021",title:"First Study Abroad Experience",description:"Embarked on my first international journey as an international student. This experience not only broadened my academic horizons but also helped me develop independence and cross-cultural understanding while adapting to a new environment.",icon:"fas fa-globe-asia"},{date:"Winter 2019",title:"Beginning Independent Living",description:"Moved into a new place and started living independently. Learned to manage various aspects of life on my own, enjoying solitude while also gaining a deeper appreciation for time spent with family and friends.",icon:"fas fa-home"},{date:"Winter 2018",title:"Billiards: From Beginner to Enthusiast",description:"First encountered billiards and was deeply drawn to its precision and strategy. Regular practice became a weekly routine, continuously improving techniques. Through this journey, I learned the importance of patience and focus.",icon:"fas fa-circle"}],wD=()=>G.jsxs("div",{className:"container",id:"journey","data-aos":"fade-up",children:[G.jsx("h2",{children:"Life Journey"}),G.jsx("ul",{className:"timeline timeline-vertical timeline-snap-icon max-md:timeline-compact",children:MD.map((n,e)=>G.jsxs(Qn.li,{initial:{opacity:0,x:e%2===0?-30:30,y:20},whileInView:{opacity:1,x:0,y:0},transition:{duration:.6,delay:e*.15,ease:[.22,1,.36,1]},className:"hover:scale-[1.02] transition-all duration-500 ease-out",children:[G.jsx("div",{className:"timeline-middle",children:G.jsxs("div",{className:"relative group",children:[G.jsx("div",{className:"absolute -inset-0.5 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-700 group-hover:duration-300 bg-[var(--primary-color)]"}),G.jsx("div",{className:"relative bg-base-100 rounded-full p-2",children:G.jsx("i",{className:`${n.icon} text-lg transition-all duration-500 group-hover:scale-110 text-[var(--primary-color)]`})})]})}),G.jsx("div",{className:`timeline-${e%2===0?"start":"end"} md:text-end mb-8`,children:G.jsxs(Qn.div,{className:"p-6 rounded-lg backdrop-blur-md bg-white/10 dark:bg-black/10 transition-all duration-300 ease-out hover:shadow-xl hover:bg-white/20 dark:hover:bg-black/20",whileHover:{scale:1.02,transition:{duration:.3,ease:[.22,1,.36,1]}},children:[G.jsx(Qn.time,{className:"font-mono italic block mb-2 text-xs tracking-wider text-[var(--primary-color)]",initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:e*.15+.2},children:n.date}),G.jsx(Qn.h3,{className:"text-lg font-black mb-3 tracking-tight text-[var(--heading-color)]",initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:e*.15+.3},children:n.title}),G.jsx(Qn.p,{className:"leading-relaxed text-sm/relaxed text-[var(--text-color)]",initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:e*.15+.4},children:n.description})]})}),G.jsx(Qn.hr,{initial:{scaleX:0},whileInView:{scaleX:1},transition:{duration:.8,delay:e*.15+.5},className:"bg-[var(--primary-color)] opacity-20 origin-left"})]},`journey-${e}`))})]}),TD=[{title:"Programming",description:"I'm passionate about software development and system programming. I enjoy exploring different programming paradigms and technologies to create efficient solutions. Whether it's building high-performance systems, developing web applications, or working on data processing tools, I find great satisfaction in turning complex problems into elegant code.",images:[{src:"photos/programming.JPG",alt:"Programming"},{src:"photos/coding.JPG",alt:"Coding"}]},{title:"Photography",description:"Through the lens of my camera, I seek to capture the extraordinary in the ordinary. Photography allows me to explore the interplay of light and shadow, while documenting the subtle beauty that surrounds us. Each frame tells its own story, whether it's the grandeur of architecture or the quiet moments in nature.",images:[{src:"photos/photography.jpg",alt:"Photography"},{src:"photos/photography2.jpg",alt:"Travel"}]},{title:"Billiards",description:"Billiards represents the perfect blend of precision, strategy, and artistry. Each shot is a puzzle to be solved, requiring careful consideration of angles, force, and position. Beyond the technical aspects, it's a meditative practice that teaches patience and continuous improvement.",images:[{src:"photos/billiards.jpg",alt:"Billiards"},{src:"photos/billiards2.jpg",alt:"Billiards"}]}],bD=()=>G.jsxs("section",{className:"container",id:"passions","data-aos":"fade-up",children:[G.jsx("h2",{className:"text-2xl font-bold text-center mb-6",children:"My Passions"}),G.jsx("div",{className:"flex flex-col gap-4 max-w-6xl mx-auto",children:TD.map((n,e)=>G.jsxs("div",{className:"card bg-base-200/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 ease-in-out relative overflow-hidden",style:{boxShadow:"0 8px 32px rgba(31, 38, 135, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.5)"},children:[G.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#4a90e2]/10 via-[#42b983]/10 to-[#4a90e2]/10 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"}),G.jsx("div",{className:"card-body p-6",children:G.jsxs("div",{className:"flex items-center gap-6",children:[G.jsxs("div",{className:"flex-shrink-0 group relative",children:[G.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#4a90e2]/5 via-[#42b983]/5 to-[#4a90e2]/5 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 rounded-lg"}),G.jsx("img",{src:n.images[0].src,alt:n.images[0].alt,className:"w-48 h-48 object-cover rounded-lg shadow-md transition-all duration-300 ease-out group-hover:scale-[1.01] group-hover:shadow-xl relative z-10",loading:"lazy"})]}),G.jsxs("div",{className:"flex-1 px-4",children:[G.jsx("h3",{className:"text-xl font-semibold mb-3 text-[#4a90e2]",children:n.title}),G.jsx("p",{className:"text-base text-base-content/80 leading-relaxed",children:n.description})]}),G.jsxs("div",{className:"flex-shrink-0 group relative",children:[G.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#4a90e2]/5 via-[#42b983]/5 to-[#4a90e2]/5 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 rounded-lg"}),G.jsx("img",{src:n.images[1].src,alt:n.images[1].alt,className:"w-48 h-48 object-cover rounded-lg shadow-md transition-all duration-300 ease-out group-hover:scale-[1.01] group-hover:shadow-xl relative z-10",loading:"lazy"})]})]})})]},`passion-${e}`))})]}),jM="carousel",bf="controller",AD="navigation",CD="no-scroll",kg="portal",RD="root",XM="toolbar",PD="counter",sm="fullscreen",yx="thumbnails",_x="zoom",Vh="loading",Hh="error",Gh="complete",DD="placeholder",LD=n=>`active-slide-${n}`,$M="fullsize",Bg="flex_center",ID="no_scroll",YM="no_scroll_padding",zg="slide",qM="slide_wrapper",ND="slide_wrapper_interactive",qs="prev",Ks="next",xx="swipe",ya="close",KM="onPointerDown",ZM="onPointerMove",QM="onPointerUp",JM="onPointerLeave",ew="onPointerCancel",Vg="onKeyDown",UD="onKeyUp",Hg="onWheel",FD="Escape",OD="ArrowLeft",kD="ArrowRight",BD="button",om="icon",tw="contain",Sx="cover",nw="Unknown action type";var zD=LS();const iw="yarl__";function bi(...n){return[...n].filter(Boolean).join(" ")}function _t(n){return`${iw}${n}`}function Zn(n){return`--${iw}${n}`}function jl(n,e){return`${n}${e?`_${e}`:""}`}function Gg(n){return e=>jl(n,e)}function VD(n,e){var t;return(t=n==null?void 0:n[e])!==null&&t!==void 0?t:e}function Af(...n){return()=>{n.forEach(e=>{e()})}}function Ur(n,e,t){return()=>{const i=D.useContext(t);if(!i)throw new Error(`${n} must be used within a ${e}.Provider`);return i}}function Wg(){return typeof window<"u"}function jg(n,e=0){const t=10**e;return Math.round((n+Number.EPSILON)*t)/t}function Ca(n){return n.type===void 0||n.type==="image"}function Xg(n,e){return n.imageFit===Sx||n.imageFit!==tw&&e===Sx}function Cf(n){return typeof n=="string"?Number.parseInt(n,10):n}function ff(n){if(typeof n=="number")return{pixel:n};if(typeof n=="string"){const e=Cf(n);return n.endsWith("%")?{percent:e}:{pixel:e}}return{pixel:0}}function HD(n,e){const t=ff(e),i=t.percent!==void 0?n.width/100*t.percent:t.pixel;return{width:Math.max(n.width-2*i,0),height:Math.max(n.height-2*i,0)}}function GD(){return(Wg()?window==null?void 0:window.devicePixelRatio:void 0)||1}function rw(n,e){return e>0?(n%e+e)%e:0}function sw(n){return n.length>0}function ow(n,e){return n[rw(e,n.length)]}function am(n,e){return sw(n)?ow(n,e):void 0}function WD(n){return Ca(n)?n.src:void 0}function aw(n,e,t){if(!t)return n;const{buttons:i,...s}=n,a=i.findIndex(u=>u===e),l=D.isValidElement(t)?D.cloneElement(t,{key:e},null):t;if(a>=0){const u=[...i];return u.splice(a,1,l),{buttons:u,...s}}return{buttons:[l,...i],...s}}function jD(n,e,t=0){return Math.min(n.preload,Math.max(n.finite?e.length-1:Math.floor(e.length/2),t))}const XD=Number(D.version.split(".")[0])>=19;function $D(n){return{inert:XD?n:n?"":void 0}}function YD(n){n.scrollTop}const lm={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[ya]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:tw,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1,disableSwipeNavigation:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function sr(n,e){return{name:n,component:e}}function _n(n,e){return{module:n,children:e}}function lw(n,e,t){return n.module.name===e?t(n):n.children?[_n(n.module,n.children.flatMap(i=>{var s;return(s=lw(i,e,t))!==null&&s!==void 0?s:[]}))]:[n]}function Bo(n,e,t){return n.flatMap(i=>{var s;return(s=lw(i,e,t))!==null&&s!==void 0?s:[]})}function qD(n,e=[],t=[]){let i=n;const s=y=>{const E=[...i];for(;E.length>0;){const M=E.pop();if((M==null?void 0:M.module.name)===y)return!0;M!=null&&M.children&&E.push(...M.children)}return!1},a=(y,E)=>{if(y===""){i=[_n(E,i)];return}i=Bo(i,y,M=>[_n(E,[M])])},l=(y,E)=>{i=Bo(i,y,M=>[_n(M.module,[_n(E,M.children)])])},u=(y,E,M)=>{i=Bo(i,y,S=>{var _;return[_n(S.module,[...M?[_n(E)]:[],...(_=S.children)!==null&&_!==void 0?_:[],...M?[]:[_n(E)]])]})},f=(y,E,M)=>{i=Bo(i,y,S=>[...M?[_n(E)]:[],S,...M?[]:[_n(E)]])},d=y=>{l(bf,y)},p=(y,E)=>{i=Bo(i,y,M=>[_n(E,M.children)])},m=y=>{i=Bo(i,y,E=>E.children)},g=y=>{t.push(y)};return e.forEach(y=>{y({contains:s,addParent:a,append:l,addChild:u,addSibling:f,addModule:d,replace:p,remove:m,augment:g})}),{config:i,augmentation:y=>t.reduce((E,M)=>M(E),y)}}const cw=D.createContext(null),Xl=Ur("useDocument","DocumentContext",cw);function KD({nodeRef:n,children:e}){const t=D.useMemo(()=>{const i=a=>{var l;return((l=a||n.current)===null||l===void 0?void 0:l.ownerDocument)||document};return{getOwnerDocument:i,getOwnerWindow:a=>{var l;return((l=i(a))===null||l===void 0?void 0:l.defaultView)||window}}},[n]);return D.createElement(cw.Provider,{value:t},e)}const uw=D.createContext(null),Rf=Ur("useEvents","EventsContext",uw);function ZD({children:n}){const[e]=D.useState({});D.useEffect(()=>()=>{Object.keys(e).forEach(i=>delete e[i])},[e]);const t=D.useMemo(()=>{const i=(l,u)=>{var f;(f=e[l])===null||f===void 0||f.splice(0,e[l].length,...e[l].filter(d=>d!==u))};return{publish:(...[l,u])=>{var f;(f=e[l])===null||f===void 0||f.forEach(d=>d(u))},subscribe:(l,u)=>(e[l]||(e[l]=[]),e[l].push(u),()=>i(l,u)),unsubscribe:i}},[e]);return D.createElement(uw.Provider,{value:t},n)}const fw=D.createContext(null),di=Ur("useLightboxProps","LightboxPropsContext",fw);function QD({children:n,...e}){return D.createElement(fw.Provider,{value:e},n)}const dw=D.createContext(null),Fr=Ur("useLightboxState","LightboxStateContext",dw),hw=D.createContext(null),JD=Ur("useLightboxDispatch","LightboxDispatchContext",hw);function eL(n,e){switch(e.type){case"swipe":{const{slides:t}=n,i=(e==null?void 0:e.increment)||0,s=n.globalIndex+i,a=rw(s,t.length),l=am(t,a),u=i||e.duration!==void 0?{increment:i,duration:e.duration,easing:e.easing}:void 0;return{slides:t,currentIndex:a,globalIndex:s,currentSlide:l,animation:u}}case"update":return e.slides!==n.slides||e.index!==n.currentIndex?{slides:e.slides,currentIndex:e.index,globalIndex:e.index,currentSlide:am(e.slides,e.index)}:n;default:throw new Error(nw)}}function tL({slides:n,index:e,children:t}){const[i,s]=D.useReducer(eL,{slides:n,currentIndex:e,globalIndex:e,currentSlide:am(n,e)});D.useEffect(()=>{s({type:"update",slides:n,index:e})},[n,e]);const a=D.useMemo(()=>({...i,state:i,dispatch:s}),[i,s]);return D.createElement(hw.Provider,{value:s},D.createElement(dw.Provider,{value:a},t))}const pw=D.createContext(null),Pf=Ur("useTimeouts","TimeoutsContext",pw);function nL({children:n}){const[e]=D.useState([]);D.useEffect(()=>()=>{e.forEach(i=>window.clearTimeout(i)),e.splice(0,e.length)},[e]);const t=D.useMemo(()=>{const i=l=>{e.splice(0,e.length,...e.filter(u=>u!==l))};return{setTimeout:(l,u)=>{const f=window.setTimeout(()=>{i(f),l()},u);return e.push(f),f},clearTimeout:l=>{l!==void 0&&(i(l),window.clearTimeout(l))}}},[e]);return D.createElement(pw.Provider,{value:t},n)}const Df=D.forwardRef(function({label:e,className:t,icon:i,renderIcon:s,onClick:a,style:l,...u},f){const{styles:d,labels:p}=di(),m=VD(p,e);return D.createElement("button",{ref:f,type:"button",title:m,"aria-label":m,className:bi(_t(BD),t),onClick:a,style:{...l,...d.button},...u},s?s():D.createElement(i,{className:_t(om),style:d.icon}))});function iL(n,e){const t=i=>D.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...i},e);return t.displayName=n,t}function Or(n,e){return iL(n,D.createElement("g",{fill:"currentColor"},D.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),e))}const rL=Or("Close",D.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),sL=Or("Previous",D.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),oL=Or("Next",D.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),aL=Or("Loading",D.createElement(D.Fragment,null,Array.from({length:8}).map((n,e,t)=>D.createElement("line",{key:e,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/t.length*(e+1),transform:`rotate(${360/t.length*e}, 12, 12)`})))),lL=Or("Error",D.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),ji=Wg()?D.useLayoutEffect:D.useEffect;function $g(){const[n,e]=D.useState(!1);return D.useEffect(()=>{var t,i;const s=(t=window.matchMedia)===null||t===void 0?void 0:t.call(window,"(prefers-reduced-motion: reduce)");e(s==null?void 0:s.matches);const a=l=>e(l.matches);return(i=s==null?void 0:s.addEventListener)===null||i===void 0||i.call(s,"change",a),()=>{var l;return(l=s==null?void 0:s.removeEventListener)===null||l===void 0?void 0:l.call(s,"change",a)}},[]),n}function cL(n){let e=0,t=0,i=0;const a=window.getComputedStyle(n).transform.match(/matrix.*\((.+)\)/);if(a){const l=a[1].split(",").map(Cf);l.length===6?(e=l[4],t=l[5]):l.length===16&&(e=l[12],t=l[13],i=l[14])}return{x:e,y:t,z:i}}function Ex(n,e){const t=D.useRef(void 0),i=D.useRef(void 0),s=$g();return ji(()=>{var a,l,u;if(n.current&&t.current!==void 0&&!s){const{keyframes:f,duration:d,easing:p,onfinish:m}=e(t.current,n.current.getBoundingClientRect(),cL(n.current))||{};if(f&&d){(a=i.current)===null||a===void 0||a.cancel(),i.current=void 0;try{i.current=(u=(l=n.current).animate)===null||u===void 0?void 0:u.call(l,f,{duration:d,easing:p})}catch(g){console.error(g)}i.current&&(i.current.onfinish=()=>{i.current=void 0,m==null||m()})}}t.current=void 0}),{prepareAnimation:a=>{t.current=a},isAnimationPlaying:()=>{var a;return((a=i.current)===null||a===void 0?void 0:a.playState)==="running"}}}function mw(){const n=D.useRef(null),e=D.useRef(void 0),[t,i]=D.useState();return{setContainerRef:D.useCallback(a=>{n.current=a,e.current&&(e.current.disconnect(),e.current=void 0);const l=()=>{if(a){const u=window.getComputedStyle(a),f=d=>parseFloat(d)||0;i({width:Math.round(a.clientWidth-f(u.paddingLeft)-f(u.paddingRight)),height:Math.round(a.clientHeight-f(u.paddingTop)-f(u.paddingBottom))})}else i(void 0)};l(),a&&typeof ResizeObserver<"u"&&(e.current=new ResizeObserver(l),e.current.observe(a))},[]),containerRef:n,containerRect:t}}function Yu(){const n=D.useRef(void 0),{setTimeout:e,clearTimeout:t}=Pf();return D.useCallback((i,s)=>{t(n.current),n.current=e(i,s>0?s:0)},[e,t])}function Lt(n){const e=D.useRef(n);return ji(()=>{e.current=n}),D.useCallback((...t)=>{var i;return(i=e.current)===null||i===void 0?void 0:i.call(e,...t)},[])}function Mx(n,e){typeof n=="function"?n(e):n&&(n.current=e)}function cm(n,e){return D.useMemo(()=>n==null&&e==null?null:t=>{Mx(n,t),Mx(e,t)},[n,e])}function uL(n,e=!1){const t=D.useRef(!1);ji(()=>{e&&t.current&&(t.current=!1,n())},[e,n]);const i=D.useCallback(()=>{t.current=!0},[]),s=D.useCallback(()=>{t.current=!1},[]);return{onFocus:i,onBlur:s}}function Yg(){const[n,e]=D.useState(!1);return ji(()=>{e(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),n}function fL(){const[n]=D.useState({}),e=D.useCallback((s,a)=>{var l;(l=n[s])===null||l===void 0||l.forEach(u=>{a.isPropagationStopped()||u(a)})},[n]),t=D.useMemo(()=>({onPointerDown:s=>e(KM,s),onPointerMove:s=>e(ZM,s),onPointerUp:s=>e(QM,s),onPointerLeave:s=>e(JM,s),onPointerCancel:s=>e(ew,s),onKeyDown:s=>e(Vg,s),onKeyUp:s=>e(UD,s),onWheel:s=>e(Hg,s)}),[e]),i=D.useCallback((s,a)=>(n[s]||(n[s]=[]),n[s].unshift(a),()=>{const l=n[s];l&&l.splice(0,l.length,...l.filter(u=>u!==a))}),[n]);return{registerSensors:t,subscribeSensors:i}}function wx(n,e){const t=D.useRef(0),i=Yu(),s=Lt((...a)=>{t.current=Date.now(),n(a)});return D.useCallback((...a)=>{i(()=>{s(a)},e-(Date.now()-t.current))},[e,s,i])}const Wh=Gg("slide"),jh=Gg("slide_image");function df({slide:n,offset:e,render:t,rect:i,imageFit:s,imageProps:a,onClick:l,onLoad:u,onError:f,style:d}){var p,m,g,y,E,M,S;const[_,T]=D.useState(Vh),{publish:w}=Rf(),{setTimeout:b}=Pf(),N=D.useRef(null);D.useEffect(()=>{e===0&&w(LD(_))},[e,_,w]);const L=Lt(O=>{("decode"in O?O.decode():Promise.resolve()).catch(()=>{}).then(()=>{O.parentNode&&(T(Gh),b(()=>{u==null||u(O)},0))})}),I=D.useCallback(O=>{N.current=O,O!=null&&O.complete&&L(O)},[L]),B=D.useCallback(O=>{L(O.currentTarget)},[L]),P=Lt(()=>{T(Hh),f==null||f()}),C=Xg(n,s),k=(O,Q)=>Number.isFinite(O)?O:Q,X=k(Math.max(...((m=(p=n.srcSet)===null||p===void 0?void 0:p.map(O=>O.width))!==null&&m!==void 0?m:[]).concat(n.width?[n.width]:[]).filter(Boolean)),((g=N.current)===null||g===void 0?void 0:g.naturalWidth)||0),j=k(Math.max(...((E=(y=n.srcSet)===null||y===void 0?void 0:y.map(O=>O.height))!==null&&E!==void 0?E:[]).concat(n.height?[n.height]:[]).filter(Boolean)),((M=N.current)===null||M===void 0?void 0:M.naturalHeight)||0),W=X&&j?{maxWidth:`min(${X}px, 100%)`,maxHeight:`min(${j}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},Y=(S=n.srcSet)===null||S===void 0?void 0:S.sort((O,Q)=>O.width-Q.width).map(O=>`${O.src} ${O.width}w`).join(", "),ee=()=>i&&!C&&n.width&&n.height?i.height/n.height*n.width:Number.MAX_VALUE,J=Y&&i&&Wg()?`${Math.round(Math.min(ee(),i.width))}px`:void 0,{style:H,className:ae,...Z}=a||{};return D.createElement(D.Fragment,null,D.createElement("img",{ref:I,onLoad:B,onError:P,onClick:l,draggable:!1,className:bi(_t(jh()),C&&_t(jh("cover")),_!==Gh&&_t(jh("loading")),ae),style:{...W,...d,...H},...Z,alt:n.alt,sizes:J,srcSet:Y,src:n.src}),_!==Gh&&D.createElement("div",{className:_t(Wh(DD))},_===Vh&&(t!=null&&t.iconLoading?t.iconLoading():D.createElement(aL,{className:bi(_t(om),_t(Wh(Vh)))})),_===Hh&&(t!=null&&t.iconError?t.iconError():D.createElement(lL,{className:bi(_t(om),_t(Wh(Hh)))}))))}const dL=D.forwardRef(function({className:e,children:t,...i},s){const a=D.useRef(null);return D.createElement(KD,{nodeRef:a},D.createElement("div",{ref:cm(s,a),className:bi(_t("root"),e),...i},t))});var In;(function(n){n[n.NONE=0]="NONE",n[n.SWIPE=1]="SWIPE",n[n.PULL=2]="PULL",n[n.ANIMATION=3]="ANIMATION"})(In||(In={}));function gw(n,e,t,i,s){D.useEffect(()=>s?()=>{}:Af(n(KM,e),n(ZM,t),n(QM,i),n(JM,i),n(ew,i)),[n,e,t,i,s])}var ki;(function(n){n[n.NONE=0]="NONE",n[n.SWIPE=1]="SWIPE",n[n.PULL=2]="PULL"})(ki||(ki={}));const Xh=30;function hL({disableSwipeNavigation:n,closeOnBackdropClick:e},t,i,s,a,l,u,f,d,p,m,g,y,E,M,S){const _=D.useRef(0),T=D.useRef([]),w=D.useRef(void 0),b=D.useRef(0),N=D.useRef(ki.NONE),L=D.useCallback(j=>{w.current===j.pointerId&&(w.current=void 0,N.current=ki.NONE);const W=T.current;W.splice(0,W.length,...W.filter(Y=>Y.pointerId!==j.pointerId))},[]),I=D.useCallback(j=>{L(j),j.persist(),T.current.push(j)},[L]),B=D.useCallback(j=>T.current.find(({pointerId:W})=>j.pointerId===W),[]),P=Lt(j=>{I(j)}),C=(j,W)=>m&&j>W||p&&j<-W,k=Lt(j=>{const W=B(j);if(W)if(w.current===j.pointerId){const Y=Date.now()-b.current,ee=_.current;N.current===ki.SWIPE?Math.abs(ee)>.3*s||Math.abs(ee)>5&&Y<a?f(ee,Y):d(ee):N.current===ki.PULL&&(C(ee,2*Xh)?E(ee,Y):M(ee)),_.current=0,N.current=ki.NONE}else{const{target:Y}=j;e&&Y instanceof HTMLElement&&Y===W.target&&(Y.classList.contains(_t(zg))||Y.classList.contains(_t(qM)))&&S()}L(j)}),X=Lt(j=>{const W=B(j);if(W){const Y=w.current===j.pointerId;if(j.buttons===0){Y&&_.current!==0?k(j):L(W);return}const ee=j.clientX-W.clientX,J=j.clientY-W.clientY;if(w.current===void 0){const H=ae=>{I(j),w.current=j.pointerId,b.current=Date.now(),N.current=ae};Math.abs(ee)>Math.abs(J)&&Math.abs(ee)>Xh&&i(ee)?n||(H(ki.SWIPE),l()):Math.abs(J)>Math.abs(ee)&&C(J,Xh)&&(H(ki.PULL),g())}else Y&&(N.current===ki.SWIPE?(_.current=ee,u(ee)):N.current===ki.PULL&&(_.current=J,y(J)))}});gw(t,P,X,k)}function pL({preventDefaultWheelX:n,preventDefaultWheelY:e}){const t=D.useRef(null),i=Lt(s=>{const a=Math.abs(s.deltaX)>Math.abs(s.deltaY);(a&&n||!a&&e||s.ctrlKey)&&s.preventDefault()});return D.useCallback(s=>{var a;s?s.addEventListener("wheel",i,{passive:!1}):(a=t.current)===null||a===void 0||a.removeEventListener("wheel",i),t.current=s},[i])}function mL(n,e,t,i,s,a,l,u,f){const d=D.useRef(0),p=D.useRef(0),m=D.useRef(void 0),g=D.useRef(void 0),y=D.useRef(0),E=D.useRef(void 0),M=D.useRef(0),{setTimeout:S,clearTimeout:_}=Pf(),T=D.useCallback(()=>{m.current&&(_(m.current),m.current=void 0)},[_]),w=D.useCallback(()=>{g.current&&(_(g.current),g.current=void 0)},[_]),b=Lt(()=>{n!==In.SWIPE&&(d.current=0,M.current=0,T(),w())});D.useEffect(b,[n,b]);const N=Lt(I=>{g.current=void 0,d.current===I&&f(d.current)}),L=Lt(I=>{if(I.ctrlKey||Math.abs(I.deltaY)>Math.abs(I.deltaX))return;const B=P=>{y.current=P,_(E.current),E.current=P>0?S(()=>{y.current=0,E.current=void 0},300):void 0};if(n===In.NONE){if(Math.abs(I.deltaX)<=1.2*Math.abs(y.current)){B(I.deltaX);return}if(!t(-I.deltaX))return;if(p.current+=I.deltaX,T(),Math.abs(p.current)>30)p.current=0,B(0),M.current=Date.now(),a();else{const P=p.current;m.current=S(()=>{m.current=void 0,P===p.current&&(p.current=0)},s)}}else if(n===In.SWIPE){let P=d.current-I.deltaX;if(P=Math.min(Math.abs(P),i)*Math.sign(P),d.current=P,l(P),w(),Math.abs(P)>.2*i){B(I.deltaX),u(P,Date.now()-M.current);return}g.current=S(()=>N(P),2*s)}else B(I.deltaX)});D.useEffect(()=>e(Hg,L),[e,L])}const Tx=Gg("container"),vw=D.createContext(null),kr=Ur("useController","ControllerContext",vw);function gL({children:n,...e}){var t;const{carousel:i,animation:s,controller:a,on:l,styles:u,render:f}=e,{closeOnPullUp:d,closeOnPullDown:p,preventDefaultWheelX:m,preventDefaultWheelY:g}=a,[y,E]=D.useState(),M=Fr(),S=JD(),[_,T]=D.useState(In.NONE),w=D.useRef(0),b=D.useRef(0),N=D.useRef(1),{registerSensors:L,subscribeSensors:I}=fL(),{subscribe:B,publish:P}=Rf(),C=Yu(),k=Yu(),X=Yu(),{containerRef:j,setContainerRef:W,containerRect:Y}=mw(),ee=cm(pL({preventDefaultWheelX:m,preventDefaultWheelY:g}),W),J=D.useRef(null),H=cm(J,void 0),{getOwnerDocument:ae}=Xl(),Z=Yg(),O=U=>(Z?-1:1)*(typeof U=="number"?U:1),Q=Lt(()=>{var U;return(U=j.current)===null||U===void 0?void 0:U.focus()}),Me=Lt(()=>e),te=Lt(()=>M),de=D.useCallback(U=>P(qs,U),[P]),ve=D.useCallback(U=>P(Ks,U),[P]),pe=D.useCallback(()=>P(ya),[P]),xe=U=>!(i.finite&&(O(U)>0&&M.currentIndex===0||O(U)<0&&M.currentIndex===M.slides.length-1)),Ce=U=>{var R;w.current=U,(R=j.current)===null||R===void 0||R.style.setProperty(Zn("swipe_offset"),`${Math.round(U)}px`)},Pe=U=>{var R,re;b.current=U,N.current=(()=>{const me=p&&U>0?U:d&&U<0?-U:0;return Math.min(Math.max(jg(1-me/60*(1-.5),2),.5),1)})(),(R=j.current)===null||R===void 0||R.style.setProperty(Zn("pull_offset"),`${Math.round(U)}px`),(re=j.current)===null||re===void 0||re.style.setProperty(Zn("pull_opacity"),`${N.current}`)},{prepareAnimation:dt}=Ex(J,(U,R,re)=>{if(J.current&&Y)return{keyframes:[{transform:`translate(0, ${U.rect.y-R.y+re.y}px)`,opacity:U.opacity},{transform:"translate(0, 0)",opacity:1}],duration:U.duration,easing:s.easing.fade}}),rt=(U,R)=>{if(d||p){Pe(U);let re=0;J.current&&(re=s.fade*(R?2:1),dt({rect:J.current.getBoundingClientRect(),opacity:N.current,duration:re})),X(()=>{Pe(0),T(In.NONE)},re),T(In.ANIMATION),R||pe()}},{prepareAnimation:Ve,isAnimationPlaying:V}=Ex(J,(U,R,re)=>{var ge;if(J.current&&Y&&(!((ge=M.animation)===null||ge===void 0)&&ge.duration)){const ye=ff(i.spacing),me=(ye.percent?ye.percent*Y.width/100:ye.pixel)||0;return{keyframes:[{transform:`translate(${O(M.globalIndex-U.index)*(Y.width+me)+U.rect.x-R.x+re.x}px, 0)`},{transform:"translate(0, 0)"}],duration:M.animation.duration,easing:M.animation.easing}}}),xt=Lt(U=>{var R,re;const ge=U.offset||0,ye=ge?s.swipe:(R=s.navigation)!==null&&R!==void 0?R:s.swipe,me=!ge&&!V()?s.easing.navigation:s.easing.swipe;let{direction:He}=U;const Re=(re=U.count)!==null&&re!==void 0?re:1;let Fe=In.ANIMATION,it=ye*Re;if(!He){const Oe=Y==null?void 0:Y.width,Qe=U.duration||0,Je=Oe?ye/Oe*Math.abs(ge):ye;Re!==0?(Qe<Je?it=it/Je*Math.max(Qe,Je/5):Oe&&(it=ye/Oe*(Oe-Math.abs(ge))),He=O(ge)>0?qs:Ks):it=ye/2}let we=0;He===qs?xe(O(1))?we=-Re:(Fe=In.NONE,it=ye):He===Ks&&(xe(O(-1))?we=Re:(Fe=In.NONE,it=ye)),it=Math.round(it),k(()=>{Ce(0),T(In.NONE)},it),J.current&&Ve({rect:J.current.getBoundingClientRect(),index:M.globalIndex}),T(Fe),P(xx,{type:"swipe",increment:we,duration:it,easing:me})});D.useEffect(()=>{var U,R;!((U=M.animation)===null||U===void 0)&&U.increment&&(!((R=M.animation)===null||R===void 0)&&R.duration)&&C(()=>S({type:"swipe",increment:0}),M.animation.duration)},[M.animation,S,C]);const st=[I,xe,(Y==null?void 0:Y.width)||0,s.swipe,()=>T(In.SWIPE),U=>Ce(U),(U,R)=>xt({offset:U,duration:R,count:1}),U=>xt({offset:U,count:0})],ft=[()=>{p&&T(In.PULL)},U=>Pe(U),U=>rt(U),U=>rt(U,!0)];hL(a,...st,d,p,...ft,pe),mL(_,...st);const Ke=Lt(()=>{a.focus&&ae().querySelector(`.${_t(kg)} .${_t(Tx())}`)&&Q()});D.useEffect(Ke,[Ke]);const Rt=Lt(()=>{var U;(U=l.view)===null||U===void 0||U.call(l,{index:M.currentIndex})});D.useEffect(Rt,[M.globalIndex,Rt]),D.useEffect(()=>Af(B(qs,U=>xt({direction:qs,...U})),B(Ks,U=>xt({direction:Ks,...U})),B(xx,U=>S(U))),[B,xt,S]);const $e=D.useMemo(()=>({prev:de,next:ve,close:pe,focus:Q,slideRect:Y?HD(Y,i.padding):{width:0,height:0},containerRect:Y||{width:0,height:0},subscribeSensors:I,containerRef:j,setCarouselRef:H,toolbarWidth:y,setToolbarWidth:E}),[de,ve,pe,Q,I,Y,j,H,y,E,i.padding]);return D.useImperativeHandle(a.ref,()=>({prev:de,next:ve,close:pe,focus:Q,getLightboxProps:Me,getLightboxState:te}),[de,ve,pe,Q,Me,te]),D.createElement("div",{ref:ee,className:bi(_t(Tx()),_t(Bg)),style:{..._===In.SWIPE?{[Zn("swipe_offset")]:`${Math.round(w.current)}px`}:null,..._===In.PULL?{[Zn("pull_offset")]:`${Math.round(b.current)}px`,[Zn("pull_opacity")]:`${N.current}`}:null,...a.touchAction!=="none"?{[Zn("controller_touch_action")]:a.touchAction}:null,...u.container},...a.aria?{role:"region","aria-live":"polite","aria-roledescription":"carousel"}:null,tabIndex:-1,...L},Y&&D.createElement(vw.Provider,{value:$e},n,(t=f.controls)===null||t===void 0?void 0:t.call(f)))}const vL=sr(bf,gL);function Bs(n){return jl(jM,n)}function bx(n){return jl(zg,n)}function yL({slide:n,offset:e}){const t=D.useRef(null),{currentIndex:i}=Fr(),{slideRect:s,focus:a}=kr(),{render:l,carousel:{imageFit:u,imageProps:f},on:{click:d},styles:{slide:p}}=di(),{getOwnerDocument:m}=Xl(),g=e!==0;D.useEffect(()=>{var E;g&&(!((E=t.current)===null||E===void 0)&&E.contains(m().activeElement))&&a()},[g,a,m]);const y=()=>{var E,M,S,_;let T=(E=l.slide)===null||E===void 0?void 0:E.call(l,{slide:n,offset:e,rect:s});return!T&&Ca(n)&&(T=D.createElement(df,{slide:n,offset:e,render:l,rect:s,imageFit:u,imageProps:f,onClick:g?void 0:()=>d==null?void 0:d({index:i})})),T?D.createElement(D.Fragment,null,(M=l.slideHeader)===null||M===void 0?void 0:M.call(l,{slide:n}),((S=l.slideContainer)!==null&&S!==void 0?S:({children:w})=>w)({slide:n,children:T}),(_=l.slideFooter)===null||_===void 0?void 0:_.call(l,{slide:n})):null};return D.createElement("div",{ref:t,className:bi(_t(bx()),!g&&_t(bx("current")),_t(Bg)),...$D(g),style:p,role:"region","aria-roledescription":"slide"},y())}function _L(){const n=di().styles.slide;return D.createElement("div",{className:_t(zg),style:n})}function xL({carousel:n}){const{slides:e,currentIndex:t,globalIndex:i}=Fr(),{setCarouselRef:s}=kr(),a=ff(n.spacing),l=ff(n.padding),u=jD(n,e,1),f=[];if(sw(e))for(let d=t-u;d<=t+u;d+=1){const p=ow(e,d),m=i-t+d,g=n.finite&&(d<0||d>e.length-1);f.push(g?{key:m}:{key:[`${m}`,WD(p)].filter(Boolean).join("|"),offset:d-t,slide:p})}return D.createElement("div",{ref:s,className:bi(_t(Bs()),f.length>0&&_t(Bs("with_slides"))),style:{[`${Zn(Bs("slides_count"))}`]:f.length,[`${Zn(Bs("spacing_px"))}`]:a.pixel||0,[`${Zn(Bs("spacing_percent"))}`]:a.percent||0,[`${Zn(Bs("padding_px"))}`]:l.pixel||0,[`${Zn(Bs("padding_percent"))}`]:l.percent||0}},f.map(({key:d,slide:p,offset:m})=>p?D.createElement(yL,{key:d,slide:p,offset:m}):D.createElement(_L,{key:d})))}const SL=sr(jM,xL);function yw(){const{carousel:n}=di(),{slides:e,currentIndex:t}=Fr(),i=e.length===0||n.finite&&t===0,s=e.length===0||n.finite&&t===e.length-1;return{prevDisabled:i,nextDisabled:s}}function EL(n){var e;const t=Yg(),{publish:i}=Rf(),{animation:s}=di(),{prevDisabled:a,nextDisabled:l}=yw(),u=((e=s.navigation)!==null&&e!==void 0?e:s.swipe)/2,f=wx(()=>i(qs),u),d=wx(()=>i(Ks),u),p=Lt(m=>{switch(m.key){case FD:i(ya);break;case OD:(t?l:a)||(t?d:f)();break;case kD:(t?a:l)||(t?f:d)();break}});D.useEffect(()=>n(Vg,p),[n,p])}function Ax({label:n,icon:e,renderIcon:t,action:i,onClick:s,disabled:a,style:l}){return D.createElement(Df,{label:n,icon:e,renderIcon:t,className:_t(`navigation_${i}`),disabled:a,onClick:s,style:l,...uL(kr().focus,a)})}function ML({render:{buttonPrev:n,buttonNext:e,iconPrev:t,iconNext:i},styles:s}){const{prev:a,next:l,subscribeSensors:u}=kr(),{prevDisabled:f,nextDisabled:d}=yw();return EL(u),D.createElement(D.Fragment,null,n?n():D.createElement(Ax,{label:"Previous",action:qs,icon:sL,renderIcon:t,style:s.navigationPrev,disabled:f,onClick:a}),e?e():D.createElement(Ax,{label:"Next",action:Ks,icon:oL,renderIcon:i,style:s.navigationNext,disabled:d,onClick:l}))}const wL=sr(AD,ML),Cx=_t(ID),TL=_t(YM);function bL(n){return"style"in n}function Rx(n,e,t){const i=window.getComputedStyle(n),s=t?"padding-left":"padding-right",a=t?i.paddingLeft:i.paddingRight,l=n.style.getPropertyValue(s);return n.style.setProperty(s,`${(Cf(a)||0)+e}px`),()=>{l?n.style.setProperty(s,l):n.style.removeProperty(s)}}function AL({noScroll:{disabled:n},children:e}){const t=Yg(),{getOwnerDocument:i,getOwnerWindow:s}=Xl();return D.useEffect(()=>{if(n)return()=>{};const a=[],l=s(),{body:u,documentElement:f}=i(),d=Math.round(l.innerWidth-f.clientWidth);if(d>0){a.push(Rx(u,d,t));const p=u.getElementsByTagName("*");for(let m=0;m<p.length;m+=1){const g=p[m];bL(g)&&l.getComputedStyle(g).getPropertyValue("position")==="fixed"&&!g.classList.contains(TL)&&a.push(Rx(g,d,t))}}return u.classList.add(Cx),()=>{u.classList.remove(Cx),a.forEach(p=>p())}},[t,n,i,s]),D.createElement(D.Fragment,null,e)}const CL=sr(CD,AL);function Px(n){return jl(kg,n)}function Dx(n,e,t){const i=n.getAttribute(e);return n.setAttribute(e,t),()=>{i?n.setAttribute(e,i):n.removeAttribute(e)}}function RL({children:n,animation:e,styles:t,className:i,on:s,portal:a,close:l}){const[u,f]=D.useState(!1),[d,p]=D.useState(!1),m=D.useRef([]),g=D.useRef(null),{setTimeout:y}=Pf(),{subscribe:E}=Rf(),S=$g()?0:e.fade;D.useEffect(()=>(f(!0),()=>{f(!1),p(!1)}),[]);const _=Lt(()=>{m.current.forEach(N=>N()),m.current=[]}),T=Lt(()=>{var N;p(!1),_(),(N=s.exiting)===null||N===void 0||N.call(s),y(()=>{var L;(L=s.exited)===null||L===void 0||L.call(s),l()},S)});D.useEffect(()=>E(ya,T),[E,T]);const w=Lt(N=>{var L,I,B;YD(N),p(!0),(L=s.entering)===null||L===void 0||L.call(s);const P=(B=(I=N.parentNode)===null||I===void 0?void 0:I.children)!==null&&B!==void 0?B:[];for(let C=0;C<P.length;C+=1){const k=P[C];["TEMPLATE","SCRIPT","STYLE"].indexOf(k.tagName)===-1&&k!==N&&(m.current.push(Dx(k,"inert","")),m.current.push(Dx(k,"aria-hidden","true")))}m.current.push(()=>{var C,k;(k=(C=g.current)===null||C===void 0?void 0:C.focus)===null||k===void 0||k.call(C)}),y(()=>{var C;(C=s.entered)===null||C===void 0||C.call(s)},S)}),b=D.useCallback(N=>{N?w(N):_()},[w,_]);return u?zD.createPortal(D.createElement(dL,{ref:b,className:bi(i,_t(Px()),_t(YM),d&&_t(Px("open"))),"aria-modal":!0,role:"dialog","aria-live":"polite","aria-roledescription":"lightbox",style:{...e.fade!==lm.animation.fade?{[Zn("fade_animation_duration")]:`${S}ms`}:null,...e.easing.fade!==lm.animation.easing.fade?{[Zn("fade_animation_timing_function")]:e.easing.fade}:null,...t.root},onFocus:N=>{g.current||(g.current=N.relatedTarget)}},n),a.root||document.body):null}const PL=sr(kg,RL);function DL({children:n}){return D.createElement(D.Fragment,null,n)}const LL=sr(RD,DL);function IL(n){return jl(XM,n)}function NL({toolbar:{buttons:n},render:{buttonClose:e,iconClose:t},styles:i}){const{close:s,setToolbarWidth:a}=kr(),{setContainerRef:l,containerRect:u}=mw();ji(()=>{a(u==null?void 0:u.width)},[a,u==null?void 0:u.width]);const f=()=>e?e():D.createElement(Df,{key:ya,label:"Close",icon:rL,renderIcon:t,onClick:s});return D.createElement("div",{ref:l,style:i.toolbar,className:_t(IL())},n==null?void 0:n.map(d=>d===ya?f():d))}const UL=sr(XM,NL);function _w(n,e){var t;return D.createElement(n.module.component,{key:n.module.name,...e},(t=n.children)===null||t===void 0?void 0:t.map(i=>_w(i,e)))}function FL(n,e={}){const{easing:t,...i}=n,{easing:s,...a}=e;return{easing:{...t,...s},...i,...a}}function OL({carousel:n,animation:e,render:t,toolbar:i,controller:s,noScroll:a,on:l,plugins:u,slides:f,index:d,...p}){const{animation:m,carousel:g,render:y,toolbar:E,controller:M,noScroll:S,on:_,slides:T,index:w,plugins:b,...N}=lm,{config:L,augmentation:I}=qD([_n(PL,[_n(CL,[_n(vL,[_n(SL),_n(UL),_n(wL)])])])],u||b),B=I({animation:FL(m,e),carousel:{...g,...n},render:{...y,...t},toolbar:{...E,...i},controller:{...M,...s},noScroll:{...S,...a},on:{..._,...l},...N,...p});return B.open?D.createElement(QD,{...B},D.createElement(tL,{slides:f||T,index:Cf(d||w)},D.createElement(nL,null,D.createElement(ZD,null,_w(_n(LL,L),B))))):null}const kL={maxZoomPixelRatio:1,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:500,doubleClickMaxStops:2,keyboardMoveDistance:50,wheelZoomDistanceFactor:100,pinchZoomDistanceFactor:100,scrollToZoom:!1},xw=n=>({...kL,...n});function BL(n,e,t,i){const s=D.useRef(void 0),a=D.useRef(void 0),{zoom:l}=di().animation,u=$g(),f=Lt(()=>{var d,p,m;if((d=s.current)===null||d===void 0||d.cancel(),s.current=void 0,a.current&&(i!=null&&i.current)){try{s.current=(m=(p=i.current).animate)===null||m===void 0?void 0:m.call(p,[{transform:a.current},{transform:`scale(${n}) translateX(${e}px) translateY(${t}px)`}],{duration:u?0:l??500,easing:s.current?"ease-out":"ease-in-out"})}catch(g){console.error(g)}a.current=void 0,s.current&&(s.current.onfinish=()=>{s.current=void 0})}});return ji(f,[n,e,t,f]),D.useCallback(()=>{a.current=i!=null&&i.current?window.getComputedStyle(i.current).transform:void 0},[i])}function zL(n,e){const{on:t}=di(),i=Lt(()=>{var s;e||(s=t.zoom)===null||s===void 0||s.call(t,{zoom:n})});D.useEffect(i,[n,i])}function Lf(){const{zoom:n}=di();return xw(n)}function VL(n,e){var t,i;let s={width:0,height:0},a={width:0,height:0};const{currentSlide:l}=Fr(),{imageFit:u}=di().carousel,{maxZoomPixelRatio:f}=Lf();if(n&&l){const p={...l,...e};if(Ca(p)){const m=Xg(p,u),g=Math.max(...(((t=p.srcSet)===null||t===void 0?void 0:t.map(E=>E.width))||[]).concat(p.width?[p.width]:[])),y=Math.max(...(((i=p.srcSet)===null||i===void 0?void 0:i.map(E=>E.height))||[]).concat(p.height?[p.height]:[]));g>0&&y>0&&n.width>0&&n.height>0&&(a=m?{width:Math.round(Math.min(g,n.width/n.height*y)),height:Math.round(Math.min(y,n.height/n.width*g))}:{width:g,height:y},a={width:a.width*f,height:a.height*f},s=m?{width:Math.min(n.width,a.width,g),height:Math.min(n.height,a.height,y)}:{width:Math.round(Math.min(n.width,n.height/y*g,g)),height:Math.round(Math.min(n.height,n.width/g*y,y))})}}const d=s.width?Math.max(jg(a.width/s.width,5),1):1;return{imageRect:s,maxZoom:d}}function Lx(n,e){return((n.clientX-e.clientX)**2+(n.clientY-e.clientY)**2)**.5}function Ix(n,e,t=100,i=2){return n*Math.min(1+Math.abs(e/t),i)**Math.sign(e)}function HL(n,e,t,i,s,a){const l=D.useRef([]),u=D.useRef(0),f=D.useRef(void 0),{globalIndex:d}=Fr(),{getOwnerWindow:p}=Xl(),{containerRef:m,subscribeSensors:g}=kr(),{keyboardMoveDistance:y,zoomInMultiplier:E,wheelZoomDistanceFactor:M,scrollToZoom:S,doubleTapDelay:_,doubleClickDelay:T,doubleClickMaxStops:w,pinchZoomDistanceFactor:b}=Lf(),N=D.useCallback(W=>{if(m.current){const{pageX:Y,pageY:ee}=W,{scrollX:J,scrollY:H}=p(),{left:ae,top:Z,width:O,height:Q}=m.current.getBoundingClientRect();return[Y-ae-J-O/2,ee-Z-H-Q/2]}return[]},[m,p]),L=Lt(W=>{const{key:Y,metaKey:ee,ctrlKey:J}=W,H=ee||J,ae=()=>{W.preventDefault(),W.stopPropagation()};if(n>1){const O=(Q,Me)=>{ae(),s(Q,Me)};Y==="ArrowDown"?O(0,y):Y==="ArrowUp"?O(0,-y):Y==="ArrowLeft"?O(-y,0):Y==="ArrowRight"&&O(y,0)}const Z=O=>{ae(),i(O)};Y==="+"||H&&Y==="="?Z(n*E):Y==="-"||H&&Y==="_"?Z(n/E):H&&Y==="0"&&Z(1)}),I=Lt(W=>{if((W.ctrlKey||S)&&Math.abs(W.deltaY)>Math.abs(W.deltaX)){W.stopPropagation(),i(Ix(n,-W.deltaY,M),!0,...N(W));return}n>1&&(W.stopPropagation(),S||s(W.deltaX,W.deltaY))}),B=D.useCallback(W=>{const Y=l.current;Y.splice(0,Y.length,...Y.filter(ee=>ee.pointerId!==W.pointerId))},[]),P=D.useCallback(W=>{B(W),W.persist(),l.current.push(W)},[B]),C=Lt(W=>{var Y;const ee=l.current;if(W.pointerType==="mouse"&&W.buttons>1||!(!((Y=a==null?void 0:a.current)===null||Y===void 0)&&Y.contains(W.target)))return;n>1&&W.stopPropagation();const{timeStamp:J}=W;ee.length===0&&J-u.current<(W.pointerType==="touch"?_:T)?(u.current=0,i(n!==e?n*Math.max(e**(1/w),E):1,!1,...N(W))):u.current=J,P(W),ee.length===2&&(f.current=Lx(ee[0],ee[1]))}),k=Lt(W=>{const Y=l.current,ee=Y.find(J=>J.pointerId===W.pointerId);if(Y.length===2&&f.current){W.stopPropagation(),P(W);const J=Lx(Y[0],Y[1]),H=J-f.current;Math.abs(H)>0&&(i(Ix(n,H,b),!0,...Y.map(ae=>N(ae)).reduce((ae,Z)=>Z.map((O,Q)=>ae[Q]+O/2))),f.current=J);return}n>1&&(W.stopPropagation(),ee&&(Y.length===1&&s((ee.clientX-W.clientX)/n,(ee.clientY-W.clientY)/n),P(W)))}),X=D.useCallback(W=>{const Y=l.current;Y.length===2&&Y.find(ee=>ee.pointerId===W.pointerId)&&(f.current=void 0),B(W)},[B]),j=D.useCallback(()=>{const W=l.current;W.splice(0,W.length),u.current=0,f.current=void 0},[]);gw(g,C,k,X,t),D.useEffect(j,[d,j]),D.useEffect(()=>t?()=>{}:Af(j,g(Vg,L),g(Hg,I)),[t,g,j,L,I])}function GL(n,e,t){const[i,s]=D.useState(1),[a,l]=D.useState(0),[u,f]=D.useState(0),d=BL(i,a,u,t),{currentSlide:p,globalIndex:m}=Fr(),{containerRect:g,slideRect:y}=kr(),{zoomInMultiplier:E}=Lf(),M=p&&Ca(p)?p.src:void 0,S=!M||!(t!=null&&t.current);ji(()=>{s(1),l(0),f(0)},[m,M]);const _=D.useCallback((L,I,B)=>{const P=B||i,C=a-(L||0),k=u-(I||0),X=(n.width*P-y.width)/2/P,j=(n.height*P-y.height)/2/P;l(Math.min(Math.abs(C),Math.max(X,0))*Math.sign(C)),f(Math.min(Math.abs(k),Math.max(j,0))*Math.sign(k))},[i,a,u,y,n.width,n.height]),T=D.useCallback((L,I,B,P)=>{const C=jg(Math.min(Math.max(L+.001<e?L:e,1),e),5);C!==i&&(I||d(),_(B?B*(1/i-1/C):0,P?P*(1/i-1/C):0,C),s(C))},[i,e,_,d]),w=Lt(()=>{i>1&&(i>e&&T(e,!0),_())});ji(w,[g.width,g.height,w]);const b=D.useCallback(()=>T(i*E),[i,E,T]),N=D.useCallback(()=>T(i/E),[i,E,T]);return{zoom:i,offsetX:a,offsetY:u,disabled:S,changeOffsets:_,changeZoom:T,zoomIn:b,zoomOut:N}}const Sw=D.createContext(null),qg=Ur("useZoom","ZoomControllerContext",Sw);function WL({children:n}){const[e,t]=D.useState(),{slideRect:i}=kr(),{imageRect:s,maxZoom:a}=VL(i,e==null?void 0:e.imageDimensions),{zoom:l,offsetX:u,offsetY:f,disabled:d,changeZoom:p,changeOffsets:m,zoomIn:g,zoomOut:y}=GL(s,a,e==null?void 0:e.zoomWrapperRef);zL(l,d),HL(l,a,d,p,m,e==null?void 0:e.zoomWrapperRef);const E=D.useMemo(()=>({zoom:l,maxZoom:a,offsetX:u,offsetY:f,disabled:d,zoomIn:g,zoomOut:y,changeZoom:p}),[l,a,u,f,d,g,y,p]);D.useImperativeHandle(Lf().ref,()=>E,[E]);const M=D.useMemo(()=>({...E,setZoomWrapper:t}),[E,t]);return D.createElement(Sw.Provider,{value:M},n)}const jL=Or("ZoomIn",D.createElement(D.Fragment,null,D.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),D.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"}))),XL=Or("ZoomOut",D.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"})),Nx=D.forwardRef(function({zoomIn:e,onLoseFocus:t},i){const s=D.useRef(!1),a=D.useRef(!1),{zoom:l,maxZoom:u,zoomIn:f,zoomOut:d,disabled:p}=qg(),{render:m}=di(),g=p||(e?l>=u:l<=1);return D.useEffect(()=>{g&&s.current&&a.current&&t(),g||(s.current=!0)},[g,t]),D.createElement(Df,{ref:i,disabled:g,label:e?"Zoom in":"Zoom out",icon:e?jL:XL,renderIcon:e?m.iconZoomIn:m.iconZoomOut,onClick:e?f:d,onFocus:()=>{a.current=!0},onBlur:()=>{a.current=!1}})});function $L(){const n=D.useRef(null),e=D.useRef(null),{focus:t}=kr(),i=D.useCallback(l=>{var u,f;!((u=l.current)===null||u===void 0)&&u.disabled?t():(f=l.current)===null||f===void 0||f.focus()},[t]),s=D.useCallback(()=>i(n),[i]),a=D.useCallback(()=>i(e),[i]);return D.createElement(D.Fragment,null,D.createElement(Nx,{zoomIn:!0,ref:n,onLoseFocus:a}),D.createElement(Nx,{ref:e,onLoseFocus:s}))}function YL(){const{render:n}=di(),e=qg();return n.buttonZoom?D.createElement(D.Fragment,null,n.buttonZoom(e)):D.createElement($L,null)}function qL(n){var e;return(((e=n.srcSet)===null||e===void 0?void 0:e.length)||0)>0}function KL({current:n,preload:e},{type:t,source:i}){switch(t){case"fetch":return n?{current:n,preload:i}:{current:i};case"done":return i===e?{current:i}:{current:n,preload:e};default:throw new Error(nw)}}function ZL(n){var e,t;const[{current:i,preload:s},a]=D.useReducer(KL,{}),{slide:l,rect:u,imageFit:f,render:d,interactive:p}=n,m=l.srcSet.sort((N,L)=>N.width-L.width),g=(e=l.width)!==null&&e!==void 0?e:m[m.length-1].width,y=(t=l.height)!==null&&t!==void 0?t:m[m.length-1].height,E=Xg(l,f),M=Math.max(...m.map(N=>N.width)),S=Math.min((E?Math.max:Math.min)(u.width,g*(u.height/y)),M),_=GD(),T=Lt(()=>{var N;const L=(N=m.find(I=>I.width>=S*_))!==null&&N!==void 0?N:m[m.length-1];(!i||m.findIndex(I=>I.src===i)<m.findIndex(I=>I===L))&&a({type:"fetch",source:L.src})});ji(T,[u.width,u.height,_,T]);const w=Lt(N=>a({type:"done",source:N})),b={WebkitTransform:p?"initial":"translateZ(0)"};return E||Object.assign(b,u.width/u.height<g/y?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),D.createElement(D.Fragment,null,s&&s!==i&&D.createElement(df,{key:"preload",...n,offset:void 0,slide:{...l,src:s,srcSet:void 0},style:{position:"absolute",visibility:"hidden",...b},onLoad:()=>w(s),render:{...d,iconLoading:()=>null,iconError:()=>null}}),i&&D.createElement(df,{key:"current",...n,slide:{...l,src:i,srcSet:void 0},style:b}))}function QL({render:n,slide:e,offset:t,rect:i}){var s;const[a,l]=D.useState(),u=D.useRef(null),{zoom:f,maxZoom:d,offsetX:p,offsetY:m,setZoomWrapper:g}=qg(),y=f>1,{carousel:E,on:M}=di(),{currentIndex:S}=Fr();ji(()=>t===0?(g({zoomWrapperRef:u,imageDimensions:a}),()=>g(void 0)):()=>{},[t,a,g]);let _=(s=n.slide)===null||s===void 0?void 0:s.call(n,{slide:e,offset:t,rect:i,zoom:f,maxZoom:d});if(!_&&Ca(e)){const T={slide:e,offset:t,rect:i,render:n,imageFit:E.imageFit,imageProps:E.imageProps,onClick:t===0?()=>{var w;return(w=M.click)===null||w===void 0?void 0:w.call(M,{index:S})}:void 0};_=qL(e)?D.createElement(ZL,{...T,slide:e,interactive:y,rect:t===0?{width:i.width*f,height:i.height*f}:i}):D.createElement(df,{onLoad:w=>l({width:w.naturalWidth,height:w.naturalHeight}),...T})}return _?D.createElement("div",{ref:u,className:bi(_t($M),_t(Bg),_t(qM),y&&_t(ND)),style:t===0?{transform:`scale(${f}) translateX(${p}px) translateY(${m}px)`}:void 0},_):null}const JL=({augment:n,addModule:e})=>{n(({zoom:t,toolbar:i,render:s,controller:a,...l})=>{const u=xw(t);return{zoom:u,toolbar:aw(i,_x,D.createElement(YL,null)),render:{...s,slide:f=>{var d;return Ca(f.slide)?D.createElement(QL,{render:s,...f}):(d=s.slide)===null||d===void 0?void 0:d.call(s,f)}},controller:{...a,preventDefaultWheelY:u.scrollToZoom},...l}}),e(sr(_x,WL))},eI={auto:!1,ref:null},Ew=n=>({...eI,...n}),Mw=D.createContext(null),tI=Ur("useFullscreen","FullscreenContext",Mw);function nI({fullscreen:n,on:e,children:t}){const{auto:i,ref:s}=Ew(n),a=D.useRef(null),[l,u]=D.useState(),[f,d]=D.useState(!1),p=D.useRef(!1),{getOwnerDocument:m}=Xl();ji(()=>{var w,b,N,L;const I=m();u(!((L=(N=(b=(w=I.fullscreenEnabled)!==null&&w!==void 0?w:I.webkitFullscreenEnabled)!==null&&b!==void 0?b:I.mozFullScreenEnabled)!==null&&N!==void 0?N:I.msFullscreenEnabled)!==null&&L!==void 0&&L))},[m]);const g=D.useCallback(()=>{var w;const b=m(),N=b.fullscreenElement||b.webkitFullscreenElement||b.mozFullScreenElement||b.msFullscreenElement;return((w=N==null?void 0:N.shadowRoot)===null||w===void 0?void 0:w.fullscreenElement)||N},[m]),y=D.useCallback(()=>{const w=a.current;try{w.requestFullscreen?w.requestFullscreen().catch(()=>{}):w.webkitRequestFullscreen?w.webkitRequestFullscreen():w.mozRequestFullScreen?w.mozRequestFullScreen():w.msRequestFullscreen&&w.msRequestFullscreen()}catch{}},[]),E=D.useCallback(()=>{if(!g())return;const w=m();try{w.exitFullscreen?w.exitFullscreen().catch(()=>{}):w.webkitExitFullscreen?w.webkitExitFullscreen():w.mozCancelFullScreen?w.mozCancelFullScreen():w.msExitFullscreen&&w.msExitFullscreen()}catch{}},[g,m]);D.useEffect(()=>{const w=m(),b=()=>{d(g()===a.current)};return Af(...["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"].map(N=>(w.addEventListener(N,b),()=>w.removeEventListener(N,b))))},[g,m]);const M=Lt(()=>{var w;return(w=e.enterFullscreen)===null||w===void 0?void 0:w.call(e)}),S=Lt(()=>{var w;return(w=e.exitFullscreen)===null||w===void 0?void 0:w.call(e)});D.useEffect(()=>{f&&(p.current=!0),p.current&&(f?M:S)()},[f,M,S]);const _=Lt(()=>{var w;return(w=i?y:null)===null||w===void 0||w(),E});D.useEffect(_,[_]);const T=D.useMemo(()=>({fullscreen:f,disabled:l,enter:y,exit:E}),[f,l,y,E]);return D.useImperativeHandle(s,()=>T,[T]),D.createElement("div",{ref:a,className:bi(_t(sm),_t($M))},D.createElement(Mw.Provider,{value:T},t))}const iI=Or("EnterFullscreen",D.createElement("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"})),rI=Or("ExitFullscreen",D.createElement("path",{d:"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"}));function sI(){var n;const{fullscreen:e,disabled:t,enter:i,exit:s}=tI(),{render:a}=di();return t?null:a.buttonFullscreen?D.createElement(D.Fragment,null,(n=a.buttonFullscreen)===null||n===void 0?void 0:n.call(a,{fullscreen:e,disabled:t,enter:i,exit:s})):D.createElement(Df,{disabled:t,label:e?"Exit Fullscreen":"Enter Fullscreen",icon:e?rI:iI,renderIcon:e?a.iconExitFullscreen:a.iconEnterFullscreen,onClick:e?s:i})}function oI({augment:n,contains:e,addParent:t}){n(({fullscreen:i,toolbar:s,...a})=>({toolbar:aw(s,sm,D.createElement(sI,null)),fullscreen:Ew(i),...a})),t(e(yx)?yx:bf,sr(sm,nI))}const aI={separator:"/",container:{}},ww=n=>({...aI,...n});function lI({counter:n}){const{slides:e,currentIndex:t}=Fr(),{separator:i,container:{className:s,...a},className:l,...u}=ww(n);return e.length===0?null:D.createElement("div",{className:bi(_t("counter"),s||l),...u,...a},t+1," ",i," ",e.length)}function cI({augment:n,addChild:e}){n(({counter:t,...i})=>({counter:ww(t),...i})),e(bf,sr(PD,lI))}const uI=kt.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.35rem;
  padding: 1.35rem;
  max-width: 1200px;
  margin: 0 auto;
`,Tw=kt.div`
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  cursor: pointer;
  box-shadow: 0 3.6px 13.5px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  aspect-ratio: 1;
  width: 100%;
  max-width: 250px;
  margin: 0 auto;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2),
      inset 0 0 0 1px rgba(255, 255, 255, 0.3), 0 0 20px rgba(52, 152, 219, 0.2),
      inset 0 0 8px rgba(52, 152, 219, 0.1);
    animation: glowPulse 3s ease-in-out infinite;
  }

  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    background: linear-gradient(
      45deg,
      rgba(var(--primary-rgb), 0.2),
      rgba(var(--secondary-rgb), 0.2),
      rgba(var(--primary-rgb), 0.2)
    );
    border-radius: inherit;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`,fI=kt.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;
  transition: transform 0.3s ease;

  ${Tw}:hover & {
    transform: scale(1.04);
  }
`,dI=()=>(D.useEffect(()=>{const n=document.createElement("style");return n.innerHTML=`
      [data-yarl-portal] [data-yarl-slide] img,
      body [data-yarl-portal] [data-yarl-slide] img,
      html body [data-yarl-portal] [data-yarl-slide] img {
        width: auto !important;
        height: auto !important;
        max-width: 100% !important;
        max-height: 100% !important;
        object-fit: contain !important;
        border-radius: 0 !important;
        box-shadow: none !important;
        transform: none !important;
        transition: none !important;
        position: static !important;
        z-index: auto !important;
        border: none !important;
        cursor: default !important;
      }
      
      [data-yarl-portal] [data-yarl-slide] img:hover,
      body [data-yarl-portal] [data-yarl-slide] img:hover {
        transform: none !important;
        box-shadow: none !important;
      }
      
      [data-yarl-container] {
        z-index: 9999 !important;
      }
    `,document.head.appendChild(n),()=>{document.head.removeChild(n)}},[]),null),hI=()=>{const n=["p1.jpg","p12.jpg","p3.jpg","p4.jpg","p5.jpg","p6.jpg","p7.jpg","p8.jpg","p10.jpg","p11.jpg","p13.jpg","p14.jpg"],[e,t]=D.useState(-1),i=n.map(s=>({src:`photos/gallery/${s}`}));return G.jsxs("div",{className:"container",id:"gallery","data-aos":"fade-up",children:[G.jsx(dI,{}),G.jsx("h2",{children:"My Gallery"}),G.jsx(uI,{children:n.map((s,a)=>G.jsx(Tw,{onClick:()=>t(a),children:G.jsx(fI,{src:`photos/gallery/${s}`,alt:`Gallery image ${a+1}`,loading:"lazy"})},a))}),G.jsx(OL,{open:e>=0,index:e,close:()=>t(-1),slides:i,plugins:[JL,oI,cI],styles:{container:{backgroundColor:"rgba(0, 0, 0, 0.95)",zIndex:9999}},animation:{fade:300},zoom:{maxZoomPixelRatio:5,scrollToZoom:!0},render:{slide:({slide:s})=>G.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:G.jsx("img",{src:s.src,alt:"Gallery photo",style:{width:"auto",height:"auto",maxWidth:"100%",maxHeight:"90vh",objectFit:"contain",borderRadius:0,boxShadow:"none",border:"none"}})})}})]})},$h=[{title:"PGS",repoUrl:"https://github.com/Pp3ng/PGS",description:"A high-performance static HTTP server meticulously crafted in C++. Engineered with a focus on efficiency, it harnesses epoll-based event handling and a sophisticated thread pool architecture to achieve optimal throughput while maintaining robust resource management."},{title:"CinCout",repoUrl:"https://github.com/Pp3ng/CinCout",description:"An intuitive web-based development environment for C/C++ programming. Features real-time compilation, code execution, and integrated analysis tools. Designed to help developers write better code through immediate feedback on style and memory management."},{title:"Blitz_Logger",repoUrl:"https://github.com/Pp3ng/blitz_logger",description:"A high-performance, thread-safe logging library built for modern C++ applications. Implements lock-free architecture and zero-allocation design to minimize overhead while providing comprehensive logging capabilities without external dependencies."},{title:"Mandelbrot-Set",repoUrl:"https://github.com/Pp3ng/Mandelbrot-Set",description:"A comparative study of fractal generation implementing both CPU and GPU approaches. Leverages CUDA parallel processing to demonstrate significant performance improvements over traditional sequential computation while maintaining high precision in mathematical calculations."},{title:"PShell",repoUrl:"https://github.com/Pp3ng/Pshell",description:"A lightweight shell implementation focusing on essential command-line functionality. Features built-in commands, process management, and pipeline support while maintaining a clean, efficient interface for system interaction and task automation."},{title:"Tiny_Packer",repoUrl:"https://github.com/Pp3ng/TinyPacker",description:"An efficient compression utility optimized for small file operations. Implements a sliding window algorithm to achieve effective compression ratios while maintaining quick processing times, particularly suited for configuration files and small text documents."},{title:"Directory_Analyzer",repoUrl:"https://github.com/Pp3ng/Directory-Analyzer",description:"A comprehensive file system analysis tool providing detailed insights into directory structures. Generates statistical reports on file distributions, sizes, and types while offering an efficient interface for understanding complex file system hierarchies."},{title:"pdd",repoUrl:"https://github.com/Pp3ng/pdd",description:"A high-performance data duplication and transfer utility built as a modern alternative to Unix dd. Features real-time progress monitoring, direct I/O operations, and optimized buffer management. Implements advanced error handling and verification mechanisms while maintaining compatibility with traditional dd syntax."}],pI=kt.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin: 50px 0;
`,mI=kt.div`
  background: var(--glass-background);
  backdrop-filter: blur(8px) saturate(180%);
  -webkit-backdrop-filter: blur(8px) saturate(180%);
  border: var(--glass-border);
  border-radius: 6px;
  padding: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  outline: 1px solid rgba(255, 255, 255, 0.3);
  outline-offset: -3px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);

  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    background: linear-gradient(
      45deg,
      rgba(74, 144, 226, 0.2),
      rgba(66, 185, 131, 0.2),
      rgba(74, 144, 226, 0.2)
    );
    border-radius: inherit;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2),
      inset 0 0 0 1px rgba(255, 255, 255, 0.3), 0 0 20px rgba(52, 152, 219, 0.2),
      inset 0 0 8px rgba(52, 152, 219, 0.1);
  }

  &:hover::before {
    opacity: 1;
    transition: opacity 0.4s ease;
  }
`,gI=kt.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
`,vI=kt.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary-color);
  flex: 1;
`,yI=kt.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    color: var(--primary-color);
  }
`,_I=kt.p`
  color: var(--text-color);
  font-size: 0.9rem;
  margin: 8px 0;
  flex: 1;
`,xI=kt.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
  font-size: 0.8rem;
  color: var(--text-secondary);
`,SI=kt.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${n=>n.color||"#3178c6"};
  margin-right: 4px;
`,Yh=kt.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--text-secondary);

  svg {
    width: 14px;
    height: 14px;
  }
`,EI=()=>{const[n,e]=D.useState({}),[t,i]=D.useState(!0),s=D.useCallback(async l=>{try{const u=l.replace("https://github.com/",""),f=await fetch(`https://api.github.com/repos/${u}`);if(!f.ok)throw new Error(`HTTP error! status: ${f.status}`);return await f.json()}catch(u){return console.error("Error fetching repo data:",u),null}},[]);D.useEffect(()=>{(async()=>{i(!0);const u=$h.map(p=>s(p.repoUrl)),f=await Promise.all(u),d={};f.forEach((p,m)=>{p&&(d[$h[m].title]={stargazers_count:p.stargazers_count,forks_count:p.forks_count,language:p.language})}),e(d),i(!1)})()},[s]);const a=l=>({"C++":"#f34b7d",C:"#555555",TypeScript:"#3178c6"})[l]||"#3178c6";return G.jsxs("div",{className:"container",id:"projects","data-aos":"fade-up",children:[G.jsx("h2",{children:"My Projects"}),G.jsx(pI,{children:$h.map((l,u)=>{const f=n[l.title];return G.jsxs(mI,{children:[G.jsx(gI,{children:G.jsx(vI,{children:G.jsx(yI,{href:l.repoUrl,target:"_blank",rel:"noopener noreferrer",children:l.title})})}),G.jsx(_I,{children:l.description}),G.jsxs(xI,{children:[(f==null?void 0:f.language)&&G.jsxs(Yh,{children:[G.jsx(SI,{color:a(f.language)}),f.language]}),(f==null?void 0:f.stargazers_count)!==void 0&&G.jsxs(Yh,{children:[G.jsx("i",{className:"fas fa-star"}),f.stargazers_count]}),(f==null?void 0:f.forks_count)!==void 0&&G.jsxs(Yh,{children:[G.jsx("i",{className:"fas fa-code-fork"}),f.forks_count]})]})]},`project-${u}`)})})]})},bw=D.memo(({children:n,image:e,isActive:t})=>G.jsx("div",{className:`transition-all duration-300 ease-in-out overflow-hidden
        ${t?"max-h-[1000px] opacity-100 translate-y-0":"max-h-0 opacity-0 -translate-y-1"}
      `,children:G.jsxs("div",{className:"flex flex-col md:flex-row items-start gap-1 py-1 pl-2 relative",children:[G.jsx("div",{className:"flex-1 min-w-0",children:G.jsx("p",{className:"text-sm leading-relaxed text-[var(--text-color)]",children:n})}),e&&e.src&&G.jsx("div",{className:"md:ml-1",children:G.jsx("img",{src:e.src,alt:e.alt||"",className:"rounded-lg max-w-[220px] max-h-[220px] w-auto h-auto",style:{objectFit:"contain"}})})]})}));bw.displayName="InsightContent";const Aw=D.memo(({date:n})=>G.jsx("div",{className:"text-sm text-[var(--text-color)] opacity-70 mt-2",children:G.jsx("span",{children:n})}));Aw.displayName="InsightTimestamp";const Cw=D.memo(({title:n,contents:e,timestamp:t,variants:i})=>{const[s,a]=Un.useState(!1),l=D.useCallback(u=>{u.target.tagName==="A"||u.target.closest("a")||(a(f=>!f),s||setTimeout(()=>{const f=u.currentTarget,d=document.querySelector(".navbar"),p=(d==null?void 0:d.offsetHeight)||0,m=f.getBoundingClientRect().top+window.pageYOffset-(p+20);window.scrollTo({top:m,behavior:"smooth"})},100))},[s]);return G.jsxs(Qn.div,{variants:i,className:`card group backdrop-blur-[8px] backdrop-saturate-[180%]
          border border-[var(--glass-border)] border-l-4 
          ${s?"border-l-[6px] border-[var(--primary-color)]":"border-l-[var(--primary-color)]"} 
          shadow-[0_4px_12px_rgba(31,38,135,0.1)] hover:shadow-[0_8px_24px_rgba(31,38,135,0.15)]
          transition-all duration-300 ease-in-out cursor-pointer
          relative overflow-hidden z-10 my-6 rounded-[12px] p-2 ${s?"":"h-[90px]"}`,onClick:l,children:[G.jsx("div",{className:`absolute inset-0 bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 opacity-0 
          transition-opacity duration-300 ease-in-out z-[-1] ${s?"":"group-hover:opacity-100 group-hover:animate-gradient-shift"}`}),G.jsxs("div",{className:"card-body p-0 flex flex-col h-full",children:[G.jsx("h3",{className:`card-title text-[var(--primary-color)] transition-all duration-300 text-base mb-2
            ${!s&&"group-hover:translate-x-1"}`,children:n}),G.jsx("div",{className:`flex-1 ${s?"":"overflow-hidden"}`,children:e.map((u,f)=>G.jsx(bw,{image:u.image,isActive:s,children:u.text},`content-${f}`))}),G.jsx(Aw,{date:t})]})]})});Cw.displayName="InsightItem";const MI=()=>{const n={hidden:{opacity:0},visible:{opacity:1,transition:{when:"beforeChildren",staggerChildren:.2,delayChildren:.3}}},e={hidden:{x:-20,opacity:0},visible:{x:0,opacity:1,transition:{type:"spring",stiffness:70,damping:10}}},t=[{title:"Language Abstraction Levels: Performance vs Productivity",contents:[{text:G.jsx(G.Fragment,{children:"The distinction between low-level languages like C/C++ and higher-level alternatives presents a fundamental trade-off in software development. Low-level languages provide direct hardware access and memory management capabilities , enabling precise system control and optimal performance ."}),image:{src:"photos/hardwares.png",alt:"hardware"}},{text:G.jsx(G.Fragment,{children:"Higher-level languages abstract implementation details through features like automatic memory management and intuitive syntax constructs . While this abstraction can impact performance, it significantly accelerates development cycles and reduces potential errors . The choice between abstraction levels typically depends on specific project requirements - system programming and performance-critical applications benefit from low-level control, while rapid development often favors higher-level abstractions."}),image:{src:"photos/languages.png",alt:"Programming Languages"}},{text:G.jsx(G.Fragment,{children:"Understanding both paradigms provides comprehensive insight into the software development spectrum. This knowledge enables informed decisions about language selection based on project requirements , performance constraints , and development timelines . The ability to navigate different abstraction levels proves invaluable when optimizing critical systems or rapidly prototyping solutions ."}),image:{src:"photos/programmer.png",alt:"Coder"}}],timestamp:"Mon Mar 20 02:52:22 KST 2023"},{title:"Operating Systems: Linux and FreeBSD Deep Dive",contents:[{text:G.jsx(G.Fragment,{children:"Linux system programming reveals the sophisticated interface between hardware and software layers . The kernel's resource management capabilities provide a robust foundation for system operations, while system calls enable efficient hardware access. This architecture demonstrates the elegant abstraction of complex hardware interactions through a unified programming interface ."}),image:{src:"photos/linux.png",alt:"linux"}},{text:G.jsx(G.Fragment,{children:"FreeBSD's architecture emphasizes stability and performance optimization , particularly evident in server and embedded system deployments. Its coherent design philosophy manifests in the ports system and package management infrastructure . The implementation of ZFS provides advanced data management capabilities , while the kernel architecture facilitates efficient system resource utilization ."}),image:{src:"photos/FreeBSD.png",alt:"FreeBSD"}},{text:G.jsx(G.Fragment,{children:"Vim serves as an efficient interface for system-level development , offering precise text manipulation capabilities and extensive customization options . Its modal editing paradigm enables rapid code navigation and modification , particularly valuable in system programming contexts where efficiency is paramount."}),image:{src:"photos/vim.png",alt:"Vim Editor"}},{text:G.jsx(G.Fragment,{children:"The Command Line Interface provides direct system interaction capabilities , enabling efficient resource management and process control . Its scripting capabilities facilitate task automation and system administration . Advanced text processing tools enhance data manipulation capabilities , while the immediate feedback loop accelerates the development cycle."}),image:{src:"photos/Terminalicon2.png",alt:"Terminal"}},{text:G.jsx(G.Fragment,{children:"The open-source nature of these systems enables comprehensive analysis and modification of system components. This transparency facilitates deep understanding of system architecture and enables customization for specific use cases. The interaction between software abstractions and hardware implementations demonstrates the sophisticated design principles underlying modern operating systems."}),image:{src:"photos/open-source.png",alt:"Ubuntu"}}],timestamp:"Wed Aug 23 23:08:31 KST 2023"},{title:"Network Security: From Infrastructure to Implementation",contents:[{text:G.jsx(G.Fragment,{children:"Linux's network infrastructure provides comprehensive control over network interfaces , connections , and security protocols . The platform's extensive toolkit facilitates network management through sophisticated utilities including ifconfig , iptables , and Wireshark . These tools enable precise monitoring , analysis , and security implementation across network layers."}),image:{src:"photos/network.png",alt:"Linux Networking"}},{text:G.jsx(G.Fragment,{children:"Kali Linux's security framework incorporates advanced network analysis tools . Netdiscover facilitates network topology mapping and device enumeration , while nmap enables comprehensive port scanning and service detection . These capabilities form an essential foundation for security assessment and vulnerability analysis in network environments."}),image:{src:"photos/kali.png",alt:"Kali Linux Networking Tools"}},{text:G.jsx(G.Fragment,{children:"The iptables framework provides granular control over network traffic through its robust packet filtering mechanism . This system enables precise implementation of security policies through custom rule sets , facilitating comprehensive network access control and traffic management at the kernel level."}),image:{src:"photos/iptables.png",alt:"Iptables Firewall"}},{text:G.jsx(G.Fragment,{children:"Network security auditing tools like Bettercap enable sophisticated network analysis and vulnerability assessment . The platform's packet capture and analysis capabilities facilitate thorough security evaluations, emphasizing the critical importance of encryption protocols and secure communication channels in modern network architectures."}),image:{src:"photos/bettercap.png",alt:"Bettercap"}},{text:G.jsx(G.Fragment,{children:"SSH protocol implementation provides secure remote system administration capabilities. The transition to key-based authentication mechanisms enhances security through cryptographic verification , while maintaining operational efficiency . This approach exemplifies the balance between security requirements and administrative accessibility in network operations."}),image:{src:"photos/ssh.png",alt:"SSH Secure Shell"}}],timestamp:"Fri Sep 15 16:43:00 KST 2023"},{title:"Modern Database Systems: SQL, NoSQL and Beyond",contents:[{text:G.jsx(G.Fragment,{children:"The architectural distinctions between SQL and NoSQL database systems present fundamental trade-offs in data management strategies. SQL databases implement rigid schemas , facilitating data integrity and maintaining transactional consistency . NoSQL systems prioritize horizontal scalability and schema flexibility , particularly advantageous in high-volume environments and dynamic data structures ."}),image:{src:"photos/sqlVSnosql.png",alt:"SQL vs NoSQL"}},{text:G.jsx(G.Fragment,{children:"OLTP systems emphasize transaction processing efficiency , optimizing for high concurrency and minimal latency in operational contexts. Conversely, OLAP architectures prioritize analytical capabilities through columnar storage formats and complex query optimization . This fundamental distinction shapes both system design and implementation strategies across database ecosystems."}),image:{src:"photos/oltpVSolap.png",alt:"OLAP vs OLTP"}},{text:G.jsx(G.Fragment,{children:"Modern database paradigms increasingly embrace hybrid architectures that combine relational integrity with NoSQL flexibility . These systems leverage sophisticated indexing mechanisms and query optimization strategies to facilitate both transactional reliability and analytical performance within unified data platforms."}),image:{src:"photos/database.png",alt:"Database Paradigms"}}],timestamp:"Wed Jan 03 05:39:34 KST 2024"},{title:"High Performance Computing: CPU-GPU Synergy",contents:[{text:G.jsx(G.Fragment,{children:"CPU architecture focuses on low-latency sequential processing with sophisticated branch prediction and out-of-order execution capabilities. In contrast, GPU design emphasizes high-throughput parallel computation through thousands of simpler cores and specialized memory hierarchies , enabling massive data processing."}),image:{src:"photos/Cpu_Gpu_arch.png",alt:"CPU and GPU Architecture Comparison"}},{text:G.jsx(G.Fragment,{children:"CUDA framework provides a sophisticated parallel programming model that exposes GPU capabilities through abstract compute kernels . This architecture facilitates efficient data-parallel operations across domains like scientific computing , machine learning , and high-performance simulation through its optimized memory management."}),image:{src:"photos/CUDA.png",alt:"GPU Parallel Computing"}},{text:G.jsx(G.Fragment,{children:"The CPU architecture maintains primary control through its sophisticated instruction pipeline and branch prediction capabilities . Its design optimizes sequential processing and complex decision-making tasks , while providing efficient interrupt handling and system resource management ."}),image:{src:"photos/CGC.png",alt:"CPU and GPU Collaboration"}},{text:G.jsx(G.Fragment,{children:"Optimal heterogeneous computing requires understanding of both architectures' performance characteristics . This knowledge enables effective workload distribution between CPU and GPU, maximizing system efficiency through parallel execution of suitable tasks while maintaining sequential processing for control-intensive operations."}),image:{src:"photos/performance.png",alt:"Optimizing CPU and GPU Performance"}}],timestamp:"Wed Oct 16 19:58:26 CST 2024"},{title:"Web Servers: Tomcat and Nginx Ecosystem",contents:[{text:G.jsx(G.Fragment,{children:"Tomcat's architecture specializes in Java Servlet container implementation , providing robust support for dynamic content generation through Java Servlet and JSP processing . This architecture enables efficient server-side application logic execution within the Java ecosystem."}),image:{src:"photos/tomcat.png",alt:"Overview of Tomcat"}},{text:G.jsx(G.Fragment,{children:"Nginx's event-driven architecture delivers exceptional static content serving capability and reverse proxy functionality . Its asynchronous processing model enables high concurrency handling with minimal resource requirements , making it ideal for high-traffic environments and microservice architectures."}),image:{src:"photos/nginx.png",alt:"Overview of Nginx"}},{text:G.jsx(G.Fragment,{children:"The Tomcat-Nginx integration represents an optimal architecture for enterprise applications . Nginx provides efficient request routing , SSL termination , and static content caching , while Tomcat manages dynamic content generation and application logic execution . This separation of concerns enhances both performance and maintainability ."}),image:{src:"photos/web-server.png",alt:"Integration of Tomcat and Nginx"}}],timestamp:"Fri Oct 25 00:26:33 KST 2024"},{title:"Hardware Spotlight: HHKB Professional",contents:[{text:G.jsx(G.Fragment,{children:"Received the HHKB Professional HYBRID Type-S as a birthday gift, marking a significant upgrade in my typing experience. The keyboard's Topre switches provide exceptional tactile feedback and reduced actuation force , offering substantial relief from the finger fatigue and hand strain commonly associated with traditional mechanical keyboards. This ergonomic improvement is particularly valuable for intensive coding sessions and extended typing periods ."}),image:{src:"photos/hhkb_logo.png",alt:"HHKB Logo"}},{text:G.jsx(G.Fragment,{children:"The electrostatic capacitive switches demonstrate their superiority through smoother keystrokes and consistent actuation across the entire keyboard. The minimalist 60% layout emphasizes efficiency by reducing hand movement through thoughtful key placement and function layer design . This compact form factor also improves desk ergonomics by allowing for more natural mouse positioning."}),image:{src:"photos/hhkb.png",alt:"HHKB Keyboard"}}],timestamp:"Wed Nov 6 19:03:21 KST 2024"},{title:"MacOS: The Perfect Blend of GUI and UNIX Power",contents:[{text:G.jsx(G.Fragment,{children:"macOS's architecture represents a sophisticated blend of user-friendly interface design and robust UNIX underpinnings . This combination provides an ideal development environment with access to both powerful command-line tools and polished productivity applications . The system's Darwin foundation ensures compatibility with UNIX utilities while maintaining a distinctive visual identity ."}),image:{src:"photos/Macos.png",alt:"macOS"}},{text:G.jsx(G.Fragment,{children:"The hardware integration in Apple's ecosystem provides exceptional stability and performance optimization . When paired with quality peripherals like the HHKB keyboard, the system delivers a superior development experience through reliable hardware interaction and predictable performance characteristics . This consistency is particularly valuable for professional software development and system administration tasks ."}),image:{src:"photos/mac_with_hhkb.jpg",alt:"MacBook with HHKB"}},{text:G.jsx(G.Fragment,{children:"macOS's development tools provide a comprehensive ecosystem for software engineering . The native terminal application offers seamless integration with development workflows, while scripting capabilities enhance automation options . Combined with its intuitive interface and robust security model , macOS represents an ideal platform for professional software development."}),image:{src:null,alt:null}}],timestamp:"Fri Jan 10 20:15:00 CST 2025"}];return G.jsxs(Qn.div,{className:"container mx-auto px-4 py-6 mt-[30px]",id:"insights",variants:n,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:[G.jsx("h2",{children:" Technical Insights "}),t.map((i,s)=>G.jsx(Cw,{title:i.title,contents:i.contents.map(a=>({text:a.text,image:a.image||{src:null,alt:null}})),timestamp:i.timestamp,variants:e},`insight-${s}`))]})},Rw=document.createElement("style");Rw.textContent=`
  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  .animate-gradient-shift {
    animation: gradient-shift 3s ease-in-out infinite;
    background-size: 200% 200%;
  }
`;document.head.appendChild(Rw);const wI=[{title:"Advanced Programming in UNIX Environment",cover:"BookCovers/APUE.jpg",pdfFilename:"Advanced Programming in the UNIX Environment 3rd Edition.pdf"},{title:"TCP/IP Illustrated Volume1",cover:"BookCovers/TCPV1.jpg",pdfFilename:"TCP-IP-Illustrated-Volume-1-The-Protocols.pdf"},{title:"TCP/IP Illustrated Volume2",cover:"BookCovers/TCPV2.jpg",pdfFilename:"TCP-IP-Illustrated-Volume-2-The-Implementation.pdf"},{title:"UNIX Network Programming Volume1",cover:"BookCovers/UNPV1.jpg",pdfFilename:"UNIX Network Programming V1.pdf"},{title:"The Art of UNIX Programming",cover:"BookCovers/ART.png",pdfFilename:"The Art of Unix Programming.pdf"},{title:"The C++ Programming Language",cover:"BookCovers/C++.jpg",pdfFilename:"The C++ Programming Language-4th.pdf"},{title:"Linux Command Line And Shell Scripting Bible",cover:"BookCovers/CLIBIBLE.jpg",pdfFilename:"Linux Command Line And Shell Scripting Bible.pdf"},{title:"Learning the vi and vim Editors",cover:"BookCovers/LTVAVE.jpg",pdfFilename:"Learning the vi and Vim Editors 8th Edition-2021.pdf"},{title:"The Linux Programming Interface",cover:"BookCovers/TLPI.png",pdfFilename:"The Linux Programming Interface-2010.pdf"},{title:"Computer Systems A Programmer's Perspective",cover:"BookCovers/CSAPP.jpg",pdfFilename:"Computer Systems A Programmer's Perspective.pdf"},{title:"Introduction To Algorithms",cover:"BookCovers/ITA.jpg",pdfFilename:"Introduction to Algorithms 4th.pdf"},{title:"Computer Organization and Design",cover:"BookCovers/COAD.jpg",pdfFilename:"Computer Organization and Design 5E.pdf"},{title:"Operating System Three Easy Pieces",cover:"BookCovers/OSTEP.png",pdfFilename:"Operating System Three Easy Pieces.pdf"},{title:"Computer Networking-A Top Down Approach",cover:"BookCovers/NW.jpg",pdfFilename:"Computer Networking-A Top Down Approach-7th.pdf"},{title:"System Performance",cover:"BookCovers/SP.jpg",pdfFilename:"Systems Performance-Enterprise And The Cloud.pdf"},{title:"Database System Concepts",cover:"BookCovers/DSC.jpg",pdfFilename:"Database System Concepts-7th.pdf"},{title:"Compilers Principles Techniques and Tools",cover:"BookCovers/COMPILER.jpg",pdfFilename:"Compilers Principles Techniques and Tools.pdf"},{title:"Programming Massively Parallel Processors",cover:"BookCovers/CUDA.jpg",pdfFilename:"Programming Massively Parallel Processors.pdf"},{title:"How Linux Works",cover:"BookCovers/HLW.jpg",pdfFilename:"How Linux Works.pdf"},{title:"Absolute FreeBSD",cover:"BookCovers/AF.jpg",pdfFilename:"Absolute FreeBSD 3rd Edition.pdf"}],Ux={username:"Pp3ng",repo:"My-bookshelf"},TI=()=>{const n=D.useMemo(()=>wI.map(e=>({...e,pdfUrl:`https://github.com/${Ux.username}/${Ux.repo}/raw/main/${e.pdfFilename}`})),[]);return G.jsxs("section",{id:"bookshelf",className:"container","data-aos":"fade-up",children:[G.jsx("h2",{children:"My Bookshelf"}),G.jsx("div",{className:"bookshelf-container",children:n.map((e,t)=>G.jsxs("div",{className:"book-item",children:[G.jsx("img",{className:"book-cover",src:e.cover,alt:`${e.title} cover`,loading:"lazy"}),G.jsx("h3",{className:"book-title",children:e.title}),G.jsx("a",{className:"book-link",href:e.pdfUrl,target:"_blank",rel:"noopener noreferrer",children:G.jsx("span",{children:"Download"})})]},`book-${t}`))})]})},bI=[{name:"instagram",url:"https://www.instagram.com/pp3ng___",icon:"fa-brands fa-instagram",tooltip:"Follow on Instagram",ariaLabel:"Instagram"},{name:"twitter",url:"https://x.com/Pp3ng_",icon:"fa-brands fa-x-twitter",tooltip:"Follow on X",ariaLabel:"Twitter"},{name:"github",url:"https://github.com/Pp3ng",icon:"fa-brands fa-github",tooltip:"Visit my GitHub",ariaLabel:"GitHub"},{name:"email",url:"mailto:pp3ng@outlook.com",icon:"fa-solid fa-envelope",tooltip:"Send me an email",ariaLabel:"Email"}],AI=bA`
  0% {
    box-shadow: 0 0 0 0 rgba(74, 144, 226, 0.4);
  }
  70% {
    box-shadow: 0 0 0 9px rgba(74, 144, 226, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(74, 144, 226, 0);
  }
`,CI=kt.div`
  &.container {
    &#Social-Accounts {
      &[data-aos="fade-up"] {
        /* AOS styles will be handled by AOS library */
      }
    }
  }
`,RI=kt.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text-color);
  font-size: 2rem;
  font-weight: 600;
`,PI=kt.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 2rem 0;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`,DI=kt.li`
  position: relative;
  transition: transform 0.3s ease;
`,LI=kt.div`
  position: relative;
  display: inline-block;

  &:hover span {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
  }
`,II=kt.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  background: var(--glass-background);
  border-radius: 50%;
  border: var(--glass-border);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  text-decoration: none;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      rgba(74, 144, 226, 0.3),
      rgba(66, 185, 131, 0.3)
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 50%;
  }

  &:hover {
    transform: translateY(-7.2px);
    box-shadow: 0 13.5px 27px rgba(31, 38, 135, 0.2);
    text-decoration: none;
    animation: ${AI} 1.5s infinite;
  }

  &:hover::before {
    opacity: 1;
  }

  i {
    font-size: 1.8rem;
    color: var(--text-color);
    transition: all 0.3s ease;
    z-index: 1;
  }

  &:hover i {
    color: var(--primary-color);
    transform: scale(1.1);
  }
`,NI=kt.span`
  position: absolute;
  bottom: -26px;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background: var(--glass-background);
  padding: 4px 8px;
  border-radius: 10px;
  font-size: 0.75rem;
  color: var(--text-color);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  white-space: nowrap;
  backdrop-filter: blur(8px);
  border: var(--glass-border);
  box-shadow: var(--box-shadow);
`,UI=()=>{const n=D.useMemo(()=>bI,[]);return G.jsxs(CI,{className:"container",id:"Social-Accounts","data-aos":"fade-up",children:[G.jsx(RI,{children:"Let's Connect"}),G.jsx(PI,{children:n.map(e=>G.jsx(DI,{children:G.jsxs(LI,{children:[G.jsx(II,{href:e.url,target:e.name!=="email"?"_blank":void 0,rel:e.name!=="email"?"noopener noreferrer":void 0,"aria-label":e.ariaLabel,children:G.jsx("i",{className:e.icon})}),G.jsx(NI,{children:e.tooltip})]})},e.name))})]})},FI=()=>G.jsx("footer",{className:"py-6 text-center mt-12 text-sm text-text",children:G.jsxs("p",{children:["© ",new Date().getFullYear()," PENN.L.ZHOU | Built with"," ",G.jsx("i",{className:"fas fa-coffee text-[var(--primary-color)] mx-[3px]"})," &"," ",G.jsx("i",{className:"fas fa-keyboard text-[var(--primary-color)] mx-[3px]"})]})}),Kg=kt.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: var(--card-bg);
  color: var(--text-color);
  border: var(--card-border);
  border-radius: 50%;
  cursor: pointer;
  opacity: ${n=>n.$isVisible?.9:0};
  visibility: ${n=>n.$isVisible?"visible":"hidden"};
  transform: translateY(${n=>n.$isVisible?0:"20px"});
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 1000;
  display: ${n=>n.$isVisible?"flex":"none"};
  align-items: center;
  justify-content: center;
  box-shadow: var(--box-shadow);
  overflow: hidden;

  &:hover {
    opacity: 1;
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(var(--text-rgb), 0.25);
  }
`,OI=kt.svg`
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;

  ${Kg}:hover & {
    transform: translateY(-3px);
  }
`,kI=kt.span`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: radial-gradient(
    circle,
    rgba(var(--text-rgb), 0.1) 0%,
    rgba(var(--text-rgb), 0) 70%
  );
  transform: scale(0);
  transition: transform 0.5s ease-out;
  border-radius: 50%;

  ${Kg}:hover & {
    transform: scale(2);
  }
`,BI=()=>{const[n,e]=D.useState(!1),t=D.useCallback(()=>{window.scrollY>300?e(!0):e(!1)},[]),i=D.useCallback(()=>{const a=window.pageYOffset,l=700;let u=null;const f=d=>{u||(u=d);const p=d-u,m=Math.min(p/l,1),g=y=>1-Math.pow(1-y,5);window.scrollTo({top:a*(1-g(m)),behavior:"auto"}),p<l&&window.requestAnimationFrame(f)};window.requestAnimationFrame(f)},[]),s=D.useMemo(()=>G.jsx(OI,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:G.jsx("polyline",{points:"18 15 12 9 6 15"})}),[]);return D.useEffect(()=>(window.addEventListener("scroll",t,{passive:!0}),()=>window.removeEventListener("scroll",t)),[t]),G.jsxs(Kg,{id:"back-to-top",$isVisible:n,onClick:i,onKeyDown:a=>a.key==="Enter"&&i(),"aria-label":"Back to top",tabIndex:n?0:-1,children:[s,G.jsx(kI,{})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zg="175",zI=0,Fx=1,VI=2,Pw=1,HI=2,Mr=3,Es=0,ti=1,Tr=2,ys=0,ca=1,um=2,Ox=3,kx=4,GI=5,Zs=100,WI=101,jI=102,XI=103,$I=104,YI=200,qI=201,KI=202,ZI=203,fm=204,dm=205,QI=206,JI=207,e3=208,t3=209,n3=210,i3=211,r3=212,s3=213,o3=214,hm=0,pm=1,mm=2,_a=3,gm=4,vm=5,ym=6,_m=7,Dw=0,a3=1,l3=2,_s=0,c3=1,u3=2,f3=3,d3=4,h3=5,p3=6,m3=7,Lw=300,xa=301,Sa=302,xm=303,Sm=304,If=306,Em=1e3,no=1001,Mm=1002,Wi=1003,g3=1004,hu=1005,tr=1006,qh=1007,io=1008,Lr=1009,Iw=1010,Nw=1011,Ul=1012,Qg=1013,uo=1014,br=1015,$l=1016,Jg=1017,ev=1018,Fl=1020,Uw=35902,Fw=1021,Ow=1022,Hi=1023,kw=1024,Bw=1025,Ol=1026,kl=1027,zw=1028,tv=1029,Vw=1030,nv=1031,iv=1033,qu=33776,Ku=33777,Zu=33778,Qu=33779,wm=35840,Tm=35841,bm=35842,Am=35843,Cm=36196,Rm=37492,Pm=37496,Dm=37808,Lm=37809,Im=37810,Nm=37811,Um=37812,Fm=37813,Om=37814,km=37815,Bm=37816,zm=37817,Vm=37818,Hm=37819,Gm=37820,Wm=37821,Ju=36492,jm=36494,Xm=36495,Hw=36283,$m=36284,Ym=36285,qm=36286,v3=3200,y3=3201,_3=0,x3=1,gs="",Mi="srgb",Ea="srgb-linear",hf="linear",Ft="srgb",zo=7680,Bx=519,S3=512,E3=513,M3=514,Gw=515,w3=516,T3=517,b3=518,A3=519,zx=35044,Vx="300 es",Ar=2e3,pf=2001;class Ra{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,l=s.length;a<l;a++)s[a].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kh=Math.PI/180,Km=180/Math.PI;function Yl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dn[n&255]+Dn[n>>8&255]+Dn[n>>16&255]+Dn[n>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[t&63|128]+Dn[t>>8&255]+"-"+Dn[t>>16&255]+Dn[t>>24&255]+Dn[i&255]+Dn[i>>8&255]+Dn[i>>16&255]+Dn[i>>24&255]).toLowerCase()}function Mt(n,e,t){return Math.max(e,Math.min(t,n))}function C3(n,e){return(n%e+e)%e}function Zh(n,e,t){return(1-t)*n+t*e}function dl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Kn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ut{constructor(e=0,t=0){Ut.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*i-l*s+e.x,this.y=a*s+l*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,t,i,s,a,l,u,f,d){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,l,u,f,d)}set(e,t,i,s,a,l,u,f,d){const p=this.elements;return p[0]=e,p[1]=s,p[2]=u,p[3]=t,p[4]=a,p[5]=f,p[6]=i,p[7]=l,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,l=i[0],u=i[3],f=i[6],d=i[1],p=i[4],m=i[7],g=i[2],y=i[5],E=i[8],M=s[0],S=s[3],_=s[6],T=s[1],w=s[4],b=s[7],N=s[2],L=s[5],I=s[8];return a[0]=l*M+u*T+f*N,a[3]=l*S+u*w+f*L,a[6]=l*_+u*b+f*I,a[1]=d*M+p*T+m*N,a[4]=d*S+p*w+m*L,a[7]=d*_+p*b+m*I,a[2]=g*M+y*T+E*N,a[5]=g*S+y*w+E*L,a[8]=g*_+y*b+E*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],l=e[4],u=e[5],f=e[6],d=e[7],p=e[8];return t*l*p-t*u*d-i*a*p+i*u*f+s*a*d-s*l*f}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],l=e[4],u=e[5],f=e[6],d=e[7],p=e[8],m=p*l-u*d,g=u*f-p*a,y=d*a-l*f,E=t*m+i*g+s*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=m*M,e[1]=(s*d-p*i)*M,e[2]=(u*i-s*l)*M,e[3]=g*M,e[4]=(p*t-s*f)*M,e[5]=(s*a-u*t)*M,e[6]=y*M,e[7]=(i*f-d*t)*M,e[8]=(l*t-i*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,l,u){const f=Math.cos(a),d=Math.sin(a);return this.set(i*f,i*d,-i*(f*l+d*u)+l+e,-s*d,s*f,-s*(-d*l+f*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Qh.makeScale(e,t)),this}rotate(e){return this.premultiply(Qh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qh=new pt;function Ww(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function mf(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function R3(){const n=mf("canvas");return n.style.display="block",n}const Hx={};function ef(n){n in Hx||(Hx[n]=!0,console.warn(n))}function P3(n,e,t){return new Promise(function(i,s){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function D3(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function L3(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Gx=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wx=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function I3(){const n={enabled:!0,workingColorSpace:Ea,spaces:{},convert:function(s,a,l){return this.enabled===!1||a===l||!a||!l||(this.spaces[a].transfer===Ft&&(s.r=Rr(s.r),s.g=Rr(s.g),s.b=Rr(s.b)),this.spaces[a].primaries!==this.spaces[l].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Ft&&(s.r=ua(s.r),s.g=ua(s.g),s.b=ua(s.b))),s},fromWorkingColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},toWorkingColorSpace:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gs?hf:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,l){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ea]:{primaries:e,whitePoint:i,transfer:hf,toXYZ:Gx,fromXYZ:Wx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:e,whitePoint:i,transfer:Ft,toXYZ:Gx,fromXYZ:Wx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),n}const Dt=I3();function Rr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ua(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vo;class N3{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Vo===void 0&&(Vo=mf("canvas")),Vo.width=e.width,Vo.height=e.height;const s=Vo.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Vo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mf("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let l=0;l<a.length;l++)a[l]=Rr(a[l]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Rr(t[i]/255)*255):t[i]=Rr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let U3=0;class rv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:U3++}),this.uuid=Yl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let l=0,u=s.length;l<u;l++)s[l].isDataTexture?a.push(Jh(s[l].image)):a.push(Jh(s[l]))}else a=Jh(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function Jh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?N3.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let F3=0;class ni extends Ra{constructor(e=ni.DEFAULT_IMAGE,t=ni.DEFAULT_MAPPING,i=no,s=no,a=tr,l=io,u=Hi,f=Lr,d=ni.DEFAULT_ANISOTROPY,p=gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:F3++}),this.uuid=Yl(),this.name="",this.source=new rv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=l,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=f,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lw)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Em:e.x=e.x-Math.floor(e.x);break;case no:e.x=e.x<0?0:1;break;case Mm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Em:e.y=e.y-Math.floor(e.y);break;case no:e.y=e.y<0?0:1;break;case Mm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ni.DEFAULT_IMAGE=null;ni.DEFAULT_MAPPING=Lw;ni.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,t=0,i=0,s=1){nn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*s+l[12]*a,this.y=l[1]*t+l[5]*i+l[9]*s+l[13]*a,this.z=l[2]*t+l[6]*i+l[10]*s+l[14]*a,this.w=l[3]*t+l[7]*i+l[11]*s+l[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const f=e.elements,d=f[0],p=f[4],m=f[8],g=f[1],y=f[5],E=f[9],M=f[2],S=f[6],_=f[10];if(Math.abs(p-g)<.01&&Math.abs(m-M)<.01&&Math.abs(E-S)<.01){if(Math.abs(p+g)<.1&&Math.abs(m+M)<.1&&Math.abs(E+S)<.1&&Math.abs(d+y+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(d+1)/2,b=(y+1)/2,N=(_+1)/2,L=(p+g)/4,I=(m+M)/4,B=(E+S)/4;return w>b&&w>N?w<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(w),s=L/i,a=I/i):b>N?b<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(b),i=L/s,a=B/s):N<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(N),i=I/a,s=B/a),this.set(i,s,a,t),this}let T=Math.sqrt((S-E)*(S-E)+(m-M)*(m-M)+(g-p)*(g-p));return Math.abs(T)<.001&&(T=1),this.x=(S-E)/T,this.y=(m-M)/T,this.z=(g-p)/T,this.w=Math.acos((d+y+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class O3 extends Ra{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new ni(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const l=i.count;for(let u=0;u<l;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new rv(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fo extends O3{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class jw extends ni{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wi,this.minFilter=Wi,this.wrapR=no,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class k3 extends ni{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Wi,this.minFilter=Wi,this.wrapR=no,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ql{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,l,u){let f=i[s+0],d=i[s+1],p=i[s+2],m=i[s+3];const g=a[l+0],y=a[l+1],E=a[l+2],M=a[l+3];if(u===0){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=m;return}if(u===1){e[t+0]=g,e[t+1]=y,e[t+2]=E,e[t+3]=M;return}if(m!==M||f!==g||d!==y||p!==E){let S=1-u;const _=f*g+d*y+p*E+m*M,T=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const N=Math.sqrt(w),L=Math.atan2(N,_*T);S=Math.sin(S*L)/N,u=Math.sin(u*L)/N}const b=u*T;if(f=f*S+g*b,d=d*S+y*b,p=p*S+E*b,m=m*S+M*b,S===1-u){const N=1/Math.sqrt(f*f+d*d+p*p+m*m);f*=N,d*=N,p*=N,m*=N}}e[t]=f,e[t+1]=d,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,s,a,l){const u=i[s],f=i[s+1],d=i[s+2],p=i[s+3],m=a[l],g=a[l+1],y=a[l+2],E=a[l+3];return e[t]=u*E+p*m+f*y-d*g,e[t+1]=f*E+p*g+d*m-u*y,e[t+2]=d*E+p*y+u*g-f*m,e[t+3]=p*E-u*m-f*g-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,l=e._order,u=Math.cos,f=Math.sin,d=u(i/2),p=u(s/2),m=u(a/2),g=f(i/2),y=f(s/2),E=f(a/2);switch(l){case"XYZ":this._x=g*p*m+d*y*E,this._y=d*y*m-g*p*E,this._z=d*p*E+g*y*m,this._w=d*p*m-g*y*E;break;case"YXZ":this._x=g*p*m+d*y*E,this._y=d*y*m-g*p*E,this._z=d*p*E-g*y*m,this._w=d*p*m+g*y*E;break;case"ZXY":this._x=g*p*m-d*y*E,this._y=d*y*m+g*p*E,this._z=d*p*E+g*y*m,this._w=d*p*m-g*y*E;break;case"ZYX":this._x=g*p*m-d*y*E,this._y=d*y*m+g*p*E,this._z=d*p*E-g*y*m,this._w=d*p*m+g*y*E;break;case"YZX":this._x=g*p*m+d*y*E,this._y=d*y*m+g*p*E,this._z=d*p*E-g*y*m,this._w=d*p*m-g*y*E;break;case"XZY":this._x=g*p*m-d*y*E,this._y=d*y*m-g*p*E,this._z=d*p*E+g*y*m,this._w=d*p*m+g*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],l=t[1],u=t[5],f=t[9],d=t[2],p=t[6],m=t[10],g=i+u+m;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(p-f)*y,this._y=(a-d)*y,this._z=(l-s)*y}else if(i>u&&i>m){const y=2*Math.sqrt(1+i-u-m);this._w=(p-f)/y,this._x=.25*y,this._y=(s+l)/y,this._z=(a+d)/y}else if(u>m){const y=2*Math.sqrt(1+u-i-m);this._w=(a-d)/y,this._x=(s+l)/y,this._y=.25*y,this._z=(f+p)/y}else{const y=2*Math.sqrt(1+m-i-u);this._w=(l-s)/y,this._x=(a+d)/y,this._y=(f+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,l=e._w,u=t._x,f=t._y,d=t._z,p=t._w;return this._x=i*p+l*u+s*d-a*f,this._y=s*p+l*f+a*u-i*d,this._z=a*p+l*d+i*f-s*u,this._w=l*p-i*u-s*f-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,a=this._z,l=this._w;let u=l*e._w+i*e._x+s*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=l,this._x=i,this._y=s,this._z=a,this;const f=1-u*u;if(f<=Number.EPSILON){const y=1-t;return this._w=y*l+t*this._w,this._x=y*i+t*this._x,this._y=y*s+t*this._y,this._z=y*a+t*this._z,this.normalize(),this}const d=Math.sqrt(f),p=Math.atan2(d,u),m=Math.sin((1-t)*p)/d,g=Math.sin(t*p)/d;return this._w=l*m+this._w*g,this._x=i*m+this._x*g,this._y=s*m+this._y*g,this._z=a*m+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class fe{constructor(e=0,t=0,i=0){fe.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jx.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,l=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*l,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*l,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*l,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,l=e.y,u=e.z,f=e.w,d=2*(l*s-u*i),p=2*(u*t-a*s),m=2*(a*i-l*t);return this.x=t+f*d+l*m-u*p,this.y=i+f*p+u*d-a*m,this.z=s+f*m+a*p-l*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,l=t.x,u=t.y,f=t.z;return this.x=s*f-a*u,this.y=a*l-i*f,this.z=i*u-s*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ep.copy(this).projectOnVector(e),this.sub(ep)}reflect(e){return this.sub(ep.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ep=new fe,jx=new ql;class Kl{constructor(e=new fe(1/0,1/0,1/0),t=new fe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let l=0,u=a.count;l<u;l++)e.isMesh===!0?e.getVertexPosition(l,Ni):Ni.fromBufferAttribute(a,l),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pu.copy(i.boundingBox)),pu.applyMatrix4(e.matrixWorld),this.union(pu)}const s=e.children;for(let a=0,l=s.length;a<l;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hl),mu.subVectors(this.max,hl),Ho.subVectors(e.a,hl),Go.subVectors(e.b,hl),Wo.subVectors(e.c,hl),ls.subVectors(Go,Ho),cs.subVectors(Wo,Go),zs.subVectors(Ho,Wo);let t=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-zs.z,zs.y,ls.z,0,-ls.x,cs.z,0,-cs.x,zs.z,0,-zs.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-zs.y,zs.x,0];return!tp(t,Ho,Go,Wo,mu)||(t=[1,0,0,0,1,0,0,0,1],!tp(t,Ho,Go,Wo,mu))?!1:(gu.crossVectors(ls,cs),t=[gu.x,gu.y,gu.z],tp(t,Ho,Go,Wo,mu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yr=[new fe,new fe,new fe,new fe,new fe,new fe,new fe,new fe],Ni=new fe,pu=new Kl,Ho=new fe,Go=new fe,Wo=new fe,ls=new fe,cs=new fe,zs=new fe,hl=new fe,mu=new fe,gu=new fe,Vs=new fe;function tp(n,e,t,i,s){for(let a=0,l=n.length-3;a<=l;a+=3){Vs.fromArray(n,a);const u=s.x*Math.abs(Vs.x)+s.y*Math.abs(Vs.y)+s.z*Math.abs(Vs.z),f=e.dot(Vs),d=t.dot(Vs),p=i.dot(Vs);if(Math.max(-Math.max(f,d,p),Math.min(f,d,p))>u)return!1}return!0}const B3=new Kl,pl=new fe,np=new fe;class Nf{constructor(e=new fe,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):B3.setFromPoints(e).getCenter(i);let s=0;for(let a=0,l=e.length;a<l;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pl.subVectors(e,this.center);const t=pl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(pl,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(np.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pl.copy(e.center).add(np)),this.expandByPoint(pl.copy(e.center).sub(np))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _r=new fe,ip=new fe,vu=new fe,us=new fe,rp=new fe,yu=new fe,sp=new fe;class Xw{constructor(e=new fe,t=new fe(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_r)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_r.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_r.copy(this.origin).addScaledVector(this.direction,t),_r.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ip.copy(e).add(t).multiplyScalar(.5),vu.copy(t).sub(e).normalize(),us.copy(this.origin).sub(ip);const a=e.distanceTo(t)*.5,l=-this.direction.dot(vu),u=us.dot(this.direction),f=-us.dot(vu),d=us.lengthSq(),p=Math.abs(1-l*l);let m,g,y,E;if(p>0)if(m=l*f-u,g=l*u-f,E=a*p,m>=0)if(g>=-E)if(g<=E){const M=1/p;m*=M,g*=M,y=m*(m+l*g+2*u)+g*(l*m+g+2*f)+d}else g=a,m=Math.max(0,-(l*g+u)),y=-m*m+g*(g+2*f)+d;else g=-a,m=Math.max(0,-(l*g+u)),y=-m*m+g*(g+2*f)+d;else g<=-E?(m=Math.max(0,-(-l*a+u)),g=m>0?-a:Math.min(Math.max(-a,-f),a),y=-m*m+g*(g+2*f)+d):g<=E?(m=0,g=Math.min(Math.max(-a,-f),a),y=g*(g+2*f)+d):(m=Math.max(0,-(l*a+u)),g=m>0?a:Math.min(Math.max(-a,-f),a),y=-m*m+g*(g+2*f)+d);else g=l>0?-a:a,m=Math.max(0,-(l*g+u)),y=-m*m+g*(g+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(ip).addScaledVector(vu,g),y}intersectSphere(e,t){_r.subVectors(e.center,this.origin);const i=_r.dot(this.direction),s=_r.dot(_r)-i*i,a=e.radius*e.radius;if(s>a)return null;const l=Math.sqrt(a-s),u=i-l,f=i+l;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,l,u,f;const d=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,g=this.origin;return d>=0?(i=(e.min.x-g.x)*d,s=(e.max.x-g.x)*d):(i=(e.max.x-g.x)*d,s=(e.min.x-g.x)*d),p>=0?(a=(e.min.y-g.y)*p,l=(e.max.y-g.y)*p):(a=(e.max.y-g.y)*p,l=(e.min.y-g.y)*p),i>l||a>s||((a>i||isNaN(i))&&(i=a),(l<s||isNaN(s))&&(s=l),m>=0?(u=(e.min.z-g.z)*m,f=(e.max.z-g.z)*m):(u=(e.max.z-g.z)*m,f=(e.min.z-g.z)*m),i>f||u>s)||((u>i||i!==i)&&(i=u),(f<s||s!==s)&&(s=f),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,_r)!==null}intersectTriangle(e,t,i,s,a){rp.subVectors(t,e),yu.subVectors(i,e),sp.crossVectors(rp,yu);let l=this.direction.dot(sp),u;if(l>0){if(s)return null;u=1}else if(l<0)u=-1,l=-l;else return null;us.subVectors(this.origin,e);const f=u*this.direction.dot(yu.crossVectors(us,yu));if(f<0)return null;const d=u*this.direction.dot(rp.cross(us));if(d<0||f+d>l)return null;const p=-u*us.dot(sp);return p<0?null:this.at(p/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(e,t,i,s,a,l,u,f,d,p,m,g,y,E,M,S){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,l,u,f,d,p,m,g,y,E,M,S)}set(e,t,i,s,a,l,u,f,d,p,m,g,y,E,M,S){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=s,_[1]=a,_[5]=l,_[9]=u,_[13]=f,_[2]=d,_[6]=p,_[10]=m,_[14]=g,_[3]=y,_[7]=E,_[11]=M,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/jo.setFromMatrixColumn(e,0).length(),a=1/jo.setFromMatrixColumn(e,1).length(),l=1/jo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*l,t[9]=i[9]*l,t[10]=i[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,l=Math.cos(i),u=Math.sin(i),f=Math.cos(s),d=Math.sin(s),p=Math.cos(a),m=Math.sin(a);if(e.order==="XYZ"){const g=l*p,y=l*m,E=u*p,M=u*m;t[0]=f*p,t[4]=-f*m,t[8]=d,t[1]=y+E*d,t[5]=g-M*d,t[9]=-u*f,t[2]=M-g*d,t[6]=E+y*d,t[10]=l*f}else if(e.order==="YXZ"){const g=f*p,y=f*m,E=d*p,M=d*m;t[0]=g+M*u,t[4]=E*u-y,t[8]=l*d,t[1]=l*m,t[5]=l*p,t[9]=-u,t[2]=y*u-E,t[6]=M+g*u,t[10]=l*f}else if(e.order==="ZXY"){const g=f*p,y=f*m,E=d*p,M=d*m;t[0]=g-M*u,t[4]=-l*m,t[8]=E+y*u,t[1]=y+E*u,t[5]=l*p,t[9]=M-g*u,t[2]=-l*d,t[6]=u,t[10]=l*f}else if(e.order==="ZYX"){const g=l*p,y=l*m,E=u*p,M=u*m;t[0]=f*p,t[4]=E*d-y,t[8]=g*d+M,t[1]=f*m,t[5]=M*d+g,t[9]=y*d-E,t[2]=-d,t[6]=u*f,t[10]=l*f}else if(e.order==="YZX"){const g=l*f,y=l*d,E=u*f,M=u*d;t[0]=f*p,t[4]=M-g*m,t[8]=E*m+y,t[1]=m,t[5]=l*p,t[9]=-u*p,t[2]=-d*p,t[6]=y*m+E,t[10]=g-M*m}else if(e.order==="XZY"){const g=l*f,y=l*d,E=u*f,M=u*d;t[0]=f*p,t[4]=-m,t[8]=d*p,t[1]=g*m+M,t[5]=l*p,t[9]=y*m-E,t[2]=E*m-y,t[6]=u*p,t[10]=M*m+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(z3,e,V3)}lookAt(e,t,i){const s=this.elements;return li.subVectors(e,t),li.lengthSq()===0&&(li.z=1),li.normalize(),fs.crossVectors(i,li),fs.lengthSq()===0&&(Math.abs(i.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),fs.crossVectors(i,li)),fs.normalize(),_u.crossVectors(li,fs),s[0]=fs.x,s[4]=_u.x,s[8]=li.x,s[1]=fs.y,s[5]=_u.y,s[9]=li.y,s[2]=fs.z,s[6]=_u.z,s[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,l=i[0],u=i[4],f=i[8],d=i[12],p=i[1],m=i[5],g=i[9],y=i[13],E=i[2],M=i[6],S=i[10],_=i[14],T=i[3],w=i[7],b=i[11],N=i[15],L=s[0],I=s[4],B=s[8],P=s[12],C=s[1],k=s[5],X=s[9],j=s[13],W=s[2],Y=s[6],ee=s[10],J=s[14],H=s[3],ae=s[7],Z=s[11],O=s[15];return a[0]=l*L+u*C+f*W+d*H,a[4]=l*I+u*k+f*Y+d*ae,a[8]=l*B+u*X+f*ee+d*Z,a[12]=l*P+u*j+f*J+d*O,a[1]=p*L+m*C+g*W+y*H,a[5]=p*I+m*k+g*Y+y*ae,a[9]=p*B+m*X+g*ee+y*Z,a[13]=p*P+m*j+g*J+y*O,a[2]=E*L+M*C+S*W+_*H,a[6]=E*I+M*k+S*Y+_*ae,a[10]=E*B+M*X+S*ee+_*Z,a[14]=E*P+M*j+S*J+_*O,a[3]=T*L+w*C+b*W+N*H,a[7]=T*I+w*k+b*Y+N*ae,a[11]=T*B+w*X+b*ee+N*Z,a[15]=T*P+w*j+b*J+N*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],l=e[1],u=e[5],f=e[9],d=e[13],p=e[2],m=e[6],g=e[10],y=e[14],E=e[3],M=e[7],S=e[11],_=e[15];return E*(+a*f*m-s*d*m-a*u*g+i*d*g+s*u*y-i*f*y)+M*(+t*f*y-t*d*g+a*l*g-s*l*y+s*d*p-a*f*p)+S*(+t*d*m-t*u*y-a*l*m+i*l*y+a*u*p-i*d*p)+_*(-s*u*p-t*f*m+t*u*g+s*l*m-i*l*g+i*f*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],l=e[4],u=e[5],f=e[6],d=e[7],p=e[8],m=e[9],g=e[10],y=e[11],E=e[12],M=e[13],S=e[14],_=e[15],T=m*S*d-M*g*d+M*f*y-u*S*y-m*f*_+u*g*_,w=E*g*d-p*S*d-E*f*y+l*S*y+p*f*_-l*g*_,b=p*M*d-E*m*d+E*u*y-l*M*y-p*u*_+l*m*_,N=E*m*f-p*M*f-E*u*g+l*M*g+p*u*S-l*m*S,L=t*T+i*w+s*b+a*N;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return e[0]=T*I,e[1]=(M*g*a-m*S*a-M*s*y+i*S*y+m*s*_-i*g*_)*I,e[2]=(u*S*a-M*f*a+M*s*d-i*S*d-u*s*_+i*f*_)*I,e[3]=(m*f*a-u*g*a-m*s*d+i*g*d+u*s*y-i*f*y)*I,e[4]=w*I,e[5]=(p*S*a-E*g*a+E*s*y-t*S*y-p*s*_+t*g*_)*I,e[6]=(E*f*a-l*S*a-E*s*d+t*S*d+l*s*_-t*f*_)*I,e[7]=(l*g*a-p*f*a+p*s*d-t*g*d-l*s*y+t*f*y)*I,e[8]=b*I,e[9]=(E*m*a-p*M*a-E*i*y+t*M*y+p*i*_-t*m*_)*I,e[10]=(l*M*a-E*u*a+E*i*d-t*M*d-l*i*_+t*u*_)*I,e[11]=(p*u*a-l*m*a-p*i*d+t*m*d+l*i*y-t*u*y)*I,e[12]=N*I,e[13]=(p*M*s-E*m*s+E*i*g-t*M*g-p*i*S+t*m*S)*I,e[14]=(E*u*s-l*M*s-E*i*f+t*M*f+l*i*S-t*u*S)*I,e[15]=(l*m*s-p*u*s+p*i*f-t*m*f-l*i*g+t*u*g)*I,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,l=e.x,u=e.y,f=e.z,d=a*l,p=a*u;return this.set(d*l+i,d*u-s*f,d*f+s*u,0,d*u+s*f,p*u+i,p*f-s*l,0,d*f-s*u,p*f+s*l,a*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,l){return this.set(1,i,a,0,e,1,l,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,l=t._y,u=t._z,f=t._w,d=a+a,p=l+l,m=u+u,g=a*d,y=a*p,E=a*m,M=l*p,S=l*m,_=u*m,T=f*d,w=f*p,b=f*m,N=i.x,L=i.y,I=i.z;return s[0]=(1-(M+_))*N,s[1]=(y+b)*N,s[2]=(E-w)*N,s[3]=0,s[4]=(y-b)*L,s[5]=(1-(g+_))*L,s[6]=(S+T)*L,s[7]=0,s[8]=(E+w)*I,s[9]=(S-T)*I,s[10]=(1-(g+M))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let a=jo.set(s[0],s[1],s[2]).length();const l=jo.set(s[4],s[5],s[6]).length(),u=jo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Ui.copy(this);const d=1/a,p=1/l,m=1/u;return Ui.elements[0]*=d,Ui.elements[1]*=d,Ui.elements[2]*=d,Ui.elements[4]*=p,Ui.elements[5]*=p,Ui.elements[6]*=p,Ui.elements[8]*=m,Ui.elements[9]*=m,Ui.elements[10]*=m,t.setFromRotationMatrix(Ui),i.x=a,i.y=l,i.z=u,this}makePerspective(e,t,i,s,a,l,u=Ar){const f=this.elements,d=2*a/(t-e),p=2*a/(i-s),m=(t+e)/(t-e),g=(i+s)/(i-s);let y,E;if(u===Ar)y=-(l+a)/(l-a),E=-2*l*a/(l-a);else if(u===pf)y=-l/(l-a),E=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=d,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=p,f[9]=g,f[13]=0,f[2]=0,f[6]=0,f[10]=y,f[14]=E,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,s,a,l,u=Ar){const f=this.elements,d=1/(t-e),p=1/(i-s),m=1/(l-a),g=(t+e)*d,y=(i+s)*p;let E,M;if(u===Ar)E=(l+a)*m,M=-2*m;else if(u===pf)E=a*m,M=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-g,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-y,f[2]=0,f[6]=0,f[10]=M,f[14]=-E,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const jo=new fe,Ui=new rn,z3=new fe(0,0,0),V3=new fe(1,1,1),fs=new fe,_u=new fe,li=new fe,Xx=new rn,$x=new ql;class Ir{constructor(e=0,t=0,i=0,s=Ir.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],l=s[4],u=s[8],f=s[1],d=s[5],p=s[9],m=s[2],g=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,y),this._z=Math.atan2(-l,d)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-l,d));break;case"YZX":this._z=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Xx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xx,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $x.setFromEuler(this),this.setFromQuaternion($x,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ir.DEFAULT_ORDER="XYZ";class $w{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let H3=0;const Yx=new fe,Xo=new ql,xr=new rn,xu=new fe,ml=new fe,G3=new fe,W3=new ql,qx=new fe(1,0,0),Kx=new fe(0,1,0),Zx=new fe(0,0,1),Qx={type:"added"},j3={type:"removed"},$o={type:"childadded",child:null},op={type:"childremoved",child:null};class ii extends Ra{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H3++}),this.uuid=Yl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ii.DEFAULT_UP.clone();const e=new fe,t=new Ir,i=new ql,s=new fe(1,1,1);function a(){i.setFromEuler(t,!1)}function l(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rn},normalMatrix:{value:new pt}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=ii.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $w,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xo.setFromAxisAngle(e,t),this.quaternion.multiply(Xo),this}rotateOnWorldAxis(e,t){return Xo.setFromAxisAngle(e,t),this.quaternion.premultiply(Xo),this}rotateX(e){return this.rotateOnAxis(qx,e)}rotateY(e){return this.rotateOnAxis(Kx,e)}rotateZ(e){return this.rotateOnAxis(Zx,e)}translateOnAxis(e,t){return Yx.copy(e).applyQuaternion(this.quaternion),this.position.add(Yx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qx,e)}translateY(e){return this.translateOnAxis(Kx,e)}translateZ(e){return this.translateOnAxis(Zx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xu.copy(e):xu.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ml.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xr.lookAt(ml,xu,this.up):xr.lookAt(xu,ml,this.up),this.quaternion.setFromRotationMatrix(xr),s&&(xr.extractRotation(s.matrixWorld),Xo.setFromRotationMatrix(xr),this.quaternion.premultiply(Xo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qx),$o.child=e,this.dispatchEvent($o),$o.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(j3),op.child=e,this.dispatchEvent(op),op.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xr.multiply(e.parent.matrixWorld)),e.applyMatrix4(xr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qx),$o.child=e,this.dispatchEvent($o),$o.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const l=this.children[i].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ml,e,G3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ml,W3,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let d=0,p=f.length;d<p;d++){const m=f[d];a(e.shapes,m)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,d=this.material.length;f<d;f++)u.push(a(e.materials,this.material[f]));s.material=u}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];s.animations.push(a(e.animations,f))}}if(t){const u=l(e.geometries),f=l(e.materials),d=l(e.textures),p=l(e.images),m=l(e.shapes),g=l(e.skeletons),y=l(e.animations),E=l(e.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),p.length>0&&(i.images=p),m.length>0&&(i.shapes=m),g.length>0&&(i.skeletons=g),y.length>0&&(i.animations=y),E.length>0&&(i.nodes=E)}return i.object=s,i;function l(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}ii.DEFAULT_UP=new fe(0,1,0);ii.DEFAULT_MATRIX_AUTO_UPDATE=!0;ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fi=new fe,Sr=new fe,ap=new fe,Er=new fe,Yo=new fe,qo=new fe,Jx=new fe,lp=new fe,cp=new fe,up=new fe,fp=new nn,dp=new nn,hp=new nn;class zi{constructor(e=new fe,t=new fe,i=new fe){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Fi.subVectors(e,t),s.cross(Fi);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){Fi.subVectors(s,t),Sr.subVectors(i,t),ap.subVectors(e,t);const l=Fi.dot(Fi),u=Fi.dot(Sr),f=Fi.dot(ap),d=Sr.dot(Sr),p=Sr.dot(ap),m=l*d-u*u;if(m===0)return a.set(0,0,0),null;const g=1/m,y=(d*f-u*p)*g,E=(l*p-u*f)*g;return a.set(1-y-E,E,y)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Er)===null?!1:Er.x>=0&&Er.y>=0&&Er.x+Er.y<=1}static getInterpolation(e,t,i,s,a,l,u,f){return this.getBarycoord(e,t,i,s,Er)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,Er.x),f.addScaledVector(l,Er.y),f.addScaledVector(u,Er.z),f)}static getInterpolatedAttribute(e,t,i,s,a,l){return fp.setScalar(0),dp.setScalar(0),hp.setScalar(0),fp.fromBufferAttribute(e,t),dp.fromBufferAttribute(e,i),hp.fromBufferAttribute(e,s),l.setScalar(0),l.addScaledVector(fp,a.x),l.addScaledVector(dp,a.y),l.addScaledVector(hp,a.z),l}static isFrontFacing(e,t,i,s){return Fi.subVectors(i,t),Sr.subVectors(e,t),Fi.cross(Sr).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),Sr.subVectors(this.a,this.b),Fi.cross(Sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return zi.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let l,u;Yo.subVectors(s,i),qo.subVectors(a,i),lp.subVectors(e,i);const f=Yo.dot(lp),d=qo.dot(lp);if(f<=0&&d<=0)return t.copy(i);cp.subVectors(e,s);const p=Yo.dot(cp),m=qo.dot(cp);if(p>=0&&m<=p)return t.copy(s);const g=f*m-p*d;if(g<=0&&f>=0&&p<=0)return l=f/(f-p),t.copy(i).addScaledVector(Yo,l);up.subVectors(e,a);const y=Yo.dot(up),E=qo.dot(up);if(E>=0&&y<=E)return t.copy(a);const M=y*d-f*E;if(M<=0&&d>=0&&E<=0)return u=d/(d-E),t.copy(i).addScaledVector(qo,u);const S=p*E-y*m;if(S<=0&&m-p>=0&&y-E>=0)return Jx.subVectors(a,s),u=(m-p)/(m-p+(y-E)),t.copy(s).addScaledVector(Jx,u);const _=1/(S+M+g);return l=M*_,u=g*_,t.copy(i).addScaledVector(Yo,l).addScaledVector(qo,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yw={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},Su={h:0,s:0,l:0};function pp(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class wt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Dt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Dt.workingColorSpace){if(e=C3(e,1),t=Mt(t,0,1),i=Mt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,l=2*i-a;this.r=pp(l,a,e+1/3),this.g=pp(l,a,e),this.b=pp(l,a,e-1/3)}return Dt.toWorkingColorSpace(this,s),this}setStyle(e,t=Mi){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=s[1],u=s[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mi){const i=Yw[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}copyLinearToSRGB(e){return this.r=ua(e.r),this.g=ua(e.g),this.b=ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mi){return Dt.fromWorkingColorSpace(Ln.copy(this),e),Math.round(Mt(Ln.r*255,0,255))*65536+Math.round(Mt(Ln.g*255,0,255))*256+Math.round(Mt(Ln.b*255,0,255))}getHexString(e=Mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dt.workingColorSpace){Dt.fromWorkingColorSpace(Ln.copy(this),t);const i=Ln.r,s=Ln.g,a=Ln.b,l=Math.max(i,s,a),u=Math.min(i,s,a);let f,d;const p=(u+l)/2;if(u===l)f=0,d=0;else{const m=l-u;switch(d=p<=.5?m/(l+u):m/(2-l-u),l){case i:f=(s-a)/m+(s<a?6:0);break;case s:f=(a-i)/m+2;break;case a:f=(i-s)/m+4;break}f/=6}return e.h=f,e.s=d,e.l=p,e}getRGB(e,t=Dt.workingColorSpace){return Dt.fromWorkingColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=Mi){Dt.fromWorkingColorSpace(Ln.copy(this),e);const t=Ln.r,i=Ln.g,s=Ln.b;return e!==Mi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ds),this.setHSL(ds.h+e,ds.s+t,ds.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ds),e.getHSL(Su);const i=Zh(ds.h,Su.h,t),s=Zh(ds.s,Su.s,t),a=Zh(ds.l,Su.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new wt;wt.NAMES=Yw;let X3=0;class Zl extends Ra{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:X3++}),this.uuid=Yl(),this.name="",this.type="Material",this.blending=ca,this.side=Es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fm,this.blendDst=dm,this.blendEquation=Zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=_a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zo,this.stencilZFail=zo,this.stencilZPass=zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ca&&(i.blending=this.blending),this.side!==Es&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fm&&(i.blendSrc=this.blendSrc),this.blendDst!==dm&&(i.blendDst=this.blendDst),this.blendEquation!==Zs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_a&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bx&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}if(t){const a=s(e.textures),l=s(e.images);a.length>0&&(i.textures=a),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qw extends Zl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ir,this.combine=Dw,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new fe,Eu=new Ut;let $3=0;class fi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$3++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=zx,this.updateRanges=[],this.gpuType=br,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Eu.fromBufferAttribute(this,t),Eu.applyMatrix3(e),this.setXY(t,Eu.x,Eu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=dl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dl(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dl(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dl(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),i=Kn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),i=Kn(i,this.array),s=Kn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=Kn(t,this.array),i=Kn(i,this.array),s=Kn(s,this.array),a=Kn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zx&&(e.usage=this.usage),e}}class Kw extends fi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Zw extends fi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class co extends fi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Y3=0;const xi=new rn,mp=new ii,Ko=new fe,ci=new Kl,gl=new Kl,yn=new fe;class Br extends Ra{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y3++}),this.uuid=Yl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ww(e)?Zw:Kw)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new pt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,t,i){return xi.makeTranslation(e,t,i),this.applyMatrix4(xi),this}scale(e,t,i){return xi.makeScale(e,t,i),this.applyMatrix4(xi),this}lookAt(e){return mp.lookAt(e),mp.updateMatrix(),this.applyMatrix4(mp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ko).negate(),this.translate(Ko.x,Ko.y,Ko.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const l=e[s];i.push(l.x,l.y,l.z||0)}this.setAttribute("position",new co(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new fe(-1/0,-1/0,-1/0),new fe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];ci.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new fe,1/0);return}if(e){const i=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const u=t[a];gl.setFromBufferAttribute(u),this.morphTargetsRelative?(yn.addVectors(ci.min,gl.min),ci.expandByPoint(yn),yn.addVectors(ci.max,gl.max),ci.expandByPoint(yn)):(ci.expandByPoint(gl.min),ci.expandByPoint(gl.max))}ci.getCenter(i);let s=0;for(let a=0,l=e.count;a<l;a++)yn.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(yn));if(t)for(let a=0,l=t.length;a<l;a++){const u=t[a],f=this.morphTargetsRelative;for(let d=0,p=u.count;d<p;d++)yn.fromBufferAttribute(u,d),f&&(Ko.fromBufferAttribute(e,d),yn.add(Ko)),s=Math.max(s,i.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*i.count),4));const l=this.getAttribute("tangent"),u=[],f=[];for(let B=0;B<i.count;B++)u[B]=new fe,f[B]=new fe;const d=new fe,p=new fe,m=new fe,g=new Ut,y=new Ut,E=new Ut,M=new fe,S=new fe;function _(B,P,C){d.fromBufferAttribute(i,B),p.fromBufferAttribute(i,P),m.fromBufferAttribute(i,C),g.fromBufferAttribute(a,B),y.fromBufferAttribute(a,P),E.fromBufferAttribute(a,C),p.sub(d),m.sub(d),y.sub(g),E.sub(g);const k=1/(y.x*E.y-E.x*y.y);isFinite(k)&&(M.copy(p).multiplyScalar(E.y).addScaledVector(m,-y.y).multiplyScalar(k),S.copy(m).multiplyScalar(y.x).addScaledVector(p,-E.x).multiplyScalar(k),u[B].add(M),u[P].add(M),u[C].add(M),f[B].add(S),f[P].add(S),f[C].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let B=0,P=T.length;B<P;++B){const C=T[B],k=C.start,X=C.count;for(let j=k,W=k+X;j<W;j+=3)_(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const w=new fe,b=new fe,N=new fe,L=new fe;function I(B){N.fromBufferAttribute(s,B),L.copy(N);const P=u[B];w.copy(P),w.sub(N.multiplyScalar(N.dot(P))).normalize(),b.crossVectors(L,P);const k=b.dot(f[B])<0?-1:1;l.setXYZW(B,w.x,w.y,w.z,k)}for(let B=0,P=T.length;B<P;++B){const C=T[B],k=C.start,X=C.count;for(let j=k,W=k+X;j<W;j+=3)I(e.getX(j+0)),I(e.getX(j+1)),I(e.getX(j+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let g=0,y=i.count;g<y;g++)i.setXYZ(g,0,0,0);const s=new fe,a=new fe,l=new fe,u=new fe,f=new fe,d=new fe,p=new fe,m=new fe;if(e)for(let g=0,y=e.count;g<y;g+=3){const E=e.getX(g+0),M=e.getX(g+1),S=e.getX(g+2);s.fromBufferAttribute(t,E),a.fromBufferAttribute(t,M),l.fromBufferAttribute(t,S),p.subVectors(l,a),m.subVectors(s,a),p.cross(m),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,M),d.fromBufferAttribute(i,S),u.add(p),f.add(p),d.add(p),i.setXYZ(E,u.x,u.y,u.z),i.setXYZ(M,f.x,f.y,f.z),i.setXYZ(S,d.x,d.y,d.z)}else for(let g=0,y=t.count;g<y;g+=3)s.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),l.fromBufferAttribute(t,g+2),p.subVectors(l,a),m.subVectors(s,a),p.cross(m),i.setXYZ(g+0,p.x,p.y,p.z),i.setXYZ(g+1,p.x,p.y,p.z),i.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(u,f){const d=u.array,p=u.itemSize,m=u.normalized,g=new d.constructor(f.length*p);let y=0,E=0;for(let M=0,S=f.length;M<S;M++){u.isInterleavedBufferAttribute?y=f[M]*u.data.stride+u.offset:y=f[M]*p;for(let _=0;_<p;_++)g[E++]=d[y++]}return new fi(g,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Br,i=this.index.array,s=this.attributes;for(const u in s){const f=s[u],d=e(f,i);t.setAttribute(u,d)}const a=this.morphAttributes;for(const u in a){const f=[],d=a[u];for(let p=0,m=d.length;p<m;p++){const g=d[p],y=e(g,i);f.push(y)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,f=l.length;u<f;u++){const d=l[u];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const d=i[f];e.data.attributes[f]=d.toJSON(e.data)}const s={};let a=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],p=[];for(let m=0,g=d.length;m<g;m++){const y=d[m];p.push(y.toJSON(e.data))}p.length>0&&(s[f]=p,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const d in s){const p=s[d];this.setAttribute(d,p.clone(t))}const a=e.morphAttributes;for(const d in a){const p=[],m=a[d];for(let g=0,y=m.length;g<y;g++)p.push(m[g].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let d=0,p=l.length;d<p;d++){const m=l[d];this.addGroup(m.start,m.count,m.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const eS=new rn,Hs=new Xw,Mu=new Nf,tS=new fe,wu=new fe,Tu=new fe,bu=new fe,gp=new fe,Au=new fe,nS=new fe,Cu=new fe;class Cr extends ii{constructor(e=new Br,t=new qw){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,l=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(a&&u){Au.set(0,0,0);for(let f=0,d=a.length;f<d;f++){const p=u[f],m=a[f];p!==0&&(gp.fromBufferAttribute(m,e),l?Au.addScaledVector(gp,p):Au.addScaledVector(gp.sub(t),p))}t.add(Au)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Mu.copy(i.boundingSphere),Mu.applyMatrix4(a),Hs.copy(e.ray).recast(e.near),!(Mu.containsPoint(Hs.origin)===!1&&(Hs.intersectSphere(Mu,tS)===null||Hs.origin.distanceToSquared(tS)>(e.far-e.near)**2))&&(eS.copy(a).invert(),Hs.copy(e.ray).applyMatrix4(eS),!(i.boundingBox!==null&&Hs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Hs)))}_computeIntersections(e,t,i){let s;const a=this.geometry,l=this.material,u=a.index,f=a.attributes.position,d=a.attributes.uv,p=a.attributes.uv1,m=a.attributes.normal,g=a.groups,y=a.drawRange;if(u!==null)if(Array.isArray(l))for(let E=0,M=g.length;E<M;E++){const S=g[E],_=l[S.materialIndex],T=Math.max(S.start,y.start),w=Math.min(u.count,Math.min(S.start+S.count,y.start+y.count));for(let b=T,N=w;b<N;b+=3){const L=u.getX(b),I=u.getX(b+1),B=u.getX(b+2);s=Ru(this,_,e,i,d,p,m,L,I,B),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const E=Math.max(0,y.start),M=Math.min(u.count,y.start+y.count);for(let S=E,_=M;S<_;S+=3){const T=u.getX(S),w=u.getX(S+1),b=u.getX(S+2);s=Ru(this,l,e,i,d,p,m,T,w,b),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(l))for(let E=0,M=g.length;E<M;E++){const S=g[E],_=l[S.materialIndex],T=Math.max(S.start,y.start),w=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let b=T,N=w;b<N;b+=3){const L=b,I=b+1,B=b+2;s=Ru(this,_,e,i,d,p,m,L,I,B),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const E=Math.max(0,y.start),M=Math.min(f.count,y.start+y.count);for(let S=E,_=M;S<_;S+=3){const T=S,w=S+1,b=S+2;s=Ru(this,l,e,i,d,p,m,T,w,b),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function q3(n,e,t,i,s,a,l,u){let f;if(e.side===ti?f=i.intersectTriangle(l,a,s,!0,u):f=i.intersectTriangle(s,a,l,e.side===Es,u),f===null)return null;Cu.copy(u),Cu.applyMatrix4(n.matrixWorld);const d=t.ray.origin.distanceTo(Cu);return d<t.near||d>t.far?null:{distance:d,point:Cu.clone(),object:n}}function Ru(n,e,t,i,s,a,l,u,f,d){n.getVertexPosition(u,wu),n.getVertexPosition(f,Tu),n.getVertexPosition(d,bu);const p=q3(n,e,t,i,wu,Tu,bu,nS);if(p){const m=new fe;zi.getBarycoord(nS,wu,Tu,bu,m),s&&(p.uv=zi.getInterpolatedAttribute(s,u,f,d,m,new Ut)),a&&(p.uv1=zi.getInterpolatedAttribute(a,u,f,d,m,new Ut)),l&&(p.normal=zi.getInterpolatedAttribute(l,u,f,d,m,new fe),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const g={a:u,b:f,c:d,normal:new fe,materialIndex:0};zi.getNormal(wu,Tu,bu,g.normal),p.face=g,p.barycoord=m}return p}class Ql extends Br{constructor(e=1,t=1,i=1,s=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:l};const u=this;s=Math.floor(s),a=Math.floor(a),l=Math.floor(l);const f=[],d=[],p=[],m=[];let g=0,y=0;E("z","y","x",-1,-1,i,t,e,l,a,0),E("z","y","x",1,-1,i,t,-e,l,a,1),E("x","z","y",1,1,e,i,t,s,l,2),E("x","z","y",1,-1,e,i,-t,s,l,3),E("x","y","z",1,-1,e,t,i,s,a,4),E("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(f),this.setAttribute("position",new co(d,3)),this.setAttribute("normal",new co(p,3)),this.setAttribute("uv",new co(m,2));function E(M,S,_,T,w,b,N,L,I,B,P){const C=b/I,k=N/B,X=b/2,j=N/2,W=L/2,Y=I+1,ee=B+1;let J=0,H=0;const ae=new fe;for(let Z=0;Z<ee;Z++){const O=Z*k-j;for(let Q=0;Q<Y;Q++){const Me=Q*C-X;ae[M]=Me*T,ae[S]=O*w,ae[_]=W,d.push(ae.x,ae.y,ae.z),ae[M]=0,ae[S]=0,ae[_]=L>0?1:-1,p.push(ae.x,ae.y,ae.z),m.push(Q/I),m.push(1-Z/B),J+=1}}for(let Z=0;Z<B;Z++)for(let O=0;O<I;O++){const Q=g+O+Y*Z,Me=g+O+Y*(Z+1),te=g+(O+1)+Y*(Z+1),de=g+(O+1)+Y*Z;f.push(Q,Me,de),f.push(Me,te,de),H+=6}u.addGroup(y,H,P),y+=H,g+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ql(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ma(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Vn(n){const e={};for(let t=0;t<n.length;t++){const i=Ma(n[t]);for(const s in i)e[s]=i[s]}return e}function K3(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Qw(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const Z3={clone:Ma,merge:Vn};var Q3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,J3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nr extends Zl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Q3,this.fragmentShader=J3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ma(e.uniforms),this.uniformsGroups=K3(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?t.uniforms[s]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[s]={type:"m4",value:l.toArray()}:t.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Jw extends ii{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Ar}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hs=new fe,iS=new Ut,rS=new Ut;class wi extends Jw{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Km*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Km*2*Math.atan(Math.tan(Kh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hs.x,hs.y).multiplyScalar(-e/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hs.x,hs.y).multiplyScalar(-e/hs.z)}getViewSize(e,t){return this.getViewBounds(e,iS,rS),t.subVectors(rS,iS)}setViewOffset(e,t,i,s,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Kh*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const f=l.fullWidth,d=l.fullHeight;a+=l.offsetX*s/f,t-=l.offsetY*i/d,s*=l.width/f,i*=l.height/d}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zo=-90,Qo=1;class eN extends ii{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new wi(Zo,Qo,e,t);s.layers=this.layers,this.add(s);const a=new wi(Zo,Qo,e,t);a.layers=this.layers,this.add(a);const l=new wi(Zo,Qo,e,t);l.layers=this.layers,this.add(l);const u=new wi(Zo,Qo,e,t);u.layers=this.layers,this.add(u);const f=new wi(Zo,Qo,e,t);f.layers=this.layers,this.add(f);const d=new wi(Zo,Qo,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,l,u,f]=t;for(const d of t)this.remove(d);if(e===Ar)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===pf)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,l,u,f,d,p]=this.children,m=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,a),e.setRenderTarget(i,1,s),e.render(t,l),e.setRenderTarget(i,2,s),e.render(t,u),e.setRenderTarget(i,3,s),e.render(t,f),e.setRenderTarget(i,4,s),e.render(t,d),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),e.render(t,p),e.setRenderTarget(m,g,y),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class eT extends ni{constructor(e=[],t=xa,i,s,a,l,u,f,d,p){super(e,t,i,s,a,l,u,f,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tN extends fo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new eT(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tr}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ql(5,5,5),a=new Nr({name:"CubemapFromEquirect",uniforms:Ma(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ti,blending:ys});a.uniforms.tEquirect.value=t;const l=new Cr(s,a),u=t.minFilter;return t.minFilter===io&&(t.minFilter=tr),new eN(1,10,this).update(e,l),t.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,i,s);e.setRenderTarget(a)}}class Pu extends ii{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nN={type:"move"};class vp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new fe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new fe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new fe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new fe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,l=null;const u=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){l=!0;for(const M of e.hand.values()){const S=t.getJointPose(M,i),_=this._getHandJoint(d,M);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const p=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],g=p.position.distanceTo(m.position),y=.02,E=.005;d.inputState.pinching&&g>y+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=y-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(nN)))}return u!==null&&(u.visible=s!==null),f!==null&&(f.visible=a!==null),d!==null&&(d.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Pu;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class iN extends ii{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ir,this.environmentIntensity=1,this.environmentRotation=new Ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const yp=new fe,rN=new fe,sN=new pt;class $s{constructor(e=new fe(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=yp.subVectors(i,t).cross(rN.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(yp),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||sN.getNormalMatrix(e),s=this.coplanarPoint(yp).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gs=new Nf,Du=new fe;class tT{constructor(e=new $s,t=new $s,i=new $s,s=new $s,a=new $s,l=new $s){this.planes=[e,t,i,s,a,l]}set(e,t,i,s,a,l){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(s),u[4].copy(a),u[5].copy(l),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ar){const i=this.planes,s=e.elements,a=s[0],l=s[1],u=s[2],f=s[3],d=s[4],p=s[5],m=s[6],g=s[7],y=s[8],E=s[9],M=s[10],S=s[11],_=s[12],T=s[13],w=s[14],b=s[15];if(i[0].setComponents(f-a,g-d,S-y,b-_).normalize(),i[1].setComponents(f+a,g+d,S+y,b+_).normalize(),i[2].setComponents(f+l,g+p,S+E,b+T).normalize(),i[3].setComponents(f-l,g-p,S-E,b-T).normalize(),i[4].setComponents(f-u,g-m,S-M,b-w).normalize(),t===Ar)i[5].setComponents(f+u,g+m,S+M,b+w).normalize();else if(t===pf)i[5].setComponents(u,m,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gs)}intersectsSprite(e){return Gs.center.set(0,0,0),Gs.radius=.7071067811865476,Gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Du.x=s.normal.x>0?e.max.x:e.min.x,Du.y=s.normal.y>0?e.max.y:e.min.y,Du.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Du)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class oN extends Zl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sS=new rn,Zm=new Xw,Lu=new Nf,Iu=new fe;class aN extends ii{constructor(e=new Br,t=new oN){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Lu.copy(i.boundingSphere),Lu.applyMatrix4(s),Lu.radius+=a,e.ray.intersectsSphere(Lu)===!1)return;sS.copy(s).invert(),Zm.copy(e.ray).applyMatrix4(sS);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,d=i.index,m=i.attributes.position;if(d!==null){const g=Math.max(0,l.start),y=Math.min(d.count,l.start+l.count);for(let E=g,M=y;E<M;E++){const S=d.getX(E);Iu.fromBufferAttribute(m,S),oS(Iu,S,f,s,e,t,this)}}else{const g=Math.max(0,l.start),y=Math.min(m.count,l.start+l.count);for(let E=g,M=y;E<M;E++)Iu.fromBufferAttribute(m,E),oS(Iu,E,f,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function oS(n,e,t,i,s,a,l){const u=Zm.distanceSqToPoint(n);if(u<t){const f=new fe;Zm.closestPointToPoint(n,f),f.applyMatrix4(i);const d=s.ray.origin.distanceTo(f);if(d<s.near||d>s.far)return;a.push({distance:d,distanceToRay:Math.sqrt(u),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:l})}}class nT extends ni{constructor(e,t,i=uo,s,a,l,u=Wi,f=Wi,d,p=Ol){if(p!==Ol&&p!==kl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,a,l,u,f,p,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rv(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Uf extends Br{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,l=t/2,u=Math.floor(i),f=Math.floor(s),d=u+1,p=f+1,m=e/u,g=t/f,y=[],E=[],M=[],S=[];for(let _=0;_<p;_++){const T=_*g-l;for(let w=0;w<d;w++){const b=w*m-a;E.push(b,-T,0),M.push(0,0,1),S.push(w/u),S.push(1-_/f)}}for(let _=0;_<f;_++)for(let T=0;T<u;T++){const w=T+d*_,b=T+d*(_+1),N=T+1+d*(_+1),L=T+1+d*_;y.push(w,b,L),y.push(b,N,L)}this.setIndex(y),this.setAttribute("position",new co(E,3)),this.setAttribute("normal",new co(M,3)),this.setAttribute("uv",new co(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uf(e.width,e.height,e.widthSegments,e.heightSegments)}}class lN extends Zl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=v3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cN extends Zl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class uN extends Jw{constructor(e=-1,t=1,i=1,s=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,l=i+e,u=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,l=a+d*this.view.width,u-=p*this.view.offsetY,f=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,l,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class fN extends wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function aS(n,e,t,i){const s=dN(i);switch(t){case Fw:return n*e;case kw:return n*e;case Bw:return n*e*2;case zw:return n*e/s.components*s.byteLength;case tv:return n*e/s.components*s.byteLength;case Vw:return n*e*2/s.components*s.byteLength;case nv:return n*e*2/s.components*s.byteLength;case Ow:return n*e*3/s.components*s.byteLength;case Hi:return n*e*4/s.components*s.byteLength;case iv:return n*e*4/s.components*s.byteLength;case qu:case Ku:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zu:case Qu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Tm:case Am:return Math.max(n,16)*Math.max(e,8)/4;case wm:case bm:return Math.max(n,8)*Math.max(e,8)/2;case Cm:case Rm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Pm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Dm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Lm:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Im:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Nm:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Um:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Fm:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Om:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case km:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Bm:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case zm:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Vm:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Hm:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Gm:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Wm:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ju:case jm:case Xm:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Hw:case $m:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ym:case qm:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dN(n){switch(n){case Lr:case Iw:return{byteLength:1,components:1};case Ul:case Nw:case $l:return{byteLength:2,components:1};case Jg:case ev:return{byteLength:2,components:4};case uo:case Qg:case br:return{byteLength:4,components:1};case Uw:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zg);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function iT(){let n=null,e=!1,t=null,i=null;function s(a,l){t(a,l),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function hN(n){const e=new WeakMap;function t(u,f){const d=u.array,p=u.usage,m=d.byteLength,g=n.createBuffer();n.bindBuffer(f,g),n.bufferData(f,d,p),u.onUploadCallback();let y;if(d instanceof Float32Array)y=n.FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?y=n.HALF_FLOAT:y=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=n.SHORT;else if(d instanceof Uint32Array)y=n.UNSIGNED_INT;else if(d instanceof Int32Array)y=n.INT;else if(d instanceof Int8Array)y=n.BYTE;else if(d instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:m}}function i(u,f,d){const p=f.array,m=f.updateRanges;if(n.bindBuffer(d,u),m.length===0)n.bufferSubData(d,0,p);else{m.sort((y,E)=>y.start-E.start);let g=0;for(let y=1;y<m.length;y++){const E=m[g],M=m[y];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++g,m[g]=M)}m.length=g+1;for(let y=0,E=m.length;y<E;y++){const M=m[y];n.bufferSubData(d,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(n.deleteBuffer(f.buffer),e.delete(u))}function l(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const d=e.get(u);if(d===void 0)e.set(u,t(u,f));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,u,f),d.version=u.version}}return{get:s,remove:a,update:l}}var pN=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mN=`#ifdef USE_ALPHAHASH
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
#endif`,gN=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vN=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yN=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_N=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xN=`#ifdef USE_AOMAP
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
#endif`,SN=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,EN=`#ifdef USE_BATCHING
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
#endif`,MN=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wN=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TN=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bN=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AN=`#ifdef USE_IRIDESCENCE
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
#endif`,CN=`#ifdef USE_BUMPMAP
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
#endif`,RN=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,PN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LN=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IN=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NN=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,UN=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,FN=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ON=`#define PI 3.141592653589793
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
} // validated`,kN=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,BN=`vec3 transformedNormal = objectNormal;
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
#endif`,zN=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VN=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HN=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GN=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WN="gl_FragColor = linearToOutputTexel( gl_FragColor );",jN=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XN=`#ifdef USE_ENVMAP
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
#endif`,$N=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,YN=`#ifdef USE_ENVMAP
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
#endif`,qN=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KN=`#ifdef USE_ENVMAP
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
#endif`,ZN=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QN=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JN=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eU=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tU=`#ifdef USE_GRADIENTMAP
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
}`,nU=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iU=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rU=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sU=`uniform bool receiveShadow;
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
#endif`,oU=`#ifdef USE_ENVMAP
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
#endif`,aU=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lU=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cU=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uU=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fU=`PhysicalMaterial material;
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
#endif`,dU=`struct PhysicalMaterial {
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
}`,hU=`
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
#endif`,pU=`#if defined( RE_IndirectDiffuse )
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
#endif`,mU=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gU=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vU=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yU=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_U=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xU=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SU=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,EU=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,MU=`#if defined( USE_POINTS_UV )
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
#endif`,wU=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TU=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bU=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AU=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,CU=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RU=`#ifdef USE_MORPHTARGETS
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
#endif`,PU=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DU=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,LU=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,IU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UU=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FU=`#ifdef USE_NORMALMAP
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
#endif`,OU=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kU=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BU=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zU=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VU=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HU=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,GU=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WU=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jU=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XU=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$U=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YU=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qU=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KU=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZU=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,QU=`float getShadowMask() {
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
}`,JU=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eF=`#ifdef USE_SKINNING
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
#endif`,tF=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nF=`#ifdef USE_SKINNING
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
#endif`,iF=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rF=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sF=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oF=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aF=`#ifdef USE_TRANSMISSION
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
#endif`,lF=`#ifdef USE_TRANSMISSION
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
#endif`,cF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dF=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hF=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pF=`uniform sampler2D t2D;
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
}`,mF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gF=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yF=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_F=`#include <common>
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
}`,xF=`#if DEPTH_PACKING == 3200
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
}`,SF=`#define DISTANCE
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
}`,EF=`#define DISTANCE
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
}`,MF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wF=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TF=`uniform float scale;
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
}`,bF=`uniform vec3 diffuse;
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
}`,AF=`#include <common>
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
}`,CF=`uniform vec3 diffuse;
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
}`,RF=`#define LAMBERT
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
}`,PF=`#define LAMBERT
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
}`,DF=`#define MATCAP
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
}`,LF=`#define MATCAP
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
}`,IF=`#define NORMAL
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
}`,NF=`#define NORMAL
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
}`,UF=`#define PHONG
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
}`,FF=`#define PHONG
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
}`,OF=`#define STANDARD
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
}`,kF=`#define STANDARD
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
}`,BF=`#define TOON
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
}`,zF=`#define TOON
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
}`,VF=`uniform float size;
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
}`,HF=`uniform vec3 diffuse;
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
}`,GF=`#include <common>
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
}`,WF=`uniform vec3 color;
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
}`,jF=`uniform float rotation;
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
}`,XF=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:pN,alphahash_pars_fragment:mN,alphamap_fragment:gN,alphamap_pars_fragment:vN,alphatest_fragment:yN,alphatest_pars_fragment:_N,aomap_fragment:xN,aomap_pars_fragment:SN,batching_pars_vertex:EN,batching_vertex:MN,begin_vertex:wN,beginnormal_vertex:TN,bsdfs:bN,iridescence_fragment:AN,bumpmap_pars_fragment:CN,clipping_planes_fragment:RN,clipping_planes_pars_fragment:PN,clipping_planes_pars_vertex:DN,clipping_planes_vertex:LN,color_fragment:IN,color_pars_fragment:NN,color_pars_vertex:UN,color_vertex:FN,common:ON,cube_uv_reflection_fragment:kN,defaultnormal_vertex:BN,displacementmap_pars_vertex:zN,displacementmap_vertex:VN,emissivemap_fragment:HN,emissivemap_pars_fragment:GN,colorspace_fragment:WN,colorspace_pars_fragment:jN,envmap_fragment:XN,envmap_common_pars_fragment:$N,envmap_pars_fragment:YN,envmap_pars_vertex:qN,envmap_physical_pars_fragment:oU,envmap_vertex:KN,fog_vertex:ZN,fog_pars_vertex:QN,fog_fragment:JN,fog_pars_fragment:eU,gradientmap_pars_fragment:tU,lightmap_pars_fragment:nU,lights_lambert_fragment:iU,lights_lambert_pars_fragment:rU,lights_pars_begin:sU,lights_toon_fragment:aU,lights_toon_pars_fragment:lU,lights_phong_fragment:cU,lights_phong_pars_fragment:uU,lights_physical_fragment:fU,lights_physical_pars_fragment:dU,lights_fragment_begin:hU,lights_fragment_maps:pU,lights_fragment_end:mU,logdepthbuf_fragment:gU,logdepthbuf_pars_fragment:vU,logdepthbuf_pars_vertex:yU,logdepthbuf_vertex:_U,map_fragment:xU,map_pars_fragment:SU,map_particle_fragment:EU,map_particle_pars_fragment:MU,metalnessmap_fragment:wU,metalnessmap_pars_fragment:TU,morphinstance_vertex:bU,morphcolor_vertex:AU,morphnormal_vertex:CU,morphtarget_pars_vertex:RU,morphtarget_vertex:PU,normal_fragment_begin:DU,normal_fragment_maps:LU,normal_pars_fragment:IU,normal_pars_vertex:NU,normal_vertex:UU,normalmap_pars_fragment:FU,clearcoat_normal_fragment_begin:OU,clearcoat_normal_fragment_maps:kU,clearcoat_pars_fragment:BU,iridescence_pars_fragment:zU,opaque_fragment:VU,packing:HU,premultiplied_alpha_fragment:GU,project_vertex:WU,dithering_fragment:jU,dithering_pars_fragment:XU,roughnessmap_fragment:$U,roughnessmap_pars_fragment:YU,shadowmap_pars_fragment:qU,shadowmap_pars_vertex:KU,shadowmap_vertex:ZU,shadowmask_pars_fragment:QU,skinbase_vertex:JU,skinning_pars_vertex:eF,skinning_vertex:tF,skinnormal_vertex:nF,specularmap_fragment:iF,specularmap_pars_fragment:rF,tonemapping_fragment:sF,tonemapping_pars_fragment:oF,transmission_fragment:aF,transmission_pars_fragment:lF,uv_pars_fragment:cF,uv_pars_vertex:uF,uv_vertex:fF,worldpos_vertex:dF,background_vert:hF,background_frag:pF,backgroundCube_vert:mF,backgroundCube_frag:gF,cube_vert:vF,cube_frag:yF,depth_vert:_F,depth_frag:xF,distanceRGBA_vert:SF,distanceRGBA_frag:EF,equirect_vert:MF,equirect_frag:wF,linedashed_vert:TF,linedashed_frag:bF,meshbasic_vert:AF,meshbasic_frag:CF,meshlambert_vert:RF,meshlambert_frag:PF,meshmatcap_vert:DF,meshmatcap_frag:LF,meshnormal_vert:IF,meshnormal_frag:NF,meshphong_vert:UF,meshphong_frag:FF,meshphysical_vert:OF,meshphysical_frag:kF,meshtoon_vert:BF,meshtoon_frag:zF,points_vert:VF,points_frag:HF,shadow_vert:GF,shadow_frag:WF,sprite_vert:jF,sprite_frag:XF},Ie={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Ji={basic:{uniforms:Vn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Vn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new wt(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Vn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Vn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Vn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new wt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Vn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Vn([Ie.points,Ie.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Vn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Vn([Ie.common,Ie.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Vn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Vn([Ie.sprite,Ie.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Vn([Ie.common,Ie.displacementmap,{referencePosition:{value:new fe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Vn([Ie.lights,Ie.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Ji.physical={uniforms:Vn([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Nu={r:0,b:0,g:0},Ws=new Ir,$F=new rn;function YF(n,e,t,i,s,a,l){const u=new wt(0);let f=a===!0?0:1,d,p,m=null,g=0,y=null;function E(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?t:e).get(b)),b}function M(w){let b=!1;const N=E(w);N===null?_(u,f):N&&N.isColor&&(_(N,1),b=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,l):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,l),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(w,b){const N=E(b);N&&(N.isCubeTexture||N.mapping===If)?(p===void 0&&(p=new Cr(new Ql(1,1,1),new Nr({name:"BackgroundCubeMaterial",uniforms:Ma(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(L,I,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),Ws.copy(b.backgroundRotation),Ws.x*=-1,Ws.y*=-1,Ws.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ws.y*=-1,Ws.z*=-1),p.material.uniforms.envMap.value=N,p.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4($F.makeRotationFromEuler(Ws)),p.material.toneMapped=Dt.getTransfer(N.colorSpace)!==Ft,(m!==N||g!==N.version||y!==n.toneMapping)&&(p.material.needsUpdate=!0,m=N,g=N.version,y=n.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(d===void 0&&(d=new Cr(new Uf(2,2),new Nr({name:"BackgroundMaterial",uniforms:Ma(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:Es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=N,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.toneMapped=Dt.getTransfer(N.colorSpace)!==Ft,N.matrixAutoUpdate===!0&&N.updateMatrix(),d.material.uniforms.uvTransform.value.copy(N.matrix),(m!==N||g!==N.version||y!==n.toneMapping)&&(d.material.needsUpdate=!0,m=N,g=N.version,y=n.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null))}function _(w,b){w.getRGB(Nu,Qw(n)),i.buffers.color.setClear(Nu.r,Nu.g,Nu.b,b,l)}function T(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(w,b=1){u.set(w),f=b,_(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(w){f=w,_(u,f)},render:M,addToRenderList:S,dispose:T}}function qF(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=g(null);let a=s,l=!1;function u(C,k,X,j,W){let Y=!1;const ee=m(j,X,k);a!==ee&&(a=ee,d(a.object)),Y=y(C,j,X,W),Y&&E(C,j,X,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(Y||l)&&(l=!1,b(C,k,X,j),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function f(){return n.createVertexArray()}function d(C){return n.bindVertexArray(C)}function p(C){return n.deleteVertexArray(C)}function m(C,k,X){const j=X.wireframe===!0;let W=i[C.id];W===void 0&&(W={},i[C.id]=W);let Y=W[k.id];Y===void 0&&(Y={},W[k.id]=Y);let ee=Y[j];return ee===void 0&&(ee=g(f()),Y[j]=ee),ee}function g(C){const k=[],X=[],j=[];for(let W=0;W<t;W++)k[W]=0,X[W]=0,j[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:X,attributeDivisors:j,object:C,attributes:{},index:null}}function y(C,k,X,j){const W=a.attributes,Y=k.attributes;let ee=0;const J=X.getAttributes();for(const H in J)if(J[H].location>=0){const Z=W[H];let O=Y[H];if(O===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),Z===void 0||Z.attribute!==O||O&&Z.data!==O.data)return!0;ee++}return a.attributesNum!==ee||a.index!==j}function E(C,k,X,j){const W={},Y=k.attributes;let ee=0;const J=X.getAttributes();for(const H in J)if(J[H].location>=0){let Z=Y[H];Z===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(Z=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(Z=C.instanceColor));const O={};O.attribute=Z,Z&&Z.data&&(O.data=Z.data),W[H]=O,ee++}a.attributes=W,a.attributesNum=ee,a.index=j}function M(){const C=a.newAttributes;for(let k=0,X=C.length;k<X;k++)C[k]=0}function S(C){_(C,0)}function _(C,k){const X=a.newAttributes,j=a.enabledAttributes,W=a.attributeDivisors;X[C]=1,j[C]===0&&(n.enableVertexAttribArray(C),j[C]=1),W[C]!==k&&(n.vertexAttribDivisor(C,k),W[C]=k)}function T(){const C=a.newAttributes,k=a.enabledAttributes;for(let X=0,j=k.length;X<j;X++)k[X]!==C[X]&&(n.disableVertexAttribArray(X),k[X]=0)}function w(C,k,X,j,W,Y,ee){ee===!0?n.vertexAttribIPointer(C,k,X,W,Y):n.vertexAttribPointer(C,k,X,j,W,Y)}function b(C,k,X,j){M();const W=j.attributes,Y=X.getAttributes(),ee=k.defaultAttributeValues;for(const J in Y){const H=Y[J];if(H.location>=0){let ae=W[J];if(ae===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(ae=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(ae=C.instanceColor)),ae!==void 0){const Z=ae.normalized,O=ae.itemSize,Q=e.get(ae);if(Q===void 0)continue;const Me=Q.buffer,te=Q.type,de=Q.bytesPerElement,ve=te===n.INT||te===n.UNSIGNED_INT||ae.gpuType===Qg;if(ae.isInterleavedBufferAttribute){const pe=ae.data,xe=pe.stride,Ce=ae.offset;if(pe.isInstancedInterleavedBuffer){for(let Pe=0;Pe<H.locationSize;Pe++)_(H.location+Pe,pe.meshPerAttribute);C.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Pe=0;Pe<H.locationSize;Pe++)S(H.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let Pe=0;Pe<H.locationSize;Pe++)w(H.location+Pe,O/H.locationSize,te,Z,xe*de,(Ce+O/H.locationSize*Pe)*de,ve)}else{if(ae.isInstancedBufferAttribute){for(let pe=0;pe<H.locationSize;pe++)_(H.location+pe,ae.meshPerAttribute);C.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let pe=0;pe<H.locationSize;pe++)S(H.location+pe);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let pe=0;pe<H.locationSize;pe++)w(H.location+pe,O/H.locationSize,te,Z,O*de,O/H.locationSize*pe*de,ve)}}else if(ee!==void 0){const Z=ee[J];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(H.location,Z);break;case 3:n.vertexAttrib3fv(H.location,Z);break;case 4:n.vertexAttrib4fv(H.location,Z);break;default:n.vertexAttrib1fv(H.location,Z)}}}}T()}function N(){B();for(const C in i){const k=i[C];for(const X in k){const j=k[X];for(const W in j)p(j[W].object),delete j[W];delete k[X]}delete i[C]}}function L(C){if(i[C.id]===void 0)return;const k=i[C.id];for(const X in k){const j=k[X];for(const W in j)p(j[W].object),delete j[W];delete k[X]}delete i[C.id]}function I(C){for(const k in i){const X=i[k];if(X[C.id]===void 0)continue;const j=X[C.id];for(const W in j)p(j[W].object),delete j[W];delete X[C.id]}}function B(){P(),l=!0,a!==s&&(a=s,d(a.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:B,resetDefaultState:P,dispose:N,releaseStatesOfGeometry:L,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:S,disableUnusedAttributes:T}}function KF(n,e,t){let i;function s(d){i=d}function a(d,p){n.drawArrays(i,d,p),t.update(p,i,1)}function l(d,p,m){m!==0&&(n.drawArraysInstanced(i,d,p,m),t.update(p,i,m))}function u(d,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,p,0,m);let y=0;for(let E=0;E<m;E++)y+=p[E];t.update(y,i,1)}function f(d,p,m,g){if(m===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<d.length;E++)l(d[E],p[E],g[E]);else{y.multiDrawArraysInstancedWEBGL(i,d,0,p,0,g,0,m);let E=0;for(let M=0;M<m;M++)E+=p[M]*g[M];t.update(E,i,1)}}this.setMode=s,this.render=a,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function ZF(n,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(I){return!(I!==Hi&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(I){const B=I===$l&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Lr&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==br&&!B)}function f(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const p=f(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const m=t.logarithmicDepthBuffer===!0,g=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=E>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:l,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:m,reverseDepthBuffer:g,maxTextures:y,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:b,vertexTextures:N,maxSamples:L}}function QF(n){const e=this;let t=null,i=0,s=!1,a=!1;const l=new $s,u=new pt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const y=m.length!==0||g||i!==0||s;return s=g,i=m.length,y},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,g){t=p(m,g,0)},this.setState=function(m,g,y){const E=m.clippingPlanes,M=m.clipIntersection,S=m.clipShadows,_=n.get(m);if(!s||E===null||E.length===0||a&&!S)a?p(null):d();else{const T=a?0:i,w=T*4;let b=_.clippingState||null;f.value=b,b=p(E,g,w,y);for(let N=0;N!==w;++N)b[N]=t[N];_.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(m,g,y,E){const M=m!==null?m.length:0;let S=null;if(M!==0){if(S=f.value,E!==!0||S===null){const _=y+M*4,T=g.matrixWorldInverse;u.getNormalMatrix(T),(S===null||S.length<_)&&(S=new Float32Array(_));for(let w=0,b=y;w!==M;++w,b+=4)l.copy(m[w]).applyMatrix4(T,u),l.normal.toArray(S,b),S[b+3]=l.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,S}}function JF(n){let e=new WeakMap;function t(l,u){return u===xm?l.mapping=xa:u===Sm&&(l.mapping=Sa),l}function i(l){if(l&&l.isTexture){const u=l.mapping;if(u===xm||u===Sm)if(e.has(l)){const f=e.get(l).texture;return t(f,l.mapping)}else{const f=l.image;if(f&&f.height>0){const d=new tN(f.height);return d.fromEquirectangularTexture(n,l),e.set(l,d),l.addEventListener("dispose",s),t(d.texture,l.mapping)}else return null}}return l}function s(l){const u=l.target;u.removeEventListener("dispose",s);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const oa=4,lS=[.125,.215,.35,.446,.526,.582],Qs=20,_p=new uN,cS=new wt;let xp=null,Sp=0,Ep=0,Mp=!1;const Ys=(1+Math.sqrt(5))/2,Jo=1/Ys,uS=[new fe(-Ys,Jo,0),new fe(Ys,Jo,0),new fe(-Jo,0,Ys),new fe(Jo,0,Ys),new fe(0,Ys,-Jo),new fe(0,Ys,Jo),new fe(-1,1,-1),new fe(1,1,-1),new fe(-1,1,1),new fe(1,1,1)],eO=new fe;class fS{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,a={}){const{size:l=256,position:u=eO}=a;xp=this._renderer.getRenderTarget(),Sp=this._renderer.getActiveCubeFace(),Ep=this._renderer.getActiveMipmapLevel(),Mp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,i,s,f,u),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xp,Sp,Ep),this._renderer.xr.enabled=Mp,e.scissorTest=!1,Uu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xa||e.mapping===Sa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xp=this._renderer.getRenderTarget(),Sp=this._renderer.getActiveCubeFace(),Ep=this._renderer.getActiveMipmapLevel(),Mp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:tr,minFilter:tr,generateMipmaps:!1,type:$l,format:Hi,colorSpace:Ea,depthBuffer:!1},s=dS(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dS(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tO(a)),this._blurMaterial=nO(a,e,t)}return s}_compileMaterial(e){const t=new Cr(this._lodPlanes[0],e);this._renderer.compile(t,_p)}_sceneToCubeUV(e,t,i,s,a){const f=new wi(90,1,t,i),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,y=m.toneMapping;m.getClearColor(cS),m.toneMapping=_s,m.autoClear=!1;const E=new qw({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1}),M=new Cr(new Ql,E);let S=!1;const _=e.background;_?_.isColor&&(E.color.copy(_),e.background=null,S=!0):(E.color.copy(cS),S=!0);for(let T=0;T<6;T++){const w=T%3;w===0?(f.up.set(0,d[T],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x+p[T],a.y,a.z)):w===1?(f.up.set(0,0,d[T]),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y+p[T],a.z)):(f.up.set(0,d[T],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y,a.z+p[T]));const b=this._cubeSize;Uu(s,w*b,T>2?b:0,b,b),m.setRenderTarget(s),S&&m.render(M,f),m.render(e,f)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=y,m.autoClear=g,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===xa||e.mapping===Sa;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hS());const a=s?this._cubemapMaterial:this._equirectMaterial,l=new Cr(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const f=this._cubeSize;Uu(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(l,_p)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=uS[(s-a-1)%uS.length];this._blur(e,a-1,a,l,u)}t.autoClear=i}_blur(e,t,i,s,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,i,s,"latitudinal",a),this._halfBlur(l,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,l,u){const f=this._renderer,d=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new Cr(this._lodPlanes[s],d),g=d.uniforms,y=this._sizeLods[i]-1,E=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*Qs-1),M=a/E,S=isFinite(a)?1+Math.floor(p*M):Qs;S>Qs&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Qs}`);const _=[];let T=0;for(let I=0;I<Qs;++I){const B=I/M,P=Math.exp(-B*B/2);_.push(P),I===0?T+=P:I<S&&(T+=2*P)}for(let I=0;I<_.length;I++)_[I]=_[I]/T;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=_,g.latitudinal.value=l==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:w}=this;g.dTheta.value=E,g.mipInt.value=w-i;const b=this._sizeLods[s],N=3*b*(s>w-oa?s-w+oa:0),L=4*(this._cubeSize-b);Uu(t,N,L,3*b,2*b),f.setRenderTarget(t),f.render(m,_p)}}function tO(n){const e=[],t=[],i=[];let s=n;const a=n-oa+1+lS.length;for(let l=0;l<a;l++){const u=Math.pow(2,s);t.push(u);let f=1/u;l>n-oa?f=lS[l-n+oa-1]:l===0&&(f=0),i.push(f);const d=1/(u-2),p=-d,m=1+d,g=[p,p,m,p,m,m,p,p,m,m,p,m],y=6,E=6,M=3,S=2,_=1,T=new Float32Array(M*E*y),w=new Float32Array(S*E*y),b=new Float32Array(_*E*y);for(let L=0;L<y;L++){const I=L%3*2/3-1,B=L>2?0:-1,P=[I,B,0,I+2/3,B,0,I+2/3,B+1,0,I,B,0,I+2/3,B+1,0,I,B+1,0];T.set(P,M*E*L),w.set(g,S*E*L);const C=[L,L,L,L,L,L];b.set(C,_*E*L)}const N=new Br;N.setAttribute("position",new fi(T,M)),N.setAttribute("uv",new fi(w,S)),N.setAttribute("faceIndex",new fi(b,_)),e.push(N),s>oa&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function dS(n,e,t){const i=new fo(n,e,t);return i.texture.mapping=If,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Uu(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function nO(n,e,t){const i=new Float32Array(Qs),s=new fe(0,1,0);return new Nr({name:"SphericalGaussianBlur",defines:{n:Qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sv(),fragmentShader:`

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
		`,blending:ys,depthTest:!1,depthWrite:!1})}function hS(){return new Nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sv(),fragmentShader:`

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
		`,blending:ys,depthTest:!1,depthWrite:!1})}function pS(){return new Nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ys,depthTest:!1,depthWrite:!1})}function sv(){return`

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
	`}function iO(n){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const f=u.mapping,d=f===xm||f===Sm,p=f===xa||f===Sa;if(d||p){let m=e.get(u);const g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return t===null&&(t=new fS(n)),m=d?t.fromEquirectangular(u,m):t.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const y=u.image;return d&&y&&y.height>0||p&&y&&s(y)?(t===null&&(t=new fS(n)),m=d?t.fromEquirectangular(u):t.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",a),m.texture):null}}}return u}function s(u){let f=0;const d=6;for(let p=0;p<d;p++)u[p]!==void 0&&f++;return f===d}function a(u){const f=u.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:l}}function rO(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ef("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function sO(n,e,t,i){const s={},a=new WeakMap;function l(m){const g=m.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",l),delete s[g.id];const y=a.get(g);y&&(e.remove(y),a.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function u(m,g){return s[g.id]===!0||(g.addEventListener("dispose",l),s[g.id]=!0,t.memory.geometries++),g}function f(m){const g=m.attributes;for(const y in g)e.update(g[y],n.ARRAY_BUFFER)}function d(m){const g=[],y=m.index,E=m.attributes.position;let M=0;if(y!==null){const T=y.array;M=y.version;for(let w=0,b=T.length;w<b;w+=3){const N=T[w+0],L=T[w+1],I=T[w+2];g.push(N,L,L,I,I,N)}}else if(E!==void 0){const T=E.array;M=E.version;for(let w=0,b=T.length/3-1;w<b;w+=3){const N=w+0,L=w+1,I=w+2;g.push(N,L,L,I,I,N)}}else return;const S=new(Ww(g)?Zw:Kw)(g,1);S.version=M;const _=a.get(m);_&&e.remove(_),a.set(m,S)}function p(m){const g=a.get(m);if(g){const y=m.index;y!==null&&g.version<y.version&&d(m)}else d(m);return a.get(m)}return{get:u,update:f,getWireframeAttribute:p}}function oO(n,e,t){let i;function s(g){i=g}let a,l;function u(g){a=g.type,l=g.bytesPerElement}function f(g,y){n.drawElements(i,y,a,g*l),t.update(y,i,1)}function d(g,y,E){E!==0&&(n.drawElementsInstanced(i,y,a,g*l,E),t.update(y,i,E))}function p(g,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,y,0,a,g,0,E);let S=0;for(let _=0;_<E;_++)S+=y[_];t.update(S,i,1)}function m(g,y,E,M){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<g.length;_++)d(g[_]/l,y[_],M[_]);else{S.multiDrawElementsInstancedWEBGL(i,y,0,a,g,0,M,0,E);let _=0;for(let T=0;T<E;T++)_+=y[T]*M[T];t.update(_,i,1)}}this.setMode=s,this.setIndex=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function aO(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,l,u){switch(t.calls++,l){case n.TRIANGLES:t.triangles+=u*(a/3);break;case n.LINES:t.lines+=u*(a/2);break;case n.LINE_STRIP:t.lines+=u*(a-1);break;case n.LINE_LOOP:t.lines+=u*a;break;case n.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function lO(n,e,t){const i=new WeakMap,s=new nn;function a(l,u,f){const d=l.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=p!==void 0?p.length:0;let g=i.get(u);if(g===void 0||g.count!==m){let C=function(){B.dispose(),i.delete(u),u.removeEventListener("dispose",C)};var y=C;g!==void 0&&g.texture.dispose();const E=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,_=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let b=0;E===!0&&(b=1),M===!0&&(b=2),S===!0&&(b=3);let N=u.attributes.position.count*b,L=1;N>e.maxTextureSize&&(L=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const I=new Float32Array(N*L*4*m),B=new jw(I,N,L,m);B.type=br,B.needsUpdate=!0;const P=b*4;for(let k=0;k<m;k++){const X=_[k],j=T[k],W=w[k],Y=N*L*4*k;for(let ee=0;ee<X.count;ee++){const J=ee*P;E===!0&&(s.fromBufferAttribute(X,ee),I[Y+J+0]=s.x,I[Y+J+1]=s.y,I[Y+J+2]=s.z,I[Y+J+3]=0),M===!0&&(s.fromBufferAttribute(j,ee),I[Y+J+4]=s.x,I[Y+J+5]=s.y,I[Y+J+6]=s.z,I[Y+J+7]=0),S===!0&&(s.fromBufferAttribute(W,ee),I[Y+J+8]=s.x,I[Y+J+9]=s.y,I[Y+J+10]=s.z,I[Y+J+11]=W.itemSize===4?s.w:1)}}g={count:m,texture:B,size:new Ut(N,L)},i.set(u,g),u.addEventListener("dispose",C)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",l.morphTexture,t);else{let E=0;for(let S=0;S<d.length;S++)E+=d[S];const M=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(n,"morphTargetBaseInfluence",M),f.getUniforms().setValue(n,"morphTargetInfluences",d)}f.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}return{update:a}}function cO(n,e,t,i){let s=new WeakMap;function a(f){const d=i.render.frame,p=f.geometry,m=e.get(f,p);if(s.get(m)!==d&&(e.update(m),s.set(m,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),s.get(f)!==d&&(t.update(f.instanceMatrix,n.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,n.ARRAY_BUFFER),s.set(f,d))),f.isSkinnedMesh){const g=f.skeleton;s.get(g)!==d&&(g.update(),s.set(g,d))}return m}function l(){s=new WeakMap}function u(f){const d=f.target;d.removeEventListener("dispose",u),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:l}}const rT=new ni,mS=new nT(1,1),sT=new jw,oT=new k3,aT=new eT,gS=[],vS=[],yS=new Float32Array(16),_S=new Float32Array(9),xS=new Float32Array(4);function Pa(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let a=gS[s];if(a===void 0&&(a=new Float32Array(s),gS[s]=a),e!==0){i.toArray(a,0);for(let l=1,u=0;l!==e;++l)u+=t,n[l].toArray(a,u)}return a}function fn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function dn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ff(n,e){let t=vS[e];t===void 0&&(t=new Int32Array(e),vS[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function uO(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function fO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2fv(this.addr,e),dn(t,e)}}function dO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;n.uniform3fv(this.addr,e),dn(t,e)}}function hO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4fv(this.addr,e),dn(t,e)}}function pO(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,i))return;xS.set(i),n.uniformMatrix2fv(this.addr,!1,xS),dn(t,i)}}function mO(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,i))return;_S.set(i),n.uniformMatrix3fv(this.addr,!1,_S),dn(t,i)}}function gO(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,i))return;yS.set(i),n.uniformMatrix4fv(this.addr,!1,yS),dn(t,i)}}function vO(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function yO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2iv(this.addr,e),dn(t,e)}}function _O(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3iv(this.addr,e),dn(t,e)}}function xO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4iv(this.addr,e),dn(t,e)}}function SO(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function EO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2uiv(this.addr,e),dn(t,e)}}function MO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3uiv(this.addr,e),dn(t,e)}}function wO(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4uiv(this.addr,e),dn(t,e)}}function TO(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_2D_SHADOW?(mS.compareFunction=Gw,a=mS):a=rT,t.setTexture2D(e||a,s)}function bO(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||oT,s)}function AO(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||aT,s)}function CO(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||sT,s)}function RO(n){switch(n){case 5126:return uO;case 35664:return fO;case 35665:return dO;case 35666:return hO;case 35674:return pO;case 35675:return mO;case 35676:return gO;case 5124:case 35670:return vO;case 35667:case 35671:return yO;case 35668:case 35672:return _O;case 35669:case 35673:return xO;case 5125:return SO;case 36294:return EO;case 36295:return MO;case 36296:return wO;case 35678:case 36198:case 36298:case 36306:case 35682:return TO;case 35679:case 36299:case 36307:return bO;case 35680:case 36300:case 36308:case 36293:return AO;case 36289:case 36303:case 36311:case 36292:return CO}}function PO(n,e){n.uniform1fv(this.addr,e)}function DO(n,e){const t=Pa(e,this.size,2);n.uniform2fv(this.addr,t)}function LO(n,e){const t=Pa(e,this.size,3);n.uniform3fv(this.addr,t)}function IO(n,e){const t=Pa(e,this.size,4);n.uniform4fv(this.addr,t)}function NO(n,e){const t=Pa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function UO(n,e){const t=Pa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function FO(n,e){const t=Pa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function OO(n,e){n.uniform1iv(this.addr,e)}function kO(n,e){n.uniform2iv(this.addr,e)}function BO(n,e){n.uniform3iv(this.addr,e)}function zO(n,e){n.uniform4iv(this.addr,e)}function VO(n,e){n.uniform1uiv(this.addr,e)}function HO(n,e){n.uniform2uiv(this.addr,e)}function GO(n,e){n.uniform3uiv(this.addr,e)}function WO(n,e){n.uniform4uiv(this.addr,e)}function jO(n,e,t){const i=this.cache,s=e.length,a=Ff(t,s);fn(i,a)||(n.uniform1iv(this.addr,a),dn(i,a));for(let l=0;l!==s;++l)t.setTexture2D(e[l]||rT,a[l])}function XO(n,e,t){const i=this.cache,s=e.length,a=Ff(t,s);fn(i,a)||(n.uniform1iv(this.addr,a),dn(i,a));for(let l=0;l!==s;++l)t.setTexture3D(e[l]||oT,a[l])}function $O(n,e,t){const i=this.cache,s=e.length,a=Ff(t,s);fn(i,a)||(n.uniform1iv(this.addr,a),dn(i,a));for(let l=0;l!==s;++l)t.setTextureCube(e[l]||aT,a[l])}function YO(n,e,t){const i=this.cache,s=e.length,a=Ff(t,s);fn(i,a)||(n.uniform1iv(this.addr,a),dn(i,a));for(let l=0;l!==s;++l)t.setTexture2DArray(e[l]||sT,a[l])}function qO(n){switch(n){case 5126:return PO;case 35664:return DO;case 35665:return LO;case 35666:return IO;case 35674:return NO;case 35675:return UO;case 35676:return FO;case 5124:case 35670:return OO;case 35667:case 35671:return kO;case 35668:case 35672:return BO;case 35669:case 35673:return zO;case 5125:return VO;case 36294:return HO;case 36295:return GO;case 36296:return WO;case 35678:case 36198:case 36298:case 36306:case 35682:return jO;case 35679:case 36299:case 36307:return XO;case 35680:case 36300:case 36308:case 36293:return $O;case 36289:case 36303:case 36311:case 36292:return YO}}class KO{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=RO(t.type)}}class ZO{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qO(t.type)}}class QO{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,l=s.length;a!==l;++a){const u=s[a];u.setValue(e,t[u.id],i)}}}const wp=/(\w+)(\])?(\[|\.)?/g;function SS(n,e){n.seq.push(e),n.map[e.id]=e}function JO(n,e,t){const i=n.name,s=i.length;for(wp.lastIndex=0;;){const a=wp.exec(i),l=wp.lastIndex;let u=a[1];const f=a[2]==="]",d=a[3];if(f&&(u=u|0),d===void 0||d==="["&&l+2===s){SS(t,d===void 0?new KO(u,n,e):new ZO(u,n,e));break}else{let m=t.map[u];m===void 0&&(m=new QO(u),SS(t,m)),t=m}}}class tf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s),l=e.getUniformLocation(t,a.name);JO(a,l,this)}}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,l=t.length;a!==l;++a){const u=t[a],f=i[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const l=e[s];l.id in t&&i.push(l)}return i}}function ES(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ek=37297;let tk=0;function nk(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=s;l<a;l++){const u=l+1;i.push(`${u===e?">":" "} ${u}: ${t[l]}`)}return i.join(`
`)}const MS=new pt;function ik(n){Dt._getMatrix(MS,Dt.workingColorSpace,n);const e=`mat3( ${MS.elements.map(t=>t.toFixed(4))} )`;switch(Dt.getTransfer(n)){case hf:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function wS(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+nk(n.getShaderSource(e),l)}else return s}function rk(n,e){const t=ik(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function sk(n,e){let t;switch(e){case c3:t="Linear";break;case u3:t="Reinhard";break;case f3:t="Cineon";break;case d3:t="ACESFilmic";break;case p3:t="AgX";break;case m3:t="Neutral";break;case h3:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fu=new fe;function ok(){Dt.getLuminanceCoefficients(Fu);const n=Fu.x.toFixed(4),e=Fu.y.toFixed(4),t=Fu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ak(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_l).join(`
`)}function lk(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ck(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=n.getActiveAttrib(e,s),l=a.name;let u=1;a.type===n.FLOAT_MAT2&&(u=2),a.type===n.FLOAT_MAT3&&(u=3),a.type===n.FLOAT_MAT4&&(u=4),t[l]={type:a.type,location:n.getAttribLocation(e,l),locationSize:u}}return t}function _l(n){return n!==""}function TS(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bS(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uk=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qm(n){return n.replace(uk,dk)}const fk=new Map;function dk(n,e){let t=mt[e];if(t===void 0){const i=fk.get(e);if(i!==void 0)t=mt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qm(t)}const hk=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function AS(n){return n.replace(hk,pk)}function pk(n,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function CS(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mk(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Pw?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===HI?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mr&&(e="SHADOWMAP_TYPE_VSM"),e}function gk(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case xa:case Sa:e="ENVMAP_TYPE_CUBE";break;case If:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vk(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Sa:e="ENVMAP_MODE_REFRACTION";break}return e}function yk(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Dw:e="ENVMAP_BLENDING_MULTIPLY";break;case a3:e="ENVMAP_BLENDING_MIX";break;case l3:e="ENVMAP_BLENDING_ADD";break}return e}function _k(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function xk(n,e,t,i){const s=n.getContext(),a=t.defines;let l=t.vertexShader,u=t.fragmentShader;const f=mk(t),d=gk(t),p=vk(t),m=yk(t),g=_k(t),y=ak(t),E=lk(a),M=s.createProgram();let S,_,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(_l).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(_l).join(`
`),_.length>0&&(_+=`
`)):(S=[CS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_l).join(`
`),_=[CS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_s?"#define TONE_MAPPING":"",t.toneMapping!==_s?mt.tonemapping_pars_fragment:"",t.toneMapping!==_s?sk("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,rk("linearToOutputTexel",t.outputColorSpace),ok(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_l).join(`
`)),l=Qm(l),l=TS(l,t),l=bS(l,t),u=Qm(u),u=TS(u,t),u=bS(u,t),l=AS(l),u=AS(u),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",t.glslVersion===Vx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=T+S+l,b=T+_+u,N=ES(s,s.VERTEX_SHADER,w),L=ES(s,s.FRAGMENT_SHADER,b);s.attachShader(M,N),s.attachShader(M,L),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function I(k){if(n.debug.checkShaderErrors){const X=s.getProgramInfoLog(M).trim(),j=s.getShaderInfoLog(N).trim(),W=s.getShaderInfoLog(L).trim();let Y=!0,ee=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,N,L);else{const J=wS(s,N,"vertex"),H=wS(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+X+`
`+J+`
`+H)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(j===""||W==="")&&(ee=!1);ee&&(k.diagnostics={runnable:Y,programLog:X,vertexShader:{log:j,prefix:S},fragmentShader:{log:W,prefix:_}})}s.deleteShader(N),s.deleteShader(L),B=new tf(s,M),P=ck(s,M)}let B;this.getUniforms=function(){return B===void 0&&I(this),B};let P;this.getAttributes=function(){return P===void 0&&I(this),P};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(M,ek)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tk++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=N,this.fragmentShader=L,this}let Sk=0;class Ek{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),l=this._getShaderCacheForMaterial(e);return l.has(s)===!1&&(l.add(s),s.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Mk(e),t.set(e,i)),i}}class Mk{constructor(e){this.id=Sk++,this.code=e,this.usedTimes=0}}function wk(n,e,t,i,s,a,l){const u=new $w,f=new Ek,d=new Set,p=[],m=s.logarithmicDepthBuffer,g=s.vertexTextures;let y=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(P){return d.add(P),P===0?"uv":`uv${P}`}function S(P,C,k,X,j){const W=X.fog,Y=j.geometry,ee=P.isMeshStandardMaterial?X.environment:null,J=(P.isMeshStandardMaterial?t:e).get(P.envMap||ee),H=J&&J.mapping===If?J.image.height:null,ae=E[P.type];P.precision!==null&&(y=s.getMaxPrecision(P.precision),y!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",y,"instead."));const Z=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,O=Z!==void 0?Z.length:0;let Q=0;Y.morphAttributes.position!==void 0&&(Q=1),Y.morphAttributes.normal!==void 0&&(Q=2),Y.morphAttributes.color!==void 0&&(Q=3);let Me,te,de,ve;if(ae){const bt=Ji[ae];Me=bt.vertexShader,te=bt.fragmentShader}else Me=P.vertexShader,te=P.fragmentShader,f.update(P),de=f.getVertexShaderID(P),ve=f.getFragmentShaderID(P);const pe=n.getRenderTarget(),xe=n.state.buffers.depth.getReversed(),Ce=j.isInstancedMesh===!0,Pe=j.isBatchedMesh===!0,dt=!!P.map,rt=!!P.matcap,Ve=!!J,V=!!P.aoMap,xt=!!P.lightMap,st=!!P.bumpMap,ft=!!P.normalMap,Ke=!!P.displacementMap,Rt=!!P.emissiveMap,$e=!!P.metalnessMap,U=!!P.roughnessMap,R=P.anisotropy>0,re=P.clearcoat>0,ge=P.dispersion>0,ye=P.iridescence>0,me=P.sheen>0,He=P.transmission>0,Re=R&&!!P.anisotropyMap,Fe=re&&!!P.clearcoatMap,it=re&&!!P.clearcoatNormalMap,we=re&&!!P.clearcoatRoughnessMap,Oe=ye&&!!P.iridescenceMap,Qe=ye&&!!P.iridescenceThicknessMap,Je=me&&!!P.sheenColorMap,Ge=me&&!!P.sheenRoughnessMap,vt=!!P.specularMap,ct=!!P.specularColorMap,It=!!P.specularIntensityMap,K=He&&!!P.transmissionMap,De=He&&!!P.thicknessMap,he=!!P.gradientMap,_e=!!P.alphaMap,Ue=P.alphaTest>0,Ne=!!P.alphaHash,ut=!!P.extensions;let zt=_s;P.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(zt=n.toneMapping);const ln={shaderID:ae,shaderType:P.type,shaderName:P.name,vertexShader:Me,fragmentShader:te,defines:P.defines,customVertexShaderID:de,customFragmentShaderID:ve,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:y,batching:Pe,batchingColor:Pe&&j._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&j.instanceColor!==null,instancingMorph:Ce&&j.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Ea,alphaToCoverage:!!P.alphaToCoverage,map:dt,matcap:rt,envMap:Ve,envMapMode:Ve&&J.mapping,envMapCubeUVHeight:H,aoMap:V,lightMap:xt,bumpMap:st,normalMap:ft,displacementMap:g&&Ke,emissiveMap:Rt,normalMapObjectSpace:ft&&P.normalMapType===x3,normalMapTangentSpace:ft&&P.normalMapType===_3,metalnessMap:$e,roughnessMap:U,anisotropy:R,anisotropyMap:Re,clearcoat:re,clearcoatMap:Fe,clearcoatNormalMap:it,clearcoatRoughnessMap:we,dispersion:ge,iridescence:ye,iridescenceMap:Oe,iridescenceThicknessMap:Qe,sheen:me,sheenColorMap:Je,sheenRoughnessMap:Ge,specularMap:vt,specularColorMap:ct,specularIntensityMap:It,transmission:He,transmissionMap:K,thicknessMap:De,gradientMap:he,opaque:P.transparent===!1&&P.blending===ca&&P.alphaToCoverage===!1,alphaMap:_e,alphaTest:Ue,alphaHash:Ne,combine:P.combine,mapUv:dt&&M(P.map.channel),aoMapUv:V&&M(P.aoMap.channel),lightMapUv:xt&&M(P.lightMap.channel),bumpMapUv:st&&M(P.bumpMap.channel),normalMapUv:ft&&M(P.normalMap.channel),displacementMapUv:Ke&&M(P.displacementMap.channel),emissiveMapUv:Rt&&M(P.emissiveMap.channel),metalnessMapUv:$e&&M(P.metalnessMap.channel),roughnessMapUv:U&&M(P.roughnessMap.channel),anisotropyMapUv:Re&&M(P.anisotropyMap.channel),clearcoatMapUv:Fe&&M(P.clearcoatMap.channel),clearcoatNormalMapUv:it&&M(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&M(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&M(P.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&M(P.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&M(P.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&M(P.sheenRoughnessMap.channel),specularMapUv:vt&&M(P.specularMap.channel),specularColorMapUv:ct&&M(P.specularColorMap.channel),specularIntensityMapUv:It&&M(P.specularIntensityMap.channel),transmissionMapUv:K&&M(P.transmissionMap.channel),thicknessMapUv:De&&M(P.thicknessMap.channel),alphaMapUv:_e&&M(P.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ft||R),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!Y.attributes.uv&&(dt||_e),fog:!!W,useFog:P.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:xe,skinning:j.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:Q,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:P.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:zt,decodeVideoTexture:dt&&P.map.isVideoTexture===!0&&Dt.getTransfer(P.map.colorSpace)===Ft,decodeVideoTextureEmissive:Rt&&P.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(P.emissiveMap.colorSpace)===Ft,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Tr,flipSided:P.side===ti,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ut&&P.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&P.extensions.multiDraw===!0||Pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return ln.vertexUv1s=d.has(1),ln.vertexUv2s=d.has(2),ln.vertexUv3s=d.has(3),d.clear(),ln}function _(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const k in P.defines)C.push(k),C.push(P.defines[k]);return P.isRawShaderMaterial===!1&&(T(C,P),w(C,P),C.push(n.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function T(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function w(P,C){u.disableAll(),C.supportsVertexTextures&&u.enable(0),C.instancing&&u.enable(1),C.instancingColor&&u.enable(2),C.instancingMorph&&u.enable(3),C.matcap&&u.enable(4),C.envMap&&u.enable(5),C.normalMapObjectSpace&&u.enable(6),C.normalMapTangentSpace&&u.enable(7),C.clearcoat&&u.enable(8),C.iridescence&&u.enable(9),C.alphaTest&&u.enable(10),C.vertexColors&&u.enable(11),C.vertexAlphas&&u.enable(12),C.vertexUv1s&&u.enable(13),C.vertexUv2s&&u.enable(14),C.vertexUv3s&&u.enable(15),C.vertexTangents&&u.enable(16),C.anisotropy&&u.enable(17),C.alphaHash&&u.enable(18),C.batching&&u.enable(19),C.dispersion&&u.enable(20),C.batchingColor&&u.enable(21),P.push(u.mask),u.disableAll(),C.fog&&u.enable(0),C.useFog&&u.enable(1),C.flatShading&&u.enable(2),C.logarithmicDepthBuffer&&u.enable(3),C.reverseDepthBuffer&&u.enable(4),C.skinning&&u.enable(5),C.morphTargets&&u.enable(6),C.morphNormals&&u.enable(7),C.morphColors&&u.enable(8),C.premultipliedAlpha&&u.enable(9),C.shadowMapEnabled&&u.enable(10),C.doubleSided&&u.enable(11),C.flipSided&&u.enable(12),C.useDepthPacking&&u.enable(13),C.dithering&&u.enable(14),C.transmission&&u.enable(15),C.sheen&&u.enable(16),C.opaque&&u.enable(17),C.pointsUvs&&u.enable(18),C.decodeVideoTexture&&u.enable(19),C.decodeVideoTextureEmissive&&u.enable(20),C.alphaToCoverage&&u.enable(21),P.push(u.mask)}function b(P){const C=E[P.type];let k;if(C){const X=Ji[C];k=Z3.clone(X.uniforms)}else k=P.uniforms;return k}function N(P,C){let k;for(let X=0,j=p.length;X<j;X++){const W=p[X];if(W.cacheKey===C){k=W,++k.usedTimes;break}}return k===void 0&&(k=new xk(n,C,P,a),p.push(k)),k}function L(P){if(--P.usedTimes===0){const C=p.indexOf(P);p[C]=p[p.length-1],p.pop(),P.destroy()}}function I(P){f.remove(P)}function B(){f.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:b,acquireProgram:N,releaseProgram:L,releaseShaderCache:I,programs:p,dispose:B}}function Tk(){let n=new WeakMap;function e(l){return n.has(l)}function t(l){let u=n.get(l);return u===void 0&&(u={},n.set(l,u)),u}function i(l){n.delete(l)}function s(l,u,f){n.get(l)[u]=f}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function bk(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function RS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function PS(){const n=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function l(m,g,y,E,M,S){let _=n[e];return _===void 0?(_={id:m.id,object:m,geometry:g,material:y,groupOrder:E,renderOrder:m.renderOrder,z:M,group:S},n[e]=_):(_.id=m.id,_.object=m,_.geometry=g,_.material=y,_.groupOrder=E,_.renderOrder=m.renderOrder,_.z=M,_.group=S),e++,_}function u(m,g,y,E,M,S){const _=l(m,g,y,E,M,S);y.transmission>0?i.push(_):y.transparent===!0?s.push(_):t.push(_)}function f(m,g,y,E,M,S){const _=l(m,g,y,E,M,S);y.transmission>0?i.unshift(_):y.transparent===!0?s.unshift(_):t.unshift(_)}function d(m,g){t.length>1&&t.sort(m||bk),i.length>1&&i.sort(g||RS),s.length>1&&s.sort(g||RS)}function p(){for(let m=e,g=n.length;m<g;m++){const y=n[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:u,unshift:f,finish:p,sort:d}}function Ak(){let n=new WeakMap;function e(i,s){const a=n.get(i);let l;return a===void 0?(l=new PS,n.set(i,[l])):s>=a.length?(l=new PS,a.push(l)):l=a[s],l}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ck(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new fe,color:new wt};break;case"SpotLight":t={position:new fe,direction:new fe,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new fe,color:new wt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new fe,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":t={color:new wt,position:new fe,halfWidth:new fe,halfHeight:new fe};break}return n[e.id]=t,t}}}function Rk(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Pk=0;function Dk(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Lk(n){const e=new Ck,t=Rk(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new fe);const s=new fe,a=new rn,l=new rn;function u(d){let p=0,m=0,g=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let y=0,E=0,M=0,S=0,_=0,T=0,w=0,b=0,N=0,L=0,I=0;d.sort(Dk);for(let P=0,C=d.length;P<C;P++){const k=d[P],X=k.color,j=k.intensity,W=k.distance,Y=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)p+=X.r*j,m+=X.g*j,g+=X.b*j;else if(k.isLightProbe){for(let ee=0;ee<9;ee++)i.probe[ee].addScaledVector(k.sh.coefficients[ee],j);I++}else if(k.isDirectionalLight){const ee=e.get(k);if(ee.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const J=k.shadow,H=t.get(k);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,i.directionalShadow[y]=H,i.directionalShadowMap[y]=Y,i.directionalShadowMatrix[y]=k.shadow.matrix,T++}i.directional[y]=ee,y++}else if(k.isSpotLight){const ee=e.get(k);ee.position.setFromMatrixPosition(k.matrixWorld),ee.color.copy(X).multiplyScalar(j),ee.distance=W,ee.coneCos=Math.cos(k.angle),ee.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ee.decay=k.decay,i.spot[M]=ee;const J=k.shadow;if(k.map&&(i.spotLightMap[N]=k.map,N++,J.updateMatrices(k),k.castShadow&&L++),i.spotLightMatrix[M]=J.matrix,k.castShadow){const H=t.get(k);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,i.spotShadow[M]=H,i.spotShadowMap[M]=Y,b++}M++}else if(k.isRectAreaLight){const ee=e.get(k);ee.color.copy(X).multiplyScalar(j),ee.halfWidth.set(k.width*.5,0,0),ee.halfHeight.set(0,k.height*.5,0),i.rectArea[S]=ee,S++}else if(k.isPointLight){const ee=e.get(k);if(ee.color.copy(k.color).multiplyScalar(k.intensity),ee.distance=k.distance,ee.decay=k.decay,k.castShadow){const J=k.shadow,H=t.get(k);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,H.shadowCameraNear=J.camera.near,H.shadowCameraFar=J.camera.far,i.pointShadow[E]=H,i.pointShadowMap[E]=Y,i.pointShadowMatrix[E]=k.shadow.matrix,w++}i.point[E]=ee,E++}else if(k.isHemisphereLight){const ee=e.get(k);ee.skyColor.copy(k.color).multiplyScalar(j),ee.groundColor.copy(k.groundColor).multiplyScalar(j),i.hemi[_]=ee,_++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ie.LTC_FLOAT_1,i.rectAreaLTC2=Ie.LTC_FLOAT_2):(i.rectAreaLTC1=Ie.LTC_HALF_1,i.rectAreaLTC2=Ie.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=m,i.ambient[2]=g;const B=i.hash;(B.directionalLength!==y||B.pointLength!==E||B.spotLength!==M||B.rectAreaLength!==S||B.hemiLength!==_||B.numDirectionalShadows!==T||B.numPointShadows!==w||B.numSpotShadows!==b||B.numSpotMaps!==N||B.numLightProbes!==I)&&(i.directional.length=y,i.spot.length=M,i.rectArea.length=S,i.point.length=E,i.hemi.length=_,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=b+N-L,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=I,B.directionalLength=y,B.pointLength=E,B.spotLength=M,B.rectAreaLength=S,B.hemiLength=_,B.numDirectionalShadows=T,B.numPointShadows=w,B.numSpotShadows=b,B.numSpotMaps=N,B.numLightProbes=I,i.version=Pk++)}function f(d,p){let m=0,g=0,y=0,E=0,M=0;const S=p.matrixWorldInverse;for(let _=0,T=d.length;_<T;_++){const w=d[_];if(w.isDirectionalLight){const b=i.directional[m];b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(S),m++}else if(w.isSpotLight){const b=i.spot[y];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(S),b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(S),y++}else if(w.isRectAreaLight){const b=i.rectArea[E];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(S),l.identity(),a.copy(w.matrixWorld),a.premultiply(S),l.extractRotation(a),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(l),b.halfHeight.applyMatrix4(l),E++}else if(w.isPointLight){const b=i.point[g];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(S),g++}else if(w.isHemisphereLight){const b=i.hemi[M];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(S),M++}}}return{setup:u,setupView:f,state:i}}function DS(n){const e=new Lk(n),t=[],i=[];function s(p){d.camera=p,t.length=0,i.length=0}function a(p){t.push(p)}function l(p){i.push(p)}function u(){e.setup(t)}function f(p){e.setupView(t,p)}const d={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:u,setupLightsView:f,pushLight:a,pushShadow:l}}function Ik(n){let e=new WeakMap;function t(s,a=0){const l=e.get(s);let u;return l===void 0?(u=new DS(n),e.set(s,[u])):a>=l.length?(u=new DS(n),l.push(u)):u=l[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const Nk=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uk=`uniform sampler2D shadow_pass;
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
}`;function Fk(n,e,t){let i=new tT;const s=new Ut,a=new Ut,l=new nn,u=new lN({depthPacking:y3}),f=new cN,d={},p=t.maxTextureSize,m={[Es]:ti,[ti]:Es,[Tr]:Tr},g=new Nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:Nk,fragmentShader:Uk}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const E=new Br;E.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Cr(E,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pw;let _=this.type;this.render=function(L,I,B){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||L.length===0)return;const P=n.getRenderTarget(),C=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),X=n.state;X.setBlending(ys),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const j=_!==Mr&&this.type===Mr,W=_===Mr&&this.type!==Mr;for(let Y=0,ee=L.length;Y<ee;Y++){const J=L[Y],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ae=H.getFrameExtents();if(s.multiply(ae),a.copy(H.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(a.x=Math.floor(p/ae.x),s.x=a.x*ae.x,H.mapSize.x=a.x),s.y>p&&(a.y=Math.floor(p/ae.y),s.y=a.y*ae.y,H.mapSize.y=a.y)),H.map===null||j===!0||W===!0){const O=this.type!==Mr?{minFilter:Wi,magFilter:Wi}:{};H.map!==null&&H.map.dispose(),H.map=new fo(s.x,s.y,O),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const Z=H.getViewportCount();for(let O=0;O<Z;O++){const Q=H.getViewport(O);l.set(a.x*Q.x,a.y*Q.y,a.x*Q.z,a.y*Q.w),X.viewport(l),H.updateMatrices(J,O),i=H.getFrustum(),b(I,B,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===Mr&&T(H,B),H.needsUpdate=!1}_=this.type,S.needsUpdate=!1,n.setRenderTarget(P,C,k)};function T(L,I){const B=e.update(M);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,y.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new fo(s.x,s.y)),g.uniforms.shadow_pass.value=L.map.texture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(I,null,B,g,M,null),y.uniforms.shadow_pass.value=L.mapPass.texture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(I,null,B,y,M,null)}function w(L,I,B,P){let C=null;const k=B.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(k!==void 0)C=k;else if(C=B.isPointLight===!0?f:u,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const X=C.uuid,j=I.uuid;let W=d[X];W===void 0&&(W={},d[X]=W);let Y=W[j];Y===void 0&&(Y=C.clone(),W[j]=Y,I.addEventListener("dispose",N)),C=Y}if(C.visible=I.visible,C.wireframe=I.wireframe,P===Mr?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:m[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,B.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const X=n.properties.get(C);X.light=B}return C}function b(L,I,B,P,C){if(L.visible===!1)return;if(L.layers.test(I.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&C===Mr)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,L.matrixWorld);const j=e.update(L),W=L.material;if(Array.isArray(W)){const Y=j.groups;for(let ee=0,J=Y.length;ee<J;ee++){const H=Y[ee],ae=W[H.materialIndex];if(ae&&ae.visible){const Z=w(L,ae,P,C);L.onBeforeShadow(n,L,I,B,j,Z,H),n.renderBufferDirect(B,null,j,Z,L,H),L.onAfterShadow(n,L,I,B,j,Z,H)}}}else if(W.visible){const Y=w(L,W,P,C);L.onBeforeShadow(n,L,I,B,j,Y,null),n.renderBufferDirect(B,null,j,Y,L,null),L.onAfterShadow(n,L,I,B,j,Y,null)}}const X=L.children;for(let j=0,W=X.length;j<W;j++)b(X[j],I,B,P,C)}function N(L){L.target.removeEventListener("dispose",N);for(const B in d){const P=d[B],C=L.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const Ok={[hm]:pm,[mm]:ym,[gm]:_m,[_a]:vm,[pm]:hm,[ym]:mm,[_m]:gm,[vm]:_a};function kk(n,e){function t(){let K=!1;const De=new nn;let he=null;const _e=new nn(0,0,0,0);return{setMask:function(Ue){he!==Ue&&!K&&(n.colorMask(Ue,Ue,Ue,Ue),he=Ue)},setLocked:function(Ue){K=Ue},setClear:function(Ue,Ne,ut,zt,ln){ln===!0&&(Ue*=zt,Ne*=zt,ut*=zt),De.set(Ue,Ne,ut,zt),_e.equals(De)===!1&&(n.clearColor(Ue,Ne,ut,zt),_e.copy(De))},reset:function(){K=!1,he=null,_e.set(-1,0,0,0)}}}function i(){let K=!1,De=!1,he=null,_e=null,Ue=null;return{setReversed:function(Ne){if(De!==Ne){const ut=e.get("EXT_clip_control");Ne?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT),De=Ne;const zt=Ue;Ue=null,this.setClear(zt)}},getReversed:function(){return De},setTest:function(Ne){Ne?pe(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(Ne){he!==Ne&&!K&&(n.depthMask(Ne),he=Ne)},setFunc:function(Ne){if(De&&(Ne=Ok[Ne]),_e!==Ne){switch(Ne){case hm:n.depthFunc(n.NEVER);break;case pm:n.depthFunc(n.ALWAYS);break;case mm:n.depthFunc(n.LESS);break;case _a:n.depthFunc(n.LEQUAL);break;case gm:n.depthFunc(n.EQUAL);break;case vm:n.depthFunc(n.GEQUAL);break;case ym:n.depthFunc(n.GREATER);break;case _m:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=Ne}},setLocked:function(Ne){K=Ne},setClear:function(Ne){Ue!==Ne&&(De&&(Ne=1-Ne),n.clearDepth(Ne),Ue=Ne)},reset:function(){K=!1,he=null,_e=null,Ue=null,De=!1}}}function s(){let K=!1,De=null,he=null,_e=null,Ue=null,Ne=null,ut=null,zt=null,ln=null;return{setTest:function(bt){K||(bt?pe(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(bt){De!==bt&&!K&&(n.stencilMask(bt),De=bt)},setFunc:function(bt,Gn,On){(he!==bt||_e!==Gn||Ue!==On)&&(n.stencilFunc(bt,Gn,On),he=bt,_e=Gn,Ue=On)},setOp:function(bt,Gn,On){(Ne!==bt||ut!==Gn||zt!==On)&&(n.stencilOp(bt,Gn,On),Ne=bt,ut=Gn,zt=On)},setLocked:function(bt){K=bt},setClear:function(bt){ln!==bt&&(n.clearStencil(bt),ln=bt)},reset:function(){K=!1,De=null,he=null,_e=null,Ue=null,Ne=null,ut=null,zt=null,ln=null}}}const a=new t,l=new i,u=new s,f=new WeakMap,d=new WeakMap;let p={},m={},g=new WeakMap,y=[],E=null,M=!1,S=null,_=null,T=null,w=null,b=null,N=null,L=null,I=new wt(0,0,0),B=0,P=!1,C=null,k=null,X=null,j=null,W=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,J=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),ee=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),ee=J>=2);let ae=null,Z={};const O=n.getParameter(n.SCISSOR_BOX),Q=n.getParameter(n.VIEWPORT),Me=new nn().fromArray(O),te=new nn().fromArray(Q);function de(K,De,he,_e){const Ue=new Uint8Array(4),Ne=n.createTexture();n.bindTexture(K,Ne),n.texParameteri(K,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(K,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ut=0;ut<he;ut++)K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?n.texImage3D(De,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,Ue):n.texImage2D(De+ut,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ue);return Ne}const ve={};ve[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),pe(n.DEPTH_TEST),l.setFunc(_a),st(!1),ft(Fx),pe(n.CULL_FACE),V(ys);function pe(K){p[K]!==!0&&(n.enable(K),p[K]=!0)}function xe(K){p[K]!==!1&&(n.disable(K),p[K]=!1)}function Ce(K,De){return m[K]!==De?(n.bindFramebuffer(K,De),m[K]=De,K===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=De),K===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=De),!0):!1}function Pe(K,De){let he=y,_e=!1;if(K){he=g.get(De),he===void 0&&(he=[],g.set(De,he));const Ue=K.textures;if(he.length!==Ue.length||he[0]!==n.COLOR_ATTACHMENT0){for(let Ne=0,ut=Ue.length;Ne<ut;Ne++)he[Ne]=n.COLOR_ATTACHMENT0+Ne;he.length=Ue.length,_e=!0}}else he[0]!==n.BACK&&(he[0]=n.BACK,_e=!0);_e&&n.drawBuffers(he)}function dt(K){return E!==K?(n.useProgram(K),E=K,!0):!1}const rt={[Zs]:n.FUNC_ADD,[WI]:n.FUNC_SUBTRACT,[jI]:n.FUNC_REVERSE_SUBTRACT};rt[XI]=n.MIN,rt[$I]=n.MAX;const Ve={[YI]:n.ZERO,[qI]:n.ONE,[KI]:n.SRC_COLOR,[fm]:n.SRC_ALPHA,[n3]:n.SRC_ALPHA_SATURATE,[e3]:n.DST_COLOR,[QI]:n.DST_ALPHA,[ZI]:n.ONE_MINUS_SRC_COLOR,[dm]:n.ONE_MINUS_SRC_ALPHA,[t3]:n.ONE_MINUS_DST_COLOR,[JI]:n.ONE_MINUS_DST_ALPHA,[i3]:n.CONSTANT_COLOR,[r3]:n.ONE_MINUS_CONSTANT_COLOR,[s3]:n.CONSTANT_ALPHA,[o3]:n.ONE_MINUS_CONSTANT_ALPHA};function V(K,De,he,_e,Ue,Ne,ut,zt,ln,bt){if(K===ys){M===!0&&(xe(n.BLEND),M=!1);return}if(M===!1&&(pe(n.BLEND),M=!0),K!==GI){if(K!==S||bt!==P){if((_!==Zs||b!==Zs)&&(n.blendEquation(n.FUNC_ADD),_=Zs,b=Zs),bt)switch(K){case ca:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case um:n.blendFunc(n.ONE,n.ONE);break;case Ox:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kx:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case ca:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case um:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ox:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kx:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}T=null,w=null,N=null,L=null,I.set(0,0,0),B=0,S=K,P=bt}return}Ue=Ue||De,Ne=Ne||he,ut=ut||_e,(De!==_||Ue!==b)&&(n.blendEquationSeparate(rt[De],rt[Ue]),_=De,b=Ue),(he!==T||_e!==w||Ne!==N||ut!==L)&&(n.blendFuncSeparate(Ve[he],Ve[_e],Ve[Ne],Ve[ut]),T=he,w=_e,N=Ne,L=ut),(zt.equals(I)===!1||ln!==B)&&(n.blendColor(zt.r,zt.g,zt.b,ln),I.copy(zt),B=ln),S=K,P=!1}function xt(K,De){K.side===Tr?xe(n.CULL_FACE):pe(n.CULL_FACE);let he=K.side===ti;De&&(he=!he),st(he),K.blending===ca&&K.transparent===!1?V(ys):V(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),l.setFunc(K.depthFunc),l.setTest(K.depthTest),l.setMask(K.depthWrite),a.setMask(K.colorWrite);const _e=K.stencilWrite;u.setTest(_e),_e&&(u.setMask(K.stencilWriteMask),u.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),u.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),Rt(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function st(K){C!==K&&(K?n.frontFace(n.CW):n.frontFace(n.CCW),C=K)}function ft(K){K!==zI?(pe(n.CULL_FACE),K!==k&&(K===Fx?n.cullFace(n.BACK):K===VI?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),k=K}function Ke(K){K!==X&&(ee&&n.lineWidth(K),X=K)}function Rt(K,De,he){K?(pe(n.POLYGON_OFFSET_FILL),(j!==De||W!==he)&&(n.polygonOffset(De,he),j=De,W=he)):xe(n.POLYGON_OFFSET_FILL)}function $e(K){K?pe(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function U(K){K===void 0&&(K=n.TEXTURE0+Y-1),ae!==K&&(n.activeTexture(K),ae=K)}function R(K,De,he){he===void 0&&(ae===null?he=n.TEXTURE0+Y-1:he=ae);let _e=Z[he];_e===void 0&&(_e={type:void 0,texture:void 0},Z[he]=_e),(_e.type!==K||_e.texture!==De)&&(ae!==he&&(n.activeTexture(he),ae=he),n.bindTexture(K,De||ve[K]),_e.type=K,_e.texture=De)}function re(){const K=Z[ae];K!==void 0&&K.type!==void 0&&(n.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function ge(){try{n.compressedTexImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ye(){try{n.compressedTexImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function me(){try{n.texSubImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function He(){try{n.texSubImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Re(){try{n.compressedTexSubImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Fe(){try{n.compressedTexSubImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function it(){try{n.texStorage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function we(){try{n.texStorage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Oe(){try{n.texImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Qe(){try{n.texImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Je(K){Me.equals(K)===!1&&(n.scissor(K.x,K.y,K.z,K.w),Me.copy(K))}function Ge(K){te.equals(K)===!1&&(n.viewport(K.x,K.y,K.z,K.w),te.copy(K))}function vt(K,De){let he=d.get(De);he===void 0&&(he=new WeakMap,d.set(De,he));let _e=he.get(K);_e===void 0&&(_e=n.getUniformBlockIndex(De,K.name),he.set(K,_e))}function ct(K,De){const _e=d.get(De).get(K);f.get(De)!==_e&&(n.uniformBlockBinding(De,_e,K.__bindingPointIndex),f.set(De,_e))}function It(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),l.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},ae=null,Z={},m={},g=new WeakMap,y=[],E=null,M=!1,S=null,_=null,T=null,w=null,b=null,N=null,L=null,I=new wt(0,0,0),B=0,P=!1,C=null,k=null,X=null,j=null,W=null,Me.set(0,0,n.canvas.width,n.canvas.height),te.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:pe,disable:xe,bindFramebuffer:Ce,drawBuffers:Pe,useProgram:dt,setBlending:V,setMaterial:xt,setFlipSided:st,setCullFace:ft,setLineWidth:Ke,setPolygonOffset:Rt,setScissorTest:$e,activeTexture:U,bindTexture:R,unbindTexture:re,compressedTexImage2D:ge,compressedTexImage3D:ye,texImage2D:Oe,texImage3D:Qe,updateUBOMapping:vt,uniformBlockBinding:ct,texStorage2D:it,texStorage3D:we,texSubImage2D:me,texSubImage3D:He,compressedTexSubImage2D:Re,compressedTexSubImage3D:Fe,scissor:Je,viewport:Ge,reset:It}}function Bk(n,e,t,i,s,a,l){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ut,p=new WeakMap;let m;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,R){return y?new OffscreenCanvas(U,R):mf("canvas")}function M(U,R,re){let ge=1;const ye=$e(U);if((ye.width>re||ye.height>re)&&(ge=re/Math.max(ye.width,ye.height)),ge<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const me=Math.floor(ge*ye.width),He=Math.floor(ge*ye.height);m===void 0&&(m=E(me,He));const Re=R?E(me,He):m;return Re.width=me,Re.height=He,Re.getContext("2d").drawImage(U,0,0,me,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+me+"x"+He+")."),Re}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),U;return U}function S(U){return U.generateMipmaps}function _(U){n.generateMipmap(U)}function T(U){return U.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?n.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(U,R,re,ge,ye=!1){if(U!==null){if(n[U]!==void 0)return n[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let me=R;if(R===n.RED&&(re===n.FLOAT&&(me=n.R32F),re===n.HALF_FLOAT&&(me=n.R16F),re===n.UNSIGNED_BYTE&&(me=n.R8)),R===n.RED_INTEGER&&(re===n.UNSIGNED_BYTE&&(me=n.R8UI),re===n.UNSIGNED_SHORT&&(me=n.R16UI),re===n.UNSIGNED_INT&&(me=n.R32UI),re===n.BYTE&&(me=n.R8I),re===n.SHORT&&(me=n.R16I),re===n.INT&&(me=n.R32I)),R===n.RG&&(re===n.FLOAT&&(me=n.RG32F),re===n.HALF_FLOAT&&(me=n.RG16F),re===n.UNSIGNED_BYTE&&(me=n.RG8)),R===n.RG_INTEGER&&(re===n.UNSIGNED_BYTE&&(me=n.RG8UI),re===n.UNSIGNED_SHORT&&(me=n.RG16UI),re===n.UNSIGNED_INT&&(me=n.RG32UI),re===n.BYTE&&(me=n.RG8I),re===n.SHORT&&(me=n.RG16I),re===n.INT&&(me=n.RG32I)),R===n.RGB_INTEGER&&(re===n.UNSIGNED_BYTE&&(me=n.RGB8UI),re===n.UNSIGNED_SHORT&&(me=n.RGB16UI),re===n.UNSIGNED_INT&&(me=n.RGB32UI),re===n.BYTE&&(me=n.RGB8I),re===n.SHORT&&(me=n.RGB16I),re===n.INT&&(me=n.RGB32I)),R===n.RGBA_INTEGER&&(re===n.UNSIGNED_BYTE&&(me=n.RGBA8UI),re===n.UNSIGNED_SHORT&&(me=n.RGBA16UI),re===n.UNSIGNED_INT&&(me=n.RGBA32UI),re===n.BYTE&&(me=n.RGBA8I),re===n.SHORT&&(me=n.RGBA16I),re===n.INT&&(me=n.RGBA32I)),R===n.RGB&&re===n.UNSIGNED_INT_5_9_9_9_REV&&(me=n.RGB9_E5),R===n.RGBA){const He=ye?hf:Dt.getTransfer(ge);re===n.FLOAT&&(me=n.RGBA32F),re===n.HALF_FLOAT&&(me=n.RGBA16F),re===n.UNSIGNED_BYTE&&(me=He===Ft?n.SRGB8_ALPHA8:n.RGBA8),re===n.UNSIGNED_SHORT_4_4_4_4&&(me=n.RGBA4),re===n.UNSIGNED_SHORT_5_5_5_1&&(me=n.RGB5_A1)}return(me===n.R16F||me===n.R32F||me===n.RG16F||me===n.RG32F||me===n.RGBA16F||me===n.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function b(U,R){let re;return U?R===null||R===uo||R===Fl?re=n.DEPTH24_STENCIL8:R===br?re=n.DEPTH32F_STENCIL8:R===Ul&&(re=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===uo||R===Fl?re=n.DEPTH_COMPONENT24:R===br?re=n.DEPTH_COMPONENT32F:R===Ul&&(re=n.DEPTH_COMPONENT16),re}function N(U,R){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==Wi&&U.minFilter!==tr?Math.log2(Math.max(R.width,R.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?R.mipmaps.length:1}function L(U){const R=U.target;R.removeEventListener("dispose",L),B(R),R.isVideoTexture&&p.delete(R)}function I(U){const R=U.target;R.removeEventListener("dispose",I),C(R)}function B(U){const R=i.get(U);if(R.__webglInit===void 0)return;const re=U.source,ge=g.get(re);if(ge){const ye=ge[R.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&P(U),Object.keys(ge).length===0&&g.delete(re)}i.remove(U)}function P(U){const R=i.get(U);n.deleteTexture(R.__webglTexture);const re=U.source,ge=g.get(re);delete ge[R.__cacheKey],l.memory.textures--}function C(U){const R=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(R.__webglFramebuffer[ge]))for(let ye=0;ye<R.__webglFramebuffer[ge].length;ye++)n.deleteFramebuffer(R.__webglFramebuffer[ge][ye]);else n.deleteFramebuffer(R.__webglFramebuffer[ge]);R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[ge])}else{if(Array.isArray(R.__webglFramebuffer))for(let ge=0;ge<R.__webglFramebuffer.length;ge++)n.deleteFramebuffer(R.__webglFramebuffer[ge]);else n.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ge=0;ge<R.__webglColorRenderbuffer.length;ge++)R.__webglColorRenderbuffer[ge]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[ge]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const re=U.textures;for(let ge=0,ye=re.length;ge<ye;ge++){const me=i.get(re[ge]);me.__webglTexture&&(n.deleteTexture(me.__webglTexture),l.memory.textures--),i.remove(re[ge])}i.remove(U)}let k=0;function X(){k=0}function j(){const U=k;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),k+=1,U}function W(U){const R=[];return R.push(U.wrapS),R.push(U.wrapT),R.push(U.wrapR||0),R.push(U.magFilter),R.push(U.minFilter),R.push(U.anisotropy),R.push(U.internalFormat),R.push(U.format),R.push(U.type),R.push(U.generateMipmaps),R.push(U.premultiplyAlpha),R.push(U.flipY),R.push(U.unpackAlignment),R.push(U.colorSpace),R.join()}function Y(U,R){const re=i.get(U);if(U.isVideoTexture&&Ke(U),U.isRenderTargetTexture===!1&&U.version>0&&re.__version!==U.version){const ge=U.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(re,U,R);return}}t.bindTexture(n.TEXTURE_2D,re.__webglTexture,n.TEXTURE0+R)}function ee(U,R){const re=i.get(U);if(U.version>0&&re.__version!==U.version){te(re,U,R);return}t.bindTexture(n.TEXTURE_2D_ARRAY,re.__webglTexture,n.TEXTURE0+R)}function J(U,R){const re=i.get(U);if(U.version>0&&re.__version!==U.version){te(re,U,R);return}t.bindTexture(n.TEXTURE_3D,re.__webglTexture,n.TEXTURE0+R)}function H(U,R){const re=i.get(U);if(U.version>0&&re.__version!==U.version){de(re,U,R);return}t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture,n.TEXTURE0+R)}const ae={[Em]:n.REPEAT,[no]:n.CLAMP_TO_EDGE,[Mm]:n.MIRRORED_REPEAT},Z={[Wi]:n.NEAREST,[g3]:n.NEAREST_MIPMAP_NEAREST,[hu]:n.NEAREST_MIPMAP_LINEAR,[tr]:n.LINEAR,[qh]:n.LINEAR_MIPMAP_NEAREST,[io]:n.LINEAR_MIPMAP_LINEAR},O={[S3]:n.NEVER,[A3]:n.ALWAYS,[E3]:n.LESS,[Gw]:n.LEQUAL,[M3]:n.EQUAL,[b3]:n.GEQUAL,[w3]:n.GREATER,[T3]:n.NOTEQUAL};function Q(U,R){if(R.type===br&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===tr||R.magFilter===qh||R.magFilter===hu||R.magFilter===io||R.minFilter===tr||R.minFilter===qh||R.minFilter===hu||R.minFilter===io)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(U,n.TEXTURE_WRAP_S,ae[R.wrapS]),n.texParameteri(U,n.TEXTURE_WRAP_T,ae[R.wrapT]),(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)&&n.texParameteri(U,n.TEXTURE_WRAP_R,ae[R.wrapR]),n.texParameteri(U,n.TEXTURE_MAG_FILTER,Z[R.magFilter]),n.texParameteri(U,n.TEXTURE_MIN_FILTER,Z[R.minFilter]),R.compareFunction&&(n.texParameteri(U,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(U,n.TEXTURE_COMPARE_FUNC,O[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Wi||R.minFilter!==hu&&R.minFilter!==io||R.type===br&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");n.texParameterf(U,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function Me(U,R){let re=!1;U.__webglInit===void 0&&(U.__webglInit=!0,R.addEventListener("dispose",L));const ge=R.source;let ye=g.get(ge);ye===void 0&&(ye={},g.set(ge,ye));const me=W(R);if(me!==U.__cacheKey){ye[me]===void 0&&(ye[me]={texture:n.createTexture(),usedTimes:0},l.memory.textures++,re=!0),ye[me].usedTimes++;const He=ye[U.__cacheKey];He!==void 0&&(ye[U.__cacheKey].usedTimes--,He.usedTimes===0&&P(R)),U.__cacheKey=me,U.__webglTexture=ye[me].texture}return re}function te(U,R,re){let ge=n.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ge=n.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ge=n.TEXTURE_3D);const ye=Me(U,R),me=R.source;t.bindTexture(ge,U.__webglTexture,n.TEXTURE0+re);const He=i.get(me);if(me.version!==He.__version||ye===!0){t.activeTexture(n.TEXTURE0+re);const Re=Dt.getPrimaries(Dt.workingColorSpace),Fe=R.colorSpace===gs?null:Dt.getPrimaries(R.colorSpace),it=R.colorSpace===gs||Re===Fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let we=M(R.image,!1,s.maxTextureSize);we=Rt(R,we);const Oe=a.convert(R.format,R.colorSpace),Qe=a.convert(R.type);let Je=w(R.internalFormat,Oe,Qe,R.colorSpace,R.isVideoTexture);Q(ge,R);let Ge;const vt=R.mipmaps,ct=R.isVideoTexture!==!0,It=He.__version===void 0||ye===!0,K=me.dataReady,De=N(R,we);if(R.isDepthTexture)Je=b(R.format===kl,R.type),It&&(ct?t.texStorage2D(n.TEXTURE_2D,1,Je,we.width,we.height):t.texImage2D(n.TEXTURE_2D,0,Je,we.width,we.height,0,Oe,Qe,null));else if(R.isDataTexture)if(vt.length>0){ct&&It&&t.texStorage2D(n.TEXTURE_2D,De,Je,vt[0].width,vt[0].height);for(let he=0,_e=vt.length;he<_e;he++)Ge=vt[he],ct?K&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Ge.width,Ge.height,Oe,Qe,Ge.data):t.texImage2D(n.TEXTURE_2D,he,Je,Ge.width,Ge.height,0,Oe,Qe,Ge.data);R.generateMipmaps=!1}else ct?(It&&t.texStorage2D(n.TEXTURE_2D,De,Je,we.width,we.height),K&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we.width,we.height,Oe,Qe,we.data)):t.texImage2D(n.TEXTURE_2D,0,Je,we.width,we.height,0,Oe,Qe,we.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ct&&It&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Je,vt[0].width,vt[0].height,we.depth);for(let he=0,_e=vt.length;he<_e;he++)if(Ge=vt[he],R.format!==Hi)if(Oe!==null)if(ct){if(K)if(R.layerUpdates.size>0){const Ue=aS(Ge.width,Ge.height,R.format,R.type);for(const Ne of R.layerUpdates){const ut=Ge.data.subarray(Ne*Ue/Ge.data.BYTES_PER_ELEMENT,(Ne+1)*Ue/Ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,Ne,Ge.width,Ge.height,1,Oe,ut)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Ge.width,Ge.height,we.depth,Oe,Ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,Je,Ge.width,Ge.height,we.depth,0,Ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?K&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,Ge.width,Ge.height,we.depth,Oe,Qe,Ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,Je,Ge.width,Ge.height,we.depth,0,Oe,Qe,Ge.data)}else{ct&&It&&t.texStorage2D(n.TEXTURE_2D,De,Je,vt[0].width,vt[0].height);for(let he=0,_e=vt.length;he<_e;he++)Ge=vt[he],R.format!==Hi?Oe!==null?ct?K&&t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,Ge.width,Ge.height,Oe,Ge.data):t.compressedTexImage2D(n.TEXTURE_2D,he,Je,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?K&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Ge.width,Ge.height,Oe,Qe,Ge.data):t.texImage2D(n.TEXTURE_2D,he,Je,Ge.width,Ge.height,0,Oe,Qe,Ge.data)}else if(R.isDataArrayTexture)if(ct){if(It&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Je,we.width,we.height,we.depth),K)if(R.layerUpdates.size>0){const he=aS(we.width,we.height,R.format,R.type);for(const _e of R.layerUpdates){const Ue=we.data.subarray(_e*he/we.data.BYTES_PER_ELEMENT,(_e+1)*he/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,_e,we.width,we.height,1,Oe,Qe,Ue)}R.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Oe,Qe,we.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Je,we.width,we.height,we.depth,0,Oe,Qe,we.data);else if(R.isData3DTexture)ct?(It&&t.texStorage3D(n.TEXTURE_3D,De,Je,we.width,we.height,we.depth),K&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Oe,Qe,we.data)):t.texImage3D(n.TEXTURE_3D,0,Je,we.width,we.height,we.depth,0,Oe,Qe,we.data);else if(R.isFramebufferTexture){if(It)if(ct)t.texStorage2D(n.TEXTURE_2D,De,Je,we.width,we.height);else{let he=we.width,_e=we.height;for(let Ue=0;Ue<De;Ue++)t.texImage2D(n.TEXTURE_2D,Ue,Je,he,_e,0,Oe,Qe,null),he>>=1,_e>>=1}}else if(vt.length>0){if(ct&&It){const he=$e(vt[0]);t.texStorage2D(n.TEXTURE_2D,De,Je,he.width,he.height)}for(let he=0,_e=vt.length;he<_e;he++)Ge=vt[he],ct?K&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Oe,Qe,Ge):t.texImage2D(n.TEXTURE_2D,he,Je,Oe,Qe,Ge);R.generateMipmaps=!1}else if(ct){if(It){const he=$e(we);t.texStorage2D(n.TEXTURE_2D,De,Je,he.width,he.height)}K&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Oe,Qe,we)}else t.texImage2D(n.TEXTURE_2D,0,Je,Oe,Qe,we);S(R)&&_(ge),He.__version=me.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function de(U,R,re){if(R.image.length!==6)return;const ge=Me(U,R),ye=R.source;t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+re);const me=i.get(ye);if(ye.version!==me.__version||ge===!0){t.activeTexture(n.TEXTURE0+re);const He=Dt.getPrimaries(Dt.workingColorSpace),Re=R.colorSpace===gs?null:Dt.getPrimaries(R.colorSpace),Fe=R.colorSpace===gs||He===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const it=R.isCompressedTexture||R.image[0].isCompressedTexture,we=R.image[0]&&R.image[0].isDataTexture,Oe=[];for(let _e=0;_e<6;_e++)!it&&!we?Oe[_e]=M(R.image[_e],!0,s.maxCubemapSize):Oe[_e]=we?R.image[_e].image:R.image[_e],Oe[_e]=Rt(R,Oe[_e]);const Qe=Oe[0],Je=a.convert(R.format,R.colorSpace),Ge=a.convert(R.type),vt=w(R.internalFormat,Je,Ge,R.colorSpace),ct=R.isVideoTexture!==!0,It=me.__version===void 0||ge===!0,K=ye.dataReady;let De=N(R,Qe);Q(n.TEXTURE_CUBE_MAP,R);let he;if(it){ct&&It&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,vt,Qe.width,Qe.height);for(let _e=0;_e<6;_e++){he=Oe[_e].mipmaps;for(let Ue=0;Ue<he.length;Ue++){const Ne=he[Ue];R.format!==Hi?Je!==null?ct?K&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ue,0,0,Ne.width,Ne.height,Je,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ue,vt,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ue,0,0,Ne.width,Ne.height,Je,Ge,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ue,vt,Ne.width,Ne.height,0,Je,Ge,Ne.data)}}}else{if(he=R.mipmaps,ct&&It){he.length>0&&De++;const _e=$e(Oe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,vt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(we){ct?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Oe[_e].width,Oe[_e].height,Je,Ge,Oe[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,vt,Oe[_e].width,Oe[_e].height,0,Je,Ge,Oe[_e].data);for(let Ue=0;Ue<he.length;Ue++){const ut=he[Ue].image[_e].image;ct?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ue+1,0,0,ut.width,ut.height,Je,Ge,ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ue+1,vt,ut.width,ut.height,0,Je,Ge,ut.data)}}else{ct?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Je,Ge,Oe[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,vt,Je,Ge,Oe[_e]);for(let Ue=0;Ue<he.length;Ue++){const Ne=he[Ue];ct?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ue+1,0,0,Je,Ge,Ne.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ue+1,vt,Je,Ge,Ne.image[_e])}}}S(R)&&_(n.TEXTURE_CUBE_MAP),me.__version=ye.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function ve(U,R,re,ge,ye,me){const He=a.convert(re.format,re.colorSpace),Re=a.convert(re.type),Fe=w(re.internalFormat,He,Re,re.colorSpace),it=i.get(R),we=i.get(re);if(we.__renderTarget=R,!it.__hasExternalTextures){const Oe=Math.max(1,R.width>>me),Qe=Math.max(1,R.height>>me);ye===n.TEXTURE_3D||ye===n.TEXTURE_2D_ARRAY?t.texImage3D(ye,me,Fe,Oe,Qe,R.depth,0,He,Re,null):t.texImage2D(ye,me,Fe,Oe,Qe,0,He,Re,null)}t.bindFramebuffer(n.FRAMEBUFFER,U),ft(R)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,ye,we.__webglTexture,0,st(R)):(ye===n.TEXTURE_2D||ye>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ge,ye,we.__webglTexture,me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(U,R,re){if(n.bindRenderbuffer(n.RENDERBUFFER,U),R.depthBuffer){const ge=R.depthTexture,ye=ge&&ge.isDepthTexture?ge.type:null,me=b(R.stencilBuffer,ye),He=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=st(R);ft(R)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,me,R.width,R.height):re?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,me,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,me,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,He,n.RENDERBUFFER,U)}else{const ge=R.textures;for(let ye=0;ye<ge.length;ye++){const me=ge[ye],He=a.convert(me.format,me.colorSpace),Re=a.convert(me.type),Fe=w(me.internalFormat,He,Re,me.colorSpace),it=st(R);re&&ft(R)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,it,Fe,R.width,R.height):ft(R)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,it,Fe,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,Fe,R.width,R.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xe(U,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,U),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=i.get(R.depthTexture);ge.__renderTarget=R,(!ge.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),Y(R.depthTexture,0);const ye=ge.__webglTexture,me=st(R);if(R.depthTexture.format===Ol)ft(R)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ye,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ye,0);else if(R.depthTexture.format===kl)ft(R)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ye,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function Ce(U){const R=i.get(U),re=U.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==U.depthTexture){const ge=U.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ge){const ye=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ge.removeEventListener("dispose",ye)};ge.addEventListener("dispose",ye),R.__depthDisposeCallback=ye}R.__boundDepthTexture=ge}if(U.depthTexture&&!R.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");xe(R.__webglFramebuffer,U)}else if(re){R.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[ge]),R.__webglDepthbuffer[ge]===void 0)R.__webglDepthbuffer[ge]=n.createRenderbuffer(),pe(R.__webglDepthbuffer[ge],U,!1);else{const ye=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=R.__webglDepthbuffer[ge];n.bindRenderbuffer(n.RENDERBUFFER,me),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,me)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=n.createRenderbuffer(),pe(R.__webglDepthbuffer,U,!1);else{const ge=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=R.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ye),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,ye)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(U,R,re){const ge=i.get(U);R!==void 0&&ve(ge.__webglFramebuffer,U,U.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),re!==void 0&&Ce(U)}function dt(U){const R=U.texture,re=i.get(U),ge=i.get(R);U.addEventListener("dispose",I);const ye=U.textures,me=U.isWebGLCubeRenderTarget===!0,He=ye.length>1;if(He||(ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture()),ge.__version=R.version,l.memory.textures++),me){re.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(R.mipmaps&&R.mipmaps.length>0){re.__webglFramebuffer[Re]=[];for(let Fe=0;Fe<R.mipmaps.length;Fe++)re.__webglFramebuffer[Re][Fe]=n.createFramebuffer()}else re.__webglFramebuffer[Re]=n.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){re.__webglFramebuffer=[];for(let Re=0;Re<R.mipmaps.length;Re++)re.__webglFramebuffer[Re]=n.createFramebuffer()}else re.__webglFramebuffer=n.createFramebuffer();if(He)for(let Re=0,Fe=ye.length;Re<Fe;Re++){const it=i.get(ye[Re]);it.__webglTexture===void 0&&(it.__webglTexture=n.createTexture(),l.memory.textures++)}if(U.samples>0&&ft(U)===!1){re.__webglMultisampledFramebuffer=n.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let Re=0;Re<ye.length;Re++){const Fe=ye[Re];re.__webglColorRenderbuffer[Re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,re.__webglColorRenderbuffer[Re]);const it=a.convert(Fe.format,Fe.colorSpace),we=a.convert(Fe.type),Oe=w(Fe.internalFormat,it,we,Fe.colorSpace,U.isXRRenderTarget===!0),Qe=st(U);n.renderbufferStorageMultisample(n.RENDERBUFFER,Qe,Oe,U.width,U.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,re.__webglColorRenderbuffer[Re])}n.bindRenderbuffer(n.RENDERBUFFER,null),U.depthBuffer&&(re.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(re.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(me){t.bindTexture(n.TEXTURE_CUBE_MAP,ge.__webglTexture),Q(n.TEXTURE_CUBE_MAP,R);for(let Re=0;Re<6;Re++)if(R.mipmaps&&R.mipmaps.length>0)for(let Fe=0;Fe<R.mipmaps.length;Fe++)ve(re.__webglFramebuffer[Re][Fe],U,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Fe);else ve(re.__webglFramebuffer[Re],U,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);S(R)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let Re=0,Fe=ye.length;Re<Fe;Re++){const it=ye[Re],we=i.get(it);t.bindTexture(n.TEXTURE_2D,we.__webglTexture),Q(n.TEXTURE_2D,it),ve(re.__webglFramebuffer,U,it,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,0),S(it)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let Re=n.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Re=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Re,ge.__webglTexture),Q(Re,R),R.mipmaps&&R.mipmaps.length>0)for(let Fe=0;Fe<R.mipmaps.length;Fe++)ve(re.__webglFramebuffer[Fe],U,R,n.COLOR_ATTACHMENT0,Re,Fe);else ve(re.__webglFramebuffer,U,R,n.COLOR_ATTACHMENT0,Re,0);S(R)&&_(Re),t.unbindTexture()}U.depthBuffer&&Ce(U)}function rt(U){const R=U.textures;for(let re=0,ge=R.length;re<ge;re++){const ye=R[re];if(S(ye)){const me=T(U),He=i.get(ye).__webglTexture;t.bindTexture(me,He),_(me),t.unbindTexture()}}}const Ve=[],V=[];function xt(U){if(U.samples>0){if(ft(U)===!1){const R=U.textures,re=U.width,ge=U.height;let ye=n.COLOR_BUFFER_BIT;const me=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,He=i.get(U),Re=R.length>1;if(Re)for(let Fe=0;Fe<R.length;Fe++)t.bindFramebuffer(n.FRAMEBUFFER,He.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,He.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Fe=0;Fe<R.length;Fe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ye|=n.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ye|=n.STENCIL_BUFFER_BIT)),Re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,He.__webglColorRenderbuffer[Fe]);const it=i.get(R[Fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,it,0)}n.blitFramebuffer(0,0,re,ge,0,0,re,ge,ye,n.NEAREST),f===!0&&(Ve.length=0,V.length=0,Ve.push(n.COLOR_ATTACHMENT0+Fe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Ve.push(me),V.push(me),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,V)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ve))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Re)for(let Fe=0;Fe<R.length;Fe++){t.bindFramebuffer(n.FRAMEBUFFER,He.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,He.__webglColorRenderbuffer[Fe]);const it=i.get(R[Fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,He.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,it,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&f){const R=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[R])}}}function st(U){return Math.min(s.maxSamples,U.samples)}function ft(U){const R=i.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ke(U){const R=l.render.frame;p.get(U)!==R&&(p.set(U,R),U.update())}function Rt(U,R){const re=U.colorSpace,ge=U.format,ye=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||re!==Ea&&re!==gs&&(Dt.getTransfer(re)===Ft?(ge!==Hi||ye!==Lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",re)),R}function $e(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(d.width=U.naturalWidth||U.width,d.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(d.width=U.displayWidth,d.height=U.displayHeight):(d.width=U.width,d.height=U.height),d}this.allocateTextureUnit=j,this.resetTextureUnits=X,this.setTexture2D=Y,this.setTexture2DArray=ee,this.setTexture3D=J,this.setTextureCube=H,this.rebindTextures=Pe,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ft}function zk(n,e){function t(i,s=gs){let a;const l=Dt.getTransfer(s);if(i===Lr)return n.UNSIGNED_BYTE;if(i===Jg)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ev)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Uw)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Iw)return n.BYTE;if(i===Nw)return n.SHORT;if(i===Ul)return n.UNSIGNED_SHORT;if(i===Qg)return n.INT;if(i===uo)return n.UNSIGNED_INT;if(i===br)return n.FLOAT;if(i===$l)return n.HALF_FLOAT;if(i===Fw)return n.ALPHA;if(i===Ow)return n.RGB;if(i===Hi)return n.RGBA;if(i===kw)return n.LUMINANCE;if(i===Bw)return n.LUMINANCE_ALPHA;if(i===Ol)return n.DEPTH_COMPONENT;if(i===kl)return n.DEPTH_STENCIL;if(i===zw)return n.RED;if(i===tv)return n.RED_INTEGER;if(i===Vw)return n.RG;if(i===nv)return n.RG_INTEGER;if(i===iv)return n.RGBA_INTEGER;if(i===qu||i===Ku||i===Zu||i===Qu)if(l===Ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===qu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ku)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===qu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ku)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wm||i===Tm||i===bm||i===Am)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===wm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Am)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cm||i===Rm||i===Pm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Cm||i===Rm)return l===Ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Pm)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Dm||i===Lm||i===Im||i===Nm||i===Um||i===Fm||i===Om||i===km||i===Bm||i===zm||i===Vm||i===Hm||i===Gm||i===Wm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Dm)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Lm)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Im)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nm)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Um)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fm)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Om)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===km)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bm)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zm)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vm)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hm)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gm)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wm)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ju||i===jm||i===Xm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Ju)return l===Ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hw||i===$m||i===Ym||i===qm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Ju)return a.COMPRESSED_RED_RGTC1_EXT;if(i===$m)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ym)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fl?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Vk=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hk=`
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

}`;class Gk{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new ni,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Nr({vertexShader:Vk,fragmentShader:Hk,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Cr(new Uf(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wk extends Ra{constructor(e,t){super();const i=this;let s=null,a=1,l=null,u="local-floor",f=1,d=null,p=null,m=null,g=null,y=null,E=null;const M=new Gk,S=t.getContextAttributes();let _=null,T=null;const w=[],b=[],N=new Ut;let L=null;const I=new wi;I.viewport=new nn;const B=new wi;B.viewport=new nn;const P=[I,B],C=new fN;let k=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let de=w[te];return de===void 0&&(de=new vp,w[te]=de),de.getTargetRaySpace()},this.getControllerGrip=function(te){let de=w[te];return de===void 0&&(de=new vp,w[te]=de),de.getGripSpace()},this.getHand=function(te){let de=w[te];return de===void 0&&(de=new vp,w[te]=de),de.getHandSpace()};function j(te){const de=b.indexOf(te.inputSource);if(de===-1)return;const ve=w[de];ve!==void 0&&(ve.update(te.inputSource,te.frame,d||l),ve.dispatchEvent({type:te.type,data:te.inputSource}))}function W(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Y);for(let te=0;te<w.length;te++){const de=b[te];de!==null&&(b[te]=null,w[te].disconnect(de))}k=null,X=null,M.reset(),e.setRenderTarget(_),y=null,g=null,m=null,s=null,T=null,Me.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){u=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||l},this.setReferenceSpace=function(te){d=te},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return m},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Y),S.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(N),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,pe=null,xe=null;S.depth&&(xe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=S.stencil?kl:Ol,pe=S.stencil?Fl:uo);const Ce={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:a};m=new XRWebGLBinding(s,t),g=m.createProjectionLayer(Ce),s.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),T=new fo(g.textureWidth,g.textureHeight,{format:Hi,type:Lr,depthTexture:new nT(g.textureWidth,g.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ve={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),T=new fo(y.framebufferWidth,y.framebufferHeight,{format:Hi,type:Lr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(f),d=null,l=await s.requestReferenceSpace(u),Me.setContext(s),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Y(te){for(let de=0;de<te.removed.length;de++){const ve=te.removed[de],pe=b.indexOf(ve);pe>=0&&(b[pe]=null,w[pe].disconnect(ve))}for(let de=0;de<te.added.length;de++){const ve=te.added[de];let pe=b.indexOf(ve);if(pe===-1){for(let Ce=0;Ce<w.length;Ce++)if(Ce>=b.length){b.push(ve),pe=Ce;break}else if(b[Ce]===null){b[Ce]=ve,pe=Ce;break}if(pe===-1)break}const xe=w[pe];xe&&xe.connect(ve)}}const ee=new fe,J=new fe;function H(te,de,ve){ee.setFromMatrixPosition(de.matrixWorld),J.setFromMatrixPosition(ve.matrixWorld);const pe=ee.distanceTo(J),xe=de.projectionMatrix.elements,Ce=ve.projectionMatrix.elements,Pe=xe[14]/(xe[10]-1),dt=xe[14]/(xe[10]+1),rt=(xe[9]+1)/xe[5],Ve=(xe[9]-1)/xe[5],V=(xe[8]-1)/xe[0],xt=(Ce[8]+1)/Ce[0],st=Pe*V,ft=Pe*xt,Ke=pe/(-V+xt),Rt=Ke*-V;if(de.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Rt),te.translateZ(Ke),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),xe[10]===-1)te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const $e=Pe+Ke,U=dt+Ke,R=st-Rt,re=ft+(pe-Rt),ge=rt*dt/U*$e,ye=Ve*dt/U*$e;te.projectionMatrix.makePerspective(R,re,ge,ye,$e,U),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function ae(te,de){de===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(de.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let de=te.near,ve=te.far;M.texture!==null&&(M.depthNear>0&&(de=M.depthNear),M.depthFar>0&&(ve=M.depthFar)),C.near=B.near=I.near=de,C.far=B.far=I.far=ve,(k!==C.near||X!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),k=C.near,X=C.far),I.layers.mask=te.layers.mask|2,B.layers.mask=te.layers.mask|4,C.layers.mask=I.layers.mask|B.layers.mask;const pe=te.parent,xe=C.cameras;ae(C,pe);for(let Ce=0;Ce<xe.length;Ce++)ae(xe[Ce],pe);xe.length===2?H(C,I,B):C.projectionMatrix.copy(I.projectionMatrix),Z(te,C,pe)};function Z(te,de,ve){ve===null?te.matrix.copy(de.matrixWorld):(te.matrix.copy(ve.matrixWorld),te.matrix.invert(),te.matrix.multiply(de.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Km*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(g===null&&y===null))return f},this.setFoveation=function(te){f=te,g!==null&&(g.fixedFoveation=te),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=te)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(C)};let O=null;function Q(te,de){if(p=de.getViewerPose(d||l),E=de,p!==null){const ve=p.views;y!==null&&(e.setRenderTargetFramebuffer(T,y.framebuffer),e.setRenderTarget(T));let pe=!1;ve.length!==C.cameras.length&&(C.cameras.length=0,pe=!0);for(let Pe=0;Pe<ve.length;Pe++){const dt=ve[Pe];let rt=null;if(y!==null)rt=y.getViewport(dt);else{const V=m.getViewSubImage(g,dt);rt=V.viewport,Pe===0&&(e.setRenderTargetTextures(T,V.colorTexture,V.depthStencilTexture),e.setRenderTarget(T))}let Ve=P[Pe];Ve===void 0&&(Ve=new wi,Ve.layers.enable(Pe),Ve.viewport=new nn,P[Pe]=Ve),Ve.matrix.fromArray(dt.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(dt.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(rt.x,rt.y,rt.width,rt.height),Pe===0&&(C.matrix.copy(Ve.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),pe===!0&&C.cameras.push(Ve)}const xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&m){const Pe=m.getDepthInformation(ve[0]);Pe&&Pe.isValid&&Pe.texture&&M.init(e,Pe,s.renderState)}}for(let ve=0;ve<w.length;ve++){const pe=b[ve],xe=w[ve];pe!==null&&xe!==void 0&&xe.update(pe,de,d||l)}O&&O(te,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),E=null}const Me=new iT;Me.setAnimationLoop(Q),this.setAnimationLoop=function(te){O=te},this.dispose=function(){}}}const js=new Ir,jk=new rn;function Xk(n,e){function t(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function i(S,_){_.color.getRGB(S.fogColor.value,Qw(n)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function s(S,_,T,w,b){_.isMeshBasicMaterial||_.isMeshLambertMaterial?a(S,_):_.isMeshToonMaterial?(a(S,_),m(S,_)):_.isMeshPhongMaterial?(a(S,_),p(S,_)):_.isMeshStandardMaterial?(a(S,_),g(S,_),_.isMeshPhysicalMaterial&&y(S,_,b)):_.isMeshMatcapMaterial?(a(S,_),E(S,_)):_.isMeshDepthMaterial?a(S,_):_.isMeshDistanceMaterial?(a(S,_),M(S,_)):_.isMeshNormalMaterial?a(S,_):_.isLineBasicMaterial?(l(S,_),_.isLineDashedMaterial&&u(S,_)):_.isPointsMaterial?f(S,_,T,w):_.isSpriteMaterial?d(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function a(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,t(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===ti&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,t(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===ti&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,t(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,t(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const T=e.get(_),w=T.envMap,b=T.envMapRotation;w&&(S.envMap.value=w,js.copy(b),js.x*=-1,js.y*=-1,js.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),S.envMapRotation.value.setFromMatrix4(jk.makeRotationFromEuler(js)),S.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,S.aoMapTransform))}function l(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform))}function u(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function f(S,_,T,w){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*T,S.scale.value=w*.5,_.map&&(S.map.value=_.map,t(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function d(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function m(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function g(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function y(S,_,T){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===ti&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=T.texture,S.transmissionSamplerSize.value.set(T.width,T.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,_){_.matcap&&(S.matcap.value=_.matcap)}function M(S,_){const T=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(T.matrixWorld),S.nearDistance.value=T.shadow.camera.near,S.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function $k(n,e,t,i){let s={},a={},l=[];const u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function f(T,w){const b=w.program;i.uniformBlockBinding(T,b)}function d(T,w){let b=s[T.id];b===void 0&&(E(T),b=p(T),s[T.id]=b,T.addEventListener("dispose",S));const N=w.program;i.updateUBOMapping(T,N);const L=e.render.frame;a[T.id]!==L&&(g(T),a[T.id]=L)}function p(T){const w=m();T.__bindingPointIndex=w;const b=n.createBuffer(),N=T.__size,L=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,N,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,b),b}function m(){for(let T=0;T<u;T++)if(l.indexOf(T)===-1)return l.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(T){const w=s[T.id],b=T.uniforms,N=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let L=0,I=b.length;L<I;L++){const B=Array.isArray(b[L])?b[L]:[b[L]];for(let P=0,C=B.length;P<C;P++){const k=B[P];if(y(k,L,P,N)===!0){const X=k.__offset,j=Array.isArray(k.value)?k.value:[k.value];let W=0;for(let Y=0;Y<j.length;Y++){const ee=j[Y],J=M(ee);typeof ee=="number"||typeof ee=="boolean"?(k.__data[0]=ee,n.bufferSubData(n.UNIFORM_BUFFER,X+W,k.__data)):ee.isMatrix3?(k.__data[0]=ee.elements[0],k.__data[1]=ee.elements[1],k.__data[2]=ee.elements[2],k.__data[3]=0,k.__data[4]=ee.elements[3],k.__data[5]=ee.elements[4],k.__data[6]=ee.elements[5],k.__data[7]=0,k.__data[8]=ee.elements[6],k.__data[9]=ee.elements[7],k.__data[10]=ee.elements[8],k.__data[11]=0):(ee.toArray(k.__data,W),W+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function y(T,w,b,N){const L=T.value,I=w+"_"+b;if(N[I]===void 0)return typeof L=="number"||typeof L=="boolean"?N[I]=L:N[I]=L.clone(),!0;{const B=N[I];if(typeof L=="number"||typeof L=="boolean"){if(B!==L)return N[I]=L,!0}else if(B.equals(L)===!1)return B.copy(L),!0}return!1}function E(T){const w=T.uniforms;let b=0;const N=16;for(let I=0,B=w.length;I<B;I++){const P=Array.isArray(w[I])?w[I]:[w[I]];for(let C=0,k=P.length;C<k;C++){const X=P[C],j=Array.isArray(X.value)?X.value:[X.value];for(let W=0,Y=j.length;W<Y;W++){const ee=j[W],J=M(ee),H=b%N,ae=H%J.boundary,Z=H+ae;b+=ae,Z!==0&&N-Z<J.storage&&(b+=N-Z),X.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=b,b+=J.storage}}}const L=b%N;return L>0&&(b+=N-L),T.__size=b,T.__cache={},this}function M(T){const w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),w}function S(T){const w=T.target;w.removeEventListener("dispose",S);const b=l.indexOf(w.__bindingPointIndex);l.splice(b,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete a[w.id]}function _(){for(const T in s)n.deleteBuffer(s[T]);l=[],s={},a={}}return{bind:f,update:d,dispose:_}}class Yk{constructor(e={}){const{canvas:t=R3(),context:i=null,depth:s=!0,stencil:a=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=l;const E=new Uint32Array(4),M=new Int32Array(4);let S=null,_=null;const T=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_s,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let N=!1;this._outputColorSpace=Mi;let L=0,I=0,B=null,P=-1,C=null;const k=new nn,X=new nn;let j=null;const W=new wt(0);let Y=0,ee=t.width,J=t.height,H=1,ae=null,Z=null;const O=new nn(0,0,ee,J),Q=new nn(0,0,ee,J);let Me=!1;const te=new tT;let de=!1,ve=!1;const pe=new rn,xe=new rn,Ce=new fe,Pe=new nn,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function Ve(){return B===null?H:1}let V=i;function xt(F,ne){return t.getContext(F,ne)}try{const F={alpha:!0,depth:s,stencil:a,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zg}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),V===null){const ne="webgl2";if(V=xt(ne,F),V===null)throw xt(ne)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let st,ft,Ke,Rt,$e,U,R,re,ge,ye,me,He,Re,Fe,it,we,Oe,Qe,Je,Ge,vt,ct,It,K;function De(){st=new rO(V),st.init(),ct=new zk(V,st),ft=new ZF(V,st,e,ct),Ke=new kk(V,st),ft.reverseDepthBuffer&&g&&Ke.buffers.depth.setReversed(!0),Rt=new aO(V),$e=new Tk,U=new Bk(V,st,Ke,$e,ft,ct,Rt),R=new JF(b),re=new iO(b),ge=new hN(V),It=new qF(V,ge),ye=new sO(V,ge,Rt,It),me=new cO(V,ye,ge,Rt),Je=new lO(V,ft,U),we=new QF($e),He=new wk(b,R,re,st,ft,It,we),Re=new Xk(b,$e),Fe=new Ak,it=new Ik(st),Qe=new YF(b,R,re,Ke,me,y,f),Oe=new Fk(b,me,ft),K=new $k(V,Rt,ft,Ke),Ge=new KF(V,st,Rt),vt=new oO(V,st,Rt),Rt.programs=He.programs,b.capabilities=ft,b.extensions=st,b.properties=$e,b.renderLists=Fe,b.shadowMap=Oe,b.state=Ke,b.info=Rt}De();const he=new Wk(b,V);this.xr=he,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const F=st.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){const F=st.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(F){F!==void 0&&(H=F,this.setSize(ee,J,!1))},this.getSize=function(F){return F.set(ee,J)},this.setSize=function(F,ne,ue=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=F,J=ne,t.width=Math.floor(F*H),t.height=Math.floor(ne*H),ue===!0&&(t.style.width=F+"px",t.style.height=ne+"px"),this.setViewport(0,0,F,ne)},this.getDrawingBufferSize=function(F){return F.set(ee*H,J*H).floor()},this.setDrawingBufferSize=function(F,ne,ue){ee=F,J=ne,H=ue,t.width=Math.floor(F*ue),t.height=Math.floor(ne*ue),this.setViewport(0,0,F,ne)},this.getCurrentViewport=function(F){return F.copy(k)},this.getViewport=function(F){return F.copy(O)},this.setViewport=function(F,ne,ue,oe){F.isVector4?O.set(F.x,F.y,F.z,F.w):O.set(F,ne,ue,oe),Ke.viewport(k.copy(O).multiplyScalar(H).round())},this.getScissor=function(F){return F.copy(Q)},this.setScissor=function(F,ne,ue,oe){F.isVector4?Q.set(F.x,F.y,F.z,F.w):Q.set(F,ne,ue,oe),Ke.scissor(X.copy(Q).multiplyScalar(H).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(F){Ke.setScissorTest(Me=F)},this.setOpaqueSort=function(F){ae=F},this.setTransparentSort=function(F){Z=F},this.getClearColor=function(F){return F.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(F=!0,ne=!0,ue=!0){let oe=0;if(F){let ie=!1;if(B!==null){const be=B.texture.format;ie=be===iv||be===nv||be===tv}if(ie){const be=B.texture.type,Le=be===Lr||be===uo||be===Ul||be===Fl||be===Jg||be===ev,ke=Qe.getClearColor(),We=Qe.getClearAlpha(),ot=ke.r,nt=ke.g,Xe=ke.b;Le?(E[0]=ot,E[1]=nt,E[2]=Xe,E[3]=We,V.clearBufferuiv(V.COLOR,0,E)):(M[0]=ot,M[1]=nt,M[2]=Xe,M[3]=We,V.clearBufferiv(V.COLOR,0,M))}else oe|=V.COLOR_BUFFER_BIT}ne&&(oe|=V.DEPTH_BUFFER_BIT),ue&&(oe|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Qe.dispose(),Fe.dispose(),it.dispose(),$e.dispose(),R.dispose(),re.dispose(),me.dispose(),It.dispose(),K.dispose(),He.dispose(),he.dispose(),he.removeEventListener("sessionstart",ho),he.removeEventListener("sessionend",zr),or.stop()};function _e(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const F=Rt.autoReset,ne=Oe.enabled,ue=Oe.autoUpdate,oe=Oe.needsUpdate,ie=Oe.type;De(),Rt.autoReset=F,Oe.enabled=ne,Oe.autoUpdate=ue,Oe.needsUpdate=oe,Oe.type=ie}function Ne(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function ut(F){const ne=F.target;ne.removeEventListener("dispose",ut),zt(ne)}function zt(F){ln(F),$e.remove(F)}function ln(F){const ne=$e.get(F).programs;ne!==void 0&&(ne.forEach(function(ue){He.releaseProgram(ue)}),F.isShaderMaterial&&He.releaseShaderCache(F))}this.renderBufferDirect=function(F,ne,ue,oe,ie,be){ne===null&&(ne=dt);const Le=ie.isMesh&&ie.matrixWorld.determinant()<0,ke=tc(F,ne,ue,oe,ie);Ke.setMaterial(oe,Le);let We=ue.index,ot=1;if(oe.wireframe===!0){if(We=ye.getWireframeAttribute(ue),We===void 0)return;ot=2}const nt=ue.drawRange,Xe=ue.attributes.position;let Et=nt.start*ot,ht=(nt.start+nt.count)*ot;be!==null&&(Et=Math.max(Et,be.start*ot),ht=Math.min(ht,(be.start+be.count)*ot)),We!==null?(Et=Math.max(Et,0),ht=Math.min(ht,We.count)):Xe!=null&&(Et=Math.max(Et,0),ht=Math.min(ht,Xe.count));const Kt=ht-Et;if(Kt<0||Kt===1/0)return;It.setup(ie,oe,ke,ue,We);let Wt,Tt=Ge;if(We!==null&&(Wt=ge.get(We),Tt=vt,Tt.setIndex(Wt)),ie.isMesh)oe.wireframe===!0?(Ke.setLineWidth(oe.wireframeLinewidth*Ve()),Tt.setMode(V.LINES)):Tt.setMode(V.TRIANGLES);else if(ie.isLine){let Ze=oe.linewidth;Ze===void 0&&(Ze=1),Ke.setLineWidth(Ze*Ve()),ie.isLineSegments?Tt.setMode(V.LINES):ie.isLineLoop?Tt.setMode(V.LINE_LOOP):Tt.setMode(V.LINE_STRIP)}else ie.isPoints?Tt.setMode(V.POINTS):ie.isSprite&&Tt.setMode(V.TRIANGLES);if(ie.isBatchedMesh)if(ie._multiDrawInstances!==null)ef("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount,ie._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))Tt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const Ze=ie._multiDrawStarts,Zt=ie._multiDrawCounts,St=ie._multiDrawCount,Tn=We?ge.get(We).bytesPerElement:1,Hr=$e.get(oe).currentProgram.getUniforms();for(let kn=0;kn<St;kn++)Hr.setValue(V,"_gl_DrawID",kn),Tt.render(Ze[kn]/Tn,Zt[kn])}else if(ie.isInstancedMesh)Tt.renderInstances(Et,Kt,ie.count);else if(ue.isInstancedBufferGeometry){const Ze=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Zt=Math.min(ue.instanceCount,Ze);Tt.renderInstances(Et,Kt,Zt)}else Tt.render(Et,Kt)};function bt(F,ne,ue){F.transparent===!0&&F.side===Tr&&F.forceSinglePass===!1?(F.side=ti,F.needsUpdate=!0,po(F,ne,ue),F.side=Es,F.needsUpdate=!0,po(F,ne,ue),F.side=Tr):po(F,ne,ue)}this.compile=function(F,ne,ue=null){ue===null&&(ue=F),_=it.get(ue),_.init(ne),w.push(_),ue.traverseVisible(function(ie){ie.isLight&&ie.layers.test(ne.layers)&&(_.pushLight(ie),ie.castShadow&&_.pushShadow(ie))}),F!==ue&&F.traverseVisible(function(ie){ie.isLight&&ie.layers.test(ne.layers)&&(_.pushLight(ie),ie.castShadow&&_.pushShadow(ie))}),_.setupLights();const oe=new Set;return F.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const be=ie.material;if(be)if(Array.isArray(be))for(let Le=0;Le<be.length;Le++){const ke=be[Le];bt(ke,ue,ie),oe.add(ke)}else bt(be,ue,ie),oe.add(be)}),_=w.pop(),oe},this.compileAsync=function(F,ne,ue=null){const oe=this.compile(F,ne,ue);return new Promise(ie=>{function be(){if(oe.forEach(function(Le){$e.get(Le).currentProgram.isReady()&&oe.delete(Le)}),oe.size===0){ie(F);return}setTimeout(be,10)}st.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Gn=null;function On(F){Gn&&Gn(F)}function ho(){or.stop()}function zr(){or.start()}const or=new iT;or.setAnimationLoop(On),typeof self<"u"&&or.setContext(self),this.setAnimationLoop=function(F){Gn=F,he.setAnimationLoop(F),F===null?or.stop():or.start()},he.addEventListener("sessionstart",ho),he.addEventListener("sessionend",zr),this.render=function(F,ne){if(ne!==void 0&&ne.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ne.parent===null&&ne.matrixWorldAutoUpdate===!0&&ne.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(ne),ne=he.getCamera()),F.isScene===!0&&F.onBeforeRender(b,F,ne,B),_=it.get(F,w.length),_.init(ne),w.push(_),xe.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),te.setFromProjectionMatrix(xe),ve=this.localClippingEnabled,de=we.init(this.clippingPlanes,ve),S=Fe.get(F,T.length),S.init(),T.push(S),he.enabled===!0&&he.isPresenting===!0){const be=b.xr.getDepthSensingMesh();be!==null&&ar(be,ne,-1/0,b.sortObjects)}ar(F,ne,0,b.sortObjects),S.finish(),b.sortObjects===!0&&S.sort(ae,Z),rt=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,rt&&Qe.addToRenderList(S,F),this.info.render.frame++,de===!0&&we.beginShadows();const ue=_.state.shadowsArray;Oe.render(ue,F,ne),de===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=S.opaque,ie=S.transmissive;if(_.setupLights(),ne.isArrayCamera){const be=ne.cameras;if(ie.length>0)for(let Le=0,ke=be.length;Le<ke;Le++){const We=be[Le];Ts(oe,ie,F,We)}rt&&Qe.render(F);for(let Le=0,ke=be.length;Le<ke;Le++){const We=be[Le];ws(S,F,We,We.viewport)}}else ie.length>0&&Ts(oe,ie,F,ne),rt&&Qe.render(F),ws(S,F,ne);B!==null&&I===0&&(U.updateMultisampleRenderTarget(B),U.updateRenderTargetMipmap(B)),F.isScene===!0&&F.onAfterRender(b,F,ne),It.resetDefaultState(),P=-1,C=null,w.pop(),w.length>0?(_=w[w.length-1],de===!0&&we.setGlobalState(b.clippingPlanes,_.state.camera)):_=null,T.pop(),T.length>0?S=T[T.length-1]:S=null};function ar(F,ne,ue,oe){if(F.visible===!1)return;if(F.layers.test(ne.layers)){if(F.isGroup)ue=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(ne);else if(F.isLight)_.pushLight(F),F.castShadow&&_.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||te.intersectsSprite(F)){oe&&Pe.setFromMatrixPosition(F.matrixWorld).applyMatrix4(xe);const Le=me.update(F),ke=F.material;ke.visible&&S.push(F,Le,ke,ue,Pe.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||te.intersectsObject(F))){const Le=me.update(F),ke=F.material;if(oe&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),Pe.copy(F.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Pe.copy(Le.boundingSphere.center)),Pe.applyMatrix4(F.matrixWorld).applyMatrix4(xe)),Array.isArray(ke)){const We=Le.groups;for(let ot=0,nt=We.length;ot<nt;ot++){const Xe=We[ot],Et=ke[Xe.materialIndex];Et&&Et.visible&&S.push(F,Le,Et,ue,Pe.z,Xe)}}else ke.visible&&S.push(F,Le,ke,ue,Pe.z,null)}}const be=F.children;for(let Le=0,ke=be.length;Le<ke;Le++)ar(be[Le],ne,ue,oe)}function ws(F,ne,ue,oe){const ie=F.opaque,be=F.transmissive,Le=F.transparent;_.setupLightsView(ue),de===!0&&we.setGlobalState(b.clippingPlanes,ue),oe&&Ke.viewport(k.copy(oe)),ie.length>0&&Vr(ie,ne,ue),be.length>0&&Vr(be,ne,ue),Le.length>0&&Vr(Le,ne,ue),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Ts(F,ne,ue,oe){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[oe.id]===void 0&&(_.state.transmissionRenderTarget[oe.id]=new fo(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?$l:Lr,minFilter:io,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace}));const be=_.state.transmissionRenderTarget[oe.id],Le=oe.viewport||k;be.setSize(Le.z*b.transmissionResolutionScale,Le.w*b.transmissionResolutionScale);const ke=b.getRenderTarget();b.setRenderTarget(be),b.getClearColor(W),Y=b.getClearAlpha(),Y<1&&b.setClearColor(16777215,.5),b.clear(),rt&&Qe.render(ue);const We=b.toneMapping;b.toneMapping=_s;const ot=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),_.setupLightsView(oe),de===!0&&we.setGlobalState(b.clippingPlanes,oe),Vr(F,ue,oe),U.updateMultisampleRenderTarget(be),U.updateRenderTargetMipmap(be),st.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Xe=0,Et=ne.length;Xe<Et;Xe++){const ht=ne[Xe],Kt=ht.object,Wt=ht.geometry,Tt=ht.material,Ze=ht.group;if(Tt.side===Tr&&Kt.layers.test(oe.layers)){const Zt=Tt.side;Tt.side=ti,Tt.needsUpdate=!0,Jl(Kt,ue,oe,Wt,Tt,Ze),Tt.side=Zt,Tt.needsUpdate=!0,nt=!0}}nt===!0&&(U.updateMultisampleRenderTarget(be),U.updateRenderTargetMipmap(be))}b.setRenderTarget(ke),b.setClearColor(W,Y),ot!==void 0&&(oe.viewport=ot),b.toneMapping=We}function Vr(F,ne,ue){const oe=ne.isScene===!0?ne.overrideMaterial:null;for(let ie=0,be=F.length;ie<be;ie++){const Le=F[ie],ke=Le.object,We=Le.geometry,ot=Le.group;let nt=Le.material;nt.allowOverride===!0&&oe!==null&&(nt=oe),ke.layers.test(ue.layers)&&Jl(ke,ne,ue,We,nt,ot)}}function Jl(F,ne,ue,oe,ie,be){F.onBeforeRender(b,ne,ue,oe,ie,be),F.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),ie.onBeforeRender(b,ne,ue,oe,F,be),ie.transparent===!0&&ie.side===Tr&&ie.forceSinglePass===!1?(ie.side=ti,ie.needsUpdate=!0,b.renderBufferDirect(ue,ne,oe,ie,F,be),ie.side=Es,ie.needsUpdate=!0,b.renderBufferDirect(ue,ne,oe,ie,F,be),ie.side=Tr):b.renderBufferDirect(ue,ne,oe,ie,F,be),F.onAfterRender(b,ne,ue,oe,ie,be)}function po(F,ne,ue){ne.isScene!==!0&&(ne=dt);const oe=$e.get(F),ie=_.state.lights,be=_.state.shadowsArray,Le=ie.state.version,ke=He.getParameters(F,ie.state,be,ne,ue),We=He.getProgramCacheKey(ke);let ot=oe.programs;oe.environment=F.isMeshStandardMaterial?ne.environment:null,oe.fog=ne.fog,oe.envMap=(F.isMeshStandardMaterial?re:R).get(F.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&F.envMap===null?ne.environmentRotation:F.envMapRotation,ot===void 0&&(F.addEventListener("dispose",ut),ot=new Map,oe.programs=ot);let nt=ot.get(We);if(nt!==void 0){if(oe.currentProgram===nt&&oe.lightsStateVersion===Le)return Xi(F,ke),nt}else ke.uniforms=He.getUniforms(F),F.onBeforeCompile(ke,b),nt=He.acquireProgram(ke,We),ot.set(We,nt),oe.uniforms=ke.uniforms;const Xe=oe.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Xe.clippingPlanes=we.uniform),Xi(F,ke),oe.needsLights=Of(F),oe.lightsStateVersion=Le,oe.needsLights&&(Xe.ambientLightColor.value=ie.state.ambient,Xe.lightProbe.value=ie.state.probe,Xe.directionalLights.value=ie.state.directional,Xe.directionalLightShadows.value=ie.state.directionalShadow,Xe.spotLights.value=ie.state.spot,Xe.spotLightShadows.value=ie.state.spotShadow,Xe.rectAreaLights.value=ie.state.rectArea,Xe.ltc_1.value=ie.state.rectAreaLTC1,Xe.ltc_2.value=ie.state.rectAreaLTC2,Xe.pointLights.value=ie.state.point,Xe.pointLightShadows.value=ie.state.pointShadow,Xe.hemisphereLights.value=ie.state.hemi,Xe.directionalShadowMap.value=ie.state.directionalShadowMap,Xe.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Xe.spotShadowMap.value=ie.state.spotShadowMap,Xe.spotLightMatrix.value=ie.state.spotLightMatrix,Xe.spotLightMap.value=ie.state.spotLightMap,Xe.pointShadowMap.value=ie.state.pointShadowMap,Xe.pointShadowMatrix.value=ie.state.pointShadowMatrix),oe.currentProgram=nt,oe.uniformsList=null,nt}function ec(F){if(F.uniformsList===null){const ne=F.currentProgram.getUniforms();F.uniformsList=tf.seqWithValue(ne.seq,F.uniforms)}return F.uniformsList}function Xi(F,ne){const ue=$e.get(F);ue.outputColorSpace=ne.outputColorSpace,ue.batching=ne.batching,ue.batchingColor=ne.batchingColor,ue.instancing=ne.instancing,ue.instancingColor=ne.instancingColor,ue.instancingMorph=ne.instancingMorph,ue.skinning=ne.skinning,ue.morphTargets=ne.morphTargets,ue.morphNormals=ne.morphNormals,ue.morphColors=ne.morphColors,ue.morphTargetsCount=ne.morphTargetsCount,ue.numClippingPlanes=ne.numClippingPlanes,ue.numIntersection=ne.numClipIntersection,ue.vertexAlphas=ne.vertexAlphas,ue.vertexTangents=ne.vertexTangents,ue.toneMapping=ne.toneMapping}function tc(F,ne,ue,oe,ie){ne.isScene!==!0&&(ne=dt),U.resetTextureUnits();const be=ne.fog,Le=oe.isMeshStandardMaterial?ne.environment:null,ke=B===null?b.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ea,We=(oe.isMeshStandardMaterial?re:R).get(oe.envMap||Le),ot=oe.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,nt=!!ue.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Xe=!!ue.morphAttributes.position,Et=!!ue.morphAttributes.normal,ht=!!ue.morphAttributes.color;let Kt=_s;oe.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Kt=b.toneMapping);const Wt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Tt=Wt!==void 0?Wt.length:0,Ze=$e.get(oe),Zt=_.state.lights;if(de===!0&&(ve===!0||F!==C)){const Sn=F===C&&oe.id===P;we.setState(oe,F,Sn)}let St=!1;oe.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Zt.state.version||Ze.outputColorSpace!==ke||ie.isBatchedMesh&&Ze.batching===!1||!ie.isBatchedMesh&&Ze.batching===!0||ie.isBatchedMesh&&Ze.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&Ze.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&Ze.instancing===!1||!ie.isInstancedMesh&&Ze.instancing===!0||ie.isSkinnedMesh&&Ze.skinning===!1||!ie.isSkinnedMesh&&Ze.skinning===!0||ie.isInstancedMesh&&Ze.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Ze.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Ze.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Ze.instancingMorph===!1&&ie.morphTexture!==null||Ze.envMap!==We||oe.fog===!0&&Ze.fog!==be||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==we.numPlanes||Ze.numIntersection!==we.numIntersection)||Ze.vertexAlphas!==ot||Ze.vertexTangents!==nt||Ze.morphTargets!==Xe||Ze.morphNormals!==Et||Ze.morphColors!==ht||Ze.toneMapping!==Kt||Ze.morphTargetsCount!==Tt)&&(St=!0):(St=!0,Ze.__version=oe.version);let Tn=Ze.currentProgram;St===!0&&(Tn=po(oe,ne,ie));let Hr=!1,kn=!1,lr=!1;const Ot=Tn.getUniforms(),bn=Ze.uniforms;if(Ke.useProgram(Tn.program)&&(Hr=!0,kn=!0,lr=!0),oe.id!==P&&(P=oe.id,kn=!0),Hr||C!==F){Ke.buffers.depth.getReversed()?(pe.copy(F.projectionMatrix),D3(pe),L3(pe),Ot.setValue(V,"projectionMatrix",pe)):Ot.setValue(V,"projectionMatrix",F.projectionMatrix),Ot.setValue(V,"viewMatrix",F.matrixWorldInverse);const pn=Ot.map.cameraPosition;pn!==void 0&&pn.setValue(V,Ce.setFromMatrixPosition(F.matrixWorld)),ft.logarithmicDepthBuffer&&Ot.setValue(V,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Ot.setValue(V,"isOrthographic",F.isOrthographicCamera===!0),C!==F&&(C=F,kn=!0,lr=!0)}if(ie.isSkinnedMesh){Ot.setOptional(V,ie,"bindMatrix"),Ot.setOptional(V,ie,"bindMatrixInverse");const Sn=ie.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Ot.setValue(V,"boneTexture",Sn.boneTexture,U))}ie.isBatchedMesh&&(Ot.setOptional(V,ie,"batchingTexture"),Ot.setValue(V,"batchingTexture",ie._matricesTexture,U),Ot.setOptional(V,ie,"batchingIdTexture"),Ot.setValue(V,"batchingIdTexture",ie._indirectTexture,U),Ot.setOptional(V,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Ot.setValue(V,"batchingColorTexture",ie._colorsTexture,U));const hn=ue.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Je.update(ie,ue,Tn),(kn||Ze.receiveShadow!==ie.receiveShadow)&&(Ze.receiveShadow=ie.receiveShadow,Ot.setValue(V,"receiveShadow",ie.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(bn.envMap.value=We,bn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&ne.environment!==null&&(bn.envMapIntensity.value=ne.environmentIntensity),kn&&(Ot.setValue(V,"toneMappingExposure",b.toneMappingExposure),Ze.needsLights&&nc(bn,lr),be&&oe.fog===!0&&Re.refreshFogUniforms(bn,be),Re.refreshMaterialUniforms(bn,oe,H,J,_.state.transmissionRenderTarget[F.id]),tf.upload(V,ec(Ze),bn,U)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(tf.upload(V,ec(Ze),bn,U),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Ot.setValue(V,"center",ie.center),Ot.setValue(V,"modelViewMatrix",ie.modelViewMatrix),Ot.setValue(V,"normalMatrix",ie.normalMatrix),Ot.setValue(V,"modelMatrix",ie.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const Sn=oe.uniformsGroups;for(let pn=0,At=Sn.length;pn<At;pn++){const $i=Sn[pn];K.update($i,Tn),K.bind($i,Tn)}}return Tn}function nc(F,ne){F.ambientLightColor.needsUpdate=ne,F.lightProbe.needsUpdate=ne,F.directionalLights.needsUpdate=ne,F.directionalLightShadows.needsUpdate=ne,F.pointLights.needsUpdate=ne,F.pointLightShadows.needsUpdate=ne,F.spotLights.needsUpdate=ne,F.spotLightShadows.needsUpdate=ne,F.rectAreaLights.needsUpdate=ne,F.hemisphereLights.needsUpdate=ne}function Of(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(F,ne,ue){const oe=$e.get(F);oe.__autoAllocateDepthBuffer=F.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),$e.get(F.texture).__webglTexture=ne,$e.get(F.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:ue,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(F,ne){const ue=$e.get(F);ue.__webglFramebuffer=ne,ue.__useDefaultFramebuffer=ne===void 0};const ic=V.createFramebuffer();this.setRenderTarget=function(F,ne=0,ue=0){B=F,L=ne,I=ue;let oe=!0,ie=null,be=!1,Le=!1;if(F){const We=$e.get(F);if(We.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(V.FRAMEBUFFER,null),oe=!1;else if(We.__webglFramebuffer===void 0)U.setupRenderTarget(F);else if(We.__hasExternalTextures)U.rebindTextures(F,$e.get(F.texture).__webglTexture,$e.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){const Xe=F.depthTexture;if(We.__boundDepthTexture!==Xe){if(Xe!==null&&$e.has(Xe)&&(F.width!==Xe.image.width||F.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(F)}}const ot=F.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Le=!0);const nt=$e.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(nt[ne])?ie=nt[ne][ue]:ie=nt[ne],be=!0):F.samples>0&&U.useMultisampledRTT(F)===!1?ie=$e.get(F).__webglMultisampledFramebuffer:Array.isArray(nt)?ie=nt[ue]:ie=nt,k.copy(F.viewport),X.copy(F.scissor),j=F.scissorTest}else k.copy(O).multiplyScalar(H).floor(),X.copy(Q).multiplyScalar(H).floor(),j=Me;if(ue!==0&&(ie=ic),Ke.bindFramebuffer(V.FRAMEBUFFER,ie)&&oe&&Ke.drawBuffers(F,ie),Ke.viewport(k),Ke.scissor(X),Ke.setScissorTest(j),be){const We=$e.get(F.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+ne,We.__webglTexture,ue)}else if(Le){const We=$e.get(F.texture),ot=ne;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,We.__webglTexture,ue,ot)}else if(F!==null&&ue!==0){const We=$e.get(F.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,We.__webglTexture,ue)}P=-1},this.readRenderTargetPixels=function(F,ne,ue,oe,ie,be,Le){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=$e.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Le!==void 0&&(ke=ke[Le]),ke){Ke.bindFramebuffer(V.FRAMEBUFFER,ke);try{const We=F.texture,ot=We.format,nt=We.type;if(!ft.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ne>=0&&ne<=F.width-oe&&ue>=0&&ue<=F.height-ie&&V.readPixels(ne,ue,oe,ie,ct.convert(ot),ct.convert(nt),be)}finally{const We=B!==null?$e.get(B).__webglFramebuffer:null;Ke.bindFramebuffer(V.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(F,ne,ue,oe,ie,be,Le){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=$e.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Le!==void 0&&(ke=ke[Le]),ke)if(ne>=0&&ne<=F.width-oe&&ue>=0&&ue<=F.height-ie){Ke.bindFramebuffer(V.FRAMEBUFFER,ke);const We=F.texture,ot=We.format,nt=We.type;if(!ft.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Xe),V.bufferData(V.PIXEL_PACK_BUFFER,be.byteLength,V.STREAM_READ),V.readPixels(ne,ue,oe,ie,ct.convert(ot),ct.convert(nt),0);const Et=B!==null?$e.get(B).__webglFramebuffer:null;Ke.bindFramebuffer(V.FRAMEBUFFER,Et);const ht=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await P3(V,ht,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Xe),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,be),V.deleteBuffer(Xe),V.deleteSync(ht),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(F,ne=null,ue=0){const oe=Math.pow(2,-ue),ie=Math.floor(F.image.width*oe),be=Math.floor(F.image.height*oe),Le=ne!==null?ne.x:0,ke=ne!==null?ne.y:0;U.setTexture2D(F,0),V.copyTexSubImage2D(V.TEXTURE_2D,ue,0,0,Le,ke,ie,be),Ke.unbindTexture()};const rc=V.createFramebuffer(),sc=V.createFramebuffer();this.copyTextureToTexture=function(F,ne,ue=null,oe=null,ie=0,be=null){be===null&&(ie!==0?(ef("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=ie,ie=0):be=0);let Le,ke,We,ot,nt,Xe,Et,ht,Kt;const Wt=F.isCompressedTexture?F.mipmaps[be]:F.image;if(ue!==null)Le=ue.max.x-ue.min.x,ke=ue.max.y-ue.min.y,We=ue.isBox3?ue.max.z-ue.min.z:1,ot=ue.min.x,nt=ue.min.y,Xe=ue.isBox3?ue.min.z:0;else{const hn=Math.pow(2,-ie);Le=Math.floor(Wt.width*hn),ke=Math.floor(Wt.height*hn),F.isDataArrayTexture?We=Wt.depth:F.isData3DTexture?We=Math.floor(Wt.depth*hn):We=1,ot=0,nt=0,Xe=0}oe!==null?(Et=oe.x,ht=oe.y,Kt=oe.z):(Et=0,ht=0,Kt=0);const Tt=ct.convert(ne.format),Ze=ct.convert(ne.type);let Zt;ne.isData3DTexture?(U.setTexture3D(ne,0),Zt=V.TEXTURE_3D):ne.isDataArrayTexture||ne.isCompressedArrayTexture?(U.setTexture2DArray(ne,0),Zt=V.TEXTURE_2D_ARRAY):(U.setTexture2D(ne,0),Zt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,ne.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,ne.unpackAlignment);const St=V.getParameter(V.UNPACK_ROW_LENGTH),Tn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Hr=V.getParameter(V.UNPACK_SKIP_PIXELS),kn=V.getParameter(V.UNPACK_SKIP_ROWS),lr=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Wt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Wt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ot),V.pixelStorei(V.UNPACK_SKIP_ROWS,nt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Xe);const Ot=F.isDataArrayTexture||F.isData3DTexture,bn=ne.isDataArrayTexture||ne.isData3DTexture;if(F.isDepthTexture){const hn=$e.get(F),Sn=$e.get(ne),pn=$e.get(hn.__renderTarget),At=$e.get(Sn.__renderTarget);Ke.bindFramebuffer(V.READ_FRAMEBUFFER,pn.__webglFramebuffer),Ke.bindFramebuffer(V.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let $i=0;$i<We;$i++)Ot&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,$e.get(F).__webglTexture,ie,Xe+$i),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,$e.get(ne).__webglTexture,be,Kt+$i)),V.blitFramebuffer(ot,nt,Le,ke,Et,ht,Le,ke,V.DEPTH_BUFFER_BIT,V.NEAREST);Ke.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(ie!==0||F.isRenderTargetTexture||$e.has(F)){const hn=$e.get(F),Sn=$e.get(ne);Ke.bindFramebuffer(V.READ_FRAMEBUFFER,rc),Ke.bindFramebuffer(V.DRAW_FRAMEBUFFER,sc);for(let pn=0;pn<We;pn++)Ot?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,hn.__webglTexture,ie,Xe+pn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,hn.__webglTexture,ie),bn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Sn.__webglTexture,be,Kt+pn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Sn.__webglTexture,be),ie!==0?V.blitFramebuffer(ot,nt,Le,ke,Et,ht,Le,ke,V.COLOR_BUFFER_BIT,V.NEAREST):bn?V.copyTexSubImage3D(Zt,be,Et,ht,Kt+pn,ot,nt,Le,ke):V.copyTexSubImage2D(Zt,be,Et,ht,ot,nt,Le,ke);Ke.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else bn?F.isDataTexture||F.isData3DTexture?V.texSubImage3D(Zt,be,Et,ht,Kt,Le,ke,We,Tt,Ze,Wt.data):ne.isCompressedArrayTexture?V.compressedTexSubImage3D(Zt,be,Et,ht,Kt,Le,ke,We,Tt,Wt.data):V.texSubImage3D(Zt,be,Et,ht,Kt,Le,ke,We,Tt,Ze,Wt):F.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,be,Et,ht,Le,ke,Tt,Ze,Wt.data):F.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,be,Et,ht,Wt.width,Wt.height,Tt,Wt.data):V.texSubImage2D(V.TEXTURE_2D,be,Et,ht,Le,ke,Tt,Ze,Wt);V.pixelStorei(V.UNPACK_ROW_LENGTH,St),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Tn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Hr),V.pixelStorei(V.UNPACK_SKIP_ROWS,kn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,lr),be===0&&ne.generateMipmaps&&V.generateMipmap(Zt),Ke.unbindTexture()},this.copyTextureToTexture3D=function(F,ne,ue=null,oe=null,ie=0){return ef('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(F,ne,ue,oe,ie)},this.initRenderTarget=function(F){$e.get(F).__webglFramebuffer===void 0&&U.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?U.setTextureCube(F,0):F.isData3DTexture?U.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?U.setTexture2DArray(F,0):U.setTexture2D(F,0),Ke.unbindTexture()},this.resetState=function(){L=0,I=0,B=null,Ke.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ar}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Dt._getUnpackColorSpace()}}const qk=()=>{const n=D.useRef(null),e=D.useRef(null),t=D.useRef(null),i=D.useRef(null),s=D.useRef(null);return D.useEffect(()=>{if(!n.current)return;const a=new iN;e.current=a;const l=new wi(75,window.innerWidth/window.innerHeight,.1,1e3);l.position.z=100,t.current=l;const u=new Yk({alpha:!0,antialias:!0});u.setSize(window.innerWidth,window.innerHeight),u.setClearColor(0,0),n.current.appendChild(u.domElement),i.current=u;const f=new Br,d=2e3,p=new Float32Array(d*3),m=new Float32Array(d*3),g=new Float32Array(d),y=[new wt("#1e3c72"),new wt("#2a5298"),new wt("#4caf50"),new wt("#006400"),new wt("#00bfae"),new wt("#0288d1")];for(let L=0;L<d*3;L+=3){const I=(Math.random()-.5)*200,B=(Math.random()-.5)*200,P=(Math.random()-.5)*200;p[L]=I,p[L+1]=B,p[L+2]=P;const C=y[Math.floor(Math.random()*y.length)];m[L]=C.r,m[L+1]=C.g,m[L+2]=C.b,g[L/3]=Math.random()*1.5+.5}f.setAttribute("position",new fi(p,3)),f.setAttribute("color",new fi(m,3)),f.setAttribute("size",new fi(g,1));const E=new Nr({vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:um}),M=new aN(f,E);a.add(M),s.current=M;const S=()=>{!t.current||!i.current||(t.current.aspect=window.innerWidth/window.innerHeight,t.current.updateProjectionMatrix(),i.current.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",S);const _=new Ut,T=new Ut,w=L=>{T.x=L.clientX/window.innerWidth*2-1,T.y=-(L.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",w);let b=0;const N=()=>{if(b=requestAnimationFrame(N),!s.current||!i.current||!e.current||!t.current)return;_.x+=(T.x-_.x)*.05,_.y+=(T.y-_.y)*.05,s.current.rotation.x=_.y*.3,s.current.rotation.y=_.x*.3,s.current.rotation.z+=.001;const L=s.current.geometry.attributes.position.array;for(let I=0;I<L.length;I+=3)L[I+1]+=Math.sin(b*.001+L[I]*.01)*.01;s.current.geometry.attributes.position.needsUpdate=!0,i.current.render(e.current,t.current)};return N(),()=>{var L,I,B;window.removeEventListener("resize",S),window.removeEventListener("mousemove",w),cancelAnimationFrame(b),i.current&&n.current&&n.current.removeChild(i.current.domElement),s.current&&e.current&&e.current.remove(s.current),(L=s.current)!=null&&L.geometry&&s.current.geometry.dispose(),(I=s.current)!=null&&I.material&&s.current.material.dispose(),(B=i.current)==null||B.dispose()}},[]),G.jsx("div",{ref:n,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:0,pointerEvents:"none"}})},Kk=()=>{const[n,e]=D.useState(0),t=D.useRef(!1),i=D.useRef(null),s=D.useCallback(()=>{if(!i.current)return 0;const l=i.current.scrollHeight-innerHeight,u=scrollY;return l>0?u/l:0},[]),a=D.useCallback(()=>{t.current||(requestAnimationFrame(()=>{e(s()),t.current=!1}),t.current=!0)},[s]);return D.useLayoutEffect(()=>(i.current=document.documentElement,addEventListener("scroll",a,{passive:!0}),a(),()=>removeEventListener("scroll",a)),[a]),G.jsx("div",{className:"fixed top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] origin-left z-[1001] transition-transform duration-200 ease-in-out",style:{transform:`scaleX(${n})`}})},Zk=({title:n="PENN.L.ZHOU | Code & Create",description:e="pp3ng - 周罗鹏的个人网站 - 探索技术与创意的交汇点。分享系统架构、摄影作品与技术见解，记录持续学习与成长的旅程。",image:t="https://Pp3ng.github.io/photos/my_photo.jpg",url:i="https://Pp3ng.github.io",type:s="website",lang:a="en"})=>G.jsxs(Eb,{htmlAttributes:{lang:a},children:[G.jsx("meta",{charSet:"UTF-8"}),G.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),G.jsx("title",{children:n}),G.jsx("meta",{name:"description",content:e}),G.jsx("meta",{name:"author",content:"Penn.L.Zhou"}),G.jsx("meta",{property:"og:title",content:n}),G.jsx("meta",{property:"og:description",content:e}),G.jsx("meta",{property:"og:image",content:t}),G.jsx("meta",{property:"og:url",content:i}),G.jsx("meta",{property:"og:type",content:s}),G.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),G.jsx("meta",{name:"twitter:title",content:n}),G.jsx("meta",{name:"twitter:description",content:e}),G.jsx("meta",{name:"twitter:image",content:t}),G.jsx("link",{rel:"icon",href:"/photos/icon.ico",type:"image/x-icon"}),G.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap",rel:"stylesheet"}),G.jsx("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/devicon@2.14.0/devicon.min.css"}),G.jsx("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"})]}),Qk=()=>(D.useEffect(()=>{bb.init({duration:800,once:!1,easing:"ease-out-cubic"})},[]),G.jsxs(BS,{children:[G.jsx(Zk,{}),G.jsx(qk,{}),G.jsx(Kk,{}),G.jsx(LA,{}),G.jsxs("main",{children:[G.jsx(SD,{}),G.jsx(ED,{}),G.jsx(wD,{}),G.jsx(bD,{}),G.jsx(hI,{}),G.jsx(EI,{}),G.jsx(MI,{}),G.jsx(TI,{}),G.jsx(UI,{})]}),G.jsx(FI,{}),G.jsx(BI,{})]})),Jk=document.getElementById("root"),eB=q1.createRoot(Jk);eB.render(G.jsx(Qk,{}));
