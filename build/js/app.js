function spinner(){const t=document.getElementById("loader-wrapper");setTimeout((function(){t.classList.add("loaded")}),100)}class Backtotop{constructor(){this.backbutton=document.getElementById("topBtn")}init(){window.onscroll=()=>{document.body.scrollTop>20||document.documentElement.scrollTop>20?this.backbutton.style.display="block":this.backbutton.style.display="none"},this.backbutton.addEventListener("click",(()=>{this.top()}))}top(){0==document.body.scrollTop&&0==document.documentElement.scrollTop||(window.scrollBy(0,-50),this.timeout=setTimeout((()=>{this.top()}),10))}}const backtotop=new Backtotop;function createRipple(t){const e=t.currentTarget,o=document.createElement("span"),n=Math.max(e.clientWidth,e.clientHeight),c=n/2;o.style.width=o.style.height=`${n}px`,o.style.left=t.clientX-e.offsetLeft-c+"px",o.style.top=t.clientY-e.offsetTop-c+"px",o.classList.add("ripple");const s=e.getElementsByClassName("ripple")[0];s&&s.remove(),e.appendChild(o)}backtotop.init();const buttons=document.getElementsByTagName("button");for(const t of buttons)t.addEventListener("click",createRipple);function smoothScroll(t){const e=document.getElementById(t);e&&window.scrollTo({top:e.offsetTop,behavior:"smooth"})}document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll('a[href^="#"]').forEach((function(t){t.addEventListener("click",(function(e){e.preventDefault();smoothScroll(t.getAttribute("href").substring(1))}))}))}));const submit=document.querySelector(".modal-button"),popup=document.querySelector(".popup-wrapper"),effect=document.querySelector(".popup"),close=document.querySelector(".popup-close");submit.addEventListener("click",(()=>{popup.style.display="block",effect.classList.add("enter")})),close.addEventListener("click",(()=>{popup.style.display="none"})),popup.addEventListener("click",(t=>{"popup-wrapper"===t.target.className&&(popup.style.display="none")}));