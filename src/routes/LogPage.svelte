<script lang="ts">
  // transitions
  import { blur } from 'svelte/transition';

</script>

<div in:blur class="main-content">
  <h1>Log page!</h1>

</div>

<style lang="scss">
  .main-content {
    height: 100%;
    width: 100%;
    border: 6px solid #ddd;
    border-top: 16px solid #ddd;
    border-radius: 4px;
    padding: 8px;
    background-color: #dddddd2e;
  }
</style>