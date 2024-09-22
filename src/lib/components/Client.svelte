<script lang="ts">
  // Transitions
  import { blur } from 'svelte/transition';

  // Pages
  import { PlantPage, PlayerPage, LogPage } from '../../routes/index';

  // Components
  import { Item } from './index';

  let sidebarExpanded = true;
  let currentPage = '';
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<div in:blur={{duration: 2000}} class:client-collapsed={!sidebarExpanded} class="client">
  <!-- TODO: move sidebar to dedicated -->
  <div class="sidebar" class:collapsed={!sidebarExpanded}>
    <svg on:click={() => sidebarExpanded = !sidebarExpanded} class:rotate={!sidebarExpanded} class="icon collapse-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M19 15V9"/>
      <path d="M15 15h-3v4l-7-7 7-7v4h3v6z"/>
    </svg>

    <Item on:click={() => currentPage = 'plant'} collapsed={!sidebarExpanded} color={'green'} iconType={'seed'}>
      <span slot="title">Plant</span>
      <span slot="description">Plant and harvest seeds</span>
    </Item>

    <Item on:click={() => currentPage = 'player'} collapsed={!sidebarExpanded} color={'blue'} iconType={'player'}>
      <span slot="title">Player</span>
      <span slot="description">View player stats</span>
    </Item>

    <Item on:click={() => currentPage = 'log'} collapsed={!sidebarExpanded} color={'white'} iconType={'terminal'}>
      <span slot="title">Log</span>
      <span slot="description">View logged messages</span>
    </Item>

    <!-- Template -->
    <Item on:click={() => currentPage = ''} collapsed={!sidebarExpanded}>
      <span slot="title">{'<TEMPLATE>'}</span>
      <span slot="description">{'<template>'}</span>
    </Item>
  </div>

  <div class="screen">
    {#if currentPage === 'plant'}
      <PlantPage />
    {:else if currentPage === 'player'}
      <PlayerPage />
    {:else if currentPage === 'log'}
      <LogPage />
    {/if}
  </div>
</div>

<style lang="scss">
  .client {
    position: relative;
    height: 100vh;
    width: 100vw;
    border: 2px solid #000;

    display: grid;
    grid-template-columns: minmax(200px, 500px) minmax(70%, 1fr);
  }

  .screen {
    padding: 24px 40px;
    grid-column: 2 / span 1;
    box-shadow: inset 0 0 12px var(--box-shadow-color);
    transition: all 0.3s ease-in-out;
  }

  .sidebar {
    width: 100%;
    position: relative;
    z-index: 1;
    grid-column: 1 / span 1;
    background-color: #193026;
    padding: 4px 8px;
    box-shadow: 4px 0 16px var(--box-shadow-color);
    transition: all 0.3s ease-out;

    .icon {
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 1.5;
      stroke: var(--white);
      fill: none;
    }
  }

  .collapse-icon,
  .expand-icon {
    background-color: #193026;
    cursor: pointer;
    height: 42px;
    width: 42px;
    border-radius: 50%;
    position: absolute;
    right: 0px;
    bottom: 40%;
    transform: translateX(80%);
    transition: all 0.3s ease-in-out;
    
    &:hover {
      background-color: #234335;
      scale: 1.05;
    }

    &:active {
      transition: all 0.1s ease-in-out;
      border: 2px solid var(--yellow);
    }
  }

  // Utility
  .collapsed {
    width: 70px;
  }

  .client-collapsed {
    grid-template-columns: 70px 1fr;
    transition: all 0.3s ease-in-out;
  }

  .rotate {
    transform: rotate(180deg);
  }
</style>