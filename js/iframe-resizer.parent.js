/*!
 *  @preserve
 *  
 *  @module     iframe-resizer/parent 5.0.0-RC.2 (iife) 
 *
 *  @license    GPL-3.0 for non-commercial use only.
 *              For commercial use, you must purchase a license from
 *              https://iframe-resizer.com/pricing
 * 
 *  @desciption Keep same and cross domain iFrames sized to their content 
 *
 *  @author     David J. Bradshaw <dave@bradshaw.net>
 * 
 *  @see        {@link https://iframe-resizer.com}
 * 
 *  @copyright  (c) 2013 - 2024, David J. Bradshaw. All rights reserved.
 */


!function(){"use strict";const e="[iframe-resizer]";const t=t=>`${e}[${function(e){return window.top===window.self?`Parent page: ${e}`:window?.parentIFrame?.getId?`${window.parentIFrame.getId()}: ${e}`:`Nested parent page: ${e}`}(t)}]`,i=(e,i,...n)=>window?.console[e](t(i),...n),n=(e,...t)=>i("warn",e,...t),o=(t,i)=>console?.warn((e=>t=>window.chrome?e(t.replaceAll("<br>","\n").replaceAll("<rb>","[31;1m").replaceAll("</>","[m").replaceAll("<b>","[1m").replaceAll("<i>","[3m").replaceAll("<u>","[4m")):e(t.replaceAll("<br>","\n").replaceAll(/<[/a-z]+>/gi,"")))((t=>(...i)=>[`${e}[${t}]`,...i].join(" "))(t))(i)),r="5.0.0-RC.2",a="[iFrameSizer]",s=a.length,l=Object.freeze({max:1,scroll:1,bodyScroll:1,documentElementScroll:1}),c=(e,t,i,n)=>e.addEventListener(t,i,n||!1),u=(e,t,i)=>e.removeEventListener(t,i,!1),d=e=>{if(!e)return"";let t=-559038744,i=1103547984;for(let n,o=0;o<e.length;o++)n=e.codePointAt(o),t=Math.imul(t^n,2246822519),i=Math.imul(i^n,3266489917);return t^=Math.imul(t^i>>>15,1935289751),i^=Math.imul(i^t>>>15,3405138345),t^=i>>>16,i^=t>>>16,(2097152*(i>>>0)+(t>>>11)).toString(36)},f=e=>e.replaceAll(/[A-Za-z]/g,(e=>String.fromCodePoint((e<="Z"?90:122)>=(e=e.codePointAt(0)+19)?e:e-26))),p=["<iy><yi>Puchspk Spjluzl Rlf</><iy><iy>","<iy><yi>Tpzzpun Spjluzl Rlf</><iy><iy>","Aopz spiyhyf pz hchpshisl dpao ivao Jvttlyjphs huk Vwlu-Zvbylz spjluzlz.<iy><iy><i>Jvttlyjphs Spjluzl</><iy>Mvy jvttlyjphs bzl, <p>pmyhtl-ylzpgly</> ylxbpylz h svd jvza vul aptl spjluzl mll. Mvy tvyl pumvythapvu cpzpa <b>oaawz://pmyhtl-ylzpgly.jvt/wypjpun</>.<iy><iy><i>Vwlu Zvbyjl Spjluzl</><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-jvtlyjphs vwlu zvbyjl wyvqlja aolu fvb jhu bzl pa mvy myll bukly aol alytz vm aol NWS C3 Spjluzl. Av jvumpyt fvb hjjlwa aolzl alytz, wslhzl zla aol <i>spjlujl</> rlf pu <p>pmyhtl-ylzpgly</> vwapvuz av <i>NWSc3</>.<iy><iy>Mvy tvyl pumvythapvu wslhzl zll: <b>oaawz://pmyhtl-ylzpgly.jvt/nws</>","<i>NWSc3 Spjluzl Clyzpvu</><iy><iy>Aopz clyzpvu vm <p>pmyhtl-ylzpgly</> pz ilpun bzlk bukly aol alytz vm aol <i>NWS C3</> spjluzl. Aopz spjluzl hssvdz fvb av bzl <p>pmyhtl-ylzpgly</> pu Vwlu Zvbyjl wyvqljaz, iba pa ylxbpylz fvby wyvqlja av il wbispj, wyvcpkl haaypibapvu huk il spjluzlk bukly clyzpvu 3 vy shaly vm aol NUB Nlulyhs Wbispj Spjluzl.<iy><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-vwlu zvbyjl wyvqlja vy dlizpal, fvb dpss ullk av wbyjohzl h svd jvza vul aptl jvttlyjphs spjluzl.<iy><iy>Mvy tvyl pumvythapvu cpzpa <b>oaawz://pmyhtl-ylzpgly.jvt/wypjpun</>."],h=["NWSc3","ihzpj","wyvmlzzpvuhs","ibzpulzz","vlt"],m=Object.fromEntries(["2cgs7fdf4xb","1c9ctcccr4z","1q2pc4eebgb","ueokt0969w","w2zxchhgqz","1umuxblj2e5"].map(((e,t)=>[e,Math.max(0,t-1)]))),y=e=>f(p[e]);var g=e=>{const t=e[f("spjluzl")];if(!t)return-1;const i=t.split("-");let n=function(e=""){let t=-2;const i=d(f(e));return i in m&&(t=m[i]),t}(i[0]);return 0===n||(e=>e[2]===d(e[0]+e[1]))(i)||(n=-2),n};var w={};var b=Object.freeze({autoResize:!0,bodyBackground:null,bodyMargin:null,bodyPadding:null,checkOrigin:!0,direction:"vertical",inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"auto",id:"iFrameResizer",log:!0,license:void 0,mouseEvents:!0,offsetHeight:null,offsetWidth:null,postMessageTarget:null,sameDomain:!1,scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"auto",onClose:()=>!0,onClosed(){},onInit:!1,onMessage:null,onMouseEnter(){},onMouseLeave(){},onReady:e=>{"function"==typeof w[e.id].onInit&&(o(e.id,"\n[31;1mDeprecated Option[m\n\nThe [1monInit()[m function is deprecated and has been replaced with [1monReady()[m. It will be removed in a future version of iFrame Resizer.\n      "),w[e.id].onInit(e))},onResized(){},onScroll:()=>!0}),z={position:null,version:r};function v(e){function t(){x(A),M(),O("onResized",A)}function i(e){if("border-box"!==e.boxSizing)return 0;return(e.paddingTop?parseInt(e.paddingTop,10):0)+(e.paddingBottom?parseInt(e.paddingBottom,10):0)}function o(e){if("border-box"!==e.boxSizing)return 0;return(e.borderTopWidth?parseInt(e.borderTopWidth,10):0)+(e.borderBottomWidth?parseInt(e.borderBottomWidth,10):0)}function r(e){return C.slice(C.indexOf(":")+7+e)}const l=(e,t)=>(i,n)=>{const o={};var r,a;r=function(){S(`Send ${e} (${i})`,`${e}:${t()}`,n)},o[a=n]||(r(),o[a]=requestAnimationFrame((()=>{o[a]=null})))},d=(e,t)=>()=>{const i=t=>()=>{w[r]?e(t,r):o()};function n(e,t){t(window,"scroll",i("scroll")),t(window,"resize",i("resize window"))}function o(){n(0,u),a.disconnect(),s.disconnect()}const r=H,a=new ResizeObserver(i("page observed")),s=new ResizeObserver(i("iframe observed"));n(0,c),a.observe(document.body,{attributes:!0,childList:!0,subtree:!0}),s.observe(w[r].iframe,{attributes:!0,childList:!1,subtree:!1}),w[r]&&(w[r][`stop${t}`]=o)},f=e=>()=>{e in w[H]&&(w[H][e](),delete w[H][e])},p=l("pageInfo",(function(){const e=document.body.getBoundingClientRect(),t=A.iframe.getBoundingClientRect(),{scrollY:i,scrollX:n,innerHeight:o,innerWidth:r}=window,{clientHeight:a,clientWidth:s}=document.documentElement;return JSON.stringify({iframeHeight:t.height,iframeWidth:t.width,clientHeight:Math.max(a,o||0),clientWidth:Math.max(s,r||0),offsetTop:parseInt(t.top-e.top,10),offsetLeft:parseInt(t.left-e.left,10),scrollTop:i,scrollLeft:n,documentHeight:a,documentWidth:s,windowHeight:o,windowWidth:r})})),h=l("parentInfo",(function(){const{iframe:e}=A,{scrollWidth:t,scrollHeight:i}=document.documentElement,{width:n,height:o,offsetLeft:r,offsetTop:a,pageLeft:s,pageTop:l,scale:c}=window.visualViewport;return JSON.stringify({iframe:e.getBoundingClientRect(),document:{scrollWidth:t,scrollHeight:i},viewport:{width:n,height:o,offsetLeft:r,offsetTop:a,pageLeft:s,pageTop:l,scale:c}})})),m=d(p,"PageInfo"),y=d(h,"ParentInfo"),g=f("stopPageInfo"),b=f("stopParentInfo");function v(e){const t=e.getBoundingClientRect();return R(),{x:Number(t.left)+Number(z.position.x),y:Number(t.top)+Number(z.position.y)}}function $(e){const t=e?v(A.iframe):{x:0,y:0};let i=((e,t)=>({x:e.width+t.x,y:e.height+t.y}))(A,t);window.top===window.self?(z.position=i,W(H)):window.parentIFrame?window.parentIFrame["scrollTo"+(e?"Offset":"")](i.x,i.y):n(H,"Unable to scroll to requested position, window.parentIFrame not found")}function W(e){const{x:t,y:i}=z.position,n=w[e]?.iframe;!1!==O("onScroll",{iframe:n,top:i,left:t,x:t,y:i})?M():T()}function F(e){let t={};if(0===A.width&&0===A.height){const e=r(9).split(":");t={x:e[1],y:e[0]}}else t={x:A.width,y:A.height};O(e,{iframe:A.iframe,screenX:Number(t.x),screenY:Number(t.y),type:A.type})}const O=(e,t)=>j(H,e,t);let C=e.data,A={},H=null;"[iFrameResizerChild]Ready"!==C?a===`${C}`.slice(0,s)&&C.slice(s).split(":")[0]in w&&(A=function(){const e=C.slice(s).split(":"),t=e[1]?Number(e[1]):0,n=w[e[0]]?.iframe,r=getComputedStyle(n);return{iframe:n,id:e[0],height:t+i(r)+o(r),width:Number(e[2]),type:e[3]}}(),H=A.id,H?(function(e){if(!w[e])throw new Error(`${A.type} No settings for ${e}. Message was: ${C}`)}(H),A.type in{true:1,false:1,undefined:1}||(w[H].loaded=!0,function(){let e=!0;return null===A.iframe&&(n(H,`The iframe (${A.id}) was not found.`),e=!1),e}()&&function(){const{origin:t,sameDomain:i}=e;if(i)return!0;let n=w[H]?.checkOrigin;if(n&&"null"!=`${t}`&&!(n.constructor===Array?function(){let e=0,i=!1;for(;e<n.length;e++)if(n[e]===t){i=!0;break}return i}():function(){const e=w[H]?.remoteHost;return t===e}()))throw new Error(`Unexpected message received from: ${t} for ${A.iframe.id}. Message was: ${e.data}. This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.`);return!0}()&&function(){switch(w[H]?.firstRun&&w[H]&&(w[H].firstRun=!1),A.type){case"close":k(A.iframe);break;case"message":e=r(6),O("onMessage",{iframe:A.iframe,message:JSON.parse(e)});break;case"mouseenter":F("onMouseEnter");break;case"mouseleave":F("onMouseLeave");break;case"autoResize":w[H].autoResize=JSON.parse(r(9));break;case"scrollTo":$(!1);break;case"scrollToOffset":$(!0);break;case"pageInfo":p("start",H),m();break;case"parentInfo":h("start",H),y();break;case"pageInfoStop":g();break;case"parentInfoStop":b();break;case"inPageLink":!function(e){const t=e.split("#")[1]||"",i=decodeURIComponent(t);let n=document.getElementById(i)||document.getElementsByName(i)[0];n?function(){const e=v(n);z.position={x:e.x,y:e.y},W(H)}():window.top!==window.self&&window.parentIFrame&&window.parentIFrame.moveToAnchor(t)}(r(9));break;case"reset":I(A);break;case"init":t(),function(e){try{w[e].sameDomain=!!w[e]?.iframe?.contentWindow?.iframeChildListener}catch(t){w[e].sameDomain=!1}}(H),N=!0,O("onReady",A.iframe);break;default:if(0===A.width&&0===A.height)return void n(`Unsupported message received (${A.type}), this is likely due to the iframe containing a later version of iframe-resizer than the parent page`);if(0===A.width||0===A.height)return;if(document.hidden)return;t()}var e}())):n("iframeResizer received messageData without id, message was: ",C)):Object.keys(w).forEach((e=>{w[e].mode>=0&&S("iFrame requested init",E(e),e)}))}function j(e,t,i){let n=null,o=null;if(w[e]){if(n=w[e][t],"function"!=typeof n)throw new TypeError(`${t} on iFrame[${e}] is not a function`);o=n(i)}return o}function $(e){const t=e.id;delete w[t]}function k(e){const t=e.id;if(!1!==j(t,"onClose",t)){try{e.parentNode&&e.remove()}catch(e){n(e)}j(t,"onClosed",t),$(e)}}function R(e){null===z.position&&(z.position={x:window.scrollX,y:window.scrollY})}function T(){z.position=null}function M(e){null!==z.position&&(window.scrollTo(z.position.x,z.position.y),T())}function I(e){R(e.id),x(e),S("reset","reset",e.id)}function x(e){const t=e.id;function i(t){const i=`${e[t]}px`;e.iframe.style[t]=i}w[t].sizeHeight&&i("height"),w[t].sizeWidth&&i("width")}function S(e,t,i,r){w[i]&&(w[i]?.postMessageTarget?function(){const{postMessageTarget:e,targetOrigin:n}=w[i];if(w[i].sameDomain)try{return void w[i].iframe.contentWindow.iframeChildListener(a+t)}catch(e){w[i].sameDomain=!1}e.postMessage(a+t,n)}():n(i,`[${e}] IFrame(${i}) not found`),r&&w[i]?.warningTimeout&&(w[i].msgTimeout=setTimeout((function(){void 0!==w[i]&&(w[i].loaded||w[i].loadErrorShown||(w[i].loadErrorShown=!0,o(i,`\n<rb>No response from iFrame</>\n            \nThe iframe (<i>${i}</>) has not responded within ${w[i].warningTimeout/1e3} seconds. Check <b>@iframe-resizer/child</> package has been loaded in the iframe.\n\nThis message can be ignored if everything is working, or you can set the <b>warningTimeout</> option to a higher value or zero to suppress this warning.\n`)))}),w[i].warningTimeout)))}function E(e){const t=w[e];return[e,"8",t.sizeWidth,t.log,"32",t.enablePublicMethods,t.autoResize,t.bodyMargin,t.heightCalculationMethod,t.bodyBackground,t.bodyPadding,t.tolerance,t.inPageLinks,"child",t.widthCalculationMethod,t.mouseEvents,t.offsetHeight,t.offsetWidth,t.sizeHeight,t.license,z.version,t.mode].join(":")}let W=0,N=!1,F=!1;var O=e=>t=>{function a(e){if(!e)return{};if("object"!=typeof e)throw new TypeError("Options is not an object");return("sizeWidth"in e||"sizeHeight"in e||"autoResize"in e)&&o(s,'<rb>Deprecated Option</>\n\nThe <b>sizeWidth</>, <b>sizeHeight</> and <b>autoResize</> options have been replaced with new <b>direction</> option which expects values of <i>"vertical"</>, <i>"horizontal"</> or <i>"horizontal"</>.\n'),e}const s=function(i){if(i&&"string"!=typeof i)throw new TypeError("Invaild id for iFrame. Expected String");return""!==i&&i||(t.id=i=function(){let t=e?.id||b.id+W++;return null!==document.getElementById(t)&&(t+=W++),t}(),(e||{}).log),i}(t.id);return s in w&&"iFrameResizer"in t?n(s,"Ignored iFrame, already setup."):(function(e){var i,n;w[s]={iframe:t,firstRun:!0,remoteHost:t?.src.split("/").slice(0,3).join("/"),...b,...a(e),mode:g(e)},function(){if("horizontal"===w[s].direction)return w[s].sizeWidth=!0,void(w[s].sizeHeight=!1);if("none"===w[s].direction)return w[s].sizeWidth=!1,w[s].sizeHeight=!1,void(w[s].autoResize=!1);if("vertical"!==w[s].direction)throw new TypeError(s,`Direction value of "${w[s].direction}" is not valid`)}(),i=e?.offset,i&&("vertical"===w[s].direction?w[s].offsetHeight=i:w[s].offsetWidth=i),null===w[s].postMessageTarget&&(w[s].postMessageTarget=t.contentWindow),w[s].targetOrigin=!0===w[s].checkOrigin?""===(n=w[s].remoteHost)||null!==n.match(/^(about:blank|javascript:|file:\/\/)/)?"*":n:"*"}(e),function(){const{mode:e}=w[s];e<0&&o("Parent",`${y(e+2)}${y(2)}`),F||e<0||(F=!0,((e,...t)=>{i("info",e,...t)})(`v${r} (${(e=>f(h[e]))(e)})`),e<1&&o("Parent",y(3)))}(),A(),function(){switch(t.style.overflow=!1===w[s]?.scrolling?"hidden":"auto",w[s]?.scrolling){case"omit":break;case!0:t.scrolling="yes";break;case!1:t.scrolling="no";break;default:t.scrolling=w[s]?w[s].scrolling:"no"}}(),function(){const{bodyMargin:e}=w[s];"number"!=typeof e&&"0"!==e||(w[s].bodyMargin=`${e}px`)}(),function(e){const{id:i}=t;w[s].mode>=0&&(c(t,"load",(function(){S("iFrame.onload",`${e}:${N}`,i,!0),function(){const e=w[s]?.firstRun,i=w[s]?.heightCalculationMethod in l;!e&&i&&I({iframe:t,height:0,width:0,type:"init"})}()})),S("init",`${e}:${N}`,i,!0))}(E(s)),function(){if(w[s]){const e={close:k.bind(null,w[s].iframe),disconnect:$.bind(null,w[s].iframe),removeListeners(){o(s,"\n<rb>Deprecated Method Name</>\n\nThe [removeListeners()</> method has been renamed to [disconnect()</>.\n"),this.disconnect()},resize:S.bind(null,"Window resize","resize",s),moveToAnchor(e){S("Move to anchor",`moveToAnchor:${e}`,s)},sendMessage(e){S("Send Message",`message:${e=JSON.stringify(e)}`,s)}};w[s].iframe.iframeResizer=e,w[s].iframe.iFrameResizer=e}}()),t?.iFrameResizer};function C(){!1===document.hidden&&function(e,t){const i=e=>w[e]?.autoResize&&!w[e]?.firstRun;Object.keys(w).forEach((function(n){i(n)&&S(e,t,n)}))}("Tab Visible","resize")}const A=(e=>{let t=!1;return function(){return t?void 0:(t=!0,Reflect.apply(e,this,arguments))}})((()=>{c(window,"message",v),c(document,"visibilitychange",C),window.iframeParentListener=e=>v({data:e,sameDomain:!0})})),H="[iframeResizer] ";window.iframeResize=function(){function e(e){switch(!0){case!e:throw new TypeError(`${H}iframe is not defined`);case!e.tagName:throw new TypeError(`${H}Not a valid DOM element`);case"IFRAME"!==e.tagName.toUpperCase():throw new TypeError(`${H}Expected <IFRAME> tag, found <${e.tagName}>`);default:t(e),i.push(e)}}let t,i;return function(n,o){if("undefined"==typeof window)return[];switch(t=O(n),i=[],typeof o){case"undefined":case"string":document.querySelectorAll(o||"iframe").forEach(e);break;case"object":e(o);break;default:throw new TypeError(`${H}Unexpected data type (${typeof o})`)}return Object.freeze(i)}}(),window.iFrameResize=function(...e){o("","Deprecated: iFrameResize(), please use iframeResize()"),window.iframeResize(...e)}}();
