import{c as jr,a as s,f as l}from"./TxxIvwuA.js";import{o as ka}from"./BvXJk9TI.js";import{i as mt,k as ft,f as ar,e as He,p as Ve,N as se,b as v,c as a,r as e,s as n,t as k,g as r,a as Ge,d as S,M as ir,u as z,$ as gt,h as ga}from"./_AMHncHj.js";import{d as za,s as h,a as y,e as bt}from"./CpBeNQbe.js";import{l as ht,s as xt,p as Se,i as p}from"./wVePxfa8.js";import{I as _t,s as wt,a as tr,e as Dr,r as yt,b as Ur,t as kt,c as oe,i as zt}from"./D-vXJnBq.js";import{h as St,p as Mt}from"./C8jGVuFI.js";import{c as Ne}from"./BxURX25r.js";import{b as Rt}from"./B0kMOOfW.js";import{b as ye}from"./BjFbk-KB.js";import{c as Et,f as Tt}from"./DLw63jUa.js";import{g as ke}from"./BrMkrmlD.js";import{g as We,S as Ot,U as Lt,a as Ct,F as Bt}from"./BuObd6tE.js";import{i as Gr}from"./zfmisBgB.js";import{t as ba}from"./B18n8ciW.js";import{A as qe}from"./CUxwC6Jv.js";import{R as ha}from"./BhNfl8W7.js";import{L as xa}from"./CRxjDQXF.js";import{S as It}from"./CCzsQXwu.js";import{C as Ut}from"./DHfuEopC.js";import{X as jt}from"./DOhpFRgM.js";import{S as _a}from"./CaLB3GT4.js";import{S as wa}from"./DK8ScJ8c.js";import{D as ze}from"./D3IDtQtY.js";import{E as Dt}from"./DVYZswXp.js";class Ye{#r=new WeakMap;#e;#a;static entries=new WeakMap;constructor(o){this.#a=o}observe(o,E){var U=this.#r.get(o)||new Set;return U.add(E),this.#r.set(o,U),this.#t().observe(o,this.#a),()=>{var N=this.#r.get(o);N.delete(E),N.size===0&&(this.#r.delete(o),this.#e.unobserve(o))}}#t(){return this.#e??(this.#e=new ResizeObserver(o=>{for(var E of o){Ye.entries.set(E.target,E);for(var U of this.#r.get(E.target)||[])U(E)}}))}}var At=new Ye({box:"border-box"});function Ft(lr,o,E){var U=At.observe(lr,()=>E(lr[o]));mt(()=>(ft(()=>E(lr[o])),U))}function ya(lr,o){const E=ht(o,["children","$$slots","$$events","$$legacy"]);const U=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"}]];_t(lr,xt({name:"star"},()=>E,{get iconNode(){return U},children:(N,R)=>{var Y=jr(),pr=ar(Y);wt(pr,o,"default",{}),s(N,Y)},$$slots:{default:!0}}))}let Yr=He({isOnline:typeof navigator<"u"?navigator.onLine:!0});const Sa={get isOnline(){return Yr.isOnline},get lastOnlineTime(){return Yr.lastOnlineTime},init(){typeof window>"u"||(console.log("[network] initializing, current status:",navigator.onLine),Yr.isOnline=navigator.onLine,window.addEventListener("online",()=>{console.log("[network] online event received"),Yr.isOnline=!0,Yr.lastOnlineTime=new Date}),window.addEventListener("offline",()=>{console.log("[network] offline event received"),Yr.isOnline=!1}))},refresh(){typeof navigator<"u"&&(Yr.isOnline=navigator.onLine)}};typeof window<"u"&&(console.log("[network] auto-initializing"),Sa.init());var Pt=l('<button class="retry-btn svelte-1cpok13">重试</button>'),Nt=l('<div><span class="message svelte-1cpok13"> </span> <!></div>');function Wt(lr,o){Ve(o,!0);let E=Se(o,"duration",3,3e3),U=S(!0);se(()=>{const W=setTimeout(()=>{v(U,!1)},E());return()=>clearTimeout(W)});var N=Nt();let R;var Y=a(N),pr=a(Y,!0);e(Y);var ne=n(Y,2);{var B=W=>{var J=Pt();y("click",J,()=>o.onRetry()),s(W,J)};p(ne,W=>{o.onRetry&&W(B)})}e(N),k(()=>{R=tr(N,1,`toast ${o.type??""}`,"svelte-1cpok13",R,{visible:r(U)}),h(pr,o.message)}),s(lr,N),Ge()}za(["click"]);var qt=l('<div class="loading svelte-h81f8c">加载中...</div>'),Ht=l('<div class="empty svelte-h81f8c"><p>未安装任何模板</p> <p class="hint svelte-h81f8c">请连接网络后下载模板</p></div>'),Vt=l('<li class="template-item svelte-h81f8c"><span class="name svelte-h81f8c"> </span></li>'),Gt=l('<ul class="template-list svelte-h81f8c"></ul>'),Yt=l('<div class="offline-container svelte-h81f8c"><div class="offline-header svelte-h81f8c"><svg class="icon svelte-h81f8c" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg> <h2 class="svelte-h81f8c">离线模式</h2> <p class="subtitle svelte-h81f8c">无网络连接,以下模板可用:</p></div> <!></div>');function Jt(lr,o){Ve(o,!0);let E=S(He([])),U=S(!0);ka(async()=>{try{await ba.load(),v(E,ba.templates.map(B=>B.name),!0)}catch(B){console.error("[offline] failed to load templates:",B)}finally{v(U,!1)}});var N=Yt(),R=n(a(N),2);{var Y=B=>{var W=qt();s(B,W)},pr=B=>{var W=Ht();s(B,W)},ne=B=>{var W=Gt();Dr(W,20,()=>r(E),J=>J,(J,ur)=>{var mr=Vt(),or=a(mr),Jr=a(or,!0);e(or),e(mr),k(()=>h(Jr,ur)),s(J,mr)}),e(W),s(B,W)};p(R,B=>{r(U)?B(Y):r(E).length===0?B(pr,1):B(ne,!1)})}e(N),s(lr,N),Ge()}var Kt=l('<div class="drag-region" style="--wails-draggable:drag"></div>'),Qt=l('<button class="btn-back" aria-label="返回设置"><!></button>'),Xt=l('<div><!> <div class="page-header"><!> <nav class="breadcrumb"><h2> </h2></nav></div> <!></div>'),Zt=l('<div class="drag-region" style="--wails-draggable:drag"></div>'),$t=l('<button class="btn-back" aria-label="返回设置"><!></button>'),ro=l('<button class="breadcrumb-link"> </button> <span class="breadcrumb-sep">›</span> <span class="breadcrumb-current"> </span>',1),eo=l("<h2> </h2>"),ao=l('<button class="btn-refresh" aria-label="刷新"><!></button>'),to=l('<div class="store-empty"><!> <p>加载中…</p></div>'),oo=l('<div class="store-empty"><p class="error-text"> </p> <button class="btn-retry">重试</button></div>'),so=l('<button class="search-clear"><!></button>'),no=l('<button role="option"> </button>'),io=l('<div class="sort-dropdown" role="listbox"></div>'),lo=l('<button><span class="trust-dot"></span> <!> <span class="trust-label"> </span></button>'),co=l('<div class="trust-toggles"></div> <div class="controls-sep"></div>',1),vo=l('<button class="scroll-arrow scroll-arrow-left" aria-label="向左滚动">‹</button>'),po=l("<button> </button>"),uo=l('<button class="scroll-arrow scroll-arrow-right" aria-label="向右滚动">›</button>'),mo=l('<button><span class="nav-tpl-name"> </span> <span></span></button>'),fo=l("<span><!> </span>"),go=l('<button class="btn-manage"><!> <span>管理</span></button>'),bo=l('<button class="stat-item" title="Stars"><!> <span> </span></button>'),ho=l('<button class="stat-item" title="下载量"><!> <span> </span></button>'),xo=l('<span class="keyword-chip"> </span>'),_o=l('<div class="detail-keywords"></div>'),wo=l('<div class="detail-preview"><iframe sandbox="allow-scripts allow-same-origin" loading="lazy" title="预览"></iframe></div>'),yo=l('<div class="detail-preview-placeholder"><!> <span>社区模板暂不提供预览</span></div>'),ko=l('<div class="readme-loading"><!> <span>加载 README…</span></div>'),zo=l('<div class="detail-readme"><h4>README</h4> <div class="readme-body"><!></div></div>'),So=l('<a class="repo-link">查看源码 <!></a>'),Mo=l('<div class="progress-ring-wrapper"><svg class="progress-ring" width="36" height="36" viewBox="0 0 36 36"><circle class="progress-ring-track" cx="18" cy="18" r="14"></circle><circle class="progress-ring-fill" cx="18" cy="18" r="14"></circle></svg> <span class="progress-ring-stop">■</span></div>'),Ro=l('<button class="btn-install"><!><span>更新</span></button>'),Eo=l('<button class="btn-install"><!><span>安装</span></button>'),To=l('<button class="btn-install"><!><span>在 Presto 中打开</span></button>'),Oo=l('<button class="btn-manage-lg"><!><span>管理</span></button>'),Lo=l('<button class="btn-scroll-top" aria-label="回到顶部"><!> <span>回到顶部</span></button>'),Co=l('<div class="master-detail"><nav class="store-nav"></nav> <div class="store-detail"><div class="detail-header"><div class="detail-title-row"><h3> </h3> <!> <div class="detail-stats-actions"><!> <!> <!></div></div></div> <p class="detail-desc"> </p> <!> <div class="detail-meta"><span> </span> <span class="meta-sep">·</span> <span> </span> <span class="meta-sep">·</span> <span> </span></div> <!> <!> <div class="detail-repo"><!></div> <div class="detail-actions"><div class="actions-left"><!> <!></div> <!></div></div></div>'),Bo=l('<div class="store-empty"><p> </p></div>'),Io=l('<span class="card-stat"><!> </span>'),Uo=l('<span class="card-stat"><!> </span>'),jo=l('<span class="card-stats"><!> <!></span>'),Do=l('<button class="tpl-card"><div class="card-header"><span class="card-name"> </span> <span><!> </span></div> <p class="card-desc"> </p> <div class="card-footer"><span class="card-version"> </span> <span class="card-author"> </span> <!></div></button>'),Ao=l("<button> </button>"),Fo=l('<span class="page-ellipsis">…</span>'),Po=l('<div class="page-controls"><button class="page-btn">&lsaquo;</button> <!> <button class="page-btn">&rsaquo;</button></div>'),No=l('<div class="pagination"><span class="page-info"> </span> <!></div>'),Wo=l('<div class="card-grid"></div> <!>',1),qo=l('<div class="filter-toolbar"><div class="search-sort-row"><div class="search-box"><span class="search-icon"><!></span> <input type="text" class="search-input" placeholder="搜索名称、描述或标签…"/> <!></div> <div class="sort-wrapper"><button aria-haspopup="listbox"><span class="sort-label"> </span> <!></button> <!></div></div> <div class="controls-row"><!> <div class="category-bar"><!> <div class="category-scroll"><button>全部</button> <!></div> <!></div></div></div> <!>',1),Ho=l(`<div><!> <div class="page-header"><!> <nav class="breadcrumb"><!></nav> <!></div> <!> <!></div> <style>.page {
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
  .btn-manage {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    padding: 4px 10px;
    background: none;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    color: var(--color-muted);
    font-size: 0.75rem;
    font-family: var(--font-ui);
    cursor: pointer;
    transition: all var(--transition);
  }
  .btn-manage:hover {
    color: var(--color-text);
    border-color: var(--color-accent-border);
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
  .btn-manage-lg {
    display: inline-flex;
    align-items: center;
    gap: var(--space-xs);
    padding: var(--space-sm) var(--space-lg);
    border-radius: var(--radius-md);
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all var(--transition);
    border: 1px solid var(--color-border);
    background: var(--color-surface);
    color: var(--color-muted);
  }
  .btn-manage-lg:hover {
    color: var(--color-text);
    border-color: var(--color-accent-border);
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
  }</style>`,1);function gs(lr,o){Ve(o,!0);let E=Se(o,"installedVersions",19,()=>new Map),U=Se(o,"communityEnabled",3,!0),N=Se(o,"initialSelectedId",3,null),R=S(null),Y=S(!1),pr=S(null);function ne(){return o.mode==="web",o.registryUrl}async function B(t=!1){if(!(r(R)&&!t)){v(Y,!0),v(pr,null);try{const d=await fetch(ne());if(!d.ok)throw new Error(`${d.status}`);v(R,await d.json(),!0)}catch(d){v(pr,d instanceof Error?d.message:String(d),!0)}finally{v(Y,!1)}}}async function W(){return B(!0)}let J=S(""),ur=S(null),mr=S(null),or=S(null);se(()=>{N()!==null&&v(or,N())});let Jr=S(""),Me=S(!1),Re=S(0),K=S(1),Ar=S(24),Kr=S(null),Qr=S("latest"),Rr=S(!1),fe=S(void 0);const Je={latest:"最新发布",stars:"最多星标",downloads:"最多下载"};let j=S(He({})),ie=S(null),Ke=S(!1);function Ma(){r(ie)&&v(Ke,r(ie).scrollTop>300)}function Ra(){r(ie)?.scrollTo({top:0,behavior:"smooth"})}async function Ea(){if(o.statsUrl)try{const t=await fetch(o.statsUrl);t.ok&&v(j,await t.json(),!0)}catch{}}function ge(t){return t==null?"":t>=1e3?(t/1e3).toFixed(1).replace(/\.0$/,"")+"k":String(t)}let Xr=S(!1),sr=S(null),Qe=S(!1),Xe=S(!1);function be(){r(sr)&&(v(Qe,r(sr).scrollLeft>4),v(Xe,r(sr).scrollLeft<r(sr).scrollWidth-r(sr).clientWidth-4))}function Ze(t){r(sr)?.scrollBy({left:t==="left"?-200:200,behavior:"smooth"})}se(()=>{if(!r(sr))return;be(),r(sr).addEventListener("scroll",be,{passive:!0});const t=new ResizeObserver(be);return t.observe(r(sr)),()=>{r(sr)?.removeEventListener("scroll",be),t.disconnect()}});let fr=S(null);function Ee(){if(o.mode==="web"||!r(fr))return;const t=getComputedStyle(r(fr)),d=parseFloat(t.gap)||12,b=200+d,rr=Math.max(1,Math.floor((r(fr).clientWidth+d)/b)),H=r(fr).querySelector(".tpl-card"),Tr=(H?H.offsetHeight:120)+d,$r=Math.max(1,Math.round((r(fr).clientHeight+d)/Tr)),Or=rr*$r;Or>0&&Or!==r(Ar)&&v(Ar,Or)}se(()=>{if(!r(fr))return;Ee();const t=new ResizeObserver(Ee);return t.observe(r(fr)),()=>t.disconnect()}),se(()=>{o.mode==="web"&&r(R)?v(Ar,r(R).templates.length||100,!0):r(R)&&r(fr)&&requestAnimationFrame(()=>Ee())});let Ta=z(()=>{if(!r(R))return[];if(r(R).categories?.length)return r(R).categories;const t=new Set;return r(R).templates.map(d=>d.category).filter(d=>!!d&&!t.has(d)&&(t.add(d),!0)).map(d=>({id:d,label:{zh:d,en:d}}))});const he={official:{label:"官方",cls:"trust-official",color:"#3b82f6",icon:Ct},verified:{label:"已验证",cls:"trust-verified",color:"#22c55e",icon:_a},community:{label:"社区",cls:"trust-community",color:"",icon:Lt},unverified:{label:"未验证",cls:"trust-unverified",color:"#e0af68",icon:Ot}};let $e=z(()=>r(R)?new Bt(r(R).templates,{keys:[{name:"displayName",weight:2},{name:"name",weight:1.5},{name:"description",weight:1},{name:"author",weight:1},{name:"category",weight:.8},{name:"keywords",weight:1.2}],threshold:.4,ignoreLocation:!0}):null),Oa=z(()=>{if(!r(R))return[];const t=r(J).trim();return(t&&r($e)?r($e).search(t).map(b=>b.item):r(R).templates).filter(b=>{const rr=!r(ur)||b.category===r(ur),H=!r(mr)||b.trust===r(mr),Er=U()||b.trust==="official"||b.trust==="verified";return rr&&H&&Er})}),le=z(()=>{const t=[...r(Oa)];switch(r(Qr)){case"stars":return t.sort((d,b)=>(r(j)[b.name]?.stars??0)-(r(j)[d.name]?.stars??0));case"downloads":return t.sort((d,b)=>(r(j)[b.name]?.downloads??0)-(r(j)[d.name]?.downloads??0));default:return t.sort((d,b)=>{const rr=d.publishedAt?new Date(d.publishedAt).getTime():0;return(b.publishedAt?new Date(b.publishedAt).getTime():0)-rr})}});se(()=>{r(J),r(ur),r(mr),r(Ar),r(Qr),v(K,1)});let ce=z(()=>Math.max(1,Math.ceil(r(le).length/r(Ar)))),La=z(()=>r(le).slice((r(K)-1)*r(Ar),r(K)*r(Ar))),ra=z(()=>{if(!r(R))return new Set;const t=new Set;for(const d of r(R).templates)!U()&&d.trust!=="official"&&d.trust!=="verified"||t.add(d.trust);return t}),u=z(()=>r(R)?.templates.find(t=>t.name===r(or))??null),Zr=z(()=>r(u)?he[r(u).trust]:null);function xe(t){return E().has(t)}function ea(t){return t<1024?t+" B":t<1024*1024?(t/1024).toFixed(1)+" KB":(t/(1024*1024)).toFixed(1)+" MB"}function Ca(t,d){const b=E().get(t);return b?b!==d:!1}const aa={network_error:"网络连接失败，请检查网络后重试",not_found:"模板不存在",checksum_mismatch:"文件校验失败，可能已损坏，请重试",server_error:"服务器暂时不可用，请稍后重试"};async function Te(t){if(!(!o.installFn||Gr.isInstalling(t.name))){Gr.setInstalling(t.name);try{await o.installFn(t),Gr.setInstalled(t.name),o.onInstallSuccess?.(t.name)}catch(d){let b="安装失败，请重试",rr="server_error";if(d instanceof Error)try{const H=JSON.parse(d.message);H.error_type&&aa[H.error_type]&&(b=aa[H.error_type],rr=H.error_type)}catch{}v(Kr,{message:b,type:"error",onRetry:()=>{v(Kr,null),Te(t)}},!0),setTimeout(()=>{Gr.reset(t.name)},3500),console.error("[StoreView] install failed:",d)}}}async function Ba(t){if(o.readmeUrl){v(Me,!0),v(Jr,"");try{const d=(o.mode,o.readmeUrl(t)),b=await fetch(d);b.ok&&v(Jr,await b.text(),!0)}catch{}finally{v(Me,!1)}}}function ta(t){if(r(or)===t){v(or,null);return}v(or,t,!0),Ba(t)}function Ia(t){o.mode==="desktop"&&window.runtime?.BrowserOpenURL?window.runtime.BrowserOpenURL(t):window.open(t,"_blank","noopener,noreferrer")}function Oe(t){return t.repository?t.repository:t.repo?`https://github.com/${t.repo}`:""}const Le=new We.Renderer;Le.link=({text:t})=>t,Le.image=({text:t})=>t?`[${t}]`:"",We.setOptions({gfm:!0,breaks:!0,renderer:Le});function Ua(t){return We.parse(t,{async:!1})}function oa(t){r(Rr)&&r(fe)&&!r(fe).contains(t.target)&&v(Rr,!1)}ka(()=>(B(),Ea(),document.addEventListener("pointerdown",oa,!0),()=>document.removeEventListener("pointerdown",oa,!0)));var sa=jr(),ja=ar(sa);{var Da=t=>{var d=Xt();let b;var rr=a(d);{var H=hr=>{var Lr=Kt();s(hr,Lr)};p(rr,hr=>{o.mode==="desktop"&&hr(H)})}var Er=n(rr,2),Tr=a(Er);{var $r=hr=>{var Lr=Qt(),Ie=a(Lr);qe(Ie,{size:16}),e(Lr),y("click",Lr,()=>ke(o.backRoute)),s(hr,Lr)};p(Tr,hr=>{o.mode==="desktop"&&o.backRoute&&hr($r)})}var Or=n(Tr,2),re=a(Or),Ce=a(re,!0);e(re),e(Or),e(Er);var Be=n(Er,2);Jt(Be,{}),e(d),k(()=>{b=tr(d,1,"page",null,b,{"web-mode":o.mode==="web"}),h(Ce,o.title)}),s(t,d)},Aa=t=>{var d=Ho(),b=ar(d);let rr;var H=a(b);{var Er=g=>{var x=Zt();s(g,x)};p(H,g=>{o.mode==="desktop"&&g(Er)})}var Tr=n(H,2),$r=a(Tr);{var Or=g=>{var x=$t(),O=a(x);qe(O,{size:16}),e(x),y("click",x,()=>ke(o.backRoute)),s(g,x)};p($r,g=>{o.mode==="desktop"&&o.backRoute&&g(Or)})}var re=n($r,2),Ce=a(re);{var Be=g=>{var x=ro(),O=ar(x),xr=a(O,!0);e(O);var Cr=n(O,4),de=a(Cr,!0);e(Cr),k(()=>{h(xr,o.title),h(de,r(u).displayName)}),y("click",O,()=>v(or,null)),s(g,x)},hr=g=>{var x=eo(),O=a(x,!0);e(x),k(()=>h(O,o.title)),s(g,x)};p(Ce,g=>{r(or)&&r(u)?g(Be):g(hr,!1)})}e(re);var Lr=n(re,2);{var Ie=g=>{var x=ao(),O=a(x);{let xr=z(()=>r(Y)?"spin":"");ha(O,{size:14,get class(){return r(xr)}})}e(x),k(()=>x.disabled=r(Y)),y("click",x,()=>W()),s(g,x)};p(Lr,g=>{o.mode==="desktop"&&g(Ie)})}e(Tr);var na=n(Tr,2);{var Fa=g=>{var x=to(),O=a(x);xa(O,{size:24,class:"spin"}),ir(2),e(x),s(g,x)},Pa=g=>{var x=oo(),O=a(x),xr=a(O);e(O);var Cr=n(O,2);e(x),k(()=>h(xr,`加载失败：${r(pr)??""}`)),y("click",Cr,()=>W()),s(g,x)},Na=g=>{var x=qo(),O=ar(x),xr=a(O),Cr=a(xr),de=a(Cr),Ha=a(de);It(Ha,{size:14}),e(de);var Ue=n(de,2);yt(Ue);var Va=n(Ue,2);{var Ga=m=>{var _=so(),L=a(_);jt(L,{size:12}),e(_),y("click",_,()=>v(J,"")),s(m,_)};p(Va,m=>{r(J)&&m(Ga)})}e(Cr);var je=n(Cr,2),ee=a(je);let ia;var De=a(ee),Ya=a(De,!0);e(De);var Ja=n(De,2);Ut(Ja,{size:12}),e(ee);var Ka=n(ee,2);{var Qa=m=>{var _=io();Dr(_,20,()=>["latest","stars","downloads"],L=>L,(L,I)=>{var D=no();let V;var A=a(D,!0);e(D),k(()=>{V=tr(D,1,"sort-option",null,V,{selected:r(Qr)===I}),Ur(D,"aria-selected",r(Qr)===I),h(A,Je[I])}),y("click",D,()=>{v(Qr,I,!0),v(Rr,!1)}),s(L,D)}),e(_),kt(3,_,()=>Tt,()=>({y:-4,duration:150,easing:Et})),s(m,_)};p(Ka,m=>{r(Rr)&&m(Qa)})}e(je),ye(je,m=>v(fe,m),()=>r(fe)),e(xr);var la=n(xr,2),ca=a(la);{var Xa=m=>{var _=co(),L=ar(_);Dr(L,21,()=>Object.entries(he),([I,D])=>I,(I,D)=>{var V=z(()=>gt(r(D),2));let A=()=>r(V)[0],Q=()=>r(V)[1];var _r=jr(),ve=ar(_r);{var X=G=>{const Fr=z(()=>Q().icon);var F=lo();let gr;var nr=n(a(F),2);Ne(nr,()=>r(Fr),(wr,yr)=>{yr(wr,{size:13})});var br=n(nr,2),Z=a(br,!0);e(br),e(F),k(()=>{gr=tr(F,1,"trust-toggle",null,gr,{active:r(mr)===A()}),oe(F,`--toggle-color:${(Q().color||"var(--color-muted)")??""}`),Ur(F,"title",Q().label),h(Z,Q().label)}),y("click",F,()=>v(mr,r(mr)===A()?null:A(),!0)),s(G,F)},T=z(()=>r(ra).has(A()));p(ve,G=>{r(T)&&G(X)})}s(I,_r)}),e(L),ir(2),s(m,_)};p(ca,m=>{r(ra).size>1&&m(Xa)})}var da=n(ca,2),va=a(da);{var Za=m=>{var _=vo();y("click",_,()=>Ze("left")),s(m,_)};p(va,m=>{r(Qe)&&m(Za)})}var _e=n(va,2),Ae=a(_e);let pa;var $a=n(Ae,2);Dr($a,17,()=>r(Ta),m=>m.id,(m,_)=>{var L=po();let I;var D=a(L,!0);e(L),k(()=>{I=tr(L,1,"cat-chip",null,I,{active:r(ur)===r(_).id}),h(D,r(_).label.zh)}),y("click",L,()=>v(ur,r(ur)===r(_).id?null:r(_).id,!0)),s(m,L)}),e(_e),ye(_e,m=>v(sr,m),()=>r(sr));var rt=n(_e,2);{var et=m=>{var _=uo();y("click",_,()=>Ze("right")),s(m,_)};p(rt,m=>{r(Xe)&&m(et)})}e(da),e(la),e(O);var at=n(O,2);{var tt=m=>{var _=Co(),L=a(_);Dr(L,21,()=>r(le),c=>c.name,(c,i)=>{const f=z(()=>he[r(i).trust]);var w=mo();let C;var M=a(w),q=a(M,!0);e(M);var er=n(M,2);let te;e(w),k(vr=>{C=tr(w,1,"nav-tpl-item",null,C,{active:r(or)===r(i).name}),h(q,r(i).displayName),te=tr(er,1,"nav-trust-dot",null,te,vr),oe(er,`background:${r(f).color??""}`)},[()=>({installing:Gr.isInstalling(r(i).name)})]),y("click",w,()=>ta(r(i).name)),s(c,w)}),e(L);var I=n(L,2),D=a(I),V=a(D),A=a(V),Q=a(A,!0);e(A);var _r=n(A,2);{var ve=c=>{const i=z(()=>r(Zr).icon);var f=fo(),w=a(f);Ne(w,()=>r(i),(M,q)=>{q(M,{size:14})});var C=n(w);e(f),k(()=>{tr(f,1,`trust-badge ${r(Zr).cls??""}`),oe(f,r(Zr).color?`color:${r(Zr).color}`:""),h(C,` ${r(Zr).label??""}`)}),s(c,f)};p(_r,c=>{r(Zr)&&c(ve)})}var X=n(_r,2),T=a(X);{var G=c=>{var i=go(),f=a(i);wa(f,{size:13}),ir(2),e(i),y("click",i,()=>ke(`/settings?panel=tpl-manage&focus=${r(u).name}`)),s(c,i)},Fr=z(()=>o.mode==="desktop"&&xe(r(u).name));p(T,c=>{r(Fr)&&c(G)})}var F=n(T,2);{var gr=c=>{var i=bo(),f=a(i);ya(f,{size:13});var w=n(f,2),C=a(w,!0);e(w),e(i),k(M=>h(C,M),[()=>r(Xr)?r(j)[r(u).name].stars:ge(r(j)[r(u).name].stars)]),y("click",i,()=>v(Xr,!r(Xr))),s(c,i)};p(F,c=>{r(j)[r(u).name]?.stars!=null&&c(gr)})}var nr=n(F,2);{var br=c=>{var i=ho(),f=a(i);ze(f,{size:13});var w=n(f,2),C=a(w,!0);e(w),e(i),k(M=>h(C,M),[()=>r(Xr)?r(j)[r(u).name].downloads:ge(r(j)[r(u).name].downloads)]),y("click",i,()=>v(Xr,!r(Xr))),s(c,i)};p(nr,c=>{r(j)[r(u).name]?.downloads!=null&&c(br)})}e(X),e(V),e(D);var Z=n(D,2),wr=a(Z,!0);e(Z);var yr=n(Z,2);{var Br=c=>{var i=_o();Dr(i,20,()=>r(u).keywords,f=>f,(f,w)=>{var C=xo(),M=a(C,!0);e(C),k(()=>h(M,w)),s(f,C)}),e(i),s(c,i)};p(yr,c=>{r(u).keywords.length>0&&c(Br)})}var P=n(yr,2),kr=a(P),Pr=a(kr);e(kr);var Nr=n(kr,4),Wr=a(Nr,!0);e(Nr);var cr=n(Nr,4),dr=a(cr,!0);e(cr),e(P);var qr=n(P,2);{var zr=c=>{var i=jr(),f=ar(i);{var w=C=>{var M=wo(),q=a(M);e(M),k(er=>{oe(M,`height:${r(Re)*800/1200}px`),Ur(q,"src",er),oe(q,`transform:scale(${r(Re)/1200})`)},[()=>o.previewUrl(r(u).name)]),Ft(M,"clientWidth",er=>v(Re,er)),s(C,M)};p(f,C=>{o.previewUrl&&C(w)})}s(c,i)},Hr=c=>{var i=yo(),f=a(i);_a(f,{size:24}),ir(2),e(i),s(c,i)};p(qr,c=>{r(u).trust==="official"||r(u).trust==="verified"?c(zr):c(Hr,!1)})}var pe=n(qr,2);{var Fe=c=>{var i=jr(),f=ar(i);{var w=M=>{var q=ko(),er=a(q);xa(er,{size:16,class:"spin"}),ir(2),e(q),s(M,q)},C=M=>{var q=zo(),er=n(a(q),2),te=a(er);St(te,()=>Mt.sanitize(Ua(r(Jr)))),e(er),e(q),s(M,q)};p(f,M=>{r(Me)?M(w):r(Jr)&&M(C,1)})}s(c,i)};p(pe,c=>{o.readmeUrl&&c(Fe)})}var ue=n(pe,2),Pe=a(ue);{var Sr=c=>{var i=So(),f=n(a(i));Dt(f,{size:12}),e(i),k(w=>Ur(i,"href",w),[()=>Oe(r(u))]),y("click",i,w=>{w.preventDefault(),Ia(Oe(r(u)))}),s(c,i)},Mr=z(()=>Oe(r(u)));p(Pe,c=>{r(Mr)&&c(Sr)})}e(ue);var Ir=n(ue,2),Vr=a(Ir),ae=a(Vr);{var st=c=>{var i=jr(),f=ar(i);{var w=vr=>{const $=z(()=>Gr.getProgress(r(u).name)),me=z(()=>r($)?.percent??0),ua=z(()=>2*Math.PI*14),pt=z(()=>r(ua)*(1-r(me)/100));var we=Mo(),ma=a(we),fa=n(a(ma));Ur(fa,"stroke-dasharray",r(ua)),e(ma),ir(2),e(we),k(ut=>{Ur(we,"title",ut),Ur(fa,"stroke-dashoffset",r(pt))},[()=>r($)?`${ea(r($).downloaded)} / ${ea(r($).total)}`:"准备中..."]),s(vr,we)},C=z(()=>Gr.isInstalling(r(u).name)),M=vr=>{var $=Ro(),me=a($);ha(me,{size:14}),ir(),e($),y("click",$,()=>Te(r(u))),s(vr,$)},q=z(()=>xe(r(u).name)&&Ca(r(u).name,r(u).version)),er=vr=>{var $=Eo(),me=a($);ze(me,{size:14}),ir(),e($),y("click",$,()=>Te(r(u))),s(vr,$)},te=z(()=>!xe(r(u).name));p(f,vr=>{r(C)?vr(w):r(q)?vr(M,1):r(te)&&vr(er,2)})}s(c,i)},nt=c=>{var i=To(),f=a(i);ze(f,{size:14}),ir(),e(i),y("click",i,()=>{const w=`presto://install/${r(u).name}`;window.parent!==window?window.parent.postMessage({type:"presto-open-template",url:w},"*"):window.location.href=w}),s(c,i)};p(ae,c=>{o.mode==="desktop"&&o.installFn?c(st):o.mode==="web"&&c(nt,1)})}var it=n(ae,2);{var lt=c=>{var i=Oo(),f=a(i);wa(f,{size:14}),ir(),e(i),y("click",i,()=>ke(`/settings?panel=tpl-manage&focus=${r(u).name}`)),s(c,i)},ct=z(()=>o.mode==="desktop"&&xe(r(u).name));p(it,c=>{r(ct)&&c(lt)})}e(Vr);var dt=n(Vr,2);{var vt=c=>{var i=Lo(),f=a(i);qe(f,{size:14,style:"transform:rotate(90deg)"}),ir(2),e(i),y("click",i,Ra),s(c,i)};p(dt,c=>{o.mode==="desktop"&&r(Ke)&&c(vt)})}e(Ir),e(I),ye(I,c=>v(ie,c),()=>r(ie)),e(_),k(()=>{h(Q,r(u).displayName),h(wr,r(u).description),h(Pr,`v${r(u).version??""}`),h(Wr,r(u).author),h(dr,r(u).license)}),bt("scroll",I,Ma),s(m,_)},ot=m=>{var _=jr(),L=ar(_);{var I=V=>{var A=Bo(),Q=a(A),_r=a(Q,!0);e(Q),e(A),k(()=>h(_r,r(J)?"没有匹配的结果":"暂无可用内容")),s(V,A)},D=V=>{var A=Wo(),Q=ar(A);Dr(Q,21,()=>r(La),X=>X.name,(X,T)=>{const G=z(()=>he[r(T).trust]),Fr=z(()=>r(G).icon);var F=Do(),gr=a(F),nr=a(gr),br=a(nr,!0);e(nr);var Z=n(nr,2),wr=a(Z);Ne(wr,()=>r(Fr),(zr,Hr)=>{Hr(zr,{size:12})});var yr=n(wr);e(Z),e(gr);var Br=n(gr,2),P=a(Br,!0);e(Br);var kr=n(Br,2),Pr=a(kr),Nr=a(Pr);e(Pr);var Wr=n(Pr,2),cr=a(Wr,!0);e(Wr);var dr=n(Wr,2);{var qr=zr=>{var Hr=jo(),pe=a(Hr);{var Fe=Sr=>{var Mr=Io(),Ir=a(Mr);ya(Ir,{size:10});var Vr=n(Ir);e(Mr),k(ae=>h(Vr,` ${ae??""}`),[()=>ge(r(j)[r(T).name].stars)]),s(Sr,Mr)};p(pe,Sr=>{r(j)[r(T).name]?.stars!=null&&Sr(Fe)})}var ue=n(pe,2);{var Pe=Sr=>{var Mr=Uo(),Ir=a(Mr);ze(Ir,{size:10});var Vr=n(Ir);e(Mr),k(ae=>h(Vr,` ${ae??""}`),[()=>ge(r(j)[r(T).name].downloads)]),s(Sr,Mr)};p(ue,Sr=>{r(j)[r(T).name]?.downloads!=null&&Sr(Pe)})}e(Hr),s(zr,Hr)};p(dr,zr=>{(r(j)[r(T).name]?.stars!=null||r(j)[r(T).name]?.downloads!=null)&&zr(qr)})}e(kr),e(F),k(()=>{h(br,r(T).displayName),tr(Z,1,`card-trust ${r(G).cls??""}`),oe(Z,r(G).color?`color:${r(G).color}`:""),h(yr,` ${r(G).label??""}`),h(P,r(T).description),h(Nr,`v${r(T).version??""}`),h(cr,r(T).author)}),y("click",F,()=>ta(r(T).name)),s(X,F)}),e(Q),ye(Q,X=>v(fr,X),()=>r(fr));var _r=n(Q,2);{var ve=X=>{var T=No(),G=a(T),Fr=a(G);e(G);var F=n(G,2);{var gr=nr=>{var br=Po(),Z=a(br),wr=n(Z,2);Dr(wr,17,()=>Array.from({length:r(ce)},(Br,P)=>P+1),zt,(Br,P)=>{var kr=jr(),Pr=ar(kr);{var Nr=cr=>{var dr=Ao();let qr;var zr=a(dr,!0);e(dr),k(()=>{qr=tr(dr,1,"page-btn",null,qr,{active:r(K)===r(P)}),h(zr,r(P))}),y("click",dr,()=>v(K,r(P),!0)),s(cr,dr)},Wr=cr=>{var dr=Fo();s(cr,dr)};p(Pr,cr=>{r(P)===1||r(P)===r(ce)||r(P)>=r(K)-3&&r(P)<=r(K)+3?cr(Nr):(r(P)===r(K)-4||r(P)===r(K)+4)&&cr(Wr,1)})}s(Br,kr)});var yr=n(wr,2);e(br),k(()=>{Z.disabled=r(K)<=1,yr.disabled=r(K)>=r(ce)}),y("click",Z,()=>ga(K,-1)),y("click",yr,()=>ga(K)),s(nr,br)};p(F,nr=>{r(ce)>1&&nr(gr)})}e(T),k(()=>h(Fr,`${r(le).length??""} 项，第 ${r(K)??""}/${r(ce)??""} 页`)),s(X,T)};p(_r,X=>{o.mode!=="web"&&X(ve)})}s(V,A)};p(L,V=>{r(le).length===0?V(I):V(D,!1)})}s(m,_)};p(at,m=>{r(or)&&r(u)?m(tt):m(ot,!1)})}k(()=>{ia=tr(ee,1,"sort-trigger",null,ia,{open:r(Rr)}),Ur(ee,"aria-expanded",r(Rr)),h(Ya,Je[r(Qr)]),pa=tr(Ae,1,"cat-chip",null,pa,{active:!r(ur)})}),Rt(Ue,()=>r(J),m=>v(J,m)),y("click",ee,()=>v(Rr,!r(Rr))),y("click",Ae,()=>v(ur,null)),s(g,x)};p(na,g=>{r(Y)&&!r(R)?g(Fa):r(pr)&&!r(R)?g(Pa,1):r(R)&&g(Na,2)})}var Wa=n(na,2);{var qa=g=>{Wt(g,{get message(){return r(Kr).message},get type(){return r(Kr).type},duration:3e3,get onRetry(){return r(Kr).onRetry}})};p(Wa,g=>{r(Kr)&&g(qa)})}e(b),ir(2),k(()=>rr=tr(b,1,"page",null,rr,{"web-mode":o.mode==="web"})),s(t,d)};p(ja,t=>{Sa.isOnline?t(Aa,!1):t(Da)})}s(lr,sa),Ge()}za(["click"]);export{gs as S};
