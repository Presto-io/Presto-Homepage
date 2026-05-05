import{c as vr,a as n,f as i}from"./JHyj73M1.js";import{o as Na,a as Et}from"./c7B7aQ-5.js";import{h as Rt,j as Tt,f as J,e as Ue,p as na,M as ce,b as p,c as a,r as e,s,t as R,g as r,a as sa,d as T,L as tr,u as E,_ as Ot,$ as La}from"./CPtSggD0.js";import{d as Wa,s as k,a as h,e as Lt}from"./C_mpnZFs.js";import{l as Ce,s as Ie,p as Le,i as u}from"./D8_z0sTK.js";import{I as je,s as De,a as or,e as Nr,r as Ut,b as Fr,t as Ua,c as ie,i as Ct}from"./CZd0evWy.js";import{h as It,p as jt}from"./BfgmRQnu.js";import{c as ea}from"./D3CDFMM9.js";import{b as Dt}from"./DOV0BMuS.js";import{b as Oe}from"./CX4zYMLo.js";import{c as Pt,f as Ca,i as Kr}from"./IWRL6HdK.js";import{g as Ia}from"./DNPtKtHn.js";import{g as aa,S as Bt,U as At,a as Ft,F as Nt}from"./L6MMhgQB.js";import{t as ja}from"./BMAd7-wB.js";import{A as ta}from"./DBG_DkJo.js";import{R as Da}from"./BZNtAYjv.js";import{L as Pa}from"./TpmSLSNU.js";import{S as Wt}from"./SDa7VG0V.js";import{C as Vt}from"./DN8nlUiA.js";import{X as Ht}from"./BeA2OHTy.js";import{S as Ba}from"./D6OiraWN.js";import{D as le}from"./B-HcsDk_.js";import{E as qt}from"./DT86GXAl.js";class ia{#r=new WeakMap;#e;#a;static entries=new WeakMap;constructor(o){this.#a=o}observe(o,L){var C=this.#r.get(o)||new Set;return C.add(L),this.#r.set(o,C),this.#t().observe(o,this.#a),()=>{var P=this.#r.get(o);P.delete(L),P.size===0&&(this.#r.delete(o),this.#e.unobserve(o))}}#t(){return this.#e??(this.#e=new ResizeObserver(o=>{for(var L of o){ia.entries.set(L.target,L);for(var C of this.#r.get(L.target)||[])C(L)}}))}}var Gt=new ia({box:"border-box"});function Yt(K,o,L){var C=Gt.observe(K,()=>L(K[o]));Rt(()=>(Tt(()=>L(K[o])),C))}function Jt(K,o){const L=Ce(o,["children","$$slots","$$events","$$legacy"]);const C=[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]];je(K,Ie({name:"package-check"},()=>L,{get iconNode(){return C},children:(P,O)=>{var I=vr(),$=J(I);De($,o,"default",{}),n(P,I)},$$slots:{default:!0}}))}function Aa(K,o){const L=Ce(o,["children","$$slots","$$events","$$legacy"]);const C=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"}]];je(K,Ie({name:"star"},()=>L,{get iconNode(){return C},children:(P,O)=>{var I=vr(),$=J(I);De($,o,"default",{}),n(P,I)},$$slots:{default:!0}}))}function Fa(K,o){const L=Ce(o,["children","$$slots","$$events","$$legacy"]);const C=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];je(K,Ie({name:"trash-2"},()=>L,{get iconNode(){return C},children:(P,O)=>{var I=vr(),$=J(I);De($,o,"default",{}),n(P,I)},$$slots:{default:!0}}))}function oa(K,o){const L=Ce(o,["children","$$slots","$$events","$$legacy"]);const C=[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]];je(K,Ie({name:"undo-2"},()=>L,{get iconNode(){return C},children:(P,O)=>{var I=vr(),$=J(I);De($,o,"default",{}),n(P,I)},$$slots:{default:!0}}))}let Qr=Ue({isOnline:typeof navigator<"u"?navigator.onLine:!0});const Va={get isOnline(){return Qr.isOnline},get lastOnlineTime(){return Qr.lastOnlineTime},init(){typeof window>"u"||(console.log("[network] initializing, current status:",navigator.onLine),Qr.isOnline=navigator.onLine,window.addEventListener("online",()=>{console.log("[network] online event received"),Qr.isOnline=!0,Qr.lastOnlineTime=new Date}),window.addEventListener("offline",()=>{console.log("[network] offline event received"),Qr.isOnline=!1}))},refresh(){typeof navigator<"u"&&(Qr.isOnline=navigator.onLine)}};typeof window<"u"&&(console.log("[network] auto-initializing"),Va.init());var Kt=i('<button class="retry-btn svelte-1cpok13">重试</button>'),Qt=i('<div><span class="message svelte-1cpok13"> </span> <!></div>');function Xt(K,o){na(o,!0);let L=Le(o,"duration",3,3e3),C=T(!0);ce(()=>{const rr=setTimeout(()=>{p(C,!1)},L());return()=>clearTimeout(rr)});var P=Qt();let O;var I=a(P),$=a(I,!0);e(I);var de=s(I,2);{var q=rr=>{var nr=Kt();h("click",nr,()=>o.onRetry()),n(rr,nr)};u(de,rr=>{o.onRetry&&rr(q)})}e(P),R(()=>{O=or(P,1,`toast ${o.type??""}`,"svelte-1cpok13",O,{visible:r(C)}),k($,o.message)}),n(K,P),sa()}Wa(["click"]);var Zt=i('<div class="loading svelte-h81f8c">加载中...</div>'),$t=i('<div class="empty svelte-h81f8c"><p>未安装任何模板</p> <p class="hint svelte-h81f8c">请连接网络后下载模板</p></div>'),ro=i('<li class="template-item svelte-h81f8c"><span class="name svelte-h81f8c"> </span></li>'),eo=i('<ul class="template-list svelte-h81f8c"></ul>'),ao=i('<div class="offline-container svelte-h81f8c"><div class="offline-header svelte-h81f8c"><svg class="icon svelte-h81f8c" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg> <h2 class="svelte-h81f8c">离线模式</h2> <p class="subtitle svelte-h81f8c">无网络连接,以下模板可用:</p></div> <!></div>');function to(K,o){na(o,!0);let L=T(Ue([])),C=T(!0);Na(async()=>{try{await ja.load(),p(L,ja.templates.map(q=>q.name),!0)}catch(q){console.error("[offline] failed to load templates:",q)}finally{p(C,!1)}});var P=ao(),O=s(a(P),2);{var I=q=>{var rr=Zt();n(q,rr)},$=q=>{var rr=$t();n(q,rr)},de=q=>{var rr=eo();Nr(rr,20,()=>r(L),nr=>nr,(nr,xr)=>{var wr=ro(),Or=a(wr),br=a(Or,!0);e(Or),e(wr),R(()=>k(br,xr)),n(nr,wr)}),e(rr),n(q,rr)};u(O,q=>{r(C)?q(I):r(L).length===0?q($,1):q(de,!1)})}e(P),n(K,P),sa()}var oo=i('<div class="drag-region" style="--wails-draggable:drag"></div>'),no=i('<button class="btn-back" aria-label="返回设置"><!></button>'),so=i('<div><!> <div class="page-header"><!> <nav class="breadcrumb"><h2> </h2></nav></div> <!></div>'),io=i('<div class="drag-region" style="--wails-draggable:drag"></div>'),lo=i('<button class="btn-back" aria-label="返回设置"><!></button>'),co=i('<button class="breadcrumb-link"> </button> <span class="breadcrumb-sep">›</span> <span class="breadcrumb-current"> </span>',1),vo=i("<h2> </h2>"),po=i('<button class="btn-refresh" aria-label="刷新"><!></button>'),uo=i('<div class="store-empty"><!> <p>加载中…</p></div>'),go=i('<div class="store-empty"><p class="error-text"> </p> <button class="btn-retry">重试</button></div>'),fo=i('<button class="search-clear"><!></button>'),mo=i('<button role="option"> </button>'),bo=i('<div class="sort-dropdown" role="listbox"></div>'),ho=i('<button><span class="trust-dot"></span> <!> <span class="trust-label"> </span></button>'),_o=i('<div class="trust-toggles"></div> <div class="controls-sep"></div>',1),xo=i('<button class="scroll-arrow scroll-arrow-left" aria-label="向左滚动">‹</button>'),wo=i("<button> </button>"),yo=i('<button class="scroll-arrow scroll-arrow-right" aria-label="向右滚动">›</button>'),ko=i('<button><span class="nav-tpl-name"> </span> <span></span></button>'),zo=i("<span><!> </span>"),So=i('<button class="btn-detail-action btn-detail-undo"><!> <span>撤销删除</span></button>'),Mo=i('<button class="btn-detail-action btn-detail-uninstall"><!> <span>卸载</span></button>'),Eo=i('<button class="btn-detail-action btn-detail-install"><!> <span>安装</span></button>'),Ro=i('<button class="stat-item" title="Stars"><!> <span> </span></button>'),To=i('<button class="stat-item" title="下载量"><!> <span> </span></button>'),Oo=i('<span class="keyword-chip"> </span>'),Lo=i('<div class="detail-keywords"></div>'),Uo=i('<div class="detail-preview"><iframe sandbox="allow-scripts allow-same-origin" loading="lazy" title="预览"></iframe></div>'),Co=i('<div class="detail-preview-placeholder"><!> <span>社区模板暂不提供预览</span></div>'),Io=i('<div class="readme-loading"><!> <span>加载 README…</span></div>'),jo=i('<div class="detail-readme"><h4>README</h4> <div class="readme-body"><!></div></div>'),Do=i('<a class="repo-link">查看源码 <!></a>'),Po=i('<div class="progress-ring-wrapper"><svg class="progress-ring" width="36" height="36" viewBox="0 0 36 36"><circle class="progress-ring-track" cx="18" cy="18" r="14"></circle><circle class="progress-ring-fill" cx="18" cy="18" r="14"></circle></svg> <span class="progress-ring-stop">■</span></div>'),Bo=i('<button class="btn-install"><!><span>更新</span></button>'),Ao=i('<button class="btn-undo-lg"><!><span>撤销删除</span></button>'),Fo=i('<button class="btn-install"><!><span>安装</span></button>'),No=i('<button class="btn-install"><!><span>在 Presto 中打开</span></button>'),Wo=i('<button class="btn-scroll-top" aria-label="回到顶部"><!> <span>回到顶部</span></button>'),Vo=i('<div class="master-detail"><nav class="store-nav"></nav> <div class="store-detail"><div class="detail-header"><div class="detail-title-row"><h3> </h3> <!> <div class="detail-stats-actions"><!> <!> <!></div></div></div> <p class="detail-desc"> </p> <!> <div class="detail-meta"><span> </span> <span class="meta-sep">·</span> <span> </span> <span class="meta-sep">·</span> <span> </span></div> <!> <!> <div class="detail-repo"><!></div> <div class="detail-actions"><div class="actions-left"><!></div> <!></div></div></div>'),Ho=i('<div class="store-empty"><p> </p></div>'),qo=i('<div class="undo-bar"><span> </span> <button class="undo-btn">撤销</button></div>'),Go=i('<button class="card-action-btn card-undo-btn" title="撤销删除"><!></button>'),Yo=i('<button class="card-action-btn card-uninstall-btn" title="卸载"><!></button>'),Jo=i('<button class="card-action-btn card-install-btn" title="安装"><!></button>'),Ko=i('<span class="card-installed-badge">已安装</span>'),Qo=i('<span class="card-pending-badge">待删除</span>'),Xo=i('<span class="card-stat"><!> </span>'),Zo=i('<span class="card-stat"><!> </span>'),$o=i('<span class="card-stats"><!> <!></span>'),rn=i('<div><div class="tpl-card" role="button" tabindex="0"><!> <div class="card-header"><span class="card-name"> <!> <!></span> <span><!> </span></div> <p class="card-desc"> </p> <div class="card-footer"><span class="card-version"> </span> <span class="card-author"> </span> <!></div></div></div>'),en=i("<button> </button>"),an=i('<span class="page-ellipsis">…</span>'),tn=i('<div class="page-controls"><button class="page-btn">&lsaquo;</button> <!> <button class="page-btn">&rsaquo;</button></div>'),on=i('<div class="pagination"><span class="page-info"> </span> <!></div>'),nn=i('<!> <div class="card-grid"></div> <!>',1),sn=i('<div class="filter-toolbar"><div class="search-sort-row"><div class="search-box"><span class="search-icon"><!></span> <input type="text" class="search-input" placeholder="搜索名称、描述或标签…"/> <!></div> <div class="sort-wrapper"><button aria-haspopup="listbox"><span class="sort-label"> </span> <!></button> <!></div></div> <div class="controls-row"><!> <button style="--toggle-color:#22c55e" title="已安装"><span class="trust-dot"></span> <!> <span class="trust-label">已安装</span></button> <div class="controls-sep"></div> <div class="category-bar"><!> <div class="category-scroll"><button>全部</button> <!></div> <!></div></div></div> <!>',1),ln=i(`<div><!> <div class="page-header"><!> <nav class="breadcrumb"><!></nav> <!></div> <!> <!></div> <style>.page {
    padding: var(--space-xl);
    padding-top: 48px;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .page.web-mode {
    padding-top: var(--space-xl);
    height: auto;
    overflow: visible;
  }
  .page.web-mode .store-detail {
    overflow: visible;
  }
  .page.web-mode .card-grid {
    overflow: visible;
  }
  .drag-region {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 48px;
    z-index: 1;
  }
  h2 {
    margin: 0;
    font-size: 1.125rem;
    font-family: var(--font-ui);
    color: var(--color-text-bright);
  }
  .breadcrumb {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    min-width: 0;
  }
  .breadcrumb h2 {
    margin: 0;
    font-size: 1.125rem;
    font-family: var(--font-ui);
    color: var(--color-text-bright);
  }
  .breadcrumb-link {
    background: none;
    border: none;
    padding: 0;
    font-size: 1.125rem;
    font-family: var(--font-ui);
    color: var(--color-accent);
    cursor: pointer;
    transition: opacity var(--transition);
    white-space: nowrap;
  }
  .breadcrumb-link:hover { opacity: 0.8; }
  .breadcrumb-sep {
    color: var(--color-muted);
    font-size: 1rem;
    flex-shrink: 0;
  }
  .breadcrumb-current {
    font-size: 1.125rem;
    font-family: var(--font-ui);
    color: var(--color-text-bright);
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .page-header {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    margin-bottom: var(--space-xl);
    flex-shrink: 0;
  }
  .btn-back {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    color: var(--color-text);
    cursor: pointer;
    transition: background var(--transition);
  }
  .btn-back:hover { background: var(--color-surface-hover); }
  .btn-refresh {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background: none;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    color: var(--color-muted);
    cursor: pointer;
    transition: all var(--transition);
    margin-left: auto;
  }
  .btn-refresh:hover { color: var(--color-accent); border-color: var(--color-accent); }
  .btn-refresh:disabled { opacity: 0.5; cursor: not-allowed; }

  /* Filter Toolbar */
  .filter-toolbar {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    margin-bottom: var(--space-xl);
    flex-shrink: 0;
  }
  .search-box {
    position: relative;
    display: flex;
    align-items: center;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    transition: border-color 250ms ease, box-shadow 250ms ease;
  }
  .search-box:focus-within {
    border-color: var(--color-accent-border);
    box-shadow: 0 0 0 3px rgba(122, 162, 247, 0.08);
  }
  .search-icon {
    display: flex;
    align-items: center;
    padding-left: var(--space-md);
    color: var(--color-muted);
    transition: color 200ms ease;
    flex-shrink: 0;
  }
  .search-box:focus-within .search-icon { color: var(--color-accent); }
  .search-input {
    flex: 1;
    background: none;
    border: none;
    outline: none;
    color: var(--color-text-bright);
    font-family: var(--font-ui);
    font-size: 13px;
    padding: 9px var(--space-md) 9px var(--space-sm);
    line-height: 1;
  }
  .search-input::placeholder { color: var(--color-muted); }
  .search-clear {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    margin-right: var(--space-sm);
    border-radius: 50%;
    border: none;
    background: var(--color-surface-hover);
    color: var(--color-muted);
    cursor: pointer;
    transition: background 150ms ease, color 150ms ease, transform 120ms ease;
    flex-shrink: 0;
  }
  .search-clear:hover { background: rgba(255, 255, 255, 0.1); color: var(--color-text); transform: scale(1.1); }
  .search-clear:active { transform: scale(0.9); }

  /* Controls Row */
  .controls-row {
    display: flex;
    align-items: center;
    gap: var(--space-md);
  }

  /* Category Bar */
  .category-bar {
    position: relative;
    flex: 1;
    min-width: 0;
    isolation: isolate;
  }
  .category-scroll {
    display: flex;
    gap: var(--space-sm);
    overflow-x: auto;
    scroll-behavior: smooth;
    padding: 2px var(--space-sm);
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .category-scroll::-webkit-scrollbar { display: none; }
  .cat-chip {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    height: 30px;
    padding: 0 var(--space-md);
    border: 1px solid var(--color-border);
    border-radius: 999px;
    background: transparent;
    color: var(--color-muted);
    font-family: var(--font-ui);
    font-size: 12.5px;
    font-weight: 500;
    white-space: nowrap;
    cursor: pointer;
    transition: color var(--transition), background var(--transition), border-color var(--transition);
    user-select: none;
  }
  .cat-chip:hover { color: var(--color-text); background: var(--color-surface-hover); border-color: rgba(255,255,255,0.1); }
  .cat-chip.active { color: var(--color-accent); background: var(--color-accent-bg); border-color: var(--color-accent-border); }
  .scroll-arrow {
    position: absolute;
    top: 50%;
    z-index: 2;
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
    border: 1px solid var(--color-border);
    border-radius: 50%;
    background: var(--color-surface);
    color: var(--color-muted);
    font-size: 14px;
    font-family: var(--font-ui);
    cursor: pointer;
    transform: translateY(-50%);
    transition: background var(--transition), color var(--transition), border-color var(--transition);
  }
  .scroll-arrow:hover { background: var(--color-accent-bg); color: var(--color-accent); border-color: var(--color-accent-border); }
  .scroll-arrow-left { left: 0; }
  .scroll-arrow-right { right: 0; }
  .scroll-arrow::before {
    content: "";
    position: absolute;
    top: 50%;
    width: 48px;
    height: calc(100% + 16px);
    transform: translateY(-50%);
    pointer-events: none;
    z-index: -1;
    border-radius: var(--radius-md);
  }
  .scroll-arrow-left::before { left: -4px; background: linear-gradient(to right, var(--color-bg) 40%, transparent 100%); }
  .scroll-arrow-right::before { right: -4px; background: linear-gradient(to left, var(--color-bg) 40%, transparent 100%); }

  /* Separator */
  .controls-sep {
    width: 1px;
    height: 20px;
    background: var(--color-border);
    flex-shrink: 0;
  }

  /* Trust Toggles */
  .trust-toggles {
    display: flex;
    align-items: center;
    gap: 2px;
  }
  .trust-toggle {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    padding: 5px var(--space-sm);
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: none;
    color: var(--color-muted);
    font-family: var(--font-ui);
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    white-space: nowrap;
    line-height: 1;
    transition: color 200ms ease, background 200ms ease, border-color 200ms ease, box-shadow 200ms ease;
    user-select: none;
  }
  .trust-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--toggle-color);
    opacity: 0.35;
    flex-shrink: 0;
    transition: opacity 250ms ease, transform 250ms ease, box-shadow 250ms ease;
  }
  .trust-toggle:hover { color: var(--color-text); background: var(--color-surface); }
  .trust-toggle:hover .trust-dot { opacity: 0.7; transform: scale(1.2); }
  .trust-toggle:active { transform: scale(0.97); }
  .trust-toggle.active {
    color: var(--color-text-bright);
    background: color-mix(in srgb, var(--toggle-color) 10%, transparent);
    border-color: color-mix(in srgb, var(--toggle-color) 25%, transparent);
  }
  .trust-toggle.active .trust-dot {
    opacity: 1;
    transform: scale(1.3);
    box-shadow: 0 0 4px color-mix(in srgb, var(--toggle-color) 50%, transparent);
  }
  .trust-label {
    transition: opacity 150ms ease;
  }
  .installed-toggle {
    flex-shrink: 0;
  }

  /* Empty / Loading */
  .store-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-2xl);
    color: var(--color-muted);
    flex: 1;
    justify-content: center;
  }
  .store-empty p { margin: 0; }
  .error-text { color: var(--color-danger); }
  .btn-retry {
    padding: var(--space-sm) var(--space-md);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    color: var(--color-text);
    font-size: 0.8125rem;
    cursor: pointer;
    transition: all var(--transition);
  }
  .btn-retry:hover { border-color: var(--color-accent); color: var(--color-accent); }

  /* Card Grid */
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    align-content: start;
    gap: var(--space-md);
    overflow-y: auto;
    flex: 1;
  }

  /* Pagination */
  .pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-md) 0 0;
    flex-shrink: 0;
  }
  .page-info {
    font-size: 0.75rem;
    color: var(--color-muted);
  }
  .page-controls {
    display: flex;
    align-items: center;
    gap: 2px;
  }
  .page-btn {
    min-width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    background: var(--color-surface);
    color: var(--color-muted);
    font-size: 0.75rem;
    font-family: var(--font-ui);
    cursor: pointer;
    transition: all var(--transition);
  }
  .page-btn:hover:not(:disabled) { color: var(--color-text); border-color: var(--color-accent-border); }
  .page-btn.active { background: var(--color-accent-bg); color: var(--color-accent); border-color: var(--color-accent-border); }
  .page-btn:disabled { opacity: 0.3; cursor: not-allowed; }
  .page-ellipsis { color: var(--color-muted); font-size: 0.75rem; padding: 0 4px; }
  .tpl-card {
    display: flex;
    flex-direction: column;
    padding: var(--space-lg);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: all var(--transition);
    text-align: left;
  }
  .tpl-card:hover {
    border-color: var(--color-accent-border);
    background: var(--color-surface-hover);
  }
  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-sm);
    margin-bottom: var(--space-xs);
  }
  .card-name {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-text-bright);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .card-trust {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    font-size: 0.625rem;
    font-weight: 500;
    white-space: nowrap;
    flex-shrink: 0;
  }
  .trust-official { color: #3b82f6; }
  .trust-verified { color: #22c55e; }
  .trust-community { color: var(--color-muted); }
  .card-desc {
    margin: 0;
    font-size: 0.8125rem;
    color: var(--color-muted);
    line-height: 1.4;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    flex: 1;
  }
  .card-footer {
    display: flex;
    justify-content: space-between;
    margin-top: var(--space-sm);
    font-size: 0.75rem;
    color: var(--color-muted);
  }
  .card-version { font-family: var(--font-mono); }
  .search-sort-row {
    display: flex;
    align-items: center;
    gap: var(--space-md);
  }
  .search-sort-row .search-box {
    flex: 1;
  }
  .sort-wrapper {
    position: relative;
    flex-shrink: 0;
    align-self: stretch;
  }
  .sort-trigger {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: 100%;
    padding: 9px var(--space-md);
    background: var(--color-surface);
    color: var(--color-text);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    font-size: 13px;
    font-family: var(--font-ui);
    cursor: pointer;
    transition: border-color var(--transition);
    box-sizing: border-box;
    white-space: nowrap;
  }
  .sort-trigger:hover {
    border-color: var(--color-muted);
  }
  .sort-trigger.open {
    border-color: var(--color-accent);
  }
  .sort-trigger :global(svg) {
    transition: transform 150ms ease;
    flex-shrink: 0;
  }
  .sort-trigger.open :global(svg) {
    transform: rotate(180deg);
  }
  .sort-label {
    flex: 1;
    text-align: left;
  }
  .sort-dropdown {
    position: absolute;
    top: calc(100% + 4px);
    right: 0;
    min-width: 100%;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
    z-index: 100;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: var(--space-xs) 0;
  }
  .sort-option {
    display: flex;
    align-items: center;
    width: 100%;
    text-align: left;
    padding: 6px 12px;
    background: none;
    border: none;
    color: var(--color-text);
    font-size: 12px;
    font-family: var(--font-ui);
    cursor: pointer;
    transition: background var(--transition);
    white-space: nowrap;
  }
  .sort-option:hover {
    background: var(--color-surface-hover);
  }
  .sort-option.selected {
    color: var(--color-accent);
    font-weight: 500;
  }
  .card-stats {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    margin-left: auto;
  }
  .card-stat {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    font-size: 0.6875rem;
    color: var(--color-muted);
  }

  /* Master-Detail */
  .master-detail {
    display: flex;
    gap: var(--space-xl);
    flex: 1;
    min-height: 0;
  }
  .store-nav {
    width: 180px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
    overflow-y: auto;
  }
  .nav-tpl-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-xs);
    text-align: left;
    padding: var(--space-sm) var(--space-md);
    background: none;
    border: none;
    border-radius: var(--radius-sm);
    color: var(--color-muted);
    font-size: 0.8125rem;
    cursor: pointer;
    transition: all var(--transition);
  }
  .nav-tpl-item:hover {
    color: var(--color-text);
    background: var(--color-surface);
  }
  .nav-tpl-item.active {
    color: var(--color-accent);
    background: var(--color-accent-bg);
  }
  .nav-tpl-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .nav-trust-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .nav-trust-dot.installing {
    animation: pulse 1s ease-in-out infinite;
  }

  /* Detail panel */
  .store-detail {
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding-right: var(--space-md);
  }
  .detail-header {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    margin-bottom: var(--space-md);
  }
  .detail-header h3 {
    margin: 0;
    font-size: 1.125rem;
    color: var(--color-text-bright);
  }
  .detail-title-row {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    flex-wrap: wrap;
  }
  .detail-stats-actions {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    margin-left: auto;
  }
  .stat-item {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    background: none;
    border: none;
    color: var(--color-muted);
    font-size: 0.8125rem;
    font-family: var(--font-mono);
    cursor: pointer;
    padding: 2px 6px;
    border-radius: var(--radius-sm);
    transition: color var(--transition), background var(--transition);
  }
  .stat-item:hover {
    color: var(--color-text);
    background: var(--color-surface);
  }
  /* Detail header action buttons (uniform size) */
  .btn-detail-action {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    padding: 4px 10px;
    background: none;
    border-radius: var(--radius-sm);
    font-size: 0.75rem;
    font-family: var(--font-ui);
    cursor: pointer;
    transition: all var(--transition);
  }
  .btn-detail-uninstall {
    border: 1px solid rgba(239, 68, 68, 0.3);
    color: #ef4444;
  }
  .btn-detail-uninstall:hover {
    background: rgba(239, 68, 68, 0.08);
    border-color: #ef4444;
  }
  .btn-detail-install {
    border: 1px solid rgba(34, 197, 94, 0.3);
    color: #22c55e;
  }
  .btn-detail-install:hover {
    background: rgba(34, 197, 94, 0.08);
    border-color: #22c55e;
  }
  .btn-detail-undo {
    border: 1px solid rgba(122, 162, 247, 0.3);
    color: var(--color-accent);
  }
  .btn-detail-undo:hover {
    background: rgba(122, 162, 247, 0.08);
    border-color: var(--color-accent);
  }

  /* Card item wrapper */
  .card-item {
    position: relative;
  }
  .card-item.pending-delete {
    opacity: 0.55;
  }
  .card-item.pending-delete .tpl-card {
    border-style: dashed;
  }
  .card-installed-badge {
    font-size: 0.5625rem;
    padding: 0px 5px;
    border-radius: 999px;
    background: rgba(34, 197, 94, 0.12);
    color: #22c55e;
    font-weight: 500;
    margin-left: 6px;
    vertical-align: middle;
    display: inline-block;
    line-height: 1.6;
  }
  .card-pending-badge {
    font-size: 0.5625rem;
    padding: 0px 5px;
    border-radius: 999px;
    background: rgba(239, 68, 68, 0.10);
    color: #ef4444;
    font-weight: 500;
    margin-left: 6px;
    vertical-align: middle;
    display: inline-block;
    line-height: 1.6;
  }
  /* Card action buttons (hover) */
  .card-action-btn {
    position: absolute;
    top: 6px;
    right: 6px;
    width: 26px;
    height: 26px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-sm);
    background: var(--color-surface);
    cursor: pointer;
    opacity: 0;
    transition: opacity 150ms ease, background 150ms ease, border-color 150ms ease;
    z-index: 3;
  }
  .card-item:hover .card-action-btn {
    opacity: 1;
  }
  .card-uninstall-btn {
    border: 1px solid rgba(239, 68, 68, 0.25);
    color: #ef4444;
  }
  .card-uninstall-btn:hover {
    background: rgba(239, 68, 68, 0.08);
    border-color: #ef4444;
  }
  .card-install-btn {
    border: 1px solid rgba(34, 197, 94, 0.25);
    color: #22c55e;
  }
  .card-install-btn:hover {
    background: rgba(34, 197, 94, 0.08);
    border-color: #22c55e;
  }
  .card-undo-btn {
    border: 1px solid rgba(122, 162, 247, 0.25);
    color: var(--color-accent);
  }
  .card-undo-btn:hover {
    background: rgba(122, 162, 247, 0.08);
    border-color: var(--color-accent);
  }

  /* Undo bar */
  .undo-bar {
    position: sticky;
    top: 0;
    z-index: 10;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    padding: var(--space-sm) var(--space-md);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--space-sm);
    border-radius: var(--radius-md);
  }
  .undo-btn {
    background: none;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    padding: 4px 12px;
    color: var(--color-accent);
    font-size: 0.8125rem;
    cursor: pointer;
    font-family: var(--font-ui);
  }
  .undo-btn:hover {
    background: var(--color-surface-hover);
  }
  .trust-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    font-size: 0.75rem;
    font-weight: 500;
  }
  .detail-desc {
    margin: 0 0 var(--space-md);
    font-size: 0.875rem;
    color: var(--color-muted);
    line-height: 1.6;
  }
  .detail-keywords {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs);
    margin-bottom: var(--space-md);
  }
  .keyword-chip {
    padding: 2px 8px;
    border-radius: 8px;
    background: var(--color-surface-hover);
    color: var(--color-muted);
    font-size: 0.6875rem;
  }
  .detail-meta {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    font-size: 0.8125rem;
    color: var(--color-muted);
    margin-bottom: var(--space-lg);
    font-family: var(--font-mono);
  }
  .meta-sep { opacity: 0.4; }

  /* Preview iframe */
  .detail-preview {
    max-width: 100%;
    border-radius: var(--radius-md);
    overflow: hidden;
    border: 1px solid var(--color-border);
    margin-bottom: var(--space-lg);
    background: var(--color-surface);
  }
  .detail-preview iframe {
    width: 1200px;
    height: 800px;
    transform-origin: 0 0;
    border: none;
  }
  .detail-preview-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 48px 16px;
    color: var(--color-muted);
    background: var(--color-surface);
    border-radius: var(--radius-md);
    font-size: 14px;
  }

  /* README */
  .readme-loading {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    color: var(--color-muted);
    font-size: 0.8125rem;
    margin-bottom: var(--space-lg);
  }
  .detail-readme {
    margin-bottom: var(--space-lg);
  }
  .detail-readme h4 {
    margin: 0 0 var(--space-sm);
    font-size: 0.875rem;
    color: var(--color-text);
  }
  .readme-body {
    margin: 0;
    padding: var(--space-md);
    background: var(--color-surface);
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border);
    font-size: 0.8125rem;
    color: var(--color-muted);
    line-height: 1.7;
    word-break: break-word;
  }
  .readme-body :global(h3),
  .readme-body :global(h4),
  .readme-body :global(h5),
  .readme-body :global(h6) {
    color: var(--color-text-bright);
    margin: 1em 0 0.5em;
    line-height: 1.3;
  }
  .readme-body :global(h3) { font-size: 1.1em; }
  .readme-body :global(h4) { font-size: 1em; }
  .readme-body :global(h5) { font-size: 0.95em; }
  .readme-body :global(h6) { font-size: 0.9em; }
  .readme-body :global(p) {
    margin: 0.5em 0;
  }
  .readme-body :global(strong) { color: var(--color-text); }
  .readme-body :global(code) {
    padding: 0.15em 0.4em;
    background: var(--color-surface-hover);
    border-radius: 4px;
    font-family: var(--font-mono);
    font-size: 0.9em;
  }
  .readme-body :global(pre) {
    padding: var(--space-sm);
    background: var(--color-surface-hover);
    border-radius: var(--radius-sm);
    overflow-x: auto;
    margin: 0.75em 0;
  }
  .readme-body :global(pre code) {
    padding: 0;
    background: none;
  }
  .readme-body :global(ul) {
    padding-left: 1.5em;
    margin: 0.5em 0;
  }
  .readme-body :global(li) {
    margin: 0.25em 0;
  }
  .readme-body :global(hr) {
    border: none;
    border-top: 1px solid var(--color-border);
    margin: 1em 0;
  }
  .readme-body :global(table) {
    width: 100%;
    border-collapse: collapse;
    margin: 0.75em 0;
    font-size: 0.8125rem;
  }
  .readme-body :global(th),
  .readme-body :global(td) {
    padding: 0.4em 0.75em;
    border: 1px solid var(--color-border);
    text-align: left;
  }
  .readme-body :global(th) {
    background: var(--color-surface-hover);
    color: var(--color-text);
    font-weight: 600;
  }
  .readme-body :global(tr:nth-child(even)) {
    background: var(--color-surface-hover);
  }
  .readme-body :global(blockquote) {
    margin: 0.75em 0;
    padding: 0.5em 1em;
    border-left: 3px solid var(--color-border);
    color: var(--color-muted);
    background: var(--color-surface-hover);
    border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  }
  .readme-body :global(ol) {
    padding-left: 1.5em;
    margin: 0.5em 0;
  }

  /* Repo link */
  .detail-repo {
    margin-bottom: var(--space-lg);
  }
  .repo-link {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    color: var(--color-accent);
    text-decoration: none;
    font-size: 0.8125rem;
    cursor: pointer;
    transition: opacity var(--transition);
  }
  .repo-link:hover { opacity: 0.8; }

  /* Bottom actions */
  .detail-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--space-xl);
    gap: var(--space-md);
  }
  .actions-left {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
  }
  .btn-scroll-top {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    padding: var(--space-sm) var(--space-md);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    color: var(--color-muted);
    font-size: 0.8125rem;
    cursor: pointer;
    transition: all var(--transition);
  }
  .btn-scroll-top:hover {
    color: var(--color-text);
    border-color: var(--color-accent-border);
  }
  .btn-uninstall-lg {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    padding: var(--space-sm) var(--space-lg);
    border-radius: var(--radius-md);
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all var(--transition);
    border: 1px solid rgba(239, 68, 68, 0.3);
    background: var(--color-surface);
    color: #ef4444;
  }
  .btn-uninstall-lg:hover {
    background: rgba(239, 68, 68, 0.08);
    border-color: #ef4444;
  }
  .btn-undo-lg {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    padding: var(--space-sm) var(--space-lg);
    border-radius: var(--radius-md);
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all var(--transition);
    border: 1px solid rgba(122, 162, 247, 0.3);
    background: var(--color-surface);
    color: var(--color-accent);
  }
  .btn-undo-lg:hover {
    background: rgba(122, 162, 247, 0.08);
    border-color: var(--color-accent);
  }
  .btn-install, .btn-installed, .btn-installing {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    padding: var(--space-sm) var(--space-lg);
    border-radius: var(--radius-md);
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all var(--transition);
    border: none;
  }
  .btn-install {
    background: var(--color-accent);
    color: var(--color-bg);
  }
  .btn-install:hover { opacity: 0.9; }
  .btn-installed {
    background: var(--color-surface);
    color: var(--color-muted);
    cursor: default;
  }
  .btn-installing {
    background: var(--color-surface);
    color: var(--color-muted);
    cursor: not-allowed;
  }
  .btn-installing .status-dot {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--color-accent);
    animation: pulse 1s ease-in-out infinite;
  }

  /* Progress ring (iOS App Store style) */
  .progress-ring-wrapper {
    position: relative;
    width: 36px;
    height: 36px;
    cursor: default;
  }
  .progress-ring {
    transform: rotate(-90deg);
  }
  .progress-ring-track {
    fill: none;
    stroke: var(--color-border);
    stroke-width: 2.5;
  }
  .progress-ring-fill {
    fill: none;
    stroke: var(--color-accent);
    stroke-width: 2.5;
    stroke-linecap: round;
    transition: stroke-dashoffset 300ms linear;
  }
  .progress-ring-stop {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: var(--color-accent);
    pointer-events: none;
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 1; }
  }

  :global(.spin) {
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* ============================================
     Mobile Responsive (< 768px)
     Card grid: single column full-width
     Master-detail: hide sidebar, detail full-screen
     ============================================ */
  @media (max-width: 767px) {
    .page {
      padding: var(--space-md);
    }
    .page.web-mode {
      padding-top: var(--space-md);
      height: auto;
      overflow-x: hidden;
      overflow-y: visible;
    }

    /* Card grid: single column */
    .card-grid {
      grid-template-columns: 1fr;
    }

    /* Master-detail: hide sidebar, detail takes full width */
    .master-detail {
      gap: 0;
    }
    .store-nav {
      display: none;
    }
    .store-detail {
      padding-right: 0;
    }
    .detail-header {
      flex-wrap: wrap;
    }
    .detail-actions {
      flex-wrap: wrap;
    }

    /* Category bar: tighter spacing */
    .filter-toolbar {
      margin-bottom: var(--space-md);
    }
    .controls-row {
      flex-wrap: wrap;
      gap: var(--space-sm);
    }
    .search-sort-row {
      flex-wrap: wrap;
    }

    /* Pagination: compact */
    .pagination {
      flex-wrap: wrap;
      gap: var(--space-sm);
    }
  }</style>`,1);function Un(K,o){na(o,!0);let L=Le(o,"installedVersions",19,()=>new Map),C=Le(o,"communityEnabled",3,!0),P=Le(o,"initialSelectedId",3,null),O=T(null),I=T(!1),$=T(null);function de(){return o.mode==="web",o.registryUrl}async function q(t=!1){if(!(r(O)&&!t)){p(I,!0),p($,null);try{const d=await fetch(de());if(!d.ok)throw new Error(`${d.status}`);p(O,await d.json(),!0)}catch(d){p($,d instanceof Error?d.message:String(d),!0)}finally{p(I,!1)}}}async function rr(){return q(!0)}let nr=T(""),xr=T(null),wr=T(null),Or=T(!1),br=T(null);ce(()=>{P()!==null&&p(br,P())});let we=T(""),Pe=T(!1),Be=T(0),sr=T(1),Wr=T(24),Xr=T(null),Zr=T("latest"),Lr=T(!1),ye=T(void 0);const la={latest:"最新发布",stars:"最多星标",downloads:"最多下载"};let Q=T(Ue({})),ve=T(null),ca=T(!1);function Ha(){r(ve)&&p(ca,r(ve).scrollTop>300)}function qa(){r(ve)?.scrollTo({top:0,behavior:"smooth"})}async function Ga(){if(o.statsUrl)try{const t=await fetch(o.statsUrl);t.ok&&p(Q,await t.json(),!0)}catch{}}function ke(t){return t==null?"":t>=1e3?(t/1e3).toFixed(1).replace(/\.0$/,"")+"k":String(t)}let $r=T(!1),pr=T(null),da=T(!1),va=T(!1);function ze(){r(pr)&&(p(da,r(pr).scrollLeft>4),p(va,r(pr).scrollLeft<r(pr).scrollWidth-r(pr).clientWidth-4))}function pa(t){r(pr)?.scrollBy({left:t==="left"?-200:200,behavior:"smooth"})}ce(()=>{if(!r(pr))return;ze(),r(pr).addEventListener("scroll",ze,{passive:!0});const t=new ResizeObserver(ze);return t.observe(r(pr)),()=>{r(pr)?.removeEventListener("scroll",ze),t.disconnect()}});let yr=T(null);function Ae(){if(o.mode==="web"||!r(yr))return;const t=getComputedStyle(r(yr)),d=parseFloat(t.gap)||12,x=200+d,cr=Math.max(1,Math.floor((r(yr).clientWidth+d)/x)),er=r(yr).querySelector(".tpl-card"),kr=(er?er.offsetHeight:120)+d,ee=Math.max(1,Math.round((r(yr).clientHeight+d)/kr)),Cr=cr*ee;Cr>0&&Cr!==r(Wr)&&p(Wr,Cr)}ce(()=>{if(!r(yr))return;Ae();const t=new ResizeObserver(Ae);return t.observe(r(yr)),()=>t.disconnect()}),ce(()=>{o.mode==="web"&&r(O)?p(Wr,r(O).templates.length||100,!0):r(O)&&r(yr)&&requestAnimationFrame(()=>Ae())});let Ya=E(()=>{if(!r(O))return[];if(r(O).categories?.length)return r(O).categories;const t=new Set;return r(O).templates.map(d=>d.category).filter(d=>!!d&&!t.has(d)&&(t.add(d),!0)).map(d=>({id:d,label:{zh:d,en:d}}))});const Se={official:{label:"官方",cls:"trust-official",color:"#3b82f6",icon:Ft},verified:{label:"已验证",cls:"trust-verified",color:"#22c55e",icon:Ba},community:{label:"社区",cls:"trust-community",color:"",icon:At},unverified:{label:"未验证",cls:"trust-unverified",color:"#e0af68",icon:Bt}};let ua=E(()=>r(O)?new Nt(r(O).templates,{keys:[{name:"displayName",weight:2},{name:"name",weight:1.5},{name:"description",weight:1},{name:"author",weight:1},{name:"category",weight:.8},{name:"keywords",weight:1.2}],threshold:.4,ignoreLocation:!0}):null),Ja=E(()=>{if(!r(O))return[];const t=r(nr).trim();return(t&&r(ua)?r(ua).search(t).map(x=>x.item):r(O).templates).filter(x=>{const cr=!r(xr)||x.category===r(xr),er=!r(wr)||x.trust===r(wr),Ur=C()||x.trust==="official"||x.trust==="verified",kr=!r(Or)||ge(x.name);return cr&&er&&Ur&&kr})}),pe=E(()=>{const t=[...r(Ja)];switch(r(Zr)){case"stars":return t.sort((d,x)=>(r(Q)[x.name]?.stars??0)-(r(Q)[d.name]?.stars??0));case"downloads":return t.sort((d,x)=>(r(Q)[x.name]?.downloads??0)-(r(Q)[d.name]?.downloads??0));default:return t.sort((d,x)=>{const cr=d.publishedAt?new Date(d.publishedAt).getTime():0;return(x.publishedAt?new Date(x.publishedAt).getTime():0)-cr})}});ce(()=>{r(nr),r(xr),r(wr),r(Or),r(Wr),r(Zr),p(sr,1)});let ue=E(()=>Math.max(1,Math.ceil(r(pe).length/r(Wr)))),Ka=E(()=>r(pe).slice((r(sr)-1)*r(Wr),r(sr)*r(Wr))),ga=E(()=>{if(!r(O))return new Set;const t=new Set;for(const d of r(O).templates)!C()&&d.trust!=="official"&&d.trust!=="verified"||t.add(d.trust);return t}),g=E(()=>r(O)?.templates.find(t=>t.name===r(br))??null),re=E(()=>r(g)?Se[r(g).trust]:null),N=T(Ue(new Set));function ge(t){return L().has(t)&&!r(N).has(t)}function fa(t){r(N).add(t),p(N,new Set(r(N)),!0)}function Qa(){if(r(N).size===0)return;const t=[...r(N)],d=t[t.length-1];r(N).delete(d),p(N,new Set(r(N)),!0)}function Fe(t){r(N).delete(t),p(N,new Set(r(N)),!0)}Et(async()=>{if(r(N).size===0||!o.uninstallFn)return;const t=[...r(N)];for(const d of t)try{await o.uninstallFn(d)}catch{}});function ma(t){return t<1024?t+" B":t<1024*1024?(t/1024).toFixed(1)+" KB":(t/(1024*1024)).toFixed(1)+" MB"}function Xa(t,d){const x=L().get(t);return x?x!==d:!1}const ba={network_error:"网络连接失败，请检查网络后重试",not_found:"模板不存在",checksum_mismatch:"文件校验失败，可能已损坏，请重试",server_error:"服务器暂时不可用，请稍后重试"};async function fe(t){if(!(!o.installFn||Kr.isInstalling(t.name))){Kr.setInstalling(t.name);try{await o.installFn(t),Kr.setInstalled(t.name),o.onInstallSuccess?.(t.name)}catch(d){let x="安装失败，请重试",cr="server_error";if(d instanceof Error)try{const er=JSON.parse(d.message);er.error_type&&ba[er.error_type]&&(x=ba[er.error_type],cr=er.error_type)}catch{}p(Xr,{message:x,type:"error",onRetry:()=>{p(Xr,null),fe(t)}},!0),setTimeout(()=>{Kr.reset(t.name)},3500),console.error("[StoreView] install failed:",d)}}}async function Za(t){if(o.readmeUrl){p(Pe,!0),p(we,"");try{const d=(o.mode,o.readmeUrl(t)),x=await fetch(d);x.ok&&p(we,await x.text(),!0)}catch{}finally{p(Pe,!1)}}}function Ne(t){if(r(br)===t){p(br,null);return}p(br,t,!0),Za(t)}function $a(t){o.mode==="desktop"&&window.runtime?.BrowserOpenURL?window.runtime.BrowserOpenURL(t):window.open(t,"_blank","noopener,noreferrer")}function We(t){return t.repository?t.repository:t.repo?`https://github.com/${t.repo}`:""}const Ve=new aa.Renderer;Ve.link=({text:t})=>t,Ve.image=({text:t})=>t?`[${t}]`:"",aa.setOptions({gfm:!0,breaks:!0,renderer:Ve});function rt(t){return aa.parse(t,{async:!1})}function ha(t){r(Lr)&&r(ye)&&!r(ye).contains(t.target)&&p(Lr,!1)}Na(()=>(q(),Ga(),document.addEventListener("pointerdown",ha,!0),()=>document.removeEventListener("pointerdown",ha,!0)));var _a=vr(),et=J(_a);{var at=t=>{var d=so();let x;var cr=a(d);{var er=Mr=>{var Ir=oo();n(Mr,Ir)};u(cr,Mr=>{o.mode==="desktop"&&Mr(er)})}var Ur=s(cr,2),kr=a(Ur);{var ee=Mr=>{var Ir=no(),Ge=a(Ir);ta(Ge,{size:16}),e(Ir),h("click",Ir,()=>Ia(o.backRoute)),n(Mr,Ir)};u(kr,Mr=>{o.mode==="desktop"&&o.backRoute&&Mr(ee)})}var Cr=s(kr,2),ae=a(Cr),He=a(ae,!0);e(ae),e(Cr),e(Ur);var qe=s(Ur,2);to(qe,{}),e(d),R(()=>{x=or(d,1,"page",null,x,{"web-mode":o.mode==="web"}),k(He,o.title)}),n(t,d)},tt=t=>{var d=ln(),x=J(d);let cr;var er=a(x);{var Ur=w=>{var z=io();n(w,z)};u(er,w=>{o.mode==="desktop"&&w(Ur)})}var kr=s(er,2),ee=a(kr);{var Cr=w=>{var z=lo(),B=a(z);ta(B,{size:16}),e(z),h("click",z,()=>Ia(o.backRoute)),n(w,z)};u(ee,w=>{o.mode==="desktop"&&o.backRoute&&w(Cr)})}var ae=s(ee,2),He=a(ae);{var qe=w=>{var z=co(),B=J(z),Er=a(B,!0);e(B);var jr=s(B,4),me=a(jr,!0);e(jr),R(()=>{k(Er,o.title),k(me,r(g).displayName)}),h("click",B,()=>p(br,null)),n(w,z)},Mr=w=>{var z=vo(),B=a(z,!0);e(z),R(()=>k(B,o.title)),n(w,z)};u(He,w=>{r(br)&&r(g)?w(qe):w(Mr,!1)})}e(ae);var Ir=s(ae,2);{var Ge=w=>{var z=po(),B=a(z);{let Er=E(()=>r(I)?"spin":"");Da(B,{size:14,get class(){return r(Er)}})}e(z),R(()=>z.disabled=r(I)),h("click",z,()=>rr()),n(w,z)};u(Ir,w=>{o.mode==="desktop"&&w(Ge)})}e(kr);var xa=s(kr,2);{var ot=w=>{var z=uo(),B=a(z);Pa(B,{size:24,class:"spin"}),tr(2),e(z),n(w,z)},nt=w=>{var z=go(),B=a(z),Er=a(B);e(B);var jr=s(B,2);e(z),R(()=>k(Er,`加载失败：${r($)??""}`)),h("click",jr,()=>rr()),n(w,z)},st=w=>{var z=sn(),B=J(z),Er=a(B),jr=a(Er),me=a(jr),ct=a(me);Wt(ct,{size:14}),e(me);var Ye=s(me,2);Ut(Ye);var dt=s(Ye,2);{var vt=b=>{var S=fo(),A=a(S);Ht(A,{size:12}),e(S),h("click",S,()=>p(nr,"")),n(b,S)};u(dt,b=>{r(nr)&&b(vt)})}e(jr);var Je=s(jr,2),te=a(Je);let wa;var Ke=a(te),pt=a(Ke,!0);e(Ke);var ut=s(Ke,2);Vt(ut,{size:12}),e(te);var gt=s(te,2);{var ft=b=>{var S=bo();Nr(S,20,()=>["latest","stars","downloads"],A=>A,(A,G)=>{var X=mo();let ar;var Z=a(X,!0);e(X),R(()=>{ar=or(X,1,"sort-option",null,ar,{selected:r(Zr)===G}),Fr(X,"aria-selected",r(Zr)===G),k(Z,la[G])}),h("click",X,()=>{p(Zr,G,!0),p(Lr,!1)}),n(A,X)}),e(S),Ua(3,S,()=>Ca,()=>({y:-4,duration:150,easing:Pt})),n(b,S)};u(gt,b=>{r(Lr)&&b(ft)})}e(Je),Oe(Je,b=>p(ye,b),()=>r(ye)),e(Er);var ya=s(Er,2),ka=a(ya);{var mt=b=>{var S=_o(),A=J(S);Nr(A,21,()=>Object.entries(Se),([G,X])=>G,(G,X)=>{var ar=E(()=>Ot(r(X),2));let Z=()=>r(ar)[0],ur=()=>r(ar)[1];var Rr=vr(),Dr=J(Rr);{var oe=W=>{const y=E(()=>ur().icon);var j=ho();let zr;var dr=s(a(j),2);ea(dr,()=>r(y),(_r,fr)=>{fr(_r,{size:13})});var hr=s(dr,2),gr=a(hr,!0);e(hr),e(j),R(()=>{zr=or(j,1,"trust-toggle",null,zr,{active:r(wr)===Z()}),ie(j,`--toggle-color:${(ur().color||"var(--color-muted)")??""}`),Fr(j,"title",ur().label),k(gr,ur().label)}),h("click",j,()=>p(wr,r(wr)===Z()?null:Z(),!0)),n(W,j)},ne=E(()=>r(ga).has(Z()));u(Dr,W=>{r(ne)&&W(oe)})}n(G,Rr)}),e(A),tr(2),n(b,S)};u(ka,b=>{r(ga).size>1&&b(mt)})}var be=s(ka,2);let za;var bt=s(a(be),2);Jt(bt,{size:13}),tr(2),e(be);var Sa=s(be,4),Ma=a(Sa);{var ht=b=>{var S=xo();h("click",S,()=>pa("left")),n(b,S)};u(Ma,b=>{r(da)&&b(ht)})}var Me=s(Ma,2),Qe=a(Me);let Ea;var _t=s(Qe,2);Nr(_t,17,()=>r(Ya),b=>b.id,(b,S)=>{var A=wo();let G;var X=a(A,!0);e(A),R(()=>{G=or(A,1,"cat-chip",null,G,{active:r(xr)===r(S).id}),k(X,r(S).label.zh)}),h("click",A,()=>p(xr,r(xr)===r(S).id?null:r(S).id,!0)),n(b,A)}),e(Me),Oe(Me,b=>p(pr,b),()=>r(pr));var xt=s(Me,2);{var wt=b=>{var S=yo();h("click",S,()=>pa("right")),n(b,S)};u(xt,b=>{r(va)&&b(wt)})}e(Sa),e(ya),e(B);var yt=s(B,2);{var kt=b=>{var S=Vo(),A=a(S);Nr(A,21,()=>r(pe),c=>c.name,(c,l)=>{const m=E(()=>Se[r(l).trust]);var _=ko();let f;var v=a(_),M=a(v,!0);e(v);var U=s(v,2);let F;e(_),R(Y=>{f=or(_,1,"nav-tpl-item",null,f,{active:r(br)===r(l).name}),k(M,r(l).displayName),F=or(U,1,"nav-trust-dot",null,F,Y),ie(U,`background:${r(m).color??""}`)},[()=>({installing:Kr.isInstalling(r(l).name)})]),h("click",_,()=>Ne(r(l).name)),n(c,_)}),e(A);var G=s(A,2),X=a(G),ar=a(X),Z=a(ar),ur=a(Z,!0);e(Z);var Rr=s(Z,2);{var Dr=c=>{const l=E(()=>r(re).icon);var m=zo(),_=a(m);ea(_,()=>r(l),(v,M)=>{M(v,{size:14})});var f=s(_);e(m),R(()=>{or(m,1,`trust-badge ${r(re).cls??""}`),ie(m,r(re).color?`color:${r(re).color}`:""),k(f,` ${r(re).label??""}`)}),n(c,m)};u(Rr,c=>{r(re)&&c(Dr)})}var oe=s(Rr,2),ne=a(oe);{var W=c=>{var l=vr(),m=J(l);{var _=F=>{var Y=So(),Yr=a(Y);oa(Yr,{size:13}),tr(2),e(Y),h("click",Y,()=>Fe(r(g).name)),n(F,Y)},f=E(()=>r(N).has(r(g).name)),v=F=>{var Y=Mo(),Yr=a(Y);Fa(Yr,{size:13}),tr(2),e(Y),h("click",Y,()=>fa(r(g).name)),n(F,Y)},M=E(()=>ge(r(g).name)),U=F=>{var Y=Eo(),Yr=a(Y);le(Yr,{size:13}),tr(2),e(Y),h("click",Y,()=>fe(r(g))),n(F,Y)};u(m,F=>{r(f)?F(_):r(M)?F(v,1):o.installFn&&F(U,2)})}n(c,l)};u(ne,c=>{o.mode==="desktop"&&c(W)})}var y=s(ne,2);{var j=c=>{var l=Ro(),m=a(l);Aa(m,{size:13});var _=s(m,2),f=a(_,!0);e(_),e(l),R(v=>k(f,v),[()=>r($r)?r(Q)[r(g).name].stars:ke(r(Q)[r(g).name].stars)]),h("click",l,()=>p($r,!r($r))),n(c,l)};u(y,c=>{r(Q)[r(g).name]?.stars!=null&&c(j)})}var zr=s(y,2);{var dr=c=>{var l=To(),m=a(l);le(m,{size:13});var _=s(m,2),f=a(_,!0);e(_),e(l),R(v=>k(f,v),[()=>r($r)?r(Q)[r(g).name].downloads:ke(r(Q)[r(g).name].downloads)]),h("click",l,()=>p($r,!r($r))),n(c,l)};u(zr,c=>{r(Q)[r(g).name]?.downloads!=null&&c(dr)})}e(oe),e(ar),e(X);var hr=s(X,2),gr=a(hr,!0);e(hr);var _r=s(hr,2);{var fr=c=>{var l=Lo();Nr(l,20,()=>r(g).keywords,m=>m,(m,_)=>{var f=Oo(),v=a(f,!0);e(f),R(()=>k(v,_)),n(m,f)}),e(l),n(c,l)};u(_r,c=>{r(g).keywords.length>0&&c(fr)})}var Tr=s(_r,2),Pr=a(Tr),Br=a(Pr);e(Pr);var V=s(Pr,4),Vr=a(V,!0);e(V);var Hr=s(V,4),he=a(Hr,!0);e(Hr),e(Tr);var se=s(Tr,2);{var Sr=c=>{var l=vr(),m=J(l);{var _=f=>{var v=Uo(),M=a(v);e(v),R(U=>{ie(v,`height:${r(Be)*800/1200}px`),Fr(M,"src",U),ie(M,`transform:scale(${r(Be)/1200})`)},[()=>o.previewUrl(r(g).name)]),Yt(v,"clientWidth",U=>p(Be,U)),n(f,v)};u(m,f=>{o.previewUrl&&f(_)})}n(c,l)},ir=c=>{var l=Co(),m=a(l);Ba(m,{size:24}),tr(2),e(l),n(c,l)};u(se,c=>{r(g).trust==="official"||r(g).trust==="verified"?c(Sr):c(ir,!1)})}var Ar=s(se,2);{var _e=c=>{var l=vr(),m=J(l);{var _=v=>{var M=Io(),U=a(M);Pa(U,{size:16,class:"spin"}),tr(2),e(M),n(v,M)},f=v=>{var M=jo(),U=s(a(M),2),F=a(U);It(F,()=>jt.sanitize(rt(r(we)))),e(U),e(M),n(v,M)};u(m,v=>{r(Pe)?v(_):r(we)&&v(f,1)})}n(c,l)};u(Ar,c=>{o.readmeUrl&&c(_e)})}var qr=s(Ar,2),Xe=a(qr);{var Ee=c=>{var l=Do(),m=s(a(l));qt(m,{size:12}),e(l),R(_=>Fr(l,"href",_),[()=>We(r(g))]),h("click",l,_=>{_.preventDefault(),$a(We(r(g)))}),n(c,l)},xe=E(()=>We(r(g)));u(Xe,c=>{r(xe)&&c(Ee)})}e(qr);var Re=s(qr,2),Gr=a(Re),Ze=a(Gr);{var $e=c=>{var l=vr(),m=J(l);{var _=mr=>{const H=E(()=>Kr.getProgress(r(g).name)),Jr=E(()=>r(H)?.percent??0),Ra=E(()=>2*Math.PI*14),St=E(()=>r(Ra)*(1-r(Jr)/100));var Te=Po(),Ta=a(Te),Oa=s(a(Ta));Fr(Oa,"stroke-dasharray",r(Ra)),e(Ta),tr(2),e(Te),R(Mt=>{Fr(Te,"title",Mt),Fr(Oa,"stroke-dashoffset",r(St))},[()=>r(H)?`${ma(r(H).downloaded)} / ${ma(r(H).total)}`:"准备中..."]),n(mr,Te)},f=E(()=>Kr.isInstalling(r(g).name)),v=mr=>{var H=Bo(),Jr=a(H);Da(Jr,{size:14}),tr(),e(H),h("click",H,()=>fe(r(g))),n(mr,H)},M=E(()=>ge(r(g).name)&&Xa(r(g).name,r(g).version)),U=mr=>{var H=Ao(),Jr=a(H);oa(Jr,{size:14}),tr(),e(H),h("click",H,()=>Fe(r(g).name)),n(mr,H)},F=E(()=>r(N).has(r(g).name)),Y=mr=>{var H=Fo(),Jr=a(H);le(Jr,{size:14}),tr(),e(H),h("click",H,()=>fe(r(g))),n(mr,H)},Yr=E(()=>!ge(r(g).name));u(m,mr=>{r(f)?mr(_):r(M)?mr(v,1):r(F)?mr(U,2):r(Yr)&&mr(Y,3)})}n(c,l)},ra=c=>{var l=No(),m=a(l);le(m,{size:14}),tr(),e(l),h("click",l,()=>{const _=`presto://install/${r(g).name}`;window.parent!==window?window.parent.postMessage({type:"presto-open-template",url:_},"*"):window.location.href=_}),n(c,l)};u(Ze,c=>{o.mode==="desktop"&&o.installFn?c($e):o.mode==="web"&&c(ra,1)})}e(Gr);var D=s(Gr,2);{var lr=c=>{var l=Wo(),m=a(l);ta(m,{size:14,style:"transform:rotate(90deg)"}),tr(2),e(l),h("click",l,qa),n(c,l)};u(D,c=>{o.mode==="desktop"&&r(ca)&&c(lr)})}e(Re),e(G),Oe(G,c=>p(ve,c),()=>r(ve)),e(S),R(()=>{k(ur,r(g).displayName),k(gr,r(g).description),k(Br,`v${r(g).version??""}`),k(Vr,r(g).author),k(he,r(g).license)}),Lt("scroll",G,Ha),n(b,S)},zt=b=>{var S=vr(),A=J(S);{var G=ar=>{var Z=Ho(),ur=a(Z),Rr=a(ur,!0);e(ur),e(Z),R(()=>k(Rr,r(nr)?"没有匹配的结果":"暂无可用内容")),n(ar,Z)},X=ar=>{var Z=nn(),ur=J(Z);{var Rr=W=>{var y=qo(),j=a(y),zr=a(j);e(j);var dr=s(j,2);e(y),R(()=>k(zr,`已删除 ${r(N).size??""} 个模板`)),h("click",dr,Qa),Ua(3,y,()=>Ca,()=>({y:-30})),n(W,y)};u(ur,W=>{r(N).size>0&&W(Rr)})}var Dr=s(ur,2);Nr(Dr,21,()=>r(Ka),W=>W.name,(W,y)=>{const j=E(()=>Se[r(y).trust]),zr=E(()=>r(j).icon),dr=E(()=>r(N).has(r(y).name)),hr=E(()=>ge(r(y).name));var gr=rn();let _r;var fr=a(gr),Tr=a(fr);{var Pr=D=>{var lr=vr(),c=J(lr);{var l=f=>{var v=Go(),M=a(v);oa(M,{size:13}),e(v),h("click",v,U=>{U.stopPropagation(),Fe(r(y).name)}),n(f,v)},m=f=>{var v=Yo(),M=a(v);Fa(M,{size:13}),e(v),h("click",v,U=>{U.stopPropagation(),fa(r(y).name)}),n(f,v)},_=f=>{var v=Jo(),M=a(v);le(M,{size:13}),e(v),h("click",v,U=>{U.stopPropagation(),fe(r(y))}),n(f,v)};u(c,f=>{r(dr)?f(l):r(hr)?f(m,1):f(_,!1)})}n(D,lr)};u(Tr,D=>{o.mode==="desktop"&&D(Pr)})}var Br=s(Tr,2),V=a(Br),Vr=a(V),Hr=s(Vr);{var he=D=>{var lr=Ko();n(D,lr)};u(Hr,D=>{r(hr)&&!r(dr)&&D(he)})}var se=s(Hr,2);{var Sr=D=>{var lr=Qo();n(D,lr)};u(se,D=>{r(dr)&&D(Sr)})}e(V);var ir=s(V,2),Ar=a(ir);ea(Ar,()=>r(zr),(D,lr)=>{lr(D,{size:12})});var _e=s(Ar);e(ir),e(Br);var qr=s(Br,2),Xe=a(qr,!0);e(qr);var Ee=s(qr,2),xe=a(Ee),Re=a(xe);e(xe);var Gr=s(xe,2),Ze=a(Gr,!0);e(Gr);var $e=s(Gr,2);{var ra=D=>{var lr=$o(),c=a(lr);{var l=f=>{var v=Xo(),M=a(v);Aa(M,{size:10});var U=s(M);e(v),R(F=>k(U,` ${F??""}`),[()=>ke(r(Q)[r(y).name].stars)]),n(f,v)};u(c,f=>{r(Q)[r(y).name]?.stars!=null&&f(l)})}var m=s(c,2);{var _=f=>{var v=Zo(),M=a(v);le(M,{size:10});var U=s(M);e(v),R(F=>k(U,` ${F??""}`),[()=>ke(r(Q)[r(y).name].downloads)]),n(f,v)};u(m,f=>{r(Q)[r(y).name]?.downloads!=null&&f(_)})}e(lr),n(D,lr)};u($e,D=>{(r(Q)[r(y).name]?.stars!=null||r(Q)[r(y).name]?.downloads!=null)&&D(ra)})}e(Ee),e(fr),e(gr),R(()=>{_r=or(gr,1,"card-item",null,_r,{"pending-delete":r(dr)}),k(Vr,`${r(y).displayName??""} `),or(ir,1,`card-trust ${r(j).cls??""}`),ie(ir,r(j).color?`color:${r(j).color}`:""),k(_e,` ${r(j).label??""}`),k(Xe,r(y).description),k(Re,`v${r(y).version??""}`),k(Ze,r(y).author)}),h("click",fr,()=>Ne(r(y).name)),h("keydown",fr,D=>{(D.key==="Enter"||D.key===" ")&&(D.preventDefault(),Ne(r(y).name))}),n(W,gr)}),e(Dr),Oe(Dr,W=>p(yr,W),()=>r(yr));var oe=s(Dr,2);{var ne=W=>{var y=on(),j=a(y),zr=a(j);e(j);var dr=s(j,2);{var hr=gr=>{var _r=tn(),fr=a(_r),Tr=s(fr,2);Nr(Tr,17,()=>Array.from({length:r(ue)},(Br,V)=>V+1),Ct,(Br,V)=>{var Vr=vr(),Hr=J(Vr);{var he=Sr=>{var ir=en();let Ar;var _e=a(ir,!0);e(ir),R(()=>{Ar=or(ir,1,"page-btn",null,Ar,{active:r(sr)===r(V)}),k(_e,r(V))}),h("click",ir,()=>p(sr,r(V),!0)),n(Sr,ir)},se=Sr=>{var ir=an();n(Sr,ir)};u(Hr,Sr=>{r(V)===1||r(V)===r(ue)||r(V)>=r(sr)-3&&r(V)<=r(sr)+3?Sr(he):(r(V)===r(sr)-4||r(V)===r(sr)+4)&&Sr(se,1)})}n(Br,Vr)});var Pr=s(Tr,2);e(_r),R(()=>{fr.disabled=r(sr)<=1,Pr.disabled=r(sr)>=r(ue)}),h("click",fr,()=>La(sr,-1)),h("click",Pr,()=>La(sr)),n(gr,_r)};u(dr,gr=>{r(ue)>1&&gr(hr)})}e(y),R(()=>k(zr,`${r(pe).length??""} 项，第 ${r(sr)??""}/${r(ue)??""} 页`)),n(W,y)};u(oe,W=>{o.mode!=="web"&&W(ne)})}n(ar,Z)};u(A,ar=>{r(pe).length===0?ar(G):ar(X,!1)})}n(b,S)};u(yt,b=>{r(br)&&r(g)?b(kt):b(zt,!1)})}R(()=>{wa=or(te,1,"sort-trigger",null,wa,{open:r(Lr)}),Fr(te,"aria-expanded",r(Lr)),k(pt,la[r(Zr)]),za=or(be,1,"trust-toggle installed-toggle",null,za,{active:r(Or)}),Ea=or(Qe,1,"cat-chip",null,Ea,{active:!r(xr)})}),Dt(Ye,()=>r(nr),b=>p(nr,b)),h("click",te,()=>p(Lr,!r(Lr))),h("click",be,()=>p(Or,!r(Or))),h("click",Qe,()=>p(xr,null)),n(w,z)};u(xa,w=>{r(I)&&!r(O)?w(ot):r($)&&!r(O)?w(nt,1):r(O)&&w(st,2)})}var it=s(xa,2);{var lt=w=>{Xt(w,{get message(){return r(Xr).message},get type(){return r(Xr).type},duration:3e3,get onRetry(){return r(Xr).onRetry}})};u(it,w=>{r(Xr)&&w(lt)})}e(x),tr(2),R(()=>cr=or(x,1,"page",null,cr,{"web-mode":o.mode==="web"})),n(t,d)};u(et,t=>{Va.isOnline?t(tt,!1):t(at)})}n(K,_a),sa()}Wa(["click","keydown"]);export{Un as S};
