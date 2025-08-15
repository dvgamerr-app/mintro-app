<script lang="ts">
  import Sidebar from './Sidebar.svelte'
  import Transactions from './Transactions.svelte'
  import Navbar from './Navbar.svelte'
  import Settings from './Settings.svelte'
  import { t } from '../lib/i18n'
  import { fly, fade } from 'svelte/transition'
  import { cubicOut, cubicIn } from 'svelte/easing'
  export let page: string = typeof window !== 'undefined' ? window.location.pathname : '/transactions'
  const month = 'October 2024'
  let open = false
  const toggle = () => (open = !open)
</script>

<Navbar onToggle={toggle} />

<section class="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-4 md:gap-6 p-6">
  <!-- Drawer for sm/md -->
  <div class="lg:hidden">
    {#if open}
      <div class="fixed inset-0 z-40" role="dialog" aria-modal="true" aria-label="Navigation menu">
        <button type="button" class="absolute inset-0 bg-black/40" on:click={() => (open = false)} aria-label="Close menu overlay" in:fade={{ duration: 150 }} out:fade={{ duration: 150 }}></button>
        <div class="absolute left-0 top-0 h-full w-72 max-w-[85vw] translate-x-0 bg-white p-4 shadow-xl dark:bg-gray-900" in:fly={{ x: -320, duration: 250, easing: cubicOut }} out:fly={{ x: -320, duration: 200, easing: cubicIn }}>
          <div class="mb-3 flex items-center justify-between">
            <span class="text-sm font-semibold text-gray-900 dark:text-gray-100">Mintro</span>
            <button class="inline-flex size-8 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" on:click={() => (open = false)} aria-label="Close menu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6m0 12L6 6" />
              </svg>
            </button>
          </div>
          <Sidebar />
        </div>
      </div>
    {/if}
  </div>

  <!-- Static sidebar for lg+ -->
  <div class="hidden lg:block">
    <div class="sticky top-6">
      <Sidebar />
    </div>
  </div>

  {#if page === '/transactions' || page === '/'}
    <Transactions {month} />
  {:else if page === '/dashboard'}
    <section class="space-y-6">
      <header class="flex items-center justify-between">
        <h1 class="text-2xl font-semibold">{$t('dashboard')}</h1>
      </header>
      <div class="rounded-2xl bg-white p-4 dark:bg-gray-900 text-sm text-gray-600 dark:text-gray-300">Coming soon…</div>
    </section>
  {:else if page === '/analytics'}
    <section class="space-y-6">
      <header class="flex items-center justify-between">
        <h1 class="text-2xl font-semibold">{$t('analytics')}</h1>
      </header>
      <div class="rounded-2xl bg-white p-4 dark:bg-gray-900 text-sm text-gray-600 dark:text-gray-300">Coming soon…</div>
    </section>
  {:else if page === '/settings'}
    <section class="space-y-6">
      <header class="flex flex-wrap items-center justify-between gap-3">
        <h1 class="text-2xl font-semibold">{$t('settings')}</h1>
      </header>
      <Settings />
    </section>
  {/if}
</section>
