<script lang="ts">
  import PageLayout from './PageLayout.svelte'
  import { t } from '../lib/i18n'
</script>

<PageLayout>
  <section class="space-y-6">
    <header class="flex items-center justify-between">
      <h1 class="text-2xl font-semibold">{$t('dashboard')}</h1>
    </header>
    <div class="rounded-2xl bg-white p-4 dark:bg-gray-900 text-sm text-gray-600 dark:text-gray-300">Coming soon…</div>
  </section>
</PageLayout>
