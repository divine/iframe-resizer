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


!function(){"use strict";const e=10,t="data-iframe-size";const n=(e,t,n,o)=>e.addEventListener(t,n,o||!1),o=(e,t,n)=>e.removeEventListener(t,n,!1),i={contentVisibilityAuto:!0,opacityProperty:!0,visibilityProperty:!0},a={height:()=>(ie("Custom height calculation function not defined"),Ae.auto()),width:()=>(ie("Custom width calculation function not defined"),Pe.auto())},r={bodyOffset:1,bodyScroll:1,offset:1,documentElementOffset:1,documentElementScroll:1,documentElementBoundingClientRect:1,max:1,min:1,grow:1,lowestElement:1},l=128,c={},s="checkVisibility"in window,u="auto",d="[iFrameSizer]",m=d.length,f={max:1,min:1,bodyScroll:1,documentElementScroll:1},h=["body"],p="scroll";let y,g,v=!0,b="",w=0,z="",S=null,$="",j=!0,E=!1,O=null,C=!0,M=!1,T=1,A=u,P=!0,I="",k={},N=!0,x=!1,R=0,B=!1,L=!1,H="",W=0,D=0,q="child",F=null,U=!1,V=window.parent,J="*",Z=0,Q=!1,Y=1,X=p,G=window,K=()=>{ie("onMessage function not defined")},_=()=>{},ee=null,te=null;const ne=e=>""!=`${e}`&&void 0!==e;const oe=(...e)=>[`${d}[${H}]`,...e].join(" "),ie=(...e)=>console?.warn(oe(...e)),ae=(...e)=>console?.warn((e=>t=>window.chrome?e(t.replaceAll("<br>","\n").replaceAll("<rb>","[31;1m").replaceAll("</>","[m").replaceAll("<b>","[1m").replaceAll("<i>","[3m").replaceAll("<u>","[4m")):e(t.replaceAll("<br>","\n").replaceAll(/<[/a-z]+>/gi,"")))(oe)(...e)),re=e=>ae(e.replaceAll(/[A-Za-z]/g,(e=>String.fromCodePoint((e<="Z"?90:122)>=(e=e.codePointAt(0)+19)?e:e-26))));function le(){!function(){try{U="iframeParentListener"in window.parent}catch(e){}}(),function(){const e=e=>"true"===e,t=I.slice(m).split(":");H=t[0],w=void 0===t[1]?w:Number(t[1]),E=void 0===t[2]?E:e(t[2]),x=void 0===t[3]?x:e(t[3]),v=void 0===t[6]?v:e(t[6]),z=t[7],A=void 0===t[8]?A:t[8],b=t[9],$=t[10],Z=void 0===t[11]?Z:Number(t[11]),k.enable=void 0!==t[12]&&e(t[12]),q=void 0===t[13]?q:t[13],X=void 0===t[14]?X:t[14],L=void 0===t[15]?L:e(t[15]),W=void 0===t[16]?W:Number(t[16]),D=void 0===t[17]?D:Number(t[17]),j=void 0===t[18]?j:e(t[18]),y=t[19],g=t[20],B=void 0===t[21]?B:e(t[21])}(),function(){function e(){const e=window.iFrameResizer;K=e?.onMessage||K,_=e?.onReady||_,W=e?.offsetHeight||W,D=e?.offsetWidth||D,J=e?.targetOrigin||J,A=e?.heightCalculationMethod||A,X=e?.widthCalculationMethod||X}function t(e,t){return"function"==typeof e&&(a[t]=e,e="custom"),e}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(e(),A=t(A,"height"),X=t(X,"width"))}(),function(){R=["1jqr0si6pnt","tw4ra3kya","gz3au7jfuk","1irylf8sei5","1p37k9w4kov"].indexOf(y),-1===R&&""!==y&&(R=-2);!B&&g||(R=9)}(),function(){void 0===z&&(z=`${w}px`);ce("margin",function(e,t){t.includes("-")&&(ie(`Negative CSS value ignored for ${e}`),t="");return t}("margin",z))}(),ce("background",b),ce("padding",$),function(){const e=document.createElement("div");e.style.clear="both",e.style.display="block",e.style.height="0",document.body.append(e)}(),function(){const e=e=>e.style.setProperty("height","auto","important");e(document.documentElement),e(document.body)}(),R<0?re(`${pe[R+2]}${pe[2]}`):R<2&&re(pe[3]),fe(),he(),function(){let e=!1;const n=n=>document.querySelectorAll(`[${n}]`).forEach((o=>{e=!0,o.removeAttribute(n),o.setAttribute(t,null)}));n("data-iframe-height"),n("data-iframe-width"),e&&ae("\n<rb>Deprecated Attributes</>\n          \nThe <b>data-iframe-height</> and <b>data-iframe-width</> attributes have been deprecated and replaced with the single <b>data-iframe-size</> attribute. Use of the old attributes will be removed in a future version of <i>iframe-resizer</>.")}(),document.querySelectorAll(`[${t}]`).length>0&&("auto"===A&&(A="autoOverflow"),"auto"===X&&(X="autoOverflow")),de(),G.parentIframe=Object.freeze({autoResize:e=>(!0===e&&!1===v?(v=!0,ye()):!1===e&&!0===v&&(v=!1,ue("remove"),F?.disconnect(),S?.disconnect()),Be(0,0,"autoResize",JSON.stringify(v)),v),close(){Be(0,0,"close")},getId:()=>H,getPageInfo(e){if("function"==typeof e)return ee=e,Be(0,0,"pageInfo"),void ae("\n<rb>Deprecated Method</>\n          \nThe <b>getPageInfo()</> method has been deprecated and replaced with  <b>getParentProperties()</>. Use of this method will be removed in a future version of <i>iframe-resizer</>.\n");ee=null,Be(0,0,"pageInfoStop")},getParentProperties(e){if("function"!=typeof e)throw new TypeError("parentIFrame.getParentProperties(callback) callback not a function");return te=e,Be(0,0,"parentInfo"),()=>{te=null,Be(0,0,"parentInfoStop")}},moveToAnchor(e){k.findTarget(e)},reset(){Re()},scrollTo(e,t){Be(t,e,"scrollTo")},scrollToOffset(e,t){Be(t,e,"scrollToOffset")},sendMessage(e,t){Be(0,0,"message",JSON.stringify(e),t)},setHeightCalculationMethod(e){A=e,fe()},setWidthCalculationMethod(e){X=e,he()},setTargetOrigin(e){J=e},resize(e,t){ke("size",`parentIFrame.size(${e||""}${t?`,${t}`:""})`,e,t)},size(e,t){ae("\n<rb>Deprecated Method</>\n          \nThe <b>size()</> method has been deprecated and replaced with  <b>resize()</>. Use of this method will be removed in a future version of <i>iframe-resizer</>.\n"),this.resize(e,t)}}),G.parentIFrame=G.parentIframe,function(){if(!0!==L)return;function e(e){Be(0,0,e.type,`${e.screenY}:${e.screenX}`)}function t(t,o){n(window.document,t,e)}t("mouseenter"),t("mouseleave")}(),ye(),k=function(){const t=()=>({x:document.documentElement.scrollLeft,y:document.documentElement.scrollTop});function o(n){const o=n.getBoundingClientRect(),i=t();return{x:parseInt(o.left,e)+parseInt(i.x,e),y:parseInt(o.top,e)+parseInt(i.y,e)}}function i(e){function t(e){const t=o(e);Be(t.y,t.x,"scrollToOffset")}const n=e.split("#")[1]||e,i=decodeURIComponent(n),a=document.getElementById(i)||document.getElementsByName(i)[0];void 0===a?Be(0,0,"inPageLink",`#${n}`):t(a)}function a(){const{hash:e,href:t}=window.location;""!==e&&"#"!==e&&i(t)}function r(){function e(e){function t(e){e.preventDefault(),i(this.getAttribute("href"))}"#"!==e.getAttribute("href")&&n(e,"click",t)}document.querySelectorAll('a[href^="#"]').forEach(e)}function c(){n(window,"hashchange",a)}function s(){setTimeout(a,l)}function u(){r(),c(),s()}k.enable&&u();return{findTarget:i}}(),ke("init","Init message from host page"),_(),N=!1}function ce(e,t){void 0!==t&&""!==t&&"null"!==t&&document.body.style.setProperty(e,t)}function se(e){({add(t){function o(){ke(e.eventName,e.eventType)}c[t]=o,n(window,t,o,{passive:!0})},remove(e){const t=c[e];delete c[e],o(window,e,t)}})[e.method](e.eventName)}function ue(e){se({method:e,eventType:"After Print",eventName:"afterprint"}),se({method:e,eventType:"Before Print",eventName:"beforeprint"}),se({method:e,eventType:"Ready State Change",eventName:"readystatechange"})}function de(){const e=document.querySelectorAll(`[${t}]`);M=e.length>0,O=M?e:Ee(document)()}function me(e,t,n,o){return t!==e&&(e in n||(ie(`${e} is not a valid option for ${o}CalculationMethod.`),e=t),e in r&&ae(`\n<rb>Deprecated ${o}CalculationMethod (${e})</>\n\nThis version of <i>iframe-resizer</> can auto detect the most suitable ${o} calculation method. It is recommended that you remove this option.`)),e}function fe(){A=me(A,u,Ae,"height")}function he(){X=me(X,p,Pe,"width")}const pe=["<iy><yi>Puchspk Spjluzl Rlf</><iy><iy>","<iy><yi>Tpzzpun Spjluzl Rlf</><iy><iy>","Aopz spiyhyf pz hchpshisl dpao ivao Jvttlyjphs huk Vwlu-Zvbylz spjluzlz.<iy><iy><i>Jvttlyjphs Spjluzl</><iy>Mvy jvttlyjphs bzl, <p>pmyhtl-ylzpgly</> ylxbpylz h svd jvza vul aptul spjluzl mll. Mvy tvyl pumvythapvu cpzpa <b>oaaw://pmyhtl-ylzpgly.jvt/wypjpun</>.<iy><iy><i>Vwlu Zvbyjl Spjluzl</><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-jvtlyjphs vwlu zvbyjl wyvqlja, fvb jhu bzl pa mvy myll bukly aol alytz vm aol NWS C3 Spjluzl. Av jvumpyt fvb hjjlwa aolzl alytz, wslhzl zla aol <i>spjlujl</> rlf pu pmyhtlYlzpgl vwapvuz av <i>'NWS-C3'</>.<iy><iy>Mvy tvyl pumvythapvu vu aol Nub Wbispj Spjluzl <iy><b>oaaw://pmyhtl-ylzpgly.jvt/vwlu-zvbyjl-spjluzl</>","<i>NWS-C3 Spjluzl Clyzpvu</><iy><iy>Aopz clyzpvu vm <p>pmyhtl-ylzpgly</> pz ilpun bzlk bukly aol alytz vm aol <i>NWS C3</> spjluzl. Pm fvb hyl bzpun aopz spiyhyf pu h jvttlyjphs wyvqlja, fvb dpss ullk av wbyjohzl h svd jvza vul aptl spjluzl. Mvy tvyl pumvythapvu cpzpa <b>oaaw://pmyhtl-ylzpgly.jvt/wypjpun</>."];function ye(){!0===v&&(ue("add"),S=function(){function e(e){e.forEach(Se),de()}function t(){const t=new window.MutationObserver(e),n=document.querySelector("body"),o={attributes:!1,attributeOldValue:!1,characterData:!1,characterDataOldValue:!1,childList:!0,subtree:!0};return t.observe(n,o),t}const n=t();return{disconnect(){n.disconnect()}}}(),F=new ResizeObserver(ge),ze(window.document))}function ge(e){ke("resizeObserver",`resizeObserver: ${function(e){switch(!0){case!ne(e):return"";case ne(e.id):return`${e.nodeName.toUpperCase()}#${e.id}`;case ne(e.name):return`${e.nodeName.toUpperCase()} (${e.name})`;default:return e.nodeName.toUpperCase()+(ne(e.className)?`.${e.className}`:"")}}(e[0].target)}`)}const ve=e=>{const t=getComputedStyle(e);return""!==t?.position&&"static"!==t?.position},be=()=>[...Ee(document)()].filter(ve);function we(e){e&&F.observe(e)}function ze(e){[...be(),...h.flatMap((t=>e.querySelector(t)))].forEach(we)}function Se(e){"childList"===e.type&&ze(e.target)}function $e(e){const t=(n=e).charAt(0).toUpperCase()+n.slice(1);var n;let o,a=0,r=O.length,l=0,c=performance.now();O.forEach((t=>{M||!s||t.checkVisibility(i)?(a=t.getBoundingClientRect()[e]+parseFloat(getComputedStyle(t).getPropertyValue(`margin-${e}`)),a>l&&(l=a,o=t)):r-=1})),c=performance.now()-c;const u=`\nParsed ${r} element${r=""} in ${c.toPrecision(3)}ms\n${t} ${M?"tagged ":""}element found at: ${l}px\nPosition calculated from HTML element: ${function(e){const t=e?.outerHTML?.toString();return t?t.length<30?t:`${t.slice(0,30).replaceAll("\n"," ")}...`:e}(o)}`;return c<1.1||N||M||ae(`\n<rb>Performance Warning</>\n\nCalculateing the page size took an excessive amount of time. To improve performace add the <b>data-iframe-size</> attribute to the ${e} most element on the page.\n${u}`),l}const je=e=>[e.bodyOffset(),e.bodyScroll(),e.documentElementOffset(),e.documentElementScroll(),e.documentElementBoundingClientRect()],Ee=e=>()=>e.querySelectorAll("* :not(head):not(meta):not(base):not(title):not(script):not(link):not(style):not(map):not(area):not(option):not(optgroup):not(template):not(track):not(wbr):not(nobr)");function Oe({ceilBoundingSize:e,dimension:t,getDimension:n,isHeight:o,scrollSize:i}){const a=o?"bottom":"right";return ae(`\n<rb>Detected content overflowing html element</>\n    \nThis causes <i>iframe-resizer</> to fall back to checking the position of every element on the page in order to calculate the correct dimensions of the iframe. Inspecting the size, ${a} margin, and position of every visable HTML element will have a performace impact on more complex pages. \n\nTo fix this issue, and remove this warning, you can either ensure the content of the page does not overflow the <b><HTML></> element or alternatively you can add the attribute <b>data-iframe-size</> to the elements on the page that you want <i>iframe-resizer</> to use when calculating the dimensions of the iframe. \n  \nWhen present the <i>${a} margin of the ${o?"lowest":"right most"} element</> with a <b>data-iframe-size</> attribute will be used to set the ${t} of the iframe.\n    \n(Page size: ${i} > document size: ${e})`),o?A="autoOverflow":X="autoOverflow",n.taggedElement()}const Ce={height:0,width:0},Me={height:0,width:0};function Te(e,t){function n(){return Me[i]=a,Ce[i]=c,a}const o=e===Ae,i=o?"height":"width",a=e.documentElementBoundingClientRect(),r=Math.ceil(a),l=Math.floor(a),c=(e=>e.documentElementScroll()+Math.max(0,e.getOffset()))(e);switch(!0){case!e.enabled():return c;case!t&&0===Me[i]&&0===Ce[i]:if(e.taggedElement(!0)<=r)return n();break;case Q&&a===Me[i]&&c===Ce[i]:return Math.max(a,c);case 0===a:return c;case!t&&a!==Me[i]&&c<=Ce[i]:return n();case!o:return t?e.taggedElement():Oe({ceilBoundingSize:r,dimension:i,getDimension:e,isHeight:o,scrollSize:c});case!t&&a<Me[i]:case c===l||c===r:case a>c:return n();case!t:return Oe({ceilBoundingSize:r,dimension:i,getDimension:e,isHeight:o,scrollSize:c})}return Math.max(e.taggedElement(),n())}const Ae={enabled:()=>j,getOffset:()=>W,type:"height",auto:()=>Te(Ae,!1),autoOverflow:()=>Te(Ae,!0),bodyOffset:()=>{const{body:t}=document,n=getComputedStyle(t);return t.offsetHeight+parseInt(n.marginTop,e)+parseInt(n.marginBottom,e)},bodyScroll:()=>document.body.scrollHeight,offset:()=>Ae.bodyOffset(),custom:()=>a.height(),documentElementOffset:()=>document.documentElement.offsetHeight,documentElementScroll:()=>document.documentElement.scrollHeight,documentElementBoundingClientRect:()=>document.documentElement.getBoundingClientRect().bottom,max:()=>Math.max(...je(Ae)),min:()=>Math.min(...je(Ae)),grow:()=>Ae.max(),lowestElement:()=>$e("bottom"),taggedElement:()=>$e("bottom")},Pe={enabled:()=>E,getOffset:()=>D,type:"width",auto:()=>Te(Pe,!1),autoOverflow:()=>Te(Pe,!0),bodyScroll:()=>document.body.scrollWidth,bodyOffset:()=>document.body.offsetWidth,custom:()=>a.width(),documentElementScroll:()=>document.documentElement.scrollWidth,documentElementOffset:()=>document.documentElement.offsetWidth,documentElementBoundingClientRect:()=>document.documentElement.getBoundingClientRect().right,max:()=>Math.max(...je(Pe)),min:()=>Math.min(...je(Pe)),rightMostElement:()=>$e("right"),scroll:()=>Math.max(Pe.bodyScroll(),Pe.documentElementScroll()),taggedElement:()=>$e("right")};function Ie(e,t,n,o){let i,a;!function(){const e=(e,t)=>!(Math.abs(e-t)<=Z);return i=void 0===n?Ae[A]():n,a=void 0===o?Pe[X]():o,j&&e(T,i)||E&&e(Y,a)}()&&"init"!==e?!(e in{init:1,size:1})&&(j&&A in f||E&&X in f)&&Re():(Ne(),T=i,Y=a,Be(T,Y,e))}function ke(e,t,n,o){document.hidden||Ie(e,0,n,o)}function Ne(){Q||(Q=!0,requestAnimationFrame((()=>{Q=!1})))}function xe(e){T=Ae[A](),Y=Pe[X](),Be(T,Y,e)}function Re(e){const t=A;A=u,Ne(),xe("reset"),A=t}function Be(e,t,n,o,i){R<0||(void 0!==i||(i=J),function(){const a=`${H}:${`${e+W}:${t+D}`}:${n}${void 0===o?"":`:${o}`}`;U?window.parent.iframeParentListener(d+a):V.postMessage(d+a,i)}())}function Le(e){const t={init:function(){I=e.data,V=e.source,le(),C=!1,setTimeout((()=>{P=!1}),l)},reset(){P||xe("resetPage")},resize(){ke("resizeParent")},moveToAnchor(){k.findTarget(o())},inPageLink(){this.moveToAnchor()},pageInfo(){const e=o();ee?ee(JSON.parse(e)):Be(0,0,"pageInfoStop")},parentInfo(){const e=o();te?te(Object.freeze(JSON.parse(e))):Be(0,0,"parentInfoStop")},message(){const e=o();K(JSON.parse(e))}},n=()=>e.data.split("]")[1].split(":")[0],o=()=>e.data.slice(e.data.indexOf(":")+1),i=()=>"iframeResize"in window||void 0!==window.jQuery&&""in window.jQuery.prototype,a=()=>e.data.split(":")[2]in{true:1,false:1};d===`${e.data}`.slice(0,m)&&(!1!==C?a()&&t.init():function(){const o=n();o in t?t[o]():i()||a()||ie(`Unexpected message (${e.data})`)}())}function He(){"loading"!==document.readyState&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}function We(e){return Le(e),G}"undefined"!=typeof window&&(window.iframeChildListener=e=>Le({data:e,sameDomian:!0}),n(window,"message",Le),n(window,"readystatechange",He),He());try{top?.document?.getElementById("banner")&&(G={},window.mockMsgListener=We,o(window,"message",Le),define([],(()=>We)))}catch(e){}}();
