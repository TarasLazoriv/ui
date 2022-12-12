import{a as ne,b as $,c as x,d,e as g,f as u,g as y,h as D,i as K,j as b,k as B,l as w,m as H,n as P,p as Y}from"./chunk-YJ6EV26Q.mjs";import{a as S}from"./chunk-QV6IVTJA.mjs";import"./chunk-RIDFDENO.mjs";import{a as re}from"./chunk-722JULI4.mjs";import"./chunk-MY4F7ORE.mjs";import{a as k,b as f,d as C,e as L,s as I}from"./chunk-T6P6F2SI.mjs";import{b as oe}from"./chunk-Z7LX2X6E.mjs";import"./chunk-AIPH5HO4.mjs";import"./chunk-6XCSLWLC.mjs";import{e as p,g as l}from"./chunk-L2PAVIFR.mjs";l();var E=p(k());l();var O=p(k(),1);var U=p(ne(),1),{window:n,document:h,location:A}=O.default,_="storybook-channel",se={allowFunction:!0,maxDepth:25},ae=class{constructor(t){if(this.config=t,this.buffer=[],this.handler=null,n&&n.addEventListener("message",this.handleEvent.bind(this),!1),t.page!=="manager"&&t.page!=="preview")throw new Error(`postmsg-channel: "config.page" cannot be "${t.page}"`)}setHandler(t){this.handler=(...e)=>{t.apply(this,e),!this.connected&&this.getLocalFrame().length&&(this.flush(),this.connected=!0)}}send(t,e){let{target:o,allowRegExp:r,allowFunction:s,allowSymbol:i,allowDate:a,allowUndefined:c,allowClass:V,maxDepth:z,space:J,lazyEval:Q}=e||{},X=Object.fromEntries(Object.entries({allowRegExp:r,allowFunction:s,allowSymbol:i,allowDate:a,allowUndefined:c,allowClass:V,maxDepth:z,space:J,lazyEval:Q}).filter(([m,v])=>typeof v<"u")),Z={...se,...O.default.CHANNEL_OPTIONS||{},...X},F=this.getFrames(o),ee=U.default.parse(A.search,{ignoreQueryPrefix:!0}),te=u({key:_,event:t,refId:ee.refId},Z);return F.length?(this.buffer.length&&this.flush(),F.forEach(m=>{try{m.postMessage(te,"*")}catch{console.error("sending over postmessage fail")}}),Promise.resolve(null)):new Promise((m,v)=>{this.buffer.push({event:t,resolve:m,reject:v})})}flush(){let{buffer:t}=this;this.buffer=[],t.forEach(e=>{this.send(e.event).then(e.resolve).catch(e.reject)})}getFrames(t){if(this.config.page==="manager"){let e=[...h.querySelectorAll("iframe[data-is-storybook][data-is-loaded]")].filter(o=>{try{return!!o.contentWindow&&o.dataset.isStorybook!==void 0&&o.id===t}catch{return!1}}).map(o=>o.contentWindow);return e.length?e:this.getCurrentFrames()}return n&&n.parent&&n.parent!==n?[n.parent]:[]}getCurrentFrames(){return this.config.page==="manager"?[...h.querySelectorAll('[data-is-storybook="true"]')].map(t=>t.contentWindow):n&&n.parent?[n.parent]:[]}getLocalFrame(){return this.config.page==="manager"?[...h.querySelectorAll("#storybook-preview-iframe")].map(t=>t.contentWindow):n&&n.parent?[n.parent]:[]}handleEvent(t){try{let{data:e}=t,{key:o,event:r,refId:s}=typeof e=="string"&&g(e)?y(e,O.default.CHANNEL_OPTIONS||{}):e;if(o===_){let i=this.config.page==="manager"?'<span style="color: #37D5D3; background: black"> manager </span>':'<span style="color: #1EA7FD; background: black"> preview </span>',a=Object.values(d).includes(r.type)?`<span style="color: #FF4785">${r.type}</span>`:`<span style="color: #FFAE00">${r.type}</span>`;if(s&&(r.refId=s),r.source=this.config.page==="preview"?t.origin:ie(t),!r.source){C.error(`${i} received ${a} but was unable to determine the source of the event`);return}let c=`${i} received ${a} (${e.length})`;C.debug(A.origin!==r.source?c:`${c} <span style="color: gray">(on ${A.origin} from ${r.source})</span>`,...r.args),this.handler(r)}}catch(e){f.error(e)}}},ie=t=>{let e=[...h.querySelectorAll("iframe[data-is-storybook]")],[o,...r]=e.filter(s=>{try{return s.contentWindow===t.source}catch{}let i=s.getAttribute("src"),a;try{({origin:a}=new URL(i,h.location))}catch{return!1}return a===t.origin});if(o&&r.length===0){let s=o.getAttribute("src"),{protocol:i,host:a,pathname:c}=new URL(s,h.location);return`${i}//${a}${c}`}return r.length>0&&f.error("found multiple candidates for event source"),null};function j({page:t}){let e=new ae({page:t});return new b({transport:e})}l();var q=p(k());var{WebSocket:ce}=q.default,N=class{constructor({url:e,onError:o}){this.socket=void 0,this.handler=void 0,this.buffer=[],this.isReady=!1,this.connect(e,o)}setHandler(e){this.handler=e}send(e){this.isReady?this.sendNow(e):this.sendLater(e)}sendLater(e){this.buffer.push(e)}sendNow(e){let o=u(e,{maxDepth:15,allowFunction:!0});this.socket.send(o)}flush(){let{buffer:e}=this;this.buffer=[],e.forEach(o=>this.send(o))}connect(e,o){this.socket=new ce(e),this.socket.onopen=()=>{this.isReady=!0,this.flush()},this.socket.onmessage=({data:r})=>{let s=typeof r=="string"&&g(r)?y(r):r;this.handler(s)},this.socket.onerror=r=>{o&&o(r)}}};function M({url:t,async:e=!1,onError:o=r=>f.warn(r)}){let r=new N({url:t,onError:o});return new b({transport:r,async:e})}l();var he=p(oe()),fe=p(re());var W={react:he,"react-dom":fe,"@storybook/components":K,"@storybook/channels":B,"@storybook/core-events":d,"@storybook/router":$,"@storybook/theming":I,"@storybook/api":D,"@storybook/addons":H,"@storybook/client-logger":L};var{FEATURES:me,SERVER_CHANNEL_URL:G}=E.default,T=class extends P{constructor(){super();let o=j({page:"manager"});if(w.setChannel(o),o.emit(x),this.addons=w,this.channel=o,me?.storyStoreV7&&G){let r=M({url:G});this.serverChannel=r,w.setServerChannel(this.serverChannel)}}getElements(o){return this.addons.getElements(o)}getConfig(){return this.addons.getConfig()}handleAPI(o){this.addons.loadAddons(o)}},{document:de}=E.default,ge=de.getElementById("root");Y(ge,new T);Object.keys(S).forEach(t=>{E.default[S[t]]=W[t]});
