import{A as e,C as t,D as n,E as r,F as i,G as a,H as o,J as s,K as c,L as l,N as u,O as d,P as f,Q as p,S as m,T as h,V as g,W as _,X as v,Y as y,a as b,b as ee,ct as x,d as te,g as S,h as ne,it as C,k as w,l as re,lt as ie,m as T,n as E,o as D,p as ae,q as O,r as k,rt as A,s as j,st as M,u as oe,w as N,y as se}from"./CIgdjxu3.js";import{t as P}from"./-5uAlOvR.js";import"./ibwe1TAv.js";import{t as F}from"./BPvQguc4.js";import{t as ce}from"./B808xYBd.js";import{t as le}from"./CO2mOm99.js";import{t as ue}from"./BiXXIqim.js";import{t as de}from"./LFz3Vn8I.js";import{t as fe}from"./DjhK2rgQ.js";import{t as pe}from"./BfJoOoN8.js";import{t as me}from"./BJg9th9U.js";import{a as I,c as he,i as L,n as ge,o as _e,r as ve,s as R,t as ye}from"./BstfLOnx.js";import{t as be}from"./CIYiwNcZ.js";import{t as xe}from"./D-tf4NiW2.js";import{i as Se,n as Ce,t as we}from"./DAHbnQ8m2.js";import{t as z}from"./xM6gIYyG2.js";import"./BzW0CsIy2.js";import{t as Te}from"./BPG94IUu2.js";function Ee(e,t){let n=b(t,[`children`,`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M12 22V12`}],[`path`,{d:`m16 17 2 2 4-4`}],[`path`,{d:`M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753`}],[`path`,{d:`M3.29 7 12 12l8.71-5`}],[`path`,{d:`m7.5 4.27 8.997 5.148`}]];F(e,j({name:`package-check`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=w();m(a(r),t,`default`,{},null),d(e,r)},$$slots:{default:!0}}))}function De(e,t){let n=b(t,[`children`,`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`}]];F(e,j({name:`star`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=w();m(a(r),t,`default`,{},null),d(e,r)},$$slots:{default:!0}}))}function Oe(e,t){let n=b(t,[`children`,`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M10 11v6`}],[`path`,{d:`M14 11v6`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`}],[`path`,{d:`M3 6h18`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`}]];F(e,j({name:`trash-2`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=w();m(a(r),t,`default`,{},null),d(e,r)},$$slots:{default:!0}}))}function ke(e,t){let n=b(t,[`children`,`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M9 14 4 9l5-5`}],[`path`,{d:`M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11`}]];F(e,j({name:`undo-2`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=w();m(a(r),t,`default`,{},null),d(e,r)},$$slots:{default:!0}}))}var B=O({isOnline:typeof navigator<`u`?navigator.onLine:!0}),Ae={get isOnline(){return B.isOnline},get lastOnlineTime(){return B.lastOnlineTime},init(){typeof window>`u`||(console.log(`[network] initializing, current status:`,navigator.onLine),B.isOnline=navigator.onLine,window.addEventListener(`online`,()=>{console.log(`[network] online event received`),B.isOnline=!0,B.lastOnlineTime=new Date}),window.addEventListener(`offline`,()=>{console.log(`[network] offline event received`),B.isOnline=!1}))},refresh(){typeof navigator<`u`&&(B.isOnline=navigator.onLine)}};typeof window<`u`&&(console.log(`[network] auto-initializing`),Ae.init());var V=e(`<button class="retry-btn svelte-1cpok13">重试</button>`),H=e(`<div><span class="message svelte-1cpok13"> </span> <!></div>`);function je(e,t){C(t,!0);let i=D(t,`duration`,3,3e3),a=y(!0);o(()=>{let e=setTimeout(()=>{s(a,!1)},i());return()=>clearTimeout(e)});var u=H();let p;var m=_(u),h=_(m,!0);x(m);var v=c(m,2),b=e=>{var n=V();f(`click`,n,()=>t.onRetry()),d(e,n)};r(v,e=>{t.onRetry&&e(b)}),x(u),g(()=>{p=S(u,1,`toast ${t.type??``}`,`svelte-1cpok13`,p,{visible:l(a)}),n(h,t.message)}),d(e,u),A()}u([`click`]);var Me=e(`<div class="loading svelte-h81f8c">加载中...</div>`),U=e(`<div class="empty svelte-h81f8c"><p>未安装任何模板</p> <p class="hint svelte-h81f8c">请连接网络后下载模板</p></div>`),W=e(`<li class="template-item svelte-h81f8c"><span class="name svelte-h81f8c"> </span></li>`),G=e(`<ul class="template-list svelte-h81f8c"></ul>`),Ne=e(`<div class="offline-container svelte-h81f8c"><div class="offline-header svelte-h81f8c"><svg class="icon svelte-h81f8c" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg> <h2 class="svelte-h81f8c">离线模式</h2> <p class="subtitle svelte-h81f8c">无网络连接,以下模板可用:</p></div> <!></div>`);function Pe(e,t){C(t,!0);let i=y(O([])),a=y(!0);k(async()=>{try{await z.load(),s(i,z.templates.map(e=>e.name),!0)}catch(e){console.error(`[offline] failed to load templates:`,e)}finally{s(a,!1)}});var o=Ne(),u=c(_(o),2),f=e=>{d(e,Me())},p=e=>{d(e,U())},m=e=>{var t=G();N(t,20,()=>l(i),e=>e,(e,t)=>{var r=W(),i=_(r),a=_(i,!0);x(i),x(r),g(()=>n(a,t)),d(e,r)}),x(t),d(e,t)};r(u,e=>{l(a)?e(f):l(i).length===0?e(p,1):e(m,-1)}),x(o),d(e,o),A()}var Fe=e(`<div class="drag-region" style="--wails-draggable:drag"></div>`),Ie=e(`<button class="btn-back" aria-label="返回设置"><!></button>`),Le=e(`<div><!> <div class="page-header"><!> <nav class="breadcrumb"><h2> </h2></nav></div> <!></div>`),Re=e(`<div class="drag-region" style="--wails-draggable:drag"></div>`),ze=e(`<button class="btn-back" aria-label="返回设置"><!></button>`),Be=e(`<button class="breadcrumb-link"> </button> <span class="breadcrumb-sep">›</span> <span class="breadcrumb-current"> </span>`,1),Ve=e(`<h2> </h2>`),He=e(`<button class="btn-refresh" aria-label="刷新"><!></button>`),Ue=e(`<div class="store-empty"><!> <p>加载中…</p></div>`),We=e(`<div class="store-empty"><p class="error-text"> </p> <button class="btn-retry">重试</button></div>`),Ge=e(`<button class="search-clear"><!></button>`),Ke=e(`<button role="option"> </button>`),qe=e(`<div class="sort-dropdown" role="listbox"></div>`),Je=e(`<button><span class="trust-dot"></span> <!> <span class="trust-label"> </span></button>`),Ye=e(`<div class="trust-toggles"></div> <div class="controls-sep"></div>`,1),Xe=e(`<button class="scroll-arrow scroll-arrow-left" aria-label="向左滚动">‹</button>`),Ze=e(`<button> </button>`),Qe=e(`<button class="scroll-arrow scroll-arrow-right" aria-label="向右滚动">›</button>`),$e=e(`<button><span class="nav-tpl-name"> </span> <span></span></button>`),et=e(`<span><!> </span>`),tt=e(`<button class="btn-detail-action btn-detail-undo"><!> <span>撤销删除</span></button>`),nt=e(`<button class="btn-detail-action btn-detail-uninstall"><!> <span>卸载</span></button>`),rt=e(`<button class="btn-detail-action btn-detail-install"><!> <span>安装</span></button>`),it=e(`<button class="stat-item" title="Stars"><!> <span> </span></button>`),at=e(`<button class="stat-item" title="下载量"><!> <span> </span></button>`),ot=e(`<span class="keyword-chip"> </span>`),st=e(`<div class="detail-keywords"></div>`),ct=e(`<div class="detail-preview"><iframe sandbox="allow-scripts allow-same-origin" loading="lazy" title="预览"></iframe></div>`),lt=e(`<div class="detail-preview-placeholder"><!> <span>社区模板暂不提供预览</span></div>`),ut=e(`<div class="readme-loading"><!> <span>加载 README…</span></div>`),dt=e(`<div class="detail-readme"><h4>README</h4> <div class="readme-body"></div></div>`),ft=e(`<a class="repo-link">查看源码 <!></a>`),pt=e(`<div class="progress-ring-wrapper"><svg class="progress-ring" width="36" height="36" viewBox="0 0 36 36"><circle class="progress-ring-track" cx="18" cy="18" r="14"></circle><circle class="progress-ring-fill" cx="18" cy="18" r="14"></circle></svg> <span class="progress-ring-stop">■</span></div>`),mt=e(`<button class="btn-install"><!><span>更新</span></button>`),ht=e(`<button class="btn-undo-lg"><!><span>撤销删除</span></button>`),gt=e(`<button class="btn-install"><!><span>安装</span></button>`),_t=e(`<button class="btn-install"><!><span>在 Presto 中打开</span></button>`),vt=e(`<button class="btn-scroll-top" aria-label="回到顶部"><!> <span>回到顶部</span></button>`),yt=e(`<div class="master-detail"><nav class="store-nav"></nav> <div class="store-detail"><div class="detail-header"><div class="detail-title-row"><h3> </h3> <!> <div class="detail-stats-actions"><!> <!> <!></div></div></div> <p class="detail-desc"> </p> <!> <div class="detail-meta"><span> </span> <span class="meta-sep">·</span> <span> </span> <span class="meta-sep">·</span> <span> </span></div> <!> <!> <div class="detail-repo"><!></div> <div class="detail-actions"><div class="actions-left"><!></div> <!></div></div></div>`),bt=e(`<div class="store-empty"><p> </p></div>`),xt=e(`<div class="undo-bar"><span> </span> <button class="undo-btn">撤销</button></div>`),St=e(`<button class="card-action-btn card-undo-btn" title="撤销删除"><!></button>`),Ct=e(`<button class="card-action-btn card-uninstall-btn" title="卸载"><!></button>`),wt=e(`<button class="card-action-btn card-install-btn" title="安装"><!></button>`),Tt=e(`<span class="card-installed-badge">已安装</span>`),Et=e(`<span class="card-pending-badge">待删除</span>`),Dt=e(`<span class="card-stat"><!> </span>`),Ot=e(`<span class="card-stat"><!> </span>`),kt=e(`<span class="card-stats"><!> <!></span>`),At=e(`<div><div class="tpl-card" role="button" tabindex="0"><!> <div class="card-header"><span class="card-name"> <!> <!></span> <span><!> </span></div> <p class="card-desc"> </p> <div class="card-footer"><span class="card-version"> </span> <span class="card-author"> </span> <!></div></div></div>`),jt=e(`<button> </button>`),Mt=e(`<span class="page-ellipsis">…</span>`),Nt=e(`<div class="page-controls"><button class="page-btn">&lsaquo;</button> <!> <button class="page-btn">&rsaquo;</button></div>`),Pt=e(`<div class="pagination"><span class="page-info"> </span> <!></div>`),Ft=e(`<!> <div class="card-grid"></div> <!>`,1),It=e(`<div class="filter-toolbar"><div class="search-sort-row"><div class="search-box"><span class="search-icon"><!></span> <input type="text" class="search-input" placeholder="搜索名称、描述或标签…"/> <!></div> <div class="sort-wrapper"><button aria-haspopup="listbox"><span class="sort-label"> </span> <!></button> <!></div></div> <div class="controls-row"><!> <button style="--toggle-color:#22c55e" title="已安装"><span class="trust-dot"></span> <!> <span class="trust-label">已安装</span></button> <div class="controls-sep"></div> <div class="category-bar"><!> <div class="category-scroll"><button>全部</button> <!></div> <!></div></div></div> <!>`,1),Lt=e(`<div><!> <div class="page-header"><!> <nav class="breadcrumb"><!></nav> <!></div> <!> <!></div> <style>.page {
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
  }</style>`,1);function K(e,u){C(u,!0);let m=D(u,`installedVersions`,19,()=>new Map),b=D(u,`communityEnabled`,3,!0),j=D(u,`initialSelectedId`,3,null),F=y(null),z=y(!1),B=y(null);function V(){return u.mode,u.registryUrl}async function H(e=!1){if(!(l(F)&&!e)){s(z,!0),s(B,null);try{let e=await fetch(V());if(!e.ok)throw Error(`${e.status}`);s(F,await e.json(),!0)}catch(e){s(B,e instanceof Error?e.message:String(e),!0)}finally{s(z,!1)}}}async function Me(){return H(!0)}let U=y(``),W=y(null),G=y(null),Ne=y(!1),K=y(null);o(()=>{j()!==null&&s(K,j())});let Rt=y(``),zt=y(!1),Bt=y(0),q=y(1),Vt=y(24),Ht=y(null),Ut=y(`latest`),J=y(!1),Wt=y(void 0),Gt={latest:`最新发布`,stars:`最多星标`,downloads:`最多下载`},Y=y(O({})),Kt=y(null),qt=y(!1);function Jt(){l(Kt)&&s(qt,l(Kt).scrollTop>300)}function Yt(){l(Kt)?.scrollTo({top:0,behavior:`smooth`})}async function Xt(){if(u.statsUrl)try{let e=await fetch(u.statsUrl);e.ok&&s(Y,await e.json(),!0)}catch{}}function Zt(e){return e==null?``:e>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,``)+`k`:String(e)}let Qt=y(!1),X=y(null),$t=y(!1),en=y(!1);function tn(){l(X)&&(s($t,l(X).scrollLeft>4),s(en,l(X).scrollLeft<l(X).scrollWidth-l(X).clientWidth-4))}function nn(e){l(X)?.scrollBy({left:e===`left`?-200:200,behavior:`smooth`})}o(()=>{if(!l(X))return;tn(),l(X).addEventListener(`scroll`,tn,{passive:!0});let e=new ResizeObserver(tn);return e.observe(l(X)),()=>{l(X)?.removeEventListener(`scroll`,tn),e.disconnect()}});let Z=y(null);function rn(){if(u.mode===`web`||!l(Z))return;let e=getComputedStyle(l(Z)),t=parseFloat(e.gap)||12,n=200+t,r=Math.max(1,Math.floor((l(Z).clientWidth+t)/n)),i=l(Z).querySelector(`.tpl-card`),a=(i?i.offsetHeight:120)+t,o=r*Math.max(1,Math.round((l(Z).clientHeight+t)/a));o>0&&o!==l(Vt)&&s(Vt,o)}o(()=>{if(!l(Z))return;rn();let e=new ResizeObserver(rn);return e.observe(l(Z)),()=>e.disconnect()}),o(()=>{u.mode===`web`&&l(F)?s(Vt,l(F).templates.length||100,!0):l(F)&&l(Z)&&requestAnimationFrame(()=>rn())});let an=p(()=>{if(!l(F))return[];if(l(F).categories?.length)return l(F).categories;let e=new Set;return l(F).templates.map(e=>e.category).filter(t=>!!t&&!e.has(t)&&(e.add(t),!0)).map(e=>({id:e,label:{zh:e,en:e}}))}),on={official:{label:`官方`,cls:`trust-official`,color:`#3b82f6`,icon:he},verified:{label:`已验证`,cls:`trust-verified`,color:`#22c55e`,icon:be},community:{label:`社区`,cls:`trust-community`,color:``,icon:_e},unverified:{label:`未验证`,cls:`trust-unverified`,color:`#e0af68`,icon:R}},sn=p(()=>l(F)?new L(l(F).templates,{keys:[{name:`displayName`,weight:2},{name:`name`,weight:1.5},{name:`description`,weight:1},{name:`author`,weight:1},{name:`category`,weight:.8},{name:`keywords`,weight:1.2}],threshold:.4,ignoreLocation:!0}):null),cn=p(()=>{if(!l(F))return[];let e=l(U).trim();return(e&&l(sn)?l(sn).search(e).map(e=>e.item):l(F).templates).filter(e=>{let t=!l(W)||e.category===l(W),n=!l(G)||e.trust===l(G),r=b()||e.trust===`official`||e.trust===`verified`,i=!l(Ne)||mn(e.name);return t&&n&&r&&i})}),ln=p(()=>{let e=[...l(cn)];switch(l(Ut)){case`stars`:return e.sort((e,t)=>(l(Y)[t.name]?.stars??0)-(l(Y)[e.name]?.stars??0));case`downloads`:return e.sort((e,t)=>(l(Y)[t.name]?.downloads??0)-(l(Y)[e.name]?.downloads??0));default:return e.sort((e,t)=>{let n=e.publishedAt?new Date(e.publishedAt).getTime():0;return(t.publishedAt?new Date(t.publishedAt).getTime():0)-n})}});o(()=>{l(U),l(W),l(G),l(Ne),l(Vt),l(Ut),s(q,1)});let un=p(()=>Math.max(1,Math.ceil(l(ln).length/l(Vt)))),dn=p(()=>l(ln).slice((l(q)-1)*l(Vt),l(q)*l(Vt))),fn=p(()=>{if(!l(F))return new Set;let e=new Set;for(let t of l(F).templates)!b()&&t.trust!==`official`&&t.trust!==`verified`||e.add(t.trust);return e}),Q=p(()=>l(F)?.templates.find(e=>e.name===l(K))??null),pn=p(()=>l(Q)?on[l(Q).trust]:null),$=y(O(new Set));function mn(e){return m().has(e)&&!l($).has(e)}function hn(e){l($).add(e),s($,new Set(l($)),!0)}function gn(){if(l($).size===0)return;let e=[...l($)],t=e[e.length-1];l($).delete(t),s($,new Set(l($)),!0)}function _n(e){l($).delete(e),s($,new Set(l($)),!0)}E(async()=>{if(l($).size===0||!u.uninstallFn)return;let e=[...l($)];for(let t of e)try{await u.uninstallFn(t)}catch{}});function vn(e){return e<1024?e+` B`:e<1024*1024?(e/1024).toFixed(1)+` KB`:(e/(1024*1024)).toFixed(1)+` MB`}function yn(e,t){let n=m().get(e);return n?n!==t:!1}let bn={network_error:`网络连接失败，请检查网络后重试`,not_found:`模板不存在`,checksum_mismatch:`文件校验失败，可能已损坏，请重试`,server_error:`服务器暂时不可用，请稍后重试`};async function xn(e){if(!(!u.installFn||we.isInstalling(e.name))){we.setInstalling(e.name);try{await u.installFn(e),we.setInstalled(e.name),u.onInstallSuccess?.(e.name)}catch(t){let n=`安装失败，请重试`;if(t instanceof Error)try{let e=JSON.parse(t.message);e.error_type&&bn[e.error_type]&&(n=bn[e.error_type],e.error_type)}catch{}s(Ht,{message:n,type:`error`,onRetry:()=>{s(Ht,null),xn(e)}},!0),setTimeout(()=>{we.reset(e.name)},3500),console.error(`[StoreView] install failed:`,t)}}}async function Sn(e){if(u.readmeUrl){s(zt,!0),s(Rt,``);try{let t=(u.mode,u.readmeUrl(e)),n=await fetch(t);n.ok&&s(Rt,await n.text(),!0)}catch{}finally{s(zt,!1)}}}function Cn(e){if(l(K)===e){s(K,null);return}s(K,e,!0),Sn(e)}function wn(e){let t=ve(e);t&&(u.mode===`desktop`&&window.runtime?.BrowserOpenURL?window.runtime.BrowserOpenURL(t):window.open(t,`_blank`,`noopener,noreferrer`))}function Tn(e){return e.repository?ve(e.repository):e.repo?ye(e.repo):``}let En=new I.Renderer;En.link=({text:e})=>e,En.image=({text:e})=>e?`[${e}]`:``,I.setOptions({gfm:!0,breaks:!0,renderer:En});function Dn(e){return I.parse(e,{async:!1})}function On(e){l(J)&&l(Wt)&&!l(Wt).contains(e.target)&&s(J,!1)}k(()=>(H(),Xt(),document.addEventListener(`pointerdown`,On,!0),()=>document.removeEventListener(`pointerdown`,On,!0)));var kn=w(),An=a(kn),jn=e=>{var t=Le();let i;var a=_(t),o=e=>{d(e,Fe())};r(a,e=>{u.mode===`desktop`&&e(o)});var s=c(a,2),l=_(s),p=e=>{var t=Ie();ce(_(t),{size:16}),x(t),f(`click`,t,()=>P(u.backRoute)),d(e,t)};r(l,e=>{u.mode===`desktop`&&u.backRoute&&e(p)});var m=c(l,2),h=_(m),v=_(h,!0);x(h),x(m),x(s),Pe(c(s,2),{}),x(t),g(()=>{i=S(t,1,`page`,null,i,{"web-mode":u.mode===`web`}),n(v,u.title)}),d(e,t)},Mn=e=>{var o=Lt(),m=a(o);let y;var b=_(m),C=e=>{d(e,Re())};r(b,e=>{u.mode===`desktop`&&e(C)});var E=c(b,2),D=_(E),O=e=>{var t=ze();ce(_(t),{size:16}),x(t),f(`click`,t,()=>P(u.backRoute)),d(e,t)};r(D,e=>{u.mode===`desktop`&&u.backRoute&&e(O)});var k=c(D,2),A=_(k),j=e=>{var t=Be(),r=a(t),i=_(r,!0);x(r);var o=c(r,4),p=_(o,!0);x(o),g(()=>{n(i,u.title),n(p,l(Q).displayName)}),f(`click`,r,()=>s(K,null)),d(e,t)},I=e=>{var t=Ve(),r=_(t,!0);x(t),g(()=>n(r,u.title)),d(e,t)};r(A,e=>{l(K)&&l(Q)?e(j):e(I,-1)}),x(k);var he=c(k,2),L=e=>{var t=He(),n=_(t);{let e=p(()=>l(z)?`spin`:``);pe(n,{size:14,get class(){return l(e)}})}x(t),g(()=>t.disabled=l(z)),f(`click`,t,()=>Me()),d(e,t)};r(he,e=>{u.mode===`desktop`&&e(L)}),x(E);var _e=c(E,2),ve=e=>{var t=Ue();fe(_(t),{size:24,class:`spin`}),M(2),x(t),d(e,t)},R=e=>{var t=We(),r=_(t),i=_(r);x(r);var a=c(r,2);x(t),g(()=>n(i,`加载失败：${l(B)??``}`)),f(`click`,a,()=>Me()),d(e,t)},ye=e=>{var o=It(),m=a(o),y=_(m),b=_(y),C=_(b);me(_(C),{size:14}),x(C);var E=c(C,2);ae(E);var D=c(E,2),O=e=>{var t=Ge();xe(_(t),{size:12}),x(t),f(`click`,t,()=>s(U,``)),d(e,t)};r(D,e=>{l(U)&&e(O)}),x(b);var k=c(b,2),A=_(k);let j;var P=_(A),F=_(P,!0);x(P),le(c(P,2),{size:12}),x(A);var I=c(A,2),he=e=>{var t=qe();N(t,20,()=>[`latest`,`stars`,`downloads`],e=>e,(e,t)=>{var r=Ke();let i;var a=_(r,!0);x(r),g(()=>{i=S(r,1,`sort-option`,null,i,{selected:l(Ut)===t}),T(r,`aria-selected`,l(Ut)===t),n(a,Gt[t])}),f(`click`,r,()=>{s(Ut,t,!0),s(J,!1)}),d(e,r)}),x(t),se(3,t,()=>Se,()=>({y:-4,duration:150,easing:Ce})),d(e,t)};r(I,e=>{l(J)&&e(he)}),x(k),re(k,e=>s(Wt,e),()=>l(Wt)),x(y);var L=c(y,2),_e=_(L),ve=e=>{var t=Ye(),i=a(t);N(i,21,()=>Object.entries(on),([e,t])=>e,(e,t)=>{var i=p(()=>ie(l(t),2));let o=()=>l(i)[0],u=()=>l(i)[1];var m=w(),h=a(m),v=e=>{let t=p(()=>u().icon);var r=Je();let i;var a=c(_(r),2);ee(a,()=>l(t),(e,t)=>{t(e,{size:13})});var m=c(a,2),h=_(m,!0);x(m),x(r),g(()=>{i=S(r,1,`trust-toggle`,null,i,{active:l(G)===o()}),ne(r,`--toggle-color:${(u().color||`var(--color-muted)`)??``}`),T(r,`title`,u().label),n(h,u().label)}),f(`click`,r,()=>s(G,l(G)===o()?null:o(),!0)),d(e,r)},y=p(()=>l(fn).has(o()));r(h,e=>{l(y)&&e(v)}),d(e,m)}),x(i),M(2),d(e,t)};r(_e,e=>{l(fn).size>1&&e(ve)});var R=c(_e,2);let ye;Ee(c(_(R),2),{size:13}),M(2),x(R);var z=c(R,4),B=_(z),Ae=e=>{var t=Xe();f(`click`,t,()=>nn(`left`)),d(e,t)};r(B,e=>{l($t)&&e(Ae)});var V=c(B,2),H=_(V);let je;N(c(H,2),17,()=>l(an),e=>e.id,(e,t)=>{var r=Ze();let i;var a=_(r,!0);x(r),g(()=>{i=S(r,1,`cat-chip`,null,i,{active:l(W)===l(t).id}),n(a,l(t).label.zh)}),f(`click`,r,()=>s(W,l(W)===l(t).id?null:l(t).id,!0)),d(e,r)}),x(V),re(V,e=>s(X,e),()=>l(X));var Me=c(V,2),Pe=e=>{var t=Qe();f(`click`,t,()=>nn(`right`)),d(e,t)};r(Me,e=>{l(en)&&e(Pe)}),x(z),x(L),x(m);var Fe=c(m,2),Ie=e=>{var o=yt(),m=_(o);N(m,21,()=>l(ln),e=>e.name,(e,t)=>{let r=p(()=>on[l(t).trust]);var i=$e();let a;var o=_(i),s=_(o,!0);x(o);var u=c(o,2);let m;x(i),g(e=>{a=S(i,1,`nav-tpl-item`,null,a,{active:l(K)===l(t).name}),n(s,l(t).displayName),m=S(u,1,`nav-trust-dot`,null,m,e),ne(u,`background:${l(r).color??``}`)},[()=>({installing:we.isInstalling(l(t).name)})]),f(`click`,i,()=>Cn(l(t).name)),d(e,i)}),x(m);var h=c(m,2),v=_(h),y=_(v),b=_(y),te=_(b,!0);x(b);var C=c(b,2),ie=e=>{let t=p(()=>l(pn).icon);var r=et(),i=_(r);ee(i,()=>l(t),(e,t)=>{t(e,{size:14})});var a=c(i);x(r),g(()=>{S(r,1,`trust-badge ${l(pn).cls??``}`),ne(r,l(pn).color?`color:${l(pn).color}`:``),n(a,` ${l(pn).label??``}`)}),d(e,r)};r(C,e=>{l(pn)&&e(ie)});var E=c(C,2),D=_(E),ae=e=>{var t=w(),n=a(t),i=e=>{var t=tt();ke(_(t),{size:13}),M(2),x(t),f(`click`,t,()=>_n(l(Q).name)),d(e,t)},o=p(()=>l($).has(l(Q).name)),s=e=>{var t=nt();Oe(_(t),{size:13}),M(2),x(t),f(`click`,t,()=>hn(l(Q).name)),d(e,t)},c=p(()=>mn(l(Q).name)),m=e=>{var t=rt();ue(_(t),{size:13}),M(2),x(t),f(`click`,t,()=>xn(l(Q))),d(e,t)};r(n,e=>{l(o)?e(i):l(c)?e(s,1):u.installFn&&e(m,2)}),d(e,t)};r(D,e=>{u.mode===`desktop`&&e(ae)});var O=c(D,2),k=e=>{var t=it(),r=_(t);De(r,{size:13});var i=c(r,2),a=_(i,!0);x(i),x(t),g(e=>n(a,e),[()=>l(Qt)?l(Y)[l(Q).name].stars:Zt(l(Y)[l(Q).name].stars)]),f(`click`,t,()=>s(Qt,!l(Qt))),d(e,t)};r(O,e=>{l(Y)[l(Q).name]?.stars!=null&&e(k)});var A=c(O,2),j=e=>{var t=at(),r=_(t);ue(r,{size:13});var i=c(r,2),a=_(i,!0);x(i),x(t),g(e=>n(a,e),[()=>l(Qt)?l(Y)[l(Q).name].downloads:Zt(l(Y)[l(Q).name].downloads)]),f(`click`,t,()=>s(Qt,!l(Qt))),d(e,t)};r(A,e=>{l(Y)[l(Q).name]?.downloads!=null&&e(j)}),x(E),x(y),x(v);var se=c(v,2),P=_(se,!0);x(se);var F=c(se,2),le=e=>{var t=st();N(t,20,()=>l(Q).keywords,e=>e,(e,t)=>{var r=ot(),i=_(r,!0);x(r),g(()=>n(i,t)),d(e,r)}),x(t),d(e,t)};r(F,e=>{l(Q).keywords.length>0&&e(le)});var me=c(F,2),I=_(me),he=_(I);x(I);var L=c(I,4),_e=_(L,!0);x(L);var ve=c(L,4),R=_(ve,!0);x(ve),x(me);var ye=c(me,2),xe=e=>{var t=w(),n=a(t),i=e=>{var t=ct(),n=_(t);x(t),g(e=>{ne(t,`height:${l(Bt)*800/1200}px`),T(n,`src`,e),ne(n,`transform:scale(${l(Bt)/1200})`)},[()=>u.previewUrl(l(Q).name)]),oe(t,`clientWidth`,e=>s(Bt,e)),d(e,t)};r(n,e=>{u.previewUrl&&e(i)}),d(e,t)},Se=e=>{var t=lt();be(_(t),{size:24}),M(2),x(t),d(e,t)};r(ye,e=>{l(Q).trust===`official`||l(Q).trust===`verified`?e(xe):e(Se,-1)});var Ce=c(ye,2),z=e=>{var n=w(),i=a(n),o=e=>{var t=ut();fe(_(t),{size:16,class:`spin`}),M(2),x(t),d(e,t)},s=e=>{var n=dt(),r=c(_(n),2);t(r,()=>Te.sanitize(Dn(l(Rt))),!0),x(r),x(n),d(e,n)};r(i,e=>{l(zt)?e(o):l(Rt)&&e(s,1)}),d(e,n)};r(Ce,e=>{u.readmeUrl&&e(z)});var Ee=c(Ce,2),B=_(Ee),Ae=e=>{var t=ft();de(c(_(t)),{size:12}),x(t),g(e=>T(t,`href`,e),[()=>Tn(l(Q))]),f(`click`,t,e=>{e.preventDefault(),wn(Tn(l(Q)))}),d(e,t)},V=p(()=>Tn(l(Q)));r(B,e=>{l(V)&&e(Ae)}),x(Ee);var H=c(Ee,2),je=_(H),Me=_(je),U=e=>{var t=w(),n=a(t),i=e=>{let t=p(()=>we.getProgress(l(Q).name)),n=p(()=>l(t)?.percent??0),r=p(()=>2*Math.PI*14),i=p(()=>l(r)*(1-l(n)/100));var a=pt(),o=_(a),s=c(_(o));T(s,`stroke-dasharray`,l(r)),x(o),M(2),x(a),g(e=>{T(a,`title`,e),T(s,`stroke-dashoffset`,l(i))},[()=>l(t)?`${vn(l(t).downloaded)} / ${vn(l(t).total)}`:`准备中...`]),d(e,a)},o=p(()=>we.isInstalling(l(Q).name)),s=e=>{var t=mt();pe(_(t),{size:14}),M(),x(t),f(`click`,t,()=>xn(l(Q))),d(e,t)},u=p(()=>mn(l(Q).name)&&yn(l(Q).name,l(Q).version)),m=e=>{var t=ht();ke(_(t),{size:14}),M(),x(t),f(`click`,t,()=>_n(l(Q).name)),d(e,t)},h=p(()=>l($).has(l(Q).name)),v=e=>{var t=gt();ue(_(t),{size:14}),M(),x(t),f(`click`,t,()=>xn(l(Q))),d(e,t)},y=p(()=>!mn(l(Q).name));r(n,e=>{l(o)?e(i):l(u)?e(s,1):l(h)?e(m,2):l(y)&&e(v,3)}),d(e,t)},W=e=>{var t=_t();ue(_(t),{size:14}),M(),x(t),f(`click`,t,()=>{if(!ge(l(Q).name))return;let e=`presto://install/${l(Q).name}`;window.parent===window?window.location.href=e:window.parent.postMessage({type:`presto-open-template`,url:e},window.location.origin)}),d(e,t)};r(Me,e=>{u.mode===`desktop`&&u.installFn?e(U):u.mode===`web`&&e(W,1)}),x(je);var G=c(je,2),Ne=e=>{var t=vt();ce(_(t),{size:14,style:`transform:rotate(90deg)`}),M(2),x(t),f(`click`,t,Yt),d(e,t)};r(G,e=>{u.mode===`desktop`&&l(qt)&&e(Ne)}),x(H),x(h),re(h,e=>s(Kt,e),()=>l(Kt)),x(o),g(()=>{n(te,l(Q).displayName),n(P,l(Q).description),n(he,`v${l(Q).version??``}`),n(_e,l(Q).author),n(R,l(Q).license)}),i(`scroll`,h,Jt),d(e,o)},Le=e=>{var t=w(),i=a(t),o=e=>{var t=bt(),r=_(t),i=_(r,!0);x(r),x(t),g(()=>n(i,l(U)?`没有匹配的结果`:`暂无可用内容`)),d(e,t)},m=e=>{var t=Ft(),i=a(t),o=e=>{var t=xt(),r=_(t),i=_(r);x(r);var a=c(r,2);x(t),g(()=>n(i,`已删除 ${l($).size??``} 个模板`)),f(`click`,a,gn),se(3,t,()=>Se,()=>({y:-30})),d(e,t)};r(i,e=>{l($).size>0&&e(o)});var m=c(i,2);N(m,21,()=>l(dn),e=>e.name,(e,t)=>{let i=p(()=>on[l(t).trust]),o=p(()=>l(i).icon),s=p(()=>l($).has(l(t).name)),m=p(()=>mn(l(t).name));var h=At();let v;var y=_(h),b=_(y),te=e=>{var n=w(),i=a(n),o=e=>{var n=St();ke(_(n),{size:13}),x(n),f(`click`,n,e=>{e.stopPropagation(),_n(l(t).name)}),d(e,n)},c=e=>{var n=Ct();Oe(_(n),{size:13}),x(n),f(`click`,n,e=>{e.stopPropagation(),hn(l(t).name)}),d(e,n)},u=e=>{var n=wt();ue(_(n),{size:13}),x(n),f(`click`,n,e=>{e.stopPropagation(),xn(l(t))}),d(e,n)};r(i,e=>{l(s)?e(o):l(m)?e(c,1):e(u,-1)}),d(e,n)};r(b,e=>{u.mode===`desktop`&&e(te)});var C=c(b,2),re=_(C),ie=_(re),T=c(ie),E=e=>{d(e,Tt())};r(T,e=>{l(m)&&!l(s)&&e(E)});var D=c(T,2),ae=e=>{d(e,Et())};r(D,e=>{l(s)&&e(ae)}),x(re);var O=c(re,2),k=_(O);ee(k,()=>l(o),(e,t)=>{t(e,{size:12})});var A=c(k);x(O),x(C);var j=c(C,2),M=_(j,!0);x(j);var oe=c(j,2),N=_(oe),se=_(N);x(N);var P=c(N,2),F=_(P,!0);x(P);var ce=c(P,2),le=e=>{var i=kt(),a=_(i),o=e=>{var r=Dt(),i=_(r);De(i,{size:10});var a=c(i);x(r),g(e=>n(a,` ${e??``}`),[()=>Zt(l(Y)[l(t).name].stars)]),d(e,r)};r(a,e=>{l(Y)[l(t).name]?.stars!=null&&e(o)});var s=c(a,2),u=e=>{var r=Ot(),i=_(r);ue(i,{size:10});var a=c(i);x(r),g(e=>n(a,` ${e??``}`),[()=>Zt(l(Y)[l(t).name].downloads)]),d(e,r)};r(s,e=>{l(Y)[l(t).name]?.downloads!=null&&e(u)}),x(i),d(e,i)};r(ce,e=>{(l(Y)[l(t).name]?.stars!=null||l(Y)[l(t).name]?.downloads!=null)&&e(le)}),x(oe),x(y),x(h),g(()=>{v=S(h,1,`card-item`,null,v,{"pending-delete":l(s)}),n(ie,`${l(t).displayName??``} `),S(O,1,`card-trust ${l(i).cls??``}`),ne(O,l(i).color?`color:${l(i).color}`:``),n(A,` ${l(i).label??``}`),n(M,l(t).description),n(se,`v${l(t).version??``}`),n(F,l(t).author)}),f(`click`,y,()=>Cn(l(t).name)),f(`keydown`,y,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),Cn(l(t).name))}),d(e,h)}),x(m),re(m,e=>s(Z,e),()=>l(Z));var y=c(m,2),b=e=>{var t=Pt(),i=_(t),o=_(i);x(i);var u=c(i,2),p=e=>{var t=Nt(),i=_(t),o=c(i,2);N(o,17,()=>Array.from({length:l(un)},(e,t)=>t+1),h,(e,t)=>{var i=w(),o=a(i),c=e=>{var r=jt();let i;var a=_(r,!0);x(r),g(()=>{i=S(r,1,`page-btn`,null,i,{active:l(q)===l(t)}),n(a,l(t))}),f(`click`,r,()=>s(q,l(t),!0)),d(e,r)},u=e=>{d(e,Mt())};r(o,e=>{l(t)===1||l(t)===l(un)||l(t)>=l(q)-3&&l(t)<=l(q)+3?e(c):(l(t)===l(q)-4||l(t)===l(q)+4)&&e(u,1)}),d(e,i)});var u=c(o,2);x(t),g(()=>{i.disabled=l(q)<=1,u.disabled=l(q)>=l(un)}),f(`click`,i,()=>v(q,-1)),f(`click`,u,()=>v(q)),d(e,t)};r(u,e=>{l(un)>1&&e(p)}),x(t),g(()=>n(o,`${l(ln).length??``} 项，第 ${l(q)??``}/${l(un)??``} 页`)),d(e,t)};r(y,e=>{u.mode!==`web`&&e(b)}),d(e,t)};r(i,e=>{l(ln).length===0?e(o):e(m,-1)}),d(e,t)};r(Fe,e=>{l(K)&&l(Q)?e(Ie):e(Le,-1)}),g(()=>{j=S(A,1,`sort-trigger`,null,j,{open:l(J)}),T(A,`aria-expanded`,l(J)),n(F,Gt[l(Ut)]),ye=S(R,1,`trust-toggle installed-toggle`,null,ye,{active:l(Ne)}),je=S(H,1,`cat-chip`,null,je,{active:!l(W)})}),te(E,()=>l(U),e=>s(U,e)),f(`click`,A,()=>s(J,!l(J))),f(`click`,R,()=>s(Ne,!l(Ne))),f(`click`,H,()=>s(W,null)),d(e,o)};r(_e,e=>{l(z)&&!l(F)?e(ve):l(B)&&!l(F)?e(R,1):l(F)&&e(ye,2)});var Ae=c(_e,2),V=e=>{je(e,{get message(){return l(Ht).message},get type(){return l(Ht).type},duration:3e3,get onRetry(){return l(Ht).onRetry}})};r(Ae,e=>{l(Ht)&&e(V)}),x(m),M(2),g(()=>y=S(m,1,`page`,null,y,{"web-mode":u.mode===`web`})),d(e,o)};r(An,e=>{Ae.isOnline?e(Mn,-1):e(jn)}),d(e,kn),A()}u([`click`,`keydown`]);export{K as t};