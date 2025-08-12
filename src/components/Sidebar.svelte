<script>
  const menus = [
    { label: 'Dashboard', icon: 'i-lucide-home', active: false },
    { label: 'Transactions', icon: 'i-lucide-exchange', active: true },
    { label: 'Analytics', icon: 'i-lucide-bar-chart-3', active: false },
    { label: 'Setting', icon: 'i-lucide-settings', active: false },
    { label: 'Support', icon: 'i-lucide-life-buoy', active: false }
  ]
</script>

<aside class="space-y-6">
  <div class="rounded-2xl border border-gray-200 bg-white p-2">
    <nav class="space-y-1 text-sm">
      {#each menus as m}
        <button
          type="button"
          class="group relative flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition hover:bg-gray-50"
          class:text-gray-900={m.active}
          class:font-medium={m.active}
          class:text-gray-600={!m.active}
        >
          {#if m.active}
            <span class="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-full bg-gray-900"></span>
          {/if}
          <span class={`text-lg ${m.icon}`}></span>
          <span>{m.label}</span>
        </button>
      {/each}
    </nav>
  </div>

  <div class="rounded-2xl border border-gray-200 bg-white p-4">
    <div class="mb-2 flex items-center gap-2 text-gray-900">
      <span class="i-lucide-sparkles"></span>
      Upgrade Plan
    </div>
    <p class="mb-3 text-xs text-gray-500">Unlock all feature with Pro Plan!</p>
    <div class="mb-3 text-sm font-medium">$7.20/Months</div>
    <button class="w-full rounded-xl border border-gray-300 py-2 text-sm font-medium hover:bg-gray-50">Select Plan</button>
  </div>
</aside>

<style>
  .i-lucide-home::before { content: '🏠'; }
  .i-lucide-exchange::before { content: '⇄'; }
  .i-lucide-bar-chart-3::before { content: '📊'; }
  .i-lucide-settings::before { content: '⚙️'; }
  .i-lucide-life-buoy::before { content: '🛟'; }
  .i-lucide-sparkles::before { content: '✨'; }
</style>
