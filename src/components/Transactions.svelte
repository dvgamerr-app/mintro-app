<script>
  import { t } from '../lib/i18n'
  import { settings } from '../lib/settings'
  export let month = 'October 2024'
  const summary = [
    { labelKey: 'income', amount: 8200, diff: '+5.00%', tone: 'pos' },
    { labelKey: 'expenses', amount: 2200, diff: '-5.20%', tone: 'pos' },
    { labelKey: 'investment', amount: 1320, diff: '-3.23%', tone: 'neg' },
    { labelKey: 'savings', amount: 2300, diff: '+4.20%', tone: 'pos' },
  ]
  const today = [
    {
      title: 'Internet Bill',
      category: 'Home',
      type: 'Debit',
      note: 'Monthly Bill',
      amount: 7.2,
      account: '082233445550',
      color: 'text-red-500',
      iconBg: 'bg-cyan-500',
    },
    {
      title: 'Health Insurance',
      category: 'Health',
      type: 'Debit',
      note: 'Monthly Bill',
      amount: 82.2,
      account: '082233445550',
      color: 'text-red-500',
      iconBg: 'bg-violet-500',
    },
  ]
  const yesterday = [
    {
      title: 'Salary',
      category: 'Personal',
      type: 'Credit',
      note: 'Salary',
      amount: 7200,
      account: '47029988000',
      color: 'text-emerald-600',
      iconBg: 'bg-blue-600',
    },
  ]
  $: currency = $settings.selectedCurrency
  function fmt(n) {
    try {
      const symbol = $settings.selectedCurrency || '$'
      return symbol + new Intl.NumberFormat(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n)
    } catch {
      return ($settings.selectedCurrency || '$') + n
    }
  }
</script>

<svelte:window
  on:storage={() => {
    /* react to external changes */
  }}
/>

<section class="space-y-6">
  <header class="flex flex-wrap items-center justify-between gap-3">
    <h1 class="text-2xl font-semibold">{$t('transactions')}</h1>
    <div class="flex items-center gap-2">
      <button class="inline-flex items-center gap-2 rounded-xl bg-gray-100 px-3 py-2 text-sm hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
        </svg>
        {$t('filter')}
      </button>
      <button class="inline-flex items-center gap-2 rounded-xl bg-gray-100 px-3 py-2 text-sm hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700">
        {month}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <button class="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-3 py-2 text-sm text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        {$t('addItem')}
      </button>
    </div>
  </header>

  <section class="rounded-2xl py-4">
    <h2 class="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">{$t('summary')}</h2>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {#each summary as s}
        <div class="rounded-2xl bg-white p-4 dark:bg-gray-900">
          <div class="mb-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>{$t(s.labelKey)}</span>
            <span class="rounded-md px-2 py-0.5 text-xs font-medium" class:bg-emerald-50={s.tone === 'pos'} class:text-emerald-600={s.tone === 'pos'} class:bg-rose-50={s.tone === 'neg'} class:text-rose-600={s.tone === 'neg'}>{s.diff}</span>
          </div>
          <div class="text-3xl font-semibold tracking-tight">{fmt(s.amount)}</div>
        </div>
      {/each}
    </div>
  </section>

  <section class="space-y-6">
    <div class="text-sm font-medium text-gray-500 dark:text-gray-400">{$t('today')}</div>
    <div class="space-y-3">
      {#each today as t}
        <article class="flex items-center justify-between gap-4 rounded-2xl bg-white p-4 dark:bg-gray-900">
          <div class="flex flex-1 items-center gap-4">
            <div class="grid h-10 w-10 place-items-center rounded-full bg-gray-100 dark:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </div>
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-2 text-gray-900 dark:text-gray-100">
                <div class="font-medium">{t.title}</div>
                <span class="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                <div class="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                  {t.category}
                </div>
                <span class="rounded-md border border-gray-300 px-2 py-0.5 text-xs dark:border-gray-700">{t.type}</span>
              </div>
              <div class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                <span class="ml-2">{t.note}</span>
              </div>
            </div>
          </div>
          <div class="text-right">
            <div class="text-base font-semibold text-gray-900 dark:text-gray-100">{fmt(t.amount)}</div>
            <div class="mt-1 flex items-center justify-end gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="h-7 w-7 rounded-lg {t.iconBg}"></span>
              {t.account}
            </div>
          </div>
        </article>
      {/each}
    </div>

    <div class="text-sm font-medium text-gray-500 dark:text-gray-400">{$t('yesterday')}</div>
    <div class="space-y-3">
      {#each yesterday as y}
        <article class="flex items-center justify-between gap-4 rounded-2xl bg-white p-4 dark:bg-gray-900">
          <div class="flex flex-1 items-center gap-4">
            <div class="grid h-10 w-10 place-items-center rounded-full bg-gray-100 dark:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-2 text-gray-900 dark:text-gray-100">
                <div class="font-medium">{y.title}</div>
                <span class="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                <div class="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                  {y.category}
                </div>
                <span class="rounded-md border border-gray-300 px-2 py-0.5 text-xs dark:border-gray-700">{y.type}</span>
              </div>
              <div class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                <span class="ml-2">{y.note}</span>
              </div>
            </div>
          </div>
          <div class="text-right">
            <div class="text-base font-semibold text-emerald-600">{fmt(y.amount)}</div>
            <div class="mt-1 flex items-center justify-end gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="h-7 w-7 rounded-lg {y.iconBg}"></span>
              {y.account}
            </div>
          </div>
        </article>
      {/each}
    </div>
  </section>
</section>
