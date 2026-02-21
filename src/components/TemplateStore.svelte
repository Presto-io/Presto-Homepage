<script>
  /** @type {{ registryUrl: string }} */
  let { registryUrl } = $props();

  const showcaseBase = '';
  const registryBase = registryUrl.replace('/registry.json', '');

  /** @type {{ version: number, categories: Array<{id: string, label: {zh: string, en: string}}>, templates: Array<any> } | null} */
  let registry = $state(null);
  let loading = $state(true);
  let error = $state('');

  let searchQuery = $state('');
  let activeCategory = $state('');
  let selectedId = $state('');

  /** @type {any} */
  let selectedManifest = $state(null);
  let selectedReadme = $state('');
  let detailLoading = $state(false);

  // Detect lang from <html> attribute
  let lang = $state('zh');

  $effect(() => {
    lang = document.documentElement.lang || 'zh';
    const observer = new MutationObserver(() => {
      lang = document.documentElement.lang || 'zh';
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

    // Check URL for direct link
    const params = new URLSearchParams(window.location.search);
    const idFromUrl = params.get('id');
    if (idFromUrl) selectedId = idFromUrl;

    return () => observer.disconnect();
  });

  // Fetch registry
  $effect(() => {
    fetch(registryUrl)
      .then(r => r.json())
      .then(data => {
        registry = data;
        loading = false;
      })
      .catch(e => {
        error = e.message;
        loading = false;
      });
  });

  // Fetch detail when selected
  $effect(() => {
    if (!selectedId || !registry) return;
    detailLoading = true;
    selectedManifest = null;
    selectedReadme = '';

    Promise.all([
      fetch(`${registryBase}/templates/${selectedId}/manifest.json`)
        .then(r => r.ok ? r.json() : null)
        .catch(() => null),
      fetch(`${registryBase}/templates/${selectedId}/README.md`)
        .then(r => r.ok ? r.text() : '')
        .catch(() => ''),
    ]).then(([manifest, readme]) => {
      selectedManifest = manifest;
      selectedReadme = readme;
      detailLoading = false;
    });
  });

  // Sync URL
  $effect(() => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    if (selectedId) {
      url.searchParams.set('id', selectedId);
    } else {
      url.searchParams.delete('id');
    }
    history.replaceState(null, '', url.toString());
  });

  // Filtered templates
  let visibleCategories = $derived(
    registry?.categories?.filter(cat =>
      registry.templates.some(t => t.category === cat.id)
    ) ?? []
  );

  let filteredTemplates = $derived(() => {
    if (!registry) return [];
    let list = registry.templates;
    if (activeCategory) {
      list = list.filter(t => t.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      list = list.filter(t =>
        t.displayName.toLowerCase().includes(q) ||
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        (t.keywords || []).some(k => k.toLowerCase().includes(q))
      );
    }
    return list;
  });

  let selectedTemplate = $derived(
    registry?.templates?.find(t => t.name === selectedId) ?? null
  );

  // Keywords from current filtered set
  let activeKeywords = $derived(() => {
    const templates = filteredTemplates();
    const kw = new Set();
    templates.forEach(t => (t.keywords || []).forEach(k => kw.add(k)));
    return [...kw];
  });

  const trustBadge = {
    official: { zh: '官方', en: 'Official', cls: 'trust-official' },
    verified: { zh: '已验证', en: 'Verified', cls: 'trust-verified' },
    community: { zh: '社区', en: 'Community', cls: 'trust-community' },
  };

  function selectTemplate(name) {
    selectedId = name;
  }

  function t(zh, en) {
    return lang === 'en' ? en : zh;
  }
</script>

<div class="template-store">
  {#if loading}
    <div class="store-loading">
      <div class="spinner"></div>
      <p>{t('加载中...', 'Loading...')}</p>
    </div>
  {:else if error}
    <div class="store-error">
      <p>{t('加载失败', 'Failed to load')}: {error}</p>
    </div>
  {:else if registry}
    <!-- Toolbar -->
    <div class="store-toolbar">
      <div class="search-box">
        <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input
          type="text"
          bind:value={searchQuery}
          placeholder={t('搜索模板...', 'Search templates...')}
          class="search-input"
        />
      </div>
      <div class="category-chips">
        <button
          class="chip"
          class:is-active={activeCategory === ''}
          onclick={() => activeCategory = ''}
        >
          {t('全部', 'All')}
        </button>
        {#each visibleCategories as cat}
          <button
            class="chip"
            class:is-active={activeCategory === cat.id}
            onclick={() => activeCategory = activeCategory === cat.id ? '' : cat.id}
          >
            {lang === 'en' ? cat.label.en : cat.label.zh}
          </button>
        {/each}
      </div>
    </div>

    <!-- Master-Detail layout -->
    <div class="store-body">
      <!-- Left: template list -->
      <div class="store-list">
        {#each filteredTemplates() as tmpl (tmpl.name)}
          <button
            class="template-card"
            class:is-selected={selectedId === tmpl.name}
            onclick={() => selectTemplate(tmpl.name)}
          >
            <div class="card-header">
              <span class="card-name">{tmpl.displayName}</span>
              {#if trustBadge[tmpl.trust]}
                <span class="trust-badge {trustBadge[tmpl.trust].cls}">
                  {lang === 'en' ? trustBadge[tmpl.trust].en : trustBadge[tmpl.trust].zh}
                </span>
              {/if}
            </div>
            <p class="card-desc">{tmpl.description}</p>
            <div class="card-meta">
              <span class="card-version">v{tmpl.version}</span>
              <span class="card-author">{tmpl.author}</span>
              {#if tmpl.license}
                <span class="card-license">{tmpl.license}</span>
              {/if}
            </div>
          </button>
        {:else}
          <div class="store-empty">
            <p>{t('没有找到模板', 'No templates found')}</p>
          </div>
        {/each}
      </div>

      <!-- Right: detail panel -->
      <div class="store-detail">
        {#if selectedTemplate}
          <div class="detail-header">
            <h2 class="detail-name">{selectedTemplate.displayName}</h2>
            {#if trustBadge[selectedTemplate.trust]}
              <span class="trust-badge trust-badge-lg {trustBadge[selectedTemplate.trust].cls}">
                {lang === 'en' ? trustBadge[selectedTemplate.trust].en : trustBadge[selectedTemplate.trust].zh}
              </span>
            {/if}
          </div>

          <p class="detail-desc">{selectedTemplate.description}</p>

          <div class="detail-chips">
            {#each (selectedTemplate.keywords || []) as kw}
              <span class="detail-chip">{kw}</span>
            {/each}
          </div>

          <div class="detail-meta">
            <span>v{selectedTemplate.version}</span>
            <span>{selectedTemplate.author}</span>
            {#if selectedTemplate.license}
              <span>{selectedTemplate.license}</span>
            {/if}
          </div>

          <!-- Live Preview -->
          <div class="detail-preview">
            <h3 class="detail-section-title">{t('实时预览', 'Live Preview')}</h3>
            <div class="preview-frame">
              <iframe
                src="{showcaseBase}/showcase/editor?registry={selectedTemplate.name}"
                title="{selectedTemplate.displayName} preview"
                sandbox="allow-scripts allow-same-origin"
                loading="lazy"
                class="preview-iframe"
              ></iframe>
            </div>
          </div>

          <!-- README -->
          {#if selectedReadme}
            <div class="detail-readme">
              <h3 class="detail-section-title">{t('说明', 'Description')}</h3>
              <div class="readme-content">
                <pre class="readme-text">{selectedReadme}</pre>
              </div>
            </div>
          {/if}

          <!-- Frontmatter Schema -->
          {#if selectedManifest?.frontmatterSchema}
            <div class="detail-schema">
              <h3 class="detail-section-title">{t('支持的元数据字段', 'Supported Metadata Fields')}</h3>
              <div class="schema-list">
                {#each Object.entries(selectedManifest.frontmatterSchema) as [key, schema]}
                  <div class="schema-item">
                    <code class="schema-key">{key}</code>
                    <span class="schema-type">{schema.type}</span>
                    {#if schema.default !== undefined}
                      <span class="schema-default">{t('默认', 'Default')}: {JSON.stringify(schema.default)}</span>
                    {/if}
                  </div>
                {/each}
              </div>
            </div>
          {/if}

          <!-- Required Fonts -->
          {#if selectedManifest?.requiredFonts?.length}
            <div class="detail-fonts">
              <h3 class="detail-section-title">{t('所需字体', 'Required Fonts')}</h3>
              <div class="font-list">
                {#each selectedManifest.requiredFonts as font}
                  <div class="font-item">
                    <span class="font-name">{font.displayName || font.name}</span>
                    {#if font.openSource}
                      <span class="font-badge font-oss">{t('开源', 'Open Source')}</span>
                    {/if}
                    {#if font.url}
                      <a href={font.url} target="_blank" rel="noopener noreferrer" class="font-link">
                        {t('查看', 'View')} &#x2197;
                      </a>
                    {/if}
                  </div>
                {/each}
              </div>
            </div>
          {/if}

          <!-- Repository link -->
          {#if selectedTemplate.repository}
            <div class="detail-repo">
              <a href={selectedTemplate.repository} target="_blank" rel="noopener noreferrer" class="repo-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                {t('查看仓库', 'View Repository')}
              </a>
              {#if selectedTemplate.minPrestoVersion || selectedManifest?.minPrestoVersion}
                <span class="compat-version">
                  {t('兼容 Presto', 'Compatible with Presto')} &ge; {selectedManifest?.minPrestoVersion || selectedTemplate.minPrestoVersion}
                </span>
              {/if}
            </div>
          {/if}
        {:else}
          <div class="detail-empty">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            <p>{t('选择一个模板查看详情', 'Select a template to view details')}</p>
          </div>
        {/if}
      </div>
    </div>
  {/if}
</div>

<style>
  .template-store {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1.5rem;
    min-height: calc(100vh - 72px);
  }

  /* Loading & Error */
  .store-loading,
  .store-error {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 6rem 2rem;
    color: var(--color-text-secondary);
  }

  .spinner {
    width: 32px;
    height: 32px;
    border: 3px solid var(--color-border);
    border-top-color: var(--color-accent);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* Toolbar */
  .store-toolbar {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .search-box {
    position: relative;
    max-width: 400px;
  }

  .search-icon {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--color-text-muted);
    pointer-events: none;
  }

  .search-input {
    width: 100%;
    padding: 0.625rem 0.75rem 0.625rem 2.25rem;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    background: var(--color-bg-elevated);
    color: var(--color-text);
    font-size: 0.875rem;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .search-input:focus {
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
  }

  .search-input::placeholder {
    color: var(--color-text-muted);
  }

  .category-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .chip {
    font-size: 0.8125rem;
    font-weight: 500;
    padding: 0.3125rem 0.75rem;
    border-radius: 999px;
    border: 1px solid var(--color-border);
    background: var(--color-bg-elevated);
    color: var(--color-text-secondary);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .chip:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
  }

  .chip.is-active {
    background: var(--color-accent);
    border-color: var(--color-accent);
    color: #fff;
  }

  /* Master-Detail body */
  .store-body {
    display: grid;
    grid-template-columns: 320px 1fr;
    gap: 1.5rem;
    align-items: start;
  }

  /* Left list */
  .store-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    max-height: calc(100vh - 220px);
    overflow-y: auto;
    padding-right: 0.5rem;
  }

  .store-list::-webkit-scrollbar {
    width: 4px;
  }

  .store-list::-webkit-scrollbar-thumb {
    background: var(--color-border);
    border-radius: 2px;
  }

  .template-card {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    padding: 1rem;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    background: var(--color-bg-elevated);
    text-align: left;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .template-card:hover {
    border-color: var(--color-accent-light);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  }

  .template-card.is-selected {
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .card-name {
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--color-text);
  }

  .card-desc {
    font-size: 0.8125rem;
    color: var(--color-text-secondary);
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .card-meta {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    font-size: 0.75rem;
    color: var(--color-text-muted);
  }

  /* Trust badges */
  .trust-badge {
    font-size: 0.6875rem;
    font-weight: 600;
    padding: 0.125rem 0.5rem;
    border-radius: 999px;
    white-space: nowrap;
  }

  .trust-official {
    background: rgba(59, 130, 246, 0.12);
    color: #3b82f6;
  }

  .trust-verified {
    background: rgba(34, 197, 94, 0.12);
    color: #22c55e;
  }

  .trust-community {
    background: var(--color-bg-secondary);
    color: var(--color-text-muted);
  }

  .trust-badge-lg {
    font-size: 0.75rem;
    padding: 0.1875rem 0.625rem;
  }

  /* Right detail */
  .store-detail {
    min-height: 400px;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    background: var(--color-bg-elevated);
    padding: 1.5rem;
    max-height: calc(100vh - 220px);
    overflow-y: auto;
  }

  .store-detail::-webkit-scrollbar {
    width: 4px;
  }

  .store-detail::-webkit-scrollbar-thumb {
    background: var(--color-border);
    border-radius: 2px;
  }

  .detail-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 6rem 2rem;
    color: var(--color-text-muted);
    text-align: center;
  }

  .store-empty {
    padding: 3rem 1rem;
    text-align: center;
    color: var(--color-text-muted);
  }

  .detail-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
  }

  .detail-name {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-text);
    letter-spacing: -0.02em;
  }

  .detail-desc {
    font-size: 0.9375rem;
    color: var(--color-text-secondary);
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .detail-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;
    margin-bottom: 1rem;
  }

  .detail-chip {
    font-size: 0.75rem;
    font-weight: 500;
    padding: 0.1875rem 0.625rem;
    border-radius: 999px;
    background: rgba(59, 130, 246, 0.08);
    color: var(--color-accent);
  }

  .detail-meta {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.8125rem;
    color: var(--color-text-muted);
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--color-border);
  }

  .detail-meta span + span::before {
    content: '·';
    margin-right: 0.75rem;
  }

  /* Live Preview */
  .detail-section-title {
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: 0.75rem;
  }

  .detail-preview {
    margin-bottom: 1.5rem;
  }

  .preview-frame {
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    overflow: hidden;
    aspect-ratio: 3 / 2;
  }

  .preview-iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  }

  /* README */
  .detail-readme {
    margin-bottom: 1.5rem;
  }

  .readme-content {
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    padding: 1rem;
    max-height: 300px;
    overflow-y: auto;
  }

  .readme-text {
    font-size: 0.8125rem;
    line-height: 1.7;
    color: var(--color-text-secondary);
    white-space: pre-wrap;
    word-break: break-word;
    font-family: var(--font-sans);
    margin: 0;
  }

  /* Schema */
  .detail-schema {
    margin-bottom: 1.5rem;
  }

  .schema-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .schema-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 0.75rem;
    background: var(--color-bg-secondary);
    border-radius: var(--radius-xs);
    font-size: 0.8125rem;
  }

  .schema-key {
    font-family: var(--font-mono);
    font-weight: 600;
    color: var(--color-accent);
  }

  .schema-type {
    color: var(--color-text-muted);
    font-size: 0.75rem;
  }

  .schema-default {
    color: var(--color-text-muted);
    font-size: 0.75rem;
    margin-left: auto;
  }

  /* Fonts */
  .detail-fonts {
    margin-bottom: 1.5rem;
  }

  .font-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .font-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 0.75rem;
    background: var(--color-bg-secondary);
    border-radius: var(--radius-xs);
    font-size: 0.8125rem;
  }

  .font-name {
    font-weight: 500;
    color: var(--color-text);
  }

  .font-badge {
    font-size: 0.6875rem;
    font-weight: 600;
    padding: 0.0625rem 0.4375rem;
    border-radius: 999px;
  }

  .font-oss {
    background: rgba(34, 197, 94, 0.12);
    color: #22c55e;
  }

  .font-link {
    margin-left: auto;
    font-size: 0.8125rem;
    color: var(--color-accent);
    text-decoration: none;
  }

  .font-link:hover {
    text-decoration: underline;
  }

  /* Repo */
  .detail-repo {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    padding-top: 1rem;
    border-top: 1px solid var(--color-border);
  }

  .repo-link {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-text-secondary);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .repo-link:hover {
    color: var(--color-text);
  }

  .compat-version {
    font-size: 0.75rem;
    color: var(--color-text-muted);
  }

  /* Responsive */
  @media (max-width: 900px) {
    .store-body {
      grid-template-columns: 1fr;
    }

    .store-list {
      max-height: none;
      flex-direction: row;
      flex-wrap: wrap;
      padding-right: 0;
    }

    .template-card {
      flex: 1 1 260px;
    }

    .store-detail {
      max-height: none;
    }
  }

  @media (max-width: 480px) {
    .template-store {
      padding: 1.5rem 1rem;
    }

    .store-list {
      flex-direction: column;
    }

    .template-card {
      flex: 1 1 auto;
    }
  }

  @media (prefers-color-scheme: dark) {
    .detail-chip {
      background: rgba(96, 165, 250, 0.12);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .spinner {
      animation: none;
    }
  }
</style>
