!function(){"use strict";function t(){var n,e,r,t,d,o,s,c,i,a,f,u,l,p,m=document.getElementById("reader");m&&(t=window.location.pathname.split("/"),g=t[2],v=t[3],n=Number(document.querySelector(".total").textContent),e=document.querySelectorAll(".current"),r=Number(e[0].textContent),t=document.querySelectorAll(".first"),d=document.querySelectorAll(".last"),o=document.querySelectorAll(".prev"),s=document.querySelectorAll(".next"),c=m.querySelector(".page a"),i=c.querySelector("img"),a={current:!1},f=c.getBoundingClientRect(),h.push.apply(h,Array.from({length:n},function(t,e){return{isViewing:e+1===r}})),u=function(t){r=t,h.find(function(t){return t.isViewing}).isViewing=!1,h[r-1].isViewing=!0,c.href="/archive/".concat(g,"/").concat(v,"/").concat(r);t=document.createElement("img");t.src="/data/".concat(g,"/").concat(r,".jpg"),i.replaceWith(t),i=t,e.forEach(function(t){return t.textContent=r.toString()}),window.history.replaceState(null,"","/archive/".concat(g,"/").concat(v,"/").concat(r)),o.forEach(function(t){t.href="/archive/".concat(g,"/").concat(v,"/").concat(r-1)}),s.forEach(function(t){t.href="/archive/".concat(g,"/").concat(v,"/").concat(r+1)})},t.forEach(function(t){t.addEventListener("click",function(t){t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),1!==r&&u(1)})}),d.forEach(function(t){t.addEventListener("click",function(t){t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),r!==n&&u(n)})}),o.forEach(function(t){t.addEventListener("click",function(t){t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),1!==r&&u(r-1)})}),s.forEach(function(t){t.addEventListener("click",function(t){t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),r!==n&&u(r+1)})}),c.addEventListener("click",function(t){var e;t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),a.current||(a.current=!0,e=t.target,t.screenX-f.x<=e.clientWidth/2?1!==r&&u(r-1):r!==n&&u(r+1),a.current=!1)}),l=0,(p=function(){clearInterval(l),l=window.setInterval(function(){window.requestAnimationFrame(function(){i.naturalHeight&&(clearInterval(l),c.scrollIntoView({block:"start",inline:"start"}))})},10)})(),new MutationObserver(function(){p(),E()}).observe(c,{childList:!0,attributes:!0}),E())}function e(){"serviceWorker"in navigator&&navigator.serviceWorker.register("/serviceWorker.js"),t()}var g,v,h=[],E=function(){for(var o=h.findIndex(function(t){return t.isViewing}),t=function(t){var e=h[t];if(e.isPreloading||e.isPreloaded||t<Math.max(0,o-3)||t>Math.max(0,o+3))return"continue";e.isPreloading=!0;function n(){e.isPreloading=!1,e.isPreloaded=!0}var r=document.createElement("img");r.src="/data/".concat(g,"/").concat(t+1,".jpg");r.complete?n():(r.addEventListener("load",n),r.addEventListener("error",function(){return e.isPreloading=!1}))},e=0;e<h.length;e++)t(e)};"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)}();