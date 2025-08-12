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
        <!-- Place this tag where you want the button to render. -->
        <div class="mt-2">
          <a
            class="github-button"
            href="https://github.com/dvgamerr-app/mintro-app"
            data-color-scheme="light: light; dark: dark;"
            data-icon="octicon-star"
            data-show-count="true"
            aria-label="Star dvgamerr-app/mintro-app on GitHub">Star</a
          >
          <a
            class="github-button"
            href="https://github.com/sponsors/dvgamerr"
            data-color-scheme="light: light; dark: dark;"
            data-icon="octicon-heart"
            aria-label="Sponsor @dvgamerr on GitHub">Sponsor</a
          >
        </div>
        <div class="size-8 rounded-full bg-gray-200"></div>
      </div>
    </div>
  </div>
</header>
