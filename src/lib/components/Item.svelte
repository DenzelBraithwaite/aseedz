<script lang="ts">
  // Transitions
  import { fly, fade } from 'svelte/transition';

  // props
  export let iconType = 'unkown';
  export let color = 'grey';
  export let collapsed = false;
</script>

<div on:click class="item item-color__{color}">
  {#if iconType === 'seed'}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon" class:width-100={collapsed}>
      <path d="M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"/>
      <path d="M5.341 10.62a4 4 0 1 0 5.279-5.28"/>
    </svg>
  {:else if iconType === 'player'}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon" class:width-100={collapsed}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  {:else if iconType === 'terminal'}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon" class:width-100={collapsed}>
      <polyline points="4 17 10 11 4 5"/>
      <line x1="12" x2="20" y1="19" y2="19"/>
    </svg>
  {:else}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon" class:width-100={collapsed}>
      <circle cx="12" cy="12" r="10"/>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
      <path d="M12 17h.01"/>
    </svg>
  {/if}
  
  {#if !collapsed}
    <div class="item-text-wrapper" in:fly>
      <h2 class="item-title"><slot name="title">Title</slot></h2>
      <p class="item-text"><slot name="description">Brief description</slot></p>
    </div>
  {/if}
 </div>

<style lang="scss">
  .item {
    position: relative;
    cursor: pointer;
    background-color: #5f5a5a;
    border-radius: var(--border-radius-small);
    transition: all 0.3s ease-in-out;
    margin-bottom: 4px;

    display: flex;
    align-items: center;
    gap: 8px;

    &:hover {
      scale: 1.05;
      margin: 0.5rem 0;
      transform: translateX(12px);
      box-shadow: 0 6px 12px var(--box-shadow-color);
    }

    &:active {
      transition: all 0.1s ease-in-out;
      border: 2px solid var(--yellow);
    }

    .item-text-wrapper {
      background-color: #111111e9;
      border-radius: var(--border-radius-small);
      padding: 4px;
      width: 100%;
      height: 100%;
      transition: background 0.3s ease-out;
      
      &:hover {
        background-color: #11111191;
      }

      .item-title {
        font-size: 1.4rem;
        margin-bottom: 4px;
      }

      .item-text {
        font-size: 0.9rem;
      }
    }
  }

  .item-color__green {
    border: 2px solid #279821;
    background-color: #279821;
  }

  .item-color__blue {
    border: 2px solid #215798;
    background-color: #215798;
  }

  .item-color__grey {
    border: 2px solid #70756f;
    background-color: #70756f;
  }

  .item-color__white {
    border: 2px solid #ddd;
    background-color: #ddd;
  }

  .icon {
    height: 100%;
    width: 12.5%;
    max-height: 32px; // This is set to show a smoother transition on sidebar collapse (so elems dont grow then shrink)
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2.75;
    stroke: #111;
    fill: none;
  }

  // Utility
  .width-100 {
    width: 100%;
  }
</style>