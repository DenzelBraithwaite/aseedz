<script lang="ts">
  // Hooks
  import { onMount } from 'svelte';

  // Modules
  import Typed from 'typed.js';

  let typed: Typed;

  onMount(() => {
    typed = new Typed('#page-title', {
      strings: [
        '<i>First</i> sentence.',
        'Second sentence...',
        'Third...',
        'Do you get it now?',
      ],
      typeSpeed: 50,
    });
  })
</script>

<main class="main-content">
  <h1 id="page-title"></h1>
</main>

<style lang="scss">
  .main-content {
    height: 100vh; // dvh not as supported (not at all in firefox)
    width: 100vw;
  }
</style>
