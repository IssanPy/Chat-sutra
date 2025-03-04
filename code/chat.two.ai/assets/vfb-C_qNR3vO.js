import{_ as e}from"./vui-BlaBwXfb.js";var t={};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(n(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const t=n[e.charAt(s++)],o=s<e.length?n[e.charAt(s)]:0;++s;const a=s<e.length?n[e.charAt(s)]:64;++s;const c=s<e.length?n[e.charAt(s)]:64;if(++s,null==t||null==o||null==a||null==c)throw new i;const u=t<<2|o>>4;if(r.push(u),64!==a){const e=o<<4&240|a>>2;if(r.push(e),64!==c){const e=a<<6&192|c;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class i extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const s=function(e){return function(e){const t=n(e);return r.encodeByteArray(t,!0)}(e).replace(/\./g,"")},o=function(e){try{return r.decodeString(e,!0)}catch(t){}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,c=()=>{try{return a()||(()=>{if("undefined"==typeof process)return;const e=t.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&o(e[1]);return t&&JSON.parse(t)})()}catch(e){return}},u=()=>{var e;return null===(e=c())||void 0===e?void 0:e.config},l=e=>{var t;return null===(t=c())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function f(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function p(){return!function(){var e;const t=null===(e=c())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(n){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function g(){try{return"object"==typeof indexedDB}catch(e){return!1}}function m(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}class y extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,y.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,v.prototype.create)}}class v{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(w,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new y(r,o,n)}}const w=/\{\$([^}]+)}/g;function I(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(b(n)&&b(s)){if(!I(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function b(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}class _{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=E),void 0===r.error&&(r.error=E),void 0===r.complete&&(r.complete=E);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!=typeof console&&console.error}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function E(){}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e,t=1e3,n=2){const r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e){return e&&e._delegate?e._delegate:e}class k{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new h;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:A})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=A){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=A){return this.instances.has(e)}getOptions(e=A){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(i)&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===A?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}var r;return n||null}normalizeInstanceIdentifier(e=A){return this.component?this.component.multipleInstances?e:A:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class D{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new N(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x,R;(R=x||(x={}))[R.DEBUG=0]="DEBUG",R[R.VERBOSE=1]="VERBOSE",R[R.INFO=2]="INFO",R[R.WARN=3]="WARN",R[R.ERROR=4]="ERROR",R[R.SILENT=5]="SILENT";const O={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},P=x.INFO,L={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},M=(e,t,...n)=>{if(t<e.logLevel)return;(new Date).toISOString();if(!L[t])throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class V{constructor(e){this.name=e,this._logLevel=P,this._logHandler=M,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in x))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?O[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...e),this._logHandler(this,x.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...e),this._logHandler(this,x.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,x.INFO,...e),this._logHandler(this,x.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,x.WARN,...e),this._logHandler(this,x.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...e),this._logHandler(this,x.ERROR,...e)}}let F,U;const j=new WeakMap,B=new WeakMap,q=new WeakMap,z=new WeakMap,$=new WeakMap;let K={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return B.get(e);if("objectStoreNames"===t)return e.objectStoreNames||q.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return W(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function G(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(U||(U=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Q(this),t),W(j.get(this))}:function(...t){return W(e.apply(Q(this),t))}:function(t,...n){const r=e.call(Q(this),t,...n);return q.set(r,t.sort?t.sort():[t]),W(r)}}function H(e){return"function"==typeof e?G(e):(e instanceof IDBTransaction&&function(e){if(B.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));B.set(e,t)}(e),t=e,(F||(F=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,K):e);var t}function W(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(W(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&j.set(t,e)})).catch((()=>{})),$.set(t,e),t}(e);if(z.has(e))return z.get(e);const t=H(e);return t!==e&&(z.set(e,t),$.set(t,e)),t}const Q=e=>$.get(e);function J(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=W(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(W(o.result),e.oldVersion,e.newVersion,W(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const Y=["get","getKey","getAll","getAllKeys","count"],X=["put","add","delete","clear"],Z=new Map;function ee(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Z.get(t))return Z.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=X.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Y.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return Z.set(t,s),s}K=(e=>({...e,get:(t,n,r)=>ee(t,n)||e.get(t,n,r),has:(t,n)=>!!ee(t,n)||e.has(t,n)}))(K);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class te{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const ne="@firebase/app",re="0.11.1",ie=new V("@firebase/app"),se="@firebase/app-compat",oe="@firebase/analytics-compat",ae="@firebase/analytics",ce="@firebase/app-check-compat",ue="@firebase/app-check",le="@firebase/auth",he="@firebase/auth-compat",de="@firebase/database",fe="@firebase/data-connect",pe="@firebase/database-compat",ge="@firebase/functions",me="@firebase/functions-compat",ye="@firebase/installations",ve="@firebase/installations-compat",we="@firebase/messaging",Ie="@firebase/messaging-compat",be="@firebase/performance",Te="@firebase/performance-compat",_e="@firebase/remote-config",Ee="@firebase/remote-config-compat",Se="@firebase/storage",Ce="@firebase/storage-compat",ke="@firebase/firestore",Ae="@firebase/vertexai",Ne="@firebase/firestore-compat",De="firebase",xe="[DEFAULT]",Re={[ne]:"fire-core",[se]:"fire-core-compat",[ae]:"fire-analytics",[oe]:"fire-analytics-compat",[ue]:"fire-app-check",[ce]:"fire-app-check-compat",[le]:"fire-auth",[he]:"fire-auth-compat",[de]:"fire-rtdb",[fe]:"fire-data-connect",[pe]:"fire-rtdb-compat",[ge]:"fire-fn",[me]:"fire-fn-compat",[ye]:"fire-iid",[ve]:"fire-iid-compat",[we]:"fire-fcm",[Ie]:"fire-fcm-compat",[be]:"fire-perf",[Te]:"fire-perf-compat",[_e]:"fire-rc",[Ee]:"fire-rc-compat",[Se]:"fire-gcs",[Ce]:"fire-gcs-compat",[ke]:"fire-fst",[Ne]:"fire-fst-compat",[Ae]:"fire-vertex","fire-js":"fire-js",[De]:"fire-js-all"},Oe=new Map,Pe=new Map,Le=new Map;function Me(e,t){try{e.container.addComponent(t)}catch(n){ie.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ve(e){const t=e.name;if(Le.has(t))return ie.debug(`There were multiple attempts to register component ${t}.`),!1;Le.set(t,e);for(const n of Oe.values())Me(n,e);for(const n of Pe.values())Me(n,e);return!0}function Fe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Ue(e){return null!=e&&void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je=new v("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Be{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new k("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw je.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe="11.3.1";function ze(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:xe,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw je.create("bad-app-name",{appName:String(i)});if(n||(n=u()),!n)throw je.create("no-options");const s=Oe.get(i);if(s){if(I(n,s.options)&&I(r,s.config))return s;throw je.create("duplicate-app",{appName:i})}const o=new D(i);for(const c of Le.values())o.addComponent(c);const a=new Be(n,r,o);return Oe.set(i,a),a}function $e(e=xe){const t=Oe.get(e);if(!t&&e===xe&&u())return ze();if(!t)throw je.create("no-app",{appName:e});return t}function Ke(e,t,n){var r;let i=null!==(r=Re[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void ie.warn(e.join(" "))}Ve(new k(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge="firebase-heartbeat-store";let He=null;function We(){return He||(He=J("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(Ge)}catch(n){}}}).catch((e=>{throw je.create("idb-open",{originalErrorMessage:e.message})}))),He}async function Qe(e,t){try{const n=(await We()).transaction(Ge,"readwrite"),r=n.objectStore(Ge);await r.put(t,Je(e)),await n.done}catch(n){if(n instanceof y)ie.warn(n.message);else{const e=je.create("idb-set",{originalErrorMessage:null==n?void 0:n.message});ie.warn(e.message)}}}function Je(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ze(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Xe();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some((e=>e.date===r)))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){ie.warn(n)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Xe(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),et(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),et(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=s(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return ie.warn(t),""}}}function Xe(){return(new Date).toISOString().substring(0,10)}class Ze{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!g()&&m().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await We()).transaction(Ge),n=await t.objectStore(Ge).get(Je(e));return await t.done,n}catch(t){if(t instanceof y)ie.warn(t.message);else{const e=je.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});ie.warn(e.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Qe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Qe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function et(e){return s(JSON.stringify({version:2,heartbeats:e})).length}var tt;tt="",Ve(new k("platform-logger",(e=>new te(e)),"PRIVATE")),Ve(new k("heartbeat",(e=>new Ye(e)),"PRIVATE")),Ke(ne,re,tt),Ke(ne,re,"esm2017"),Ke("fire-js","");const nt="@firebase/installations",rt="0.6.12",it=1e4,st=`w:${rt}`,ot="FIS_v2",at=36e5,ct=new v("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function ut(e){return e instanceof y&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function ht(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function dt(e,t){const n=(await t.json()).error;return ct.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function ft({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function pt(e,{refreshToken:t}){const n=ft(e);return n.append("Authorization",function(e){return`${ot} ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),n}async function gt(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mt(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yt=/^[cdef][\w-]{21}$/;function vt(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){const t=(n=e,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return yt.test(t)?t:""}catch(e){return""}}function wt(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=new Map;function bt(e,t){const n=wt(e);Tt(n,t),function(e,t){const n=function(){!_t&&"BroadcastChannel"in self&&(_t=new BroadcastChannel("[Firebase] FID Change"),_t.onmessage=e=>{Tt(e.data.key,e.data.fid)});return _t}();n&&n.postMessage({key:e,fid:t});0===It.size&&_t&&(_t.close(),_t=null)}(n,t)}function Tt(e,t){const n=It.get(e);if(n)for(const r of n)r(t)}let _t=null;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Et="firebase-installations-store";let St=null;function Ct(){return St||(St=J("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Et)}})),St}async function kt(e,t){const n=wt(e),r=(await Ct()).transaction(Et,"readwrite"),i=r.objectStore(Et),s=await i.get(n);return await i.put(t,n),await r.done,s&&s.fid===t.fid||bt(e,t.fid),t}async function At(e){const t=wt(e),n=(await Ct()).transaction(Et,"readwrite");await n.objectStore(Et).delete(t),await n.done}async function Nt(e,t){const n=wt(e),r=(await Ct()).transaction(Et,"readwrite"),i=r.objectStore(Et),s=await i.get(n),o=t(s);return void 0===o?await i.delete(n):await i.put(o,n),await r.done,!o||s&&s.fid===o.fid||bt(e,o.fid),o}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dt(e){let t;const n=await Nt(e.appConfig,(n=>{const r=function(e){const t=e||{fid:vt(),registrationStatus:0};return Ot(t)}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(ct.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=lt(e),i=ft(e),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const o={fid:n,authVersion:ot,appId:e.appId,sdkVersion:st},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await gt((()=>fetch(r,a)));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:ht(e.authToken)}}throw await dt("Create Installation",c)}(e,t);return kt(e.appConfig,n)}catch(n){throw ut(n)&&409===n.customData.serverCode?await At(e.appConfig):await kt(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:xt(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function xt(e){let t=await Rt(e.appConfig);for(;1===t.registrationStatus;)await mt(100),t=await Rt(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Dt(e);return n||t}return t}function Rt(e){return Nt(e,(e=>{if(!e)throw ct.create("installation-not-found");return Ot(e)}))}function Ot(e){return 1===(t=e).registrationStatus&&t.registrationTime+it<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function Pt({appConfig:e,heartbeatServiceProvider:t},n){const r=function(e,{fid:t}){return`${lt(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,n),i=pt(e,n),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const o={installation:{sdkVersion:st,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await gt((()=>fetch(r,a)));if(c.ok){return ht(await c.json())}throw await dt("Generate Auth Token",c)}async function Lt(e,t=!1){let n;const r=await Nt(e.appConfig,(r=>{if(!Vt(r))throw ct.create("not-registered");const i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+at}(e)}(i))return r;if(1===i.requestStatus)return n=async function(e,t){let n=await Mt(e.appConfig);for(;1===n.authToken.requestStatus;)await mt(100),n=await Mt(e.appConfig);const r=n.authToken;return 0===r.requestStatus?Lt(e,t):r}(e,t),r;{if(!navigator.onLine)throw ct.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await Pt(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await kt(e.appConfig,r),n}catch(n){if(!ut(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await kt(e.appConfig,n)}else await At(e.appConfig);throw n}}(e,t),t}}));return n?await n:r.authToken}function Mt(e){return Nt(e,(e=>{if(!Vt(e))throw ct.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+it<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}))}function Vt(e){return void 0!==e&&2===e.registrationStatus}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ft(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await Dt(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n);return(await Lt(n,t)).token}function Ut(e){return ct.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="installations",Bt=e=>{const t=Fe(e.getProvider("app").getImmediate(),jt).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await Dt(t);return r?r.catch(console.error):Lt(t).catch(console.error),n.fid}(t),getToken:e=>Ft(t,e)}};Ve(new k(jt,(e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw Ut("App Configuration");if(!e.name)throw Ut("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ut(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:Fe(t,"heartbeat"),_delete:()=>Promise.resolve()}}),"PUBLIC")),Ve(new k("installations-internal",Bt,"PRIVATE")),Ke(nt,rt),Ke(nt,rt,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qt="analytics",zt="https://www.googletagmanager.com/gtag/js",$t=new V("@firebase/analytics"),Kt=new v("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gt(e){if(!e.startsWith(zt)){const t=Kt.create("invalid-gtag-resource",{gtagURL:e});return $t.warn(t.message),""}return e}function Ht(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function Wt(e,t){const n=function(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}("firebase-js-sdk-policy",{createScriptURL:Gt}),r=document.createElement("script"),i=`${zt}?l=${e}&id=${t}`;r.src=n?null==n?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Qt(e,t,n,r){return async function(i,...s){try{if("event"===i){const[r,i]=s;await async function(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);const r=await Ht(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){s=[];break}s.push(i)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){$t.error(s)}}(e,t,n,r,i)}else if("config"===i){const[i,o]=s;await async function(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const e=(await Ht(n)).find((e=>e.measurementId===i));e&&await t[e.appId]}}catch(a){$t.error(a)}e("config",i,s)}(e,t,n,r,i,o)}else if("consent"===i){const[t,n]=s;e("consent",t,n)}else if("get"===i){const[t,n,r]=s;e("get",t,n,r)}else if("set"===i){const[t]=s;e("set",t)}else e(i,...s)}catch(o){$t.error(o)}}}const Jt=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function Yt(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Xt(e,t=Jt,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Kt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Kt.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new en;return setTimeout((async()=>{a.abort()}),6e4),Zt({appId:r,apiKey:i,measurementId:s},o,a,t)}async function Zt(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Jt){var s;const{appId:o,measurementId:a}=e;try{await function(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(s),r(Kt.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(r,t)}catch(c){if(a)return $t.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==c?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const t=await async function(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:Yt(r)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(s,i);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(a){}throw Kt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}(e);return i.deleteThrottleMetadata(o),t}catch(c){const t=c;if(!function(e){if(!(e instanceof y&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(i.deleteThrottleMetadata(o),a)return $t.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==t?void 0:t.message}]`),{appId:o,measurementId:a};throw c}const u=503===Number(null===(s=null==t?void 0:t.customData)||void 0===s?void 0:s.httpStatus)?S(n,i.intervalMillis,30):S(n,i.intervalMillis),l={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,l),$t.debug(`Calling attemptFetch again in ${u} millis`),Zt(e,l,r,i)}}class en{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}async function tn(e,t,n,r,i,s,o){var a;const c=Xt(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&$t.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>$t.error(e))),t.push(c);const u=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(){if(!g())return $t.warn(Kt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await m()}catch(e){return $t.warn(Kt.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}().then((e=>e?r.getId():void 0)),[l,h]=await Promise.all([c,u]);(function(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(zt)&&n.src.includes(e))return n;return null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(s)||Wt(s,l.measurementId),i("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=h&&(d.firebase_id=h),i("config",l.measurementId,d),l.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.app=e}_delete(){return delete rn[this.app.options.appId],Promise.resolve()}}let rn={},sn=[];const on={};let an,cn,un="dataLayer",ln=!1;function hn(){const e=[];if(f()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=Kt.create("invalid-analytics-context",{errorInfo:t});$t.warn(n.message)}}function dn(e,t,n){hn();const r=e.options.appId;if(!r)throw Kt.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Kt.create("no-api-key");$t.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=rn[r])throw Kt.create("already-exists",{id:r});if(!ln){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(un);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,i){let s=function(...e){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(s=window[i]),window[i]=Qt(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}(rn,sn,on,un,"gtag");cn=e,an=t,ln=!0}rn[r]=tn(e,sn,on,t,an,un,n);return new nn(e)}function fn(e=$e()){const t=Fe(e=C(e),qt);return t.isInitialized()?t.getImmediate():function(e,t={}){const n=Fe(e,qt);if(n.isInitialized()){const e=n.getImmediate();if(I(t,n.getOptions()))return e;throw Kt.create("already-initialized")}const r=n.initialize({options:t});return r}(e)}function pn(e,t,n,r){e=C(e),async function(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}(cn,rn[e.app.options.appId],t,n,r).catch((e=>$t.error(e)))}const gn="@firebase/analytics",mn="0.10.11";Ve(new k(qt,((e,{options:t})=>dn(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),Ve(new k("analytics-internal",(function(e){try{const t=e.getProvider(qt).getImmediate();return{logEvent:(e,n,r)=>pn(t,e,n,r)}}catch(t){throw Kt.create("interop-component-reg-failed",{reason:t})}}),"PRIVATE")),Ke(gn,mn),Ke(gn,mn,"esm2017");function yn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ke("firebase","11.3.1","app");const vn=yn,wn=new v("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),In=new V("@firebase/auth");function bn(e,...t){In.logLevel<=x.ERROR&&In.error(`Auth (${qe}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(e,...t){throw kn(e,...t)}function _n(e,...t){return kn(e,...t)}function En(e,t,n){const r=Object.assign(Object.assign({},vn()),{[t]:n});return new v("auth","Firebase",r).create(t,{appName:e.name})}function Sn(e){return En(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cn(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&Tn(e,"argument-error"),En(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function kn(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return wn.create(e,...t)}function An(e,t,...n){if(!e)throw kn(t,...n)}function Nn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw bn(t),new Error(t)}function Dn(e,t){e||Nn(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Rn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Rn()&&"https:"!==Rn()&&!f()&&!("connection"in navigator)||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Dn(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(d())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return On()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(e,t){Dn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Fn=new Pn(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function jn(e,t,n,r,i={}){return Bn(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=T(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode);const c=Object.assign({method:t,headers:a},i);return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(c.referrerPolicy="no-referrer"),Mn.fetch()(zn(e,e.config.apiHost,n,o),c)}))}async function Bn(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Vn),t);try{const t=new $n(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Kn(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Kn(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Kn(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw Kn(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw En(e,a,o);Tn(e,a)}}catch(i){if(i instanceof y)throw i;Tn(e,"network-request-failed",{message:String(i)})}}async function qn(e,t,n,r,i={}){const s=await jn(e,t,n,r,i);return"mfaPendingCredential"in s&&Tn(e,"multi-factor-auth-required",{_serverResponse:s}),s}function zn(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Ln(e.config,i):`${e.config.apiScheme}://${i}`}class $n{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(_n(this.auth,"network-request-failed"))),Fn.get())}))}}function Kn(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=_n(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gn(e,t){return jn(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}function Wn(e){return 1e3*Number(e)}function Qn(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return bn("JWT malformed, contained fewer than 3 sections"),null;try{const e=o(n);return e?JSON.parse(e):(bn("Failed to decode base64 JWT payload"),null)}catch(i){return bn("Caught error parsing JWT payload as JSON",null==i?void 0:i.toString()),null}}function Jn(e){const t=Qn(e);return An(t,"internal-error"),An(void 0!==t.exp,"internal-error"),An(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yn(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof y&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}class Xn{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hn(this.lastLoginAt),this.creationTime=Hn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function er(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Yn(e,Gn(n,{idToken:r}));An(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?tr(s.providerUserInfo):[],a=(c=e.providerData,u=o,[...c.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var c,u;const l=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!l&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Zn(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}function tr(t){return t.map((t=>{var{providerId:n}=t,r=e(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){An(e.idToken,"internal-error"),An(void 0!==e.idToken,"internal-error"),An(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):Jn(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){An(0!==e.length,"internal-error");const t=Jn(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(An(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await async function(e,t){const n=await Bn(e,{},(async()=>{const n=T({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=zn(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Mn.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new nr;return n&&(An("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(An("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(An("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nr,this.toJSON())}_performRefresh(){return Nn("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(e,t){An("string"==typeof e||void 0===e,"internal-error",{appName:t})}class ir{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=e(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Zn(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Yn(this,this.stsTokenManager.getToken(this.auth,e));return An(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=C(e),r=await n.getIdToken(t),i=Qn(r);An(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Hn(Wn(i.auth_time)),issuedAtTime:Hn(Wn(i.iat)),expirationTime:Hn(Wn(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=C(e);await er(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(An(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ir(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){An(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await er(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ue(this.auth.app))return Promise.reject(Sn(this.auth));const e=await this.getIdToken();return await Yn(this,async function(e,t){return jn(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:I,providerData:b,stsTokenManager:T}=t;An(v&&T,e,"internal-error");const _=nr.fromJSON(this.name,T);An("string"==typeof v,e,"internal-error"),rr(l,e.name),rr(h,e.name),An("boolean"==typeof w,e,"internal-error"),An("boolean"==typeof I,e,"internal-error"),rr(d,e.name),rr(f,e.name),rr(p,e.name),rr(g,e.name),rr(m,e.name),rr(y,e.name);const E=new ir({uid:v,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:I,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:_,createdAt:m,lastLoginAt:y});return b&&Array.isArray(b)&&(E.providerData=b.map((e=>Object.assign({},e)))),g&&(E._redirectEventId=g),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new nr;r.updateFromServerResponse(t);const i=new ir({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await er(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];An(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?tr(r.providerUserInfo):[],s=!(r.email&&r.passwordHash||(null==i?void 0:i.length)),o=new nr;o.updateFromIdToken(n);const a=new ir({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:s}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Zn(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash||(null==i?void 0:i.length))};return Object.assign(a,c),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=new Map;function or(e){Dn(e instanceof Function,"Expected a class definition");let t=sr.get(e);return t?(Dn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,sr.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ar.type="NONE";const cr=ar;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(e,t,n){return`firebase:${e}:${t}:${n}`}class lr{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ur(this.userKey,r.apiKey,i),this.fullPersistenceKey=ur("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ir._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new lr(or(cr),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||or(cr);const s=ur(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=ir._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new lr(i,e,n)):new lr(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(gr(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(dr(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(yr(t))return"Blackberry";if(vr(t))return"Webos";if(fr(t))return"Safari";if((t.includes("chrome/")||pr(t))&&!t.includes("edge/"))return"Chrome";if(mr(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function dr(e=d()){return/firefox\//i.test(e)}function fr(e=d()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function pr(e=d()){return/crios\//i.test(e)}function gr(e=d()){return/iemobile/i.test(e)}function mr(e=d()){return/android/i.test(e)}function yr(e=d()){return/blackberry/i.test(e)}function vr(e=d()){return/webos/i.test(e)}function wr(e=d()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ir(){return function(){const e=d();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function br(e=d()){return wr(e)||mr(e)||vr(e)||yr(e)||/windows phone/i.test(e)||gr(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(e,t=[]){let n;switch(e){case"Browser":n=hr(d());break;case"Worker":n=`${hr(d())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${qe}/${r}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e){var t,n,r,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kr(this),this.idTokenSubscription=new kr(this),this.beforeStateQueue=new _r(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=or(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await lr.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e,!0)):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await Gn(this,{idToken:e}),n=await ir._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ue(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return An(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await er(e)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ue(this.app))return Promise.reject(Sn(this));const t=e?C(e):null;return t&&An(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&An(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return Ue(this.app)?Promise.reject(Sn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ue(this.app)?Promise.reject(Sn(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(or(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return jn(e,"GET","/v2/passwordPolicy",Un(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this),t=new Er(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new v("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return jn(e,"POST","/v2/accounts:revokeToken",Un(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&or(e)||this._popupRedirectResolver;An(t,this,"argument-error"),this.redirectPersistenceManager=await lr.create(this,[or(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(An(o,this,"internal-error"),o.then((()=>{s||i(this.currentUser)})),"function"==typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return An(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(Ue(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){In.logLevel<=x.WARN&&In.warn(`Auth (${qe}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function Cr(e){return C(e)}class kr{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new _(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return An(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ar={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Nr(e,t,n){const r=Cr(e);An(r._canInitEmulator,r,"emulator-config-failed"),An(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=Dr(t),{host:s,port:o}=function(e){const t=Dr(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:xr(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:xr(t)}}}(t),a=null===o?"":`:${o}`;r.config.emulator={url:`${i}//${s}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:o,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:!1})}),function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&console.info;"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Dr(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function xr(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Rr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Nn("not implemented")}_getIdTokenResponse(e){return Nn("not implemented")}_linkToIdToken(e,t){return Nn("not implemented")}_getReauthenticationResolver(e){return Nn("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Or(e,t){return qn(e,"POST","/v1/accounts:signInWithIdp",Un(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends Rr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Pr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Tn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n="string"==typeof t?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=e(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Pr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){return Or(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Or(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Or(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=T(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends Lr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Vr extends Mr{static credentialFromJSON(e){const t="string"==typeof e?JSON.parse(e):e;return An("providerId"in t&&"signInMethod"in t,"argument-error"),Pr._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return An(e.idToken||e.accessToken,"argument-error"),Pr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Vr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Vr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!(n||r||t||i))return null;if(!o)return null;try{return new Vr(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends Mr{constructor(){super("facebook.com")}static credential(e){return Pr._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fr.credentialFromTaggedObject(e)}static credentialFromError(e){return Fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Fr.credential(e.oauthAccessToken)}catch(t){return null}}}Fr.FACEBOOK_SIGN_IN_METHOD="facebook.com",Fr.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ur extends Mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Pr._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ur.credential(t,n)}catch(r){return null}}}Ur.GOOGLE_SIGN_IN_METHOD="google.com",Ur.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jr extends Mr{constructor(){super("github.com")}static credential(e){return Pr._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return jr.credential(e.oauthAccessToken)}catch(t){return null}}}jr.GITHUB_SIGN_IN_METHOD="github.com",jr.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Br extends Mr{constructor(){super("twitter.com")}static credential(e,t){return Pr._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Br.credential(t,n)}catch(r){return null}}}Br.TWITTER_SIGN_IN_METHOD="twitter.com",Br.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ir._fromIdTokenResponse(e,n,r),s=zr(n);return new qr({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=zr(n);return new qr({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function zr(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $r(e){var t;if(Ue(e.app))return Promise.reject(Sn(e));const n=Cr(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new qr({user:n.currentUser,providerId:null,operationType:"signIn"});const r=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */await async function(e,t){return qn(e,"POST","/v1/accounts:signUp",Un(e,t))}(n,{returnSecureToken:!0}),i=await qr._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends y{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Kr.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Kr(e,t,n,r)}}function Gr(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Kr._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(e,t,n=!1){const r=await Yn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return qr._forOperation(e,"link",r)}async function Wr(e,t,n){await er(t);var r;An((r=t.providerData,new Set(r.map((({providerId:e})=>e)).filter((e=>!!e)))).has(n)===e,t.auth,"provider-already-linked")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Qr(e,t,n=!1){if(Ue(e.app))return Promise.reject(Sn(e));const r="signIn",i=await Gr(e,r,t),s=await qr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Jr(e,t){return Qr(Cr(e),t)}async function Yr(e,t){const n=C(e);return await Wr(!1,n,t.providerId),Hr(n,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Xr(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=C(e),i={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await Yn(r,async function(e,t){return jn(e,"POST","/v1/accounts:update",t)}(r.auth,i));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const o=r.providerData.find((({providerId:e})=>"password"===e));o&&(o.displayName=r.displayName,o.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class ei extends Zr{constructor(e,t,n,r){super(e,t,n),this.username=r}}class ti extends Zr{constructor(e,t){super(e,"facebook.com",t)}}class ni extends ei{constructor(e,t){super(e,"github.com",t,"string"==typeof(null==t?void 0:t.login)?null==t?void 0:t.login:null)}}class ri extends Zr{constructor(e,t){super(e,"google.com",t)}}class ii extends ei{constructor(e,t,n){super(e,"twitter.com",t,n)}}function si(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:function(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null==e?void 0:e.idToken)){const r=null===(n=null===(t=Qn(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n.sign_in_provider;if(r)return new Zr(s,"anonymous"!==r&&"custom"!==r?r:null)}if(!r)return null;switch(r){case"facebook.com":return new ti(s,i);case"github.com":return new ni(s,i);case"google.com":return new ri(s,i);case"twitter.com":return new ii(s,i,e.screenName||null);case"custom":case"anonymous":return new Zr(s,null);default:return new Zr(s,r,i)}}(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(e,t){return C(e).setPersistence(t)}const ai="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ai,"1"),this.storage.removeItem(ai),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends ci{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=br(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Ir()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ui.type="LOCAL";const li=ui;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends ci{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}hi.type="SESSION";const di=hi;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new fi(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pi(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fi.receivers=[];class gi{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=pi("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yi(){return void 0!==mi().WorkerGlobalScope&&"function"==typeof mi().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vi="firebaseLocalStorageDb",wi="firebaseLocalStorage",Ii="fbase_key";class bi{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Ti(e,t){return e.transaction([wi],t?"readwrite":"readonly").objectStore(wi)}function _i(){const e=indexedDB.open(vi,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(wi,{keyPath:Ii})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(wi)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(vi);return new bi(e).toPromise()}(),t(await _i()))}))}))}async function Ei(e,t,n){const r=Ti(e,!0).put({[Ii]:t,value:n});return new bi(r).toPromise()}function Si(e,t){const n=Ti(e,!0).delete(t);return new bi(n).toPromise()}class Ci{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await _i()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yi()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fi._getInstance(yi()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new gi(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _i();return await Ei(e,ai,"1"),await Si(e,ai),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ei(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Ti(e,!1).get(t),r=await new bi(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Si(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Ti(e,!1).getAll();return new bi(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ci.type="LOCAL";const ki=Ci;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ai(e,t){return t?or(t):(An(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Pn(3e4,6e4);class Ni extends Rr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Or(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Or(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Or(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Di(e){return Qr(e.auth,new Ni(e),e.bypassAuthState)}function xi(e){const{auth:t,user:n}=e;return An(n,t,"internal-error"),async function(e,t,n=!1){const{auth:r}=e;if(Ue(r.app))return Promise.reject(Sn(r));const i="reauthenticate";try{const s=await Yn(e,Gr(r,i,t,e),n);An(s.idToken,r,"internal-error");const o=Qn(s.idToken);An(o,r,"internal-error");const{sub:a}=o;return An(e.uid===a,r,"user-mismatch"),qr._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null==s?void 0:s.code)&&Tn(r,"user-mismatch"),s}}(n,new Ni(e),e.bypassAuthState)}async function Ri(e){const{auth:t,user:n}=e;return An(n,t,"internal-error"),Hr(n,new Ni(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Di;case"linkViaPopup":case"linkViaRedirect":return Ri;case"reauthViaPopup":case"reauthViaRedirect":return xi;default:Tn(this.auth,"internal-error")}}resolve(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new Pn(2e3,1e4);async function Li(e,t,n){if(Ue(e.app))return Promise.reject(_n(e,"operation-not-supported-in-this-environment"));const r=Cr(e);Cn(e,t,Lr);const i=Ai(r,n);return new Vi(r,"signInViaPopup",t,i).executeNotNull()}async function Mi(e,t,n){const r=C(e);Cn(r.auth,t,Lr);const i=Ai(r.auth,n);return new Vi(r.auth,"linkViaPopup",t,i,r).executeNotNull()}class Vi extends Oi{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Vi.currentPopupAction&&Vi.currentPopupAction.cancel(),Vi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return An(e,this.auth,"internal-error"),e}async onExecution(){Dn(1===this.filter.length,"Popup operations only handle one event");const e=pi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(_n(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(_n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(_n(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Pi.get())};e()}}Vi.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fi=new Map;class Ui extends Oi{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Fi.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=qi(t),r=Bi(e);if(!(await r._isAvailable()))return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Fi.set(this.auth._key(),e)}return this.bypassAuthState||Fi.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function ji(e,t){Fi.set(e._key(),t)}function Bi(e){return or(e._redirectPersistence)}function qi(e){return ur("pendingRedirect",e.config.apiKey,e.name)}function zi(e,t,n){return async function(e,t,n){const r=C(e);Cn(r.auth,t,Lr),await r.auth._initializationPromise;const i=Ai(r.auth,n);await Wr(!1,r,t.providerId),await async function(e,t){return Bi(e)._set(qi(t),"true")}(i,r.auth);const s=await async function(e){const t=pi(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);return i._openRedirect(r.auth,t,"linkViaRedirect",s)}(e,t,n)}async function $i(e,t){return await Cr(e)._initializationPromise,Ki(e,t,!1)}async function Ki(e,t,n=!1){if(Ue(e.app))return Promise.reject(Sn(e));const r=Cr(e),i=Ai(r,t),s=new Ui(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class Gi{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wi(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Wi(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(_n(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hi(e))}saveEventToCache(e){this.cachedEventUids.add(Hi(e)),this.lastProcessedEventTime=Date.now()}}function Hi(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Wi({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ji=/^https?/;async function Yi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return jn(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(Xi(r))return}catch(n){}Tn(e,"unauthorized-domain")}function Xi(e){const t=xn(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Ji.test(n))return!1;if(Qi.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=new Pn(3e4,6e4);function es(){const e=mi().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function ts(e){return new Promise(((t,n)=>{var r,i,s,o;function a(){es(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{es(),n(_n(e,"network-request-failed"))},timeout:Zi.get()})}if(null===(i=null===(r=mi().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=mi().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return mi()[t]=()=>{gapi.load?a():n(_n(e,"network-request-failed"))},(o=`${Ar.gapiScript}?onload=${t}`,Ar.loadJS(o)).catch((e=>n(e)))}a()}})).catch((e=>{throw ns=null,e}))}let ns=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rs=new Pn(5e3,15e3),is={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ss=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function os(e){const t=e.config;An(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ln(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:qe},i=ss.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${T(r).slice(1)}`}async function as(e){const t=await function(e){return ns=ns||ts(e),ns}(e),n=mi().gapi;return An(n,e,"internal-error"),t.open({where:document.body,url:os(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:is,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=_n(e,"network-request-failed"),s=mi().setTimeout((()=>{r(i)}),rs.get());function o(){mi().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class us{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function ls(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},cs),{width:r.toString(),height:i.toString(),top:s,left:o}),u=d().toLowerCase();n&&(a=pr(u)?"_blank":n),dr(u)&&(t=t||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=d()){var t;return wr(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new us(null);const h=window.open(t||"",a,l);An(h,e,"popup-blocked");try{h.focus()}catch(f){}return new us(h)}const hs="__/auth/handler",ds="emulator/auth/handler",fs=encodeURIComponent("fac");async function ps(e,t,n,r,i,s){An(e.config.authDomain,e,"auth-domain-config-required"),An(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:qe,eventId:i};if(t instanceof Lr){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries({}))o[e]=t}if(t instanceof Mr){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const l of Object.keys(a))void 0===a[l]&&delete a[l];const c=await e._getAppCheckToken(),u=c?`#${fs}=${encodeURIComponent(c)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${hs}`;return Ln(e,ds)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${T(a).slice(1)}${u}`}const gs="webStorageSupport";const ms=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=di,this._completeRedirectFn=Ki,this._overrideRedirectResult=ji}async _openPopup(e,t,n,r){var i;Dn(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return ls(e,await ps(e,t,n,xn(),r),pi())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){mi().location.href=e}(await ps(e,t,n,xn(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Dn(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await as(e),n=new Gi(e);return t.register("authEvent",(t=>{An(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(gs,{type:gs},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[gs];void 0!==i&&t(!!i),Tn(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Yi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return br()||fr()||wr()}};var ys="@firebase/auth",vs="1.9.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ws{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){An(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Is=l("authIdTokenMaxAge")||300;let bs=null;function Ts(e=$e()){const t=Fe(e,"auth");if(t.isInitialized())return t.getImmediate();const n=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){const n=Fe(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(I(n.getOptions(),null!=t?t:{}))return e;Tn(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:ms,persistence:[ki,li,di]}),r=l("authTokenSyncURL");if(r&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(r,location.origin);if(location.origin===e.origin){const t=(i=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Is)return;const r=null==t?void 0:t.token;bs!==r&&(bs=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){C(e).beforeAuthStateChanged(t,n)}(n,t,(()=>t(n.currentUser))),function(e,t,n,r){C(e).onIdTokenChanged(t,n,r)}(n,(e=>t(e)))}}var i;const s=(o="auth",null===(u=null===(a=c())||void 0===a?void 0:a.emulatorHosts)||void 0===u?void 0:u[o]);var o,a,u;return s&&Nr(n,`http://${s}`),n}var _s;Ar={loadJS:e=>new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=_n("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)})),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},_s="Browser",Ve(new k("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;An(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:_s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tr(_s)},c=new Sr(n,r,i,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(or);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(c,t),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Ve(new k("auth-internal",(e=>{const t=Cr(e.getProvider("auth").getImmediate());return new ws(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Ke(ys,vs,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(_s)),Ke(ys,vs,"esm2017");var Es,Ss,Cs="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e;
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;o=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=n+(o<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(t=n+((o=t+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=s+((o=i+(t^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function r(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}(t,(function(){this.blockSize=-1})),t.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var r=t-this.blockSize,i=this.B,s=this.h,o=0;o<t;){if(0==s)for(;o<=r;)n(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<t;)if(i[s++]=e.charCodeAt(o++),s==this.blockSize){n(this,i),s=0;break}}else for(;o<t;)if(i[s++]=e[o++],s==this.blockSize){n(this,i),s=0;break}}this.h=s,this.o+=t},t.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var i={};function s(e){return-128<=e&&128>e?function(e,t){var n=i;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(e){return new r([0|e],0>e?-1:0)})):new r([0|e],0>e?-1:0)}function o(e){if(isNaN(e)||!isFinite(e))return a;if(0>e)return d(o(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=4294967296;return new r(t,0)}var a=s(0),c=s(1),u=s(16777216);function l(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function h(e){return-1==e.h}function d(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new r(n,~e.h).add(c)}function f(e,t){return e.add(d(t))}function p(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function g(e,t){this.g=e,this.h=t}function m(e,t){if(l(t))throw Error("division by zero");if(l(e))return new g(a,a);if(h(e))return t=m(d(e),t),new g(d(t.g),d(t.h));if(h(t))return t=m(e,d(t)),new g(d(t.g),t.h);if(30<e.g.length){if(h(e)||h(t))throw Error("slowDivide_ only works with positive integers.");for(var n=c,r=t;0>=r.l(e);)n=y(n),r=y(r);var i=v(n,1),s=v(r,1);for(r=v(r,2),n=v(n,2);!l(r);){var u=s.add(r);0>=u.l(e)&&(i=i.add(n),s=u),r=v(r,1),n=v(n,1)}return t=f(e,i.j(t)),new g(i,t)}for(i=a;0<=e.l(t);){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),u=(s=o(n)).j(t);h(u)||0<u.l(e);)u=(s=o(n-=r)).j(t);l(s)&&(s=c),i=i.add(s),e=f(e,u)}return new g(i,e)}function y(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.i(i)<<1|e.i(i-1)>>>31;return new r(n,e.h)}function v(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],o=0;o<i;o++)s[o]=0<t?e.i(o+n)>>>t|e.i(o+n+1)<<32-t:e.i(o+n);return new r(s,e.h)}(e=r.prototype).m=function(){if(h(this))return-d(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(l(this))return"0";if(h(this))return"-"+d(this).toString(e);for(var t=o(Math.pow(e,6)),n=this,r="";;){var i=m(n,t).g,s=((0<(n=f(n,i.j(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(l(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return h(e=f(this,e))?-1:l(e)?0:1},e.abs=function(){return h(this)?d(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var o=i+(65535&this.i(s))+(65535&e.i(s)),a=(o>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);i=a>>>16,o&=65535,a&=65535,n[s]=a<<16|o}return new r(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(l(this)||l(e))return a;if(h(this))return h(e)?d(this).j(d(e)):d(d(this).j(e));if(h(e))return d(this.j(d(e)));if(0>this.l(u)&&0>e.l(u))return o(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var c=this.i(i)>>>16,f=65535&this.i(i),g=e.i(s)>>>16,m=65535&e.i(s);n[2*i+2*s]+=f*m,p(n,2*i+2*s),n[2*i+2*s+1]+=c*m,p(n,2*i+2*s+1),n[2*i+2*s+1]+=f*g,p(n,2*i+2*s+1),n[2*i+2*s+2]+=c*g,p(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new r(n,0)},e.A=function(e){return m(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)&e.i(i);return new r(n,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)|e.i(i);return new r(n,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)^e.i(i);return new r(n,this.h^e.h)},t.prototype.digest=t.prototype.v,t.prototype.reset=t.prototype.s,t.prototype.update=t.prototype.u,Ss=t,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=o,r.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return d(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=o(Math.pow(n,8)),i=a,s=0;s<t.length;s+=8){var c=Math.min(8,t.length-s),u=parseInt(t.substring(s,s+c),n);8>c?(c=o(Math.pow(n,c)),i=i.j(c).add(o(u))):i=(i=i.j(r)).add(o(u))}return i},Es=r}).apply(void 0!==Cs?Cs:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var ks,As,Ns,Ds,xs,Rs,Os,Ps,Ls="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e};var n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof Ls&&Ls];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(e,r){if(r)e:{var i=n;e=e.split(".");for(var s=0;s<e.length-1;s++){var o=e[s];if(!(o in i))break e;i=i[o]}(r=r(s=i[e=e[e.length-1]]))!=s&&null!=r&&t(i,e,{configurable:!0,writable:!0,value:r})}}("Array.prototype.values",(function(e){return e||function(){return function(e,t){e instanceof String&&(e+="");var n=0,r=!1,i={next:function(){if(!r&&n<e.length){var i=n++;return{value:t(i,e[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}(this,(function(e,t){return t}))}}));
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var r=r||{},i=this||self;function s(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function o(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function a(e,t,n){return e.call.apply(e.bind,arguments)}function c(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function u(e,t,n){return(u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:c).apply(null,arguments)}function l(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function h(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function d(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function f(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(s(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function p(e){return/^[\s\xa0]*$/.test(e)}function g(){var e=i.navigator;return e&&(e=e.userAgent)?e:""}function m(e){return m[" "](e),e}m[" "]=function(){};var y=!(-1==g().indexOf("Gecko")||-1!=g().toLowerCase().indexOf("webkit")&&-1==g().indexOf("Edge")||-1!=g().indexOf("Trident")||-1!=g().indexOf("MSIE")||-1!=g().indexOf("Edge"));function v(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function w(e){const t={};for(const n in e)t[n]=e[n];return t}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<I.length;t++)n=I[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function T(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function _(e){i.setTimeout((()=>{throw e}),0)}function E(){var e=N;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var S=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new C),(e=>e.reset()));class C{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let k,A=!1,N=new class{constructor(){this.h=this.g=null}add(e,t){const n=S.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},D=()=>{const e=i.Promise.resolve(void 0);k=()=>{e.then(x)}};var x=()=>{for(var e;e=E();){try{e.h.call(e.g)}catch(n){_(n)}var t=S;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}A=!1};function R(){this.s=this.s,this.C=this.C}function O(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}R.prototype.s=!1,R.prototype.ma=function(){this.s||(this.s=!0,this.N())},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},O.prototype.h=function(){this.defaultPrevented=!0};var P=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};i.addEventListener("test",e,t),i.removeEventListener("test",e,t)}catch(n){}return e}();function L(e,t){if(O.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(y){e:{try{m(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:M[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&L.aa.h.call(this)}}h(L,O);var M={2:"touch",3:"pen",4:"mouse"};L.prototype.h=function(){L.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),F=0;function U(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++F,this.da=this.fa=!1}function j(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function B(e){this.src=e,this.g={},this.h=0}function q(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Array.prototype.indexOf.call(i,t,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(j(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function z(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}B.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=z(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new U(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var $="closure_lm_"+(1e6*Math.random()|0),K={};function G(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)G(e,t[s],n,r,i);return null}return n=Z(n),e&&e[V]?e.K(t,n,!!o(r)&&!!r.capture,i):function(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var a=o(i)?!!i.capture:!!i,c=Y(e);if(c||(e[$]=c=new B(e)),n=c.add(t,n,r,a,s),n.proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=J;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)P||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Q(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}(e,t,n,!1,r,i)}function H(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)H(e,t[s],n,r,i);else r=o(r)?!!r.capture:!!r,n=Z(n),e&&e[V]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=z(s=e.g[t],n,r,i))&&(j(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Y(e))&&(t=e.g[t.toString()],e=-1,t&&(e=z(t,n,r,i)),(n=-1<e?t[e]:null)&&W(n))}function W(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[V])q(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Q(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Y(t))?(q(n,e),0==n.h&&(n.src=null,t[$]=null)):j(e)}}}function Q(e){return e in K?K[e]:K[e]="on"+e}function J(e,t){if(e.da)e=!0;else{t=new L(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&W(e),e=n.call(r,t)}return e}function Y(e){return(e=e[$])instanceof B?e:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(e){return"function"==typeof e?e:(e[X]||(e[X]=function(t){return e.handleEvent(t)}),e[X])}function ee(){R.call(this),this.i=new B(this),this.M=this,this.F=null}function te(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new O(t,e);else if(t instanceof O)t.target=t.target||e;else{var i=t;b(t=new O(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=ne(o,r,!0,t)&&i}if(i=ne(o=t.g=e,r,!0,t)&&i,i=ne(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=ne(o=t.g=n[s],r,!1,t)&&i}function ne(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.da&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.fa&&q(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}function re(e,t,n){if("function"==typeof e)n&&(e=u(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=u(e.handleEvent,e)}return 2147483647<Number(t)?-1:i.setTimeout(e,t||0)}function ie(e){e.g=re((()=>{e.g=null,e.i&&(e.i=!1,ie(e))}),e.l);const t=e.h;e.h=null,e.m.apply(null,t)}h(ee,R),ee.prototype[V]=!0,ee.prototype.removeEventListener=function(e,t,n,r){H(this,e,t,n,r)},ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)j(n[r]);delete t.g[e],t.h--}}this.F=null},ee.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ee.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class se extends R{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:ie(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oe(e){R.call(this),this.h=e,this.g={}}h(oe,R);var ae=[];function ce(e){v(e.g,(function(e,t){this.g.hasOwnProperty(t)&&W(e)}),e),e.g={}}oe.prototype.N=function(){oe.aa.N.call(this),ce(this)},oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ue=i.JSON.stringify,le=i.JSON.parse,he=class{stringify(e){return i.JSON.stringify(e,void 0)}parse(e){return i.JSON.parse(e,void 0)}};function de(){}function fe(e){return e.h||(e.h=e.i())}function pe(){}de.prototype.h=null;var ge={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function me(){O.call(this,"d")}function ye(){O.call(this,"c")}h(me,O),h(ye,O);var ve={},we=null;function Ie(){return we=we||new ee}function be(e){O.call(this,ve.La,e)}function Te(e){const t=Ie();te(t,new be(t))}function _e(e,t){O.call(this,ve.STAT_EVENT,e),this.stat=t}function Ee(e){const t=Ie();te(t,new _e(t,e))}function Se(e,t){O.call(this,ve.Ma,e),this.size=t}function Ce(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return i.setTimeout((function(){e()}),t)}function ke(){this.g=!0}function Ae(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return ue(n)}catch(a){return t}}(e,n)+(r?" "+r:"")}))}ve.La="serverreachability",h(be,O),ve.STAT_EVENT="statevent",h(_e,O),ve.Ma="timingevent",h(Se,O),ke.prototype.xa=function(){this.g=!1},ke.prototype.info=function(){};var Ne,De={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xe={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function Re(){}function Oe(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new oe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Pe}function Pe(){this.i=null,this.g="",this.h=!1}h(Re,de),Re.prototype.g=function(){return new XMLHttpRequest},Re.prototype.i=function(){return{}},Ne=new Re;var Le={},Me={};function Ve(e,t,n){e.L=1,e.v=ut(it(t)),e.m=n,e.P=!0,Fe(e,null)}function Fe(e,t){e.F=Date.now(),Be(e),e.A=it(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),Tt(n.i,"t",r),e.C=0,n=e.j.J,e.h=new Pe,e.g=ln(e.j,n?t:null,!e.m),0<e.O&&(e.M=new se(u(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(ae[0]=i.toString()),i=ae);for(var s=0;s<i.length;s++){var o=G(n,i[s],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}t=e.H?w(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Te(),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.i,e.u,e.A,e.l,e.R,e.m)}function Ue(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.j.Ca)}function je(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Me:(n=Number(t.substring(n,r)),isNaN(n)?Le:(r+=1)+n>t.length?Me:(t=t.slice(r,r+n),e.C=r+n,t))}function Be(e){e.S=Date.now()+e.I,qe(e,e.I)}function qe(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Ce(u(e.ba,e),t)}function ze(e){e.B&&(i.clearTimeout(e.B),e.B=null)}function $e(e){0==e.j.G||e.J||sn(e.j,e)}function Ke(e){ze(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,ce(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function Ge(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||Ye(n.h,e)))if(!e.K&&Ye(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(l){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;rn(n),Ht(n)}en(n),Ee(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=Ce(u(n.Za,n),6e3));if(1>=Je(n.h)&&n.ca){try{n.ca()}catch(l){}n.ca=void 0}}else an(n,11)}else if((e.K||n.g==e)&&rn(n),!p(t))for(i=n.Da.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const t=u[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));const i=u[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Xe(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,ct(r.I,r.D,e))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms"));var o=e;if((r=n).qa=un(r,r.J?r.ia:null,r.W),o.K){Ze(r.h,o);var a=o,c=r.L;c&&(a.I=c),a.B&&(ze(a),Be(a)),r.g=o}else Zt(r);0<n.i.length&&Qt(n)}else"stop"!=u[0]&&"close"!=u[0]||an(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?an(n,7):Gt(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}Te()}catch(l){}}Oe.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==qt(e)?t.j():this.Y(e)},Oe.prototype.Y=function(e){try{if(e==this.g)e:{const d=qt(this.g);var t=this.g.Ba();this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||zt(this.g)))){this.J||4!=d||7==t||Te(),ze(this);var n=this.g.Z();this.X=n;t:if(Ue(this)){var r=zt(this.g);e="";var s=r.length,o=4==qt(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Ke(this),$e(this);var a="";break t}this.h.i=new i.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(o&&t==s-1)});r.length=0,this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==n,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){t:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(c)){var l=c;break t}}l=null}if(!(n=l)){this.o=!1,this.s=3,Ee(12),Ke(this),$e(this);break e}Ae(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ge(this,n)}if(this.P){let e;for(n=!0;!this.J&&this.C<a.length;){if(e=je(this,a),e==Me){4==d&&(this.s=4,Ee(14),n=!1),Ae(this.i,this.l,null,"[Incomplete Response]");break}if(e==Le){this.s=4,Ee(15),Ae(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}Ae(this.i,this.l,e,null),Ge(this,e)}if(Ue(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=a.length||this.h.h||(this.s=1,Ee(16),n=!1),this.o=this.o&&n,n){if(0<a.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),tn(h),h.M=!0,Ee(11))}}else Ae(this.i,this.l,a,"[Invalid Chunked Response]"),Ke(this),$e(this)}else Ae(this.i,this.l,a,null),Ge(this,a);4==d&&Ke(this),this.o&&!this.J&&(4==d?sn(this.j,this):(this.o=!1,Be(this)))}else(function(e){const t={};e=(e.g&&2<=qt(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(p(e[r]))continue;var n=T(e[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,Ee(12)):(this.s=0,Ee(13)),Ke(this),$e(this)}}}catch(d){}},Oe.prototype.cancel=function(){this.J=!0,Ke(this)},Oe.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.i,this.A),2!=this.L&&(Te(),Ee(17)),Ke(this),this.s=2,$e(this)):qe(this,this.S-e)};var He=class{constructor(e,t){this.g=e,this.map=t}};function We(e){this.l=e||10,i.PerformanceNavigationTiming?e=0<(e=i.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qe(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Je(e){return e.h?1:e.g?e.g.size:0}function Ye(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Xe(e,t){e.g?e.g.add(t):e.h=t}function Ze(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function et(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return d(e.i)}function tt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(s(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(s(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(s(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}We.prototype.cancel=function(){if(this.i=et(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var nt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rt(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof rt){this.h=e.h,st(this,e.j),this.o=e.o,this.g=e.g,ot(this,e.s),this.l=e.l;var t=e.i,n=new vt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),at(this,n),this.m=e.m}else e&&(t=String(e).match(nt))?(this.h=!1,st(this,t[1]||"",!0),this.o=lt(t[2]||""),this.g=lt(t[3]||"",!0),ot(this,t[4]),this.l=lt(t[5]||"",!0),at(this,t[6]||"",!0),this.m=lt(t[7]||"")):(this.h=!1,this.i=new vt(null,this.h))}function it(e){return new rt(e)}function st(e,t,n){e.j=n?lt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ot(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function at(e,t,n){t instanceof vt?(e.i=t,function(e,t){t&&!e.j&&(wt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(It(this,t),Tt(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=ht(t,mt)),e.i=new vt(t,e.h))}function ct(e,t,n){e.i.set(t,n)}function ut(e){return ct(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function lt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ht(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,dt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function dt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}rt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ht(t,ft,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(ht(t,ft,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(ht(n,"/"==n.charAt(0)?gt:pt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",ht(n,yt)),e.join("")};var ft=/[#\/\?@]/g,pt=/[#\?:]/g,gt=/[#\?]/g,mt=/[#\?@]/g,yt=/#/g;function vt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function wt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function It(e,t){wt(e),t=_t(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function bt(e,t){return wt(e),t=_t(e,t),e.g.has(t)}function Tt(e,t,n){It(e,t),0<n.length&&(e.i=null,e.g.set(_t(e,t),d(n)),e.h+=n.length)}function _t(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Et(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(s){}}function St(){this.g=new he}function Ct(e,t,n){const r=n||"";try{tt(e,(function(e,n){let i=e;o(e)&&(i=ue(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function kt(e){this.l=e.Ub||null,this.j=e.eb||!1}function At(e,t){ee.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function Nt(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function Dt(e){e.readyState=4,e.l=null,e.j=null,e.v=null,xt(e)}function xt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function Rt(e){let t="";return v(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Ot(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Rt(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):ct(e,t,n))}function Pt(e){ee.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(e=vt.prototype).add=function(e,t){wt(this),this.i=null,e=_t(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){wt(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},e.na=function(){wt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},e.V=function(e){wt(this);let t=[];if("string"==typeof e)bt(this,e)&&(t=t.concat(this.g.get(_t(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},e.set=function(e,t){return wt(this),this.i=null,bt(this,e=_t(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")},h(kt,de),kt.prototype.g=function(){return new At(this.l,this.j)},kt.prototype.i=function(e){return function(){return e}}({}),h(At,ee),(e=At.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,xt(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||i).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Dt(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,xt(this)),this.g&&(this.readyState=3,xt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Nt(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Dt(this):xt(this),3==this.readyState&&Nt(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,Dt(this))},e.Qa=function(e){this.g&&(this.response=e,Dt(this))},e.ga=function(){this.g&&Dt(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(At.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),h(Pt,ee);var Lt=/^https?$/i,Mt=["POST","PUT"];function Vt(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,Ft(e),jt(e)}function Ft(e){e.A||(e.A=!0,te(e,"complete"),te(e,"error"))}function Ut(e){if(e.h&&void 0!==r&&(!e.v[1]||4!=qt(e)||2!=e.Z()))if(e.u&&4==qt(e))re(e.Ea,0,e);else if(te(e,"readystatechange"),4==qt(e)){e.h=!1;try{const r=e.Z();e:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var s;if(s=0===r){var o=String(e.D).match(nt)[1]||null;!o&&i.self&&i.self.location&&(o=i.self.location.protocol.slice(0,-1)),s=!Lt.test(o?o.toLowerCase():"")}n=s}if(n)te(e,"complete"),te(e,"success");else{e.m=6;try{var a=2<qt(e)?e.g.statusText:""}catch(c){a=""}e.l=a+" ["+e.Z()+"]",Ft(e)}}finally{jt(e)}}}function jt(e,t){if(e.g){Bt(e);const r=e.g,i=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||te(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Bt(e){e.I&&(i.clearTimeout(e.I),e.I=null)}function qt(e){return e.g?e.g.readyState:0}function zt(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function $t(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Kt(e){this.Aa=0,this.i=[],this.j=new ke,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$t("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$t("baseRetryDelayMs",5e3,e),this.cb=$t("retryDelaySeedMs",1e4,e),this.Wa=$t("forwardChannelMaxRetries",2,e),this.wa=$t("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new We(e&&e.concurrentRequestLimit),this.Da=new St,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function Gt(e){if(Wt(e),3==e.G){var t=e.U++,n=it(e.I);if(ct(n,"SID",e.K),ct(n,"RID",t),ct(n,"TYPE","terminate"),Yt(e,n),(t=new Oe(e,e.j,t)).L=2,t.v=ut(it(n)),n=!1,i.navigator&&i.navigator.sendBeacon)try{n=i.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&i.Image&&((new Image).src=t.v,n=!0),n||(t.g=ln(t.j,null),t.g.ea(t.v)),t.F=Date.now(),Be(t)}cn(e)}function Ht(e){e.g&&(tn(e),e.g.cancel(),e.g=null)}function Wt(e){Ht(e),e.u&&(i.clearTimeout(e.u),e.u=null),rn(e),e.h.cancel(),e.s&&("number"==typeof e.s&&i.clearTimeout(e.s),e.s=null)}function Qt(e){if(!Qe(e.h)&&!e.s){e.s=!0;var t=e.Ga;k||D(),A||(k(),A=!0),N.add(t,e),e.B=0}}function Jt(e,t){var n;n=t?t.l:e.U++;const r=it(e.I);ct(r,"SID",e.K),ct(r,"RID",n),ct(r,"AID",e.T),Yt(e,r),e.m&&e.o&&Ot(r,e.m,e.o),n=new Oe(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=Xt(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),Xe(e.h,n),Ve(n,r,t)}function Yt(e,t){e.H&&v(e.H,(function(e,n){ct(t,n,e)})),e.l&&tt({},(function(e,n){ct(t,n,e)}))}function Xt(e,t,n){n=Math.min(e.i.length,n);var r=e.l?u(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const c=i[a].map;if(n-=t,0>n)t=Math.max(0,i[a].g-100),o=!1;else try{Ct(c,e,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function Zt(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;k||D(),A||(k(),A=!0),N.add(t,e),e.v=0}}function en(e){return!(e.g||e.u||3<=e.v)&&(e.Y++,e.u=Ce(u(e.Fa,e),on(e,e.v)),e.v++,!0)}function tn(e){null!=e.A&&(i.clearTimeout(e.A),e.A=null)}function nn(e){e.g=new Oe(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=it(e.qa);ct(t,"RID","rpc"),ct(t,"SID",e.K),ct(t,"AID",e.T),ct(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&ct(t,"TO",e.ja),ct(t,"TYPE","xmlhttp"),Yt(e,t),e.m&&e.o&&Ot(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=ut(it(t)),n.m=null,n.P=!0,Fe(n,e)}function rn(e){null!=e.C&&(i.clearTimeout(e.C),e.C=null)}function sn(e,t){var n=null;if(e.g==t){rn(e),tn(e),e.g=null;var r=2}else{if(!Ye(e.h,t))return;n=t.D,Ze(e.h,t),r=1}if(0!=e.G)if(t.o)if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var i=e.B;te(r=Ie(),new Se(r,n)),Qt(e)}else Zt(e);else if(3==(i=t.s)||0==i&&0<t.X||!(1==r&&function(e,t){return!(Je(e.h)>=e.h.j-(e.s?1:0)||(e.s?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa)||(e.s=Ce(u(e.Ga,e,t),on(e,e.B)),e.B++,0)))}(e,t)||2==r&&en(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:an(e,5);break;case 4:an(e,10);break;case 3:an(e,6);break;default:an(e,2)}}function on(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function an(e,t){if(e.j.info("Error code "+t),2==t){var n=u(e.fb,e),r=e.Xa;const t=!r;r=new rt(r||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||st(r,"https"),ut(r),t?function(e,t){const n=new ke;if(i.Image){const r=new Image;r.onload=l(Et,n,"TestLoadImage: loaded",!0,t,r),r.onerror=l(Et,n,"TestLoadImage: error",!1,t,r),r.onabort=l(Et,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=l(Et,n,"TestLoadImage: timeout",!1,t,r),i.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){new ke;const n=new AbortController,r=setTimeout((()=>{n.abort(),Et(0,0,!1,t)}),1e4);fetch(e,{signal:n.signal}).then((e=>{clearTimeout(r),e.ok?Et(0,0,!0,t):Et(0,0,!1,t)})).catch((()=>{clearTimeout(r),Et(0,0,!1,t)}))}(r.toString(),n)}else Ee(2);e.G=0,e.l&&e.l.sa(t),cn(e),Wt(e)}function cn(e){if(e.G=0,e.ka=[],e.l){const t=et(e.h);0==t.length&&0==e.i.length||(f(e.ka,t),f(e.ka,e.i),e.h.i.length=0,d(e.i),e.i.length=0),e.l.ra()}}function un(e,t,n){var r=n instanceof rt?it(n):new rt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),ot(r,r.s);else{var s=i.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var o=new rt(null);r&&st(o,r),t&&(o.g=t),s&&ot(o,s),n&&(o.l=n),r=o}return n=e.D,t=e.ya,n&&t&&ct(r,n,t),ct(r,"VER",e.la),Yt(e,r),r}function ln(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Ca&&!e.pa?new Pt(new kt({eb:n})):new Pt(e.pa)).Ha(e.J),t}function hn(){}function dn(){}function fn(e,t){ee.call(this),this.g=new Kt(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!p(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!p(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new mn(this)}function pn(e){me.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function gn(){ye.call(this),this.status=1}function mn(e){this.g=e}(e=Pt.prototype).Ha=function(e){this.J=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ne.g(),this.v=this.o?fe(this.o):fe(Ne),this.g.onreadystatechange=u(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(o){return void Vt(this,o)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),s=i.FormData&&e instanceof i.FormData,!(0<=Array.prototype.indexOf.call(Mt,t,void 0))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,a]of n)this.g.setRequestHeader(i,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bt(this),this.u=!0,this.g.send(e),this.u=!1}catch(o){Vt(this,o)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,te(this,"complete"),te(this,"abort"),jt(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jt(this,!0)),Pt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Ut(this):this.bb())},e.bb=function(){Ut(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<qt(this)?this.g.status:-1}catch(e){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),le(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=Kt.prototype).la=8,e.G=1,e.connect=function(e,t,n,r){Ee(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=un(this,null,this.W),Qt(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new Oe(this,this.j,e);let s=this.o;if(this.S&&(s?(s=w(s),b(s,this.S)):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Xt(this,i,t),ct(n=it(this.I),"RID",e),ct(n,"CVER",22),this.D&&ct(n,"X-HTTP-Session-Id",this.D),Yt(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Rt(s)))+"&"+t:this.m&&Ot(n,this.m,s)),Xe(this.h,i),this.Ua&&ct(n,"TYPE","init"),this.P?(ct(n,"$req",t),ct(n,"SID","null"),i.T=!0,Ve(i,n,null)):Ve(i,n,t),this.G=2}}else 3==this.G&&(e?Jt(this,e):0==this.i.length||Qe(this.h)||Jt(this))},e.Fa=function(){if(this.u=null,nn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=Ce(u(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ee(10),Ht(this),nn(this))},e.Za=function(){null!=this.C&&(this.C=null,Ht(this),en(this),Ee(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),Ee(2)):(this.j.info("Failed to ping google.com"),Ee(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=hn.prototype).ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},dn.prototype.g=function(e,t){return new fn(e,t)},h(fn,ee),fn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},fn.prototype.close=function(){Gt(this.g)},fn.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.u&&((n={}).__data__=ue(e),e=n);t.i.push(new He(t.Ya++,e)),3==t.G&&Qt(t)},fn.prototype.N=function(){this.g.l=null,delete this.j,Gt(this.g),delete this.g,fn.aa.N.call(this)},h(pn,me),h(gn,ye),h(mn,hn),mn.prototype.ua=function(){te(this.g,"a")},mn.prototype.ta=function(e){te(this.g,new pn(e))},mn.prototype.sa=function(e){te(this.g,new gn)},mn.prototype.ra=function(){te(this.g,"b")},dn.prototype.createWebChannel=dn.prototype.g,fn.prototype.send=fn.prototype.o,fn.prototype.open=fn.prototype.m,fn.prototype.close=fn.prototype.close,Ps=function(){return new dn},Os=function(){return Ie()},Rs=ve,xs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},De.NO_ERROR=0,De.TIMEOUT=8,De.HTTP_ERROR=6,Ds=De,xe.COMPLETE="complete",Ns=xe,pe.EventType=ge,ge.OPEN="a",ge.CLOSE="b",ge.ERROR="c",ge.MESSAGE="d",ee.prototype.listen=ee.prototype.K,As=pe,Pt.prototype.listenOnce=Pt.prototype.L,Pt.prototype.getLastError=Pt.prototype.Ka,Pt.prototype.getLastErrorCode=Pt.prototype.Ba,Pt.prototype.getStatus=Pt.prototype.Z,Pt.prototype.getResponseJson=Pt.prototype.Oa,Pt.prototype.getResponseText=Pt.prototype.oa,Pt.prototype.send=Pt.prototype.ea,Pt.prototype.setWithCredentials=Pt.prototype.Ha,ks=Pt}).apply(void 0!==Ls?Ls:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const Ms="@firebase/firestore",Vs="4.7.8";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Fs.UNAUTHENTICATED=new Fs(null),Fs.GOOGLE_CREDENTIALS=new Fs("google-credentials-uid"),Fs.FIRST_PARTY=new Fs("first-party-uid"),Fs.MOCK_USER=new Fs("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Us="11.3.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=new V("@firebase/firestore");function Bs(){return js.logLevel}function qs(e,...t){if(js.logLevel<=x.DEBUG){const n=t.map(Ks);js.debug(`Firestore (${Us}): ${e}`,...n)}}function zs(e,...t){if(js.logLevel<=x.ERROR){const n=t.map(Ks);js.error(`Firestore (${Us}): ${e}`,...n)}}function $s(e,...t){if(js.logLevel<=x.WARN){const n=t.map(Ks);js.warn(`Firestore (${Us}): ${e}`,...n)}}function Ks(e){if("string"==typeof e)return e;try{
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */
return t=e,JSON.stringify(t)}catch(n){return e}var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(e="Unexpected state"){const t=`FIRESTORE (${Us}) INTERNAL ASSERTION FAILED: `+e;throw zs(t),new Error(t)}function Hs(e,t){e||Gs()}function Ws(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Js extends y{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Zs{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Fs.UNAUTHENTICATED)))}shutdown(){}}class eo{constructor(e){this.t=e,this.currentUser=Fs.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Hs(void 0===this.o);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Ys;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ys,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{qs("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(qs("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ys)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(qs("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Hs("string"==typeof t.accessToken),new Xs(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Hs(null===e||"string"==typeof e),new Fs(e)}}class to{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Fs.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class no{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new to(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Fs.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ro{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class io{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Ue(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){Hs(void 0===this.o);const n=e=>{null!=e.error&&qs("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,qs("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{qs("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):qs("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.V)return Promise.resolve(new ro(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Hs("string"==typeof e.token),this.R=e.token,new ro(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{static newId(){const e=62*Math.floor(256/62);let t="";for(;t.length<20;){const n=so(40);for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}}function ao(e,t){return e<t?-1:e>t?1:0}function co(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function uo(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=-62135596800,ho=1e6;class fo{static now(){return fo.fromMillis(Date.now())}static fromDate(e){return fo.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*ho);return new fo(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Js(Qs.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Js(Qs.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<lo)throw new Js(Qs.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Js(Qs.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ho}_compareTo(e){return this.seconds===e.seconds?ao(this.nanoseconds,e.nanoseconds):ao(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-lo;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{static fromTimestamp(e){return new po(e)}static min(){return new po(new fo(0,0))}static max(){return new po(new fo(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go="__name__";class mo{constructor(e,t,n){void 0===t?t=0:t>e.length&&Gs(),void 0===n?n=e.length-t:n>e.length-t&&Gs(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===mo.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof mo?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=mo.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return Math.sign(e.length-t.length)}static compareSegments(e,t){const n=mo.isNumericId(e),r=mo.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?mo.extractNumericId(e).compare(mo.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Es.fromString(e.substring(4,e.length-2))}}class yo extends mo{construct(e,t,n){return new yo(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Js(Qs.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new yo(t)}static emptyPath(){return new yo([])}}const vo=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class wo extends mo{construct(e,t,n){return new wo(e,t,n)}static isValidIdentifier(e){return vo.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),wo.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===go}static keyField(){return new wo([go])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Js(Qs.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Js(Qs.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Js(Qs.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new Js(Qs.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new wo(t)}static emptyPath(){return new wo([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this.path=e}static fromPath(e){return new Io(yo.fromString(e))}static fromName(e){return new Io(yo.fromString(e).popFirst(5))}static empty(){return new Io(yo.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===yo.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return yo.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Io(new yo(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function To(e){return e.fields.find((e=>2===e.kind))}function _o(e){return e.fields.filter((e=>2!==e.kind))}bo.UNKNOWN_ID=-1;class Eo{constructor(e,t){this.fieldPath=e,this.kind=t}}class So{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new So(0,ko.min())}}function Co(e){return new ko(e.readTime,e.key,-1)}class ko{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ko(po.min(),Io.empty(),-1)}static max(){return new ko(po.max(),Io.empty(),-1)}}function Ao(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Io.comparator(e.documentKey,t.documentKey),0!==n?n:ao(e.largestBatchId,t.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const No="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Do{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(e){if(e.code!==Qs.FAILED_PRECONDITION||e.message!==No)throw e;qs("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Gs(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ro(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Ro?t:Ro.resolve(t)}catch(t){return Ro.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Ro.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Ro.reject(t)}static resolve(e){return new Ro(((t,n)=>{t(e)}))}static reject(e){return new Ro(((t,n)=>{n(e)}))}static waitFor(e){return new Ro(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Ro.resolve(!1);for(const n of e)t=t.next((e=>e?Ro.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Ro(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new Ro(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo="SimpleDb";class Po{static open(e,t,n,r){try{return new Po(t,e.transaction(r,n))}catch(i){throw new Fo(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.m=new Ys,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{t.error?this.m.reject(new Fo(e,t.error)):this.m.resolve()},this.transaction.onerror=t=>{const n=zo(t.target.error);this.m.reject(new Fo(e,n))}}get p(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(qs(Oo,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}S(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new jo(t)}}class Lo{static delete(e){return qs(Oo,"Removing database:",e),Bo(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!g())return!1;if(Lo.v())return!0;const e=d(),t=Lo.C(e),n=0<t&&t<10,r=Mo(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static v(){var e;return"undefined"!=typeof process&&"YES"===(null===(e=process.__PRIVATE_env)||void 0===e?void 0:e.F)}static M(e,t){return e.store(t)}static C(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.O=n,12.2===Lo.C(d())&&zs("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async N(e){return this.db||(qs(Oo,"Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Fo(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new Js(Qs.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new Js(Qs.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Fo(e,r))},r.onupgradeneeded=e=>{qs(Oo,'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.O.B(t,r.transaction,e.oldVersion,this.version).next((()=>{qs(Oo,"Database upgrade to version "+this.version+" complete")}))}}))),this.L&&(this.db.onversionchange=e=>this.L(e)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.N(e);const t=Po.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next((e=>(t.S(),e))).catch((e=>(t.abort(e),Ro.reject(e)))).toPromise();return s.catch((()=>{})),await t.p,s}catch(o){const e=o,t="FirebaseError"!==e.name&&s<3;if(qs(Oo,"Transaction failed with error:",e.message,"Retrying:",t),this.close(),!t)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Mo(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class Vo{constructor(e){this.q=e,this.$=!1,this.K=null}get isDone(){return this.$}get U(){return this.K}set cursor(e){this.q=e}done(){this.$=!0}W(e){this.K=e}delete(){return Bo(this.q.delete())}}class Fo extends Js{constructor(e,t){super(Qs.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Uo(e){return"IndexedDbTransactionError"===e.name}class jo{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(qs(Oo,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(qs(Oo,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Bo(n)}add(e){return qs(Oo,"ADD",this.store.name,e,e),Bo(this.store.add(e))}get(e){return Bo(this.store.get(e)).next((t=>(void 0===t&&(t=null),qs(Oo,"GET",this.store.name,e,t),t)))}delete(e){return qs(Oo,"DELETE",this.store.name,e),Bo(this.store.delete(e))}count(){return qs(Oo,"COUNT",this.store.name),Bo(this.store.count())}G(e,t){const n=this.options(e,t),r=n.index?this.store.index(n.index):this.store;if("function"==typeof r.getAll){const e=r.getAll(n.range);return new Ro(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}{const e=this.cursor(n),t=[];return this.j(e,((e,n)=>{t.push(n)})).next((()=>t))}}H(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new Ro(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}J(e,t){qs(Oo,"DELETE ALL",this.store.name);const n=this.options(e,t);n.Y=!1;const r=this.cursor(n);return this.j(r,((e,t,n)=>n.delete()))}Z(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.j(r,t)}X(e){const t=this.cursor({});return new Ro(((n,r)=>{t.onerror=e=>{const t=zo(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}j(e,t){const n=[];return new Ro(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new Vo(i),o=t(i.primaryKey,i.value,s);if(o instanceof Ro){const e=o.catch((e=>(s.done(),Ro.reject(e))));n.push(e)}s.isDone?r():null===s.U?i.continue():i.continue(s.U)}})).next((()=>Ro.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Bo(e){return new Ro(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=zo(e.target.error);n(t)}}))}let qo=!1;function zo(e){const t=Lo.C(d());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new Js("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return qo||(qo=!0,setTimeout((()=>{throw e}),0)),e}}return e}const $o="IndexBackfiller";class Ko{constructor(e,t){this.asyncQueue=e,this.ee=t,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}te(e){qs($o,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const e=await this.ee.ne();qs($o,`Documents written: ${e}`)}catch(e){Uo(e)?qs($o,"Ignoring IndexedDB error during index backfill: ",e):await xo(e)}await this.te(6e4)}))}}class Go{constructor(e,t){this.localStore=e,this.persistence=t}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.re(t,e)))}re(e,t){const n=new Set;let r=t,i=!0;return Ro.doWhile((()=>!0===i&&r>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((t=>{if(null!==t&&!n.has(t))return qs($o,`Processing collection: ${t}`),this.ie(e,t,r).next((e=>{r-=e,n.add(t)}));i=!1})))).next((()=>t-r))}ie(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next((n=>{const i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next((()=>this.se(r,n))).next((n=>(qs($o,`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n)))).next((()=>i.size))}))))}se(e,t){let n=e;return t.changes.forEach(((e,t)=>{const r=Co(t);Ao(r,n)>0&&(n=r)})),new ko(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.oe(e),this._e=e=>t.writeSequenceNumber(e))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Ho.ae=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wo=-1;function Qo(e){return null==e}function Jo(e){return 0===e&&1/e==-1/0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Yo="";function Xo(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=ea(t)),t=Zo(e.get(n),t);return ea(t)}function Zo(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case Yo:n+="";break;default:n+=t}}return n}function ea(e){return e+Yo+""}function ta(e){const t=e.length;if(Hs(t>=2),2===t)return Hs(e.charAt(0)===Yo&&""===e.charAt(1)),yo.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf(Yo,s);switch((t<0||t>n)&&Gs(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:Gs()}s=t+2}return new yo(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na="remoteDocuments",ra="owner",ia="owner",sa="mutationQueues",oa="mutations",aa="batchId",ca="userMutationsIndex",ua=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(e,t){return[e,Xo(t)]}function ha(e,t,n){return[e,Xo(t),n]}const da={},fa="documentMutations",pa="remoteDocumentsV14",ga=["prefixPath","collectionGroup","readTime","documentId"],ma="documentKeyIndex",ya=["prefixPath","collectionGroup","documentId"],va="collectionGroupIndex",wa=["collectionGroup","readTime","prefixPath","documentId"],Ia="remoteDocumentGlobal",ba="remoteDocumentGlobalKey",Ta="targets",_a="queryTargetsIndex",Ea=["canonicalId","targetId"],Sa="targetDocuments",Ca=["targetId","path"],ka="documentTargetsIndex",Aa=["path","targetId"],Na="targetGlobalKey",Da="targetGlobal",xa="collectionParents",Ra=["collectionId","parent"],Oa="clientMetadata",Pa="bundles",La="namedQueries",Ma="indexConfiguration",Va="collectionGroupIndex",Fa="indexState",Ua=["indexId","uid"],ja="sequenceNumberIndex",Ba=["uid","sequenceNumber"],qa="indexEntries",za=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],$a="documentKeyIndex",Ka=["indexId","uid","orderedDocumentKey"],Ga="documentOverlays",Ha=["userId","collectionPath","documentId"],Wa="collectionPathOverlayIndex",Qa=["userId","collectionPath","largestBatchId"],Ja="collectionGroupOverlayIndex",Ya=["userId","collectionGroup","largestBatchId"],Xa="globals",Za=[sa,oa,fa,na,Ta,ra,Da,Sa,Oa,Ia,xa,Pa,La],ec=[...Za,Ga],tc=[sa,oa,fa,pa,Ta,ra,Da,Sa,Oa,Ia,xa,Pa,La,Ga],nc=tc,rc=[...nc,Ma,Fa,qa],ic=rc,sc=[...rc,Xa];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc extends Do{constructor(e,t){super(),this.ue=e,this.currentSequenceNumber=t}}function ac(e,t){const n=Ws(e);return Lo.M(n.ue,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function uc(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function lc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,t){this.comparator=e,this.root=t||fc.EMPTY}insert(e,t){return new hc(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,fc.BLACK,null,null))}remove(e){return new hc(this.comparator,this.root.remove(e,this.comparator).copy(null,null,fc.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new dc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new dc(this.root,e,this.comparator,!1)}getReverseIterator(){return new dc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new dc(this.root,e,this.comparator,!0)}}class dc{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class fc{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:fc.RED,this.left=null!=r?r:fc.EMPTY,this.right=null!=i?i:fc.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new fc(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return fc.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return fc.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,fc.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,fc.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Gs();if(this.right.isRed())throw Gs();const e=this.left.check();if(e!==this.right.check())throw Gs();return e+(this.isRed()?0:1)}}fc.EMPTY=null,fc.RED=!0,fc.BLACK=!1,fc.EMPTY=new class{constructor(){this.size=0}get key(){throw Gs()}get value(){throw Gs()}get color(){throw Gs()}get left(){throw Gs()}get right(){throw Gs()}copy(e,t,n,r,i){return this}insert(e,t,n){return new fc(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pc{constructor(e){this.comparator=e,this.data=new hc(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new gc(this.data.getIterator())}getIteratorFrom(e){return new gc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof pc))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new pc(this.comparator);return t.data=e,t}}class gc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function mc(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e){this.fields=e,e.sort(wo.comparator)}static empty(){return new yc([])}unionWith(e){let t=new pc(wo.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new yc(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return co(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new vc("Invalid base64 string: "+t):t}}(e);return new wc(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new wc(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ao(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}wc.EMPTY_BYTE_STRING=new wc("");const Ic=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bc(e){if(Hs(!!e),"string"==typeof e){let t=0;const n=Ic.exec(e);if(Hs(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Tc(e.seconds),nanos:Tc(e.nanos)}}function Tc(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function _c(e){return"string"==typeof e?wc.fromBase64String(e):wc.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec="server_timestamp",Sc="__type__",Cc="__previous_value__",kc="__local_write_time__";function Ac(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[Sc])||void 0===n?void 0:n.stringValue)===Ec}function Nc(e){const t=e.mapValue.fields[Cc];return Ac(t)?Nc(t):t}function Dc(e){const t=bc(e.mapValue.fields[kc].timestampValue);return new fo(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t,n,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}const Rc="(default)";class Oc{constructor(e,t){this.projectId=e,this.database=t||Rc}static empty(){return new Oc("","")}get isDefaultDatabase(){return this.database===Rc}isEqual(e){return e instanceof Oc&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc="__type__",Lc="__max__",Mc={mapValue:{fields:{__type__:{stringValue:Lc}}}},Vc="__vector__",Fc="value",Uc={nullValue:"NULL_VALUE"};function jc(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ac(e)?4:ru(e)?9007199254740991:tu(e)?10:11:Gs()}function Bc(e,t){if(e===t)return!0;const n=jc(e);if(n!==jc(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Dc(e).isEqual(Dc(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=bc(e.timestampValue),r=bc(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,_c(e.bytesValue).isEqual(_c(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Tc(e.geoPointValue.latitude)===Tc(t.geoPointValue.latitude)&&Tc(e.geoPointValue.longitude)===Tc(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Tc(e.integerValue)===Tc(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Tc(e.doubleValue),r=Tc(t.doubleValue);return n===r?Jo(n)===Jo(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return co(e.arrayValue.values||[],t.arrayValue.values||[],Bc);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(cc(n)!==cc(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Bc(n[i],r[i])))return!1;return!0}(e,t);default:return Gs()}var r}function qc(e,t){return void 0!==(e.values||[]).find((e=>Bc(e,t)))}function zc(e,t){if(e===t)return 0;const n=jc(e),r=jc(t);if(n!==r)return ao(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ao(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Tc(e.integerValue||e.doubleValue),r=Tc(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return $c(e.timestampValue,t.timestampValue);case 4:return $c(Dc(e),Dc(t));case 5:return ao(e.stringValue,t.stringValue);case 6:return function(e,t){const n=_c(e),r=_c(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=ao(n[i],r[i]);if(0!==e)return e}return ao(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=ao(Tc(e.latitude),Tc(t.latitude));return 0!==n?n:ao(Tc(e.longitude),Tc(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return Kc(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,i,s;const o=e.fields||{},a=t.fields||{},c=null===(n=o[Fc])||void 0===n?void 0:n.arrayValue,u=null===(r=a[Fc])||void 0===r?void 0:r.arrayValue,l=ao((null===(i=null==c?void 0:c.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==l?l:Kc(c,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===Mc.mapValue&&t===Mc.mapValue)return 0;if(e===Mc.mapValue)return 1;if(t===Mc.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=ao(r[o],s[o]);if(0!==e)return e;const t=zc(n[r[o]],i[s[o]]);if(0!==t)return t}return ao(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Gs()}}function $c(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return ao(e,t);const n=bc(e),r=bc(t),i=ao(n.seconds,r.seconds);return 0!==i?i:ao(n.nanos,r.nanos)}function Kc(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=zc(n[i],r[i]);if(e)return e}return ao(n.length,r.length)}function Gc(e){return Hc(e)}function Hc(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=bc(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?_c(e.bytesValue).toBase64():"referenceValue"in e?function(e){return Io.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Hc(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Hc(e.fields[i])}`;return n+"}"}(e.mapValue):Gs()}function Wc(e){switch(jc(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Nc(e);return t?16+Wc(t):16;case 5:return 2*e.stringValue.length;case 6:return _c(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return(e.arrayValue.values||[]).reduce(((e,t)=>e+Wc(t)),0);case 10:case 11:return function(e){let t=0;return uc(e.fields,((e,n)=>{t+=e.length+Wc(n)})),t}(e.mapValue);default:throw Gs()}}function Qc(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Jc(e){return!!e&&"integerValue"in e}function Yc(e){return!!e&&"arrayValue"in e}function Xc(e){return!!e&&"nullValue"in e}function Zc(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function eu(e){return!!e&&"mapValue"in e}function tu(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[Pc])||void 0===n?void 0:n.stringValue)===Vc}function nu(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return uc(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=nu(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=nu(e.arrayValue.values[n]);return t}return Object.assign({},e)}function ru(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===Lc}const iu={mapValue:{fields:{[Pc]:{stringValue:Vc},[Fc]:{arrayValue:{}}}}};function su(e){return"nullValue"in e?Uc:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?Qc(Oc.empty(),Io.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?tu(e)?iu:{mapValue:{}}:Gs()}function ou(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?Qc(Oc.empty(),Io.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?iu:"mapValue"in e?tu(e)?{mapValue:{}}:Mc:Gs()}function au(e,t){const n=zc(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function cu(e,t){const n=zc(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e){this.value=e}static empty(){return new uu({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!eu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=nu(t)}setAll(e){let t=wo.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=nu(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());eu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Bc(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];eu(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){uc(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new uu(nu(this.value))}}function lu(e){const t=[];return uc(e.fields,((e,n)=>{const r=new wo([e]);if(eu(n)){const e=lu(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new yc(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class hu{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new hu(e,0,po.min(),po.min(),po.min(),uu.empty(),0)}static newFoundDocument(e,t,n,r){return new hu(e,1,t,po.min(),n,r,0)}static newNoDocument(e,t){return new hu(e,2,t,po.min(),po.min(),uu.empty(),0)}static newUnknownDocument(e,t){return new hu(e,3,t,po.min(),po.min(),uu.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(po.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=uu.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=uu.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=po.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof hu&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new hu(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,t){this.position=e,this.inclusive=t}}function fu(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Io.comparator(Io.fromName(o.referenceValue),n.key):zc(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function pu(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Bc(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,t="asc"){this.field=e,this.dir=t}}function mu(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{}class vu extends yu{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Au(e,t,n):"array-contains"===t?new Ru(e,n):"in"===t?new Ou(e,n):"not-in"===t?new Pu(e,n):"array-contains-any"===t?new Lu(e,n):new vu(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Nu(e,n):new Du(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(zc(t,this.value)):null!==t&&jc(this.value)===jc(t)&&this.matchesComparison(zc(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Gs()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class wu extends yu{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new wu(e,t)}matches(e){return Iu(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Iu(e){return"and"===e.op}function bu(e){return"or"===e.op}function Tu(e){return _u(e)&&Iu(e)}function _u(e){for(const t of e.filters)if(t instanceof wu)return!1;return!0}function Eu(e){if(e instanceof vu)return e.field.canonicalString()+e.op.toString()+Gc(e.value);if(Tu(e))return e.filters.map((e=>Eu(e))).join(",");{const t=e.filters.map((e=>Eu(e))).join(",");return`${e.op}(${t})`}}function Su(e,t){return e instanceof vu?(n=e,(r=t)instanceof vu&&n.op===r.op&&n.field.isEqual(r.field)&&Bc(n.value,r.value)):e instanceof wu?function(e,t){return t instanceof wu&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&Su(n,t.filters[r])),!0)}(e,t):void Gs();var n,r}function Cu(e,t){const n=e.filters.concat(t);return wu.create(n,e.op)}function ku(e){return e instanceof vu?`${(t=e).field.canonicalString()} ${t.op} ${Gc(t.value)}`:e instanceof wu?function(e){return e.op.toString()+" {"+e.getFilters().map(ku).join(" ,")+"}"}(e):"Filter";var t}class Au extends vu{constructor(e,t,n){super(e,t,n),this.key=Io.fromName(n.referenceValue)}matches(e){const t=Io.comparator(e.key,this.key);return this.matchesComparison(t)}}class Nu extends vu{constructor(e,t){super(e,"in",t),this.keys=xu("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Du extends vu{constructor(e,t){super(e,"not-in",t),this.keys=xu("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function xu(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Io.fromName(e.referenceValue)))}class Ru extends vu{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Yc(t)&&qc(t.arrayValue,this.value)}}class Ou extends vu{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&qc(this.value.arrayValue,t)}}class Pu extends vu{constructor(e,t){super(e,"not-in",t)}matches(e){if(qc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!qc(this.value.arrayValue,t)}}class Lu extends vu{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Yc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>qc(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.le=null}}function Vu(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Mu(e,t,n,r,i,s,o)}function Fu(e){const t=Ws(e);if(null===t.le){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Eu(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),Qo(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Gc(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Gc(e))).join(",")),t.le=e}return t.le}function Uu(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!mu(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Su(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!pu(e.startAt,t.startAt)&&pu(e.endAt,t.endAt)}function ju(e){return Io.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function Bu(e,t){return e.filters.filter((e=>e instanceof vu&&e.field.isEqual(t)))}function qu(e,t,n){let r=Uc,i=!0;for(const s of Bu(e,t)){let e=Uc,t=!0;switch(s.op){case"<":case"<=":e=su(s.value);break;case"==":case"in":case">=":e=s.value;break;case">":e=s.value,t=!1;break;case"!=":case"not-in":e=Uc}au({value:r,inclusive:i},{value:e,inclusive:t})<0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];au({value:r,inclusive:i},{value:e,inclusive:n.inclusive})<0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}function zu(e,t,n){let r=Mc,i=!0;for(const s of Bu(e,t)){let e=Mc,t=!0;switch(s.op){case">=":case">":e=ou(s.value),t=!1;break;case"==":case"in":case"<=":e=s.value;break;case"<":e=s.value,t=!1;break;case"!=":case"not-in":e=Mc}cu({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];cu({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Ku(e){return new $u(e)}function Gu(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Hu(e){return null!==e.collectionGroup}function Wu(e){const t=Ws(e);if(null===t.he){t.he=[];const e=new Set;for(const r of t.explicitOrderBy)t.he.push(r),e.add(r.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(e){let t=new pc(wo.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t})(t).forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.he.push(new gu(r,n))})),e.has(wo.keyField().canonicalString())||t.he.push(new gu(wo.keyField(),n))}return t.he}function Qu(e){const t=Ws(e);return t.Pe||(t.Pe=function(e,t){if("F"===e.limitType)return Vu(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new gu(e.field,t)}));const n=e.endAt?new du(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new du(e.startAt.position,e.startAt.inclusive):null;return Vu(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(t,Wu(e))),t.Pe}function Ju(e,t){const n=e.filters.concat([t]);return new $u(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Yu(e,t,n){return new $u(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Xu(e,t){return Uu(Qu(e),Qu(t))&&e.limitType===t.limitType}function Zu(e){return`${Fu(Qu(e))}|lt:${e.limitType}`}function el(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>ku(e))).join(", ")}]`),Qo(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Gc(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Gc(e))).join(",")),`Target(${t})`}(Qu(e))}; limitType=${e.limitType})`}function tl(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Io.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Wu(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=fu(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,Wu(n),r)||n.endAt&&!function(e,t,n){const r=fu(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,Wu(n),r)));var n,r}function nl(e){return(t,n)=>{let r=!1;for(const i of Wu(e)){const e=rl(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function rl(e,t,n){const r=e.field.isKeyField()?Io.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?zc(r,i):Gs()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Gs()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){uc(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return lc(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=new hc(Io.comparator);function ol(){return sl}const al=new hc(Io.comparator);function cl(...e){let t=al;for(const n of e)t=t.insert(n.key,n);return t}function ul(e){let t=al;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function ll(){return dl()}function hl(){return dl()}function dl(){return new il((e=>e.toString()),((e,t)=>e.isEqual(t)))}const fl=new hc(Io.comparator),pl=new pc(Io.comparator);function gl(...e){let t=pl;for(const n of e)t=t.add(n);return t}const ml=new pc(ao);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yl(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jo(t)?"-0":t}}function vl(e){return{integerValue:""+e}}function wl(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!Jo(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?vl(t):yl(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(){this._=void 0}}function bl(e,t,n){return e instanceof El?function(e,t){const n={fields:{[Sc]:{stringValue:Ec},[kc]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Ac(t)&&(t=Nc(t)),t&&(n.fields[Cc]=t),{mapValue:n}}(n,t):e instanceof Sl?Cl(e,t):e instanceof kl?Al(e,t):function(e,t){const n=_l(e,t),r=Dl(n)+Dl(e.Ie);return Jc(n)&&Jc(e.Ie)?vl(r):yl(e.serializer,r)}(e,t)}function Tl(e,t,n){return e instanceof Sl?Cl(e,t):e instanceof kl?Al(e,t):n}function _l(e,t){return e instanceof Nl?Jc(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null;var n,r}class El extends Il{}class Sl extends Il{constructor(e){super(),this.elements=e}}function Cl(e,t){const n=xl(t);for(const r of e.elements)n.some((e=>Bc(e,r)))||n.push(r);return{arrayValue:{values:n}}}class kl extends Il{constructor(e){super(),this.elements=e}}function Al(e,t){let n=xl(t);for(const r of e.elements)n=n.filter((e=>!Bc(e,r)));return{arrayValue:{values:n}}}class Nl extends Il{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Dl(e){return Tc(e.integerValue||e.doubleValue)}function xl(e){return Yc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,t){this.field=e,this.transform=t}}class Ol{constructor(e,t){this.version=e,this.transformResults=t}}class Pl{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Pl}static exists(e){return new Pl(void 0,e)}static updateTime(e){return new Pl(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ll(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Ml{}function Vl(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Hl(e.key,Pl.none()):new ql(e.key,e.data,Pl.none());{const n=e.data,r=uu.empty();let i=new pc(wo.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new zl(e.key,r,new yc(i.toArray()),Pl.none())}}function Fl(e,t,n){var r;e instanceof ql?function(e,t,n){const r=e.value.clone(),i=Kl(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof zl?function(e,t,n){if(!Ll(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Kl(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll($l(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function Ul(e,t,n,r){return e instanceof ql?function(e,t,n,r){if(!Ll(e.precondition,t))return n;const i=e.value.clone(),s=Gl(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof zl?function(e,t,n,r){if(!Ll(e.precondition,t))return n;const i=Gl(e.fieldTransforms,r,t),s=t.data;return s.setAll($l(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):(i=t,s=n,Ll(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s);var i,s}function jl(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=_l(r.transform,e||null);null!=i&&(null===n&&(n=uu.empty()),n.set(r.field,i))}return n||null}function Bl(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&co(n,r,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof Sl&&r instanceof Sl||n instanceof kl&&r instanceof kl?co(n.elements,r.elements,Bc):n instanceof Nl&&r instanceof Nl?Bc(n.Ie,r.Ie):n instanceof El&&r instanceof El);var n,r}(e,t))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask)));var n,r}class ql extends Ml{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class zl extends Ml{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function $l(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Kl(e,t,n){const r=new Map;Hs(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Tl(o,a,n[i]))}return r}function Gl(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,bl(e,s,t))}return r}class Hl extends Ml{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Wl extends Ml{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Fl(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Ul(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Ul(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=hl();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=Vl(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(po.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),gl())}isEqual(e){return this.batchId===e.batchId&&co(this.mutations,e.mutations,((e,t)=>Bl(e,t)))&&co(this.baseMutations,e.baseMutations,((e,t)=>Bl(e,t)))}}class Jl{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Hs(e.mutations.length===n.length);let r=function(){return fl}();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Jl(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zl,eh;function th(e){if(void 0===e)return zs("GRPC error has no .code"),Qs.UNKNOWN;switch(e){case Zl.OK:return Qs.OK;case Zl.CANCELLED:return Qs.CANCELLED;case Zl.UNKNOWN:return Qs.UNKNOWN;case Zl.DEADLINE_EXCEEDED:return Qs.DEADLINE_EXCEEDED;case Zl.RESOURCE_EXHAUSTED:return Qs.RESOURCE_EXHAUSTED;case Zl.INTERNAL:return Qs.INTERNAL;case Zl.UNAVAILABLE:return Qs.UNAVAILABLE;case Zl.UNAUTHENTICATED:return Qs.UNAUTHENTICATED;case Zl.INVALID_ARGUMENT:return Qs.INVALID_ARGUMENT;case Zl.NOT_FOUND:return Qs.NOT_FOUND;case Zl.ALREADY_EXISTS:return Qs.ALREADY_EXISTS;case Zl.PERMISSION_DENIED:return Qs.PERMISSION_DENIED;case Zl.FAILED_PRECONDITION:return Qs.FAILED_PRECONDITION;case Zl.ABORTED:return Qs.ABORTED;case Zl.OUT_OF_RANGE:return Qs.OUT_OF_RANGE;case Zl.UNIMPLEMENTED:return Qs.UNIMPLEMENTED;case Zl.DATA_LOSS:return Qs.DATA_LOSS;default:return Gs()}}(eh=Zl||(Zl={}))[eh.OK=0]="OK",eh[eh.CANCELLED=1]="CANCELLED",eh[eh.UNKNOWN=2]="UNKNOWN",eh[eh.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",eh[eh.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",eh[eh.NOT_FOUND=5]="NOT_FOUND",eh[eh.ALREADY_EXISTS=6]="ALREADY_EXISTS",eh[eh.PERMISSION_DENIED=7]="PERMISSION_DENIED",eh[eh.UNAUTHENTICATED=16]="UNAUTHENTICATED",eh[eh.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",eh[eh.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",eh[eh.ABORTED=10]="ABORTED",eh[eh.OUT_OF_RANGE=11]="OUT_OF_RANGE",eh[eh.UNIMPLEMENTED=12]="UNIMPLEMENTED",eh[eh.INTERNAL=13]="INTERNAL",eh[eh.UNAVAILABLE=14]="UNAVAILABLE",eh[eh.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const nh=new Es([4294967295,4294967295],0);function rh(e){const t=(new TextEncoder).encode(e),n=new Ss;return n.update(t),new Uint8Array(n.digest())}function ih(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Es([n,r],0),new Es([i,s],0)]}class sh{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new oh(`Invalid padding: ${t}`);if(n<0)throw new oh(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new oh(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new oh(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=Es.fromNumber(this.Ee)}Ae(e,t,n){let r=e.add(t.multiply(Es.fromNumber(n)));return 1===r.compare(nh)&&(r=new Es([r.getBits(0),r.getBits(1)],0)),r.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ee)return!1;const t=rh(e),[n,r]=ih(t);for(let i=0;i<this.hashCount;i++){const e=this.Ae(n,r,i);if(!this.Re(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new sh(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.Ee)return;const t=rh(e),[n,r]=ih(t);for(let i=0;i<this.hashCount;i++){const e=this.Ae(n,r,i);this.Ve(e)}}Ve(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class oh extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,ch.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ah(po.min(),r,new hc(ao),ol(),gl())}}class ch{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new ch(n,t,gl(),gl(),gl())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,t,n,r){this.me=e,this.removedTargetIds=t,this.key=n,this.fe=r}}class lh{constructor(e,t){this.targetId=e,this.ge=t}}class hh{constructor(e,t,n=wc.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class dh{constructor(){this.pe=0,this.ye=gh(),this.we=wc.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return 0!==this.pe}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=gl(),t=gl(),n=gl();return this.ye.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Gs()}})),new ch(this.we,this.Se,e,t,n)}Me(){this.be=!1,this.ye=gh()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Hs(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class fh{constructor(e){this.ke=e,this.qe=new Map,this.Qe=ol(),this.$e=ph(),this.Ke=ph(),this.Ue=new hc(ao)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,(t=>{const n=this.He(t);switch(e.state){case 0:this.Je(t)&&n.Ce(e.resumeToken);break;case 1:n.Be(),n.De||n.Me(),n.Ce(e.resumeToken);break;case 2:n.Be(),n.De||this.removeTarget(t);break;case 3:this.Je(t)&&(n.Le(),n.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),n.Ce(e.resumeToken));break;default:Gs()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach(((e,n)=>{this.Je(n)&&t(n)}))}Ze(e){const t=e.targetId,n=e.ge.count,r=this.Xe(t);if(r){const i=r.target;if(ju(i))if(0===n){const e=new Io(i.path);this.ze(t,e,hu.newNoDocument(e,po.min()))}else Hs(1===n);else{const r=this.et(t);if(r!==n){const n=this.tt(e),i=n?this.nt(n,e,r):1;if(0!==i){this.Ye(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(t,e)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let s,o;try{s=_c(n).toUint8Array()}catch(a){if(a instanceof vc)return $s("Decoding the base64 bloom filter in existence filter failed ("+a.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw a}try{o=new sh(s,r,i)}catch(a){return $s(a instanceof oh?"BloomFilter error: ":"Applying bloom filter failed: ",a),null}return 0===o.Ee?null:o}nt(e,t,n){return t.ge.count===n-this.st(e,t.targetId)?0:2}st(e,t){const n=this.ke.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const i=this.ke.it(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.ze(t,n,null),r++)})),r}ot(e){const t=new Map;this.qe.forEach(((n,r)=>{const i=this.Xe(r);if(i){if(n.current&&ju(i.target)){const t=new Io(i.target.path);this._t(t).has(r)||this.ut(r,t)||this.ze(r,t,hu.newNoDocument(t,e))}n.ve&&(t.set(r,n.Fe()),n.Me())}}));let n=gl();this.Ke.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Xe(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Qe.forEach(((t,n)=>n.setReadTime(e)));const r=new ah(e,t,this.Ue,this.Qe,n);return this.Qe=ol(),this.$e=ph(),this.Ke=ph(),this.Ue=new hc(ao),r}Ge(e,t){if(!this.Je(e))return;const n=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,n),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,n){if(!this.Je(e))return;const r=this.He(e);this.ut(e,t)?r.xe(t,1):r.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),n&&(this.Qe=this.Qe.insert(t,n))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new dh,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new pc(ao),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new pc(ao),this.$e=this.$e.insert(e,t)),t}Je(e){const t=null!==this.Xe(e);return t||qs("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new dh),this.ke.getRemoteKeysForTarget(e).forEach((t=>{this.ze(e,t,null)}))}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function ph(){return new hc(Io.comparator)}function gh(){return new hc(Io.comparator)}const mh=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),yh=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),vh=(()=>({and:"AND",or:"OR"}))();class wh{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ih(e,t){return e.useProto3Json||Qo(t)?t:{value:t}}function bh(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Th(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function _h(e,t){return bh(e,t.toTimestamp())}function Eh(e){return Hs(!!e),po.fromTimestamp(function(e){const t=bc(e);return new fo(t.seconds,t.nanos)}(e))}function Sh(e,t){return Ch(e,t).canonicalString()}function Ch(e,t){const n=(r=e,new yo(["projects",r.projectId,"databases",r.database])).child("documents");var r;return void 0===t?n:n.child(t)}function kh(e){const t=yo.fromString(e);return Hs(Wh(t)),t}function Ah(e,t){return Sh(e.databaseId,t.path)}function Nh(e,t){const n=kh(t);if(n.get(1)!==e.databaseId.projectId)throw new Js(Qs.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Js(Qs.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Io(Oh(n))}function Dh(e,t){return Sh(e.databaseId,t)}function xh(e){const t=kh(e);return 4===t.length?yo.emptyPath():Oh(t)}function Rh(e){return new yo(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Oh(e){return Hs(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Ph(e,t,n){return{name:Ah(e,t),fields:n.value.mapValue.fields}}function Lh(e,t){let n;if(t instanceof ql)n={update:Ph(e,t.key,t.value)};else if(t instanceof Hl)n={delete:Ah(e,t.key)};else if(t instanceof zl)n={update:Ph(e,t.key,t.data),updateMask:Hh(t.fieldMask)};else{if(!(t instanceof Wl))return Gs();n={verify:Ah(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof El)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Sl)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof kl)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Nl)return{fieldPath:t.field.canonicalString(),increment:n.Ie};throw Gs()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:_h(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:Gs())),n;var r,i}function Mh(e,t){const n=t.currentDocument?void 0!==(i=t.currentDocument).updateTime?Pl.updateTime(Eh(i.updateTime)):void 0!==i.exists?Pl.exists(i.exists):Pl.none():Pl.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)Hs("REQUEST_TIME"===t.setToServerValue),n=new El;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new Sl(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new kl(e)}else"increment"in t?n=new Nl(e,t.increment):Gs();const r=wo.fromServerFormat(t.fieldPath);return new Rl(r,n)}(e,t))):[];var i;if(t.update){t.update.name;const i=Nh(e,t.update.name),s=new uu({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new yc(t.map((e=>wo.fromServerFormat(e))))}(t.updateMask);return new zl(i,s,e,n,r)}return new ql(i,s,n,r)}if(t.delete){const r=Nh(e,t.delete);return new Hl(r,n)}if(t.verify){const r=Nh(e,t.verify);return new Wl(r,n)}return Gs()}function Vh(e,t){return{documents:[Dh(e,t.path)]}}function Fh(e,t){const n={structuredQuery:{}},r=t.path;let i;null!==t.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Dh(e,i);const s=function(e){if(0!==e.length)return Gh(wu.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(e){if(0!==e.length)return e.map((e=>{return{field:$h((t=e).field),direction:Bh(t.dir)};var t}))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Ih(e,t.limit);return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt={before:(c=t.startAt).inclusive,values:c.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{ht:n,parent:i};var c}function Uh(e){let t=xh(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Hs(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=jh(e);return t instanceof wu&&Tu(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new gu(Kh((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Qo(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new du(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new du(n,t)}(n.endAt)),function(e,t,n,r,i,s,o,a){return new $u(e,t,n,r,i,s,o,a)}(t,i,o,s,a,"F",c,u)}function jh(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Kh(e.unaryFilter.field);return vu.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Kh(e.unaryFilter.field);return vu.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Kh(e.unaryFilter.field);return vu.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Kh(e.unaryFilter.field);return vu.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Gs()}}(e):void 0!==e.fieldFilter?(t=e,vu.create(Kh(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Gs()}}(t.fieldFilter.op),t.fieldFilter.value)):void 0!==e.compositeFilter?function(e){return wu.create(e.compositeFilter.filters.map((e=>jh(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Gs()}}(e.compositeFilter.op))}(e):Gs();var t}function Bh(e){return mh[e]}function qh(e){return yh[e]}function zh(e){return vh[e]}function $h(e){return{fieldPath:e.canonicalString()}}function Kh(e){return wo.fromServerFormat(e.fieldPath)}function Gh(e){return e instanceof vu?function(e){if("=="===e.op){if(Zc(e.value))return{unaryFilter:{field:$h(e.field),op:"IS_NAN"}};if(Xc(e.value))return{unaryFilter:{field:$h(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Zc(e.value))return{unaryFilter:{field:$h(e.field),op:"IS_NOT_NAN"}};if(Xc(e.value))return{unaryFilter:{field:$h(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$h(e.field),op:qh(e.op),value:e.value}}}(e):e instanceof wu?function(e){const t=e.getFilters().map((e=>Gh(e)));return 1===t.length?t[0]:{compositeFilter:{op:zh(e.op),filters:t}}}(e):Gs()}function Hh(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Wh(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,t,n,r,i=po.min(),s=po.min(),o=wc.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Qh(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Qh(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qh(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qh(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e){this.Tt=e}}function Yh(e,t){let n;if(t.document)n=function(e,t,n){const r=Nh(e,t.name),i=Eh(t.updateTime),s=t.createTime?Eh(t.createTime):po.min(),o=new uu({mapValue:{fields:t.fields}}),a=hu.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}(e.Tt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=Io.fromSegments(t.noDocument.path),r=td(t.noDocument.readTime);n=hu.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return Gs();{const e=Io.fromSegments(t.unknownDocument.path),r=td(t.unknownDocument.version);n=hu.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new fo(e[0],e[1]);return po.fromTimestamp(t)}(t.readTime)),n}function Xh(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Zh(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document={name:Ah(i=e.Tt,(s=t).key),fields:s.data.value.mapValue.fields,updateTime:bh(i,s.version.toTimestamp()),createTime:bh(i,s.createTime.toTimestamp())};else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:ed(t.version)};else{if(!t.isUnknownDocument())return Gs();r.unknownDocument={path:n.path.toArray(),version:ed(t.version)}}var i,s;return r}function Zh(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function ed(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function td(e){const t=new fo(e.seconds,e.nanoseconds);return po.fromTimestamp(t)}function nd(e,t){const n=(t.baseMutations||[]).map((t=>Mh(e.Tt,t)));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map((t=>Mh(e.Tt,t))),i=fo.fromMillis(t.localWriteTimeMs);return new Ql(t.batchId,i,n,r)}function rd(e){const t=td(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?td(e.lastLimboFreeSnapshotVersion):po.min();let r;return r=void 0!==e.query.documents?function(e){return Hs(1===e.documents.length),Qu(Ku(xh(e.documents[0])))}(e.query):function(e){return Qu(Uh(e))}(e.query),new Qh(r,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,n,wc.fromBase64String(e.resumeToken))}function id(e,t){const n=ed(t.snapshotVersion),r=ed(t.lastLimboFreeSnapshotVersion);let i;i=ju(t.target)?Vh(e.Tt,t.target):Fh(e.Tt,t.target).ht;const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Fu(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function sd(e){const t=Uh({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Yu(t,t.limit,"L"):t}function od(e,t){return new Yl(t.largestBatchId,Mh(e.Tt,t.overlayMutation))}function ad(e,t){const n=t.path.lastSegment();return[e,Xo(t.path.popLast()),n]}function cd(e,t,n,r){return{indexId:e,uid:t,sequenceNumber:n,readTime:ed(r.readTime),documentKey:Xo(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{getBundleMetadata(e,t){return ld(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:td(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return ld(e).put({bundleId:(n=t).id,createTime:ed(Eh(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return hd(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:sd(t.bundledQuery),readTime:td(t.readTime)};var t}))}saveNamedQuery(e,t){return hd(e).put({name:(n=t).name,readTime:ed(Eh(n.readTime)),bundledQuery:n.bundledQuery});var n}}function ld(e){return ac(e,Pa)}function hd(e){return ac(e,La)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,t){this.serializer=e,this.userId=t}static It(e,t){const n=t.uid||"";return new dd(e,n)}getOverlay(e,t){return fd(e).get(ad(this.userId,t)).next((e=>e?od(this.serializer,e):null))}getOverlays(e,t){const n=ll();return Ro.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){const r=[];return n.forEach(((n,i)=>{const s=new Yl(t,i);r.push(this.Et(e,s))})),Ro.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach((e=>r.add(Xo(e.getCollectionPath()))));const i=[];return r.forEach((t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(fd(e).J(Wa,r))})),Ro.waitFor(i)}getOverlaysForCollection(e,t,n){const r=ll(),i=Xo(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return fd(e).G(Wa,s).next((e=>{for(const t of e){const e=od(this.serializer,t);r.set(e.getKey(),e)}return r}))}getOverlaysForCollectionGroup(e,t,n,r){const i=ll();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return fd(e).Z({index:Ja,range:o},((e,t,n)=>{const o=od(this.serializer,t);i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()})).next((()=>i))}Et(e,t){return fd(e).put(function(e,t,n){const[r,i,s]=ad(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:Lh(e.Tt,n.mutation)}}(this.serializer,this.userId,t))}}function fd(e){return ac(e,Ga)}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{dt(e){return ac(e,Xa)}getSessionToken(e){return this.dt(e).get("sessionToken").next((e=>{const t=null==e?void 0:e.value;return t?wc.fromUint8Array(t):wc.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.dt(e).put({name:"sessionToken",value:t.toUint8Array()})}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(){}At(e,t){this.Rt(e,t),t.Vt()}Rt(e,t){if("nullValue"in e)this.ft(t,5);else if("booleanValue"in e)this.ft(t,10),t.gt(e.booleanValue?1:0);else if("integerValue"in e)this.ft(t,15),t.gt(Tc(e.integerValue));else if("doubleValue"in e){const n=Tc(e.doubleValue);isNaN(n)?this.ft(t,13):(this.ft(t,15),Jo(n)?t.gt(0):t.gt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.ft(t,20),"string"==typeof n&&(n=bc(n)),t.yt(`${n.seconds||""}`),t.gt(n.nanos||0)}else if("stringValue"in e)this.wt(e.stringValue,t),this.St(t);else if("bytesValue"in e)this.ft(t,30),t.bt(_c(e.bytesValue)),this.St(t);else if("referenceValue"in e)this.Dt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ft(t,45),t.gt(n.latitude||0),t.gt(n.longitude||0)}else"mapValue"in e?ru(e)?this.ft(t,Number.MAX_SAFE_INTEGER):tu(e)?this.vt(e.mapValue,t):(this.Ct(e.mapValue,t),this.St(t)):"arrayValue"in e?(this.Ft(e.arrayValue,t),this.St(t)):Gs()}wt(e,t){this.ft(t,25),this.Mt(e,t)}Mt(e,t){t.yt(e)}Ct(e,t){const n=e.fields||{};this.ft(t,55);for(const r of Object.keys(n))this.wt(r,t),this.Rt(n[r],t)}vt(e,t){var n,r;const i=e.fields||{};this.ft(t,53);const s=Fc,o=(null===(r=null===(n=i[s].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.ft(t,15),t.gt(Tc(o)),this.wt(s,t),this.Rt(i[s],t)}Ft(e,t){const n=e.values||[];this.ft(t,50);for(const r of n)this.Rt(r,t)}Dt(e,t){this.ft(t,37),Io.fromName(e).path.forEach((e=>{this.ft(t,60),this.Mt(e,t)}))}ft(e,t){e.gt(t)}St(e){e.gt(2)}}gd.xt=new gd;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const md=255;function yd(e){if(0===e)return 8;let t=0;return e>>4||(t+=4,e<<=4),e>>6||(t+=2,e<<=2),e>>7||(t+=1),t}function vd(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=yd(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}class wd{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ot(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Nt(n.value),n=t.next();this.Bt()}Lt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.kt(n.value),n=t.next();this.qt()}Qt(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Nt(e);else if(e<2048)this.Nt(960|e>>>6),this.Nt(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Nt(480|e>>>12),this.Nt(128|63&e>>>6),this.Nt(128|63&e);else{const e=t.codePointAt(0);this.Nt(240|e>>>18),this.Nt(128|63&e>>>12),this.Nt(128|63&e>>>6),this.Nt(128|63&e)}}this.Bt()}$t(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.kt(e);else if(e<2048)this.kt(960|e>>>6),this.kt(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.kt(480|e>>>12),this.kt(128|63&e>>>6),this.kt(128|63&e);else{const e=t.codePointAt(0);this.kt(240|e>>>18),this.kt(128|63&e>>>12),this.kt(128|63&e>>>6),this.kt(128|63&e)}}this.qt()}Kt(e){const t=this.Ut(e),n=vd(t);this.Wt(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Gt(e){const t=this.Ut(e),n=vd(t);this.Wt(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}zt(){this.jt(md),this.jt(255)}Ht(){this.Jt(md),this.Jt(255)}reset(){this.position=0}seed(e){this.Wt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Yt(){return this.buffer.slice(0,this.position)}Ut(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}Nt(e){const t=255&e;0===t?(this.jt(0),this.jt(255)):t===md?(this.jt(md),this.jt(0)):this.jt(t)}kt(e){const t=255&e;0===t?(this.Jt(0),this.Jt(255)):t===md?(this.Jt(md),this.Jt(0)):this.Jt(e)}Bt(){this.jt(0),this.jt(1)}qt(){this.Jt(0),this.Jt(1)}jt(e){this.Wt(1),this.buffer[this.position++]=e}Jt(e){this.Wt(1),this.buffer[this.position++]=~e}Wt(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class Id{constructor(e){this.Zt=e}bt(e){this.Zt.Ot(e)}yt(e){this.Zt.Qt(e)}gt(e){this.Zt.Kt(e)}Vt(){this.Zt.zt()}}class bd{constructor(e){this.Zt=e}bt(e){this.Zt.Lt(e)}yt(e){this.Zt.$t(e)}gt(e){this.Zt.Gt(e)}Vt(){this.Zt.Ht()}}class Td{constructor(){this.Zt=new wd,this.Xt=new Id(this.Zt),this.en=new bd(this.Zt)}seed(e){this.Zt.seed(e)}tn(e){return 0===e?this.Xt:this.en}Yt(){return this.Zt.Yt()}reset(){this.Zt.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}nn(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new _d(this.indexId,this.documentKey,this.arrayValue,n)}}function Ed(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=Sd(e.arrayValue,t.arrayValue),0!==n?n:(n=Sd(e.directionalValue,t.directionalValue),0!==n?n:Io.comparator(e.documentKey,t.documentKey)))}function Sd(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e){this.rn=new pc(((e,t)=>wo.comparator(e.field,t.field))),this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.sn=e.orderBy,this._n=[];for(const t of e.filters){const e=t;e.isInequality()?this.rn=this.rn.add(e):this._n.push(e)}}get an(){return this.rn.size>1}un(e){if(Hs(e.collectionGroup===this.collectionId),this.an)return!1;const t=To(e);if(void 0!==t&&!this.cn(t))return!1;const n=_o(e);let r=new Set,i=0,s=0;for(;i<n.length&&this.cn(n[i]);++i)r=r.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.rn.size>0){const e=this.rn.getIterator().getNext();if(!r.has(e.field.canonicalString())){const t=n[i];if(!this.ln(e,t)||!this.hn(this.sn[s++],t))return!1}++i}for(;i<n.length;++i){const e=n[i];if(s>=this.sn.length||!this.hn(this.sn[s++],e))return!1}return!0}Pn(){if(this.an)return null;let e=new pc(wo.comparator);const t=[];for(const n of this._n)if(!n.field.isKeyField())if("array-contains"===n.op||"array-contains-any"===n.op)t.push(new Eo(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new Eo(n.field,0))}for(const n of this.sn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new Eo(n.field,"asc"===n.dir?0:1)));return new bo(bo.UNKNOWN_ID,this.collectionId,t,So.empty())}cn(e){for(const t of this._n)if(this.ln(t,e))return!0;return!1}ln(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}hn(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(e){var t,n;if(Hs(e instanceof vu||e instanceof wu),e instanceof vu){if(e instanceof Ou){const r=(null===(n=null===(t=e.value.arrayValue)||void 0===t?void 0:t.values)||void 0===n?void 0:n.map((t=>vu.create(e.field,"==",t))))||[];return wu.create(r,"or")}return e}const r=e.filters.map((e=>kd(e)));return wu.create(r,e.op)}function Ad(e){if(0===e.getFilters().length)return[];const t=Rd(kd(e));return Hs(xd(t)),Nd(t)||Dd(t)?[t]:t.getFilters()}function Nd(e){return e instanceof vu}function Dd(e){return e instanceof wu&&Tu(e)}function xd(e){return Nd(e)||Dd(e)||function(e){if(e instanceof wu&&bu(e)){for(const t of e.getFilters())if(!Nd(t)&&!Dd(t))return!1;return!0}return!1}(e)}function Rd(e){if(Hs(e instanceof vu||e instanceof wu),e instanceof vu)return e;if(1===e.filters.length)return Rd(e.filters[0]);const t=e.filters.map((e=>Rd(e)));let n=wu.create(t,e.op);return n=Ld(n),xd(n)?n:(Hs(n instanceof wu),Hs(Iu(n)),Hs(n.filters.length>1),n.filters.reduce(((e,t)=>Od(e,t))))}function Od(e,t){let n;return Hs(e instanceof vu||e instanceof wu),Hs(t instanceof vu||t instanceof wu),n=e instanceof vu?t instanceof vu?(r=e,i=t,wu.create([r,i],"and")):Pd(e,t):t instanceof vu?Pd(t,e):function(e,t){if(Hs(e.filters.length>0&&t.filters.length>0),Iu(e)&&Iu(t))return Cu(e,t.getFilters());const n=bu(e)?e:t,r=bu(e)?t:e,i=n.filters.map((e=>Od(e,r)));return wu.create(i,"or")}(e,t),Ld(n);var r,i}function Pd(e,t){if(Iu(t))return Cu(t,e.getFilters());{const n=t.filters.map((t=>Od(e,t)));return wu.create(n,"or")}}function Ld(e){if(Hs(e instanceof vu||e instanceof wu),e instanceof vu)return e;const t=e.getFilters();if(1===t.length)return Ld(t[0]);if(_u(e))return e;const n=t.map((e=>Ld(e))),r=[];return n.forEach((t=>{t instanceof vu?r.push(t):t instanceof wu&&(t.op===e.op?r.push(...t.filters):r.push(t))})),1===r.length?r[0]:wu.create(r,e.op)
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Md{constructor(){this.Tn=new Vd}addToCollectionParentIndex(e,t){return this.Tn.add(t),Ro.resolve()}getCollectionParents(e,t){return Ro.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return Ro.resolve()}deleteFieldIndex(e,t){return Ro.resolve()}deleteAllFieldIndexes(e){return Ro.resolve()}createTargetIndexes(e,t){return Ro.resolve()}getDocumentsMatchingTarget(e,t){return Ro.resolve(null)}getIndexType(e,t){return Ro.resolve(0)}getFieldIndexes(e,t){return Ro.resolve([])}getNextCollectionGroupToUpdate(e){return Ro.resolve(null)}getMinOffset(e,t){return Ro.resolve(ko.min())}getMinOffsetFromCollectionGroup(e,t){return Ro.resolve(ko.min())}updateCollectionGroup(e,t,n){return Ro.resolve()}updateIndexEntries(e,t){return Ro.resolve()}}class Vd{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new pc(yo.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new pc(yo.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="IndexedDbIndexManager",Ud=new Uint8Array(0);class jd{constructor(e,t){this.databaseId=t,this.In=new Vd,this.En=new il((e=>Fu(e)),((e,t)=>Uu(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.In.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.In.add(t)}));const i={collectionId:n,parent:Xo(r)};return Bd(e).put(i)}return Ro.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[uo(t),""],!1,!0);return Bd(e).G(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(ta(r.parent))}return n}))}addFieldIndex(e,t){const n=zd(e),r={indexId:(i=t).indexId,collectionGroup:i.collectionGroup,fields:i.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))};var i;delete r.indexId;const s=n.add(r);if(t.indexState){const n=$d(e);return s.next((e=>{n.put(cd(e,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return s.next()}deleteFieldIndex(e,t){const n=zd(e),r=$d(e),i=qd(e);return n.delete(t.indexId).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=zd(e),n=qd(e),r=$d(e);return t.J().next((()=>n.J())).next((()=>r.J()))}createTargetIndexes(e,t){return Ro.forEach(this.dn(t),(t=>this.getIndexType(e,t).next((n=>{if(0===n||1===n){const n=new Cd(t).Pn();if(null!=n)return this.addFieldIndex(e,n)}}))))}getDocumentsMatchingTarget(e,t){const n=qd(e);let r=!0;const i=new Map;return Ro.forEach(this.dn(t),(t=>this.An(e,t).next((e=>{r&&(r=!!e),i.set(t,e)})))).next((()=>{if(r){let e=gl();const r=[];return Ro.forEach(i,((i,s)=>{var o;qs(Fd,`Using index ${o=i,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`} to execute ${Fu(t)}`);const a=function(e,t){const n=To(t);if(void 0===n)return null;for(const r of Bu(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(s,i),c=function(e,t){const n=new Map;for(const r of _o(t))for(const t of Bu(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),u=function(e,t){const n=[];let r=!0;for(const i of _o(t)){const t=0===i.kind?qu(e,i.fieldPath,e.startAt):zu(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new du(n,r)}(s,i),l=function(e,t){const n=[];let r=!0;for(const i of _o(t)){const t=0===i.kind?zu(e,i.fieldPath,e.endAt):qu(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new du(n,r)}(s,i),h=this.Rn(i,s,u),d=this.Rn(i,s,l),f=this.Vn(i,s,c),p=this.mn(i.indexId,a,h,u.inclusive,d,l.inclusive,f);return Ro.forEach(p,(i=>n.H(i,t.limit).next((t=>{t.forEach((t=>{const n=Io.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))}))}))))})).next((()=>r))}return Ro.resolve(null)}))}dn(e){let t=this.En.get(e);return t||(t=0===e.filters.length?[e]:Ad(wu.create(e.filters,"and")).map((t=>Vu(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt))),this.En.set(e,t),t)}mn(e,t,n,r,i,s,o){const a=(null!=t?t.length:1)*Math.max(n.length,i.length),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.fn(t[l/c]):Ud,h=this.gn(e,a,n[l%c],r),d=this.pn(e,a,i[l%c],s),f=o.map((t=>this.gn(e,a,t,!0)));u.push(...this.createRange(h,d,f))}return u}gn(e,t,n,r){const i=new _d(e,Io.empty(),t,n);return r?i:i.nn()}pn(e,t,n,r){const i=new _d(e,Io.empty(),t,n);return r?i.nn():i}An(e,t){const n=new Cd(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next((e=>{let t=null;for(const r of e)n.un(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t}))}getIndexType(e,t){let n=2;const r=this.dn(t);return Ro.forEach(r,(t=>this.An(e,t).next((e=>{e?0!==n&&e.fields.length<function(e){let t=new pc(wo.comparator),n=!1;for(const r of e.filters)for(const e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(const r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})))).next((()=>null!==t.limit&&r.length>1&&2===n?1:n))}yn(e,t){const n=new Td;for(const r of _o(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.tn(r.kind);gd.xt.At(e,i)}return n.Yt()}fn(e){const t=new Td;return gd.xt.At(e,t.tn(0)),t.Yt()}wn(e,t){const n=new Td;return gd.xt.At(Qc(this.databaseId,t),n.tn(function(e){const t=_o(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Yt()}Vn(e,t,n){if(null===n)return[];let r=[];r.push(new Td);let i=0;for(const s of _o(e)){const e=n[i++];for(const n of r)if(this.Sn(t,s.fieldPath)&&Yc(e))r=this.bn(r,s,e);else{const t=n.tn(s.kind);gd.xt.At(e,t)}}return this.Dn(r)}Rn(e,t,n){return this.Vn(e,t,n.position)}Dn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Yt();return t}bn(e,t,n){const r=[...e],i=[];for(const s of n.arrayValue.values||[])for(const e of r){const n=new Td;n.seed(e.Yt()),gd.xt.At(s,n.tn(t.kind)),i.push(n)}return i}Sn(e,t){return!!e.filters.find((e=>e instanceof vu&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=zd(e),r=$d(e);return(t?n.G(Va,IDBKeyRange.bound(t,t)):n.G()).next((e=>{const t=[];return Ro.forEach(e,(e=>r.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new So(t.sequenceNumber,new ko(td(t.readTime),new Io(ta(t.documentKey)),t.largestBatchId)):So.empty(),r=e.fields.map((([e,t])=>new Eo(wo.fromServerFormat(e),t)));return new bo(e.indexId,e.collectionGroup,r,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:ao(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const r=zd(e),i=$d(e);return this.vn(e).next((e=>r.G(Va,IDBKeyRange.bound(t,t)).next((t=>Ro.forEach(t,(t=>i.put(cd(t.indexId,this.uid,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return Ro.forEach(t,((t,r)=>{const i=n.get(t.collectionGroup);return(i?Ro.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next((i=>(n.set(t.collectionGroup,i),Ro.forEach(i,(n=>this.Cn(e,t,n).next((t=>{const i=this.Fn(r,n);return t.isEqual(i)?Ro.resolve():this.Mn(e,r,n,t,i)})))))))}))}xn(e,t,n,r){return qd(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.wn(n,t.key),documentKey:t.key.path.toArray()})}On(e,t,n,r){return qd(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.wn(n,t.key),t.key.path.toArray()])}Cn(e,t,n){const r=qd(e);let i=new pc(Ed);return r.Z({index:$a,range:IDBKeyRange.only([n.indexId,this.uid,this.wn(n,t)])},((e,r)=>{i=i.add(new _d(n.indexId,t,r.arrayValue,r.directionalValue))})).next((()=>i))}Fn(e,t){let n=new pc(Ed);const r=this.yn(t,e);if(null==r)return n;const i=To(t);if(null!=i){const s=e.data.field(i.fieldPath);if(Yc(s))for(const i of s.arrayValue.values||[])n=n.add(new _d(t.indexId,e.key,this.fn(i),r))}else n=n.add(new _d(t.indexId,e.key,Ud,r));return n}Mn(e,t,n,r,i){qs(Fd,"Updating index entries for document '%s'",t.key);const s=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=mc(s),c=mc(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=mc(o)):t?(i(a),a=mc(s)):(a=mc(s),c=mc(o))}}(r,i,Ed,(r=>{s.push(this.xn(e,t,n,r))}),(r=>{s.push(this.On(e,t,n,r))})),Ro.waitFor(s)}vn(e){let t=1;return $d(e).Z({index:ja,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,r)=>{r.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>Ed(e,t))).filter(((e,t,n)=>!t||0!==Ed(e,n[t-1])));const r=[];r.push(e);for(const s of n){const n=Ed(s,e),i=Ed(s,t);if(0===n)r[0]=e.nn();else if(n>0&&i<0)r.push(s),r.push(s.nn());else if(i>0)break}r.push(t);const i=[];for(let s=0;s<r.length;s+=2){if(this.Nn(r[s],r[s+1]))return[];const e=[r[s].indexId,this.uid,r[s].arrayValue,r[s].directionalValue,Ud,[]],t=[r[s+1].indexId,this.uid,r[s+1].arrayValue,r[s+1].directionalValue,Ud,[]];i.push(IDBKeyRange.bound(e,t))}return i}Nn(e,t){return Ed(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Kd)}getMinOffset(e,t){return Ro.mapArray(this.dn(t),(t=>this.An(e,t).next((e=>e||Gs())))).next(Kd)}}function Bd(e){return ac(e,xa)}function qd(e){return ac(e,qa)}function zd(e){return ac(e,Ma)}function $d(e){return ac(e,Fa)}function Kd(e){Hs(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const i=e[r].indexState.offset;Ao(i,t)<0&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new ko(t.readTime,t.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Hd=41943040;class Wd{static withCacheSize(e){return new Wd(e,Wd.DEFAULT_COLLECTION_PERCENTILE,Wd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(e,t,n){const r=e.store(oa),i=e.store(fa),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Z({range:o},((e,t,n)=>(a++,n.delete())));s.push(c.next((()=>{Hs(1===a)})));const u=[];for(const l of n.mutations){const e=ha(t,l.key.path,n.batchId);s.push(i.delete(e)),u.push(l.key)}return Ro.waitFor(s).next((()=>u))}function Jd(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw Gs();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wd.DEFAULT_COLLECTION_PERCENTILE=10,Wd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Wd.DEFAULT=new Wd(Hd,Wd.DEFAULT_COLLECTION_PERCENTILE,Wd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Wd.DISABLED=new Wd(-1,0,0);class Yd{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.Bn={}}static It(e,t,n,r){Hs(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new Yd(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Zd(e).Z({index:ca,range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const i=ef(e),s=Zd(e);return s.add({}).next((o=>{Hs("number"==typeof o);const a=new Ql(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>Lh(e.Tt,t))),i=n.mutations.map((t=>Lh(e.Tt,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.serializer,this.userId,a),u=[];let l=new pc(((e,t)=>ao(e.canonicalString(),t.canonicalString())));for(const e of r){const t=ha(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,da))}return l.forEach((t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.Bn[o]=a.keys()})),Ro.waitFor(u).next((()=>a))}))}lookupMutationBatch(e,t){return Zd(e).get(t).next((e=>e?(Hs(e.userId===this.userId),nd(this.serializer,e)):null))}Ln(e,t){return this.Bn[t]?Ro.resolve(this.Bn[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.Bn[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Zd(e).Z({index:ca,range:r},((e,t,r)=>{t.userId===this.userId&&(Hs(t.batchId>=n),i=nd(this.serializer,t)),r.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=Wo;return Zd(e).Z({index:ca,range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Wo],[this.userId,Number.POSITIVE_INFINITY]);return Zd(e).G(ca,t).next((e=>e.map((e=>nd(this.serializer,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=la(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return ef(e).Z({range:r},((n,r,s)=>{const[o,a,c]=n,u=ta(a);if(o===this.userId&&t.path.isEqual(u))return Zd(e).get(c).next((e=>{if(!e)throw Gs();Hs(e.userId===this.userId),i.push(nd(this.serializer,e))}));s.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new pc(ao);const r=[];return t.forEach((t=>{const i=la(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=ef(e).Z({range:s},((e,r,i)=>{const[s,o,a]=e,c=ta(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()}));r.push(o)})),Ro.waitFor(r).next((()=>this.kn(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=la(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new pc(ao);return ef(e).Z({range:s},((e,t,i)=>{const[s,a,c]=e,u=ta(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()})).next((()=>this.kn(e,o)))}kn(e,t){const n=[],r=[];return t.forEach((t=>{r.push(Zd(e).get(t).next((e=>{if(null===e)throw Gs();Hs(e.userId===this.userId),n.push(nd(this.serializer,e))})))})),Ro.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return Qd(e.ue,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.qn(t.batchId)})),Ro.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}qn(e){delete this.Bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return Ro.resolve();const n=IDBKeyRange.lowerBound(function(e){return[e]}(this.userId)),r=[];return ef(e).Z({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=ta(e[1]);r.push(t)}else n.done()})).next((()=>{Hs(0===r.length)}))}))}containsKey(e,t){return Xd(e,this.userId,t)}Qn(e){return tf(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:Wo,lastStreamToken:""}))}}function Xd(e,t,n){const r=la(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return ef(e).Z({range:s,Y:!0},((e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()})).next((()=>o))}function Zd(e){return ac(e,oa)}function ef(e){return ac(e,fa)}function tf(e){return ac(e,sa)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new nf(0)}static Un(){return new nf(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Wn(e).next((t=>{const n=new nf(t.highestTargetId);return t.highestTargetId=n.next(),this.Gn(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.Wn(e).next((e=>po.fromTimestamp(new fo(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.Wn(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.Wn(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Gn(e,r))))}addTargetData(e,t){return this.zn(e,t).next((()=>this.Wn(e).next((n=>(n.targetCount+=1,this.jn(t,n),this.Gn(e,n))))))}updateTargetData(e,t){return this.zn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>sf(e).delete(t.targetId))).next((()=>this.Wn(e))).next((t=>(Hs(t.targetCount>0),t.targetCount-=1,this.Gn(e,t))))}removeTargets(e,t,n){let r=0;const i=[];return sf(e).Z(((s,o)=>{const a=rd(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))})).next((()=>Ro.waitFor(i))).next((()=>r))}forEachTarget(e,t){return sf(e).Z(((e,n)=>{const r=rd(n);t(r)}))}Wn(e){return of(e).get(Na).next((e=>(Hs(null!==e),e)))}Gn(e,t){return of(e).put(Na,t)}zn(e,t){return sf(e).put(id(this.serializer,t))}jn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Wn(e).next((e=>e.targetCount))}getTargetData(e,t){const n=Fu(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return sf(e).Z({range:r,index:_a},((e,n,r)=>{const s=rd(n);Uu(t,s.target)&&(i=s,r.done())})).next((()=>i))}addMatchingKeys(e,t,n){const r=[],i=af(e);return t.forEach((t=>{const s=Xo(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))})),Ro.waitFor(r)}removeMatchingKeys(e,t,n){const r=af(e);return Ro.forEach(t,(t=>{const i=Xo(t.path);return Ro.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=af(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=af(e);let i=gl();return r.Z({range:n,Y:!0},((e,t,n)=>{const r=ta(e[1]),s=new Io(r);i=i.add(s)})).next((()=>i))}containsKey(e,t){const n=Xo(t.path),r=IDBKeyRange.bound([n],[uo(n)],!1,!0);let i=0;return af(e).Z({index:ka,Y:!0,range:r},(([e,t],n,r)=>{0!==e&&(i++,r.done())})).next((()=>i>0))}lt(e,t){return sf(e).get(t).next((e=>e?rd(e):null))}}function sf(e){return ac(e,Ta)}function of(e){return ac(e,Da)}function af(e){return ac(e,Sa)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf="LruGarbageCollector",uf=1048576;function lf([e,t],[n,r]){const i=ao(e,n);return 0===i?ao(t,r):i}class hf{constructor(e){this.Hn=e,this.buffer=new pc(lf),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();lf(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class df{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Xn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return null!==this.Xn}er(e){qs(cf,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Uo(e)?qs(cf,"Ignoring IndexedDB error during garbage collection: ",e):await xo(e)}await this.er(3e5)}))}}class ff{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return Ro.resolve(Ho.ae);const n=new hf(t);return this.tr.forEachTarget(e,(e=>n.Zn(e.sequenceNumber))).next((()=>this.tr.rr(e,(e=>n.Zn(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.tr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(qs("LruGarbageCollector","Garbage collection skipped; disabled"),Ro.resolve(Gd)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(qs("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Gd):this.ir(e,t)))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let n,r,i,s,o,a,c;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(qs("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,a=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(c=Date.now(),Bs()<=x.DEBUG&&qs("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-u}ms\n\tDetermined least recently used ${r} in `+(o-s)+`ms\n\tRemoved ${i} targets in `+(a-o)+`ms\n\tRemoved ${e} documents in `+(c-a)+`ms\nTotal Duration: ${c-u}ms`),Ro.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}function pf(e,t){return new ff(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,t){this.db=e,this.garbageCollector=pf(this,t)}nr(e){const t=this.sr(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}sr(e){let t=0;return this.rr(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}rr(e,t){return this._r(e,((e,n)=>t(n)))}addReference(e,t,n){return mf(e,n)}removeReference(e,t,n){return mf(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return mf(e,t)}ar(e,t){return function(e,t){let n=!1;return tf(e).X((r=>Xd(e,r,t).next((e=>(e&&(n=!0),Ro.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this._r(e,((s,o)=>{if(o<=t){const t=this.ar(e,s).next((t=>{if(!t)return i++,n.getEntry(e,s).next((()=>(n.removeEntry(s,po.min()),af(e).delete([0,Xo(s.path)]))))}));r.push(t)}})).next((()=>Ro.waitFor(r))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return mf(e,t)}_r(e,t){const n=af(e);let r,i=Ho.ae;return n.Z({index:ka},(([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==Ho.ae&&t(new Io(ta(r)),i),i=o,r=s):i=Ho.ae})).next((()=>{i!==Ho.ae&&t(new Io(ta(r)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function mf(e,t){return af(e).put((n=t,r=e.currentSequenceNumber,{targetId:0,path:Xo(n.path),sequenceNumber:r}));var n,r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(){this.changes=new il((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,hu.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Ro.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Tf(e).put(n)}removeEntry(e,t,n){return Tf(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],Zh(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.ur(e,n))))}getEntry(e,t){let n=hu.newInvalidDocument(t);return Tf(e).Z({index:ma,range:IDBKeyRange.only(_f(t))},((e,r)=>{n=this.cr(t,r)})).next((()=>n))}lr(e,t){let n={size:0,document:hu.newInvalidDocument(t)};return Tf(e).Z({index:ma,range:IDBKeyRange.only(_f(t))},((e,r)=>{n={document:this.cr(t,r),size:Jd(r)}})).next((()=>n))}getEntries(e,t){let n=ol();return this.hr(e,t,((e,t)=>{const r=this.cr(e,t);n=n.insert(e,r)})).next((()=>n))}Pr(e,t){let n=ol(),r=new hc(Io.comparator);return this.hr(e,t,((e,t)=>{const i=this.cr(e,t);n=n.insert(e,i),r=r.insert(e,Jd(t))})).next((()=>({documents:n,Tr:r})))}hr(e,t,n){if(t.isEmpty())return Ro.resolve();let r=new pc(Sf);t.forEach((e=>r=r.add(e)));const i=IDBKeyRange.bound(_f(r.first()),_f(r.last())),s=r.getIterator();let o=s.getNext();return Tf(e).Z({index:ma,range:i},((e,t,r)=>{const i=Io.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&Sf(o,i)<0;)n(o,null),o=s.getNext();o&&o.isEqual(i)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?r.W(_f(o)):r.done()})).next((()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null}))}getDocumentsMatchingQuery(e,t,n,r,i){const s=t.path,o=[s.popLast().toArray(),s.lastSegment(),Zh(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Tf(e).G(IDBKeyRange.bound(o,a,!0)).next((e=>{null==i||i.incrementDocumentReadCount(e.length);let n=ol();for(const i of e){const e=this.cr(Io.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(tl(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n}))}getAllFromCollectionGroup(e,t,n,r){let i=ol();const s=Ef(t,n),o=Ef(t,ko.max());return Tf(e).Z({index:va,range:IDBKeyRange.bound(s,o,!0)},((e,t,n)=>{const s=this.cr(Io.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(s.key,s),i.size===r&&n.done()})).next((()=>i))}newChangeBuffer(e){return new If(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return bf(e).get(ba).next((e=>(Hs(!!e),e)))}ur(e,t){return bf(e).put(ba,t)}cr(e,t){if(t){const e=Yh(this.serializer,t);if(!e.isNoDocument()||!e.version.isEqual(po.min()))return e}return hu.newInvalidDocument(e)}}function wf(e){return new vf(e)}class If extends yf{constructor(e,t){super(),this.Ir=e,this.trackRemovals=t,this.Er=new il((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new pc(((e,t)=>ao(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((i,s)=>{const o=this.Er.get(i);if(t.push(this.Ir.removeEntry(e,i,o.readTime)),s.isValidDocument()){const a=Xh(this.Ir.serializer,s);r=r.add(i.path.popLast());const c=Jd(a);n+=c-o.size,t.push(this.Ir.addEntry(e,i,a))}else if(n-=o.size,this.trackRemovals){const n=Xh(this.Ir.serializer,s.convertToNoDocument(po.min()));t.push(this.Ir.addEntry(e,i,n))}})),r.forEach((n=>{t.push(this.Ir.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.Ir.updateMetadata(e,n)),Ro.waitFor(t)}getFromCache(e,t){return this.Ir.lr(e,t).next((e=>(this.Er.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.Ir.Pr(e,t).next((({documents:e,Tr:t})=>(t.forEach(((t,n)=>{this.Er.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}}function bf(e){return ac(e,Ia)}function Tf(e){return ac(e,pa)}function _f(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Ef(e,t){const n=t.documentKey.path.toArray();return[e,Zh(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Sf(e,t){const n=e.path.toArray(),r=t.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ao(n[s],r[s]),i)return i;return i=ao(n.length,r.length),i||(i=ao(n[n.length-2],r[r.length-2]),i||ao(n[n.length-1],r[r.length-1])
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}class Cf{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Ul(n.mutation,e,yc.empty(),fo.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,gl()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=gl()){const r=ll();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=cl();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=ll();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,gl())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=ol();const s=dl(),o=dl();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof zl)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),Ul(o.mutation,t,o.mutation.getFieldMask(),fo.now())):s.set(t.key,yc.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Cf(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=dl();let r=new hc(((e,t)=>e-t)),i=gl();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||yc.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||gl()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=hl();c.forEach((e=>{if(!i.has(e)){const r=Vl(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Ro.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,r){return i=t,Io.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):Hu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r);var i}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Ro.resolve(ll());let o=-1,a=i;return s.next((t=>Ro.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Ro.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,gl()))).next((e=>({batchId:o,changes:ul(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Io(t)).next((e=>{let t=cl();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let s=cl();return this.indexManager.getCollectionParents(e,i).next((o=>Ro.forEach(o,(o=>{const a=(c=t,u=o.child(i),new $u(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt));var c,u;return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((e=>{i.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,hu.newInvalidDocument(r)))}));let n=cl();return e.forEach(((e,r)=>{const s=i.get(e);void 0!==s&&Ul(s.mutation,r,yc.empty(),fo.now()),tl(t,r)&&(n=n.insert(e,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return Ro.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,{id:(n=t).id,version:n.version,createTime:Eh(n.createTime)}),Ro.resolve();var n}getNamedQuery(e,t){return Ro.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,{name:(n=t).name,query:sd(n.bundledQuery),readTime:Eh(n.readTime)}),Ro.resolve();var n}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(){this.overlays=new hc(Io.comparator),this.Rr=new Map}getOverlay(e,t){return Ro.resolve(this.overlays.get(t))}getOverlays(e,t){const n=ll();return Ro.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.Et(e,t,r)})),Ro.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Rr.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Rr.delete(n)),Ro.resolve()}getOverlaysForCollection(e,t,n){const r=ll(),i=t.length+1,s=new Io(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Ro.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new hc(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=ll(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=ll(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=r)););return Ro.resolve(o)}Et(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Rr.get(r.largestBatchId).delete(n.key);this.Rr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Yl(t,n));let i=this.Rr.get(t);void 0===i&&(i=gl(),this.Rr.set(t,i)),this.Rr.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(){this.sessionToken=wc.EMPTY_BYTE_STRING}getSessionToken(e){return Ro.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Ro.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(){this.Vr=new pc(Rf.mr),this.gr=new pc(Rf.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const n=new Rf(e,t);this.Vr=this.Vr.add(n),this.gr=this.gr.add(n)}yr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.wr(new Rf(e,t))}Sr(e,t){e.forEach((e=>this.removeReference(e,t)))}br(e){const t=new Io(new yo([])),n=new Rf(t,e),r=new Rf(t,e+1),i=[];return this.gr.forEachInRange([n,r],(e=>{this.wr(e),i.push(e.key)})),i}Dr(){this.Vr.forEach((e=>this.wr(e)))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new Io(new yo([])),n=new Rf(t,e),r=new Rf(t,e+1);let i=gl();return this.gr.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Rf(e,0),n=this.Vr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Rf{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return Io.comparator(e.key,t.key)||ao(e.Cr,t.Cr)}static pr(e,t){return ao(e.Cr,t.Cr)||Io.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new pc(Rf.mr)}checkEmpty(e){return Ro.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Ql(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.Mr=this.Mr.add(new Rf(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Ro.resolve(s)}lookupMutationBatch(e,t){return Ro.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Nr(n),i=r<0?0:r;return Ro.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Ro.resolve(0===this.mutationQueue.length?Wo:this.Fr-1)}getAllMutationBatches(e){return Ro.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Rf(t,0),r=new Rf(t,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([n,r],(e=>{const t=this.Or(e.Cr);i.push(t)})),Ro.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new pc(ao);return t.forEach((e=>{const t=new Rf(e,0),r=new Rf(e,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([t,r],(e=>{n=n.add(e.Cr)}))})),Ro.resolve(this.Br(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Io.isDocumentKey(i)||(i=i.child(""));const s=new Rf(new Io(i),0);let o=new pc(ao);return this.Mr.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.Cr)),!0)}),s),Ro.resolve(this.Br(o))}Br(e){const t=[];return e.forEach((e=>{const n=this.Or(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Hs(0===this.Lr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Mr;return Ro.forEach(t.mutations,(r=>{const i=new Rf(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Mr=n}))}qn(e){}containsKey(e,t){const n=new Rf(t,0),r=this.Mr.firstAfterOrEqual(n);return Ro.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Ro.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e){this.kr=e,this.docs=new hc(Io.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.kr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Ro.resolve(n?n.document.mutableCopy():hu.newInvalidDocument(t))}getEntries(e,t){let n=ol();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():hu.newInvalidDocument(e))})),Ro.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=ol();const s=t.path,o=new Io(s.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||Ao(Co(o),n)<=0||(r.has(o.key)||tl(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Ro.resolve(i)}getAllFromCollectionGroup(e,t,n,r){Gs()}qr(e,t){return Ro.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Lf(this)}getSize(e){return Ro.resolve(this.size)}}class Lf extends yf{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Ir.addEntry(e,r)):this.Ir.removeEntry(n)})),Ro.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e){this.persistence=e,this.Qr=new il((e=>Fu(e)),Uu),this.lastRemoteSnapshotVersion=po.min(),this.highestTargetId=0,this.$r=0,this.Kr=new xf,this.targetCount=0,this.Ur=nf.Kn()}forEachTarget(e,t){return this.Qr.forEach(((e,n)=>t(n))),Ro.resolve()}getLastRemoteSnapshotVersion(e){return Ro.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ro.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),Ro.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.$r&&(this.$r=t),Ro.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new nf(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,Ro.resolve()}updateTargetData(e,t){return this.zn(t),Ro.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.br(t.targetId),this.targetCount-=1,Ro.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Qr.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Qr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Ro.waitFor(i).next((()=>r))}getTargetCount(e){return Ro.resolve(this.targetCount)}getTargetData(e,t){const n=this.Qr.get(t)||null;return Ro.resolve(n)}addMatchingKeys(e,t,n){return this.Kr.yr(t,n),Ro.resolve()}removeMatchingKeys(e,t,n){this.Kr.Sr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Ro.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Kr.br(t),Ro.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Kr.vr(t);return Ro.resolve(n)}containsKey(e,t){return Ro.resolve(this.Kr.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Ho(0),this.zr=!1,this.zr=!0,this.jr=new Df,this.referenceDelegate=e(this),this.Hr=new Mf(this),this.indexManager=new Md,this.remoteDocumentCache=new Pf((e=>this.referenceDelegate.Jr(e))),this.serializer=new Jh(t),this.Yr=new Af(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Nf,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Wr[e.toKey()];return n||(n=new Of(t,this.referenceDelegate),this.Wr[e.toKey()]=n),n}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,n){qs("MemoryPersistence","Starting transaction:",e);const r=new Ff(this.Gr.next());return this.referenceDelegate.Zr(),n(r).next((e=>this.referenceDelegate.Xr(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}ei(e,t){return Ro.or(Object.values(this.Wr).map((n=>()=>n.containsKey(e,t))))}}class Ff extends Do{constructor(e){super(),this.currentSequenceNumber=e}}class Uf{constructor(e){this.persistence=e,this.ti=new xf,this.ni=null}static ri(e){return new Uf(e)}get ii(){if(this.ni)return this.ni;throw Gs()}addReference(e,t,n){return this.ti.addReference(n,t),this.ii.delete(n.toString()),Ro.resolve()}removeReference(e,t,n){return this.ti.removeReference(n,t),this.ii.add(n.toString()),Ro.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),Ro.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach((e=>this.ii.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.ii.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ro.forEach(this.ii,(n=>{const r=Io.fromPath(n);return this.si(e,r).next((e=>{e||t.removeEntry(r,po.min())}))})).next((()=>(this.ni=null,t.apply(e))))}updateLimboDocument(e,t){return this.si(e,t).next((e=>{e?this.ii.delete(t.toString()):this.ii.add(t.toString())}))}Jr(e){return 0}si(e,t){return Ro.or([()=>Ro.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class jf{constructor(e,t){this.persistence=e,this.oi=new il((e=>Xo(e.path)),((e,t)=>e.isEqual(t))),this.garbageCollector=pf(this,t)}static ri(e,t){return new jf(e,t)}Zr(){}Xr(e){return Ro.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}sr(e){let t=0;return this.rr(e,(e=>{t++})).next((()=>t))}rr(e,t){return Ro.forEach(this.oi,((n,r)=>this.ar(e,n,r).next((e=>e?Ro.resolve():t(r)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.qr(e,(r=>this.ar(e,r,t).next((e=>{e||(n++,i.removeEntry(r,po.min()))})))).next((()=>i.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),Ro.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.oi.set(n,e.currentSequenceNumber),Ro.resolve()}removeReference(e,t,n){return this.oi.set(n,e.currentSequenceNumber),Ro.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),Ro.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Wc(e.data.value)),t}ar(e,t,n){return Ro.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const e=this.oi.get(t);return Ro.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e){this.serializer=e}B(e,t,n,r){const i=new Po("createOrUpgrade",t);n<1&&r>=1&&(e.createObjectStore(ra),function(e){e.createObjectStore(sa,{keyPath:"userId"});e.createObjectStore(oa,{keyPath:aa,autoIncrement:!0}).createIndex(ca,ua,{unique:!0}),e.createObjectStore(fa)}(e),qf(e),function(e){e.createObjectStore(na)}(e));let s=Ro.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore(Sa),e.deleteObjectStore(Ta),e.deleteObjectStore(Da)}(e),qf(e)),s=s.next((()=>function(e){const t=e.store(Da),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:po.min().toTimestamp(),targetCount:0};return t.put(Na,n)}(i)))),n<4&&r>=4&&(0!==n&&(s=s.next((()=>function(e,t){return t.store(oa).G().next((n=>{e.deleteObjectStore(oa),e.createObjectStore(oa,{keyPath:aa,autoIncrement:!0}).createIndex(ca,ua,{unique:!0});const r=t.store(oa),i=n.map((e=>r.put(e)));return Ro.waitFor(i)}))}(e,i)))),s=s.next((()=>{!function(e){e.createObjectStore(Oa,{keyPath:"clientId"})}(e)}))),n<5&&r>=5&&(s=s.next((()=>this._i(i)))),n<6&&r>=6&&(s=s.next((()=>(function(e){e.createObjectStore(Ia)}(e),this.ai(i))))),n<7&&r>=7&&(s=s.next((()=>this.ui(i)))),n<8&&r>=8&&(s=s.next((()=>this.ci(e,i)))),n<9&&r>=9&&(s=s.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&r>=10&&(s=s.next((()=>this.li(i)))),n<11&&r>=11&&(s=s.next((()=>{!function(e){e.createObjectStore(Pa,{keyPath:"bundleId"})}(e),function(e){e.createObjectStore(La,{keyPath:"name"})}(e)}))),n<12&&r>=12&&(s=s.next((()=>{!function(e){const t=e.createObjectStore(Ga,{keyPath:Ha});t.createIndex(Wa,Qa,{unique:!1}),t.createIndex(Ja,Ya,{unique:!1})}(e)}))),n<13&&r>=13&&(s=s.next((()=>function(e){const t=e.createObjectStore(pa,{keyPath:ga});t.createIndex(ma,ya),t.createIndex(va,wa)}(e))).next((()=>this.hi(e,i))).next((()=>e.deleteObjectStore(na)))),n<14&&r>=14&&(s=s.next((()=>this.Pi(e,i)))),n<15&&r>=15&&(s=s.next((()=>function(e){e.createObjectStore(Ma,{keyPath:"indexId",autoIncrement:!0}).createIndex(Va,"collectionGroup",{unique:!1});e.createObjectStore(Fa,{keyPath:Ua}).createIndex(ja,Ba,{unique:!1});e.createObjectStore(qa,{keyPath:za}).createIndex($a,Ka,{unique:!1})}(e)))),n<16&&r>=16&&(s=s.next((()=>{t.objectStore(Fa).clear()})).next((()=>{t.objectStore(qa).clear()}))),n<17&&r>=17&&(s=s.next((()=>{!function(e){e.createObjectStore(Xa,{keyPath:"name"})}(e)}))),s}ai(e){let t=0;return e.store(na).Z(((e,n)=>{t+=Jd(n)})).next((()=>{const n={byteSize:t};return e.store(Ia).put(ba,n)}))}_i(e){const t=e.store(sa),n=e.store(oa);return t.G().next((t=>Ro.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,Wo],[t.userId,t.lastAcknowledgedBatchId]);return n.G(ca,r).next((n=>Ro.forEach(n,(n=>{Hs(n.userId===t.userId);const r=nd(this.serializer,n);return Qd(e,t.userId,r).next((()=>{}))}))))}))))}ui(e){const t=e.store(Sa),n=e.store(na);return e.store(Da).get(Na).next((e=>{const r=[];return n.Z(((n,i)=>{const s=new yo(n),o=[0,Xo(s)];r.push(t.get(o).next((n=>{return n?Ro.resolve():(r=s,t.put({targetId:0,path:Xo(r),sequenceNumber:e.highestListenSequenceNumber}));var r})))})).next((()=>Ro.waitFor(r)))}))}ci(e,t){e.createObjectStore(xa,{keyPath:Ra});const n=t.store(xa),r=new Vd,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:Xo(r)})}};return t.store(na).Z({Y:!0},((e,t)=>{const n=new yo(e);return i(n.popLast())})).next((()=>t.store(fa).Z({Y:!0},(([e,t,n],r)=>{const s=ta(t);return i(s.popLast())}))))}li(e){const t=e.store(Ta);return t.Z(((e,n)=>{const r=rd(n),i=id(this.serializer,r);return t.put(i)}))}hi(e,t){const n=t.store(na),r=[];return n.Z(((e,n)=>{const i=t.store(pa),s=(a=n,a.document?new Io(yo.fromString(a.document.name).popFirst(5)):a.noDocument?Io.fromSegments(a.noDocument.path):a.unknownDocument?Io.fromSegments(a.unknownDocument.path):Gs()).path.toArray(),o={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};var a;r.push(i.put(o))})).next((()=>Ro.waitFor(r)))}Pi(e,t){const n=t.store(oa),r=wf(this.serializer),i=new Vf(Uf.ri,this.serializer.Tt);return n.G().next((e=>{const n=new Map;return e.forEach((e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:gl();nd(this.serializer,e).keys().forEach((e=>r=r.add(e))),n.set(e.userId,r)})),Ro.forEach(n,((e,n)=>{const s=new Fs(n),o=dd.It(this.serializer,s),a=i.getIndexManager(s),c=Yd.It(s,this.serializer,a,i.referenceDelegate);return new kf(r,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new oc(t,Ho.ae),e).next()}))}))}}function qf(e){e.createObjectStore(Sa,{keyPath:Ca}).createIndex(ka,Aa,{unique:!0}),e.createObjectStore(Ta,{keyPath:"targetId"}).createIndex(_a,Ea,{unique:!0}),e.createObjectStore(Da)}const zf="IndexedDbPersistence",$f=18e5,Kf=5e3,Gf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Hf{constructor(e,t,n,r,i,s,o,a,c,u,l=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Ti=i,this.window=s,this.document=o,this.Ii=c,this.Ei=u,this.di=l,this.Gr=null,this.zr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ai=null,this.inForeground=!1,this.Ri=null,this.Vi=null,this.mi=Number.NEGATIVE_INFINITY,this.fi=e=>Promise.resolve(),!Hf.D())throw new Js(Qs.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new gf(this,r),this.gi=t+"main",this.serializer=new Jh(a),this.pi=new Lo(this.gi,this.di,new Bf(this.serializer)),this.jr=new pd,this.Hr=new rf(this.referenceDelegate,this.serializer),this.remoteDocumentCache=wf(this.serializer),this.Yr=new ud,this.window&&this.window.localStorage?this.yi=this.window.localStorage:(this.yi=null,!1===u&&zs(zf,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.wi().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new Js(Qs.FAILED_PRECONDITION,Gf);return this.Si(),this.bi(),this.Di(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Hr.getHighestSequenceNumber(e)))})).then((e=>{this.Gr=new Ho(e,this.Ii)})).then((()=>{this.zr=!0})).catch((e=>(this.pi&&this.pi.close(),Promise.reject(e))))}Ci(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.pi.k((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ti.enqueueAndForget((async()=>{this.started&&await this.wi()})))}wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Qf(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Fi(e).next((e=>{e||(this.isPrimary=!1,this.Ti.enqueueRetryable((()=>this.fi(!1))))}))})).next((()=>this.Mi(e))).next((t=>this.isPrimary&&!t?this.xi(e).next((()=>!1)):!!t&&this.Oi(e).next((()=>!0)))))).catch((e=>{if(Uo(e))return qs(zf,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return qs(zf,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Ti.enqueueRetryable((()=>this.fi(e))),this.isPrimary=e}))}Fi(e){return Wf(e).get(ia).next((e=>Ro.resolve(this.Ni(e))))}Bi(e){return Qf(e).delete(this.clientId)}async Li(){if(this.isPrimary&&!this.ki(this.mi,$f)){this.mi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=ac(e,Oa);return t.G().next((e=>{const n=this.qi(e,$f),r=e.filter((e=>-1===n.indexOf(e)));return Ro.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.yi)for(const t of e)this.yi.removeItem(this.Qi(t.clientId))}}Di(){this.Vi=this.Ti.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.wi().then((()=>this.Li())).then((()=>this.Di()))))}Ni(e){return!!e&&e.ownerId===this.clientId}Mi(e){return this.Ei?Ro.resolve(!0):Wf(e).get(ia).next((t=>{if(null!==t&&this.ki(t.leaseTimestampMs,Kf)&&!this.$i(t.ownerId)){if(this.Ni(t)&&this.networkEnabled)return!0;if(!this.Ni(t)){if(!t.allowTabSynchronization)throw new Js(Qs.FAILED_PRECONDITION,Gf);return!1}}return!(!this.networkEnabled||!this.inForeground)||Qf(e).G().next((e=>void 0===this.qi(e,Kf).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&qs(zf,`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.zr=!1,this.Ki(),this.Vi&&(this.Vi.cancel(),this.Vi=null),this.Ui(),this.Wi(),await this.pi.runTransaction("shutdown","readwrite",[ra,Oa],(e=>{const t=new oc(e,Ho.ae);return this.xi(t).next((()=>this.Bi(t)))})),this.pi.close(),this.Gi()}qi(e,t){return e.filter((e=>this.ki(e.updateTimeMs,t)&&!this.$i(e.clientId)))}zi(){return this.runTransaction("getActiveClients","readonly",(e=>Qf(e).G().next((e=>this.qi(e,$f).map((e=>e.clientId))))))}get started(){return this.zr}getGlobalsCache(){return this.jr}getMutationQueue(e,t){return Yd.It(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new jd(e,this.serializer.Tt.databaseId)}getDocumentOverlayCache(e){return dd.It(this.serializer,e)}getBundleCache(){return this.Yr}runTransaction(e,t,n){qs(zf,"Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=17===(s=this.di)?sc:16===s?ic:15===s?rc:14===s?nc:13===s?tc:12===s?ec:11===s?Za:void Gs();var s;let o;return this.pi.runTransaction(e,r,i,(r=>(o=new oc(r,this.Gr?this.Gr.next():Ho.ae),"readwrite-primary"===t?this.Fi(o).next((e=>!!e||this.Mi(o))).next((t=>{if(!t)throw zs(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ti.enqueueRetryable((()=>this.fi(!1))),new Js(Qs.FAILED_PRECONDITION,No);return n(o)})).next((e=>this.Oi(o).next((()=>e)))):this.ji(o).next((()=>n(o)))))).then((e=>(o.raiseOnCommittedEvent(),e)))}ji(e){return Wf(e).get(ia).next((e=>{if(null!==e&&this.ki(e.leaseTimestampMs,Kf)&&!this.$i(e.ownerId)&&!this.Ni(e)&&!(this.Ei||this.allowTabSynchronization&&e.allowTabSynchronization))throw new Js(Qs.FAILED_PRECONDITION,Gf)}))}Oi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Wf(e).put(ia,t)}static D(){return Lo.D()}xi(e){const t=Wf(e);return t.get(ia).next((e=>this.Ni(e)?(qs(zf,"Releasing primary lease."),t.delete(ia)):Ro.resolve()))}ki(e,t){const n=Date.now();return!(e<n-t||e>n&&(zs(`Detected an update time that is in the future: ${e} > ${n}`),1))}Si(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ri=()=>{this.Ti.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.wi())))},this.document.addEventListener("visibilitychange",this.Ri),this.inForeground="visible"===this.document.visibilityState)}Ui(){this.Ri&&(this.document.removeEventListener("visibilitychange",this.Ri),this.Ri=null)}bi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Ai=()=>{this.Ki();const e=/(?:Version|Mobile)\/1[456]/;p()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Ti.enterRestrictedMode(!0),this.Ti.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Ai))}Wi(){this.Ai&&(this.window.removeEventListener("pagehide",this.Ai),this.Ai=null)}$i(e){var t;try{const n=null!==(null===(t=this.yi)||void 0===t?void 0:t.getItem(this.Qi(e)));return qs(zf,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return zs(zf,"Failed to get zombied client id.",n),!1}}Ki(){if(this.yi)try{this.yi.setItem(this.Qi(this.clientId),String(Date.now()))}catch(e){zs("Failed to set zombie client id.",e)}}Gi(){if(this.yi)try{this.yi.removeItem(this.Qi(this.clientId))}catch(e){}}Qi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Wf(e){return ac(e,ra)}function Qf(e){return ac(e,Oa)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jf{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Hi=n,this.Ji=r}static Yi(e,t){let n=gl(),r=gl();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Jf(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=p()?8:Mo(d())>0?6:4}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.rs(e,t).next((e=>{i.result=e})).next((()=>{if(!i.result)return this.ss(e,t,r,n).next((e=>{i.result=e}))})).next((()=>{if(i.result)return;const n=new Yf;return this._s(e,t,n).next((r=>{if(i.result=r,this.Xi)return this.us(e,t,n,r.size)}))})).next((()=>i.result))}us(e,t,n,r){return n.documentReadCount<this.es?(Bs()<=x.DEBUG&&qs("QueryEngine","SDK will not create cache indexes for query:",el(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),Ro.resolve()):(Bs()<=x.DEBUG&&qs("QueryEngine","Query:",el(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ts*r?(Bs()<=x.DEBUG&&qs("QueryEngine","The SDK decides to create cache indexes for query:",el(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qu(t))):Ro.resolve())}rs(e,t){if(Gu(t))return Ro.resolve(null);let n=Qu(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=Yu(t,null,"F"),n=Qu(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=gl(...r);return this.ns.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.cs(t,r);return this.ls(t,s,i,n.readTime)?this.rs(e,Yu(t,null,"F")):this.hs(e,s,t,n)}))))})))))}ss(e,t,n,r){return Gu(t)||r.isEqual(po.min())?Ro.resolve(null):this.ns.getDocuments(e,n).next((i=>{const s=this.cs(t,i);return this.ls(t,s,n,r)?Ro.resolve(null):(Bs()<=x.DEBUG&&qs("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),el(t)),this.hs(e,s,t,function(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=po.fromTimestamp(1e9===r?new fo(n+1,0):new fo(n,r));return new ko(i,Io.empty(),t)}(r,-1)).next((e=>e)))}))}cs(e,t){let n=new pc(nl(e));return t.forEach(((t,r)=>{tl(e,r)&&(n=n.add(r))})),n}ls(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}_s(e,t,n){return Bs()<=x.DEBUG&&qs("QueryEngine","Using full collection scan to execute query:",el(t)),this.ns.getDocumentsMatchingQuery(e,t,ko.min(),n)}hs(e,t,n,r){return this.ns.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="LocalStore";class ep{constructor(e,t,n,r){this.persistence=e,this.Ps=t,this.serializer=r,this.Ts=new hc(ao),this.Is=new il((e=>Fu(e)),Uu),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(n)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kf(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ts)))}}function tp(e,t,n,r){return new ep(e,t,n,r)}async function np(e,t){const n=Ws(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.As(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=gl();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({Rs:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function rp(e){const t=Ws(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Hr.getLastRemoteSnapshotVersion(e)))}function ip(e,t){const n=Ws(e),r=t.snapshotVersion;let i=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.ds.newChangeBuffer({trackRemovals:!0});i=n.Ts;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Hr.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Hr.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(wc.EMPTY_BYTE_STRING,po.min()).withLastLimboFreeSnapshotVersion(po.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){if(0===e.resumeToken.approximateByteSize())return!0;if(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8)return!0;return n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,u,s)&&o.push(n.Hr.updateTargetData(e,u))}));let a=ol(),c=gl();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(function(e,t,n){let r=gl(),i=gl();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=ol();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(po.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):qs(Zf,"Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Vs:r,fs:i}}))}(e,s,t.documentUpdates).next((e=>{a=e.Vs,c=e.fs}))),!r.isEqual(po.min())){const t=n.Hr.getLastRemoteSnapshotVersion(e).next((t=>n.Hr.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Ro.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Ts=i,e)))}function sp(e,t){const n=Ws(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=Wo),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}async function op(e,t,n){const r=Ws(e),i=r.Ts.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(o){if(!Uo(o))throw o;qs(Zf,`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ts=r.Ts.remove(t),r.Is.delete(i.target)}function ap(e,t,n){const r=Ws(e);let i=po.min(),s=gl();return r.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,n){const r=Ws(e),i=r.Is.get(n);return void 0!==i?Ro.resolve(r.Ts.get(i)):r.Hr.getTargetData(t,n)}(r,e,Qu(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Ps.getDocumentsMatchingQuery(e,t,n?i:po.min(),n?s:gl()))).next((e=>(function(e,t,n){let r=e.Es.get(t)||po.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Es.set(t,r)}(r,function(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}(t),e),{documents:e,gs:s})))))}class cp{constructor(){this.activeTargetIds=ml}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class up{constructor(){this.ho=new cp,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,n){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new cp,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{To(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp="ConnectivityMonitor";class dp{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){qs(hp,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){qs(hp,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fp=null;function pp(){return null===fp?fp=268435456+Math.round(2147483648*Math.random()):fp++,"0x"+fp.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const gp="RestConnection",mp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class yp{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${n}/databases/${r}`,this.wo=this.databaseId.database===Rc?`project_id=${n}`:`project_id=${n}&database_id=${r}`}So(e,t,n,r,i){const s=pp(),o=this.bo(e,t.toUriEncodedString());qs(gp,`Sending RPC '${e}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(a,r,i),this.vo(e,o,a,n).then((t=>(qs(gp,`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw $s(gp,`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}Co(e,t,n,r,i,s){return this.So(e,t,n,r,i)}Do(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Us,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}bo(e,t){const n=mp[e];return`${this.po}/v1/${t}:${n}`}terminate(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="WebChannelConnection";class Ip extends yp{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,n,r){const i=pp();return new Promise(((s,o)=>{const a=new ks;a.setWithCredentials(!0),a.listenOnce(Ns.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Ds.NO_ERROR:const t=a.getResponseJson();qs(wp,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case Ds.TIMEOUT:qs(wp,`RPC '${e}' ${i} timed out`),o(new Js(Qs.DEADLINE_EXCEEDED,"Request time out"));break;case Ds.HTTP_ERROR:const n=a.getStatus();if(qs(wp,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Qs).indexOf(t)>=0?t:Qs.UNKNOWN}(t.status);o(new Js(e,t.message))}else o(new Js(Qs.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Js(Qs.UNAVAILABLE,"Connection failed."));break;default:Gs()}}finally{qs(wp,`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);qs(wp,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)}))}Wo(e,t,n){const r=pp(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Ps(),o=Os(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Do(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=i.join("");qs(wp,`Creating RPC '${e}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,d=!1;const f=new vp({Fo:t=>{d?qs(wp,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(qs(wp,`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),qs(wp,`RPC '${e}' stream ${r} sending:`,t),l.send(t))},Mo:()=>l.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(l,As.EventType.OPEN,(()=>{d||(qs(wp,`RPC '${e}' stream ${r} transport opened.`),f.Qo())})),p(l,As.EventType.CLOSE,(()=>{d||(d=!0,qs(wp,`RPC '${e}' stream ${r} transport closed`),f.Ko())})),p(l,As.EventType.ERROR,(t=>{d||(d=!0,$s(wp,`RPC '${e}' stream ${r} transport errored:`,t),f.Ko(new Js(Qs.UNAVAILABLE,"The operation could not be completed")))})),p(l,As.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];Hs(!!i);const s=i,o=(null==s?void 0:s.error)||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){qs(wp,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=Zl[e];if(void 0!==t)return th(t)}(t),i=o.message;void 0===n&&(n=Qs.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),d=!0,f.Ko(new Js(n,i)),l.close()}else qs(wp,`RPC '${e}' stream ${r} received:`,i),f.Uo(i)}})),p(o,Rs.STAT_EVENT,(t=>{t.stat===xs.PROXY?qs(wp,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===xs.NOPROXY&&qs(wp,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.$o()}),0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(e){return new wh(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Ti=e,this.timerId=t,this.Go=n,this.zo=r,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),n=Math.max(0,Date.now()-this.Yo),r=Math.max(0,t-n);r>0&&qs("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,r,(()=>(this.Yo=Date.now(),e()))),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){null!==this.Jo&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){null!==this.Jo&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep="PersistentStream";class Sp{constructor(e,t,n,r,i,s,o,a){this.Ti=e,this.n_=n,this.r_=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new _p(e,t)}u_(){return 1===this.state||5===this.state||this.c_()}c_(){return 2===this.state||3===this.state}start(){this.__=0,4!==this.state?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&null===this.s_&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,(()=>this.T_())))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,4!==e?this.a_.reset():t&&t.code===Qs.RESOURCE_EXHAUSTED?(zs(t.toString()),zs("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===Qs.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.i_===t&&this.V_(e,n)}),(t=>{e((()=>{const e=new Js(Qs.UNKNOWN,"Fetching auth token failed: "+t.message);return this.m_(e)}))}))}V_(e,t){const n=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo((()=>{n((()=>this.listener.xo()))})),this.stream.No((()=>{n((()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,(()=>(this.c_()&&(this.state=3),Promise.resolve()))),this.listener.No())))})),this.stream.Lo((e=>{n((()=>this.m_(e)))})),this.stream.onMessage((e=>{n((()=>1==++this.__?this.g_(e):this.onNext(e)))}))}l_(){this.state=5,this.a_.Xo((async()=>{this.state=0,this.start()}))}m_(e){return qs(Ep,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget((()=>this.i_===e?t():(qs(Ep,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Cp extends Sp{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:Gs(),s=t.targetChange.targetIds||[],o=function(e,t){return e.useProto3Json?(Hs(void 0===t||"string"==typeof t),wc.fromBase64String(t||"")):(Hs(void 0===t||t instanceof Buffer||t instanceof Uint8Array),wc.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(e){const t=void 0===e.code?Qs.UNKNOWN:th(e.code);return new Js(t,e.message||"")}(a);n=new hh(i,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Nh(e,r.document.name),s=Eh(r.document.updateTime),o=r.document.createTime?Eh(r.document.createTime):po.min(),a=new uu({mapValue:{fields:r.document.fields}}),c=hu.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new uh(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Nh(e,r.document),s=r.readTime?Eh(r.readTime):po.min(),o=hu.newNoDocument(i,s),a=r.removedTargetIds||[];n=new uh([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Nh(e,r.document),s=r.removedTargetIds||[];n=new uh([],s,i,null)}else{if(!("filter"in t))return Gs();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new Xl(r,i),o=e.targetId;n=new lh(o,s)}}var r;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return po.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?po.min():t.readTime?Eh(t.readTime):po.min()}(e);return this.listener.p_(t,n)}y_(e){const t={};t.database=Rh(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=ju(r)?{documents:Vh(e,r)}:{query:Fh(e,r).ht},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Th(e,t.resumeToken);const r=Ih(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(po.min())>0){n.readTime=bh(e,t.snapshotVersion.toTimestamp());const r=Ih(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Gs()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.I_(t)}w_(e){const t={};t.database=Rh(this.serializer),t.removeTarget=e,this.I_(t)}}class kp extends Sp{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return Hs(!!e.streamToken),this.lastStreamToken=e.streamToken,Hs(!e.writeResults||0===e.writeResults.length),this.listener.D_()}onNext(e){Hs(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=function(e,t){return e&&e.length>0?(Hs(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Eh(e.updateTime):Eh(t);return n.isEqual(po.min())&&(n=Eh(t)),new Ol(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=Eh(e.commitTime);return this.listener.v_(n,t)}C_(){const e={};e.database=Rh(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Lh(this.serializer,e)))};this.I_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{}class Np extends Ap{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.F_=!1}M_(){if(this.F_)throw new Js(Qs.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,n,r){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.So(e,Ch(t,n),r,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Qs.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Js(Qs.UNKNOWN,e.toString())}))}Co(e,t,n,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.Co(e,Ch(t,n),r,s,o,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Qs.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Js(Qs.UNKNOWN,e.toString())}))}terminate(){this.F_=!0,this.connection.terminate()}}class Dp{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){0===this.x_&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve()))))}q_(e){"Online"===this.state?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,"Online"===e&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(zs(t),this.N_=!1):qs("OnlineStateTracker",t)}Q_(){null!==this.O_&&(this.O_.cancel(),this.O_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp="RemoteStore";class Rp{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To((e=>{n.enqueueAndForget((async()=>{Bp(this)&&(qs(xp,"Restarting streams for network reachability change."),await async function(e){const t=Ws(e);t.W_.add(4),await Pp(t),t.j_.set("Unknown"),t.W_.delete(4),await Op(t)}(this))}))})),this.j_=new Dp(n,r)}}async function Op(e){if(Bp(e))for(const t of e.G_)await t(!0)}async function Pp(e){for(const t of e.G_)await t(!1)}function Lp(e,t){const n=Ws(e);n.U_.has(t.targetId)||(n.U_.set(t.targetId,t),jp(n)?Up(n):sg(n).c_()&&Vp(n,t))}function Mp(e,t){const n=Ws(e),r=sg(n);n.U_.delete(t),r.c_()&&Fp(n,t),0===n.U_.size&&(r.c_()?r.P_():Bp(n)&&n.j_.set("Unknown"))}function Vp(e,t){if(e.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(po.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}sg(e).y_(t)}function Fp(e,t){e.H_.Ne(t),sg(e).w_(t)}function Up(e){e.H_=new fh({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.U_.get(t)||null,it:()=>e.datastore.serializer.databaseId}),sg(e).start(),e.j_.B_()}function jp(e){return Bp(e)&&!sg(e).u_()&&e.U_.size>0}function Bp(e){return 0===Ws(e).W_.size}function qp(e){e.H_=void 0}async function zp(e){e.j_.set("Online")}async function $p(e){e.U_.forEach(((t,n)=>{Vp(e,t)}))}async function Kp(e,t){qp(e),jp(e)?(e.j_.q_(t),Up(e)):e.j_.set("Unknown")}async function Gp(e,t,n){if(e.j_.set("Online"),t instanceof hh&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.U_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.U_.delete(r),e.H_.removeTarget(r))}(e,t)}catch(r){qs(xp,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Hp(e,r)}else if(t instanceof uh?e.H_.We(t):t instanceof lh?e.H_.Ze(t):e.H_.je(t),!n.isEqual(po.min()))try{const t=await rp(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.H_.ot(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.U_.get(r);i&&e.U_.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.U_.get(t);if(!r)return;e.U_.set(t,r.withResumeToken(wc.EMPTY_BYTE_STRING,r.snapshotVersion)),Fp(e,t);const i=new Qh(r.target,t,n,r.sequenceNumber);Vp(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(i){qs(xp,"Failed to raise snapshot:",i),await Hp(e,i)}}async function Hp(e,t,n){if(!Uo(t))throw t;e.W_.add(1),await Pp(e),e.j_.set("Offline"),n||(n=()=>rp(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{qs(xp,"Retrying IndexedDB access"),await n(),e.W_.delete(1),await Op(e)}))}function Wp(e,t){return t().catch((n=>Hp(e,n,t)))}async function Qp(e){const t=Ws(e),n=og(t);let r=t.K_.length>0?t.K_[t.K_.length-1].batchId:Wo;for(;Jp(t);)try{const e=await sp(t.localStore,r);if(null===e){0===t.K_.length&&n.P_();break}r=e.batchId,Yp(t,e)}catch(i){await Hp(t,i)}Xp(t)&&Zp(t)}function Jp(e){return Bp(e)&&e.K_.length<10}function Yp(e,t){e.K_.push(t);const n=og(e);n.c_()&&n.S_&&n.b_(t.mutations)}function Xp(e){return Bp(e)&&!og(e).u_()&&e.K_.length>0}function Zp(e){og(e).start()}async function eg(e){og(e).C_()}async function tg(e){const t=og(e);for(const n of e.K_)t.b_(n.mutations)}async function ng(e,t,n){const r=e.K_.shift(),i=Jl.from(r,t,n);await Wp(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Qp(e)}async function rg(e,t){t&&og(e).S_&&await async function(e,t){if(function(e){switch(e){case Qs.OK:return Gs();case Qs.CANCELLED:case Qs.UNKNOWN:case Qs.DEADLINE_EXCEEDED:case Qs.RESOURCE_EXHAUSTED:case Qs.INTERNAL:case Qs.UNAVAILABLE:case Qs.UNAUTHENTICATED:return!1;case Qs.INVALID_ARGUMENT:case Qs.NOT_FOUND:case Qs.ALREADY_EXISTS:case Qs.PERMISSION_DENIED:case Qs.FAILED_PRECONDITION:case Qs.ABORTED:case Qs.OUT_OF_RANGE:case Qs.UNIMPLEMENTED:case Qs.DATA_LOSS:return!0;default:return Gs()}}(n=t.code)&&n!==Qs.ABORTED){const n=e.K_.shift();og(e).h_(),await Wp(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Qp(e)}var n}(e,t),Xp(e)&&Zp(e)}async function ig(e,t){const n=Ws(e);n.asyncQueue.verifyOperationInProgress(),qs(xp,"RemoteStore received new credentials");const r=Bp(n);n.W_.add(3),await Pp(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.W_.delete(3),await Op(n)}function sg(e){return e.J_||(e.J_=function(e,t,n){const r=Ws(e);return r.M_(),new Cp(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{xo:zp.bind(null,e),No:$p.bind(null,e),Lo:Kp.bind(null,e),p_:Gp.bind(null,e)}),e.G_.push((async t=>{t?(e.J_.h_(),jp(e)?Up(e):e.j_.set("Unknown")):(await e.J_.stop(),qp(e))}))),e.J_}function og(e){return e.Y_||(e.Y_=function(e,t,n){const r=Ws(e);return r.M_(),new kp(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{xo:()=>Promise.resolve(),No:eg.bind(null,e),Lo:rg.bind(null,e),D_:tg.bind(null,e),v_:ng.bind(null,e)}),e.G_.push((async t=>{t?(e.Y_.h_(),await Qp(e)):(await e.Y_.stop(),e.K_.length>0&&(qs(xp,`Stopping write stream with ${e.K_.length} pending writes`),e.K_=[]))}))),e.Y_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ag{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Ys,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new ag(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Js(Qs.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cg(e,t){if(zs("AsyncQueue",`${t}: ${e}`),Uo(e))return new Js(Qs.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{static emptySet(e){return new ug(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||Io.comparator(t.key,n.key):(e,t)=>Io.comparator(e.key,t.key),this.keyedMap=cl(),this.sortedSet=new hc(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ug))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new ug;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(){this.Z_=new hc(Io.comparator)}track(e){const t=e.doc.key,n=this.Z_.get(t);n?0!==e.type&&3===n.type?this.Z_=this.Z_.insert(t,e):3===e.type&&1!==n.type?this.Z_=this.Z_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Z_=this.Z_.remove(t):1===e.type&&2===n.type?this.Z_=this.Z_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):Gs():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class hg{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new hg(e,t,ug.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some((e=>e.ra()))}}class fg{constructor(){this.queries=pg(),this.onlineState="Unknown",this.ia=new Set}terminate(){!function(e,t){const n=Ws(e),r=n.queries;n.queries=pg(),r.forEach(((e,n)=>{for(const r of n.ta)r.onError(t)}))}(this,new Js(Qs.ABORTED,"Firestore shutting down"))}}function pg(){return new il((e=>Zu(e)),Xu)}async function gg(e,t){const n=Ws(e);let r=3;const i=t.query;let s=n.queries.get(i);s?!s.na()&&t.ra()&&(r=2):(s=new dg,r=t.ra()?0:1);try{switch(r){case 0:s.ea=await n.onListen(i,!0);break;case 1:s.ea=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const e=cg(o,`Initialization of query '${el(t.query)}' failed`);return void t.onError(e)}n.queries.set(i,s),s.ta.push(t),t.sa(n.onlineState),s.ea&&t.oa(s.ea)&&wg(n)}async function mg(e,t){const n=Ws(e),r=t.query;let i=3;const s=n.queries.get(r);if(s){const e=s.ta.indexOf(t);e>=0&&(s.ta.splice(e,1),0===s.ta.length?i=t.ra()?0:1:!s.na()&&t.ra()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function yg(e,t){const n=Ws(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.ta)e.oa(i)&&(r=!0);t.ea=i}}r&&wg(n)}function vg(e,t,n){const r=Ws(e),i=r.queries.get(t);if(i)for(const s of i.ta)s.onError(n);r.queries.delete(t)}function wg(e){e.ia.forEach((e=>{e.next()}))}var Ig,bg;(bg=Ig||(Ig={}))._a="default",bg.Cache="cache";class Tg{constructor(e,t,n){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=n||{}}oa(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new hg(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache)return!0;if(!this.ra())return!0;const n="Offline"!==t;return(!this.options.Ta||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Pa(e){e=hg.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Ig.Cache}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e){this.key=e}}class Eg{constructor(e){this.key=e}}class Sg{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=gl(),this.mutatedKeys=gl(),this.ya=nl(e),this.wa=new ug(this.ya)}get Sa(){return this.fa}ba(e,t){const n=t?t.Da:new lg,r=t?t.wa:this.wa;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=tl(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.va(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.ya(l,a)>0||c&&this.ya(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{wa:s,Da:n,ls:o,mutatedKeys:i}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const s=e.Da.X_();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Gs()}};return n(e)-n(t)}(e.type,t.type)||this.ya(e.doc,t.doc))),this.Ca(n),r=null!=r&&r;const o=t&&!r?this.Fa():[],a=0===this.pa.size&&this.current&&!r?1:0,c=a!==this.ga;return this.ga=a,0!==s.length||c?{snapshot:new hg(this.query,e.wa,i,s,e.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ma:o}:{Ma:o}}sa(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({wa:this.wa,Da:new lg,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach((e=>this.fa=this.fa.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.fa=this.fa.delete(e))),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=gl(),this.wa.forEach((e=>{this.xa(e.key)&&(this.pa=this.pa.add(e.key))}));const t=[];return e.forEach((e=>{this.pa.has(e)||t.push(new Eg(e))})),this.pa.forEach((n=>{e.has(n)||t.push(new _g(n))})),t}Oa(e){this.fa=e.gs,this.pa=gl();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return hg.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,0===this.ga,this.hasCachedResults)}}const Cg="SyncEngine";class kg{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Ag{constructor(e){this.key=e,this.Ba=!1}}class Ng{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.La={},this.ka=new il((e=>Zu(e)),Xu),this.qa=new Map,this.Qa=new Set,this.$a=new hc(Io.comparator),this.Ka=new Map,this.Ua=new xf,this.Wa={},this.Ga=new Map,this.za=nf.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return!0===this.ja}}async function Dg(e,t,n=!0){const r=Jg(e);let i;const s=r.ka.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Na()):i=await Rg(r,t,n,!0),i}async function xg(e,t){const n=Jg(e);await Rg(n,t,!0,!1)}async function Rg(e,t,n,r){const i=await function(e,t){const n=Ws(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Hr.getTargetData(e,t).next((i=>i?(r=i,Ro.resolve(r)):n.Hr.allocateTargetId(e).next((i=>(r=new Qh(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Hr.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Ts.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(e.targetId,e),n.Is.set(t,e.targetId)),e}))}(e.localStore,Qu(t)),s=i.targetId,o=e.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await async function(e,t,n,r,i){e.Ha=(t,n,r)=>async function(e,t,n,r){let i=t.view.ba(n);i.ls&&(i=await ap(e.localStore,t.query,!1).then((({documents:e})=>t.view.ba(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s,o);return $g(e,t.targetId,a.Ma),a.snapshot}(e,t,n,r);const s=await ap(e.localStore,t,!0),o=new Sg(t,s.gs),a=o.ba(s.documents),c=ch.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);$g(e,n,u.Ma);const l=new kg(t,n,o);return e.ka.set(t,l),e.qa.has(n)?e.qa.get(n).push(t):e.qa.set(n,[t]),u.snapshot}(e,t,s,"current"===o,i.resumeToken)),e.isPrimaryClient&&n&&Lp(e.remoteStore,i),a}async function Og(e,t,n){const r=Ws(e),i=r.ka.get(t),s=r.qa.get(i.targetId);if(s.length>1)return r.qa.set(i.targetId,s.filter((e=>!Xu(e,t)))),void r.ka.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await op(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Mp(r.remoteStore,i.targetId),qg(r,i.targetId)})).catch(xo)):(qg(r,i.targetId),await op(r.localStore,i.targetId,!0))}async function Pg(e,t){const n=Ws(e),r=n.ka.get(t),i=n.qa.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Mp(n.remoteStore,r.targetId))}async function Lg(e,t){const n=Ws(e);try{const e=await ip(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Ka.get(t);r&&(Hs(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Ba=!0:e.modifiedDocuments.size>0?Hs(r.Ba):e.removedDocuments.size>0&&(Hs(r.Ba),r.Ba=!1))})),await Hg(n,e,t)}catch(r){await xo(r)}}function Mg(e,t,n){const r=Ws(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ka.forEach(((n,r)=>{const i=r.view.sa(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=Ws(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.ta)i.sa(t)&&(r=!0)})),r&&wg(n)}(r.eventManager,t),e.length&&r.La.p_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Vg(e,t,n){const r=Ws(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Ka.get(t),s=i&&i.key;if(s){let e=new hc(Io.comparator);e=e.insert(s,hu.newNoDocument(s,po.min()));const n=gl().add(s),i=new ah(po.min(),new Map,new hc(ao),e,n);await Lg(r,i),r.$a=r.$a.remove(s),r.Ka.delete(t),Gg(r)}else await op(r.localStore,t,!1).then((()=>qg(r,t,n))).catch(xo)}async function Fg(e,t){const n=Ws(e),r=t.batch.batchId;try{const e=await function(e,t){const n=Ws(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Ro.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);Hs(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=gl();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(n.localStore,t);Bg(n,r,null),jg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Hg(n,e)}catch(i){await xo(i)}}async function Ug(e,t,n){const r=Ws(e);try{const e=await function(e,t){const n=Ws(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Hs(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);Bg(r,t,n),jg(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Hg(r,e)}catch(i){await xo(i)}}function jg(e,t){(e.Ga.get(t)||[]).forEach((e=>{e.resolve()})),e.Ga.delete(t)}function Bg(e,t,n){const r=Ws(e);let i=r.Wa[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Wa[r.currentUser.toKey()]=i}}function qg(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.qa.get(t))e.ka.delete(r),n&&e.La.Ja(r,n);e.qa.delete(t),e.isPrimaryClient&&e.Ua.br(t).forEach((t=>{e.Ua.containsKey(t)||zg(e,t)}))}function zg(e,t){e.Qa.delete(t.path.canonicalString());const n=e.$a.get(t);null!==n&&(Mp(e.remoteStore,n),e.$a=e.$a.remove(t),e.Ka.delete(n),Gg(e))}function $g(e,t,n){for(const r of n)r instanceof _g?(e.Ua.addReference(r.key,t),Kg(e,r)):r instanceof Eg?(qs(Cg,"Document no longer in limbo: "+r.key),e.Ua.removeReference(r.key,t),e.Ua.containsKey(r.key)||zg(e,r.key)):Gs()}function Kg(e,t){const n=t.key,r=n.path.canonicalString();e.$a.get(n)||e.Qa.has(r)||(qs(Cg,"New document in limbo: "+n),e.Qa.add(r),Gg(e))}function Gg(e){for(;e.Qa.size>0&&e.$a.size<e.maxConcurrentLimboResolutions;){const t=e.Qa.values().next().value;e.Qa.delete(t);const n=new Io(yo.fromString(t)),r=e.za.next();e.Ka.set(r,new Ag(n)),e.$a=e.$a.insert(n,r),Lp(e.remoteStore,new Qh(Qu(Ku(n.path)),r,"TargetPurposeLimboResolution",Ho.ae))}}async function Hg(e,t,n){const r=Ws(e),i=[],s=[],o=[];r.ka.isEmpty()||(r.ka.forEach(((e,a)=>{o.push(r.Ha(a,t,n).then((e=>{var t;if((e||n)&&r.isPrimaryClient){const i=e?!e.fromCache:null===(t=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===t?void 0:t.current;r.sharedClientState.updateQueryState(a.targetId,i?"current":"not-current")}if(e){i.push(e);const t=Jf.Yi(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.La.p_(i),await async function(e,t){const n=Ws(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Ro.forEach(t,(t=>Ro.forEach(t.Hi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Ro.forEach(t.Ji,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(r){if(!Uo(r))throw r;qs(Zf,"Failed to update sequence numbers: "+r)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.Ts.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Ts=n.Ts.insert(e,i)}}}(r.localStore,s))}async function Wg(e,t){const n=Ws(e);if(!n.currentUser.isEqual(t)){qs(Cg,"User change. New user:",t.toKey());const e=await np(n.localStore,t);n.currentUser=t,i="'waitForPendingWrites' promise is rejected due to a user change.",(r=n).Ga.forEach((e=>{e.forEach((e=>{e.reject(new Js(Qs.CANCELLED,i))}))})),r.Ga.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Hg(n,e.Rs)}var r,i}function Qg(e,t){const n=Ws(e),r=n.Ka.get(t);if(r&&r.Ba)return gl().add(r.key);{let e=gl();const r=n.qa.get(t);if(!r)return e;for(const t of r){const r=n.ka.get(t);e=e.unionWith(r.view.Sa)}return e}}function Jg(e){const t=Ws(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Lg.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Qg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Vg.bind(null,t),t.La.p_=yg.bind(null,t.eventManager),t.La.Ja=vg.bind(null,t.eventManager),t}function Yg(e){const t=Ws(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Fg.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ug.bind(null,t),t}class Xg{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Tp(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return tp(this.persistence,new Xf,e.initialUser,this.serializer)}Xa(e){return new Vf(Uf.ri,this.serializer)}Za(e){return new up}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xg.provider={build:()=>new Xg};class Zg extends Xg{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){Hs(this.persistence.referenceDelegate instanceof jf);const n=this.persistence.referenceDelegate.garbageCollector;return new df(n,e.asyncQueue,t)}Xa(e){const t=void 0!==this.cacheSizeBytes?Wd.withCacheSize(this.cacheSizeBytes):Wd.DEFAULT;return new Vf((e=>jf.ri(e,t)),this.serializer)}}class em extends Xg{constructor(e,t,n){super(),this.ru=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ru.initialize(this,e),await Yg(this.ru.syncEngine),await Qp(this.ru.remoteStore),await this.persistence.Ci((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}eu(e){return tp(this.persistence,new Xf,e.initialUser,this.serializer)}tu(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new df(n,e.asyncQueue,t)}nu(e,t){const n=new Go(t,this.persistence);return new Ko(e.asyncQueue,n)}Xa(e){const t=function(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"}(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Wd.withCacheSize(this.cacheSizeBytes):Wd.DEFAULT;return new Hf(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,"undefined"!=typeof window?window:null,bp(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Za(e){return new up}}class tm{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Mg(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Wg.bind(null,this.syncEngine),await async function(e,t){const n=Ws(e);t?(n.W_.delete(2),await Op(n)):t||(n.W_.add(2),await Pp(n),n.j_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new fg}createDatastore(e){const t=Tp(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Ip(r));var r;return function(e,t,n,r){return new Np(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Mg(this.syncEngine,e,0),s=dp.D()?new dp:new lp,new Rp(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Ng(e,t,n,r,i,s);return o&&(a.ja=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){const t=Ws(e);qs(xp,"RemoteStore shutting down."),t.W_.add(5),await Pp(t),t.z_.shutdown(),t.j_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}tm.provider={build:()=>new tm};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):zs("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="FirestoreClient";class im{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Fs.UNAUTHENTICATED,this.clientId=oo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async e=>{qs(rm,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(qs(rm,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ys;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=cg(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function sm(e,t){e.asyncQueue.verifyOperationInProgress(),qs(rm,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await np(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function om(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){qs(rm,"Using user provided OfflineComponentProvider");try{await sm(e,e._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!("FirebaseError"===(n=i).name?n.code===Qs.FAILED_PRECONDITION||n.code===Qs.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&n instanceof DOMException)||22===n.code||20===n.code||11===n.code))throw i;$s("Error using user provided cache. Falling back to memory cache: "+i),await sm(e,new Xg)}}else qs(rm,"Using default OfflineComponentProvider"),await sm(e,new Zg(void 0));var n;return e._offlineComponents}(e);qs(rm,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener((e=>ig(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>ig(t.remoteStore,n))),e._onlineComponents=t}async function am(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(qs(rm,"Using user provided OnlineComponentProvider"),await om(e,e._uninitializedComponentsProvider._online)):(qs(rm,"Using default OnlineComponentProvider"),await om(e,new tm))),e._onlineComponents}async function cm(e){const t=await am(e),n=t.eventManager;return n.onListen=Dg.bind(null,t.syncEngine),n.onUnlisten=Og.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=xg.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=Pg.bind(null,t.syncEngine),n}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function um(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const lm=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(e,t,n){if(!n)throw new Js(Qs.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function dm(e){if(!Io.isDocumentKey(e))throw new Js(Qs.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function fm(e){if(Io.isDocumentKey(e))throw new Js(Qs.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function pm(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":Gs()}function gm(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Js(Qs.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pm(e);throw new Js(Qs.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=!0;class ym{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new Js(Qs.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=mm}else this.host=e.host,this.ssl=null!==(t=e.ssl)&&void 0!==t?t:mm;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=Hd;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<uf)throw new Js(Qs.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new Js(Qs.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=um(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new Js(Qs.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new Js(Qs.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new Js(Qs.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class vm{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ym({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Js(Qs.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Js(Qs.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ym(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Zs;switch(e.type){case"firstParty":return new no(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Js(Qs.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=lm.get(e);t&&(qs("ComponentProvider","Removing Datastore"),lm.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new wm(this.firestore,e,this._query)}}class Im{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bm(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Im(this.firestore,e,this._key)}}class bm extends wm{constructor(e,t,n){super(e,t,Ku(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Im(this.firestore,null,new Io(e))}withConverter(e){return new bm(this.firestore,e,this._path)}}function Tm(e,t,...n){if(e=C(e),hm("collection","path",t),e instanceof vm){const r=yo.fromString(t,...n);return fm(r),new bm(e,null,r)}{if(!(e instanceof Im||e instanceof bm))throw new Js(Qs.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(yo.fromString(t,...n));return fm(r),new bm(e.firestore,null,r)}}function _m(e,t,...n){if(e=C(e),1===arguments.length&&(t=oo.newId()),hm("doc","path",t),e instanceof vm){const r=yo.fromString(t,...n);return dm(r),new Im(e,null,new Io(r))}{if(!(e instanceof Im||e instanceof bm))throw new Js(Qs.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(yo.fromString(t,...n));return dm(r),new Im(e.firestore,e instanceof bm?e.converter:null,new Io(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em="AsyncQueue";class Sm{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new _p(this,"async_queue_retry"),this.Su=()=>{const e=bp();e&&qs(Em,"Visibility state changed to "+e.visibilityState),this.a_.t_()},this.bu=e;const t=bp();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=bp();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise((()=>{}));const t=new Ys;return this.vu((()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Vu.push(e),this.Cu())))}async Cu(){if(0!==this.Vu.length){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Uo(e))throw e;qs(Em,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo((()=>this.Cu()))}}vu(e){const t=this.bu.then((()=>(this.pu=!0,e().catch((e=>{this.gu=e,this.pu=!1;throw zs("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.pu=!1,e))))));return this.bu=t,t}enqueueAfterDelay(e,t,n){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const r=ag.createAndSchedule(this,e,t,n,(e=>this.Fu(e)));return this.fu.push(r),r}Du(){this.gu&&Gs()}verifyOperationInProgress(){}async Mu(){let e;do{e=this.bu,await e}while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then((()=>{this.fu.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.fu)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Mu()}))}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}function Cm(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}(e,["next","error","complete"])}class km extends vm{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Sm,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Sm(e),this._firestoreClient=void 0,await e}}}function Am(e,t,n){n||(n=Rc);const r=Fe(e,"firestore");if(r.isInitialized(n)){const e=r.getImmediate({identifier:n});if(I(r.getOptions(n),t))return e;throw new Js(Qs.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(void 0!==t.cacheSizeBytes&&void 0!==t.localCache)throw new Js(Qs.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(void 0!==t.cacheSizeBytes&&-1!==t.cacheSizeBytes&&t.cacheSizeBytes<uf)throw new Js(Qs.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:t,instanceIdentifier:n})}function Nm(e){if(e._terminated)throw new Js(Qs.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,n,r;const i=e._freezeSettings(),s=(o=e._databaseId,a=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",c=e._persistenceKey,u=i,new xc(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,um(u.experimentalLongPollingOptions),u.useFetchStreams));var o,a,c,u;e._componentsProvider||(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),e._firestoreClient=new im(e._authCredentials,e._appCheckCredentials,e._queue,s,e._componentsProvider&&function(e){const t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e),e._firestoreClient}class Dm{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Dm(wc.fromBase64String(e))}catch(t){throw new Js(Qs.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Dm(wc.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Js(Qs.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wo(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Js(Qs.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Js(Qs.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ao(this._lat,e._lat)||ao(this._long,e._long)}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e){this._values=(e||[]).map((e=>e))}toArray(){return this._values.map((e=>e))}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm=/^__.*__$/;class Mm{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new zl(e,this.data,this.fieldMask,t,this.fieldTransforms):new ql(e,this.data,t,this.fieldTransforms)}}function Vm(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Gs()}}class Fm{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Fm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ku({path:n,Qu:!1});return r.$u(e),r}Ku(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ku({path:n,Qu:!1});return r.Bu(),r}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Jm(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(0===e.length)throw this.Wu("Document fields must not be empty");if(Vm(this.Lu)&&Lm.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class Um{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Tp(e)}ju(e,t,n,r=!1){return new Fm({Lu:e,methodName:t,zu:n,path:wo.emptyPath(),Qu:!1,Gu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jm(e){const t=e._freezeSettings(),n=Tp(e._databaseId);return new Um(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Bm(e,t,n,r,i,s={}){const o=e.ju(s.merge||s.mergeFields?2:0,t,n,i);Gm("Data must be an object, but it was:",o,r);const a=$m(r,o);let c,u;if(s.merge)c=new yc(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Hm(t,r,n);if(!o.contains(i))throw new Js(Qs.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Ym(e,i)||e.push(i)}c=new yc(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new Mm(new uu(a),c,u)}class qm extends Rm{_toFieldTransform(e){return new Rl(e.path,new El)}isEqual(e){return e instanceof qm}}function zm(e,t){if(Km(e=C(e)))return Gm("Unsupported field value:",t,e),$m(e,t);if(e instanceof Rm)return function(e,t){if(!Vm(t.Lu))throw t.Wu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Wu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Qu&&4!==t.Lu)throw t.Wu("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=zm(i,t.Uu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=C(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return wl(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=fo.fromDate(e);return{timestampValue:bh(t.serializer,n)}}if(e instanceof fo){const n=new fo(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:bh(t.serializer,n)}}if(e instanceof Om)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Dm)return{bytesValue:Th(t.serializer,e._byteString)};if(e instanceof Im){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Wu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Sh(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof Pm)return n=e,r=t,{mapValue:{fields:{[Pc]:{stringValue:Vc},[Fc]:{arrayValue:{values:n.toArray().map((e=>{if("number"!=typeof e)throw r.Wu("VectorValues must only contain numeric values.");return yl(r.serializer,e)}))}}}}};var n,r;throw t.Wu(`Unsupported field value: ${pm(e)}`)}(e,t)}function $m(e,t){const n={};return lc(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):uc(e,((e,r)=>{const i=zm(r,t.qu(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Km(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof fo||e instanceof Om||e instanceof Dm||e instanceof Im||e instanceof Rm||e instanceof Pm)}function Gm(e,t,n){if(!Km(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=pm(n);throw"an object"===r?t.Wu(e+" a custom object"):t.Wu(e+" "+r)}var r}function Hm(e,t,n){if((t=C(t))instanceof xm)return t._internalPath;if("string"==typeof t)return Qm(e,t);throw Jm("Field path arguments must be of type string or ",e,!1,void 0,n)}const Wm=new RegExp("[~\\*/\\[\\]]");function Qm(e,t,n){if(t.search(Wm)>=0)throw Jm(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new xm(...t.split("."))._internalPath}catch(r){throw Jm(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Jm(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Js(Qs.INVALID_ARGUMENT,a+e+c)}function Ym(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Im(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Zm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ey("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Zm extends Xm{data(){return super.data()}}function ey(e,t){return"string"==typeof t?Qm(e,t):t instanceof xm?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Js(Qs.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ny{}class ry extends ny{}function iy(e,t,...n){let r=[];t instanceof ny&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof oy)).length,n=e.filter((e=>e instanceof sy)).length;if(t>1||t>0&&n>0)throw new Js(Qs.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}class sy extends ry{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new sy(e,t,n)}_apply(e){const t=this._parse(e);return fy(e._query,t),new wm(e.firestore,e.converter,Ju(e._query,t))}_parse(e){const t=jm(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new Js(Qs.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){dy(o,s);const t=[];for(const n of o)t.push(hy(r,e,n));a={arrayValue:{values:t}}}else a=hy(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||dy(o,s),a=function(e,t,n,r=!1){return zm(n,e.ju(r?4:3,t))}(n,t,o,"in"===s||"not-in"===s);return vu.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}class oy extends ny{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new oy(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:wu.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)fy(n,i),n=Ju(n,i)}(e._query,t),new wm(e.firestore,e.converter,Ju(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class ay extends ry{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ay(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new Js(Qs.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new Js(Qs.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new gu(t,n)}(e._query,this._field,this._direction);return new wm(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new $u(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function cy(e,t="asc"){const n=t,r=ey("orderBy",e);return ay._create(r,n)}class uy extends ry{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new uy(e,t,n)}_apply(e){return new wm(e.firestore,e.converter,Yu(e._query,this._limit,this._limitType))}}function ly(e){return uy._create("limit",e,"F")}function hy(e,t,n){if("string"==typeof(n=C(n))){if(""===n)throw new Js(Qs.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Hu(t)&&-1!==n.indexOf("/"))throw new Js(Qs.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(yo.fromString(n));if(!Io.isDocumentKey(r))throw new Js(Qs.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Qc(e,new Io(r))}if(n instanceof Im)return Qc(e,n._key);throw new Js(Qs.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pm(n)}.`)}function dy(e,t){if(!Array.isArray(e)||0===e.length)throw new Js(Qs.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function fy(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Js(Qs.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Js(Qs.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class py{convertValue(e,t="none"){switch(jc(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Tc(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(_c(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Gs()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return uc(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertVectorValue(e){var t,n,r;const i=null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t[Fc].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map((e=>Tc(e.doubleValue)));return new Pm(i)}convertGeoPoint(e){return new Om(Tc(e.latitude),Tc(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Nc(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Dc(e));default:return null}}convertTimestamp(e){const t=bc(e);return new fo(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=yo.fromString(e);Hs(Wh(n));const r=new Oc(n.get(1),n.get(3)),i=new Io(n.popFirst(5));return r.isEqual(t)||zs(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class my{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yy extends Xm{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new vy(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(ey("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class vy extends yy{data(e={}){return super.data(e)}}class wy{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new my(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new vy(this._firestore,this._userDataWriter,n.key,n,new my(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Js(Qs.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new vy(e._firestore,e._userDataWriter,n.doc.key,n.doc,new my(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new vy(e._firestore,e._userDataWriter,t.doc.key,t.doc,new my(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:Iy(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Iy(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Gs()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(e){e=gm(e,Im);const t=gm(e.firestore,km);return function(e,t,n={}){const r=new Ys;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new nm({next:a=>{s.su(),t.enqueueAndForget((()=>mg(e,o)));const c=a.docs.has(n);!c&&a.fromCache?i.reject(new Js(Qs.UNAVAILABLE,"Failed to get document because the client is offline.")):c&&a.fromCache&&r&&"server"===r.source?i.reject(new Js(Qs.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(a)},error:e=>i.reject(e)}),o=new Tg(Ku(n.path),s,{includeMetadataChanges:!0,Ta:!0});return gg(e,o)}(await cm(e),e.asyncQueue,t,n,r))),r.promise}(Nm(t),e._key).then((n=>Ay(t,e,n)))}class Ty extends py{constructor(e){super(),this.firestore=e}convertBytes(e){return new Dm(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Im(this.firestore,null,t)}}function _y(e){e=gm(e,wm);const t=gm(e.firestore,km),n=Nm(t),r=new Ty(t);return ty(e._query),function(e,t,n={}){const r=new Ys;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new nm({next:n=>{s.su(),t.enqueueAndForget((()=>mg(e,o))),n.fromCache&&"server"===r.source?i.reject(new Js(Qs.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Tg(n,s,{includeMetadataChanges:!0,Ta:!0});return gg(e,o)}(await cm(e),e.asyncQueue,t,n,r))),r.promise}(n,e._query).then((n=>new wy(t,r,e,n)))}function Ey(e,t,n){e=gm(e,Im);const r=gm(e.firestore,km),i=gy(e.converter,t,n);return ky(r,[Bm(jm(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Pl.none())])}function Sy(e,t){const n=gm(e.firestore,km),r=_m(e),i=gy(e.converter,t);return ky(n,[Bm(jm(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Pl.exists(!1))]).then((()=>r))}function Cy(e,...t){var n,r,i;e=C(e);let s={includeMetadataChanges:!1,source:"default"},o=0;"object"!=typeof t[o]||Cm(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Cm(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let c,u,l;if(e instanceof Im)u=gm(e.firestore,km),l=Ku(e._key.path),c={next:n=>{t[o]&&t[o](Ay(u,e,n))},error:t[o+1],complete:t[o+2]};else{const n=gm(e,wm);u=gm(n.firestore,km),l=n._query;const r=new Ty(u);c={next:e=>{t[o]&&t[o](new wy(u,r,n,e))},error:t[o+1],complete:t[o+2]},ty(e._query)}return function(e,t,n,r){const i=new nm(r),s=new Tg(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>gg(await cm(e),s))),()=>{i.su(),e.asyncQueue.enqueueAndForget((async()=>mg(await cm(e),s)))}}(Nm(u),l,a,c)}function ky(e,t){return function(e,t){const n=new Ys;return e.asyncQueue.enqueueAndForget((async()=>async function(t,n,r){const i=Yg(t);try{const e=await function(e,t){const n=Ws(e),r=fo.now(),i=t.reduce(((e,t)=>e.add(t.key)),gl());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=ol(),c=gl();return n.ds.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=jl(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new zl(e.key,t,lu(t.value.mapValue),Pl.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:ul(s)})))}(i.localStore,n);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Wa[e.currentUser.toKey()];r||(r=new hc(ao)),r=r.insert(t,n),e.Wa[e.currentUser.toKey()]=r}(i,e.batchId,r),await Hg(i,e.changes),await Qp(i.remoteStore)}catch(e){const n=cg(e,"Failed to persist write");r.reject(n)}}(await function(e){return am(e).then((e=>e.syncEngine))}(e),t,n))),n.promise}(Nm(e),t)}function Ay(e,t,n){const r=n.docs.get(t._key),i=new Ty(e);return new yy(e,i,t._key,r,new my(n.hasPendingWrites,n.fromCache),t.converter)}class Ny{constructor(e){let t;this.kind="persistent",(null==e?void 0:e.tabManager)?(e.tabManager._initialize(e),t=e.tabManager):(t=Ry(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function Dy(e){return new Ny(e)}class xy{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=tm.provider,this._offlineComponentProvider={build:t=>new em(t,null==e?void 0:e.cacheSizeBytes,this.forceOwnership)}}}function Ry(e){return new xy(null==e?void 0:e.forceOwnership)}function Oy(){return new qm("serverTimestamp")}!function(e,t=!0){Us=qe,Ve(new k("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new km(new eo(e.getProvider("auth-internal")),new io(i,e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Js(Qs.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oc(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),Ke(Ms,Vs,e),Ke(Ms,Vs,"esm2017")}();export{li as A,$r as B,y as F,Ur as G,Vr as O,fo as T,Am as a,fn as b,Ry as c,_m as d,by as e,Oy as f,Ts as g,Tm as h,ze as i,_y as j,Sy as k,ly as l,Mi as m,Li as n,si as o,Dy as p,iy as q,Jr as r,Ey as s,cy as t,Xr as u,Cy as v,oi as w,$i as x,Yr as y,zi as z};
