<script lang="ts">
  import PageLayout from './PageLayout.svelte'
  import Settings from './Settings.svelte'
  import { t } from '../lib/i18n'
</script>

<PageLayout>
  <section class="space-y-6">
    <header class="flex flex-wrap items-center justify-between gap-3">
      <h1 class="text-2xl font-semibold">{$t('settings')}</h1>
    </header>
    <Settings />
  </section>
</PageLayout>
