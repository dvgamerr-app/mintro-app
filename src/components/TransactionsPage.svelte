<script lang="ts">
  import PageLayout from './PageLayout.svelte'
  import Transactions from './Transactions.svelte'

  const month = 'October 2024'
</script>

<PageLayout>
  <Transactions {month} />
</PageLayout>
