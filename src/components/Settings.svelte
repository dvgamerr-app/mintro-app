<script lang="ts">
  import { settings, type Settings as SettingsType } from '../lib/settings'
  import { t } from '../lib/i18n'
  import { get } from 'svelte/store'
  import { fade } from 'svelte/transition'
  import { tick } from 'svelte'
  import homeIcon from '../assets/icons/home.svg?raw'
  import txIcon from '../assets/icons/arrows-right-left.svg?raw'
  import chartIcon from '../assets/icons/chart-bar.svg?raw'
  import cogIcon from '../assets/icons/cog-6-tooth.svg?raw'

  let form: SettingsType = { ...get(settings) }
  let justSaved = false

  async function addCurrency() {
    form.currencies = [...new Set([...form.currencies, ''])]
    await tick()
    try {
      const el = document.querySelector<HTMLInputElement>('[data-currency-input="last"]')
      el?.focus()
    } catch {}
  }
  function updateCurrency(i: number, v: string) {
    const arr = [...form.currencies]
    arr[i] = v
    form.currencies = arr
  }
  function removeCurrency(i: number) {
    form.currencies = form.currencies.filter((_, idx) => idx !== i)
    if (!form.currencies.includes(form.selectedCurrency)) {
      form.selectedCurrency = form.currencies[0] || ''
    }
  }

  async function addCategory() {
    form.categories = [...new Set([...form.categories, ''])]
    await tick()
    try {
      const el = document.querySelector<HTMLInputElement>('[data-category-input="last"]')
      el?.focus()
    } catch {}
  }
  function updateCategory(i: number, v: string) {
    const arr = [...form.categories]
    arr[i] = v
    form.categories = arr
  }
  function removeCategory(i: number) {
    form.categories = form.categories.filter((_, idx) => idx !== i)
  }

  function save() {
    // cleanup empties
    form.currencies = form.currencies.filter((c) => c.trim() !== '')
    form.categories = form.categories.filter((c) => c.trim() !== '')
    if (!form.selectedCurrency && form.currencies.length) {
      form.selectedCurrency = form.currencies[0]
    }
    settings.set({ ...form })
    try {
      document.documentElement.setAttribute('lang', form.lang)
    } catch {}
    justSaved = true
    setTimeout(() => (justSaved = false), 1600)
  }

  function resetToDefaults() {
    // mirrors defaults in lib/settings.ts
    form = {
      currencies: ['฿', '$', '€'],
      selectedCurrency: '฿',
      categories: ['Home', 'Health', 'Personal'],
      startPage: '/transactions',
      lang: 'en',
    }
  }
</script>

<div class="space-y-4">
  <div class="flex flex-wrap items-center justify-between gap-3">
    <div class="flex items-center gap-2">
      {#if justSaved}
        <span class="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300" in:fade={{ duration: 150 }} out:fade={{ duration: 200 }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
          {$t('saved')}
        </span>
      {/if}
      <button class="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800" on:click={resetToDefaults}>{$t('reset')}</button>
      <button class="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200" on:click={save}>{$t('save')}</button>
    </div>
  </div>

  <div class="grid grid-cols-1 gap-4 lg:grid-cols-12">
    <!-- Left column -->
    <section class="rounded-2xl bg-white p-4 dark:bg-gray-900 lg:col-span-7 space-y-6">
      <div class="space-y-2">
        <h3 class="text-sm font-semibold text-gray-900 dark:text-gray-100">{$t('language')}</h3>
        <div class="inline-flex rounded-lg border border-gray-200 bg-gray-100 p-1 text-sm dark:border-gray-800 dark:bg-gray-800/50">
          <button class={`rounded-md px-3 py-1.5 transition-colors ${form.lang === 'en' ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900' : 'opacity-70 hover:opacity-100'}`} on:click={() => (form.lang = 'en')} aria-pressed={form.lang === 'en'} data-testid="lang-en">{$t('english')}</button>
          <button class={`rounded-md px-3 py-1.5 transition-colors ${form.lang === 'th' ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900' : 'opacity-70 hover:opacity-100'}`} on:click={() => (form.lang = 'th')} aria-pressed={form.lang === 'th'} data-testid="lang-th">{$t('thai')}</button>
        </div>
      </div>

      <div class="space-y-3">
        <h3 class="text-sm font-semibold text-gray-900 dark:text-gray-100">{$t('startupPage')}</h3>
        <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
          {#each [{ key: '/dashboard', label: $t('dashboard'), icon: homeIcon }, { key: '/transactions', label: $t('transactions'), icon: txIcon }, { key: '/analytics', label: $t('analytics'), icon: chartIcon }, { key: '/settings', label: $t('settings'), icon: cogIcon }] as item}
            {#key form.startPage}
              <button type="button" on:click={() => (form.startPage = item.key)} class={`relative rounded-xl border p-3 text-left text-sm transition-all hover:shadow-sm ${form.startPage === item.key ? 'border-gray-900 bg-gray-50 dark:bg-gray-800/50' : 'border-gray-300 dark:border-gray-800'}`} aria-pressed={form.startPage === item.key}>
                <div class={`mb-2 inline-flex size-9 items-center justify-center rounded-lg ${form.startPage === item.key ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900' : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'}`} aria-hidden="true">{@html item.icon}</div>
                <div class="font-medium">{item.label}</div>
                {#if form.startPage === item.key}
                  <svg class="absolute right-2 top-2 size-4 text-gray-900 dark:text-gray-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                {/if}
              </button>
            {/key}
          {/each}
        </div>
      </div>
    </section>

    <!-- Right column -->
    <section class="rounded-2xl bg-white p-4 dark:bg-gray-900 lg:col-span-5 space-y-6">
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <h3 class="text-sm font-semibold text-gray-900 dark:text-gray-100">{$t('currencyList')}</h3>
          <button class="inline-flex items-center justify-center rounded-lg border px-2 py-1 text-xs hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800" on:click={addCurrency}>{$t('add')}</button>
        </div>
        <div class="space-y-2">
          {#each form.currencies as c, i}
            <div class="flex items-center gap-2">
              <input
                class="flex-1 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-800"
                bind:value={form.currencies[i]}
                on:input={(e) => updateCurrency(i, (e.target as HTMLInputElement).value)}
                placeholder="฿ / $ / €"
                data-currency-input={i === form.currencies.length - 1 ? 'last' : undefined}
              />
              <button class="inline-flex items-center justify-center rounded-lg border px-2 py-1 text-xs hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800" on:click={() => removeCurrency(i)}>{$t('remove')}</button>
            </div>
          {/each}
        </div>

        <div class="space-y-2">
          <div class="text-xs font-medium text-gray-600 dark:text-gray-300">{$t('selectedCurrency')}</div>
          <div class="flex flex-wrap gap-2">
            {#each form.currencies as c}
              <button
                type="button"
                class={`rounded-full border px-3 py-1.5 text-xs transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800 ${form.selectedCurrency === c ? 'border-gray-900 bg-gray-900 text-white dark:bg-white dark:text-gray-900' : ''}`}
                on:click={() => (form.selectedCurrency = c)}
                aria-pressed={form.selectedCurrency === c}>{c}</button
              >
            {/each}
          </div>
        </div>
      </div>

      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <h3 class="text-sm font-semibold text-gray-900 dark:text-gray-100">{$t('categories')}</h3>
          <button class="inline-flex items-center justify-center rounded-lg border px-2 py-1 text-xs hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800" on:click={addCategory}>{$t('add')}</button>
        </div>
        <div class="space-y-2">
          {#each form.categories as c, i}
            <div class="flex items-center gap-2">
              <input
                class="flex-1 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-800"
                bind:value={form.categories[i]}
                on:input={(e) => updateCategory(i, (e.target as HTMLInputElement).value)}
                placeholder="Food / Home / Travel"
                data-category-input={i === form.categories.length - 1 ? 'last' : undefined}
              />
              <button class="inline-flex items-center justify-center rounded-lg border px-2 py-1 text-xs hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800" on:click={() => removeCategory(i)}>{$t('remove')}</button>
            </div>
          {/each}
        </div>
      </div>
    </section>
  </div>
</div>
