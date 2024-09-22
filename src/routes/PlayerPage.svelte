<script lang="ts">
  // transitions
  import { blur } from 'svelte/transition';

</script>

<div in:blur class="main-content">
  <h1>Player page!</h1>

</div>

<style lang="scss">
  .main-content {
    height: 100%;
    width: 100%;
    border: 6px solid #215798;
    border-top: 16px solid #215798;
    border-radius: 4px;
    padding: 8px;
    background-color: #2157982e;
  }
</style>