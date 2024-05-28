/*!
 *  @preserve
 *  
 *  @module     iframe-resizer/jquery 5.0.1 (iife) 
 *
 *  @license    GPL-3.0 for non-commercial use only.
 *              For commercial use, you must purchase a license from
 *              https://iframe-resizer.com/pricing
 * 
 *  @desciption Keep same and cross domain iFrames sized to their content 
 *
 *  @author     David J. Bradshaw <info@iframe-resizer.com>
 * 
 *  @see        {@link https://iframe-resizer.com}
 * 
 *  @copyright  (c) 2013 - 2024, David J. Bradshaw. All rights reserved.
 */


!function(){"use strict";const e="5.0.1",i="[iFrameSizer]",t=i.length,n=Object.freeze({max:1,scroll:1,bodyScroll:1,documentElementScroll:1}),o=(e,i,t,n)=>e.addEventListener(i,t,n||!1),r=(e,i,t)=>e.removeEventListener(i,t,!1);const a="[iframe-resizer]";const s=e=>`${a}[${function(e){return window.top===window.self?`Parent page: ${e}`:window?.parentIFrame?.getId?`${window.parentIFrame.getId()}: ${e}`:`Nested parent page: ${e}`}(e)}]`,l=(e,i,...t)=>window?.console[e](s(i),...t),c=(e,...i)=>l("warn",e,...i),d=(e,i)=>console?.warn((e=>i=>window.chrome?e(i.replaceAll("<br>","\n").replaceAll("<rb>","[31;1m").replaceAll("</>","[m").replaceAll("<b>","[1m").replaceAll("<i>","[3m").replaceAll("<u>","[4m")):e(i.replaceAll("<br>","\n").replaceAll(/<[/a-z]+>/gi,"")))((e=>(...i)=>[`${a}[${e}]`,...i].join(" "))(e))(i)),u=e=>{if(!e)return"";let i=-559038744,t=1103547984;for(let n,o=0;o<e.length;o++)n=e.codePointAt(o),i=Math.imul(i^n,2246822519),t=Math.imul(t^n,3266489917);return i^=Math.imul(i^t>>>15,1935289751),t^=Math.imul(t^i>>>15,3405138345),i^=t>>>16,t^=i>>>16,(2097152*(t>>>0)+(i>>>11)).toString(36)},f=e=>e.replaceAll(/[A-Za-z]/g,(e=>String.fromCodePoint((e<="Z"?90:122)>=(e=e.codePointAt(0)+19)?e:e-26))),p=["<iy><yi>Puchspk Spjluzl Rlf</><iy><iy>","<iy><yi>Tpzzpun Spjluzl Rlf</><iy><iy>","Aopz spiyhyf pz hchpshisl dpao ivao Jvttlyjphs huk Vwlu-Zvbyjl spjluzlz.<iy><iy><i>Jvttlyjphs Spjluzl</><iy>Mvy jvttlyjphs bzl, <p>pmyhtl-ylzpgly</> ylxbpylz h svd jvza vul aptl spjluzl mll. Mvy tvyl pumvythapvu cpzpa <b>oaawz://pmyhtl-ylzpgly.jvt/wypjpun</>.<iy><iy><i>Vwlu Zvbyjl Spjluzl</><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-jvttlyjphs vwlu zvbyjl wyvqlja aolu fvb jhu bzl pa mvy myll bukly aol alytz vm aol NWS C3 Spjluzl. Av jvumpyt fvb hjjlwa aolzl alytz, wslhzl zla aol <i>spjluzl</> rlf pu <p>pmyhtl-ylzpgly</> vwapvuz av <i>NWSc3</>.<iy><iy>Mvy tvyl pumvythapvu wslhzl zll: <b>oaawz://pmyhtl-ylzpgly.jvt/nws</>","<i>NWSc3 Spjluzl Clyzpvu</><iy><iy>Aopz clyzpvu vm <p>pmyhtl-ylzpgly</> pz ilpun bzlk bukly aol alytz vm aol <i>NWS C3</> spjluzl. Aopz spjluzl hssvdz fvb av bzl <p>pmyhtl-ylzpgly</> pu Vwlu Zvbyjl wyvqljaz, iba pa ylxbpylz fvby wyvqlja av il wbispj, wyvcpkl haaypibapvu huk il spjluzlk bukly clyzpvu 3 vy shaly vm aol NUB Nlulyhs Wbispj Spjluzl.<iy><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-vwlu zvbyjl wyvqlja vy dlizpal, fvb dpss ullk av wbyjohzl h svd jvza vul aptl jvttlyjphs spjluzl.<iy><iy>Mvy tvyl pumvythapvu cpzpa <b>oaawz://pmyhtl-ylzpgly.jvt/wypjpun</>."],h=["NWSc3","zvsv","wyv","ibzpulzz","vlt"],m=Object.fromEntries(["2cgs7fdf4xb","1c9ctcccr4z","1q2pc4eebgb","ueokt0969w","w2zxchhgqz","1umuxblj2e5"].map(((e,i)=>[e,Math.max(0,i-1)]))),y=e=>f(p[e]);var g=e=>{const i=e[f("spjluzl")];if(!i)return-1;const t=i.split("-");let n=function(e=""){let i=-2;const t=u(f(e));return t in m&&(i=m[t]),i}(t[0]);return 0===n||(e=>e[2]===u(e[0]+e[1]))(t)||(n=-2),n};var w={};var b=Object.freeze({autoResize:!0,bodyBackground:null,bodyMargin:null,bodyPadding:null,checkOrigin:!0,direction:"vertical",inPageLinks:!1,heightCalculationMethod:"auto",id:"iFrameResizer",log:!1,license:void 0,mouseEvents:!0,offsetHeight:null,offsetWidth:null,postMessageTarget:null,sameDomain:!1,scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"auto",onClose:()=>!0,onClosed(){},onInit:!1,onMessage:null,onMouseEnter(){},onMouseLeave(){},onReady:e=>{"function"==typeof w[e.id].onInit&&(d(e.id,"\n[31;1mDeprecated Option[m\n\nThe [1monInit()[m function is deprecated and has been replaced with [1monReady()[m. It will be removed in a future version of iFrame Resizer.\n      "),w[e.id].onInit(e))},onResized(){},onScroll:()=>!0}),v={position:null,version:e};function z(n){function a(){S(L),M(),A("onResized",L)}function s(e){if("border-box"!==e.boxSizing)return 0;return(e.paddingTop?parseInt(e.paddingTop,10):0)+(e.paddingBottom?parseInt(e.paddingBottom,10):0)}function l(e){if("border-box"!==e.boxSizing)return 0;return(e.borderTopWidth?parseInt(e.borderTopWidth,10):0)+(e.borderBottomWidth?parseInt(e.borderBottomWidth,10):0)}function u(e){return H.slice(H.indexOf(":")+7+e)}const f=(e,i)=>(t,n)=>{const o={};var r,a;r=function(){x(`Send ${e} (${t})`,`${e}:${i()}`,n)},o[a=n]||(r(),o[a]=requestAnimationFrame((()=>{o[a]=null})))},p=(e,i)=>()=>{const t=i=>()=>{w[s]?e(i,s):a()};function n(e,i){i(window,"scroll",t("scroll")),i(window,"resize",t("resize window"))}function a(){n(0,r),l.disconnect(),c.disconnect()}const s=P,l=new ResizeObserver(t("page observed")),c=new ResizeObserver(t("iframe observed"));n(0,o),l.observe(document.body,{attributes:!0,childList:!0,subtree:!0}),c.observe(w[s].iframe,{attributes:!0,childList:!1,subtree:!1}),w[s]&&(w[s][`stop${i}`]=a)},h=e=>()=>{e in w[P]&&(w[P][e](),delete w[P][e])},m=f("pageInfo",(function(){const e=document.body.getBoundingClientRect(),i=L.iframe.getBoundingClientRect(),{scrollY:t,scrollX:n,innerHeight:o,innerWidth:r}=window,{clientHeight:a,clientWidth:s}=document.documentElement;return JSON.stringify({iframeHeight:i.height,iframeWidth:i.width,clientHeight:Math.max(a,o||0),clientWidth:Math.max(s,r||0),offsetTop:parseInt(i.top-e.top,10),offsetLeft:parseInt(i.left-e.left,10),scrollTop:t,scrollLeft:n,documentHeight:a,documentWidth:s,windowHeight:o,windowWidth:r})})),y=f("parentInfo",(function(){const{iframe:e}=L,{scrollWidth:i,scrollHeight:t}=document.documentElement,{width:n,height:o,offsetLeft:r,offsetTop:a,pageLeft:s,pageTop:l,scale:c}=window.visualViewport;return JSON.stringify({iframe:e.getBoundingClientRect(),document:{scrollWidth:i,scrollHeight:t},viewport:{width:n,height:o,offsetLeft:r,offsetTop:a,pageLeft:s,pageTop:l,scale:c}})})),g=p(m,"PageInfo"),b=p(y,"ParentInfo"),z=h("stopPageInfo"),k=h("stopParentInfo");function N(e){const i=e.getBoundingClientRect();return T(),{x:Number(i.left)+Number(v.position.x),y:Number(i.top)+Number(v.position.y)}}function F(e){const i=e?N(L.iframe):{x:0,y:0};let t=((e,i)=>({x:e.width+i.x,y:e.height+i.y}))(L,i);window.top===window.self?(v.position=t,O(P)):window.parentIFrame?window.parentIFrame["scrollTo"+(e?"Offset":"")](t.x,t.y):c(P,"Unable to scroll to requested position, window.parentIFrame not found")}function O(e){const{x:i,y:t}=v.position,n=w[e]?.iframe;!1!==A("onScroll",{iframe:n,top:t,left:i,x:i,y:t})?M():$()}function C(e){let i={};if(0===L.width&&0===L.height){const e=u(9).split(":");i={x:e[1],y:e[0]}}else i={x:L.width,y:L.height};A(e,{iframe:L.iframe,screenX:Number(i.x),screenY:Number(i.y),type:L.type})}const A=(e,i)=>j(P,e,i);let H=n.data,L={},P=null;"[iFrameResizerChild]Ready"!==H?i===`${H}`.slice(0,t)&&H.slice(t).split(":")[0]in w&&(L=function(){const e=H.slice(t).split(":"),i=e[1]?Number(e[1]):0,n=w[e[0]]?.iframe,o=getComputedStyle(n);return{iframe:n,id:e[0],height:i+s(o)+l(o),width:Number(e[2]),type:e[3],version:e[4]}}(),P=L.id,P?(function(e){if(!w[e])throw new Error(`${L.type} No settings for ${e}. Message was: ${H}`)}(P),L.type in{true:1,false:1,undefined:1}||(w[P].loaded=!0,function(){let e=!0;return null===L.iframe&&(c(P,`The iframe (${L.id}) was not found.`),e=!1),e}()&&function(){const{origin:e,sameDomain:i}=n;if(i)return!0;let t=w[P]?.checkOrigin;if(t&&"null"!=`${e}`&&!(t.constructor===Array?function(){let i=0,n=!1;for(;i<t.length;i++)if(t[i]===e){n=!0;break}return n}():function(){const i=w[P]?.remoteHost;return e===i}()))throw new Error(`Unexpected message received from: ${e} for ${L.iframe.id}. Message was: ${n.data}. This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.`);return!0}()&&function(){switch(w[P]?.firstRun&&w[P]&&(w[P].firstRun=!1),L.type){case"close":R(L.iframe);break;case"message":t=u(6),A("onMessage",{iframe:L.iframe,message:JSON.parse(t)});break;case"mouseenter":C("onMouseEnter");break;case"mouseleave":C("onMouseLeave");break;case"autoResize":w[P].autoResize=JSON.parse(u(9));break;case"scrollTo":F(!1);break;case"scrollToOffset":F(!0);break;case"pageInfo":m("start",P),g();break;case"parentInfo":y("start",P),b();break;case"pageInfoStop":z();break;case"parentInfoStop":k();break;case"inPageLink":!function(e){const i=e.split("#")[1]||"",t=decodeURIComponent(i);let n=document.getElementById(t)||document.getElementsByName(t)[0];n?function(){const e=N(n);v.position={x:e.x,y:e.y},O(P)}():window.top!==window.self&&window.parentIFrame&&window.parentIFrame.moveToAnchor(i)}(u(9));break;case"reset":I(L);break;case"init":a(),function(e){try{w[e].sameDomain=!!w[e]?.iframe?.contentWindow?.iframeChildListener}catch(i){w[e].sameDomain=!1}}(P),(i=L.version)!==e&&(void 0!==i||d(P,"<rb>Legacy version detected in iframe</>\n\nDetected legacy version of child page script. It is recommended to update the page in the iframe to use <b>@iframe-resizer/child</>.\n\nSee <u>https://iframe-resizer.com/setup/#child-page-setup</> for more details.\n")),E=!0,A("onReady",L.iframe);break;default:if(0===L.width&&0===L.height)return void c(`Unsupported message received (${L.type}), this is likely due to the iframe containing a later version of iframe-resizer than the parent page`);if(0===L.width||0===L.height)return;if(document.hidden)return;a()}var i,t}())):c("iframeResizer received messageData without id, message was: ",H)):Object.keys(w).forEach((e=>{w[e].mode>=0&&x("iFrame requested init",W(e),e)}))}function j(e,i,t){let n=null,o=null;if(w[e]){if(n=w[e][i],"function"!=typeof n)throw new TypeError(`${i} on iFrame[${e}] is not a function`);o=n(t)}return o}function k(e){const i=e.id;delete w[i]}function R(e){const i=e.id;if(!1!==j(i,"onClose",i)){try{e.parentNode&&e.remove()}catch(e){c(e)}j(i,"onClosed",i),k(e)}}function T(e){null===v.position&&(v.position={x:window.scrollX,y:window.scrollY})}function $(){v.position=null}function M(e){null!==v.position&&(window.scrollTo(v.position.x,v.position.y),$())}function I(e){T(e.id),S(e),x("reset","reset",e.id)}function S(e){const i=e.id;function t(i){const t=`${e[i]}px`;e.iframe.style[i]=t}w[i].sizeHeight&&t("height"),w[i].sizeWidth&&t("width")}function x(e,t,n,o){w[n]&&(w[n]?.postMessageTarget?function(){const{postMessageTarget:e,targetOrigin:o}=w[n];if(w[n].sameDomain)try{return void w[n].iframe.contentWindow.iframeChildListener(i+t)}catch(e){w[n].sameDomain=!1}e.postMessage(i+t,o)}():c(n,`[${e}] IFrame(${n}) not found`),o&&w[n]?.warningTimeout&&(w[n].msgTimeout=setTimeout((function(){void 0!==w[n]&&(w[n].loaded||w[n].loadErrorShown||(w[n].loadErrorShown=!0,d(n,`\n<rb>No response from iFrame</>\n            \nThe iframe (<i>${n}</>) has not responded within ${w[n].warningTimeout/1e3} seconds. Check <b>@iframe-resizer/child</> package has been loaded in the iframe.\n\nThis message can be ignored if everything is working, or you can set the <b>warningTimeout</> option to a higher value or zero to suppress this warning.\n`)))}),w[n].warningTimeout)))}function W(e){const i=w[e];return[e,"8",i.sizeWidth,i.log,"32",!0,i.autoResize,i.bodyMargin,i.heightCalculationMethod,i.bodyBackground,i.bodyPadding,i.tolerance,i.inPageLinks,"child",i.widthCalculationMethod,i.mouseEvents,i.offsetHeight,i.offsetWidth,i.sizeHeight,i.license,v.version,i.mode].join(":")}let N=0,E=!1,F=!1;var O=i=>t=>{function r(e){if(!e)return{};if("object"!=typeof e)throw new TypeError("Options is not an object");return("sizeWidth"in e||"sizeHeight"in e||"autoResize"in e)&&d(a,'<rb>Deprecated Option</>\n\nThe <b>sizeWidth</>, <b>sizeHeight</> and <b>autoResize</> options have been replaced with new <b>direction</> option which expects values of <i>"vertical"</>, <i>"horizontal"</> or <i>"horizontal"</>.\n'),e}const a=function(e){if(e&&"string"!=typeof e)throw new TypeError("Invalid id for iFrame. Expected String");return""!==e&&e||(t.id=e=function(){let e=i?.id||b.id+N++;return null!==document.getElementById(e)&&(e+=N++),e}(),(i||{}).log),e}(t.id);return a in w&&"iFrameResizer"in t?c(a,"Ignored iFrame, already setup."):(function(e){var i,n;w[a]={iframe:t,firstRun:!0,remoteHost:t?.src.split("/").slice(0,3).join("/"),...b,...r(e),mode:g(e)},function(){if("horizontal"===w[a].direction)return w[a].sizeWidth=!0,void(w[a].sizeHeight=!1);if("none"===w[a].direction)return w[a].sizeWidth=!1,w[a].sizeHeight=!1,void(w[a].autoResize=!1);if("vertical"!==w[a].direction)throw new TypeError(a,`Direction value of "${w[a].direction}" is not valid`)}(),i=e?.offset,i&&("vertical"===w[a].direction?w[a].offsetHeight=i:w[a].offsetWidth=i),null===w[a].postMessageTarget&&(w[a].postMessageTarget=t.contentWindow),w[a].targetOrigin=!0===w[a].checkOrigin?""===(n=w[a].remoteHost)||null!==n.match(/^(about:blank|javascript:|file:\/\/)/)?"*":n:"*"}(i),function(){const{mode:i}=w[a];i<0&&d("Parent",`${y(i+2)}${y(2)}`),F||i<0||(F=!0,((e,...i)=>{l("info",e,...i)})(`v${e} (${(e=>f(h[e]))(i)})`),i<1&&d("Parent",y(3)))}(),A(),function(){switch(t.style.overflow=!1===w[a]?.scrolling?"hidden":"auto",w[a]?.scrolling){case"omit":break;case!0:t.scrolling="yes";break;case!1:t.scrolling="no";break;default:t.scrolling=w[a]?w[a].scrolling:"no"}}(),function(){const{bodyMargin:e}=w[a];"number"!=typeof e&&"0"!==e||(w[a].bodyMargin=`${e}px`)}(),function(e){const{id:i}=t;w[a].mode>=0&&(o(t,"load",(function(){x("iFrame.onload",`${e}:${E}`,i,!0),function(){const e=w[a]?.firstRun,i=w[a]?.heightCalculationMethod in n;!e&&i&&I({iframe:t,height:0,width:0,type:"init"})}()})),x("init",`${e}:${E}`,i,!0))}(W(a)),function(){if(w[a]){const e={close:R.bind(null,w[a].iframe),disconnect:k.bind(null,w[a].iframe),removeListeners(){d(a,"\n<rb>Deprecated Method Name</>\n\nThe [removeListeners()</> method has been renamed to [disconnect()</>.\n"),this.disconnect()},resize:x.bind(null,"Window resize","resize",a),moveToAnchor(e){x("Move to anchor",`moveToAnchor:${e}`,a)},sendMessage(e){x("Send Message",`message:${e=JSON.stringify(e)}`,a)}};w[a].iframe.iframeResizer=e,w[a].iframe.iFrameResizer=e}}()),t?.iFrameResizer};function C(){!1===document.hidden&&function(e,i){const t=e=>w[e]?.autoResize&&!w[e]?.firstRun;Object.keys(w).forEach((function(n){t(n)&&x(e,i,n)}))}("Tab Visible","resize")}const A=(e=>{let i=!1;return function(){return i?void 0:(i=!0,Reflect.apply(e,this,arguments))}})((()=>{o(window,"message",z),o(document,"visibilitychange",C),window.iframeParentListener=e=>z({data:e,sameDomain:!0})}));switch(!0){case void 0===window.jQuery:c("","Unable to bind to jQuery, it is not available.");break;case!window.jQuery.fn:c("","Unable to bind to jQuery, it is not fully loaded.");break;case window.jQuery.fn.iframeResize:c("","iframeResize is already assigned to jQuery.fn.");break;default:window.jQuery.fn.iframeResize=function(e){const i=O(e);return this.filter("iframe").each(i).end()},window.jQuery.fn.iFrameResize=function(e){return c("","Deprecated:  Use the iframeResize method instead of iFrameResize"),this.iframeResize(e)}}}();