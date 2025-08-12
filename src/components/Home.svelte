<script>
  import Sidebar from './Sidebar.svelte'
  import Transactions from './Transactions.svelte'
  const month = 'October 2024'
</script>

<section class="grid grid-cols-[240px_1fr] gap-6">
  <div class="block">
    <div class="sticky top-6">
      <Sidebar />
    </div>
  </div>
  <Transactions {month} />
</section>
