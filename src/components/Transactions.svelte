<script>
  export let month = 'October 2024'
  const summary = [
    { label: 'Income', value: '$8.200', diff: '+5.00%', tone: 'pos' },
    { label: 'Expenses', value: '$2.200', diff: '-5.20%', tone: 'pos' },
    { label: 'Investment', value: '$1.320', diff: '-3.23%', tone: 'neg' },
    { label: 'Savings', value: '$2.300', diff: '+4.20%', tone: 'pos' }
  ]
  const today = [
    {
      title: 'Internet Bill', category: 'Home', type: 'Debit', note: 'Monthly Bill',
      amount: '$7.20', account: '082233445550', color: 'text-red-500', iconBg: 'bg-cyan-500'
    },
    {
      title: 'Health Insurance', category: 'Health', type: 'Debit', note: 'Monthly Bill',
      amount: '$82.20', account: '082233445550', color: 'text-red-500', iconBg: 'bg-violet-500'
    }
  ]
  const yesterday = [
    {
      title: 'Salary', category: 'Personal', type: 'Credit', note: 'Salary',
      amount: '$7.200', account: '47029988000', color: 'text-emerald-600', iconBg: 'bg-blue-600'
    }
  ]
</script>

<section class="space-y-6">
  <header class="flex flex-wrap items-center justify-between gap-3">
    <h1 class="text-2xl font-semibold">Transactions</h1>
    <div class="flex items-center gap-2">
      <button class="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50">
        <span class="i-lucide-filter"></span>
        Filter
      </button>
      <button class="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50">
        {month}
        <span class="i-lucide-chevron-down"></span>
      </button>
      <button class="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-3 py-2 text-sm text-white hover:bg-gray-800">
        <span class="i-lucide-plus"></span>
        Add Item
      </button>
    </div>
  </header>

  <section class="rounded-2xl border border-gray-200 bg-white p-4">
    <h2 class="mb-4 text-sm font-medium text-gray-500">Summary</h2>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {#each summary as s}
        <div class="rounded-2xl border border-gray-200 p-4">
          <div class="mb-4 flex items-center justify-between text-sm text-gray-500">
            <span>{s.label}</span>
            <span class="rounded-md px-2 py-0.5 text-xs font-medium"
              class:bg-emerald-50={s.tone==='pos'} class:text-emerald-600={s.tone==='pos'}
              class:bg-rose-50={s.tone==='neg'} class:text-rose-600={s.tone==='neg'}>{s.diff}</span>
          </div>
          <div class="text-3xl font-semibold tracking-tight">{s.value}</div>
        </div>
      {/each}
    </div>
  </section>

  <section class="space-y-6">
    <div class="text-sm font-medium text-gray-500">Today</div>
    <div class="space-y-3">
      {#each today as t}
        <article class="flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-4">
          <div class="flex flex-1 items-center gap-4">
            <div class="grid h-10 w-10 place-items-center rounded-full bg-gray-100">
              <span class="i-lucide-arrow-left text-lg {t.color}"></span>
            </div>
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-2 text-gray-900">
                <div class="font-medium">{t.title}</div>
                <span class="h-1 w-1 rounded-full bg-gray-300"></span>
                <div class="flex items-center gap-1 text-gray-600">
                  <span class="i-lucide-home text-sm"></span>
                  {t.category}
                </div>
                <span class="rounded-md border border-gray-300 px-2 py-0.5 text-xs">{t.type}</span>
              </div>
              <div class="mt-1 text-sm text-gray-500">
                <span class="i-lucide-receipt text-sm"></span>
                <span class="ml-2">{t.note}</span>
              </div>
            </div>
          </div>
          <div class="text-right">
            <div class="text-base font-semibold text-gray-900">{t.amount}</div>
            <div class="mt-1 flex items-center justify-end gap-2 text-sm text-gray-500">
              <span class="h-7 w-7 rounded-lg {t.iconBg}"></span>
              {t.account}
            </div>
          </div>
        </article>
      {/each}
    </div>

    <div class="text-sm font-medium text-gray-500">Yesterday</div>
    <div class="space-y-3">
      {#each yesterday as y}
        <article class="flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-4">
          <div class="flex flex-1 items-center gap-4">
            <div class="grid h-10 w-10 place-items-center rounded-full bg-gray-100">
              <span class="i-lucide-arrow-right text-lg {y.color}"></span>
            </div>
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-2 text-gray-900">
                <div class="font-medium">{y.title}</div>
                <span class="h-1 w-1 rounded-full bg-gray-300"></span>
                <div class="flex items-center gap-1 text-gray-600">
                  <span class="i-lucide-user text-sm"></span>
                  {y.category}
                </div>
                <span class="rounded-md border border-gray-300 px-2 py-0.5 text-xs">{y.type}</span>
              </div>
              <div class="mt-1 text-sm text-gray-500">
                <span class="i-lucide-badge-dollar-sign text-sm"></span>
                <span class="ml-2">{y.note}</span>
              </div>
            </div>
          </div>
          <div class="text-right">
            <div class="text-base font-semibold text-emerald-600">{y.amount}</div>
            <div class="mt-1 flex items-center justify-end gap-2 text-sm text-gray-500">
              <span class="h-7 w-7 rounded-lg {y.iconBg}"></span>
              {y.account}
            </div>
          </div>
        </article>
      {/each}
    </div>
  </section>
</section>

<style>
  .i-lucide-filter::before { content: '⎚'; }
  .i-lucide-chevron-down::before { content: '▾'; }
  .i-lucide-plus::before { content: '+'; }
  .i-lucide-arrow-left::before { content: '←'; }
  .i-lucide-arrow-right::before { content: '→'; }
  .i-lucide-receipt::before { content: '🧾'; }
  .i-lucide-home::before { content: '🏠'; }
  .i-lucide-user::before { content: '👤'; }
  .i-lucide-badge-dollar-sign::before { content: '💰'; }
</style>
