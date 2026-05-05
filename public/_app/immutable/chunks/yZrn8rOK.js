import{$ as e,A as t,B as n,C as r,D as i,E as a,G as o,I as s,J as c,L as l,M as u,N as d,O as f,Q as p,R as m,S as h,T as g,W as _,X as v,Y as y,Z as b,_ as x,a as S,ct as C,f as ee,g as te,it as w,j as T,k as E,lt as ne,m as re,n as D,o as O,p as ie,q as k,r as A,rt as j,s as M,st as N,tt as P,v as ae,y as F}from"./B4tPvYaQ.js";import{t as I}from"./DYOUYw3N.js";import"./ibwe1TAv.js";import{t as L}from"./BYfga2_E.js";import{t as oe}from"./BxpBuimP.js";import{t as se}from"./CjbFpqee.js";import{t as ce}from"./BltUJPGk.js";import{t as le}from"./Du4Nbj_j.js";import{t as ue}from"./DyMNLXaT.js";import{t as de}from"./CTq4FNcU.js";import{t as fe}from"./Cje5llvx.js";import{a as pe,i as me,n as R,r as he,t as ge}from"./BHZBXAiD.js";import{t as _e}from"./C2mbzJWJ.js";import{t as ve}from"./CshUVf9E2.js";import{i as ye,n as be,t as xe}from"./C0K3rEkZ2.js";import{t as z}from"./DCUfdl0l2.js";import"./CXA6UQVD2.js";import{t as Se}from"./BPG94IUu2.js";function Ce(e,t){let n=S(t,[`children`,`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`m16 16 2 2 4-4`}],[`path`,{d:`M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14`}],[`path`,{d:`m7.5 4.27 9 5.15`}],[`polyline`,{points:`3.29 7 12 12 20.71 7`}],[`line`,{x1:`12`,x2:`12`,y1:`22`,y2:`12`}]];L(e,M({name:`package-check`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=u();g(c(r),t,`default`,{},null),T(e,r)},$$slots:{default:!0}}))}function we(e,t){let n=S(t,[`children`,`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`}]];L(e,M({name:`star`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=u();g(c(r),t,`default`,{},null),T(e,r)},$$slots:{default:!0}}))}function Te(e,t){let n=S(t,[`children`,`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M10 11v6`}],[`path`,{d:`M14 11v6`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`}],[`path`,{d:`M3 6h18`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`}]];L(e,M({name:`trash-2`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=u();g(c(r),t,`default`,{},null),T(e,r)},$$slots:{default:!0}}))}function Ee(e,t){let n=S(t,[`children`,`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M9 14 4 9l5-5`}],[`path`,{d:`M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11`}]];L(e,M({name:`undo-2`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=u();g(c(r),t,`default`,{},null),T(e,r)},$$slots:{default:!0}}))}var B=v({isOnline:typeof navigator<`u`?navigator.onLine:!0}),V={get isOnline(){return B.isOnline},get lastOnlineTime(){return B.lastOnlineTime},init(){typeof window>`u`||(console.log(`[network] initializing, current status:`,navigator.onLine),B.isOnline=navigator.onLine,window.addEventListener(`online`,()=>{console.log(`[network] online event received`),B.isOnline=!0,B.lastOnlineTime=new Date}),window.addEventListener(`offline`,()=>{console.log(`[network] offline event received`),B.isOnline=!1}))},refresh(){typeof navigator<`u`&&(B.isOnline=navigator.onLine)}};typeof window<`u`&&(console.log(`[network] auto-initializing`),V.init());var De=d(`<button class="retry-btn svelte-1cpok13">重试</button>`),Oe=d(`<div><span class="message svelte-1cpok13"> </span> <!></div>`);function ke(e,r){w(r,!0);let i=O(r,`duration`,3,3e3),a=p(!0);o(()=>{let e=setTimeout(()=>{b(a,!1)},i());return()=>clearTimeout(e)});var s=Oe();let c;var u=k(s),d=k(u,!0);C(u);var f=y(u,2),m=e=>{var t=De();l(`click`,t,()=>r.onRetry()),T(e,t)};E(f,e=>{r.onRetry&&e(m)}),C(s),_(()=>{c=F(s,1,`toast ${r.type??``}`,`svelte-1cpok13`,c,{visible:n(a)}),t(d,r.message)}),T(e,s),j()}s([`click`]);var H=d(`<div class="loading svelte-h81f8c">加载中...</div>`),U=d(`<div class="empty svelte-h81f8c"><p>未安装任何模板</p> <p class="hint svelte-h81f8c">请连接网络后下载模板</p></div>`),W=d(`<li class="template-item svelte-h81f8c"><span class="name svelte-h81f8c"> </span></li>`),G=d(`<ul class="template-list svelte-h81f8c"></ul>`),Ae=d(`<div class="offline-container svelte-h81f8c"><div class="offline-header svelte-h81f8c"><svg class="icon svelte-h81f8c" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg> <h2 class="svelte-h81f8c">离线模式</h2> <p class="subtitle svelte-h81f8c">无网络连接,以下模板可用:</p></div> <!></div>`);function je(e,r){w(r,!0);let a=p(v([])),o=p(!0);A(async()=>{try{await z.load(),b(a,z.templates.map(e=>e.name),!0)}catch(e){console.error(`[offline] failed to load templates:`,e)}finally{b(o,!1)}});var s=Ae(),c=y(k(s),2),l=e=>{T(e,H())},u=e=>{T(e,U())},d=e=>{var r=G();i(r,20,()=>n(a),e=>e,(e,n)=>{var r=W(),i=k(r),a=k(i,!0);C(i),C(r),_(()=>t(a,n)),T(e,r)}),C(r),T(e,r)};E(c,e=>{n(o)?e(l):n(a).length===0?e(u,1):e(d,!1)}),C(s),T(e,s),j()}var Me=d(`<div class="drag-region" style="--wails-draggable:drag"></div>`),Ne=d(`<button class="btn-back" aria-label="返回设置"><!></button>`),Pe=d(`<div><!> <div class="page-header"><!> <nav class="breadcrumb"><h2> </h2></nav></div> <!></div>`),Fe=d(`<div class="drag-region" style="--wails-draggable:drag"></div>`),Ie=d(`<button class="btn-back" aria-label="返回设置"><!></button>`),Le=d(`<button class="breadcrumb-link"> </button> <span class="breadcrumb-sep">›</span> <span class="breadcrumb-current"> </span>`,1),Re=d(`<h2> </h2>`),ze=d(`<button class="btn-refresh" aria-label="刷新"><!></button>`),Be=d(`<div class="store-empty"><!> <p>加载中…</p></div>`),Ve=d(`<div class="store-empty"><p class="error-text"> </p> <button class="btn-retry">重试</button></div>`),He=d(`<button class="search-clear"><!></button>`),Ue=d(`<button role="option"> </button>`),We=d(`<div class="sort-dropdown" role="listbox"></div>`),Ge=d(`<button><span class="trust-dot"></span> <!> <span class="trust-label"> </span></button>`),Ke=d(`<div class="trust-toggles"></div> <div class="controls-sep"></div>`,1),qe=d(`<button class="scroll-arrow scroll-arrow-left" aria-label="向左滚动">‹</button>`),Je=d(`<button> </button>`),Ye=d(`<button class="scroll-arrow scroll-arrow-right" aria-label="向右滚动">›</button>`),Xe=d(`<button><span class="nav-tpl-name"> </span> <span></span></button>`),Ze=d(`<span><!> </span>`),Qe=d(`<button class="btn-detail-action btn-detail-undo"><!> <span>撤销删除</span></button>`),$e=d(`<button class="btn-detail-action btn-detail-uninstall"><!> <span>卸载</span></button>`),et=d(`<button class="btn-detail-action btn-detail-install"><!> <span>安装</span></button>`),tt=d(`<button class="stat-item" title="Stars"><!> <span> </span></button>`),nt=d(`<button class="stat-item" title="下载量"><!> <span> </span></button>`),rt=d(`<span class="keyword-chip"> </span>`),it=d(`<div class="detail-keywords"></div>`),at=d(`<div class="detail-preview"><iframe sandbox="allow-scripts allow-same-origin" loading="lazy" title="预览"></iframe></div>`),ot=d(`<div class="detail-preview-placeholder"><!> <span>社区模板暂不提供预览</span></div>`),st=d(`<div class="readme-loading"><!> <span>加载 README…</span></div>`),ct=d(`<div class="detail-readme"><h4>README</h4> <div class="readme-body"><!></div></div>`),lt=d(`<a class="repo-link">查看源码 <!></a>`),ut=d(`<div class="progress-ring-wrapper"><svg class="progress-ring" width="36" height="36" viewBox="0 0 36 36"><circle class="progress-ring-track" cx="18" cy="18" r="14"></circle><circle class="progress-ring-fill" cx="18" cy="18" r="14"></circle></svg> <span class="progress-ring-stop">■</span></div>`),dt=d(`<button class="btn-install"><!><span>更新</span></button>`),ft=d(`<button class="btn-undo-lg"><!><span>撤销删除</span></button>`),pt=d(`<button class="btn-install"><!><span>安装</span></button>`),mt=d(`<button class="btn-install"><!><span>在 Presto 中打开</span></button>`),ht=d(`<button class="btn-scroll-top" aria-label="回到顶部"><!> <span>回到顶部</span></button>`),gt=d(`<div class="master-detail"><nav class="store-nav"></nav> <div class="store-detail"><div class="detail-header"><div class="detail-title-row"><h3> </h3> <!> <div class="detail-stats-actions"><!> <!> <!></div></div></div> <p class="detail-desc"> </p> <!> <div class="detail-meta"><span> </span> <span class="meta-sep">·</span> <span> </span> <span class="meta-sep">·</span> <span> </span></div> <!> <!> <div class="detail-repo"><!></div> <div class="detail-actions"><div class="actions-left"><!></div> <!></div></div></div>`),_t=d(`<div class="store-empty"><p> </p></div>`),vt=d(`<div class="undo-bar"><span> </span> <button class="undo-btn">撤销</button></div>`),yt=d(`<button class="card-action-btn card-undo-btn" title="撤销删除"><!></button>`),bt=d(`<button class="card-action-btn card-uninstall-btn" title="卸载"><!></button>`),xt=d(`<button class="card-action-btn card-install-btn" title="安装"><!></button>`),St=d(`<span class="card-installed-badge">已安装</span>`),Ct=d(`<span class="card-pending-badge">待删除</span>`),wt=d(`<span class="card-stat"><!> </span>`),Tt=d(`<span class="card-stat"><!> </span>`),Et=d(`<span class="card-stats"><!> <!></span>`),Dt=d(`<div><div class="tpl-card" role="button" tabindex="0"><!> <div class="card-header"><span class="card-name"> <!> <!></span> <span><!> </span></div> <p class="card-desc"> </p> <div class="card-footer"><span class="card-version"> </span> <span class="card-author"> </span> <!></div></div></div>`),Ot=d(`<button> </button>`),kt=d(`<span class="page-ellipsis">…</span>`),At=d(`<div class="page-controls"><button class="page-btn">&lsaquo;</button> <!> <button class="page-btn">&rsaquo;</button></div>`),jt=d(`<div class="pagination"><span class="page-info"> </span> <!></div>`),Mt=d(`<!> <div class="card-grid"></div> <!>`,1),Nt=d(`<div class="filter-toolbar"><div class="search-sort-row"><div class="search-box"><span class="search-icon"><!></span> <input type="text" class="search-input" placeholder="搜索名称、描述或标签…"/> <!></div> <div class="sort-wrapper"><button aria-haspopup="listbox"><span class="sort-label"> </span> <!></button> <!></div></div> <div class="controls-row"><!> <button style="--toggle-color:#22c55e" title="已安装"><span class="trust-dot"></span> <!> <span class="trust-label">已安装</span></button> <div class="controls-sep"></div> <div class="category-bar"><!> <div class="category-scroll"><button>全部</button> <!></div> <!></div></div></div> <!>`,1),Pt=d(`<div><!> <div class="page-header"><!> <nav class="breadcrumb"><!></nav> <!></div> <!> <!></div> <style>.page {
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
  }</style>`,1);function K(s,d){w(d,!0);let g=O(d,`installedVersions`,19,()=>new Map),S=O(d,`communityEnabled`,3,!0),M=O(d,`initialSelectedId`,3,null),L=p(null),z=p(!1),B=p(null);function De(){return d.mode,d.registryUrl}async function Oe(e=!1){if(!(n(L)&&!e)){b(z,!0),b(B,null);try{let e=await fetch(De());if(!e.ok)throw Error(`${e.status}`);b(L,await e.json(),!0)}catch(e){b(B,e instanceof Error?e.message:String(e),!0)}finally{b(z,!1)}}}async function H(){return Oe(!0)}let U=p(``),W=p(null),G=p(null),Ae=p(!1),K=p(null);o(()=>{M()!==null&&b(K,M())});let Ft=p(``),It=p(!1),Lt=p(0),q=p(1),Rt=p(24),zt=p(null),Bt=p(`latest`),J=p(!1),Vt=p(void 0),Ht={latest:`最新发布`,stars:`最多星标`,downloads:`最多下载`},Y=p(v({})),Ut=p(null),Wt=p(!1);function Gt(){n(Ut)&&b(Wt,n(Ut).scrollTop>300)}function Kt(){n(Ut)?.scrollTo({top:0,behavior:`smooth`})}async function qt(){if(d.statsUrl)try{let e=await fetch(d.statsUrl);e.ok&&b(Y,await e.json(),!0)}catch{}}function Jt(e){return e==null?``:e>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,``)+`k`:String(e)}let Yt=p(!1),X=p(null),Xt=p(!1),Zt=p(!1);function Qt(){n(X)&&(b(Xt,n(X).scrollLeft>4),b(Zt,n(X).scrollLeft<n(X).scrollWidth-n(X).clientWidth-4))}function $t(e){n(X)?.scrollBy({left:e===`left`?-200:200,behavior:`smooth`})}o(()=>{if(!n(X))return;Qt(),n(X).addEventListener(`scroll`,Qt,{passive:!0});let e=new ResizeObserver(Qt);return e.observe(n(X)),()=>{n(X)?.removeEventListener(`scroll`,Qt),e.disconnect()}});let Z=p(null);function en(){if(d.mode===`web`||!n(Z))return;let e=getComputedStyle(n(Z)),t=parseFloat(e.gap)||12,r=200+t,i=Math.max(1,Math.floor((n(Z).clientWidth+t)/r)),a=n(Z).querySelector(`.tpl-card`),o=(a?a.offsetHeight:120)+t,s=i*Math.max(1,Math.round((n(Z).clientHeight+t)/o));s>0&&s!==n(Rt)&&b(Rt,s)}o(()=>{if(!n(Z))return;en();let e=new ResizeObserver(en);return e.observe(n(Z)),()=>e.disconnect()}),o(()=>{d.mode===`web`&&n(L)?b(Rt,n(L).templates.length||100,!0):n(L)&&n(Z)&&requestAnimationFrame(()=>en())});let tn=P(()=>{if(!n(L))return[];if(n(L).categories?.length)return n(L).categories;let e=new Set;return n(L).templates.map(e=>e.category).filter(t=>!!t&&!e.has(t)&&(e.add(t),!0)).map(e=>({id:e,label:{zh:e,en:e}}))}),nn={official:{label:`官方`,cls:`trust-official`,color:`#3b82f6`,icon:pe},verified:{label:`已验证`,cls:`trust-verified`,color:`#22c55e`,icon:_e},community:{label:`社区`,cls:`trust-community`,color:``,icon:he},unverified:{label:`未验证`,cls:`trust-unverified`,color:`#e0af68`,icon:me}},rn=P(()=>n(L)?new ge(n(L).templates,{keys:[{name:`displayName`,weight:2},{name:`name`,weight:1.5},{name:`description`,weight:1},{name:`author`,weight:1},{name:`category`,weight:.8},{name:`keywords`,weight:1.2}],threshold:.4,ignoreLocation:!0}):null),an=P(()=>{if(!n(L))return[];let e=n(U).trim();return(e&&n(rn)?n(rn).search(e).map(e=>e.item):n(L).templates).filter(e=>{let t=!n(W)||e.category===n(W),r=!n(G)||e.trust===n(G),i=S()||e.trust===`official`||e.trust===`verified`,a=!n(Ae)||dn(e.name);return t&&r&&i&&a})}),on=P(()=>{let e=[...n(an)];switch(n(Bt)){case`stars`:return e.sort((e,t)=>(n(Y)[t.name]?.stars??0)-(n(Y)[e.name]?.stars??0));case`downloads`:return e.sort((e,t)=>(n(Y)[t.name]?.downloads??0)-(n(Y)[e.name]?.downloads??0));default:return e.sort((e,t)=>{let n=e.publishedAt?new Date(e.publishedAt).getTime():0;return(t.publishedAt?new Date(t.publishedAt).getTime():0)-n})}});o(()=>{n(U),n(W),n(G),n(Ae),n(Rt),n(Bt),b(q,1)});let sn=P(()=>Math.max(1,Math.ceil(n(on).length/n(Rt)))),cn=P(()=>n(on).slice((n(q)-1)*n(Rt),n(q)*n(Rt))),ln=P(()=>{if(!n(L))return new Set;let e=new Set;for(let t of n(L).templates)!S()&&t.trust!==`official`&&t.trust!==`verified`||e.add(t.trust);return e}),Q=P(()=>n(L)?.templates.find(e=>e.name===n(K))??null),un=P(()=>n(Q)?nn[n(Q).trust]:null),$=p(v(new Set));function dn(e){return g().has(e)&&!n($).has(e)}function fn(e){n($).add(e),b($,new Set(n($)),!0)}function pn(){if(n($).size===0)return;let e=[...n($)],t=e[e.length-1];n($).delete(t),b($,new Set(n($)),!0)}function mn(e){n($).delete(e),b($,new Set(n($)),!0)}D(async()=>{if(n($).size===0||!d.uninstallFn)return;let e=[...n($)];for(let t of e)try{await d.uninstallFn(t)}catch{}});function hn(e){return e<1024?e+` B`:e<1024*1024?(e/1024).toFixed(1)+` KB`:(e/(1024*1024)).toFixed(1)+` MB`}function gn(e,t){let n=g().get(e);return n?n!==t:!1}let _n={network_error:`网络连接失败，请检查网络后重试`,not_found:`模板不存在`,checksum_mismatch:`文件校验失败，可能已损坏，请重试`,server_error:`服务器暂时不可用，请稍后重试`};async function vn(e){if(!(!d.installFn||xe.isInstalling(e.name))){xe.setInstalling(e.name);try{await d.installFn(e),xe.setInstalled(e.name),d.onInstallSuccess?.(e.name)}catch(t){let n=`安装失败，请重试`;if(t instanceof Error)try{let e=JSON.parse(t.message);e.error_type&&_n[e.error_type]&&(n=_n[e.error_type],e.error_type)}catch{}b(zt,{message:n,type:`error`,onRetry:()=>{b(zt,null),vn(e)}},!0),setTimeout(()=>{xe.reset(e.name)},3500),console.error(`[StoreView] install failed:`,t)}}}async function yn(e){if(d.readmeUrl){b(It,!0),b(Ft,``);try{let t=(d.mode,d.readmeUrl(e)),n=await fetch(t);n.ok&&b(Ft,await n.text(),!0)}catch{}finally{b(It,!1)}}}function bn(e){if(n(K)===e){b(K,null);return}b(K,e,!0),yn(e)}function xn(e){d.mode===`desktop`&&window.runtime?.BrowserOpenURL?window.runtime.BrowserOpenURL(e):window.open(e,`_blank`,`noopener,noreferrer`)}function Sn(e){return e.repository?e.repository:e.repo?`https://github.com/${e.repo}`:``}let Cn=new R.Renderer;Cn.link=({text:e})=>e,Cn.image=({text:e})=>e?`[${e}]`:``,R.setOptions({gfm:!0,breaks:!0,renderer:Cn});function wn(e){return R.parse(e,{async:!1})}function Tn(e){n(J)&&n(Vt)&&!n(Vt).contains(e.target)&&b(J,!1)}A(()=>(Oe(),qt(),document.addEventListener(`pointerdown`,Tn,!0),()=>document.removeEventListener(`pointerdown`,Tn,!0)));var En=u(),Dn=c(En),On=e=>{var n=Pe();let r;var i=k(n),a=e=>{T(e,Me())};E(i,e=>{d.mode===`desktop`&&e(a)});var o=y(i,2),s=k(o),c=e=>{var t=Ne();oe(k(t),{size:16}),C(t),l(`click`,t,()=>I(d.backRoute)),T(e,t)};E(s,e=>{d.mode===`desktop`&&d.backRoute&&e(c)});var u=y(s,2),f=k(u),p=k(f,!0);C(f),C(u),C(o),je(y(o,2),{}),C(n),_(()=>{r=F(n,1,`page`,null,r,{"web-mode":d.mode===`web`}),t(p,d.title)}),T(e,n)},kn=o=>{var s=Pt(),p=c(s);let g;var v=k(p),S=e=>{T(e,Fe())};E(v,e=>{d.mode===`desktop`&&e(S)});var w=y(v,2),D=k(w),O=e=>{var t=Ie();oe(k(t),{size:16}),C(t),l(`click`,t,()=>I(d.backRoute)),T(e,t)};E(D,e=>{d.mode===`desktop`&&d.backRoute&&e(O)});var A=y(D,2),j=k(A),M=e=>{var r=Le(),i=c(r),a=k(i,!0);C(i);var o=y(i,4),s=k(o,!0);C(o),_(()=>{t(a,d.title),t(s,n(Q).displayName)}),l(`click`,i,()=>b(K,null)),T(e,r)},pe=e=>{var n=Re(),r=k(n,!0);C(n),_(()=>t(r,d.title)),T(e,n)};E(j,e=>{n(K)&&n(Q)?e(M):e(pe,!1)}),C(A);var me=y(A,2),R=e=>{var t=ze(),r=k(t);{let e=P(()=>n(z)?`spin`:``);de(r,{size:14,get class(){return n(e)}})}C(t),_(()=>t.disabled=n(z)),l(`click`,t,()=>H()),T(e,t)};E(me,e=>{d.mode===`desktop`&&e(R)}),C(w);var he=y(w,2),ge=e=>{var t=Be();ue(k(t),{size:24,class:`spin`}),N(2),C(t),T(e,t)},V=e=>{var r=Ve(),i=k(r),a=k(i);C(i);var o=y(i,2);C(r),_(()=>t(a,`加载失败：${n(B)??``}`)),l(`click`,o,()=>H()),T(e,r)},De=o=>{var s=Nt(),p=c(s),g=k(p),v=k(g),S=k(v);fe(k(S),{size:14}),C(S);var w=y(S,2);te(w);var D=y(w,2),O=e=>{var t=He();ve(k(t),{size:12}),C(t),l(`click`,t,()=>b(U,``)),T(e,t)};E(D,e=>{n(U)&&e(O)}),C(v);var A=y(v,2),j=k(A);let M;var I=k(j),L=k(I,!0);C(I),se(y(I,2),{size:12}),C(j);var pe=y(j,2),me=e=>{var r=We();i(r,20,()=>[`latest`,`stars`,`downloads`],e=>e,(e,r)=>{var i=Ue();let a;var o=k(i,!0);C(i),_(()=>{a=F(i,1,`sort-option`,null,a,{selected:n(Bt)===r}),x(i,`aria-selected`,n(Bt)===r),t(o,Ht[r])}),l(`click`,i,()=>{b(Bt,r,!0),b(J,!1)}),T(e,i)}),C(r),h(3,r,()=>ye,()=>({y:-4,duration:150,easing:be})),T(e,r)};E(pe,e=>{n(J)&&e(me)}),C(A),ee(A,e=>b(Vt,e),()=>n(Vt)),C(g);var R=y(g,2),he=k(R),ge=e=>{var a=Ke(),o=c(a);i(o,21,()=>Object.entries(nn),([e,t])=>e,(e,i)=>{var a=P(()=>ne(n(i),2));let o=()=>n(a)[0],s=()=>n(a)[1];var d=u(),f=c(d),p=e=>{let i=P(()=>s().icon);var a=Ge();let c;var u=y(k(a),2);r(u,()=>n(i),(e,t)=>{t(e,{size:13})});var d=y(u,2),f=k(d,!0);C(d),C(a),_(()=>{c=F(a,1,`trust-toggle`,null,c,{active:n(G)===o()}),ae(a,`--toggle-color:${(s().color||`var(--color-muted)`)??``}`),x(a,`title`,s().label),t(f,s().label)}),l(`click`,a,()=>b(G,n(G)===o()?null:o(),!0)),T(e,a)},m=P(()=>n(ln).has(o()));E(f,e=>{n(m)&&e(p)}),T(e,d)}),C(o),N(2),T(e,a)};E(he,e=>{n(ln).size>1&&e(ge)});var z=y(he,2);let B;Ce(y(k(z),2),{size:13}),N(2),C(z);var V=y(z,4),De=k(V),Oe=e=>{var t=qe();l(`click`,t,()=>$t(`left`)),T(e,t)};E(De,e=>{n(Xt)&&e(Oe)});var ke=y(De,2),H=k(ke);let je;i(y(H,2),17,()=>n(tn),e=>e.id,(e,r)=>{var i=Je();let a;var o=k(i,!0);C(i),_(()=>{a=F(i,1,`cat-chip`,null,a,{active:n(W)===n(r).id}),t(o,n(r).label.zh)}),l(`click`,i,()=>b(W,n(W)===n(r).id?null:n(r).id,!0)),T(e,i)}),C(ke),ee(ke,e=>b(X,e),()=>n(X));var Me=y(ke,2),Ne=e=>{var t=Ye();l(`click`,t,()=>$t(`right`)),T(e,t)};E(Me,e=>{n(Zt)&&e(Ne)}),C(V),C(R),C(p);var Pe=y(p,2),Fe=e=>{var o=gt(),s=k(o);i(s,21,()=>n(on),e=>e.name,(e,r)=>{let i=P(()=>nn[n(r).trust]);var a=Xe();let o;var s=k(a),c=k(s,!0);C(s);var u=y(s,2);let d;C(a),_(e=>{o=F(a,1,`nav-tpl-item`,null,o,{active:n(K)===n(r).name}),t(c,n(r).displayName),d=F(u,1,`nav-trust-dot`,null,d,e),ae(u,`background:${n(i).color??``}`)},[()=>({installing:xe.isInstalling(n(r).name)})]),l(`click`,a,()=>bn(n(r).name)),T(e,a)}),C(s);var f=y(s,2),p=k(f),h=k(p),g=k(h),v=k(g,!0);C(g);var S=y(g,2),te=e=>{let i=P(()=>n(un).icon);var a=Ze(),o=k(a);r(o,()=>n(i),(e,t)=>{t(e,{size:14})});var s=y(o);C(a),_(()=>{F(a,1,`trust-badge ${n(un).cls??``}`),ae(a,n(un).color?`color:${n(un).color}`:``),t(s,` ${n(un).label??``}`)}),T(e,a)};E(S,e=>{n(un)&&e(te)});var w=y(S,2),ne=k(w),re=e=>{var t=u(),r=c(t),i=e=>{var t=Qe();Ee(k(t),{size:13}),N(2),C(t),l(`click`,t,()=>mn(n(Q).name)),T(e,t)},a=P(()=>n($).has(n(Q).name)),o=e=>{var t=$e();Te(k(t),{size:13}),N(2),C(t),l(`click`,t,()=>fn(n(Q).name)),T(e,t)},s=P(()=>dn(n(Q).name)),f=e=>{var t=et();ce(k(t),{size:13}),N(2),C(t),l(`click`,t,()=>vn(n(Q))),T(e,t)};E(r,e=>{n(a)?e(i):n(s)?e(o,1):d.installFn&&e(f,2)}),T(e,t)};E(ne,e=>{d.mode===`desktop`&&e(re)});var D=y(ne,2),O=e=>{var r=tt(),i=k(r);we(i,{size:13});var a=y(i,2),o=k(a,!0);C(a),C(r),_(e=>t(o,e),[()=>n(Yt)?n(Y)[n(Q).name].stars:Jt(n(Y)[n(Q).name].stars)]),l(`click`,r,()=>b(Yt,!n(Yt))),T(e,r)};E(D,e=>{n(Y)[n(Q).name]?.stars!=null&&e(O)});var A=y(D,2),j=e=>{var r=nt(),i=k(r);ce(i,{size:13});var a=y(i,2),o=k(a,!0);C(a),C(r),_(e=>t(o,e),[()=>n(Yt)?n(Y)[n(Q).name].downloads:Jt(n(Y)[n(Q).name].downloads)]),l(`click`,r,()=>b(Yt,!n(Yt))),T(e,r)};E(A,e=>{n(Y)[n(Q).name]?.downloads!=null&&e(j)}),C(w),C(h),C(p);var M=y(p,2),I=k(M,!0);C(M);var L=y(M,2),se=e=>{var r=it();i(r,20,()=>n(Q).keywords,e=>e,(e,n)=>{var r=rt(),i=k(r,!0);C(r),_(()=>t(i,n)),T(e,r)}),C(r),T(e,r)};E(L,e=>{n(Q).keywords.length>0&&e(se)});var fe=y(L,2),pe=k(fe),me=k(pe);C(pe);var R=y(pe,4),he=k(R,!0);C(R);var ge=y(R,4),ve=k(ge,!0);C(ge),C(fe);var ye=y(fe,2),be=e=>{var t=u(),r=c(t),i=e=>{var t=at(),r=k(t);C(t),_(e=>{ae(t,`height:${n(Lt)*800/1200}px`),x(r,`src`,e),ae(r,`transform:scale(${n(Lt)/1200})`)},[()=>d.previewUrl(n(Q).name)]),ie(t,`clientWidth`,e=>b(Lt,e)),T(e,t)};E(r,e=>{d.previewUrl&&e(i)}),T(e,t)},z=e=>{var t=ot();_e(k(t),{size:24}),N(2),C(t),T(e,t)};E(ye,e=>{n(Q).trust===`official`||n(Q).trust===`verified`?e(be):e(z,!1)});var Ce=y(ye,2),B=e=>{var t=u(),r=c(t),i=e=>{var t=st();ue(k(t),{size:16,class:`spin`}),N(2),C(t),T(e,t)},o=e=>{var t=ct(),r=y(k(t),2);a(k(r),()=>Se.sanitize(wn(n(Ft)))),C(r),C(t),T(e,t)};E(r,e=>{n(It)?e(i):n(Ft)&&e(o,1)}),T(e,t)};E(Ce,e=>{d.readmeUrl&&e(B)});var V=y(Ce,2),De=k(V),Oe=e=>{var t=lt();le(y(k(t)),{size:12}),C(t),_(e=>x(t,`href`,e),[()=>Sn(n(Q))]),l(`click`,t,e=>{e.preventDefault(),xn(Sn(n(Q)))}),T(e,t)},ke=P(()=>Sn(n(Q)));E(De,e=>{n(ke)&&e(Oe)}),C(V);var H=y(V,2),U=k(H),W=k(U),G=e=>{var t=u(),r=c(t),i=e=>{let t=P(()=>xe.getProgress(n(Q).name)),r=P(()=>n(t)?.percent??0),i=P(()=>2*Math.PI*14),a=P(()=>n(i)*(1-n(r)/100));var o=ut(),s=k(o),c=y(k(s));x(c,`stroke-dasharray`,n(i)),C(s),N(2),C(o),_(e=>{x(o,`title`,e),x(c,`stroke-dashoffset`,n(a))},[()=>n(t)?`${hn(n(t).downloaded)} / ${hn(n(t).total)}`:`准备中...`]),T(e,o)},a=P(()=>xe.isInstalling(n(Q).name)),o=e=>{var t=dt();de(k(t),{size:14}),N(),C(t),l(`click`,t,()=>vn(n(Q))),T(e,t)},s=P(()=>dn(n(Q).name)&&gn(n(Q).name,n(Q).version)),d=e=>{var t=ft();Ee(k(t),{size:14}),N(),C(t),l(`click`,t,()=>mn(n(Q).name)),T(e,t)},f=P(()=>n($).has(n(Q).name)),p=e=>{var t=pt();ce(k(t),{size:14}),N(),C(t),l(`click`,t,()=>vn(n(Q))),T(e,t)},m=P(()=>!dn(n(Q).name));E(r,e=>{n(a)?e(i):n(s)?e(o,1):n(f)?e(d,2):n(m)&&e(p,3)}),T(e,t)},Ae=e=>{var t=mt();ce(k(t),{size:14}),N(),C(t),l(`click`,t,()=>{let e=`presto://install/${n(Q).name}`;window.parent===window?window.location.href=e:window.parent.postMessage({type:`presto-open-template`,url:e},`*`)}),T(e,t)};E(W,e=>{d.mode===`desktop`&&d.installFn?e(G):d.mode===`web`&&e(Ae,1)}),C(U);var je=y(U,2),Me=e=>{var t=ht();oe(k(t),{size:14,style:`transform:rotate(90deg)`}),N(2),C(t),l(`click`,t,Kt),T(e,t)};E(je,e=>{d.mode===`desktop`&&n(Wt)&&e(Me)}),C(H),C(f),ee(f,e=>b(Ut,e),()=>n(Ut)),C(o),_(()=>{t(v,n(Q).displayName),t(I,n(Q).description),t(me,`v${n(Q).version??``}`),t(he,n(Q).author),t(ve,n(Q).license)}),m(`scroll`,f,Gt),T(e,o)},Ie=a=>{var o=u(),s=c(o),p=e=>{var r=_t(),i=k(r),a=k(i,!0);C(i),C(r),_(()=>t(a,n(U)?`没有匹配的结果`:`暂无可用内容`)),T(e,r)},m=a=>{var o=Mt(),s=c(o),p=e=>{var r=vt(),i=k(r),a=k(i);C(i);var o=y(i,2);C(r),_(()=>t(a,`已删除 ${n($).size??``} 个模板`)),l(`click`,o,pn),h(3,r,()=>ye,()=>({y:-30})),T(e,r)};E(s,e=>{n($).size>0&&e(p)});var m=y(s,2);i(m,21,()=>n(cn),e=>e.name,(e,i)=>{let a=P(()=>nn[n(i).trust]),o=P(()=>n(a).icon),s=P(()=>n($).has(n(i).name)),f=P(()=>dn(n(i).name));var p=Dt();let m;var h=k(p),g=k(h),v=e=>{var t=u(),r=c(t),a=e=>{var t=yt();Ee(k(t),{size:13}),C(t),l(`click`,t,e=>{e.stopPropagation(),mn(n(i).name)}),T(e,t)},o=e=>{var t=bt();Te(k(t),{size:13}),C(t),l(`click`,t,e=>{e.stopPropagation(),fn(n(i).name)}),T(e,t)},d=e=>{var t=xt();ce(k(t),{size:13}),C(t),l(`click`,t,e=>{e.stopPropagation(),vn(n(i))}),T(e,t)};E(r,e=>{n(s)?e(a):n(f)?e(o,1):e(d,!1)}),T(e,t)};E(g,e=>{d.mode===`desktop`&&e(v)});var b=y(g,2),x=k(b),S=k(x),ee=y(S),te=e=>{T(e,St())};E(ee,e=>{n(f)&&!n(s)&&e(te)});var w=y(ee,2),ne=e=>{T(e,Ct())};E(w,e=>{n(s)&&e(ne)}),C(x);var re=y(x,2),D=k(re);r(D,()=>n(o),(e,t)=>{t(e,{size:12})});var O=y(D);C(re),C(b);var ie=y(b,2),A=k(ie,!0);C(ie);var j=y(ie,2),M=k(j),N=k(M);C(M);var I=y(M,2),L=k(I,!0);C(I);var oe=y(I,2),se=e=>{var r=Et(),a=k(r),o=e=>{var r=wt(),a=k(r);we(a,{size:10});var o=y(a);C(r),_(e=>t(o,` ${e??``}`),[()=>Jt(n(Y)[n(i).name].stars)]),T(e,r)};E(a,e=>{n(Y)[n(i).name]?.stars!=null&&e(o)});var s=y(a,2),c=e=>{var r=Tt(),a=k(r);ce(a,{size:10});var o=y(a);C(r),_(e=>t(o,` ${e??``}`),[()=>Jt(n(Y)[n(i).name].downloads)]),T(e,r)};E(s,e=>{n(Y)[n(i).name]?.downloads!=null&&e(c)}),C(r),T(e,r)};E(oe,e=>{(n(Y)[n(i).name]?.stars!=null||n(Y)[n(i).name]?.downloads!=null)&&e(se)}),C(j),C(h),C(p),_(()=>{m=F(p,1,`card-item`,null,m,{"pending-delete":n(s)}),t(S,`${n(i).displayName??``} `),F(re,1,`card-trust ${n(a).cls??``}`),ae(re,n(a).color?`color:${n(a).color}`:``),t(O,` ${n(a).label??``}`),t(A,n(i).description),t(N,`v${n(i).version??``}`),t(L,n(i).author)}),l(`click`,h,()=>bn(n(i).name)),l(`keydown`,h,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),bn(n(i).name))}),T(e,p)}),C(m),ee(m,e=>b(Z,e),()=>n(Z));var g=y(m,2),v=r=>{var a=jt(),o=k(a),s=k(o);C(o);var d=y(o,2),p=r=>{var a=At(),o=k(a),s=y(o,2);i(s,17,()=>Array.from({length:n(sn)},(e,t)=>t+1),f,(e,r)=>{var i=u(),a=c(i),o=e=>{var i=Ot();let a;var o=k(i,!0);C(i),_(()=>{a=F(i,1,`page-btn`,null,a,{active:n(q)===n(r)}),t(o,n(r))}),l(`click`,i,()=>b(q,n(r),!0)),T(e,i)},s=e=>{T(e,kt())};E(a,e=>{n(r)===1||n(r)===n(sn)||n(r)>=n(q)-3&&n(r)<=n(q)+3?e(o):(n(r)===n(q)-4||n(r)===n(q)+4)&&e(s,1)}),T(e,i)});var d=y(s,2);C(a),_(()=>{o.disabled=n(q)<=1,d.disabled=n(q)>=n(sn)}),l(`click`,o,()=>e(q,-1)),l(`click`,d,()=>e(q)),T(r,a)};E(d,e=>{n(sn)>1&&e(p)}),C(a),_(()=>t(s,`${n(on).length??``} 项，第 ${n(q)??``}/${n(sn)??``} 页`)),T(r,a)};E(g,e=>{d.mode!==`web`&&e(v)}),T(a,o)};E(s,e=>{n(on).length===0?e(p):e(m,!1)}),T(a,o)};E(Pe,e=>{n(K)&&n(Q)?e(Fe):e(Ie,!1)}),_(()=>{M=F(j,1,`sort-trigger`,null,M,{open:n(J)}),x(j,`aria-expanded`,n(J)),t(L,Ht[n(Bt)]),B=F(z,1,`trust-toggle installed-toggle`,null,B,{active:n(Ae)}),je=F(H,1,`cat-chip`,null,je,{active:!n(W)})}),re(w,()=>n(U),e=>b(U,e)),l(`click`,j,()=>b(J,!n(J))),l(`click`,z,()=>b(Ae,!n(Ae))),l(`click`,H,()=>b(W,null)),T(o,s)};E(he,e=>{n(z)&&!n(L)?e(ge):n(B)&&!n(L)?e(V,1):n(L)&&e(De,2)});var Oe=y(he,2),je=e=>{ke(e,{get message(){return n(zt).message},get type(){return n(zt).type},duration:3e3,get onRetry(){return n(zt).onRetry}})};E(Oe,e=>{n(zt)&&e(je)}),C(p),N(2),_(()=>g=F(p,1,`page`,null,g,{"web-mode":d.mode===`web`})),T(o,s)};E(Dn,e=>{V.isOnline?e(kn,!1):e(On)}),T(s,En),j()}s([`click`,`keydown`]);export{K as t};