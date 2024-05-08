/*!
 *  @preserve
 *  
 *  @module     iframe-resizer/child 5.0.0-alpha.12 (iife) 
 *
 *  @license    GPL-3.0 for non-commercial use only.
 *              For commercial use, you must purchase a license from
 *              http://iframe-resizer.com/pricing
 * 
 *  @desciption Keep same and cross domain iFrames sized to their content 
 *
 *  @author     David J. Bradshaw <dave@bradshaw.net>
 * 
 *  @see        {@link http://iframe-resizer.com}
 * 
 *  @copyright  (c) 2013 - 2024, David J. Bradshaw. All rights reserved.
 */


!function(){"use strict";const e="5.0.0-alpha.12",t=10,n="data-iframe-size",o=(e,t,n,o)=>e.addEventListener(t,n,o||!1),i=(e,t,n)=>e.removeEventListener(t,n,!1),a={contentVisibilityAuto:!0,opacityProperty:!0,visibilityProperty:!0},r={height:()=>(ce("Custom height calculation function not defined"),Re.auto()),width:()=>(ce("Custom width calculation function not defined"),xe.auto())},l={bodyOffset:1,bodyScroll:1,offset:1,documentElementOffset:1,documentElementScroll:1,documentElementBoundingClientRect:1,max:1,min:1,grow:1,lowestElement:1},s=128,c={},u="checkVisibility"in window,d="auto",m={reset:1,resetPage:1,init:1},f="[iFrameSizer]",h=f.length,p={max:1,min:1,bodyScroll:1,documentElementScroll:1},g=["body"],y="scroll";let v,b,w=!0,z="",$=0,S="",M=null,O="",j=!0,E=!1,T=null,P=!0,C=!1,I=1,A=d,k=!0,N="",R={},x=!0,L=!1,H=0,B=!1,q=!1,D="",F=0,W=0,U="child",J=null,V=!1,Z=window.parent,Q="*",Y=0,X=!1,G=1,K=y,_=window,ee=()=>{ce("onMessage function not defined")},te=()=>{},ne=null,oe=null;const ie=e=>e.charAt(0).toUpperCase()+e.slice(1),ae=e=>""!=`${e}`&&void 0!==e;function re(e){switch(!0){case!ae(e):return"";case ae(e.id):return`${e.nodeName.toUpperCase()}#${e.id}`;case ae(e.name):return`${e.nodeName.toUpperCase()} (${e.name})`;default:return e.nodeName.toUpperCase()+(ae(e.className)?`.${e.className}`:"")}}const le=(...e)=>[`${f}[${D}]`,...e].join(" "),se=(...e)=>L&&console?.log(le(...e)),ce=(...e)=>console?.warn(le(...e)),ue=(...e)=>console?.warn(((...e)=>{return window.chrome?le(...e).replaceAll("<br>","\n").replaceAll("<rb>","[31;1m").replaceAll("</>","[m").replaceAll("<b>","[1m").replaceAll("<i>","[3m").replaceAll("<u>","[4m"):(t=le(...e),t.replaceAll("<br>","\n").replaceAll(/<[/a-z]+>/gi,""));var t})(...e)),de=e=>ue(e.replaceAll(/[A-Za-z]/g,(e=>String.fromCodePoint((e<="Z"?90:122)>=(e=e.codePointAt(0)+19)?e:e-26))));function me(){!function(){try{V="iframeParentListener"in window.parent}catch(e){se("Cross domain iframe detected.")}}(),function(){const e=e=>"true"===e,t=N.slice(h).split(":");D=t[0],$=void 0===t[1]?$:Number(t[1]),E=void 0===t[2]?E:e(t[2]),L=void 0===t[3]?L:e(t[3]),w=void 0===t[6]?w:e(t[6]),S=t[7],A=void 0===t[8]?A:t[8],z=t[9],O=t[10],Y=void 0===t[11]?Y:Number(t[11]),R.enable=void 0!==t[12]&&e(t[12]),U=void 0===t[13]?U:t[13],K=void 0===t[14]?K:t[14],q=void 0===t[15]?q:e(t[15]),F=void 0===t[16]?F:Number(t[16]),W=void 0===t[17]?W:Number(t[17]),j=void 0===t[18]?j:e(t[18]),v=t[19],b=t[20],B=void 0===t[21]?B:e(t[21])}(),se(`Initialising iFrame v${e} (${window.location.href})`),function(){function e(){const e=window.iFrameResizer;se(`Reading data from page: ${JSON.stringify(e)}`),ee=e?.onMessage||ee,te=e?.onReady||te,F=e?.offsetHeight||F,W=e?.offsetWidth||W,Q=e?.targetOrigin||Q,A=e?.heightCalculationMethod||A,K=e?.widthCalculationMethod||K}function t(e,t){return"function"==typeof e&&(se(`Setup custom ${t}CalcMethod`),r[t]=e,e="custom"),e}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(e(),A=t(A,"height"),K=t(K,"width"));se(`TargetOrigin for parent set to: ${Q}`)}(),function(){H=["1jqr0si6pnt","tw4ra3kya","gz3au7jfuk","1irylf8sei5","1p37k9w4kov"].indexOf(v),-1===H&&""!==v&&(H=-2);!B&&b||(H=9);se("Mode set to",H,B,b)}(),function(){void 0===S&&(S=`${$}px`);fe("margin",function(e,t){t.includes("-")&&(ce(`Negative CSS value ignored for ${e}`),t="");return t}("margin",S))}(),fe("background",z),fe("padding",O),function(){const e=document.createElement("div");e.style.clear="both",e.style.display="block",e.style.height="0",document.body.append(e)}(),function(){const e=e=>e.style.setProperty("height","auto","important");e(document.documentElement),e(document.body),se('HTML & body height set to "auto !important"')}(),H<0?de(`${we[H+2]}${we[2]}`):H<2&&de(we[3]),ve(),be(),function(){let e=!1;const t=t=>document.querySelectorAll(`[${t}]`).forEach((o=>{e=!0,o.removeAttribute(t),o.setAttribute(n,null)}));t("data-iframe-height"),t("data-iframe-width"),e&&ue("\n<rb>Deprecated Attributes</>\n          \nThe <b>data-iframe-height</> and <b>data-iframe-width</> attributes have been deprecated and replaced with the single <b>data-iframe-size</> attribute. Use of the old attributes will be removed in a future version of <i>iframe-resizer</>.")}(),document.querySelectorAll(`[${n}]`).length>0&&("auto"===A&&(A="autoOverflow",se('data-iframe-size attribute found on page, using "autoOverflow" calculation method for height')),"auto"===K&&(K="autoOverflow",se('data-iframe-size attribute found on page, using "autoOverflow" calculation method for width'))),ge(),_.parentIframe=Object.freeze({autoResize:e=>(!0===e&&!1===w?(w=!0,ze()):!1===e&&!0===w&&(w=!1,pe("remove"),J?.disconnect(),M?.disconnect()),Fe(0,0,"autoResize",JSON.stringify(w)),w),close(){Fe(0,0,"close")},getId:()=>D,getPageInfo(e){if("function"==typeof e)return ne=e,Fe(0,0,"pageInfo"),void ue("\n<rb>Deprecated Method</>\n          \nThe <b>getPageInfo()</> method has been deprecated and replaced with  <b>getParentProperties()</>. Use of this method will be removed in a future version of <i>iframe-resizer</>.\n");ne=null,Fe(0,0,"pageInfoStop")},getParentProperties(e){if("function"!=typeof e)throw new TypeError("parentIFrame.getParentProperties(callback) callback not a function");return oe=e,Fe(0,0,"parentInfo"),()=>{oe=null,Fe(0,0,"parentInfoStop")}},moveToAnchor(e){R.findTarget(e)},reset(){De("parentIFrame.reset")},scrollTo(e,t){Fe(t,e,"scrollTo")},scrollToOffset(e,t){Fe(t,e,"scrollToOffset")},sendMessage(e,t){Fe(0,0,"message",JSON.stringify(e),t)},setHeightCalculationMethod(e){A=e,ve()},setWidthCalculationMethod(e){K=e,be()},setTargetOrigin(e){se(`Set targetOrigin: ${e}`),Q=e},resize(e,t){He("size",`parentIFrame.size(${e||""}${t?`,${t}`:""})`,e,t)},size(e,t){ue("\n<rb>Deprecated Method</>\n          \nThe <b>size()</> method has been deprecated and replaced with  <b>resize()</>. Use of this method will be removed in a future version of <i>iframe-resizer</>.\n"),this.resize(e,t)}}),_.parentIFrame=_.parentIframe,function(){if(!0!==q)return;function e(e){Fe(0,0,e.type,`${e.screenY}:${e.screenX}`)}function t(t,n){se(`Add event listener: ${n}`),o(window.document,t,e)}t("mouseenter","Mouse Enter"),t("mouseleave","Mouse Leave")}(),ze(),R=function(){const e=()=>({x:document.documentElement.scrollLeft,y:document.documentElement.scrollTop});function n(n){const o=n.getBoundingClientRect(),i=e();return{x:parseInt(o.left,t)+parseInt(i.x,t),y:parseInt(o.top,t)+parseInt(i.y,t)}}function i(e){function t(e){const t=n(e);se(`Moving to in page link (#${o}) at x: ${t.x}y: ${t.y}`),Fe(t.y,t.x,"scrollToOffset")}const o=e.split("#")[1]||e,i=decodeURIComponent(o),a=document.getElementById(i)||document.getElementsByName(i)[0];void 0===a?(se(`In page link (#${o}) not found in iFrame, so sending to parent`),Fe(0,0,"inPageLink",`#${o}`)):t(a)}function a(){const{hash:e,href:t}=window.location;""!==e&&"#"!==e&&i(t)}function r(){function e(e){function t(e){e.preventDefault(),i(this.getAttribute("href"))}"#"!==e.getAttribute("href")&&o(e,"click",t)}document.querySelectorAll('a[href^="#"]').forEach(e)}function l(){o(window,"hashchange",a)}function c(){setTimeout(a,s)}function u(){se("Setting up location.hash handlers"),r(),l(),c()}R.enable?u():se("In page linking not enabled");return{findTarget:i}}(),He("init","Init message from host page"),te(),x=!1}function fe(e,t){void 0!==t&&""!==t&&"null"!==t&&(document.body.style.setProperty(e,t),se(`Body ${e} set to "${t}"`))}function he(e){({add(t){function n(){He(e.eventName,e.eventType)}c[t]=n,o(window,t,n,{passive:!0})},remove(e){const t=c[e];delete c[e],i(window,e,t)}})[e.method](e.eventName),se(`${ie(e.method)} event listener: ${e.eventType}`)}function pe(e){he({method:e,eventType:"After Print",eventName:"afterprint"}),he({method:e,eventType:"Before Print",eventName:"beforeprint"}),he({method:e,eventType:"Ready State Change",eventName:"readystatechange"})}function ge(){const e=document.querySelectorAll(`[${n}]`);C=e.length>0,T=C?e:Ce(document)()}function ye(e,t,n,o){return t!==e&&(e in n||(ce(`${e} is not a valid option for ${o}CalculationMethod.`),e=t),e in l&&ue(`\n<rb>Deprecated ${o}CalculationMethod (${e})</>\n\nThis version of <i>iframe-resizer</> can auto detect the most suitable ${o} calculation method. It is recommended that you remove this option.`),se(`${o} calculation method set to "${e}"`)),e}function ve(){A=ye(A,d,Re,"height")}function be(){K=ye(K,y,xe,"width")}const we=["<iy><yi>Puchspk Spjluzl Rlf</><iy><iy>","<iy><yi>Tpzzpun Spjluzl Rlf</><iy><iy>","Aopz spiyhyf pz hchpshisl dpao ivao Jvttlyjphs huk Vwlu-Zvbylz spjluzlz.<iy><iy><i>Jvttlyjphs Spjluzl</><iy>Mvy jvttlyjphs bzl, <p>pmyhtl-ylzpgly</> ylxbpylz h svd jvza vul aptul spjluzl mll. Mvy tvyl pumvythapvu cpzpa <b>oaaw://pmyhtl-ylzpgly.jvt/wypjpun</>.<iy><iy><i>Vwlu Zvbyjl Spjluzl</><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-jvtlyjphs vwlu zvbyjl wyvqlja, fvb jhu bzl pa mvy myll bukly aol alytz vm aol NWS C3 Spjluzl. Av jvumpyt fvb hjjlwa aolzl alytz, wslhzl zla aol <i>spjlujl</> rlf pu pmyhtlYlzpgl vwapvuz av <i>'NWS-C3'</>.<iy><iy>Mvy tvyl pumvythapvu vu aol Nub Wbispj Spjluzl <iy><b>oaaw://pmyhtl-ylzpgly.jvt/vwlu-zvbyjl-spjluzl</>","<i>NWS-C3 Spjluzl Clyzpvu</><iy><iy>Aopz clyzpvu vm <p>pmyhtl-ylzpgly</> pz ilpun bzlk bukly aol alytz vm aol <i>NWS C3</> spjluzl. Pm fvb hyl bzpun aopz spiyhyf pu h jvttlyjphs wyvqlja, fvb dpss ullk av wbyjohzl h svd jvza vul aptl spjluzl. Mvy tvyl pumvythapvu cpzpa <b>oaaw://pmyhtl-ylzpgly.jvt/wypjpun</>."];function ze(){!0===w?(pe("add"),M=function(){function e(e){e.forEach(Ee),ge()}function t(){const t=new window.MutationObserver(e),n=document.querySelector("body"),o={attributes:!1,attributeOldValue:!1,characterData:!1,characterDataOldValue:!1,childList:!0,subtree:!0};return se("Create <body/> MutationObserver"),t.observe(n,o),t}const n=t();return{disconnect(){se("Disconnect MutationObserver"),n.disconnect()}}}(),J=new ResizeObserver($e),je(window.document)):se("Auto Resize disabled")}function $e(e){He("resizeObserver",`resizeObserver: ${re(e[0].target)}`)}const Se=e=>{const t=getComputedStyle(e);return""!==t?.position&&"static"!==t?.position},Me=()=>[...Ce(document)()].filter(Se);function Oe(e){e&&(J.observe(e),se(`Attached resizeObserver: ${re(e)}`))}function je(e){[...Me(),...g.flatMap((t=>e.querySelector(t)))].forEach(Oe)}function Ee(e){"childList"===e.type&&je(e.target)}function Te(e){const t=ie(e);let n,o=0,i=T.length,r=0,l=performance.now();T.forEach((t=>{if(!C&&u&&!t.checkVisibility(a))return se(`Skipping non-visable element: ${re(t)}`),void(i-=1);o=t.getBoundingClientRect()[e]+parseFloat(getComputedStyle(t).getPropertyValue(`margin-${e}`)),o>r&&(r=o,n=t)})),l=performance.now()-l;const s=`\nParsed ${i} element${i=""} in ${l.toPrecision(3)}ms\n${t} ${C?"tagged ":""}element found at: ${r}px\nPosition calculated from HTML element: ${function(e){const t=e?.outerHTML?.toString();return t?t.length<30?t:`${t.slice(0,30).replaceAll("\n"," ")}...`:e}(n)}`;return l<1.1||x||C?se(s):ue(`\n<rb>Performance Warning</>\n\nCalculateing the page size took an excessive amount of time. To improve performace add the <b>data-iframe-size</> attribute to the ${e} most element on the page.\n${s}`),r}const Pe=e=>[e.bodyOffset(),e.bodyScroll(),e.documentElementOffset(),e.documentElementScroll(),e.documentElementBoundingClientRect()],Ce=e=>()=>e.querySelectorAll("* :not(head):not(meta):not(base):not(title):not(script):not(link):not(style):not(map):not(area):not(option):not(optgroup):not(template):not(track):not(wbr):not(nobr)");function Ie({ceilBoundingSize:e,dimension:t,getDimension:n,isHeight:o,scrollSize:i}){const a=o?"bottom":"right";return ue(`\n<rb>Detected content overflowing html element</>\n    \nThis causes <i>iframe-resizer</> to fall back to checking the position of every element on the page in order to calculate the correct dimensions of the iframe. Inspecting the size, ${a} margin, and position of every visable HTML element will have a performace impact on more complex pages. \n\nTo fix this issue, and remove this warning, you can either ensure the content of the page does not overflow the <b><HTML></> element or alternatively you can add the attribute <b>data-iframe-size</> to the elements on the page that you want <i>iframe-resizer</> to use when calculating the dimensions of the iframe. \n  \nWhen present the <i>${a} margin of the ${o?"lowest":"right most"} element</> with a <b>data-iframe-size</> attribute will be used to set the ${t} of the iframe.\n    \n(Page size: ${i} > document size: ${e})`),o?(se(`Switching from ${A} to autoOverflow`),A="autoOverflow"):(se(`Switching from ${K} to autoOverflow`),K="autoOverflow"),n.taggedElement()}const Ae={height:0,width:0},ke={height:0,width:0};function Ne(e,t){function n(){return ke[i]=a,Ae[i]=s,a}const o=e===Re,i=o?"height":"width",a=e.documentElementBoundingClientRect(),r=Math.ceil(a),l=Math.floor(a),s=(e=>e.documentElementScroll()+Math.max(0,e.getOffset()))(e),c=`HTML: ${a}  Page: ${s}`;switch(!0){case!e.enabled():return s;case!t&&0===ke[i]&&0===Ae[i]:if(se(`Initial page size values: ${c}`),e.taggedElement(!0)<=r)return n();break;case X&&a===ke[i]&&s===Ae[i]:return se(`Size unchanged: ${c}`),Math.max(a,s);case 0===a:return se(`Page is hidden: ${c}`),s;case!t&&a!==ke[i]&&s<=Ae[i]:return se(`New HTML bounding size: ${c}`,"Previous bounding size:",ke[i]),n();case!o:return t?e.taggedElement():Ie({ceilBoundingSize:r,dimension:i,getDimension:e,isHeight:o,scrollSize:s});case!t&&a<ke[i]:return se("HTML bounding size decreased:",c),n();case s===l||s===r:return se("HTML bounding size equals page size:",c),n();case a>s:return se(`Page size < HTML bounding size: ${c}`),n();case!t:return se(`Switch to autoOverflow: ${c}`),Ie({ceilBoundingSize:r,dimension:i,getDimension:e,isHeight:o,scrollSize:s});default:se(`Content overflowing HTML element: ${c}`)}return Math.max(e.taggedElement(),n())}const Re={enabled:()=>j,getOffset:()=>F,type:"height",auto:()=>Ne(Re,!1),autoOverflow:()=>Ne(Re,!0),bodyOffset:()=>{const{body:e}=document,n=getComputedStyle(e);return e.offsetHeight+parseInt(n.marginTop,t)+parseInt(n.marginBottom,t)},bodyScroll:()=>document.body.scrollHeight,offset:()=>Re.bodyOffset(),custom:()=>r.height(),documentElementOffset:()=>document.documentElement.offsetHeight,documentElementScroll:()=>document.documentElement.scrollHeight,documentElementBoundingClientRect:()=>document.documentElement.getBoundingClientRect().bottom,max:()=>Math.max(...Pe(Re)),min:()=>Math.min(...Pe(Re)),grow:()=>Re.max(),lowestElement:()=>Te("bottom"),taggedElement:()=>Te("bottom")},xe={enabled:()=>E,getOffset:()=>W,type:"width",auto:()=>Ne(xe,!1),autoOverflow:()=>Ne(xe,!0),bodyScroll:()=>document.body.scrollWidth,bodyOffset:()=>document.body.offsetWidth,custom:()=>r.width(),documentElementScroll:()=>document.documentElement.scrollWidth,documentElementOffset:()=>document.documentElement.offsetWidth,documentElementBoundingClientRect:()=>document.documentElement.getBoundingClientRect().right,max:()=>Math.max(...Pe(xe)),min:()=>Math.min(...Pe(xe)),rightMostElement:()=>Te("right"),scroll:()=>Math.max(xe.bodyScroll(),xe.documentElementScroll()),taggedElement:()=>Te("right")};function Le(e,t,n,o){let i,a;!function(){const e=(e,t)=>!(Math.abs(e-t)<=Y);return i=void 0===n?Re[A]():n,a=void 0===o?xe[K]():o,j&&e(I,i)||E&&e(G,a)}()&&"init"!==e?!(e in{init:1,size:1})&&(j&&A in p||E&&K in p)&&De(t):(Be(),I=i,G=a,Fe(I,G,e))}function He(e,t,n,o){document.hidden?se("Page hidden - Ignored resize request"):(e in m||se(`Trigger event: ${t}`),Le(e,t,n,o))}function Be(){X||(X=!0,se("Trigger event lock on"),requestAnimationFrame((()=>{X=!1,se("Trigger event lock off"),se("--")})))}function qe(e){I=Re[A](),G=xe[K](),Fe(I,G,e)}function De(e){const t=A;A=d,se(`Reset trigger event: ${e}`),Be(),qe("reset"),A=t}function Fe(e,t,n,o,i){H<0||(void 0!==i?se(`Message targetOrigin: ${i}`):i=Q,function(){const a=`${D}:${`${e+F}:${t+W}`}:${n}${void 0===o?"":`:${o}`}`;se(`Sending message to host page (${a}) via ${V?"sameDomain":"postMessage"}`),V?window.parent.iframeParentListener(f+a):Z.postMessage(f+a,i)}())}function We(e){const t={init:function(){N=e.data,Z=e.source,me(),P=!1,setTimeout((()=>{k=!1}),s)},reset(){k?se("Page reset ignored by init"):(se("Page size reset by host page"),qe("resetPage"))},resize(){He("resizeParent","Parent window requested size check")},moveToAnchor(){R.findTarget(o())},inPageLink(){this.moveToAnchor()},pageInfo(){const e=o();se(`PageInfo received from parent: ${e}`),ne?ne(JSON.parse(e)):Fe(0,0,"pageInfoStop"),se(" --")},parentInfo(){const e=o();se(`ParentInfo received from parent: ${e}`),oe?oe(Object.freeze(JSON.parse(e))):Fe(0,0,"parentInfoStop"),se(" --")},message(){const e=o();se(`onMessage called from parent: ${e}`),ee(JSON.parse(e)),se(" --")}},n=()=>e.data.split("]")[1].split(":")[0],o=()=>e.data.slice(e.data.indexOf(":")+1),i=()=>"iframeResize"in window||void 0!==window.jQuery&&""in window.jQuery.prototype,a=()=>e.data.split(":")[2]in{true:1,false:1};f===`${e.data}`.slice(0,h)&&(!1!==P?a()?t.init():se(`Ignored message of type "${n()}". Received before initialization.`):function(){const o=n();o in t?t[o]():i()||a()||ce(`Unexpected message (${e.data})`)}())}function Ue(){"loading"!==document.readyState&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}function Je(e){return We(e),_}"undefined"!=typeof window&&(window.iframeChildListener=e=>We({data:e,sameDomian:!0}),o(window,"message",We),o(window,"readystatechange",Ue),Ue());try{top?.document?.getElementById("banner")&&(_={},window.mockMsgListener=Je,i(window,"message",We),define([],(()=>Je)))}catch(e){}}();
//# sourceMappingURL=iframe-resizer.child.js.map
