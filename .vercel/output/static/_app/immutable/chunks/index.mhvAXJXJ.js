var E=Object.defineProperty;var C=(e,t,n)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var p=(e,t,n)=>(C(e,typeof t!="symbol"?t+"":t,n),n);import{r as h,n as y,h as w,i as j,j as A,k as B,l as b,m as I,p as L,q as N,v as P,w as T,x as q}from"./scheduler.N6VJfDEH.js";let $=!1;function D(){$=!0}function H(){$=!1}function M(e,t,n,i){for(;e<t;){const s=e+(t-e>>1);n(s)<=i?e=s+1:t=s}return e}function O(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let a=0;a<t.length;a++){const o=t[a];o.claim_order!==void 0&&r.push(o)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let s=0;for(let r=0;r<t.length;r++){const a=t[r].claim_order,o=(s>0&&t[n[s]].claim_order<=a?s+1:M(1,s,d=>t[n[d]].claim_order,a))-1;i[r]=n[o]+1;const f=o+1;n[f]=r,s=Math.max(f,s)}const c=[],l=[];let u=t.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(c.push(t[r-1]);u>=r;u--)l.push(t[u]);u--}for(;u>=0;u--)l.push(t[u]);c.reverse(),l.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<l.length;r++){for(;a<c.length&&l[r].claim_order>=c[a].claim_order;)a++;const o=a<c.length?c[a]:null;e.insertBefore(l[r],o)}}function z(e,t){if($){for(O(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function ee(e,t,n){$&&!n?z(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function R(e){e.parentNode&&e.parentNode.removeChild(e)}function U(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function te(){return x(" ")}function ne(){return x("")}function ie(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function re(e){return function(t){return t.preventDefault(),e.call(this,t)}}function ae(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function le(e){return e.dataset.svelteH}function V(e){return Array.from(e.childNodes)}function W(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function S(e,t,n,i,s=!1){W(e);const c=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const u=e[l];if(t(u)){const r=n(u);return r===void 0?e.splice(l,1):e[l]=r,s||(e.claim_info.last_index=l),u}}for(let l=e.claim_info.last_index-1;l>=0;l--){const u=e[l];if(t(u)){const r=n(u);return r===void 0?e.splice(l,1):e[l]=r,s?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=l,u}}return i()})();return c.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,c}function F(e,t,n,i){return S(e,s=>s.nodeName===t,s=>{const c=[];for(let l=0;l<s.attributes.length;l++){const u=s.attributes[l];n[u.name]||c.push(u.name)}c.forEach(l=>s.removeAttribute(l))},()=>i(t))}function se(e,t,n){return F(e,t,n,U)}function G(e,t){return S(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function ue(e){return G(e," ")}function ce(e,t){t=""+t,e.data!==t&&(e.data=t)}function fe(e,t){e.value=t??""}function oe(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function _e(e,t,n){e.classList.toggle(t,!!n)}function de(e,t){return new e(t)}const m=new Set;let _;function me(){_={r:0,c:[],p:_}}function he(){_.r||h(_.c),_=_.p}function J(e,t){e&&e.i&&(m.delete(e),e.i(t))}function $e(e,t,n,i){if(e&&e.o){if(m.has(e))return;m.add(e),_.c.push(()=>{m.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function pe(e){e&&e.c()}function ye(e,t){e&&e.l(t)}function K(e,t,n){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,n),b(()=>{const c=e.$$.on_mount.map(P).filter(A);e.$$.on_destroy?e.$$.on_destroy.push(...c):h(c),e.$$.on_mount=[]}),s.forEach(b)}function Q(e,t){const n=e.$$;n.fragment!==null&&(I(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function X(e,t){e.$$.dirty[0]===-1&&(T.push(e),q(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function xe(e,t,n,i,s,c,l=null,u=[-1]){const r=L;N(e);const a=e.$$={fragment:null,ctx:[],props:c,update:y,not_equal:s,bound:w(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:w(),dirty:u,skip_bound:!1,root:t.target||r.$$.root};l&&l(a.root);let o=!1;if(a.ctx=n?n(e,t.props||{},(f,d,...g)=>{const v=g.length?g[0]:d;return a.ctx&&s(a.ctx[f],a.ctx[f]=v)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](v),o&&X(e,f)),d}):[],a.update(),o=!0,h(a.before_update),a.fragment=i?i(a.ctx):!1,t.target){if(t.hydrate){D();const f=V(t.target);a.fragment&&a.fragment.l(f),f.forEach(R)}else a.fragment&&a.fragment.c();t.intro&&J(e.$$.fragment),K(e,t.target,t.anchor),H(),j()}N(r)}class ge{constructor(){p(this,"$$");p(this,"$$set")}$destroy(){Q(this,1),this.$destroy=y}$on(t,n){if(!A(n))return y;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!B(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Y="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Y);export{ie as A,fe as B,re as C,ge as S,$e as a,se as b,pe as c,V as d,U as e,ye as f,ue as g,R as h,xe as i,ee as j,z as k,Q as l,K as m,x as n,G as o,ae as p,oe as q,ce as r,te as s,J as t,le as u,ne as v,he as w,me as x,de as y,_e as z};
