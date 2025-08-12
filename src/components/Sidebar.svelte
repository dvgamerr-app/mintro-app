<script>
  import homeIcon from '../assets/icons/home.svg?raw'
  import arrowsIcon from '../assets/icons/arrows-right-left.svg?raw'
  import chartBarIcon from '../assets/icons/chart-bar.svg?raw'
  import cogIcon from '../assets/icons/cog-6-tooth.svg?raw'
  import lifebuoyIcon from '../assets/icons/lifebuoy.svg?raw'

  const menus = [
    { label: 'Dashboard', icon: homeIcon, active: false },
    { label: 'Transactions', icon: arrowsIcon, active: true },
    { label: 'Analytics', icon: chartBarIcon, active: false },
    { label: 'Setting', icon: cogIcon, active: false },
    { label: 'Documentation', icon: lifebuoyIcon, active: false },
  ]
</script>

<aside class="space-y-6">
  <div class="rounded-2xl bg-white p-2">
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
          {@html m.icon}
          <span>{m.label}</span>
        </button>
      {/each}
    </nav>
  </div>
</aside>
