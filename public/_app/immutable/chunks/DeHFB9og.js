import{$ as e,A as t,C as n,D as r,E as i,G as a,J as o,K as s,L as c,M as l,N as u,O as d,P as f,Q as p,R as m,V as h,X as g,Y as _,Z as v,_ as y,a as b,at as x,b as S,ct as C,et as ee,f as te,g as ne,it as w,j as T,k as re,lt as E,m as ie,n as D,nt as O,o as k,p as ae,r as A,s as j,ut as M,w as oe,y as se,z as ce}from"./DN1SkWIp.js";import{t as N}from"./cpB-OnJj.js";import"./AZeLEXKw.js";import{t as P}from"./BWsFrHpM.js";import{t as le}from"./u-PjU79i.js";import{t as ue}from"./C7vG0GuO.js";import{t as de}from"./BuKO0WNK.js";import{t as fe}from"./BGkNUexp.js";import{t as pe}from"./DDDtGv58.js";import{t as me}from"./mySHM1iv.js";import{t as he}from"./DdeUho7Y.js";import{a as F,c as ge,i as I,n as _e,o as ve,r as ye,s as L,t as be}from"./C_6qEY2a.js";import{t as xe}from"./jTn31qSt.js";import{t as Se}from"./DHbjdz7c2.js";import{r as Ce,t as we}from"./BGKXfLhA2.js";import{t as R}from"./CtuCAWNO2.js";import{t as z}from"./CV19lYzF2.js";import"./DTmLUq2B2.js";import{t as Te}from"./DIoxF5BB2.js";function Ee(e,t){let n=b(t,[`children`,`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`m16 16 2 2 4-4`}],[`path`,{d:`M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14`}],[`path`,{d:`m7.5 4.27 9 5.15`}],[`polyline`,{points:`3.29 7 12 12 20.71 7`}],[`line`,{x1:`12`,x2:`12`,y1:`22`,y2:`12`}]];P(e,j({name:`package-check`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=u();i(_(r),t,`default`,{},null),l(e,r)},$$slots:{default:!0}}))}function De(e,t){let n=b(t,[`children`,`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`}]];P(e,j({name:`star`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=u();i(_(r),t,`default`,{},null),l(e,r)},$$slots:{default:!0}}))}function Oe(e,t){let n=b(t,[`children`,`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M10 11v6`}],[`path`,{d:`M14 11v6`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`}],[`path`,{d:`M3 6h18`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`}]];P(e,j({name:`trash-2`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=u();i(_(r),t,`default`,{},null),l(e,r)},$$slots:{default:!0}}))}function ke(e,t){let n=b(t,[`children`,`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M9 14 4 9l5-5`}],[`path`,{d:`M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11`}]];P(e,j({name:`undo-2`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=u();i(_(r),t,`default`,{},null),l(e,r)},$$slots:{default:!0}}))}var B=v({isOnline:typeof navigator<`u`?navigator.onLine:!0}),Ae={get isOnline(){return B.isOnline},get lastOnlineTime(){return B.lastOnlineTime},init(){typeof window>`u`||(console.log(`[network] initializing, current status:`,navigator.onLine),B.isOnline=navigator.onLine,window.addEventListener(`online`,()=>{console.log(`[network] online event received`),B.isOnline=!0,B.lastOnlineTime=new Date}),window.addEventListener(`offline`,()=>{console.log(`[network] offline event received`),B.isOnline=!1}))},refresh(){typeof navigator<`u`&&(B.isOnline=navigator.onLine)}};typeof window<`u`&&(console.log(`[network] auto-initializing`),Ae.init());var V=f(`<button class="retry-btn svelte-1cpok13">重试</button>`),H=f(`<div><span class="message svelte-1cpok13"> </span> <!></div>`);function je(n,r){x(r,!0);let i=k(r,`duration`,3,3e3),c=e(!0);s(()=>{let e=setTimeout(()=>{p(c,!1)},i());return()=>clearTimeout(e)});var u=H();let d;var f=o(u),_=o(f,!0);E(f);var v=g(f,2),y=e=>{var t=V();m(`click`,t,()=>r.onRetry()),l(e,t)};t(v,e=>{r.onRetry&&e(y)}),E(u),a(()=>{d=S(u,1,`toast ${r.type??``}`,`svelte-1cpok13`,d,{visible:h(c)}),T(_,r.message)}),l(n,u),w()}c([`click`]);var Me=f(`<div class="loading svelte-h81f8c">加载中...</div>`),U=f(`<div class="empty svelte-h81f8c"><p>未安装任何模板</p> <p class="hint svelte-h81f8c">请连接网络后下载模板</p></div>`),W=f(`<li class="template-item svelte-h81f8c"><span class="name svelte-h81f8c"> </span></li>`),G=f(`<ul class="template-list svelte-h81f8c"></ul>`),Ne=f(`<div class="offline-container svelte-h81f8c"><div class="offline-header svelte-h81f8c"><svg class="icon svelte-h81f8c" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg> <h2 class="svelte-h81f8c">离线模式</h2> <p class="subtitle svelte-h81f8c">无网络连接,以下模板可用:</p></div> <!></div>`);function Pe(n,r){x(r,!0);let i=e(v([])),s=e(!0);A(async()=>{try{await z.load(),p(i,z.templates.map(e=>e.name),!0)}catch(e){console.error(`[offline] failed to load templates:`,e)}finally{p(s,!1)}});var c=Ne(),u=g(o(c),2),f=e=>{l(e,Me())},m=e=>{l(e,U())},_=e=>{var t=G();d(t,20,()=>h(i),e=>e,(e,t)=>{var n=W(),r=o(n),i=o(r,!0);E(r),E(n),a(()=>T(i,t)),l(e,n)}),E(t),l(e,t)};t(u,e=>{h(s)?e(f):h(i).length===0?e(m,1):e(_,!1)}),E(c),l(n,c),w()}var Fe=f(`<div class="drag-region" style="--wails-draggable:drag"></div>`),Ie=f(`<button class="btn-back" aria-label="返回设置"><!></button>`),Le=f(`<div><!> <div class="page-header"><!> <nav class="breadcrumb"><h2> </h2></nav></div> <!></div>`),Re=f(`<div class="drag-region" style="--wails-draggable:drag"></div>`),ze=f(`<button class="btn-back" aria-label="返回设置"><!></button>`),Be=f(`<button class="breadcrumb-link"> </button> <span class="breadcrumb-sep">›</span> <span class="breadcrumb-current"> </span>`,1),Ve=f(`<h2> </h2>`),He=f(`<button class="btn-refresh" aria-label="刷新"><!></button>`),Ue=f(`<div class="store-empty"><!> <p>加载中…</p></div>`),We=f(`<div class="store-empty"><p class="error-text"> </p> <button class="btn-retry">重试</button></div>`),Ge=f(`<button class="search-clear"><!></button>`),Ke=f(`<button role="option"> </button>`),qe=f(`<div class="sort-dropdown" role="listbox"></div>`),Je=f(`<button><span class="trust-dot"></span> <!> <span class="trust-label"> </span></button>`),Ye=f(`<div class="trust-toggles"></div> <div class="controls-sep"></div>`,1),Xe=f(`<button class="scroll-arrow scroll-arrow-left" aria-label="向左滚动">‹</button>`),Ze=f(`<button> </button>`),Qe=f(`<button class="scroll-arrow scroll-arrow-right" aria-label="向右滚动">›</button>`),$e=f(`<button><span class="nav-tpl-name"> </span> <span></span></button>`),et=f(`<span><!> </span>`),tt=f(`<button class="btn-detail-action btn-detail-undo"><!> <span>撤销删除</span></button>`),nt=f(`<button class="btn-detail-action btn-detail-uninstall"><!> <span>卸载</span></button>`),rt=f(`<button class="btn-detail-action btn-detail-install"><!> <span>安装</span></button>`),it=f(`<button class="stat-item" title="Stars"><!> <span> </span></button>`),at=f(`<button class="stat-item" title="下载量"><!> <span> </span></button>`),ot=f(`<span class="keyword-chip"> </span>`),st=f(`<div class="detail-keywords"></div>`),ct=f(`<div class="detail-preview"><iframe sandbox="allow-scripts allow-same-origin" loading="lazy" title="预览"></iframe></div>`),lt=f(`<div class="detail-preview-placeholder"><!> <span>社区模板暂不提供预览</span></div>`),ut=f(`<div class="readme-loading"><!> <span>加载 README…</span></div>`),dt=f(`<div class="detail-readme"><h4>README</h4> <div class="readme-body"><!></div></div>`),ft=f(`<a class="repo-link">查看源码 <!></a>`),pt=f(`<div class="progress-ring-wrapper"><svg class="progress-ring" width="36" height="36" viewBox="0 0 36 36"><circle class="progress-ring-track" cx="18" cy="18" r="14"></circle><circle class="progress-ring-fill" cx="18" cy="18" r="14"></circle></svg> <span class="progress-ring-stop">■</span></div>`),mt=f(`<button class="btn-install"><!><span>更新</span></button>`),ht=f(`<button class="btn-undo-lg"><!><span>撤销删除</span></button>`),gt=f(`<button class="btn-install"><!><span>安装</span></button>`),_t=f(`<button class="btn-install"><!><span>在 Presto 中打开</span></button>`),vt=f(`<button class="btn-scroll-top" aria-label="回到顶部"><!> <span>回到顶部</span></button>`),yt=f(`<div class="master-detail"><nav class="store-nav"></nav> <div class="store-detail"><div class="detail-header"><div class="detail-title-row"><h3> </h3> <!> <div class="detail-stats-actions"><!> <!> <!></div></div></div> <p class="detail-desc"> </p> <!> <div class="detail-meta"><span> </span> <span class="meta-sep">·</span> <span> </span> <span class="meta-sep">·</span> <span> </span></div> <!> <!> <div class="detail-repo"><!></div> <div class="detail-actions"><div class="actions-left"><!></div> <!></div></div></div>`),bt=f(`<div class="store-empty"><p> </p></div>`),xt=f(`<div class="undo-bar"><span> </span> <button class="undo-btn">撤销</button></div>`),St=f(`<button class="card-action-btn card-undo-btn" title="撤销删除"><!></button>`),Ct=f(`<button class="card-action-btn card-uninstall-btn" title="卸载"><!></button>`),wt=f(`<button class="card-action-btn card-install-btn" title="安装"><!></button>`),Tt=f(`<span class="card-installed-badge">已安装</span>`),Et=f(`<span class="card-pending-badge">待删除</span>`),Dt=f(`<span class="card-stat"><!> </span>`),Ot=f(`<span class="card-stat"><!> </span>`),kt=f(`<span class="card-stats"><!> <!></span>`),At=f(`<div><div class="tpl-card" role="button" tabindex="0"><!> <div class="card-header"><span class="card-name"> <!> <!></span> <span><!> </span></div> <p class="card-desc"> </p> <div class="card-footer"><span class="card-version"> </span> <span class="card-author"> </span> <!></div></div></div>`),jt=f(`<button> </button>`),Mt=f(`<span class="page-ellipsis">…</span>`),Nt=f(`<div class="page-controls"><button class="page-btn">&lsaquo;</button> <!> <button class="page-btn">&rsaquo;</button></div>`),Pt=f(`<div class="pagination"><span class="page-info"> </span> <!></div>`),Ft=f(`<!> <div class="card-grid"></div> <!>`,1),It=f(`<div class="filter-toolbar"><div class="search-sort-row"><div class="search-box"><span class="search-icon"><!></span> <input type="text" class="search-input" placeholder="搜索名称、描述或标签…"/> <!></div> <div class="sort-wrapper"><button aria-haspopup="listbox"><span class="sort-label"> </span> <!></button> <!></div></div> <div class="controls-row"><!> <button style="--toggle-color:#22c55e" title="已安装"><span class="trust-dot"></span> <!> <span class="trust-label">已安装</span></button> <div class="controls-sep"></div> <div class="category-bar"><!> <div class="category-scroll"><button>全部</button> <!></div> <!></div></div></div> <!>`,1),Lt=f(`<div><!> <div class="page-header"><!> <nav class="breadcrumb"><!></nav> <!></div> <!> <!></div> <style>.page {
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
  }</style>`,1);function K(i,c){x(c,!0);let f=k(c,`installedVersions`,19,()=>new Map),b=k(c,`communityEnabled`,3,!0),j=k(c,`initialSelectedId`,3,null),P=e(null),z=e(!1),B=e(null);function V(){return c.mode,c.registryUrl}async function H(e=!1){if(!(h(P)&&!e)){p(z,!0),p(B,null);try{let e=await fetch(V());if(!e.ok)throw Error(`${e.status}`);p(P,await e.json(),!0)}catch(e){p(B,e instanceof Error?e.message:String(e),!0)}finally{p(z,!1)}}}async function Me(){return H(!0)}let U=e(``),W=e(null),G=e(null),Ne=e(!1),K=e(null);s(()=>{j()!==null&&p(K,j())});let Rt=e(``),zt=e(!1),Bt=e(0),q=e(1),Vt=e(24),Ht=e(null),Ut=e(`latest`),J=e(!1),Wt=e(void 0),Gt={latest:`最新发布`,stars:`最多星标`,downloads:`最多下载`},Y=e(v({})),Kt=e(null),qt=e(!1);function Jt(){h(Kt)&&p(qt,h(Kt).scrollTop>300)}function Yt(){h(Kt)?.scrollTo({top:0,behavior:`smooth`})}async function Xt(){if(c.statsUrl)try{let e=await fetch(c.statsUrl);e.ok&&p(Y,await e.json(),!0)}catch{}}function Zt(e){return e==null?``:e>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,``)+`k`:String(e)}let Qt=e(!1),X=e(null),$t=e(!1),en=e(!1);function tn(){h(X)&&(p($t,h(X).scrollLeft>4),p(en,h(X).scrollLeft<h(X).scrollWidth-h(X).clientWidth-4))}function nn(e){h(X)?.scrollBy({left:e===`left`?-200:200,behavior:`smooth`})}s(()=>{if(!h(X))return;tn(),h(X).addEventListener(`scroll`,tn,{passive:!0});let e=new ResizeObserver(tn);return e.observe(h(X)),()=>{h(X)?.removeEventListener(`scroll`,tn),e.disconnect()}});let Z=e(null);function rn(){if(c.mode===`web`||!h(Z))return;let e=getComputedStyle(h(Z)),t=parseFloat(e.gap)||12,n=200+t,r=Math.max(1,Math.floor((h(Z).clientWidth+t)/n)),i=h(Z).querySelector(`.tpl-card`),a=(i?i.offsetHeight:120)+t,o=r*Math.max(1,Math.round((h(Z).clientHeight+t)/a));o>0&&o!==h(Vt)&&p(Vt,o)}s(()=>{if(!h(Z))return;rn();let e=new ResizeObserver(rn);return e.observe(h(Z)),()=>e.disconnect()}),s(()=>{c.mode===`web`&&h(P)?p(Vt,h(P).templates.length||100,!0):h(P)&&h(Z)&&requestAnimationFrame(()=>rn())});let an=O(()=>{if(!h(P))return[];if(h(P).categories?.length)return h(P).categories;let e=new Set;return h(P).templates.map(e=>e.category).filter(t=>!!t&&!e.has(t)&&(e.add(t),!0)).map(e=>({id:e,label:{zh:e,en:e}}))}),on={official:{label:`官方`,cls:`trust-official`,color:`#3b82f6`,icon:ge},verified:{label:`已验证`,cls:`trust-verified`,color:`#22c55e`,icon:xe},community:{label:`社区`,cls:`trust-community`,color:``,icon:ve},unverified:{label:`未验证`,cls:`trust-unverified`,color:`#e0af68`,icon:L}},sn=O(()=>h(P)?new I(h(P).templates,{keys:[{name:`displayName`,weight:2},{name:`name`,weight:1.5},{name:`description`,weight:1},{name:`author`,weight:1},{name:`category`,weight:.8},{name:`keywords`,weight:1.2}],threshold:.4,ignoreLocation:!0}):null),cn=O(()=>{if(!h(P))return[];let e=h(U).trim();return(e&&h(sn)?h(sn).search(e).map(e=>e.item):h(P).templates).filter(e=>{let t=!h(W)||e.category===h(W),n=!h(G)||e.trust===h(G),r=b()||e.trust===`official`||e.trust===`verified`,i=!h(Ne)||mn(e.name);return t&&n&&r&&i})}),ln=O(()=>{let e=[...h(cn)];switch(h(Ut)){case`stars`:return e.sort((e,t)=>(h(Y)[t.name]?.stars??0)-(h(Y)[e.name]?.stars??0));case`downloads`:return e.sort((e,t)=>(h(Y)[t.name]?.downloads??0)-(h(Y)[e.name]?.downloads??0));default:return e.sort((e,t)=>{let n=e.publishedAt?new Date(e.publishedAt).getTime():0;return(t.publishedAt?new Date(t.publishedAt).getTime():0)-n})}});s(()=>{h(U),h(W),h(G),h(Ne),h(Vt),h(Ut),p(q,1)});let un=O(()=>Math.max(1,Math.ceil(h(ln).length/h(Vt)))),dn=O(()=>h(ln).slice((h(q)-1)*h(Vt),h(q)*h(Vt))),fn=O(()=>{if(!h(P))return new Set;let e=new Set;for(let t of h(P).templates)!b()&&t.trust!==`official`&&t.trust!==`verified`||e.add(t.trust);return e}),Q=O(()=>h(P)?.templates.find(e=>e.name===h(K))??null),pn=O(()=>h(Q)?on[h(Q).trust]:null),$=e(v(new Set));function mn(e){return f().has(e)&&!h($).has(e)}function hn(e){h($).add(e),p($,new Set(h($)),!0)}function gn(){if(h($).size===0)return;let e=[...h($)],t=e[e.length-1];h($).delete(t),p($,new Set(h($)),!0)}function _n(e){h($).delete(e),p($,new Set(h($)),!0)}D(async()=>{if(h($).size===0||!c.uninstallFn)return;let e=[...h($)];for(let t of e)try{await c.uninstallFn(t)}catch{}});function vn(e){return e<1024?e+` B`:e<1024*1024?(e/1024).toFixed(1)+` KB`:(e/(1024*1024)).toFixed(1)+` MB`}function yn(e,t){let n=f().get(e);return n?n!==t:!1}let bn={network_error:`网络连接失败，请检查网络后重试`,not_found:`模板不存在`,checksum_mismatch:`文件校验失败，可能已损坏，请重试`,server_error:`服务器暂时不可用，请稍后重试`};async function xn(e){if(!(!c.installFn||R.isInstalling(e.name))){R.setInstalling(e.name);try{await c.installFn(e),R.setInstalled(e.name),c.onInstallSuccess?.(e.name)}catch(t){let n=`安装失败，请重试`;if(t instanceof Error)try{let e=JSON.parse(t.message);e.error_type&&bn[e.error_type]&&(n=bn[e.error_type],e.error_type)}catch{}p(Ht,{message:n,type:`error`,onRetry:()=>{p(Ht,null),xn(e)}},!0),setTimeout(()=>{R.reset(e.name)},3500),console.error(`[StoreView] install failed:`,t)}}}async function Sn(e){if(c.readmeUrl){p(zt,!0),p(Rt,``);try{let t=(c.mode,c.readmeUrl(e)),n=await fetch(t);n.ok&&p(Rt,await n.text(),!0)}catch{}finally{p(zt,!1)}}}function Cn(e){if(h(K)===e){p(K,null);return}p(K,e,!0),Sn(e)}function wn(e){let t=ye(e);t&&(c.mode===`desktop`&&window.runtime?.BrowserOpenURL?window.runtime.BrowserOpenURL(t):window.open(t,`_blank`,`noopener,noreferrer`))}function Tn(e){return e.repository?ye(e.repository):e.repo?be(e.repo):``}let En=new F.Renderer;En.link=({text:e})=>e,En.image=({text:e})=>e?`[${e}]`:``,F.setOptions({gfm:!0,breaks:!0,renderer:En});function Dn(e){return F.parse(e,{async:!1})}function On(e){h(J)&&h(Wt)&&!h(Wt).contains(e.target)&&p(J,!1)}A(()=>(H(),Xt(),document.addEventListener(`pointerdown`,On,!0),()=>document.removeEventListener(`pointerdown`,On,!0)));var kn=u(),An=_(kn),jn=e=>{var n=Le();let r;var i=o(n),s=e=>{l(e,Fe())};t(i,e=>{c.mode===`desktop`&&e(s)});var u=g(i,2),d=o(u),f=e=>{var t=Ie();le(o(t),{size:16}),E(t),m(`click`,t,()=>N(c.backRoute)),l(e,t)};t(d,e=>{c.mode===`desktop`&&c.backRoute&&e(f)});var p=g(d,2),h=o(p),_=o(h,!0);E(h),E(p),E(u),Pe(g(u,2),{}),E(n),a(()=>{r=S(n,1,`page`,null,r,{"web-mode":c.mode===`web`}),T(_,c.title)}),l(e,n)},Mn=e=>{var i=Lt(),s=_(i);let f;var v=o(s),b=e=>{l(e,Re())};t(v,e=>{c.mode===`desktop`&&e(b)});var x=g(v,2),w=o(x),D=e=>{var t=ze();le(o(t),{size:16}),E(t),m(`click`,t,()=>N(c.backRoute)),l(e,t)};t(w,e=>{c.mode===`desktop`&&c.backRoute&&e(D)});var k=g(w,2),A=o(k),j=e=>{var t=Be(),n=_(t),r=o(n,!0);E(n);var i=g(n,4),s=o(i,!0);E(i),a(()=>{T(r,c.title),T(s,h(Q).displayName)}),m(`click`,n,()=>p(K,null)),l(e,t)},F=e=>{var t=Ve(),n=o(t,!0);E(t),a(()=>T(n,c.title)),l(e,t)};t(A,e=>{h(K)&&h(Q)?e(j):e(F,!1)}),E(k);var ge=g(k,2),I=e=>{var t=He(),n=o(t);{let e=O(()=>h(z)?`spin`:``);me(n,{size:14,get class(){return h(e)}})}E(t),a(()=>t.disabled=h(z)),m(`click`,t,()=>Me()),l(e,t)};t(ge,e=>{c.mode===`desktop`&&e(I)}),E(x);var ve=g(x,2),ye=e=>{var t=Ue();pe(o(t),{size:24,class:`spin`}),C(2),E(t),l(e,t)},L=e=>{var t=We(),n=o(t),r=o(n);E(n);var i=g(n,2);E(t),a(()=>T(r,`加载失败：${h(B)??``}`)),m(`click`,i,()=>Me()),l(e,t)},be=e=>{var i=It(),s=_(i),f=o(s),v=o(f),b=o(v);he(o(b),{size:14}),E(b);var x=g(b,2);ne(x);var w=g(x,2),D=e=>{var t=Ge();Se(o(t),{size:12}),E(t),m(`click`,t,()=>p(U,``)),l(e,t)};t(w,e=>{h(U)&&e(D)}),E(v);var k=g(v,2),A=o(k);let j;var N=o(A),P=o(N,!0);E(N),ue(g(N,2),{size:12}),E(A);var F=g(A,2),ge=e=>{var t=qe();d(t,20,()=>[`latest`,`stars`,`downloads`],e=>e,(e,t)=>{var n=Ke();let r;var i=o(n,!0);E(n),a(()=>{r=S(n,1,`sort-option`,null,r,{selected:h(Ut)===t}),y(n,`aria-selected`,h(Ut)===t),T(i,Gt[t])}),m(`click`,n,()=>{p(Ut,t,!0),p(J,!1)}),l(e,n)}),E(t),n(3,t,()=>Ce,()=>({y:-4,duration:150,easing:we})),l(e,t)};t(F,e=>{h(J)&&e(ge)}),E(k),te(k,e=>p(Wt,e),()=>h(Wt)),E(f);var I=g(f,2),ve=o(I),ye=e=>{var n=Ye(),r=_(n);d(r,21,()=>Object.entries(on),([e,t])=>e,(e,n)=>{var r=O(()=>M(h(n),2));let i=()=>h(r)[0],s=()=>h(r)[1];var c=u(),d=_(c),f=e=>{let t=O(()=>s().icon);var n=Je();let r;var c=g(o(n),2);oe(c,()=>h(t),(e,t)=>{t(e,{size:13})});var u=g(c,2),d=o(u,!0);E(u),E(n),a(()=>{r=S(n,1,`trust-toggle`,null,r,{active:h(G)===i()}),se(n,`--toggle-color:${(s().color||`var(--color-muted)`)??``}`),y(n,`title`,s().label),T(d,s().label)}),m(`click`,n,()=>p(G,h(G)===i()?null:i(),!0)),l(e,n)},v=O(()=>h(fn).has(i()));t(d,e=>{h(v)&&e(f)}),l(e,c)}),E(r),C(2),l(e,n)};t(ve,e=>{h(fn).size>1&&e(ye)});var L=g(ve,2);let be;Ee(g(o(L),2),{size:13}),C(2),E(L);var z=g(L,4),B=o(z),Ae=e=>{var t=Xe();m(`click`,t,()=>nn(`left`)),l(e,t)};t(B,e=>{h($t)&&e(Ae)});var V=g(B,2),H=o(V);let je;d(g(H,2),17,()=>h(an),e=>e.id,(e,t)=>{var n=Ze();let r;var i=o(n,!0);E(n),a(()=>{r=S(n,1,`cat-chip`,null,r,{active:h(W)===h(t).id}),T(i,h(t).label.zh)}),m(`click`,n,()=>p(W,h(W)===h(t).id?null:h(t).id,!0)),l(e,n)}),E(V),te(V,e=>p(X,e),()=>h(X));var Me=g(V,2),Pe=e=>{var t=Qe();m(`click`,t,()=>nn(`right`)),l(e,t)};t(Me,e=>{h(en)&&e(Pe)}),E(z),E(I),E(s);var Fe=g(s,2),Ie=e=>{var n=yt(),i=o(n);d(i,21,()=>h(ln),e=>e.name,(e,t)=>{let n=O(()=>on[h(t).trust]);var r=$e();let i;var s=o(r),c=o(s,!0);E(s);var u=g(s,2);let d;E(r),a(e=>{i=S(r,1,`nav-tpl-item`,null,i,{active:h(K)===h(t).name}),T(c,h(t).displayName),d=S(u,1,`nav-trust-dot`,null,d,e),se(u,`background:${h(n).color??``}`)},[()=>({installing:R.isInstalling(h(t).name)})]),m(`click`,r,()=>Cn(h(t).name)),l(e,r)}),E(i);var s=g(i,2),f=o(s),v=o(f),b=o(v),x=o(b,!0);E(b);var ee=g(b,2),ne=e=>{let t=O(()=>h(pn).icon);var n=et(),r=o(n);oe(r,()=>h(t),(e,t)=>{t(e,{size:14})});var i=g(r);E(n),a(()=>{S(n,1,`trust-badge ${h(pn).cls??``}`),se(n,h(pn).color?`color:${h(pn).color}`:``),T(i,` ${h(pn).label??``}`)}),l(e,n)};t(ee,e=>{h(pn)&&e(ne)});var w=g(ee,2),re=o(w),ie=e=>{var n=u(),r=_(n),i=e=>{var t=tt();ke(o(t),{size:13}),C(2),E(t),m(`click`,t,()=>_n(h(Q).name)),l(e,t)},a=O(()=>h($).has(h(Q).name)),s=e=>{var t=nt();Oe(o(t),{size:13}),C(2),E(t),m(`click`,t,()=>hn(h(Q).name)),l(e,t)},d=O(()=>mn(h(Q).name)),f=e=>{var t=rt();de(o(t),{size:13}),C(2),E(t),m(`click`,t,()=>xn(h(Q))),l(e,t)};t(r,e=>{h(a)?e(i):h(d)?e(s,1):c.installFn&&e(f,2)}),l(e,n)};t(re,e=>{c.mode===`desktop`&&e(ie)});var D=g(re,2),k=e=>{var t=it(),n=o(t);De(n,{size:13});var r=g(n,2),i=o(r,!0);E(r),E(t),a(e=>T(i,e),[()=>h(Qt)?h(Y)[h(Q).name].stars:Zt(h(Y)[h(Q).name].stars)]),m(`click`,t,()=>p(Qt,!h(Qt))),l(e,t)};t(D,e=>{h(Y)[h(Q).name]?.stars!=null&&e(k)});var A=g(D,2),j=e=>{var t=at(),n=o(t);de(n,{size:13});var r=g(n,2),i=o(r,!0);E(r),E(t),a(e=>T(i,e),[()=>h(Qt)?h(Y)[h(Q).name].downloads:Zt(h(Y)[h(Q).name].downloads)]),m(`click`,t,()=>p(Qt,!h(Qt))),l(e,t)};t(A,e=>{h(Y)[h(Q).name]?.downloads!=null&&e(j)}),E(w),E(v),E(f);var M=g(f,2),N=o(M,!0);E(M);var P=g(M,2),ue=e=>{var t=st();d(t,20,()=>h(Q).keywords,e=>e,(e,t)=>{var n=ot(),r=o(n,!0);E(n),a(()=>T(r,t)),l(e,n)}),E(t),l(e,t)};t(P,e=>{h(Q).keywords.length>0&&e(ue)});var he=g(P,2),F=o(he),ge=o(F);E(F);var I=g(F,4),ve=o(I,!0);E(I);var ye=g(I,4),L=o(ye,!0);E(ye),E(he);var be=g(he,2),Se=e=>{var n=u(),r=_(n),i=e=>{var t=ct(),n=o(t);E(t),a(e=>{se(t,`height:${h(Bt)*800/1200}px`),y(n,`src`,e),se(n,`transform:scale(${h(Bt)/1200})`)},[()=>c.previewUrl(h(Q).name)]),ae(t,`clientWidth`,e=>p(Bt,e)),l(e,t)};t(r,e=>{c.previewUrl&&e(i)}),l(e,n)},Ce=e=>{var t=lt();xe(o(t),{size:24}),C(2),E(t),l(e,t)};t(be,e=>{h(Q).trust===`official`||h(Q).trust===`verified`?e(Se):e(Ce,!1)});var we=g(be,2),z=e=>{var n=u(),i=_(n),a=e=>{var t=ut();pe(o(t),{size:16,class:`spin`}),C(2),E(t),l(e,t)},s=e=>{var t=dt(),n=g(o(t),2);r(o(n),()=>Te.sanitize(Dn(h(Rt)))),E(n),E(t),l(e,t)};t(i,e=>{h(zt)?e(a):h(Rt)&&e(s,1)}),l(e,n)};t(we,e=>{c.readmeUrl&&e(z)});var Ee=g(we,2),B=o(Ee),Ae=e=>{var t=ft();fe(g(o(t)),{size:12}),E(t),a(e=>y(t,`href`,e),[()=>Tn(h(Q))]),m(`click`,t,e=>{e.preventDefault(),wn(Tn(h(Q)))}),l(e,t)},V=O(()=>Tn(h(Q)));t(B,e=>{h(V)&&e(Ae)}),E(Ee);var H=g(Ee,2),je=o(H),Me=o(je),U=e=>{var n=u(),r=_(n),i=e=>{let t=O(()=>R.getProgress(h(Q).name)),n=O(()=>h(t)?.percent??0),r=O(()=>2*Math.PI*14),i=O(()=>h(r)*(1-h(n)/100));var s=pt(),c=o(s),u=g(o(c));y(u,`stroke-dasharray`,h(r)),E(c),C(2),E(s),a(e=>{y(s,`title`,e),y(u,`stroke-dashoffset`,h(i))},[()=>h(t)?`${vn(h(t).downloaded)} / ${vn(h(t).total)}`:`准备中...`]),l(e,s)},s=O(()=>R.isInstalling(h(Q).name)),c=e=>{var t=mt();me(o(t),{size:14}),C(),E(t),m(`click`,t,()=>xn(h(Q))),l(e,t)},d=O(()=>mn(h(Q).name)&&yn(h(Q).name,h(Q).version)),f=e=>{var t=ht();ke(o(t),{size:14}),C(),E(t),m(`click`,t,()=>_n(h(Q).name)),l(e,t)},p=O(()=>h($).has(h(Q).name)),v=e=>{var t=gt();de(o(t),{size:14}),C(),E(t),m(`click`,t,()=>xn(h(Q))),l(e,t)},b=O(()=>!mn(h(Q).name));t(r,e=>{h(s)?e(i):h(d)?e(c,1):h(p)?e(f,2):h(b)&&e(v,3)}),l(e,n)},W=e=>{var t=_t();de(o(t),{size:14}),C(),E(t),m(`click`,t,()=>{if(!_e(h(Q).name))return;let e=`presto://install/${h(Q).name}`;window.parent===window?window.location.href=e:window.parent.postMessage({type:`presto-open-template`,url:e},window.location.origin)}),l(e,t)};t(Me,e=>{c.mode===`desktop`&&c.installFn?e(U):c.mode===`web`&&e(W,1)}),E(je);var G=g(je,2),Ne=e=>{var t=vt();le(o(t),{size:14,style:`transform:rotate(90deg)`}),C(2),E(t),m(`click`,t,Yt),l(e,t)};t(G,e=>{c.mode===`desktop`&&h(qt)&&e(Ne)}),E(H),E(s),te(s,e=>p(Kt,e),()=>h(Kt)),E(n),a(()=>{T(x,h(Q).displayName),T(N,h(Q).description),T(ge,`v${h(Q).version??``}`),T(ve,h(Q).author),T(L,h(Q).license)}),ce(`scroll`,s,Jt),l(e,n)},Le=e=>{var r=u(),i=_(r),s=e=>{var t=bt(),n=o(t),r=o(n,!0);E(n),E(t),a(()=>T(r,h(U)?`没有匹配的结果`:`暂无可用内容`)),l(e,t)},f=e=>{var r=Ft(),i=_(r),s=e=>{var t=xt(),r=o(t),i=o(r);E(r);var s=g(r,2);E(t),a(()=>T(i,`已删除 ${h($).size??``} 个模板`)),m(`click`,s,gn),n(3,t,()=>Ce,()=>({y:-30})),l(e,t)};t(i,e=>{h($).size>0&&e(s)});var f=g(i,2);d(f,21,()=>h(dn),e=>e.name,(e,n)=>{let r=O(()=>on[h(n).trust]),i=O(()=>h(r).icon),s=O(()=>h($).has(h(n).name)),d=O(()=>mn(h(n).name));var f=At();let p;var v=o(f),y=o(v),b=e=>{var r=u(),i=_(r),a=e=>{var t=St();ke(o(t),{size:13}),E(t),m(`click`,t,e=>{e.stopPropagation(),_n(h(n).name)}),l(e,t)},c=e=>{var t=Ct();Oe(o(t),{size:13}),E(t),m(`click`,t,e=>{e.stopPropagation(),hn(h(n).name)}),l(e,t)},f=e=>{var t=wt();de(o(t),{size:13}),E(t),m(`click`,t,e=>{e.stopPropagation(),xn(h(n))}),l(e,t)};t(i,e=>{h(s)?e(a):h(d)?e(c,1):e(f,!1)}),l(e,r)};t(y,e=>{c.mode===`desktop`&&e(b)});var x=g(y,2),C=o(x),ee=o(C),te=g(ee),ne=e=>{l(e,Tt())};t(te,e=>{h(d)&&!h(s)&&e(ne)});var w=g(te,2),re=e=>{l(e,Et())};t(w,e=>{h(s)&&e(re)}),E(C);var ie=g(C,2),D=o(ie);oe(D,()=>h(i),(e,t)=>{t(e,{size:12})});var k=g(D);E(ie),E(x);var ae=g(x,2),A=o(ae,!0);E(ae);var j=g(ae,2),M=o(j),ce=o(M);E(M);var N=g(M,2),P=o(N,!0);E(N);var le=g(N,2),ue=e=>{var r=kt(),i=o(r),s=e=>{var t=Dt(),r=o(t);De(r,{size:10});var i=g(r);E(t),a(e=>T(i,` ${e??``}`),[()=>Zt(h(Y)[h(n).name].stars)]),l(e,t)};t(i,e=>{h(Y)[h(n).name]?.stars!=null&&e(s)});var c=g(i,2),u=e=>{var t=Ot(),r=o(t);de(r,{size:10});var i=g(r);E(t),a(e=>T(i,` ${e??``}`),[()=>Zt(h(Y)[h(n).name].downloads)]),l(e,t)};t(c,e=>{h(Y)[h(n).name]?.downloads!=null&&e(u)}),E(r),l(e,r)};t(le,e=>{(h(Y)[h(n).name]?.stars!=null||h(Y)[h(n).name]?.downloads!=null)&&e(ue)}),E(j),E(v),E(f),a(()=>{p=S(f,1,`card-item`,null,p,{"pending-delete":h(s)}),T(ee,`${h(n).displayName??``} `),S(ie,1,`card-trust ${h(r).cls??``}`),se(ie,h(r).color?`color:${h(r).color}`:``),T(k,` ${h(r).label??``}`),T(A,h(n).description),T(ce,`v${h(n).version??``}`),T(P,h(n).author)}),m(`click`,v,()=>Cn(h(n).name)),m(`keydown`,v,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),Cn(h(n).name))}),l(e,f)}),E(f),te(f,e=>p(Z,e),()=>h(Z));var v=g(f,2),y=e=>{var n=Pt(),r=o(n),i=o(r);E(r);var s=g(r,2),c=e=>{var n=Nt(),r=o(n),i=g(r,2);d(i,17,()=>Array.from({length:h(un)},(e,t)=>t+1),re,(e,n)=>{var r=u(),i=_(r),s=e=>{var t=jt();let r;var i=o(t,!0);E(t),a(()=>{r=S(t,1,`page-btn`,null,r,{active:h(q)===h(n)}),T(i,h(n))}),m(`click`,t,()=>p(q,h(n),!0)),l(e,t)},c=e=>{l(e,Mt())};t(i,e=>{h(n)===1||h(n)===h(un)||h(n)>=h(q)-3&&h(n)<=h(q)+3?e(s):(h(n)===h(q)-4||h(n)===h(q)+4)&&e(c,1)}),l(e,r)});var s=g(i,2);E(n),a(()=>{r.disabled=h(q)<=1,s.disabled=h(q)>=h(un)}),m(`click`,r,()=>ee(q,-1)),m(`click`,s,()=>ee(q)),l(e,n)};t(s,e=>{h(un)>1&&e(c)}),E(n),a(()=>T(i,`${h(ln).length??``} 项，第 ${h(q)??``}/${h(un)??``} 页`)),l(e,n)};t(v,e=>{c.mode!==`web`&&e(y)}),l(e,r)};t(i,e=>{h(ln).length===0?e(s):e(f,!1)}),l(e,r)};t(Fe,e=>{h(K)&&h(Q)?e(Ie):e(Le,!1)}),a(()=>{j=S(A,1,`sort-trigger`,null,j,{open:h(J)}),y(A,`aria-expanded`,h(J)),T(P,Gt[h(Ut)]),be=S(L,1,`trust-toggle installed-toggle`,null,be,{active:h(Ne)}),je=S(H,1,`cat-chip`,null,je,{active:!h(W)})}),ie(x,()=>h(U),e=>p(U,e)),m(`click`,A,()=>p(J,!h(J))),m(`click`,L,()=>p(Ne,!h(Ne))),m(`click`,H,()=>p(W,null)),l(e,i)};t(ve,e=>{h(z)&&!h(P)?e(ye):h(B)&&!h(P)?e(L,1):h(P)&&e(be,2)});var Ae=g(ve,2),V=e=>{je(e,{get message(){return h(Ht).message},get type(){return h(Ht).type},duration:3e3,get onRetry(){return h(Ht).onRetry}})};t(Ae,e=>{h(Ht)&&e(V)}),E(s),C(2),a(()=>f=S(s,1,`page`,null,f,{"web-mode":c.mode===`web`})),l(e,i)};t(An,e=>{Ae.isOnline?e(Mn,!1):e(jn)}),l(i,kn),w()}c([`click`,`keydown`]);export{K as t};