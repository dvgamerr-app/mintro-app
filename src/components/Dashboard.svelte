<script lang="ts">
  import PageLayout from './PageLayout.svelte'
  import { t } from '../lib/i18n'
  import { formatNumberTH, formatTHB, formatPct } from '../lib/format'
  import { get } from 'svelte/store'

  // Mocked data to mirror the screenshot
  const totals = {
    title: 'WealthFolio',
    total: 765_648.74,
    diff: 112_654.04,
    diffPct: 17.25,
  }

  const allocation = {
    goldPct: 56,
    depositPct: 44,
  }

  const currency = {
    thbPct: 0,
    otherPct: 100,
    totalApprox: 765_648.74,
  }

  const interest = 71.85
  const lastUpdated = 'อัปเดตล่าสุด 07 ส.ค. 2568 - 11:46'

  const assetGold = {
    name: get(t)('gold'),
    pct: 56,
    value: 425_341.04,
    diff: 112_654.04,
    diffPct: 36.03,
  }

  // ...existing code...

  const chipItems = [get(t)('chipAssets'), get(t)('chipCustomGroup'), get(t)('chipCurrencies'), get(t)('chipAssetClass')]
</script>

<PageLayout>
  <section class="space-y-6">
    <!-- Top hero summary -->
    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600 via-blue-600 to-cyan-500 text-white">
      <div class="p-5 sm:p-7">
        <div class="flex items-start justify-between gap-4">
          <div>
            <div class="text-xl font-semibold opacity-90">{totals.title}</div>
            <div class="mt-1 text-sm opacity-90">{get(t)('totalAssets')}</div>
            <div class="mt-1 text-4xl font-extrabold tracking-tight sm:text-5xl">{formatTHB(totals.total).replace(' ' + get(t)('currencyUnit'), '')}<span class="ml-1 text-lg font-semibold align-super">{get(t)('currencyUnit')}</span></div>
            <div class="mt-2 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm">
              <span class="inline-flex size-2 rounded-full bg-emerald-400"></span>
              <span class="font-semibold">+{formatNumberTH(totals.diff)}</span>
              <span class="opacity-90">(+{formatPct(totals.diffPct)}%)</span>
            </div>
          </div>
        </div>

        <!-- Chips -->
        <div class="mt-5 flex flex-wrap gap-2">
          {#each chipItems as chip, i}
            <button class="rounded-full bg-white/15 px-3 py-1.5 text-sm backdrop-blur hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/40 {i === 0 ? 'ring-1 ring-white/50' : ''}">{chip}</button>
          {/each}
        </div>
      </div>
    </div>

    <!-- Cards -->
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <!-- Donut + legend -->
      <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <div class="text-base font-semibold text-gray-900 dark:text-gray-100">{get(t)('assetAllocationTitle')}</div>
        <div class="mt-4 flex items-center gap-6">
          <div class="relative grid place-items-center">
            <div class="h-36 w-36 rounded-full" style="background-image: conic-gradient(#f59e0b 0 {allocation.goldPct}%, #06b6d4 0 100%);"></div>
            <div class="absolute h-24 w-24 rounded-full bg-white dark:bg-gray-900"></div>
          </div>
          <div class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <div class="flex items-center gap-2"><span class="inline-block h-2.5 w-2.5 rounded-full bg-amber-500"></span> {get(t)('gold')} ({allocation.goldPct}%)</div>
            <div class="flex items-center gap-2"><span class="inline-block h-2.5 w-2.5 rounded-full bg-cyan-500"></span> เงินฝากและวอลเล็ต ({allocation.depositPct}%)</div>
          </div>
        </div>
      </div>

      <!-- Currency breakdown -->
      <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <div class="text-base font-semibold text-gray-900 dark:text-gray-100">{get(t)('myCurrencies')}</div>
        <div class="mt-4 space-y-3 text-sm">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <span class="text-lg">🇹🇭</span>
              <span>THB ({currency.thbPct}%)</span>
            </div>
            <div class="text-gray-500 dark:text-gray-400">0.00 {get(t)('currencyUnit')}</div>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <span class="text-lg">🌐</span>
              <span>อื่นๆ ({currency.otherPct}%)</span>
            </div>
            <div class="text-gray-900 dark:text-gray-100">≈ {formatTHB(currency.totalApprox)}</div>
          </div>
        </div>
      </div>

      <!-- Interest YTD -->
      <div class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <div class="text-base font-semibold text-gray-900 dark:text-gray-100">{get(t)('interestYTD')}</div>
        <div class="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300">
          <span class="inline-flex size-2 rounded-full bg-emerald-500"></span>
          <span class="font-semibold">+{formatNumberTH(interest)}</span>
          <span>{get(t)('currencyUnit')}</span>
        </div>
        <div class="mt-6 text-xs text-gray-500 dark:text-gray-400">{get(t)('updatedOnPrefix')} 06 ส.ค. 2568</div>
      </div>
    </div>

    <!-- Meta row -->
    <div class="flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500 dark:text-gray-400">
      <div class="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <span>{lastUpdated}</span>
      </div>
      <button type="button" class="text-blue-600 hover:underline dark:text-blue-400">{get(t)('readMore')}</button>
    </div>

    <!-- Assets list -->
    <div class="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
      <div class="text-base font-semibold text-gray-900 dark:text-gray-100">{get(t)('myAssets')}</div>
      <div class="mt-3 divide-y divide-gray-100 dark:divide-gray-800">
        <div class="flex items-center justify-between gap-4 py-3">
          <div class="flex items-center gap-3">
            <div class="grid place-items-center rounded-xl bg-amber-100 p-2 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                <path d="M9.568 3.5a1.5 1.5 0 0 1 1.298-.75h2.268a1.5 1.5 0 0 1 1.298.75l1.8 3.15a1.5 1.5 0 0 1 0 1.5l-1.8 3.15a1.5 1.5 0 0 1-1.298.75h-2.268a1.5 1.5 0 0 1-1.298-.75l-1.8-3.15a1.5 1.5 0 0 1 0-1.5l1.8-3.15Z" />
                <path d="M3.568 12.5a1.5 1.5 0 0 1 1.298-.75h2.268a1.5 1.5 0 0 1 1.298.75l1.8 3.15a1.5 1.5 0 0 1 0 1.5l-1.8 3.15a1.5 1.5 0 0 1-1.298.75H4.866a1.5 1.5 0 0 1-1.298-.75l-1.8-3.15a1.5 1.5 0 0 1 0-1.5l1.8-3.15Z" />
                <path d="M15.568 12.5a1.5 1.5 0 0 1 1.298-.75h2.268a1.5 1.5 0 0 1 1.298.75l1.8 3.15a1.5 1.5 0 0 1 0 1.5l-1.8 3.15a1.5 1.5 0 0 1-1.298.75h-2.268a1.5 1.5 0 0 1-1.298-.75l-1.8-3.15a1.5 1.5 0 0 1 0-1.5l1.8-3.15Z" />
              </svg>
            </div>
            <div>
              <div class="text-sm font-medium text-gray-900 dark:text-gray-100">{get(t)('gold')}</div>
              <div class="text-xs text-gray-500 dark:text-gray-400">{assetGold.pct}%</div>
            </div>
          </div>
          <div class="text-right">
            <div class="text-sm font-semibold text-gray-900 dark:text-gray-100">{formatTHB(assetGold.value).replace(' บาท', '')}</div>
            <div class="text-xs text-emerald-600 dark:text-emerald-400">+{formatNumberTH(assetGold.diff)} (+{formatPct(assetGold.diffPct)}%)</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</PageLayout>
