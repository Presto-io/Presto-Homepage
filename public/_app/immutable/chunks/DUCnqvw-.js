import{$ as e,A as t,C as n,D as r,E as i,H as a,K as o,L as s,M as c,N as l,O as u,P as d,Q as f,R as p,X as m,Y as h,Z as g,_,a as v,at as y,b,dt as ee,et as x,f as te,g as ne,j as S,k as re,lt as C,m as ie,n as w,o as T,ot as E,p as ae,q as D,r as O,rt as k,s as A,tt as j,ut as M,w as oe,y as se,z as ce}from"./DYLzgBcJ.js";import{t as N}from"./B83zZuAj.js";import"./AZeLEXKw.js";import{t as P}from"./Ch_T3bjQ.js";import{t as le}from"./DN_GVMc-.js";import{t as ue}from"./CIvBABjc.js";import{t as de}from"./Br99UNih.js";import{t as fe}from"./BU65zJyL.js";import{t as pe}from"./RRgZSEMU.js";import{t as me}from"./Mf4e33dZ.js";import{t as he}from"./DrlUje19.js";import{a as F,c as ge,i as I,n as _e,o as ve,r as ye,s as L,t as be}from"./ikPg7fnR.js";import{t as xe}from"./Cs_wswLn.js";import{t as Se}from"./B8PEokUu2.js";import{r as Ce,t as we}from"./BGKXfLhA2.js";import{t as R}from"./B6xJjEn52.js";import{t as z}from"./GljZFO2g2.js";import"./DfO8PCiv2.js";import{t as Te}from"./CJn-wp-m2.js";function Ee(e,t){let n=v(t,[`children`,`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`m16 16 2 2 4-4`}],[`path`,{d:`M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14`}],[`path`,{d:`m7.5 4.27 9 5.15`}],[`polyline`,{points:`3.29 7 12 12 20.71 7`}],[`line`,{x1:`12`,x2:`12`,y1:`22`,y2:`12`}]];P(e,A({name:`package-check`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=l();i(m(r),t,`default`,{},null),c(e,r)},$$slots:{default:!0}}))}function De(e,t){let n=v(t,[`children`,`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`}]];P(e,A({name:`star`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=l();i(m(r),t,`default`,{},null),c(e,r)},$$slots:{default:!0}}))}function Oe(e,t){let n=v(t,[`children`,`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M10 11v6`}],[`path`,{d:`M14 11v6`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`}],[`path`,{d:`M3 6h18`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`}]];P(e,A({name:`trash-2`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=l();i(m(r),t,`default`,{},null),c(e,r)},$$slots:{default:!0}}))}function ke(e,t){let n=v(t,[`children`,`$$slots`,`$$events`,`$$legacy`]),r=[[`path`,{d:`M9 14 4 9l5-5`}],[`path`,{d:`M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11`}]];P(e,A({name:`undo-2`},()=>n,{get iconNode(){return r},children:(e,n)=>{var r=l();i(m(r),t,`default`,{},null),c(e,r)},$$slots:{default:!0}}))}var B=f({isOnline:typeof navigator<`u`?navigator.onLine:!0}),Ae={get isOnline(){return B.isOnline},get lastOnlineTime(){return B.lastOnlineTime},init(){typeof window>`u`||(console.log(`[network] initializing, current status:`,navigator.onLine),B.isOnline=navigator.onLine,window.addEventListener(`online`,()=>{console.log(`[network] online event received`),B.isOnline=!0,B.lastOnlineTime=new Date}),window.addEventListener(`offline`,()=>{console.log(`[network] offline event received`),B.isOnline=!1}))},refresh(){typeof navigator<`u`&&(B.isOnline=navigator.onLine)}};typeof window<`u`&&(console.log(`[network] auto-initializing`),Ae.init());var V=d(`<button class="retry-btn svelte-1cpok13">重试</button>`),H=d(`<div><span class="message svelte-1cpok13"> </span> <!></div>`);function je(n,r){E(r,!0);let i=T(r,`duration`,3,3e3),s=x(!0);D(()=>{let t=setTimeout(()=>{e(s,!1)},i());return()=>clearTimeout(t)});var l=H();let u;var d=h(l),f=h(d,!0);M(d);var m=g(d,2),_=e=>{var t=V();p(`click`,t,()=>r.onRetry()),c(e,t)};t(m,e=>{r.onRetry&&e(_)}),M(l),o(()=>{u=b(l,1,`toast ${r.type??``}`,`svelte-1cpok13`,u,{visible:a(s)}),S(f,r.message)}),c(n,l),y()}s([`click`]);var Me=d(`<div class="loading svelte-h81f8c">加载中...</div>`),U=d(`<div class="empty svelte-h81f8c"><p>未安装任何模板</p> <p class="hint svelte-h81f8c">请连接网络后下载模板</p></div>`),W=d(`<li class="template-item svelte-h81f8c"><span class="name svelte-h81f8c"> </span></li>`),G=d(`<ul class="template-list svelte-h81f8c"></ul>`),Ne=d(`<div class="offline-container svelte-h81f8c"><div class="offline-header svelte-h81f8c"><svg class="icon svelte-h81f8c" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg> <h2 class="svelte-h81f8c">离线模式</h2> <p class="subtitle svelte-h81f8c">无网络连接,以下模板可用:</p></div> <!></div>`);function Pe(n,r){E(r,!0);let i=x(f([])),s=x(!0);O(async()=>{try{await z.load(),e(i,z.templates.map(e=>e.name),!0)}catch(e){console.error(`[offline] failed to load templates:`,e)}finally{e(s,!1)}});var l=Ne(),d=g(h(l),2),p=e=>{c(e,Me())},m=e=>{c(e,U())},_=e=>{var t=G();u(t,20,()=>a(i),e=>e,(e,t)=>{var n=W(),r=h(n),i=h(r,!0);M(r),M(n),o(()=>S(i,t)),c(e,n)}),M(t),c(e,t)};t(d,e=>{a(s)?e(p):a(i).length===0?e(m,1):e(_,!1)}),M(l),c(n,l),y()}var Fe=d(`<div class="drag-region" style="--wails-draggable:drag"></div>`),Ie=d(`<button class="btn-back" aria-label="返回设置"><!></button>`),Le=d(`<div><!> <div class="page-header"><!> <nav class="breadcrumb"><h2> </h2></nav></div> <!></div>`),Re=d(`<div class="drag-region" style="--wails-draggable:drag"></div>`),ze=d(`<button class="btn-back" aria-label="返回设置"><!></button>`),Be=d(`<button class="breadcrumb-link"> </button> <span class="breadcrumb-sep">›</span> <span class="breadcrumb-current"> </span>`,1),Ve=d(`<h2> </h2>`),He=d(`<button class="btn-refresh" aria-label="刷新"><!></button>`),Ue=d(`<div class="store-empty"><!> <p>加载中…</p></div>`),We=d(`<div class="store-empty"><p class="error-text"> </p> <button class="btn-retry">重试</button></div>`),Ge=d(`<button class="search-clear"><!></button>`),Ke=d(`<button role="option"> </button>`),qe=d(`<div class="sort-dropdown" role="listbox"></div>`),Je=d(`<button><span class="trust-dot"></span> <!> <span class="trust-label"> </span></button>`),Ye=d(`<div class="trust-toggles"></div> <div class="controls-sep"></div>`,1),Xe=d(`<button class="scroll-arrow scroll-arrow-left" aria-label="向左滚动">‹</button>`),Ze=d(`<button> </button>`),Qe=d(`<button class="scroll-arrow scroll-arrow-right" aria-label="向右滚动">›</button>`),$e=d(`<button><span class="nav-tpl-name"> </span> <span></span></button>`),et=d(`<span><!> </span>`),tt=d(`<button class="btn-detail-action btn-detail-undo"><!> <span>撤销删除</span></button>`),nt=d(`<button class="btn-detail-action btn-detail-uninstall"><!> <span>卸载</span></button>`),rt=d(`<button class="btn-detail-action btn-detail-install"><!> <span>安装</span></button>`),it=d(`<button class="stat-item" title="Stars"><!> <span> </span></button>`),at=d(`<button class="stat-item" title="下载量"><!> <span> </span></button>`),ot=d(`<span class="keyword-chip"> </span>`),st=d(`<div class="detail-keywords"></div>`),ct=d(`<div class="detail-preview"><iframe sandbox="allow-scripts allow-same-origin" loading="lazy" title="预览"></iframe></div>`),lt=d(`<div class="detail-preview-placeholder"><!> <span>社区模板暂不提供预览</span></div>`),ut=d(`<div class="readme-loading"><!> <span>加载 README…</span></div>`),dt=d(`<div class="detail-readme"><h4>README</h4> <div class="readme-body"><!></div></div>`),ft=d(`<a class="repo-link">查看源码 <!></a>`),pt=d(`<div class="progress-ring-wrapper"><svg class="progress-ring" width="36" height="36" viewBox="0 0 36 36"><circle class="progress-ring-track" cx="18" cy="18" r="14"></circle><circle class="progress-ring-fill" cx="18" cy="18" r="14"></circle></svg> <span class="progress-ring-stop">■</span></div>`),mt=d(`<button class="btn-install"><!><span>更新</span></button>`),ht=d(`<button class="btn-undo-lg"><!><span>撤销删除</span></button>`),gt=d(`<button class="btn-install"><!><span>安装</span></button>`),_t=d(`<button class="btn-install"><!><span>在 Presto 中打开</span></button>`),vt=d(`<button class="btn-scroll-top" aria-label="回到顶部"><!> <span>回到顶部</span></button>`),yt=d(`<div class="master-detail"><nav class="store-nav"></nav> <div class="store-detail"><div class="detail-header"><div class="detail-title-row"><h3> </h3> <!> <div class="detail-stats-actions"><!> <!> <!></div></div></div> <p class="detail-desc"> </p> <!> <div class="detail-meta"><span> </span> <span class="meta-sep">·</span> <span> </span> <span class="meta-sep">·</span> <span> </span></div> <!> <!> <div class="detail-repo"><!></div> <div class="detail-actions"><div class="actions-left"><!></div> <!></div></div></div>`),bt=d(`<div class="store-empty"><p> </p></div>`),xt=d(`<div class="undo-bar"><span> </span> <button class="undo-btn">撤销</button></div>`),St=d(`<button class="card-action-btn card-undo-btn" title="撤销删除"><!></button>`),Ct=d(`<button class="card-action-btn card-uninstall-btn" title="卸载"><!></button>`),wt=d(`<button class="card-action-btn card-install-btn" title="安装"><!></button>`),Tt=d(`<span class="card-installed-badge">已安装</span>`),Et=d(`<span class="card-pending-badge">待删除</span>`),Dt=d(`<span class="card-stat"><!> </span>`),Ot=d(`<span class="card-stat"><!> </span>`),kt=d(`<span class="card-stats"><!> <!></span>`),At=d(`<div><div class="tpl-card" role="button" tabindex="0"><!> <div class="card-header"><span class="card-name"> <!> <!></span> <span><!> </span></div> <p class="card-desc"> </p> <div class="card-footer"><span class="card-version"> </span> <span class="card-author"> </span> <!></div></div></div>`),jt=d(`<button> </button>`),Mt=d(`<span class="page-ellipsis">…</span>`),Nt=d(`<div class="page-controls"><button class="page-btn">&lsaquo;</button> <!> <button class="page-btn">&rsaquo;</button></div>`),Pt=d(`<div class="pagination"><span class="page-info"> </span> <!></div>`),Ft=d(`<!> <div class="card-grid"></div> <!>`,1),It=d(`<div class="filter-toolbar"><div class="search-sort-row"><div class="search-box"><span class="search-icon"><!></span> <input type="text" class="search-input" placeholder="搜索名称、描述或标签…"/> <!></div> <div class="sort-wrapper"><button aria-haspopup="listbox"><span class="sort-label"> </span> <!></button> <!></div></div> <div class="controls-row"><!> <button style="--toggle-color:#22c55e" title="已安装"><span class="trust-dot"></span> <!> <span class="trust-label">已安装</span></button> <div class="controls-sep"></div> <div class="category-bar"><!> <div class="category-scroll"><button>全部</button> <!></div> <!></div></div></div> <!>`,1),Lt=d(`<div><!> <div class="page-header"><!> <nav class="breadcrumb"><!></nav> <!></div> <!> <!></div> <style>.page {
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
  }</style>`,1);function K(i,s){E(s,!0);let d=T(s,`installedVersions`,19,()=>new Map),v=T(s,`communityEnabled`,3,!0),A=T(s,`initialSelectedId`,3,null),P=x(null),z=x(!1),B=x(null);function V(){return s.mode,s.registryUrl}async function H(t=!1){if(!(a(P)&&!t)){e(z,!0),e(B,null);try{let t=await fetch(V());if(!t.ok)throw Error(`${t.status}`);e(P,await t.json(),!0)}catch(t){e(B,t instanceof Error?t.message:String(t),!0)}finally{e(z,!1)}}}async function Me(){return H(!0)}let U=x(``),W=x(null),G=x(null),Ne=x(!1),K=x(null);D(()=>{A()!==null&&e(K,A())});let Rt=x(``),zt=x(!1),Bt=x(0),q=x(1),Vt=x(24),Ht=x(null),Ut=x(`latest`),J=x(!1),Wt=x(void 0),Gt={latest:`最新发布`,stars:`最多星标`,downloads:`最多下载`},Y=x(f({})),Kt=x(null),qt=x(!1);function Jt(){a(Kt)&&e(qt,a(Kt).scrollTop>300)}function Yt(){a(Kt)?.scrollTo({top:0,behavior:`smooth`})}async function Xt(){if(s.statsUrl)try{let t=await fetch(s.statsUrl);t.ok&&e(Y,await t.json(),!0)}catch{}}function Zt(e){return e==null?``:e>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,``)+`k`:String(e)}let Qt=x(!1),X=x(null),$t=x(!1),en=x(!1);function tn(){a(X)&&(e($t,a(X).scrollLeft>4),e(en,a(X).scrollLeft<a(X).scrollWidth-a(X).clientWidth-4))}function nn(e){a(X)?.scrollBy({left:e===`left`?-200:200,behavior:`smooth`})}D(()=>{if(!a(X))return;tn(),a(X).addEventListener(`scroll`,tn,{passive:!0});let e=new ResizeObserver(tn);return e.observe(a(X)),()=>{a(X)?.removeEventListener(`scroll`,tn),e.disconnect()}});let Z=x(null);function rn(){if(s.mode===`web`||!a(Z))return;let t=getComputedStyle(a(Z)),n=parseFloat(t.gap)||12,r=200+n,i=Math.max(1,Math.floor((a(Z).clientWidth+n)/r)),o=a(Z).querySelector(`.tpl-card`),c=(o?o.offsetHeight:120)+n,l=i*Math.max(1,Math.round((a(Z).clientHeight+n)/c));l>0&&l!==a(Vt)&&e(Vt,l)}D(()=>{if(!a(Z))return;rn();let e=new ResizeObserver(rn);return e.observe(a(Z)),()=>e.disconnect()}),D(()=>{s.mode===`web`&&a(P)?e(Vt,a(P).templates.length||100,!0):a(P)&&a(Z)&&requestAnimationFrame(()=>rn())});let an=k(()=>{if(!a(P))return[];if(a(P).categories?.length)return a(P).categories;let e=new Set;return a(P).templates.map(e=>e.category).filter(t=>!!t&&!e.has(t)&&(e.add(t),!0)).map(e=>({id:e,label:{zh:e,en:e}}))}),on={official:{label:`官方`,cls:`trust-official`,color:`#3b82f6`,icon:ge},verified:{label:`已验证`,cls:`trust-verified`,color:`#22c55e`,icon:xe},community:{label:`社区`,cls:`trust-community`,color:``,icon:ve},unverified:{label:`未验证`,cls:`trust-unverified`,color:`#e0af68`,icon:L}},sn=k(()=>a(P)?new I(a(P).templates,{keys:[{name:`displayName`,weight:2},{name:`name`,weight:1.5},{name:`description`,weight:1},{name:`author`,weight:1},{name:`category`,weight:.8},{name:`keywords`,weight:1.2}],threshold:.4,ignoreLocation:!0}):null),cn=k(()=>{if(!a(P))return[];let e=a(U).trim();return(e&&a(sn)?a(sn).search(e).map(e=>e.item):a(P).templates).filter(e=>{let t=!a(W)||e.category===a(W),n=!a(G)||e.trust===a(G),r=v()||e.trust===`official`||e.trust===`verified`,i=!a(Ne)||mn(e.name);return t&&n&&r&&i})}),ln=k(()=>{let e=[...a(cn)];switch(a(Ut)){case`stars`:return e.sort((e,t)=>(a(Y)[t.name]?.stars??0)-(a(Y)[e.name]?.stars??0));case`downloads`:return e.sort((e,t)=>(a(Y)[t.name]?.downloads??0)-(a(Y)[e.name]?.downloads??0));default:return e.sort((e,t)=>{let n=e.publishedAt?new Date(e.publishedAt).getTime():0;return(t.publishedAt?new Date(t.publishedAt).getTime():0)-n})}});D(()=>{a(U),a(W),a(G),a(Ne),a(Vt),a(Ut),e(q,1)});let un=k(()=>Math.max(1,Math.ceil(a(ln).length/a(Vt)))),dn=k(()=>a(ln).slice((a(q)-1)*a(Vt),a(q)*a(Vt))),fn=k(()=>{if(!a(P))return new Set;let e=new Set;for(let t of a(P).templates)!v()&&t.trust!==`official`&&t.trust!==`verified`||e.add(t.trust);return e}),Q=k(()=>a(P)?.templates.find(e=>e.name===a(K))??null),pn=k(()=>a(Q)?on[a(Q).trust]:null),$=x(f(new Set));function mn(e){return d().has(e)&&!a($).has(e)}function hn(t){a($).add(t),e($,new Set(a($)),!0)}function gn(){if(a($).size===0)return;let t=[...a($)],n=t[t.length-1];a($).delete(n),e($,new Set(a($)),!0)}function _n(t){a($).delete(t),e($,new Set(a($)),!0)}w(async()=>{if(a($).size===0||!s.uninstallFn)return;let e=[...a($)];for(let t of e)try{await s.uninstallFn(t)}catch{}});function vn(e){return e<1024?e+` B`:e<1024*1024?(e/1024).toFixed(1)+` KB`:(e/(1024*1024)).toFixed(1)+` MB`}function yn(e,t){let n=d().get(e);return n?n!==t:!1}let bn={network_error:`网络连接失败，请检查网络后重试`,not_found:`模板不存在`,checksum_mismatch:`文件校验失败，可能已损坏，请重试`,server_error:`服务器暂时不可用，请稍后重试`};async function xn(t){if(!(!s.installFn||R.isInstalling(t.name))){R.setInstalling(t.name);try{await s.installFn(t),R.setInstalled(t.name),s.onInstallSuccess?.(t.name)}catch(n){let r=`安装失败，请重试`;if(n instanceof Error)try{let e=JSON.parse(n.message);e.error_type&&bn[e.error_type]&&(r=bn[e.error_type],e.error_type)}catch{}e(Ht,{message:r,type:`error`,onRetry:()=>{e(Ht,null),xn(t)}},!0),setTimeout(()=>{R.reset(t.name)},3500),console.error(`[StoreView] install failed:`,n)}}}async function Sn(t){if(s.readmeUrl){e(zt,!0),e(Rt,``);try{let n=(s.mode,s.readmeUrl(t)),r=await fetch(n);r.ok&&e(Rt,await r.text(),!0)}catch{}finally{e(zt,!1)}}}function Cn(t){if(a(K)===t){e(K,null);return}e(K,t,!0),Sn(t)}function wn(e){let t=ye(e);t&&(s.mode===`desktop`&&window.runtime?.BrowserOpenURL?window.runtime.BrowserOpenURL(t):window.open(t,`_blank`,`noopener,noreferrer`))}function Tn(e){return e.repository?ye(e.repository):e.repo?be(e.repo):``}let En=new F.Renderer;En.link=({text:e})=>e,En.image=({text:e})=>e?`[${e}]`:``,F.setOptions({gfm:!0,breaks:!0,renderer:En});function Dn(e){return F.parse(e,{async:!1})}function On(t){a(J)&&a(Wt)&&!a(Wt).contains(t.target)&&e(J,!1)}O(()=>(H(),Xt(),document.addEventListener(`pointerdown`,On,!0),()=>document.removeEventListener(`pointerdown`,On,!0)));var kn=l(),An=m(kn),jn=e=>{var n=Le();let r;var i=h(n),a=e=>{c(e,Fe())};t(i,e=>{s.mode===`desktop`&&e(a)});var l=g(i,2),u=h(l),d=e=>{var t=Ie();le(h(t),{size:16}),M(t),p(`click`,t,()=>N(s.backRoute)),c(e,t)};t(u,e=>{s.mode===`desktop`&&s.backRoute&&e(d)});var f=g(u,2),m=h(f),_=h(m,!0);M(m),M(f),M(l),Pe(g(l,2),{}),M(n),o(()=>{r=b(n,1,`page`,null,r,{"web-mode":s.mode===`web`}),S(_,s.title)}),c(e,n)},Mn=i=>{var d=Lt(),f=m(d);let v;var y=h(f),x=e=>{c(e,Re())};t(y,e=>{s.mode===`desktop`&&e(x)});var w=g(y,2),T=h(w),E=e=>{var t=ze();le(h(t),{size:16}),M(t),p(`click`,t,()=>N(s.backRoute)),c(e,t)};t(T,e=>{s.mode===`desktop`&&s.backRoute&&e(E)});var D=g(T,2),O=h(D),A=t=>{var n=Be(),r=m(n),i=h(r,!0);M(r);var l=g(r,4),u=h(l,!0);M(l),o(()=>{S(i,s.title),S(u,a(Q).displayName)}),p(`click`,r,()=>e(K,null)),c(t,n)},F=e=>{var t=Ve(),n=h(t,!0);M(t),o(()=>S(n,s.title)),c(e,t)};t(O,e=>{a(K)&&a(Q)?e(A):e(F,!1)}),M(D);var ge=g(D,2),I=e=>{var t=He(),n=h(t);{let e=k(()=>a(z)?`spin`:``);me(n,{size:14,get class(){return a(e)}})}M(t),o(()=>t.disabled=a(z)),p(`click`,t,()=>Me()),c(e,t)};t(ge,e=>{s.mode===`desktop`&&e(I)}),M(w);var ve=g(w,2),ye=e=>{var t=Ue();pe(h(t),{size:24,class:`spin`}),C(2),M(t),c(e,t)},L=e=>{var t=We(),n=h(t),r=h(n);M(n);var i=g(n,2);M(t),o(()=>S(r,`加载失败：${a(B)??``}`)),p(`click`,i,()=>Me()),c(e,t)},be=i=>{var d=It(),f=m(d),v=h(f),y=h(v),x=h(y);he(h(x),{size:14}),M(x);var w=g(x,2);ne(w);var T=g(w,2),E=t=>{var n=Ge();Se(h(n),{size:12}),M(n),p(`click`,n,()=>e(U,``)),c(t,n)};t(T,e=>{a(U)&&e(E)}),M(y);var D=g(y,2),O=h(D);let A;var N=h(O),P=h(N,!0);M(N),ue(g(N,2),{size:12}),M(O);var F=g(O,2),ge=t=>{var r=qe();u(r,20,()=>[`latest`,`stars`,`downloads`],e=>e,(t,n)=>{var r=Ke();let i;var s=h(r,!0);M(r),o(()=>{i=b(r,1,`sort-option`,null,i,{selected:a(Ut)===n}),_(r,`aria-selected`,a(Ut)===n),S(s,Gt[n])}),p(`click`,r,()=>{e(Ut,n,!0),e(J,!1)}),c(t,r)}),M(r),n(3,r,()=>Ce,()=>({y:-4,duration:150,easing:we})),c(t,r)};t(F,e=>{a(J)&&e(ge)}),M(D),te(D,t=>e(Wt,t),()=>a(Wt)),M(v);var I=g(v,2),ve=h(I),ye=n=>{var r=Ye(),i=m(r);u(i,21,()=>Object.entries(on),([e,t])=>e,(n,r)=>{var i=k(()=>ee(a(r),2));let s=()=>a(i)[0],u=()=>a(i)[1];var d=l(),f=m(d),v=t=>{let n=k(()=>u().icon);var r=Je();let i;var l=g(h(r),2);oe(l,()=>a(n),(e,t)=>{t(e,{size:13})});var d=g(l,2),f=h(d,!0);M(d),M(r),o(()=>{i=b(r,1,`trust-toggle`,null,i,{active:a(G)===s()}),se(r,`--toggle-color:${(u().color||`var(--color-muted)`)??``}`),_(r,`title`,u().label),S(f,u().label)}),p(`click`,r,()=>e(G,a(G)===s()?null:s(),!0)),c(t,r)},y=k(()=>a(fn).has(s()));t(f,e=>{a(y)&&e(v)}),c(n,d)}),M(i),C(2),c(n,r)};t(ve,e=>{a(fn).size>1&&e(ye)});var L=g(ve,2);let be;Ee(g(h(L),2),{size:13}),C(2),M(L);var z=g(L,4),B=h(z),Ae=e=>{var t=Xe();p(`click`,t,()=>nn(`left`)),c(e,t)};t(B,e=>{a($t)&&e(Ae)});var V=g(B,2),H=h(V);let je;u(g(H,2),17,()=>a(an),e=>e.id,(t,n)=>{var r=Ze();let i;var s=h(r,!0);M(r),o(()=>{i=b(r,1,`cat-chip`,null,i,{active:a(W)===a(n).id}),S(s,a(n).label.zh)}),p(`click`,r,()=>e(W,a(W)===a(n).id?null:a(n).id,!0)),c(t,r)}),M(V),te(V,t=>e(X,t),()=>a(X));var Me=g(V,2),Pe=e=>{var t=Qe();p(`click`,t,()=>nn(`right`)),c(e,t)};t(Me,e=>{a(en)&&e(Pe)}),M(z),M(I),M(f);var Fe=g(f,2),Ie=n=>{var i=yt(),d=h(i);u(d,21,()=>a(ln),e=>e.name,(e,t)=>{let n=k(()=>on[a(t).trust]);var r=$e();let i;var s=h(r),l=h(s,!0);M(s);var u=g(s,2);let d;M(r),o(e=>{i=b(r,1,`nav-tpl-item`,null,i,{active:a(K)===a(t).name}),S(l,a(t).displayName),d=b(u,1,`nav-trust-dot`,null,d,e),se(u,`background:${a(n).color??``}`)},[()=>({installing:R.isInstalling(a(t).name)})]),p(`click`,r,()=>Cn(a(t).name)),c(e,r)}),M(d);var f=g(d,2),v=h(f),y=h(v),ee=h(y),x=h(ee,!0);M(ee);var ne=g(ee,2),re=e=>{let t=k(()=>a(pn).icon);var n=et(),r=h(n);oe(r,()=>a(t),(e,t)=>{t(e,{size:14})});var i=g(r);M(n),o(()=>{b(n,1,`trust-badge ${a(pn).cls??``}`),se(n,a(pn).color?`color:${a(pn).color}`:``),S(i,` ${a(pn).label??``}`)}),c(e,n)};t(ne,e=>{a(pn)&&e(re)});var ie=g(ne,2),w=h(ie),T=e=>{var n=l(),r=m(n),i=e=>{var t=tt();ke(h(t),{size:13}),C(2),M(t),p(`click`,t,()=>_n(a(Q).name)),c(e,t)},o=k(()=>a($).has(a(Q).name)),u=e=>{var t=nt();Oe(h(t),{size:13}),C(2),M(t),p(`click`,t,()=>hn(a(Q).name)),c(e,t)},d=k(()=>mn(a(Q).name)),f=e=>{var t=rt();de(h(t),{size:13}),C(2),M(t),p(`click`,t,()=>xn(a(Q))),c(e,t)};t(r,e=>{a(o)?e(i):a(d)?e(u,1):s.installFn&&e(f,2)}),c(e,n)};t(w,e=>{s.mode===`desktop`&&e(T)});var E=g(w,2),D=t=>{var n=it(),r=h(n);De(r,{size:13});var i=g(r,2),s=h(i,!0);M(i),M(n),o(e=>S(s,e),[()=>a(Qt)?a(Y)[a(Q).name].stars:Zt(a(Y)[a(Q).name].stars)]),p(`click`,n,()=>e(Qt,!a(Qt))),c(t,n)};t(E,e=>{a(Y)[a(Q).name]?.stars!=null&&e(D)});var O=g(E,2),A=t=>{var n=at(),r=h(n);de(r,{size:13});var i=g(r,2),s=h(i,!0);M(i),M(n),o(e=>S(s,e),[()=>a(Qt)?a(Y)[a(Q).name].downloads:Zt(a(Y)[a(Q).name].downloads)]),p(`click`,n,()=>e(Qt,!a(Qt))),c(t,n)};t(O,e=>{a(Y)[a(Q).name]?.downloads!=null&&e(A)}),M(ie),M(y),M(v);var j=g(v,2),N=h(j,!0);M(j);var P=g(j,2),ue=e=>{var t=st();u(t,20,()=>a(Q).keywords,e=>e,(e,t)=>{var n=ot(),r=h(n,!0);M(n),o(()=>S(r,t)),c(e,n)}),M(t),c(e,t)};t(P,e=>{a(Q).keywords.length>0&&e(ue)});var he=g(P,2),F=h(he),ge=h(F);M(F);var I=g(F,4),ve=h(I,!0);M(I);var ye=g(I,4),L=h(ye,!0);M(ye),M(he);var be=g(he,2),Se=n=>{var r=l(),i=m(r),u=t=>{var n=ct(),r=h(n);M(n),o(e=>{se(n,`height:${a(Bt)*800/1200}px`),_(r,`src`,e),se(r,`transform:scale(${a(Bt)/1200})`)},[()=>s.previewUrl(a(Q).name)]),ae(n,`clientWidth`,t=>e(Bt,t)),c(t,n)};t(i,e=>{s.previewUrl&&e(u)}),c(n,r)},Ce=e=>{var t=lt();xe(h(t),{size:24}),C(2),M(t),c(e,t)};t(be,e=>{a(Q).trust===`official`||a(Q).trust===`verified`?e(Se):e(Ce,!1)});var we=g(be,2),z=e=>{var n=l(),i=m(n),o=e=>{var t=ut();pe(h(t),{size:16,class:`spin`}),C(2),M(t),c(e,t)},s=e=>{var t=dt(),n=g(h(t),2);r(h(n),()=>Te.sanitize(Dn(a(Rt)))),M(n),M(t),c(e,t)};t(i,e=>{a(zt)?e(o):a(Rt)&&e(s,1)}),c(e,n)};t(we,e=>{s.readmeUrl&&e(z)});var Ee=g(we,2),B=h(Ee),Ae=e=>{var t=ft();fe(g(h(t)),{size:12}),M(t),o(e=>_(t,`href`,e),[()=>Tn(a(Q))]),p(`click`,t,e=>{e.preventDefault(),wn(Tn(a(Q)))}),c(e,t)},V=k(()=>Tn(a(Q)));t(B,e=>{a(V)&&e(Ae)}),M(Ee);var H=g(Ee,2),je=h(H),Me=h(je),U=e=>{var n=l(),r=m(n),i=e=>{let t=k(()=>R.getProgress(a(Q).name)),n=k(()=>a(t)?.percent??0),r=k(()=>2*Math.PI*14),i=k(()=>a(r)*(1-a(n)/100));var s=pt(),l=h(s),u=g(h(l));_(u,`stroke-dasharray`,a(r)),M(l),C(2),M(s),o(e=>{_(s,`title`,e),_(u,`stroke-dashoffset`,a(i))},[()=>a(t)?`${vn(a(t).downloaded)} / ${vn(a(t).total)}`:`准备中...`]),c(e,s)},s=k(()=>R.isInstalling(a(Q).name)),u=e=>{var t=mt();me(h(t),{size:14}),C(),M(t),p(`click`,t,()=>xn(a(Q))),c(e,t)},d=k(()=>mn(a(Q).name)&&yn(a(Q).name,a(Q).version)),f=e=>{var t=ht();ke(h(t),{size:14}),C(),M(t),p(`click`,t,()=>_n(a(Q).name)),c(e,t)},v=k(()=>a($).has(a(Q).name)),y=e=>{var t=gt();de(h(t),{size:14}),C(),M(t),p(`click`,t,()=>xn(a(Q))),c(e,t)},b=k(()=>!mn(a(Q).name));t(r,e=>{a(s)?e(i):a(d)?e(u,1):a(v)?e(f,2):a(b)&&e(y,3)}),c(e,n)},W=e=>{var t=_t();de(h(t),{size:14}),C(),M(t),p(`click`,t,()=>{let e=_e(a(Q).name);e&&(window.parent===window?window.location.href=e:window.parent.postMessage({type:`presto-open-template`,url:e},window.location.origin))}),c(e,t)};t(Me,e=>{s.mode===`desktop`&&s.installFn?e(U):s.mode===`web`&&e(W,1)}),M(je);var G=g(je,2),Ne=e=>{var t=vt();le(h(t),{size:14,style:`transform:rotate(90deg)`}),C(2),M(t),p(`click`,t,Yt),c(e,t)};t(G,e=>{s.mode===`desktop`&&a(qt)&&e(Ne)}),M(H),M(f),te(f,t=>e(Kt,t),()=>a(Kt)),M(i),o(()=>{S(x,a(Q).displayName),S(N,a(Q).description),S(ge,`v${a(Q).version??``}`),S(ve,a(Q).author),S(L,a(Q).license)}),ce(`scroll`,f,Jt),c(n,i)},Le=r=>{var i=l(),d=m(i),f=e=>{var t=bt(),n=h(t),r=h(n,!0);M(n),M(t),o(()=>S(r,a(U)?`没有匹配的结果`:`暂无可用内容`)),c(e,t)},_=r=>{var i=Ft(),d=m(i),f=e=>{var t=xt(),r=h(t),i=h(r);M(r);var s=g(r,2);M(t),o(()=>S(i,`已删除 ${a($).size??``} 个模板`)),p(`click`,s,gn),n(3,t,()=>Ce,()=>({y:-30})),c(e,t)};t(d,e=>{a($).size>0&&e(f)});var _=g(d,2);u(_,21,()=>a(dn),e=>e.name,(e,n)=>{let r=k(()=>on[a(n).trust]),i=k(()=>a(r).icon),u=k(()=>a($).has(a(n).name)),d=k(()=>mn(a(n).name));var f=At();let _;var v=h(f),y=h(v),ee=e=>{var r=l(),i=m(r),o=e=>{var t=St();ke(h(t),{size:13}),M(t),p(`click`,t,e=>{e.stopPropagation(),_n(a(n).name)}),c(e,t)},s=e=>{var t=Ct();Oe(h(t),{size:13}),M(t),p(`click`,t,e=>{e.stopPropagation(),hn(a(n).name)}),c(e,t)},f=e=>{var t=wt();de(h(t),{size:13}),M(t),p(`click`,t,e=>{e.stopPropagation(),xn(a(n))}),c(e,t)};t(i,e=>{a(u)?e(o):a(d)?e(s,1):e(f,!1)}),c(e,r)};t(y,e=>{s.mode===`desktop`&&e(ee)});var x=g(y,2),te=h(x),ne=h(te),re=g(ne),C=e=>{c(e,Tt())};t(re,e=>{a(d)&&!a(u)&&e(C)});var ie=g(re,2),w=e=>{c(e,Et())};t(ie,e=>{a(u)&&e(w)}),M(te);var T=g(te,2),E=h(T);oe(E,()=>a(i),(e,t)=>{t(e,{size:12})});var ae=g(E);M(T),M(x);var D=g(x,2),O=h(D,!0);M(D);var A=g(D,2),j=h(A),ce=h(j);M(j);var N=g(j,2),P=h(N,!0);M(N);var le=g(N,2),ue=e=>{var r=kt(),i=h(r),s=e=>{var t=Dt(),r=h(t);De(r,{size:10});var i=g(r);M(t),o(e=>S(i,` ${e??``}`),[()=>Zt(a(Y)[a(n).name].stars)]),c(e,t)};t(i,e=>{a(Y)[a(n).name]?.stars!=null&&e(s)});var l=g(i,2),u=e=>{var t=Ot(),r=h(t);de(r,{size:10});var i=g(r);M(t),o(e=>S(i,` ${e??``}`),[()=>Zt(a(Y)[a(n).name].downloads)]),c(e,t)};t(l,e=>{a(Y)[a(n).name]?.downloads!=null&&e(u)}),M(r),c(e,r)};t(le,e=>{(a(Y)[a(n).name]?.stars!=null||a(Y)[a(n).name]?.downloads!=null)&&e(ue)}),M(A),M(v),M(f),o(()=>{_=b(f,1,`card-item`,null,_,{"pending-delete":a(u)}),S(ne,`${a(n).displayName??``} `),b(T,1,`card-trust ${a(r).cls??``}`),se(T,a(r).color?`color:${a(r).color}`:``),S(ae,` ${a(r).label??``}`),S(O,a(n).description),S(ce,`v${a(n).version??``}`),S(P,a(n).author)}),p(`click`,v,()=>Cn(a(n).name)),p(`keydown`,v,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),Cn(a(n).name))}),c(e,f)}),M(_),te(_,t=>e(Z,t),()=>a(Z));var v=g(_,2),y=n=>{var r=Pt(),i=h(r),s=h(i);M(i);var d=g(i,2),f=n=>{var r=Nt(),i=h(r),s=g(i,2);u(s,17,()=>Array.from({length:a(un)},(e,t)=>t+1),re,(n,r)=>{var i=l(),s=m(i),u=t=>{var n=jt();let i;var s=h(n,!0);M(n),o(()=>{i=b(n,1,`page-btn`,null,i,{active:a(q)===a(r)}),S(s,a(r))}),p(`click`,n,()=>e(q,a(r),!0)),c(t,n)},d=e=>{c(e,Mt())};t(s,e=>{a(r)===1||a(r)===a(un)||a(r)>=a(q)-3&&a(r)<=a(q)+3?e(u):(a(r)===a(q)-4||a(r)===a(q)+4)&&e(d,1)}),c(n,i)});var d=g(s,2);M(r),o(()=>{i.disabled=a(q)<=1,d.disabled=a(q)>=a(un)}),p(`click`,i,()=>j(q,-1)),p(`click`,d,()=>j(q)),c(n,r)};t(d,e=>{a(un)>1&&e(f)}),M(r),o(()=>S(s,`${a(ln).length??``} 项，第 ${a(q)??``}/${a(un)??``} 页`)),c(n,r)};t(v,e=>{s.mode!==`web`&&e(y)}),c(r,i)};t(d,e=>{a(ln).length===0?e(f):e(_,!1)}),c(r,i)};t(Fe,e=>{a(K)&&a(Q)?e(Ie):e(Le,!1)}),o(()=>{A=b(O,1,`sort-trigger`,null,A,{open:a(J)}),_(O,`aria-expanded`,a(J)),S(P,Gt[a(Ut)]),be=b(L,1,`trust-toggle installed-toggle`,null,be,{active:a(Ne)}),je=b(H,1,`cat-chip`,null,je,{active:!a(W)})}),ie(w,()=>a(U),t=>e(U,t)),p(`click`,O,()=>e(J,!a(J))),p(`click`,L,()=>e(Ne,!a(Ne))),p(`click`,H,()=>e(W,null)),c(i,d)};t(ve,e=>{a(z)&&!a(P)?e(ye):a(B)&&!a(P)?e(L,1):a(P)&&e(be,2)});var Ae=g(ve,2),V=e=>{je(e,{get message(){return a(Ht).message},get type(){return a(Ht).type},duration:3e3,get onRetry(){return a(Ht).onRetry}})};t(Ae,e=>{a(Ht)&&e(V)}),M(f),C(2),o(()=>v=b(f,1,`page`,null,v,{"web-mode":s.mode===`web`})),c(i,d)};t(An,e=>{Ae.isOnline?e(Mn,!1):e(jn)}),c(i,kn),y()}s([`click`,`keydown`]);export{K as t};