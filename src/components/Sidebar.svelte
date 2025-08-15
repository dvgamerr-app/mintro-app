<script>
  import homeIcon from '../assets/icons/home.svg?raw'
  import arrowsIcon from '../assets/icons/arrows-right-left.svg?raw'
  import chartBarIcon from '../assets/icons/chart-bar.svg?raw'
  import cogIcon from '../assets/icons/cog-6-tooth.svg?raw'
  import lifebuoyIcon from '../assets/icons/lifebuoy.svg?raw'
  import { t } from '../lib/i18n'

  let pathname = typeof window !== 'undefined' ? window.location.pathname : '/'
  const menus = [
    { labelKey: 'dashboard', href: '/dashboard', icon: homeIcon },
    { labelKey: 'transactions', href: '/transactions', icon: arrowsIcon },
    { labelKey: 'analytics', href: '/analytics', icon: chartBarIcon },
    { labelKey: 'settings', href: '/settings', icon: cogIcon },
    { labelKey: 'docs', href: 'https://github.com/dvgamerr-app/mintro-app', icon: lifebuoyIcon, external: true },
  ]
</script>

<aside class="space-y-6">
  <div class="rounded-2xl bg-white p-2 dark:bg-gray-900">
    <nav class="space-y-1 text-sm">
      {#each menus as m}
        {#if m.external}
          <a href={m.href} target="_blank" rel="noopener noreferrer" class="group relative flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-gray-600 transition hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800">
            {@html m.icon}
            <span>{$t(m.labelKey)}</span>
          </a>
        {:else}
          <a
            href={m.href}
            class="group relative flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition hover:bg-gray-50 dark:hover:bg-gray-800
            {pathname === m.href ? 'text-gray-900 dark:text-gray-100 font-medium' : 'text-gray-600 dark:text-gray-300'}"
            aria-current={pathname === m.href ? 'page' : undefined}
          >
            {#if pathname === m.href}
              <span class="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-full bg-gray-900 dark:bg-gray-100"></span>
            {/if}
            {@html m.icon}
            <span>{$t(m.labelKey)}</span>
          </a>
        {/if}
      {/each}
    </nav>
  </div>
</aside>
