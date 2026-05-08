import{$ as e,A as t,B as n,C as r,D as i,E as a,G as o,I as s,J as c,L as l,M as u,N as d,O as f,Q as p,R as m,S as h,T as g,W as _,X as v,Y as y,Z as b,_ as x,a as S,ct as C,f as ee,g as te,it as w,j as T,k as E,lt as ne,m as re,n as D,o as ie,p as ae,q as O,r as k,rt as A,s as j,st as M,tt as N,v as oe,y as P}from"./B4tPvYaQ.js";import{t as F}from"./DdgzOY92.js";import"./ibwe1TAv.js";import{t as I}from"./BYfga2_E.js";import{t as se}from"./BxpBuimP.js";import{t as ce}from"./CjbFpqee.js";import{t as le}from"./BltUJPGk.js";import{t as ue}from"./Du4Nbj_j.js";import{t as de}from"./DyMNLXaT.js";import{t as fe}from"./CTq4FNcU.js";import{t as pe}from"./Cje5llvx.js";import{a as L,c as me,i as he,n as ge,o as _e,r as ve,s as R,t as ye}from"./Cq8QkDPo.js";import{t as be}from"./C2mbzJWJ.js";import{t as xe}from"./CshUVf9E2.js";import{i as Se,n as Ce,t as we}from"./C0K3rEkZ2.js";import{t as z}from"./DCUfdl0l2.js";import"./DxBtCufG2.js";import{t as Te}from"./BPG94IUu2.js";function Ee(e,t){let n=S(t,[`children`,`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`m16 16 2 2 4-4`}],[`path`,{d:`M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14`}],[`path`,{d:`m7.5 4.27 9 5.15`}],[`polyline`,{points:`3.29 7 12 12 20.71 7`}],[`line`,{x1:`12`,x2:`12`,y1:`22`,y2:`12`}]];I(e,j({name:`package-check`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=u();g(c(r),t,`default`,{},null),T(e,r)},$$slots:{default:!0}}))}function De(e,t){let n=S(t,[`children`,`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`}]];I(e,j({name:`star`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=u();g(c(r),t,`default`,{},null),T(e,r)},$$slots:{default:!0}}))}function Oe(e,t){let n=S(t,[`children`,`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M10 11v6`}],[`path`,{d:`M14 11v6`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`}],[`path`,{d:`M3 6h18`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`}]];I(e,j({name:`trash-2`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=u();g(c(r),t,`default`,{},null),T(e,r)},$$slots:{default:!0}}))}function ke(e,t){let n=S(t,[`children`,`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M9 14 4 9l5-5`}],[`path`,{d:`M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11`}]];I(e,j({name:`undo-2`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=u();g(c(r),t,`default`,{},null),T(e,r)},$$slots:{default:!0}}))}var B=v({isOnline:typeof navigator<`u`?navigator.onLine:!0}),Ae={get isOnline(){return B.isOnline},get lastOnlineTime(){return B.lastOnlineTime},init(){typeof window>`u`||(console.log(`[network] initializing, current status:`,navigator.onLine),B.isOnline=navigator.onLine,window.addEventListener(`online`,()=>{console.log(`[network] online event received`),B.isOnline=!0,B.lastOnlineTime=new Date}),window.addEventListener(`offline`,()=>{console.log(`[network] offline event received`),B.isOnline=!1}))},refresh(){typeof navigator<`u`&&(B.isOnline=navigator.onLine)}};typeof window<`u`&&(console.log(`[network] auto-initializing`),Ae.init());var V=d(`<button class="retry-btn svelte-1cpok13">重试</button>`),H=d(`<div><span class="message svelte-1cpok13"> </span> <!></div>`);function je(e,r){w(r,!0);let i=ie(r,`duration`,3,3e3),a=p(!0);o(()=>{let e=setTimeout(()=>{b(a,!1)},i());return()=>clearTimeout(e)});var s=H();let c;var u=O(s),d=O(u,!0);C(u);var f=y(u,2),m=e=>{var t=V();l(`click`,t,()=>r.onRetry()),T(e,t)};E(f,e=>{r.onRetry&&e(m)}),C(s),_(()=>{c=P(s,1,`toast ${r.type??``}`,`svelte-1cpok13`,c,{visible:n(a)}),t(d,r.message)}),T(e,s),A()}s([`click`]);var Me=d(`<div class="loading svelte-h81f8c">加载中...</div>`),U=d(`<div class="empty svelte-h81f8c"><p>未安装任何模板</p> <p class="hint svelte-h81f8c">请连接网络后下载模板</p></div>`),W=d(`<li class="template-item svelte-h81f8c"><span class="name svelte-h81f8c"> </span></li>`),G=d(`<ul class="template-list svelte-h81f8c"></ul>`),Ne=d(`<div class="offline-container svelte-h81f8c"><div class="offline-header svelte-h81f8c"><svg class="icon svelte-h81f8c" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg> <h2 class="svelte-h81f8c">离线模式</h2> <p class="subtitle svelte-h81f8c">无网络连接,以下模板可用:</p></div> <!></div>`);function Pe(e,r){w(r,!0);let a=p(v([])),o=p(!0);k(async()=>{try{await z.load(),b(a,z.templates.map(e=>e.name),!0)}catch(e){console.error(`[offline] failed to load templates:`,e)}finally{b(o,!1)}});var s=Ne(),c=y(O(s),2),l=e=>{T(e,Me())},u=e=>{T(e,U())},d=e=>{var r=G();i(r,20,()=>n(a),e=>e,(e,n)=>{var r=W(),i=O(r),a=O(i,!0);C(i),C(r),_(()=>t(a,n)),T(e,r)}),C(r),T(e,r)};E(c,e=>{n(o)?e(l):n(a).length===0?e(u,1):e(d,!1)}),C(s),T(e,s),A()}var Fe=d(`<div class="drag-region" style="--wails-draggable:drag"></div>`),Ie=d(`<button class="btn-back" aria-label="返回设置"><!></button>`),Le=d(`<div><!> <div class="page-header"><!> <nav class="breadcrumb"><h2> </h2></nav></div> <!></div>`),Re=d(`<div class="drag-region" style="--wails-draggable:drag"></div>`),ze=d(`<button class="btn-back" aria-label="返回设置"><!></button>`),Be=d(`<button class="breadcrumb-link"> </button> <span class="breadcrumb-sep">›</span> <span class="breadcrumb-current"> </span>`,1),Ve=d(`<h2> </h2>`),He=d(`<button class="btn-refresh" aria-label="刷新"><!></button>`),Ue=d(`<div class="store-empty"><!> <p>加载中…</p></div>`),We=d(`<div class="store-empty"><p class="error-text"> </p> <button class="btn-retry">重试</button></div>`),Ge=d(`<button class="search-clear"><!></button>`),Ke=d(`<button role="option"> </button>`),qe=d(`<div class="sort-dropdown" role="listbox"></div>`),Je=d(`<button><span class="trust-dot"></span> <!> <span class="trust-label"> </span></button>`),Ye=d(`<div class="trust-toggles"></div> <div class="controls-sep"></div>`,1),Xe=d(`<button class="scroll-arrow scroll-arrow-left" aria-label="向左滚动">‹</button>`),Ze=d(`<button> </button>`),Qe=d(`<button class="scroll-arrow scroll-arrow-right" aria-label="向右滚动">›</button>`),$e=d(`<button><span class="nav-tpl-name"> </span> <span></span></button>`),et=d(`<span><!> </span>`),tt=d(`<button class="btn-detail-action btn-detail-undo"><!> <span>撤销删除</span></button>`),nt=d(`<button class="btn-detail-action btn-detail-uninstall"><!> <span>卸载</span></button>`),rt=d(`<button class="btn-detail-action btn-detail-install"><!> <span>安装</span></button>`),it=d(`<button class="stat-item" title="Stars"><!> <span> </span></button>`),at=d(`<button class="stat-item" title="下载量"><!> <span> </span></button>`),ot=d(`<span class="keyword-chip"> </span>`),st=d(`<div class="detail-keywords"></div>`),ct=d(`<div class="detail-preview"><iframe sandbox="allow-scripts allow-same-origin" loading="lazy" title="预览"></iframe></div>`),lt=d(`<div class="detail-preview-placeholder"><!> <span>社区模板暂不提供预览</span></div>`),ut=d(`<div class="readme-loading"><!> <span>加载 README…</span></div>`),dt=d(`<div class="detail-readme"><h4>README</h4> <div class="readme-body"><!></div></div>`),ft=d(`<a class="repo-link">查看源码 <!></a>`),pt=d(`<div class="progress-ring-wrapper"><svg class="progress-ring" width="36" height="36" viewBox="0 0 36 36"><circle class="progress-ring-track" cx="18" cy="18" r="14"></circle><circle class="progress-ring-fill" cx="18" cy="18" r="14"></circle></svg> <span class="progress-ring-stop">■</span></div>`),mt=d(`<button class="btn-install"><!><span>更新</span></button>`),ht=d(`<button class="btn-undo-lg"><!><span>撤销删除</span></button>`),gt=d(`<button class="btn-install"><!><span>安装</span></button>`),_t=d(`<button class="btn-install"><!><span>在 Presto 中打开</span></button>`),vt=d(`<button class="btn-scroll-top" aria-label="回到顶部"><!> <span>回到顶部</span></button>`),yt=d(`<div class="master-detail"><nav class="store-nav"></nav> <div class="store-detail"><div class="detail-header"><div class="detail-title-row"><h3> </h3> <!> <div class="detail-stats-actions"><!> <!> <!></div></div></div> <p class="detail-desc"> </p> <!> <div class="detail-meta"><span> </span> <span class="meta-sep">·</span> <span> </span> <span class="meta-sep">·</span> <span> </span></div> <!> <!> <div class="detail-repo"><!></div> <div class="detail-actions"><div class="actions-left"><!></div> <!></div></div></div>`),bt=d(`<div class="store-empty"><p> </p></div>`),xt=d(`<div class="undo-bar"><span> </span> <button class="undo-btn">撤销</button></div>`),St=d(`<button class="card-action-btn card-undo-btn" title="撤销删除"><!></button>`),Ct=d(`<button class="card-action-btn card-uninstall-btn" title="卸载"><!></button>`),wt=d(`<button class="card-action-btn card-install-btn" title="安装"><!></button>`),Tt=d(`<span class="card-installed-badge">已安装</span>`),Et=d(`<span class="card-pending-badge">待删除</span>`),Dt=d(`<span class="card-stat"><!> </span>`),Ot=d(`<span class="card-stat"><!> </span>`),kt=d(`<span class="card-stats"><!> <!></span>`),At=d(`<div><div class="tpl-card" role="button" tabindex="0"><!> <div class="card-header"><span class="card-name"> <!> <!></span> <span><!> </span></div> <p class="card-desc"> </p> <div class="card-footer"><span class="card-version"> </span> <span class="card-author"> </span> <!></div></div></div>`),jt=d(`<button> </button>`),Mt=d(`<span class="page-ellipsis">…</span>`),Nt=d(`<div class="page-controls"><button class="page-btn">&lsaquo;</button> <!> <button class="page-btn">&rsaquo;</button></div>`),Pt=d(`<div class="pagination"><span class="page-info"> </span> <!></div>`),Ft=d(`<!> <div class="card-grid"></div> <!>`,1),It=d(`<div class="filter-toolbar"><div class="search-sort-row"><div class="search-box"><span class="search-icon"><!></span> <input type="text" class="search-input" placeholder="搜索名称、描述或标签…"/> <!></div> <div class="sort-wrapper"><button aria-haspopup="listbox"><span class="sort-label"> </span> <!></button> <!></div></div> <div class="controls-row"><!> <button style="--toggle-color:#22c55e" title="已安装"><span class="trust-dot"></span> <!> <span class="trust-label">已安装</span></button> <div class="controls-sep"></div> <div class="category-bar"><!> <div class="category-scroll"><button>全部</button> <!></div> <!></div></div></div> <!>`,1),Lt=d(`<div><!> <div class="page-header"><!> <nav class="breadcrumb"><!></nav> <!></div> <!> <!></div> <style>.page {
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
  }</style>`,1);function K(s,d){w(d,!0);let g=ie(d,`installedVersions`,19,()=>new Map),S=ie(d,`communityEnabled`,3,!0),j=ie(d,`initialSelectedId`,3,null),I=p(null),z=p(!1),B=p(null);function V(){return d.mode,d.registryUrl}async function H(e=!1){if(!(n(I)&&!e)){b(z,!0),b(B,null);try{let e=await fetch(V());if(!e.ok)throw Error(`${e.status}`);b(I,await e.json(),!0)}catch(e){b(B,e instanceof Error?e.message:String(e),!0)}finally{b(z,!1)}}}async function Me(){return H(!0)}let U=p(``),W=p(null),G=p(null),Ne=p(!1),K=p(null);o(()=>{j()!==null&&b(K,j())});let Rt=p(``),zt=p(!1),Bt=p(0),q=p(1),Vt=p(24),Ht=p(null),Ut=p(`latest`),J=p(!1),Wt=p(void 0),Gt={latest:`最新发布`,stars:`最多星标`,downloads:`最多下载`},Y=p(v({})),Kt=p(null),qt=p(!1);function Jt(){n(Kt)&&b(qt,n(Kt).scrollTop>300)}function Yt(){n(Kt)?.scrollTo({top:0,behavior:`smooth`})}async function Xt(){if(d.statsUrl)try{let e=await fetch(d.statsUrl);e.ok&&b(Y,await e.json(),!0)}catch{}}function Zt(e){return e==null?``:e>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,``)+`k`:String(e)}let Qt=p(!1),X=p(null),$t=p(!1),en=p(!1);function tn(){n(X)&&(b($t,n(X).scrollLeft>4),b(en,n(X).scrollLeft<n(X).scrollWidth-n(X).clientWidth-4))}function nn(e){n(X)?.scrollBy({left:e===`left`?-200:200,behavior:`smooth`})}o(()=>{if(!n(X))return;tn(),n(X).addEventListener(`scroll`,tn,{passive:!0});let e=new ResizeObserver(tn);return e.observe(n(X)),()=>{n(X)?.removeEventListener(`scroll`,tn),e.disconnect()}});let Z=p(null);function rn(){if(d.mode===`web`||!n(Z))return;let e=getComputedStyle(n(Z)),t=parseFloat(e.gap)||12,r=200+t,i=Math.max(1,Math.floor((n(Z).clientWidth+t)/r)),a=n(Z).querySelector(`.tpl-card`),o=(a?a.offsetHeight:120)+t,s=i*Math.max(1,Math.round((n(Z).clientHeight+t)/o));s>0&&s!==n(Vt)&&b(Vt,s)}o(()=>{if(!n(Z))return;rn();let e=new ResizeObserver(rn);return e.observe(n(Z)),()=>e.disconnect()}),o(()=>{d.mode===`web`&&n(I)?b(Vt,n(I).templates.length||100,!0):n(I)&&n(Z)&&requestAnimationFrame(()=>rn())});let an=N(()=>{if(!n(I))return[];if(n(I).categories?.length)return n(I).categories;let e=new Set;return n(I).templates.map(e=>e.category).filter(t=>!!t&&!e.has(t)&&(e.add(t),!0)).map(e=>({id:e,label:{zh:e,en:e}}))}),on={official:{label:`官方`,cls:`trust-official`,color:`#3b82f6`,icon:me},verified:{label:`已验证`,cls:`trust-verified`,color:`#22c55e`,icon:be},community:{label:`社区`,cls:`trust-community`,color:``,icon:_e},unverified:{label:`未验证`,cls:`trust-unverified`,color:`#e0af68`,icon:R}},sn=N(()=>n(I)?new he(n(I).templates,{keys:[{name:`displayName`,weight:2},{name:`name`,weight:1.5},{name:`description`,weight:1},{name:`author`,weight:1},{name:`category`,weight:.8},{name:`keywords`,weight:1.2}],threshold:.4,ignoreLocation:!0}):null),cn=N(()=>{if(!n(I))return[];let e=n(U).trim();return(e&&n(sn)?n(sn).search(e).map(e=>e.item):n(I).templates).filter(e=>{let t=!n(W)||e.category===n(W),r=!n(G)||e.trust===n(G),i=S()||e.trust===`official`||e.trust===`verified`,a=!n(Ne)||mn(e.name);return t&&r&&i&&a})}),ln=N(()=>{let e=[...n(cn)];switch(n(Ut)){case`stars`:return e.sort((e,t)=>(n(Y)[t.name]?.stars??0)-(n(Y)[e.name]?.stars??0));case`downloads`:return e.sort((e,t)=>(n(Y)[t.name]?.downloads??0)-(n(Y)[e.name]?.downloads??0));default:return e.sort((e,t)=>{let n=e.publishedAt?new Date(e.publishedAt).getTime():0;return(t.publishedAt?new Date(t.publishedAt).getTime():0)-n})}});o(()=>{n(U),n(W),n(G),n(Ne),n(Vt),n(Ut),b(q,1)});let un=N(()=>Math.max(1,Math.ceil(n(ln).length/n(Vt)))),dn=N(()=>n(ln).slice((n(q)-1)*n(Vt),n(q)*n(Vt))),fn=N(()=>{if(!n(I))return new Set;let e=new Set;for(let t of n(I).templates)!S()&&t.trust!==`official`&&t.trust!==`verified`||e.add(t.trust);return e}),Q=N(()=>n(I)?.templates.find(e=>e.name===n(K))??null),pn=N(()=>n(Q)?on[n(Q).trust]:null),$=p(v(new Set));function mn(e){return g().has(e)&&!n($).has(e)}function hn(e){n($).add(e),b($,new Set(n($)),!0)}function gn(){if(n($).size===0)return;let e=[...n($)],t=e[e.length-1];n($).delete(t),b($,new Set(n($)),!0)}function _n(e){n($).delete(e),b($,new Set(n($)),!0)}D(async()=>{if(n($).size===0||!d.uninstallFn)return;let e=[...n($)];for(let t of e)try{await d.uninstallFn(t)}catch{}});function vn(e){return e<1024?e+` B`:e<1024*1024?(e/1024).toFixed(1)+` KB`:(e/(1024*1024)).toFixed(1)+` MB`}function yn(e,t){let n=g().get(e);return n?n!==t:!1}let bn={network_error:`网络连接失败，请检查网络后重试`,not_found:`模板不存在`,checksum_mismatch:`文件校验失败，可能已损坏，请重试`,server_error:`服务器暂时不可用，请稍后重试`};async function xn(e){if(!(!d.installFn||we.isInstalling(e.name))){we.setInstalling(e.name);try{await d.installFn(e),we.setInstalled(e.name),d.onInstallSuccess?.(e.name)}catch(t){let n=`安装失败，请重试`;if(t instanceof Error)try{let e=JSON.parse(t.message);e.error_type&&bn[e.error_type]&&(n=bn[e.error_type],e.error_type)}catch{}b(Ht,{message:n,type:`error`,onRetry:()=>{b(Ht,null),xn(e)}},!0),setTimeout(()=>{we.reset(e.name)},3500),console.error(`[StoreView] install failed:`,t)}}}async function Sn(e){if(d.readmeUrl){b(zt,!0),b(Rt,``);try{let t=(d.mode,d.readmeUrl(e)),n=await fetch(t);n.ok&&b(Rt,await n.text(),!0)}catch{}finally{b(zt,!1)}}}function Cn(e){if(n(K)===e){b(K,null);return}b(K,e,!0),Sn(e)}function wn(e){let t=ve(e);t&&(d.mode===`desktop`&&window.runtime?.BrowserOpenURL?window.runtime.BrowserOpenURL(t):window.open(t,`_blank`,`noopener,noreferrer`))}function Tn(e){return e.repository?ve(e.repository):e.repo?ye(e.repo):``}let En=new L.Renderer;En.link=({text:e})=>e,En.image=({text:e})=>e?`[${e}]`:``,L.setOptions({gfm:!0,breaks:!0,renderer:En});function Dn(e){return L.parse(e,{async:!1})}function On(e){n(J)&&n(Wt)&&!n(Wt).contains(e.target)&&b(J,!1)}k(()=>(H(),Xt(),document.addEventListener(`pointerdown`,On,!0),()=>document.removeEventListener(`pointerdown`,On,!0)));var kn=u(),An=c(kn),jn=e=>{var n=Le();let r;var i=O(n),a=e=>{T(e,Fe())};E(i,e=>{d.mode===`desktop`&&e(a)});var o=y(i,2),s=O(o),c=e=>{var t=Ie();se(O(t),{size:16}),C(t),l(`click`,t,()=>F(d.backRoute)),T(e,t)};E(s,e=>{d.mode===`desktop`&&d.backRoute&&e(c)});var u=y(s,2),f=O(u),p=O(f,!0);C(f),C(u),C(o),Pe(y(o,2),{}),C(n),_(()=>{r=P(n,1,`page`,null,r,{"web-mode":d.mode===`web`}),t(p,d.title)}),T(e,n)},Mn=o=>{var s=Lt(),p=c(s);let g;var v=O(p),S=e=>{T(e,Re())};E(v,e=>{d.mode===`desktop`&&e(S)});var w=y(v,2),D=O(w),ie=e=>{var t=ze();se(O(t),{size:16}),C(t),l(`click`,t,()=>F(d.backRoute)),T(e,t)};E(D,e=>{d.mode===`desktop`&&d.backRoute&&e(ie)});var k=y(D,2),A=O(k),j=e=>{var r=Be(),i=c(r),a=O(i,!0);C(i);var o=y(i,4),s=O(o,!0);C(o),_(()=>{t(a,d.title),t(s,n(Q).displayName)}),l(`click`,i,()=>b(K,null)),T(e,r)},L=e=>{var n=Ve(),r=O(n,!0);C(n),_(()=>t(r,d.title)),T(e,n)};E(A,e=>{n(K)&&n(Q)?e(j):e(L,!1)}),C(k);var me=y(k,2),he=e=>{var t=He(),r=O(t);{let e=N(()=>n(z)?`spin`:``);fe(r,{size:14,get class(){return n(e)}})}C(t),_(()=>t.disabled=n(z)),l(`click`,t,()=>Me()),T(e,t)};E(me,e=>{d.mode===`desktop`&&e(he)}),C(w);var _e=y(w,2),ve=e=>{var t=Ue();de(O(t),{size:24,class:`spin`}),M(2),C(t),T(e,t)},R=e=>{var r=We(),i=O(r),a=O(i);C(i);var o=y(i,2);C(r),_(()=>t(a,`加载失败：${n(B)??``}`)),l(`click`,o,()=>Me()),T(e,r)},ye=o=>{var s=It(),p=c(s),g=O(p),v=O(g),S=O(v);pe(O(S),{size:14}),C(S);var w=y(S,2);te(w);var D=y(w,2),ie=e=>{var t=Ge();xe(O(t),{size:12}),C(t),l(`click`,t,()=>b(U,``)),T(e,t)};E(D,e=>{n(U)&&e(ie)}),C(v);var k=y(v,2),A=O(k);let j;var F=O(A),I=O(F,!0);C(F),ce(y(F,2),{size:12}),C(A);var L=y(A,2),me=e=>{var r=qe();i(r,20,()=>[`latest`,`stars`,`downloads`],e=>e,(e,r)=>{var i=Ke();let a;var o=O(i,!0);C(i),_(()=>{a=P(i,1,`sort-option`,null,a,{selected:n(Ut)===r}),x(i,`aria-selected`,n(Ut)===r),t(o,Gt[r])}),l(`click`,i,()=>{b(Ut,r,!0),b(J,!1)}),T(e,i)}),C(r),h(3,r,()=>Se,()=>({y:-4,duration:150,easing:Ce})),T(e,r)};E(L,e=>{n(J)&&e(me)}),C(k),ee(k,e=>b(Wt,e),()=>n(Wt)),C(g);var he=y(g,2),_e=O(he),ve=e=>{var a=Ye(),o=c(a);i(o,21,()=>Object.entries(on),([e,t])=>e,(e,i)=>{var a=N(()=>ne(n(i),2));let o=()=>n(a)[0],s=()=>n(a)[1];var d=u(),f=c(d),p=e=>{let i=N(()=>s().icon);var a=Je();let c;var u=y(O(a),2);r(u,()=>n(i),(e,t)=>{t(e,{size:13})});var d=y(u,2),f=O(d,!0);C(d),C(a),_(()=>{c=P(a,1,`trust-toggle`,null,c,{active:n(G)===o()}),oe(a,`--toggle-color:${(s().color||`var(--color-muted)`)??``}`),x(a,`title`,s().label),t(f,s().label)}),l(`click`,a,()=>b(G,n(G)===o()?null:o(),!0)),T(e,a)},m=N(()=>n(fn).has(o()));E(f,e=>{n(m)&&e(p)}),T(e,d)}),C(o),M(2),T(e,a)};E(_e,e=>{n(fn).size>1&&e(ve)});var R=y(_e,2);let ye;Ee(y(O(R),2),{size:13}),M(2),C(R);var z=y(R,4),B=O(z),Ae=e=>{var t=Xe();l(`click`,t,()=>nn(`left`)),T(e,t)};E(B,e=>{n($t)&&e(Ae)});var V=y(B,2),H=O(V);let je;i(y(H,2),17,()=>n(an),e=>e.id,(e,r)=>{var i=Ze();let a;var o=O(i,!0);C(i),_(()=>{a=P(i,1,`cat-chip`,null,a,{active:n(W)===n(r).id}),t(o,n(r).label.zh)}),l(`click`,i,()=>b(W,n(W)===n(r).id?null:n(r).id,!0)),T(e,i)}),C(V),ee(V,e=>b(X,e),()=>n(X));var Me=y(V,2),Pe=e=>{var t=Qe();l(`click`,t,()=>nn(`right`)),T(e,t)};E(Me,e=>{n(en)&&e(Pe)}),C(z),C(he),C(p);var Fe=y(p,2),Ie=e=>{var o=yt(),s=O(o);i(s,21,()=>n(ln),e=>e.name,(e,r)=>{let i=N(()=>on[n(r).trust]);var a=$e();let o;var s=O(a),c=O(s,!0);C(s);var u=y(s,2);let d;C(a),_(e=>{o=P(a,1,`nav-tpl-item`,null,o,{active:n(K)===n(r).name}),t(c,n(r).displayName),d=P(u,1,`nav-trust-dot`,null,d,e),oe(u,`background:${n(i).color??``}`)},[()=>({installing:we.isInstalling(n(r).name)})]),l(`click`,a,()=>Cn(n(r).name)),T(e,a)}),C(s);var f=y(s,2),p=O(f),h=O(p),g=O(h),v=O(g,!0);C(g);var S=y(g,2),te=e=>{let i=N(()=>n(pn).icon);var a=et(),o=O(a);r(o,()=>n(i),(e,t)=>{t(e,{size:14})});var s=y(o);C(a),_(()=>{P(a,1,`trust-badge ${n(pn).cls??``}`),oe(a,n(pn).color?`color:${n(pn).color}`:``),t(s,` ${n(pn).label??``}`)}),T(e,a)};E(S,e=>{n(pn)&&e(te)});var w=y(S,2),ne=O(w),re=e=>{var t=u(),r=c(t),i=e=>{var t=tt();ke(O(t),{size:13}),M(2),C(t),l(`click`,t,()=>_n(n(Q).name)),T(e,t)},a=N(()=>n($).has(n(Q).name)),o=e=>{var t=nt();Oe(O(t),{size:13}),M(2),C(t),l(`click`,t,()=>hn(n(Q).name)),T(e,t)},s=N(()=>mn(n(Q).name)),f=e=>{var t=rt();le(O(t),{size:13}),M(2),C(t),l(`click`,t,()=>xn(n(Q))),T(e,t)};E(r,e=>{n(a)?e(i):n(s)?e(o,1):d.installFn&&e(f,2)}),T(e,t)};E(ne,e=>{d.mode===`desktop`&&e(re)});var D=y(ne,2),ie=e=>{var r=it(),i=O(r);De(i,{size:13});var a=y(i,2),o=O(a,!0);C(a),C(r),_(e=>t(o,e),[()=>n(Qt)?n(Y)[n(Q).name].stars:Zt(n(Y)[n(Q).name].stars)]),l(`click`,r,()=>b(Qt,!n(Qt))),T(e,r)};E(D,e=>{n(Y)[n(Q).name]?.stars!=null&&e(ie)});var k=y(D,2),A=e=>{var r=at(),i=O(r);le(i,{size:13});var a=y(i,2),o=O(a,!0);C(a),C(r),_(e=>t(o,e),[()=>n(Qt)?n(Y)[n(Q).name].downloads:Zt(n(Y)[n(Q).name].downloads)]),l(`click`,r,()=>b(Qt,!n(Qt))),T(e,r)};E(k,e=>{n(Y)[n(Q).name]?.downloads!=null&&e(A)}),C(w),C(h),C(p);var j=y(p,2),F=O(j,!0);C(j);var I=y(j,2),ce=e=>{var r=st();i(r,20,()=>n(Q).keywords,e=>e,(e,n)=>{var r=ot(),i=O(r,!0);C(r),_(()=>t(i,n)),T(e,r)}),C(r),T(e,r)};E(I,e=>{n(Q).keywords.length>0&&e(ce)});var pe=y(I,2),L=O(pe),me=O(L);C(L);var he=y(L,4),_e=O(he,!0);C(he);var ve=y(he,4),R=O(ve,!0);C(ve),C(pe);var ye=y(pe,2),xe=e=>{var t=u(),r=c(t),i=e=>{var t=ct(),r=O(t);C(t),_(e=>{oe(t,`height:${n(Bt)*800/1200}px`),x(r,`src`,e),oe(r,`transform:scale(${n(Bt)/1200})`)},[()=>d.previewUrl(n(Q).name)]),ae(t,`clientWidth`,e=>b(Bt,e)),T(e,t)};E(r,e=>{d.previewUrl&&e(i)}),T(e,t)},Se=e=>{var t=lt();be(O(t),{size:24}),M(2),C(t),T(e,t)};E(ye,e=>{n(Q).trust===`official`||n(Q).trust===`verified`?e(xe):e(Se,!1)});var Ce=y(ye,2),z=e=>{var t=u(),r=c(t),i=e=>{var t=ut();de(O(t),{size:16,class:`spin`}),M(2),C(t),T(e,t)},o=e=>{var t=dt(),r=y(O(t),2);a(O(r),()=>Te.sanitize(Dn(n(Rt)))),C(r),C(t),T(e,t)};E(r,e=>{n(zt)?e(i):n(Rt)&&e(o,1)}),T(e,t)};E(Ce,e=>{d.readmeUrl&&e(z)});var Ee=y(Ce,2),B=O(Ee),Ae=e=>{var t=ft();ue(y(O(t)),{size:12}),C(t),_(e=>x(t,`href`,e),[()=>Tn(n(Q))]),l(`click`,t,e=>{e.preventDefault(),wn(Tn(n(Q)))}),T(e,t)},V=N(()=>Tn(n(Q)));E(B,e=>{n(V)&&e(Ae)}),C(Ee);var H=y(Ee,2),je=O(H),Me=O(je),U=e=>{var t=u(),r=c(t),i=e=>{let t=N(()=>we.getProgress(n(Q).name)),r=N(()=>n(t)?.percent??0),i=N(()=>2*Math.PI*14),a=N(()=>n(i)*(1-n(r)/100));var o=pt(),s=O(o),c=y(O(s));x(c,`stroke-dasharray`,n(i)),C(s),M(2),C(o),_(e=>{x(o,`title`,e),x(c,`stroke-dashoffset`,n(a))},[()=>n(t)?`${vn(n(t).downloaded)} / ${vn(n(t).total)}`:`准备中...`]),T(e,o)},a=N(()=>we.isInstalling(n(Q).name)),o=e=>{var t=mt();fe(O(t),{size:14}),M(),C(t),l(`click`,t,()=>xn(n(Q))),T(e,t)},s=N(()=>mn(n(Q).name)&&yn(n(Q).name,n(Q).version)),d=e=>{var t=ht();ke(O(t),{size:14}),M(),C(t),l(`click`,t,()=>_n(n(Q).name)),T(e,t)},f=N(()=>n($).has(n(Q).name)),p=e=>{var t=gt();le(O(t),{size:14}),M(),C(t),l(`click`,t,()=>xn(n(Q))),T(e,t)},m=N(()=>!mn(n(Q).name));E(r,e=>{n(a)?e(i):n(s)?e(o,1):n(f)?e(d,2):n(m)&&e(p,3)}),T(e,t)},W=e=>{var t=_t();le(O(t),{size:14}),M(),C(t),l(`click`,t,()=>{if(!ge(n(Q).name))return;let e=`presto://install/${n(Q).name}`;window.parent===window?window.location.href=e:window.parent.postMessage({type:`presto-open-template`,url:e},window.location.origin)}),T(e,t)};E(Me,e=>{d.mode===`desktop`&&d.installFn?e(U):d.mode===`web`&&e(W,1)}),C(je);var G=y(je,2),Ne=e=>{var t=vt();se(O(t),{size:14,style:`transform:rotate(90deg)`}),M(2),C(t),l(`click`,t,Yt),T(e,t)};E(G,e=>{d.mode===`desktop`&&n(qt)&&e(Ne)}),C(H),C(f),ee(f,e=>b(Kt,e),()=>n(Kt)),C(o),_(()=>{t(v,n(Q).displayName),t(F,n(Q).description),t(me,`v${n(Q).version??``}`),t(_e,n(Q).author),t(R,n(Q).license)}),m(`scroll`,f,Jt),T(e,o)},Le=a=>{var o=u(),s=c(o),p=e=>{var r=bt(),i=O(r),a=O(i,!0);C(i),C(r),_(()=>t(a,n(U)?`没有匹配的结果`:`暂无可用内容`)),T(e,r)},m=a=>{var o=Ft(),s=c(o),p=e=>{var r=xt(),i=O(r),a=O(i);C(i);var o=y(i,2);C(r),_(()=>t(a,`已删除 ${n($).size??``} 个模板`)),l(`click`,o,gn),h(3,r,()=>Se,()=>({y:-30})),T(e,r)};E(s,e=>{n($).size>0&&e(p)});var m=y(s,2);i(m,21,()=>n(dn),e=>e.name,(e,i)=>{let a=N(()=>on[n(i).trust]),o=N(()=>n(a).icon),s=N(()=>n($).has(n(i).name)),f=N(()=>mn(n(i).name));var p=At();let m;var h=O(p),g=O(h),v=e=>{var t=u(),r=c(t),a=e=>{var t=St();ke(O(t),{size:13}),C(t),l(`click`,t,e=>{e.stopPropagation(),_n(n(i).name)}),T(e,t)},o=e=>{var t=Ct();Oe(O(t),{size:13}),C(t),l(`click`,t,e=>{e.stopPropagation(),hn(n(i).name)}),T(e,t)},d=e=>{var t=wt();le(O(t),{size:13}),C(t),l(`click`,t,e=>{e.stopPropagation(),xn(n(i))}),T(e,t)};E(r,e=>{n(s)?e(a):n(f)?e(o,1):e(d,!1)}),T(e,t)};E(g,e=>{d.mode===`desktop`&&e(v)});var b=y(g,2),x=O(b),S=O(x),ee=y(S),te=e=>{T(e,Tt())};E(ee,e=>{n(f)&&!n(s)&&e(te)});var w=y(ee,2),ne=e=>{T(e,Et())};E(w,e=>{n(s)&&e(ne)}),C(x);var re=y(x,2),D=O(re);r(D,()=>n(o),(e,t)=>{t(e,{size:12})});var ie=y(D);C(re),C(b);var ae=y(b,2),k=O(ae,!0);C(ae);var A=y(ae,2),j=O(A),M=O(j);C(j);var F=y(j,2),I=O(F,!0);C(F);var se=y(F,2),ce=e=>{var r=kt(),a=O(r),o=e=>{var r=Dt(),a=O(r);De(a,{size:10});var o=y(a);C(r),_(e=>t(o,` ${e??``}`),[()=>Zt(n(Y)[n(i).name].stars)]),T(e,r)};E(a,e=>{n(Y)[n(i).name]?.stars!=null&&e(o)});var s=y(a,2),c=e=>{var r=Ot(),a=O(r);le(a,{size:10});var o=y(a);C(r),_(e=>t(o,` ${e??``}`),[()=>Zt(n(Y)[n(i).name].downloads)]),T(e,r)};E(s,e=>{n(Y)[n(i).name]?.downloads!=null&&e(c)}),C(r),T(e,r)};E(se,e=>{(n(Y)[n(i).name]?.stars!=null||n(Y)[n(i).name]?.downloads!=null)&&e(ce)}),C(A),C(h),C(p),_(()=>{m=P(p,1,`card-item`,null,m,{"pending-delete":n(s)}),t(S,`${n(i).displayName??``} `),P(re,1,`card-trust ${n(a).cls??``}`),oe(re,n(a).color?`color:${n(a).color}`:``),t(ie,` ${n(a).label??``}`),t(k,n(i).description),t(M,`v${n(i).version??``}`),t(I,n(i).author)}),l(`click`,h,()=>Cn(n(i).name)),l(`keydown`,h,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),Cn(n(i).name))}),T(e,p)}),C(m),ee(m,e=>b(Z,e),()=>n(Z));var g=y(m,2),v=r=>{var a=Pt(),o=O(a),s=O(o);C(o);var d=y(o,2),p=r=>{var a=Nt(),o=O(a),s=y(o,2);i(s,17,()=>Array.from({length:n(un)},(e,t)=>t+1),f,(e,r)=>{var i=u(),a=c(i),o=e=>{var i=jt();let a;var o=O(i,!0);C(i),_(()=>{a=P(i,1,`page-btn`,null,a,{active:n(q)===n(r)}),t(o,n(r))}),l(`click`,i,()=>b(q,n(r),!0)),T(e,i)},s=e=>{T(e,Mt())};E(a,e=>{n(r)===1||n(r)===n(un)||n(r)>=n(q)-3&&n(r)<=n(q)+3?e(o):(n(r)===n(q)-4||n(r)===n(q)+4)&&e(s,1)}),T(e,i)});var d=y(s,2);C(a),_(()=>{o.disabled=n(q)<=1,d.disabled=n(q)>=n(un)}),l(`click`,o,()=>e(q,-1)),l(`click`,d,()=>e(q)),T(r,a)};E(d,e=>{n(un)>1&&e(p)}),C(a),_(()=>t(s,`${n(ln).length??``} 项，第 ${n(q)??``}/${n(un)??``} 页`)),T(r,a)};E(g,e=>{d.mode!==`web`&&e(v)}),T(a,o)};E(s,e=>{n(ln).length===0?e(p):e(m,!1)}),T(a,o)};E(Fe,e=>{n(K)&&n(Q)?e(Ie):e(Le,!1)}),_(()=>{j=P(A,1,`sort-trigger`,null,j,{open:n(J)}),x(A,`aria-expanded`,n(J)),t(I,Gt[n(Ut)]),ye=P(R,1,`trust-toggle installed-toggle`,null,ye,{active:n(Ne)}),je=P(H,1,`cat-chip`,null,je,{active:!n(W)})}),re(w,()=>n(U),e=>b(U,e)),l(`click`,A,()=>b(J,!n(J))),l(`click`,R,()=>b(Ne,!n(Ne))),l(`click`,H,()=>b(W,null)),T(o,s)};E(_e,e=>{n(z)&&!n(I)?e(ve):n(B)&&!n(I)?e(R,1):n(I)&&e(ye,2)});var Ae=y(_e,2),V=e=>{je(e,{get message(){return n(Ht).message},get type(){return n(Ht).type},duration:3e3,get onRetry(){return n(Ht).onRetry}})};E(Ae,e=>{n(Ht)&&e(V)}),C(p),M(2),_(()=>g=P(p,1,`page`,null,g,{"web-mode":d.mode===`web`})),T(o,s)};E(An,e=>{Ae.isOnline?e(Mn,!1):e(jn)}),T(s,kn),A()}s([`click`,`keydown`]);export{K as t};