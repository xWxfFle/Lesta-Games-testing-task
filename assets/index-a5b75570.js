(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function d(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=d(e);fetch(e.href,r)}})();const m=t=>{const n=t.filter(d=>typeof d=="number");return n[Math.floor(Math.random()*n.length)].toString()},p=t=>!!t.every(n=>typeof n=="string"),y=t=>t[0]==t[1]&&t[0]==t[2]||t[0]==t[3]&&t[0]==t[6]||t[0]==t[4]&&t[0]==t[8]||t[3]==t[4]&&t[3]==t[5]||t[6]==t[7]&&t[6]==t[8]||t[1]==t[4]&&t[1]==t[7]||t[2]==t[5]&&t[2]==t[8]||t[2]==t[4]&&t[2]==t[6],i=document.getElementById("restart-button"),l=document.getElementById("ai-counter"),g=document.getElementById("player-counter"),u=document.getElementById("game-field");let o=[0,1,2,3,4,5,6,7,8],f=0,c=0;const h=()=>{const t=document.getElementById(m(o));t.textContent="o",o.splice(+t.id,1,"o"),y(o)&&(u.style.pointerEvents="none",f+=1,l.textContent=f.toString(),i.style.display="block")},E=t=>{const n=t.target.closest("td");if(n!==null&&n.textContent===""){if(n.textContent="x",o.splice(+n.id,1,"x"),y(o)){u.style.pointerEvents="none",c+=1,g.textContent=c.toString(),i.style.display="block";return}if(p(o)){i.style.display="block";return}h()}},k=()=>{u.style.pointerEvents="all",u.querySelectorAll("td").forEach(t=>t.textContent=""),o=[0,1,2,3,4,5,6,7,8],i.style.display="none"};u.addEventListener("click",E);i.addEventListener("click",k);