<script>
  export let onToggle = () => {}
  const toggle = () => onToggle()
</script>

<header class="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
  <div class="mx-auto flex h-14 max-w-screen-2xl items-center gap-3 px-4">
    <button
      class="-m-2 inline-flex size-9 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 lg:hidden"
      aria-label="Open menu"
      on:click={toggle}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="size-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
      </svg>
    </button>

    <div class="mx-auto max-w-7xl px-6 flex min-w-0 flex-1 items-center justify-between gap-3">
      <div class="flex items-center gap-2">
        <span class="text-sm font-semibold text-gray-900">Mintro</span>
      </div>
      <div class="flex items-center gap-3">
        <div class="flex items-center gap-2">
          <a
            href="https://github.com/dvgamerr-app/mintro-app"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-2 py-1 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 active:bg-gray-900"
            aria-label="Star dvgamerr-app/mintro-app on GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-3">
              <path
                d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.28l-3.046 2.969.719 4.195a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.983a.75.75 0 0 1-1.088-.79l.72-4.196L.82 6.375a.75.75 0 0 1 .416-1.279l4.21-.613L7.327.668A.75.75 0 0 1 8 .25Z"
              />
            </svg>
            <span>Star</span>
          </a>
          <a
            href="https://github.com/sponsors/dvgamerr"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-lg border border-pink-600/20 bg-pink-50 px-2 py-1 text-sm font-medium text-pink-500/70 hover:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-400 dark:border-pink-500/30 dark:bg-white dark:text-pink-500/70 dark:hover:text-pink-500/80"
            aria-label="Sponsor @dvgamerr on GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
              <path
                d="M12.001 21.35c-.33 0-.66-.1-.94-.3-1.92-1.36-3.64-2.91-5.15-4.61-1.64-1.85-2.46-3.7-2.46-5.54 0-2.86 2.24-5.15 5-5.15 1.5 0 2.9.69 3.81 1.8.91-1.11 2.31-1.8 3.81-1.8 2.76 0 5 2.29 5 5.15 0 1.84-.82 3.69-2.46 5.54-1.51 1.7-3.23 3.25-5.15 4.61-.28.2-.61.3-.96.3z"
              />
            </svg>
            <span>Sponsor</span>
          </a>
        </div>
        <div class="size-8 rounded-full bg-gray-200"></div>
      </div>
    </div>
  </div>
</header>
