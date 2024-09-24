<script lang="ts">
  // Transitions
  import { blur } from 'svelte/transition';

  // Pages
  import { PlantPage, PlayerPage, LogPage } from '../../routes/index';

  // Components
  import { Sidebar } from './index';

  let sidebarExpanded = true;
  let currentPage = '';

  // SPA so changes focused component really, same page.
  function changePage(event: {detail: string}): void {
    currentPage = event.detail;
  }
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<div in:blur={{duration: 2000}} class:client-collapsed={!sidebarExpanded} class="client">
  <Sidebar {sidebarExpanded} on:select={changePage} on:toggle-sidebar={() => sidebarExpanded = !sidebarExpanded}/>

  <div class="screen">
    {#if currentPage === 'plant'}
      <PlantPage />
    {:else if currentPage === 'player'}
      <PlayerPage />
    {:else if currentPage === 'log'}
      <LogPage />
      <!-- {:else} -->
      <!-- TODO: default? is this needed? -->
    {/if}

  </div>
</div>

<style lang="scss">
  .client {
    $background: var(--slate-950);
    position: relative;
    height: 100%;
    width: 100%;
    background-color: $background;
    transition: all 0.5s ease-out; // Match this to sidebar transition speed (or don't 😅)

    display: grid;
    grid-template-columns: 400px minmax(70%, 1fr); // fixed for transition... doesn't react to % units
  }

  .screen {
    padding: 24px 40px;
    grid-column: 2 / span 1;
    box-shadow: inset 0 0 12px var(--box-shadow-color);
  }
  
  .client-collapsed {
    grid-template-columns: 100px 1fr;
  }
</style>