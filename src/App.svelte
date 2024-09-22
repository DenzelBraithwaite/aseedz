<script lang="ts">
  // Hooks
  import { onMount } from 'svelte';

  // Transition
  import { blur } from 'svelte/transition';

  // Modules/Helpers
  import { World } from './lib/helpers/index';

  // Components
  import { Client, Terminal } from './lib/components/index';

  const currentWorld = new World({});
  let terminalVisible = true;

  onMount(() => {
    startGame();
  });

  function startGame(): void {
    currentWorld.startGame();
  }

  function closeTerminal(): void {
    terminalVisible = false;
  }
</script>

<main class="main-content">
  {#if terminalVisible}
      <Terminal on:close={closeTerminal}/>
    {:else}
      <Client />
  {/if}
</main>

<style lang="scss">
  .main-content {
    height: 100vh; // dynamic viewport units not as supported (not at all in firefox)
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
