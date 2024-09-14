<script lang="ts">
  // Hooks
  import { onMount } from 'svelte';

  // Transition
  import { blur } from 'svelte/transition';

  // Modules/Helpers
  import Typed from 'typed.js';
  import { World } from './lib/helpers/index';

  let typed: Typed;

  onMount(() => {
    typed = new Typed('#terminal-text', {
      strings: [
        `Remaining Actions: ${currentWorld.remainingActions}<br>
        Days Passed: ${currentWorld.dayCount}<br>
        Current Day: ${currentWorld.currentDay}<br>
        Day of the year: ${currentWorld.currentDayIndex}<br>
        Current Week: ${currentWorld.currentWeek}<br>
        Current Month: ${currentWorld.currentMonth} Moon<br>
        Month of the Year: ${currentWorld.currentMonthIndex}<br>
        Current Year: ${currentWorld.currentYearIndex} - ${currentWorld.currentYear}<br>
        Current Season: ${currentWorld.currentSeason}<br>
        Press Start to continue...`
      ],
      typeSpeed: 10,
    });
  });

  const currentWorld = new World({});
  let terminalVisible = true;
  console.log(currentWorld);

  function startGame(): void {
    terminalVisible = false;
    setTimeout(() => {
      terminalVisible = true;
      currentWorld.startGame();
    }, 2000)
  }

</script>

<main class="main-content">
  {#if terminalVisible}
    <div transition:blur={{duration: 2000}} class="terminal-screen">
      <p id="terminal-text"></p>
      <button on:click={startGame} class="btn-terminal">Start</button>
    </div>
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

  .terminal-screen {
    position: relative;
    background-color: #121212;
    height: 90%;
    width: 90%;
    border: 2px solid var(--white);
    border-top-width: 24px;
    border-radius: 2px;
    padding: 4px;
    overflow-wrap: break-word;
    transition: all 0.5s ease-out;
  }

  .btn-terminal {
    cursor: pointer;
    outline: none;
    border: 2px solid var(--white);
    color: var(--white);
    background: none;
    font-weight: bold;
    font-size: 2rem;
    padding: 1rem 2rem;
    text-align: center;
    border-radius: 4px;
    transition: all 0.2s ease-out;

    position: absolute;
    bottom: 30px;
    right: 50%;
    transform: translateX(50%);

    &:hover {
      border: 2px solid var(--slate-900);
      color: var(--slate-900);
      background-color: var(--white);
      border-style: double;
      border-width: 4px;
    }
  }

  #terminal-text {
    text-wrap: wrap;
    font-size: 1.5rem;
    width: 100%;
  }
</style>
